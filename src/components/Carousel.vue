<template>
    <div class="edit-item carousel-container">
        <div class="item-con">
            <el-carousel :height="height + 'px'" arrow="never">
                <el-carousel-item v-for="(item, index) in images" :key="index">
                    <div class="carousel-item" :style="{'background-image': 'url(' + item.url + ')'}"></div>
                </el-carousel-item>
            </el-carousel>
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
    // background-color: #ffffff;
    // padding: 8px 12px;
}
.carousel-item {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
/deep/ .el-carousel__indicators {
    bottom: 14px;
    .el-carousel__button {
        height: 10px;
        width: 10px;
        border-radius: 50%;
    }
}
</style>


<script>
export default {
    name: 'carousel-component',
    props: ['data'],
    computed: {
        images() {
            return this.data.images;
        },
        height() {
            return this.data.height;
        }
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


