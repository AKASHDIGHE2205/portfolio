import React from 'react'
import "../global.css";
import { Slot, Stack } from 'expo-router';

const RootLayout = () => {
  return (<>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(tabs)' />
      <Stack.Screen name='index' />
    </Stack>

  </>)

}

export default RootLayout