<template>
    <div class="col-lg-9 col-12 mb-2 bg-white shadow-sm border-gray border rounded">
        <Loading v-if="$store.state.LOADING"/>
        <div v-else class="p-2 pb-3">
            <h1 class="border-bottom pt-3 pb-3 text-center h3 font-weight-bold">
                {{ article.title }}
            </h1>
            <div class="article-about text-muted border-bottom pb-1">
                <span class="d-inline-block"><i class="iconfont icon-person"></i>作者：{{ article.author }}</span>
                <span class="d-inline-block ml-lg-4"><i
                        class="iconfont icon-date-range"></i>时间：{{ article.created_at }}</span>
                <span class="d-inline-block ml-lg-4"><i class="iconfont icon-view-headline"></i>类别：{{ article.category }}</span>
                <span class="d-inline-block ml-lg-4"><i
                        class="iconfont icon-commentlines-fill"></i>评论：<span>{{ article.comment_count }}</span> 条评论</span>
                <span class="d-inline-block ml-lg-4"><i
                        class="iconfont icon-time"></i>阅读：<span>{{ article.read_num }}</span> 次</span>
            </div>
            <!--   内容-->
            <div class="content select markdown-body">
                <div v-html="article.content"></div>
            </div>
            <div class="tags mt-3 text-muted float-sm-left">
                <span class="d-inline-block mr-1">标签：</span>
                {{ article.tags }}
            </div>
            <div class="last_modified float-right text-muted mt-3 ">
                最后修改时间：{{ article.updated_at }}
            </div>
            <div class="clearfix mb-3"></div>
            <div class="finished mt-2 p-2 border-top border-bottom font-16 text-center font-weight-bold">
                <i class="iconfont icon-star"></i>阅读完毕&nbsp;<i class="iconfont icon-star"></i>
            </div>
            <!-- 上/下一篇 -->
            <div class="another pt-2 pb-2 border-bottom font-16 font-weight-bold">
                <div class="row">
                    <div class="col-6">
                        <button
                                class="btn btn-info form-control" @click="go_another('pre')"
                                :disabled="pre_id === null">上一篇
                        </button>
                    </div>
                    <div class="col-6">
                        <button
                                class="btn btn-info form-control" @click="go_another('next')"
                                :disabled="next_id === null">下一篇
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from '@/components/common/Loading';

    export default {
        name: "Read",
        data() {
            return {
                id: null,
                article: '',
                pre_id: null,
                next_id: null,
                url: '/article/detail/'
            }
        },
        methods: {
            get_new_data() {
                this.id = this.$route.params.id;
                this.get_detail(this.url + this.id);
            },
            go_another(keyCode) {
                switch (keyCode) {
                    case 'pre':
                        this.$router.push({name: 'Read', params: {id: this.pre_id}});
                        break;
                    case 'next':
                        this.$router.push({name: 'Read', params: {id: this.next_id}});
                        break;
                }
            },
            async get_detail(url) {

                this.$store.commit('showLoading');
                this.$http.get(url)
                    .then(res => {
                        this.article = res.data.article;
                        this.pre_id = this.article.pre_id;
                        this.next_id = this.article.next_id;

                        this.$store.commit('hideLoading');
                    });
            },
            async update_read_num(url) {
                await this.$http.get(url);
            },
        },
        mounted() {
            this.get_new_data();
            this.update_read_num('article/update_read_num/' + this.id)
        },
        watch: {
            $route() {
                this.get_new_data();
            }
        },
        components: {
            Loading
        }

    }
</script>

<style scoped>

</style>