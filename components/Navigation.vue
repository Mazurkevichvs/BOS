<template>
  <div class="navigation">
    <div class="nav__page">
      <img src="~assets/img/home-icon.png" alt="Home" class="home__icon" />
      <p>Home</p>
    </div>
    <div class="add__btn">
      <img src="~assets/img/plus.png" alt="add" />
    </div>
    <div class="nav__page">
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
  margin-bottom: 40px;
  max-width: 350px;
  width: 100%;
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
  border-radius: 50%;
  background-color: #0069ff;
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #1778ff;
  }
}
.nav__page {
  cursor: pointer;
  &:hover {
    color: #2979f2;
  }
}
@media screen and (min-width: 426px) and (max-width: 768px) {
  .navigation {
  margin-bottom: 30px;
  padding: 10px 25px;
  }
}

@media screen and (max-width: 425px) {
  .navigation {
    max-width: 300px;
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 10px 20px;
    position: sticky;
    bottom: 20px;
  } 
  .home__icon {
  margin-right: 10px;
  width: 25px;
  height: 25px;
}
.marks__icon {
  margin-left: 10px;
  width: 25px;
}
.nav__page {
  font-size: 14px;
}
.add__btn {
  height: 50px;
  width: 50px;
  img {
    width: 20px;
  }
}
}
</style>
