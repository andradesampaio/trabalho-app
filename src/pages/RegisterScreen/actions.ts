import Customer from '../../models/customer';
import { emailValidator } from '../../helpers/emailValidator';
import { passwordValidator } from '../../helpers/passwordValidator';
import { addCustomer } from '../../services/ecommerce-client';
import { Alert } from 'react-native';


export async function saveCustomer(name: string, age: number, address: string, email: string, userPassword: string | undefined) {
    const customer = { name, age, address, email, userPassword } as Customer;
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(userPassword);

    if (customer.name === undefined || customer.name.trim() === '') {
        alert('Preencha o campo de nome!');
        return;
    }
    if (emailError.length > 4) {
        alert(emailError);
        return false;
    }

    if (customer.age === undefined) {
        alert('Preencha o campo de idade!');
        return false;
    }
    if (customer.age < 18) {
        alert('É necessario se maior de idade');
        return false; 
    }
    if (customer.address === undefined || customer.address.trim() === '') {
        alert('Preencha o campo de endereço!');
        return false;
    }
    if (passwordError.length > 4) {
        alert(passwordError);
        return false;
    }

    const result = await addCustomer(customer)
            if (!result) {
                Alert.alert('Erro!!', 'Erro ao tentar salvar cadastro.');
                return false;
            }
            return true;

}