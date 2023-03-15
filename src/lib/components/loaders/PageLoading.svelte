<script lang="ts">
	import '../../styles/loaders/page-loading.scss';
	import { fade } from 'svelte/transition';
</script>

<div class="cst-page-loading-root" transition:fade={{ duration: 100 }}>
	<div class="glass-bar cst-glass">
		<div class="strip-track" />
	</div>
</div>
