import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },

    bothStyle: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        paddingRight: 30,
        borderRadius: 5,
        borderWidth: 1,
        color: 'black',
        fontSize: 16,
        height: 50,
    },

    buttonsContainer: {
        flexDirection: 'column',
    },

    buttonContainer: {
        backgroundColor: '#560CCE',
        color: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 12,
        borderRadius: 18,
        marginBottom: 12,
        width: Dimensions.get('screen').width - 50,
    },

    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },

    titleProduct: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },

    card: {
        padding: 20,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#f6f8fa',
        width: Dimensions.get('screen').width - 10,
    },
    
    item: {
        padding: 10,
        fontSize: 20,
        height: 44,
    },

    priceSection: {
        flexDirection: 'row',
    },

    price: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },

    deleteContainer: {
        padding: 8,
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignSelf: 'center',
        width: Dimensions.get('screen').width - 50,
    },

    text: {
        fontSize: 18,
    },
});