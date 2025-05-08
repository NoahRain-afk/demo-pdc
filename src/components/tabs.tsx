import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

type Tab = 'TopUp' | 'Exchange';

// Props interface for the TabSwitcher component
interface TabSwitcherProps {
  tab: Tab;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}

export default function Tabs({ tab, setTab }: TabSwitcherProps) {
  return (
    <View style={styles.tabs}>
      {(["Top Up", "Exchange"] as const).map((label) => {
        const key = label.replace(" ", "") as "TopUp" | "Exchange";
        const selected = key === tab;
        return (
          <TouchableOpacity
            key={key}
            style={styles.tabItem}
            onPress={() => setTab(key)}
          >
            <Text style={[styles.tabText, selected && styles.tabTextActive]}>
              {label}
            </Text>
            {selected && <View style={styles.underline} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 16,
    color: "#777",
  },
  tabTextActive: {
    color: "#111",
    fontWeight: "600",
  },
  underline: {
    position: "absolute",
    bottom: 0,
    height: 2,
    width: width / 2 - 32,
    backgroundColor: "#007AFF",
    borderRadius: 1,
  },
});
