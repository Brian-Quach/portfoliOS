import {writable} from 'svelte/store';

export const focusedApp = writable('notes');
export const openedApps = writable({notes: true});

export const introDone = writable({});
