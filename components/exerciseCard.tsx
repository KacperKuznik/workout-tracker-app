import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type ExerciseCardProps = {
  mode?: "view" | "add";
  name?: string;
  reps?: number;
  weight?: number;
  rest?: string;
  onChange?: (exercise: {
    name: string;
    reps: number;
    weight: number;
    rest: string;
  }) => void;
};

export default function ExerciseCard({
  mode = "view",
  name = "",
  reps = 0,
  weight = 0,
  rest = "00:00",
  onChange,
}: ExerciseCardProps) {
  const [exerciseName, setExerciseName] = useState(name);
  const [exerciseReps, setExerciseReps] = useState(reps.toString());
  const [exerciseWeight, setExerciseWeight] = useState(weight.toString());
  const [exerciseRest, setExerciseRest] = useState(rest);

  const handleChange = () => {
    if (onChange) {
      onChange({
        name: exerciseName,
        reps: Number(exerciseReps),
        weight: Number(exerciseWeight),
        rest: exerciseRest,
      });
    }
  };

  if (mode === "add") {
    return (
      <View style={styles.card}>
        <Text style={styles.inputLabel}>Exercise Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter exercise name"
          value={exerciseName}
          onChangeText={(text) => {
            setExerciseName(text);
            handleChange();
          }}
        />

        <Text style={styles.inputLabel}>Reps</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter reps"
          keyboardType="numeric"
          value={exerciseReps}
          onChangeText={(text) => {
            setExerciseReps(text);
            handleChange();
          }}
        />

        <Text style={styles.inputLabel}>Weight (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter weight"
          keyboardType="numeric"
          value={exerciseWeight}
          onChangeText={(text) => {
            setExerciseWeight(text);
            handleChange();
          }}
        />

        <Text style={styles.inputLabel}>Rest Time (mm:ss)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter rest time"
          value={exerciseRest}
          onChangeText={(text) => {
            setExerciseRest(text);
            handleChange();
          }}
        />
      </View>
    );
  }

  // View mode
  return (
    <View style={styles.card}>
      <Text style={styles.exerciseName}>{exerciseName}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Reps:</Text>
        <Text style={styles.infoValue}>{exerciseReps}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Weight:</Text>
        <Text style={styles.infoValue}>{exerciseWeight} kg</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Rest Time:</Text>
        <Text style={styles.infoValue}>{exerciseRest}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: "#111",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: "#555",
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 5,
    marginTop: 10,
  },
});
