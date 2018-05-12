import * as React from 'react';
import { withRouter, Route, Redirect, Switch, RouteComponentProps, BrowserRouter as Router } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import LoadingComponent from '../Loading';
// import PrivateRoute from '../common/PrivateRoute';

interface Props extends RouteComponentProps<any>, React.Props<any> {
  // store: any;
}

const getAsyncComponent = (entry: any, store: any = false) => {
  return Loadable({
    loader: entry,
    loading: LoadingComponent,
    delay: 200, // 200ms
    timeout: 10000 // 10s
  });
};

class AppComponent extends React.Component<Props, {}> {

  render() {

    return (
      <div>
        <Switch>
          <Route exact={true} path="/"><Redirect to={{ pathname: '/home' }} /></Route>
          <Route key="home" path="/home" component={getAsyncComponent(() => import('./Home/index'))} />
          {/* <PrivateRoute key="welcome" path="/welcome" component={getAsyncComponent(() => import('./Welcome'))} /> */}
          <Route key="not-found" path="*" component={getAsyncComponent(() => import('../NotFound'))} />
        </Switch>
      </div>
    );
  }
}

const WithRouterApp = withRouter(AppComponent);

const App = () => (
  <Router basename={process.env.PUBLIC_URL}><WithRouterApp /></Router>
);

export default App;
