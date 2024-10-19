import { StyleSheet } from "react-native";

export const GlobalColors = {
  primary: "#7037eb",
  secondary: "#f72585",
  tertiary: "#3a0ca3",
  success: "#4cc9f0",
  warning: "#fca311",
  danger: "#e71d36",
  dark: "#22223b",

  background: "#ffffff",
};

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: GlobalColors.background,
  },
  primaryButton: {
    backgroundColor: GlobalColors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: GlobalColors.background,
    fontSize: 18,
  },
  card: {
    width: "100%",
    maxWidth: '100%',
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  productValue: {
    fontSize: 16,
    color: "#666",
  },
  productStock: {
    fontSize: 14,
    color: "#999",
  },
});

export default GlobalStyles;
