import React from 'react';
import {dimension} from '../../constants/constants';

import {
  StyleSheet,
  View,
  Text,
  Image,
  BackHandler,
  ScrollView

} from 'react-native';

// Promise.all will be used to dynamically render the banner posters later.

const BannerView = () => (

    <View style = {{flex: 1}}>
        <ScrollView 
            contentContainerStyle = {styles.promotionsWrapper} 
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            
        >
            <View style = {styles.promotion}>
                <Image
                    style={styles.banner}
                    source={require('../../../assets/sale1.jpg')}
                />
            </View>
            <View style = {styles.promotion}>
            <Image
                    style={styles.banner}
                    source={require('../../../assets/sale2.jpg')}
                />
            </View>
            <View style = {styles.promotion}>
            <Image
                    style={styles.banner}
                    source={require('../../../assets/sale3.jpg')}
                    resizeMode = 'cover'
                />
            </View>
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    promotionsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 10
    },

    promotion: {
        height: dimension.height * 0.15,
        width: dimension.width * 0.55,
        marginRight: 10
    },

    banner: {
        height: '100%',
        width: '100%',
        borderRadius: 5
    }

});

export default BannerView;