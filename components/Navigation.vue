<template>
  <div class="navigation">
    <div class="nav__home">
      <img src="~assets/img/home-icon.png" alt="Home" class="home__icon" />
      <p>Home</p>
    </div>
    <div class="add__btn">
      <img src="~assets/img/plus.png" alt="add" />
    </div>
    <div>
      <p>Oceny</p>
      <img src="~assets/img/marks-icon.png" alt="Oceny" class="marks__icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 350px;
  background-color: #fff;
  border-radius: 60px;
  padding: 10px 25px;
  div {
    display: flex;
    align-items: center;
    color: #9ea2be;
  }
}

.home__icon {
  margin-right: 15px;
  width: 30px;
  height: 30px;
}

.marks__icon {
  margin-left: 15px;
}

.add__btn {
  font-size: 50px;
  font-weight: 600;
  border-radius: 50%;
  background-color: #0069ff;
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
