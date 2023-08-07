import {  Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { AppBar } from '@react-native-material/core'
import { Appbar } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import { LineChart, Path, Grid } from 'react-native-svg-charts'

// import BottomNav from '../components/BottomNav'




const commissionview = () => {
  return (
    <SafeAreaProvider style={styles.view}>
        <View>
            <Appbar.Header>
                <Appbar.BackAction/>
                <Appbar.Content title='Commission'/>
            </Appbar.Header>
        </View>

        
            
            
           
          
        
    </SafeAreaProvider>


  )
}

export default commissionview

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: 400
    },
    logo: {
        flex: 1,
        height: 200,
        width: 200,
    }
})