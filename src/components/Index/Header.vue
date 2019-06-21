<template>
    <header>
        <div class="nav-background shadow-sm">
            <div class="container">
                <nav class="navbar navbar-expand-lg mr-auto navbar-light bg-light font-weight-bold">
                    <router-link class="navbar-brand brand brand-title" :to="{name: 'App'}">Misiyu.cn 迷思雨</router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Snippet'}">
                                    <i class="iconfont icon-databaseset-fill"></i>代码
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Archive'}">
                                    <i class="iconfont icon-archive"></i>归档</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'SolutionList'}">
                                    <i class="iconfont icon-solution-"></i>题解
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Say'}">
                                    <i class="iconfont icon-solution-"></i>说说
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Todo'}">
                                    <i class="iconfont icon-solution-"></i>TODO
                                </router-link>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0" onsubmit="return false;">
                            <input class="form-control mr-sm-2" type="search" name="keyword" id="input-keyword"
                                   placeholder="搜点啥吧"
                                   aria-label="Search">
                            <button class="btn btn-outline-dark my-2 my-sm-0" id="btn-search" type="submit">搜索
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>