import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import LandingContent from "../components/landing-content";
import WeavyHeader from "../components/weavy-header";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const totalSteps = 4;

  const handleButton = () => {
    router.push("/setup");
  };

  return (
    <View style={styles.container}>
      <WeavyHeader width={width} height={height} />
      <LandingContent
        step={step}
        totalSteps={totalSteps}
        handleButton={handleButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
});