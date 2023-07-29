<template>
    <p class="headers">Транзакции</p>
    <TxItem :txHash="$route.params.txHash"></TxItem>
</template>

<script>
export default {
    name: "TransactionView",
    async mounted() {
        try {
            console.log(this.$route.params.txHash); // Проверьте, что вы получаете ожидаемое значение txHash
        } catch (error) {
            console.error("Ошибка при получении транзакции", error);
        }
    }
}
</script>

<style scoped>

</style>