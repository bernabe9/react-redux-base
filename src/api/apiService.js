import fetch from 'isomorphic-fetch';
import * as session from '../services/sessionService';
import { browserHistory } from 'react-router';

const handleErrors = (response) =>
  new Promise((resolve, reject) => {
    if (!response) {
      reject({ message: 'No response returned from fetch' });
      return;
    }

    if (response.ok) {
      resolve(response);
      return;
    }

    if (response.status === 401) {
      if (session.isLogged()) {
        session.deleteSession();
        browserHistory.replace('/login');
      }
    }

    response.json()
      .then(json => {
        const error = json || { message: response.statusText };
        reject(error);
      }).catch(() => reject({ message: 'Response not JSON' }));
    }
  );

const getResponseBody = (response) => {
  const bodyIsEmpty = response.status === 204;
  if (bodyIsEmpty) {
    return Promise.resolve();
  }
  return response.json();
};

class Api {

  performRequest(uri, requestData = {}) {
    return new Promise((resolve, reject) => {
      fetch(uri, requestData)
        .then(handleErrors)
        .then(getResponseBody)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  addTokenHeader() {
    const currentSession = session.loadSession();
    return session.isLogged() ? { 'X-USER-TOKEN': currentSession.token } : {};
  }

  get(uri) {
    let requestData = {
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
    };
    requestData.headers = Object.assign({}, requestData.headers, this.addTokenHeader());
    return this.performRequest(uri, requestData);
  }

  post(uri, data) {
    let requestData = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    requestData.headers = Object.assign({}, requestData.headers, this.addTokenHeader());
    return this.performRequest(uri, requestData);
  }

  delete(uri, data) {
    let requestData = {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    requestData.headers = Object.assign({}, requestData.headers, this.addTokenHeader());
    return this.performRequest(uri, requestData);
  }

  put(uri, data) {
    let requestData = {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    requestData.headers = Object.assign({}, requestData.headers, this.addTokenHeader());
    return this.performRequest(uri, requestData);
  }

  patch(uri, data) {
    let requestData = {
      method: 'patch',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    requestData.headers = Object.assign({}, requestData.headers, this.addTokenHeader());
    return this.performRequest(uri, requestData);
  }
}

export default new Api();
