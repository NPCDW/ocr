import axios from 'axios'

const proxyBasePath = '/baiduCloud/'

export function getAccessToken(client_id, client_secret) {
    return axios.post(proxyBasePath + 'oauth/2.0/token', "grant_type=client_credentials&client_id=" + client_id + "&client_secret=" + client_secret, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
}

export function ocr(access_token, type, image) {
    return axios.post('https://aip.baidubce.com/rest/2.0/ocr/v1/' + type, "image=" + encodeURIComponent(image), {
        params: {
            access_token,
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
}
