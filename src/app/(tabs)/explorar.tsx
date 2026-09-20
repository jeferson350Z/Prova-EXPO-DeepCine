import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { generos } from "../../data/catalogo";
import { cores } from "../../theme/cores";

export default function Explorar() {
  const [genero, setGenero] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.tela} edges={["top"]}>
      <Text style={styles.titulo}>Explorar</Text>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
          {generos.map((g) => {
            const ativo = g === genero;
            return (
              <Pressable
                key={g}
                onPress={() => setGenero(ativo ? null : g)}
                style={[styles.chip, ativo && styles.chipAtivo]}
              >
                <Text style={[styles.chipTexto, ativo && { color: cores.texto }]}>{g}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  titulo: { color: cores.texto, fontSize: 28, fontWeight: "800", marginTop: 12, marginHorizontal: 16 },
  chips: { paddingHorizontal: 16, paddingVertical: 16, gap: 10 },
  chip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: cores.card },
  chipAtivo: { backgroundColor: cores.destaque },
  chipTexto: { color: cores.textoSuave, fontSize: 15 },
});