<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>文本模块</span>
        </div>
        <div class="item-con" id="editorId"></div>
    </el-card>
</template>


<script>
import Editor from 'wangeditor'
import 'wangeditor/release/wangEditor.min.css'

export default {
    name: 'editor-set-component',
    props: ['data'],
    data() {
        return {
            editor: '',
        }
    },
    methods: {
        deleteItem() {
            this.$emit('deleteItem');
        }
    },
    mounted () {
        this.editor = new Editor('#editorId');
        this.editor.customConfig.onchange = (html) => {
            console.log(html);
            this.$emit('changeData', {html});
        }
        this.editor.customConfig.menus = [
            // 'head',
            'bold',
            'fontSize',
            'fontName',
            'italic',
            'underline',
            // 'strikeThrough',
            'foreColor',
            'backColor',
            'link',
            // 'list',
            'justify',
            'liheHeight',
            // 'emoticon',
            // 'undo',
            // 'redo'
        ] 
        this.editor.create();
        this.editor.txt.html(this.data.html);
    }
}
</script>

<style lang="scss" scoped>
    /deep/ .w-e-toolbar {
        flex-wrap: wrap;
        .w-e-menu {
            z-index: unset!important;

            .w-e-droplist {
                z-index: 10002;
            }
        }
    }

</style>



