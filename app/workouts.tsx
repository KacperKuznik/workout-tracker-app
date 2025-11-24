import CustomButton from "@/components/ui/customButton";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Workouts() {

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <Text style={styles.header}>workouts</Text>
      <CustomButton title="BACK" onPress={() => {}} />
      <CustomButton title="CHEST" onPress={() => {}} />
      <CustomButton title="LEGS" onPress={() => {}} />
      <CustomButton title="ABS" onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 60,
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
    marginBottom: 18,
    color: '#111',
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: 0.2,
    textTransform: 'capitalize'
  }
});
