import Factory from "./factory";


export default interface Product {
    id: string;
    amount: string;
    factory: Factory;
    name: string;
    price: string;
}