import request from '@/utils/request'

// 定义常量保存固定值
const api_name = `/admin/cmn/dict`

export default {

    // 1.获取医院的列表信息
    findByDictCode(dictCode) {
        return request({
            url: `${api_name}/findByDictCode/${dictCode}`,
            method: 'get'
        })
    },

    // 2.根据id获取下级节点
    findByParentId(id) {
        return request({
            url: `${api_name}/findChildData/${id}`,
            method: 'get'
        })
    }
}



