<template>
    <div class="col-lg-9 col-12 mb-2 bg-white shadow-sm border-gray border rounded">
        <div class="p-2 pb-3">
            <div class="border-bottom pt-3 pb-3 text-center h5 font-weight-bold">
                <i class="iconfont icon-article-fill"></i>文章归档
            </div>
        </div>
        <div class="speak card mb-4">
            <div class="card-body">
                <div class="card-text">生活有苦有甜，才叫完整；爱情有闹有和，才叫情趣；心情有悲有喜，才叫体会；日子有阴有晴，才叫自然；联系时有时无，才叫珍贵。 陌生人，祝你安好！</div>
            </div>
        </div>
        <Loading v-if="$store.state.LOADING"/>
        <div class="archives" v-else>
            <template v-for="(archive, index) in archives">
                <ArchiveItem :archive="archive" :data="articles_data[index]" :key="index"/>
            </template>
        </div>
        <div class="mb-4"></div>
    </div>
</template>

<script>
    import ArchiveItem from '@/components/items/ArchiveItem';
    import Loading from '@/components/common/Loading';

    export default {
        name: "archive",
        data() {
            return {
                archives: [],
                articles_data: []
            }
        },
        methods: {
            async get_data() {
                this.$store.commit('showLoading');
                await this.$http.get('/article/archive')
                    .then(res => {
                        this.archives = res.data.archives;
                        this.articles_data = res.data.articles_data;
                        this.$store.commit('hideLoading');
                    })
            }
        },
        mounted() {
            this.get_data();
        },
        components: {
            ArchiveItem,
            Loading,
        }
    }
</script>

<style scoped>

</style>