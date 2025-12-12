<template>
	<RouterLink :to="props.href">
		<button>
			<SvgContainer id="chevronLeft" v-if="props.icon == 'left'" />
			<span class="m-bd">{{ props.text }}</span>
			<SvgContainer id="chevronRight" v-if="props.icon == 'right'" />
		</button>
	</RouterLink>
</template>

<script setup>
	import { RouterLink } from "vue-router";
	import SvgContainer from "../global/SvgContainer.vue";

	const props = defineProps({
		text: {
			type: String,
			required: true,
		},
		href: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: false,
			default: "none",
			validator(value) {
				return ["none", "left", "right"].includes(value);
			},
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
		}

		&:active {
			background-color: var(--bg-btn-primary-active);
		}
	}
</style>
