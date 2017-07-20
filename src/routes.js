import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';

const routes = [
  { path: '/',
    component: HomePage,
    exact: true,
    private: true
  },
  { path: '/login',
    component: LoginPage
  },
  {
    path: '/sign-up',
    component: SignUpPage
  }
];

export default routes;
