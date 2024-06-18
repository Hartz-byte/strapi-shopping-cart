import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const MyProductItem = ({ item, onAddToCart, onAddToWishlist }) => {
  return (
    <View
      style={{
        width: 200,
        height: 200,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: "#fff",
        marginLeft: 20,
        marginBottom: 10,
      }}
    >
      {/* image */}
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: "50%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />

      {/* item name */}
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        {item.name}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        {/* item price */}
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          {"₹" + item.price}
        </Text>

        {/* add to cart button */}
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 7,
            paddingTop: 7,
          }}
          onPress={() => {
            onAddToCart(item);
          }}
        >
          <Text style={{ color: "#000" }}>add to cart</Text>
        </TouchableOpacity>
      </View>

      {/* favorite */}
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#fff",
          borderRadius: 20,
          elevation: 5,
          position: "absolute",
          top: 10,
          right: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          onAddToWishlist(item);
        }}
      >
        <Image
          source={require("../Images/heart.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyProductItem;
