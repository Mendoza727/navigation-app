import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { RootStackParams } from "../../routes/RoutesNavigator";
import GlobalStyles from "../../theme/App-theme";

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, "Product">>().params;
  const navigate = useNavigation();

  useEffect(() => {
    navigate.setOptions({
      title: params.name
    })
  }, []);

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.card}>
        <Image src="https://www.mon-site-bug.fr/uploads/products/default-product.png" style={GlobalStyles.image} />
        <Text style={GlobalStyles.productName}>{params.name}</Text>
        <Text style={GlobalStyles.productValue}>Precio: ${params.valor}</Text>
        <Text style={GlobalStyles.productStock}>
          Unidades Disponibles: {params.unidadesDisponibles}
        </Text>
      </View>
    </View>
  );
};
