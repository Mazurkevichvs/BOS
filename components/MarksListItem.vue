<script setup>
const { id } = defineProps(['id']);
const subjectList = inject('subjectList');
const subjectItem = subjectList.value.find((el) => el.id === id);
const isEditing = ref(false);
const deleteSubject = () => {
  subjectList.value = subjectList.value.filter((el) => el.id !== id);
};
const handleEditing = () => {
  const index = subjectList.value.findIndex((el) => el.id === id);

  const updatedSubjectItem = {
    ...subjectList.value[index],
    mark: subjectItem.mark,
    subjectName: subjectItem.subjectName,
    teacher: subjectItem.teacher,
    form: subjectItem.form,
  };
  subjectList.value[index] = updatedSubjectItem;
  isEditing.value = false;
};
const handleMarkChange = (action) => {
  if (action === 'plus' && +subjectItem.mark < 5) {
    +subjectItem.mark++;
  } else if (action === 'minus' && +subjectItem.mark > 0) {
    +subjectItem.mark--;
  }
};
watch(isEditing, () => {
  localStorage.setItem('subjects', JSON.stringify(subjectList.value));
});
</script>

<template>
  <div :class="`mark__item__wrapper ${isEditing ? 'edit' : ''}`">
    <div class="mark__item__value__wrapper">
      <div :class="`mark__item__value ${isEditing ? 'edit__mark' : ''}`">
        {{ subjectItem.mark }}
      </div>
      <div v-if="isEditing" class="mark__item__value__btn__wrapper">
        <div @click="handleMarkChange('plus')" class="mark__item__value__btn">+</div>
        <div @click="handleMarkChange('minus')" class="mark__item__value__btn">-</div>
      </div>
    </div>
    <div class="mark__item__names">
      <template v-if="!isEditing">
        <p class="mark__item__title">{{ subjectItem.subjectName }}</p>
        <p class="mark__item__subtitle">{{ subjectItem.teacher }}</p>
        <p class="mark__item__subtitle subject__form">{{ subjectItem.form }}</p>
      </template>
      <template v-else>
        <EditInput
          v-model="subjectItem.subjectName"
          placeholder="Nazwa przedmiotu"
          id="subjectName"
        />
        <EditInput v-model="subjectItem.teacher" placeholder="Imię wykładowcy" id="subjectName" />
        <EditInput
          additionalClass="subject__form"
          v-model="subjectItem.form"
          placeholder="Rodzaj zajęć"
          id="subjectName"
        />
      </template>
    </div>
    <div class="mark__item__icons">
      <img
        class="edit__icon"
        v-if="isEditing"
        @click="handleEditing()"
        src="~assets/img/accept-icon.png"
        alt="accept"
      />
      <template v-else>
        <img @click="() => (isEditing = true)" src="~assets/img/edit-icon.png" alt="edit" />
        <img @click="deleteSubject()" src="~assets/img/delete-icon.png" alt="delete" />
      </template>
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
.mark__item__value__wrapper {
  display: flex;
  margin-right: 10px;
}
.mark__item__value__btn__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  margin-right: 5px;
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
  input:first-of-type {
    margin-left: 0px;
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
.edit__icon {
  margin-left: 0 !important;
}
.edit {
  padding: 10px;
  background-color: #9fcfed;
  border-radius: 15px;
}
.edit__mark {
  background-color: #b6d2e3;
}
.mark__item__value__btn {
  width: 17px;
  height: 17px;
  background-color: #b6d2e3;
  border-radius: 2px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 25px;
}
@media screen and (min-width: 431px) and (max-width: 768px) {
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

@media screen and (min-width: 431px) and (max-width: 550px) {
  .subject__form {
    display: none;
  }
  .mark__item__names p {
    width: 50%;
  }
}

@media screen and (max-width: 430px) {
  .mark__item__wrapper {
    margin-bottom: 25px;
  }
  .subject__form {
    display: none;
  }
  .mark__item__value {
    width: 50px;
    height: 50px;
  }
  .mark__item__names {
    flex-direction: column;
    width: 65%;
    margin-right: auto;
    text-align: left;
    align-items: baseline;
    p {
      text-align: left;
      width: 100%;
    }
    input {
      margin-left: 0;
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
  .mark__item__value__btn {
    width: 14px;
    height: 14px;
    font-size: 20px;
  }
}
</style>
