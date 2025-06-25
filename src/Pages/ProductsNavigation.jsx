import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './ProductList'
import ProductDetails from './ProductDetails';

const Stack = createNativeStackNavigator();

const ProductsNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='ProductsList' screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}>
      <Stack.Screen name="ProductsList" component={ProductList} options={{ headerTitle: 'Products' }}/>
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={({route})=>({
          headerTitle: route.params?.product?.name ?? 'Product Details',
        })}/>
    </Stack.Navigator>
  );
}

export default ProductsNavigation;