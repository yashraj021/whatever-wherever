import { Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/auth';
import { Provider } from 'react-redux'; 
import store from './src/redux/store';
import React from 'react';
import Store from './src/screens/Store/store';

Navigation.registerComponent('ww.AuthScreen', () => (props) => (
  <Provider store={store}>
    <AuthScreen {...props} />
  </Provider>
), () => AuthScreen);

Navigation.registerComponent('ww.Store', () => (props) => (
  <Provider store={store}>
    <Store {...props}/>
  </Provider>
), () => Store);



Navigation.setDefaultOptions({
  topBar: {
    visible: false
  }
});

Navigation.events().registerAppLaunchedListener(() => {
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
  })
  
})

