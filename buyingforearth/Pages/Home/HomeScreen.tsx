import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Dimensions, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

type renderitem = {
  title: string;
  text: string;
};

const {width: viewportWidth} = Dimensions.get('window');
function HomeScreen() {
  let data = [
    {
      title: 'Item 1',
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

  let _renderItem = ({item, index}: {item: renderitem; index: number}) => {
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
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Carousel
        data={data}
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
