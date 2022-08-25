(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[14],{42:function(n,r,t){"use strict"
function e(n,r){return n.parent===r.parent?1:2}function u(n,r){return n+r.x}function o(n,r){return Math.max(n,r.y)}t.r(r),t.d(r,"cluster",(function(){return i})),t.d(r,"hierarchy",(function(){return p})),t.d(r,"pack",(function(){return J})),t.d(r,"packSiblings",(function(){return j})),t.d(r,"packEnclose",(function(){return m})),t.d(r,"partition",(function(){return G})),t.d(r,"stratify",(function(){return V})),t.d(r,"tree",(function(){return tn})),t.d(r,"treemap",(function(){return fn})),t.d(r,"treemapBinary",(function(){return cn})),t.d(r,"treemapDice",(function(){return F})),t.d(r,"treemapSlice",(function(){return en})),t.d(r,"treemapSliceDice",(function(){return hn})),t.d(r,"treemapSquarify",(function(){return an})),t.d(r,"treemapResquarify",(function(){return ln}))
var i=function(){var n=e,r=1,t=1,i=!1
function a(e){var a,f=0
e.eachAfter((function(r){var t=r.children
t?(r.x=function(n){return n.reduce(u,0)/n.length}(t),r.y=function(n){return 1+n.reduce(o,0)}(t)):(r.x=a?f+=n(r,a):0,r.y=0,a=r)}))
var c=function(n){for(var r;r=n.children;)n=r[0]
return n}(e),h=function(n){for(var r;r=n.children;)n=r[r.length-1]
return n}(e),l=c.x-n(c,h)/2,p=h.x+n(h,c)/2
return e.eachAfter(i?function(n){n.x=(n.x-e.x)*r,n.y=(e.y-n.y)*t}:function(n){n.x=(n.x-l)/(p-l)*r,n.y=(1-(e.y?n.y/e.y:1))*t})}return a.separation=function(r){return arguments.length?(n=r,a):n},a.size=function(n){return arguments.length?(i=!1,r=+n[0],t=+n[1],a):i?null:[r,t]},a.nodeSize=function(n){return arguments.length?(i=!0,r=+n[0],t=+n[1],a):i?[r,t]:null},a}
function a(n){var r=0,t=n.children,e=t&&t.length
if(e)for(;--e>=0;)r+=t[e].value
else r=1
n.value=r}function f(n,r){(null==r||r>n.length)&&(r=n.length)
for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t]
return e}function c(n,r){(null==r||r>n.length)&&(r=n.length)
for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t]
return e}var h=regeneratorRuntime.mark(l)
function l(){var n,r,t,e,u,o
return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=[n=this]
case 1:r=t.reverse(),t=[]
case 2:if(!(n=r.pop())){i.next=8
break}return i.next=5,n
case 5:if(e=n.children)for(u=0,o=e.length;u<o;++u)t.push(e[u])
i.next=2
break
case 8:if(t.length){i.next=1
break}case 9:case"end":return i.stop()}}),h,this)}function p(n,r){n instanceof Map?(n=[void 0,n],void 0===r&&(r=d)):void 0===r&&(r=s)
for(var t,e,u,o,i,a=new x(n),f=[a];t=f.pop();)if((u=r(t.data))&&(i=(u=Array.from(u)).length))for(t.children=u,o=i-1;o>=0;--o)f.push(e=u[o]=new x(u[o])),e.parent=t,e.depth=t.depth+1
return a.eachBefore(v)}function s(n){return n.children}function d(n){return Array.isArray(n)?n[1]:null}function y(n){void 0!==n.data.value&&(n.value=n.data.value),n.data=n.data.data}function v(n){var r=0
do{n.height=r}while((n=n.parent)&&n.height<++r)}function x(n){this.data=n,this.depth=this.height=0,this.parent=null}function g(n){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}x.prototype=p.prototype=function(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}({constructor:x,count:function(){return this.eachAfter(a)},each:function(n,r){var t,e=-1,u=function(n,r){var t
if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,r){if(n){if("string"==typeof n)return f(n,r)
var t=Object.prototype.toString.call(n).slice(8,-1)
return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){t&&(n=t)
var e=0,u=function(){}
return{s:u,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1
return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next()
return i=n.done,n},e:function(n){a=!0,o=n},f:function(){try{i||null==t.return||t.return()}finally{if(a)throw o}}}}(this)
try{for(u.s();!(t=u.n()).done;){var o=t.value
n.call(r,o,++e,this)}}catch(n){u.e(n)}finally{u.f()}return this},eachAfter:function(n,r){for(var t,e,u,o=this,i=[o],a=[],f=-1;o=i.pop();)if(a.push(o),t=o.children)for(e=0,u=t.length;e<u;++e)i.push(t[e])
for(;o=a.pop();)n.call(r,o,++f,this)
return this},eachBefore:function(n,r){for(var t,e,u=this,o=[u],i=-1;u=o.pop();)if(n.call(r,u,++i,this),t=u.children)for(e=t.length-1;e>=0;--e)o.push(t[e])
return this},find:function(n,r){var t,e=-1,u=function(n,r){var t
if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,r){if(n){if("string"==typeof n)return c(n,r)
var t=Object.prototype.toString.call(n).slice(8,-1)
return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){t&&(n=t)
var e=0,u=function(){}
return{s:u,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1
return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next()
return i=n.done,n},e:function(n){a=!0,o=n},f:function(){try{i||null==t.return||t.return()}finally{if(a)throw o}}}}(this)
try{for(u.s();!(t=u.n()).done;){var o=t.value
if(n.call(r,o,++e,this))return o}}catch(n){u.e(n)}finally{u.f()}},sum:function(n){return this.eachAfter((function(r){for(var t=+n(r.data)||0,e=r.children,u=e&&e.length;--u>=0;)t+=e[u].value
r.value=t}))},sort:function(n){return this.eachBefore((function(r){r.children&&r.children.sort(n)}))},path:function(n){for(var r=this,t=function(n,r){if(n===r)return n
var t=n.ancestors(),e=r.ancestors(),u=null
for(n=t.pop(),r=e.pop();n===r;)u=n,n=t.pop(),r=e.pop()
return u}(r,n),e=[r];r!==t;)r=r.parent,e.push(r)
for(var u=e.length;n!==t;)e.splice(u,0,n),n=n.parent
return e},ancestors:function(){for(var n=this,r=[n];n=n.parent;)r.push(n)
return r},descendants:function(){return Array.from(this)},leaves:function(){var n=[]
return this.eachBefore((function(r){r.children||n.push(r)})),n},links:function(){var n=this,r=[]
return n.each((function(t){t!==n&&r.push({source:t.parent,target:t})})),r},copy:function(){return p(this).eachBefore(y)}},Symbol.iterator,l)
var m=function(n){for(var r,t,e=0,u=(n=function(n){for(var r,t,e=n.length;e;)t=Math.random()*e--|0,r=n[e],n[e]=n[t],n[t]=r
return n}(Array.from(n))).length,o=[];e<u;)r=n[e],t&&_(t,r)?++e:(t=M(o=w(o,r)),e=0)
return t}
function w(n,r){var t,e
if(A(r,n))return[r]
for(t=0;t<n.length;++t)if(b(r,n[t])&&A(S(n[t],r),n))return[n[t],r]
for(t=0;t<n.length-1;++t)for(e=t+1;e<n.length;++e)if(b(S(n[t],n[e]),r)&&b(S(n[t],r),n[e])&&b(S(n[e],r),n[t])&&A(z(n[t],n[e],r),n))return[n[t],n[e],r]
throw new Error}function b(n,r){var t=n.r-r.r,e=r.x-n.x,u=r.y-n.y
return t<0||t*t<e*e+u*u}function _(n,r){var t=n.r-r.r+1e-9*Math.max(n.r,r.r,1),e=r.x-n.x,u=r.y-n.y
return t>0&&t*t>e*e+u*u}function A(n,r){for(var t=0;t<r.length;++t)if(!_(n,r[t]))return!1
return!0}function M(n){switch(n.length){case 1:return{x:(r=n[0]).x,y:r.y,r:r.r}
case 2:return S(n[0],n[1])
case 3:return z(n[0],n[1],n[2])}var r}function S(n,r){var t=n.x,e=n.y,u=n.r,o=r.x,i=r.y,a=r.r,f=o-t,c=i-e,h=a-u,l=Math.sqrt(f*f+c*c)
return{x:(t+o+f/l*h)/2,y:(e+i+c/l*h)/2,r:(l+u+a)/2}}function z(n,r,t){var e=n.x,u=n.y,o=n.r,i=r.x,a=r.y,f=r.r,c=t.x,h=t.y,l=t.r,p=e-i,s=e-c,d=u-a,y=u-h,v=f-o,x=l-o,g=e*e+u*u-o*o,m=g-i*i-a*a+f*f,w=g-c*c-h*h+l*l,b=s*d-p*y,_=(d*w-y*m)/(2*b)-e,A=(y*v-d*x)/b,M=(s*m-p*w)/(2*b)-u,S=(p*x-s*v)/b,z=A*A+S*S-1,B=2*(o+_*A+M*S),k=_*_+M*M-o*o,I=-(z?(B+Math.sqrt(B*B-4*z*k))/(2*z):k/B)
return{x:e+_+A*I,y:u+M+S*I,r:I}}function B(n,r,t){var e,u,o,i,a=n.x-r.x,f=n.y-r.y,c=a*a+f*f
c?(u=r.r+t.r,u*=u,i=n.r+t.r,u>(i*=i)?(e=(c+i-u)/(2*c),o=Math.sqrt(Math.max(0,i/c-e*e)),t.x=n.x-e*a-o*f,t.y=n.y-e*f+o*a):(e=(c+u-i)/(2*c),o=Math.sqrt(Math.max(0,u/c-e*e)),t.x=r.x+e*a-o*f,t.y=r.y+e*f+o*a)):(t.x=r.x+t.r,t.y=r.y)}function k(n,r){var t=n.r+r.r-1e-6,e=r.x-n.x,u=r.y-n.y
return t>0&&t*t>e*e+u*u}function I(n){var r=n._,t=n.next._,e=r.r+t.r,u=(r.x*t.r+t.x*r.r)/e,o=(r.y*t.r+t.y*r.r)/e
return u*u+o*o}function q(n){this._=n,this.next=null,this.previous=null}function E(n){if(!(o=(r=n,n="object"===g(r)&&"length"in r?r:Array.from(r)).length))return 0
var r,t,e,u,o,i,a,f,c,h,l,p
if((t=n[0]).x=0,t.y=0,!(o>1))return t.r
if(e=n[1],t.x=-e.r,e.x=t.r,e.y=0,!(o>2))return t.r+e.r
B(e,t,u=n[2]),t=new q(t),e=new q(e),u=new q(u),t.next=u.previous=e,e.next=t.previous=u,u.next=e.previous=t
n:for(f=3;f<o;++f){B(t._,e._,u=n[f]),u=new q(u),c=e.next,h=t.previous,l=e._.r,p=t._.r
do{if(l<=p){if(k(c._,u._)){e=c,t.next=e,e.previous=t,--f
continue n}l+=c._.r,c=c.next}else{if(k(h._,u._)){(t=h).next=e,e.previous=t,--f
continue n}p+=h._.r,h=h.previous}}while(c!==h.next)
for(u.previous=t,u.next=e,t.next=e.previous=e=u,i=I(t);(u=u.next)!==e;)(a=I(u))<i&&(t=u,i=a)
e=t.next}for(t=[e._],u=e;(u=u.next)!==e;)t.push(u._)
for(u=m(t),f=0;f<o;++f)(t=n[f]).x-=u.x,t.y-=u.y
return u.r}var j=function(n){return E(n),n}
function O(n){return null==n?null:R(n)}function R(n){if("function"!=typeof n)throw new Error
return n}function T(){return 0}var C=function(n){return function(){return n}}
function D(n){return Math.sqrt(n.value)}var J=function(){var n=null,r=1,t=1,e=T
function u(u){return u.x=r/2,u.y=t/2,n?u.eachBefore(L(n)).eachAfter(U(e,.5)).eachBefore($(1)):u.eachBefore(L(D)).eachAfter(U(T,1)).eachAfter(U(e,u.r/Math.min(r,t))).eachBefore($(Math.min(r,t)/(2*u.r))),u}return u.radius=function(r){return arguments.length?(n=O(r),u):n},u.size=function(n){return arguments.length?(r=+n[0],t=+n[1],u):[r,t]},u.padding=function(n){return arguments.length?(e="function"==typeof n?n:C(+n),u):e},u}
function L(n){return function(r){r.children||(r.r=Math.max(0,+n(r)||0))}}function U(n,r){return function(t){if(e=t.children){var e,u,o,i=e.length,a=n(t)*r||0
if(a)for(u=0;u<i;++u)e[u].r+=a
if(o=E(e),a)for(u=0;u<i;++u)e[u].r-=a
t.r=o+a}}}function $(n){return function(r){var t=r.parent
r.r*=n,t&&(r.x=t.x+n*r.x,r.y=t.y+n*r.y)}}var P=function(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)},F=function(n,r,t,e,u){for(var o,i=n.children,a=-1,f=i.length,c=n.value&&(e-r)/n.value;++a<f;)(o=i[a]).y0=t,o.y1=u,o.x0=r,o.x1=r+=o.value*c},G=function(){var n=1,r=1,t=0,e=!1
function u(u){var o=u.height+1
return u.x0=u.y0=t,u.x1=n,u.y1=r/o,u.eachBefore(function(n,r){return function(e){e.children&&F(e,e.x0,n*(e.depth+1)/r,e.x1,n*(e.depth+2)/r)
var u=e.x0,o=e.y0,i=e.x1-t,a=e.y1-t
i<u&&(u=i=(u+i)/2),a<o&&(o=a=(o+a)/2),e.x0=u,e.y0=o,e.x1=i,e.y1=a}}(r,o)),e&&u.eachBefore(P),u}return u.round=function(n){return arguments.length?(e=!!n,u):e},u.size=function(t){return arguments.length?(n=+t[0],r=+t[1],u):[n,r]},u.padding=function(n){return arguments.length?(t=+n,u):t},u},H={depth:-1},K={}
function N(n){return n.id}function Q(n){return n.parentId}var V=function(){var n=N,r=Q
function t(t){var e,u,o,i,a,f,c,h=Array.from(t),l=h.length,p=new Map
for(u=0;u<l;++u)e=h[u],a=h[u]=new x(e),null!=(f=n(e,u,t))&&(f+="")&&(c=a.id=f,p.set(c,p.has(c)?K:a)),null!=(f=r(e,u,t))&&(f+="")&&(a.parent=f)
for(u=0;u<l;++u)if(f=(a=h[u]).parent){if(!(i=p.get(f)))throw new Error("missing: "+f)
if(i===K)throw new Error("ambiguous: "+f)
i.children?i.children.push(a):i.children=[a],a.parent=i}else{if(o)throw new Error("multiple roots")
o=a}if(!o)throw new Error("no root")
if(o.parent=H,o.eachBefore((function(n){n.depth=n.parent.depth+1,--l})).eachBefore(v),o.parent=null,l>0)throw new Error("cycle")
return o}return t.id=function(r){return arguments.length?(n=R(r),t):n},t.parentId=function(n){return arguments.length?(r=R(n),t):r},t}
function W(n,r){return n.parent===r.parent?1:2}function X(n){var r=n.children
return r?r[0]:n.t}function Y(n){var r=n.children
return r?r[r.length-1]:n.t}function Z(n,r,t){var e=t/(r.i-n.i)
r.c-=e,r.s+=t,n.c+=e,r.z+=t,r.m+=t}function nn(n,r,t){return n.a.parent===r.parent?n.a:t}function rn(n,r){this._=n,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=r}rn.prototype=Object.create(x.prototype)
var tn=function(){var n=W,r=1,t=1,e=null
function u(u){var f=function(n){for(var r,t,e,u,o,i=new rn(n,0),a=[i];r=a.pop();)if(e=r._.children)for(r.children=new Array(o=e.length),u=o-1;u>=0;--u)a.push(t=r.children[u]=new rn(e[u],u)),t.parent=r
return(i.parent=new rn(null,0)).children=[i],i}(u)
if(f.eachAfter(o),f.parent.m=-f.z,f.eachBefore(i),e)u.eachBefore(a)
else{var c=u,h=u,l=u
u.eachBefore((function(n){n.x<c.x&&(c=n),n.x>h.x&&(h=n),n.depth>l.depth&&(l=n)}))
var p=c===h?1:n(c,h)/2,s=p-c.x,d=r/(h.x+p+s),y=t/(l.depth||1)
u.eachBefore((function(n){n.x=(n.x+s)*d,n.y=n.depth*y}))}return u}function o(r){var t=r.children,e=r.parent.children,u=r.i?e[r.i-1]:null
if(t){!function(n){for(var r,t=0,e=0,u=n.children,o=u.length;--o>=0;)(r=u[o]).z+=t,r.m+=t,t+=r.s+(e+=r.c)}(r)
var o=(t[0].z+t[t.length-1].z)/2
u?(r.z=u.z+n(r._,u._),r.m=r.z-o):r.z=o}else u&&(r.z=u.z+n(r._,u._))
r.parent.A=function(r,t,e){if(t){for(var u,o=r,i=r,a=t,f=o.parent.children[0],c=o.m,h=i.m,l=a.m,p=f.m;a=Y(a),o=X(o),a&&o;)f=X(f),(i=Y(i)).a=r,(u=a.z+l-o.z-c+n(a._,o._))>0&&(Z(nn(a,r,e),r,u),c+=u,h+=u),l+=a.m,c+=o.m,p+=f.m,h+=i.m
a&&!Y(i)&&(i.t=a,i.m+=l-h),o&&!X(f)&&(f.t=o,f.m+=c-p,e=r)}return e}(r,u,r.parent.A||e[0])}function i(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function a(n){n.x*=r,n.y=n.depth*t}return u.separation=function(r){return arguments.length?(n=r,u):n},u.size=function(n){return arguments.length?(e=!1,r=+n[0],t=+n[1],u):e?null:[r,t]},u.nodeSize=function(n){return arguments.length?(e=!0,r=+n[0],t=+n[1],u):e?[r,t]:null},u},en=function(n,r,t,e,u){for(var o,i=n.children,a=-1,f=i.length,c=n.value&&(u-t)/n.value;++a<f;)(o=i[a]).x0=r,o.x1=e,o.y0=t,o.y1=t+=o.value*c},un=(1+Math.sqrt(5))/2
function on(n,r,t,e,u,o){for(var i,a,f,c,h,l,p,s,d,y,v,x=[],g=r.children,m=0,w=0,b=g.length,_=r.value;m<b;){f=u-t,c=o-e
do{h=g[w++].value}while(!h&&w<b)
for(l=p=h,v=h*h*(y=Math.max(c/f,f/c)/(_*n)),d=Math.max(p/v,v/l);w<b;++w){if(h+=a=g[w].value,a<l&&(l=a),a>p&&(p=a),v=h*h*y,(s=Math.max(p/v,v/l))>d){h-=a
break}d=s}x.push(i={value:h,dice:f<c,children:g.slice(m,w)}),i.dice?F(i,t,e,u,_?e+=c*h/_:o):en(i,t,e,_?t+=f*h/_:u,o),_-=h,m=w}return x}var an=function n(r){function t(n,t,e,u,o){on(r,n,t,e,u,o)}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(un),fn=function(){var n=an,r=!1,t=1,e=1,u=[0],o=T,i=T,a=T,f=T,c=T
function h(n){return n.x0=n.y0=0,n.x1=t,n.y1=e,n.eachBefore(l),u=[0],r&&n.eachBefore(P),n}function l(r){var t=u[r.depth],e=r.x0+t,h=r.y0+t,l=r.x1-t,p=r.y1-t
l<e&&(e=l=(e+l)/2),p<h&&(h=p=(h+p)/2),r.x0=e,r.y0=h,r.x1=l,r.y1=p,r.children&&(t=u[r.depth+1]=o(r)/2,e+=c(r)-t,h+=i(r)-t,(l-=a(r)-t)<e&&(e=l=(e+l)/2),(p-=f(r)-t)<h&&(h=p=(h+p)/2),n(r,e,h,l,p))}return h.round=function(n){return arguments.length?(r=!!n,h):r},h.size=function(n){return arguments.length?(t=+n[0],e=+n[1],h):[t,e]},h.tile=function(r){return arguments.length?(n=R(r),h):n},h.padding=function(n){return arguments.length?h.paddingInner(n).paddingOuter(n):h.paddingInner()},h.paddingInner=function(n){return arguments.length?(o="function"==typeof n?n:C(+n),h):o},h.paddingOuter=function(n){return arguments.length?h.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):h.paddingTop()},h.paddingTop=function(n){return arguments.length?(i="function"==typeof n?n:C(+n),h):i},h.paddingRight=function(n){return arguments.length?(a="function"==typeof n?n:C(+n),h):a},h.paddingBottom=function(n){return arguments.length?(f="function"==typeof n?n:C(+n),h):f},h.paddingLeft=function(n){return arguments.length?(c="function"==typeof n?n:C(+n),h):c},h},cn=function(n,r,t,e,u){var o,i,a=n.children,f=a.length,c=new Array(f+1)
for(c[0]=i=o=0;o<f;++o)c[o+1]=i+=a[o].value
!function n(r,t,e,u,o,i,f){if(r>=t-1){var h=a[r]
return h.x0=u,h.y0=o,h.x1=i,void(h.y1=f)}for(var l=c[r],p=e/2+l,s=r+1,d=t-1;s<d;){var y=s+d>>>1
c[y]<p?s=y+1:d=y}p-c[s-1]<c[s]-p&&r+1<s&&--s
var v=c[s]-l,x=e-v
if(i-u>f-o){var g=e?(u*x+i*v)/e:i
n(r,s,v,u,o,g,f),n(s,t,x,g,o,i,f)}else{var m=e?(o*x+f*v)/e:f
n(r,s,v,u,o,i,m),n(s,t,x,u,m,i,f)}}(0,f,n.value,r,t,e,u)},hn=function(n,r,t,e,u){(1&n.depth?en:F)(n,r,t,e,u)},ln=function n(r){function t(n,t,e,u,o){if((i=n._squarify)&&i.ratio===r)for(var i,a,f,c,h,l=-1,p=i.length,s=n.value;++l<p;){for(f=(a=i[l]).children,c=a.value=0,h=f.length;c<h;++c)a.value+=f[c].value
a.dice?F(a,t,e,u,s?e+=(o-e)*a.value/s:o):en(a,t,e,s?t+=(u-t)*a.value/s:u,o),s-=a.value}else n._squarify=i=on(r,n,t,e,u,o),i.ratio=r}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(un)}}])
