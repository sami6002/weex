<template>
    <div class="edit-item title-container">
        <div class="item-con">
            <div class="title-wrap" :style="{'flex-flow': flow}">
                <h3 class="title">{{title}}</h3>
                <h4 class="description">{{description}}</h4>
            </div>
        </div>
        <div class="item-act">
            <!-- <a href="javascript:;" @click="deleteItem()" class="el-icon-upload2"></a> -->
            <!-- <a href="javascript:;" @click="deleteItem()" class="el-icon-download"></a> -->
            <a href="javascript:;" @click="deleteItem()" class="el-icon-close"></a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.title-wrap {
    display: flex;
    align-items: baseline;
    line-height: 1.35;
    padding: 10px 14px;
    .title {
        font-weight: bold;
        color: #202020;
        font-size: 18px;
        padding-right: 10px;
    }
    .description {
        font-weight: normal;
        color: #9b9b9b;
        font-size: 14px;
    }
}
</style>

<script>
export default {
    name: 'title-component',
    props: ['data'],
    computed: {
        title() { return this.data.title; },
        description() { return this.data.description; },
        flow() { return this.data.flow; },
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


