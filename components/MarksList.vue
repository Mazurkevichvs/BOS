<script setup>
const subjectList = inject('subjectList')
const isHomePage = inject('isHomePage')
const filteredSubjects = () => isHomePage.value ? subjectList.value.slice(0, 5) : subjectList.value
</script>

<template>
    <section class="marks__list">
         <MarksListItem v-for="subject in filteredSubjects()" :id="subject.id" :key="subject.id"/>
    </section>
</template>