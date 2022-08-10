<template>
    <main>
        <filled-button> Hello </filled-button>
        <filled-button color="accent">Hello</filled-button>
        <gray-icon-button>
            <metro-icon/>
            Доставка и возврат
        </gray-icon-button>
    </main>
</template>

<script>
import FilledButton from "@/components/buttons/FilledButton";
import GrayIconButton from "@/components/buttons/GrayIconButton";
import MetroIcon from "@/assets/img/icons/MetroIcon";

export default {
    name: "MainView",
    data() {
        return {
            qwe: "",
        }
    },
    components: {MetroIcon, GrayIconButton, FilledButton},

}
</script>