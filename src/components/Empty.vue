<template>
    <div class="edit-item empty-container">
        <div class="item-con" :style="style"></div>
        <div class="item-act">
            <!-- <a href="javascript:;" @click="deleteItem()" class="el-icon-upload2"></a> -->
            <!-- <a href="javascript:;" @click="deleteItem()" class="el-icon-download"></a> -->
            <a href="javascript:;" @click="deleteItem()" class="el-icon-close"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'empty-component',
    props: ['data'],
    computed: {
        style(){
            return {
                height: this.data.height + 'px',
                background: this.data.background
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


