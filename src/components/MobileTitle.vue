<template>
    <h1>{{round}}</h1>
</template>

<script>
    export default {
        props: ['round'],
    }
</script>

<style scoped>
    h1 {
        display: none;
    }


    @media only screen and (max-width: 767px) {

        h1 {
            display: block;
            font-size: 24px;
            color: black;
            font-weight: 800;
            margin-bottom: 10vw;
            text-align: center;
            text-transform: uppercase;
        }

    }


</style>