import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

// routes config
import { publicRoutes, privateRoutes } from '../../routes';
import Loader from '../../components/Loader/Loader';
import { USER_TYPE } from '../../utils/constants';
import { getCookie } from '../../utils/helper';

class DefaultLayout extends Component {

  loading = () => <Loader />

  signOut(e) {
    e.preventDefault()
    // this.props.history.push('/login')
  }

  render() {
    const userType = getCookie(USER_TYPE);
    let routes = publicRoutes

    if (userType === 'admin') {
      routes = [...publicRoutes, ...privateRoutes]
    }
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes && routes.map((route, idx) => {
                    if (route.component) {
                      return (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                            <route.component {...props} />
                          )} />
                      )
                    } else {
                      return (null)
                    };
                  })}
                  <Redirect from="/" exact={true} to="/home" />
                  <Redirect from="/" to="/404" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
