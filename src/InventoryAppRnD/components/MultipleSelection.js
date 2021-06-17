import React, { useState }  from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {widthPercentageToDP as wp2dp, heightPercentageToDP as hp2dp} from 'react-native-responsive-screen';
import { Chip } from 'react-native-paper';
import MI from 'react-native-vector-icons/MaterialIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';

export default function MultipleSelection() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'Lychee', value: 'lychee'},
        {label: 'Coconut', value: 'coconut'},
        {label: 'Figs', value: 'figs'},
        {label: 'Grapes', value: 'grapes'},
        {label: 'Guava', value: 'guava'},
        {label: 'Kiwi', value: 'kiwi'},
        {label: 'Mango ', value: 'mango'},
        {label: 'Mulberry', value: 'mulberry'}
    ]);
    DropDownPicker.setListMode('MODAL');

    return (
      <View>
        <View style={{flexDirection:'row', alignItems:'center',marginLeft:'2%'}}>  
            <Text style={{fontWeight:'bold'}}>Fruits </Text>
            <TouchableOpacity onPress={()=>{setOpen(true)}}>
              <Text style={{ fontSize:30 }}> +</Text>
            </TouchableOpacity>
            <DropDownPicker
                style={{
                    height:50,
                    width:100,
                    borderColor:'transparent',
                    backgroundColor:'transparent'
                  }}
                containerStyle={{
                    height:50,
                    width:50
                }}
                labelStyle={{
                  height:0,
                  width:0,
                  color:'transparent'
                }}
                searchContainerStyle={{
                  borderBottomColor: 'transparent'
                }}
                CloseIconComponent={() => (<MI
                  name="cancel"
                  size={40}
                  color="#afafaf"
                />)}
                modalContentContainerStyle={{
                  backgroundColor: "#f0ecec"
                }}
                badgeTextStyle={{
                  color:'transparent',
                }}
                showArrowIcon={false}
                TickIconComponent={() => (<MI
                    name="check-circle"
                    size={30}
                    color="#20A3E4"
                  />)}
                multiple={true}
                open={open}
                value={value}
                labelProps={{
                    numberOfLines: 0,
                  }}
                items={items}
                placeholder=""
                listItemContainerStyle={{
                  paddingHorizontal:wp2dp(5),
                  marginTop:hp2dp(0.45),
                  marginHorizontal:wp2dp(5),
                  height:hp2dp(8),
                  borderRadius:5,
                  backgroundColor:'#fff'
                }}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            
        </View>
        <FlatList
        data={value}
        keyExtractor={(item) => item.userId}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
        renderItem={({item}) => {
          const chipdata = items.find((obj)=>{return obj.value === item});
          return(
              <Chip
              style={{
              marginHorizontal: 5,
              marginTop: 10,
              backgroundColor: '#20A3E4',
              }}
              onClose={()=>{
              const filtered = value.filter(function(val){ 
                  return val !== item;
              });
              setValue(filtered);
              }}
          >
              <Text style={{color: '#fff'}}>
                  {chipdata.label}
              </Text>
          </Chip>
          );
        }}
      />
      </View>
    );
}
