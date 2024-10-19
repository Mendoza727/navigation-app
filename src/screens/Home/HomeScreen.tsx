import React from "react";
import { View } from "react-native";
import GlobalStyles from "../../theme/App-theme";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { PrimaryButtonComponent } from "../../components/PrimaryButtonComponent";
import { type RootStackParams } from "../../routes/RoutesNavigator";

export const HomeScreen = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={GlobalStyles.container}>
      <PrimaryButtonComponent
        name="Productos"
        action={() => navigate('Products')}
      />

      <PrimaryButtonComponent
        name="Configuracion"
        action={() => navigate("Settings")}
        colorButton="orange"
      />
    </View>
  );
};
