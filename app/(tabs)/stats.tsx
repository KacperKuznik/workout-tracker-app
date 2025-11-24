import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DATA = [1,2,3,4,5,6,7,8,9,10,11,12];

export default function Stats() {
  const max = Math.max(...DATA);
  const totalWorkouts = DATA.reduce((s,v)=>s+v,0);
  const caloriesBurned = totalWorkouts * 300;
  const weightMoved = totalWorkouts * 200;

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Stats</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Workouts this year</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.barsRow}>
            {DATA.map((value, i) => {
              const height = (value / max) * 180 + 8;
              return (
                <View key={i} style={styles.barColumn}>
                  <View style={[styles.bar, { height }]} />
                  <Text style={styles.barLabel}>{MONTHS[i]}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View style={styles.metricsRow}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Calories burned</Text>
          <Text style={styles.metricValue}>{caloriesBurned.toLocaleString()}</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Weight moved (kg)</Text>
          <Text style={styles.metricValue}>{weightMoved.toLocaleString()}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { backgroundColor: '#f3f4f6' },
  content: { padding: 18, paddingBottom: 40 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12, color: '#111' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 18,
  },
  cardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 12, color: '#222' },
  barsRow: { flexDirection: 'row', alignItems: 'flex-end' },
  barColumn: { alignItems: 'center', flex: 1, minWidth: 24, marginHorizontal: 4 },
  bar: { width: '60%', backgroundColor: '#0A84FF', borderRadius: 6 },
  barLabel: { marginTop: 8, fontSize: 12, color: '#666' },
  metricsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 12 },
  metricCard: {
    flex: 1,
    minWidth: 140,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 3,
  },
  metricLabel: { fontSize: 13, color: '#666', marginBottom: 6, flexShrink: 1 },
  metricValue: { fontSize: 20, fontWeight: '700', color: '#111', flexShrink: 1 },
});
