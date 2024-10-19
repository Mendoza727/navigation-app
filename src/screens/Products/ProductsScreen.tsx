import React from "react";
import { Text, View } from "react-native";
import GlobalStyles from "../../theme/App-theme";
import { FlatList } from "react-native-gesture-handler";
import { PrimaryButtonComponent } from "../../components/PrimaryButtonComponent";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../routes/RoutesNavigator";

export type Producto = {
  id: number;
  name: string;
  valor: number;
  unidadesDisponibles: number;
  icono: string;
};

const productos: Producto[] = [
  {
    id: 1,
    name: "Laptop",
    valor: 1500,
    unidadesDisponibles: 10,
    icono: "https://example.com/icons/laptop.png",
  },
  {
    id: 2,
    name: "Smartphone",
    valor: 800,
    unidadesDisponibles: 25,
    icono: "https://example.com/icons/smartphone.png",
  },
  {
    id: 3,
    name: "Tablet",
    valor: 600,
    unidadesDisponibles: 15,
    icono: "https://example.com/icons/tablet.png",
  },
  {
    id: 4,
    name: "Smartwatch",
    valor: 250,
    unidadesDisponibles: 50,
    icono: "https://example.com/icons/smartwatch.png",
  },
  {
    id: 5,
    name: "Auriculares",
    valor: 120,
    unidadesDisponibles: 30,
    icono: "https://images.philips.com/is/image/philipsconsumer/a42bf9528bbb43a29f6eb0bf00a62037?wid=700&hei=700&$pnglarge$",
  },
  {
    id: 6,
    name: "Teclado Mecánico",
    valor: 100,
    unidadesDisponibles: 40,
    icono: "https://example.com/icons/keyboard.png",
  },
  {
    id: 7,
    name: "Mouse Gamer",
    valor: 75,
    unidadesDisponibles: 60,
    icono: "https://example.com/icons/mouse.png",
  },
  {
    id: 8,
    name: "Monitor",
    valor: 300,
    unidadesDisponibles: 20,
    icono: "https://example.com/icons/monitor.png",
  },
  {
    id: 9,
    name: "Impresora",
    valor: 200,
    unidadesDisponibles: 15,
    icono: "https://example.com/icons/printer.png",
  },
  {
    id: 10,
    name: "Cámara Web",
    valor: 90,
    unidadesDisponibles: 35,
    icono: "https://example.com/icons/webcam.png",
  },
  {
    id: 11,
    name: "Disco Duro Externo",
    valor: 150,
    unidadesDisponibles: 50,
    icono: "https://example.com/icons/harddrive.png",
  },
  {
    id: 12,
    name: "Memoria USB",
    valor: 30,
    unidadesDisponibles: 100,
    icono: "https://example.com/icons/usb.png",
  }
];

export const ProductsScreen = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={GlobalStyles.container}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Productos
      </Text>

      <FlatList
        data={productos}
        renderItem={({ item }) => (
          <PrimaryButtonComponent
            key={item.id}
            action={() => navigate('Product', item)}
            name={item.name}
          />
        )}
      />

      <PrimaryButtonComponent
        name="Configuracion"
        action={() => navigate('Settings')}
        colorButton="orange"
      />
    </View>
  );
};
