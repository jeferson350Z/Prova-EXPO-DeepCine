import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { cores } from "../theme/cores";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: cores.fundo },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="busca" />
        <Stack.Screen name="detalhes" />
      </Stack>
    </>
  );
}