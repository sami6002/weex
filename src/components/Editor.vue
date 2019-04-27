<template>
    <div class="edit-item editor-container">
        <div class="item-con" v-html="html"></div>
        <div class="item-act">
            <!-- <a href="javascript:;" @click="deleteItem()" class="el-icon-upload2"></a> -->
            <!-- <a href="javascript:;" @click="deleteItem()" class="el-icon-download"></a> -->
            <a href="javascript:;" @click="deleteItem()" class="el-icon-close"></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .item-con {
        min-height: 30px;
        padding: 14px;
    }
</style>

<script>
export default {
    name: 'editor-component',
    props: ['data'],
    computed: {
        html() {
            return this.data.html;
        },
    },
    methods: {
        deleteItem() {
            this.$emit('deleteItem');
        }
    },
    created() {
        // this.html = this.data.html;
    }
}
</script>


