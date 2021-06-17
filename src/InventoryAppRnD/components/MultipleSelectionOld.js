import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function MultipleSelection() {
    const [BrandsModalVisibility, setBrandsModalVisibility] = useState(false);
    const ArrayData = [
        {name: 'HP', selected : false},
        {name: 'Dell', selected : false},
        {name: 'Asus', selected : false},
        {name: 'Lenovo', selected : false},
        {name: 'Acer', selected : false},
        {name: 'LG', selected : false},
        {name: 'Microsoft', selected : false},
        {name: 'AMD', selected : false},
        {name: 'NVidia', selected : false},
        {name: 'Intel', selected : false},
    ];

    const [Brands, setBrands] = useState(ArrayData);
    return (
        <View style={{flex:1}}>
            <View style={{margin:'5%',flexDirection:'row',alignItems:'center'}}>
                <Text >Brands </Text>
                <TouchableOpacity onPress={() => {setBrandsModalVisibility(true)}}>
                    <Text style={{fontWeight:'bold',fontSize:16}}>Add New</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={BrandsModalVisibility}>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={() => {setBrandsModalVisibility(false)}}>
                        <Text style={{fontWeight:'bold',fontSize:20}}>Close</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={Brands}
                        keyExtractor = {(item)=> item.name}
                        renderItem={({item, index})=>{
                            return(
                                <View style={{
                                    flexDirection:'row',
                                    marginVertical:'1%',
                                    marginHorizontal:'5%',
                                    backgroundColor:'#efefef',
                                    height:60,
                                    borderRadius:5,
                                    alignItems:'center',
                                    paddingHorizontal:'8%',
                                    justifyContent:'space-between',
                                }}>
                                    <Text>{item.name}</Text>
                                    <CheckBox
                                        disabled={false}
                                        value={item.selected}
                                        onValueChange={(value) => {console.log(value); setBrands((previousArr)=>{
                                            previousArr[index] = {name: item.name, selected : value};
                                            console.log(previousArr);
                                            return previousArr;
                                        })}}
                                    />
                                </View>
                            );
                        }}
                    />
                </View>
            </Modal>
        </View>
    )
}
