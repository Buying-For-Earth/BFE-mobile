import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Dimensions, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import {fetchHome} from '../../Helper/fetchApi';
import ItemList from './components/ItemList';
import {useNavigation} from '@react-navigation/core';

type Product = {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
};

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [homeProduct, setHomeProduct] = useState([
    {
      name: '없음',
      products: [{id: 0, thumbnail: '실패', name: '실패', price: 0}],
      order_num: 0,
    },
  ]);

  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    let iniHome = async () => {
      try {
        await fetchHome()
          .then(res => setHomeProduct(res.data.list))
          .then(() => setIsLoading(false))
          .catch(error => console.log(error)); // ios : http error
      } catch (error) {
        Alert.alert('네트워크 에러', '상품 정보를 가져오지 못했어요.', [
          {
            text: '새로고침',
            onPress: () => iniHome(),
            style: 'cancel',
          },
          {text: '확인'},
        ]);
      }
    };

    iniHome();
  }, []);

  let _renderItem = ({item, index}: {item: Product; index: number}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Product', {
            item,
          })
        }
        activeOpacity={1}>
        <Image
          source={{uri: item.thumbnail}}
          style={{width: '100%', height: 250}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color="#34CDAB"
          style={{height: viewportHeight - 150}}
        />
      ) : (
        <>
          <ContentsBox>
            <Title>{homeProduct[0].name}</Title>
            <Carousel
              data={homeProduct[0].products}
              renderItem={_renderItem}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              slideStyle={{width: viewportWidth}}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
            />
          </ContentsBox>
          <ContentsBox>
            <Title>{homeProduct[1].name}</Title>
            <ItemList products={homeProduct[1].products} />
          </ContentsBox>
          <ContentsBox>
            <Title>{homeProduct[2].name}</Title>
            <ItemList products={homeProduct[2].products} />
          </ContentsBox>
        </>
      )}
    </ScrollView>
  );
}

const ContentsBox = Styled.View`
  background: white;
  margin-bottom: 10px;
`;

const Title = Styled.Text`
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
`;

export default HomeScreen;
