<template>
    <div class="icon fill">
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path d="M9.49401 13.6458L17.8057 5.33411C18.0714 5.05895 18.0638 4.62047 17.7887 4.35473C17.5202 4.09547 17.0947 4.09547 16.8263 4.35473L9.00431 12.1767L1.18231 4.35473C0.91186 4.08431 0.473385 4.08431 0.20293 4.35473C-0.0674839 4.62522 -0.0674839 5.06365 0.20293 5.33411L8.51462 13.6458C8.78512 13.9162 9.22355 13.9162 9.49401 13.6458Z" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="18" height="18" transform="translate(18) rotate(90)"/>
                </clipPath>
            </defs>
        </svg>

    </div>
</template>

<script>
export default {
    name: "short-arrow-icon",
};
</script>

<style lang="scss" scoped>
.icon {
    @include flex-center;
    width: 22px;
    height: 22px;
}

.fill svg * {
    fill: black;
}
</style>