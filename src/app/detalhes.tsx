import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { catalogo } from "../data/catalogo";
import { cores } from "../theme/cores";

export default function Detalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [naLista, setNaLista] = useState(false);

  const titulo = catalogo.find((t) => t.id === id);

  if (!titulo) {
    return (
      <SafeAreaView style={styles.tela}>
        <Pressable onPress={() => router.back()} style={{ padding: 16 }}>
          <Ionicons name="arrow-back" size={26} color={cores.texto} />
        </Pressable>
        <Text style={styles.vazio}>Título não encontrado.</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.tela}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.capa, { backgroundColor: titulo.cor }]}>
          <SafeAreaView edges={["top"]}>
            <Pressable onPress={() => router.back()} style={styles.voltar}>
              <Ionicons name="arrow-back" size={26} color={cores.texto} />
            </Pressable>
          </SafeAreaView>
          <Text style={styles.capaTitulo}>{titulo.titulo}</Text>
        </View>

        <View style={styles.corpo}>
          <Text style={styles.meta}>
            {titulo.tipo} • {titulo.genero} • {titulo.ano}
          </Text>
          <Text style={styles.nota}>Nota {titulo.nota.toFixed(1)}</Text>

          <View style={styles.botoes}>
            <Pressable style={[styles.botao, { backgroundColor: cores.destaque }]}>
              <Ionicons name="play" size={20} color={cores.texto} />
              <Text style={styles.botaoTexto}>Assistir</Text>
            </Pressable>
            <Pressable
              style={[styles.botao, { backgroundColor: cores.card }]}
              onPress={() => setNaLista(!naLista)}
            >
              <Ionicons name={naLista ? "checkmark" : "add"} size={20} color={cores.texto} />
              <Text style={styles.botaoTexto}>{naLista ? "Na minha lista" : "Minha lista"}</Text>
            </Pressable>
          </View>

          <Text style={styles.secao}>Sinopse</Text>
          <Text style={styles.sinopse}>{titulo.sinopse}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  capa: { height: 320, justifyContent: "space-between", padding: 16 },
  voltar: { width: 40, height: 40, justifyContent: "center" },
  capaTitulo: { color: cores.texto, fontSize: 32, fontWeight: "800" },
  corpo: { padding: 16 },
  meta: { color: cores.textoSuave, fontSize: 15 },
  nota: { color: cores.ouro, fontSize: 20, fontWeight: "800", marginTop: 6 },
  botoes: { flexDirection: "row", gap: 12, marginTop: 20 },
  botao: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 48,
    borderRadius: 10,
  },
  botaoTexto: { color: cores.texto, fontSize: 16, fontWeight: "700" },
  secao: { color: cores.texto, fontSize: 20, fontWeight: "700", marginTop: 28 },
  sinopse: { color: cores.textoSuave, fontSize: 16, lineHeight: 24, marginTop: 8 },
  vazio: { color: cores.textoSuave, textAlign: "center", marginTop: 40 },
});