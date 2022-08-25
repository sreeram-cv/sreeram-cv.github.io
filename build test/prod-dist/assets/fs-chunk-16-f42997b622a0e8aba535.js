(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[16],{40:function(t,n,i){"use strict"
i.r(n),i.d(n,"arc",(function(){return E})),i.d(n,"area",(function(){return X})),i.d(n,"line",(function(){return L})),i.d(n,"pie",(function(){return B})),i.d(n,"areaRadial",(function(){return H})),i.d(n,"radialArea",(function(){return H})),i.d(n,"lineRadial",(function(){return Z})),i.d(n,"radialLine",(function(){return Z})),i.d(n,"pointRadial",(function(){return Q})),i.d(n,"linkHorizontal",(function(){return nt})),i.d(n,"linkVertical",(function(){return it})),i.d(n,"linkRadial",(function(){return et})),i.d(n,"symbol",(function(){return bt})),i.d(n,"symbols",(function(){return gt})),i.d(n,"symbolCircle",(function(){return ot})),i.d(n,"symbolCross",(function(){return st})),i.d(n,"symbolDiamond",(function(){return _t})),i.d(n,"symbolSquare",(function(){return ft})),i.d(n,"symbolStar",(function(){return lt})),i.d(n,"symbolTriangle",(function(){return xt})),i.d(n,"symbolWye",(function(){return Tt})),i.d(n,"curveBasisClosed",(function(){return Nt})),i.d(n,"curveBasisOpen",(function(){return Et})),i.d(n,"curveBasis",(function(){return kt})),i.d(n,"curveBundle",(function(){return Ct})),i.d(n,"curveCardinalClosed",(function(){return It})),i.d(n,"curveCardinalOpen",(function(){return Xt})),i.d(n,"curveCardinal",(function(){return Rt})),i.d(n,"curveCatmullRomClosed",(function(){return Jt})),i.d(n,"curveCatmullRomOpen",(function(){return Wt})),i.d(n,"curveCatmullRom",(function(){return Bt})),i.d(n,"curveLinearClosed",(function(){return Ht})),i.d(n,"curveLinear",(function(){return R})),i.d(n,"curveMonotoneX",(function(){return nn})),i.d(n,"curveMonotoneY",(function(){return en})),i.d(n,"curveNatural",(function(){return rn})),i.d(n,"curveStep",(function(){return _n})),i.d(n,"curveStepAfter",(function(){return an})),i.d(n,"curveStepBefore",(function(){return un})),i.d(n,"stack",(function(){return vn})),i.d(n,"stackOffsetExpand",(function(){return dn})),i.d(n,"stackOffsetDiverging",(function(){return Tn})),i.d(n,"stackOffsetNone",(function(){return cn})),i.d(n,"stackOffsetSilhouette",(function(){return gn})),i.d(n,"stackOffsetWiggle",(function(){return bn})),i.d(n,"stackOrderAppearance",(function(){return mn})),i.d(n,"stackOrderAscending",(function(){return Mn})),i.d(n,"stackOrderDescending",(function(){return Sn})),i.d(n,"stackOrderInsideOut",(function(){return Nn})),i.d(n,"stackOrderNone",(function(){return ln})),i.d(n,"stackOrderReverse",(function(){return An}))
var e=Math.PI,o=2*e,s=o-1e-6
function r(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function h(){return new r}r.prototype=h.prototype={constructor:r,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,i,e){this._+="Q"+ +t+","+ +n+","+(this._x1=+i)+","+(this._y1=+e)},bezierCurveTo:function(t,n,i,e,o,s){this._+="C"+ +t+","+ +n+","+ +i+","+ +e+","+(this._x1=+o)+","+(this._y1=+s)},arcTo:function(t,n,i,o,s){t=+t,n=+n,i=+i,o=+o,s=+s
var r=this._x1,h=this._y1,_=i-t,u=o-n,a=r-t,c=h-n,l=a*a+c*c
if(s<0)throw new Error("negative radius: "+s)
if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n)
else if(l>1e-6)if(Math.abs(c*_-u*a)>1e-6&&s){var f=i-r,y=o-h,x=_*_+u*u,p=f*f+y*y,v=Math.sqrt(x),d=Math.sqrt(l),T=s*Math.tan((e-Math.acos((x+l-p)/(2*v*d)))/2),g=T/d,b=T/v
Math.abs(g-1)>1e-6&&(this._+="L"+(t+g*a)+","+(n+g*c)),this._+="A"+s+","+s+",0,0,"+ +(c*f>a*y)+","+(this._x1=t+b*_)+","+(this._y1=n+b*u)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,i,r,h,_){t=+t,n=+n,_=!!_
var u=(i=+i)*Math.cos(r),a=i*Math.sin(r),c=t+u,l=n+a,f=1^_,y=_?r-h:h-r
if(i<0)throw new Error("negative radius: "+i)
null===this._x1?this._+="M"+c+","+l:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-l)>1e-6)&&(this._+="L"+c+","+l),i&&(y<0&&(y=y%o+o),y>s?this._+="A"+i+","+i+",0,1,"+f+","+(t-u)+","+(n-a)+"A"+i+","+i+",0,1,"+f+","+(this._x1=c)+","+(this._y1=l):y>1e-6&&(this._+="A"+i+","+i+",0,"+ +(y>=e)+","+f+","+(this._x1=t+i*Math.cos(h))+","+(this._y1=n+i*Math.sin(h))))},rect:function(t,n,i,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +i+"v"+ +e+"h"+-i+"Z"},toString:function(){return this._}}
var _=h,u=function(t){return function(){return t}},a=Math.abs,c=Math.atan2,l=Math.cos,f=Math.max,y=Math.min,x=Math.sin,p=Math.sqrt,v=Math.PI,d=v/2,T=2*v
function g(t){return t>1?0:t<-1?v:Math.acos(t)}function b(t){return t>=1?d:t<=-1?-d:Math.asin(t)}function m(t){return t.innerRadius}function w(t){return t.outerRadius}function M(t){return t.startAngle}function k(t){return t.endAngle}function S(t){return t&&t.padAngle}function N(t,n,i,e,o,s,r,h){var _=i-t,u=e-n,a=r-o,c=h-s,l=c*_-a*u
if(!(l*l<1e-12))return[t+(l=(a*(n-s)-c*(t-o))/l)*_,n+l*u]}function A(t,n,i,e,o,s,r){var h=t-i,_=n-e,u=(r?s:-s)/p(h*h+_*_),a=u*_,c=-u*h,l=t+a,y=n+c,x=i+a,v=e+c,d=(l+x)/2,T=(y+v)/2,g=x-l,b=v-y,m=g*g+b*b,w=o-s,M=l*v-x*y,k=(b<0?-1:1)*p(f(0,w*w*m-M*M)),S=(M*b-g*k)/m,N=(-M*g-b*k)/m,A=(M*b+g*k)/m,E=(-M*g+b*k)/m,P=S-d,C=N-T,q=A-d,O=E-T
return P*P+C*C>q*q+O*O&&(S=A,N=E),{cx:S,cy:N,x01:-a,y01:-c,x11:S*(o/w-1),y11:N*(o/w-1)}}var E=function(){var t=m,n=w,i=u(0),e=null,o=M,s=k,r=S,h=null
function f(){var u,f,m=+t.apply(this,arguments),w=+n.apply(this,arguments),M=o.apply(this,arguments)-d,k=s.apply(this,arguments)-d,S=a(k-M),E=k>M
if(h||(h=u=_()),w<m&&(f=w,w=m,m=f),w>1e-12)if(S>T-1e-12)h.moveTo(w*l(M),w*x(M)),h.arc(0,0,w,M,k,!E),m>1e-12&&(h.moveTo(m*l(k),m*x(k)),h.arc(0,0,m,k,M,E))
else{var P,C,q=M,O=k,R=M,z=k,I=S,L=S,X=r.apply(this,arguments)/2,Y=X>1e-12&&(e?+e.apply(this,arguments):p(m*m+w*w)),j=y(a(w-m)/2,+i.apply(this,arguments)),B=j,D=j
if(Y>1e-12){var J=b(Y/m*x(X)),V=b(Y/w*x(X));(I-=2*J)>1e-12?(R+=J*=E?1:-1,z-=J):(I=0,R=z=(M+k)/2),(L-=2*V)>1e-12?(q+=V*=E?1:-1,O-=V):(L=0,q=O=(M+k)/2)}var W=w*l(q),Z=w*x(q),H=m*l(z),Q=m*x(z)
if(j>1e-12){var U,$=w*l(O),F=w*x(O),G=m*l(R),K=m*x(R)
if(S<v&&(U=N(W,Z,G,K,$,F,H,Q))){var tt=W-U[0],nt=Z-U[1],it=$-U[0],et=F-U[1],ot=1/x(g((tt*it+nt*et)/(p(tt*tt+nt*nt)*p(it*it+et*et)))/2),st=p(U[0]*U[0]+U[1]*U[1])
B=y(j,(m-st)/(ot-1)),D=y(j,(w-st)/(ot+1))}}L>1e-12?D>1e-12?(P=A(G,K,W,Z,w,D,E),C=A($,F,H,Q,w,D,E),h.moveTo(P.cx+P.x01,P.cy+P.y01),D<j?h.arc(P.cx,P.cy,D,c(P.y01,P.x01),c(C.y01,C.x01),!E):(h.arc(P.cx,P.cy,D,c(P.y01,P.x01),c(P.y11,P.x11),!E),h.arc(0,0,w,c(P.cy+P.y11,P.cx+P.x11),c(C.cy+C.y11,C.cx+C.x11),!E),h.arc(C.cx,C.cy,D,c(C.y11,C.x11),c(C.y01,C.x01),!E))):(h.moveTo(W,Z),h.arc(0,0,w,q,O,!E)):h.moveTo(W,Z),m>1e-12&&I>1e-12?B>1e-12?(P=A(H,Q,$,F,m,-B,E),C=A(W,Z,G,K,m,-B,E),h.lineTo(P.cx+P.x01,P.cy+P.y01),B<j?h.arc(P.cx,P.cy,B,c(P.y01,P.x01),c(C.y01,C.x01),!E):(h.arc(P.cx,P.cy,B,c(P.y01,P.x01),c(P.y11,P.x11),!E),h.arc(0,0,m,c(P.cy+P.y11,P.cx+P.x11),c(C.cy+C.y11,C.cx+C.x11),E),h.arc(C.cx,C.cy,B,c(C.y11,C.x11),c(C.y01,C.x01),!E))):h.arc(0,0,m,z,R,E):h.lineTo(H,Q)}else h.moveTo(0,0)
if(h.closePath(),u)return h=null,u+""||null}return f.centroid=function(){var i=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,e=(+o.apply(this,arguments)+ +s.apply(this,arguments))/2-v/2
return[l(e)*i,x(e)*i]},f.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:u(+n),f):t},f.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:u(+t),f):n},f.cornerRadius=function(t){return arguments.length?(i="function"==typeof t?t:u(+t),f):i},f.padRadius=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:u(+t),f):e},f.startAngle=function(t){return arguments.length?(o="function"==typeof t?t:u(+t),f):o},f.endAngle=function(t){return arguments.length?(s="function"==typeof t?t:u(+t),f):s},f.padAngle=function(t){return arguments.length?(r="function"==typeof t?t:u(+t),f):r},f.context=function(t){return arguments.length?(h=null==t?null:t,f):h},f}
function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var C=Array.prototype.slice,q=function(t){return"object"===P(t)&&"length"in t?t:Array.from(t)}
function O(t){this._context=t}O.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:this._context.lineTo(t,n)}}}
var R=function(t){return new O(t)}
function z(t){return t[0]}function I(t){return t[1]}var L=function(t,n){var i=u(!0),e=null,o=R,s=null
function r(r){var h,u,a,c=(r=q(r)).length,l=!1
for(null==e&&(s=o(a=_())),h=0;h<=c;++h)!(h<c&&i(u=r[h],h,r))===l&&((l=!l)?s.lineStart():s.lineEnd()),l&&s.point(+t(u,h,r),+n(u,h,r))
if(a)return s=null,a+""||null}return t="function"==typeof t?t:void 0===t?z:u(t),n="function"==typeof n?n:void 0===n?I:u(n),r.x=function(n){return arguments.length?(t="function"==typeof n?n:u(+n),r):t},r.y=function(t){return arguments.length?(n="function"==typeof t?t:u(+t),r):n},r.defined=function(t){return arguments.length?(i="function"==typeof t?t:u(!!t),r):i},r.curve=function(t){return arguments.length?(o=t,null!=e&&(s=o(e)),r):o},r.context=function(t){return arguments.length?(null==t?e=s=null:s=o(e=t),r):e},r},X=function(t,n,i){var e=null,o=u(!0),s=null,r=R,h=null
function a(u){var a,c,l,f,y,x=(u=q(u)).length,p=!1,v=new Array(x),d=new Array(x)
for(null==s&&(h=r(y=_())),a=0;a<=x;++a){if(!(a<x&&o(f=u[a],a,u))===p)if(p=!p)c=a,h.areaStart(),h.lineStart()
else{for(h.lineEnd(),h.lineStart(),l=a-1;l>=c;--l)h.point(v[l],d[l])
h.lineEnd(),h.areaEnd()}p&&(v[a]=+t(f,a,u),d[a]=+n(f,a,u),h.point(e?+e(f,a,u):v[a],i?+i(f,a,u):d[a]))}if(y)return h=null,y+""||null}function c(){return L().defined(o).curve(r).context(s)}return t="function"==typeof t?t:void 0===t?z:u(+t),n="function"==typeof n?n:u(void 0===n?0:+n),i="function"==typeof i?i:void 0===i?I:u(+i),a.x=function(n){return arguments.length?(t="function"==typeof n?n:u(+n),e=null,a):t},a.x0=function(n){return arguments.length?(t="function"==typeof n?n:u(+n),a):t},a.x1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:u(+t),a):e},a.y=function(t){return arguments.length?(n="function"==typeof t?t:u(+t),i=null,a):n},a.y0=function(t){return arguments.length?(n="function"==typeof t?t:u(+t),a):n},a.y1=function(t){return arguments.length?(i=null==t?null:"function"==typeof t?t:u(+t),a):i},a.lineX0=a.lineY0=function(){return c().x(t).y(n)},a.lineY1=function(){return c().x(t).y(i)},a.lineX1=function(){return c().x(e).y(n)},a.defined=function(t){return arguments.length?(o="function"==typeof t?t:u(!!t),a):o},a.curve=function(t){return arguments.length?(r=t,null!=s&&(h=r(s)),a):r},a.context=function(t){return arguments.length?(null==t?s=h=null:h=r(s=t),a):s},a},Y=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},j=function(t){return t},B=function(){var t=j,n=Y,i=null,e=u(0),o=u(T),s=u(0)
function r(r){var h,_,u,a,c,l=(r=q(r)).length,f=0,y=new Array(l),x=new Array(l),p=+e.apply(this,arguments),v=Math.min(T,Math.max(-T,o.apply(this,arguments)-p)),d=Math.min(Math.abs(v)/l,s.apply(this,arguments)),g=d*(v<0?-1:1)
for(h=0;h<l;++h)(c=x[y[h]=h]=+t(r[h],h,r))>0&&(f+=c)
for(null!=n?y.sort((function(t,i){return n(x[t],x[i])})):null!=i&&y.sort((function(t,n){return i(r[t],r[n])})),h=0,u=f?(v-l*g)/f:0;h<l;++h,p=a)_=y[h],a=p+((c=x[_])>0?c*u:0)+g,x[_]={data:r[_],index:h,value:c,startAngle:p,endAngle:a,padAngle:d}
return x}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:u(+n),r):t},r.sortValues=function(t){return arguments.length?(n=t,i=null,r):n},r.sort=function(t){return arguments.length?(i=t,n=null,r):i},r.startAngle=function(t){return arguments.length?(e="function"==typeof t?t:u(+t),r):e},r.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:u(+t),r):o},r.padAngle=function(t){return arguments.length?(s="function"==typeof t?t:u(+t),r):s},r},D=V(R)
function J(t){this._curve=t}function V(t){function n(n){return new J(t(n))}return n._curve=t,n}function W(t){var n=t.curve
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(V(t)):n()._curve},t}J.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}}
var Z=function(){return W(L().curve(D))},H=function(){var t=X().curve(D),n=t.curve,i=t.lineX0,e=t.lineX1,o=t.lineY0,s=t.lineY1
return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return W(i())},delete t.lineX0,t.lineEndAngle=function(){return W(e())},delete t.lineX1,t.lineInnerRadius=function(){return W(o())},delete t.lineY0,t.lineOuterRadius=function(){return W(s())},delete t.lineY1,t.curve=function(t){return arguments.length?n(V(t)):n()._curve},t},Q=function(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}
function U(t){return t.source}function $(t){return t.target}function F(t){var n=U,i=$,e=z,o=I,s=null
function r(){var r,h=C.call(arguments),u=n.apply(this,h),a=i.apply(this,h)
if(s||(s=r=_()),t(s,+e.apply(this,(h[0]=u,h)),+o.apply(this,h),+e.apply(this,(h[0]=a,h)),+o.apply(this,h)),r)return s=null,r+""||null}return r.source=function(t){return arguments.length?(n=t,r):n},r.target=function(t){return arguments.length?(i=t,r):i},r.x=function(t){return arguments.length?(e="function"==typeof t?t:u(+t),r):e},r.y=function(t){return arguments.length?(o="function"==typeof t?t:u(+t),r):o},r.context=function(t){return arguments.length?(s=null==t?null:t,r):s},r}function G(t,n,i,e,o){t.moveTo(n,i),t.bezierCurveTo(n=(n+e)/2,i,n,o,e,o)}function K(t,n,i,e,o){t.moveTo(n,i),t.bezierCurveTo(n,i=(i+o)/2,e,i,e,o)}function tt(t,n,i,e,o){var s=Q(n,i),r=Q(n,i=(i+o)/2),h=Q(e,i),_=Q(e,o)
t.moveTo(s[0],s[1]),t.bezierCurveTo(r[0],r[1],h[0],h[1],_[0],_[1])}function nt(){return F(G)}function it(){return F(K)}function et(){var t=F(tt)
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}var ot={draw:function(t,n){var i=Math.sqrt(n/v)
t.moveTo(i,0),t.arc(0,0,i,0,T)}},st={draw:function(t,n){var i=Math.sqrt(n/5)/2
t.moveTo(-3*i,-i),t.lineTo(-i,-i),t.lineTo(-i,-3*i),t.lineTo(i,-3*i),t.lineTo(i,-i),t.lineTo(3*i,-i),t.lineTo(3*i,i),t.lineTo(i,i),t.lineTo(i,3*i),t.lineTo(-i,3*i),t.lineTo(-i,i),t.lineTo(-3*i,i),t.closePath()}},rt=Math.sqrt(1/3),ht=2*rt,_t={draw:function(t,n){var i=Math.sqrt(n/ht),e=i*rt
t.moveTo(0,-i),t.lineTo(e,0),t.lineTo(0,i),t.lineTo(-e,0),t.closePath()}},ut=Math.sin(v/10)/Math.sin(7*v/10),at=Math.sin(T/10)*ut,ct=-Math.cos(T/10)*ut,lt={draw:function(t,n){var i=Math.sqrt(.8908130915292852*n),e=at*i,o=ct*i
t.moveTo(0,-i),t.lineTo(e,o)
for(var s=1;s<5;++s){var r=T*s/5,h=Math.cos(r),_=Math.sin(r)
t.lineTo(_*i,-h*i),t.lineTo(h*e-_*o,_*e+h*o)}t.closePath()}},ft={draw:function(t,n){var i=Math.sqrt(n),e=-i/2
t.rect(e,e,i,i)}},yt=Math.sqrt(3),xt={draw:function(t,n){var i=-Math.sqrt(n/(3*yt))
t.moveTo(0,2*i),t.lineTo(-yt*i,-i),t.lineTo(yt*i,-i),t.closePath()}},pt=Math.sqrt(3)/2,vt=1/Math.sqrt(12),dt=3*(vt/2+1),Tt={draw:function(t,n){var i=Math.sqrt(n/dt),e=i/2,o=i*vt,s=e,r=i*vt+i,h=-s,_=r
t.moveTo(e,o),t.lineTo(s,r),t.lineTo(h,_),t.lineTo(-.5*e-pt*o,pt*e+-.5*o),t.lineTo(-.5*s-pt*r,pt*s+-.5*r),t.lineTo(-.5*h-pt*_,pt*h+-.5*_),t.lineTo(-.5*e+pt*o,-.5*o-pt*e),t.lineTo(-.5*s+pt*r,-.5*r-pt*s),t.lineTo(-.5*h+pt*_,-.5*_-pt*h),t.closePath()}},gt=[ot,st,_t,ft,lt,xt,Tt],bt=function(t,n){var i=null
function e(){var e
if(i||(i=e=_()),t.apply(this,arguments).draw(i,+n.apply(this,arguments)),e)return i=null,e+""||null}return t="function"==typeof t?t:u(t||ot),n="function"==typeof n?n:u(void 0===n?64:+n),e.type=function(n){return arguments.length?(t="function"==typeof n?n:u(n),e):t},e.size=function(t){return arguments.length?(n="function"==typeof t?t:u(+t),e):n},e.context=function(t){return arguments.length?(i=null==t?null:t,e):i},e},mt=function(){}
function wt(t,n,i){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+i)/6)}function Mt(t){this._context=t}Mt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:wt(this,this._x1,this._y1)
case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6)
default:wt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}
var kt=function(t){return new Mt(t)}
function St(t){this._context=t}St.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath()
break
case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath()
break
case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n
break
case 1:this._point=2,this._x3=t,this._y3=n
break
case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6)
break
default:wt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}
var Nt=function(t){return new St(t)}
function At(t){this._context=t}At.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3
var i=(this._x0+4*this._x1+t)/6,e=(this._y0+4*this._y1+n)/6
this._line?this._context.lineTo(i,e):this._context.moveTo(i,e)
break
case 3:this._point=4
default:wt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}}
var Et=function(t){return new At(t)}
function Pt(t,n){this._basis=new Mt(t),this._beta=n}Pt.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,i=t.length-1
if(i>0)for(var e,o=t[0],s=n[0],r=t[i]-o,h=n[i]-s,_=-1;++_<=i;)e=_/i,this._basis.point(this._beta*t[_]+(1-this._beta)*(o+e*r),this._beta*n[_]+(1-this._beta)*(s+e*h))
this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}}
var Ct=function t(n){function i(t){return 1===n?new Mt(t):new Pt(t,n)}return i.beta=function(n){return t(+n)},i}(.85)
function qt(t,n,i){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-i),t._x2,t._y2)}function Ot(t,n){this._context=t,this._k=(1-n)/6}Ot.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:qt(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2,this._x1=t,this._y1=n
break
case 2:this._point=3
default:qt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var Rt=function t(n){function i(t){return new Ot(t,n)}return i.tension=function(n){return t(+n)},i}(0)
function zt(t,n){this._context=t,this._k=(1-n)/6}zt.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n)
break
case 2:this._point=3,this._x5=t,this._y5=n
break
default:qt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var It=function t(n){function i(t){return new zt(t,n)}return i.tension=function(n){return t(+n)},i}(0)
function Lt(t,n){this._context=t,this._k=(1-n)/6}Lt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:qt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var Xt=function t(n){function i(t){return new Lt(t,n)}return i.tension=function(n){return t(+n)},i}(0)
function Yt(t,n,i){var e=t._x1,o=t._y1,s=t._x2,r=t._y2
if(t._l01_a>1e-12){var h=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,_=3*t._l01_a*(t._l01_a+t._l12_a)
e=(e*h-t._x0*t._l12_2a+t._x2*t._l01_2a)/_,o=(o*h-t._y0*t._l12_2a+t._y2*t._l01_2a)/_}if(t._l23_a>1e-12){var u=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,a=3*t._l23_a*(t._l23_a+t._l12_a)
s=(s*u+t._x1*t._l23_2a-n*t._l12_2a)/a,r=(r*u+t._y1*t._l23_2a-i*t._l12_2a)/a}t._context.bezierCurveTo(e,o,s,r,t._x2,t._y2)}function jt(t,n){this._context=t,this._alpha=n}jt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3
default:Yt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var Bt=function t(n){function i(t){return n?new jt(t,n):new Ot(t,0)}return i.alpha=function(n){return t(+n)},i}(.5)
function Dt(t,n){this._context=t,this._alpha=n}Dt.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n)
break
case 2:this._point=3,this._x5=t,this._y5=n
break
default:Yt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var Jt=function t(n){function i(t){return n?new Dt(t,n):new zt(t,0)}return i.alpha=function(n){return t(+n)},i}(.5)
function Vt(t,n){this._context=t,this._alpha=n}Vt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var i=this._x2-t,e=this._y2-n
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+e*e,this._alpha))}switch(this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:Yt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}}
var Wt=function t(n){function i(t){return n?new Vt(t,n):new Lt(t,0)}return i.alpha=function(n){return t(+n)},i}(.5)
function Zt(t){this._context=t}Zt.prototype={areaStart:mt,areaEnd:mt,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}}
var Ht=function(t){return new Zt(t)}
function Qt(t){return t<0?-1:1}function Ut(t,n,i){var e=t._x1-t._x0,o=n-t._x1,s=(t._y1-t._y0)/(e||o<0&&-0),r=(i-t._y1)/(o||e<0&&-0),h=(s*o+r*e)/(e+o)
return(Qt(s)+Qt(r))*Math.min(Math.abs(s),Math.abs(r),.5*Math.abs(h))||0}function $t(t,n){var i=t._x1-t._x0
return i?(3*(t._y1-t._y0)/i-n)/2:n}function Ft(t,n,i){var e=t._x0,o=t._y0,s=t._x1,r=t._y1,h=(s-e)/3
t._context.bezierCurveTo(e+h,o+h*n,s-h,r-h*i,s,r)}function Gt(t){this._context=t}function Kt(t){this._context=new tn(t)}function tn(t){this._context=t}function nn(t){return new Gt(t)}function en(t){return new Kt(t)}function on(t){this._context=t}function sn(t){var n,i,e=t.length-1,o=new Array(e),s=new Array(e),r=new Array(e)
for(o[0]=0,s[0]=2,r[0]=t[0]+2*t[1],n=1;n<e-1;++n)o[n]=1,s[n]=4,r[n]=4*t[n]+2*t[n+1]
for(o[e-1]=2,s[e-1]=7,r[e-1]=8*t[e-1]+t[e],n=1;n<e;++n)i=o[n]/s[n-1],s[n]-=i,r[n]-=i*r[n-1]
for(o[e-1]=r[e-1]/s[e-1],n=e-2;n>=0;--n)o[n]=(r[n]-o[n+1])/s[n]
for(s[e-1]=(t[e]+o[e-1])/2,n=0;n<e-1;++n)s[n]=2*t[n+1]-o[n+1]
return[o,s]}Gt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1)
break
case 3:Ft(this,this._t0,$t(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var i=NaN
if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
break
case 2:this._point=3,Ft(this,$t(this,i=Ut(this,t,n)),i)
break
default:Ft(this,this._t0,i=Ut(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=i}}},(Kt.prototype=Object.create(Gt.prototype)).point=function(t,n){Gt.prototype.point.call(this,n,t)},tn.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,i,e,o,s){this._context.bezierCurveTo(n,t,e,i,s,o)}},on.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,i=t.length
if(i)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===i)this._context.lineTo(t[1],n[1])
else for(var e=sn(t),o=sn(n),s=0,r=1;r<i;++s,++r)this._context.bezierCurveTo(e[0][s],o[0][s],e[1][s],o[1][s],t[r],n[r]);(this._line||0!==this._line&&1===i)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}}
var rn=function(t){return new on(t)}
function hn(t,n){this._context=t,this._t=n}hn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n)
break
case 1:this._point=2
default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n)
else{var i=this._x*(1-this._t)+t*this._t
this._context.lineTo(i,this._y),this._context.lineTo(i,n)}}this._x=t,this._y=n}}
var _n=function(t){return new hn(t,.5)}
function un(t){return new hn(t,0)}function an(t){return new hn(t,1)}var cn=function(t,n){if((o=t.length)>1)for(var i,e,o,s=1,r=t[n[0]],h=r.length;s<o;++s)for(e=r,r=t[n[s]],i=0;i<h;++i)r[i][1]+=r[i][0]=isNaN(e[i][1])?e[i][0]:e[i][1]},ln=function(t){for(var n=t.length,i=new Array(n);--n>=0;)i[n]=n
return i}
function fn(t,n){var i
if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return yn(t,n)
var i=Object.prototype.toString.call(t).slice(8,-1)
return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?yn(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i)
var e=0,o=function(){}
return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,h=!1
return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next()
return r=t.done,t},e:function(t){h=!0,s=t},f:function(){try{r||null==i.return||i.return()}finally{if(h)throw s}}}}function yn(t,n){(null==n||n>t.length)&&(n=t.length)
for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i]
return e}function xn(t,n){return t[n]}function pn(t){var n=[]
return n.key=t,n}var vn=function(){var t=u([]),n=ln,i=cn,e=xn
function o(o){var s,r,h,_=Array.from(t.apply(this,arguments),pn),u=_.length,a=-1,c=fn(o)
try{for(c.s();!(h=c.n()).done;){var l=h.value
for(s=0,++a;s<u;++s)(_[s][a]=[0,+e(l,_[s].key,a,o)]).data=l}}catch(t){c.e(t)}finally{c.f()}for(s=0,r=q(n(_));s<u;++s)_[r[s]].index=s
return i(_,r),_}return o.keys=function(n){return arguments.length?(t="function"==typeof n?n:u(Array.from(n)),o):t},o.value=function(t){return arguments.length?(e="function"==typeof t?t:u(+t),o):e},o.order=function(t){return arguments.length?(n=null==t?ln:"function"==typeof t?t:u(Array.from(t)),o):n},o.offset=function(t){return arguments.length?(i=null==t?cn:t,o):i},o},dn=function(t,n){if((e=t.length)>0){for(var i,e,o,s=0,r=t[0].length;s<r;++s){for(o=i=0;i<e;++i)o+=t[i][s][1]||0
if(o)for(i=0;i<e;++i)t[i][s][1]/=o}cn(t,n)}},Tn=function(t,n){if((h=t.length)>0)for(var i,e,o,s,r,h,_=0,u=t[n[0]].length;_<u;++_)for(s=r=0,i=0;i<h;++i)(o=(e=t[n[i]][_])[1]-e[0])>0?(e[0]=s,e[1]=s+=o):o<0?(e[1]=r,e[0]=r+=o):(e[0]=0,e[1]=o)},gn=function(t,n){if((i=t.length)>0){for(var i,e=0,o=t[n[0]],s=o.length;e<s;++e){for(var r=0,h=0;r<i;++r)h+=t[r][e][1]||0
o[e][1]+=o[e][0]=-h/2}cn(t,n)}},bn=function(t,n){if((o=t.length)>0&&(e=(i=t[n[0]]).length)>0){for(var i,e,o,s=0,r=1;r<e;++r){for(var h=0,_=0,u=0;h<o;++h){for(var a=t[n[h]],c=a[r][1]||0,l=(c-(a[r-1][1]||0))/2,f=0;f<h;++f){var y=t[n[f]]
l+=(y[r][1]||0)-(y[r-1][1]||0)}_+=c,u+=l*c}i[r-1][1]+=i[r-1][0]=s,_&&(s-=u/_)}i[r-1][1]+=i[r-1][0]=s,cn(t,n)}},mn=function(t){var n=t.map(wn)
return ln(t).sort((function(t,i){return n[t]-n[i]}))}
function wn(t){for(var n,i=-1,e=0,o=t.length,s=-1/0;++i<o;)(n=+t[i][1])>s&&(s=n,e=i)
return e}var Mn=function(t){var n=t.map(kn)
return ln(t).sort((function(t,i){return n[t]-n[i]}))}
function kn(t){for(var n,i=0,e=-1,o=t.length;++e<o;)(n=+t[e][1])&&(i+=n)
return i}var Sn=function(t){return Mn(t).reverse()},Nn=function(t){var n,i,e=t.length,o=t.map(kn),s=mn(t),r=0,h=0,_=[],u=[]
for(n=0;n<e;++n)i=s[n],r<h?(r+=o[i],_.push(i)):(h+=o[i],u.push(i))
return u.reverse().concat(_)},An=function(t){return ln(t).reverse()}}}])
