export default {
   getStatus:state => state.status,
   getDuration:state => state.duration,
   switchTime:state => {
        //转换前
        let date = '',
            toTime = '',
            offTime = '',
            list = []
        //转换后
        let switchDate = '',
            switchToTime = '',
            switchOffTime = ''

        state.clockList.forEach(function (v, i) {
            switchDate = v.gotowork.getFullYear() + '年' + ( v.gotowork.getMonth() + 1 ) + '月' + v.gotowork.getDate()
            switchToTime = v.gotowork.getHours() + ':' + v.gotowork.getMinutes() + ':' + v.gotowork.getSeconds()
            if(v.gooffwork !== '') {
                switchOffTime = v.gooffwork.getHours() + ':' + v.gooffwork.getMinutes() + ':' + v.gooffwork.getSeconds()
            }else {
                switchOffTime = ''
            }
            list.push({'date': switchDate, 'gotowork': switchToTime, 'gooffwork': switchOffTime})
        })

        return list
   }
}