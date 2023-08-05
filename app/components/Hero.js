// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@rneui/themed';

export default function Hero() {
  return (
    <View style={styles.container}>
      <Text>hero</Text>
      <Text>other</Text>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
