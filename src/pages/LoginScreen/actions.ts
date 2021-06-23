import { Alert } from 'react-native';
import { emailValidator } from '../../helpers/emailValidator';
import { auth } from '../../services/ecommerce-client';

export async function login(email: string, password: string | undefined) {
    const emailError = emailValidator(email);

    if (emailError.length > 4) {
        alert(emailError);
        return false;
    }
    if (password === undefined || password.trim() === '') {
        alert('Preencha o campo de senha');
        return false;
    }

  const result = await auth(email, password)
        if (!result) {
            Alert.alert('Erro!', 'E-mail ou Senha Inválidos!');
            return;
        }
        return true;

}