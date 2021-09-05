import request from '@/utils/request'

const api_name = `/api/user`

export default {
    // 用户手机登录模块
    login(userInfo) {
        return request({
            url: `${api_name}/login`,
            method: `post`,
            data: userInfo
        })
    },

    // 用户认证,请求参数不需要填写
    saveUserAuth(userAuth) {
        return request({
            url: `${api_name}/auth/userAuth`,
            method: 'post',
            data: userAuth
        })
    },

    // 根据userId查询用户信息
    getUserInfo(){
        return request({
            url: `${api_name}/auth/getUserInfo`,
            method: 'get'
        })
    }
}
