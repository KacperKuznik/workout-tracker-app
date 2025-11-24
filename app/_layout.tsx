import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { UserProvider } from "@/context/userContext";

export default function RootLayout() {

  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="history/[id]" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </UserProvider>
  );
}
