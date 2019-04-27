<template>
    <div class="edit-item search-container">
        <div class="item-con" :style="{backgroundColor: background}">
            <div class="search-box" :style="{backgroundColor: inputBackground, borderColor: borderColor}">
                <label class="icon-search"></label>
                <input class="input" :placeholder="placeholder" />
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
.item-con {
    background-color: #ffffff;
    padding: 8px 14px;

    .search-box {
        display: flex;
        align-items: center;
        background-color: #ffffff;
        border: 1px solid #f2f2f2;
        padding: 5px 10px;
        border-radius: 15px;
        .icon-search {
            height: 16px;
            width: 16px;
            background: url('../assets/images/search.svg') no-repeat center/contain;
            margin-right: 6px;
        }
        input {
            flex: 1;
            border: 0;
            outline: 0;
            -webkit-appearance: none;
            background-color: transparent;
            height: 20px;
        }
    }
}
</style>


<script>
export default {
    name: 'search-component',
    props: ['data'],
    computed: {
        placeholder() {
            return this.data.placeholder;
        },
        inputBackground() {
            return this.data.inputBackground;
        },
        background() {
            return this.data.background;
        },
        borderColor() {
            return this.data.borderColor;
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


