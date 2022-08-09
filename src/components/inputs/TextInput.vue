<template>
    <bordered-input type="text" :value="modelValue ?? ''" @input="updateInput" :color="color" />
</template>

<script>
import BorderedInput from "./BorderedInput";
export default {
    name: "text-input",
    props: {
        modelValue: {
            type: String,
            default: "",
            required: true,
        },
        color: {
            type: String,
            default: "accent",
            required: false,
        },
    },
    components: {
        BorderedInput,
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>