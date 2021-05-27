import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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

const {width: viewportWidth} = Dimensions.get('window');

function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [homeProduct, setHomeProduct] = useState([
    {
      name: '없음',
      products: [{id: 0, thumbnail: '실패', name: '실패', price: 0}],
      order_num: 0,
    },
  ]);

  useEffect(() => {
    setIsLoading(true);
    let iniHome = async () => {
      try {
        await fetchHome()
          .then(res => {
            setHomeProduct(res.data.list);
          })
          .then(() => setIsLoading(false))
          .catch(error => {
            console.log(error); //ios : http error
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

  let _renderItem = ({item, index}: {item: Product; index: number}) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          height: 250,
        }}>
        <Image
          source={{uri: item.thumbnail}}
          style={{width: '100%', height: 250}}
        />
      </View>
    );
  };

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator size="large" color="#34CDAB" />
      ) : (
        <>
          <Text>{homeProduct[0].name}</Text>
          <Carousel
            data={homeProduct[0].products}
            renderItem={_renderItem}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            slideStyle={{width: viewportWidth}}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
          />
          {/* TODO: change scrollview */}
          <Text>{homeProduct[1].name}</Text>
          <Carousel
            data={homeProduct[1].products}
            renderItem={_renderItem}
            sliderWidth={viewportWidth}
            itemWidth={200}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
          />
          <Text>{homeProduct[2].name}</Text>
          <Carousel
            data={homeProduct[2].products}
            renderItem={_renderItem}
            sliderWidth={viewportWidth}
            itemWidth={200}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
          />
        </>
      )}
    </ScrollView>
  );
}

export default HomeScreen;
