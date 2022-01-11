<template>
  <div style="margin: 40px;display: flex">
    <div style="margin: 40px;">
      <div style="max-width: 500px;">
        <input type="text" @paste="handleImagePaste($event)" placeholder="粘贴图片到此处" autofocus style="width: 438px; margin:20px; padding: 10px">
        <div style="display: flex;justify-content: center;">
          <div style="position: relative">
            <div v-if="!srcImageUrl" style="border: #DDDDDD 3px dashed;height: 200px;width: 260px;">
              <div style="text-align: center;height: 100%;width: 100%;display: flex;flex-direction: column; justify-content: center">
                <span style="font-size: 40px;color: #DDDDDD;">+</span>
                <span style="font-size: 14px;text-align: center;color: #AAAAAA;">拖拽图片到此处，或点击此处上传</span>
              </div>
            </div>
            <div v-else>
              <img :src="srcImageUrl" :alt="srcImageName" srcset="" style="max-width: 460px;max-height: 260px;">
            </div>
            <input type="file" accept="image/*" @change="handleImageUpload($event)" style="opacity: 0;position: absolute;top: 0;left: 0;width: 100%;height: 100%">
          </div>
        </div>
      </div>
      <el-button :loading="loading" type="primary" @click="textRecognition" style="margin: 20px;width: 460px">文本识别</el-button>
      <div style="margin: 20px;width: 460px">
        <el-tabs v-model="activeName" @tab-click="handleTabSwitch">
          <el-tab-pane label="百度云" name="baidu">
            <baidu-ocr ref="baidu-ocr" @fill-ocr-result="data => {this.ocrResult = data}" />
          </el-tab-pane>
          <el-tab-pane label="腾讯云" name="tencent">
            <tencent-ocr ref="tencent-ocr" @fill-ocr-result="data => {this.ocrResult = data}" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div style="margin: 40px;flex: 1">
      <el-input
          type="textarea"
          :autosize="{ minRows: 30}"
          placeholder="识别结果..."
          :readonly="true"
          v-model="ocrResult">
      </el-input>
    </div>
  </div>
</template>

<script>
import BaiduOcr from "@/components/BaiduOcr";
import TencentOcr from "@/components/TencentOcr";

export default {
  name: "Ocr",
  components: {TencentOcr, BaiduOcr},
  data() {
    return {
      srcImageFile: null,
      srcImageUrl: null,
      srcImageName: null,
      srcImageCanvas: null,
      activeName: "baidu",
      ocrResult: '',
      loading: false,
    };
  },
  created() {
    let activeName = localStorage.getItem('ocr-cloud-type')
    if (activeName) {
      this.activeName = activeName
    }
  },
  methods: {
    textRecognition() {
      if (!this.srcImageUrl) {
        this.$message.error("请先选择图片")
        return
      }
      this.loading = true
      this.$nextTick(() => {
        if (this.activeName === 'baidu') {
          this.$refs["baidu-ocr"].ocr(this.srcImageCanvas).finally(() => {this.loading = false})
        } else if (this.activeName === 'tencent') {
          this.$refs["tencent-ocr"].ocr(this.srcImageCanvas).finally(() => {this.loading = false})
        }
      })
    },
    handleTabSwitch() {
      localStorage.setItem('ocr-cloud-type', this.activeName)
    },
    handleImagePaste(event) {
      if (!event.clipboardData && !event.originalEvent) {
        return
      }
      let clipboardData = event.clipboardData || event.originalEvent.clipboardData;
      if (clipboardData.items) {
        let items = clipboardData.items,
            len = items.length,
            file = null;
        for (let i = 0; i < len; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            file = items[i].getAsFile();
            this.handleImage(file)
          }
        }
      }
    },
    handleImageUpload(event) {
      if (!event.target.files[0]) {
        return
      }
      this.handleImage(event.target.files[0]);
    },
    handleImage(image) {
      this.srcImageFile = image;
      this.srcImageUrl = this.getFileUrl(this.srcImageFile)
      this.srcImageName = this.srcImageFile.name
      this.getCanvas(this.srcImageUrl).then(canvas => {
        this.srcImageCanvas = canvas
        this.textRecognition();
      })
    },
    getFileUrl(file) {
      let url = null;
      if (window.URL !== undefined) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL !== undefined) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url
    },
    getCanvas(imageUrl) {
      return new Promise((resolve) => {
        let image = new Image();
        image.src = imageUrl;
        image.onload = () => {
          let canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;

          let ctx = canvas.getContext("2d");
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0, image.width, image.height);
          resolve(canvas)
        }
      })
    }
  },
}
</script>

<style scoped>
</style>