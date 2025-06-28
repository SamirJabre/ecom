import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsNavigation from './Pages/ProductsNavigation';
import Setting from './Pages/Setting';
import Add from './Pages/Add';

const Tab = createBottomTabNavigator();

const BottomAppNavigator = () => {
return (
    <Tab.Navigator
        initialRouteName='ProductsNavigation'
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 60,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontFamily: 'Georgia',
                fontWeight: '300',
            },
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#bbbbbb',
            tabBarIcon: () => null,
        }}
        backBehavior='order'
        detachInactiveScreens={true}
    >
        <Tab.Screen name="ProductsNavigation" component={ProductsNavigation} options={{title: "Products",}}/>
        <Tab.Screen name="Setting" component={Setting} options={{  title: "Setting"}}/>
        <Tab.Screen name="Add" component={Add} options={{  title: "Add"}}/>
    </Tab.Navigator>
);
}

export default BottomAppNavigator;