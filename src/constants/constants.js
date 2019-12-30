import {Dimensions, StatusBar} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const sHeight = StatusBar.currentHeight;
export const dimension = {
   width: window.width,
   height: window.height,
   sHeight: sHeight
   
}

export const dimensionScreen = {
   width: screen.width,
   height: screen.height
}