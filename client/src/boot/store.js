import React, {Component} from 'react';
import configStore from './configStore';
import {Provider} from 'react-redux';
import App from '../App';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store:configStore()
    }
  }

  render() {
    return (
          <Provider store={this.state.store}>
            <App/>
          </Provider>
    );
  }
}

export default Store;