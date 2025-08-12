<script lang="ts">
	import type { PageProps } from '../$types';
	import placeholder from '$lib/assets/placeholder.webp';
	import { courses } from './courses';
	import { lessons } from './lessons';

	let { data }: PageProps = $props();
</script>

<div class="title">
	<h1>{data.categoria.nombre}</h1>
	<p>Estos son los cursos y lecciones que tenemos disponibles</p>
</div>

<div class="courses">
	<div class="sub">
		<p><strong>Cursos</strong></p>
		<a href="/categorias">Ver todos</a>
	</div>

	<div class="contents">
		{#each courses as course}
			<div class="course-box">
				<div class="img-rating">
					<img src={placeholder} alt="Placeholder" />
					<div class="rating">
						<p>por {course.author}</p>
					</div>
				</div>

				<h2>{course.name} - {course.difficulty}</h2>
				<p>{course.description}</p>
			</div>
		{/each}
	</div>
</div>

<div class="courses">
	<div class="sub">
		<p><strong>Lecciones</strong></p>
		<a href="/categorias">Ver todos</a>
	</div>

	<div class="contents">
		{#each lessons as lesson}
			<div class="course-box">
				<div class="img-rating">
					<img src={placeholder} alt="Placeholder" />
					<div class="rating">
						<p>por {lesson.author}</p>
					</div>
				</div>

				<h2>{lesson.name}</h2>
				<p>{lesson.description}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 50px;
		padding-bottom: 50px;

		background: linear-gradient(white 5px, var(--purple));
	}

	.title h1 {
		margin-bottom: 0;
	}

	.sub {
		display: flex;
		margin-left: 5%;
	}

	.sub p {
		margin: 0 10px;
	}

	img {
		width: 50%;
		object-fit: cover;
		aspect-ratio: 1;
		margin-right: 10px;
	}

	.courses {
		background-color: var(--purple);
		padding-top: 30px;
	}

	.contents {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		background-color: #d9d9d9;
		padding: 10px;
		margin: 0 5%;
		margin-top: 10px;
	}

	.course-box {
		background-color: white;
		margin: 5% 20px;
		padding: 20px;
	}

	.img-rating {
		display: flex;
	}
</style>
