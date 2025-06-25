import { View, Text, Image } from 'react-native'
import React from 'react'

const ProductDetails = ({ route }) => {
  const { id, name, price, image, description } = route.params.product;

  return (
    <View className='w-screen h-screen flex items-start justify-start pb-20'>
      <Image source={{ uri: image }} className='w-full h-64 object-cover' /> 
      <View className='w-full flex flex-row items-center justify-between p-4 mt-4'>
        <Text className='text-2xl font-bold'>{name}</Text>
        <Text className='text-lg'>Price: ${price}</Text>
      </View>
      <Text className='text-2xl underline underline-offset-auto ml-4'>Description</Text>
      <Text className='text-base flex-1 ml-4 mt-5'>{description}</Text>
    </View>
  )
}

export default ProductDetails