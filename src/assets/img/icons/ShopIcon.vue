<template>
    <div class="icon fill">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
                <path d="M488.5,448.9h-8.5V226.4c19.3-12.4,32.1-34,32.1-58.6c0-1.3-0.3-2.6-1-3.7L451.5,60c-4.2-7.3-12-11.9-20.4-11.9H80.9
            c-8.4,0-16.3,4.5-20.4,11.9L1,164.1c-0.6,1.1-1,2.4-1,3.7c0,24.6,12.8,46.2,32.1,58.6v222.5h-8.5c-4.1,0-7.5,3.4-7.5,7.5
            s3.4,7.5,7.5,7.5h464.9c4.1,0,7.5-3.4,7.5-7.5C496,452.3,492.6,448.9,488.5,448.9z M15.5,175.3l-0.9-6.9L73.5,67.4
            c1.5-2.7,4.4-4.3,7.4-4.3h350.1c3.1,0,5.9,1.6,7.4,4.3l58.7,101.7l-0.7,6.2c-3.7,26.6-26.5,47.1-54.1,47.1
            c-27.6,0-50.4-20.5-54.1-47.1H123.7c-3.7,26.6-26.5,47.1-54.1,47.1C42,222.4,19.2,201.9,15.5,175.3z M372.2,175.3
            c-3.7,26.6-26.5,47.1-54.1,47.1c-27.6,0-50.4-20.5-54.1-47.1H372.2z M248,175.3c-3.7,26.6-26.5,47.1-54.1,47.1
            s-50.4-20.5-54.1-47.1H248z M413.6,448.9h-70v-25.1h70V448.9z M413.6,423.8h-70l0-138.3h70L413.6,423.8z M464.9,448.9h-36.3
            l0-170.9c0-4.1-3.4-7.5-7.5-7.5h-85c-4.1,0-7.5,3.4-7.5,7.5l0,170.9H47.1V233.7c7.1,2.4,14.7,3.8,22.6,3.8
            c27.1,0,50.6-15.6,62.1-38.2c11.5,22.6,35,38.2,62.1,38.2s50.6-15.6,62.1-38.2c11.5,22.6,35,38.2,62.1,38.2s50.6-15.6,62.1-38.2
            c11.5,22.6,35,38.2,62.1,38.2c7.9,0,15.5-1.3,22.6-3.8V448.9z"/>
            </g>
            <g>
                <path d="M278,270.5H97.7c-3.5,0-6.2,2.8-6.2,6.2v126.9c0,3.5,2.8,6.2,6.2,6.2H278c3.5,0,6.2-2.8,6.2-6.2V276.7
			C284.3,273.3,281.5,270.5,278,270.5z M271.8,397.4H104V283h167.8V397.4z"/>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: "shop-icon",
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