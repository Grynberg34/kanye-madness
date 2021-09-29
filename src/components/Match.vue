<template>
    <div class="match" :round="round" :match="match" :position="position" :final="final">
        <div @click="chooseWinner(1)" v-bind:style="{ backgroundColor: background1, color: color1 }" class="team" :id="team1"><p class="team__title">{{track1}}</p></div>
        <div @click="chooseWinner(2)" v-bind:style="{ backgroundColor: background2, color: color2 }" class="team" :id="team2"><p class="team__title">{{track2}}</p></div>
    </div>
</template>

<script>
    export default {
        props: ['team1', 'team2', 'track1', 'track2', 'background1', 'background2', 'color1', 'color2', 'round', 'match', 'position', 'final'],
        data() {
            return {
                clicked: false
            }
        },
        mounted() {
            this.smallerTitle();
        },
        updated() {
            this.smallerTitle();
        },
        methods: {
            smallerTitle() {
                var titles = document.getElementsByClassName('team__title');

                for (var i=0; i < titles.length; i++) {
                    if (titles[i].innerHTML.length > 15) {
                        titles[i].style.fontSize = '12px'
                    }
                    if (titles[i].innerHTML.length > 25) {
                        titles[i].style.fontSize = '10px'
                    }
                }
            },
            chooseWinner(number, done) {

                if (this.team1 == undefined || this.team2 == undefined) {
                    return done
                }

                if (this.clicked == true) {
                    return done
                }

                if (this.final == true) {
                    this.$store.commit('crownChampion', {
                        background: this['background' + number],
                        text: this['color' + number],
                        id: this['team' + number],
                        name: this['track' + number]
                    })
                }

                if (this.clicked == false) {

                    this.$store.commit('updateMatch', {
                        round: this.round,
                        match: this.match,
                        position: this.position,
                        background: this['background' + number],
                        text: this['color' + number],
                        id: this['team' + number],
                        name: this['track' + number]
                    });
                
                    return this.clicked = true
                }

            }
        }
    }
</script>

<style scoped>

    .match {
        height: 5vw;
    }

    .team {
        display: flex;
        height: 2vw;
        width: 90%;
        background: rgb(192, 192, 192);
        border-radius: 12px;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
    }

    .team:first-of-type {
        margin-bottom: 1vw;
    }

    .team__title {
        display: block;
        font-size: 14px;
        margin-bottom: 0;
        align-self: center;
        font-weight: 500;
        user-select: none;
    }

    @media only screen and (max-width: 767px) {

        .match {
            height: 30vw;
            margin-top: 10vw;
            margin-bottom: 10vw;
        }

        .team {
            height: 10vw;
            width: 100%;

        }

        .team:first-of-type {
            margin-bottom: 4vw;
        }
    }

</style>