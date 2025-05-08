import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";

const TOTAL_TICKS = 10;
const SILVER_PER_GOLD = 10;

type ContentProps = {
  tab: string;
  goldCount: number;
  setGoldCount: (goldCount: number) => void;
};

export default function Content({
  goldCount,
  setGoldCount,
}: ContentProps) {
  const balance = goldCount * SILVER_PER_GOLD;
  return (
    <View style={styles.content}>
      {/* You will Get */}
      <Text style={styles.sectionLabel}>You will Get</Text>
      <View style={styles.rowCenter}>
        <Image
          source={require("../assets/images/coin-gold.png")}
          style={styles.coin}
        />
        <Text style={styles.amountText}>{goldCount}</Text>
      </View>

      {/* Ticks */}
      <View style={styles.ticksRow}>
        {Array.from({ length: TOTAL_TICKS }).map((_, i) => (
          <TouchableOpacity key={i} onPress={() => setGoldCount(i + 1)}>
            <View
              style={[
                styles.tick,
                {
                  backgroundColor: i < goldCount ? "#FFB300" : "#DDDDDD",
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.balance}>Your Balance {balance}</Text>

      {/* You need to Pay */}
      <Text style={[styles.sectionLabel, { marginTop: 24 }]}>
        You need to Pay
      </Text>
      <View style={styles.rowCenter}>
        <Image
          source={require("../assets/images/coin-silver.png")}
          style={styles.coin}
        />
        <Text style={styles.amountText}>{goldCount * SILVER_PER_GOLD}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  sectionLabel: {
    fontSize: 14,
    color: "#777",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  coin: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  amountText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
  },
  ticksRow: {
    flexDirection: "row",
    marginTop: 16,
  },
  tick: {
    width: 4,
    height: 40,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  balance: {
    alignSelf: "flex-end",
    paddingRight: 24,
    marginTop: 8,
    fontSize: 12,
    color: "#999",
  },
});
