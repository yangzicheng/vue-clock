<template>
    <div class="clock_sidebar_inner">
        <div class="clock_sidebar_item">
            <span class="clock_sidebar_title">状态</span>
            <span class="clock_sidebar_desc" :class = "{ 'green': status == '已计时', 'red': status == '已结束'  }">{{ status }}</span>
        </div>
        <div class="clock_sidebar_item">
            <span class="clock_sidebar_title">时长</span>
            <span class="clock_sidebar_desc">{{ duration }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            status() {
                return this.$store.getters.getStatus
            },
            duration() {
                return this.$store.getters.getDuration
            }
        }
    }
</script>

<style>
@import '../static/sass/_function.scss';
.clock_sidebar_inner {
    padding-left: 10px;
    display: block;
}
.clock_sidebar_item {
    height: 52px;
    &:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }
}
.clock_sidebar_title {
    display: block;
    color: #333;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
}
.clock_sidebar_desc {
    font-size: 14px;
    color: #999;
    &.green {
        color: green;
    }

    &.red {
        color: $color_red;
    }
}
</style>