import 'react-native-gesture-handler';
import React, { useState } from 'react';
import store from './store/reducers';
import { Provider } from 'react-redux';
import { navigations, screenOptions } from './navigation/ShopNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const { Navigator, Screen } = createStackNavigator();

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
        <Navigator screenOptions={screenOptions}>
          {navigations.map(({ name, options, component }) => (
            <Screen
              key={name}
              name={name}
              options={options}
              component={component}
            />
          ))}
        </Navigator>
      </NavigationContainer>
    </Provider>
  ) : (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={setFontLoaded.bind(this, true)}
    />
  );
}
