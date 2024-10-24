import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ProfileScreen } from "../screens/Profile/ProfileScreen";
import { AboutScreen } from "../screens/About/AboutScreen";
import { HamburgerMenuComponent } from "../components/HamburgerMenuComponent";

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburgerMenuComponent />
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
