import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { cores } from "../../theme/cores";

const opcoes: { icone: keyof typeof Ionicons.glyphMap; texto: string }[] = [
  { icone: "heart-outline", texto: "Minha lista" },
  { icone: "time-outline", texto: "Histórico" },
  { icone: "download-outline", texto: "Downloads" },
  { icone: "settings-outline", texto: "Configurações" },
  { icone: "help-circle-outline", texto: "Ajuda" },
];

export default function Meu() {
  return (
    <SafeAreaView style={styles.tela} edges={["top"]}>
      <View style={styles.perfil}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color={cores.texto} />
        </View>
        <View>
          <Text style={styles.nome}>Usuário</Text>
          <Text style={styles.plano}>Plano gratuito</Text>
        </View>
      </View>

      <View style={styles.lista}>
        {opcoes.map((op) => (
          <Pressable key={op.texto} style={styles.opcao}>
            <Ionicons name={op.icone} size={24} color={cores.texto} />
            <Text style={styles.opcaoTexto}>{op.texto}</Text>
            <Ionicons name="chevron-forward" size={20} color={cores.textoSuave} />
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  perfil: { flexDirection: "row", alignItems: "center", gap: 16, padding: 20 },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: cores.card,
    alignItems: "center",
    justifyContent: "center",
  },
  nome: { color: cores.texto, fontSize: 22, fontWeight: "700" },
  plano: { color: cores.textoSuave, fontSize: 14, marginTop: 4 },
  lista: { marginHorizontal: 16, backgroundColor: cores.card, borderRadius: 12 },
  opcao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: cores.borda,
  },
  opcaoTexto: { flex: 1, color: cores.texto, fontSize: 17 },
});