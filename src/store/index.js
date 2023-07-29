import {createStore} from 'vuex'
import {ethers} from 'ethers'

let provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/BfUX0gRHP82jbcWT6W_GYTQkPv_0p1En')
export default createStore({
    state: {
        blocks: [],
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async newBlockHeaders() {
            provider.on("block", async blockNumber => {
                let block = await provider.getBlock(blockNumber);
                let newBlock = {
                    number: block.number,
                    hash: block.hash,
                }
                this.state.blocks.unshift(newBlock);
            })
        },
        async getBlock({commit},blockNumberHash) {

            console.log(commit);
            if(!ethers.utils.isBytesLike(blockNumberHash)) {
                blockNumberHash = Number(blockNumberHash)
            }
            let block = await provider.getBlock(blockNumberHash);
            return block;
        },
        async getTransaction({commit},txHash) {
            console.log(commit)
            return await provider.getTransaction(txHash)
        }
        },
    modules: {}
})
