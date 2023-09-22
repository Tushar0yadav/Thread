import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "../tabs/Home";
import Search from "../tabs/Search";
import Notifications from "../tabs/Notifications";
import Account from "../tabs/Account";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 3 ? (
        <Notifications />
      ) : (
        <Account />
      )}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 60,
          justifyContent: "space-evenly",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: 'white'
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={
              selectedTab == 0
                ? require("../images/home2.png")
                : require("../images/home.png")
            }
            style={{
              width: 30,
              height: 30,
              tintColor: selectedTab == 0 ? "black" : "#707070",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../images/search.png")}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedTab == 1 ? "black" : "#707070",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}onPress={() => {
            navigation.navigate("NewThread")
          }}
        >
          <Image
            source={require("../images/edit.png")}
            style={{ width: 30, height: 30, tintColor: "#707070" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Image
            source={
              selectedTab == 3
                ? require("../images/heart2.png")
                : require("../images/heart.png")
            }
            style={{
              width: 30,
              height: 30,
              tintColor: selectedTab == 3 ? "black" : "#707070",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Image
            source={
              selectedTab == 4
                ? require("../images/user2.png")
                : require("../images/user.png")
            }
            style={{
              width: 30,
              height: 30,
              tintColor: selectedTab == 4 ? "black" : "#707070",
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
