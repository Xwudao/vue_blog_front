<template>

    <div class="item card says mb-4">
        <div class="says-date text-center font-weight-bold">
            {{ say.m }}
        </div>
        <div class="card-body">
            <div class="detail font-16">
                {{ say.content }}
            </div>

            <div class="info font-italic text-muted">
                <div class="date float-right mt-4">
                    {{ say.created_at }}
                </div>
                <div class="clearfix"></div>
                <div class="author float-right mt-2">
                    {{ say.author }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SayItem",
        props: ['say']
    }
</script>

<style scoped>

</style>