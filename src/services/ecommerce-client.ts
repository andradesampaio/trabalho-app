import axios from "../config/axios";
import Customer from '../models/customer';
import Product  from '../models/product';


export async function auth(login: string, password: string): Promise<any> {
    console.log(login, password);
    try {
        console.log(axios.post('/user/login', { login, password }));
        const response = await axios.post('/user/login', { login, password });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getListProducts(): Promise<Product[]> {
    try {
        const response = await axios.get('/product/list');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function addCustomer(customer: Customer): Promise<any> {
    try {
        const response = await axios.post('/user/customer/add', customer);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}