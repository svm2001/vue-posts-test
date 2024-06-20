<script>
export default {
    name: "myButton"
}
</script>

<template>

    <button class="btn">
        <slot></slot>
    </button>

</template>

<style scoped>

.btn {
    padding: 10px 15px;
    border: 2px solid tomato;
    background: white;
    color: tomato;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background: tomato;
        color: white;
    }
    &:active {
        transform: scale(.995);
        box-shadow: none;
    }
}

.btn.reverse {
    background: tomato;
    color: white;
    &:hover {
        background: white;
        color: tomato;
    }
}

.btn__review {
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    transition: .3s;
}

</style>