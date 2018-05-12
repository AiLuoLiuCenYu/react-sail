import * as React from 'react';
// import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import fetchUser from './api';
import { loadData } from './actions';
import styles from './style.less';
import injectAsyncReducer from '../../store/injectAsyncReducer';
import store from '../../store/index';

interface User {
  id: string | number;
  name: string;
}

interface Props {
  loadData: Function;
}

class HomeComponent extends React.Component<Props, {}> {

  user: User;

  queryUser = async () => {
    this.user = await fetchUser.query();
  }

  componentWillMount() {
    // injectAsyncReducer(store, 'home', require('./reducers').default);
  }

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const name = this.user && this.user.name || 'no user';

    return (
      <div>
        <h1 className={styles.title}>{name}</h1>
        <div onClick={this.queryUser}>获取user</div>
      </div>
    );
  }

}

const mapStateToProps = (state: any) => (
  {
    x: state
  }
);
const mapDispatchToProps = (dispatch: any) => (
  {
    loadData: () => { dispatch(loadData()); }
  }
);

injectAsyncReducer(store, 'home', require('./reducers').default);

export default connect<{}, {}, Props>(mapStateToProps, mapDispatchToProps)(HomeComponent); 
