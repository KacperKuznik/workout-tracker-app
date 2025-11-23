import { Text, View, Button, Pressable, StyleSheet } from "react-native";
import CustomButton from "@/components/ui/customButton";

export default function Workouts() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>workouts</Text>
      {/* <Button title="create workout" /> */}
      <CustomButton title="BACK"/>
      <CustomButton title="CHEST"/>
      <CustomButton title="LEGS"/>
      <CustomButton title="ABS"/>
    </View>
  );
}
