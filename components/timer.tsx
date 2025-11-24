import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '@/components/ui/customButton';

interface TimerProps {
  mode?: 'countup' | 'countdown';
  initialSeconds?: number;
  startImmediately?: boolean;
}

export default function Timer({
  mode = 'countup',
  initialSeconds = 0,
  startImmediately = false
}: TimerProps) {
  const [seconds, setSeconds] = useState(mode === 'countdown' ? initialSeconds : 0);
  const [isRunning, setIsRunning] = useState(startImmediately);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => mode === 'countdown' ? Math.max(prev - 1, 0) : prev + 1);
      }, 1000) as unknown as number;
    } else {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }
    return () => clearInterval(intervalRef.current!);
  }, [isRunning, mode]);

  useEffect(() => {
    if (mode === 'countdown' && seconds === 0) {
      setIsRunning(false);
    }
  }, [seconds, mode]);

  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60).toString().padStart(2, '0');
    const seconds = (sec % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      {mode === 'countup' && (
        <CustomButton
          title={isRunning ? 'Stop' : 'Start'}
          onPress={toggleTimer}
          mode={isRunning ? 'stop' : 'default'}
          width={200}
          height={60}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  timer: {
    fontSize: 60,
    marginBottom: 20,
    color: '#333333',
  },
});
