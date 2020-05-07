import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/Colors';
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import CartScreen from '../screens/shop/CartScreen';

const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'OpenSansBold'
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const navigations = [
  {
    name: 'ProductsOverview',
    options: ({ navigation }) => ({
      headerTitle: 'All products',
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
    component: CartScreen
  }
];

export { navigations, screenOptions };
