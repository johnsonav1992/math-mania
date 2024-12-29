import { atom } from 'jotai';

export const screenAtom = atom<'welcome' | 'selection' | 'game'>('welcome');
export const operandsAtom = atom<number[]>([]);
