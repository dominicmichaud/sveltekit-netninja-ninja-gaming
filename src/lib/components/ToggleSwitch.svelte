<script>
    import { handleSwitchDarkMode, getModePreference } from '$lib/stores/theme-switcher';

    // Set prefered Theme from locaStorage
    let themeChecked = getModePreference();
</script>

<div class="toggle-switch" on:click={() => handleSwitchDarkMode(themeChecked)} on:keypress="{() => {}}">
    <label for="color-scheme-toggle">
        <input type="checkbox" name="color-scheme-toggle" id="color-scheme-toggle" bind:checked={themeChecked} >
        <span class="slider"></span>
    </label>
</div>