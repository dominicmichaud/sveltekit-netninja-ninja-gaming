<script>
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import '@picocss/pico';
</script>

<style lang="scss" global>
    @use '../sass/main.scss';
</style>

<Header />

<main>
    <slot></slot>
</main>

<Footer />