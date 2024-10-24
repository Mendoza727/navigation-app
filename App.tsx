// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./src/routes";
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}