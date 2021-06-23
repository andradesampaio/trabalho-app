import React from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView } from 'react-native'
import InputTextField from '../../components/InputTextField';
import styles from './styles';
import * as actions from './actions';
import { useNavigation } from '@react-navigation/core';

export default function RegisterScreen() {
    const navigation = useNavigation();

    const [name, setUser] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [age, setAge] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function handleSaveCustomer() {

        const result = await actions.saveCustomer(name, parseInt(age), address, email, password);

        if (result) {
            Alert.alert('OK', 'Cadastro efetuado sucesso');
            openLoginScreen();
        }
    }

    function openLoginScreen(): void {
        navigation.navigate(
            'LoginScreen'
        );
    }

    return (

        <ScrollView >
        <KeyboardAvoidingView style={styles.scrolContainer} behavior="position" enabled>

        <View style={styles.container}>
            <InputTextField label="Name:" value={name} onChange={setUser} />
            <InputTextField label="Email:" value={email} onChange={setEmail} />
            <InputTextField label="Idade:" value={age} onChange={setAge} />
            <InputTextField label="Endereço:" value={address} onChange={setAddress} />
            <InputTextField label="Senha:" value={password} isPassword={true} onChange={setPassword} />

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSaveCustomer} >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={openLoginScreen} >
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
  

    );
}
