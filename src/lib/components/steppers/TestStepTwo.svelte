<script lang="ts">
	export let onNext: () => void;
	export let onPrev: () => void;
</script>

<div class="test">
	<button on:click={onPrev}>one</button>
	<button on:click={onNext}>three</button>
</div>
