import fetch from 'isomorphic-fetch';
import { sessionService } from 'redux-react-session';
import humps from 'humps';

const saveSessionHeaders = (headers) => {
  if (headers.get('access-token')) {
    const sessionHeaders = {
      token: headers.get('access-token'),
      uid: headers.get('uid'),
      client: headers.get('client')
    };
    sessionService.saveSession(sessionHeaders);
  }
};

const handleErrors = response =>
  new Promise((resolve, reject) => {
    if (!response) {
      reject(new Error({ message: 'No response returned from fetch' }));
      return;
    }

    saveSessionHeaders(response.headers);
    if (response.ok) {
      resolve(response);
      return;
    }

    sessionService.loadSession()
      .then(() => {
        if (response.status === 401) {
          sessionService.deleteSession();
          window.location = '/login';
        }
      }).catch(() => {});

    response.json()
      .then((json) => {
        const error = json || { message: response.statusText };
        reject(error);
      }).catch(() => reject(new Error({ message: 'Response not JSON' })));
  });

const getResponseBody = (response) => {
  const bodyIsEmpty = response.status === 204;
  if (bodyIsEmpty) {
    return Promise.resolve();
  }
  return response.json();
};

class Api {
  static performRequest(uri, apiUrl, requestData = {}) {
    const url = `${apiUrl}${uri}`;
    return new Promise((resolve, reject) => {
      fetch(url, requestData)
        .then(handleErrors)
        .then(getResponseBody)
        .then(response => resolve(humps.camelizeKeys(response)))
        .catch(error => reject(humps.camelizeKeys(error)));
    });
  }

  static getTokenHeader() {
    return new Promise((resolve, reject) => {
      sessionService.loadSession()
        .then((session) => {
          const headers = {};
          const { token, client, uid } = session;
          headers['access-token'] = token;
          headers.client = client;
          headers.uid = uid;
          resolve(headers);
        }).catch(() => reject());
    });
  }

  static get(uri, apiUrl = process.env.API_URL) {
    const requestData = {
      method: 'get',
      headers: {
        accept: 'application/json'
      }
    };
    return Api.getTokenHeader()
      .then((headers) => {
        requestData.headers = { ...requestData.headers, ...headers };
        return Api.performRequest(uri, apiUrl, requestData);
      }).catch(() => Api.performRequest(uri, apiUrl, requestData));
  }

  static post(uri, data, apiUrl = process.env.API_URL) {
    const decamelizeData = humps.decamelizeKeys(data);
    const requestData = {
      method: 'post',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(decamelizeData)
    };
    return Api.getTokenHeader()
      .then((headers) => {
        requestData.headers = { ...requestData.headers, ...headers };
        return Api.performRequest(uri, apiUrl, requestData);
      }).catch(() => Api.performRequest(uri, apiUrl, requestData));
  }

  static delete(uri, data, apiUrl = process.env.API_URL) {
    const decamelizeData = humps.decamelizeKeys(data);
    const requestData = {
      method: 'delete',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(decamelizeData)
    };
    return Api.getTokenHeader()
      .then((headers) => {
        requestData.headers = { ...requestData.headers, ...headers };
        return Api.performRequest(uri, apiUrl, requestData);
      }).catch(() => Api.performRequest(uri, apiUrl, requestData));
  }

  static put(uri, data, apiUrl = process.env.API_URL) {
    const decamelizeData = humps.decamelizeKeys(data);
    const requestData = {
      method: 'put',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(decamelizeData)
    };
    return Api.getTokenHeader()
      .then((headers) => {
        requestData.headers = { ...requestData.headers, ...headers };
        return Api.performRequest(uri, apiUrl, requestData);
      }).catch(() => Api.performRequest(uri, apiUrl, requestData));
  }

  static patch(uri, data, apiUrl = process.env.API_URL) {
    const decamelizeData = humps.decamelizeKeys(data);
    const requestData = {
      method: 'patch',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(decamelizeData)
    };
    return Api.getTokenHeader()
      .then((headers) => {
        requestData.headers = { ...requestData.headers, ...headers };
        return Api.performRequest(uri, apiUrl, requestData);
      }).catch(() => Api.performRequest(uri, apiUrl, requestData));
  }
}

export default Api;
