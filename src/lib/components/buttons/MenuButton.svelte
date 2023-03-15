<script lang="ts">
	import '../../styles/buttons/menu-btn.scss';
	import MenuButtonBar from './MenuButtonBar.svelte';

	export let navIsOpen: boolean;
</script>

<button type="button" class="cst-menu-btn-root {navIsOpen ? 'open' : ''}" on:click>
	<div class="btn-container">
		<svg viewBox="0 0 24 20">
			<MenuButtonBar y={4} class="top bar" />
			<MenuButtonBar y={10} class="middle bar" />
			<MenuButtonBar y={16} class="bottom bar" />
		</svg>
	</div>
</button>
