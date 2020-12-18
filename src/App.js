import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import DefaultLayout from './containers/DefaultLayout';
import CustomBackDrop from './components/CustomBackDrop';
import store from './redux/store';

import "react-toastify/dist/ReactToastify.css";
import './App.scss';

const loading = () => <CustomBackDrop open={true} />

const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props => <Component {...props} />}
    />
  );
};
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
              <PrivateRoute path="/" component={DefaultLayout} />
            </Switch>
          </React.Suspense>
        </Router>
      </Provider>
    );
  }
}

export default App;
