import CustomButton from "@/components/ui/customButton";
import Timer from "@/components/timer";
import { ScrollView, StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const EXERCISES = [
  "Bench Press #1",
  "Bench Press #2",
  "Pec Fly #1",
  "Pec Fly #2",
];

export default function Exercise() {
  const router = useRouter();
  const repGoal = 10;
  const [modalVisible, setModalVisible] = useState(false);
  const [currentReps, setCurrentReps] = useState(0);
  const [previousReps] = useState(8);
  const [previousRestTime] = useState("01:30");
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const handleSkipRest = () => {
    setModalVisible(false);
    if (currentExerciseIndex < EXERCISES.length - 1) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
      setCurrentReps(0);
    }
  };

  const handleFinishWorkout = () => {
    setModalVisible(false);
    router.push("/");
  };

  const isLastExercise = currentExerciseIndex === EXERCISES.length - 1;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.mainContainer}>
      <View style={styles.container}>
        <CustomButton title={EXERCISES[currentExerciseIndex]} onPress={() => {}} disabled={true} height={60}/>
        <Text style={styles.repText}>Rep Goal: {repGoal}</Text>
        <Timer />
      </View>

      <CustomButton title="Rest" onPress={() => setModalVisible(true)} mode="stop" />

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Rest Info</Text>

            <Text style={styles.label}>Reps Count:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="0"
              value={String(currentReps)}
              onChangeText={(text) => setCurrentReps(Number(text))}
            />

            <Text style={styles.infoText}>Previous Reps: {previousReps}</Text>
            <Text style={styles.infoText}>Previous Rest Time: {previousRestTime}</Text>
            <Timer
              mode="countdown"
              initialSeconds={30}
              startImmediately
              key={modalVisible ? "start" : "stop"}
            />

            <View style={styles.modalButtons}>
              {isLastExercise ? (
                <CustomButton 
                  title="Finish Workout" 
                  onPress={handleFinishWorkout} 
                  width="75%" 
                  height={50} 
                  mode="stop"
                />
              ) : (
                <CustomButton 
                  title="Skip Rest" 
                  onPress={handleSkipRest} 
                  width="75%" 
                  height={50} 
                  mode="stop"
                />
              )}
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 60,
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  repText: {
      marginTop: 40,
      marginBottom: 30,
    fontSize: 30,
    color: '#333333',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 5,
  },
  closeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  infoText: {
    fontSize: 16,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
});
