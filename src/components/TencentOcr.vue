<template>
  <div>
    <el-form :model="form" label-width="140px">
      <el-form-item label="识别类型">
        <el-radio-group v-model="form.type">
          <el-radio label="GeneralBasicOCR">标准</el-radio>
          <el-radio label="GeneralAccurateOCR">高精度</el-radio>
        </el-radio-group>
      </el-form-item>
            <el-form-item label="SecretId">
              <el-input v-model="form.SECRET_ID"/>
            </el-form-item>
            <el-form-item label="SecretKey">
              <el-input v-model="form.SECRET_KEY" type="password" show-password/>
            </el-form-item>
      <el-form-item label="保存账户信息（在当前浏览器）" label-width="280px">
        <el-switch v-model="form.save" @change="saveChange()"></el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import crypto from "crypto";
import {ocr} from "@/services/tencent";

export default {
  name: "TencentOcr",
  data() {
    return {
      form: {
        type: 'GeneralBasicOCR',
        SECRET_ID: '',
        SECRET_KEY: '',
        save: false,
      }
    }
  },
  created() {
    let save = localStorage.getItem('ocr-tencent-info-save')
    if (save === "true") {
      this.form.save = true
      this.form.type = localStorage.getItem('ocr-tencent-type')
      this.form.SECRET_ID = localStorage.getItem('ocr-tencent-SECRET_ID')
      this.form.SECRET_KEY = localStorage.getItem('ocr-tencent-SECRET_KEY')
    }
  },
  methods: {
    ocr(imageCanvas) {
      if (!this.form.SECRET_ID || !this.form.SECRET_KEY) {
        this.$message.error('请填写 SECRET_ID 和 SECRET_KEY')
        return
      }

      let payload = {
        Action: this.form.type,
        Version: "2018-11-19",
        Region: 'ap-beijing',
        ImageBase64: imageCanvas.toDataURL("image/jpeg", 1),
      }
      let payloadStr = JSON.stringify(payload)
      return ocr(this.sign(payload, payloadStr), payloadStr).then(response => {
        let data = response.data;
        if (data.Response.Error) {
          this.$message.error(data.Response.Error.Code + '\n' + data.Response.Error.Message)
          return
        }
        let text = ''
        for (let i = 0; i < data.Response.TextDetections.length; i++) {
          let textDetections = data.Response.TextDetections[i]
          for (let j = 0; j < textDetections.Words.length; j++) {
            text += textDetections.Words[j].Character + '\n'
          }
        }
        this.$emit('fill-ocr-result', text)
      }).catch(error => {
        this.$message.error(error)
      })
    },
    sign(payload, payloadStr) {
      // 密钥参数
      const SECRET_ID = this.form.SECRET_ID
      const SECRET_KEY = this.form.SECRET_KEY

      const endpoint = "ocr.tencentcloudapi.com"
      const service = "ocr"
      const region = payload.Region
      const action = payload.Action
      const version = payload.Version
      const timestamp = Date.parse(new Date()) / 1000
      // const timestamp = 1551113065
      //时间处理, 获取世界时间日期
      const date = this.getDate(timestamp)

      // ************* 步骤 1：拼接规范请求串 *************
      const signedHeaders = "content-type;host"

      // const payload = "{\"Limit\": 1, \"Filters\": [{\"Values\": [\"\\u672a\\u547d\\u540d\"], \"Name\": \"instance-name\"}]}"

      const hashedRequestPayload = this.getHash(payloadStr);
      const httpRequestMethod = "POST"
      const canonicalUri = "/"
      const canonicalQueryString = ""
      const canonicalHeaders = "content-type:application/json\n" + "host:" + endpoint + "\n"

      const canonicalRequest = httpRequestMethod + "\n"
          + canonicalUri + "\n"
          + canonicalQueryString + "\n"
          + canonicalHeaders + "\n"
          + signedHeaders + "\n"
          + hashedRequestPayload
      console.log(canonicalRequest)

      // ************* 步骤 2：拼接待签名字符串 *************
      const algorithm = "TC3-HMAC-SHA256"
      const hashedCanonicalRequest = this.getHash(canonicalRequest);
      const credentialScope = date + "/" + service + "/" + "tc3_request"
      const stringToSign = algorithm + "\n" +
          timestamp + "\n" +
          credentialScope + "\n" +
          hashedCanonicalRequest
      console.log(stringToSign)

      // ************* 步骤 3：计算签名 *************
      const kDate = this.sha256(date, 'TC3' + SECRET_KEY)
      const kService = this.sha256(service, kDate)
      const kSigning = this.sha256('tc3_request', kService)
      const signature = this.sha256(stringToSign, kSigning, 'hex')
      console.log(signature)

      // ************* 步骤 4：拼接 Authorization *************
      const authorization = algorithm + " " +
          "Credential=" + SECRET_ID + "/" + credentialScope + ", " +
          "SignedHeaders=" + signedHeaders + ", " +
          "Signature=" + signature
      console.log(authorization)

      // const curlcmd = 'curl -X POST ' + "https://" + endpoint
      //     + ' -H "Authorization: ' + authorization + '"'
      //     + ' -H "Content-Type: application/json; charset=utf-8"'
      //     + ' -H "Host: ' + endpoint + '"'
      //     + ' -H "X-TC-Action: ' + action + '"'
      //     + ' -H "X-TC-Timestamp: ' + timestamp.toString() + '"'
      //     + ' -H "X-TC-Version: ' + version + '"'
      //     + ' -H "X-TC-Region: ' + region + '"'
      //     + " -d '" + payload + "'"
      // console.log(curlcmd)
      return {
        "Authorization": authorization,
        "Content-Type": "application/json",
        "Host": endpoint,
        "X-TC-Action": action,
        "X-TC-Timestamp": timestamp.toString(),
        "X-TC-Version": version,
        "X-TC-Region": region,
      }
    },
    sha256(message, secret = '', encoding) {
      const hmac = crypto.createHmac('sha256', secret)
      return hmac.update(message).digest(encoding)
    },
    getHash(message, encoding = 'hex') {
      const hash = crypto.createHash('sha256')
      return hash.update(message).digest(encoding)
    },
    getDate(timestamp) {
      const date = new Date(timestamp * 1000)
      const year = date.getUTCFullYear()
      const month = ('0' + (date.getUTCMonth() + 1)).slice(-2)
      const day = ('0' + date.getUTCDate()).slice(-2)
      return `${year}-${month}-${day}`
    },
    saveChange() {
      if (this.form.save) {
        localStorage.setItem('ocr-tencent-info-save', "true")
        localStorage.setItem('ocr-tencent-type', this.form.type)
        localStorage.setItem('ocr-tencent-SECRET_ID', this.form.SECRET_ID)
        localStorage.setItem('ocr-tencent-SECRET_KEY', this.form.SECRET_KEY)
      } else {
        localStorage.setItem('ocr-tencent-info-save', "false")
        localStorage.removeItem('ocr-tencent-type')
        localStorage.removeItem('ocr-tencent-SECRET_ID')
        localStorage.removeItem('ocr-tencent-SECRET_KEY')
      }
    },
  },
  watch: {
    'form.SECRET_ID'() {
      this.saveChange(this.form.save)
    },
    'form.SECRET_KEY'() {
      this.saveChange(this.form.save)
    },
    'form.type'() {
      this.saveChange(this.form.save)
    },
  }
}
</script>

<style scoped>

</style>