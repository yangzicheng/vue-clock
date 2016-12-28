import * as types from './mutation-types'

export default {
    changeStatus({ commit }) {
        commit(types.CHANGE_STATUS)
    },
    addDuration(context) {
        let num = 1, obj = {}

        if(context.state.status === '已计时') {
            obj.timer = setInterval(() => {
                let h = parseInt(num / 3600),
                    m = parseInt(num / 60),
                    s = num

                    if(s >= 60) {
                        s = s % 60
                    }

                    if(m >= 60) {
                        m = m % 60
                    }

                obj.time = h + '时' + m + '分' + s + '秒'
                context.commit(types.ADD_DURATION, obj)
                num ++
            }, 1000)
        }else {
            context.commit(types.ADD_DURATION, obj)
        }
    },
    saveClockList({ commit }, nowTime) {
        commit(types.SAVE_CLOCK_LIST, nowTime)
    }
}