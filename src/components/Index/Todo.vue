<template>
    <div class="col-lg-9 col-12 mb-2 bg-white shadow-sm border-gray border rounded">
        <div class="p-2 pb-3">
            <div class="border-bottom pt-3 pb-3 h5 font-weight-bold">
                <i class="iconfont icon-article-fill"></i>
                TODO List
            </div>
            <div class="add">
                <form>
                    <div class="input">
                        <label for="todo"></label><input v-model="content" placeholder="添加一件待做的事情吧" type="text" id="todo">
                        <button class="btn-todo" @click.prevent="add">添加</button>
                    </div>
                </form>
            </div>
            <div class="list">
                <div class="list-title">
                    待做的事情：
                </div>
                <div class="items">
                    <template v-for="(item, index) in todos">
                        <div class="item" :key="index">
                            <div class="d-inline mr-2 ">
                                <span v-if="item.finish === true" class="bag-finish">完成</span>
                                <span v-if="item.finish === false" class="bag">待做</span>
                            </div>
                            <div class="font-19 d-inline-block">
                                {{ item.content }}
                            </div>
                            <div class="d-inline-block float-right text-muted">
                                {{ item.date }}
                                <span class="pointer" v-if="item.finish === false" @click="finish(index)">
                                    <i class="iconfont icon-times"></i>
                                </span>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Todo",
        data() {
            return {
                content: '',
                todos: []
            }
        },
        methods: {
            finish(index) {
                this.toFinish(index);
                this.toLocal();
            },
            toFinish(i) {
                this.todos.forEach((value, index) => {
                    if (index === i) {
                        value.finish = true;
                    }
                })
            },
            toLocal() {
                let items = JSON.stringify(this.todos);
                localStorage.setItem('todos', items);
            },
            add() {
                if (this.content !== '') {
                    this.todos.push({
                        content: this.content,
                        date: new Date().toLocaleDateString(),
                        finish: false
                    });

                    this.content = '';
                    this.toLocal();
                }
            }
        },
        mounted() {
            let item =  JSON.parse(localStorage.getItem('todos'));
            if (item !== null) {
                this.todos = item;
            }
        }
    }
</script>

<style scoped>
    .input {
        width: 80%;
        margin: 0 auto;
    }

    .bag {
        background: #ff7675;
        color: #fff;
        padding: 6px 2px;
    }

    .bag-finish {
        background: green;
        color: #fff;
        padding: 6px 2px;
    }

    #todo {
        /*border: #3495e3;*/
        /*outline: none;*/
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        width: 80%;
        border: 1px solid #ff7675;
        text-indent: 3px;
        padding-left: 10px;
    }

    .btn-todo {
        width: 20%;
        height: 40px;
        line-height: 42px;
        border: none;
        background-color: #ff7675;
        cursor: pointer;
        float: right;
        display: inline-block;
        color: #FFF;
        text-align: center;
        font-size: 16px;
        outline: none;
    }

    .list-title {
        padding-left: 15px;
        border-left: 4px solid #ff7675;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;
    }

    .items {
        border: 1px dot-dash #cccccc;
        width: 90%;
        margin: 0 auto;
    }

    .items .item {
        border-bottom: 1px dotted #98e1b7;
        height: 40px;
        line-height: 40px;
        padding-bottom: 5px;
    }

    .items .item.finish {
        text-decoration: line-through;
    }
</style>