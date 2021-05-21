import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Home1" component={HomeScreen} />
          <Tab.Screen name="Home2" component={HomeScreen} />
          <Tab.Screen name="Home3" component={HomeScreen} />
          <Tab.Screen name="Home4" component={HomeScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
