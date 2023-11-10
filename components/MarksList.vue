<script setup>
const subjectList = inject('subjectList')
const isHomePage = inject('isHomePage')
const filteredSubjects = () => isHomePage.value ? subjectList.value.slice(0, 5) : subjectList.value
console.log(filteredSubjects())
</script>

<template>
    <section class="marks__list">
         <MarksListItem v-for="subject in filteredSubjects()" :subject="subject" :key="subject.id"/>
    </section>
</template>