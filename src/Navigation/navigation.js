import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux'; 
import store from '../redux/store';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import Store from '../screens/Store/store';

const iconColor = "#444";
const selectedIconColor = "#0089da";



export const goToTabs = () => {

  Promise.all([Icon.getImageSource('shop', 50, 'black').then(source => source)]).then(
    source => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            drawBehind: true,
            animate: true,
            // create a bottom tabs navigation
    
            children: [
              {
                component: {
                  name: "ww.Store",
                  options: {
                    bottomTab: {
                      fontSize: 11,
                      text: "Shop",
                      icon: source[0],
                      
                    }
                  }
    
                  // pass the username as a navigation prop to the Home screen
                },
                
              },
              {
                component: {
                  name: "ww.Store",
                  options: {
                    bottomTab: {
                      fontSize: 11,
                      text: "Shop",
                      icon: source[0],
                      
                    }
                  }
    
                  // pass the username as a navigation prop to the Home screen
                },
                
              }
            ]
          }
        }
      });
    }
  )
  
  };