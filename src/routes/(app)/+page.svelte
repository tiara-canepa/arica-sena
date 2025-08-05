<script lang="ts">
	interface Feature {
		titulo: string;
		descripcion: string;
	}

	let features: Feature[] = [
		{
			titulo: 'Contactar con profesores',
			descripcion: 'Lorem ipsum'
		},
		{
			titulo: 'Ver clases online',
			descripcion: 'Lorem ipsum'
		},
		{
			titulo: 'Publicar tus dudas',
			descripcion: 'Lorem ipsum'
		}
	];
</script>

<div class="title">
	<h1>Cursos de Lenguaje de Señas</h1>
	<p>Chileno - Ariqueño</p>
</div>

<div class="mission">
	<div>Imagen aquí</div>
	<div class="mission-msg">
		<h2>Nuestra misión</h2>
		<p>
			Promover el aprendizaje y la enseñanza de la Lengua de Señas Chilena, conectando personas de
			todo Chile en una comunidad inclusiva, colaborativa y accesible.
		</p>
	</div>
</div>

<div class="features">
	{#each features as feature}
		<div class="feature">
			<h3>{feature.titulo}</h3>
			<p>{feature.descripcion}</p>
			<!-- TODO: Añadir imágenes a las features -->
			<!-- <img /> -->
		</div>
	{/each}
</div>

<div class="categories">
	<div class="content">
		<h3>Diferentes temas por ver...</h3>
		<ul>
			<li>Tema 1</li>
			<li>Tema 2</li>
			<li>Tema 3</li>
			<li>Tema 4</li>
			<li>Tema 5</li>
		</ul>
	</div>
	<p>Imagen aquí...</p>
</div>

<style>
	.title {
		display: flex;
		background-color: pink;
		height: 300px;
		padding-left: 100px;
		flex-direction: column;
		justify-content: center;
	}

	h1 {
		margin-top: 0;
		margin-bottom: 0;
	}

	.mission {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 50px 10px;
		background-color: lavender;
	}

	.mission-msg {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.mission-msg p {
		text-align: center;
		font-size: 14px;
		margin: 0 20px;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 10px;
		margin: 20px auto;
	}

	.feature {
		text-align: center;
		padding: 0 20px;
	}

	.feature p {
		font-size: 14px;
		margin-top: -12px;
	}

	.categories {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 20px auto;
	}

	.categories h3 {
		text-align: center;
	}
</style>
