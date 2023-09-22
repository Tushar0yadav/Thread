import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Benu = () => {
  const naviagtion = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100",
          height: 50,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: 20,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => {
            naviagtion.goBack();
          }}
        >
          <Image
            source={require("../images/left.png")}
            style={{ width: 17, height: 17 }}
          />
          <Text style={{ fontSize: 18 }}>Back</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18, marginRight: 30 }}>Settings</Text>
      </View>

      {/* contentContainerStyle={{marginTop:20}} */}
      <FlatList
        data={[
          {
            title: "Follow and Invite Friends",
            icon: require("../images/friend.png"),
          },
          {
            title: "Notifications",
            icon: require("../images/notification.png"),
          },
          {
            title: "Privacy",
            icon: require("../images/lock.png"),
          },
          {
            title: "Account",
            icon: require("../images/user.png"),
          },
          {
            title: "Help",
            icon: require("../images/help.png"),
          },
          {
            title: "About",
            icon: require("../images/info.png"),
          },
        ]}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: "100%",
                marginTop: 15,
                height: 45,
                paddingRight: 10,
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <Image
                source={item.icon}
                style={{ width: 24, height: 24, marginLeft: 20 }}
              />
              <Text style={{ marginLeft: 10 }}>{item.title}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Benu;
