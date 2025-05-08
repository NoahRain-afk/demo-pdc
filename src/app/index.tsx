import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
} from 'react-native';
import LandingContent from '../components/landing-content';
import WeavyHeader from "../components/weavy-header";
import { RootStackParamList } from '../features/send/types/navigation';
type OnboardingNavProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

const { width, height } = Dimensions.get('window');

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<OnboardingNavProp>();
  const [step, setStep] = useState<number>(0);
  const totalSteps = 4;

  const handleButton = () => {
    navigation.replace("Setup");
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
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
});
