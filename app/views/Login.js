// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Card } from '@rneui/themed';
import { Button } from "@react-native-material/core";

export default function Hero() {
  return (
    <View style={styles.container}>
      <Text>login</Text>
      <Text>other</Text>
      <Button title="Click Me" onPress={() => alert("🎉🎉🎉")}/>
    
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
