import request from '@/utils/request'

const api_name = `/api/order/orderInfo`

export default {
    // 生成订单
    saveOrders(scheduleId, patientId) {
        return request({
            url: `${api_name}/auth/submitOrder/${scheduleId}/${patientId}`,
            method: `post`
        })
    },


    // 根据订单查询订单详情信息
    getOrders(orderId){
        return request({
            url: `${api_name}/auth/getOrders/${orderId}`,
            method: 'get'
        })
    },

    // 查询当前登录用户的所有的订单信息
    getPageList(page, limit, searchObj){
        return request({
            url: `${api_name}/auth/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },

    //订单状态
    getStatusList() {
        return request({
            url: `${api_name}/auth/getStatusList`,
            method: 'get'
        }) 
    },

    // 取消预约的订单信息
    cancleOrder(orderId){
        return request({
            url:`${api_name}/auth/cancleOrder/${orderId}`,
            method:"get"
        })
    }
}
