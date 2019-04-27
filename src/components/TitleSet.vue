<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>空白模块</span>
        </div>
        <el-form label-width="70px">
            <el-form-item label="主标题：">
                <el-input v-model="form.title" @change="changeData()"></el-input>
            </el-form-item>
            <el-form-item label="副标题：">
                <el-input v-model="form.description" @change="changeData()"></el-input>
            </el-form-item>
            <el-form-item label="布局：">
                <el-radio-group v-model="form.flow" @change="changeData()">
                    <el-radio-button label="row">水平布局</el-radio-button>
                    <el-radio-button label="column">垂直布局</el-radio-button>
                </el-radio-group>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: 'title-set-component',
    props: ['data'],
    data() {
        return {
            form: {
                title: this.data.title,
                description: this.data.description,
                flow: this.data.flow
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


