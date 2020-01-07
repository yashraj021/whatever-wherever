import React from 'react';
import {RFValue } from "react-native-responsive-fontsize";
import {dimension} from '../../constants/constants';
import SearchBar from '../../components/searchBar/searchBar.component';

import {
    StyleSheet,
    View,
    Text,
    FlatList
  
  } from 'react-native';

  import {storeItems} from '../../data/storeItems';

  const Item = ({value}) => {
    return (
        <View style = {styles.storeWrapper}>
            <View style = {styles.shopIcon}>
            </View>
            <View style = {styles.shopDetails}>
                <Text style = {styles.storeName}>
                    {value.name}
                </Text>
            </View>
        </View>
    );
  }
  

  const Product = (props) => (
        <View style = {styles.pageWrapper}>
            <SearchBar/>
            <FlatList
                data={
                    props.value.type === 'vegetable' ? storeItems.vegetable: storeItems.oil
                }
                renderItem={({item}) => <Item value={item} />}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator = {false}
            />        
        </View>
  );


  const styles = StyleSheet.create({
    pageWrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },
    storeWrapper: {
        height: dimension.height * 0.15,
        minHeight: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    shopIcon: {
        height: dimension.height * 0.10,
        width: dimension.width * 0.20,
        minHeight: 80,
        minWidth: 100,
        backgroundColor: '#f2f2f2',
        marginRight: 10,
        borderRadius: 5
    },

    shopDetails: {
        elevation: 2,
        marginRight: 5,
        height: dimension.height * 0.1,
        width: '70%',
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
    },

    storeName: {
        
        fontSize: RFValue(19,dimension.height),
        fontFamily: 'BarlowSemiCondensed-Medium',
        letterSpacing: 1
    }
  });

  export default Product;