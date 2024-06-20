<script>
import MyButton from "./ui/myButton.vue";

export default {
    name: "postItem",
    components: {MyButton},
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>

    <div class="post">
        <div>
            <div><strong>ID: </strong>{{ post.id }}</div>
            <div><strong>Название поста: </strong>{{ post.title }}</div>
            <div><strong>Описание поста: </strong>{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button @click="$emit('remove', post)">
                Удалить
            </my-button>
            <my-button class="reverse" @click="$router.push(`/posts/${post.id}`)">
                Подробнее
            </my-button>
        </div>
    </div>

</template>

<style scoped>

.post {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 15px;
    border-radius: 10px;
    border: 2px solid tomato;
}

.post > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.post__btns {
    display: flex;
    flex-direction: column!important;
    align-items: center;
    gap: 8px;

    .btn {
        min-width: 150px;
        max-width: 150px;
    }
}

.btn__review {
    min-width: 24px;
    max-width: 24px;
    min-height: 24px;
    max-height: 24px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    transition: .3s;
    cursor: pointer;

    img {
        min-width: 24px;
        max-width: 24px;
        min-height: 24px;
        max-height: 24px;
    }
}

</style>