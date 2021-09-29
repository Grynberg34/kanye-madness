<template>
    <div class="header">
        <h1 class="header__title">Kanye West</h1> 
        <h2 class="header__subtitle">Bracket Generator</h2>
        <Champion />
    </div>
</template>

<script>
    import Champion from "../components/Champion"; 

    export default {
        components: {
            Champion
        },
    }
</script>

<style scoped>
    .header {
        padding-top: 5vw;
        margin-bottom: 5vw;
    }

    .header__title {
        text-align: center;
        font-size: 40px;
        margin-bottom: 1vw;
        font-weight: 800;
        text-transform: uppercase;
    }

    .header__subtitle {
        text-align: center;
        font-size: 20px;
        margin-bottom: 4vw;
        font-weight: 400;
        text-transform: lowercase;
        font-style: italic;
    }

    @media only screen and (max-width: 767px) {
        .header {
            padding-top: 20vw;
            padding-bottom: 20vw;
        }

        .header__title {
            font-size: 30px;
        }

        .header__subtitle {
            font-size: 16px;
            margin-bottom: 10vw;
        }
    }
</style>