<template>
    <div class="col-lg-9 col-12 mb-2 bg-white shadow-sm border-gray border rounded">

        <div class="p-2 pb-3">
            <div class="border-bottom pt-3 pb-3 h5 font-weight-bold">
                <i class="iconfont icon-solution-"></i> 刷题/题解
                <span class=" float-right font-weight-normal font-16">
                                <span class="item">
                                    数量：<span class="badge badge-success">数量</span>
                                </span>
                            </span>
            </div>
        </div>
        <Loading v-if="$store.state.LOADING"/>
        <div v-if="solutions.length === 0" class="no text-center font-17 font-weight-bold">
            抱歉，这里还没有数据哦！
        </div>
        <template v-for="(solution,index) in solutions">
            <SolutionListItem :solution="solution" :key="index"/>
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
    import SolutionListItem from '@/components/items/SolutionListItem';

    export default {
        name: "SolutionList",
        data() {
            return {
                solutions: [],
                per_page: 0,
                total: 0,
                last_page: 0,
                current_page: 1,
                solution_url: '/article/solutions/?page=',
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
                        this.solutions = res.data.solutions.data;
                        this.per_page = res.data.solutions.per_page;
                        this.total = res.data.solutions.total;
                        this.last_page = res.data.solutions.last_page;
                        this.current_page = res.data.solutions.current_page;
                        this.prev_page_url = res.data.solutions.prev_page_url;
                        this.first_page_url = res.data.solutions.first_page_url;
                        this.next_page_url = res.data.solutions.next_page_url;
                        this.last_page_url = res.data.solutions.last_page_url;

                        this.$store.commit('hideLoading');
                    })
            }
        },
        mounted() {
            this.get_solution_list(this.solution_url);
        },
        components: {
            Loading,
            SolutionListItem,
        }
    }
</script>

<style scoped>

</style>