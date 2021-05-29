import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
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
        <Tab.Navigator tabBarOptions={{showLabel: false}}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={25}
                    color="#34CDAB"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name={focused ? 'ios-search' : 'ios-search-outline'}
                    size={25}
                    color="#34CDAB"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Category"
            component={CategoryScreen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name={focused ? 'ios-menu' : 'ios-menu-outline'}
                    size={25}
                    color="#34CDAB"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Mypage"
            component={MypageScreen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={25}
                    color="#34CDAB"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name={focused ? 'ios-cart' : 'ios-cart-outline'}
                    size={25}
                    color="#34CDAB"
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
