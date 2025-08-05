<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/">Inicio</a>
	<a href="/categorias">Categorías</a>
	<a href="/login">Iniciar sesión</a>
</nav>

{@render children()}

<footer>
	<p class="grid-block">Universidad de Tarapacá</p>
	<div class="grid-block">
		<p>Proyecto de ramo:</p>
		<p>Taller de Ética Profesional y Responsabilidad Social del Informático</p>
	</div>
	<div class="grid-block">
		<p>Integrantes:</p>
		<ul>
			<li>Mayling Álvarez</li>
			<li>Tiara Canepa</li>
			<li>Germán Castro</li>
			<li>Diego Galleguillos</li>
		</ul>
	</div>
</footer>

<style>
	nav {
		padding-right: 1em;
		height: 4em;
		display: flex;
		justify-content: end;
		align-items: center;
		column-gap: 10px;

		background-color: #915b9c;
	}

	a {
		height: 3em;
		padding: 0 12px;
		line-height: 3em;
		border: 0;
		text-decoration: none;
		color: white;
	}

	a:hover {
		background-color: purple;
		color: white;
		border-radius: 16px;
	}

	a[href='/login'] {
		height: 3em;
		padding: 0 12px;
		color: black;
		border: 0;
		border-radius: 16px;
		background: linear-gradient(90deg, #fbdff5, #c6abf7 53%);
	}

	footer {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		background-color: pink;
		font-size: 14px;
	}

	footer > p {
		text-align: center;
	}

	.grid-block {
		padding: 10px;
		margin: auto;
	}
</style>
