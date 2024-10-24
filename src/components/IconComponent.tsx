import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    nameIcon: string,
    color?: string
    size: number | undefined,
}

export const IconComponent = ({ nameIcon, size, color}: Props) => {
  return (
    <Icon name={nameIcon} size={size} color={color}></Icon>
  )
}
