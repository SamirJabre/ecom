import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Products/productSlice';

const Add = () => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');
    const handleAddProduct = () => {
        const newItem = {
            id: Date.now(),
            name: productName,
            price: Math.floor(Math.random() * 100) + 1,
            image: "https://fastly.picsum.photos/id/275/600/600.jpg?hmac=3HEb8gkrgrQlOli0G65Q0Cai9wRtAQTjbPwuEXI2TvM",
        }
        dispatch(addProduct(newItem));
    } 


  return (
    <View className='w-screen h-screen flex items-center justify-center'>
        <Text className='text-2xl font-bold'>Add Page</Text>
        <Text className='text-lg text-gray-600'>Add product name.</Text>
        <TextInput onChangeText={setProductName} className='w-1/2 h-10 bg-blue-200 rounded-lg border '/>
        <TouchableOpacity className='mt-3 p-2 bg-blue-600' onPress={handleAddProduct}>
            <Text className='text-lg font-bold '>Add Product</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Add