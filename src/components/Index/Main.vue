<template>
    <main>
        <div class="container mt-3">
            <div class="row">
                <ArticleList v-if="$route.name === 'App'"/>
                <Read v-if="$route.name === 'Read'"/>
                <Snippet v-if="$route.name === 'Snippet'"/>
                <Say v-if="$route.name === 'Say'"/>
                <SolutionList v-if="$route.name === 'SolutionList'"/>
                <SolutionDetail v-if="$route.name === 'SolutionDetail'"/>
                <Archive v-if="$route.name === 'Archive'"/>
                <Sidebar/>
            </div>
        </div>
    </main>
</template>

<script>
    import Sidebar from '@/components/common/Sidebar';
    import ArticleList from '@/components/Index/ArticleList';
    import Read from '@/components/Index/Read';
    import Snippet from '@/components/Index/Snippet';
    import Say from '@/components/Index/Say';
    import SolutionList from '@/components/Index/SolutionList';
    import SolutionDetail from '@/components/Index/SolutionDetail';
    import Archive from '@/components/Index/Archive';

    export default {
        name: "Main",
        data() {
            return {}
        },
        methods: {},
        mounted() {
        },
        components: {
            Sidebar,
            ArticleList,
            Read,
            Snippet,
            Say,
            SolutionList,
            SolutionDetail,
            Archive,
        }
    }
</script>

<style scoped>

</style>