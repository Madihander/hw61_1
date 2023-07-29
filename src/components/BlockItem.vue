<template>
    <div>
        <div class="data">Номер блока: <p class="impInfo">{{ this.block.number }}</p></div>
        <div class="data">Хэш блока: <p class="impInfo">{{ this.block.hash }}</p></div>
        <div class="data">Использовано Газа: <p class="impInfo">{{ block.gasUsed }}</p></div>
        <div class="data">Стоимость Газа: <p class="impInfo">{{ block.baseFeePerGas }}</p> </div>
        <div>
            <p class="data">Список Транзакций: </p>
            <router-link
                    v-for="hash in block.transactions"
                    :key="hash"
                    :to="`/tx/${hash}`"
            >
                <div>{{ hash }}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "BlockItem",
    data() {
        return {
            block: {},
        }
    },
    props: {
        blockNumberOrHash: {
            type: String,
            required: true,
        }
    },
    methods: {
        ...mapActions(["getBlock"])
    },
    async mounted() {
        console.log("GET: ", this.blockNumberOrHash)
        this.block = await this.getBlock(this.blockNumberOrHash)
    },
    watch: {
        async BlockNumberOrHash() {
            this.block = await this.getBlock(this.blockNumberOrHash)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>