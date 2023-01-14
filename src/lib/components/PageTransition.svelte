<script>
    import { fly } from "svelte/transition";

    /**
	 * @type {{ url?: URL, pathname: any; }}
	*/
    export let url;
    ;
</script>

{#key url}
    {#if url.pathname !== '/'}        
        <div
            in:fly="{{ y: -50, duration: 250, delay: 300 }}"
            out:fly|local
        >
            <slot />
        </div>
    {:else}
        <slot />
    {/if}
{/key}

