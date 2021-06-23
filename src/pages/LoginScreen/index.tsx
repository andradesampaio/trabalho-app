import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import InputTextField from '../../components/InputTextField';
import styles from './styles';
import * as actions from './actions';
import { useNavigation } from '@react-navigation/core';
import Logo from '../../components/Logo';


export default function LoginScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function handleLogin() {
        const  result = await actions.login(email, password);

        if (result) {
            openProductScreen();
        }
    }


function openRegisterScreen(): void {
    navigation.navigate(
        'RegisterScreen'
    );
}

function openProductScreen(): void {
    navigation.navigate(
        'ProductScreen'
    );
}

return (
    <View style={styles.container}>
        <Logo />
        <InputTextField label="Email:" value={email} onChange={setEmail} />
        <InputTextField label="Senha:" value={password} isPassword={true} onChange={setPassword} />
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin} >
                <Text style={styles.buttonText} >Logar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={openRegisterScreen} >
                <Text style={styles.buttonText}>Criar Cadastro</Text>
            </TouchableOpacity>
        </View>
    </View>

);
}
