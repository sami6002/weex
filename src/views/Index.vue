<template>
    <el-container>
        <el-header>
            <div class="logo">
                <!-- <img src="../assets/logo.png" width="40" /> -->
                W
            </div>
            <div class="top-bar">
                <div class="left"></div>
                <div class="middle">
                    <el-button type="text" icon="el-icon-goods">更换皮肤</el-button>
                    <el-button type="text" icon="el-icon-setting">店铺管理</el-button>
                </div>
                <div class="right">
                    <el-button type="primary" plain icon="el-icon-edit">保存</el-button>
                    <el-button type="primary" plain icon="el-icon-view" @click="dialogVisible = true">预览</el-button>
                </div>
            </div>
        </el-header>
        <el-container>
            <el-aside width="80px">
                <ul class="guide">
                    <li class="item active">模块</li>
                    <li class="item">控件</li>
                    <li class="item">页面</li>
                </ul>
            </el-aside>
            <el-main>
                <div class="left">
                    <el-collapse v-model="activeNames">
                        <el-collapse-item title="常用模块" name="1">
                            <ul class="gird">
                                <li class="item" @click="addEmpty()">
                                    <i class="el-icon-news"></i>
                                    <p>空白模块</p>
                                </li>
                                <li class="item">
                                    <i class="el-icon-tickets" @click="addEditor()"></i>
                                    <p>文本模块</p>
                                </li>
                                <li class="item">
                                    <i class="el-icon-search" @click="addSearch()"></i>
                                    <p>搜索模块</p>
                                </li>
                                <li class="item">
                                    <!-- <el-upload action=""
                                        :on-change="handleChange"
                                        :auto-upload="false"
                                        :show-file-list="false"
                                        list-type="picture"
                                        accept="image/jpeg,image/jpg,image/gif,image/png,image/bmp">
                                        <i class="el-icon-picture"></i>
                                        <p>图片模块</p>
                                    </el-upload> -->
                                    <i class="el-icon-picture-outline" @click="addPicture()"></i>
                                    <p>图片模块</p>
                                </li>
                                <li class="item">
                                    <!-- <el-upload action=""
                                        :on-change="handleCarouselChange"
                                        :auto-upload="false"
                                        :show-file-list="false"
                                        list-type="picture"
                                        accept="image/jpeg,image/jpg,image/gif,image/png,image/bmp">
                                        <i class="el-icon-picture"></i>
                                        <p>轮播模块</p>
                                    </el-upload> -->
                                    <i class="el-icon-files" @click="addCarousel()"></i>
                                    <p>轮播模块</p>
                                </li>
                                <li class="item">
                                    <i class="el-icon-menu" @click="navVisible=true"></i>
                                    <p>导航模块</p>
                                </li>
                                <li class="item" @click="addTitle()">
                                    <i class="el-icon-chat-line-square"></i>
                                    <p>标题模块</p>
                                </li>
                                <li class="item" @click="addVideo()">
                                    <i class="el-icon-video-camera-solid"></i>
                                    <p>视频模块</p>
                                </li>
                                <li class="item" @click="addGoodsList()">
                                    <i class="el-icon-s-grid"></i>
                                    <p>商品列表</p>
                                </li>
                                <li class="item" @click="addFixedIcon()">
                                    <i class="el-icon-star-on"></i>
                                    <p>悬浮按钮</p>
                                </li>
                            </ul>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div class="middle">
                    <div class="edit-content">
                        <draggable element="div" v-model="items" @update="handleEnd" v-bind="{animation: 200}">
                            <transition-group type="transition" :name="'fist-list'" key="drag-transition">
                                <div v-for="(item,index) in items" 
                                    :key="item.component + '-' + index" 
                                    :is="item.component" 
                                    :data="item.data" 
                                    :innerItem="innerItem"
                                    :outerCurrent="current"
                                    :outerIndex="index"
                                    @deleteItem="deleteItem(index)"
                                    @clickInnerItem="clickInnerItem"
                                    @deleteInnerItem="deleteInnerItem"
                                    @click.native="clickCurrent(index)" 
                                    :class="{active: current == index}">
                                </div>
                            </transition-group>
                        </draggable>
                    </div>
                </div>
                <div class="right">
                    <div v-for="(item,index) in items" :key="index" >
                        <!-- <keep-alive> -->
                            <div :is="'set-' + item.component" 
                                :data="item.data" 
                                @changeData="changeData(arguments, item)" 
                                @deleteItem="deleteItem(index)"
                                v-if="index == current" 
                                :innerItem="innerItem"
                                :key="'set-' + item.component + '-' + index"></div>
                        <!-- </keep-alive> -->
                    </div>
                </div>
            </el-main>
        </el-container>

        <el-dialog
            title="预览"
            :visible.sync="dialogVisible"
            width="60%"
            :lock-scroll="true"
            :append-to-body="true">
            <!-- <div>{{format(items)}}</div> -->
            <el-input class="scroll" type="textarea" autosize :value="format(items)"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary"
                    v-clipboard:copy="format(items)"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError">复 制</el-button>
            </span>
        </el-dialog>

        <el-dialog
            title="导航设置"
            :visible.sync="navVisible"
            width="30%"
            :lock-scroll="true"
            :append-to-body="true">
            <el-form>
                <el-form-item label="显示行数">
                    <el-input-number v-model="navigation.row" :min="1" :max="2"></el-input-number>
                </el-form-item>
                <el-form-item label="显示列数">
                    <el-input-number v-model="navigation.col" :min="4" :max="5"></el-input-number>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="navVisible = false">取 消</el-button>
                <el-button type="primary" @click="addNavigation()">添 加</el-button>
            </span>
        </el-dialog>
    </el-container>
