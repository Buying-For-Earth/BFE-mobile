import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import ItemBox from './ItemBox';

type Product = {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
};
interface ItemListProps {
  products: Product[];
}

function ItemList({products}: ItemListProps) {
  return (
    <ScrollView>
      {products.map(product => (
        <ItemBox key={product.id} product={product} />
      ))}
    </ScrollView>
  );
}

export default ItemList;
