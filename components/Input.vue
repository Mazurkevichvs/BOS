<script setup>
defineProps({
  imgName: String,
  placeholder: String,
  inputType: String,
  id: String,
  modelValue: String,
});
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input_container">
    <img :src="`_nuxt/assets/img/${imgName}-icon.png`" :alt="imgName" class="icon" />
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="inputType"
      :id="id"
      class="custom_input"
      :placeholder="placeholder"
      required
    />
  </div>
</template>

<style scoped>
.input_container {
  display: flex;
  align-items: center;
  background-color: #0069ff;
  border-bottom: 2px solid #3387ff;
  margin-bottom: 35px;
  padding-bottom: 15px;
}
.icon {
  color: #fff;
  margin-right: 10px;
}

input {
  width: 100%;
  border: none;
  color: #fff;
}
.custom_input {
  border: none;
  background: transparent;
  width: 100%;
  font-size: 16px;
  outline: none;
}
::placeholder {
  color: #fff;
  font-weight: 400;
}

@media screen and (max-width: 430px) {
  .custom_input {
    font-size: 14px;
  }

  ::placeholder {
    font-size: 14px;
  }
}
</style>
