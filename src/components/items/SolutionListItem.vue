<template>

    <div class="solution border-bottom mb-3 pb-2">
        <div
                class="title pointer text-nowrap text-truncate font-weight-bold font-17 mb-3">
            <router-link :to="{name: 'SolutionDetail', params:{id: solution.id}}">【{{ solution.category }}】{{
                solution.title }}
            </router-link>
        </div>
        <div class="description text-muted">说明：{{solution.description }}</div>

    </div>
</template>

<script>
    export default {
        name: "SolutionListItem",
        props: ['solution']
    }
</script>

<style scoped>

</style>