<script setup>
const login = ref('');
const password = ref('');
const password2 = ref('');
const error = ref(null);
const isHomePage = ref(true);
provide('loginValues', { login, password, password2, error });
provide('isHomePage', isHomePage);
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
