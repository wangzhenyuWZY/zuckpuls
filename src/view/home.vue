<template>
    <div class="container">
        <!-- Banner -->
        <div class="topPanel">
            <div class="layer">
                <header class="header">
                    <div class="logo"><img src="../assets/img/logo.webp"></div>
                    <div class="menuList">
                        <a class="menuItem active" href="#">Home</a>
                        <a class="menuItem" href="#">Tokenomics</a>
                        <a class="menuItem" href="#">IDO</a>
                        <a class="menuItem" href="#">Roadmap</a>
                        <a class="menuItem" href="#">Contact</a>
                        <div class="wallet">
                            <i></i>
                            0x18d...5A51
                        </div>
                    </div>
                </header>
                <div class="infoPanel">
                    <h2 class="name">ZUCKPLUS</h2>
                    <h3 class="intro">The first twin token in<br> the cryptocurrency circle</h3>
                    <p class="infoText">
                        Tribute to the great freedom and challenging spirit of ZUCK
                        <br>Tribute to ZUCKDAO, which is pure and simple and has the ability to self-regulate
                        <br>Tribute to the real DEFI - decentralization, decentralization, decentralization, and fairness
                    </p>
                    <div class="btns">
                        <a class="btn" href="#" target="_blank">Buy $ZUCKPLUS</a>
                        <a class="btn" href="#" target="_blank">Buy $ZUCK</a>
                        <a class="btn" href="#" target="_blank">$ZUCK Official Website</a>
                    </div>
                </div>
            </div>
        </div>
        <!--tokenomics-->
        <div class="tokenPanel">
            <div class="layer">
                <h2><span>TOKENOMICS</span></h2>
                <div class="tokenInfoCon">
                    <div class="tokenLeft">
                        
                    </div>
                    <div class="tokenRight">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.container{
    height:100vh;
    background:#000;
    font-family: '宋体';
    .layer{
        min-width:1200px;
        max-width:1440px;
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
            padding-bottom:40px;
        }
        .btns{
            display:flex;
            justify-content: center;
            align-items: center;
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

}
</style>