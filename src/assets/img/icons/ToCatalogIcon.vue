<template>
    <div class="icon fill">
        <svg viewBox="0 0 72 62" xmlns="http://www.w3.org/2000/svg">
            <rect width="25" height="20" fill="white"/>
            <rect x="47" width="25" height="20" fill="white"/>
            <rect x="47" y="42" width="25" height="20" fill="white"/>
            <rect y="42" width="25" height="20" fill="white"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: "to-catalog-icon",
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