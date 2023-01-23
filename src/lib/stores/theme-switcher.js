import { browser } from "$app/environment";

let darkMode = false;

// CHange Theme settings on Click event
/**
 * 
 * @param {*} checked 
 */
export const handleSwitchDarkMode = (checked) => {
    darkMode = checked;

    // Set the value in local storage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    // Check if key exists, and if it does and matches the string dark, we know it's a positive match and can add the class and update the variable
    darkMode
            ? document.documentElement.classList.add('dark-mode')
            : document.documentElement.classList.remove('dark-mode');            
}

// Get Theme settings
export const getModePreference = () => {
    if (browser) {
        if (localStorage.getItem('theme')) {
            return localStorage.getItem('theme') === 'dark' ? false : true;
        }
    }

    return false;
}

// On page load set Theme preference
// Utilising the Window.mediaMatch() API, we are able to update the darkMode value on load, dependant on what prefers-color-scheme the device is set to
// Browser is to make sure that the code is only ran on the client (not server)
if (browser) {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark-mode');
        darkMode = true;
    } else {
        document.documentElement.classList.remove('dark-mode');
        darkMode = false;
    }
}
