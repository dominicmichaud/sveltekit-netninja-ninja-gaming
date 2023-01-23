<script>
    import Logo from '$lib/components/icons/Logo.svelte';
    import BurgerMenu from '$lib/components/icons/BurgerMenu.svelte';
    import ToggleSwitch from '$lib/components/ToggleSwitch.svelte';
    import MenuLogin from '$lib/components/MenuLogin.svelte';
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

    let menuOpen = false;

    // Initialize the subscribed state
    user.subscribe((u) => user_value = u);
    // Define unsubscribe to use in the onDestroy function
    let unsubscribe = user.subscribe((u) => (user_value = u));
    onDestroy(unsubscribe);

    // Parse the LocalStorage value
    if (user_value) {
        parsed_user = JSON.parse(user_value);
    }
    
    const handleShowMenu = () => {
        menuOpen = !menuOpen;
    }
</script>

<header>
    <nav class="navbar is-fixed-top" aria-label="main navigation">
        <div class="container is-fluid">
            <div class="navbar-brand">
                <a class="navbar-item is-size-3" href="/">
                    <Logo />
                    <span class="is-hidden-tablet-only is-hidden-mobile">Ninja Retro Gaming</span>
                </a>                
            </div>

            <div class="navbar-menu {menuOpen ? 'show-menu' : ''}">
                <div class="navbar-start">
                    <a class="navbar-item" href="/games" data-sveltekit-preload-data>
                        Games
                    </a>
                    <a class="navbar-item" href="/about">
                        About
                    </a>
                    <MenuLogin currentUser={parsed_user} user={user} classes="is-hidden-desktop" />
                </div>
            </div>
            
            <div class="navbar-end">
                <MenuLogin currentUser={parsed_user} user={user} classes="is-hidden-tablet-only is-hidden-mobile" />               
                <div class="navbar-item">
                    <ToggleSwitch />
                </div>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" href="#" on:click|preventDefault={handleShowMenu}>
                    <BurgerMenu isOpen={menuOpen} />
                </a>               
            </div>            
        </div>     
    </nav>
</header>