import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Image, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {fetchProduct} from '../../Helper/fetchApi';

type Option = {
  order_num: number;
  input_option: {
    name: string;
    type: string;
    option_list?: string[];
  };
};

type DetailText = {
  제조사?: string;
  '친환경 인증 제품'?: string;
  재료?: string;
  배출방법?: string;
};

type ProductDetail = {
  thumbnail: string;
  name: string;
  category: string;
  price: number;
  detail: {
    url: string[];
    text: DetailText[];
  };
  options: Option[];
};

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
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<ProductDetail>();
  const {item} = route.params;

  useEffect(() => {
    setIsLoading(true);
    let iniProduct = async () => {
      try {
        await fetchProduct(item.id)
          .then(res => setProduct(res.data))
          .then(() => setIsLoading(false))
          .catch(error => console.log(error));
      } catch (error) {
        Alert.alert('네트워크 에러', '상품 정보를 가져오지 못했어요.', [
          {
            text: '새로고침',
            onPress: () => iniProduct(),
            style: 'cancel',
          },
          {text: '확인'},
        ]);
      }
    };
    iniProduct();
  }, []);

  console.log(item);
  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator size="large" color="#34CDAB" />
      ) : (
        <>
          <Image
            source={{uri: item.thumbnail}}
            style={{width: '100%', height: 300}}
          />
          <Text>{product?.name}</Text>
          <Text>{product?.price}</Text>
        </>
      )}
    </ScrollView>
  );
}

export default ProductScreen;
