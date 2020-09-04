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
  width: 100%;
  height: 100%;
}

.item {
  padding: 50px;
}

.name {
  font-size: 13rem;
  font-family: Phorssa, serif;
  color: black;
}

.logo img{
  max-width: 25rem;
}
</style>
