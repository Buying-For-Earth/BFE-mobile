import React from 'react';
import {Text, View} from 'react-native';

type Product = {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
};

interface ItemBoxProps {
  product: Product;
}

function ItemBox({product}: ItemBoxProps) {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
}

export default ItemBox;
