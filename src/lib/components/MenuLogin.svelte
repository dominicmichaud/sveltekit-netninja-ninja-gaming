<script>    
    /**
     * @type {*} currentUser
     */
    export let currentUser = '';
    /**
	 * @type {{ update: (arg0: (u: any) => string) => void; }}
	 */
     export let user;
     /**
      * @type {*} classes
      */
     export let classes = '';
    
    // Updates the user store and assigns an empty string
    const handleLogout = () => {
        user.update((u) => (u = ''));
        window.location.reload();
    }
</script>

{#if currentUser}
    <div class="navbar-item {classes} user-welcome">
        <figure class="image is-32x32">            
            <img class="is-rounded" src={`https://i.pravatar.cc/150?u=${currentUser.email}`} alt="avatar">
        </figure>
        <span class="ml-2">
            Welcome {currentUser.username}
        </span>
    </div>
{/if}
<div class="navbar-item {classes}">
    {#if !currentUser}
        <a class="button is-light is-outlined" href="/login" data-sveltekit-preload-data>
            Login
        </a>
    {:else}
        <button class="button is-light" on:click={handleLogout}>
            Logout
        </button>
    {/if}
</div>