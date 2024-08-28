import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function AuthLayout() {
  const user = useSelector((state: RootState) =>
    state.user.currentUser === null ? null : state.user.currentUser
  );
  return (
    <Stack>
      {!user ? (
        <Stack.Screen name="index" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="permissions" options={{ headerShown: false }} />
      )}
      <Stack.Screen name="selectContacts" options={{ headerShown: false }} />
    </Stack>
  );
}
