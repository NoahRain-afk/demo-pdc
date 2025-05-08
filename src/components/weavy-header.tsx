import { Path } from "react-native-svg";
import { StyleSheet } from "react-native";
import Svg from "react-native-svg";

type WeavyHeaderProps = {
  width: number;
  height: number;
};

export default function WeavyHeader({ width, height }: WeavyHeaderProps) {
  return (
    <Svg
      width={width}
      height={height * 0.4}
      viewBox={`0 0 ${width} ${height * 0.4}`}
      style={styles.svg}
    >
      <Path
        d={`
    M0,0 
    H${width} 
    V${height * 0.3} 
    Q${width * 0.5},${height * 0.45} 0,${height * 0.3} 
    Z
  `}
        fill="#007AFF"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  svg: {
    position: "absolute",
    top: 0,
  },
});
