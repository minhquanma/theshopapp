import Colors from '../constants/Colors';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { renderProductNavigator } from './ProductNavigator';
import { renderOrdersNavigator } from './OrderNavigator';
import { Ionicons } from '@expo/vector-icons';

const shopNavs = [
  {
    name: 'ProductsNavigator',
    component: renderProductNavigator,
    options: {
      title: 'Products',
      drawIcon: ({ focused, color, size }) => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={color}
        />
      )
    }
  },
  {
    name: 'ShopNavigator',
    component: renderOrdersNavigator,
    options: {
      title: 'Orders',
      drawIcon: ({ focused, color, size }) => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={color}
        />
      )
    }
  }
];

const ShopNavigator = createDrawerNavigator();

export function renderShopNavigator() {
  return (
    <ShopNavigator.Navigator
      screenOptions={{ activeTintColor: Colors.primary }}
    >
      {shopNavs.map(({ name, options, component }) => (
        <ShopNavigator.Screen
          key={name}
          name={name}
          options={options}
          component={component}
        />
      ))}
    </ShopNavigator.Navigator>
  );
}
