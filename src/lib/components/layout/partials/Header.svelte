<script lang="ts">
	import MenuButton from '$lib/components/buttons/MenuButton.svelte';
	import { fade } from 'svelte/transition';
	export let navIsOpen: boolean;
	export let toggleNav: () => void;
</script>

<header class="cst-header-root">
	<div class="header-container cst-glass">
		{#if $$slots.left}
			<div class="header-area left">
				<slot name="left" />
			</div>
		{/if}
		{#if $$slots.middle}
			<div class="header-area middle">
				<slot name="middle" />
			</div>
		{/if}
		<div class="header-area">
			<slot />
			<div class="button-area">
				<MenuButton {navIsOpen} on:click={toggleNav} />
			</div>
		</div>
	</div>
	{#if navIsOpen}
		<nav class="main-nav cst-glass" transition:fade={{ duration: 120 }}>
			<slot name="nav" />
		</nav>
	{/if}
</header>
