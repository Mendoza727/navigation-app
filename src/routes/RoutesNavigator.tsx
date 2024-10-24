import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { ProfileScreen } from "../screens/Profile/ProfileScreen";
import { SettingScreen } from "../screens/Settings/SettingScreen";
import { Producto, ProductsScreen } from "../screens/Products/ProductsScreen";
import { ProductScreen } from "../screens/Products/ProductScreen";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: Producto;
  Settings: undefined;
  About: undefined;
}


const Stack = createStackNavigator<RootStackParams>();

const RoutesNavigator = () => {
  const { setOptions } = useNavigation();

  useEffect(() => {
    setOptions({
      headerShown: false
    })
  }, []);
  

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: "transparent",
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name='Product' component={ ProductScreen } />
    </Stack.Navigator>
  );
};

export default RoutesNavigator;
