import React from 'react';
import {RFValue } from "react-native-responsive-fontsize";
import {dimension} from '../../constants/constants';
import SearchBar from '../../components/SearchBar/searchBar.component';
import t from 'typy';

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity
  
  } from 'react-native';

import {storeItems} from '../../data/storeItems';

const Item = ({value}) => {
return (
    <View style = {styles.storeWrapper}>
        <View style = {styles.shopIcon}>
        </View>
        <TouchableOpacity style = {styles.shopDetails}>
            <Text style = {styles.storeName}>
                {value.name}
            </Text>
        </TouchableOpacity>
    </View>
)}


class Product extends React.PureComponent {

    state = {
        data: t(storeItems, this.props.value.type).safeObject,
        searchfield: '',
       
    }

    searchHandler = (text) => {
        this.setState({
            searchfield: text
        })
    }
    
    filteredData = () => this.state.data.filter(data => {
        return data.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
        

    render() {

        return(
            <View style = {styles.pageWrapper}>
                <SearchBar inputHandler = {(text) => this.searchHandler(text)} />
                <FlatList
                    data={
                        this.filteredData()
                    }
                    renderItem={({item}) => <Item value={item} />}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator = {false}
                />        
            </View>
        );
    }
}
    


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