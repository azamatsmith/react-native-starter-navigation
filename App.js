import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import {addNavigationHelpers} from 'react-navigation';
import AppNavigator from './src/navigation';
import reducers from './src/reducers';

class App extends Component {
  render() {
    const {dispatch, nav} = this.props;

    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
        })}
      />
    );
  }
}

const mapStateToProps = ({nav}) => ({nav});

const ConnectedApp = connect(mapStateToProps)(App);

class Main extends Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
  }
}

export default Main;
