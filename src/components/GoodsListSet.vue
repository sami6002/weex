<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商品列表</span>
            </div>
            <el-form label-width="90px">
                <el-form-item label="背景颜色：">
                    <el-color-picker v-model="form.background" @change="changeData()"></el-color-picker>
                </el-form-item>
                <el-form-item label="布局：">
                    <el-radio-group v-model="form.layout" @change="changeData()">
                        <el-radio-button label="wrap">网格</el-radio-button>
                        <el-radio-button label="column">列表</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button @click="addGoods()">添加商品</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card v-if="innerItem>-1" style="border-top: 1px solid #EBEEF5;">
            <div slot="header" class="clearfix">
                <span>商品项</span>
            </div>
            <el-tabs v-model="activeName">
                <el-tab-pane :label="tab.label" :name="tab.name" v-for="tab in tabs" :key="tab.name">
                    <el-form label-width="60px" @submit.prevent>
                        <el-form-item label="图片：">
                            <el-upload
                                class="upload-demo"
                                action=""
                                :on-change="handleChange"
                                :auto-upload="false"
                                :show-file-list="false"
                                list-type="picture"
                                accept="image/jpeg,image/jpg,image/gif,image/png,image/bmp">
                                <el-button size="small" type="primary">选择图片</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="文字：">
                            <el-input v-model="form.items[innerItem][tab.name]"></el-input>
                        </el-form-item>
                        <el-form-item label="大小：">
                            <el-slider v-model="form[tab.name+'FontSize']" :min="12" :max="20" @change="changeData()"></el-slider>
                        </el-form-item>
                        <el-form-item label="对齐：">
                            <el-radio-group v-model="form[tab.name+'TextAlign']" @change="changeData()">
                                <el-radio-button label="left">左对齐</el-radio-button>
                                <el-radio-button label="center">居中对齐</el-radio-button>
                                <el-radio-button label="right">右对齐</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="颜色：">
                            <el-color-picker v-model="form[tab.name+'Color']" @change="changeData()"></el-color-picker>
                        </el-form-item>
                        <el-form-item label="加粗：">
                            <el-radio-group v-model="form[tab.name+'FontWeight']" @change="changeData()">
                                <el-radio-button label="normal">正常</el-radio-button>
                                <el-radio-button label="bold">加粗</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'goodslist-set-component',
    props: ['data', 'innerItem'],
    data() {
        return {
            form: {
                layout: this.data.layout,
                background: this.data.background,
                items: this.data.items,
                titleFontSize: this.data.titleFontSize,
                descFontSize: this.data.descFontSize,
                priceFontSize: this.data.priceFontSize,
                titleTextAlign: this.data.titleTextAlign,
                descTextAlign: this.data.descTextAlign,
                priceTextAlign: this.data.priceTextAlign,
                titleColor: this.data.titleColor,
                descColor: this.data.descColor,
                priceColor: this.data.priceColor,
                titleFontWeight: this.data.titleFontWeight,
                descFontWeight: this.data.descFontWeight,
                priceFontWeight: this.data.priceFontWeight,
            },
            tabs: [
                {'name': 'title', 'label': "标题"},
                {'name': 'desc', 'label': "描述"},
                {'name': 'price', 'label': "价格"},
            ],
            activeName: 'title'
        }
    },
    methods: {
        changeData() {
            // console.log(this.style.height);
            this.$emit('changeData', Object.assign(this.data, this.form));
        },
        addGoods() {
            this.form.items.push({'picture': '', 'title': '这是一个标题', 'desc': '这是一个简介', 'price': '¥100.00'});
        },
        handleChange(file) {
            // console.log(file);
            const reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = (e) => {
                // console.log(this.result);
                // this.addPicture(this.result);
                this.form.items[this.innerItem].picture = e.target.result;
                this.changeData();
            }
        }
    },
    created () {
        // this.changeData();
        // console.log(this.data.height);
    }
}
</script>


