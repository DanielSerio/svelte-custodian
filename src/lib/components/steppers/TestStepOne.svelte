<script lang="ts">
	export let onNext: () => void;
</script>

<div class="test"><button on:click={onNext}>Two</button></div>
