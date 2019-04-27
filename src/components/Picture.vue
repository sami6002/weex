<template>
    <div class="edit-item picture-container">
        <div class="item-con">
            <div class="picture" :style="picStyle"></div>
            <div class="caption" :style="style">{{caption}}</div>
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
.picture {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>


<script>
export default {
    name: 'picture-component',
    props: ['data'],
    computed: {
        caption() {
            return this.data.caption;
        },
        picStyle() {
            return {
                'background-image': 'url(' + this.data.picture + ')',
                'height': this.data.height + 'px'
            }
        },
        style() {
            return {
                'font-size': this.data.fontSize + 'px',
                'color': this.data.color,
                'background': this.data.background,
                'text-align': this.data.textAlign,
                'padding': this.data.padding + 'px'
            }
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