</template>
<style lang="scss" scoped>
.drag {
    height: 60px;
    border: 2px dashed green;
}
.scroll /deep/ textarea {
    max-height: 300px;
    overflow: auto;
}

.logo {
    font-size: 30px;
    color: #ffffff;
    text-align: center;
}

/deep/ .w-e-text-container {
    z-index: 999!important;
}
</style>

<script>
import draggable from 'vuedraggable'
import Empty from '@/components/Empty.vue';
import EmptySet from '@/components/EmptySet.vue';
import Editor from '@/components/Editor.vue'
import EditorSet from '@/components/EditorSet.vue'
import Search from '@/components/Search.vue'
import SearchSet from '@/components/SearchSet.vue'
import Picture from '@/components/Picture.vue'
import PictureSet from '@/components/PictureSet.vue'
import Carousel from '@/components/Carousel.vue'
import CarouselSet from '@/components/CarouselSet.vue'
import Navigation from '@/components/Navigation.vue'
import NavigationSet from '@/components/NavigationSet.vue'
import Title from '@/components/Title.vue'
import TitleSet from '@/components/TitleSet.vue'
import Video from '@/components/Video.vue'
import VideoSet from '@/components/VideoSet.vue'
import GoodsList from '@/components/GoodsList.vue';
import GoodsListSet from '@/components/GoodsListSet.vue';
import FixedIcon from '@/components/FixedIcon.vue';
import FixedIconSet from '@/components/FixedIconSet.vue';

import videoUrl from "@/assets/exampleVideo.mp4";

