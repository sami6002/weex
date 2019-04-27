<template>
    <div class="edit-item navigation-container">
        <div class="item-con">
            <div class="navigation">
                <ul class="list" :class="'list-' + col" :style="{'background-color': background}">
                    <li class="item" v-for="(item, index) in items" :key="index" @click.stop="editNav(item, index)" :class="{'highline': innerItem==index&&outerCurrent==outerIndex}">
                        <div class="icon iconfont" :class="'icon-'+item.icon" :style="{'background-color': item.background}"></div>
                        <p class="text" :style="{'color': color}">{{item.label}}</p>
                    </li>
                </ul>
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
.list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 6px;

    .item {
        position: relative;
        text-align: center;
        box-sizing: border-box;
        &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 1;
            border: 1px dashed #808080;
            visibility: hidden;
        }
        &:hover:after, &.highline:after {
            visibility: visible;
        }

        &:nth-child(1) .icon { background-color: #5fafef; }
        &:nth-child(2) .icon { background-color: #f6ce6d; }
        &:nth-child(3) .icon { background-color: #97dc48; }
        &:nth-child(4) .icon { background-color: #f198b1; }
        &:nth-child(5) .icon { background-color: #fac286; }
        &:nth-child(6) .icon { background-color: #f8986e; }
        &:nth-child(7) .icon { background-color: #7fd0d3; }
        &:nth-child(8) .icon { background-color: #f19f43; }
        &:nth-child(9) .icon { background-color: #5caaf8; }
        &:nth-child(10) .icon { background-color: #f8986e; }

        .icon {
            height: 44px;
            width: 44px;
            color: #ffffff;
            font-size: 20px;
            line-height: 44px;
            border-radius: 14px;
            background-color: #5fafef;
            margin: 4px auto;
        }
        

        .text {
            color: #4a4a4a;
            font-size: 14px;
            padding-bottom: 4px;
        }
    }
}
.list-4 {
    .item {
        width: 25%;
    }
}
.list-5 {
    .item {
        width: 20%;
    }
}
</style>


<script>
export default {
    name: 'navigation-component',
    props: ['data', 'innerItem', 'outerCurrent', 'outerIndex'],
    computed: {
        items(){
            return this.data.items;
        },
        col() {
            return this.data.col;
        },
        background() {
            return this.data.background;
        },
        color() {
            return this.data.color;
        }
    },
    data() {
        return {
            // current: -1
        }
    },
    methods: {
        deleteItem() {
            this.$emit('deleteItem');
        },
        editNav(item, index) {
            // this.current = index;
            const outerIndex = this.outerIndex;
            const stop = this.outerCurrent === this.outerIndex;
            this.$emit('clickInnerItem', {item, index, stop, outerIndex});
        }
    },
    created() {
    },
}
</script>


