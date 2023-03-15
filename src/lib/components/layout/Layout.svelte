<script lang="ts">
	import { theme } from '$lib/stores';
	import '../../styles/global/index.scss';
	import '../../styles/layout/index.scss';
	import Toasts from '../toasts/Toasts.svelte';

	let navIsOpen: boolean = false;

	const toggleTheme = () => {
		if ($theme !== 'LOADING') {
			$theme = {
				type: $theme.type === 'light' ? 'dark' : 'light'
			};
		}
	};

	const toggleNav = () => {
		navIsOpen = !navIsOpen;
	};
</script>

<div class="cst-layout-root {$theme !== 'LOADING' ? $theme.type : ''}">
	<slot name="header" />
	<slot name="side-menu" />
	<div class="page-wrap">
		<div class="page-content">
			<slot {navIsOpen} {toggleTheme} {toggleNav} />
		</div>
		<slot name="footer" />
	</div>
	<Toasts />
</div>
