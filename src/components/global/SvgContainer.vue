<template>
	<div class="SvgContainer" :style="SVG_COLOR" v-html="SVG_HTML"></div>
</template>

<script setup>
	import { computed, ref, toRaw, watch, defineAsyncComponent } from "vue";

	const props = defineProps({
		id: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: false,
			default: "currentColor",
		},
	});

	const SVG_SRC = `/svg/ic-${props.id}.svg?raw`;
	const SVG_COLOR = computed(() => `color: ${props.color}`);
	const SVG_HTML = await fetch(SVG_SRC)
		.then((response) => response.blob())
		.then((data) => {
			return data.text();
		})
		.catch((error) => {
			console.error(error);
		});
</script>

<style scoped lang="scss">
	.SvgContainer {
		width: 16px;
		height: 16px;
		overflow: hidden;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	svg {
		width: 16px;
		height: 16px;
	}
</style>
