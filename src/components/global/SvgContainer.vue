<template>
	<div class="SvgContainer" :style="SVG_COLOR" v-html="SVG_HTML"></div>
</template>

<script setup>
	import chevronLeft from "/svg/ic-chevronLeft.svg?raw";
	import chevronRight from "/svg/ic-chevronRight.svg?raw";
	import { computed } from "vue";

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

	const SVG_COLOR = computed(() => `color: ${props.color}`);
	var SVG_HTML = "";

	switch (props.id) {
		case "chevronLeft": {
			SVG_HTML = chevronLeft;
			break;
		}

		case "chevronRight": {
			SVG_HTML = chevronRight;
			break;
		}
	
		default: {
			break;
		}
	}
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
