import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const Notifications = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 32, fontWeight: "700", marginLeft: 20 }}>
        Activity
      </Text>
      <View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={["All", "Replieds", "Mentions", "Verified"]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 40,
                  borderWidth: 1,
                  marginLeft: 20,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    selectedTab == index ? "black" : "transparent",
                }}
                onPress={() => {
                  setSelectedTab(index);
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: selectedTab == index ? "white" : "black",
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      <FlatList
        contentContainerStyle={{ marginTop: 20 }}
        data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: "100",
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                height: 60,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../images/profile.png")}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    opacity: 0.5,
                  }}
                />
                <View style={{ marginLeft: 20 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontWeight: "500" }}>
                      enineercodebhbaiya
                    </Text>
                    <Text style={{ marginLeft: 10, color: "#9e9e9e" }}>8h</Text>
                  </View>
                  <Text style={{ color: "#9e9e9e" }}>followed yor</Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 35,
                  borderWidth: 0.3,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Follow</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Notifications;
