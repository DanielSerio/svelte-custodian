<script lang="ts">
	import '$lib/styles/toasts/toasts.scss';
	import toasts from '$lib/stores/toasts';
	import { fade } from 'svelte/transition';
	const { values } = toasts;

	const closeToast = (timestamp: Date) => {
		$values = [...$values].filter(
			(t) => t.type === 'timed' || t.timestamp.getTime() !== timestamp.getTime()
		);
	};
</script>

{#if $values && $values.length}
	<ul class="cst-toasts-root">
		{#each $values as toast}
			<li class="toast cst-glass" transition:fade>
				{#if toast.type === 'closable'}
					<header>
						<button class="btn-close" on:click={() => closeToast(toast.timestamp)}>
							<div class="svg-container">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-x"
									viewBox="0 0 16 16"
								>
									<path
										d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
									/>
								</svg>
							</div>
						</button>
					</header>
				{/if}
				{toast.type} - {toast.message}
			</li>
		{/each}
	</ul>
{/if}
