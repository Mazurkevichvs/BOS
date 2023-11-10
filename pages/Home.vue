<script setup>
const isHomePage = inject('isHomePage')
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
          <h2 class="inner__title">{{ isHomePage ? 'Najnowsze oceny' : 'Wszystkie oceny' }}</h2>
          <p @click="() => isHomePage = !isHomePage" class="inner__link">{{ isHomePage ? 'See all' : 'See less'}}</p>
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
    padding: 0 20px;
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

@media screen and (min-width: 426px) and (max-width: 768px) {
  .inner__header {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 430px) {
  main {
    flex-direction: column-reverse;
    border-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 20px;
    height: 100%;
    justify-content: flex-end
  }
  .inner__header {
    margin-bottom: 20px;
  }
  .inner__title {
    font-size: 20px;
  }
  .inner__link {
    font-size: 12px;
  }
}
</style>