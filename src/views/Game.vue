<template>
  <div class="home">
    <img src="https://i.imgur.com/Cy1jt7t.png" class="rope-image">
    <div class="d-flex justify-content-between">
      <a href="#">
        <img src="http://assets.stickpng.com/images/5895d315cba9841eabab607e.png" class="mash-button-left" @click.prevent="clickLeftButton">
      </a>
      <a href="#">
        <img src="http://assets.stickpng.com/images/5895d315cba9841eabab607e.png" class="mash-button-right" @click.prevent="clickRightButton">
      </a>
    </div>
  </div>
</template>

<script>
import ButtonSound from '../audio/Blop-Mark_DiAngelo-79054334.mp3'
/* INI DITARO PAS GAMENYA KELAR
    import GameOverSound from '../audio/Ta_Da-SoundBible.com-1884170640.mp3'
  */
export default {
  name: 'Home',
  /* INI DITARO PAS GAMENYA KELAR, SEBELUM THIS.$ROUTER.PUSH('/gameover')
    const gameOverSound = new Audio(GameOverSound)
    gameOverSound.play()
  */
  methods: {
    clickLeftButton () {
      const buttonSound = new Audio(ButtonSound)
      buttonSound.play()
    },
    clickRightButton () {
      const buttonSound = new Audio(ButtonSound)
      buttonSound.play()
    }
  }
}
</script>

<style scoped>
  .rope-image {
    margin-left: 0px;
    width: 100%;
  }

  .mash-button-left {
    width: 150px;
    margin-left: 150px;
  }

  .mash-button-right {
    width: 150px;
    margin-right: 150px;
  }
</style>
