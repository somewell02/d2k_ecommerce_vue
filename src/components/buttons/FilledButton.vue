<template>
    <button :class="btnClass">
        <slot/>
    </button>
</template>

<script>
export default {
    name: "filled-button",
    props: {
        color: {
            type: String,
            default: "primary",
            required: false,
        },
    },
    computed: {
        btnClass() {
            const colors = ["primary", "accent"];
            if (!this.color || !colors.includes(this.color)) return "primary";
            else return this.color;
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    max-width: 365px;
    cursor: pointer;
    transition: 0.2s;

    &:focus,
    &:active {
        outline: none !important;
        border: 0 !important;
    }

    &.primary {
        background: var(--primary-color);
        border-radius: 5px;
        color: white;
        @include media-md-min {
            &:hover {
                background: var(--primary-light-color);
            }
        }
    }

    &.accent {
        background: var(--accent-color);
        color: white;
        @include media-md-min {
            &:hover {
                background: var(--accent-light-color);
            }
        }
    }
}
</style>