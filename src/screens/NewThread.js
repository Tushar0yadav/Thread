import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const NewThread = () => {
  const naviagtion = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 50,
          borderBottomWidth: 0.3,
          justifyContent: "Space-between",
          borderBottomColor: "#9e9e9e",
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: 20,
        }}
      >
        <Text
          onPress={() => {
            naviagtion.goBack();
          }}
        >
          Cancel
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            fontweight: "700",
            marginLeft: 100,
          }}
        >
          New Thread
        </Text>
        <Text></Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10, paddingLeft: 15 }}>
        <Image
          source={require("../images/profile.png")}
          style={{ width: 40, height: 40, tintColor: "#9e9e9e" }}
        />
        <View>
          <Text style={{ marginLeft: 10, fontSize: 18, color: "black" }}>
            engineer_code
          </Text>
          <TextInput placeholder="start a thread" style={{ marginLeft: 10 }} />
          <Image
            source={require("../images/attach-file.png")}
            style={{ width: 20, height: 20, opacity: 0.7, marginTop: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          Position: "absolute",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: 20,
          paddingRight: 20,
          bottom: -580,
        }}
      >
        <Text style={{ color: "#9e9e9e" }}>Anyone can reply</Text>
        <Text style={{ color: "blue", fontSize: 18 }}>Post</Text>
      </View>
    </SafeAreaView>
  );
};

export default NewThread;
