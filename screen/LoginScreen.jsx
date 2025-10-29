// screens/LoginScreen.jsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("MainTabs")}
      >
        <Text style={styles.buttonText}>Go to App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#111" },
  title: { color: "#fff", fontSize: 26, marginBottom: 30 },
  button: { backgroundColor: "#fff", paddingHorizontal: 30, paddingVertical: 15, borderRadius: 10 },
  buttonText: { fontSize: 18, color: "#111" },
});
