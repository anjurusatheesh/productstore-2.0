import axios from "axios";

const baseUrl = "http://192.168.190.128:8080/api/v3"


var postConfig = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    }
}

var getConfig = {
    method: 'get',
    headers: {}
};




export const save = (url, data) => {
    return axios({ ...postConfig, url: baseUrl + url, data: data })
}

export const salesget = (url) => {
    return axios({ ...getConfig, url: baseUrl + url })
}
