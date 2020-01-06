import React from 'react';
import {
    StyleSheet,
    View,
    BackHandler,
    ScrollView,
    Text,
    TouchableOpacity,
    FlatList
  
  } from 'react-native';

  import {storeItems} from '../../data/storeItems';

  const Item = (value) => {
    return (
        <View style = {styles.storeWrapper}>
            <View style = {styles.shopIcon}>

            </View>
            <View style = {styles.shopDetails}>

            </View>
        </View>
    );
  }
  

  const Product = (props) => (
      <View style = {styles.pageWrapper}>
        <FlatList
        data={storeItems.vegetable}
        renderItem={({item}) => <Item value={item} />}
        keyExtractor={item => item.id}
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
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    shopIcon: {
        height: 100,
        width: 100,
        backgroundColor: '#f2f2f2',
        marginRight: 10
    },

    shopDetails: {
        flex: 5,
        height: '80%',
        width: '100%',
        backgroundColor: '#f2f2f2'
    }
  });

  export default Product;