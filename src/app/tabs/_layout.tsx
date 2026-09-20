import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { cores } from "../../theme/cores";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: cores.card, borderTopColor: cores.borda },
        tabBarActiveTintColor: cores.texto,
        tabBarInactiveTintColor: cores.textoSuave,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="tendencias"
        options={{
          title: "Tendências",
          tabBarIcon: ({ color, size }) => <Ionicons name="tv-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="explorar"
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, size }) => <Ionicons name="folder-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="indicacao"
        options={{
          title: "Indicação",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="meu"
        options={{
          title: "Meu",
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}