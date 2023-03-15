<script lang="ts">
	export let y: number;
	const yRadius: number = 3;

	const yTop: number = y - yRadius / 2;
	const yMiddle: number = y;
	const yBottom: number = y + yRadius / 2;
</script>

<path
	d="M3,{yTop} L21,{yTop} Q24,{y} 21,{yBottom} L3,{yBottom} Q0,{yMiddle} 3,{yTop}"
	class={$$props.class}
/>
