<script>
	import '../bulma-ui.scss';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<style lang="scss" global>
	@use '../../static/sass/main.scss';
</style>

<Header />

<main>
	<PageTransition url={$page.url}>
		<slot />

		<Footer />
	</PageTransition>
</main>
