<template>

    <div>
        <div v-bind:style="{ backgroundColor: getChampion.background, color: getChampion.text }" class="track" :id="getChampion.id">
            <h1>{{getChampion.name}}</h1>
            <img src="/crown.png" alt="">
        </div>
    </div>
    
</template>

<script>

    export default {

        computed: {
            getChampion() {
                return this.$store.getters['getChampion'];
            }
        },
    }
</script>

<style scoped>

    img {
        width: 25%;
        position: absolute;
        top: -38%;
        right: -7%;
    }

    h1 {
        font-size: 14px;
        font-weight: 800;
        align-self: center;
        margin-bottom: 0;
        text-align: center;
    }

    .track {
        display: flex;
        position: relative;
        padding: 2vw;
        margin-bottom: 1vw;
        background: rgb(192, 192, 192);
        cursor: pointer;
        width: 15%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 12px;
        justify-content: center;
        height: 4vw;
    }

    @media only screen and (max-width: 767px) {

        .track {
            width: 54%;
            height: 16vw;
        }

    }

</style>