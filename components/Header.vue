<template>
  <header>
    <div class="logo">
      <img src="~/assets/img/logo.png" alt="WSB Merito" />
      <p class="username">Name Surname</p>
    </div>
    <div class="logout">
      <img src="~/assets/img/logout.png" alt="" />
      <p>Wyjść</p>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  margin: 40px 0;
}
.username {
  font-size: 32px;
  font-weight: 600;
  margin-left: 25px;
}
.logout {
  display: flex;
  align-items: center;
  p {
    font-size: 32px;
    font-weight: 600;
    margin-left: 10px;
  }
}
.logo {
  display: flex;
  align-items: center;
}
</style>
