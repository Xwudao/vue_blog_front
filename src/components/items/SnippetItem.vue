<template>
    <div class="snippet border-bottom mb-3 pb-2">
        <div class="title pointer text-nowrap text-truncate font-weight-bold font-17 mb-3"
             :class="{'title-g': is_show === 1}"
             @click="change_show">
            【{{ snippet.category }}】{{ snippet.title }}
        </div>
        <div class="snippet-content" :class="{'d-none' : is_show === 1}">
            {{ snippet.content }}
        </div>
        <div class="description text-muted">说明：{{ snippet.description }}</div>

    </div>
</template>

<script>
    export default {
        name: "SnippetItem",
        props: ['snippet'],
        data() {
            return {
                is_show: 1
            }
        },
        methods: {
            change_show() {
                this.is_show = (this.is_show + 1) % 2;
            }
        }
    }
</script>

<style scoped>

</style>