<template>

    <div>
        <div class="data">
            Номер блока:
            <router-link class="impInfo" :to="`/block/${tx.blockNumber}`">{{ tx.blockNumber }}</router-link>

        </div>
    </div>
    <div>
        <div class="data">Hash: <p class="impInfo">{{ tx.hash }}</p></div>
        <div class="data">From: <p class="impInfo">{{ tx.from }}</p></div>
        <div class="data">To: <p class="impInfo">{{ tx.to }}</p></div>
        <div class="data">Value: <p class="impInfo"> {{ tx.value }}</p></div>
        <div class="data">Gas Price: <p class="impInfo">GasPrice: {{ tx.gasPrice }}</p></div>
        <div class="data">Gas Limit: <p class="impInfo">GasPrice: {{ tx.gasLimit }}</p></div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "TxItem",
    data() {
        return {
            tx: {}
        }
    },
    props: {
        txHash: {
            type: String,
            required: true,
        }
    },
    methods: {
        ...mapActions(["getTransaction"])
    },
    async mounted() {
        console.log(this.txHash)
        try {
            this.tx = await this.getTransaction(this.txHash)
        } catch (error) {
            console.log(`ERROR: ${error}`)
        }
    },
    watch: {
        async TxHash() {
            this.tx = await this.getTransaction(this.txHash)
        }
    },
}
</script>

<style scoped>

</style>