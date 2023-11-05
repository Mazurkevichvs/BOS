<template>
  <div class="container">
    <Header></Header>
    <main class="main">
      <Navigation/>
      <div class="wrapper">
        <div class="inner__header">
          <h2 class="inner__title">Najnowsze oceny</h2>
          <p class="inner__link">See all</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.main {
    background-color: #EEF8FF;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
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
}

.inner__title {
  color: #000;
}

.inner__link {
  font-size: 14px;
  color: #399DDC;
}
</style>
