<template>
    <div class="edit-item goodslist-container">
        <div class="item-con">
            <div class="goods-list">
                <ul class="list" :class="'list-' + data.layout" :style="listStyle">
                    <li class="item" v-for="(item, index) in items" :key="index">
                        <div class="wrap" :class="{'highline': innerItem==index&&outerCurrent==outerIndex}" @click.stop="editGoods(item, index)">
                            <div class="image" :style="{'background-image': 'url('+ item.picture +')'}"></div>
                            <div class="info">
                                <h4 class="title" :style="titleStyle">{{item.title}}</h4>
                                <p class="description" :style="descStyle">{{item.desc}}</p>
                                <p class="price" :style="priceStyle">{{item.price}}</p>
                            </div>
                            <div class="delete-icon" @click.stop="deleteGoods(item, index)">
                                <span class="el-icon-minus"></span>
                            </div>
                        </div>
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
.goods-list {
    .list {
        display: flex;
        align-items: stretch;
        padding: 14px;
        .item {
            position: relative;
            .delete-icon {
                position: absolute;
                top: 4px;
                left: 4px;
                background: #e99797;
                color: #ffffff;
                font-size: 20px;
                border-radius: 50%;
                cursor: pointer;
                z-index: 10;
            }
            .wrap {
                box-shadow: 1px 1px 2px rgba(0, 0, 0, .2);
                background: #ffffff;

                position: relative;
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
            }
            .image {
                position: relative;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                background-color: #f4f4f4;
                &::before {
                    display: block;
                    content: '';
                    padding-bottom: 100%;
                }
            }
            .info {
                line-height: 20px;
            }
            .title, .description {
                max-height: 40px;
                overflow: hidden;
            }
            .price {
                padding-top: 4px;
            }
        }
    }

    .list-wrap {
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
            width: 50%;
            padding-bottom: 14px;
            box-sizing: border-box;
            &:nth-child(2n) {
                padding-left: 7px;
            }
            &:nth-child(2n+1) {
                padding-right: 7px;
            }
            .info {
                padding: 4px 8px;
            }
        }
    }

    .list-column {
        .item {
            padding-bottom: 14px;
        }
        .info {
            padding-left: 14px;
            flex: 1;
            padding: 0px 14px;
        }
        .wrap {
            display: flex;
            align-items: center;
        }
        .image {
            width: 100px;
        }
    }
}
</style>

<script>
export default {
    name: 'goodslist-component',
    props: ['data', 'innerItem', 'outerCurrent', 'outerIndex'],
    computed: {
        items() {
            return this.data.items;
        },
        listStyle() {
            return {
                'flex-flow': this.data.layout,
                'background': this.data.background
            }
        },
        titleStyle(){
            return {
                'font-size': this.data.titleFontSize + 'px',
                'font-weight': this.data.titleFontWeight,
                'text-align': this.data.titleTextAlign,
                'color': this.data.titleColor
            }
        },
        descStyle(){
            return {
                'font-size': this.data.descFontSize + 'px',
                'font-weight': this.data.descFontWeight,
                'text-align': this.data.descTextAlign,
                'color': this.data.descColor
            }
        },
        priceStyle(){
            return {
                'font-size': this.data.priceFontSize + 'px',
                'font-weight': this.data.priceFontWeight,
                'text-align': this.data.priceTextAlign,
                'color': this.data.priceColor
            }
        }
    },
    methods: {
        deleteItem() {
            this.$emit('deleteItem');
        },
        editGoods(item, index) {
            // this.current = index;
            const outerIndex = this.outerIndex;
            const stop = this.outerCurrent === this.outerIndex;
            this.$emit('clickInnerItem', {item, index, stop, outerIndex});
        },
        deleteGoods(item, index) {
            console.log(1);
            const outerIndex = this.outerIndex;
            const stop = this.outerCurrent === this.outerIndex;
            this.$emit('deleteInnerItem', {item, index, stop, outerIndex});
        }
    },
    created() {
    },
}
</script>


