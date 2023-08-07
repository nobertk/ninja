// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@rneui/themed';
import { Avatar, Wrap } from '@react-native-material/core';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Hero() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Wrap style={styles.topnav}>
        <Avatar 
          size={64}
          rounded
          title="GB"
          style={styles.avatarimg}>
        </Avatar>
        <Text style={styles.text}>Me</Text>
      </Wrap>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#purple',
    width: 400,
    // marginTop: '30',
    
  },
  topnav: {
    
    backgroundColor: 'green',
    height: '13%',
  
  },
  avatarimg: {
    marginLeft: '20',
    marginTop: '20',
  },
  text: {
    color: 'white',
    margin: '40',
    
  }

});
