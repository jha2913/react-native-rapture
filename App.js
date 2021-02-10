import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import LotsOfGreetings from './components/LotsOfGreetings'
import SimpleList from './components/SimpleList'

// App컴포넌트 시작지점
export default function App() {
// UI 템플릿 작성하는곳
  return (
    // 속성 ={값}
    // 속성 ={"문자열"}
    // 속성 ={{name : "sss", }}
    // 속성 ={객체변수}
    <View style={styles.container}>
      { /* <HelloWorld></HelloWorld> */ }
      { /* <LotsOfGreetings></LotsOfGreetings> */ }
      <SimpleList></SimpleList>
      <StatusBar style="auto" />
    </View>
  );
}
// App컴포넌트 끝지점
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});