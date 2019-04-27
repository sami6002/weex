<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>空白模块</span>
        </div>
        <el-form label-width="90px">
            <el-form-item label="空白高度：">
                <el-slider v-model="form.height" @change="changeData()"></el-slider>
            </el-form-item>
            <el-form-item label="背景颜色：">
                <el-color-picker v-model="form.background" @change="changeData()"></el-color-picker>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: 'empty-set-component',
    props: ['data'],
    data() {
        return {
            form: {
                height: this.data.height,
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


