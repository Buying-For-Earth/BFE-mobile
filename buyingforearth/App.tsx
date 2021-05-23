import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import HomeStackScreen from './Pages/Home';
import SearchScreen from './Pages/Search';
import CategoryScreen from './Pages/Category';
import MypageScreen from './Pages/Mypage';
import CartScreen from './Pages/Cart';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Category" component={CategoryScreen} />
          <Tab.Screen name="Mypage" component={MypageScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
