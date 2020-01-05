import { Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/auth';
import { Provider } from 'react-redux'; 
import store from './src/redux/store';
import React from 'react'

Navigation.registerComponent('ww.AuthScreen', () => (props) => (
  <Provider store={store}>
    <AuthScreen />
  </Provider>
), () => AuthScreen);

Navigation.setDefaultOptions({
  topBar: {
    visible: false
  }
});

Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'ww.AuthScreen',
          passProps: {
            text: 'stack with one child'
          }
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'Welcome screen'
          }
        }
      }
    }
  }
});