<template>
	<header>
		<RouterLink to="/">
			<img :class="imgClass"
			src="@/assets/img/logo-animation.gif" />
		</RouterLink>
	</header>
</template>

<script setup>
	import { RouterLink } from "vue-router";
	import { computed } from "vue";

	const props = defineProps({
		logoColor: {
			type: String,
			required: true,
			validator(value) {
				return ["white", "blue"].includes(value);
			},
		},
	});

	const imgClass = computed(() => ({
		white: props.logoColor == "white"
	}));
</script>

<style scoped lang="scss">
	header {
		position: relative;
		width: 100%;
		height: auto;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	header a:hover {
		background-color: transparent;
	}

	header img {
		position: relative;
		width: 100%;
		height: auto;
		max-width: 280px;

		&.white {
			filter: brightness(0%) invert(100%);
		}
	}
</style>
