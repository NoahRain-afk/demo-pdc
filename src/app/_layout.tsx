import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerLeft: () => <></> }} />
      <Stack.Screen name="exchange" />
      <Stack.Screen name="setup" />
    </Stack>
  );
}
