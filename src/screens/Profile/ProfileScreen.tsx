import React from 'react'
import { Text, View } from 'react-native'
import GlobalStyles, { GlobalColors } from '../../theme/App-theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PrimaryButtonComponent } from '../../components/PrimaryButtonComponent'
import { DrawerActions, useNavigation } from '@react-navigation/native'

export const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();
  const { dispatch } = useNavigation()

  return (
    <View style={{
      ...GlobalStyles.container,
      marginTop: top    
    }}>
        <Text style={{
          ...GlobalStyles.buttonText,
          color: 'black',
          marginBottom: 20
        }}>ProfileScreen</Text>


        <PrimaryButtonComponent 
          name='Abrir Menu'
          colorButton='green'
          action={() => dispatch( DrawerActions.toggleDrawer)}
        />
    </View>
  )
}
