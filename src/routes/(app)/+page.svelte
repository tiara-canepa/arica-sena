<script lang="ts">
	import placeholder from '$lib/assets/placeholder.webp';

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
	<img src={placeholder} alt="Una mujer enseñando lenguaje de señas a un niño" />
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
			<img src={placeholder} alt="Placeholder" />
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
		<div class="center"><a href="/categorias">Explorar...</a></div>
	</div>
	<!-- <p>Imagen aquí...</p> -->
	<img src={placeholder} alt="Placeholder" />
</div>

<style>
	.title {
		display: flex;
		/* background-color: pink; */
		background: linear-gradient(#c6abf7, #f4d9f5);
		height: 300px;
		padding-left: 100px;
		flex-direction: column;
		justify-content: center;
	}

	.title p {
		font-size: 20px;
		margin: 0;
		margin-left: 1em;
	}

	h1 {
		font-size: 50px;
		margin-top: 0;
		margin-bottom: 0;
	}

	.mission {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0;
		/* background-color: lavender; */
	}

	.mission img {
		width: 100%;
		max-height: 300px;
		object-fit: cover;
	}

	.mission-msg {
		display: flex;
		color: white;
		padding: 50px 80px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(90deg, #935e9f 70%, #c4a9f6);
	}

	.mission-msg p {
		text-align: center;
		font-size: 14px;
		margin: 0 20px;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 10px 5%;
		margin: 20px auto;
	}

	.feature {
		text-align: center;
		padding: 0 20px;
	}

	.feature h3 {
		color: var(--purple);
	}

	.feature p {
		font-size: 14px;
		margin-top: -12px;
	}

	.feature img {
		height: 200px;
		width: 100%;
		object-fit: cover;
	}

	.categories {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.categories h3 {
		text-align: center;
		color: var(--purple);
	}

	.categories img {
		object-fit: cover;
		max-height: 250px;
		width: 100%;
	}

	.content {
		background: linear-gradient(#e1c6f7 30%, #f8ddf5);
	}

	.center {
		display: flex;
		justify-content: center;
	}
</style>
