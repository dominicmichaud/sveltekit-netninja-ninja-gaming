import { writable } from "svelte/store";
import { browser } from "$app/environment";

// Check if we’re running on the Server or Client
// This avoids undefined errors for Local Storage.
let persistedUser = browser && localStorage.getItem('user');

// create our writable store
export let user = writable(persistedUser ? JSON.parse(persistedUser) : '');

// This checks every time the value of the Local Storage is updated, 
// and instantly assigns that value to the user store.
if (browser) {
    user.subscribe(u => localStorage.user = JSON.stringify(u));
}
