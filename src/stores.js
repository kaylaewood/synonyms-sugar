import { writable } from 'svelte/store';

export const word = writable('');

export const synonyms = writable([]);

export const error = writable('');
