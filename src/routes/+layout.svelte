<script lang="ts">
	let { children } = $props();
</script>

{@render children()}

<style>
	:root {
		--purple: #915b9c;
	}

	:global(body) {
		margin: 0;
		font-family: sans-serif;
	}
</style>
