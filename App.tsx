/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

import VideoPlayerScreen from './src/videoPlayerScreen';

const App=()=>{

  return(
<View>
  <VideoPlayerScreen></VideoPlayerScreen>
</View>
  )
}

export default App;