<template>
    <div class="header">
        <Header/>
        <Main/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/Index/Header';
    import Footer from '@/components/Index/Footer';
    import Main from '@/components/Index/Main';

    export default {
        name: "Index",
        components: {
            Header,
            Footer,
            Main,
        },
        mounted() {
            // console.log(this.$route.name);
        }
    }
</script>

<style scoped>

</style>