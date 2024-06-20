<script>
export default {
    name: "myInput",
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<style scoped lang="scss">

.input {
    width: 100%;
    border: 1px solid gray;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 20px 0;
    cursor: pointer;


    &:focus-within, &:focus, &:focus-visible {
        //border: 2px solid tomato!important;
        outline: 2px solid tomato;
        border: 1px solid tomato;
    }
}

</style>