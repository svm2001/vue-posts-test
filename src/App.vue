<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    <div class="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/navbar.vue";

export default {
    components: {Navbar}

}
</script>

<style>

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Nunito", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}

body {
    overflow-x: hidden;
}

h3 {
    margin-bottom: 16px;
}

h1 {
    margin-bottom: 20px;
}

.app {
    padding: 20px;
}

.loader {
    width: 48px;
    height: 48px;
    border: 3px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

.loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #FF3D00 transparent;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}


</style>