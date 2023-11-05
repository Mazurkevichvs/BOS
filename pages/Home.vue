<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  document.body.style.backgroundColor = '#fff'
}) 
</script>

<template>
  <div class="container">
    <Header></Header>
    <main>
      <Navigation/>
      <div class="wrapper">
        <div class="inner__header">
          <h2 class="inner__title">Najnowsze oceny</h2>
          <p class="inner__link">See all</p>
        </div>
        <MarksList/>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">

main {
    background-color: #EEF8FF;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.wrapper {
  max-width: 1060px;
  width: 100%;
}

.inner__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.inner__title {
  color: #000;
}

.inner__link {
  font-size: 14px;
  color: #399DDC;
  cursor: pointer;
  &:hover {
    color: #0083d5;
  }
}
</style>