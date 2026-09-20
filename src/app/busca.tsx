import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { catalogo } from "../data/catalogo";
import { cores } from "../theme/cores";

export default function Busca() {
  const [texto, setTexto] = useState("");

  const resultado = catalogo.filter((t) =>
    t.titulo.toLowerCase().includes(texto.trim().toLowerCase())
  );

  return (
    <SafeAreaView style={styles.tela} edges={["top"]}>
      <View style={styles.topo}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color={cores.texto} />
        </Pressable>
        <TextInput
          style={styles.campo}
          placeholder="Buscar séries, filmes e animes"
          placeholderTextColor={cores.textoSuave}
          value={texto}
          onChangeText={setTexto}
          autoFocus
        />
      </View>

      <FlatList
        data={resultado}
        keyExtractor={(t) => t.id}
        contentContainerStyle={{ padding: 16, gap: 10 }}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <Pressable
            style={styles.linha}
            onPress={() => router.push({ pathname: "/detalhes", params: { id: item.id } })}
          >
            <View style={[styles.miniatura, { backgroundColor: item.cor }]} />
            <View>
              <Text style={styles.nome}>{item.titulo}</Text>
              <Text style={styles.info}>
                {item.tipo} • {item.ano}
              </Text>
            </View>
          </Pressable>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nada encontrado. Tente outro nome.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  topo: { flexDirection: "row", alignItems: "center", gap: 12, padding: 16 },
  campo: {
    flex: 1,
    backgroundColor: cores.card,
    color: cores.texto,
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 46,
    fontSize: 16,
  },
  linha: { flexDirection: "row", alignItems: "center", gap: 12 },
  miniatura: { width: 48, height: 68, borderRadius: 6 },
  nome: { color: cores.texto, fontSize: 17, fontWeight: "600" },
  info: { color: cores.textoSuave, fontSize: 13, marginTop: 4 },
  vazio: { color: cores.textoSuave, textAlign: "center", marginTop: 40 },
});