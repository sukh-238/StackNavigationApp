import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.row}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.hello}>Hello, Sandra</Text>
            <Text style={styles.date}>Today 25 Nov.</Text>
          </View>
        </View>
      </View>

      {/* Daily Challenge */}
      <View style={styles.challengeCard}>
        <Text style={styles.challengeTitle}>Daily challenge</Text>
        <Text style={styles.challengeText}>Do your plan before 09:00 AM</Text>
      </View>

      {/* Week */}
      <View style={styles.week}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
          <View key={i} style={d === "Wed" ? styles.activeDay : styles.day}>
            <Text style={styles.dayText}>{d}</Text>
          </View>
        ))}
      </View>

      {/* Your Plan */}
      <Text style={styles.planTitle}>Your plan</Text>

      <View style={styles.planContainer}>
        <TouchableOpacity
          style={[styles.planBox, { backgroundColor: "#FBBE5E" }]}
          onPress={() => navigation.getParent()?.navigate("Details", { title: "Yoga Group" })}
        >
          <Text style={styles.planLabel}>Medium</Text>
          <Text style={styles.planName}>Yoga Group</Text>
          <Text style={styles.planInfo}>25 Nov. | 14:00 - 15:00 | A5 room</Text>
          <Text style={styles.trainer}>Trainer: Tiffany Way</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.planBox, { backgroundColor: "#A6C9FF" }]}
          onPress={() => navigation.getParent()?.navigate("Details", { title: "Balance" })}
        >
          <Text style={styles.planLabel}>Light</Text>
          <Text style={styles.planName}>Balance</Text>
          <Text style={styles.planInfo}>28 Nov. | 18:00 - 19:30 | A2 room</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EAE6FA", padding: 20 },
  header: { marginTop: 40, marginBottom: 10 },
  row: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  hello: { fontSize: 20, fontWeight: "700" },
  date: { fontSize: 14, color: "#555" },

  challengeCard: {
    backgroundColor: "#BFAAFF",
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
  },
  challengeTitle: { fontSize: 20, fontWeight: "700", color: "#000" },
  challengeText: { fontSize: 14, color: "#333", marginTop: 5 },

  week: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  day: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    width: 40,
    alignItems: "center",
  },
  activeDay: {
    backgroundColor: "#000",
    borderRadius: 20,
    paddingVertical: 10,
    width: 40,
    alignItems: "center",
  },
  dayText: { color: "#000", fontWeight: "500" },

  planTitle: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  planContainer: { flexDirection: "row", justifyContent: "space-between" },
  planBox: {
    width: "47%",
    borderRadius: 20,
    padding: 15,
  },
  planLabel: { fontWeight: "600", fontSize: 13 },
  planName: { fontWeight: "700", fontSize: 18, marginVertical: 5 },
  planInfo: { fontSize: 12, color: "#333" },
  trainer: { marginTop: 5, fontSize: 12, color: "#000" },
});
