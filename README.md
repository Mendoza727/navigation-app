
# 04-navigationapp

![Expo](https://img.shields.io/badge/Expo-51.0.28-blue.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.74.5-blue.svg)
![React Navigation](https://img.shields.io/badge/React%20Navigation-6.6.1-green.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue.svg)

Este proyecto demuestra cómo implementar la navegación entre pantallas en una aplicación de React Native utilizando React Navigation. Se configuran diferentes tipos de navegadores, como `Stack`, `Bottom Tabs`, `Drawer`, y `Top Tabs`.

## Características

- Uso de `Stack Navigator` para gestionar la navegación de las pantallas.
- Integración de `Bottom Tabs` para la navegación inferior.
- Implementación de `Drawer Navigation` para un menú lateral.
- `Top Tabs` con la librería `react-native-tab-view` para la navegación superior.
- Manejo de pantallas responsivas y personalizadas.

## Tecnologías Utilizadas

- **Expo SDK**: `51.0.28`
- **React Native**: `0.74.5`
- **React Navigation**: `6.x`
- **@react-navigation/native`
- **@react-navigation/stack`
- **@react-navigation/bottom-tabs`
- **@react-navigation/drawer`
- **@react-navigation/material-top-tabs`
- **React Native Gesture Handler**
- **React Native Reanimated**
- **React Native Screens**
- **React Native Safe Area Context**

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/04-navigationapp.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd 04-navigationapp
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia la aplicación en Expo:

   ```bash
   npm start
   ```

## Navegación en la App

### 1. Stack Navigator

El Stack Navigator se utiliza para gestionar el flujo de navegación entre diferentes pantallas, permitiendo ir hacia adelante y atrás fácilmente.

### 2. Bottom Tabs Navigator

Se integra el Bottom Tabs Navigator para proporcionar una barra de navegación en la parte inferior de la aplicación, permitiendo a los usuarios cambiar entre diferentes secciones.

```bash
<Tab.Screen 
  name="Tab1" 
  options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<Text>Tab1</Text>) }} 
  component={Tab1Screen} 
/>
```

### 3. Drawer Navigator

El Drawer Navigator permite agregar un menú lateral para acceder rápidamente a diferentes secciones de la app.

```bash
<Drawer.Navigator initialRouteName="Home">
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="Settings" component={SettingsScreen} />
</Drawer.Navigator>
```

### 4. Top Tabs Navigator

Este tipo de navegación permite mostrar pestañas en la parte superior de la pantalla, generalmente utilizado en conjunto con un `Material Top Tabs Navigator`.

```bash
<TopTabs.Navigator>
  <TopTabs.Screen name="TabA" component={TabAScreen} />
  <TopTabs.Screen name="TabB" component={TabBScreen} />
</TopTabs.Navigator>
```

## Dependencias

Aquí están las versiones utilizadas de las dependencias principales:

```bash
{
  "dependencies": {
    "@react-native-masked-view/masked-view": "^0.3.1",
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/drawer": "^6.7.2",
    "@react-navigation/material-top-tabs": "^6.6.14",
    "@react-navigation/native": "^6.1.18",
    "@react-navigation/native-stack": "^6.10.1",
    "@react-navigation/stack": "^6.4.1",
    "expo": "~51.0.28",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-native": "0.74.5",
    "react-native-gesture-handler": "~2.16.1",
    "react-native-pager-view": "6.3.0",
    "react-native-reanimated": "~3.10.1",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "3.31.1",
    "react-native-tab-view": "^3.5.2",
    "react-native-vector-icons": "^10.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.45",
    "@types/react-native-vector-icons": "^6.4.18",
    "typescript": "^5.1.3"
  }
}
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias, no dudes en abrir un [issue](https://github.com/tu-usuario/04-navigationapp/issues) o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.
