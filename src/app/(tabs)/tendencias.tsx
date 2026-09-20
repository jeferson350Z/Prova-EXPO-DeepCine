import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { catalogo } from "../../data/catalogo";
import { cores } from "../../theme/cores";

const ranking = [...catalogo].sort((a, b) => b.nota - a.nota);

export default function Tendencias() {
  return (
    <SafeAreaView style={styles.tela} edges={["top"]}>
      <Text style={styles.titulo}>Tendências</Text>
      <Text style={styles.subtitulo}>Os mais assistidos da semana</Text>

      <FlatList
        data={ranking}
        keyExtractor={(t) => t.id}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item, index }) => (
          <Pressable
            style={styles.linha}
            onPress={() => router.push({ pathname: "/detalhes", params: { id: item.id } })}
          >
            <Text style={styles.posicao}>{index + 1}</Text>
            <View style={[styles.miniatura, { backgroundColor: item.cor }]} />
            <View style={{ flex: 1 }}>
              <Text style={styles.nome}>{item.titulo}</Text>
              <Text style={styles.info}>
                {item.tipo} • {item.genero} • {item.ano}
              </Text>
            </View>
            <Text style={styles.nota}>{item.nota.toFixed(1)}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  titulo: { color: cores.texto, fontSize: 28, fontWeight: "800", marginTop: 12, marginHorizontal: 16 },
  subtitulo: { color: cores.textoSuave, fontSize: 15, marginHorizontal: 16, marginTop: 4 },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: cores.card,
    borderRadius: 10,
    padding: 10,
  },
  posicao: { color: cores.destaque, fontSize: 26, fontWeight: "800", width: 30, textAlign: "center" },
  miniatura: { width: 56, height: 78, borderRadius: 6 },
  nome: { color: cores.texto, fontSize: 17, fontWeight: "700" },
  info: { color: cores.textoSuave, fontSize: 13, marginTop: 4 },
  nota: { color: cores.ouro, fontSize: 18, fontWeight: "800" },
});