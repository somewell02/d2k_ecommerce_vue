<template>
    <button :class="btnClass">
        <slot/>
    </button>
</template>

<script>
export default {
    name: "round-icon-button",
    props: {
        color: {
            type: String,
            default: "primary",
            required: false,
        },
    },
    computed: {
        btnClass() {
            const colors = ["primary", "white", "black"];
            if (!this.color || !colors.includes(this.color)) return "primary";
            else return this.color;
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    width: 45px;
    height: 45px;
    @include flex-center;
    border-radius: 50%;
}
</style>
<style lang="scss">
button {
    &.primary .icon {
        width: 22px;
        height: 22px;
    }
}
</style>