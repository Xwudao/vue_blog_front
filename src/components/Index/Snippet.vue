<template>
    <div class="col-lg-9 col-12 mb-2 bg-white shadow-sm border-gray border rounded">
        <div class="p-2 pb-3">
            <Loading v-if="$store.state.LOADING"/>
            <div class="border-bottom pt-3 pb-3 h5 font-weight-bold" v-else>
                <i class="iconfont icon-snippet"></i> 我的代码段
                <span class=" float-right font-weight-normal font-16">
                                <span class="item">
                                    数量：<span class="badge badge-success">{{ this.per_page }}</span>
                                </span>
                            </span>
            </div>
        </div>

        <div class="no text-center font-17 font-weight-bold" v-if="this.snippets.length === 0">
            抱歉，这里还没有数据哦！
        </div>
        <template v-for="(snippet, index) in snippets">

            <SnippetItem :snippet="snippet" :key="index"/>
        </template>
        <!--   分页-->
        <div class="mt-3 my-pagination mb-4">
            <div class="btn-group">
                <button type="button" class="btn btn-dark" @click="change_page('index')">首页
                </button>
                <button type="button" class="btn btn-dark" @click="change_page('pre')"
                        :disabled="this.current_page === 1">上一页
                </button>
                <button type="button" class="btn btn-dark" @click="change_page('next')"
                        :disabled="this.current_page === last_page">
                    下一页
                </button>
                <button type="button" class="btn btn-dark" @click="change_page('last')"
                        :disabled="this.current_page >= last_page">尾页
                </button>
            </div>
            <div class="show d-inline-block float-right">
                <span class="text-secondary font-19">{{ current_page }} / {{ last_page }} 页</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from '@/components/common/Loading';
    import SnippetItem from '@/components/items/SnippetItem';

    export default {
        name: "Snippet",
        data() {
            return {
                kw: '',
                snippets: [],
                per_page: 0,
                total: 0,
                last_page: 0,
                current_page: 1,
                snippets_url: '/article/snippets/?page=',
                next_page: this.current_page + 1,
                pre_page: this.current_page - 1,
                prev_page_url: '',
                first_page_url: '',
                next_page_url: '',
                last_page_url: '',
            }
        },
        methods: {
            change_page(p) {
                switch (p) {
                    case 'index':
                        this.get_solution_list(this.snippets_url);
                        break;
                    case 'pre':
                        this.get_solution_list(this.snippets_url + (this.current_page - 1));
                        break;
                    case 'next':
                        this.get_solution_list(this.snippets_url + (this.current_page + 1));
                        break;
                    case 'last':
                        this.get_solution_list(this.snippets_url + this.last_page);
                        break;

                }
                // this.get_solution_list(this.solution_url + page)
            },
            async get_solution_list(snippet_url) {
                this.$store.commit('showLoading');
                await this.$http.get(snippet_url)
                    .then(res => {
                        this.snippets = res.data.snippets.data;
                        this.per_page = res.data.snippets.per_page;
                        this.total = res.data.snippets.total;
                        this.last_page = res.data.snippets.last_page;
                        this.current_page = res.data.snippets.current_page;
                        this.prev_page_url = res.data.snippets.prev_page_url;
                        this.first_page_url = res.data.snippets.first_page_url;
                        this.next_page_url = res.data.snippets.next_page_url;
                        this.last_page_url = res.data.snippets.last_page_url;

                        this.$store.commit('hideLoading');
                    })
            }
        },
        mounted() {
            this.get_solution_list(this.snippets_url);
        },
        components: {
            SnippetItem,
            Loading,
        }
    }
</script>

<style scoped>

</style>