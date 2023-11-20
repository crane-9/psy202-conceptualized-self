import { writable } from 'svelte/store';

export let showModal = writable(false);
export let popupText = writable("placeholder popup text");
export let titleText = writable("placeholder title text");