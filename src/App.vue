<template>
    <!-- 不加会报错 -->
    <div class="clock_wrap">
        <!--S 头部 -->
        <section class="clock_header">
            <h1>计时器</h1>
        </section>
        <!--E 头部 -->
        <section class="clock_container">
            <!--S 导航 -->
            <nav class="clock_nav">
                <router-link to="/home">首页</router-link>
                <router-link to="/clocklist">计时列表</router-link>
            </nav>
            <!--E 导航 -->

            <!--S sidebar -->
            <div class="clock_sidebar">
                <sidebar></sidebar>
            </div>
            <!--E sidebar -->

            <!--S 路由部分 -->
            <div class="clock_router">
                <!-- <transition mode="out-in"> -->
                <transition :name="transitionName">
                    <router-view class="clock_router_inner"></router-view>
                </transition>
            </div>
            <!--E 路由部分 -->
        </section>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
    data:function(){
        return {
            transitionName: 'slide-left'
        }
    },
    mounted:function(){
        if(this.$route.name==undefined){
            this.$router.push('home');
        }
    },
    /*watch: {
      '$route' (to, from) {
        console.log(to.path)
      }
    },*/
    components: {
        Sidebar
    }
}
</script>

<style>
@import './static/sass/_function.scss';

body {
    overflow: hidden;
}

.clock_header {
    height: 42px;
    line-height: 42px;
    background: #39383e;
    h1 {
        font-size: 18px;
        color: #fff;
        text-align: center;
        &::before {
            content: '';
            width: 18px;
            height: 18px;
            display: inline-block;
            vertical-align: middle;
            margin: -2px 5px 0 5px;
            background: url(./static/img/logo.png) no-repeat;
            background-size: 100% 100%;
        }
    }
}

.clock_nav {
    height: 36px;
    line-height: 36px;
    background: #f0eff5;
    padding-left: 5px;
    font-size: 0;
    a {
        display: inline-block;
        padding: 0 10px;
        position: relative;
        font-size: 14px;
        &.router-link-active {
            color: $color_red;
        }

        &:not(:last-child) {
            &::after {
                content: '';
                width: 1px;
                background: #e1e0e6;
                position: absolute;
                right: 0;
                top: 12px;
                bottom: 12px;
            }
        }
    }
}

.clock_container {
    @extend %clearfix;
}

.clock_sidebar {
    width: 30%;
    float: left;
    box-sizing: border-box;
    border: 1px solid #ddd;
    margin-top: 10px;
}

.clock_router {
    width: 70%;
    float: left;
    position: relative;
    &_inner {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        transition: all .3s linear;
    }
}

.slide-left-enter{
  opacity: 0;
  transform: translate3d(60px, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-60px, 0);
}
</style>

