import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Common/CartItem";
import { addItemToCart, removeFromWishlist } from "../Redux/actions/Actions";

const Wishlist = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.reducers2);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, marginTop: 50, marginBottom: 80 }}>
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <CartItem
              item={item}
              isWishlist={"true"}
              onRemoveFromWishlist={() => {
                dispatch(removeFromWishlist(index));
              }}
              onAddToCart={(x) => {
                dispatch(addItemToCart(x));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
