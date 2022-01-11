import axios from 'axios'

const proxyBasePath = '/tencentCloudOcr/'

export function ocr(headers, payloadStr) {
    return axios.post(proxyBasePath, payloadStr,{headers})
}
