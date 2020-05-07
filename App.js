import 'react-native-gesture-handler';
import React, { useState } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { renderShopNavigator } from './navigation/ShopNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';



const fetchFonts = async () => {
  return await Font.loadAsync({
    OpenSans: require('./assets/fonts/OpenSans.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSansBold.ttf')
  });
};

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);

  return isFontLoaded ? (
    <Provider store={store}>
      <NavigationContainer>
        {renderShopNavigator()}
      </NavigationContainer>
    </Provider>
  ) : (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={setFontLoaded.bind(this, true)}
    />
  );
}
