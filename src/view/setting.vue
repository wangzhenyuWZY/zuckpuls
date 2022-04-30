<template>
    <div class="setPanel">
        <div class="formItem">
            <h2>是否开启兑换</h2>
            <div class="valbox">
                <div class="btn">开启</div>
                <div class="btn">关闭</div>
            </div>
        </div>
        <div class="formItem">
            <h2>是否开启领取</h2>
            <div class="valbox">
                <div class="btn">开启</div>
                <div class="btn">关闭</div>
            </div>
        </div>
        <div class="formItem">
            <h2>批量设置白名单</h2>
            <div class="valbox">
                <textarea placeholder="输入白名单，以逗号分隔"></textarea>
            </div>
            <div class="btn">设置</div>
        </div>

    </div>
</template>
<script>

</script>
<style lang="less" scoped>
.setPanel{
    background:#000;
    height:100vh;
    padding-left:100px;
    padding-top:100px;
    h2{
        padding-bottom:20px;
    }
    .btn{
        width:120px;
        height:40px;
        font-size:16px;
        border-radius: 5px;
        background:#fff;
        margin-right:20px;
        color:#000;
        text-align:center;
        line-height:40px;
        font-weight:bold;
        cursor: pointer;
    }
    .formItem{
        margin-bottom:40px;
        textarea{
            width:500px;
            height:300px;
            outline:none;
            border:none;
            text-indent:20px;
            padding-top:20px;
            border-radius:5px;
            margin-bottom:20px;
        }
    }
    .valbox{
        display:flex;
        justify-content: flex-start;
        
    }
}
</style>