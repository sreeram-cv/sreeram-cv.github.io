var gapi=window.gapi=window.gapi||{}
gapi._bs=(new Date).getTime(),function(){var e=function(){this.g=""}
e.prototype.toString=function(){return"SafeScript{"+this.g+"}"},e.prototype.a=function(e){this.g=e},(new e).a("")
var t=function(){this.j=""}
t.prototype.toString=function(){return"SafeStyle{"+this.j+"}"},t.prototype.a=function(e){this.j=e},(new t).a("")
var o=function(){this.i=""}
o.prototype.toString=function(){return"SafeStyleSheet{"+this.i+"}"},o.prototype.a=function(e){this.i=e},(new o).a("")
var r=function(){this.f=""}
r.prototype.toString=function(){return"SafeHtml{"+this.f+"}"},r.prototype.a=function(e){this.f=e},(new r).a("<!DOCTYPE html>"),(new r).a(""),(new r).a("<br>")
var i,s=window,n=document,a=s.location,l=function(){},c=/\[native code\]/,p=function(e,t,o){return e[t]=e[t]||o},u=function(){var e
if((e=Object.create)&&c.test(e))e=e(null)
else for(var t in e={})e[t]=void 0
return e},g=p(s,"gapi",{})
i=p(s,"___jsl",u()),p(i,"I",0),p(i,"hel",10)
var h=function(){var e=a.href
if(i.dpo)var t=i.h
else{t=i.h
if(e=e&&(/([#].*&|[#])jsh=([^&#]*)/g.exec(e)||/([?#].*&|[?#])jsh=([^&#]*)/g.exec(e)))try{t=decodeURIComponent(e[2])}catch(o){}}return t},f=function(e){return p(p(i,"H",u()),e,u())},d=p(i,"perf",u()),m=p(d,"g",u()),_=p(d,"i",u())
p(d,"r",[]),u(),u()
var w=function(e,t,o){var r=d.r
"function"==typeof r?r(e,t,o):r.push([e,t,o])},v=function(e,t,o){t&&0<t.length&&(t=b(t),o&&0<o.length&&(t+="___"+b(o)),28<t.length&&(t=t.substr(0,28)+(t.length-28)),o=t,t=p(_,"_p",u()),p(t,o,u())[e]=(new Date).getTime(),w(e,"_p",o))},b=function(e){return e.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")},y=u(),x=[],k=function(e){throw Error("Bad hint"+(e?": "+e:""))}
x.push(["jsl",function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=e[t]
"object"==typeof o?i[t]=p(i,t,[]).concat(o):p(i,t,o)}(t=e.u)&&((e=p(i,"us",[])).push(t),(t=/^https:(.*)$/.exec(t))&&e.push("http:"+t[1]))}])
var j=/^(\/[a-zA-Z0-9_\-]+)+$/,S=[/\/amp\//,/\/amp$/,/^\/amp$/],I=/^[a-zA-Z0-9\-_\.,!]+$/,A=/^gapi\.loaded_[0-9]+$/,C=/^[a-zA-Z0-9,._-]+$/,O=function(e){"/"!==e.charAt(0)&&k("relative path")
for(var t=e.substring(1).split("/"),o=[];t.length;){if((e=t.shift()).length&&0!=e.indexOf(".")){if(0<e.indexOf("=")){t.unshift(e)
break}}else k("empty/relative directory")
o.push(e)}e={}
for(var r=0,i=t.length;r<i;++r){var s=t[r].split("="),n=decodeURIComponent(s[0]),a=decodeURIComponent(s[1])
2==s.length&&n&&a&&(e[n]=e[n]||a)}for(t="/"+o.join("/"),j.test(t)||k("invalid_prefix"),o=0,r=S.length;o<r;++o)S[o].test(t)&&k("invalid_prefix")
return{pathPrefix:t,version:o=z(e,"k",!0),b:r=z(e,"am"),l:i=z(e,"rs"),o:e=z(e,"t")}},U=function(e){for(var t=[],o=0,r=e.length;o<r;++o){var i=e[o].replace(/\./g,"_").replace(/-/g,"_")
C.test(i)&&t.push(i)}return t.join(",")},z=function(e,t,o){if(!(e=e[t])&&o&&k("missing: "+t),e){if(I.test(e))return e
k("invalid: "+t)}return null},T=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,P=/\/cb=/g,R=/\/\//g
y.m=function(e,t,o,r){return(e=e[0])||k("missing_hint"),"https://apis.google.com"+function(e,t,o,r){e=O(e),A.test(o)||k("invalid_callback"),t=U(t),r=r&&r.length?U(r):null
var i=function(e){return encodeURIComponent(e).replace(/%2C/g,",")}
return[encodeURIComponent(e.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",i(e.version),"/m=",i(t),r?"/exm="+i(r):"","/rt=j/sv=1/d=1/ed=1",e.b?"/am="+i(e.b):"",e.l?"/rs="+i(e.l):"",e.o?"/t="+i(e.o):"","/cb=",i(o)].join("")}(e,t,o,r)}
var E=decodeURI("%73cript"),$=/^[-+_0-9\/A-Za-z]+={0,2}$/,L=function(e,t){for(var o=[],r=0;r<e.length;++r){var i,s=e[r]
if(i=s){e:{for(i=0;i<t.length;i++)if(t[i]===s)break e
i=-1}i=0>i}i&&o.push(s)}return o},D=function(){var e=i.nonce
return void 0!==e?e&&e===String(e)&&e.match($)?e:i.nonce=null:n.querySelector&&(e=n.querySelector("script[nonce]"))?(e=e.nonce||e.getAttribute("nonce")||"")&&e===String(e)&&e.match($)?i.nonce=e:i.nonce=null:null},Z=function(e){var t=n.createElement(E)
t.setAttribute("src",e),null!==(e=D())&&t.setAttribute("nonce",e),t.async="true",(e=n.getElementsByTagName(E)[0])?e.parentNode.insertBefore(t,e):(n.head||n.body||n.documentElement).appendChild(t)},B=function(e,t){var o=t||{}
"function"==typeof t&&((o={}).callback=t),function(e,t){var o=t&&t._c
if(o)for(var r=0;r<x.length;r++){var i=x[r][0],s=x[r][1]
s&&Object.prototype.hasOwnProperty.call(o,i)&&s(o[i],e,t)}}(e,o),t=e?e.split(":"):[]
var r=o.h||function(){var e=h()
if(!e)throw Error("Bad hint")
return e}(),s=p(i,"ah",u())
if(s["::"]&&t.length){e=[]
for(var n=null;n=t.shift();){var a=n.split(".")
a=s[n]||s[a[1]&&"ns:"+a[0]||""]||r
var l=e.length&&e[e.length-1]||null,c=l
l&&l.hint==a||(c={hint:a,c:[]},e.push(c)),c.c.push(n)}var g=e.length
if(1<g){var f=o.callback
f&&(o.callback=function(){0==--g&&f()})}for(;t=e.shift();)G(t.c,o,t.hint)}else G(t||[],o,r)},G=function(e,t,o){e=function(e){e=e.sort()
for(var t=[],o=void 0,r=0;r<e.length;r++){var i=e[r]
i!=o&&t.push(i),o=i}return t}(e)||[]
var r=t.callback,a=t.config,c=t.timeout,d=t.ontimeout,m=t.onerror,_=void 0
"function"==typeof m&&(_=m)
var w=null,b=!1
if(c&&!d||!c&&d)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set"
m=p(f(o),"r",[]).sort()
var x=p(f(o),"L",[]).sort(),j=[].concat(m),S=function(e,t){if(b)return 0
s.clearTimeout(w),x.push.apply(x,I)
var r=((g||{}).config||{}).update
if(r?r(a):a&&p(i,"cu",[]).push(a),t){v("me0",e,j)
try{(function(e,t,o){Q((function(){var o=t===h()?p(g,"_",u()):u()
o=p(f(t),"_",o),e(o)}),o)})(t,o,_)}finally{v("me1",e,j)}}return 1}
0<c&&(w=s.setTimeout((function(){b=!0,d()}),c))
var I=L(e,x)
if(I.length){I=L(e,m)
var A=p(i,"CP",[]),C=A.length
if(A[C]=function(e){if(!e)return 0
v("ml1",I,j)
var t=function(t){A[C]=null,S(I,e)&&function(e){var t=p(i,"PQ",[])
i.PQ=[]
var o=t.length
if(0===o)e()
else for(var r=0,s=function(){++r===o&&e()},n=0;n<o;n++)t[n](s)}((function(){r&&r(),t()}))},o=function(){var e=A[C+1]
e&&e()}
0<C&&A[C-1]?A[C]=function(){t(o)}:t(o)},I.length){var O="loaded_"+i.I++
g[O]=function(e){A[C](e),g[O]=null},e=function(e,t,o,r){var i=e.split(";"),s=i.shift(),n=y[s],a=null
return n?a=n(i,t,o,r):k("no hint processor for: "+s),a||k("failed to generate load url"),o=(t=a).match(R),(r=t.match(P))&&1===r.length&&T.test(t)&&o&&1===o.length||k("failed sanity: "+e),a}(o,I,"gapi."+O,m),m.push.apply(m,I),v("ml0",I,j),t.sync||s.___gapisync?function(e){if("loading"!=n.readyState)Z(e)
else{var t=D(),o=""
null!==t&&(o=' nonce="'+t+'"'),e="<"+E+' src="'+encodeURI(e)+'"'+o+"></"+E+">",n.write(e)}}(e):Z(e)}else A[C](l)}else S(I)&&r&&r()},Q=function(e,t){if(i.hee&&0<i.hel)try{return e()}catch(o){t&&t(o),i.hel--,B("debug_error",(function(){try{window.___jsl.hefn(o)}catch(e){throw o}}))}else try{return e()}catch(o){throw t&&t(o),o}}
g.load=function(e,t){return Q((function(){return B(e,t)}))},m.bs0=window.gapi._bs||(new Date).getTime(),w("bs0"),m.bs1=(new Date).getTime(),w("bs1"),delete window.gapi._bs}.call(this),gapi.load("",{callback:window.onApiLoad,_c:{jsl:{ci:{deviceType:"desktop","oauth-flow":{authUrl:"https://accounts.google.com/o/oauth2/auth",proxyUrl:"https://accounts.google.com/o/oauth2/postmessageRelay",disableOpt:!0,idpIframeUrl:"https://accounts.google.com/o/oauth2/iframe",usegapi:!1},debug:{reportExceptionRate:.05,forceIm:!1,rethrowException:!1,host:"https://apis.google.com"},enableMultilogin:!0,"googleapis.config":{auth:{useFirstPartyAuthV2:!0}},isPlusUser:!0,inline:{css:1},disableRealtimeCallback:!1,drive_share:{skipInitCommand:!0},csi:{rate:.01},client:{cors:!1},isLoggedIn:!0,signInDeprecation:{rate:0},include_granted_scopes:!0,llang:"en",iframes:{youtube:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",methods:["scroll","openwindow"]},ytsubscribe:{url:"https://www.youtube.com/subscribe_embed?usegapi=1"},plus_circle:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"},plus_share:{params:{url:""},url:":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"},rbr_s:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},":source:":"3p",playemm:{url:"https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"},savetoandroidpay:{url:"https://pay.google.com/gp/v/widget/save"},blogger:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",methods:["scroll","openwindow"]},evwidget:{params:{url:""},url:":socialhost:/:session_prefix:_/events/widget?usegapi=1"},partnersbadge:{url:"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"},dataconnector:{url:"https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"},surveyoptin:{url:"https://www.google.com/shopping/customerreviews/optin?usegapi=1"},":socialhost:":"https://apis.google.com",shortlists:{url:""},hangout:{url:"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},plus_followers:{params:{url:""},url:":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"},post:{params:{url:""},url:":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"},":gplus_url:":"https://plus.google.com",signin:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",methods:["onauth"]},rbr_i:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},donation:{url:"https://onetoday.google.com/home/donationWidget?usegapi=1"},share:{url:":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"},plusone:{params:{count:"",size:"",url:""},url:":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"},comments:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",methods:["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com",backdrop:{url:"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"},visibility:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"},autocomplete:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/autocomplete"},additnow:{url:"https://apis.google.com/marketplace/button?usegapi=1",methods:["launchurl"]},":signuphost:":"https://plus.google.com",ratingbadge:{url:"https://www.google.com/shopping/customerreviews/badge?usegapi=1"},appcirclepicker:{url:":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},follow:{url:":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"},community:{url:":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"},sharetoclassroom:{url:"https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi=1"},ytshare:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"},plus:{url:":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"},family_creation:{params:{url:""},url:"https://families.google.com/webcreation?usegapi=1&usegapi=1"},commentcount:{url:":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"},configurator:{url:":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"},zoomableimage:{url:"https://ssl.gstatic.com/microscope/embed/"},appfinder:{url:"https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi=1"},savetowallet:{url:"https://pay.google.com/gp/v/widget/save"},person:{url:":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"},savetodrive:{url:"https://drive.google.com/savetodrivebutton?usegapi=1",methods:["save"]},page:{url:":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"},card:{url:":socialhost:/:session_prefix:_/hovercard/card"}}},h:"m;/_/scs/apps-static/_/js/k=oz.gapi.en.jw7XZHvcak8.O/am=wQE/d=1/ct=zgms/rs=AGLTcCOXtLG11kt9d673FzpjO_GiLUGIQA/m=__features__",u:"https://apis.google.com/js/api.js?onload=onApiLoad",hee:!0,fp:"3062b5bb7f024cab7e33463197a0fb6966f3cf84",dpo:!1},fp:"3062b5bb7f024cab7e33463197a0fb6966f3cf84",annotation:["interactivepost","recobar","signin2","autocomplete","profile"],bimodal:["signin","share"]}})
