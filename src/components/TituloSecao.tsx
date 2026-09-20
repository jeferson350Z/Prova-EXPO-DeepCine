import { StyleSheet, Text } from "react-native";
import { cores } from "../theme/cores";

export function TituloSecao({ texto }: { texto: string }) {
  return <Text style={styles.texto}>{texto}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    color: cores.texto,
    fontSize: 20,
    fontWeight: "700",
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
});