import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "@/components/ui/customButton";
import ExerciseCard from "@/components/exerciseCard";
import { useUser } from "@/context/userContext";

export default function Workouts() {
  const router = useRouter();
  const { isTrainer } = useUser();

  const [modalVisible, setModalVisible] = useState(false);
  const [clientsModalVisible, setClientsModalVisible] = useState(false);

  const [workoutName, setWorkoutName] = useState("");
  const [exercises, setExercises] = useState<
    { name: string; reps: number; weight: number; rest: string }[]
  >([]);

  const [clients, setClients] = useState([
    { id: 1, name: "Alice", selected: false },
    { id: 2, name: "Bob", selected: false },
    { id: 3, name: "Charlie", selected: false },
  ]);

  const [workouts, setWorkouts] = useState<string[]>(["BACK", "CHEST", "LEGS", "ABS"]);

  const handleAddExercise = () => {
    setExercises((prev) => [
      ...prev,
      { name: "", reps: 0, weight: 0, rest: "00:30" },
    ]);
  };

  const handleExerciseChange = (
    index: number,
    updated: { name?: string; reps?: number; weight?: number; rest?: string }
  ) => {
    setExercises((prev) =>
      prev.map((ex, i) => (i === index ? { ...ex, ...updated } : ex))
    );
  };

  const handleSaveWorkout = () => {
    if (workoutName.trim() === "") return; 
    setWorkouts((prev) => [...prev, workoutName]);
    setModalVisible(false);
    setWorkoutName("");
    setExercises([]);
  };

  const toggleClientSelection = (id: number) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === id ? { ...client, selected: !client.selected } : client
      )
    );
  };

  const handleSaveClients = () => {
    const selectedClients = clients.filter(c => c.selected);
    setClientsModalVisible(false);
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <Text style={styles.header}>workouts</Text>

      {workouts.map((name) => (
        <View key={name} style={styles.workoutWrapper}>
          <CustomButton title={name} onPress={() => router.push(`/review`)} />

          {isTrainer && (
            <TouchableOpacity
              style={styles.clientButton}
              onPress={() => setClientsModalVisible(true)}
            >
              <Text style={styles.clientButtonText}>Clients</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}

      <View style={styles.createButtonWrapper}>
        <Button title="Create" onPress={() => setModalVisible(true)} />
      </View>

      {/* Workout Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create Workout</Text>

            <TextInput
              style={styles.input}
              placeholder="Workout Name"
              value={workoutName}
              onChangeText={setWorkoutName}
            />

            <ScrollView
              style={{ width: "100%", maxHeight: 400, marginVertical: 10 }}
            >
              {exercises.map((exercise, idx) => (
                <ExerciseCard
                  key={idx}
                  mode="add"
                  {...exercise}
                  onChange={(updated) => handleExerciseChange(idx, updated)}
                />
              ))}
            </ScrollView>

            <CustomButton
              title="Add Exercise"
              onPress={handleAddExercise}
              width="100%"
              height={50}
            />

            <View style={styles.modalButtons}>
              <CustomButton
                title="Cancel"
                mode="stop"
                onPress={() => {
                  setModalVisible(false);
                  setWorkoutName("");
                  setExercises([]);
                }}
                width="45%"
                height={50}
              />
              <CustomButton
                title="Save"
                onPress={handleSaveWorkout}
                width="45%"
                height={50}
                mode="stop"
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Clients Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={clientsModalVisible}
        onRequestClose={() => setClientsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Clients</Text>

            <ScrollView style={{ width: "100%", maxHeight: 300 }}>
              {clients.map((client) => (
                <TouchableOpacity
                  key={client.id}
                  style={styles.clientItem}
                  onPress={() => toggleClientSelection(client.id)}
                >
                  <Text style={{ flex: 1 }}>{client.name}</Text>
                  <View
                    style={[
                      styles.checkbox,
                      client.selected && styles.checkboxSelected,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.modalButtons}>
              <CustomButton
                title="Cancel"
                mode="stop"
                onPress={() => setClientsModalVisible(false)}
                width="45%"
                height={50}
              />
              <CustomButton
                title="Save"
                onPress={handleSaveClients}
                width="45%"
                height={50}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingTop: 40,
    alignItems: "center",
    paddingBottom: 40,
  },
  header: {
    textAlign: "center",
    marginBottom: 60,
    color: "#111",
    fontSize: 26,
    fontWeight: "700",
    letterSpacing: 0.2,
    textTransform: "capitalize",
  },
  workoutWrapper: {
    width: "90%",
    marginBottom: 20,
    position: "relative",
    justifyContent: "center",
  },
  clientButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#3b82f6",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  clientButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  createButtonWrapper: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
  },
  clientItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  checkboxSelected: {
    backgroundColor: "#3b82f6",
    borderColor: "#3b82f6",
  },
});
