<template>
    <div>
        <span v-for="(comment, index) in comments" :key="index">
        <router-link :to="{name: 'Read',params:{id:comment.article_id}}"
           class="text-truncate text-nowrap"
           data-toggle="tooltip"
           :title="comment.nickname">{{ comment.content }}</router-link>
        </span>
    </div>
</template>

<script>
    export default {
        name: "CommentItem",
        props:['comments']
    }
</script>

<style scoped>

</style>