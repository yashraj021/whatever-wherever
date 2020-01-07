import React from 'react';
import {dimension} from '../../constants/constants';
import { Navigation} from 'react-native-navigation';
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

  const productPage = (props, value) => {
    Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: 'ww.Products',
              passProps: {
                value
              }
            }
          }]
        }
      });
  }

  const categoryItems = (props) => {
      return category.map(value => {
        return (
            <TouchableOpacity key = {value.id} style = {styles.category} onPress = {() => productPage(props, value)}>
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

const Category = (props) => (
    <ScrollView 
        contentContainerStyle = {styles.categoryWrapper}
        showsVerticalScrollIndicator = {false}
    >
        {
            categoryItems(props)
        }
        <View style = {styles.trending}>

        </View>   
    </ScrollView>
);

const styles = StyleSheet.create({

    categoryWrapper: {
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        paddingBottom: 20
    },

    category: {
        elevation: 10,
        height: dimension.height * 0.18,
        width: dimension.height * 0.18,
        maxHeight: 150,
        maxWidth: 150,
        minHeight: 110,
        minWidth: 110,
        backgroundColor: '#f2f2f2',
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 4,
        overflow: 'hidden'
    },

    trending: {
        
        width: '100%',
        height: dimension.height * 0.25,
        backgroundColor: '#f2f2f2',
        marginTop: 30,
    },

    productName: {
        backgroundColor: 'black'
    }
});

export default Category;