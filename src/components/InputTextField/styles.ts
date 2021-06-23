import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5,
        alignContent: 'flex-start',
        width: Dimensions.get('screen').width - 40,
    },
    input: {
        height: 50,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width - 40,
    }
});