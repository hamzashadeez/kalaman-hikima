import React from "react";
import {
  StyleSheet,
  Text,
  Share,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import {
  AdMobRewarded,
} from "expo-ads-admob";

const Item = ({ item }) => {
  const onShare = async () => {
    // Display a rewarded ad
    try {
      const result = await Share.share({
        message: item.text,
      });
      
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      console.log(error.message);
    }
    try {
      await AdMobRewarded.setAdUnitID("ca-app-pub-5718874511289116/2451454313"); // Test ID, Replace with your-admob-unit-id
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.card}>
        <Text style={styles.number}>{item.id}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <View style={styles.banner}>
          <TouchableOpacity style={styles.share} onPress={onShare}>
            <Text style={{ color: "white" }}>Share</Text>
          </TouchableOpacity>
          <Entypo name="arrow-bold-right" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
  },
  share: {
    backgroundColor: "seagreen",
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 3,
  },
  number: {
    position: "absolute",
    color: "#222",
    top: 10,
    left: 10,
  },
  item: {
    width: width,
    height: height / 1.3,
    // opacity: 0.4
  },
  text: {
    opacity: 1,
    fontSize: 17,
    color: "#000",
  },
  card: {
    backgroundColor: "whitesmoke",
    margin: 20,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 5,
    position: "relative",
  },
});
