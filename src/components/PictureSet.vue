<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>图片模块</span>
        </div>
        <el-form label-width="90px">
            <!-- <el-form-item label="图片：">
                <el-upload
                    class="upload-demo"
                    action=""
                    :on-change="handleChange"
                    :auto-upload="false"
                    :show-file-list="false"
                    list-type="picture"
                    accept="image/jpeg,image/jpg,image/gif,image/png,image/bmp">
                    <el-button size="small" type="primary">修改图片</el-button>
                </el-upload>
            </el-form-item> -->
            <el-form-item label="图片链接：">
                <el-input v-model="form.picture" @change="changeData()"></el-input>
            </el-form-item>
            <el-form-item label="图片高度：">
                <el-slider v-model="form.height" :min="100" :max="414" @change="changeData()" :show-input="true"></el-slider>
            </el-form-item>
            <el-form-item label="文字：">
                <el-input v-model="form.caption" @keyup.native="changeData()"></el-input>
            </el-form-item>
            <el-form-item label="文字边距：">
                <el-slider v-model="form.padding" :min="0" :max="20" @change="changeData()"></el-slider>
            </el-form-item>
            <el-form-item label="文字大小：">
                <el-slider v-model="form.fontSize" :min="12" :max="20" @change="changeData()"></el-slider>
            </el-form-item>
            <el-form-item label="对齐方式：">
                <el-radio-group v-model="form.textAlign" @change="changeData()">
                    <el-radio-button label="left">左对齐</el-radio-button>
                    <el-radio-button label="center">居中对齐</el-radio-button>
                    <el-radio-button label="right">右对齐</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="文字颜色：">
                <el-color-picker v-model="form.color" @change="changeData()"></el-color-picker>
            </el-form-item>
            <el-form-item label="文字背景：">
                <el-color-picker v-model="form.background" @change="changeData()"></el-color-picker>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: 'picture-set-component',
    props: ['data'],
    data() {
        return {
            form: {
                placeholder: this.data.placeholder,
                borderColor: this.data.borderColor,
                inputBackground: this.data.inputBackground,
                background: this.data.background,
                picture: this.data.picture,
                caption: this.data.caption,
                textAlign: this.data.textAlign,
                padding: this.data.padding,
                height: this.data.height
            },
        }
    },
    methods: {
        changeData() {
            console.log(this.form);
            this.$emit('changeData', this.form);
        },
        handleChange(file) {
            // console.log(file);
            const reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = (e) => {
                // console.log(this.result);
                // this.addPicture(this.result);
                this.form.picture = e.target.result;
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


