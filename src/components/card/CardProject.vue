<script setup>


const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
})

const IMG_SRC_START = "./src/assets/img/projects/";
const IMG_SRC_END = "/cover.webp";

const IMG_SRC = IMG_SRC_START + props.id + IMG_SRC_END;
const PROJ_URL = `#/projects/${props.id}`

</script>

<template>
    <a :href=PROJ_URL>
        <div class="CardProject">
            <div class="overlay">
                <span class="g-bd">{{ title }}</span>
            </div>
            <img :src=IMG_SRC>
            </img>
        </div>
    </a>
</template>

<style lang="scss" scoped>
.CardProject {
    position: relative;
    width: 100%;
    min-width: 100px;
    height: 67vw;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF1A;

    border-radius: 8px;
    cursor: pointer;

    overflow: hidden;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: flex-end;

        padding: 16px;

        background-color: #00000080;
        color: #FFFFFF;

        opacity: 0;

        transition: ease-in-out 0.25s;

        span {
            opacity: 0;
            margin-bottom: -24px;
            transition: ease-in-out 0.2s;
        }
    }

    img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 2.2s;
    }

    &:hover {
        .overlay {
            opacity: 1;

            span {
                opacity: 1;
                margin-bottom: 0px;
            }
        }

        img {
            width: 110%;
            height: 110%;
        }
    }

    @media (min-width: 768px) {
        height: min(36vw, 520px);
    }
}
</style>
