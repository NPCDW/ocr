import axios from 'axios'

export function getAccessToken(client_id, client_secret) {
    return axios.get('https://aip.baidubce.com/oauth/2.0/token', {
        params: {
            client_id,
            client_secret,
            grant_type: 'client_credentials',
        }
    })
}

export function ocr(access_token, type, image) {
    return axios.post('https://aip.baidubce.com/rest/2.0/ocr/v1/' + type, "image="+encodeURIComponent(image),{
        params: {
            access_token,
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
}
