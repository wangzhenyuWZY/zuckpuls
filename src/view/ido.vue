<template>
    <div class="idoContainer">
        <Header></Header>
        <div class="idoTopPanel">
            <div class="layer">
                <h2>I DO</h2>
                <div class="timeDownPanel" v-show="false">
                    <h3>ZUCKPLUS IDO</h3>
                    <p class="startIn">Starts In:</p>
                    <div class="timeCon">
                        <div class="timeItem">
                            <p class="timeName">Days</p>
                            <div class="timeVal">
                                <div class="timeValItem">6</div>
                            </div>
                        </div>
                        <span>:</span>
                        <div class="timeItem">
                            <p class="timeName">Hours</p>
                            <div class="timeVal">
                                <div class="timeValItem">6</div>
                                <div class="timeValItem">6</div>
                            </div>
                        </div>
                        <span>:</span>
                        <div class="timeItem">
                            <p class="timeName">Minutes</p>
                            <div class="timeVal">
                                <div class="timeValItem">6</div>
                                <div class="timeValItem">6</div>
                            </div>
                        </div>
                        <span></span>
                        <div class="timeItem">
                            <p class="timeName">Seconds</p>
                            <div class="timeVal">
                                <div class="timeValItem">6</div>
                                <div class="timeValItem">6</div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="idoRule">
                    Contract Address:   0x3eE0...f18b
                    <br>Blockchain Network: Binance  
                    <br>Token Supply:10,000,000,000,000
                    <br>Total Sale Percentage:20%
                    <br>Presale Rate 1 BNB = 10,000,000,000 ZUCKPLUS
                    <br>Allocation:0.25 BNB
                    <br>Listing Platform: PancakeSwap
                    <br>Vesting Schedule (Public): 100% at TGE
                </p>
                <h3 class="formTitle">Enter BNB value:</h3>
                <input class="formVal" value="0.25">
                <h3 class="formTitle">You will get:</h3>
                <input class="formVal" value="10,000,000,000">
                <el-button :loading="doing" :disabled="doing" class="confirm" @click="swap">Contribute</el-button>
            </div>
        </div>
        <div class="idoBtmPanel">
            <div class="layer">
                <h2 class="title">Description</h2>
                <div class="descript">
                    * Tribute to the great freedom and challenging spirit of ZUCK
                    <br>* Tribute to ZUCKDAO, which is pure and simple and has the ability to self-regulate
                    <br>* Tribute to the real DEFI - decentralization, decentralization, decentralization, and fairness
                </div>
                <h2 class="title">IDO Whitelist application requirements</h2>
                <div class="descript size26">
                    Hold 75,000,000 ZUCK
                </div>
                <h2 class="title">How To Buy ZUCKPLUS Token?</h2>
                <div class="howBuy">
                    How To Buy ZUCKPLUS Token?
                    <br>1. Download <span>Trust Wallet</span> or <span>Metamask</span>
                    <br>2. Fund with <span>Binance smart chain token</span> (bep20) withdraw bnb from Binance to bep20 address on trust wallet
                    <br>3. Connect your wallet. Ensure you have the Binance logo at the top right corner and not the ethereum logo
                    <br>4. Type in the amount of <span>ZUCKPLUS</span> token that matches your balance.
                    <br>5. Click approve
                    <br>6. Pay in <span>BNB</span> your wallet automatically
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './header.vue'
import Footer from './footer.vue'
import { getEther } from '@/plugins/ethers'
export default {
  components:{Header,Footer},
  data() {
    return {
      swapEnable:false,
      withdrawEnable:false,
      userInfo:{},
      doing:false
    }
  },
  async created() {
        this.eth = await getEther();
        if (this.eth) {
            this.getInfo()
        }
  },
  methods: {
    async getInfo(){
        let balance = await this.eth.myBalance
        this.bnbBalance = parseInt(balance) / Math.pow(10,18)
        console.log(this.bnbBalance)
        let meta = await this.eth.c.ido.meta()
        this.swapEnable = meta.swapEnable
        this.withdrawEnable = meta.withdrawEnable
        this.userInfo = await this.eth.c.ido.userInfo(this.eth.myAddr)
    },
    swap(){
        if(!this.swapEnable){
            this.$message.success('Coming soon!')
            return
        }else{
            if(!this.userInfo.inWhiteList){
                this.$message.error('you are not on the whitelist')
                return
            }else{
                this.doSwap()
            }
        }
    },
    async doSwap(){
        this.doing = true
        try{
            let bnb = 0.25 * Math.pow(10,18)
            let res = await this.eth.c.ido.flashSwap({value:String(bnb)})
            await res.wait()
            this.$message.success('Success')
            this.doing = false
        }catch(e){
            console.log(e)
            this.$message.error(e.data.message)
            this.doing = false
        }
    }
  }
}
</script>
<style lang="less" scoped>
@font-face {
    font-family: 'ST';
    src: url(../assets/st.otf);
}
@media screen and (max-width:900px) {
    .idoContainer{
        font-family: 'st';
        .layer{
            width:95%;
            margin:0 auto;
        }
        .idoTopPanel{
            background:url(../assets/img/topBg_m.webp) no-repeat center;
            background-size:100% 100%;
            padding-bottom:60px;
            h2{
                font-size:56px;
                color:rgba(255, 0, 0, 0.5);
                line-height:78px;
                padding-top:36px;
                text-align:center;
            }
            .timeDownPanel{
                padding:15px 0 23px;
                background:rgba(127, 0, 0, 0.5);
                margin-bottom:24px;
                h3{
                    color:#F7E4A9;
                    font-size:28px;
                    line-height:26px;
                    text-align:center;
                    text-transform: uppercase;
                    padding-bottom:12px;
                }
                .startIn{
                    font-size:22px;
                    color:#F7E4A9;
                    line-height:100%;
                    text-align:center;
                }
                .timeCon{
                    display:flex;
                    justify-content: center;
                    span{
                        font-size:29px;
                        color:#F7E4A9;
                        line-height:70px;
                        padding:0 10px;
                    }
                    .timeItem{
                        .timeName{
                            font-size:14px;
                            color:#F7E4A9;
                            line-height:100%;
                            padding-bottom:6px;
                            text-align:center;
                        }
                        .timeVal{
                            display:flex;
                            justify-content: center;
                            .timeValItem{
                                margin:0 1px;
                                width:27px;
                                height:38px;
                                line-height:38px;
                                background:#000000;
                                text-align:center;
                                font-size:28px;
                                color:#F7E4A9;
                            }
                        }
                    }
                }
            }
            .idoRule{
                font-size:20px;
                color:#F7E4A9;
                line-height:23px;
                padding-bottom:30px;
            }
            .formTitle{
                font-size:22.5px;
                color:#F7E4A9;
                line-height:100%;
                padding-bottom:4px;
            }
            .formVal{
                line-height: 46px;
                background:#000;
                text-indent: 12px;
                font-size:22px;
                color:#F7E4A9;
                margin-bottom:14px;
                outline: none;
                width:100%;
                border:none;
            }
            .confirm{
                background: linear-gradient(180deg, #FCF3D4 0%, #F7E4A9 100%);
                height:46px;
                width:100%;
                text-align:center;
                font-size:28px;
                color:#810C11;
                outline: none;
                display: block;
                &>*{
                    color:#810C11;
                }
            }
        }
        .idoBtmPanel{
            background:url(../assets/img/idoBtnBg_m.webp) no-repeat center;
            background-size:100% 100%;
            padding:25px 0 72px;
            .title{
                font-size:16px;
                color:#F7E4A9;
                line-height:100%;
                padding-bottom:14px;
                font-weight: 900;
            }
            .descript{
                padding:20px 15px;
                background:rgba(127, 0, 0, 0.85);
                font-size:18px;
                color:#F7E4A9;
                line-height:25px;
                margin-bottom:26px;
                &.size26{
                    font-size:26px;
                    text-align:center;
                    margin-bottom:50px;
                }
            }
            .howBuy{
                padding:20px 16px;
                background:url(../assets/img/howBuyBg_m.webp) no-repeat center;
                background-size:100% 100%;
                font-size:17px;
                color:#00415D;
                line-height:25px;
                span{
                    color:#DC1921;
                }
            }
        }
    }
}
</style>