import React from 'react'
import { Image, View} from 'react-native';
import styles from './styles';

export default function Logo() {
  return (
        <View style={styles.container}>
          <Image source={require('../Images/logo.png')}
              style={styles.logo}
          />
      </View>
      );
}