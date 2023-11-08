<script setup>
const loginValues = inject('loginValues')
const handleLogout = () => {
  loginValues.login.value = ''
  loginValues.password.value = ''
  loginValues.password2.value = ''
  navigateTo('/')
}
</script>

<template>
  <header>
    <div class="logo">
      <img src="~/assets/img/logo.png" alt="WSB Merito" />
      <p class="username">{{loginValues.login.value}}</p>
    </div>
      <div @click="handleLogout()" class="logout">
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
  padding: 40px 20px;
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
@media screen and (min-width: 426px) and (max-width: 768px) {
  header {
    padding: 30px 20px;
  }
  .logo {
    img {
      width: 100px;
    }
  }
  .username {
  font-size: 28px;
  margin-left: 10px;
}
.logout {
  padding: 0px;
  p {
    font-size: 28px;
    margin-left: 5px;
  }
  img {
    width:40px
  }
}
}

@media screen and (max-width: 430px) {
  header {
    padding: 25px 30px;
  }
  .logo {
    img {
      width: 75px;
    }
  }
  .username {
    font-size: 24px;
    margin-left: 4px;
  }
  .logout {
    padding: 1px;
    img {
      width: 32px;
    }
    p {
      display: none;
    }
  }
}
</style>
