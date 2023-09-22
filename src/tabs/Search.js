import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 32, fontWeight: "700", marginLeft: 20 }}>
        Search
      </Text>
      <View
        style={{
          width: "90%",
          height: 40,
          backgroundColor: "#e6e6e6",
          alignSelf: "center",
          marginTop: 20,
          borderRadius: 10,
          flexDirection: "row",
          paddingLeft: 15,
        }}
      >
        <Image
          source={require("../images/search.png")}
          style={{ width: 20, height: 20, tintColor: "#9e9e9e", marginTop: 10 }}
        />
        <Text
          style={{
            color: "#9e9e9e",
            fontSize: 16,
            marginLeft: 10,
            fontWeight: "500",
            marginTop: 10,
          }}
        >
          Search
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;
