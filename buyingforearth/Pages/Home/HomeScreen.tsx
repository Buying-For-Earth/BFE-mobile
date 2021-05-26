import {StackScreenProps} from '@react-navigation/stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Alert, Button, Dimensions, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {fetchHome} from '../../Helper/fetchApi';

type Product = {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
};

interface HomeProduct {
  name: string;
  products: Product[];
  order_num: number;
}

type renderitem = {
  title: string;
  text: string;
};

const {width: viewportWidth} = Dimensions.get('window');

function HomeScreen() {
  const [homeProduct, setHomeProduct] = useState([
    {
      name: '없음',
      products: [{id: 0, thumbnail: '실패', name: '실패', price: 0}],
      order_num: 0,
    },
  ]);

  useEffect(() => {
    let iniHome = async () => {
      try {
        await fetchHome()
          .then(res => {
            setHomeProduct(res.data.list);
            console.log('ddd : ', homeProduct);
          })
          .catch(error => {
            console.log(error); //cors error
          });
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

  let data = [
    {
      title: 'Item one',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ];

  let _renderItem = ({item, index}: {item: HomeProduct; index: number}) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{fontSize: 30}}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Carousel
        data={homeProduct.find(e => e.order_num === 1)}
        renderItem={_renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        slideStyle={{width: viewportWidth}}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
}

export default HomeScreen;
