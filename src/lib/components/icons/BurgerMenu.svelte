<script>
    import { fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

    export let isOpen = false;

    /**
     * 
     * @param {*} _node
     * @param {*} duration
     */
    const spin = (_node, { duration }) => {
		return {
			duration,
			css: (/** @type {number} */ t) => {
				const eased = elasticOut(t);

				return `transform: scale(${eased}) rotate(${eased * 180}deg);`
			}
		};
	}
</script>

<div class="icon-wrapper">
    {#if !isOpen}
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Credit: svgrepo.com" class="menu-icon" in:spin="{{ duration: 1000 }}" out:fade>
        <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    {/if}
    {#if isOpen}
        <svg fill="#000000" width="800px" height="800px" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-label="Credit: svgrepo.com" class="close-icon" in:spin="{{ duration: 1000 }}" out:fade>
        <title>close</title>
        <path d="M8.48 16l5.84-5.84c0.32-0.32 0.32-0.84 0-1.2-0.32-0.32-0.84-0.32-1.2 0l-5.84 5.84-5.84-5.84c-0.32-0.32-0.84-0.32-1.2 0-0.32 0.32-0.32 0.84 0 1.2l5.84 5.84-5.84 5.84c-0.32 0.32-0.32 0.84 0 1.2 0.16 0.16 0.4 0.24 0.6 0.24s0.44-0.080 0.6-0.24l5.84-5.84 5.84 5.84c0.16 0.16 0.36 0.24 0.6 0.24 0.2 0 0.44-0.080 0.6-0.24 0.32-0.32 0.32-0.84 0-1.2l-5.84-5.84z"></path>
        </svg>
    {/if}    
</div>