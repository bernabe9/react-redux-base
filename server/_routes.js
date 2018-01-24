import HomePage from '../src/containers/HomePage';
import LoginPage from '../src/containers/LoginPage';
import SignUpPage from '../src/containers/SignUpPage';
import PlayersPage from '../src/containers/PlayersPage';
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
    path: '/players',
    component: PlayersPage
  },
  {
    component: NotFoundPage
  }
];

export default routes;
