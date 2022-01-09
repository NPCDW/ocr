<template>
  <div>
    <el-form :model="form" label-width="140px">
      <el-form-item label="识别类型">
        <el-radio-group v-model="form.type">
          <el-radio label="general_basic">标准</el-radio>
          <el-radio label="accurate_basic">高精度</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="access_token">
        <el-input v-model="form.access_token" type="password" placeholder="选填，与下方两个输入框二选一"/>
      </el-form-item>
      <el-form-item label="API Key">
        <el-input v-model="form.client_id"/>
      </el-form-item>
      <el-form-item label="Secret Key">
        <el-input v-model="form.client_secret" type="password"/>
      </el-form-item>
      <el-form-item label="保存信息（在当前浏览器）" label-width="280px">
        <el-switch v-model="form.save"></el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
}
</script>

<style scoped>

</style>