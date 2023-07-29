
<template>
    <div>
        <BlockVue v-for="block in $store.state.blocks"
                  :key="block.hash"
                  :block="block"></BlockVue>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "MainPage.vue",
    methods: {
        ...mapActions(["newBlockHeaders", "getBlock"]),
    },
    mounted() {
        this.newBlockHeaders();
    }
}
</script>

<style scoped>

</style>