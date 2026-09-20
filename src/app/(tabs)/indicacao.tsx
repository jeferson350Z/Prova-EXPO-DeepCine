import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { catalogo, Titulo } from "../../data/catalogo";
import { cores } from "../../theme/cores";

export default function Indicacao() {
  const [sorteado, setSorteado] = useState<Titulo | null>(null);

  function sortear() {
    const indice = Math.floor(Math.random() * catalogo.length);
    setSorteado(catalogo[indice]);
  }

  return (
    <SafeAreaView style={styles.tela} edges={["top"]}>
      <Text style={styles.titulo}>Indicação</Text>
      <Text style={styles.subtitulo}>Sem ideia do que assistir? Sorteie um título.</Text>

      <View style={styles.centro}>
        {sorteado ? (
          <Pressable
            style={[styles.resultado, { backgroundColor: sorteado.cor }]}
            onPress={() => router.push({ pathname: "/detalhes", params: { id: sorteado.id } })}
          >
            <Text style={styles.resultadoTitulo}>{sorteado.titulo}</Text>
            <Text style={styles.resultadoInfo}>
              {sorteado.tipo} • {sorteado.genero} • nota {sorteado.nota.toFixed(1)}
            </Text>
            <Text style={styles.resultadoLink}>Toque para ver detalhes</Text>
          </Pressable>
        ) : (
          <Text style={styles.dica}>Nenhum título sorteado ainda.</Text>
        )}

        <Pressable style={styles.botao} onPress={sortear}>
          <Text style={styles.botaoTexto}>{sorteado ? "Sortear outro" : "Sortear título"}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  titulo: { color: cores.texto, fontSize: 28, fontWeight: "800", marginTop: 12, marginHorizontal: 16 },
  subtitulo: { color: cores.textoSuave, fontSize: 15, marginHorizontal: 16, marginTop: 4 },
  centro: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, gap: 24 },
  dica: { color: cores.textoSuave, fontSize: 16 },
  resultado: { width: "100%", borderRadius: 14, padding: 24, gap: 8 },
  resultadoTitulo: { color: cores.texto, fontSize: 26, fontWeight: "800" },
  resultadoInfo: { color: cores.texto, fontSize: 15 },
  resultadoLink: { color: cores.texto, fontSize: 13, marginTop: 8, opacity: 0.8 },
  botao: { backgroundColor: cores.destaque, paddingHorizontal: 32, paddingVertical: 14, borderRadius: 10 },
  botaoTexto: { color: cores.texto, fontSize: 17, fontWeight: "700" },
});