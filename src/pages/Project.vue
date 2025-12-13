<template>
	<div id="ProjectContainer" ref="animContent">
		<Header logoColor="blue"></Header>
		<div class="pageContainer">
			<ButtonPrimary
				text="Voltar aos projetos"
				href="/"
				icon="left"
			></ButtonPrimary>

			<section class="section-info">
				<div class="innerContainer">
					<div class="main">
						<div class="title">
							<h1 class="gg-bd">{{ gProject.title }}</h1>
							<p class="g-rg">{{ gProject.subtitle }}</p>
						</div>
						<div class="desc-container">
							<p class="description m-rg">
								{{ gProject.description }}
							</p>
							<p
								class="academyProject m-rg"
								v-show="gProject.academyProject"
							>
								*Este é um projeto desenvolvido durante a
								graduação em Design Visual para fins acadêmicos,
								não tendo quaisquer vínculos com as marcas ou
								clientes citados e exibidos.
							</p>
						</div>
						<ButtonPrimary
							:href="gProject.behanceURL"
							text="Ver no Behance"
							icon="right"
							v-show="gProject.behanceURL"
						/>
					</div>
					<div class="secondary">
						<div class="column" v-show="gProject.awards.length > 0">
							<p class="m-bd">PRÊMIOS RECEBIDOS:</p>
							<ChipTextPair
								v-for="award in gProject.awards"
								:title="award.title"
								:description="award.event"
							/>
						</div>
						<div
							class="column"
							v-show="gProject.credits.length > 0"
						>
							<ChipTextPair
								v-for="credit in gProject.credits"
								:title="credit.title"
								:description="credit.name"
								:uppercase="true"
							/>
						</div>
					</div>
					<CardVideoPreview
						v-show="gProject.youtubeVideo"
						:videoKey="gProject.youtubeVideo"
					/>
				</div>
			</section>

			<section class="section-medias">
				<div class="innerContainer">
					<AnimShowOnView
						v-for="media in gProject.medias"
						class="AnimShowOnView"
					>
						<img :src="media.src" />
					</AnimShowOnView>
				</div>
			</section>

			<ButtonPrimary
				text="Voltar aos projetos"
				href="/"
				icon="left"
			></ButtonPrimary>
		</div>
	</div>
</template>

<script setup>
	// IMPORTS
	import Header from "@/components/global/Header.vue";
	import { useRoute, useRouter } from "vue-router";
	import { getProjectByID, Project } from "@/js/utils.js";
	import ButtonPrimary from "@/components/button/ButtonPrimary.vue";
	import ChipTextPair from "@/components/chip/ChipTextPair.vue";
	import CardVideoPreview from "@/components/card/CardVideoPreview.vue";
	import { onMounted, ref } from "vue";
	import AnimShowOnView from "@/components/animation/AnimShowOnView.vue";

	// GLOBAL VARIABLES
	var gProject = new Project();
	const animContent = ref();
	const animBool = ref(false);

	const observer = new IntersectionObserver(
		([entry]) => {
			animBool.value = entry.isIntersecting;
		},
		{
			threshold: 0.5,
		}
	);

	onMounted(() => {
		observer.observe(animContent.value);
	});

	// MAIN FUNCTION
	main();

	function main() {
		const route = useRoute();
		const router = useRouter();

		gProject = getProjectByID(route.params.id);

		if (gProject.title == "") {
			router.push("/not-found");
		}
	}
</script>

<style scoped lang="scss">
	.AnimShowOnView {
		img {
			position: relative;
			width: 100%;
			height: auto;
			border-radius: 8px;
		}
	}

	#ProjectContainer {
		position: relative;
		width: 100%;
		height: auto;

		background-color: #ffffff;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		overflow-x: hidden;
		overflow-y: auto;
	}

	.pageContainer {
		position: relative;
		width: 100%;
		height: auto;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding-bottom: 40px;
	}

	.section-info {
		position: relative;
		width: 100%;
		height: auto;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		padding: 48px 48px 96px 48px;

		.innerContainer {
			position: relative;
			width: 100%;
			height: auto;
			max-width: 1440px;

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;

			gap: 48px;
		}

		.main {
			position: relative;
			width: 100%;
			height: auto;
			max-width: 450px;

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;

			gap: 48px;

			.title {
				position: relative;
				width: 100%;
				height: auto;

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				color: var(--label-positive-primary);
			}

			.desc-container {
				position: relative;
				width: 100%;
				height: auto;

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				gap: 16px;
			}

			.description {
				white-space: pre-wrap;
				line-break: loose;
			}

			.academyProject {
				font-style: italic;
				color: var(--label-positive-secondary);
			}
		}

		.secondary {
			position: relative;
			width: fit-content;
			height: auto;

			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;

			gap: 48px;

			.column {
				position: relative;
				width: fit-content;
				height: auto;

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				gap: 24px;
				padding: 16px;
				border-top: solid 2px var(--border-highest);

				color: var(--label-positive-primary);

				p {
					width: max-content;
				}
			}
		}
	}

	.section-medias {
		position: relative;
		width: 100%;
		height: auto;

		padding: 0px 40px 40px 40px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.innerContainer {
			position: relative;
			width: 100%;
			height: auto;
			max-width: 1440px;

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;

			gap: 8px;
		}
	}
</style>
