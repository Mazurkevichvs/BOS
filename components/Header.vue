<template>
  <header>
    <div class="logo">
      <img src="~/assets/img/logo.png" alt="WSB Merito" />
      <p class="username">Imię Nazwisko</p>
    </div>
    <NuxtLink to="/">
      <div class="logout">
      <img src="~/assets/img/logout.png" alt="" />
      <p>Wyjść</p>
    </div>
    </NuxtLink>
    
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  margin: 40px 0;
  a {
    text-decoration: none;
    color: #000;
  }
}
.username {
  font-size: 32px;
  font-weight: 600;
  margin-left: 25px;
}
.logout {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 3px;
  p {
    font-size: 32px;
    font-weight: 600;
    margin-left: 10px;
  }
  &:hover {
    border: 1px solid #000;
    border-radius: 10px;

  }
}
.logo {
  display: flex;
  align-items: center;
}
</style>
