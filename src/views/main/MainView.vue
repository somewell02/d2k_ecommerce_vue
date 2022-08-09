<template>
    <main>
        <filled-button>Hello</filled-button>
        <filled-button color="accent">Hello</filled-button>
        <gray-icon-button>
            <delivery-icon/>
            Доставка и возврат
        </gray-icon-button>
    </main>
</template>

<script>
import FilledButton from "@/components/buttons/FilledButton";
import GrayIconButton from "@/components/buttons/GrayIconButton";
import DeliveryIcon from "@/assets/img/icons/DeliveryIcon";

export default {
    name: "MainView",
    data() {
        return {
            qwe: "",
        }
    },
    components: {GrayIconButton, FilledButton, DeliveryIcon},
}
</script>