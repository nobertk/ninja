import React, { Component } from 'react'
    
import { Text, View, StyleSheet } from 'react-native'

export default class Dashview extends Component {
  render() {
    return (
      <View style={styles.container}>
      {/* <Dash/> */}
      <Hero/>
      {/* <Account/> */}
      <Card style={styles.cardcontainer}>
        <Text style={styles.cardtext}>Current Balance</Text>
        <Text style={styles.cardtext}>300,000</Text>
      </Card>
{/* 
      <Tab 
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'purple',
          height: 3,}}>

        <Tab.Item title={rec} 
          containerStyle={(active) => 
            ({    backgroundColor: active ? "red" : undefined,
  })}></Tab.Item>
        <Tab.Item title={Top}></Tab.Item>

        <TabView
          value={index} onChange={setIndex} animationType="spring">
            <TabView.Item><Text>payout</Text></TabView.Item>
            <TabView.Item><Text>Topup</Text></TabView.Item>

          </TabView>

      </Tab>
      */}

      {/* <Stack>
      <Text style={styles.text}>Sign In</Text>
      <Button title=" Create Account " style={styles.account} onPress={() => alert("🎉🎉🎉")}/>
        <Button 
          title=" Sing In " 
          variant='outlined' 
          style={styles.sign} 
          onClick={() => {
            window.location.href = 'dash.js';
          }}/>
      </Stack> */}
    </View>
    )
  }
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