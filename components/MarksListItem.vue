<template>
    <div class="mark__item__wrapper">
        <div class="mark__item__value">
            5
        </div>
        <p class="mark__item__title">Zaawansowane projektowanie aplikacji mobilnych</p>
        <p class="mark__item__subtitle">mgr inż. Szymon Guzik</p>
        <p class="mark__item__subtitle">Wykład</p>
        <div class="mark__item__icons">
            <img src="~assets/img/edit-icon.png" alt="">
            <img src="~assets/img/delete-icon.png" alt="">
        </div>
    </div>
</template>

<style scoped lang="scss">
.mark__item__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    p {
        width: 25%;
        text-align: center;
    }
}
    .mark__item__value {
        color:#000;
        font-weight: 600;
        font-size: 40px;
        width: 70px;
        height: 70px;
        border-radius: 15px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mark__item__title {
        color:#000;
        font-weight: 600;
    }
    .mark__item__subtitle {
       color: #8f9599; 
    }

    .mark__item__icons {
        display: flex;
        img {
            cursor:pointer;
            &:last-of-type {
                margin-left: 20px;
            }
        }
    }
</style>