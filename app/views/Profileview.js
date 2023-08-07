import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hero from '../components/Hero'
import { Divider, List } from 'react-native-paper'

const profileview = () => {
  return (
    <View>
      <Hero/>
      <List.Section>
        <List.Item title='Acccount Info'></List.Item>
        <List.Item title='Commission'></List.Item>
        <List.Item title='Linked Accounts'></List.Item>
        <Divider/>
        <List.Item title='Change Login PIN'></List.Item>


      </List.Section>
    </View>
  )
}

export default profileview

const styles = StyleSheet.create({})