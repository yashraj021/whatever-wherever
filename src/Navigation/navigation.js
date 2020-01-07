import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux'; 
import Icon from 'react-native-vector-icons/Entypo';

export const goToTabs = () => {

  Promise.all([Icon.getImageSource('shop', 50, 'black'),
  Icon.getImageSource('flash', 50, 'black'),
  Icon.getImageSource('shopping-cart', 50, 'black'),
  Icon.getImageSource('user', 50, 'black'),
  Icon.getImageSource('shop', 50, 'red'),
  Icon.getImageSource('flash', 50, 'blue'),
  Icon.getImageSource('shopping-cart', 50, 'green'),
  Icon.getImageSource('user', 50, 'purple')
  .then(source => source)]).then(
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
                      selectedIcon: source[4]
                      
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
                      text: "Sale",
                      icon: source[1],
                      selectedIcon: source[5]
                      
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
                      text: "Cart",
                      icon: source[2],
                      selectedIcon: source[6]
                      
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
                      text: "Profile",
                      icon: source[3],
                      selectedIcon: source[7]
                      
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