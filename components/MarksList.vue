<script setup>
import {SUBJECTLIST} from '../assets/subjectList'
const isHomePage = inject('isHomePage')
const filteredSubjects = () => isHomePage.value ? SUBJECTLIST.slice(0, 5) : SUBJECTLIST
</script>

<template>
    <section class="marks__list">
         <MarksListItem v-for="(subject, index) in filteredSubjects()" :subject="subject" :key="`${index}_${subject.subjectName}`"/>
    </section>
</template>