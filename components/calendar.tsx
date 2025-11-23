import { Calendar } from 'react-native-calendars';
import React, { useState } from 'react';

export default function WorkoutCalendar() {
  const [selected, setSelected] = useState('');

    return (
            <Calendar
                onDayPress={(day) => setSelected(day.dateString)}
                markedDates={{
                    [selected]: { selected: true, selectedColor: 'blue' },
                    '2025-11-10': { selected: true, selectedColor: 'red' },
                    '2025-11-15': { selected: true, selectedColor: 'red' },
                    '2025-11-14': { selected: true, selectedColor: 'purple' }
                }}
            />
  );
}
