<template>
    <div class="col-lg-9 col-12 mb-2 bg-white shadow-sm border-gray border rounded">
        <Loading v-if="$store.state.LOADING"/>
        <div class="p-2 pb-3" v-else>
            <div class="border-bottom pt-3 pb-3 h5 font-weight-bold">
                <i class="iconfont icon-article"></i> 最新说说
            </div>
            <template v-for="(say,index) in says">
                <SayItem :say="say" :key="index"/>
            </template>
            <div class="no-articles font-weight-bold font-19 text-center" v-if="says.length === 0">
                抱歉哦，这里还莫有说说噢！
            </div>
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
    </div>
</template>

<script>
    import Loading from '@/components/common/Loading';
    import SayItem from '@/components/items/SayItem';

    export default {
        name: "Say",
        data() {
            return {
                kw: '',
                says: [],
                per_page: 0,
                total: 0,
                last_page: 0,
                current_page: 1,
                solution_url: '/article/says/?page=',
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
                        this.get_solution_list(this.solution_url);
                        break;
                    case 'pre':
                        this.get_solution_list(this.solution_url + (this.current_page - 1));
                        break;
                    case 'next':
                        this.get_solution_list(this.solution_url + (this.current_page + 1));
                        break;
                    case 'last':
                        this.get_solution_list(this.solution_url + this.last_page);
                        break;

                }
                // this.get_solution_list(this.solution_url + page)
            },
            async get_solution_list(snippet_url) {
                this.$store.commit('showLoading');
                await this.$http.get(snippet_url)
                    .then(res => {
                        this.says = res.data.says.data;
                        this.per_page = res.data.says.per_page;
                        this.total = res.data.says.total;
                        this.last_page = res.data.says.last_page;
                        this.current_page = res.data.says.current_page;
                        this.prev_page_url = res.data.says.prev_page_url;
                        this.first_page_url = res.data.says.first_page_url;
                        this.next_page_url = res.data.says.next_page_url;
                        this.last_page_url = res.data.says.last_page_url;

                        this.$store.commit('hideLoading');
                    })
            }
        },
        mounted() {
            this.get_solution_list(this.solution_url);
        },
        components: {
            Loading,
            SayItem,
        }
    }
</script>

<style scoped>

</style>