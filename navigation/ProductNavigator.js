import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DEFAULT_OPTIONS } from './config';

const productNavs = [
  {
    name: 'ProductsOverview',
    options: ({ navigation }) => ({
      headerTitle: 'All products',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            onPress={() => navigation.navigate('Cart')}
          />
        </HeaderButtons>
      )
    }),
    component: ProductsOverviewScreen
  },
  {
    name: 'ProductDetail',
    options: ({ route }) => ({ title: route.params.productTitle }),
    component: ProductDetailScreen
  },
  {
    name: 'Cart',
    component: CartScreen,
    options: {
      headerTitle: 'Your Cart'
    }
  }
];

const ProductNavigator = createStackNavigator();

export function renderProductNavigator() {
  return (
    <ProductNavigator.Navigator screenOptions={DEFAULT_OPTIONS}>
      {productNavs.map(({ name, options, component }) => (
        <ProductNavigator.Screen
          key={name}
          name={name}
          options={options}
          component={component}
        />
      ))}
    </ProductNavigator.Navigator>
  );
}
