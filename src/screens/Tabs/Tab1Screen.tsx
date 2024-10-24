import React from "react";
import { Text, View } from "react-native";
import { HamburgerMenuComponent } from "../../components/HamburgerMenuComponent"
import GlobalStyles from "../../theme/App-theme";

export const Tab1Screen = () => {
  return (
    <View style={ GlobalStyles.container }>
      <HamburgerMenuComponent />
      <Text>Tab1Screen</Text>
    </View>
  );
};
