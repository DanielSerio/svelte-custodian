<script lang="ts">
	import '$lib/styles/steppers/stepper.scss';
	export let steps: { title: string; component: any }[];

	let activeStepIndex: number = 0;
	const next = () => {
		if (activeStepIndex < steps.length - 1) {
			activeStepIndex += 1;
		}
	};

	const prev = () => {
		if (activeStepIndex > 0) {
			activeStepIndex -= 1;
		}
	};
</script>

<div class="cst-stepper-root cst-glass {activeStepIndex === steps.length - 1 ? 'last-step' : ''}">
	<div class="stepper-frame">
		<header>
			<div class="stepper-title-blocks">
				{#each steps as step, index}
					<div class="title-block {activeStepIndex === index ? 'active' : ''}">
						<span class="text">
							{step.title}
						</span>
					</div>
				{/each}
			</div>
		</header>
		<div class="stepper-content-window">
			<span />
			<svelte:component this={steps[activeStepIndex].component} onNext={next} onPrev={prev} />
		</div>
	</div>
</div>
