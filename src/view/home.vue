<template>
    <div class="container">
        <!-- Banner -->
        <div class="topPanel" id="home">
            <div class="layer">
                <Header @toId="toId" :active="navActive"></Header>
                <div class="infoPanel">
                    <h2 class="name">ZUCKPLUS</h2>
                    <h3 class="intro">The first twin token in<br> the cryptocurrency circle</h3>
                    <p class="infoText">
                        Tribute to the great freedom and challenging spirit of ZUCK</p>
                    <p class="infoText">Tribute to ZUCKDAO, which is pure and simple and has the ability to self-regulate</p>
                    <p class="infoText">Tribute to the real DEFI - decentralization, decentralization, decentralization, and fairness
                    </p>
                    <div class="btns">
                        <a class="btn" @click="$message.success('Coming soon!')" target="_blank">Buy $ZUCKPLUS</a>
                        <a class="btn" href="https://pancakeswap.finance/swap?inputCurrency=0x81b242276afa697b118554f8cea4a5b09743a70b" target="_blank">Buy $ZUCK</a>
                        <a class="btn" href="https://www.zuckmeta.io" target="_blank">$ZUCK Official Website</a>
                    </div>
                </div>
            </div>
        </div>
        <!--tokenomics-->
        <div class="tokenPanel" id="tokenomics">
            <div class="layer">
                <h2 class="title"><span>TOKENOMICS</span></h2>
                <div class="tokenInfoCon">
                    <div class="tokenLeft">
                        <h3>DISTRIBUTION</h3>
                        <h4>$ZUCKPLUS</h4>
                        <p>Symbol</p>
                        <h4>10,000,000,000,000</h4>
                        <p>Total Supply</p>
                        <h4>5,000,000,000,000</h4>
                        <p>50% black hole destructiony</p>
                        <h4>2,000,000,000,000</h4>
                        <p>20% Add initial liquidity</p>
                        <h4>2,000,000,000,000</h4>
                        <p>20% IDO</p>
                        <h4>1,000,000,000,000</h4>
                        <p>10% Airdrop to $ZUCK holding users</p>
                    </div>
                    <div class="tokenRight">
                        <h3>contract</h3>
                        <div class="feeList">
                            <div class="feeItem">
                                <p>3.0%</p>
                                <a>Redistributions</a>
                            </div>
                            <div class="feeItem">
                                <p>5.0%</p>
                                <a>Auto Liquidity Pool</a>
                            </div>
                            <div class="feeItem">
                                <p>2.0%</p>
                                <a>BuyBacks $ZUCK</a>
                            </div>
                            <div class="feeItem">
                                <p>100%<br>SAFE</p>
                                <a>Liquidity Locked</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--roadmap-->
        <div class="roadMapPanel" id="roadmap">
            <div class="layer">
                <div class="roadBox">
                    <div class="roadTitle">
                        <h2 class="title"><span>ROADMAP</span></h2>
                    </div>
                    <div class="roadList">
                        <div class="roadItem">
                            <h3 class="itemTitle">Phase 1</h3>
                            <p class="roadText">Website launch
                                <br>Marketing push to spread awareness
                                <br>3000 telegram members
                                <br>ZUCKPLUS contract development
                                <br>ZUCKPLUS  is Born!
                                <br>First audit
                                <br>Ownership renounced</p>
                        </div>
                        <div class="roadItem">
                            <h3 class="itemTitle">Phase 2</h3>
                            <p class="roadText">Influencer marketing push
                                <br>Listing on CG/CMC
                                <br>5,000 telegram members
                                <br>5,000 holders
                                <br>Website redesign
                                <br>Voluntary donation for community
                                <br>+ charity partnership
                                <br>ZUCKPLUS Yoga app launch 
                                <br>(BETA)</p>
                        </div>
                        <div class="roadItem">
                            <h3 class="itemTitle">Phase 3</h3>
                            <p class="roadText">10,000 holders
                                <br>10,000 telegram members
                                <br>ZUCKPLUS Yoga Full app launch
                                <br>Large influencer marketing push
                                <br>Listings on major CEX
                                <br>More memes from community
                                <br>Credit Card For crypto live on our
                                <br>website
                                <br>ZUCKPLUS charity for
                                <br>mindfullness</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--buy-->
        <div class="howPanel">
            <div class="layer">
                <h2 class="title"><span>How To Buy On BSC</span></h2>
                <!-- <p class="addr">Contract Address</p>
                <p class="addr">Ox7db5af2B9624e1b3B4Bb69D6DeBd9aD1016A58Ac</p> -->
                <div class="stepList">
                    <div class="stepItem">
                        <div class="stepCon">
                            <p class="stepNum">STEP - 1</p>
                            <p class="stepTitle">Download Metamask</p>
                            <p class="stepText">From The App Store or Google Play Store, for free. Or add the desktop browser extension on Google Chrome by going to metamask.io.
                                <br>Follow their easy steps from their guide to set up a wallet.</p>
                        </div>    
                        <i></i>    
                    </div>
                    <div class="stepItem">
                        <i></i> 
                        <div class="stepCon">
                            <p class="stepNum">STEP - 2</p>
                            <p class="stepTitle">Send BNB to Metamask</p>
                            <p class="stepText">Send BNB to Metamask You can buy BNB directly through
                                <br>Metamask or you can transfer some from another wallet or crypto exchange.
                                <br>You can follow tutorials on Youtube if you get stuck on this step.</p>
                        </div>    
                        
                    </div>
                    <div class="stepItem">
                        <div class="stepCon">
                            <p class="stepNum">STEP - 3</p>
                            <p class="stepTitle">Connect To Pancakeswap</p>
                            <p class="stepText">Go to pancakeswap.fnance via a desktop browser or inside your Metamask wallet tap the three blue lines at the top left of your screen to reveal your browser.
                                <br>When Metamask asks for your signature go ahead and click sign.</p>
                        </div>        
                        <i></i> 
                    </div>
                    <div class="stepItem">
                        <i></i> 
                        <div class="stepCon">
                            <p class="stepNum">STEP - 4</p>
                            <p class="stepTitle">Swap your BNB for ZUCKPLUS</p>
                            <p class="stepText">Click the cog button and change the Slippage amount to 
                                <br><span>10-11%</span>
                                <br>Add your desired BNB amount you'd like to swap, once you' re happy click the "Swap' button to fnalize the trade.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--footer-->
        <Footer id="contact" @toId="toId"></Footer>
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
      drawer:false,
      tolerPop:false,
      navActive:0
    }
  },
  async created() {
      this.eth = await getEther();
        if (this.eth) {
            
        }
  },
  mounted(){
      
  },
  methods: {
    toId(i){
        this.navActive = i
        if(i == 0){
            let elm = document.getElementById('home')
            elm.scrollIntoView(true)
        }else if(i == 1){
            let elm = document.getElementById('tokenomics')
            elm.scrollIntoView(true)
        }else if(i == 3){
            let elm = document.getElementById('roadmap')
            elm.scrollIntoView(true)
        }else if(i == 4){
            let elm = document.getElementById('contact')
            elm.scrollIntoView(true)
        }
    }
  }
}
</script>
<style lang="less" scoped>
@font-face {
    font-family: SFPro-Thin;
    src: url(../assets/SF-Pro.otf);
}
@font-face {
    font-family: 'ST';
    src: url(../assets/st.otf);
}
.container{
    min-height:100vh;
    background:#000;
    font-family: 'ST';
    .layer{
        width:1440px;
        margin:0 auto;
    }
    .topPanel{
        background:url(../assets/img/banner.webp) no-repeat center;
        background-size:100% 100%;
    }
    .header{
        display:flex;
        justify-content: space-between;
        align-items: flex-start;
        .logo{
            padding-top:8px;
            img{
                width:335px;
            }
            .logop{
                display:block;
            }
            .logom{
                display:none;
            }
        }
        .more{
            display:none;        
        }
        .menuList{
            width:60%;
            display:flex;
            justify-content: space-between;
            align-items: flex-start;
            .menuItem{
                font-size:18px;
                color:#F7E4A9;
                line-height:100%;
                padding-top:40px;
                width:90px;
                display:block;
                margin-right:10px;
                text-decoration:none;
                text-align:center;
                &.active{
                    border-top:7px solid #FF0000;
                    color:#DC1921;
                    padding-top:0;
                    padding-top:33px;
                }
            }
            .wallet{
                padding:0 10px;
                height:42px;
                line-height:42px;
                border-radius:25.5px;
                background:#F7E4A9;
                font-size:14px;
                color:#1E386B;
                font-weight: bold;
                vertical-align: middle;
                margin-top:25px;
                i{
                    display:inline-block;
                    width:19px;
                    height:18px;
                    background:url(../assets/img/wallet.webp) no-repeat center;
                    background-size:100% 100%;
                }
            }
        }
    }
    .infoPanel{
        padding-top:138px;
        padding-bottom:75px;
        text-align:center;
        .name{
            font-size:116px;
            color:rgba(255, 0, 0, 0.5);
            line-height:100%;
            padding:20px 0;
            letter-spacing: 34px;
            font-weight:400;
        }
        .intro{
            width: 758px;
            height: 141px;
            background: rgba(127, 0, 0, 0.5);
            margin:0 auto;
            font-size:62px;
            color:#F7E4A9;
            line-height:100%;
            margin-bottom:20px;
            letter-spacing: -5px;
        }
        .infoText{
            font-size:20px;
            color:#F7E4A9;
            line-height:35px;
            padding-bottom:10px;
        }
        .btns{
            display:flex;
            justify-content: center;
            align-items: center;
            margin-top:30px;
            .btn{
                padding:0 22px;
                height:56px;
                background:#F7E4A9;
                line-height:56px;
                color:#DC1921;
                margin:0 24px;
                font-size:29px;
                font-weight:bold;
                text-decoration: none;
            }
        }
    }
    .title{
        width:100%;
        height:80px;
        position:relative;
        text-align:center;
        &:after{
            content:'';
            position:absolute;
            left: 0;
            top:50%;
            width:35%;
            height:2px;
            background:#FF0000;
            margin-top:-1px;
        }
        &::before{
            content:'';
            position:absolute;
            right: 0;
            top:50%;
            width:35%;
            height:2px;
            background:#FF0000;
            margin-top:-1px;
        }
        span{
            line-height:80px;
            font-size:58px;
            color:#FF0000;
            font-weight:400;
            text-transform: uppercase;
        }
    }
    .tokenPanel{
        padding:65px 0 185px;
        background:url(../assets/img/tokenBg.webp) no-repeat center;
        background-size:100% 100%;
        .tokenInfoCon{
            display: flex;
            justify-content: space-between;
            margin-top:30px;
            .tokenLeft{
                background:url(../assets/img/leftBg.webp) no-repeat center;
                background-size:100% 100%;
                width:40%;
                padding-left:66px;
                padding-top:43px;
                padding-bottom:20px;
                h3{
                    font-size:39px;
                    color:#fff;
                    line-height:54px;
                    padding-bottom:20px;
                    text-transform: uppercase;
                }
                h4{
                    font-size:36px;
                    color:rgba(255, 255, 255, 0.9);
                    line-height:50px;
                    text-transform: uppercase;
                }
                p{
                    font-size:24.6px;
                    color:rgba(255, 255, 255, 0.9);
                    line-height:50px;
                    padding-bottom:20px;
                }
            }
            .tokenRight{
                background:url(../assets/img/rightBg.webp) no-repeat center;
                background-size:100% 100%;
                width:60%;
                h3{
                    width:432px;
                    height:58px;
                    background:#DC1921;
                    line-height:58px;
                    text-align:center;
                    font-size:48px;
                    color:#F7E4A9;
                    text-transform: uppercase;
                    margin-top:40px;
                }
                .feeList{
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top:40px;
                    .feeItem{
                        padding:0 20px 54px;
                        &:nth-child(3){
                            margin-top:154px;
                        }
                        p{
                            font-size:156px;
                            color:#DC1921;
                            line-height:100%;
                            font-weight: 100;
                            font-family: SFPro-Thin;
                        }
                        a{
                            display:block;
                            background:#DC1921;
                            border-radius:28px;
                            text-align:center;
                            font-size:32px;
                            color:#fff;
                            line-height:55.5px;
                        }
                    }
                }
            }
        }
    }
    .roadMapPanel{
        background:url(../assets/img/ziyou.webp) no-repeat top 20px center,url(../assets/img/roadBg.webp) no-repeat center;
        background-size:370px 583px,100% 100%;
        padding-bottom:56px;
        padding-top:506px;
        .roadBox{
            .roadTitle{
                padding:0 56px;
                background:#000000;
            }
            .roadList{
                display:flex;
                justify-content: center;
                background:rgba(246, 227, 168, 0.96);
                padding-top:16px;
                padding-bottom:44px;
                .roadItem{
                    margin:0 15px;
                    .itemTitle{
                        font-size:56px;
                        color:#FF1313;
                        line-height:80px;
                        position:relative;
                        &::after{
                            content:'';
                            position:absolute;
                            right:0;
                            top:50%;
                            margin-top:-2.5px;
                            width:210px;
                            height:5px;
                            background:#FF0000;
                        }
                    }
                    .roadText{
                        font-size: 26px;
                        color:rgba(0,0,0,0.9);
                        line-height: 34px;
                        padding-top:18px;
                    }
                }
            }
        }
    }
    .howPanel{
        background:url(../assets/img/howBg.webp) no-repeat center;
        background-size: 100% 100%;
        padding:50px 0 105px;
        .title{
            &::after,&::before{
                width:30%;
            }
        }
        .addr{
            font-size:35px;
            color:rgba(255, 255, 255, 0.9);
            line-height:49px;
            padding-bottom:14px;
            text-align:center;
        }
        .stepList{
            margin-top:90px;
            position:relative;
            display:flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            &::after{
                content:"";
                position:absolute;
                width:100%;
                height:6px;
                left:0;
                top:50%;
                margin-top:-3px;
                background:#F7E4A9;
                border-radius:5px;
                z-index:1;
            }
            .stepItem{
                z-index:9;
                position:relative;
                &:nth-child(1){
                    top:40px;
                    margin-right:274px;
                    order:1;
                    .stepCon{
                        background:url(../assets/img/stepConBg1.webp) no-repeat center;
                        background-size:100% 100%;
                    }
                }
                &:nth-child(2){
                    top:-40px;
                    order:3;
                    margin:0 240px 0 280px;
                    .stepCon{
                        background:url(../assets/img/stepConBg2.webp) no-repeat center;
                        background-size:100% 100%;
                        padding-top:35px;
                    }
                }
                &:nth-child(3){
                    top:40px;
                    order:2;
                    .stepCon{
                        background:url(../assets/img/stepConBg3.webp) no-repeat center;
                        background-size:100% 100%;
                    }
                }
                &:nth-child(4){
                    top:-40px;
                    order:4;
                    .stepCon{
                        background:url(../assets/img/stepConBg4.webp) no-repeat center;
                        background-size:100% 100%;
                        padding-top:35px;
                    }
                }
                .stepCon{
                    width:440px;
                    height:230px;
                    padding:12px 23px;
                    box-sizing: border-box;
                    .stepNum{
                        font-size:27px;
                        color:#00415D;
                        line-height:30px;
                        font-weight: 900;
                    }
                    .stepTitle{
                        font-size:27px;
                        color:#DC1921;
                        line-height:30px;
                        font-weight: 900;
                        padding-bottom:4px;
                    }
                    .stepText{
                        font-size:16px;
                        color:#00415D;
                        line-height:20px;
                        font-weight:bold;
                        span{
                            color:#DC1921;
                        }
                    }
                }
                i{
                    display: block;
                    width:32px;
                    height:32px;
                    background:#DC1921;
                    border:4px solid #F7E4A9;
                    border-radius: 50%;
                    margin:20px auto;
                }
            }
        }
    }
    
}
@media screen and (max-width:900px) {
    .drawer_body{
        .closeIco{
            width:37px;
            height:37px;
            position:absolute;
            right:14px;
            top:25px;
            background:url(../assets/img/closeIco.webp) no-repeat center;
            background-size:100% 100%;
        }
        .menuList{
            padding-top:74px;
            .menuItem{
                height:50px;
                &.active{
                    background:#DC1921;
                }
                font-size:21px;
                color:#F7E4A9;
                padding-left:45px;
            }
        }
    }
    .container{
        .layer{
            width:100%;
        }
        .topPanel{
            background:url(../assets/img/topBg_m.webp) no-repeat center;
            background-size:100% 100%;
        }
        
        .infoPanel{
            padding-top:84px;
            padding-bottom:33px;
            .name{
                font-size:56px;
                padding:0 0 10px;
                letter-spacing: 9px;
            }
            .intro{
                width:90%;
                height:66px;
                font-size:28px;
                margin-bottom:24px;
                letter-spacing:-2px;
            }
            .infoText{
                font-size:20px;
                line-height:23px;
                padding-bottom:22px;
            }
            .btns{
                flex-wrap: wrap;
                .btn{
                    width:280px;
                    height:56px;
                    padding:0;
                    line-height:56px;
                    font-size:22px;
                    margin-bottom:30px;
                }
            }
        }
        .title{
            width:90%;
            margin:0 auto;
            height:45px;
            span{
                font-size:32px;
                line-height:45px;
            }
            &::before,&::after{
                width:20%;
            }
        }
        .tokenPanel{
            padding:50px 0 66px;
            background:url(../assets/img/tokenBg_m.webp) no-repeat center;
            background-size:100% 100%;
            .tokenInfoCon{
                margin-top:18px;
                flex-wrap: wrap;
                width:95%;
                margin:0 auto;
                .tokenLeft{
                    width:100%;
                    box-sizing: border-box;
                    padding:30px;
                    padding-bottom:0;
                    background:url(../assets/img/leftBg_m.webp) no-repeat center;
                    background-size:100% 100%;
                    h3{
                        font-size:28px;
                        line-height: 100%;
                    }
                    h4{
                        font-size:24px;
                        line-height:100%;
                    }
                    p{
                        font-size:14px;
                        line-height:20px;
                    }
                }
                .tokenRight{
                    width:100%;
                    background:url(../assets/img/rightBg_m.webp) no-repeat center;
                    background-size:100% 100%;
                    h3{
                        width:170px;
                        height:24px;
                        line-height:24px;
                        font-size:19px;
                        margin-top:14px;
                    }
                    .feeList{
                        margin-top:20px;
                        .feeItem{
                            padding:0 10px;
                            margin-bottom:54px;
                            &:nth-child(3){
                                margin-top:54px;
                            }
                            p{
                                font-size:56px;
                                line-height:100%;
                            }
                            a{
                                width:123px;
                                height:22px;
                                line-height:22px;
                                font-size:13px;
                            }
                        }
                    }
                }
            }
        }
        .roadMapPanel{
            padding-top:293px;
            padding-bottom:38px;
            background:url(../assets/img/ziyou.webp) no-repeat center top 4px,url(../assets/img/roadBg_m.webp) no-repeat center;
            background-size:230px 340px,100% 100%;
            .roadBox{
                width:95%;
                margin:0 auto;
                .roadList{
                    padding-top:26px;
                    padding-bottom:10px;
                    padding-left:20px;
                    flex-wrap: wrap;
                    justify-content:flex-start;
                    .roadItem{
                        padding-left:18px;
                        border-left:2px solid #FF0000;
                        margin:0 0 20px;
                        .itemTitle{
                            font-size:32px;
                            line-height:45px;
                            &:after{
                                display: none;
                            }
                        }
                        .roadText{
                            font-size:18px;
                            line-height:20px;
                            padding-top:4px;
                        }
                    }
                }
            }
        }
        .howPanel{
            padding:32px 0 56px;
            background:url(../assets/img/howBg_m.webp) no-repeat center;
            background-size:100% 100%;
            .title{
                &::before,&::after{
                    display:none;
                }
            }
            .addr{
                font-size:14px;
                line-height:16px;
                padding-bottom:4px;
            }
            .stepList{
                margin-top:25px;
                display:block;
                &:after{
                    content:'';
                    width:3px;
                    height:100%;
                    margin-left:15px;
                    top:0;
                }
                .stepItem{
                    width:100%;
                    position:static;
                    margin-bottom:15px;
                    position:relative;
                    top:0;
                    i{
                        position:absolute;
                        left:0;
                        top:50%;
                        width:24px;
                        height:24px;
                        border:3px solid #F7E4A9;
                        margin:0;
                        margin-top:-12px;
                    }
                    &:nth-child(1){
                        top:0;
                        .stepCon{
                            background:url(../assets/img/stepConBg1_m.webp) no-repeat;
                            background-size:100% 100%;
                        }
                    }
                    &:nth-child(2){
                        margin:0 0 15px;
                        top:0;
                        .stepCon{
                            padding:12px 23px 12px 34px;
                            background:url(../assets/img/stepConBg1_m.webp) no-repeat;
                            background-size:100% 100%;
                        }
                    }
                    &:nth-child(3){
                        top:0;
                        .stepCon{
                            background:url(../assets/img/stepConBg1_m.webp) no-repeat;
                            background-size:100% 100%;
                        }
                    }
                    &:nth-child(4){
                        top:0;
                        .stepCon{
                            background:url(../assets/img/stepConBg1_m.webp) no-repeat;
                            background-size:100% 100%;
                        }
                    }
                    .stepCon{
                        width:75%;
                        height:160px;
                        box-sizing:content-box;
                        padding:12px 23px 12px 34px;
                        margin-left:7.5%;
                        .stepNum{
                            font-size:20px;
                            line-height:23px;
                        }
                        .stepTitle{
                            font-size:20px;
                            line-height:23px;
                        }
                        .stepText{
                            font-size:13px;
                            line-height:14px;
                        }
                    }
                }
            }
        }
        
    }
}
</style>
