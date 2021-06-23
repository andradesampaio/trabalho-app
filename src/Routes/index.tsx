import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';
import ProductScreen from '../pages/ProductScreen';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false,}} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{title: 'Cadastro Cliente',}} />
                <Stack.Screen name="ProductScreen" component={ProductScreen} options={{title: 'Lista de Produtos',}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
