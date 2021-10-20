<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { Napolitan } from '../recipes/napolitan';
	import type { Text } from '../recipes/recipe';

	const recipe = Napolitan;

	const language: keyof Text = 'en';
	const t = (text: Text) => text[language];
</script>

<h1>{t(recipe.name)}</h1>


