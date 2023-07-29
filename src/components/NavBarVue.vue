<template>
    <div>
        <nav>
            <div style="margin-bottom: 5px">
                <router-link class="mainPageLink" to="/">Главная страница</router-link>
            </div>
            <div>
                <input type="text" v-model="blockNumberOrHash" placeholder="Введите Номер и Хэш блока">
                <button class="btn" @click="$event=> $router.push(`/block/${this.blockNumberOrHash}`)">Найти</button>
            </div>
            <div>
                <input type="text" v-model="txHash" placeholder="Введите Хэш транзакции">
                <button class="btn" @click="$event=> $router.push(`/tx/${this.txHash}`)">Найти</button>
            </div>
            <br>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBarVue",
    data(){
        return{
            blockNumberOrHash: "",
            txHash: ""
        }
    }
}
</script>

<style scoped>
.mainPageLink{
    font-size: 24px;
    border-bottom: 3px solid #34495E;
}
input{
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px 10px;
    width: 40%;
    font-size: 20px;
    font-weight: 600;
    border: 2px solid #34495E;
    border-radius: 2px;
    color: #41B883;
}
</style>