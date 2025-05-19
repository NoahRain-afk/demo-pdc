import SmallButton from "@/src/components/SmallButton";
import type React from "react";
import { View } from "react-native";

export default function home () {
  const silverCoinSource:string = require("../../assets/images/coin-silver.png")
  const owlSource:string = require("../../assets/images/coin-gold.png")
  return (
    <View>
      <SmallButton imgSource={silverCoinSource} amount={14} ></SmallButton>
      <SmallButton imgSource={owlSource} amount={12}></SmallButton>
    </View>
  );
};