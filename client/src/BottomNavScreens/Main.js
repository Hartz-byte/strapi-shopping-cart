import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import { products } from "../Products";
import MyProductItem from "../Common/MyProductItem";
import { useDispatch } from "react-redux";
import { addItemToCart, addToWishlist } from "../Redux/actions/Actions";

const Main = () => {
  const dispatch = useDispatch();

  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const [jacketList, setJacketList] = useState([]);

  useEffect(() => {
    let tempCategory = [];

    products.category.map((item) => {
      tempCategory.push(item);
    });

    setCategoryList(tempCategory);
    setTshirtList(products.category[0].data);
    setShoesList(products.category[1].data);
    setJacketList(products.category[2].data);
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginBottom: 80 }}>
        {/* header */}
        <Header />

        {/* banner */}
        <Image
          source={require("../Images/banner.webp")}
          style={{
            width: "94%",
            height: 200,
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 20,
          }}
        />

        {/* categories flatlist */}
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginLeft: 20,
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ color: "#000" }}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* t-shirts */}
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            New T Shirts
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={tshirtList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddToWishlist={(x) => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(x));
                    }}
                  />
                );
              }}
            />
          </View>
        </View>

        {/* Shoes */}
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            New Shoes
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={shoesList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddToWishlist={(x) => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(item));
                    }}
                  />
                );
              }}
            />
          </View>
        </View>

        {/* Jackets */}
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "#000",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            New Jackets
          </Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={jacketList}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <MyProductItem
                    item={item}
                    onAddToWishlist={(x) => {
                      dispatch(addToWishlist(x));
                    }}
                    onAddToCart={(x) => {
                      dispatch(addItemToCart(item));
                    }}
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;
