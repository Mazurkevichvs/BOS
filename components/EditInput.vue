<script setup>
    defineProps({
        additionalClass: String,
        id: String,
        placeholder: String,
        modelValue: String
    })
    defineEmits(['update:modelValue'])
</script>

<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :class="`edit__input ${additionalClass ? additionalClass : ''}`" type="text" :placeholder="placeholder" :id="id"/>
</template>

<style scoped lang="scss">
input {
  width: 100%;
  height: 40px;
  padding-left: 10px;
  background-color: #b6d2e3;
  border: none;
  border-radius: 5px;
  margin-left: 25px;
  &:focus {
    outline: solid;
    outline-width: 1px;
    outline-color: #70b6e1;
  }
}
@media screen and (min-width: 431px) and (max-width: 768px) {
  input {
    font-size: 15px;
    margin-left: 15px;
  }
}
</style>
