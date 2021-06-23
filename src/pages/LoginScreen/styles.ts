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

});