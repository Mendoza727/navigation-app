import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1Screen } from "../screens/Tabs/Tab1Screen";
import { Tab2Screen } from "../screens/Tabs/Tab2Screen";
import { Tab3Screen } from "../screens/Tabs/Tab3Screen";
import { GlobalColors } from "../theme/App-theme";
import { Text } from "react-native";
import { TopTabsNavigator } from "./TopTabsNavigator";
import RoutesNavigator from "./RoutesNavigator";
import { IconComponent } from "../components/IconComponent";

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: GlobalColors.background,
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: "transparent",
          shadowColor: "transparent",
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          tabBarIcon: ({ color }) => (
            <IconComponent
              nameIcon="list-outline"
              size={25} // Cambia el tamaño según tus necesidades
              color={color}
            />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          tabBarIcon: ({ color }) => (
            <IconComponent
              nameIcon="information-circle-outline"
              size={30} // Cambia el tamaño según tus necesidades
              color={color}
            />
          ),
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          tabBarIcon: ({ color }) => (
            <IconComponent
              nameIcon="body-outline"
              size={30} // Cambia el tamaño según tus necesidades
              color={color}
            />
          ),
        }}
        component={RoutesNavigator}
      />
    </Tab.Navigator>
  );
};
