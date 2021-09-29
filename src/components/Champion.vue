<template>

    <div>
        <div v-bind:style="{ backgroundColor: getChampion.background, color: getChampion.text }" class="track" :id="getChampion.id">{{getChampion.name}}
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
        top: -34%;
        right: -7%;
    }

    .track {
        position: relative;
        padding: 2vw;
        margin-bottom: 1vw;
        background: rgb(192, 192, 192);
        cursor: pointer;
        width: 15%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 12px;
    }

    @media only screen and (max-width: 767px) {

        .track {
            width: 54%;
            padding: 8vw;
        }

    }

</style>