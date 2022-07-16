// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,Dimensions,
  StatusBar,
  ScrollView
} from "react-native";
import Header from "./Header";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black, Lato} from "@expo-google-fonts/inter";
import {hikima} from './data'
import Item from './Item'
const {width} = Dimensions.get("window")

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';




export default function App() {

  const renderItem = ({item})=>{
    return <Item item={item} />
  }
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("./assets/bg1.jpg")}
          width="100%"
          height="100%"
          resizeMode="cover"
          style={styles.container}
        >
          <Header />
          <FlatList
            data={hikima}
            horizontal
            renderItem={renderItem}
            keyExtractor={item => item.id}
            snapToAlignment={"start"} 
            snapToInterval={width}
            pagingEnabled
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
          style={{
           width:'100%'}}
        />
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3056121864159997/7844829601" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
          // onDidFailToReceiveAdWithError={this.bannerError} 
           />
        </ImageBackground>
      </View>
    );
  }
}

     

// "config": {
//   "googleMobileAdsAppId": "ca-app-pub-3940256099942544~3347511713"
// },
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: StatusBar.currentHeight  // justifyContent: 'center',
  },
});
