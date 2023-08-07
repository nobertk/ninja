import React from 'react'
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Button, Outlet, Stack } from "@react-native-material/core";
import Dash from './app/views/Dashview';
import Hero from './app/components/Hero';
import { Card } from 'react-native-paper';
import { Tab } from '@rneui/themed';
import { TabView } from '@rneui/base';
// import { Tabs } from 'tamagui';
// import Account from './app/components/account';
// import Account from './app/components/Account';
import Profileview from './app/views/Profileview';
import Commissionview from './app/views/commissionview';
// import Accountview from './app/views/Accountview';
import Accountview from './app/views/Accountview';
import Login from './app/views/Login';





// const [index, setIndex] = React.useState(0);


export default function App() {

  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Profileview/>
     {/* <Commissionview/> */}
     {/* <Accountview/> */}
     {/* <Login/> */}
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
  cardcontainer: {
    width: 250,
    height: 120,
  },
  cardtext: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
