import { Image } from 'react-native'
import React from 'react'
import Setting from './Assets/Icons/Setting.svg';
import Product from './Assets/Icons/Product.svg';

const Icon = ({ name, width, height }) => {
  return (
    <Image
      source={name === 'Setting' ? Setting : Product}
      style={{ width, height }}
    />
  )
}
export default Icon;