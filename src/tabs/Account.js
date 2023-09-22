import {
  View,
  Text,
  Image,
  TouchableOpacityBase,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const [tab, setTab] = useState(0);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 50,
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../images/internet.png")}
          style={{ width: 24, height: 24 }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../images/instagram.png")}
            style={{ width: 24, height: 24 }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Benu");
            }}
          >
            <Image
              source={require("../images/menu.png")}
              style={{ width: 24, height: 24, marginLeft: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "600" }}>Engineer code</Text>
          <Text style={{ fontSize: 16 }}>Engineercode bhaiya</Text>
        </View>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 45,
            backgroundColor: "#e6e6e6",
            marginRight: 30,
          }}
        ></View>
      </View>
      <Text style={{ marginLeft: 20 }}> Building Engineercode bhaiya</Text>
      <Text style={{ marginLeft: 20, marginTop: 10 }}>
        {" "}
        Lean App development
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Image
          source={require("../images/profile.png")}
          style={{ width: 24, height: 24 }}
        />
        <Image
          source={require("../images/profile.png")}
          style={{
            width: 24,
            height: 24,
            marginLeft: -10,
            borderRadius: 12,
            backgroundColor: "white",
          }}
        />
        <Image
          source={require("../images/profile.png")}
          style={{
            width: 24,
            height: 24,
            marginLeft: -10,
            backgroundColor: "white",
            borderRadius: 12,
          }}
        />
        <Text style={{ marginLeft: 10, color: "#9e9e9e" }}> 12 Followers</Text>
        <Text style={{ marginLeft: 10, color: "#9e9e9e" }}>
          {"www.youtube.com/ddwd"}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          justifycontent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
          marginLeft: 40,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: 45,
            borderWidth: 0.3,
            borderRadius: 10,
            marginRight: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black" }}> Edit profile </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 45,
            borderWidth: 0.3,
            borderRadius: 10,
            marginLeft: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black" }}> Share profile </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          height: 50,
          alignItems: "center",
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: 45,
            borderRadius: 150,
            marginRight: 79,
            marginLeft: 20,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: tab == 0 ? 1 : 0,
          }}
          onPress={() => {
            setTab(0);
          }}
        >
          <Text style={{ color: tab == 0 ? "black" : "#9e9e9e" }}>Thread</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 45,
            borderRadius: 1,
            marginLeft: 65,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: tab == 1 ? 1 : 0,
          }}
          onPress={() => {
            setTab(1);
          }}
        >
          <Text style={{ color: tab == 1 ? "black" : "#9e9e9e" }}>
            Replieds
          </Text>
        </TouchableOpacity>
      </View>
      {tab == 0 ? (
        <View>
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
                      paddingLeft: 10,
                      marginTop: 10,
                    }}
                  >
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
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "#9e9e9e" }}>
            Yor haven't posted any replies yet
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Account;
