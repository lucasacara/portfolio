<template>
	<div class="CardVideoPreview">
		<iframe
			width="100%"
			height="100%"
			:src="`https://www.youtube-nocookie.com/embed/${props.videoKey}`"
			title="YouTube Video Player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</template>

<script setup>
	const props = defineProps({
		videoKey: {
			type: String,
			required: true,
		},
	});
</script>

<style lang="scss" scoped>
	.CardVideoPreview {
        --lWidth: 344px;
        --lHeight: 200px;
        --lTransition: cubic-bezier(0.32, 0.43, 0, 1) 0.45s;

        position: absolute;
		width: var(--lWidth);
		height: var(--lHeight);
		bottom: 0;
		right: 0;

		background-color: var(--overlay-positive-low);
		border-radius: 16px;
        overflow: hidden;

        transition: var(--lTransition);
        transform-origin: bottom right;
        z-index: 10;
        
        backdrop-filter: blur(4px);
        
        iframe {
            position: absolute;
            bottom: 8px;
            right: 8px;

            width: calc(var(--lWidth) - 16px);
            height: calc(var(--lHeight) - 16px);

            border-radius: 8px;

            transition: var(--lTransition);
            transform-origin: bottom right;
            overflow: hidden;
        }

        &:hover {
            --lWidth: 460px;
            --lHeight: 266px;
        }        
	}
</style>
