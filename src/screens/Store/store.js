import React from 'react';
import {Navigation} from 'react-native-navigation';
import BannerView from '../../components/PromotionBanners/promotionBanner.component';
import {dimension} from '../../constants/constants';

import Category from '../../components/Category/category.component';


import {
  StyleSheet,
  View,
  BackHandler,
  ScrollView,
  Text,
  TouchableOpacity

} from 'react-native';


const Store = (props) => {
    
        // BackHandler.addEventListener('hardwareBackPress',() => {
            
        //     return true;
        // })

        return( 
            <View style = {styles.parentScreen}>
                <View style = {styles.header}>
                </View>
                <BannerView/>
                <View style = {styles.stores}>
                    <View style = {{justifyContent: 'center'}}>
                        <Text style = {{fontSize: 16, justifyContent: 'center',marginBottom: 10}}>
                            Categories
                        </Text>
                    </View>
                    <Category {...props}/>
                </View>
            </View>
            )
    
};

const styles = StyleSheet.create({
    parentScreen: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
    },
    
    header: {
        height: 50,
        width: '100%',
        
    },

    stores: {
        flex: 2,
        paddingLeft: 20,
        paddingRight: 20
    },
})

export default Store;