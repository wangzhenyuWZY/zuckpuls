<template>
    <el-drawer title="我是标题" v-model="drawer" :show-close="false" custom-class="drawer_body" :with-header="false" @click="tolerPop=false">
        <i class="closeIco" @click="drawer = false"></i>
        <ul class="menuList">
            <li class="menuItem" :class="active==0?'active':''" @click="toDetail(0)">Home</li>
            <li class="menuItem" :class="active==1?'active':''" @click="toDetail(1)">Tokenomics</li>
            <li class="menuItem" :class="active==2?'active':''" @click="toDetail(2)">IDO</li>
            <li class="menuItem" :class="active==3?'active':''" @click="toDetail(3)">Roadmap</li>
            <li class="menuItem" :class="active==4?'active':''" @click="toDetail(4)">Contact</li>
        </ul>
    </el-drawer>
    <header class="header">
        <div class="logo"><img class="logop" src="../assets/img/logo.webp"><img class="logom" src="../assets/img/logo.webp"></div>
        <div class="menuList">
            <div class="menuItem" :class="active==0?'active':''"  @click="toDetail(0)">Home</div>
            <div class="menuItem" :class="active==1?'active':''"  @click="toDetail(1)">Tokenomics</div>
            <div class="menuItem" :class="active==2?'active':''"  @click="toDetail(2)">IDO</div>
            <div class="menuItem" :class="active==3?'active':''"  @click="toDetail(3)">Roadmap</div>
            <div class="menuItem" :class="active==4?'active':''"  @click="toDetail(4)">Contact</div>
            <div class="wallet">
                <i></i>
                {{defaultAccount}}
            </div>
        </div>
        <i class="more" @click="drawer = true"></i>
    </header>
</template>
<script>
import { getEther } from '@/plugins/ethers'
export default {
  data() {
    return {
      drawer:false,
      tolerPop:false,
      defaultAccount:'',
      active:2
    }
  },
  async created() {
      this.eth = await getEther();
        if (this.eth) {
            this.defaultAccount = this.plusXing(this.eth.myAddr)
        }
  },
  mounted(){
      this.active = localStorage.getItem('active')
      this.$emit('toId',this.active)
  },
  methods: {
      toDetail(i){
          localStorage.setItem('active',i)
          this.drawer = false
          if(i!==2){
              this.$router.push({name:'home'})
              this.$emit('toId',i)
              this.active = i
          }else{
              this.$router.push({name:'ido'})
          }
      },
    plusXing (str) {
        var len = str.length - 10
        var xing = ''
        for (var i = 0; i < len; i++) {
            xing = '****'
        }
        return str.substring(0, 6) + xing + str.substring(str.length - 4)
    }
  }
}
</script>
<style lang="less" scoped>
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
@media screen and (max-width:900px) {
    .drawer_body{
        padding:0;
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
                line-height:50px;
                &.active{
                    background:#DC1921;
                }
                font-size:21px;
                color:#F7E4A9;
                padding-left:45px;
            }
        }
    }
    .header{
        padding:0 10px;
        background:#000000;
        .logo{
            padding-top:0;
            img{
                width:210px;
            }
            .logop{
                display:none;
            }
            .logom{
                display:block;
            }
        }
        .more{
            display:block;
            width:36px;
            height:36px;
            background:url(../assets/img/more.webp) no-repeat center;
            background-size:100% 100%;
            margin-top:10px;
        }
        .menuList{
            display:none;
        }
    }
}
</style>
<style>
.drawer_body {
  position:fixed;  
  width: 100% !important;
  background: url(../assets/img/drawerBg.webp) no-repeat center;
  background-size:100% 100%;
  color: #ffffff;
  /* position: relative; */
  outline: 0;
  padding:0;
}
.el-drawer__body{
    padding:0;
}
</style>