import $ from 'jquery'
import router from './httpRouter/router'
const http = {
    /**
     * 请求接口
     * @param action
     * @param data
     * @param callback
     */
    ajax(action, data, callback) {
        let that=this;
        if(!that.checkAction(action)){
            console.log("没找到这个action:"+action);
            return
        }
        $.ajax({
            url: router[action].url,
            type: router[action].method,
            data: data,
            success: function (data) {
                callback(data);
            }
        })
    },
    /**
     * 上传文件
     * @param action
     * @param formData
     * @param callback
     */
    fileUpload(action,formData,callback){
        let that=this;
        if(!that.checkAction(action)){
            console.log("没找到这个action:"+action);
            return
        }
        $.ajax({
            url: router[action].url,
            type: router[action].method,
            data: data,
            contentType: false,
            processData: false,
            success: function (data) {
                callback(data);
            }
        })
    },
    checkAction(action){
        return typeof router[action]!="undefined"?true:false
    }
};
export default http