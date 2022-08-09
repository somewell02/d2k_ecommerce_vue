<template>
    <button class="gray">
        <slot/>
    </button>
</template>

<script>
export default {
    name: "gray-icon-button",
};
</script>

<style lang="scss" scoped>
    button {
        border:none;
        outline: none;
        font-size: 12px;
        font-weight: 400;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 100%;
        max-width: 300px;
        cursor: pointer;
        transition: 0.2s;
        background: var(--gray-button-color);
        &:focus,
        &:active {
            outline:none!important;
            border:0!important;
        }
        @include media-md-min {
            &:hover {
                background: var(--gray-button-hover-color);
            }
        }
    }
</style>

<style lang="scss">
    button.gray .icon {
        width:22px;
        height:22px;
        margin-right:10px;
    }
</style>

