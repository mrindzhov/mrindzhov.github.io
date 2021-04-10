import { SyntheticEvent } from 'react';

export function preventDefault(event: SyntheticEvent) {
  event.preventDefault();
}

export function getNewId(collection: { id: number }[]) {
  return (
    (collection.length && collection[0].id !== undefined ? Math.max(0, ...collection.map((item) => item.id)) : 0) + 1
  );
}

export function toCapitalizedWord(name: string) {
  const words = name.match(/[A-Za-z][a-z]*/g) || [];

  return words.map(capitalize).join(' ');
}

export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}

export function visualizeDatesRange(startDate: Date, endDate: Date | null): string {
  const startDateText = startDate?.toLocaleString('default', { month: 'long', year: 'numeric' });
  const endDateText = endDate?.toLocaleString('default', { month: 'long', year: 'numeric' }) ?? 'Present';

  return `${startDateText} - ${endDateText}`;
}