<script>
import MyButton from "../components/ui/myButton.vue";

export default {
    name: "PostId",
    components: {MyButton}
}
</script>

<template>
    <div>
        <h1 style="margin-top: 100px; text-align: center">Детальная страница поста. <br> ID: {{ $route.params.id }}</h1>

        <span @click="$router.push('/posts')">← Вернуться</span>
    </div>
</template>

<style scoped>

span {
    color: tomato;
    font-size: 24px;
    transition: .3s;
    cursor: pointer;
    &:hover {
        color: black;
    }
}

</style>