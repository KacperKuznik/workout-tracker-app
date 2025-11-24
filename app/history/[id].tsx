import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HISTORY } from '../data/historyData';

export default function HistoryDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  type HistoryItem = {
    id: string;
    name: string;
    date: string;
    totalTime: string;
    calories: number;
    avgRate: string;
    notes: string;
  };

  const historyArr = HISTORY as HistoryItem[];
  const item: HistoryItem = historyArr.find((h: HistoryItem) => h.id === id) || historyArr[0];

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </Pressable>
        <Text style={styles.title}>History</Text>
      </View>

      <View style={styles.cardLarge}>
        <Text style={styles.workoutName}>{item.name}</Text>
        <Text style={styles.meta}>Date: {item.date}</Text>
        <Text style={styles.meta}>Total time: {item.totalTime}</Text>
        <View style={styles.metricsRow}>
          <View style={styles.metricBlock}>
            <Text style={styles.metricLabel}>Calories</Text>
            <Text style={styles.metricValue}>{item.calories}</Text>
          </View>
          <View style={styles.metricBlock}>
            <Text style={styles.metricLabel}>Avg rate</Text>
            <Text style={styles.metricValue}>{item.avgRate}</Text>
          </View>
        </View>

        <View style={{ marginTop: 12 }}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Text style={styles.notes}>{item.notes}</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { backgroundColor: '#f3f4f6' },
  content: { padding: 16, paddingBottom: 40 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  backButton: { padding: 8, marginRight: 8 },
  backText: { color: '#0A84FF' },
  title: { fontSize: 20, fontWeight: '700', color: '#111' },
  cardLarge: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
  },
  workoutName: { fontSize: 22, fontWeight: '800', color: '#111', marginBottom: 6 },
  meta: { color: '#666', marginBottom: 6 },
  metricsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  metricBlock: { alignItems: 'center', flex: 1 },
  metricLabel: { color: '#666', fontSize: 13 },
  metricValue: { fontSize: 18, fontWeight: '700', color: '#111' },
  sectionTitle: { fontSize: 14, fontWeight: '700', marginBottom: 6 },
  notes: { color: '#444', lineHeight: 20 }
});
