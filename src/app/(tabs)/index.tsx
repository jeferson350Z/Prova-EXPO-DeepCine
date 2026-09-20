import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { cores } from "../../theme/cores";

const abas = ["Início", "Séries", "Filmes", "Animes", "Novelas"];

export default function Inicio() {
  const [abaAtiva, setAbaAtiva] = useState("Início");

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

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.abas}>
          {abas.map((aba) => (
            <Pressable key={aba} onPress={() => setAbaAtiva(aba)}>
              <Text style={[styles.aba, aba === abaAtiva && styles.abaAtiva]}>{aba}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.banner}>
          <Text style={styles.bannerTitulo}>ATRAÍDOS{"\n"}PELO DESTINO</Text>
          <View style={styles.pontos}>
            <View style={[styles.ponto, styles.pontoAtivo]} />
            <View style={styles.ponto} />
            <View style={styles.ponto} />
            <View style={styles.ponto} />
          </View>
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
  abas: { marginTop: 16, paddingLeft: 16 },
  aba: { color: cores.textoSuave, fontSize: 20, marginRight: 28 },
  abaAtiva: { color: cores.texto, fontWeight: "700" },
  banner: {
    height: 200,
    marginTop: 16,
    backgroundColor: "#4A4033",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  bannerTitulo: { color: cores.ouro, fontSize: 30, fontWeight: "800", letterSpacing: 2 },
  pontos: { position: "absolute", right: 12, bottom: 10, flexDirection: "row", gap: 6 },
  ponto: { width: 8, height: 8, borderRadius: 2, backgroundColor: "#D0D0D0" },
  pontoAtivo: { width: 18, backgroundColor: cores.destaque },
});