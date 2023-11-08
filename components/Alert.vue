<script setup>
defineProps({
    msg:String
})
</script>

<template>
    <div class="alert">
        <p>{{ msg }}</p>
    </div>
</template>

<style scoped lang="scss">
    .alert {
        width: 100%;
        padding: 5px;
        color:red;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fccece;
        border: 1px solid red;
        border-radius: 5px;
        margin-top: 10px;
    }
    @media screen and (max-width: 430px) {
        .alert{
            font-size: 14px;
        }
    }
</style>