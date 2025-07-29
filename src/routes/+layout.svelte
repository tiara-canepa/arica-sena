<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/">Inicio</a>
	<a href="/categorias">Categorías</a>
</nav>

{@render children()}

<style>
	nav {
		width: 100%;
		padding-right: 1em;
		height: 4em;
		display: flex;
		justify-content: end;
		column-gap: 10px;

		background-color: #915b9c;
	}

	a {
		margin: auto 0;
		padding: 4px 8px;
		text-decoration: none;
		color: white;
	}

	a:hover {
		background-color: purple;
		color: white;
		border-radius: 4px;
	}
</style>
