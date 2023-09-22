import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Main from '../screens/Main'
import NewThread from '../screens/NewThread'
const Stack=createStackNavigator()
const AppNavigator = () => {
  const navigation=useNavigation()
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} options={{headerShown:false}} />
        <Stack.Screen name='NewThread' component={NewThread} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator