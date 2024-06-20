<script>

import postForm from "../components/postForm.vue";
import postList from "../components/postList.vue";
import MyDialog from "../components/ui/myDialog.vue";
import MyButton from "../components/ui/myButton.vue";
import MySelect from "../components/ui/mySelect.vue";
import MyInput from "../components/ui/myInput.vue";
import {mapState, mapActions, mapGetters, mapMutations} from "vuex";

export default {
    components: {
        MyInput,
        MySelect,
        MyButton,
        MyDialog,
        postList, postForm
    },
    data() {
        return {
            h1: 'Страница с постами',
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts',
        }),

        createPost(post) {
            if (post.title !== '' && post.body !== '') {
                this.posts.push(post)
                this.dialogVisible = false
            }
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
        changePage(pageNumber) {
            this.page = pageNumber
        }
    },
    mounted() {
        this.fetchPosts()
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            h1: 'h1',
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
        })
    }
}
</script>

<template>
    <div>
        <div class="page__top">
            <h1 style="margin-top: 100px; text-align: center">{{ h1 }}</h1>
            <my-input
                v-focus
                :model-value="searchQuery"
                @update:model-value="setSearchQuery"
                placeholder="Введите запрос..."></my-input>
            <div class="app__btns">
                <my-button @click="showDialog">Создать пост</my-button>
                <my-select
                    :model-value="selectedSort"
                    @update:model-value="setSelectedSort"
                    :options="sortOptions"
                    v-show="posts.length > 1"></my-select>

            </div>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"></post-form>
        </my-dialog>
        <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading">
            <template v-slot:list_title>
                <h3>Список постов</h3>
            </template>
        </post-list>
        <div v-else class="loader"></div>
        <div  v-intersection="loadMorePosts" class="observer"></div>
    </div>
</template>

<style>
.page__top {
    margin-bottom: 40px;
}

.app {
    padding: 20px;
}

.app__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
