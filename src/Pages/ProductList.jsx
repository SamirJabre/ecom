import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const ProductList = ({navigation}) => {
    
    useEffect(() => {
        const fetchData = async () => {
        try{
           await axios.get('https://dummyjson.com/products', { timeout: 1000 })
            .then(res => console.log(res.data.products))
            
        }
        catch(err){
            console.error("Error or Timeout",err);
        }
    }
    fetchData();
    },[])


    const handlePress = (item) => {
        navigation.navigate('ProductDetails', { product: {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            description: item.description
        }});
    }

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity className='w-96 h-32 flex flex-row justify-between items-center p-4 mb-4 rounded-lg shadow-md bg-white' onPress={() => handlePress(item)}>
                <View className='h-full flex items-center justify-evenly'>
                    <Text className='text-lg font-bold'>{item.name}</Text>
                    <Text className='text-gray-600'>Price: ${item.price}</Text>
                </View>
                <View className='w-24 h-24 rounded-lg overflow-hidden shadow-lg'>
                    <Image
                        source={{ uri: item.image }}
                        className='w-full h-full object-cover'
                    />
                </View>
            </TouchableOpacity>
        )
    }

    const products = useSelector(state => state.products.items);
    // const products = [
  // {
  //   id: 1,
  //   name: 'Product 1',
  //   price: 100,
  //   image: "https://fastly.picsum.photos/id/275/600/600.jpg?hmac=3HEb8gkrgrQlOli0G65Q0Cai9wRtAQTjbPwuEXI2TvM",
  //   description: 'This high-quality product features a sleek and modern design, crafted to meet your everyday needs while offering outstanding performance and durability. Ideal for both casual and professional use.'
  // },
  // {
  //   id: 2,
  //   name: 'Product 2',
  //   price: 200,
  //   image: 'https://fastly.picsum.photos/id/33/600/600.jpg?hmac=bbUV6WE0F1SL2_riCb-BCklVxOh_TX884aOPM-ePFO0',
  //   description: 'Built with longevity in mind, this reliable product is perfect for daily use. Its minimalist look and solid structure make it a valuable addition to your collection of essentials.'
  // },
  // {
  //   id: 3,
  //   name: 'Product 3',
  //   price: 300,
  //   image: 'https://fastly.picsum.photos/id/546/600/600.jpg?hmac=HGJd_W2zfu_jimxwqsbzLzHII3gdDUwdCzFVOnRYJCU',
  //   description: "Compact yet powerful, this item offers impressive features in a small form factor. Whether you're on the go or at home, it delivers consistent results with minimal effort."
  // },
  // {
  //   id: 4,
  //   name: 'Product 4',
  //   price: 400,
  //   image: 'https://fastly.picsum.photos/id/937/600/600.jpg?hmac=2FnsDUVJKpS_Q2vrUQzXT4y2JJ34EZTmNXPJcpeMuaw',
  //   description: 'Elegantly styled and built to last, this product combines sophistication with durability. It’s the perfect solution for anyone who values aesthetics and long-term performance.'
  // },
  // {
  //   id: 5,
  //   name: 'Product 5',
  //   price: 500,
  //   image: 'https://fastly.picsum.photos/id/923/600/600.jpg?hmac=-Z9u__nla6z2tlApM048LeVj04Bf2U4q4I8dbynZPCc',
  //   description: 'Designed for modern lifestyles, this product brings convenience, quality, and performance together in one package. A great option for users who want more from everyday tools.'
  // },
  // {
  //   id: 6,
  //   name: 'Product 6',
  //   price: 600,
  //   image: 'https://fastly.picsum.photos/id/535/600/600.jpg?hmac=N-BmwAnkdn8AupmTxjXrwM_bW58Tj13GgBqtszBr7GI',
  //   description: 'With premium materials and precise engineering, this product offers top-tier performance and a premium feel. It’s the choice of those who demand the very best from their gear.'
  // },
  // {
  //   id: 7,
  //   name: 'Product 7',
  //   price: 700,
  //   image: 'https://fastly.picsum.photos/id/41/600/600.jpg?hmac=jpAuvdaze4LF6AOTOwXzvJXZLVwwa-W05tFRXNDCb2M',
  //   description: 'Simple, clean, and incredibly efficient — this product does exactly what you need, with zero distractions. Its subtle design hides powerful functionality under the surface.'
  // },
  // {
  //   id: 8,
  //   name: 'Product 8',
  //   price: 800,
  //   image: 'https://fastly.picsum.photos/id/68/600/600.jpg?hmac=60uSpmt3bTgoSRxJW78ugK1uwcL-4gaVKm8JtiGZ9_A',
  //   description: 'Built for users who expect more, this product delivers excellent value through its efficient design, reliable build, and enhanced features tailored to your routine.'
  // },
  // {
  //   id: 9,
  //   name: 'Product 9',
  //   price: 900,
  //   image: 'https://fastly.picsum.photos/id/79/600/600.jpg?hmac=_uT_boSmi0QxZjsyPsvayEDau2XA8XGt5L6l1jMh4VQ',
  //   description: 'Sleek, smart, and made for performance, this product is a top pick for users who want both beauty and brains. It fits seamlessly into any lifestyle or environment.'
  // }
// ]



return (
    <View className='w-screen h-full flex items-center justify-start pt-5 bg-blue-950'>
        <FlatList
            className='flex-1'
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    </View>
)
}

export default ProductList