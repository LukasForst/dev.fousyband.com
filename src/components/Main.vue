<template>
  <div class="main-container">
    <div class="item name">
      <p>FOUsY</p>
    </div>
    <div class="item logo">
      <img alt="Fousy Logo" src="../assets/fousy.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  flex-wrap: wrap;
}

.item {
  padding: 5vw;
}

.name {
  font-size: 11vw;
  font-family: Phorssa, serif;
  color: black;
}

.logo img {
  max-width: 18vw;
}
</style>
