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
    
        

        return( 
            <View style = {styles.parentScreen}>
                <View style = {styles.header}>
                </View>
                <BannerView/>
                <View style = {styles.stores}>
                    <View style = {{justifyContent: 'center'}}>
                        <Text style = {{fontSize: 16, justifyContent: 'center'}}>
                            Categories
                        </Text>
                    </View>
                    <Category/>
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
        height: 55,
        width: '100%',
        backgroundColor: 'red'
    },

    stores: {
        flex: 3,
        paddingLeft: 20,
        paddingRight: 20
    },
})

export default Store;