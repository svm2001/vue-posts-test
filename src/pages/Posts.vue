<script>

import postForm from "../components/postForm.vue";
import postList from "../components/postList.vue";
import MyDialog from "../components/ui/myDialog.vue";
import MyButton from "../components/ui/myButton.vue";
import axios from "axios";
import MySelect from "../components/ui/mySelect.vue";
import MyInput from "../components/ui/myInput.vue";

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
            posts: [],
            h1: 'Страница с постами',
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ],
        }
    },
    methods: {
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
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                })
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = response.data
            } catch (e) {
                console.log('error:', e)
            } finally {
                this.isPostsLoading = false
            }
        },
        async loadMorePosts() {
            try {
                this.page = this.page + 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                })
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = [...this.posts, ...response.data]
            } catch (e) {
                console.log('error:', e)
            }
        },
        changePage(pageNumber) {
            this.page = pageNumber
        }
    },
    mounted() {
        this.fetchPosts()
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
        // page() {
        //     this.fetchPosts()
        // }
    }
}

</script>

<template>

    <div>
        <div class="page__top">
            <h1 style="margin-top: 100px; text-align: center">{{ h1 }}</h1>
            <my-input v-focus v-model="searchQuery" placeholder="Введите запрос..."></my-input>
            <div class="app__btns">
                <my-button @click="showDialog">Создать пост</my-button>
                <my-select v-model="selectedSort" :options="sortOptions" v-show="posts.length > 1"></my-select>

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
<!--        <div class="page__wrapper">-->
<!--            <div-->
<!--                v-for="pageNumber in totalPages"-->
<!--                :key="pageNumber"-->
<!--                class="page"-->
<!--                :class="{-->
<!--                            'current-page': page === pageNumber-->
<!--                        }"-->
<!--                @click="changePage(pageNumber)"-->
<!--            > {{ pageNumber }}-->
<!--            </div>-->
<!--        </div>-->
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

.page__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60px 0 20px 0;
    gap: 8px;
}

.page {
    cursor: pointer;
    transition: .3s;
    border: 1px solid #6c6c6c;
    background: #6c6c6c;
    padding: 6px 12px;
    border-radius: 6px;
    color: white;
    font-size: 22px;

    &:hover {
        background: black;
        border: 1px solid black;
        color: white;
    }
}

.current-page, .current-page:hover {
    background: tomato;
    border: 1px solid tomato;
    padding: 6px 26px;
    cursor: default;
}
</style>
