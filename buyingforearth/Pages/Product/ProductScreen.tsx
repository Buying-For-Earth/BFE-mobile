import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

type Product = {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
};

type RootStackParamList = {
  Product: {item: Product};
};

type ProductScreenProps = StackScreenProps<RootStackParamList, 'Product'>;

function ProductScreen({route}: ProductScreenProps) {
  const {item} = route.params;
  console.log(item);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Product</Text>
    </View>
  );
}

export default ProductScreen;
