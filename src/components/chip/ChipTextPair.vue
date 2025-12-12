<template>
	<div class="ChipTextPair">
		<p class="m-bd" :class="upClass">{{ props.title }}</p>
		<p class="m-rg">{{ props.description }}</p>
	</div>
</template>

<script setup>
	import { computed } from "vue";

	const props = defineProps({
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		uppercase: {
			type: Boolean,
			required: false,
			default: false,
		},
	});

	const upClass = computed(() => ({
		upperCase: props.uppercase,
	}));
</script>

<style lang="scss" scoped>
	.ChipTextPair {
		width: 100%;
		height: auto;

		display: flex;
		flex-direction: column;

		p {
			width: max-content;

			&.upperCase {
				text-transform: uppercase;
			}
		}
	}
</style>
