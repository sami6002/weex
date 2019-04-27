<template>
    <div class="edit-item video-container">
        <div class="item-con">
            <div class="video">
                <video :src="video" width="100%" controls="controls"></video>
            </div>
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
video {
    display: block;
}
</style>


<script>
export default {
    name: 'video-component',
    props: ['data'],
    computed: {
        video() {
            return this.data.video;
        },
        caption() {
            return this.data.caption;
        },
        style() {
            return {
                'font-size': this.data.fontSize + 'px',
                'color': this.data.color,
                'background': this.data.background,
                'text-align': this.data.textAlign,
                'padding': this.data.padding + 'px'
            }
        },
        // height() {
        //     return this.data.height;
        // }
    },
    methods: {
        deleteItem() {
            this.$emit('deleteItem');
        }
    },
    created() {
        console.log(this.data.video);
    },
}
</script>


