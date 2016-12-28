import * as types from './mutation-types'

export default {
    [ types.CHANGE_STATUS ] ( state) {
        if( state.status === '已结束' ) {
            state.status = '已计时'
        }else if(state.status === '已计时') {
            state.status = '已结束'
        } 
    },
    [ types.ADD_DURATION ] ( state, obj ) {
           if( state.status === '已计时' ) {
                state.duration = obj.time
                state.timer = obj.timer
           }else {
                clearInterval(obj.timer)
           }
           
    },
    [ types.SAVE_CLOCK_LIST] (state, nowTime) {
        if( state.status === '已计时' ) {
            console.log(state.clockList.length)
            state.len = state.clockList.length
            state.clockList.push({"gotowork": nowTime, 'gooffwork': ''})
        }

        if( state.status === '已结束' ) {
            state.clockList[state.len].gooffwork = nowTime
        }
    } 
}