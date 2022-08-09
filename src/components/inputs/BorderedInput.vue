<template>
    <input :class="inputClass" />
</template>

<script>
export default {
    name: "bordered-input",
    props: {
        color: {
            type: String,
            default: "accent",
            required: false,
        },
    },
    computed: {
        inputClass() {
            const colors = ["primary", "accent"];
            if (!this.color || !colors.includes(this.color)) return "accent";
            else return this.color;
        },
    },
};
</script>

<style lang="scss" scoped>
input {
    width:100%;
    border-radius: 0;
    background: transparent;
    outline: none;
    padding:14px 22px;
    font-size:14px;

    &.accent {
        border: 1px solid var(--accent-color);
        color: var(--text-color);
        &::placeholder {
            color: var(--text-light-color);
        }
    }
}
</style>