import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Titulo } from "../data/catalogo";
import { cores } from "../theme/cores";

type Props = { item: Titulo; largura?: number };

export function CartazCard({ item, largura = 140 }: Props) {
  function abrirDetalhes() {
    router.push({ pathname: "/detalhes", params: { id: item.id } });
  }

  return (
    <Pressable style={{ width: largura }} onPress={abrirDetalhes}>
      <View style={[styles.cartaz, { backgroundColor: item.cor, height: largura * 1.4 }]}>
        <Text style={styles.tituloNoCartaz}>{item.titulo}</Text>
        <Text style={styles.nota}>{item.nota.toFixed(1)}</Text>
      </View>
      <Text numberOfLines={1} style={styles.legenda}>
        {item.titulo}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cartaz: {
    borderRadius: 8,
    padding: 10,
    justifyContent: "space-between",
  },
  tituloNoCartaz: {
    color: cores.texto,
    fontSize: 16,
    fontWeight: "800",
  },
  nota: {
    color: cores.destaque,
    fontSize: 20,
    fontWeight: "800",
    alignSelf: "flex-end",
  },
  legenda: {
    color: cores.textoSuave,
    fontSize: 15,
    marginTop: 8,
  },
});