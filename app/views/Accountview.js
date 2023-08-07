import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Appbar, Avatar } from 'react-native-paper'

const accountview = () => {
  return (
    <SafeAreaProvider>
        <Appbar.Header>
            <Appbar.BackAction/>
            <Appbar.Content title='Profile'/>
        </Appbar.Header>
        <View>
            <Avatar></Avatar>
        </View>
    </SafeAreaProvider>
  )
}

export default accountview

const styles = StyleSheet.create({})