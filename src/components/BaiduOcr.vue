<template>
  <div>
    <el-form :model="form" label-width="140px">
      <el-form-item label="识别类型">
        <el-radio-group v-model="form.type">
          <el-radio label="general_basic">标准</el-radio>
          <el-radio label="accurate_basic">高精度</el-radio>
          <el-radio label="handwriting">手写体</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="access_token">
        <el-input v-model="form.access_token" type="password" show-password placeholder="选填，与下方两个输入框二选一"/>
      </el-form-item>
      <el-form-item label="API Key">
        <el-input v-model="form.client_id"/>
      </el-form-item>
      <el-form-item label="Secret Key">
        <el-input v-model="form.client_secret" type="password" show-password/>
      </el-form-item>
      <el-form-item label="保存账户信息（在当前浏览器）" label-width="280px">
        <el-switch v-model="form.save" @change="saveChange()"></el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getAccessToken, ocr} from '@/services/baidu'

export default {
  name: "BaiduOcr",
  data() {
    return {
      form: {
        type: 'general_basic',
        access_token: '',
        client_id: '',
        client_secret: '',
        save: false,
      }
    }
  },
  created() {
    let save = localStorage.getItem('ocr-baidu-info-save')
    if (save === "true") {
      this.form.save = true
      this.form.type = localStorage.getItem('ocr-baidu-type')
      this.form.access_token = localStorage.getItem('ocr-baidu-access_token')
      this.form.client_id = localStorage.getItem('ocr-baidu-client_id')
      this.form.client_secret = localStorage.getItem('ocr-baidu-client_secret')
    }
  },
  methods: {
    async ocr(imageCanvas) {
      if (!this.form.access_token) {
        if (!this.form.client_id || !this.form.client_secret) {
          this.$message.error('请填写 access_token，或 APIKey 和 SecretKey')
          return
        }
        await getAccessToken(this.form.client_id, this.form.client_secret).then(result => {
          let data = result.data;
          this.form.access_token = data.access_token
        })
      }

      let expire = this.form.access_token.substring(0, this.form.access_token.lastIndexOf('.'))
      expire = expire.substr(expire.lastIndexOf('.') + 1)
      let currentTime = Date.parse(new Date()) / 1000
      if (currentTime + "" > expire) {
        this.$message.error('access_token 已过期，请更换')
      } else if (parseInt(expire) - currentTime < 5 * 24 * 60 * 60) {
        this.$message.warning('access_token 即将过期，请及时更换')
      }

      return ocr(this.form.access_token, this.form.type, imageCanvas.toDataURL("image/jpeg", 1)).then(result => {
        let data = result.data;
        if (data.error) {
          this.$message.error(data.error_description)
          return
        }
        let text = ''
        for (let i = 0; i < data.words_result.length; i++) {
          text += data.words_result[i].words + '\n'
        }
        this.$emit('fill-ocr-result', text)
      }).catch(error => {
        this.$message.error(error)
      })
    },
    saveChange() {
      if (this.form.save) {
        localStorage.setItem('ocr-baidu-info-save', "true")
        localStorage.setItem('ocr-baidu-type', this.form.type)
        localStorage.setItem('ocr-baidu-access_token', this.form.access_token)
        localStorage.setItem('ocr-baidu-client_id', this.form.client_id)
        localStorage.setItem('ocr-baidu-client_secret', this.form.client_secret)
      } else {
        localStorage.setItem('ocr-baidu-info-save', "false")
        localStorage.removeItem('ocr-baidu-type')
        localStorage.removeItem('ocr-baidu-access_token')
        localStorage.removeItem('ocr-baidu-client_id')
        localStorage.removeItem('ocr-baidu-client_secret')
      }
    },
  },
  watch: {
    'form.access_token'() {
      this.saveChange(this.form.save)
    },
    'form.client_id'() {
      this.saveChange(this.form.save)
    },
    'form.client_secret'() {
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