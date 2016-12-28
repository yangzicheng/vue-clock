<template>
    <div class="clock_record">
        <div class="clock_record_nothing" v-if = "!list.length">没有记录</div>
        <div class="clock_record_item" v-else-if = "list.length > 0" v-for = "(item, index) in list">
            <div class="clock_record_name"><i>{{index + 1}}</i>{{ item.date }}</div>
            <div class="clock_record_desc">计时开始 {{ item.gotowork }}</div>
            <div class="clock_record_desc">计时结束 {{ item.gooffwork }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            list () {
                return this.$store.getters.switchTime
            }
        }
    }
</script>

<style>
.clock_record {
    border: 1px solid #ccc;
    margin: 10px 0 0 10px;
    padding: 0 5px;
    min-height: 82px;
    &_nothing {
        text-align: center;
        color: #ccc;
        line-height: 82px;
    }

    &_item {
        &:not(:last-child) {
            border-bottom: 1px solid #ddd;
        }
    }

    &_name {
        font-size: 16px;
        color: #333;
        height: 30px;
        line-height: 30px;
        i {
            display: inline-block;
            vertical-align: middle;
            margin-top: -3px;
            margin-right: 5px;
            width: 12px;
            height: 12px;
            line-height: 12px;
            background: #999;
            color: #fff;
            font-size: 10px;
            text-align: center;
            border-radius: 20px;
        }
    }

    &_desc {
        color: #999;
    }
}
</style>