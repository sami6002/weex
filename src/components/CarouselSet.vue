<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>轮播模块</span>
        </div>
        <el-form label-width="60px" @submit.native.prevent>
            <!-- <el-form-item label="图片：">
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
            </el-form-item> -->
            <el-form-item label="图片：">
                <div class="inline">
                    <el-input v-model="tempImage" @keyup.enter.native="addImage()"></el-input>
                    <el-button type="primary" icon="el-icon-plus" @click="addImage()"></el-button>
                </div>
                <div class="upload-demo">
                    <ul class="el-upload-list el-upload-list--picture-card">
                        <li class="el-upload-list__item is-success" v-for="(image,index) in form.images" :key="index">
                            <img :src="image" class="el-upload-list__item-thumbnail" />
                            <label class="el-upload-list__item-status-label"><i class="el-icon-upload-success el-icon-check"></i></label>
                            <i class="el-icon-close"></i>
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-delete" @click="deleteImage(index)"><i class="el-icon-delete"></i></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </el-form-item>
            <el-form-item label="高度：">
                <el-slider v-model="form.height" :min="100" :max="414" @change="changeData()" :show-input="true"></el-slider>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<style lang="scss" scoped>
.upload-demo {
    display: flex;
    flex-flow: column-reverse;
    padding-top: 10px;
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
.inline {
    display: flex;
    .el-input {
        padding-right: 10px;
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
            tempImage: ''
        }
    },
    methods: {
        changeData() {
            this.$emit('changeData', this.form);
        },
        addImage() {
            this.form.images.push(this.tempImage);
            this.tempImage = '';
            this.changeData();
        },
        deleteImage(index) {
            this.form.images.splice(index, 1);
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


