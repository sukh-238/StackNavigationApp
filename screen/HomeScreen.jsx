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
            source={{
              uri: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
            }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.hello}>Hello, Sukhvinder</Text>
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
            <Text style={[styles.dayText, d === "Wed" && { color: "rgba(255, 255, 255, 1)" }]}>{d}</Text>
          </View>
        ))}
      </View>

      {/* Your Plan */}
      <Text style={styles.planTitle}>Your plan</Text>

      <View style={styles.planContainer}>
        <TouchableOpacity
          style={[styles.planBox, { backgroundColor: "rgba(167, 109, 39, 1)" }]}
          onPress={() => navigation.getParent()?.navigate("Details", { title: "Yoga Group" })}
        >
          <Text style={styles.planLabel}>Medium</Text>
          <Text style={styles.planName}>Yoga Group</Text>
          <Text style={styles.planInfo}>25 Nov. | 14:00 - 15:00 | A5 room</Text>
          <Text style={styles.trainer}>Trainer: Tiffany Way</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.planBox, { backgroundColor: "rgba(152, 154, 158, 1)" }]}
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
  container: { flex: 1, backgroundColor: "rgba(248, 246, 255, 1)", padding: 20 },
  header: { marginTop: 40, marginBottom: 10 },
  row: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 55, height: 55, borderRadius: 27.5, marginRight: 12 },
  hello: { fontSize: 20, fontWeight: "700", color: "rgba(46, 44, 77, 1)" },
  date: { fontSize: 14, color: "rgba(108, 106, 138, 1)" },

  challengeCard: {
    backgroundColor: "rgba(208, 188, 255, 1)",
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
  },
  challengeTitle: { fontSize: 20, fontWeight: "700", color: "rgba(46, 44, 77, 1)" },
  challengeText: { fontSize: 14, color: "rgba(63, 60, 91, 1)", marginTop: 5 },

  week: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  day: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    paddingVertical: 10,
    width: 40,
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  activeDay: {
    backgroundColor: "rgba(108, 99, 255, 1)",
    borderRadius: 20,
    paddingVertical: 10,
    width: 40,
    alignItems: "center",
  },
  dayText: { color: "rgba(46, 44, 77, 1)", fontWeight: "500" },

  planTitle: { fontSize: 20, fontWeight: "700", marginBottom: 10, color: "rgba(46, 44, 77, 1)" },
  planContainer: { flexDirection: "row", justifyContent: "space-between" },
  planBox: {
    width: "47%",
    borderRadius: 20,
    padding: 15,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  planLabel: { fontWeight: "600", fontSize: 13, color: "rgba(51, 51, 51, 1)" },
  planName: { fontWeight: "700", fontSize: 18, marginVertical: 5, color: "rgba(46, 44, 77, 1)" },
  planInfo: { fontSize: 12, color: "rgba(63, 60, 91, 1)" },
  trainer: { marginTop: 5, fontSize: 12, color: "rgba(46, 44, 77, 1)" },
});
