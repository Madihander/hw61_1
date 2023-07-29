<template>
    <div class="container">
        <div class="data">Номер блока: <p class="impInfo">{{block.number}}</p></div>
        <div class="data">Хэш блока: <p class="impInfo">{{ block.hash }}</p></div>
        <button class="btn" style="font-size: 18px" @click="$event => $router.push(`/block/${block.number}`)">Открыть
            страницу Блока
        </button>
    </div>
</template>

<script>
export default {
    name: "BlockVue",
    props: {
        block: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>