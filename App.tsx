

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/screen/home';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Navigation from './src/navigation/navigation';

const App=() => {
  return(
    <Provider store={store}>
     <Navigation/>
    </Provider>
  
  );
}
export default App;
