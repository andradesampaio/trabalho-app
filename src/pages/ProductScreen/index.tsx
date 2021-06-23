import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { getListProducts } from '../../services/ecommerce-client';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { BorderlessButton, Swipeable } from 'react-native-gesture-handler';

export default function ProductScreen() {
    const navigation = useNavigation();
    const [products, setProducts] = useState(Object);

    function openLoginScreen(): void {
        navigation.navigate(
            'LoginScreen'
        );
    }

    getListProducts().then((items) => setProducts(items));

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(product) => product.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                      
                        <Text style={styles.titleProduct}>{item.name}</Text>
                        <Text  style={styles.text}>Fabricante:{item.factory.name}</Text>
                        
                        <View style={styles.priceSection}>
                            <Text style={styles.text}>Preço: </Text>
                            <Text style={styles.price}>
                                R$ {item.price.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>

                        <Text style={styles.text}>Quantidade em Estoque: {item.amount}</Text>

                        <View style={styles.deleteContainer}>
                            <BorderlessButton onPress={()=> {alert('Deseja deletar?')}}>
                                <Ionicons name="trash" size={20} color='white' />
                            </BorderlessButton>
                         </View>
                    </View>
                )}
            />
             <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={openLoginScreen} >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
