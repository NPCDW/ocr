# ocr 文本识别

此项目对接的是腾讯云和百度云的接口，但无法对外开放，原因有两个：
1. 必须提供秘钥。需要让用户去注册腾讯云、百度云，然后再实名认证，再去领取免费资源，再去开通秘钥，写个教程的人都嫌麻烦
2. 必须先走网站提供者的服务器。因为跨域的问题，无法直达目标服务器，必须绕路，我无法向你承诺，不会保存你的秘钥信息

如果你充分信任我，可以去试一下：[https://0520.site/ocr/](https://0520.site/ocr/)

Q：为什么不对接一个不需要服务端就可以文本识别的工具？

A：其实我一开始就是想做这样的，也找过两个项目，一个是 [tesseract.js](https://github.com/naptha/tesseract.js) ，
一个是 [ocrad.js](https://github.com/antimatter15/ocrad.js) ， `ocrad.js` 不支持中文识别，直接就被pass掉了，
`tesseract.js` 支持很多种语言，但是他的语言包太大了，中英文加起来有 30M 还多，如果用户只有 500KB/s 的网速，打开网页
初次加载需要 60s，没人愿意等这么长时间的，如果用 `Electron` 做成软件，又违背了易用性的初衷

Q：为什么不自己搭一个文本识别的服务端版本提供接口，比如 `PaddleOCR` ？

A：自己搭的没有任何优势，论隐私的话、速度、性能、识别准确率，肯定是被完全碾压，论价格，百度云提供通用 `5万次/天` ，
高精度 `500次/天` ，手写 `50次/天` 的调用次数，腾讯云提供通用 `1000次/月` ，高精度 `1000次/月` ，手写`1000次/月` 的
调用次数，个人用户使用足够了

服务端 nginx 配置
```nginx

    location /baiduCloud/ {
        proxy_pass https://aip.baidubce.com/;
        proxy_set_header Host aip.baidubce.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /tencentCloudOcr/ {
        proxy_pass https://ocr.tencentcloudapi.com/;
        proxy_set_header Host ocr.tencentcloudapi.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

```
