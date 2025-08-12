<script lang="ts">
	let tipo = $state('');
</script>

<div class="background">
	<div class="title">
		<h1>Crea una Lección o Curso</h1>
		<p>¡Tu aporte ayudará a mucha gente!</p>
	</div>

	<div class="main">
		<form method="post">
			<label for="titulo">Título</label>
			<input type="text" id="titulo" name="titulo" required />

			<label for="descripcion">Descripción</label>
			<textarea name="descripcion" id="descripcion" required></textarea>

			<label for="tipo">¿Qué quieres crear?</label>
			<label
				><input
					type="radio"
					value="leccion"
					id="leccion"
					name="tipo"
					bind:group={tipo}
				/>Lección</label
			>
			<label
				><input type="radio" value="curso" id="curso" name="tipo" bind:group={tipo} />Curso</label
			>

			<label for="categoria">Escoge una categoría</label>
			<select name="categoria" id="categoria" required>
				<option value="-1">(sin selección...)</option>
				<option value="0">Saludos Generales</option>
				<option value="1">Conversaciones</option>
				<option value="2">Comida</option>
				<option value="3">Servicios</option>
			</select>

			<label for="dificultad">Dificultad</label>
			<select name="dificultad" id="dificultad" required>
				<option value="-1">(sin selección...)</option>
				<option value="0">Principiante</option>
				<option value="1">Intermedio</option>
				<option value="2">Avanzado</option>
			</select>

			{#if tipo === 'leccion'}
				<label for="pertenece">¿Es parte de algún curso?</label>
				<select name="pertenece" id="pertenece" required>
					<option value="0">Es independiente</option>
				</select>
			{/if}

			<button type="submit">Confirmar</button>
		</form>

		<div>
			<video controls width="400"> </video>
			<p>Vista previa</p>
			<input type="file" id="video" name="video" accept="video/*" />
		</div>
	</div>
</div>

<style>
	.background {
		background: linear-gradient(#ffffff 30%, #d0b3d9);
	}

	.title {
		display: flex;
		flex-direction: column;
		padding: 0 10%;
	}

	.title h1 {
		margin-bottom: 0;
		color: var(--purple);
	}

	.title p {
		margin-top: 0;
	}

	.main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 5%;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 50px;
	}

	label {
		font-weight: 600;
	}

	input,
	select {
		margin-bottom: 20px;
		height: 2em;
	}

	textarea {
	}

	input[type='radio'] {
		margin: 0;
		margin-left: 1em;
	}

	button {
		background-color: var(--purple);
		color: white;
		height: 2.5em;
		width: 80%;
		margin: auto;
		border: none;
	}
</style>
