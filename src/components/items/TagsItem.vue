<template>
    <div>
        <span v-for="(tag, index) in tags" :key="index">
        <span class="item"><span
                href="#"
                class="btn btn-outline-dark btn-sm mb-1 ml-1">{{ tag.name }}</span></span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "TagsItem",
        props: ['tags']
    }
</script>

<style scoped>

</style>