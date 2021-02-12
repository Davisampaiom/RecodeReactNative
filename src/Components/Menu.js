import React from "react";
import { Image, View, TouchableOpacity } from "react-native";

import Botao from "../../assets/menu.gif";

const Menu = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.openDrawer();
          setTimeout(() => {
            props.navigation.closeDrawer();
          }, 5000);
        }}
      >
        <Image
          style={{
            width: 90,
            height: 90,
            marginLeft: -8,
            marginTop: 5,
            padding: 1,
          }}
          source={Botao}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
