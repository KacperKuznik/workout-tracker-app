import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "@/components/ui/customButton";
import { useRouter } from "expo-router";

const CLIENTS = ["Alice", "Bob", "Charlie", "David"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
    gap: 20,
    backgroundColor: "#f3f4f6",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 20,
    color: "#111",
  },
  clientCard: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 15,
    alignItems: "center",
  },
  clientName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
  },
  backButton: {
    width: "90%",
    marginTop: 20,
  },
});

export default function Clients() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Clients</Text>

      {CLIENTS.map((client, index) => (
        <View key={index} style={styles.clientCard}>
          <Text style={styles.clientName}>{client}</Text>
        </View>
      ))}

      <CustomButton
        title="Back"
        onPress={() => router.back()}
      />
    </ScrollView>
  );
}
