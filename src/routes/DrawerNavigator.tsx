import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import RoutesNavigator from './RoutesNavigator';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { GlobalColors } from '../theme/App-theme';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={ (props) => <CustomDrawerContent {...props} />}

      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerActiveBackgroundColor: GlobalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveBackgroundColor: GlobalColors.secondary,
        drawerInactiveTintColor: 'White',
        drawerStatusBarAnimation: 'slide',
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        }
      }}
    >
      <Drawer.Screen name="RoutesNavigator" component={RoutesNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: GlobalColors.secondary,
          margin: 30,
          borderRadius: 50
        }}
      ></View>

      <DrawerItemList 
        {...props}
      />
    </DrawerContentScrollView>
  )
}