<script>
import PostItem from "./postItem.vue";

export default {
    name: "postList",
    components: {PostItem},
    props: {
        posts: {
            type: Array,
            required: true
        },
    },
}
</script>

<template>

    <div v-if="posts.length > 0">
        <slot name="list_title"></slot>
        <div class="post__list">
            <transition-group name="post-list">
                <post-item
                    v-for="post in posts"
                    :post="post"
                    :key="post.id"
                    @remove="$emit('remove', post)"
                />
            </transition-group>
        </div>
    </div>
    <h2 v-else><strong>Список постов пуст. Добавьте что-нибудь</strong></h2>

</template>

<style scoped>

.post__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
}

.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all .5s ease-in-out;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.post-list-move {
    transition: transform 0.5s ease;
}

</style>