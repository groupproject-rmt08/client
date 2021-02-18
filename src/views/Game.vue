<template>
  <div class="home">
    <img src="https://i.imgur.com/Cy1jt7t.png" class="rope-image" :style="styleObject">
    <a href="#" @click.prevent="mash1">
      <img src="http://assets.stickpng.com/images/5895d315cba9841eabab607e.png" class="mash-button-left">
    </a>
    <div>
      <p>
        {{score1}}
      </p>
    </div>
    <a href="#" @click.prevent="mash2">
      <img src="http://assets.stickpng.com/images/5895d315cba9841eabab607e.png" class="mash-button-right">
    </a>
    <div>
      <p>
        {{score2}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      score1: 0,
      score2: 0
    }
  },
  methods: {
    countMash () {
      setTimeout(() => {
        console.log('Sent!!!')
        this.$store.dispatch('enableCount', false)
        this.sendScoreToServer()
      }, 2000)
    },
    enableCount (input) {
      this.counting = input
    },
    sendScoreToServer () {
      const score = (this.team === 'team 1') ? this.score1 : this.score2
      console.log(score)
      this.$socket.emit('sendScoreToServer', { score, team: this.team })
      this.score1 = 0
      this.score2 = 0
    },
    mash1 () {
      this.score1 += 1
    },
    mash2 () {
      this.score2 += 1
    }
  },
  computed: {
    counting () {
      return this.$store.state.counting
    },
    team () {
      return this.$store.state.team
    },
    winner () {
      return this.$store.state.stateTeam.winner
    },
    difference () {
      return -(this.$store.state.stateTeam.difference) * 3
    },
    styleObject () {
      return `margin-left:${this.difference}px;`
    }
  },
  watch: {
    winner () {
      console.log('Game Over!')
      this.$router.push('/gameover')
    },
    counting (newValue, oldValue) {
      if (newValue === true) {
        console.log(this.difference)
        console.log('Recount!')
        this.countMash()
      }
    }
  },
  created () {
    this.countMash()
  }
}
</script>

<style scoped>
  .rope-image {
    width: 100%;
  }

  .mash-button-left {
    width: 150px;
    margin-left: 150px;
    float: left;
  }

  .mash-button-right {
    width: 150px;
    margin-right: 150px;
    float: right;
  }
</style>
