import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainScreen from '../../screens/MainScreen.js';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
};

export default Navigation;