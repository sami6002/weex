<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>搜索模块</span>
        </div>
        <el-form label-width="90px">
            <el-form-item label="搜索提示：">
                <el-input v-model="form.placeholder" @keyup.native="changeData()"></el-input>
            </el-form-item>
            <el-form-item label="边框颜色：">
                <el-color-picker v-model="form.borderColor" @change="changeData()"></el-color-picker>
            </el-form-item>
            <el-form-item label="模块颜色：">
                <el-color-picker v-model="form.inputBackground" @change="changeData()"></el-color-picker>
            </el-form-item>
            <el-form-item label="填充背景：">
                <el-color-picker v-model="form.background" @change="changeData()"></el-color-picker>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: 'search-set-component',
    props: ['data'],
    data() {
        return {
            form: {
                placeholder: this.data.placeholder,
                borderColor: this.data.borderColor,
                inputBackground: this.data.inputBackground,
                background: this.data.background,
            },
        }
    },
    methods: {
        changeData() {
            // console.log(this.style.height);
            this.$emit('changeData', this.form);
        }
    },
    created () {
        // this.changeData();
        // console.log(this.data.height);
    }
}
</script>


