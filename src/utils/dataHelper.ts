// src/utils/dateHelpers.ts
import { WeightEntry, ActivityEntry } from './global';
import { format, parseISO, getISOWeek, getYear } from 'date-fns';

export function getWeekLabel(dateStr: string): string {
  const date = parseISO(dateStr);
  const week = getISOWeek(date);
  const year = getYear(date);
  return `Semaine ${week} (${year})`;
}

export function groupByWeek<T extends { date: string }>(
  entries: T[],
  valueKey: keyof T,
  groupKey?: keyof T
) {
  const grouped: Record<string, any> = {};

  entries.forEach((entry) => {
    const week = getWeekLabel(entry.date);
    const value = entry[valueKey];

    if (!grouped[week]) {
      grouped[week] = groupKey ? {} : [];
    }

    if (groupKey) {
      const key = entry[groupKey] as string;
      grouped[week][key] = (grouped[week][key] || 0) + (value as number);
    } else {
      grouped[week].push({ date: entry.date, value });
    }
  });

  return grouped;
}
