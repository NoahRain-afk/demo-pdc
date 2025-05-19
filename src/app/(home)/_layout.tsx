import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#007EFF" }}>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-outline" : "home-sharp"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerTitle: "History",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? "chevron-up-circle-outline"
                  : "chevron-back-circle-sharp"
              }
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="coin"
        options={{
          headerTitle: "coin",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "at-circle-outline" : "at-circle-sharp"}
              color={color}
              size={30}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          headerTitle: "Setting",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "settings-outline" : "settings-sharp"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="exit"
        options={{
          headerTitle: "exit",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "exit-outline" : "exit-sharp"}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
}
