import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaView from '../SafeAreaView'
import tw from 'tailwind-react-native-classnames'

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-3 text-lg`}>Good morning Aman!</Text>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})