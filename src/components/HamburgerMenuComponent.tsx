import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';

export const HamburgerMenuComponent = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Configura el header con el botón del menú
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Text>Menu</Text>
                </Pressable>
            ),
        });
    }, [navigation]); // Añade `navigation` como dependencia

    return null; // Este componente no renderiza nada por sí mismo
};
