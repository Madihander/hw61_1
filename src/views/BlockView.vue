<template>
    <p class="headers">Blocks</p>
    <BlockItem :blockNumberOrHash="$route.params.blockNumberOrHash"></BlockItem>
</template>

<script>

export default {
    name: "BlockView",
}
</script>

<style scoped>

</style>