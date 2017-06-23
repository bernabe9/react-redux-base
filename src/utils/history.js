import createHistory from 'history/createBrowserHistory';

let instance;

class History {
  constructor() {
    if (!instance) {
      instance = createHistory();
    }
    return instance;
  }
}

export default new History();
