import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="permissions" options={{ headerShown: false }} />
      <Stack.Screen name="selectContacts" options={{ headerShown: false }} />
    </Stack>
  );
}
