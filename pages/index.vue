<script setup></script>

<template>
  <div class="container">
    <img src="~/assets/img/logo-login.png" alt="Logo" class="logo__login" />
    <div class="login__form__container">
      <h1>Zaloguj się</h1>
      <p>Zaloguj się za pomocą imienia i nazwiska</p>
      <form>
        <Input imgName="login" placeholder="Imię Nazwisko" inputType="text" id="login"/>
        <Input imgName="password" placeholder="Hasło" inputType="password" id="password"/>
        <Input imgName="password" placeholder="Powtórz hasło" inputType="password" id="password2"/>     
        <NuxtLink to="/Home" class="login__button">Zaloguj się</NuxtLink>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url('~/assets/img/bg.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.logo__login {
  width: 500px;
  margin-bottom: 50px;
}
.login__form__container {
  background-color: #0069ff;
  text-align: center;
  padding: 50px 90px;
  border-radius: 40px;
  width: 500px;
}

h1 {
  color: white;
  margin-bottom: 25px;
  font-weight: 600;
}

p {
  color: white;
  margin-bottom: 50px;
}
.login__button {
  display: block;
  text-decoration: none;
  background-color: white;
  color: #0069ff;
  padding: 18px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
}
</style>
