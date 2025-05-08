import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../features/send/types/navigation";
import Header from "../components/header";
import Tabs from "../components/tabs";
import Content from "../components/content";
import ActionButton from "../components/action-button";
type ShopNavProp = NavigationProp<RootStackParamList, "Shop">;

const SILVER_PER_GOLD = 10;

const ShopScreen: React.FC = () => {
  const navigation = useNavigation<ShopNavProp>();
  const [tab, setTab] = useState<"TopUp" | "Exchange">("Exchange");
  const [goldCount, setGoldCount] = useState<number>(1);

  const onAction = () => {
    if (tab === "Exchange") {
      console.log(
        `Exchanging ${goldCount * SILVER_PER_GOLD} silver for ${goldCount} gold`
      );
    } else {
      console.log(`Topping up ${goldCount * SILVER_PER_GOLD} silver`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Tabs tab={tab} setTab={setTab} />
      <Content tab={tab} goldCount={goldCount} setGoldCount={setGoldCount} />
      <ActionButton tab={tab} onAction={onAction} />
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F7FA" },
});
