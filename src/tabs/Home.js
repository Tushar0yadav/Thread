import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <ScrollView nestedScrollEnabled>
          <Image
            source={require("../images/threads.png")}
            style={{ width: 40, height: 40, alignSelf: "center" }}
          />
          <FlatList
            data={[1, 1, 1, 1, 1, 1]}
            renderItem={({ item, index }) => {
              return (
                <View style={{ width: "100%", marginTop: 30 }}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: 20,
                      paddingLeft: 20,
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View style={{ width: 50, height: 50 }}>
                        <Image
                          source={require("../images/profile.png")}
                          style={{ width: 50, height: 50, opacity: 0.6 }}
                        />
                        <Image
                          source={require("../images/plus.png")}
                          style={{
                            width: 24,
                            height: 24,
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            backgroundColor: "white",
                            borderRadius: 12,
                          }}
                        />
                      </View>
                      <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>
                          engineer_code
                        </Text>
                        <Text style={{ marginTop: 3 }}>
                          caption demo for threads{" "}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>51m</Text>
                      <TouchableOpacity style={{ marginLeft: 10 }}>
                        <Image
                          source={require("../images/option.png")}
                          style={{ width: 24, height: 24 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <View
                      style={{
                        width: 2,
                        height: 170,
                        backgroundColor: "#9e9e9e",
                        opacity: 0.2,
                        marginLeft: 45,
                      }}
                    ></View>
                    <View style={{ width: "70%" }}>
                      <Image
                        source={require("../images/Back.png")}
                        style={{
                          width: "100%",
                          height: 145,
                          marginLeft: 30,
                          borderRadius: 10,
                        }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          paddingLeft: 30,
                          marginTop: 10,
                        }}
                      >
                        <Image
                          source={require("../images/heart.png")}
                          style={{ width: 20, height: 20 }}
                        />
                        <Image
                          source={require("../images/chat.png")}
                          style={{ width: 20, height: 20, marginLeft: 20 }}
                        />
                        <Image
                          source={require("../images/repost.png")}
                          style={{ width: 20, height: 20, marginLeft: 20 }}
                        />
                        <Image
                          source={require("../images/send.png")}
                          style={{ width: 20, height: 20, marginLeft: 20 }}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 0,
                      marginTop: 10,
                    }}
                  >
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "#9e9e9e",
                        borderRadius: 10,
                        marginLeft: 10,
                      }}
                    ></View>
                    <View style={{ marginLeft: 5 }}>
                      <View
                        style={{
                          width: 24,
                          height: 24,
                          backgroundColor: "#9e9e9e",
                          borderRadius: 12,
                          marginLeft: 10,
                        }}
                      ></View>
                      <View
                        style={{
                          width: 16,
                          height: 16,
                          backgroundColor: "#9e9e9e",
                          borderRadius: 8,
                          marginTop: 3,
                        }}
                      ></View>
                    </View>
                    <Text style={{ color: "#9e9e9e", marginLeft: 20 }}>
                      82 replies
                    </Text>
                    <Text style={{ color: "#9e9e9e", marginLeft: 20 }}>
                      1000 likes
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
