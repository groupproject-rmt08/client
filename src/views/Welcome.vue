<template>
  <div class="welcome">
    <div class="mx-auto" v-if="team1Ready && team2Ready">
      <h1 class="countdown-text">
        {{countDown}}
      </h1>
    </div>
    <div class="container d-flex justify-content-between">
      <div class="card-player" style="width: 18rem;">
          <img src="https://images-ext-2.discordapp.net/external/iLAhL9I0HWHiP2KnMw5lTNTylKlk6abQ86mWzhLeLN0/https/www.jing.fm/clipimg/full/414-4141854_mickey-mouse-cowboy-png.png?width=460&height=637" class="card-img-top" alt="..." style="height: 23rem;">
        <div class="card-body" v-if="!text1">
          <a href="#" class="btn btn-primary" @click.prevent="tombol1">Play AS TANGAN KIRI</a>
        </div>
        <div class="card-body" v-else-if="text1">
          <a href="#" class="btn btn-primary">{{text1}}</a>
        </div>
      </div>
        <div class="card-player" style="width: 18rem;">
            <img src="https://i.imgur.com/91QIVau.png" class="card-img-top" alt="...">
        <div class="card-body" v-if="!text2">
          <a href="#" class="btn btn-primary" @click.prevent="tombol2">Play AS TANGAN KANAN</a>
        </div>
        <div class="card-body" v-if="text2">
          <a href="#" class="btn btn-primary">{{text2}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MickeySound from '../audio/mickeysayhelp.wav'
import MinnieSound from '../audio/minniequotes.mp3'
import CountdownSound from '../audio/countdown.mp3'

export default {
  name: 'Welcome',
  data () {
    return {
      countDown: 3,
      isCountDown: false
    }
  },
  methods: {
    tombol1 () {
      console.log('tombol 1 di click')
      const mickeySound = new Audio(MickeySound)
      mickeySound.play()
      this.$socket.emit('tombol1')
    },
    tombol2 () {
      console.log('tombol 2 di click')
      const minnieSound = new Audio(MinnieSound)
      minnieSound.play()
      this.$socket.emit('tombol2')
    },
    checkStart () {
      if (this.team1Ready && this.team2Ready) {
        const countDownSound = new Audio(CountdownSound)
        if (this.isCountDown === false) {
          countDownSound.play()
        }
        if (this.countDown > 0) {
          setTimeout(() => {
            this.countDown -= 1
            this.isCountDown = true
            this.checkStart()
          }, 1300)
        } else {
          console.log('GAME START')
          this.$store.dispatch('setGameState', true)
          this.$socket.emit('startGame')
          this.$router.push('/game')
        }
      }
    }
  },
  computed: {
    text1 () {
      return this.$store.state.text1
    },
    text2 () {
      return this.$store.state.text2
    },
    lowerCountdown () {
      return this.countdown
    },
    team1Ready () {
      return this.$store.state.stateTeam.team1Ready
    },
    team2Ready () {
      return this.$store.state.stateTeam.team2Ready
    }
  },
  sockets: {
    connect () {
      console.log('Hello User')
      console.log(this.$socket.id)
      this.$store.dispatch('setUserId', this.$socket.id)
    }
  },
  watch: {
    team1Ready () {
      this.checkStart()
    },
    team2Ready () {
      this.checkStart()
    }
  },
  created () {
    this.$store.dispatch('setTeam', '')
    this.$store.dispatch('enableCount', true)
  }
}
</script>

<style>
.card-player {
    margin-top: 120px;
}
.countdown-text {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  color:#f1c40f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 150px
}
</style>
