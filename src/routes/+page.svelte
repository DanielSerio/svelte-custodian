<script lang="ts">
	import { Page } from '$lib/components/layout';
	import { Stepper } from '$lib/components/steppers';
	import TestStepOne from '$lib/components/steppers/TestStepOne.svelte';
	import TestStepThree from '$lib/components/steppers/TestStepThree.svelte';
	import TestStepTwo from '$lib/components/steppers/TestStepTwo.svelte';
	import { toasts } from '$lib/stores';

	const { addNotification } = toasts;
	export let steps: {
		title: string;
		component: any;
	}[] = [
		{
			title: 'One',
			component: TestStepOne
		},
		{
			title: 'Two',
			component: TestStepTwo
		},
		{
			title: 'Three',
			component: TestStepThree
		}
	];
</script>

<Page>
	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<button on:click={() => addNotification(`New notification ${new Date()}`)}>notify </button>
	<button on:click={() => addNotification(`New notification ${new Date()}`, { type: 'closable' })}
		>notify closable</button
	>

	<Stepper {steps} />
</Page>
