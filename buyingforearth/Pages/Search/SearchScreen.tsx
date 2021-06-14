import React from 'react';
import {Text, View} from 'react-native';
import SearchHeader from './components/SearchHeader';

function SearchScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <SearchHeader />
    </View>
  );
}

export default SearchScreen;
