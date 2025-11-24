import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "@/components/ui/customButton";
import ExerciseCard from "@/components/exerciseCard";

const EXERCISES = [
  { name: "Bench Press #1", reps: 10, weight: 50, rest: "00:30" },
  { name: "Bench Press #2", reps: 10, weight: 55, rest: "00:30" },
  { name: "Pec Fly #1", reps: 12, weight: 25, rest: "00:45" },
  { name: "Pec Fly #2", reps: 12, weight: 27, rest: "00:45" },
];

export default function WorkoutOverview() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.mainContainer}>
      <Text style={styles.title}>Workout Plan</Text>

      {EXERCISES.map((exercise, index) => (
        <ExerciseCard
          key={index}
          name={exercise.name}
          reps={exercise.reps}
          weight={exercise.weight}
          rest={exercise.rest}
        />
      ))}

      <CustomButton
        title="Start Workout"
        onPress={() => router.push("/exercise")}
        width="90%"
        height={60}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: "center",
    backgroundColor: "#f3f4f6",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333",
  },
});
