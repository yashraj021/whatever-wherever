import {Dimensions} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export const dimension = {
   width: window.width,
   height: window.height,
   
}

export const dimensionScreen = {
   width: screen.width,
   height: screen.height
}