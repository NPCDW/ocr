import axios from 'axios'

export function ocr(headers, payloadStr) {
    return axios.post('/tencentCloud/', payloadStr,{headers})
}
