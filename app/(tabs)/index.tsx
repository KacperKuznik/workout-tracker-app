import WorkoutCalendar from "@/components/calendar";
import CustomButton from "@/components/ui/customButton";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useUser } from "@/context/userContext";

const styles = StyleSheet.create({
  greetings: {
    fontSize: 28,
    position: "absolute",
    top: 24,
    left: 16,
    color: "#111",
    fontWeight: "600",
  },
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
    gap: 20,
    backgroundColor: "#f3f4f6",
  },
  calendarContainer: {
    width: "95%",
    maxWidth: 900,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 36,
    paddingVertical: 26,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    width: "90%",
  },
});

export default function Home() {
  const router = useRouter();
  const { isTrainer } = useUser();

  const handleWorkoutsClick = () => {
    router.push("/workouts");
  };

  const handleClientsClick = () => {
    router.push("/clients");
  };

  const greetingName = `${isTrainer ? "Trainer " : ""}David`;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <Text style={styles.greetings}>Hi {greetingName}! 👋</Text>

      <View style={styles.calendarContainer}>
        <WorkoutCalendar />
      </View>

      <View style={styles.buttonsRow}>
        <CustomButton
          title="Workouts"
          onPress={handleWorkoutsClick}
            width={isTrainer ? "45%" : "100%"}
        />

        {isTrainer && (
          <CustomButton
            title="Clients"
            onPress={handleClientsClick}
            width={"45%"}
          />
        )}
      </View>
    </ScrollView>
  );
}
