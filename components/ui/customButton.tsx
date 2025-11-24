import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
  mode?: 'default' | 'stop';
}

export default function CustomButton({
  title,
  onPress,
  disabled = false,
  width,
  height,
  mode = 'default',
}: CustomButtonProps) {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        width && { width },
        height && { height },
        pressed && !disabled && styles.buttonPressed,
        disabled && styles.buttonDisabled,
        mode === 'stop' && styles.buttonStop, // apply red if stop mode
      ]}
    >
      <Text style={[styles.text]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0A84FF',
    width: '90%',
    alignSelf: 'center',
    height: 84,
    marginVertical: 14,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonStop: {
    backgroundColor: '#FF3B30',
  },
  buttonPressed: {
    backgroundColor: '#0666d9',
  },
  buttonDisabled: {
    backgroundColor: '#333333',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
});
