import { View, Text, StyleSheet } from "react-native";

interface NumberSymbolProps {
  number: number;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
}

const NumberSymbol = ({
  number,
  size = 40,
  backgroundColor = "#2E7D32",
  textColor = "#FFFFFF",
}: NumberSymbolProps) => {
  return (
    <View style={[styles.circleContainer, { width: size, height: size }]}>
      <View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
          },
        ]}
      >
        <Text
          style={[
            styles.numberText,
            { color: textColor, fontSize: size * 0.4 },
          ]}
        >
          {number}
        </Text>
      </View>
    </View>
  );
};

export default NumberSymbol;

const styles = StyleSheet.create({
  // Circle styles
  circleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  numberText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
