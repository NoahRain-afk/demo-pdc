import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type LandingContentProps = {
  step: number;
  totalSteps: number;
  handleButton: () => void;
};

const { height } = Dimensions.get("window");

export default function LandingContent({
  step,
  totalSteps,
  handleButton,
}: LandingContentProps) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Ready to Catch Your Dream?</Text>
      <Text style={styles.subtitle}>
        Coin now and start your first Su Bu today. Your future self will thank
        you.
      </Text>

      {/* Pagination dots */}
      <View style={styles.dots}>
        {Array.from({ length: totalSteps }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: i === step ? "#FFC700" : "#DDDDDD" },
            ]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Text style={styles.buttonText}>Getting Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: height * 0.25,
    alignItems: "center",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginTop: 8,
  },
  dots: {
    flexDirection: "row",
    marginTop: 24,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  button: {
    backgroundColor: "#007AFF",
    width: "80%",
    paddingVertical: 14,
    borderRadius: 30,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
});
