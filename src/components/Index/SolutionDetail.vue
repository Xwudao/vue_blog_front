<template>
    <div class="col-lg-9 col-12 mb-2 bg-white shadow-sm border-gray border rounded">
        <Loading v-if="$store.state.LOADING"/>
        <div class="p-2 pb-3">
            <div class="border-bottom pt-3 pb-3 text-center h5 font-weight-bold">
                {{ solution.title }}
            </div>
            <div class="article-about text-muted border-bottom pb-1">
                <span class="d-inline-block"><i class="iconfont icon-person"></i>作者：{{ solution.author }}</span>
                <span class="d-inline-block ml-lg-4"><i
                        class="iconfont icon-date-range"></i>时间：{{ solution.date_ }}</span>
                <span class="d-inline-block ml-lg-4"><i class="iconfont icon-view-headline"></i>类别：{{ solution.category }}</span>
            </div>
        </div>
        <div class="solution-body">
            <div class="title font-weight-bold">描述</div>
            <div class="content text-muted border-bottom pb-2 mb-3">
                {{ solution.description }}
            </div>
            <div class="title font-weight-bold">原题链接</div>
            <a href="#" class="d-inline-block mt-2 ml-2"
               target="_blank">{{ solution.link }}</a>
            <div class="border-bottom pb-2 mb-3"></div>
            <div class="solution-detail">
                <div class="title font-weight-bold">解法</div>
                <div class="markdown-body">
                    {{ solution.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from '@/components/common/Loading';

    export default {
        name: "SolutionDetail",
        data() {
            return {
                id: null,
                solution: '',
                url: '/article/solution/detail/'
            }
        },
        methods: {
            get_new_data() {
                this.id = this.$route.params.id;
                this.get_detail(this.url + this.id);
            },
            async get_detail(url) {
                this.$store.commit('showLoading');
                this.$http.get(url)
                    .then(res => {
                        this.solution = res.data.solution;
                        this.$store.commit('hideLoading');
                    });
            }
        },
        mounted() {
            this.get_new_data();
        },
        components: {
            Loading,
        }
    }
</script>

<style scoped>

</style>