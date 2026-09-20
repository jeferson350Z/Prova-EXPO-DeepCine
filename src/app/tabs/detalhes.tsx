import { StyleSheet, Text, View } from "react-native";
import { cores } from "../../theme/cores";

export default function Detalhes() {
  return (
    <View style={styles.tela}>
      <Text style={styles.texto}>Detalhes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: cores.fundo },
  texto: { color: cores.texto, fontSize: 24 },
});