export default {
    name: 'index',
    components: {
        'empty-component': Empty,
        'set-empty-component': EmptySet,
        'editor-component': Editor,
        'set-editor-component': EditorSet,
        'search-component': Search,
        'set-search-component': SearchSet,
        'picture-component': Picture,
        'set-picture-component': PictureSet,
        'carousel-component': Carousel,
        'set-carousel-component': CarouselSet,
        'navigation-component': Navigation,
        'set-navigation-component': NavigationSet,
        'title-component': Title,
        'set-title-component': TitleSet,
        'video-component': Video,
        'set-video-component': VideoSet,
        'goodslist-component': GoodsList,
        'set-goodslist-component': GoodsListSet,
        'fixedicon-component': FixedIcon,
        'set-fixedicon-component': FixedIconSet,
        draggable,
    },
    data() {
        return {
            activeNames: ['1', '2'],
            items: [],
            current: 0,
            dialogVisible: false,
            navVisible: false,
            navigation: {
                row: 1,
                col: 4
            },
            innerItem: -1,
        }
    },
    methods: {
        addEmpty() {
            this.items.push({
                component: 'empty-component',
                data: {
                    height: 16,
                    background: '#f4f4f4'
                }
            });
            this.current = this.items.length - 1;
        },
        addEditor() {
            this.items.push({
                component: 'editor-component',
                data: {
                    html: '<p><i>请在此输入文本...</i></p>'
                }
            });
            this.current = this.items.length - 1;
        },
        addSearch() {
            this.items.push({
                component: 'search-component',
                data: {
                    placeholder: '请输入关键字',
                    inputBackground: '#ffffff',
                    background: '#ffffff',
                    borderColor: '#f2f2f2',
                }
            });
            this.current = this.items.length - 1;
        },
        addPicture(url='') {
            this.items.push({
                component: 'picture-component',
                data: {
                    picture: url,
                    height: 180,
                    caption: '描述文字',
                    color: '',
                    background: '',
                    fontSize: 14,
                    textAlign: 'left',
                    padding: 10
                }
            });
            this.current = this.items.length - 1;
        },
        addCarousel(item='') {
            this.items.push({
                component: 'carousel-component',
                data: {
                    images: [],
                    height: 180,
                }
            });
            this.current = this.items.length - 1;
        },
        addNavigation() {
            const items = [];
            const nums = this.navigation.row * this.navigation.col;
            for (let index = 0; index < nums; index++) {
                items.push({
                    icon: 'all',
                    label: '类目' + (index + 1),
                    background: '',
                });
            }
            this.items.push({
                component: 'navigation-component',
                data: {
                    items: items,
                    col: this.navigation.col,
                    background: '#ffffff',
                    color: '#4a4a4a'
                }
            });
            this.navVisible = false;
            this.current = this.items.length - 1;
        },
        addTitle() {
            this.items.push({
                component: 'title-component',
                data: {
                    title: '主标题',
                    description: '副标题',
                    flow: 'row' // column
                }
            });
            this.current = this.items.length - 1;
        },
        addVideo() {
            this.items.push({
                component: 'video-component',
                data: {
                    video: videoUrl,
                    caption: '描述文字',
                    color: '',
                    background: '',
                    fontSize: 14,
                    textAlign: 'left',
                    padding: 10,
                    // height: null
                }
            });
            this.current = this.items.length - 1;
        },
        addGoodsList() {
            this.items.push({
                component: 'goodslist-component',
                data: {
                    layout: 'wrap', // column
                    items: [
                        {'picture': '', 'title': '这是一个标题', 'desc': '这是一个简介', 'price': '¥100.00'}
                    ],
                    background: '',
                    titleFontSize: 14,
                    descFontSize: 12,
                    priceFontSize: 14,
                    titleTextAlign: 'left',
                    descTextAlign: 'left',
                    priceTextAlign: 'left',
                    titleColor: '#202020',
                    descColor: '#9b9b9b',
                    priceColor: '#ff5722',
                    titleFontWeight: 'bold',
                    descFontWeight: 'normal',
                    priceFontWeight: 'bold',
                }
            });
            this.current = this.items.length - 1;
        },
        addFixedIcon() {
            const index = this.items.findIndex(el => el.component == 'fixedicon-component');
            const item = {
                icon: 'share',
                text: '分享',
                background: '',
                color: ''
            }
            if(index == -1) {
                this.items.push({
                    component: 'fixedicon-component',
                    data: {
                        items: [item]
                    }
                });
                this.current = this.items.length - 1;
            }else {
                this.items[index].data.items.push(item);
                this.current = index;
            }
        },
        changeData(args, item) {
            item.data = args[0];
        },
        clickCurrent(index) {
            this.current = index;
            this.innerItem = -1;
        },
        deleteItem(index) {
            this.items.splice(index, 1);
        },
        handleEnd(event) {
            this.current = event.newIndex;
        },
        format(items){
            // const json = JSON.parse(items);
            return JSON.stringify(items, null, "\t");
        },
        onError() {
            this.$message('复制失败');
        },
        onCopy() {
            this.$message('复制成功');
        },
        handleChange(file) {
            // console.log(file);
            const reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = (e) => {
                this.addPicture(e.target.result);
            }
        },
        handleCarouselChange(file) {
            // console.log(file);
            const reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = (e) => {
                this.addCarousel({
                    name: file.name,
                    url: e.target.result
                });
            }
        },
        clickInnerItem(data) {
            if(!data.stop) {
                this.current = data.outerIndex;
            }
            this.innerItem = data.index;
        },
        deleteInnerItem(data) {
            const items = this.items[data.outerIndex].data.items;
            items.splice(data.index, 1);
            this.innerItem = -1;
            if(items.length == 0) {
                this.items.splice(data.outerIndex, 1);
            }
        }
    },
    mounted() {
        console.log(videoUrl);
    },
}
</script>

