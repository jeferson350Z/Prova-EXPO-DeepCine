import { useState } from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartazCard } from "../../components/CartazCard";
import { catalogo, generos } from "../../data/catalogo";
import { cores } from "../../theme/cores";

export default function Explorar() {
  const [genero, setGenero] = useState<string | null>(null);

  const resultado = genero ? catalogo.filter((t) => t.genero === genero) : catalogo;

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

      <FlatList
        data={resultado}
        keyExtractor={(t) => t.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ padding: 16, gap: 16 }}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <CartazCard item={item} largura={150} />
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum título neste gênero.</Text>}
      />
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
  vazio: { color: cores.textoSuave, textAlign: "center", marginTop: 40 },
});