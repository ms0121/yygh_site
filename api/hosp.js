import request from '@/utils/request'

// 定义常量保存固定值
const api_name = `/api/hosp/hospital`

export default {

    // 1.获取医院的列表信息
    getHospList(page, limit, searchObj) {
        return request({
            url: `${api_name}/findHospList/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },

    // 2.模糊查询医院的信息
    getByHosname(hosname) {
        return request({
            url: `${api_name}/findByHosName/${hosname}`,
            method: 'get'
        })
    },

    // 3.根据医院编号获取科室列表
    findDepartment(hoscode) {
        return request({
            url: `${api_name}/department/${hoscode}`,
            method: 'get'
        })
    },

    // 4.根据医院编号获取医院详情
    show(hoscode) {
        return request({
            url: `${api_name}/findHospDetail/${hoscode}`,
            method: 'get'
        })
    },

    // 获取预约规则列表信息
    getBookingScheduleRule(page, limit, hoscode, depcode){
        return request({
            url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
            method:'get'
        })
    },

    // 获取排班数据数据信息
    findScheduleList(hoscode, depcode, workDate){
        return request({
            url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
            method: 'get'
        })
    },

    // 获取排班数据数据信息
    getSchedule(scheduleId){
        return request({
            url: `${api_name}/getSchedule/${scheduleId}`,
            method: 'get'
        })
    },
}



