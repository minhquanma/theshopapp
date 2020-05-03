import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import store from './store/reducers';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverviewScreen from './screens/shop/ProductsOverviewScreen';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="ProductsOverview"
            options={{
              title: 'All products'
            }}
            component={ProductsOverviewScreen}
          />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}
