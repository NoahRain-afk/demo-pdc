import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  tab: string;
  onAction: () => void;
};

export default function ActionButton({ tab, onAction }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onAction}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>
        {tab === "Exchange" ? "Exchange" : "Top Up"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 16,
    backgroundColor: "#007AFF",
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
