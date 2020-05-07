import OrdersScreen from '../screens/shop/OrderScreens';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import { createStackNavigator } from '@react-navigation/stack';
import { DEFAULT_OPTIONS } from './config';
import React from 'react';

const orderNavs = [
  {
    name: 'OrdersScreen',
    component: OrdersScreen,
    options: ({ navigation }) => ({
      headerTitle: 'Your Orders',
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

const OrderNavigator = createStackNavigator();

export function renderOrdersNavigator() {
  return (
    <OrderNavigator.Navigator screenOptions={DEFAULT_OPTIONS}>
      {orderNavs.map(({ name, options, component }) => (
        <OrderNavigator.Screen
          key={name}
          name={name}
          options={options}
          component={component}
        />
      ))}
    </OrderNavigator.Navigator>
  );
}
