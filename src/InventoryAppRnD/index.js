import React, {useRef, useState, useEffect } from 'react'
import { View, TextInput, TouchableWithoutFeedback, Text, Keyboard, TouchableOpacity } from 'react-native'

export default function Index({navigation}) {
    const [randomNum, setrandomNumber] = useState(Math.floor(1000 + Math.random() * 9000));
    const [ShowPassword, setShowPassword] = useState(false);
    const [input, setInput] = useState([]);
    const refForInput1 = useRef(null);
    const randomNumber = randomNum.toString().split("");
    
    const checkPassword = () => {
        if(randomNum.toString() === input.toString()){
            navigation.navigate('MultipleSelection');
        }else{
            alert("Wrong Password");
        }
    }
    return (
        <View style={{flex:1,alignItems:'center'}}>
            <View style={{flexDirection:'row',paddingHorizontal:'10%', justifyContent:'space-between',top:'20%',width:'100%'}}>
                <View style={{height: 60,width:60, borderColor:'black', borderRadius:5, borderWidth:3, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30}}>{randomNumber[0] ? randomNumber[0] : null}</Text>
                </View>
                <View style={{height: 60,width:60, borderColor:'black', borderRadius:5, borderWidth:3, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30}}>{randomNumber[1] ? randomNumber[1] : null}</Text>
                </View>
                <View style={{height: 60,width:60, borderColor:'black', borderRadius:5, borderWidth:3, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30}}>{randomNumber[2] ? randomNumber[2] : null}</Text>
                </View>
                <View style={{height: 60,width:60, borderColor:'black', borderRadius:5, borderWidth:3, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:30}}>{randomNumber[3] ? randomNumber[3] : null}</Text>
                </View>
            </View>
            <TouchableWithoutFeedback style={{width:'100%'}} onPress={()=>{Keyboard.dismiss(); refForInput1.current.focus()}}>
                <View style={{top:'25%',flexDirection:'row',paddingLeft:'1.7%',paddingRight:'10%', justifyContent:'space-between',width:'100%'}}>
                    <TextInput
                        ref={refForInput1}
                        keyboardType="number-pad"
                        maxLength={4}
                        style={{height:0,width:0}}
                        onChangeText={(text) => {
                            setInput(text);
                        }}
                        onSubmitEditing={checkPassword}
                    />
                    <View style={{height: 60,width:60, borderColor:'black', borderRadius:5, borderWidth:3, justifyContent:'center', alignItems:'center'}}>
                        {input[0] ? ShowPassword ? <Text style={{fontSize:30}}>{input[0]}</Text> : 
                            <View style={{backgroundColor:'black',height:18,width:18,borderRadius:9}}></View> 
                        : null}
                    </View>
                    <View style={{height: 60,width:60, borderColor:'black', borderRadius:5, borderWidth:3, justifyContent:'center', alignItems:'center'}}>
                        {input[1] ? ShowPassword ? <Text style={{fontSize:30}}>{input[1]}</Text> : 
                            <View style={{backgroundColor:'black',height:18,width:18,borderRadius:9}}></View> 
                        : null}
                    </View>
                    <View style={{height: 60,width:60, borderColor:'black', borderRadius:5, borderWidth:3, justifyContent:'center', alignItems:'center'}}>
                        {input[2] ? ShowPassword ? <Text style={{fontSize:30}}>{input[2]}</Text> : 
                            <View style={{backgroundColor:'black',height:18,width:18,borderRadius:9}}></View> 
                        : null}
                    </View>
                    <View style={{height: 60,width:60, borderColor:'black', borderRadius:5, borderWidth:3, justifyContent:'center', alignItems:'center'}}>
                        {input[3] ? ShowPassword ? <Text style={{fontSize:30}}>{input[3]}</Text> : 
                            <View style={{backgroundColor:'black',height:18,width:18,borderRadius:9}}></View> 
                        : null}
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity style={{top:'25%'}} onPress={()=>{
                if(ShowPassword){
                    setShowPassword(false);
                }else{
                    setShowPassword(true);
                }
            }}>
                <Text>{ShowPassword ? "Hide" : "Show"} Password</Text>
            </TouchableOpacity>
        </View>
    )
}
