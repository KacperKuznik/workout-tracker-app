import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.avatarRow}>
          <View style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.name}>David</Text>
            <Text style={styles.email}>david@example.com</Text>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Change username</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Change password</Text>
        </View>

        <Pressable
          style={styles.logoutButton}
          onPress={() => router.replace('/login')}
        >
          <Text style={styles.logoutText}>LOG OUT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f3f4f6' },
  container: { padding: 16, paddingTop: 28 },
  avatarRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#fff',
    // subtle shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  info: { marginLeft: 12 },
  name: { fontSize: 18, fontWeight: '700', color: '#111' },
  email: { color: '#666', marginTop: 4 },
  field: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  fieldLabel: { color: '#444', fontSize: 16 },
  logoutButton: {
    marginTop: 18,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  logoutText: { color: '#0A84FF', fontWeight: '700', letterSpacing: 0.6 },
});
