import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Text, View} from 'react-native';
import Styled from 'styled-components/native';

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
  const navigation = useNavigation();
  return (
    <ProductBox
      onPress={() =>
        navigation.navigate('Product', {
          item: product,
        })
      }
      activeOpacity={1}>
      <Image
        source={{uri: product.thumbnail}}
        style={{width: 150, height: 200}}
      />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </ProductBox>
  );
}

const ProductBox = Styled.TouchableOpacity`
    margin: 0 10px;
`;

export default ItemBox;
