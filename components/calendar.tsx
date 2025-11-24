import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';

export default function WorkoutCalendar() {
  const [selected, setSelected] = useState('');

  return (
      <Calendar
        onDayPress={(day) => setSelected(day.dateString)}
  // larger visual footprint and tuned typography (wider, not taller)
  style={{ width: '100%' }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#9aa0a6',
          selectedDayBackgroundColor: '#0A84FF',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#0A84FF',
          dayTextColor: '#222222',
          arrowColor: '#0A84FF',
          // bigger text for clearer, larger calendar
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
        }}
        markedDates={{
          [selected]: { selected: true, selectedColor: '#0A84FF', selectedTextColor: '#ffffff' },
          '2025-11-10': { selected: true, selectedColor: '#FF3B30' },
          '2025-11-15': { selected: true, selectedColor: '#FF3B30' },
          '2025-11-14': { selected: true, selectedColor: '#8E44AD' }
        }}
      />
  );
}
