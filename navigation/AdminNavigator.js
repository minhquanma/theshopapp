import OrdersScreen from '../screens/shop/OrderScreens';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import { createStackNavigator } from '@react-navigation/stack';
import { DEFAULT_OPTIONS } from './config';
import React from 'react';
import UserProductsScreen from '../screens/user/UserProductsScreen';


const adminNavs = [
  {
    name: 'UsersProduct',
    component: UserProductsScreen,
    options: ({ navigation }) => ({
      headerTitle: 'Your Products',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      )
    })
  }
];

const AdminNavigator = createStackNavigator();

export function renderAdminNavigator() {
  return (
    <AdminNavigator.Navigator screenOptions={DEFAULT_OPTIONS}>
      {adminNavs.map(({ name, options, component }) => (
        <AdminNavigator.Screen
          key={name}
          name={name}
          options={options}
          component={component}
        />
      ))}
    </AdminNavigator.Navigator>
  );
}
