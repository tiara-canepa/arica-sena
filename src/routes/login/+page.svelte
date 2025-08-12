<script lang="ts">
	import type { PageProps } from './$types';

	// let { form }: PageProps = $props();
</script>

<div class="background">
	<div class="main">
		<div class="left">
			<!-- TODO: Add image -->
		</div>
		<div class="right">
			<h2>¡Bienvenido!</h2>
			<form method="post" action="?/login">
				<div class="form">
					<!-- TODO: Add register/forgot password links -->
					<input name="email" type="email" placeholder="Email" required />
					<input name="password" type="password" placeholder="Contraseña" required />
					<a class="forgot-password" href="/">¿Olvidaste tu contraseña?</a>
					<button type="submit"><strong>Inicia sesión</strong></button>
					<a class="register" href="/">¿No tienes una cuenta? ¡Crea una!</a>
					<!-- {#if form?.success} -->
					<!-- 	<p>Success</p> -->
					<!-- {/if} -->
					<!-- <a class="back">Cancelar</a> -->
				</div>
			</form>
		</div>
	</div>
</div>

<style>
	* {
		font-family: sans-serif;
	}

	.background {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: linear-gradient(90deg, #bca0f7 30%, #fae1f6);
	}

	.main {
		display: flex;
		background-color: white;
		border-radius: 6px;
		margin: 0 5%;
		padding: 50px;
		width: 65%;
		box-shadow: 0 0 10px 5px #915b9c;
	}

	.left,
	.right {
		width: 50%;
	}

	.form {
		display: flex;
		flex-direction: column;
		border: 2px solid #eee;
		padding: 20px;
		padding-bottom: 5em;
		border-radius: 14px;
	}

	input {
		height: 2.5em;
		margin-bottom: 16px;
		background-color: #fef9ff;
		border: 0;
		border-radius: 4px;
	}

	a {
		text-decoration: none;
		font-size: 14px;
		margin: 10px 0;
	}

	a:hover {
		text-decoration: underline;
	}

	.forgot-password {
		text-align: end;
	}

	.register {
		text-align: center;
	}

	button {
		background-color: #915b9c;
		color: white;
		height: 3em;
		font-size: 16px;
		border: 0;
		border-radius: 8px;
	}

	button:hover {
		background-color: pink;
	}

	/* .back { */
	/* 	background-color: #704b9c; */
	/* 	color: white; */
	/* 	width: 80px; */
	/* 	padding: 1em; */
	/* 	border-radius: 8px; */
	/* 	text-align: center; */
	/* } */
</style>
