<template>
  <div class="welcome">
    <div class="mx-auto" v-if="team1Ready && team2Ready">
      <h1>
        {{countDown}}
      </h1>
    </div>
    <div class="container d-flex justify-content-between">
      <div class="card-player" style="width: 18rem;">
          <img src="https://images-ext-2.discordapp.net/external/iLAhL9I0HWHiP2KnMw5lTNTylKlk6abQ86mWzhLeLN0/https/www.jing.fm/clipimg/full/414-4141854_mickey-mouse-cowboy-png.png?width=460&height=637" class="card-img-top" alt="..." style="height: 23rem;">
        <div class="card-body">
          <a href="#" class="btn btn-primary" @click="tombol1">Play AS TANGAN KIRI</a>
        </div>
      </div>
        <div class="card-player" style="width: 18rem;">
            <img src="https://i.imgur.com/91QIVau.png" class="card-img-top" alt="...">
        <div class="card-body">
          <a href="#" class="btn btn-primary" @click="tombol2">Play AS TANGAN KANAN</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      countDown: 3
    }
  },
  methods: {
    tombol1 () {
      console.log('tombol 1 di click')
      this.$socket.emit('tombol1')
    },
    tombol2 () {
      console.log('tombol 2 di click')
      this.$socket.emit('tombol2')
    },
    checkStart () {
      if (this.team1Ready && this.team2Ready) {
        console.log('Masuk sini')
        if (this.countDown > 0) {
          setTimeout(() => {
            this.countDown -= 1
            this.checkStart()
          }, 1000)
        } else {
          console.log('GAME START')
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
      console.log('LOG')
      console.log(this.$socket.id)
    }
  },
  watch: {
    team1Ready () {
      this.checkStart()
    },
    team2Ready () {
      this.checkStart()
    }
  }
}
</script>

<style>
.card-player {
    margin-top: 13%;
}
</style>
