<script lang="ts">
	import ThemeToggle from '$lib/components/buttons/ThemeToggle.svelte';
	import { Layout, Header } from '$lib/components/layout';
	import PageLoading from '$lib/components/loaders/PageLoading.svelte';
	import Logo from '$lib/components/misc/Logo.svelte';

	let windowIsLoading = true;

	$: if (typeof window !== 'undefined' && windowIsLoading) {
		windowIsLoading = false;
	}
</script>

{#if !windowIsLoading}
	<Layout let:navIsOpen let:toggleNav>
		<svelte:fragment slot="header">
			<Header {navIsOpen} {toggleNav}>
				<svelte:fragment slot="left">
					<Logo />
				</svelte:fragment>
				<ThemeToggle />
				<svelte:fragment slot="nav">NAV</svelte:fragment>
			</Header>
		</svelte:fragment>
		<slot />
	</Layout>
{:else}
	<PageLoading />
{/if}
