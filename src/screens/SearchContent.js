import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchContent = () => {
  const searchData = [
    {
      id: 0,
      images: [
        require("../images/post1.jpg"),
        require("../images/post2.jpg"),
        require("../images/post3.jpg"),
        require("../images/post4.jpg"),
        require("../images/post5.jpg"),
        require("../images/post6.jpg"),
      ],
    },
    {
      id: 1,
      images: [
        require("../images/post7.jpg"),
        require("../images/post8.jpg"),
        require("../images/post9.jpg"),
        require("../images/post10.jpg"),
        require("../images/post11.jpg"),
        require("../images/post12.jpg"),
      ],
    },
    {
      id: 2,
      images: [
        require("../images/post13.jpg"),
        require("../images/post14.jpg"),
        require("../images/post15.jpg"),
      ],
    },
  ];

  return (
    <View style={{ paddingTop: 11 }}>
      {searchData.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity style={{ paddingBottom: 2 }}>
                      <Image
                        source={imageData}
                        style={{ width: 129, height: 150 }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    width: 261,
                  }}
                >
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity style={{ paddingBottom: 2 }}>
                        <Image
                          source={imageData}
                          style={{ width: 129, height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity style={{ marginLeft: 2 }}>
                  <Image
                    source={data.images[5]}
                    style={{ width: 129, height: 300 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity style={{ paddingRight: 2 }}>
                  <Image
                    source={data.images[2]}
                    style={{ width: 260, height: 300 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: 130,
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity style={{ paddingBottom: 2 }}>
                        <Image
                          source={imageData}
                          style={{ width: 129, height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default SearchContent;
