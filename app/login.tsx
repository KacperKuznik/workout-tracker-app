import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "@/context/userContext";

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 32,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  radioContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#555",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#555",
  },
  radioText: {
    fontSize: 16,
  },
});

export default function Login() {
  const router = useRouter();
  const { isTrainer, setIsTrainer } = useUser();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = () => {
    // You can also send login, password, isTrainer to backend
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>WPT</Text>
      <Image source={require("@/assets/images/logo.png")} style={styles.image} />

      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setIsTrainer(true)} style={styles.radioContainer}>
          <View style={styles.radioCircle}>{isTrainer && <View style={styles.selectedRb} />}</View>
          <Text style={styles.radioText}>Trainer</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsTrainer(false)} style={styles.radioContainer}>
          <View style={styles.radioCircle}>{!isTrainer && <View style={styles.selectedRb} />}</View>
          <Text style={styles.radioText}>User</Text>
        </TouchableOpacity>
      </View>

      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
}
