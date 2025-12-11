<template>
	<RouterLink :to="props.href">
		<button>
			<div class="svg-container"></div>
			<span class="m-bd">{{ props.text }}</span>
		</button>
	</RouterLink>
</template>

<script setup>
	import { RouterLink } from "vue-router";
	import { computed } from "vue";

	const props = defineProps({
		text: {
			type: String,
			required: true,
		},
		href: {
			type: String,
			required: true,
		},
	});
</script>

<style scoped lang="scss">
	a {
		text-decoration: none;
	}

	button {
		position: relative;
		width: auto;
		height: 42px;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 8px;

		padding: 16px 12px;
		border-radius: 21px;

		color: var(--label-positive-primary);

		background-color: var(--bg-btn-primary-default);
		border: solid 2px var(--border-btn-primary-default);

		cursor: pointer;
		transition: ease-in-out 0.075s;

		&:hover {
			background-color: var(--bg-btn-primary-hover);
			color: var(--label-negative-primary);

			.svg-container {
				background-color: #fff;
			}
		}

		&:active {
			background-color: var(--bg-btn-primary-active);
		}
	}

	button .svg-container {
		width: 16px;
		height: 16px;

		background-color: #0000001a;
		transition: ease-in-out 0.075s;
	}
</style>
