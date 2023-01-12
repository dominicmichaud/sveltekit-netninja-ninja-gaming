<script>
    import { user } from "$lib/stores/store";
	import { onDestroy } from "svelte";
    /**
	 * @type {any}
	 */
    let user_value;
    /**
	 * @type {{ username: any, email: any; }}
	 */
    let parsed_user;

    // Initialize the subscribed state
    user.subscribe((u) => user_value = u);
    // Define unsubscribe to use in the onDestroy function
    let unsubscribe = user.subscribe((u) => (user_value = u));
    onDestroy(unsubscribe);

    // Parse the LocalStorage value
    if (user_value) {
        parsed_user = JSON.parse(user_value);
    }

    // Updates the user store and assigns an empty string
    const handleLogout = () => {
        user.update((u) => (u = ''));
        window.location.reload();
    }
</script>

<header>
    <nav class="navbar" aria-label="main navigation">
        <div class="container is-fluid">
            <div class="navbar-brand">
                <a class="navbar-item is-size-3" href="/">
                    <img src="/retro-controller.png" width="50" alt="Site logo">
                    Ninja Retro Gaming
                </a>
            </div>
            <div class="navbar-start">
                <a class="navbar-item" href="/games" data-sveltekit-preload-data>
                    Games
                </a>
                <a class="navbar-item" href="/about">
                    About
                </a>
            </div>
            <div class="navbar-end">
                {#if parsed_user}
                    <div class="navbar-item">
                        <figure class="image is-32x32">
                            <img class="is-rounded" src={`https://i.pravatar.cc/150?u=${parsed_user.email}`} alt="avatar">
                        </figure>
                        <span class="ml-2">
                            Welcome {parsed_user.username}
                        </span>
                    </div>
                {/if}
                <div class="navbar-item">
                    {#if !user_value}
                        <a class="button is-light" href="/login" data-sveltekit-preload-data>
                            Login
                        </a>
                    {:else}
                        <button class="button is-primary" on:click={handleLogout}>
                            Logout
                        </button>
                    {/if}
                </div>
            </div>
        </div>     
    </nav>
</header>