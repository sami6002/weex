<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>导航模块</span>
            </div>
            <el-form label-width="90px">
                <el-form-item label="背景颜色：">
                    <el-color-picker v-model="form.background" @change="changeData()"></el-color-picker>
                </el-form-item>
                <el-form-item label="文本颜色：">
                    <el-color-picker v-model="form.color" @change="changeData()"></el-color-picker>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card v-if="innerItem>-1" style="border-top: 1px solid #EBEEF5;">
            <div slot="header" class="clearfix">
                <span>导航项</span>
            </div>
            <el-form label-width="90px">
                <el-form-item label="导航标题：">
                    <el-input v-model="form.items[innerItem]['label']"></el-input>
                </el-form-item>
                <el-form-item label="导航图标：">
                    <el-button @click="dialogVisible = true">选择</el-button>
                </el-form-item>
                <el-form-item label="背景颜色：">
                    <el-color-picker v-model="form.items[innerItem]['background']" @change="changeData()"></el-color-picker>
                </el-form-item>
            </el-form>
        </el-card>
        <el-dialog
            title="选择图标"
            :visible.sync="dialogVisible"
            width="80%">
            <div class="icons-list" v-if="innerItem>-1">
                <el-radio-group v-model="form.items[innerItem]['icon']" @change="changeData()">
                    <el-radio-button :label="ic" v-for="ic in icons" :key="ic">
                        <span class="iconfont" :class="'icon-' + ic"></span>
                    </el-radio-button>
                </el-radio-group>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style lang="scss" scoped>
.icons-list {
    /deep/ .el-radio-button {
        .el-radio-button__inner {
            border: 1px solid #DCDFE6;
            margin-left: -1px;
            margin-top: -1px;
        }
        &:first-child, &:last-child {
            .el-radio-button__inner {
                border-radius: 0;
            }
        }
        .el-radio-button__orig-radio:checked+.el-radio-button__inner {
            box-shadow: none;
        }
    }
    .iconfont {
        font-size: 20px;
        display: block;
        height: 20px;
        width: 20px;
    }
}
</style>
<script>
import iconsConfig from '@/assets/icons/icon.json'
export default {
    name: 'navigation-set-component',
    props: ['data', 'innerItem'],
    data() {
        return {
            form: {
                background: this.data.background,
                items: this.data.items,
                col: this.data.col,
                color: this.data.color,
            },
            dialogVisible: false,
            icons: iconsConfig.icons
        }
    },
    methods: {
        changeData() {
            // console.log(this.style.height);
            this.$emit('changeData', this.form);
        },
        selectIcons() {}
    },
    created () {
        // this.changeData();
        // console.log(this.data.height);
    }
}
</script>


