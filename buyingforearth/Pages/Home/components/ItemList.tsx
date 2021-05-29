import React from 'react';
import {ScrollView} from 'react-native';
import Styled from 'styled-components/native';
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
    <HorizontalScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {products.map(product => (
        <ItemBox key={product.id} product={product} />
      ))}
    </HorizontalScrollView>
  );
}

const HorizontalScrollView = Styled.ScrollView`
    margin: 0 10px 10px 10px;
`;

export default ItemList;
