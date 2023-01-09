<script>
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import '@picocss/pico';
</script>

<Header />

<main>
    <slot></slot>
</main>

<Footer />