(function(){var e=/^[\],:{}\s]*$/,t=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,n=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,o=/(?:^|:|,)(?:\s*\[)+/g,i=/(https:\/\/([a-zA-Z0-9-]+\.)?(app\.box\.com|app\.boxcn\.net|ent\.box\.com)((\/.*)?))/i,r=/(https:\/\/([a-zA-Z0-9-]+\.)?(app\.[A-Za-z0-9]+\.inside-box\.net)((\/.*)?))/i,s=520,c=590,u=["multiselect","testMode"],l=1
function a(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return n
return-1}function d(e){var t=[],n=""
return e.clientId||t.push("The client id must be included"),(!e.linkType||"direct"!==e.linkType&&"shared"!==e.linkType)&&t.push('The link-type option must be "direct" or "shared"'),void 0!==e.multiselect&&null!==e.multiselect&&("boolean"===(n=typeof e.multiselect)||"string"===n?"string"===n&&"true"!==e.multiselect&&"false"!==e.multiselect&&t.push('The multiselect option must be "true" or "false"'):t.push('The multiselect option must be "true" or "false"')),void 0!==e.testMode&&null!==e.testMode&&("boolean"===(n=typeof e.testMode)||"string"===n?"string"===n&&"true"!==e.testMode&&"false"!==e.testMode&&t.push('Invalid option "testmode"'):t.push('Invalid option "testmode"')),t}window.BoxSelect=function(p){var m,h,f,E,g={},v=!1,w={clientId:"",linkType:"shared",multiselect:!0,headerPrompt:"",domain:"https://app.box.com",testMode:!1,navigator:navigator},x=l++
function b(e){for(var t in e)if(e.hasOwnProperty(t)&&null!==e[t]){var n=e[t];-1!=a(u,t)&&"string"==typeof n&&(n="true"===e[t]),w[t]=n}}function T(){if(f&&!f.closed)return f.focus(),!1
var e=w.domain+"/index.php?rm=box_select_view"
e+="&client_id="+w.clientId,e+="&link_type="+w.linkType,e+="&multiselect="+w.multiselect,w.headerPrompt&&(e+="&header_prompt="+encodeURIComponent(w.headerPrompt)),e+="&picker_id="+x
var t=function(){var e=void 0!==window.screenLeft?window.screenLeft:screen.left,t=void 0!==window.screenTop?window.screenTop:screen.top,n=screen.width
window.innerWidth?n=window.innerWidth:document.documentElement.clientWidth&&(n=document.documentElement.clientWidth)
var o=screen.height
window.innerHeight?o=window.innerHeight:document.documentElement.clientHeight&&(o=document.documentElement.clientHeight)
var i=n/2-c/2+e,r=o/2-s/2+t
return"width="+c+",height="+s+",top="+(r=r>0?r:0)+",left="+(i=i>0?i:0)}()
return f=window.open(e,"",t),_(),!0}function y(){v&&(f.closed?function(){if(g[B.CANCEL_EVENT_TYPE])for(var e=g[B.CANCEL_EVENT_TYPE],t=0;t<e.length;t++)e[t]()}():_())}function _(){v=!0,f&&!f.closed&&window.setTimeout(y,1e3)}function S(s){if(s.data){var c=function(i){if(!i||"string"!=typeof i)return null
try{if(window.JSON&&window.JSON.parse)return window.JSON.parse(i)
if(e.test(i.replace(t,"@").replace(n,"]").replace(o,"")))return new Function("return "+i)()}catch(r){}return null}(s.data)
if(function(e){return e&&(i.test(e)||r.test(e))}(s.origin||s.originalEvent.origin)&&c&&(c.eventType===B.SUCCESS_EVENT_TYPE||c.eventType===B.CANCEL_EVENT_TYPE)&&parseInt(c.pickerId,10)===x){if(g[c.eventType])for(var u=g[c.eventType],l=0;l<u.length;l++)c.eventType===B.SUCCESS_EVENT_TYPE?u[l](c.links):u[l]()
B.closePopup()}}}function C(e,t){return"function"==typeof t&&(g[e]=g[e]||[],g[e].push(t),!0)}function N(){var e=w.navigator.userAgent,t=new RegExp("MSIE"),n=new RegExp("Opera")
return t.test(e)&&!n.test(e)}function k(){var e=w.navigator.userAgent
return new RegExp("Trident").test(e)}function P(){return N()||k()}function A(e,t){(e.length>0||!t)&&(m.disabled=!0,m.className+=" not-supported",m.title=t?e[0]:"Your browser is not supported"),function(){if(!E&&!(E=document.getElementById("box-select-stylesheet"))){(E=document.createElement("style")).type="text/css",E.id="box-select-stylesheet"
var e=""
e+="#box-select, .box-select { width: 160px; height: 42px; border: none; cursor: pointer; background: url('https://app.box.com/img/box_select/Item_Selector_Button_Sprites.png') no-repeat;background-position: -50px -100px; }",e+="#box-select:hover, .box-select:hover { background-position: -50px -50px ; }",e+="#box-select:active, .box-select:active { background-position: -50px 0;}",e+="#box-select.not-supported, .box-select.not-supported { zoom: 1;filter: alpha(opacity=30);opacity: 0.3;}",E.styleSheet?E.styleSheet.cssText=e:E.textContent=e,document.getElementsByTagName("head")[0].appendChild(E)}}(),m.onclick=B.launchPopup}var I,L,M,B={SUCCESS_EVENT_TYPE:"BoxSelect:Success",CANCEL_EVENT_TYPE:"BoxSelect:Cancel",closePopup:function(){f&&(f.close(),v=!1),h&&(h.parentNode.removeChild(h),h=null)},success:function(e){return C(B.SUCCESS_EVENT_TYPE,e)},cancel:function(e){return C(B.CANCEL_EVENT_TYPE,e)},unregister:function(e,t){var n=!1
if("function"==typeof t){var o=g[e]||[]
g[e]=[]
for(var i=0;i<o.length;i++)o[i]!==t?g[e].push(o[i]):n=!0}else g[e]&&(g[e]=[],n=!0)
return n},isBrowserSupported:function(){return!P()||function(){var e=w.navigator.userAgent
if(N()){if(null!==new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e))return parseFloat(RegExp.$1)}else if(k()){if(null!==new RegExp("rv:([0-9]{1,}[.0-9]{0,})").exec(e))return parseFloat(RegExp.$1)}return-1}()>=8},launchPopup:function(){return P()?function(){if(h)return!1
h=document.createElement("iframe")
var e=w.domain+"/index.php?rm=box_select_proxy"
return e+="&client_id="+w.clientId,e+="&link_type="+w.linkType,e+="&multiselect="+w.multiselect,w.headerPrompt&&(e+="&header_prompt="+encodeURIComponent(w.headerPrompt)),e+="&picker_id="+x,h.src=e,h.height="0px",h.width="0px",document.body.appendChild(h),!0}():T()},getButton:function(){return m},_destroy:function(){var e
e=window.addEventListener?"removeEventListener":"detachEvent",(0,window[e])("detachEvent"===e?"onmessage":"message",S,!1)}}
return I=p,M=[],(m=m||(m=document.getElementById("box-select")))?M=function(e){var t={clientId:e.getAttribute("data-client-id"),linkType:e.getAttribute("data-link-type"),multiselect:e.getAttribute("data-multiselect"),headerPrompt:e.getAttribute("data-header-prompt"),domain:e.getAttribute("data-domain"),testMode:e.getAttribute("data-testmode")},n=d(t)
return 0===n.length&&b(t),n}(m):(M=function(e){var t=d(e=e||{})
return 0===t.length&&b(e),t}(I),m=m||((m=document.createElement("div")).className="box-select",m)),w.testMode&&(r=/((https:\/\/(.+?\.)?(app\.[A-Za-z0-9]+\.inside-box\.net))|(https?:\/\/(.+?\.)?(localhost))((\/.*)?))/i),A(M,B.isBrowserSupported()),L=window.addEventListener?"addEventListener":"attachEvent",(0,window[L])("attachEvent"===L?"onmessage":"message",S,!1),B}})()
