<script>
import MyButton from "./ui/myButton.vue";
import MyInput from "./ui/myInput.vue";

export default {
    name: "postForm",
    components: {MyButton, MyInput},
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        }
    },
    watch: {
        post: {
            deep: true,
        }
    }
}
</script>

<template>
    <form @submit.prevent>
        <h3>Новый пост</h3>
        <my-input
            placeholder="Название поста"
            v-model="post.title"
            v-focus
        />
        <my-input
            placeholder="Описание поста"
            v-model="post.body"
        />
        <my-button @click="createPost">
            Добавить пост
        </my-button>
    </form>
</template>

<style scoped>

form {
    display: flex;
    flex-direction: column;
}

form .btn {
    margin-top: 20px;
    width: 100%;
}

</style>