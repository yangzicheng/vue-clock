<template>
    <div class="clock_time">
        <!-- <div class="clock_time_inner" v-html = "time"> -->
        <div class="clock_time_inner">
            <i>{{hour}}</i>
            <span>:</span>
            <i>{{minute}}</i>
            <span>:</span>
            <i>{{second}}</i>
        </div>
        <div class="clock_time_btn">
            <span @click = 'doClock' v-bind:id="clockId">开始计时</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //time: '',
                hour: '',
                minute: '',
                second: '',
                clockId: 'clock_time'
            }
        },
        mounted () {
            this.nowTime()
        },
        methods: {
            nowTime () {
                const t = new Date(),
                    h = t.getHours(),
                    m = t.getMinutes(),
                    s = t.getSeconds()
                //this.$data.time =  '<i>' + h +'</i><span>:</span><i>' + m +'</i><span>:</span><i>' + s + '</i>'
                this.$data.hour = h
                this.$data.minute = m
                this.$data.second = s

                setTimeout(() => {
                    this.nowTime()
                }, 1000)
            },
            doClock () {
                const nowTime = new Date()

                //状态
                this.$store.dispatch('changeStatus')
                //时长
                this.$store.dispatch('addDuration')
                //计时列表
                this.$store.dispatch('saveClockList', nowTime)
            }
        }
    }
</script>

<style>
@import '../static/sass/_function.scss';
.clock_time {
    font-size: 0;
    margin-left: 10px;
    margin-top: 10px;
    border: 1px solid #ddd;
    &_inner {
        text-align: center;
        padding: 15px 0;
        i {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            width: 40px;
            text-align: center;
            border: 1px solid #ddd;
            background: #f0f0f0;
            color: #666;
            font-size: 18px;
        }

        span {
            font-size: 16px;
            font-weight: 700;
            width: 20px;
            text-align: center;
            display: inline-block;
        }
    }

    &_btn {
        height: 30px;
        background: #f0f0f0;
        border-top: 1px solid #ddd;
        position: relative;
        span {
            position: absolute;
            top: 5px;
            font-size: 14px;
            color: #fff;
            border-radius: 3px;
            text-align: center;
            height: 20px;
            line-height: 20px;
            &:nth-child(1) {
                right: 10px;
                width: 90px;
                background: $color_red;
            }
        }
    }
    
}
</style>