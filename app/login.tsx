import React from 'react';
import { Text, View, TextInput, Image, Button, StyleSheet } from "react-native";
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 25
  }
});

export default function Login() {
  const router = useRouter();

  const handleSignIn = async () => {
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>WPT</Text>
      <Image source={require('@/assets/images/logo.png')} style={styles.image} />
      <TextInput style={styles.input} placeholder="Login" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
}
