<template>
  <div class="Gameover">
    <div class="card-gameover mx-auto" style="width: 30rem;">
      <div class="card-body">
        <img src="https://cdn1.iconfinder.com/data/icons/video-game-14/48/video_game_pixel_perfect_icons_25-game-over-512.png" class="card-img-top" alt="...">
        <br><br>
        <h1 class="win-text">{{winner}} WIN!</h1>
        <br>
        <button type="button" class="btn btn-danger btn-block" @click="endGame">EXIT</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GameOver',
  methods: {
    endGame () {
      console.log('tombol endgame di click')
      this.$socket.emit('endGame')
      this.$router.push('/')
    }
  },
  computed: {
    winner () {
      return (this.$store.state.stateTeam.winner === 'team 1') ? 'TANGAN KIRI' : 'TANGAN KANAN'
    }
  },
  created () {}
}
</script>

<style scoped>
 .card-gameover {
      margin-top: 4%;
      background-color: #f1c40f !important;
    }
</style>
