import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// ----------------------------------- For Lottie Package --------------------------------------------
import HomeScreen from './src/LottiePackage/index';

// ------------------------------------For Inventory App ----------------------------------------------
// import HomeScreen from './src/InventoryAppRnD/index';
// import MultipleSelection from './src/InventoryAppRnD/components/MultipleSelection';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* --------------------------------For Lottie Package ------------------------------------------*/}
        <Stack.Screen name="Home" component={HomeScreen} />


        {/* --------------------------------For Inventory App ----------------------------------------*/}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="MultipleSelection" component={MultipleSelection} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;