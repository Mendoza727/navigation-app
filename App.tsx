// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import RoutesNavigator from "./src/routes/RoutesNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RoutesNavigator />
    </NavigationContainer>
  );
}