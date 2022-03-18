import {writable} from 'svelte/store';

export const focusedApp = writable('terminal');
export const openedApps = writable({terminal: true});
