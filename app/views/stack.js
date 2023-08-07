// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Button, Stack } from "@react-native-material/core";



export default function stack() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo}
        source={require('./assets/bg.png')}
      />

      <Stack>
      <Text style={styles.text}>Sign In</Text>
      <Button title=" Create Account " style={styles.account} onPress={() => alert("🎉🎉🎉")}/>
        <Button 
          title=" Sing In " 
          variant='outlined' 
          style={styles.sign} 
          onClick={() => {
            window.location.href = 'dash.js';
          }}/>
      </Stack>
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
