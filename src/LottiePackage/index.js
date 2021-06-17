import React,{ useRef, useEffect } from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native';

export default function index() {
    const animation = useRef(null);
    useEffect(() => {
        animation.current.play(0,141);
    })

    return (
        <View>
            <LottieView 
                ref = {animation}
                style={{height:300,width:300}}
                source={require('../../assets/lottieAnimation/296-react-logo.json')}
                autoPlay={true}
                loop={false}
                />
        </View>
    )
}
