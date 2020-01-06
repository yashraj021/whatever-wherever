import React from 'react';
import {dimension} from '../../constants/constants';
import {category} from '../../data/category';
import {
    StyleSheet,
    View,
    BackHandler,
    ScrollView,
    Text,
    TouchableOpacity,
    ImageBackground
  
  } from 'react-native';

  const categoryItems = () => {
      return category.map(value => {
        return (
            <TouchableOpacity key = {Math.random()} style = {styles.category}>
                <ImageBackground source={value.Icon} style={{width: '100%', height: '100%', flexDirection: 'column-reverse', borderRadius: 10}}>
                    <View style = {styles.productName}>
                        <Text style = {{color: 'white', textAlign: 'center'}}>
                            {value.name}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
    )})
  };

const Category = () => (
    
    <ScrollView contentContainerStyle = {styles.categoryWrapper}>
        {/* <View style = {styles.storeWrapper}>
            <View style = {styles.shopIcon}>

            </View>
            <View style = {styles.shopDetails}>

            </View>
        </View> */}
        {
            categoryItems()
        }
        
        
        <View style = {styles.trending}>

        </View>

        
    </ScrollView>
);

const styles = StyleSheet.create({

    categoryWrapper: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        paddingBottom: 20
    },

    category: {
        height: dimension.height * 0.18,
        width: dimension.height * 0.18,
        maxHeight: 150,
        maxWidth: 150,
        minHeight: 110,
        minWidth: 110,
        backgroundColor: '#f2f2f2',
        marginRight: 10,
        marginTop: 10,
        borderRadius: 4,
        overflow: 'hidden'
    },

    trending: {
        width: '100%',
        height: dimension.height * 0.2,
        backgroundColor: '#f2f2f2',
        marginTop: 10,
    },

    productName: {
        backgroundColor: 'black'
    }

    // storeWrapper: {
    //     height: 100,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center'
    // },

    // shopIcon: {
    //     flex: 2,
    //     height: 80,
    //     width: 80,
    //     backgroundColor: 'red',
    //     marginRight: 10
    // },

    // shopDetails: {
    //     flex: 5,
    //     height: '80%',
    //     width: '100%',
    //     backgroundColor: 'green'
    // }

});

export default Category;