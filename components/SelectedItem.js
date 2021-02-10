import React from 'react';
import { View, Text } from 'react-native';

// 선택한 아이템 한개를 속성으로 내려 받음
const Selecteditem = ({item}) => {
  return (
    <View>
      <text>{item.id} {item.title}</text>
    </View>
  )
}

export default Selecteditem;
