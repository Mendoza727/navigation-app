import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import GlobalStyles from "../../theme/App-theme";
import { DrawerActions, type NavigationProp, useNavigation } from "@react-navigation/native";
import { PrimaryButtonComponent } from "../../components/PrimaryButtonComponent";
import { type RootStackParams } from "../../routes/RoutesNavigator";

export const HomeScreen = () => {
  const { navigate, setOptions, dispatch } = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    setOptions({
        headerLeft: () => (
          <Pressable onPress={() => dispatch( DrawerActions.toggleDrawer )}>
            <Text>Menu</Text>
          </Pressable>
        )
    })
  }, [])
  

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
