<style lang="scss" global>
    @use '../../static/sass/main.scss';
</style>

<script>
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main>
    <slot></slot>
</main>

<Footer />