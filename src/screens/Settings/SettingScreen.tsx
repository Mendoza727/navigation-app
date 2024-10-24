import React from "react";
import { Text, View } from "react-native";
import GlobalStyles from "../../theme/App-theme";
import { PrimaryButtonComponent } from "../../components/PrimaryButtonComponent";
import { StackActions, useNavigation } from "@react-navigation/native";

export const SettingScreen = () => {
  const { goBack, dispatch } = useNavigation();

  return (
    <View style={GlobalStyles.container}>
      <Text style={{ marginBottom: 10 }}>SettingScreen</Text>

      <PrimaryButtonComponent
        name="Regresar"
        colorButton="red"
        action={() => goBack()}
      />

      <PrimaryButtonComponent
        name="Ir a home"
        colorButton="gray"
        action={() => dispatch( StackActions.popToTop())}
      />
    </View>
  );
};
