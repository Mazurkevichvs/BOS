<script setup>
import { SUBJECTLIST } from '~/assets/subjectList';
const subjectList = ref(SUBJECTLIST);
provide('subjectList', subjectList);
const isHomePage = inject('isHomePage');
onMounted(() => {
  document.body.style.backgroundColor = '#fff';
});
const addNewMark = () => {
  const newSubjectItem = {
    id: Date.now().toString(),
    mark: 0,
    subjectName: 'Nazwa przedmiotu',
    teacher: 'Imię wykładowcy',
    form: 'Rodzaj zajęć',
  };
  subjectList.value.unshift(newSubjectItem);
};
</script>

<template>
  <div class="container">
    <Header></Header>
    <main>
      <Navigation @addNewMark="addNewMark"/>
      <div class="wrapper">
        <div class="inner__header">
          <h2 class="inner__title">{{ isHomePage ? 'Najnowsze oceny' : 'Wszystkie oceny' }}</h2>
          <p @click="() => (isHomePage = !isHomePage)" class="inner__link">
            {{ isHomePage ? 'See all' : 'See less' }}
          </p>
        </div>
        <MarksList />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
main {
  background-color: #eef8ff;
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
  color: #399ddc;
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
    padding: 20px;
    justify-content: flex-end;
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
