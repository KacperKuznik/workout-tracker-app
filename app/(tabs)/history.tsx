import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HISTORY } from '@/data/historyData';

export default function History() {
  const router = useRouter();

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.title}>History</Text>

  { (HISTORY as any[]).map((item: any) => (
        <Pressable
          key={item.id}
          style={styles.card}
          onPress={() => router.push(`/history/${item.id}`)}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDate}>{item.date}</Text>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.leftCol}>
              <Text style={styles.label}>Total time</Text>
              <Text style={styles.value}>{item.totalTime}</Text>
            </View>
            <View style={styles.rightCol}>
              <Text style={styles.label}>Calories</Text>
              <Text style={styles.value}>{item.calories}</Text>
              <Text style={styles.label}>Avg rate</Text>
              <Text style={styles.value}>{item.avgRate}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { backgroundColor: '#f3f4f6' },
  content: { padding: 16, paddingBottom: 40 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12, color: '#111' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#111' },
  cardDate: { color: '#666' },
  cardBody: { flexDirection: 'row', justifyContent: 'space-between' },
  leftCol: { flex: 1 },
  rightCol: { alignItems: 'flex-end' },
  label: { fontSize: 12, color: '#666' },
  value: { fontSize: 16, fontWeight: '600', color: '#111', marginBottom: 6 }
});

