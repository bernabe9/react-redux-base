import HomePage from '../src/containers/HomePage';
import LoginPage from '../src/containers/LoginPage';
import SignUpPage from '../src/containers/SignUpPage';
import NotFoundPage from '../src/containers/NotFoundPage';

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
  },
  {
    component: NotFoundPage
  }
];

export default routes;
