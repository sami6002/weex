<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>悬浮按钮</span>
        </div>
        <el-form label-width="60px" :inline="true" v-for="(item,index) in form.items" :key="index">
            <el-form-item label="图标：">
                <el-button v-model="item.icon" @click="changeIcon(index)">选择</el-button>
            </el-form-item>
            <el-form-item label="背景：">
                <el-color-picker v-model="item.background" @change="changeData()"></el-color-picker>
            </el-form-item>
            <el-form-item label="颜色：">
                <el-color-picker v-model="item.color" @change="changeData()"></el-color-picker>
            </el-form-item>
            <el-form-item label="文本：">
                <el-input style="width: 100%" v-model="item.text" @change="changeData()"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="deleteIcon(index);">删除</el-button>
            </el-form-item>
        </el-form>

        <el-dialog
            title="选择图标"
            :visible.sync="dialogVisible"
            width="80%">
            <div class="icons-list" v-if="currentInner!=-1">
                <el-radio-group v-model="form.items[currentInner]['icon']" @change="changeData()">
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
    </el-card>
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
.el-form {
    border-bottom: 1px solid #EBEEF5;
    margin-bottom: 20px;
}
</style>


<script>
import iconsConfig from '@/assets/icons/icon.json'
export default {
    name: 'fixedicon-set-component',
    props: ['data'],
    data() {
        return {
            form: {
                items: this.data.items
            },
            dialogVisible: false,
            currentInner: -1,
            icons: iconsConfig.icons
        }
    },
    methods: {
        changeData() {
            // console.log(this.style.height);
            this.$emit('changeData', this.form);
        },
        changeIcon(index) {
            this.dialogVisible = true;
            this.currentInner = index;
        },
        deleteIcon(index) {
            this.form.items.splice(index, 1);
            if(this.form.items.length == 0) {
                this.$emit('deleteItem');
            }else {
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


