import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { cores } from "../../theme/cores";

export default function Inicio() {
  return (
    <SafeAreaView style={styles.tela} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topo}>
          <Pressable style={styles.busca} onPress={() => router.push("/busca")}>
            <Ionicons name="search-outline" size={22} color={cores.textoSuave} />
            <Text style={styles.buscaTexto}>O Mentalista - Temporada 1</Text>
          </Pressable>
          <Ionicons name="time-outline" size={28} color={cores.texto} />
          <Ionicons name="download-outline" size={28} color={cores.texto} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  topo: { flexDirection: "row", alignItems: "center", gap: 16, paddingHorizontal: 16, paddingTop: 8 },
  busca: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: cores.card,
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 46,
  },
  buscaTexto: { color: cores.textoSuave, fontSize: 16 },
});