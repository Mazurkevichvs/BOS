<script setup>
const subjectList = inject('subjectList');
const isHomePage = inject('isHomePage');
const filteredSubjects = () => {
  const screenWidth = window.innerWidth;
  const renderedItems = screenWidth < 768 ? 6 : 5;
  return isHomePage.value ? subjectList.value.slice(0, renderedItems) : subjectList.value;
};
</script>

<template>
  <section class="marks__list">
    <MarksListItem v-for="subject in filteredSubjects()" :id="subject.id" :key="subject.id" />
  </section>
</template>
