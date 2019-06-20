<template>
    <div class="item border-bottom mb-2 pb-3">
        <h4 class="article-title pt-2 mb-3 ">
            <span class="article-date shadow-sm text-center mr-2"><span>{{ article.month}}</span></span>
            <span class="title font-weight-bold font-17"><router-link
                    :to="{name:'Read',params:{id: article.id}}">{{ article.title }}</router-link></span>
        </h4>
        <div class="text-muted text-nowrap text-truncate font-15 article-short">
            {{ article.content }}
        </div>
        <div class="category mt-3 text-muted">
                                        <span class="badge badge-pill font-weight-normal font-14 mr-3">
                                            <i class="iconfont icon-date-range"></i> {{ article.created_at }}
                                        </span>
            <span class="badge badge-pill font-weight-normal font-14 mr-3">
                                            <i class="iconfont icon-view-headline"></i> {{ article.category}}
                                        </span>
            <span class="badge badge-pill font-weight-normal font-14 mr-3 float-right">
                                            <i class="iconfont icon-message"></i> <span
                    class="font-weight-bold">{{ article.comment_count }}</span> 人评
                                        </span>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleItem",
        props: ['article']
    }
</script>

<style scoped>

</style>