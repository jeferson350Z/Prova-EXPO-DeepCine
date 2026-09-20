import { useState } from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { CartazCard } from "../../components/CartazCard";
import { TituloSecao } from "../../components/TituloSecao";
import { catalogo, plataformas } from "../../data/catalogo";
import { cores } from "../../theme/cores";

const abas = ["Início", "Séries", "Filmes", "Animes", "Novelas"];
const tipoPorAba: Record<string, string> = {
  Séries: "Série",
  Filmes: "Filme",
  Animes: "Anime",
  Novelas: "Novela",
};

export default function Inicio() {
  const [abaAtiva, setAbaAtiva] = useState("Início");

  const lista =
    abaAtiva === "Início" ? catalogo : catalogo.filter((t) => t.tipo === tipoPorAba[abaAtiva]);

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

        <TituloSecao texto="Streaming" />
        <FlatList
          horizontal
          data={plataformas}
          keyExtractor={(p) => p.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listaHorizontal}
          renderItem={({ item }) => (
            <View style={[styles.plataforma, { backgroundColor: item.fundo }]}>
              <Text style={[styles.plataformaNome, { color: item.texto }]}>{item.nome}</Text>
            </View>
          )}
        />

        <TituloSecao texto="Novidades Mais Populares" />
        <FlatList
          horizontal
          data={lista}
          keyExtractor={(t) => t.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listaHorizontal}
          renderItem={({ item }) => <CartazCard item={item} />}
          ListEmptyComponent={<Text style={styles.vazio}>Nada por aqui ainda.</Text>}
        />
        <View style={{ height: 24 }} />
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
  listaHorizontal: { paddingHorizontal: 16, gap: 12 },
  plataforma: { width: 220, height: 120, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  plataformaNome: { fontSize: 28, fontWeight: "800" },
  vazio: { color: cores.textoSuave },
});