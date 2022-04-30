<template>
    <div class="footerPanel">
        <div class="layer">
            <div class="footTop">
                <div class="logo"><img src="../assets/img/logo.webp"></div>
                <div class="footCon">
                    <div class="linkList">
                        <a  @click="toDetail(0)" class="linkItem">Home</a>
                        <a  @click="toDetail(1)" class="linkItem">Tokenomics</a>
                        <a  @click="toDetail(2)" class="linkItem">IDO</a>
                        <a  @click="toDetail(3)" class="linkItem">Roadmap</a>
                        <a  @click="toDetail(4)" class="linkItem">Contact</a>
                    </div>
                    <div class="contract">
                        <a target="_blank" href="#"><img src="../assets/img/contract1.webp"></a>
                        <a target="_blank" href="https://twitter.com/ZUCKPLUS"><img src="../assets/img/contract2.webp"></a>
                        <a target="_blank" href="https://t.me/zuckplusarmy"><img src="../assets/img/contract3.webp"></a>
                        <a target="_blank" href="https://medium.com/@zuckplus"><img src="../assets/img/contract4.webp"></a>
                    </div>
                </div>
            </div>
            <p class="footBtm"><img src="../assets/img/copyright.webp"></p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  created() {
      
  },
  mounted(){
      
  },
  methods: {
      toDetail(i){
          localStorage.setItem('active',i)
          if(i!==2){
              this.$router.push({name:'home'})
              this.$emit('toId',i)
          }else{
              this.$router.push({name:'ido'})
          }
      }
  }
}
</script>
<style lang="less" scoped>
.footerPanel{
    background:#000000;
    padding:48px 0 36px;
    .footTop{
        border:4px solid #DC1921;
        padding:10px 30px 20px 40px;
        .logo{
            img{
                width:200px;
            }
        }
        .footCon{
            display:flex;
            justify-content: space-between;
            .linkList{
                padding-top:34px;
                display:flex;
                justify-content: flex-start;
                .linkItem{
                    font-size:18px;
                    color:#F7E4A9;
                    line-height:100%;
                    padding-right:82px;
                }
            }
            .contract{
                display:flex;
                justify-content: flex-end;
                a{
                    margin-left:16px;
                }
                img{
                    width:44px;
                }
            }
        }
    }
    .footBtm{
        padding-top:26px;
        text-align: center;
        img{
            width:230px;
        }
    }
}
@media screen and (max-width:900px) {
    .footerPanel{
        background:#1E0203;
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        .footTop{
            border:none;
            padding:0;
            .logo{
                text-align:center;
                margin-bottom:25px;
                img{
                    width:176px;
                }
            }
            .footCon{
                justify-content: center;
                .linkList{
                    display:none;
                }
                .contract{
                    a{
                        margin:0 10px;
                        img{
                            width:53px;
                            height:53px;
                        }
                    }
                }
            }
        }
    }
}
</style>