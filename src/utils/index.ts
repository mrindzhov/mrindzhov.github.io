import { SyntheticEvent } from 'react';

export function preventDefault(event: SyntheticEvent) {
  event.preventDefault();
}

type BaseEntity = { id: number };

export function removeListItemById<TEntity extends BaseEntity>(id: number, list: TEntity[] = []): TEntity[] {
  return list?.filter((item) => item.id !== id) || [];
}

export function addOrUpdateListItem<TEntity extends BaseEntity>(newItem: TEntity, list: TEntity[] = []): TEntity[] {
  return newItem.id > 0
    ? list.map((p) => (p.id === newItem.id ? newItem : p)) // edit
    : [...list, { ...newItem, id: getNewId(list) }]; // add
}

export function getNewId(collection: BaseEntity[]) {
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
