(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],f=0,m=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={index:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("8bbf"),n=a.n(r),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticStyle:{color:"white","background-color":"#F56C6C","text-align":"center","font-size":"12px",padding:"5px 0 5px 0",position:"absolute",top:"0",width:"100%"}},[e._v("内部人员专用，请勿输入任何账号秘钥等信息")]),a("ocr"),a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/NPCDW/ocr","aria-label":"View source on GitHub"}},[a("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])],1)},i=[],c=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticStyle:{margin:"40px",display:"flex"}},[r("div",{staticStyle:{margin:"40px"}},[r("div",{staticStyle:{"max-width":"500px"}},[r("input",{staticStyle:{width:"438px",margin:"20px",padding:"10px"},attrs:{type:"text",placeholder:"粘贴图片到此处",autofocus:""},on:{paste:function(e){return t.handleImagePaste(e)}}}),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("div",{staticStyle:{position:"relative"}},[t.srcImageUrl?r("div",[r("img",{staticStyle:{"max-width":"460px","max-height":"260px"},attrs:{src:t.srcImageUrl,alt:t.srcImageName,srcset:""}})]):r("div",{staticStyle:{border:"#DDDDDD 3px dashed",height:"200px",width:"260px"}},[t._m(0)]),r("input",{staticStyle:{opacity:"0",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.handleImageUpload(e)}}})])])]),r("el-button",{staticStyle:{margin:"20px",width:"460px"},attrs:{loading:t.loading,type:"primary"},on:{click:t.textRecognition}},[t._v("文本识别")]),r("div",{staticStyle:{margin:"20px",width:"460px"}},[r("el-tabs",{on:{"tab-click":t.handleTabSwitch},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"百度云",name:"baidu"}},[r("baidu-ocr",{ref:"baidu-ocr",on:{"fill-ocr-result":function(t){e.ocrResult=t}}})],1),r("el-tab-pane",{attrs:{label:"腾讯云",name:"tencent"}},[r("tencent-ocr",{ref:"tencent-ocr",on:{"fill-ocr-result":function(t){e.ocrResult=t}}})],1)],1)],1)],1),r("div",{staticStyle:{margin:"40px",flex:"1"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:30},placeholder:"识别结果...",readonly:!0},model:{value:t.ocrResult,callback:function(e){t.ocrResult=e},expression:"ocrResult"}})],1)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"text-align":"center",height:"100%",width:"100%",display:"flex","flex-direction":"column","justify-content":"center"}},[a("span",{staticStyle:{"font-size":"40px",color:"#DDDDDD"}},[e._v("+")]),a("span",{staticStyle:{"font-size":"14px","text-align":"center",color:"#AAAAAA"}},[e._v("拖拽图片到此处，或点击此处上传")])])}],l=(a("d3b7"),a("b0c0"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{attrs:{model:e.form,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"识别类型"}},[a("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-radio",{attrs:{label:"general_basic"}},[e._v("标准")]),a("el-radio",{attrs:{label:"accurate_basic"}},[e._v("高精度")])],1)],1),a("el-form-item",{attrs:{label:"access_token"}},[a("el-input",{attrs:{type:"password","show-password":"",placeholder:"选填，与下方两个输入框二选一"},model:{value:e.form.access_token,callback:function(t){e.$set(e.form,"access_token",t)},expression:"form.access_token"}})],1),a("el-form-item",{attrs:{label:"API Key"}},[a("el-input",{model:{value:e.form.client_id,callback:function(t){e.$set(e.form,"client_id",t)},expression:"form.client_id"}})],1),a("el-form-item",{attrs:{label:"Secret Key"}},[a("el-input",{attrs:{type:"password","show-password":""},model:{value:e.form.client_secret,callback:function(t){e.$set(e.form,"client_secret",t)},expression:"form.client_secret"}})],1),a("el-form-item",{attrs:{label:"保存账户信息（在当前浏览器）","label-width":"280px"}},[a("el-switch",{on:{change:function(t){return e.saveChange()}},model:{value:e.form.save,callback:function(t){e.$set(e.form,"save",t)},expression:"form.save"}})],1)],1)],1)}),u=[],f=a("1da1"),m=(a("96cf"),a("cebe")),d=a.n(m),h="/baiduCloud/";function p(e,t){return d.a.get(h+"oauth/2.0/token",{params:{client_id:e,client_secret:t,grant_type:"client_credentials"}})}function g(e,t,a){return d.a.post("https://aip.baidubce.com/rest/2.0/ocr/v1/"+t,"image="+encodeURIComponent(a),{params:{access_token:e},headers:{"Content-Type":"application/x-www-form-urlencoded"}})}var v={name:"BaiduOcr",data:function(){return{form:{type:"general_basic",access_token:"",client_id:"",client_secret:"",save:!1}}},created:function(){var e=localStorage.getItem("ocr-baidu-info-save");"true"===e&&(this.form.save=!0,this.form.type=localStorage.getItem("ocr-baidu-type"),this.form.access_token=localStorage.getItem("ocr-baidu-access_token"),this.form.client_id=localStorage.getItem("ocr-baidu-client_id"),this.form.client_secret=localStorage.getItem("ocr-baidu-client_secret"))},methods:{ocr:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.form.access_token){a.next=6;break}if(t.form.client_id&&t.form.client_secret){a.next=4;break}return t.$message.error("请填写 access_token，或 APIKey 和 SecretKey"),a.abrupt("return");case 4:return a.next=6,p(t.form.client_id,t.form.client_secret).then((function(e){var a=e.data;t.form.access_token=a.access_token}));case 6:return r=t.form.access_token.substring(0,t.form.access_token.lastIndexOf(".")),r=r.substr(r.lastIndexOf(".")+1),n=Date.parse(new Date)/1e3,n+"">r?t.$message.error("access_token 已过期，请更换"):parseInt(r)-n<432e3&&t.$message.warning("access_token 即将过期，请及时更换"),a.abrupt("return",g(t.form.access_token,t.form.type,e.toDataURL("image/jpeg",1)).then((function(e){var a=e.data;if(a.error)t.$message.error(a.error_description);else{for(var r="",n=0;n<a.words_result.length;n++)r+=a.words_result[n].words+"\n";t.$emit("fill-ocr-result",r)}})).catch((function(e){t.$message.error(e)})));case 11:case"end":return a.stop()}}),a)})))()},saveChange:function(){this.form.save?(localStorage.setItem("ocr-baidu-info-save","true"),localStorage.setItem("ocr-baidu-type",this.form.type),localStorage.setItem("ocr-baidu-access_token",this.form.access_token),localStorage.setItem("ocr-baidu-client_id",this.form.client_id),localStorage.setItem("ocr-baidu-client_secret",this.form.client_secret)):(localStorage.setItem("ocr-baidu-info-save","false"),localStorage.removeItem("ocr-baidu-type"),localStorage.removeItem("ocr-baidu-access_token"),localStorage.removeItem("ocr-baidu-client_id"),localStorage.removeItem("ocr-baidu-client_secret"))}},watch:{"form.access_token":function(){this.saveChange(this.form.save)},"form.client_id":function(){this.saveChange(this.form.save)},"form.client_secret":function(){this.saveChange(this.form.save)},"form.type":function(){this.saveChange(this.form.save)}}},b=v,_=a("2877"),C=Object(_["a"])(b,l,u,!1,null,"4915e132",null),S=C.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{attrs:{model:e.form,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"识别类型"}},[a("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-radio",{attrs:{label:"GeneralBasicOCR"}},[e._v("标准")]),a("el-radio",{attrs:{label:"GeneralAccurateOCR"}},[e._v("高精度")])],1)],1),a("el-form-item",{attrs:{label:"SecretId"}},[a("el-input",{model:{value:e.form.SECRET_ID,callback:function(t){e.$set(e.form,"SECRET_ID",t)},expression:"form.SECRET_ID"}})],1),a("el-form-item",{attrs:{label:"SecretKey"}},[a("el-input",{attrs:{type:"password","show-password":""},model:{value:e.form.SECRET_KEY,callback:function(t){e.$set(e.form,"SECRET_KEY",t)},expression:"form.SECRET_KEY"}})],1),a("el-form-item",{attrs:{label:"保存账户信息（在当前浏览器）","label-width":"280px"}},[a("el-switch",{on:{change:function(t){return e.saveChange()}},model:{value:e.form.save,callback:function(t){e.$set(e.form,"save",t)},expression:"form.save"}})],1)],1)],1)},x=[],E=(a("e9c4"),a("25f0"),a("fb6a"),a("99af"),a("1c46")),I=a.n(E),w="/tencentCloudOcr/";function R(e,t){return d.a.post(w,t,{headers:e})}var T={name:"TencentOcr",data:function(){return{form:{type:"GeneralBasicOCR",SECRET_ID:"",SECRET_KEY:"",save:!1}}},created:function(){var e=localStorage.getItem("ocr-tencent-info-save");"true"===e&&(this.form.save=!0,this.form.type=localStorage.getItem("ocr-tencent-type"),this.form.SECRET_ID=localStorage.getItem("ocr-tencent-SECRET_ID"),this.form.SECRET_KEY=localStorage.getItem("ocr-tencent-SECRET_KEY"))},methods:{ocr:function(e){var t=this;if(this.form.SECRET_ID&&this.form.SECRET_KEY){var a=JSON.stringify({ImageBase64:e.toDataURL("image/jpeg",1)});return R(this.sign(a),a).then((function(e){var a=e.data;if(a.Response.Error)t.$message.error(a.Response.Error.Code+"\n"+a.Response.Error.Message);else{for(var r="",n=0;n<a.Response.TextDetections.length;n++)r+=a.Response.TextDetections[n].DetectedText+"\n";t.$emit("fill-ocr-result",r)}})).catch((function(e){t.$message.error(e)}))}this.$message.error("请填写 SECRET_ID 和 SECRET_KEY")},sign:function(e){var t=this.form.SECRET_ID,a=this.form.SECRET_KEY,r="ocr.tencentcloudapi.com",n="ocr",o="ap-beijing",i=this.form.type,c="2018-11-19",s=Date.parse(new Date)/1e3,l=this.getDate(s),u="content-type;host",f=this.getHash(e),m="POST",d="/",h="",p="content-type:application/json\nhost:"+r+"\n",g=m+"\n"+d+"\n"+h+"\n"+p+"\n"+u+"\n"+f;console.log(g);var v="TC3-HMAC-SHA256",b=this.getHash(g),_=l+"/"+n+"/tc3_request",C=v+"\n"+s+"\n"+_+"\n"+b;console.log(C);var S=this.sha256(l,"TC3"+a),y=this.sha256(n,S),x=this.sha256("tc3_request",y),E=this.sha256(C,x,"hex");console.log(E);var I=v+" Credential="+t+"/"+_+", SignedHeaders="+u+", Signature="+E;return console.log(I),{Authorization:I,"Content-Type":"application/json",Host:r,"X-TC-Action":i,"X-TC-Timestamp":s.toString(),"X-TC-Version":c,"X-TC-Region":o}},sha256:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,r=I.a.createHmac("sha256",t);return r.update(e).digest(a)},getHash:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex",a=I.a.createHash("sha256");return a.update(e).digest(t)},getDate:function(e){var t=new Date(1e3*e),a=t.getUTCFullYear(),r=("0"+(t.getUTCMonth()+1)).slice(-2),n=("0"+t.getUTCDate()).slice(-2);return"".concat(a,"-").concat(r,"-").concat(n)},saveChange:function(){this.form.save?(localStorage.setItem("ocr-tencent-info-save","true"),localStorage.setItem("ocr-tencent-type",this.form.type),localStorage.setItem("ocr-tencent-SECRET_ID",this.form.SECRET_ID),localStorage.setItem("ocr-tencent-SECRET_KEY",this.form.SECRET_KEY)):(localStorage.setItem("ocr-tencent-info-save","false"),localStorage.removeItem("ocr-tencent-type"),localStorage.removeItem("ocr-tencent-SECRET_ID"),localStorage.removeItem("ocr-tencent-SECRET_KEY"))}},watch:{"form.SECRET_ID":function(){this.saveChange(this.form.save)},"form.SECRET_KEY":function(){this.saveChange(this.form.save)},"form.type":function(){this.saveChange(this.form.save)}}},k=T,D=Object(_["a"])(k,y,x,!1,null,"c4e68558",null),O=D.exports,$={name:"Ocr",components:{TencentOcr:O,BaiduOcr:S},data:function(){return{srcImageFile:null,srcImageUrl:null,srcImageName:null,srcImageCanvas:null,activeName:"baidu",ocrResult:"",loading:!1}},created:function(){var e=localStorage.getItem("ocr-cloud-type");e&&(this.activeName=e)},methods:{textRecognition:function(){var e=this;this.srcImageUrl?(this.loading=!0,this.$nextTick((function(){"baidu"===e.activeName?e.$refs["baidu-ocr"].ocr(e.srcImageCanvas).finally((function(){e.loading=!1})):"tencent"===e.activeName&&e.$refs["tencent-ocr"].ocr(e.srcImageCanvas).finally((function(){e.loading=!1}))}))):this.$message.error("请先选择图片")},handleTabSwitch:function(){localStorage.setItem("ocr-cloud-type",this.activeName)},handleImagePaste:function(e){if(e.clipboardData||e.originalEvent){var t=e.clipboardData||e.originalEvent.clipboardData;if(t.items)for(var a=t.items,r=a.length,n=null,o=0;o<r;o++)-1!==a[o].type.indexOf("image")&&(n=a[o].getAsFile(),this.handleImage(n))}},handleImageUpload:function(e){e.target.files[0]&&this.handleImage(e.target.files[0])},handleImage:function(e){var t=this;this.srcImageFile=e,this.srcImageUrl=this.getFileUrl(this.srcImageFile),this.srcImageName=this.srcImageFile.name,this.getCanvas(this.srcImageUrl).then((function(e){t.srcImageCanvas=e,t.textRecognition()}))},getFileUrl:function(e){var t=null;return void 0!==window.URL?t=window.URL.createObjectURL(e):void 0!==window.webkitURL&&(t=window.webkitURL.createObjectURL(e)),t},getCanvas:function(e){return new Promise((function(t){var a=new Image;a.src=e,a.onload=function(){var e=document.createElement("canvas");e.width=a.width,e.height=a.height;var r=e.getContext("2d");r.fillStyle="white",r.fillRect(0,0,e.width,e.height),r.drawImage(a,0,0,a.width,a.height),t(e)}}))}}},j=$,U=Object(_["a"])(j,c,s,!1,null,"72d90224",null),K=U.exports,L={name:"App",components:{Ocr:K}},A=L,N=(a("034f"),Object(_["a"])(A,o,i,!1,null,null,null)),P=N.exports,Y=a("5f72"),M=a.n(Y);a("0fae");n.a.config.productionTip=!1,n.a.use(M.a),new n.a({render:function(e){return e(P)}}).$mount("#app")},"5f72":function(e,t){e.exports=ELEMENT},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,a){},"8bbf":function(e,t){e.exports=Vue},9:function(e,t){},cebe:function(e,t){e.exports=axios}});