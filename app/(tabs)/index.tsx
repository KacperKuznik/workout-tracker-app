
import { Text, View, TextInput, Image, Button, StyleSheet } from "react-native";
import WorkoutCalendar from "@/components/calendar";
import { useRouter } from 'expo-router';

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
    fontSize: 32,
    position: "absolute",
    top: 50,
    left: 20
  },
  container: {
    flex: 1,
    paddingTop: 130,
    alignItems: "center",
    gap: 25
  },
  button: {
    width: "80%",
  },
  calendarContainer: {
    width: "80%",
    height: "55%",
    maxWidth: 400
  },
});

export default function Home() {
  const router = useRouter();

  const handleClick = async () => {
    router.push('/workouts');
  };

  return (
    <View
      style={styles.container}
    >
      <View style={styles.calendarContainer} >
        <WorkoutCalendar/>
      </View>
      <Text style={styles.greetings}>Hi David! 👋</Text>
      <View style={styles.button}>
        <Button title="Workouts" onPress={handleClick}/>
      </View>
    </View>
  );
}
