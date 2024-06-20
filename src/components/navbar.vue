<script>
import MyButton from "./ui/myButton.vue";

export default {
    name: "navbar",
    components: {MyButton}
}
</script>

<template>
    <div class="navbar">
        <div class="navbar__logo">
            <a href="https://v3.ru.vuejs.org" title="Vue 3" target="_blank">
                <img src="../assets/vue.svg" alt="">
            </a>
        </div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/')">Главная</my-button>
            <my-button @click="$router.push('/about')">О сайте</my-button>
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/store')">Посты (store-vuex)</my-button>
            <my-button @click="$router.push('/composition')">Посты (Composition API)</my-button>
        </div>
    </div>
</template>

<style scoped>

.navbar {
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;
    background: lightblue;
    box-shadow: 2px 2px 20px lightslategrey;
    padding: 10px 30px;
}

.navbar__logo, .navbar__logo img {
    max-width: 60px;
    min-width: 60px;
}

.navbar__btns {
    display: flex;
    gap: 12px;

    .btn {
        padding: 5px 15px;
    }
}

</style>