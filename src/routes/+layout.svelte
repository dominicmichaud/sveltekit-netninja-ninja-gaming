<script>
	import '../bulma-ui.scss';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<style lang="scss" global>
	@use '../../static/sass/main.scss';
</style>

<Header />

<main>
	<slot />
</main>

<Footer />
