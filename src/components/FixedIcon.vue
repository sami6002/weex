<template>
    <div class="edit-item fixedicon-container">
        <div class="item-con">
            <template v-for="(item,index) in items">
                <div :key="index" class="fixed-icon" :style="{'background': item.background, 'color': item.color}">
                    <div class="icon iconfont" :class="'icon-'+item.icon"></div>
                    <p class="text">{{item.text}}</p>
                </div>
            </template>
        </div>
        <div class="item-act">
            <!-- <a href="javascript:;" @click="deleteItem()" class="el-icon-upload2"></a> -->
            <!-- <a href="javascript:;" @click="deleteItem()" class="el-icon-download"></a> -->
            <a href="javascript:;" @click="deleteItem()" class="el-icon-close"></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item-con {
    display: flex;
    flex-flow: column;
}
.fixed-icon {
    background: rgba(0,0,0,0.8);
    color: #ffffff;
    height: 50px;
    width: 50px;
    margin-top: 10px;
    line-height: 20px;
    padding: 5px;
    border-radius: 50%;
    box-sizing: border-box;
    text-align: center;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
}
.fixedicon-container {
    position: absolute!important;
    z-index: 999;
    bottom: 50px;
    right: 10px;
    padding: 10px 5px;
}
</style>


<script>
export default {
    name: 'fixedicon-component',
    props: ['data'],
    computed: {
        items() {
            return this.data.items;
        },
    },
    methods: {
        deleteItem() {
            this.$emit('deleteItem');
        }
    },
    created() {
    },
}
</script>


