<template>
    <div class="col-lg-3 col-12 pl-lg-2 p-0">
        <div class="card rounded shadow-sm mb-2">
            <div class="card-header bg-white font-weight-bold font-15">
                <div class="name d-inline-block mr-3"><i class="iconfont icon-person"></i>It's me</div>
            </div>
            <div class="card-body">
                <div class="item"><i class="iconfont icon-user-circle"></i>昵称：无道</div>
                <div class="item"><i class="iconfont icon-position-fill"></i>坐标：成都</div>
                <div class="item"><i class="iconfont icon-gender">
                </i>性别：<i class="iconfont icon-sexm"></i>
                </div>
                <div class="item about border-top mt-1">一个人，一介学生，一个儿子~ 愿你我都被世界温暖以待</div>
            </div>
        </div>

        <div class="card rounded shadow-sm mb-2">
            <div class="card-header bg-white font-weight-bold font-15">
                <i class="iconfont icon-commentdots-fill"></i>新评论
            </div>
            <div class="card-body">
                <div class="comment">
                    <CommentItem :comments="comments"/>
                </div>
            </div>
        </div>
        <div class="card rounded shadow-sm mb-2">
            <div class="card-header bg-white font-weight-bold font-15">
                <i class="iconfont icon-cloud"></i>标签云
            </div>
            <div class="card-body">
                <div class="cloud">
                    <TagsItem :tags="tags"/>
                </div>
            </div>
        </div>


        <div class="card rounded shadow-sm mb-2">
            <div class="card-header bg-white font-weight-bold font-15">
                <i class="iconfont icon-link"></i>友情链接
            </div>
            <div class="card-body">
                <span class="item"> <a href="#" target="_blank" data-toggle="tooltip"
                                       title="#">梦幻成风</a></span>
            </div>
        </div>
    </div>

</template>

<script>
    import TagsItem from '@/components/items/TagsItem'
    import CommentItem from '@/components/items/CommentItem'

    export default {
        name: "Sidebar",
        data() {
            return {
                tags: [],
                comments: [],
            }
        },
        methods: {
            async get_tags() {
                await this.$http.get('/article/tags')
                    .then(res => {
                        this.tags = res.data.tags;
                    });
            },

            async get_comments() {
                await this.$http.get('/article/comments')
                    .then(res => {
                        this.comments = res.data.comments;
                    });
            }
        },
        mounted() {
            this.get_tags();
            this.get_comments();
        },
        components: {
            TagsItem,
            CommentItem,
        }
    }
</script>

<style scoped>

</style>