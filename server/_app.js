import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      previousLocation: null,
    };
  }

  render() {
    const { previousLocation } = this.state;
    const { location, history, match } = this.props;

    return (
      <Switch>
        {this.props.routes.map((r, i) => (
          <Route
            key={`route--${i}`}
            path={r.path}
            exact={r.exact}
            location={previousLocation || location}
            render={() =>
              React.createElement(r.component, {
                history,
                location: previousLocation || location,
                match
              })
            }
          />
        ))}
      </Switch>
    );
  }
}

export default withRouter(App);
