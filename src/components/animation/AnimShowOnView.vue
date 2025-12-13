<template>
	<div ref="target" class="AnimShowOnView">
		<Transition :name="animationType" class="transition">
			<div v-if="targetIsVisible || lShowed" class="animated-component">
				<slot class="slot"></slot>
			</div>
		</Transition>
	</div>
</template>

<script setup>
	import { onMounted, ref, Transition } from "vue";

	const props = defineProps({
		animationType: {
			type: String,
			required: false,
			default: "slide-fade",
		},
	});

	const target = ref();
	const targetIsVisible = ref(false);
	var lShowed = false;

	const observer = new IntersectionObserver(
		([entry]) => {
			targetIsVisible.value = entry.isIntersecting;

			if (!lShowed) {
				lShowed = entry.isIntersecting;
				console.log("lShowed", lShowed);
			}
		},
		{
			rootMargin: "-160px",
		}
	);

	onMounted(() => {
		observer.observe(target.value);
	});
</script>

<style scoped lang="scss">
	.AnimShowOnView {
		position: relative;
		width: 100%;
		height: auto;
		min-height: 160px;
		overflow: hidden;

		@media (min-width: 768px) {
			min-height: 400px;
		}
	}

	.slide-fade-enter-active {
		transition: all cubic-bezier(0.32, 0.43, 0, 1) 0.6s;
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transform: translateY(40px);
		opacity: 0;
	}
</style>
