<script setup>
  const { subject } = defineProps(['subject']);
const { mark, subjectName, teacher, form } = subject;
</script>

<template>
  <div class="mark__item__wrapper">
    <div class="mark__item__value">{{ mark }}</div>
    <div class="mark__item__names">
      <p class="mark__item__title">{{ subjectName }}</p>
      <p class="mark__item__subtitle">{{ teacher }}</p>
      <p class="mark__item__subtitle class__type">{{ form }}</p>
    </div>
    <div class="mark__item__icons">
      <img src="~assets/img/edit-icon.png" alt="edit" />
      <img src="~assets/img/delete-icon.png" alt="delete" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.mark__item__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.mark__item__value {
  color: #000;
  font-weight: 600;
  font-size: 40px;
  width: 70px;
  height: 70px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.mark__item__names {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  p {
    text-align: center;
    width: 40%;
    &:last-of-type {
      width: 20%;
    }
  }
}
.mark__item__title {
  color: #000;
  font-weight: 600;
}
.mark__item__subtitle {
  color: #8f9599;
}

.mark__item__icons {
  display: flex;
  img {
    cursor: pointer;
    &:last-of-type {
      margin-left: 20px;
    }
  }
}
@media screen and (min-width: 426px) and (max-width: 768px) {
  .mark__item__wrapper {
    margin-bottom: 20px;
  }
  .mark__item__value {
    width: 60px;
    height: 60px;
  }
  .mark__item__names {
  p {
    font-size: 15px;
  }
}
.mark__item__icons {
    margin-left: 10px;
  img {
    &:last-of-type {
      margin-left: 10px;
    }
  }
}
}

@media screen and (max-width: 430px) {
  .mark__item__wrapper {
    margin-bottom: 25px;
  }
  .class__type {
    display: none;
  }
  .mark__item__value {
    width: 50px;
    height: 50px;
  }
  .mark__item__names {
    flex-direction: column;
    width: 65%;
    text-align: left;
    align-items: baseline;
    p {
      text-align: left;
      width: 100%;
    }
  }
  .mark__item__subtitle {
    font-size: 14px;
  }
  img {
    width: 24px;
  }
  .mark__item__icons {
    margin-left: 5px;
    img {
      &:last-of-type {
        margin-left: 10px;
      }
    }
  }
}
</style>
