import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
interface BUttonProps {
  title: string;
  onPress: () => void;
  styles?: string;
}
const Button = ({ title, onPress, styles }: BUttonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className={`${styles}`}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button