import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import color from '../../constants/color';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: color.primary, tabBarInactiveTintColor: color.secondary }}>
      <Tabs.Screen name='home' options={{
        tabBarIcon: ({ color }) => (
          <Entypo name="home" size={24} color={color} />
        )
      }} />
      <Tabs.Screen name='profile' options={{
        tabBarIcon: ({ color }) => (
          <Fontisto name="person" size={24} color={color} />
        )
      }} />
      <Tabs.Screen name='skill' options={{
        tabBarIcon: ({ color }) => (
          <Entypo name="briefcase" size={24} color={color} />
        )
      }} />
      <Tabs.Screen name='project'
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="project-diagram" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen name='education'
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="graduation-cap" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

export default TabLayout