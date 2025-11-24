// This file is intentionally disabled: the real history detail route was moved to app/history/[id].tsx
// Leaving a no-op component here prevents the router from creating an active tab for the detail route.
import React from 'react';
import { View } from 'react-native';

export const unstable_settings = { /** keep default settings */ };

export default function _HiddenHistoryDetail() {
  return <View />;
}
