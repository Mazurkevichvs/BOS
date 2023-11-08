<script setup>
const {login, password, password2, error} = inject('loginValues')
const validateForm = (e) => {
  e.preventDefault()
  error.value = null;
  if (!login.value || !password.value || !password2.value) {
    error.value = 'Wszystkie pola są wymagane';
  } else if (password.value !== password2.value) {
    error.value = 'Wprowadź poprawne hasło';
  } else {
    navigateTo('/Home')
  }
};
</script>

<template>
  <div class="container">
    <img src="~/assets/img/logo-login.png" alt="Logo" class="logo__login" />
    <div class="login__form__container">
      <h1>Zaloguj się</h1>
      <p>Zaloguj się za pomocą imienia i nazwiska</p>
      <form>
        <Input v-model="login" imgName="login" placeholder="Imię Nazwisko" inputType="text" id="login" />
        <Input v-model="password" imgName="password" placeholder="Hasło" inputType="password" id="password" />
        <Input v-model="password2" imgName="password" placeholder="Powtórz hasło" inputType="password" id="password2" />
        <button @click="validateForm" class="login__button">Zaloguj się</button>
      </form>
      <Alert v-if="error" :msg="error"/>
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
  padding: 0 20px;
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
  max-width: 500px;
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
@media screen and (min-width: 426px) and (max-width: 768px) {
  .logo__login {
    width: 450px;
    margin-bottom: 40px;
  }
  .login__form__container {
    padding: 50px 70px;
  }
}

@media screen and (max-width: 430px) {
  .logo__login {
    max-width: 300px;
    margin-bottom: 30px;
  }
  .login__form__container {
    padding: 50px 40px;
    max-width: 350px;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 14px;
    margin-bottom: 50px;
  }
}
</style>
