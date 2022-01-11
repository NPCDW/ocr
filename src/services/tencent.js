import axios from 'axios'

export function ocr(headers, payload) {
    return axios.post('https://ocr.tencentcloudapi.com', payload,{headers})
}
