<template>
    <div class="category border-bottom">
        <div class="year font-weight-bold font-16 mt-4"
             :class="{'title-g': is_show}" id="archive-2019-may" @click="change_show">
            {{ archive.year }} {{ archive.month }} ({{ archive.published }})
            <i class="iconfont d-inline-block ml-1 pt-1"></i>
        </div>
        <ul :class="{'d-none': is_show === false}">
            <template v-for="(d, index) in data">
                <li class="text-muted mt-3" :key="index">
                    <span class="d-block">{{ d.created_at }}</span>
                    <div class="title ml-4 pb-1 mr-5 text-nowrap text-truncate">
                        <router-link :to="{name:'Read', params: {id: d.id}}" target="_blank"
                                     class="">
                            {{ d.title }}
                        </router-link>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ArchiveItem",
        props: ['archive', 'data'],
        data() {
            return {
                is_show: false
            }
        },
        methods: {
            change_show() {
                this.is_show = !this.is_show;
            }
        },

    }
</script>

<style scoped>

</style>