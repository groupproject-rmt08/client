<template>
  <div class="home">
    <img src="https://i.imgur.com/Cy1jt7t.png" class="rope-image">
    <a href="#">
      <img src="http://assets.stickpng.com/images/5895d315cba9841eabab607e.png" class="mash-button-left">
    </a>
    <a href="#">
      <img src="http://assets.stickpng.com/images/5895d315cba9841eabab607e.png" class="mash-button-right">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
    float: left;
  }

  .mash-button-right {
    width: 150px;
    margin-right: 150px;
    float: right;
  }
</style>
