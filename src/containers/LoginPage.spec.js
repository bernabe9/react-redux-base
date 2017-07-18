import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from './LoginPage';
import LoginForm from '../components/session/LoginForm';

describe('<LoginPage />', () => {
  it('should contain <LoginForm />', () => {
    const login = () => {};
    const wrapper = shallow(<LoginPage login={login} authenticated={false} />);

    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });
});
