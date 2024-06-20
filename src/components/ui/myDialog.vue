<script>
import toggleMixin from "../../mixins/toggleMixin.js";

export default {
    name: "myDialog",
    mixins: [toggleMixin],
}
</script>

<template>
    <div class="dialog" v-if="show" @click="hideDialog" >
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

.dialog {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    padding: 16px;
    max-width: 500px;
    width: 100%;
}

</style>