
import WorkoutCalendar from "@/components/calendar";
import CustomButton from '@/components/ui/customButton';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 32,
  },
  greetings: {
    fontSize: 28,
    position: "absolute",
    top: 24,
    left: 16,
    color: '#111',
    fontWeight: '600'
  },
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
    gap: 20,
    backgroundColor: '#f3f4f6'
  },
  button: {
    width: "90%",
  },
  calendarContainer: {
    width: '95%',
    maxWidth: 900,
    alignItems: 'center',
    justifyContent: 'center',
    // white card look
    backgroundColor: '#fff',
    borderRadius: 8,
    
    paddingHorizontal: 10,
    // subtle shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 36,
    paddingVertical: 26
  },
});

export default function Home() {
  const router = useRouter();

  const handleClick = async () => {
    router.push('/workouts');
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <Text style={styles.greetings}>Hi David! 👋</Text>
      <View style={styles.calendarContainer} >
        <WorkoutCalendar/>
      </View>

      {/* larger central call-to-action, spaced from calendar */}
      <CustomButton title="Workouts" onPress={handleClick} />
    </ScrollView>
  );
}
