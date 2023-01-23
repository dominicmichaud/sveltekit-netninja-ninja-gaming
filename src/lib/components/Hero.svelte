<script>
    import { fly, fade } from "svelte/transition";
    export let title = 'Welcome to SvelteKit';
    export let subtitle = 'Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation';
</script>

<section class="hero is-large">
    <div class="hero-body">
        <div class="columns">
            <div class="column is-two-fifths" in:fly="{{ x: -200, duration: 500 }}" out:fade={{ duration: 100 }}>
                <h1 class="title has-text-primary is-size-2">
                    {title}
                </h1>
                <p class="subtitle has-text-primary">
                    {@html subtitle}
                </p>
                <p class="subtitle has-text-primary is-size-6">
                    A fake website created for the purpose of an online tutorial by the Net Ninja.
                </p>
                <a href="/games" class="button">
                    View games
                </a>
            </div>
        </div>      

      <img class="hero-img" src="/nes-controller-hero.png" alt="nes controller | pngegg.com/en/png-fnkjm" in:fly="{{ x: 200, duration: 500 }}" out:fade={{ duration: 100 }}>
    </div>
</section>