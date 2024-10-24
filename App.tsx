// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import RoutesNavigator from "./src/routes/RoutesNavigator";
import { DrawerNavigator } from "./src/routes/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}