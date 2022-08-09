<template>
  <textarea
      :class="inputClass"
      :value="modelValue"
      @input="updateInput"
  ></textarea>
</template>

<script>
export default {
    name: "bordered-textarea",
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
    computed: {
        inputClass() {
            const colors = ["primary", "accent"];
            if (!this.color || !colors.includes(this.color)) return "accent";
            else return this.color;
        },
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>

<style lang="scss" scoped>
textarea {
    @include custom-scroll;
    width: 100%;
    border-radius: 0;
    background: transparent;
    outline: none;
    padding: 14px 22px;
    font-size: 14px;
    line-height: 1.3;
    height: 80px;

    &.accent {
        border: 1px solid var(--accent-color);
        color: var(--text-color);

        &::placeholder {
            color: var(--text-light-color);
        }
    }
}
</style>