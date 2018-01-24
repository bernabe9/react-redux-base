import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import PlayersPage from './containers/PlayersPage';
import NotFoundPage from './containers/NotFoundPage';

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
    path: '/players',
    component: PlayersPage
  },
  {
    component: NotFoundPage
  }
];

export default routes;
