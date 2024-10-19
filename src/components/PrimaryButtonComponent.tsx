import React from "react";
import { Pressable, Text } from "react-native";
import GlobalStyles, { GlobalColors } from "../theme/App-theme";

interface Props {
    name: string,
    action: () => void;
    colorButton?: string;
}

export const PrimaryButtonComponent = ({ name, colorButton, action }: Props) => {

  return (
    <Pressable
      onPress={action}
      style={{
        ...GlobalStyles.primaryButton,
        backgroundColor: colorButton === undefined ? GlobalColors.primary : colorButton
      }}
    >
      <Text style={GlobalStyles.buttonText}>{ name }</Text>
    </Pressable>
  );
};
