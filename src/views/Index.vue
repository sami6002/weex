<template>
    <el-container>
        <el-header>
            <div class="logo">
                <img src="../assets/logo.png" width="40" />
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
                                    <i class="el-icon-tickets"></i>
                                    <p>空白模块</p>
                                </li>
                                <li class="item">
                                    <i class="el-icon-tickets" @click="addEditor()"></i>
                                    <p>文本模块</p>
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
                                    @deleteItem="deleteItem(index)"
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
                            <div :is="'set-' + item.component" :data="item.data" @changeData="changeData(arguments, item)" v-if="index == current" :key="'set-' + item.component + '-' + index"></div>
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

export default {
    name: 'index',
    components: {
        'empty-component': Empty,
        'set-empty-component': EmptySet,
        'editor-component': Editor,
        'set-editor-component': EditorSet,
        draggable,
    },
    data() {
        return {
            activeNames: ['1', '2'],
            items: [
                // {
                //     component: 'editor-component',
                //     data: {
                //         html: '<p>文本测试框1</p>'
                //     }
                // },
                // {
                //     component: 'empty-component',
                //     data: {
                //         height: 50,
                //         background: "#000000"
                //     }
                // },
                // {
                //     component: 'editor-component',
                //     data: {
                //         html: '<p>文本测试框1</p>'
                //     }
                // }
            ],
            current: 0,
            dialogVisible: false
        }
    },
    methods: {
        addEmpty() {
            this.items.push({
                component: 'empty-component',
                data: {
                    height: 30,
                    background: '#ffffff'
                }
            });
            this.current = this.items.length - 1;
        },
        addEditor() {
            this.items.push({
                component: 'editor-component',
                data: {
                    html: '<p style="text-align: left;"><i>请在此输入文本...</i></p>'
                }
            });
            this.current = this.items.length - 1;
        },
        changeData(args, item) {
            item.data = args[0];
        },
        clickCurrent(index) {
            this.current = index;
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
    },
}
</script>

