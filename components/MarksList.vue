<script setup>
import {SUBJECTLIST} from '../assets/subjectList'
const isHomePage = inject('isHomePage')
</script>

<template>
    <section v-for="(item, index) in SUBJECTLIST" class="marks__list">
         <MarksListItem :item="item" />
    </section>
</template>