import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const NewThread = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: "#9e9e9e",
          justifyContent: "Space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: 20,
        }}
      >
        <Text onPress={()=>{
          navigation.goBack()
        }}>Cancel</Text>
        <Text style={{ color: "black", fontSize: 18, fontweight: "700",marginLeft: 210 }}>
          New Thread
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NewThread;
