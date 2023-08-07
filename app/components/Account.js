import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

const Account = () => {
  return (
    <View>
      <Card>
            <Text>Current Balance</Text>
            <Text>300,000</Text>
      </Card>

    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    text: {
        color: 'purple',
        flex: '1',
    },
})