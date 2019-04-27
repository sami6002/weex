<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>轮播模块</span>
        </div>
        <el-form label-width="90px" @submit.native.prevent>
            <el-form-item label="图片：">
                <el-upload
                    class="upload-demo"
                    action=""
                    :on-change="handleChange"
                    :auto-upload="false"
                    list-type="picture-card"
                    :file-list="form.images"
                    :on-remove="handleRemove"
                    :multiple="true"
                    accept="image/jpeg,image/jpg,image/gif,image/png,image/bmp">
                     <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="高度：">
                <el-slider v-model="form.height" :min="100" :max="414" @change="changeData()" :show-input="true"></el-slider>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<style lang="scss" scoped>
/deep/ .upload-demo {
    display: flex;
    flex-flow: column-reverse;
    .el-upload-list {
        display: flex;
        flex-wrap: wrap;
        .el-upload-list__item {
            height: 70px;
            width: 70px;
            margin-top: 8px;
            margin-bottom: 0;
        }
    }
    .el-upload--picture-card {
        height: 70px;
        width: 70px;
        line-height: 80px;
    }
}
</style>


<script>
export default {
    name: 'carousel-set-component',
    props: ['data'],
    data() {
        return {
            form: {
                images: this.data.images,
                height: this.data.height,
            },
        }
    },
    methods: {
        changeData() {
            this.$emit('changeData', this.form);
        },
        handleChange(file, fileList) {
            const reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = (e) => {
                this.form.images.push({
                    name: file.name,
                    url: e.target.result
                });
            }
            this.changeData();
        },
        handleRemove(file, fileList) {
            const index = this.form.images.findIndex(el => el.name = file.name);
            this.form.images.splice(index, 1);
        }
    },
    created () {
        // this.changeData();
        // console.log(this.data.height);
    }
}
</script>


