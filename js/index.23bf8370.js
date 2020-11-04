(function(e){function t(t){for(var a,o,s=t[0],l=t[1],f=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,f||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={index:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/ffprobe-web-analyzer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var c=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"2a73":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("5f5b"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("div",{staticClass:"container"},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[e._v(" FFProbe Web Analyzer ")])],1)],1)]),r("GitHubCorner"),r("div",{staticClass:"container",attrs:{id:"app"}},[r("h3",[e._v("FFProbe Web Analyzer")]),r("b-alert",{attrs:{variant:"warning",show:""}},[e._v(" ⚠️Compatible with Chrome and Edge only due to limited support for "),r("a",{attrs:{href:"https://caniuse.com/sharedarraybuffer"}},[e._v("SharedArrayBuffer")]),e._v(" and the "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer"}},[e._v("required CORS headers")]),e._v(" for Firefox on Github Pages. ")]),r("hr"),r("File")],1),r("footer",{staticClass:"container mt-4 text-center"},[r("hr"),r("div",{staticClass:"text-muted"},[r("ul",[r("li",[e._v(e._s(e.name)+"-"+e._s(e.version))]),e._m(0),e._m(1)])])])],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("a",{attrs:{href:"https://github.com/alfg/ffprobe-web-analyzer"}},[e._v("Source")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("a",{attrs:{href:"https://github.com/alfg/ffprobe-web-analyzer/issues"}},[e._v("Report Bugs")])])}],s=r("9224"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"github-corner",attrs:{href:"https://github.com/alfg/ffprobe-web-analyzer","aria-label":"View source on GitHub"}},[r("svg",{staticStyle:{fill:"rgb(56, 141, 61)",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[r("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),r("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,\n      78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,\n      87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),r("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,\n      99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,\n      51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,\n      56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,\n      80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,\n      107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,\n      120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},f=[],c={name:"GitHubCorner"},u=c,d=(r("b134"),r("2877")),b=Object(d["a"])(u,l,f,!1,null,null,null),p=b.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"file"},[r("b-form-group",{attrs:{label:"Select a file:","label-for":"file"}},[r("b-form-file",{attrs:{id:"file",accept:"video/mp4",state:Boolean(e.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{change:e.onFile},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),e.showProgress?r("b-progress",{attrs:{height:"2px",value:e.progress,max:"100"}}):e._e(),e.data?r("div",[r("div",{staticClass:"mt-3"},[e._v("Selected file: "+e._s(e.file?e.file.name+": "+e.file.size+" bytes":""))]),r("b-tabs",{staticClass:"mt-4"},[r("b-tab",{staticClass:"mt-2",attrs:{title:"Overview"}},[e.data?r("div",[r("Overview",{attrs:{info:e.info}})],1):e._e()]),r("b-tab",{staticClass:"mt-2",attrs:{title:"Streams",disabled:""}}),r("b-tab",{staticClass:"mt-2",attrs:{title:"Frames",disabled:""}})],1)],1):e._e()],1)},v=[],m=(r("d3b7"),r("5cc6"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("Metadata")]),r("b-table",{attrs:{stacked:"",items:e.items}}),r("h4",[e._v("Streams")]),r("b-table",{attrs:{striped:"",hover:"",items:e.streams}})],1)}),g=[],_=(r("b0c0"),r("5377"),{name:"Overview",props:["info"],computed:{streams:function(){for(var e=[],t=0;t<this.info.streams.size();t++)e.push(this.info.streams.get(t));return e}},data:function(){return{items:[{name:this.info.name,duration:this.info.duration,bit_rate:this.info.bit_rate,url:this.info.url,nb_streams:this.info.nb_streams,flags:this.info.flags}]}}}),C=_,w=Object(d["a"])(C,m,g,!1,null,null,null),y=w.exports,O={name:"File",components:{Overview:y},data:function(){return{file:null,data:null,progress:0,showProgress:!1}},computed:{avformat_version:function(){return window.Module.c_avformat_version()},info:function(){return this.data&&window.Module.get_file_info()}},methods:{onFile:function(e){var t=this;this.data=null,this.progress=0,this.showProgress=!0;var r=e.dataTransfer?e.dataTransfer.files[0]:e.target.files[0],a=new FileReader;a.onload=function(e){t.progress=100,t.data=new Uint8Array(e.target.result),window.Module.FS.writeFile("file",new Uint8Array(t.data)),setTimeout((function(){t.showProgress=!1}),2e3)},a.onprogress=function(e){e.lengthComputable&&(t.progress=parseInt(e.loaded/e.total*100,10))},a.readAsArrayBuffer(r)}}},x=O,S=(r("e6b6"),Object(d["a"])(x,h,v,!1,null,"764115c7",null)),j=S.exports,F={name:"App",components:{File:j,GitHubCorner:p},data:function(){return{name:s["a"],version:s["b"]}}},P=F,M=(r("034f"),Object(d["a"])(P,i,o,!1,null,null,null)),z=M.exports;r("f9e3"),r("2dd8");a["default"].use(n["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(z)}}).$mount("#app")},"85ec":function(e,t,r){},9224:function(e){e.exports=JSON.parse('{"a":"ffprobe-web-analyzer","b":"0.0.1"}')},"9ca4":function(e,t,r){},b134:function(e,t,r){"use strict";var a=r("2a73"),n=r.n(a);n.a},e6b6:function(e,t,r){"use strict";var a=r("9ca4"),n=r.n(a);n.a}});
//# sourceMappingURL=index.23bf8370.js.map