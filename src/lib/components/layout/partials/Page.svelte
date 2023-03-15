<script lang="ts"></script>

<div class="cst-page-root">
	<div class="page-container">
		<main id="content" class="content-root">
			<slot />
		</main>
		{#if $$slots.aside}
			<aside class="aside-root">
				<slot name="aside" />
			</aside>
		{/if}
	</div>
</div>
