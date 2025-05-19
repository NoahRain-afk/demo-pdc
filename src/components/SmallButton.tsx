import { Image } from "expo-image";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    type GestureResponderEvent
} from "react-native";

type Props = {
  imgSource: string;
  amount: number;
  onPress?: (event: GestureResponderEvent) => void
};

export default function Buttton({ imgSource, amount, onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={imgSource} style={styles.image} />
      <Text style={styles.amount}>{amount}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 6,
    resizeMode: "contain",
  },
  amount: {
    fontSize: 16,
    color: "#333",
  },
});
