<script lang="ts">
	import { categorias } from './categorias';
</script>

<div class="background">
	<h2 class="center">Categorías</h2>
	<p class="center sub">Explora nuestras categorías</p>

	<div class="separator"></div>

	<div class="categories">
		{#each categorias as categoria}
			<div class="category">
				<h3><a href="categorias/{categoria.nombre_corto}">{categoria.nombre}</a></h3>
				<p class="cat-body">{categoria.descripcion}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.background {
		width: 100%;
		min-height: 100vh;
		background: linear-gradient(to bottom, white, #936396 71%);
		padding-top: 10px;
	}

	.center {
		text-align: center;
		color: #5e205d;
	}

	.sub {
		font-size: 0.9em;
		margin-top: -10px;
	}

	.separator {
		border-bottom: 2px solid purple;
		width: 80%;
		margin: 0 auto;
		margin-bottom: 10px;
	}

	/* .categories { */
	/* 	display: flex; */
	/* 	width: 80%; */
	/* 	flex-wrap: wrap; */
	/* 	justify-content: center; */
	/* 	column-gap: 20px; */
	/* 	margin: auto; */
	/* 	padding: 0 10px; */
	/**/
	/* 	background-color: white; */
	/* } */

	.categories {
		width: 80%;
		background-color: white;
		margin: auto;
		padding: 10px 30px;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	/* .category { */
	/* 	max-width: 30%; */
	/* 	/* max-width: 50%; */
	/* 	margin: 0 auto; */
	/* } */

	.category {
		margin: 10px;
	}

	h3 {
		font-size: 16;
	}

	.cat-body {
		color: #757575;
		font-size: 14px;
	}
</style>
