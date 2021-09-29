<template>

    <div>

        <MobileTitle :round="'semifinal'" />

        <Match class="match" v-for="match in getMatches" v-bind:key="match.index" :round="match.next.round" :match="match.next.match" :position="match.next.position"
        :team1="match.team1.id" :track1="match.team1.name" :background1="match.team1.background" :color1="match.team1.text"
        :team2="match.team2.id" :track2="match.team2.name" :background2="match.team2.background" :color2="match.team2.text"
        />

    </div>
    
</template>

<script>
    import Match from "../components/Match";  
    import MobileTitle from './MobileTitle';

    export default {
        components: {
            Match,
            MobileTitle
        },
        computed: {
            getMatches() {
                return this.$store.getters['getSemifinal'];
            }
        },
    }
</script>

<style scoped>

    @media only screen and (min-width: 767px) {

        .match {
            margin-top: 139vw;
        }

        .match:first-of-type {
            margin-top: 72vw;
        }

    }


</style>