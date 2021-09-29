<template>
    <div class="container-fluid">

        <Header />

        <div class="row">

            <div class="round col-md-2"><Round64 /></div>
            <div class="round col-md-2"><Round32 /></div>
            <div class="round col-md-2"><Round16 /></div>
            <div class="round col-md-2"><Round8 /></div>
            <div class="round col-md-2"><Semifinal /></div>
            <div class="round col-md-2"><Final /></div>

        </div>

        
    </div>
</template>

<script>
    import Header from "../components/Header"; 
    import Round64 from "../components/Round64"; 
    import Round32 from "../components/Round32";  
    import Round16 from "../components/Round16";   
    import Round8 from "../components/Round8";   
    import Semifinal from "../components/Semifinal";   
    import Final from "../components/Final";    
    import json from '../assets/tracks.json';

    export default {
        components: {
            Header,
            Round64,
            Round32,
            Round16,
            Round8,
            Semifinal,
            Final,
        },
        beforeMount() {
            this.drawMatches();
        },
        data(){
            return {
                tracks: json,                
            }
        },
        methods: {
            drawMatches() {
                for (var i=0; i < 32; i++) {
                    var match_number = i+1
                    var num1 = Math.floor(Math.random() * (this.tracks.length));
                    this.$store.commit('drawMatch', {
                        id: this.tracks[num1].id,
                        name: this.tracks[num1].name,
                        background: this.tracks[num1].background,
                        text: this.tracks[num1].text,
                        match: `match${match_number}`,
                        round: 'round64',
                        position: 'team1',

                    })
                    this.tracks.splice(num1, 1);

                    var num2 = Math.floor(Math.random() * (this.tracks.length));
                    this.$store.commit('drawMatch', {
                        id: this.tracks[num2].id,
                        name: this.tracks[num2].name,
                        background: this.tracks[num2].background,
                        text: this.tracks[num2].text,
                        match: `match${match_number}`,
                        round: 'round64',
                        position: 'team2',

                    })
                    this.tracks.splice(num2, 1);

                }
            },
        }
    }

</script>

<style scoped>

    .container-fluid {
        padding-left: 5vw;
        padding-right: 5vw;
    }

    @media only screen and (max-width: 767px) {
        .round {
            display: block;
            padding-left: 25vw;
            padding-right: 25vw;
            margin-bottom: 25vw;

        }
    }

</style>