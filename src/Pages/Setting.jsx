import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../Redux/Theme/themeSlice';

const Setting = () => {
  const dispatch = useDispatch()

  const theme = useSelector((state) => state.theme.isDarkMode);
  const changeTheme = () => {
    dispatch(toggleTheme());
    console.log("Changed", theme);
    
  }
  

  return (
    <View className='w-screen h-screen flex items-center justify-center'>
      <TouchableOpacity onPress={changeTheme} className={`${theme ? "bg-black" : "bg-white"} p-10 rounded-2xl`}>
        <Text className='text-2xl font-bold text-white'>Change Theme</Text> 
      </TouchableOpacity>
    </View>
  )
}

export default Setting