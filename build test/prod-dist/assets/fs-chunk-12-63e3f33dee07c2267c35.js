(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[12],{34:function(module,exports,__webpack_require__){(function(module){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,t
function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
 * @license
 * 
 * dhtmlxScheduler v.6.0.0 Professional
 * 
 * This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.
 * 
 * (c) XB Software Ltd.
 * 
 */window,t=function(){return function(e){var t={}
function a(n){if(t[n])return t[n].exports
var i=t[n]={i:n,l:!1,exports:{}}
return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e
if(4&t&&"object"==_typeof2(e)&&e&&e.__esModule)return e
var n=Object.create(null)
if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i))
return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/codebase/",a(a.s=11)}([function(e,t,a){"use strict";(function(e){var a
a="undefined"!=typeof window?window:e,t.a=a}).call(this,a(1))},function(e,t){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":a(window))&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){return function(){var e={}
for(var t in this._events){var a=this._events[t];-1==a.id.toString().indexOf("#")&&(e[a.id]=a)}return e}.bind(e)}},function(e,t){e.exports=function(e){if("string"==typeof e||"number"==typeof e)return e
var t=""
for(var a in e){var n=""
e.hasOwnProperty(a)&&(n=a+"="+(n="string"==typeof e[a]?encodeURIComponent(e[a]):"number"==typeof e[a]?e[a]:encodeURIComponent(JSON.stringify(e[a]))),t.length&&(n="&"+n),t+=n)}return t}},function(e,t,a){"use strict"
a.r(t)},function(e,t){var a,n,i=e.exports={}
function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function _(e){if(a===setTimeout)return setTimeout(e,0)
if((a===r||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0)
try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:r}catch(e){a=r}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}()
var s,d=[],l=!1,c=-1
function h(){l&&s&&(l=!1,s.length?d=s.concat(d):c=-1,d.length&&u())}function u(){if(!l){var e=_(h)
l=!0
for(var t=d.length;t;){for(s=d,d=[];++c<t;)s&&s[c].run()
c=-1,t=d.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e)
if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e)
try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a]
d.push(new f(e,t)),1!==d.length||l||_(u)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,a){(function(a,n,i){var r,o,_
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2018 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */!function(a){"object"==s(t)&&void 0!==e?e.exports=a():(o=[],void 0===(_="function"==typeof(r=a)?r.apply(t,o):r)||(e.exports=_))}((function(){return function e(t,a,n){function i(o,_){if(!a[o]){if(!t[o]){var s="function"==typeof _dereq_&&_dereq_
if(!_&&s)return s(o,!0)
if(r)return r(o,!0)
var d=new Error("Cannot find module '"+o+"'")
throw d.code="MODULE_NOT_FOUND",d}var l=a[o]={exports:{}}
t[o][0].call(l.exports,(function(e){return i(t[o][1][e]||e)}),l,l.exports,e,t,a,n)}return a[o].exports}for(var r="function"==typeof _dereq_&&_dereq_,o=0;o<n.length;o++)i(n[o])
return i}({1:[function(e,t,n){"use strict"
var i
try{throw new Error}catch(e){i=e}var r=e("./schedule"),o=e("./queue")
function _(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new o(16),this._normalQueue=new o(16),this._haveDrainedQueues=!1
var e=this
this.drainQueues=function(){e._drainQueues()},this._schedule=r}function s(e){for(;e.length()>0;)d(e)}function d(e){var t=e.shift()
if("function"!=typeof t)t._settlePromises()
else{var a=e.shift(),n=e.shift()
t.call(a,n)}}_.prototype.setScheduler=function(e){var t=this._schedule
return this._schedule=e,this._customScheduler=!0,t},_.prototype.hasCustomScheduler=function(){return this._customScheduler},_.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues},_.prototype.fatalError=function(e,t){t?(a.stderr.write("Fatal "+(e instanceof Error?e.stack:e)+"\n"),a.exit(2)):this.throwLater(e)},_.prototype.throwLater=function(e,t){if(1===arguments.length&&(t=e,e=function(){throw t}),"undefined"!=typeof setTimeout)setTimeout((function(){e(t)}),0)
else try{this._schedule((function(){e(t)}))}catch(e){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}},_.prototype.invokeLater=function(e,t,a){this._lateQueue.push(e,t,a),this._queueTick()},_.prototype.invoke=function(e,t,a){this._normalQueue.push(e,t,a),this._queueTick()},_.prototype.settlePromises=function(e){this._normalQueue._pushOne(e),this._queueTick()},_.prototype._drainQueues=function(){s(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,s(this._lateQueue)},_.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},_.prototype._reset=function(){this._isTickUsed=!1},t.exports=_,t.exports.firstLineError=i},{"./queue":17,"./schedule":18}],2:[function(e,t,a){"use strict"
t.exports=function(e,t,a,n){var i=!1,r=function(e,t){this._reject(t)},o=function(e,t){t.promiseRejectionQueued=!0,t.bindingPromise._then(r,r,null,this,e)},_=function(e,t){0==(50397184&this._bitField)&&this._resolveCallback(t.target)},s=function(e,t){t.promiseRejectionQueued||this._reject(e)}
e.prototype.bind=function(r){i||(i=!0,e.prototype._propagateFrom=n.propagateFromFunction(),e.prototype._boundValue=n.boundValueFunction())
var d=a(r),l=new e(t)
l._propagateFrom(this,1)
var c=this._target()
if(l._setBoundTo(d),d instanceof e){var h={promiseRejectionQueued:!1,promise:l,target:c,bindingPromise:d}
c._then(t,o,void 0,l,h),d._then(_,s,void 0,l,h),l._setOnCancel(d)}else l._resolveCallback(c)
return l},e.prototype._setBoundTo=function(e){void 0!==e?(this._bitField=2097152|this._bitField,this._boundTo=e):this._bitField=-2097153&this._bitField},e.prototype._isBound=function(){return 2097152==(2097152&this._bitField)},e.bind=function(t,a){return e.resolve(a).bind(t)}}},{}],3:[function(e,t,a){"use strict"
var n
"undefined"!=typeof Promise&&(n=Promise)
var i=e("./promise")()
i.noConflict=function(){try{Promise===i&&(Promise=n)}catch(e){}return i},t.exports=i},{"./promise":15}],4:[function(e,t,a){"use strict"
t.exports=function(t,a,n,i){var r=e("./util"),o=r.tryCatch,_=r.errorObj,s=t._async
t.prototype.break=t.prototype.cancel=function(){if(!i.cancellation())return this._warn("cancellation is disabled")
for(var e=this,t=e;e._isCancellable();){if(!e._cancelBy(t)){t._isFollowing()?t._followee().cancel():t._cancelBranched()
break}var a=e._cancellationParent
if(null==a||!a._isCancellable()){e._isFollowing()?e._followee().cancel():e._cancelBranched()
break}e._isFollowing()&&e._followee().cancel(),e._setWillBeCancelled(),t=e,e=a}},t.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--},t.prototype._enoughBranchesHaveCancelled=function(){return void 0===this._branchesRemainingToCancel||this._branchesRemainingToCancel<=0},t.prototype._cancelBy=function(e){return e===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),!!this._enoughBranchesHaveCancelled()&&(this._invokeOnCancel(),!0))},t.prototype._cancelBranched=function(){this._enoughBranchesHaveCancelled()&&this._cancel()},t.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),s.invoke(this._cancelPromises,this,void 0))},t.prototype._cancelPromises=function(){this._length()>0&&this._settlePromises()},t.prototype._unsetOnCancel=function(){this._onCancelField=void 0},t.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled()},t.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled()},t.prototype._doInvokeOnCancel=function(e,t){if(r.isArray(e))for(var a=0;a<e.length;++a)this._doInvokeOnCancel(e[a],t)
else if(void 0!==e)if("function"==typeof e){if(!t){var n=o(e).call(this._boundValue())
n===_&&(this._attachExtraTrace(n.e),s.throwLater(n.e))}}else e._resultCancelled(this)},t.prototype._invokeOnCancel=function(){var e=this._onCancel()
this._unsetOnCancel(),s.invoke(this._doInvokeOnCancel,this,e)},t.prototype._invokeInternalOnCancel=function(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel())},t.prototype._resultCancelled=function(){this.cancel()}}},{"./util":21}],5:[function(e,t,a){"use strict"
t.exports=function(t){var a=e("./util"),n=e("./es5").keys,i=a.tryCatch,r=a.errorObj
return function(e,o,_){return function(s){var d=_._boundValue()
e:for(var l=0;l<e.length;++l){var c=e[l]
if(c===Error||null!=c&&c.prototype instanceof Error){if(s instanceof c)return i(o).call(d,s)}else if("function"==typeof c){var h=i(c).call(d,s)
if(h===r)return h
if(h)return i(o).call(d,s)}else if(a.isObject(s)){for(var u=n(c),f=0;f<u.length;++f){var p=u[f]
if(c[p]!=s[p])continue e}return i(o).call(d,s)}}return t}}}},{"./es5":10,"./util":21}],6:[function(e,t,a){"use strict"
t.exports=function(e){var t=!1,a=[]
function n(){this._trace=new n.CapturedTrace(i())}function i(){var e=a.length-1
if(e>=0)return a[e]}return e.prototype._promiseCreated=function(){},e.prototype._pushContext=function(){},e.prototype._popContext=function(){return null},e._peekContext=e.prototype._peekContext=function(){},n.prototype._pushContext=function(){void 0!==this._trace&&(this._trace._promiseCreated=null,a.push(this._trace))},n.prototype._popContext=function(){if(void 0!==this._trace){var e=a.pop(),t=e._promiseCreated
return e._promiseCreated=null,t}return null},n.CapturedTrace=null,n.create=function(){if(t)return new n},n.deactivateLongStackTraces=function(){},n.activateLongStackTraces=function(){var a=e.prototype._pushContext,r=e.prototype._popContext,o=e._peekContext,_=e.prototype._peekContext,s=e.prototype._promiseCreated
n.deactivateLongStackTraces=function(){e.prototype._pushContext=a,e.prototype._popContext=r,e._peekContext=o,e.prototype._peekContext=_,e.prototype._promiseCreated=s,t=!1},t=!0,e.prototype._pushContext=n.prototype._pushContext,e.prototype._popContext=n.prototype._popContext,e._peekContext=e.prototype._peekContext=i,e.prototype._promiseCreated=function(){var e=this._peekContext()
e&&null==e._promiseCreated&&(e._promiseCreated=this)}},n}},{}],7:[function(e,t,n){"use strict"
t.exports=function(t,n,i,r){var o,_,d,l,c=t._async,h=e("./errors").Warning,u=e("./util"),f=e("./es5"),p=u.canAttachTrace,v=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,g=/\((?:timers\.js):\d+:\d+\)/,m=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,y=null,b=null,x=!1,w=!(0==u.env("BLUEBIRD_DEBUG")),k=!(0==u.env("BLUEBIRD_WARNINGS")||!w&&!u.env("BLUEBIRD_WARNINGS")),E=!(0==u.env("BLUEBIRD_LONG_STACK_TRACES")||!w&&!u.env("BLUEBIRD_LONG_STACK_TRACES")),D=0!=u.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&(k||!!u.env("BLUEBIRD_W_FORGOTTEN_RETURN"))
!function(){var e=[]
function a(){for(var t=0;t<e.length;++t)e[t]._notifyUnhandledRejection()
n()}function n(){e.length=0}l=function(t){e.push(t),setTimeout(a,1)},f.defineProperty(t,"_unhandledRejectionCheck",{value:a}),f.defineProperty(t,"_unhandledRejectionClear",{value:n})}(),t.prototype.suppressUnhandledRejections=function(){var e=this._target()
e._bitField=-1048577&e._bitField|524288},t.prototype._ensurePossibleRejectionHandled=function(){0==(524288&this._bitField)&&(this._setRejectionIsUnhandled(),l(this))},t.prototype._notifyUnhandledRejectionIsHandled=function(){Y("rejectionHandled",o,void 0,this)},t.prototype._setReturnedNonUndefined=function(){this._bitField=268435456|this._bitField},t.prototype._returnedNonUndefined=function(){return 0!=(268435456&this._bitField)},t.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var e=this._settledValue()
this._setUnhandledRejectionIsNotified(),Y("unhandledRejection",_,e,this)}},t.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=262144|this._bitField},t.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-262145&this._bitField},t.prototype._isUnhandledRejectionNotified=function(){return(262144&this._bitField)>0},t.prototype._setRejectionIsUnhandled=function(){this._bitField=1048576|this._bitField},t.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-1048577&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},t.prototype._isRejectionUnhandled=function(){return(1048576&this._bitField)>0},t.prototype._warn=function(e,t,a){return q(e,t,a||this)},t.onPossiblyUnhandledRejection=function(e){var a=t._getContext()
_=u.contextBind(a,e)},t.onUnhandledRejectionHandled=function(e){var a=t._getContext()
o=u.contextBind(a,e)}
var S=function(){}
t.longStackTraces=function(){if(c.haveItemsQueued()&&!ne.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n")
if(!ne.longStackTraces&&G()){var e=t.prototype._captureStackTrace,a=t.prototype._attachExtraTrace,i=t.prototype._dereferenceTrace
ne.longStackTraces=!0,S=function(){if(c.haveItemsQueued()&&!ne.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n")
t.prototype._captureStackTrace=e,t.prototype._attachExtraTrace=a,t.prototype._dereferenceTrace=i,n.deactivateLongStackTraces(),ne.longStackTraces=!1},t.prototype._captureStackTrace=B,t.prototype._attachExtraTrace=V,t.prototype._dereferenceTrace=U,n.activateLongStackTraces()}},t.hasLongStackTraces=function(){return ne.longStackTraces&&G()}
var M={unhandledrejection:{before:function(){var e=u.global.onunhandledrejection
return u.global.onunhandledrejection=null,e},after:function(e){u.global.onunhandledrejection=e}},rejectionhandled:{before:function(){var e=u.global.onrejectionhandled
return u.global.onrejectionhandled=null,e},after:function(e){u.global.onrejectionhandled=e}}},C=function(){var e=function(e,t){if(!e)return!u.global.dispatchEvent(t)
var a
try{return a=e.before(),!u.global.dispatchEvent(t)}finally{e.after(a)}}
try{if("function"==typeof CustomEvent){var t=new CustomEvent("CustomEvent")
return u.global.dispatchEvent(t),function(t,a){t=t.toLowerCase()
var n=new CustomEvent(t,{detail:a,cancelable:!0})
return f.defineProperty(n,"promise",{value:a.promise}),f.defineProperty(n,"reason",{value:a.reason}),e(M[t],n)}}return"function"==typeof Event?(t=new Event("CustomEvent"),u.global.dispatchEvent(t),function(t,a){t=t.toLowerCase()
var n=new Event(t,{cancelable:!0})
return n.detail=a,f.defineProperty(n,"promise",{value:a.promise}),f.defineProperty(n,"reason",{value:a.reason}),e(M[t],n)}):((t=document.createEvent("CustomEvent")).initCustomEvent("testingtheevent",!1,!0,{}),u.global.dispatchEvent(t),function(t,a){t=t.toLowerCase()
var n=document.createEvent("CustomEvent")
return n.initCustomEvent(t,!1,!0,a),e(M[t],n)})}catch(e){}return function(){return!1}}(),N=u.isNode?function(){return a.emit.apply(a,arguments)}:u.global?function(e){var t="on"+e.toLowerCase(),a=u.global[t]
return!!a&&(a.apply(u.global,[].slice.call(arguments,1)),!0)}:function(){return!1}
function T(e,t){return{promise:t}}var A={promiseCreated:T,promiseFulfilled:T,promiseRejected:T,promiseResolved:T,promiseCancelled:T,promiseChained:function(e,t,a){return{promise:t,child:a}},warning:function(e,t){return{warning:t}},unhandledRejection:function(e,t,a){return{reason:t,promise:a}},rejectionHandled:T},O=function(e){var t=!1
try{t=N.apply(null,arguments)}catch(e){c.throwLater(e),t=!0}var a=!1
try{a=C(e,A[e].apply(null,arguments))}catch(e){c.throwLater(e),a=!0}return a||t}
function L(){return!1}function H(e,t,a){var n=this
try{e(t,a,(function(e){if("function"!=typeof e)throw new TypeError("onCancel must be a function, got: "+u.toString(e))
n._attachCancellationCallback(e)}))}catch(e){return e}}function P(e){if(!this._isCancellable())return this
var t=this._onCancel()
void 0!==t?u.isArray(t)?t.push(e):this._setOnCancel([t,e]):this._setOnCancel(e)}function j(){return this._onCancelField}function z(e){this._onCancelField=e}function R(){this._cancellationParent=void 0,this._onCancelField=void 0}function I(e,t){if(0!=(1&t)){this._cancellationParent=e
var a=e._branchesRemainingToCancel
void 0===a&&(a=0),e._branchesRemainingToCancel=a+1}0!=(2&t)&&e._isBound()&&this._setBoundTo(e._boundTo)}t.config=function(e){if("longStackTraces"in(e=Object(e))&&(e.longStackTraces?t.longStackTraces():!e.longStackTraces&&t.hasLongStackTraces()&&S()),"warnings"in e){var a=e.warnings
ne.warnings=!!a,D=ne.warnings,u.isObject(a)&&"wForgottenReturn"in a&&(D=!!a.wForgottenReturn)}if("cancellation"in e&&e.cancellation&&!ne.cancellation){if(c.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use")
t.prototype._clearCancellationData=R,t.prototype._propagateFrom=I,t.prototype._onCancel=j,t.prototype._setOnCancel=z,t.prototype._attachCancellationCallback=P,t.prototype._execute=H,F=I,ne.cancellation=!0}if("monitoring"in e&&(e.monitoring&&!ne.monitoring?(ne.monitoring=!0,t.prototype._fireEvent=O):!e.monitoring&&ne.monitoring&&(ne.monitoring=!1,t.prototype._fireEvent=L)),"asyncHooks"in e&&u.nodeSupportsAsyncResource){var n=ne.asyncHooks,o=!!e.asyncHooks
n!==o&&(ne.asyncHooks=o,o?i():r())}return t},t.prototype._fireEvent=L,t.prototype._execute=function(e,t,a){try{e(t,a)}catch(e){return e}},t.prototype._onCancel=function(){},t.prototype._setOnCancel=function(e){},t.prototype._attachCancellationCallback=function(e){},t.prototype._captureStackTrace=function(){},t.prototype._attachExtraTrace=function(){},t.prototype._dereferenceTrace=function(){},t.prototype._clearCancellationData=function(){},t.prototype._propagateFrom=function(e,t){}
var F=function(e,t){0!=(2&t)&&e._isBound()&&this._setBoundTo(e._boundTo)}
function $(){var e=this._boundTo
return void 0!==e&&e instanceof t?e.isFulfilled()?e.value():void 0:e}function B(){this._trace=new te(this._peekContext())}function V(e,t){if(p(e)){var a=this._trace
if(void 0!==a&&t&&(a=a._parent),void 0!==a)a.attachExtraTrace(e)
else if(!e.__stackCleaned__){var n=K(e)
u.notEnumerableProp(e,"stack",n.message+"\n"+n.stack.join("\n")),u.notEnumerableProp(e,"__stackCleaned__",!0)}}}function U(){this._trace=void 0}function q(e,a,n){if(ne.warnings){var i,r=new h(e)
if(a)n._attachExtraTrace(r)
else if(ne.longStackTraces&&(i=t._peekContext()))i.attachExtraTrace(r)
else{var o=K(r)
r.stack=o.message+"\n"+o.stack.join("\n")}O("warning",r)||X(r,"",!0)}}function W(e){for(var t=[],a=0;a<e.length;++a){var n=e[a],i="    (No stack trace)"===n||y.test(n),r=i&&Q(n)
i&&!r&&(x&&" "!==n.charAt(0)&&(n="    "+n),t.push(n))}return t}function K(e){var t=e.stack,a=e.toString()
return t="string"==typeof t&&t.length>0?function(e){for(var t=e.stack.replace(/\s+$/g,"").split("\n"),a=0;a<t.length;++a){var n=t[a]
if("    (No stack trace)"===n||y.test(n))break}return a>0&&"SyntaxError"!=e.name&&(t=t.slice(a)),t}(e):["    (No stack trace)"],{message:a,stack:"SyntaxError"==e.name?t:W(t)}}function X(e,t,a){if("undefined"!=typeof console){var n
if(u.isObject(e)){var i=e.stack
n=t+b(i,e)}else n=t+String(e)
"function"==typeof d?d(n,a):"function"!=typeof console.log&&"object"!==s(console.log)||console.log(n)}}function Y(e,t,a,n){var i=!1
try{"function"==typeof t&&(i=!0,"rejectionHandled"===e?t(n):t(a,n))}catch(e){c.throwLater(e)}"unhandledRejection"===e?O(e,a,n)||i||X(a,"Unhandled rejection "):O(e,n)}function J(e){var t
if("function"==typeof e)t="[function "+(e.name||"anonymous")+"]"
else{if(t=e&&"function"==typeof e.toString?e.toString():u.toString(e),/\[object [a-zA-Z0-9$_]+\]/.test(t))try{t=JSON.stringify(e)}catch(e){}0===t.length&&(t="(empty array)")}return"(<"+function(e){return e.length<41?e:e.substr(0,38)+"..."}(t)+">, no stack trace)"}function G(){return"function"==typeof ae}var Q=function(){return!1},Z=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/
function ee(e){var t=e.match(Z)
if(t)return{fileName:t[1],line:parseInt(t[2],10)}}function te(e){this._parent=e,this._promisesCreated=0
var t=this._length=1+(void 0===e?0:e._length)
ae(this,te),t>32&&this.uncycle()}u.inherits(te,Error),n.CapturedTrace=te,te.prototype.uncycle=function(){var e=this._length
if(!(e<2)){for(var t=[],a={},n=0,i=this;void 0!==i;++n)t.push(i),i=i._parent
for(n=(e=this._length=n)-1;n>=0;--n){var r=t[n].stack
void 0===a[r]&&(a[r]=n)}for(n=0;n<e;++n){var o=a[t[n].stack]
if(void 0!==o&&o!==n){o>0&&(t[o-1]._parent=void 0,t[o-1]._length=1),t[n]._parent=void 0,t[n]._length=1
var _=n>0?t[n-1]:this
o<e-1?(_._parent=t[o+1],_._parent.uncycle(),_._length=_._parent._length+1):(_._parent=void 0,_._length=1)
for(var s=_._length+1,d=n-2;d>=0;--d)t[d]._length=s,s++
return}}}},te.prototype.attachExtraTrace=function(e){if(!e.__stackCleaned__){this.uncycle()
for(var t=K(e),a=t.message,n=[t.stack],i=this;void 0!==i;)n.push(W(i.stack.split("\n"))),i=i._parent
!function(e){for(var t=e[0],a=1;a<e.length;++a){for(var n=e[a],i=t.length-1,r=t[i],o=-1,_=n.length-1;_>=0;--_)if(n[_]===r){o=_
break}for(_=o;_>=0;--_){var s=n[_]
if(t[i]!==s)break
t.pop(),i--}t=n}}(n),function(e){for(var t=0;t<e.length;++t)(0===e[t].length||t+1<e.length&&e[t][0]===e[t+1][0])&&(e.splice(t,1),t--)}(n),u.notEnumerableProp(e,"stack",function(e,t){for(var a=0;a<t.length-1;++a)t[a].push("From previous event:"),t[a]=t[a].join("\n")
return a<t.length&&(t[a]=t[a].join("\n")),e+"\n"+t.join("\n")}(a,n)),u.notEnumerableProp(e,"__stackCleaned__",!0)}}
var ae=function(){var e=/^\s*at\s*/,t=function(e,t){return"string"==typeof e?e:void 0!==t.name&&void 0!==t.message?t.toString():J(t)}
if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,y=e,b=t
var a=Error.captureStackTrace
return Q=function(e){return v.test(e)},function(e,t){Error.stackTraceLimit+=6,a(e,t),Error.stackTraceLimit-=6}}var n,i=new Error
if("string"==typeof i.stack&&i.stack.split("\n")[0].indexOf("stackDetection@")>=0)return y=/@/,b=t,x=!0,function(e){e.stack=(new Error).stack}
try{throw new Error}catch(e){n="stack"in e}return"stack"in i||!n||"number"!=typeof Error.stackTraceLimit?(b=function(e,t){return"string"==typeof e?e:"object"!==s(t)&&"function"!=typeof t||void 0===t.name||void 0===t.message?J(t):t.toString()},null):(y=e,b=t,function(e){Error.stackTraceLimit+=6
try{throw new Error}catch(t){e.stack=t.stack}Error.stackTraceLimit-=6})}()
"undefined"!=typeof console&&void 0!==console.warn&&(d=function(e){console.warn(e)},u.isNode&&a.stderr.isTTY?d=function(e,t){var a=t?"[33m":"[31m"
console.warn(a+e+"[0m\n")}:u.isNode||"string"!=typeof(new Error).stack||(d=function(e,t){console.warn("%c"+e,t?"color: darkorange":"color: red")}))
var ne={warnings:k,longStackTraces:!1,cancellation:!1,monitoring:!1,asyncHooks:!1}
return E&&t.longStackTraces(),{asyncHooks:function(){return ne.asyncHooks},longStackTraces:function(){return ne.longStackTraces},warnings:function(){return ne.warnings},cancellation:function(){return ne.cancellation},monitoring:function(){return ne.monitoring},propagateFromFunction:function(){return F},boundValueFunction:function(){return $},checkForgottenReturns:function(e,t,a,n,i){if(void 0===e&&null!==t&&D){if(void 0!==i&&i._returnedNonUndefined())return
if(0==(65535&n._bitField))return
a&&(a+=" ")
var r="",o=""
if(t._trace){for(var _=t._trace.stack.split("\n"),s=W(_),d=s.length-1;d>=0;--d){var l=s[d]
if(!g.test(l)){var c=l.match(m)
c&&(r="at "+c[1]+":"+c[2]+":"+c[3]+" ")
break}}if(s.length>0){var h=s[0]
for(d=0;d<_.length;++d)if(_[d]===h){d>0&&(o="\n"+_[d-1])
break}}}var u="a promise was created in a "+a+"handler "+r+"but was not returned from it, see http://goo.gl/rRqMUw"+o
n._warn(u,!0,t)}},setBounds:function(e,t){if(G()){for(var a,n,i=(e.stack||"").split("\n"),r=(t.stack||"").split("\n"),o=-1,_=-1,s=0;s<i.length;++s)if(d=ee(i[s])){a=d.fileName,o=d.line
break}for(s=0;s<r.length;++s){var d
if(d=ee(r[s])){n=d.fileName,_=d.line
break}}o<0||_<0||!a||!n||a!==n||o>=_||(Q=function(e){if(v.test(e))return!0
var t=ee(e)
return!!(t&&t.fileName===a&&o<=t.line&&t.line<=_)})}},warn:q,deprecated:function(e,t){var a=e+" is deprecated and will be removed in a future version."
return t&&(a+=" Use "+t+" instead."),q(a)},CapturedTrace:te,fireDomEvent:C,fireGlobalEvent:N}}},{"./errors":9,"./es5":10,"./util":21}],8:[function(e,t,a){"use strict"
t.exports=function(e){function t(){return this.value}function a(){throw this.reason}e.prototype.return=e.prototype.thenReturn=function(a){return a instanceof e&&a.suppressUnhandledRejections(),this._then(t,void 0,void 0,{value:a},void 0)},e.prototype.throw=e.prototype.thenThrow=function(e){return this._then(a,void 0,void 0,{reason:e},void 0)},e.prototype.catchThrow=function(e){if(arguments.length<=1)return this._then(void 0,a,void 0,{reason:e},void 0)
var t=arguments[1]
return this.caught(e,(function(){throw t}))},e.prototype.catchReturn=function(a){if(arguments.length<=1)return a instanceof e&&a.suppressUnhandledRejections(),this._then(void 0,t,void 0,{value:a},void 0)
var n=arguments[1]
return n instanceof e&&n.suppressUnhandledRejections(),this.caught(a,(function(){return n}))}}},{}],9:[function(e,t,a){"use strict"
var n,i,r=e("./es5"),o=r.freeze,_=e("./util"),s=_.inherits,d=_.notEnumerableProp
function l(e,t){function a(n){if(!(this instanceof a))return new a(n)
d(this,"message","string"==typeof n?n:t),d(this,"name",e),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this)}return s(a,Error),a}var c=l("Warning","warning"),h=l("CancellationError","cancellation error"),u=l("TimeoutError","timeout error"),f=l("AggregateError","aggregate error")
try{n=TypeError,i=RangeError}catch(e){n=l("TypeError","type error"),i=l("RangeError","range error")}for(var p="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),v=0;v<p.length;++v)"function"==typeof Array.prototype[p[v]]&&(f.prototype[p[v]]=Array.prototype[p[v]])
r.defineProperty(f.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),f.prototype.isOperational=!0
var g=0
function m(e){if(!(this instanceof m))return new m(e)
d(this,"name","OperationalError"),d(this,"message",e),this.cause=e,this.isOperational=!0,e instanceof Error?(d(this,"message",e.message),d(this,"stack",e.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}f.prototype.toString=function(){var e=Array(4*g+1).join(" "),t="\n"+e+"AggregateError of:\n"
g++,e=Array(4*g+1).join(" ")
for(var a=0;a<this.length;++a){for(var n=this[a]===this?"[Circular AggregateError]":this[a]+"",i=n.split("\n"),r=0;r<i.length;++r)i[r]=e+i[r]
t+=(n=i.join("\n"))+"\n"}return g--,t},s(m,Error)
var y=Error.__BluebirdErrorTypes__
y||(y=o({CancellationError:h,TimeoutError:u,OperationalError:m,RejectionError:m,AggregateError:f}),r.defineProperty(Error,"__BluebirdErrorTypes__",{value:y,writable:!1,enumerable:!1,configurable:!1})),t.exports={Error:Error,TypeError:n,RangeError:i,CancellationError:y.CancellationError,OperationalError:y.OperationalError,TimeoutError:y.TimeoutError,AggregateError:y.AggregateError,Warning:c}},{"./es5":10,"./util":21}],10:[function(e,t,a){var n=function(){"use strict"
return void 0===this}()
if(n)t.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:n,propertyIsWritable:function(e,t){var a=Object.getOwnPropertyDescriptor(e,t)
return!(a&&!a.writable&&!a.set)}}
else{var i={}.hasOwnProperty,r={}.toString,o={}.constructor.prototype,_=function(e){var t=[]
for(var a in e)i.call(e,a)&&t.push(a)
return t}
t.exports={isArray:function(e){try{return"[object Array]"===r.call(e)}catch(e){return!1}},keys:_,names:_,defineProperty:function(e,t,a){return e[t]=a.value,e},getDescriptor:function(e,t){return{value:e[t]}},freeze:function(e){return e},getPrototypeOf:function(e){try{return Object(e).constructor.prototype}catch(e){return o}},isES5:n,propertyIsWritable:function(){return!0}}}},{}],11:[function(e,t,a){"use strict"
t.exports=function(t,a,n){var i=e("./util"),r=t.CancellationError,o=i.errorObj,_=e("./catch_filter")(n)
function s(e,t,a){this.promise=e,this.type=t,this.handler=a,this.called=!1,this.cancelPromise=null}function d(e){this.finallyHandler=e}function l(e,t){return null!=e.cancelPromise&&(arguments.length>1?e.cancelPromise._reject(t):e.cancelPromise._cancel(),e.cancelPromise=null,!0)}function c(){return u.call(this,this.promise._target()._settledValue())}function h(e){if(!l(this,e))return o.e=e,o}function u(e){var i=this.promise,_=this.handler
if(!this.called){this.called=!0
var s=this.isFinallyHandler()?_.call(i._boundValue()):_.call(i._boundValue(),e)
if(s===n)return s
if(void 0!==s){i._setReturnedNonUndefined()
var u=a(s,i)
if(u instanceof t){if(null!=this.cancelPromise){if(u._isCancelled()){var f=new r("late cancellation observer")
return i._attachExtraTrace(f),o.e=f,o}u.isPending()&&u._attachCancellationCallback(new d(this))}return u._then(c,h,void 0,this,void 0)}}}return i.isRejected()?(l(this),o.e=e,o):(l(this),e)}return s.prototype.isFinallyHandler=function(){return 0===this.type},d.prototype._resultCancelled=function(){l(this.finallyHandler)},t.prototype._passThrough=function(e,t,a,n){return"function"!=typeof e?this.then():this._then(a,n,void 0,new s(this,t,e),void 0)},t.prototype.lastly=t.prototype.finally=function(e){return this._passThrough(e,0,u,u)},t.prototype.tap=function(e){return this._passThrough(e,1,u)},t.prototype.tapCatch=function(e){var a=arguments.length
if(1===a)return this._passThrough(e,1,void 0,u)
var n,r=new Array(a-1),o=0
for(n=0;n<a-1;++n){var s=arguments[n]
if(!i.isObject(s))return t.reject(new TypeError("tapCatch statement predicate: expecting an object but got "+i.classString(s)))
r[o++]=s}r.length=o
var d=arguments[n]
return this._passThrough(_(r,d,this),1,void 0,u)},s}},{"./catch_filter":5,"./util":21}],12:[function(e,t,a){"use strict"
t.exports=function(t,a,n,i,r){var o=e("./util")
o.canEvaluate,o.tryCatch,o.errorObj,t.join=function(){var e,t=arguments.length-1
t>0&&"function"==typeof arguments[t]&&(e=arguments[t])
var n=[].slice.call(arguments)
e&&n.pop()
var i=new a(n).promise()
return void 0!==e?i.spread(e):i}}},{"./util":21}],13:[function(e,t,a){"use strict"
t.exports=function(t,a,n,i,r){var o=e("./util"),_=o.tryCatch
t.method=function(e){if("function"!=typeof e)throw new t.TypeError("expecting a function but got "+o.classString(e))
return function(){var n=new t(a)
n._captureStackTrace(),n._pushContext()
var i=_(e).apply(this,arguments),o=n._popContext()
return r.checkForgottenReturns(i,o,"Promise.method",n),n._resolveFromSyncValue(i),n}},t.attempt=t.try=function(e){if("function"!=typeof e)return i("expecting a function but got "+o.classString(e))
var n,s=new t(a)
if(s._captureStackTrace(),s._pushContext(),arguments.length>1){r.deprecated("calling Promise.try with more than 1 argument")
var d=arguments[1],l=arguments[2]
n=o.isArray(d)?_(e).apply(l,d):_(e).call(l,d)}else n=_(e)()
var c=s._popContext()
return r.checkForgottenReturns(n,c,"Promise.try",s),s._resolveFromSyncValue(n),s},t.prototype._resolveFromSyncValue=function(e){e===o.errorObj?this._rejectCallback(e.e,!1):this._resolveCallback(e,!0)}}},{"./util":21}],14:[function(e,t,a){"use strict"
var n=e("./util"),i=n.maybeWrapAsError,r=e("./errors").OperationalError,o=e("./es5"),_=/^(?:name|message|stack|cause)$/
function s(e){var t
if(function(e){return e instanceof Error&&o.getPrototypeOf(e)===Error.prototype}(e)){(t=new r(e)).name=e.name,t.message=e.message,t.stack=e.stack
for(var a=o.keys(e),i=0;i<a.length;++i){var s=a[i]
_.test(s)||(t[s]=e[s])}return t}return n.markAsOriginatingFromRejection(e),e}t.exports=function(e,t){return function(a,n){if(null!==e){if(a){var r=s(i(a))
e._attachExtraTrace(r),e._reject(r)}else if(t){var o=[].slice.call(arguments,1)
e._fulfill(o)}else e._fulfill(n)
e=null}}}},{"./errors":9,"./es5":10,"./util":21}],15:[function(e,t,n){"use strict"
t.exports=function(){var n=function(){return new m("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},i=function(){return new O.PromiseInspection(this._target())},r=function(e){return O.reject(new m(e))}
function o(){}var _={},s=e("./util")
s.setReflectHandler(i)
var d=function(){var e=a.domain
return void 0===e?null:e},l=function(){return{domain:d(),async:null}},c=s.isNode&&s.nodeSupportsAsyncResource?e("async_hooks").AsyncResource:null,h=function(){return{domain:d(),async:new c("Bluebird::Promise")}},u=s.isNode?l:function(){return null}
s.notEnumerableProp(O,"_getContext",u)
var f=e("./es5"),p=e("./async"),v=new p
f.defineProperty(O,"_async",{value:v})
var g=e("./errors"),m=O.TypeError=g.TypeError
O.RangeError=g.RangeError
var y=O.CancellationError=g.CancellationError
O.TimeoutError=g.TimeoutError,O.OperationalError=g.OperationalError,O.RejectionError=g.OperationalError,O.AggregateError=g.AggregateError
var b=function(){},x={},w={},k=e("./thenables")(O,b),E=e("./promise_array")(O,b,k,r,o),D=e("./context")(O),S=(D.create,e("./debuggability")(O,D,(function(){u=h,s.notEnumerableProp(O,"_getContext",h)}),(function(){u=l,s.notEnumerableProp(O,"_getContext",l)}))),M=(S.CapturedTrace,e("./finally")(O,k,w)),C=e("./catch_filter")(w),N=e("./nodeback"),T=s.errorObj,A=s.tryCatch
function O(e){e!==b&&function(e,t){if(null==e||e.constructor!==O)throw new m("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n")
if("function"!=typeof t)throw new m("expecting a function but got "+s.classString(t))}(this,e),this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._resolveFromExecutor(e),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function L(e){this.promise._resolveCallback(e)}function H(e){this.promise._rejectCallback(e,!1)}function P(e){var t=new O(b)
t._fulfillmentHandler0=e,t._rejectionHandler0=e,t._promise0=e,t._receiver0=e}return O.prototype.toString=function(){return"[object Promise]"},O.prototype.caught=O.prototype.catch=function(e){var t=arguments.length
if(t>1){var a,n=new Array(t-1),i=0
for(a=0;a<t-1;++a){var o=arguments[a]
if(!s.isObject(o))return r("Catch statement predicate: expecting an object but got "+s.classString(o))
n[i++]=o}if(n.length=i,"function"!=typeof(e=arguments[a]))throw new m("The last argument to .catch() must be a function, got "+s.toString(e))
return this.then(void 0,C(n,e,this))}return this.then(void 0,e)},O.prototype.reflect=function(){return this._then(i,i,void 0,this,void 0)},O.prototype.then=function(e,t){if(S.warnings()&&arguments.length>0&&"function"!=typeof e&&"function"!=typeof t){var a=".then() only accepts functions but was passed: "+s.classString(e)
arguments.length>1&&(a+=", "+s.classString(t)),this._warn(a)}return this._then(e,t,void 0,void 0,void 0)},O.prototype.done=function(e,t){this._then(e,t,void 0,void 0,void 0)._setIsFinal()},O.prototype.spread=function(e){return"function"!=typeof e?r("expecting a function but got "+s.classString(e)):this.all()._then(e,void 0,void 0,x,void 0)},O.prototype.toJSON=function(){var e={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0}
return this.isFulfilled()?(e.fulfillmentValue=this.value(),e.isFulfilled=!0):this.isRejected()&&(e.rejectionReason=this.reason(),e.isRejected=!0),e},O.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new E(this).promise()},O.prototype.error=function(e){return this.caught(s.originatesFromRejection,e)},O.getNewLibraryCopy=t.exports,O.is=function(e){return e instanceof O},O.fromNode=O.fromCallback=function(e){var t=new O(b)
t._captureStackTrace()
var a=arguments.length>1&&!!Object(arguments[1]).multiArgs,n=A(e)(N(t,a))
return n===T&&t._rejectCallback(n.e,!0),t._isFateSealed()||t._setAsyncGuaranteed(),t},O.all=function(e){return new E(e).promise()},O.cast=function(e){var t=k(e)
return t instanceof O||((t=new O(b))._captureStackTrace(),t._setFulfilled(),t._rejectionHandler0=e),t},O.resolve=O.fulfilled=O.cast,O.reject=O.rejected=function(e){var t=new O(b)
return t._captureStackTrace(),t._rejectCallback(e,!0),t},O.setScheduler=function(e){if("function"!=typeof e)throw new m("expecting a function but got "+s.classString(e))
return v.setScheduler(e)},O.prototype._then=function(e,t,a,n,i){var r=void 0!==i,o=r?i:new O(b),_=this._target(),d=_._bitField
r||(o._propagateFrom(this,3),o._captureStackTrace(),void 0===n&&0!=(2097152&this._bitField)&&(n=0!=(50397184&d)?this._boundValue():_===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,o))
var l=u()
if(0!=(50397184&d)){var c,h,f=_._settlePromiseCtx
0!=(33554432&d)?(h=_._rejectionHandler0,c=e):0!=(16777216&d)?(h=_._fulfillmentHandler0,c=t,_._unsetRejectionIsUnhandled()):(f=_._settlePromiseLateCancellationObserver,h=new y("late cancellation observer"),_._attachExtraTrace(h),c=t),v.invoke(f,_,{handler:s.contextBind(l,c),promise:o,receiver:n,value:h})}else _._addCallbacks(e,t,o,n,l)
return o},O.prototype._length=function(){return 65535&this._bitField},O.prototype._isFateSealed=function(){return 0!=(117506048&this._bitField)},O.prototype._isFollowing=function(){return 67108864==(67108864&this._bitField)},O.prototype._setLength=function(e){this._bitField=-65536&this._bitField|65535&e},O.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)},O.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)},O.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)},O.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField},O.prototype._isFinal=function(){return(4194304&this._bitField)>0},O.prototype._unsetCancelled=function(){this._bitField=-65537&this._bitField},O.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)},O.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField},O.prototype._setAsyncGuaranteed=function(){if(!v.hasCustomScheduler()){var e=this._bitField
this._bitField=e|(536870912&e)>>2^134217728}},O.prototype._setNoAsyncGuarantee=function(){this._bitField=-134217729&(536870912|this._bitField)},O.prototype._receiverAt=function(e){var t=0===e?this._receiver0:this[4*e-4+3]
if(t!==_)return void 0===t&&this._isBound()?this._boundValue():t},O.prototype._promiseAt=function(e){return this[4*e-4+2]},O.prototype._fulfillmentHandlerAt=function(e){return this[4*e-4+0]},O.prototype._rejectionHandlerAt=function(e){return this[4*e-4+1]},O.prototype._boundValue=function(){},O.prototype._migrateCallback0=function(e){e._bitField
var t=e._fulfillmentHandler0,a=e._rejectionHandler0,n=e._promise0,i=e._receiverAt(0)
void 0===i&&(i=_),this._addCallbacks(t,a,n,i,null)},O.prototype._migrateCallbackAt=function(e,t){var a=e._fulfillmentHandlerAt(t),n=e._rejectionHandlerAt(t),i=e._promiseAt(t),r=e._receiverAt(t)
void 0===r&&(r=_),this._addCallbacks(a,n,i,r,null)},O.prototype._addCallbacks=function(e,t,a,n,i){var r=this._length()
if(r>=65531&&(r=0,this._setLength(0)),0===r)this._promise0=a,this._receiver0=n,"function"==typeof e&&(this._fulfillmentHandler0=s.contextBind(i,e)),"function"==typeof t&&(this._rejectionHandler0=s.contextBind(i,t))
else{var o=4*r-4
this[o+2]=a,this[o+3]=n,"function"==typeof e&&(this[o+0]=s.contextBind(i,e)),"function"==typeof t&&(this[o+1]=s.contextBind(i,t))}return this._setLength(r+1),r},O.prototype._proxy=function(e,t){this._addCallbacks(void 0,void 0,t,e,null)},O.prototype._resolveCallback=function(e,t){if(0==(117506048&this._bitField)){if(e===this)return this._rejectCallback(n(),!1)
var a=k(e,this)
if(!(a instanceof O))return this._fulfill(e)
t&&this._propagateFrom(a,2)
var i=a._target()
if(i!==this){var r=i._bitField
if(0==(50397184&r)){var o=this._length()
o>0&&i._migrateCallback0(this)
for(var _=1;_<o;++_)i._migrateCallbackAt(this,_)
this._setFollowing(),this._setLength(0),this._setFollowee(a)}else if(0!=(33554432&r))this._fulfill(i._value())
else if(0!=(16777216&r))this._reject(i._reason())
else{var s=new y("late cancellation observer")
i._attachExtraTrace(s),this._reject(s)}}else this._reject(n())}},O.prototype._rejectCallback=function(e,t,a){var n=s.ensureErrorObject(e),i=n===e
if(!i&&!a&&S.warnings()){var r="a promise was rejected with a non-error: "+s.classString(e)
this._warn(r,!0)}this._attachExtraTrace(n,!!t&&i),this._reject(e)},O.prototype._resolveFromExecutor=function(e){if(e!==b){var t=this
this._captureStackTrace(),this._pushContext()
var a=!0,n=this._execute(e,(function(e){t._resolveCallback(e)}),(function(e){t._rejectCallback(e,a)}))
a=!1,this._popContext(),void 0!==n&&t._rejectCallback(n,!0)}},O.prototype._settlePromiseFromHandler=function(e,t,a,n){var i=n._bitField
if(0==(65536&i)){var r
n._pushContext(),t===x?a&&"number"==typeof a.length?r=A(e).apply(this._boundValue(),a):(r=T).e=new m("cannot .spread() a non-array: "+s.classString(a)):r=A(e).call(t,a)
var o=n._popContext()
0==(65536&(i=n._bitField))&&(r===w?n._reject(a):r===T?n._rejectCallback(r.e,!1):(S.checkForgottenReturns(r,o,"",n,this),n._resolveCallback(r)))}},O.prototype._target=function(){for(var e=this;e._isFollowing();)e=e._followee()
return e},O.prototype._followee=function(){return this._rejectionHandler0},O.prototype._setFollowee=function(e){this._rejectionHandler0=e},O.prototype._settlePromise=function(e,t,a,n){var r=e instanceof O,_=this._bitField,s=0!=(134217728&_)
0!=(65536&_)?(r&&e._invokeInternalOnCancel(),a instanceof M&&a.isFinallyHandler()?(a.cancelPromise=e,A(t).call(a,n)===T&&e._reject(T.e)):t===i?e._fulfill(i.call(a)):a instanceof o?a._promiseCancelled(e):r||e instanceof E?e._cancel():a.cancel()):"function"==typeof t?r?(s&&e._setAsyncGuaranteed(),this._settlePromiseFromHandler(t,a,n,e)):t.call(a,n,e):a instanceof o?a._isResolved()||(0!=(33554432&_)?a._promiseFulfilled(n,e):a._promiseRejected(n,e)):r&&(s&&e._setAsyncGuaranteed(),0!=(33554432&_)?e._fulfill(n):e._reject(n))},O.prototype._settlePromiseLateCancellationObserver=function(e){var t=e.handler,a=e.promise,n=e.receiver,i=e.value
"function"==typeof t?a instanceof O?this._settlePromiseFromHandler(t,n,i,a):t.call(n,i,a):a instanceof O&&a._reject(i)},O.prototype._settlePromiseCtx=function(e){this._settlePromise(e.promise,e.handler,e.receiver,e.value)},O.prototype._settlePromise0=function(e,t,a){var n=this._promise0,i=this._receiverAt(0)
this._promise0=void 0,this._receiver0=void 0,this._settlePromise(n,e,i,t)},O.prototype._clearCallbackDataAtIndex=function(e){var t=4*e-4
this[t+2]=this[t+3]=this[t+0]=this[t+1]=void 0},O.prototype._fulfill=function(e){var t=this._bitField
if(!((117506048&t)>>>16)){if(e===this){var a=n()
return this._attachExtraTrace(a),this._reject(a)}this._setFulfilled(),this._rejectionHandler0=e,(65535&t)>0&&(0!=(134217728&t)?this._settlePromises():v.settlePromises(this),this._dereferenceTrace())}},O.prototype._reject=function(e){var t=this._bitField
if(!((117506048&t)>>>16)){if(this._setRejected(),this._fulfillmentHandler0=e,this._isFinal())return v.fatalError(e,s.isNode);(65535&t)>0?v.settlePromises(this):this._ensurePossibleRejectionHandled()}},O.prototype._fulfillPromises=function(e,t){for(var a=1;a<e;a++){var n=this._fulfillmentHandlerAt(a),i=this._promiseAt(a),r=this._receiverAt(a)
this._clearCallbackDataAtIndex(a),this._settlePromise(i,n,r,t)}},O.prototype._rejectPromises=function(e,t){for(var a=1;a<e;a++){var n=this._rejectionHandlerAt(a),i=this._promiseAt(a),r=this._receiverAt(a)
this._clearCallbackDataAtIndex(a),this._settlePromise(i,n,r,t)}},O.prototype._settlePromises=function(){var e=this._bitField,t=65535&e
if(t>0){if(0!=(16842752&e)){var a=this._fulfillmentHandler0
this._settlePromise0(this._rejectionHandler0,a,e),this._rejectPromises(t,a)}else{var n=this._rejectionHandler0
this._settlePromise0(this._fulfillmentHandler0,n,e),this._fulfillPromises(t,n)}this._setLength(0)}this._clearCancellationData()},O.prototype._settledValue=function(){var e=this._bitField
return 0!=(33554432&e)?this._rejectionHandler0:0!=(16777216&e)?this._fulfillmentHandler0:void 0},"undefined"!=typeof Symbol&&Symbol.toStringTag&&f.defineProperty(O.prototype,Symbol.toStringTag,{get:function(){return"Object"}}),O.defer=O.pending=function(){return S.deprecated("Promise.defer","new Promise"),{promise:new O(b),resolve:L,reject:H}},s.notEnumerableProp(O,"_makeSelfResolutionError",n),e("./method")(O,b,k,r,S),e("./bind")(O,b,k,S),e("./cancel")(O,E,r,S),e("./direct_resolve")(O),e("./synchronous_inspection")(O),e("./join")(O,E,k,b,v),O.Promise=O,O.version="3.7.2",s.toFastProperties(O),s.toFastProperties(O.prototype),P({a:1}),P({b:2}),P({c:3}),P(1),P((function(){})),P(void 0),P(!1),P(new O(b)),S.setBounds(p.firstLineError,s.lastLineError),O}},{"./async":1,"./bind":2,"./cancel":4,"./catch_filter":5,"./context":6,"./debuggability":7,"./direct_resolve":8,"./errors":9,"./es5":10,"./finally":11,"./join":12,"./method":13,"./nodeback":14,"./promise_array":16,"./synchronous_inspection":19,"./thenables":20,"./util":21,async_hooks:void 0}],16:[function(e,t,a){"use strict"
t.exports=function(t,a,n,i,r){var o=e("./util")
function _(e){var n=this._promise=new t(a)
e instanceof t&&(n._propagateFrom(e,3),e.suppressUnhandledRejections()),n._setOnCancel(this),this._values=e,this._length=0,this._totalResolved=0,this._init(void 0,-2)}return o.isArray,o.inherits(_,r),_.prototype.length=function(){return this._length},_.prototype.promise=function(){return this._promise},_.prototype._init=function e(a,r){var _=n(this._values,this._promise)
if(_ instanceof t){var s=(_=_._target())._bitField
if(this._values=_,0==(50397184&s))return this._promise._setAsyncGuaranteed(),_._then(e,this._reject,void 0,this,r)
if(0==(33554432&s))return 0!=(16777216&s)?this._reject(_._reason()):this._cancel()
_=_._value()}if(null!==(_=o.asArray(_)))0!==_.length?this._iterate(_):-5===r?this._resolveEmptyArray():this._resolve(function(e){switch(e){case-2:return[]
case-3:return{}
case-6:return new Map}}(r))
else{var d=i("expecting an array or an iterable object but got "+o.classString(_)).reason()
this._promise._rejectCallback(d,!1)}},_.prototype._iterate=function(e){var a=this.getActualLength(e.length)
this._length=a,this._values=this.shouldCopyValues()?new Array(a):this._values
for(var i=this._promise,r=!1,o=null,_=0;_<a;++_){var s=n(e[_],i)
o=s instanceof t?(s=s._target())._bitField:null,r?null!==o&&s.suppressUnhandledRejections():null!==o?0==(50397184&o)?(s._proxy(this,_),this._values[_]=s):r=0!=(33554432&o)?this._promiseFulfilled(s._value(),_):0!=(16777216&o)?this._promiseRejected(s._reason(),_):this._promiseCancelled(_):r=this._promiseFulfilled(s,_)}r||i._setAsyncGuaranteed()},_.prototype._isResolved=function(){return null===this._values},_.prototype._resolve=function(e){this._values=null,this._promise._fulfill(e)},_.prototype._cancel=function(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel())},_.prototype._reject=function(e){this._values=null,this._promise._rejectCallback(e,!1)},_.prototype._promiseFulfilled=function(e,t){return this._values[t]=e,++this._totalResolved>=this._length&&(this._resolve(this._values),!0)},_.prototype._promiseCancelled=function(){return this._cancel(),!0},_.prototype._promiseRejected=function(e){return this._totalResolved++,this._reject(e),!0},_.prototype._resultCancelled=function(){if(!this._isResolved()){var e=this._values
if(this._cancel(),e instanceof t)e.cancel()
else for(var a=0;a<e.length;++a)e[a]instanceof t&&e[a].cancel()}},_.prototype.shouldCopyValues=function(){return!0},_.prototype.getActualLength=function(e){return e},_}},{"./util":21}],17:[function(e,t,a){"use strict"
function n(e){this._capacity=e,this._length=0,this._front=0}n.prototype._willBeOverCapacity=function(e){return this._capacity<e},n.prototype._pushOne=function(e){var t=this.length()
this._checkCapacity(t+1),this[this._front+t&this._capacity-1]=e,this._length=t+1},n.prototype.push=function(e,t,a){var n=this.length()+3
if(this._willBeOverCapacity(n))return this._pushOne(e),this._pushOne(t),void this._pushOne(a)
var i=this._front+n-3
this._checkCapacity(n)
var r=this._capacity-1
this[i+0&r]=e,this[i+1&r]=t,this[i+2&r]=a,this._length=n},n.prototype.shift=function(){var e=this._front,t=this[e]
return this[e]=void 0,this._front=e+1&this._capacity-1,this._length--,t},n.prototype.length=function(){return this._length},n.prototype._checkCapacity=function(e){this._capacity<e&&this._resizeTo(this._capacity<<1)},n.prototype._resizeTo=function(e){var t=this._capacity
this._capacity=e,function(e,t,a,n,i){for(var r=0;r<i;++r)a[r+n]=e[r+0],e[r+0]=void 0}(this,0,this,t,this._front+this._length&t-1)},t.exports=n},{}],18:[function(e,t,r){"use strict"
var o,_=e("./util"),s=_.getNativePromise()
if(_.isNode&&"undefined"==typeof MutationObserver){var d=n.setImmediate,l=a.nextTick
o=_.isRecentNode?function(e){d.call(n,e)}:function(e){l.call(a,e)}}else if("function"==typeof s&&"function"==typeof s.resolve){var c=s.resolve()
o=function(e){c.then(e)}}else o="undefined"==typeof MutationObserver||"undefined"!=typeof window&&window.navigator&&(window.navigator.standalone||window.cordova)||!("classList"in document.documentElement)?void 0!==i?function(e){i(e)}:"undefined"!=typeof setTimeout?function(e){setTimeout(e,0)}:function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}:function(){var e=document.createElement("div"),t={attributes:!0},a=!1,n=document.createElement("div")
return new MutationObserver((function(){e.classList.toggle("foo"),a=!1})).observe(n,t),function(i){var r=new MutationObserver((function(){r.disconnect(),i()}))
r.observe(e,t),a||(a=!0,n.classList.toggle("foo"))}}()
t.exports=o},{"./util":21}],19:[function(e,t,a){"use strict"
t.exports=function(e){function t(e){void 0!==e?(e=e._target(),this._bitField=e._bitField,this._settledValueField=e._isFateSealed()?e._settledValue():void 0):(this._bitField=0,this._settledValueField=void 0)}t.prototype._settledValue=function(){return this._settledValueField}
var a=t.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n")
return this._settledValue()},n=t.prototype.error=t.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n")
return this._settledValue()},i=t.prototype.isFulfilled=function(){return 0!=(33554432&this._bitField)},r=t.prototype.isRejected=function(){return 0!=(16777216&this._bitField)},o=t.prototype.isPending=function(){return 0==(50397184&this._bitField)},_=t.prototype.isResolved=function(){return 0!=(50331648&this._bitField)}
t.prototype.isCancelled=function(){return 0!=(8454144&this._bitField)},e.prototype.__isCancelled=function(){return 65536==(65536&this._bitField)},e.prototype._isCancelled=function(){return this._target().__isCancelled()},e.prototype.isCancelled=function(){return 0!=(8454144&this._target()._bitField)},e.prototype.isPending=function(){return o.call(this._target())},e.prototype.isRejected=function(){return r.call(this._target())},e.prototype.isFulfilled=function(){return i.call(this._target())},e.prototype.isResolved=function(){return _.call(this._target())},e.prototype.value=function(){return a.call(this._target())},e.prototype.reason=function(){var e=this._target()
return e._unsetRejectionIsUnhandled(),n.call(e)},e.prototype._value=function(){return this._settledValue()},e.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue()},e.PromiseInspection=t}},{}],20:[function(e,t,a){"use strict"
t.exports=function(t,a){var n=e("./util"),i=n.errorObj,r=n.isObject,o={}.hasOwnProperty
return function(e,_){if(r(e)){if(e instanceof t)return e
var s=function(e){try{return function(e){return e.then}(e)}catch(e){return i.e=e,i}}(e)
if(s===i){_&&_._pushContext()
var d=t.reject(s.e)
return _&&_._popContext(),d}if("function"==typeof s)return function(e){try{return o.call(e,"_promise0")}catch(e){return!1}}(e)?(d=new t(a),e._then(d._fulfill,d._reject,void 0,d,null),d):function(e,r,o){var _=new t(a),s=_
o&&o._pushContext(),_._captureStackTrace(),o&&o._popContext()
var d=!0,l=n.tryCatch(r).call(e,(function(e){_&&(_._resolveCallback(e),_=null)}),(function(e){_&&(_._rejectCallback(e,d,!0),_=null)}))
return d=!1,_&&l===i&&(_._rejectCallback(l.e,!0,!0),_=null),s}(e,s,_)}return e}}},{"./util":21}],21:[function(e,t,i){"use strict"
var r,o=e("./es5"),_="undefined"==typeof navigator,d={e:{}},l="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:void 0!==this?this:null
function c(){try{var e=r
return r=null,e.apply(this,arguments)}catch(e){return d.e=e,d}}function h(e){return null==e||!0===e||!1===e||"string"==typeof e||"number"==typeof e}function u(e,t,a){if(h(e))return e
var n={value:a,configurable:!0,enumerable:!1,writable:!0}
return o.defineProperty(e,t,n),e}var f=function(){var e=[Array.prototype,Object.prototype,Function.prototype],t=function(t){for(var a=0;a<e.length;++a)if(e[a]===t)return!0
return!1}
if(o.isES5){var a=Object.getOwnPropertyNames
return function(e){for(var n=[],i=Object.create(null);null!=e&&!t(e);){var r
try{r=a(e)}catch(e){return n}for(var _=0;_<r.length;++_){var s=r[_]
if(!i[s]){i[s]=!0
var d=Object.getOwnPropertyDescriptor(e,s)
null!=d&&null==d.get&&null==d.set&&n.push(s)}}e=o.getPrototypeOf(e)}return n}}var n={}.hasOwnProperty
return function(a){if(t(a))return[]
var i=[]
e:for(var r in a)if(n.call(a,r))i.push(r)
else{for(var o=0;o<e.length;++o)if(n.call(e[o],r))continue e
i.push(r)}return i}}(),p=/this\s*\.\s*\S+\s*=/,v=/^[a-z$_][a-z$_0-9]*$/i
function g(e){try{return e+""}catch(e){return"[no string representation]"}}function m(e){return e instanceof Error||null!==e&&"object"===s(e)&&"string"==typeof e.message&&"string"==typeof e.name}function y(e){return m(e)&&o.propertyIsWritable(e,"stack")}var b="stack"in new Error?function(e){return y(e)?e:new Error(g(e))}:function(e){if(y(e))return e
try{throw new Error(g(e))}catch(e){return e}}
function x(e){return{}.toString.call(e)}var w=function(e){return o.isArray(e)?e:null}
if("undefined"!=typeof Symbol&&Symbol.iterator){var k="function"==typeof Array.from?function(e){return Array.from(e)}:function(e){for(var t,a=[],n=e[Symbol.iterator]();!(t=n.next()).done;)a.push(t.value)
return a}
w=function(e){return o.isArray(e)?e:null!=e&&"function"==typeof e[Symbol.iterator]?k(e):null}}var E,D=void 0!==a&&"[object process]"===x(a).toLowerCase(),S=void 0!==a&&void 0!==a.env,M={setReflectHandler:function(e){E=e},isClass:function(e){try{if("function"==typeof e){var t=o.names(e.prototype),a=o.isES5&&t.length>1,n=t.length>0&&!(1===t.length&&"constructor"===t[0]),i=p.test(e+"")&&o.names(e).length>0
if(a||n||i)return!0}return!1}catch(e){return!1}},isIdentifier:function(e){return v.test(e)},inheritedDataKeys:f,getDataPropertyOrDefault:function(e,t,a){if(!o.isES5)return{}.hasOwnProperty.call(e,t)?e[t]:void 0
var n=Object.getOwnPropertyDescriptor(e,t)
return null!=n?null==n.get&&null==n.set?n.value:a:void 0},thrower:function(e){throw e},isArray:o.isArray,asArray:w,notEnumerableProp:u,isPrimitive:h,isObject:function(e){return"function"==typeof e||"object"===s(e)&&null!==e},isError:m,canEvaluate:_,errorObj:d,tryCatch:function(e){return r=e,c},inherits:function(e,t){var a={}.hasOwnProperty
function n(){for(var n in this.constructor=e,this.constructor$=t,t.prototype)a.call(t.prototype,n)&&"$"!==n.charAt(n.length-1)&&(this[n+"$"]=t.prototype[n])}return n.prototype=t.prototype,e.prototype=new n,e.prototype},withAppended:function(e,t){var a,n=e.length,i=new Array(n+1)
for(a=0;a<n;++a)i[a]=e[a]
return i[a]=t,i},maybeWrapAsError:function(e){return h(e)?new Error(g(e)):e},toFastProperties:function(e){function t(){}t.prototype=e
var a=new t
function n(){return s(a.foo)}return n(),n(),e},filledRange:function(e,t,a){for(var n=new Array(e),i=0;i<e;++i)n[i]=t+i+a
return n},toString:g,canAttachTrace:y,ensureErrorObject:b,originatesFromRejection:function(e){return null!=e&&(e instanceof Error.__BluebirdErrorTypes__.OperationalError||!0===e.isOperational)},markAsOriginatingFromRejection:function(e){try{u(e,"isOperational",!0)}catch(e){}},classString:x,copyDescriptors:function(e,t,a){for(var n=o.names(e),i=0;i<n.length;++i){var r=n[i]
if(a(r))try{o.defineProperty(t,r,o.getDescriptor(e,r))}catch(e){}}},isNode:D,hasEnvVariables:S,env:function(e){return S?a.env[e]:void 0},global:l,getNativePromise:function(){if("function"==typeof Promise)try{if("[object Promise]"===x(new Promise((function(){}))))return Promise}catch(e){}},contextBind:function(e,t){if(null===e||"function"!=typeof t||t===E)return t
null!==e.domain&&(t=e.domain.bind(t))
var a=e.async
if(null!==a){var n=t
t=function(){var e=new Array(2).concat([].slice.call(arguments))
return e[0]=n,e[1]=this,a.runInAsyncScope.apply(a,e)}}return t}}
M.isRecentNode=M.isNode&&function(){var e
return a.versions&&a.versions.node?e=a.versions.node.split(".").map(Number):a.version&&(e=a.version.split(".").map(Number)),0===e[0]&&e[1]>10||e[0]>0}(),M.nodeSupportsAsyncResource=M.isNode&&function(){var t=!1
try{t="function"==typeof e("async_hooks").AsyncResource.prototype.runInAsyncScope}catch(e){t=!1}return t}(),M.isNode&&M.toFastProperties(a)
try{throw new Error}catch(e){M.lastLineError=e}t.exports=M},{"./es5":10,async_hooks:void 0}]},{},[3])(3)})),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise)}).call(this,a(5),a(1),a(9).setImmediate)},function(module,__webpack_exports__,__webpack_require__){"use strict"
__webpack_require__.d(__webpack_exports__,"a",(function(){return extend}))
var _global__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_dhtmlx_error__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8)
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function extend(){_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlx||(_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlx=function(e){for(var t in e)dhtmlx[t]=e[t]
return dhtmlx})
var dhtmlx=_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlx
function dtmlXMLLoaderObject(e,t,a,n){return this.xmlDoc="",this.async=void 0===a||a,this.onloadAction=e||null,this.mainObject=t||null,this.waitCall=null,this.rSeed=n||!1,this}function dhtmlDragAndDropObject(){return _global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop?_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop:(this.lastLanding=0,this.dragNode=0,this.dragStartNode=0,this.dragStartObject=0,this.tempDOMU=null,this.tempDOMM=null,this.waitDrag=0,_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop=this,this)}dhtmlx.extend_api=function(e,t,a){var n=_global__WEBPACK_IMPORTED_MODULE_0__.a[e]
n&&(_global__WEBPACK_IMPORTED_MODULE_0__.a[e]=function(e){var a
if(e&&"object"==_typeof(e)&&!e.tagName){for(var i in a=n.apply(this,t._init?t._init(e):arguments),dhtmlx)t[i]&&this[t[i]](dhtmlx[i])
for(var i in e)t[i]?this[t[i]](e[i]):0===i.indexOf("on")&&this.attachEvent(i,e[i])}else a=n.apply(this,arguments)
return t._patch&&t._patch(this),a||this},_global__WEBPACK_IMPORTED_MODULE_0__.a[e].prototype=n.prototype,a&&dhtmlXHeir(_global__WEBPACK_IMPORTED_MODULE_0__.a[e].prototype,a))},_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlxAjax={get:function(e,t){var a=new dtmlXMLLoaderObject(!0)
return a.async=arguments.length<3,a.waitCall=t,a.loadXML(e),a},post:function(e,t,a){var n=new dtmlXMLLoaderObject(!0)
return n.async=arguments.length<4,n.waitCall=a,n.loadXML(e,!0,t),n},getSync:function(e){return this.get(e,null,!0)},postSync:function(e,t){return this.post(e,t,null,!0)}},_global__WEBPACK_IMPORTED_MODULE_0__.a.dtmlXMLLoaderObject=dtmlXMLLoaderObject,dtmlXMLLoaderObject.count=0,dtmlXMLLoaderObject.prototype.waitLoadFunction=function(e){var t=!0
return this.check=function(){if(e&&e.onloadAction&&(!e.xmlDoc.readyState||4==e.xmlDoc.readyState)){if(!t)return
t=!1,dtmlXMLLoaderObject.count++,"function"==typeof e.onloadAction&&e.onloadAction(e.mainObject,null,null,null,e),e.waitCall&&(e.waitCall.call(this,e),e.waitCall=null)}},this.check},dtmlXMLLoaderObject.prototype.getXMLTopNode=function(e,t){var a
if(this.xmlDoc.responseXML){if(0===(n=this.xmlDoc.responseXML.getElementsByTagName(e)).length&&-1!=e.indexOf(":"))var n=this.xmlDoc.responseXML.getElementsByTagName(e.split(":")[1])
a=n[0]}else a=this.xmlDoc.documentElement
return a?(this._retry=!1,a):!this._retry&&_isIE?(this._retry=!0,t=this.xmlDoc,this.loadXMLString(this.xmlDoc.responseText.replace(/^[\s]+/,""),!0),this.getXMLTopNode(e,t)):(dhtmlxError.throwError("LoadXML","Incorrect XML",[t||this.xmlDoc,this.mainObject]),document.createElement("div"))},dtmlXMLLoaderObject.prototype.loadXMLString=function(e,t){if(_isIE)this.xmlDoc=new ActiveXObject("Microsoft.XMLDOM"),this.xmlDoc.async=this.async,this.xmlDoc.onreadystatechange=function(){},this.xmlDoc.loadXML(e)
else{var a=new DOMParser
this.xmlDoc=a.parseFromString(e,"text/xml")}t||(this.onloadAction&&this.onloadAction(this.mainObject,null,null,null,this),this.waitCall&&(this.waitCall(),this.waitCall=null))},dtmlXMLLoaderObject.prototype.loadXML=function(e,t,a,n){this.rSeed&&(e+=(-1!=e.indexOf("?")?"&":"?")+"a_dhx_rSeed="+(new Date).valueOf()),this.filePath=e,!_isIE&&_global__WEBPACK_IMPORTED_MODULE_0__.a.XMLHttpRequest?this.xmlDoc=new XMLHttpRequest:this.xmlDoc=new ActiveXObject("Microsoft.XMLHTTP"),this.async&&(this.xmlDoc.onreadystatechange=new this.waitLoadFunction(this)),"string"==typeof t?this.xmlDoc.open(t,e,this.async):this.xmlDoc.open(t?"POST":"GET",e,this.async),n?(this.xmlDoc.setRequestHeader("User-Agent","dhtmlxRPC v0.1 ("+navigator.userAgent+")"),this.xmlDoc.setRequestHeader("Content-type","text/xml")):t&&this.xmlDoc.setRequestHeader("Content-type","application/x-www-form-urlencoded"),this.xmlDoc.setRequestHeader("X-Requested-With","XMLHttpRequest"),this.xmlDoc.send(a),this.async||new this.waitLoadFunction(this)()},dtmlXMLLoaderObject.prototype.destructor=function(){return this._filterXPath=null,this._getAllNamedChilds=null,this._retry=null,this.async=null,this.rSeed=null,this.filePath=null,this.onloadAction=null,this.mainObject=null,this.xmlDoc=null,this.doXPath=null,this.doXPathOpera=null,this.doXSLTransToObject=null,this.doXSLTransToString=null,this.loadXML=null,this.loadXMLString=null,this.doSerialization=null,this.xmlNodeToJSON=null,this.getXMLTopNode=null,this.setXSLParamValue=null,null},dtmlXMLLoaderObject.prototype.xmlNodeToJSON=function(e){for(var t={},a=0;a<e.attributes.length;a++)t[e.attributes[a].name]=e.attributes[a].value
for(t._tagvalue=e.firstChild?e.firstChild.nodeValue:"",a=0;a<e.childNodes.length;a++){var n=e.childNodes[a].tagName
n&&(t[n]||(t[n]=[]),t[n].push(this.xmlNodeToJSON(e.childNodes[a])))}return t},_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDropObject=dhtmlDragAndDropObject,dhtmlDragAndDropObject.prototype.removeDraggableItem=function(e){e.onmousedown=null,e.dragStarter=null,e.dragLanding=null},dhtmlDragAndDropObject.prototype.addDraggableItem=function(e,t){e.onmousedown=this.preCreateDragCopy,e.dragStarter=t,this.addDragLanding(e,t)},dhtmlDragAndDropObject.prototype.addDragLanding=function(e,t){e.dragLanding=t},dhtmlDragAndDropObject.prototype.preCreateDragCopy=function(e){if(!e&&!_global__WEBPACK_IMPORTED_MODULE_0__.a.event||2!=(e||event).button)return _global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.waitDrag?(_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.waitDrag=0,document.body.onmouseup=_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.tempDOMU,document.body.onmousemove=_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.tempDOMM,!1):(_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.dragNode&&_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.stopDrag(e),_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.waitDrag=1,_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.tempDOMU=document.body.onmouseup,_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.tempDOMM=document.body.onmousemove,_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.dragStartNode=this,_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.dragStartObject=this.dragStarter,document.body.onmouseup=_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.preCreateDragCopy,document.body.onmousemove=_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.callDrag,_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.downtime=(new Date).valueOf(),!(!e||!e.preventDefault||(e.preventDefault(),1)))},dhtmlDragAndDropObject.prototype.callDrag=function(e){e||(e=_global__WEBPACK_IMPORTED_MODULE_0__.a.event)
var t=_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop
if(!((new Date).valueOf()-t.downtime<100)){if(!t.dragNode){if(!t.waitDrag)return t.stopDrag(e,!0)
if(t.dragNode=t.dragStartObject._createDragNode(t.dragStartNode,e),!t.dragNode)return t.stopDrag()
t.dragNode.onselectstart=function(){return!1},t.gldragNode=t.dragNode,document.body.appendChild(t.dragNode),document.body.onmouseup=t.stopDrag,t.waitDrag=0,t.dragNode.pWindow=_global__WEBPACK_IMPORTED_MODULE_0__.a,t.initFrameRoute()}if(t.dragNode.parentNode!=_global__WEBPACK_IMPORTED_MODULE_0__.a.document.body&&t.gldragNode){var a=t.gldragNode
t.gldragNode.old&&(a=t.gldragNode.old),a.parentNode.removeChild(a)
var n=t.dragNode.pWindow
if(a.pWindow&&a.pWindow.dhtmlDragAndDrop.lastLanding&&a.pWindow.dhtmlDragAndDrop.lastLanding.dragLanding._dragOut(a.pWindow.dhtmlDragAndDrop.lastLanding),_isIE){var i=document.createElement("div")
i.innerHTML=t.dragNode.outerHTML,t.dragNode=i.childNodes[0]}else t.dragNode=t.dragNode.cloneNode(!0)
t.dragNode.pWindow=_global__WEBPACK_IMPORTED_MODULE_0__.a,t.gldragNode.old=t.dragNode,document.body.appendChild(t.dragNode),n.dhtmlDragAndDrop.dragNode=t.dragNode}var r
t.dragNode.style.left=e.clientX+15+(t.fx?-1*t.fx:0)+(document.body.scrollLeft||document.documentElement.scrollLeft)+"px",t.dragNode.style.top=e.clientY+3+(t.fy?-1*t.fy:0)+(document.body.scrollTop||document.documentElement.scrollTop)+"px",r=e.srcElement?e.srcElement:e.target,t.checkLanding(r,e)}},dhtmlDragAndDropObject.prototype.calculateFramePosition=function(e){if(_global__WEBPACK_IMPORTED_MODULE_0__.a.name){for(var t=parent.frames[_global__WEBPACK_IMPORTED_MODULE_0__.a.name].frameElement.offsetParent,a=0,n=0;t;)a+=t.offsetLeft,n+=t.offsetTop,t=t.offsetParent
if(parent.dhtmlDragAndDrop){var i=parent.dhtmlDragAndDrop.calculateFramePosition(1)
a+=1*i.split("_")[0],n+=1*i.split("_")[1]}if(e)return a+"_"+n
this.fx=a,this.fy=n}return"0_0"},dhtmlDragAndDropObject.prototype.checkLanding=function(e,t){e&&e.dragLanding?(this.lastLanding&&this.lastLanding.dragLanding._dragOut(this.lastLanding),this.lastLanding=e,this.lastLanding=this.lastLanding.dragLanding._dragIn(this.lastLanding,this.dragStartNode,t.clientX,t.clientY,t),this.lastLanding_scr=_isIE?t.srcElement:t.target):e&&"BODY"!=e.tagName?this.checkLanding(e.parentNode,t):(this.lastLanding&&this.lastLanding.dragLanding._dragOut(this.lastLanding,t.clientX,t.clientY,t),this.lastLanding=0,this._onNotFound&&this._onNotFound())},dhtmlDragAndDropObject.prototype.stopDrag=function(e,t){var a=_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop
if(!t){a.stopFrameRoute()
var n=a.lastLanding
a.lastLanding=null,n&&n.dragLanding._drag(a.dragStartNode,a.dragStartObject,n,_isIE?event.srcElement:e.target)}a.lastLanding=null,a.dragNode&&a.dragNode.parentNode==document.body&&a.dragNode.parentNode.removeChild(a.dragNode),a.dragNode=0,a.gldragNode=0,a.fx=0,a.fy=0,a.dragStartNode=0,a.dragStartObject=0,document.body.onmouseup=a.tempDOMU,document.body.onmousemove=a.tempDOMM,a.tempDOMU=null,a.tempDOMM=null,a.waitDrag=0},dhtmlDragAndDropObject.prototype.stopFrameRoute=function(e){e&&_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.stopDrag(1,1)
for(var t=0;t<_global__WEBPACK_IMPORTED_MODULE_0__.a.frames.length;t++)try{_global__WEBPACK_IMPORTED_MODULE_0__.a.frames[t]!=e&&_global__WEBPACK_IMPORTED_MODULE_0__.a.frames[t].dhtmlDragAndDrop&&_global__WEBPACK_IMPORTED_MODULE_0__.a.frames[t].dhtmlDragAndDrop.stopFrameRoute(_global__WEBPACK_IMPORTED_MODULE_0__.a)}catch(e){}try{parent.dhtmlDragAndDrop&&parent!=_global__WEBPACK_IMPORTED_MODULE_0__.a&&parent!=e&&parent.dhtmlDragAndDrop.stopFrameRoute(_global__WEBPACK_IMPORTED_MODULE_0__.a)}catch(e){}},dhtmlDragAndDropObject.prototype.initFrameRoute=function(e,t){e&&(_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.preCreateDragCopy(),_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.dragStartNode=e.dhtmlDragAndDrop.dragStartNode,_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.dragStartObject=e.dhtmlDragAndDrop.dragStartObject,_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.dragNode=e.dhtmlDragAndDrop.dragNode,_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.gldragNode=e.dhtmlDragAndDrop.dragNode,_global__WEBPACK_IMPORTED_MODULE_0__.a.document.body.onmouseup=_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.stopDrag,_global__WEBPACK_IMPORTED_MODULE_0__.a.waitDrag=0,!_isIE&&t&&(!_isFF||_FFrv<1.8)&&_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlDragAndDrop.calculateFramePosition())
try{parent.dhtmlDragAndDrop&&parent!=_global__WEBPACK_IMPORTED_MODULE_0__.a&&parent!=e&&parent.dhtmlDragAndDrop.initFrameRoute(_global__WEBPACK_IMPORTED_MODULE_0__.a)}catch(e){}for(var a=0;a<_global__WEBPACK_IMPORTED_MODULE_0__.a.frames.length;a++)try{_global__WEBPACK_IMPORTED_MODULE_0__.a.frames[a]!=e&&_global__WEBPACK_IMPORTED_MODULE_0__.a.frames[a].dhtmlDragAndDrop&&_global__WEBPACK_IMPORTED_MODULE_0__.a.frames[a].dhtmlDragAndDrop.initFrameRoute(_global__WEBPACK_IMPORTED_MODULE_0__.a,!e||t?1:0)}catch(e){}}
var _isFF=!1,_isIE=!1,_isOpera=!1,_isKHTML=!1,_isMacOS=!1,_isChrome=!1,_FFrv=!1,_KHTMLrv=!1,_OperaRv=!1
function dhtmlXHeir(e,t){for(var a in t)"function"==typeof t[a]&&(e[a]=t[a])
return e}-1!=navigator.userAgent.indexOf("Macintosh")&&(_isMacOS=!0),navigator.userAgent.toLowerCase().indexOf("chrome")>-1&&(_isChrome=!0),-1!=navigator.userAgent.indexOf("Safari")||-1!=navigator.userAgent.indexOf("Konqueror")?(_KHTMLrv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari")+7,5)),_KHTMLrv>525?(_isFF=!0,_FFrv=1.9):_isKHTML=!0):-1!=navigator.userAgent.indexOf("Opera")?(_isOpera=!0,_OperaRv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera")+6,3))):-1!=navigator.appName.indexOf("Microsoft")?(_isIE=!0,-1==navigator.appVersion.indexOf("MSIE 8.0")&&-1==navigator.appVersion.indexOf("MSIE 9.0")&&-1==navigator.appVersion.indexOf("MSIE 10.0")||"BackCompat"==document.compatMode||(_isIE=8)):"Netscape"==navigator.appName&&-1!=navigator.userAgent.indexOf("Trident")?_isIE=8:(_isFF=!0,_FFrv=parseFloat(navigator.userAgent.split("rv:")[1])),dtmlXMLLoaderObject.prototype.doXPath=function(e,t,a,n){if(_isKHTML||!_isIE&&!_global__WEBPACK_IMPORTED_MODULE_0__.a.XPathResult)return this.doXPathOpera(e,t)
if(_isIE)return t||(t=this.xmlDoc.nodeName?this.xmlDoc:this.xmlDoc.responseXML),t||dhtmlxError.throwError("LoadXML","Incorrect XML",[t||this.xmlDoc,this.mainObject]),a&&t.setProperty("SelectionNamespaces","xmlns:xsl='"+a+"'"),"single"==n?t.selectSingleNode(e):t.selectNodes(e)||new Array(0)
var i=t
t||(t=this.xmlDoc.nodeName?this.xmlDoc:this.xmlDoc.responseXML),t||dhtmlxError.throwError("LoadXML","Incorrect XML",[t||this.xmlDoc,this.mainObject]),-1!=t.nodeName.indexOf("document")?i=t:(i=t,t=t.ownerDocument)
var r=XPathResult.ANY_TYPE
"single"==n&&(r=XPathResult.FIRST_ORDERED_NODE_TYPE)
var o=[],_=t.evaluate(e,i,(function(e){return a}),r,null)
if(r==XPathResult.FIRST_ORDERED_NODE_TYPE)return _.singleNodeValue
for(var s=_.iterateNext();s;)o[o.length]=s,s=_.iterateNext()
return o},_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlxError=new _dhtmlx_error__WEBPACK_IMPORTED_MODULE_1__.a,dtmlXMLLoaderObject.prototype.doXPathOpera=function(e,t){var a=e.replace(/[\/]+/gi,"/").split("/"),n=null,i=1
if(!a.length)return[]
if("."==a[0])n=[t]
else{if(""!==a[0])return[]
n=(this.xmlDoc.responseXML||this.xmlDoc).getElementsByTagName(a[i].replace(/\[[^\]]*\]/g,"")),i++}for(;i<a.length;i++)n=this._getAllNamedChilds(n,a[i])
return-1!=a[i-1].indexOf("[")&&(n=this._filterXPath(n,a[i-1])),n},dtmlXMLLoaderObject.prototype._filterXPath=function(e,t){for(var a=[],n=(t=t.replace(/[^\[]*\[\@/g,"").replace(/[\[\]\@]*/g,""),0);n<e.length;n++)e[n].getAttribute(t)&&(a[a.length]=e[n])
return a},dtmlXMLLoaderObject.prototype._getAllNamedChilds=function(e,t){var a=[]
_isKHTML&&(t=t.toUpperCase())
for(var n=0;n<e.length;n++)for(var i=0;i<e[n].childNodes.length;i++)_isKHTML?e[n].childNodes[i].tagName&&e[n].childNodes[i].tagName.toUpperCase()==t&&(a[a.length]=e[n].childNodes[i]):e[n].childNodes[i].tagName==t&&(a[a.length]=e[n].childNodes[i])
return a},void 0===_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlxEvent&&(_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlxEvent=function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&e.attachEvent("on"+t,a)}),dtmlXMLLoaderObject.prototype.xslDoc=null,dtmlXMLLoaderObject.prototype.setXSLParamValue=function(e,t,a){a||(a=this.xslDoc),a.responseXML&&(a=a.responseXML)
var n=this.doXPath("/xsl:stylesheet/xsl:variable[@name='"+e+"']",a,"http://www.w3.org/1999/XSL/Transform","single")
n&&(n.firstChild.nodeValue=t)},dtmlXMLLoaderObject.prototype.doXSLTransToObject=function(e,t){var a
if(e||(e=this.xslDoc),e.responseXML&&(e=e.responseXML),t||(t=this.xmlDoc),t.responseXML&&(t=t.responseXML),_isIE){a=new ActiveXObject("Msxml2.DOMDocument.3.0")
try{t.transformNodeToObject(e,a)}catch(n){a=t.transformNode(e)}}else this.XSLProcessor||(this.XSLProcessor=new XSLTProcessor,this.XSLProcessor.importStylesheet(e)),a=this.XSLProcessor.transformToDocument(t)
return a},dtmlXMLLoaderObject.prototype.doXSLTransToString=function(e,t){var a=this.doXSLTransToObject(e,t)
return"string"==typeof a?a:this.doSerialization(a)},dtmlXMLLoaderObject.prototype.doSerialization=function(e){return e||(e=this.xmlDoc),e.responseXML&&(e=e.responseXML),_isIE?e.xml:(new XMLSerializer).serializeToString(e)},_global__WEBPACK_IMPORTED_MODULE_0__.a.dhtmlxEventable=function(obj){obj.attachEvent=function(e,t,a){return this[e="ev_"+e.toLowerCase()]||(this[e]=new this.eventCatcher(a||this)),e+":"+this[e].addEvent(t)},obj.callEvent=function(e,t){return!this[e="ev_"+e.toLowerCase()]||this[e].apply(this,t)},obj.checkEvent=function(e){return!!this["ev_"+e.toLowerCase()]},obj.eventCatcher=function(obj){var dhx_catch=[],z=function(){for(var e=!0,t=0;t<dhx_catch.length;t++)if(dhx_catch[t]){var a=dhx_catch[t].apply(obj,arguments)
e=e&&a}return e}
return z.addEvent=function(ev){return"function"!=typeof ev&&(ev=eval(ev)),!!ev&&dhx_catch.push(ev)-1},z.removeEvent=function(e){dhx_catch[e]=null},z},obj.detachEvent=function(e){if(e){var t=e.split(":")
this[t[0]].removeEvent(t[1])}},obj.detachAllEvents=function(){for(var e in this)0===e.indexOf("ev_")&&(this.detachEvent(e),this[e]=null)},obj=null}}},function(e,t,a){"use strict";(function(e){function n(e,t,a){return this.catches||(this.catches=[]),this}a.d(t,"a",(function(){return n})),n.prototype.catchError=function(e,t){this.catches[e]=t},n.prototype.throwError=function(t,a,n){return this.catches[t]?this.catches[t](t,a,n):this.catches.ALL?this.catches.ALL(t,a,n):(e.alert("Error type: "+arguments[0]+"\nDescription: "+arguments[1]),null)}}).call(this,a(1))},function(e,t,a){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply
function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(i.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},a(10),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a(1))},function(e,t,a){(function(e,t){!function(e,a){"use strict"
if(!e.setImmediate){var n,i=1,r={},o=!1,_=e.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(e)
s=s&&s.setTimeout?s:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){l(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage
return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}()?function(){var t="setImmediate$"+Math.random()+"$",a=function(a){a.source===e&&"string"==typeof a.data&&0===a.data.indexOf(t)&&l(+a.data.slice(t.length))}
e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),n=function(a){e.postMessage(t+a,"*")}}():e.MessageChannel?function(){var e=new MessageChannel
e.port1.onmessage=function(e){l(e.data)},n=function(t){e.port2.postMessage(t)}}():_&&"onreadystatechange"in _.createElement("script")?function(){var e=_.documentElement
n=function(t){var a=_.createElement("script")
a.onreadystatechange=function(){l(t),a.onreadystatechange=null,e.removeChild(a),a=null},e.appendChild(a)}}():n=function(e){setTimeout(l,0,e)},s.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e))
for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1]
var o={callback:e,args:t}
return r[i]=o,n(i),i++},s.clearImmediate=d}function d(e){delete r[e]}function l(e){if(o)setTimeout(l,0,e)
else{var t=r[e]
if(t){o=!0
try{!function(e){var t=e.callback,a=e.args
switch(a.length){case 0:t()
break
case 1:t(a[0])
break
case 2:t(a[0],a[1])
break
case 3:t(a[0],a[1],a[2])
break
default:t.apply(void 0,a)}}(t)}finally{d(e),o=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,a(1),a(5))},function(e,t,a){"use strict"
a.r(t),a.d(t,"scheduler",(function(){return Oe})),a.d(t,"Scheduler",(function(){return Le}))
var n=a(0)
a(4)
var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._silent_mode=!1,this.listeners={}}return function(e,t,a){t&&function(e,t){for(var a=0;a<t.length;a++){var n=t[a]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t)}(e,[{key:"_silentStart",value:function(){this._silent_mode=!0}},{key:"_silentEnd",value:function(){this._silent_mode=!1}}]),e}(),r=function(e){var t=new i
e.attachEvent=function(e,a,n){e="ev_"+e.toLowerCase(),t.listeners[e]||(t.listeners[e]=function(e){var t={},a=0,n=function(){var a=!0
for(var n in t){var i=t[n].apply(e,arguments)
a=a&&i}return a}
return n.addEvent=function(e,i){if("function"==typeof e){var r
if(i&&i.id?r=i.id:(r=a,a++),i&&i.once){var o=e
e=function(){o(),n.removeEvent(r)}}return t[r]=e,r}return!1},n.removeEvent=function(e){delete t[e]},n.clear=function(){t={}},n}(this)),n&&n.thisObject&&(a=a.bind(n.thisObject))
var i=e+":"+t.listeners[e].addEvent(a,n)
return n&&n.id&&(i=n.id),i},e.attachAll=function(e){this.attachEvent("listen_all",e)},e.callEvent=function(e,a){if(t._silent_mode)return!0
var n="ev_"+e.toLowerCase(),i=t.listeners
return i.ev_listen_all&&i.ev_listen_all.apply(this,[e].concat(a)),!i[n]||i[n].apply(this,a)},e.checkEvent=function(e){return!!t.listeners["ev_"+e.toLowerCase()]},e.detachEvent=function(e){if(e){var a=t.listeners
for(var n in a)a[n].removeEvent(e)
var i=e.split(":")
if(a=t.listeners,2===i.length){var r=i[0],o=i[1]
a[r]&&a[r].removeEvent(o)}}},e.detachAllEvents=function(){for(var e in t.listeners)t.listeners[e].clear()}}
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=Date.now()
function c(e){return!(!e||"object"!==d(e)||!(e.getFullYear&&e.getMonth&&e.getDate))}var h={uid:function(){return l++},mixin:function(e,t,a){for(var n in t)(void 0===e[n]||a)&&(e[n]=t[n])
return e},copy:function e(t){var a,n
if(t&&"object"==d(t))switch(!0){case c(t):n=new Date(t)
break
case function(e){return Array.isArray?Array.isArray(e):e&&void 0!==e.length&&e.pop&&e.push}(t):for(n=new Array(t.length),a=0;a<t.length;a++)n[a]=e(t[a])
break
case function(e){return e&&"object"===d(e)&&"function String() { [native code] }"===Function.prototype.toString.call(e.constructor)}(t):n=new String(t)
break
case function(e){return e&&"object"===d(e)&&"function Number() { [native code] }"===Function.prototype.toString.call(e.constructor)}(t):n=new Number(t)
break
case function(e){return e&&"object"===d(e)&&"function Boolean() { [native code] }"===Function.prototype.toString.call(e.constructor)}(t):n=new Boolean(t)
break
default:for(a in n={},t)Object.prototype.hasOwnProperty.apply(t,[a])&&(n[a]=e(t[a]))}return n||t},defined:function(e){return void 0!==e},isDate:c}
function u(e){if(!e)return""
var t=e.className||""
return t.baseVal&&(t=t.baseVal),t.indexOf||(t=""),t||""}function f(e,t,a){void 0===a&&(a=!0)
for(var n=e.target||e.srcElement,i="";n;){if(i=u(n)){var r=i.indexOf(t)
if(r>=0){if(!a)return n
var o=0===r||!(i.charAt(r-1)||"").trim(),_=r+t.length>=i.length||!i.charAt(r+t.length).trim()
if(o&&_)return n}}n=n.parentNode}return null}function p(e){var t=!1,a=!1
if(window.getComputedStyle){var n=window.getComputedStyle(e,null)
t=n.display,a=n.visibility}else e.currentStyle&&(t=e.currentStyle.display,a=e.currentStyle.visibility)
var i=!1,r=f({target:e},"dhx_form_repeat",!1)
return r&&(i=!("0px"!=r.style.height)),i=i||!e.offsetHeight,"none"!=t&&"hidden"!=a&&!i}function v(e){return!isNaN(e.getAttribute("tabindex"))&&1*e.getAttribute("tabindex")>=0}function g(e){return!{a:!0,area:!0}[e.nodeName.loLowerCase()]||!!e.getAttribute("href")}function m(e){return!{input:!0,select:!0,textarea:!0,button:!0,object:!0}[e.nodeName.toLowerCase()]||!e.hasAttribute("disabled")}function y(){return document.head.createShadowRoot||document.head.attachShadow}function b(e){if(!e)return document.body
if(!y())return document.body
for(;e.parentNode&&(e=e.parentNode);)if(e instanceof ShadowRoot)return e.host
return document.body}var x,w={getAbsoluteLeft:function(e){return this.getOffset(e).left},getAbsoluteTop:function(e){return this.getOffset(e).top},getOffsetSum:function(e){for(var t=0,a=0;e;)t+=parseInt(e.offsetTop),a+=parseInt(e.offsetLeft),e=e.offsetParent
return{top:t,left:a}},getOffsetRect:function(e){var t=e.getBoundingClientRect(),a=0,n=0
if(/Mobi/.test(navigator.userAgent)){var i=document.createElement("div")
i.style.position="absolute",i.style.left="0px",i.style.top="0px",i.style.width="1px",i.style.height="1px",document.body.appendChild(i)
var r=i.getBoundingClientRect()
a=t.top-r.top,n=t.left-r.left,i.parentNode.removeChild(i)}else{var o=document.body,_=document.documentElement,s=window.pageYOffset||_.scrollTop||o.scrollTop,d=window.pageXOffset||_.scrollLeft||o.scrollLeft,l=_.clientTop||o.clientTop||0,c=_.clientLeft||o.clientLeft||0
a=t.top+s-l,n=t.left+d-c}return{top:Math.round(a),left:Math.round(n)}},getOffset:function(e){return e.getBoundingClientRect?this.getOffsetRect(e):this.getOffsetSum(e)},closest:function(e,t){return e&&t?x(e,t):null},insertAfter:function(e,t){t.nextSibling?t.parentNode.insertBefore(e,t.nextSibling):t.parentNode.appendChild(e)},remove:function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},getFocusableNodes:function(e){for(var t=e.querySelectorAll(["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"].join(", ")),a=Array.prototype.slice.call(t,0),n=0;n<a.length;n++)a[n].$position=n
for(a.sort((function(e,t){return 0===e.tabIndex&&0!==t.tabIndex?1:0!==e.tabIndex&&0===t.tabIndex?-1:e.tabIndex===t.tabIndex?e.$position-t.$position:e.tabIndex<t.tabIndex?-1:1})),n=0;n<a.length;n++){var i=a[n];(v(i)||m(i)||g(i))&&p(i)||(a.splice(n,1),n--)}return a},getClassName:u,locateCss:f,getRootNode:b,hasShadowParent:function(e){return!!b(e)},isShadowDomSupported:y,getActiveElement:function(){var e=document.activeElement
return e.shadowRoot&&(e=e.shadowRoot.activeElement),e===document.body&&document.getSelection&&(e=document.getSelection().focusNode||document.body),e},getRelativeEventPosition:function(e,t){var a=document.documentElement,n=function(e){var t=0,a=0,n=0,i=0
if(e.getBoundingClientRect){var r=e.getBoundingClientRect(),o=document.body,_=document.documentElement||document.body.parentNode||document.body,s=window.pageYOffset||_.scrollTop||o.scrollTop,d=window.pageXOffset||_.scrollLeft||o.scrollLeft,l=_.clientTop||o.clientTop||0,c=_.clientLeft||o.clientLeft||0
t=r.top+s-l,a=r.left+d-c,n=document.body.offsetWidth-r.right,i=document.body.offsetHeight-r.bottom}else{for(;e;)t+=parseInt(e.offsetTop,10),a+=parseInt(e.offsetLeft,10),e=e.offsetParent
n=document.body.offsetWidth-e.offsetWidth-a,i=document.body.offsetHeight-e.offsetHeight-t}return{y:Math.round(t),x:Math.round(a),width:e.offsetWidth,height:e.offsetHeight,right:Math.round(n),bottom:Math.round(i)}}(t)
return{x:e.clientX+a.scrollLeft-a.clientLeft-n.x+t.scrollLeft,y:e.clientY+a.scrollTop-a.clientTop-n.y+t.scrollTop}}}
if(Element.prototype.closest)x=function(e,t){return e.closest(t)}
else{var k=Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector
x=function(e,t){var a=e
do{if(k.call(a,t))return a
a=a.parentElement||a.parentNode}while(null!==a&&1===a.nodeType)
return null}}var E="undefined"!=typeof window,D={isIE:E&&(navigator.userAgent.indexOf("MSIE")>=0||navigator.userAgent.indexOf("Trident")>=0),isIE6:E&&!XMLHttpRequest&&navigator.userAgent.indexOf("MSIE")>=0,isIE7:E&&navigator.userAgent.indexOf("MSIE 7.0")>=0&&navigator.userAgent.indexOf("Trident")<0,isIE8:E&&navigator.userAgent.indexOf("MSIE 8.0")>=0&&navigator.userAgent.indexOf("Trident")>=0,isOpera:E&&navigator.userAgent.indexOf("Opera")>=0,isChrome:E&&navigator.userAgent.indexOf("Chrome")>=0,isKHTML:E&&(navigator.userAgent.indexOf("Safari")>=0||navigator.userAgent.indexOf("Konqueror")>=0),isFF:E&&navigator.userAgent.indexOf("Firefox")>=0,isIPad:E&&navigator.userAgent.search(/iPad/gi)>=0,isEdge:E&&-1!=navigator.userAgent.indexOf("Edge"),isNode:!E||"undefined"==typeof navigator},S=a(6).Promise,M=a(3),C=a.n(M)
function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){var t=function(e,t){for(var a="var temp=date.match(/[a-zA-Z]+|[0-9]+/g);",n=e.match(/%[a-zA-Z]/g),i=0;i<n.length;i++)switch(n[i]){case"%j":case"%d":a+="set[2]=temp["+i+"]||1;"
break
case"%n":case"%m":a+="set[1]=(temp["+i+"]||1)-1;"
break
case"%y":a+="set[0]=temp["+i+"]*1+(temp["+i+"]>50?1900:2000);"
break
case"%g":case"%G":case"%h":case"%H":a+="set[3]=temp["+i+"]||0;"
break
case"%i":a+="set[4]=temp["+i+"]||0;"
break
case"%Y":a+="set[0]=temp["+i+"]||0;"
break
case"%a":case"%A":a+="set[3]=set[3]%12+((temp["+i+"]||'').toLowerCase()=='am'?0:12);"
break
case"%s":a+="set[5]=temp["+i+"]||0;"
break
case"%M":a+="set[1]=this.locale.date.month_short_hash[temp["+i+"]]||0;"
break
case"%F":a+="set[1]=this.locale.date.month_full_hash[temp["+i+"]]||0;"}var r="set[0],set[1],set[2],set[3],set[4],set[5]"
return t&&(r=" Date.UTC("+r+")"),new Function("date","var set=[0,0,1,0,0,0]; "+a+" return new Date("+r+");")},a=function(t,a){return function(n){for(var i=[0,0,1,0,0,0],r=n.match(/[a-zA-Z]+|[0-9]+/g),o=t.match(/%[a-zA-Z]/g),_=0;_<o.length;_++)switch(o[_]){case"%j":case"%d":i[2]=r[_]||1
break
case"%n":case"%m":i[1]=(r[_]||1)-1
break
case"%y":i[0]=1*r[_]+(r[_]>50?1900:2e3)
break
case"%g":case"%G":case"%h":case"%H":i[3]=r[_]||0
break
case"%i":i[4]=r[_]||0
break
case"%Y":i[0]=r[_]||0
break
case"%a":case"%A":i[3]=i[3]%12+("am"==(r[_]||"").toLowerCase()?0:12)
break
case"%s":i[5]=r[_]||0
break
case"%M":i[1]=e.locale.date.month_short_hash[r[_]]||0
break
case"%F":i[1]=e.locale.date.month_full_hash[r[_]]||0}return a?new Date(Date.UTC(i[0],i[1],i[2],i[3],i[4],i[5])):new Date(i[0],i[1],i[2],i[3],i[4],i[5])}},n=!1
function i(){return"auto"===e.config.csp?n:e.config.csp}!function(){try{new Function("canUseCsp = false;")}catch(e){n=!0}}(),e.date={init:function(){for(var t=e.locale.date.month_short,a=e.locale.date.month_short_hash={},n=0;n<t.length;n++)a[t[n]]=n
for(t=e.locale.date.month_full,a=e.locale.date.month_full_hash={},n=0;n<t.length;n++)a[t[n]]=n},_bind_host_object:function(t){return t.bind?t.bind(e):function(){return t.apply(e,arguments)}},date_part:function(e){var t=new Date(e)
return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e.getHours()&&(e.getDate()<t.getDate()||e.getMonth()<t.getMonth()||e.getFullYear()<t.getFullYear())&&e.setTime(e.getTime()+36e5*(24-e.getHours())),e},time_part:function(e){return(e.valueOf()/1e3-60*e.getTimezoneOffset())%86400},week_start:function(t){var a=t.getDay()
return e.config.start_on_monday&&(0===a?a=6:a--),this.date_part(this.add(t,-1*a,"day"))},month_start:function(e){return e.setDate(1),this.date_part(e)},year_start:function(e){return e.setMonth(0),this.month_start(e)},day_start:function(e){return this.date_part(e)},_add_days:function(e,t){var a=new Date(e.valueOf())
if(a.setDate(a.getDate()+t),t==Math.round(t)&&t>0){var n=(+a-+e)%864e5
if(n&&e.getTimezoneOffset()==a.getTimezoneOffset()){var i=n/36e5
a.setTime(a.getTime()+60*(24-i)*60*1e3)}}return t>=0&&!e.getHours()&&a.getHours()&&(a.getDate()<e.getDate()||a.getMonth()<e.getMonth()||a.getFullYear()<e.getFullYear())&&a.setTime(a.getTime()+36e5*(24-a.getHours())),a},add:function(t,a,n){var i=new Date(t.valueOf())
switch(n){case"day":i=e.date._add_days(i,a)
break
case"week":i=e.date._add_days(i,7*a)
break
case"month":i.setMonth(i.getMonth()+a)
break
case"year":i.setYear(i.getFullYear()+a)
break
case"hour":i.setTime(i.getTime()+60*a*60*1e3)
break
case"minute":i.setTime(i.getTime()+60*a*1e3)
break
default:return e.date["add_"+n](t,a,n)}return i},to_fixed:function(e){return e<10?"0"+e:e},copy:function(e){return new Date(e.valueOf())},date_to_str:function(t,a){if(i())return function(t,a){return function(n){return t.replace(/%[a-zA-Z]/g,(function(t){switch(t){case"%d":return a?e.date.to_fixed(n.getUTCDate()):e.date.to_fixed(n.getDate())
case"%m":return a?e.date.to_fixed(n.getUTCMonth()+1):e.date.to_fixed(n.getMonth()+1)
case"%j":return a?n.getUTCDate():n.getDate()
case"%n":return a?n.getUTCMonth()+1:n.getMonth()+1
case"%y":return a?e.date.to_fixed(n.getUTCFullYear()%100):e.date.to_fixed(n.getFullYear()%100)
case"%Y":return a?n.getUTCFullYear():n.getFullYear()
case"%D":return a?e.locale.date.day_short[n.getUTCDay()]:e.locale.date.day_short[n.getDay()]
case"%l":return a?e.locale.date.day_full[n.getUTCDay()]:e.locale.date.day_full[n.getDay()]
case"%M":return a?e.locale.date.month_short[n.getUTCMonth()]:e.locale.date.month_short[n.getMonth()]
case"%F":return a?e.locale.date.month_full[n.getUTCMonth()]:e.locale.date.month_full[n.getMonth()]
case"%h":return a?e.date.to_fixed((n.getUTCHours()+11)%12+1):e.date.to_fixed((n.getHours()+11)%12+1)
case"%g":return a?(n.getUTCHours()+11)%12+1:(n.getHours()+11)%12+1
case"%G":return a?n.getUTCHours():n.getHours()
case"%H":return a?e.date.to_fixed(n.getUTCHours()):e.date.to_fixed(n.getHours())
case"%i":return a?e.date.to_fixed(n.getUTCMinutes()):e.date.to_fixed(n.getMinutes())
case"%a":return a?n.getUTCHours()>11?"pm":"am":n.getHours()>11?"pm":"am"
case"%A":return a?n.getUTCHours()>11?"PM":"AM":n.getHours()>11?"PM":"AM"
case"%s":return a?e.date.to_fixed(n.getUTCSeconds()):e.date.to_fixed(n.getSeconds())
case"%W":return a?e.date.to_fixed(e.date.getUTCISOWeek(n)):e.date.to_fixed(e.date.getISOWeek(n))
default:return t}}))}}(t,a)
t=t.replace(/%[a-zA-Z]/g,(function(e){switch(e){case"%d":return'"+this.date.to_fixed(date.getDate())+"'
case"%m":return'"+this.date.to_fixed((date.getMonth()+1))+"'
case"%j":return'"+date.getDate()+"'
case"%n":return'"+(date.getMonth()+1)+"'
case"%y":return'"+this.date.to_fixed(date.getFullYear()%100)+"'
case"%Y":return'"+date.getFullYear()+"'
case"%D":return'"+this.locale.date.day_short[date.getDay()]+"'
case"%l":return'"+this.locale.date.day_full[date.getDay()]+"'
case"%M":return'"+this.locale.date.month_short[date.getMonth()]+"'
case"%F":return'"+this.locale.date.month_full[date.getMonth()]+"'
case"%h":return'"+this.date.to_fixed((date.getHours()+11)%12+1)+"'
case"%g":return'"+((date.getHours()+11)%12+1)+"'
case"%G":return'"+date.getHours()+"'
case"%H":return'"+this.date.to_fixed(date.getHours())+"'
case"%i":return'"+this.date.to_fixed(date.getMinutes())+"'
case"%a":return'"+(date.getHours()>11?"pm":"am")+"'
case"%A":return'"+(date.getHours()>11?"PM":"AM")+"'
case"%s":return'"+this.date.to_fixed(date.getSeconds())+"'
case"%W":return'"+this.date.to_fixed(this.date.getISOWeek(date))+"'
default:return e}})),a&&(t=t.replace(/date\.get/g,"date.getUTC"))
var n=new Function("date",'return "'+t+'";')
return e.date._bind_host_object(n)},str_to_date:function(n,r,o){var _=(i()?a:t)(n,r),s=/^[0-9]{4}(\-|\/)[0-9]{2}(\-|\/)[0-9]{2} ?(([0-9]{1,2}:[0-9]{1,2})(:[0-9]{1,2})?)?$/,d=/^[0-9]{2}\/[0-9]{2}\/[0-9]{4} ?(([0-9]{1,2}:[0-9]{2})(:[0-9]{1,2})?)?$/,l=/^[0-9]{2}\-[0-9]{2}\-[0-9]{4} ?(([0-9]{1,2}:[0-9]{1,2})(:[0-9]{1,2})?)?$/,c=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,h=t("%Y-%m-%d %H:%i:%s",r),u=t("%m/%d/%Y %H:%i:%s",r),f=t("%d-%m-%Y %H:%i:%s",r)
return function(t){if(!o&&!e.config.parse_exact_format){if(t&&t.getISOWeek)return new Date(t)
if("number"==typeof t)return new Date(t)
if(function(e){return s.test(String(e))}(t))return h(t)
if(function(e){return d.test(String(e))}(t))return u(t)
if(function(e){return l.test(String(e))}(t))return f(t)
if(function(e){return c.test(e)}(t))return new Date(t)}return _.call(e,t)}},getISOWeek:function(e){if(!e)return!1
var t=(e=this.date_part(new Date(e))).getDay()
0===t&&(t=7)
var a=new Date(e.valueOf())
a.setDate(e.getDate()+(4-t))
var n=a.getFullYear(),i=Math.round((a.getTime()-new Date(n,0,1).getTime())/864e5)
return 1+Math.floor(i/7)},getUTCISOWeek:function(e){return this.getISOWeek(this.convert_to_utc(e))},convert_to_utc:function(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds())}}}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var L=a(2),H=a.n(L)
function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e){return this.serverProcessor=e,this.action_param="!nativeeditor_status",this.object=null,this.updatedRows=[],this.autoUpdate=!0,this.updateMode="cell",this._tMode="GET",this._headers=null,this._payload=null,this.post_delim="_",this._waitMode=0,this._in_progress={},this._invalid={},this.messages=[],this.styles={updated:"font-weight:bold;",inserted:"font-weight:bold;",deleted:"text-decoration : line-through;",invalid:"background-color:FFE0E0;",invalid_cell:"border-bottom:2px solid red;",error:"color:red;",clear:"font-weight:normal;text-decoration:none;"},this.enableUTFencoding(!0),r(this),this}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}z.prototype={setTransactionMode:function(e,t){"object"==j(e)?(this._tMode=e.mode||this._tMode,void 0!==e.headers&&(this._headers=e.headers),void 0!==e.payload&&(this._payload=e.payload),this._tSend=!!t):(this._tMode=e,this._tSend=t),"REST"==this._tMode&&(this._tSend=!1,this._endnm=!0),"JSON"===this._tMode||"REST-JSON"===this._tMode?(this._tSend=!1,this._endnm=!0,this._serializeAsJson=!0,this._headers=this._headers||{},this._headers["Content-Type"]="application/json"):this._headers&&!this._headers["Content-Type"]&&(this._headers["Content-Type"]="application/x-www-form-urlencoded"),"CUSTOM"===this._tMode&&(this._tSend=!1,this._endnm=!0,this._router=e.router)},escape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return this._utf?encodeURIComponent(e):escape(e)})),enableUTFencoding:function(e){this._utf=!!e},setDataColumns:function(e){this._columns="string"==typeof e?e.split(","):e},getSyncState:function(){return!this.updatedRows.length},enableDataNames:function(e){this._endnm=!!e},enablePartialDataSend:function(e){this._changed=!!e},setUpdateMode:function(e,t){this.autoUpdate="cell"==e,this.updateMode=e,this.dnd=t},ignore:function(e,t){this._silent_mode=!0,e.call(t||window),this._silent_mode=!1},setUpdated:function(e,t,a){if(!this._silent_mode){var n=this.findRow(e)
a=a||"updated"
var i=this.$scheduler.getUserData(e,this.action_param)
i&&"updated"==a&&(a=i),t?(this.set_invalid(e,!1),this.updatedRows[n]=e,this.$scheduler.setUserData(e,this.action_param,a),this._in_progress[e]&&(this._in_progress[e]="wait")):this.is_invalid(e)||(this.updatedRows.splice(n,1),this.$scheduler.setUserData(e,this.action_param,"")),this.markRow(e,t,a),t&&this.autoUpdate&&this.sendData(e)}},markRow:function(e,t,a){var n="",i=this.is_invalid(e)
if(i&&(n=this.styles[i],t=!0),this.callEvent("onRowMark",[e,t,a,i])&&(n=this.styles[t?a:"clear"]+n,this.$scheduler[this._methods[0]](e,n),i&&i.details)){n+=this.styles[i+"_cell"]
for(var r=0;r<i.details.length;r++)i.details[r]&&this.$scheduler[this._methods[1]](e,r,n)}},getActionByState:function(e){return"inserted"===e?"create":"updated"===e?"update":"deleted"===e?"delete":"update"},getState:function(e){return this.$scheduler.getUserData(e,this.action_param)},is_invalid:function(e){return this._invalid[e]},set_invalid:function(e,t,a){a&&(t={value:t,details:a,toString:function(){return this.value.toString()}}),this._invalid[e]=t},checkBeforeUpdate:function(e){return!0},sendData:function(e){return this.$scheduler.editStop&&this.$scheduler.editStop(),void 0===e||this._tSend?this.sendAllData():!this._in_progress[e]&&(this.messages=[],!(!this.checkBeforeUpdate(e)&&this.callEvent("onValidationError",[e,this.messages]))&&void this._beforeSendData(this._getRowData(e),e))},_beforeSendData:function(e,t){if(!this.callEvent("onBeforeUpdate",[t,this.getState(t),e]))return!1
this._sendData(e,t)},serialize:function(e,t){if(this._serializeAsJson)return this._serializeAsJSON(e)
if("string"==typeof e)return e
if(void 0!==t)return this.serialize_one(e,"")
var a=[],n=[]
for(var i in e)e.hasOwnProperty(i)&&(a.push(this.serialize_one(e[i],i+this.post_delim)),n.push(i))
return a.push("ids="+this.escape(n.join(","))),this.$scheduler.security_key&&a.push("dhx_security="+this.$scheduler.security_key),a.join("&")},serialize_one:function(e,t){if("string"==typeof e)return e
var a=[],n=""
for(var i in e)if(e.hasOwnProperty(i)){if(("id"==i||i==this.action_param)&&"REST"==this._tMode)continue
n="string"==typeof e[i]||"number"==typeof e[i]?e[i]:JSON.stringify(e[i]),a.push(this.escape((t||"")+i)+"="+this.escape(n))}return a.join("&")},_applyPayload:function(e){var t=this.$scheduler.ajax
if(this._payload)for(var a in this._payload)e=e+t.urlSeparator(e)+this.escape(a)+"="+this.escape(this._payload[a])
return e},_sendData:function(e,t){if(e){if(!this.callEvent("onBeforeDataSending",t?[t,this.getState(t),e]:[null,null,e]))return!1
t&&(this._in_progress[t]=(new Date).valueOf())
var a=this,n=this.$scheduler.ajax
if("CUSTOM"!==this._tMode){var i,r={callback:function(n){var i=[]
if(t)i.push(t)
else if(e)for(var r in e)i.push(r)
return a.afterUpdate(a,n,i)},headers:a._headers},o=this.serverProcessor+(this._user?n.urlSeparator(this.serverProcessor)+["dhx_user="+this._user,"dhx_version="+this.$scheduler.getUserData(0,"version")].join("&"):""),_=this._applyPayload(o)
switch(this._tMode){case"GET":i=this._cleanupArgumentsBeforeSend(e),r.url=_+n.urlSeparator(_)+this.serialize(i,t),r.method="GET"
break
case"POST":i=this._cleanupArgumentsBeforeSend(e),r.url=_,r.method="POST",r.data=this.serialize(i,t)
break
case"JSON":i={}
var s=this._cleanupItemBeforeSend(e)
for(var d in s)d!==this.action_param&&"id"!==d&&"gr_id"!==d&&(i[d]=s[d])
r.url=_,r.method="POST",r.data=JSON.stringify({id:t,action:e[this.action_param],data:i})
break
case"REST":case"REST-JSON":switch(_=o.replace(/(&|\?)editing=true/,""),i="",this.getState(t)){case"inserted":r.method="POST",r.data=this.serialize(e,t)
break
case"deleted":r.method="DELETE",_=_+("/"===_.slice(-1)?"":"/")+t
break
default:r.method="PUT",r.data=this.serialize(e,t),_=_+("/"===_.slice(-1)?"":"/")+t}r.url=this._applyPayload(_)}return this._waitMode++,n.query(r)}var l,c=this.getState(t),h=this.getActionByState(c),u=function(e){if(e&&e.responseText&&e.setRequestHeader){200!==e.status&&(h="error")
try{e=JSON.parse(e.responseText)}catch(e){}}h=h||"updated"
var n=t,i=t
e&&(h=e.action||c,n=e.sid||n,i=e.id||e.tid||i),a.afterUpdateCallback(n,i,h,e)}
if(this._router instanceof Function)l=this._router("event",h,e,t)
else switch(c){case"inserted":l=this._router.create(e)
break
case"deleted":l=this._router.delete(t)
break
default:l=this._router.update(e,t)}if(l){if(!l.then&&void 0===l.id&&void 0===l.tid&&void 0===l.action)throw new Error("Incorrect router return value. A Promise or a response object is expected")
l.then?l.then(u).catch((function(e){e&&e.action?u(e):u({action:"error",value:e})})):u(l)}else u(null)}},sendAllData:function(){if(this.updatedRows.length&&"off"!==this.updateMode){this.messages=[]
var e=!0
if(this._forEachUpdatedRow((function(t){e=e&&this.checkBeforeUpdate(t)})),!e&&!this.callEvent("onValidationError",["",this.messages]))return!1
this._tSend?this._sendData(this._getAllData()):this._forEachUpdatedRow((function(e){if(!this._in_progress[e]){if(this.is_invalid(e))return
this._beforeSendData(this._getRowData(e),e)}}))}},_getAllData:function(e){var t={},a=!1
return this._forEachUpdatedRow((function(e){if(!this._in_progress[e]&&!this.is_invalid(e)){var n=this._getRowData(e)
this.callEvent("onBeforeUpdate",[e,this.getState(e),n])&&(t[e]=n,a=!0,this._in_progress[e]=(new Date).valueOf())}})),a?t:null},findRow:function(e){var t=0
for(t=0;t<this.updatedRows.length&&e!=this.updatedRows[t];t++);return t},defineAction:function(e,t){this._uActions||(this._uActions={}),this._uActions[e]=t},afterUpdateCallback:function(e,t,a,n){if(this.$scheduler){var i=e,r="error"!==a&&"invalid"!==a
if(r||this.set_invalid(e,a),this._uActions&&this._uActions[a]&&!this._uActions[a](n))return delete this._in_progress[i]
"wait"!==this._in_progress[i]&&this.setUpdated(e,!1)
var o=e
switch(a){case"inserted":case"insert":t!=e&&(this.setUpdated(e,!1),this.$scheduler[this._methods[2]](e,t),e=t)
break
case"delete":case"deleted":return this.$scheduler.setUserData(e,this.action_param,"true_deleted"),this.$scheduler[this._methods[3]](e,t),delete this._in_progress[i],this.callEvent("onAfterUpdate",[e,a,t,n])}"wait"!==this._in_progress[i]?(r&&this.$scheduler.setUserData(e,this.action_param,""),delete this._in_progress[i]):(delete this._in_progress[i],this.setUpdated(t,!0,this.$scheduler.getUserData(e,this.action_param))),this.callEvent("onAfterUpdate",[o,a,t,n])}},_errorResponse:function(e,t){return this.$scheduler&&this.$scheduler.callEvent&&this.$scheduler.callEvent("onSaveError",[t,e.xmlDoc]),this.cleanUpdate(t)},_setDefaultTransactionMode:function(){this.serverProcessor&&(this.setTransactionMode("POST",!0),this.serverProcessor+=(-1!==this.serverProcessor.indexOf("?")?"&":"?")+"editing=true",this._serverProcessor=this.serverProcessor)},afterUpdate:function(e,t,a){var n=this.$scheduler.ajax
if(200===t.xmlDoc.status){var i
try{i=JSON.parse(t.xmlDoc.responseText)}catch(e){t.xmlDoc.responseText.length||(i={})}if(i){var r=i.action||this.getState(a)||"updated",o=i.sid||a[0],_=i.tid||a[0]
return e.afterUpdateCallback(o,_,r,i),void e.finalizeUpdate()}var s=n.xmltop("data",t.xmlDoc)
if(!s)return this._errorResponse(t,a)
var d=n.xpath("//data/action",s)
if(!d.length)return this._errorResponse(t,a)
for(var l=0;l<d.length;l++){var c=d[l]
r=c.getAttribute("type"),o=c.getAttribute("sid"),_=c.getAttribute("tid"),e.afterUpdateCallback(o,_,r,c)}e.finalizeUpdate()}else this._errorResponse(t,a)},cleanUpdate:function(e){if(e)for(var t=0;t<e.length;t++)delete this._in_progress[e[t]]},finalizeUpdate:function(){this._waitMode&&this._waitMode--,this.callEvent("onAfterUpdateFinish",[]),this.updatedRows.length||this.callEvent("onFullSync",[])},init:function(e){if(!this._initialized){this.$scheduler=e,this.$scheduler._dp_init&&this.$scheduler._dp_init(this),this._setDefaultTransactionMode(),this._methods=this._methods||["_set_event_text_style","","_dp_change_event_id","_dp_hook_delete"],function(e,t){e._validId=function(e){return!0},e.setUserData=function(e,t,a){if(e){var n=this.getEvent(e)
n&&(n[t]=a)}else this._userdata[t]=a},e.getUserData=function(e,t){if(e){var a=this.getEvent(e)
return a?a[t]:null}return this._userdata[t]},e._set_event_text_style=function(t,a){if(e.getEvent(t)){this.for_rendered(t,(function(e){e.style.cssText+=";"+a}))
var n=this.getEvent(t)
n._text_style=a,this.event_updated(n)}},e._update_callback=function(t,a){var n=e._xmlNodeToJSON(t.firstChild)
"none"==n.rec_type&&(n.rec_pattern="none"),n.text=n.text||n._tagvalue,n.start_date=e._helpers.parseDate(n.start_date),n.end_date=e._helpers.parseDate(n.end_date),e.addEvent(n),e._add_rec_marker&&e.setCurrentView()},e._dp_change_event_id=function(t,a){e.getEvent(t)&&e.changeEventId(t,a)},e._dp_hook_delete=function(a,n){if(e.getEvent(a))return n&&a!=n&&("true_deleted"==this.getUserData(a,t.action_param)&&this.setUserData(a,t.action_param,"updated"),this.changeEventId(a,n)),this.deleteEvent(n,!0)},e.setDp=function(){this._dp=t},e.setDp()}(this.$scheduler,this)
var t=new function(e,t){this.$scheduler=e,this.$dp=t,this._dataProcessorHandlers=[],this.attach=function(){var e=this.$dp,t=this.$scheduler
this._dataProcessorHandlers.push(t.attachEvent("onEventAdded",(function(t){!this._loading&&this._validId(t)&&e.setUpdated(t,!0,"inserted")}))),this._dataProcessorHandlers.push(t.attachEvent("onConfirmedBeforeEventDelete",(function(t){if(this._validId(t)){var a=e.getState(t)
return"inserted"==a||this._new_event?(e.setUpdated(t,!1),!0):"deleted"!=a&&("true_deleted"==a||(e.setUpdated(t,!0,"deleted"),!1))}}))),this._dataProcessorHandlers.push(t.attachEvent("onEventChanged",(function(t){!this._loading&&this._validId(t)&&e.setUpdated(t,!0,"updated")}))),this._dataProcessorHandlers.push(t.attachEvent("onClearAll",(function(){e._in_progress={},e._invalid={},e.updatedRows=[],e._waitMode=0}))),e.attachEvent("insertCallback",t._update_callback),e.attachEvent("updateCallback",t._update_callback),e.attachEvent("deleteCallback",(function(e,a){t.getEvent(a)?(t.setUserData(a,this.action_param,"true_deleted"),t.deleteEvent(a)):t._add_rec_marker&&t._update_callback(e,a)}))},this.detach=function(){for(var e in this._dataProcessorHandlers){var t=this._dataProcessorHandlers[e]
this.$scheduler.detachEvent(t)}this._dataProcessorHandlers=[]}}(this.$scheduler,this)
t.attach(),this.attachEvent("onDestroy",(function(){delete this._getRowData,delete this.$scheduler._dp,delete this.$scheduler._dataprocessor,delete this.$scheduler._set_event_text_style,delete this.$scheduler._dp_change_event_id,delete this.$scheduler._dp_hook_delete,delete this.$scheduler,t.detach()})),this.$scheduler.callEvent("onDataProcessorReady",[this]),this._initialized=!0,e._dataprocessor=this}},setOnAfterUpdate:function(e){this.attachEvent("onAfterUpdate",e)},setOnBeforeUpdateHandler:function(e){this.attachEvent("onBeforeDataSending",e)},setAutoUpdate:function(e,t){e=e||2e3,this._user=t||(new Date).valueOf(),this._need_update=!1,this._update_busy=!1,this.attachEvent("onAfterUpdate",(function(e,t,a,n){this.afterAutoUpdate(e,t,a,n)})),this.attachEvent("onFullSync",(function(){this.fullSync()}))
var a=this
n.a.setInterval((function(){a.loadUpdate()}),e)},afterAutoUpdate:function(e,t,a,n){return"collision"!=t||(this._need_update=!0,!1)},fullSync:function(){return this._need_update&&(this._need_update=!1,this.loadUpdate()),!0},getUpdates:function(e,t){var a=this.$scheduler.ajax
if(this._update_busy)return!1
this._update_busy=!0,a.get(e,t)},_getXmlNodeValue:function(e){return e.firstChild?e.firstChild.nodeValue:""},loadUpdate:function(){var e=this,t=this.$scheduler.ajax,a=this.$scheduler.getUserData(0,"version"),n=this.serverProcessor+t.urlSeparator(this.serverProcessor)+["dhx_user="+this._user,"dhx_version="+a].join("&")
n=n.replace("editing=true&",""),this.getUpdates(n,(function(a){var n=t.xpath("//userdata",a)
e.$scheduler.setUserData(0,"version",e._getXmlNodeValue(n[0]))
var i=t.xpath("//update",a)
if(i.length){e._silent_mode=!0
for(var r=0;r<i.length;r++){var o=i[r].getAttribute("status"),_=i[r].getAttribute("id"),s=i[r].getAttribute("parent")
switch(o){case"inserted":this.callEvent("insertCallback",[i[r],_,s])
break
case"updated":this.callEvent("updateCallback",[i[r],_,s])
break
case"deleted":this.callEvent("deleteCallback",[i[r],_,s])}}e._silent_mode=!1}e._update_busy=!1,e=null}))},destructor:function(){this.callEvent("onDestroy",[]),this.detachAllEvents(),this.updatedRows=[],this._in_progress={},this._invalid={},this._headers=null,this._payload=null,delete this._initialized},url:function(e){this.serverProcessor=this._serverProcessor=e},_serializeAsJSON:function(e){if("string"==typeof e)return e
var t=this.$scheduler.utils.copy(e)
return"REST-JSON"===this._tMode&&(delete t.id,delete t[this.action_param]),JSON.stringify(t)},_cleanupArgumentsBeforeSend:function(e){var t
if(void 0===e[this.action_param])for(var a in t={},e)t[a]=this._cleanupArgumentsBeforeSend(e[a])
else t=this._cleanupItemBeforeSend(e)
return t},_cleanupItemBeforeSend:function(e){var t=null
return e&&("deleted"===e[this.action_param]?((t={}).id=e.id,t[this.action_param]=e[this.action_param]):t=e),t},_forEachUpdatedRow:function(e){for(var t=this.updatedRows.slice(),a=0;a<t.length;a++){var n=t[a]
this.$scheduler.getUserData(n,this.action_param)&&e.call(this,n)}},_prepareDataItem:function(e){var t={},a=this.$scheduler,n=a.utils.copy(e)
for(var i in n)0!==i.indexOf("_")&&n[i]&&(n[i].getUTCFullYear?t[i]=a._helpers.formatDate(n[i]):"object"==j(n[i])?t[i]=this._prepareDataItem(n[i]):null===n[i]?t[i]="":t[i]=n[i])
return t[this.action_param]=a.getUserData(e.id,this.action_param),t},_getRowData:function(e){var t=this.$scheduler.getEvent(e)
return t||(t={id:e}),this._prepareDataItem(t)}}
var I={date:{month_full:["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],month_short:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],day_full:["الأحد","الأثنين","ألثلاثاء","الأربعاء","ألحميس","ألجمعة","السبت"],day_short:["احد","اثنين","ثلاثاء","اربعاء","خميس","جمعة","سبت"]},labels:{dhx_cal_today_button:"اليوم",day_tab:"يوم",week_tab:"أسبوع",month_tab:"شهر",new_event:"حدث جديد",icon_save:"اخزن",icon_cancel:"الغاء",icon_details:"تفاصيل",icon_edit:"تحرير",icon_delete:"حذف",confirm_closing:"التغييرات سوف تضيع, هل انت متأكد؟",confirm_deleting:"الحدث سيتم حذفها نهائيا ، هل أنت متأكد؟",section_description:"الوصف",section_time:"الفترة الزمنية",full_day:"طوال اليوم",confirm_recurring:"هل تريد تحرير مجموعة كاملة من الأحداث المتكررة؟",section_recurring:"تكرار الحدث",button_recurring:"تعطيل",button_recurring_open:"تمكين",button_edit_series:"تحرير سلسلة",button_edit_occurrence:"تعديل نسخة",grid_tab:"جدول",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute"}},F={date:{month_full:["Студзень","Люты","Сакавік","Красавік","Maй","Чэрвень","Ліпень","Жнівень","Верасень","Кастрычнік","Лістапад","Снежань"],month_short:["Студз","Лют","Сак","Крас","Maй","Чэр","Ліп","Жнів","Вер","Каст","Ліст","Снеж"],day_full:["Нядзеля","Панядзелак","Аўторак","Серада","Чацвер","Пятніца","Субота"],day_short:["Нд","Пн","Аўт","Ср","Чцв","Пт","Сб"]},labels:{dhx_cal_today_button:"Сёння",day_tab:"Дзень",week_tab:"Тыдзень",month_tab:"Месяц",new_event:"Новая падзея",icon_save:"Захаваць",icon_cancel:"Адмяніць",icon_details:"Дэталі",icon_edit:"Змяніць",icon_delete:"Выдаліць",confirm_closing:"",confirm_deleting:"Падзея будзе выдалена незваротна, працягнуць?",section_description:"Апісанне",section_time:"Перыяд часу",full_day:"Увесь дзень",confirm_recurring:"Вы хочаце змяніць усю серыю паўтаральных падзей?",section_recurring:"Паўтарэнне",button_recurring:"Адключана",button_recurring_open:"Уключана",button_edit_series:"Рэдагаваць серыю",button_edit_occurrence:"Рэдагаваць асобнік",agenda_tab:"Спіс",date:"Дата",description:"Апісанне",year_tab:"Год",week_agenda_tab:"Спіс",grid_tab:"Спic",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Дзень",repeat_radio_week:"Тыдзень",repeat_radio_month:"Месяц",repeat_radio_year:"Год",repeat_radio_day_type:"Кожны",repeat_text_day_count:"дзень",repeat_radio_day_type2:"Кожны працоўны дзень",repeat_week:" Паўтараць кожны",repeat_text_week_count:"тыдзень",repeat_radio_month_type:"Паўтараць",repeat_radio_month_start:"",repeat_text_month_day:" чысла кожнага",repeat_text_month_count:"месяцу",repeat_text_month_count2_before:"кожны ",repeat_text_month_count2_after:"месяц",repeat_year_label:"",select_year_day2:"",repeat_text_year_day:"день",select_year_month:"",repeat_radio_end:"Без даты заканчэння",repeat_text_occurences_count:"паўтораў",repeat_radio_end2:"",repeat_radio_end3:"Да ",month_for_recurring:["Студзеня","Лютага","Сакавіка","Красавіка","Мая","Чэрвеня","Ліпeня","Жніўня","Верасня","Кастрычніка","Лістапада","Снежня"],day_for_recurring:["Нядзелю","Панядзелак","Аўторак","Сераду","Чацвер","Пятніцу","Суботу"]}},$={date:{month_full:["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],month_short:["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"],day_full:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"],day_short:["Dg","Dl","Dm","Dc","Dj","Dv","Ds"]},labels:{dhx_cal_today_button:"Hui",day_tab:"Dia",week_tab:"Setmana",month_tab:"Mes",new_event:"Nou esdeveniment",icon_save:"Guardar",icon_cancel:"Cancel·lar",icon_details:"Detalls",icon_edit:"Editar",icon_delete:"Esborrar",confirm_closing:"",confirm_deleting:"L'esdeveniment s'esborrarà definitivament, continuar ?",section_description:"Descripció",section_time:"Periode de temps",full_day:"Tot el dia",confirm_recurring:"¿Desitja modificar el conjunt d'esdeveniments repetits?",section_recurring:"Repeteixca l'esdeveniment",button_recurring:"Impedit",button_recurring_open:"Permés",button_edit_series:"Edit sèrie",button_edit_occurrence:"Edita Instància",agenda_tab:"Agenda",date:"Data",description:"Descripció",year_tab:"Any",week_agenda_tab:"Agenda",grid_tab:"Taula",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute"}},B={date:{month_full:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],month_short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],day_full:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],day_short:["日","一","二","三","四","五","六"]},labels:{dhx_cal_today_button:"今天",day_tab:"日",week_tab:"周",month_tab:"月",new_event:"新建日程",icon_save:"保存",icon_cancel:"关闭",icon_details:"详细",icon_edit:"编辑",icon_delete:"删除",confirm_closing:"请确认是否撤销修改!",confirm_deleting:"是否删除日程?",section_description:"描述",section_time:"时间范围",full_day:"整天",confirm_recurring:"请确认是否将日程设为重复模式?",section_recurring:"重复周期",button_recurring:"禁用",button_recurring_open:"启用",button_edit_series:"编辑系列",button_edit_occurrence:"编辑实例",agenda_tab:"议程",date:"日期",description:"说明",year_tab:"今年",week_agenda_tab:"议程",grid_tab:"电网",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"按天",repeat_radio_week:"按周",repeat_radio_month:"按月",repeat_radio_year:"按年",repeat_radio_day_type:"每",repeat_text_day_count:"天",repeat_radio_day_type2:"每个工作日",repeat_week:" 重复 每",repeat_text_week_count:"星期的:",repeat_radio_month_type:"重复",repeat_radio_month_start:"在",repeat_text_month_day:"日 每",repeat_text_month_count:"月",repeat_text_month_count2_before:"每",repeat_text_month_count2_after:"月",repeat_year_label:"在",select_year_day2:"的",repeat_text_year_day:"日",select_year_month:"月",repeat_radio_end:"无结束日期",repeat_text_occurences_count:"次结束",repeat_radio_end2:"重复",repeat_radio_end3:"结束于",month_for_recurring:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],day_for_recurring:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]}},V={date:{month_full:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],month_short:["Led","Ún","Bře","Dub","Kvě","Čer","Čec","Srp","Září","Říj","List","Pro"],day_full:["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"],day_short:["Ne","Po","Út","St","Čt","Pá","So"]},labels:{dhx_cal_today_button:"Dnes",day_tab:"Den",week_tab:"Týden",month_tab:"Měsíc",new_event:"Nová událost",icon_save:"Uložit",icon_cancel:"Zpět",icon_details:"Detail",icon_edit:"Edituj",icon_delete:"Smazat",confirm_closing:"",confirm_deleting:"Událost bude trvale smazána, opravdu?",section_description:"Poznámky",section_time:"Doba platnosti",confirm_recurring:"Přejete si upravit celou řadu opakovaných událostí?",section_recurring:"Opakování události",button_recurring:"Vypnuto",button_recurring_open:"Zapnuto",button_edit_series:"Edit series",button_edit_occurrence:"Upravit instance",agenda_tab:"Program",date:"Datum",description:"Poznámka",year_tab:"Rok",full_day:"Full day",week_agenda_tab:"Program",grid_tab:"Mřížka",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Denně",repeat_radio_week:"Týdně",repeat_radio_month:"Měsíčně",repeat_radio_year:"Ročně",repeat_radio_day_type:"každý",repeat_text_day_count:"Den",repeat_radio_day_type2:"pracovní dny",repeat_week:"Opakuje každých",repeat_text_week_count:"Týdnů na:",repeat_radio_month_type:"u každého",repeat_radio_month_start:"na",repeat_text_month_day:"Den každého",repeat_text_month_count:"Měsíc",repeat_text_month_count2_before:"každý",repeat_text_month_count2_after:"Měsíc",repeat_year_label:"na",select_year_day2:"v",repeat_text_year_day:"Den v",select_year_month:"",repeat_radio_end:"bez data ukončení",repeat_text_occurences_count:"Události",repeat_radio_end2:"po",repeat_radio_end3:"Konec",month_for_recurring:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],day_for_recurring:["Neděle ","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"]}},U={date:{month_full:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],month_short:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],day_full:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],day_short:["Søn","Man","Tir","Ons","Tor","Fre","Lør"]},labels:{dhx_cal_today_button:"Idag",day_tab:"Dag",week_tab:"Uge",month_tab:"Måned",new_event:"Ny begivenhed",icon_save:"Gem",icon_cancel:"Fortryd",icon_details:"Detaljer",icon_edit:"Tilret",icon_delete:"Slet",confirm_closing:"Dine rettelser vil gå tabt.. Er dy sikker?",confirm_deleting:"Bigivenheden vil blive slettet permanent. Er du sikker?",section_description:"Beskrivelse",section_time:"Tidsperiode",confirm_recurring:"Vil du tilrette hele serien af gentagne begivenheder?",section_recurring:"Gentag begivenhed",button_recurring:"Frakoblet",button_recurring_open:"Tilkoblet",button_edit_series:"Rediger serien",button_edit_occurrence:"Rediger en kopi",agenda_tab:"Dagsorden",date:"Dato",description:"Beskrivelse",year_tab:"År",week_agenda_tab:"Dagsorden",grid_tab:"Grid",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Daglig",repeat_radio_week:"Ugenlig",repeat_radio_month:"Månedlig",repeat_radio_year:"Årlig",repeat_radio_day_type:"Hver",repeat_text_day_count:"dag",repeat_radio_day_type2:"På hver arbejdsdag",repeat_week:" Gentager sig hver",repeat_text_week_count:"uge på følgende dage:",repeat_radio_month_type:"Hver den",repeat_radio_month_start:"Den",repeat_text_month_day:" i hver",repeat_text_month_count:"måned",repeat_text_month_count2_before:"hver",repeat_text_month_count2_after:"måned",repeat_year_label:"Den",select_year_day2:"i",repeat_text_year_day:"dag i",select_year_month:"",repeat_radio_end:"Ingen slutdato",repeat_text_occurences_count:"gentagelse",repeat_radio_end2:"Efter",repeat_radio_end3:"Slut",month_for_recurring:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],day_for_recurring:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"]}},q={date:{month_full:[" Januar"," Februar"," März "," April"," Mai"," Juni"," Juli"," August"," September "," Oktober"," November "," Dezember"],month_short:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],day_full:["Sonntag","Montag","Dienstag"," Mittwoch"," Donnerstag","Freitag","Samstag"],day_short:["So","Mo","Di","Mi","Do","Fr","Sa"]},labels:{dhx_cal_today_button:"Heute",day_tab:"Tag",week_tab:"Woche",month_tab:"Monat",new_event:"neuer Eintrag",icon_save:"Speichern",icon_cancel:"Abbrechen",icon_details:"Details",icon_edit:"Ändern",icon_delete:"Löschen",confirm_closing:"",confirm_deleting:"Der Eintrag wird gelöscht",section_description:"Beschreibung",section_time:"Zeitspanne",full_day:"Ganzer Tag",confirm_recurring:"Wollen Sie alle Einträge bearbeiten oder nur diesen einzelnen Eintrag?",section_recurring:"Wiederholung",button_recurring:"Aus",button_recurring_open:"An",button_edit_series:"Bearbeiten Sie die Serie",button_edit_occurrence:"Bearbeiten Sie eine Kopie",agenda_tab:"Agenda",date:"Datum",description:"Beschreibung",year_tab:"Jahre",week_agenda_tab:"Agenda",grid_tab:"Grid",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Täglich",repeat_radio_week:"Wöchentlich",repeat_radio_month:"Monatlich",repeat_radio_year:"Jährlich",repeat_radio_day_type:"jeden",repeat_text_day_count:"Tag",repeat_radio_day_type2:"an jedem Arbeitstag",repeat_week:" Wiederholt sich jede",repeat_text_week_count:"Woche am:",repeat_radio_month_type:"an jedem",repeat_radio_month_start:"am",repeat_text_month_day:"Tag eines jeden",repeat_text_month_count:"Monats",repeat_text_month_count2_before:"jeden",repeat_text_month_count2_after:"Monats",repeat_year_label:"am",select_year_day2:"im",repeat_text_year_day:"Tag im",select_year_month:"",repeat_radio_end:"kein Enddatum",repeat_text_occurences_count:"Ereignissen",repeat_radio_end3:"Schluß",repeat_radio_end2:"nach",month_for_recurring:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],day_for_recurring:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]}},W={date:{month_full:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάϊος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],month_short:["ΙΑΝ","ΦΕΒ","ΜΑΡ","ΑΠΡ","ΜΑΙ","ΙΟΥΝ","ΙΟΥΛ","ΑΥΓ","ΣΕΠ","ΟΚΤ","ΝΟΕ","ΔΕΚ"],day_full:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Κυριακή"],day_short:["ΚΥ","ΔΕ","ΤΡ","ΤΕ","ΠΕ","ΠΑ","ΣΑ"]},labels:{dhx_cal_today_button:"Σήμερα",day_tab:"Ημέρα",week_tab:"Εβδομάδα",month_tab:"Μήνας",new_event:"Νέο έργο",icon_save:"Αποθήκευση",icon_cancel:"Άκυρο",icon_details:"Λεπτομέρειες",icon_edit:"Επεξεργασία",icon_delete:"Διαγραφή",confirm_closing:"",confirm_deleting:"Το έργο θα διαγραφεί οριστικά. Θέλετε να συνεχίσετε;",section_description:"Περιγραφή",section_time:"Χρονική περίοδος",full_day:"Πλήρης Ημέρα",confirm_recurring:"Θέλετε να επεξεργασθείτε ολόκληρη την ομάδα των επαναλαμβανόμενων έργων;",section_recurring:"Επαναλαμβανόμενο έργο",button_recurring:"Ανενεργό",button_recurring_open:"Ενεργό",button_edit_series:"Επεξεργαστείτε τη σειρά",button_edit_occurrence:"Επεξεργασία ένα αντίγραφο",agenda_tab:"Ημερήσια Διάταξη",date:"Ημερομηνία",description:"Περιγραφή",year_tab:"Έτος",week_agenda_tab:"Ημερήσια Διάταξη",grid_tab:"Πλέγμα",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Ημερησίως",repeat_radio_week:"Εβδομαδιαίως",repeat_radio_month:"Μηνιαίως",repeat_radio_year:"Ετησίως",repeat_radio_day_type:"Κάθε",repeat_text_day_count:"ημέρα",repeat_radio_day_type2:"Κάθε εργάσιμη",repeat_week:" Επανάληψη κάθε",repeat_text_week_count:"εβδομάδα τις επόμενες ημέρες:",repeat_radio_month_type:"Επανάληψη",repeat_radio_month_start:"Την",repeat_text_month_day:"ημέρα κάθε",repeat_text_month_count:"μήνα",repeat_text_month_count2_before:"κάθε",repeat_text_month_count2_after:"μήνα",repeat_year_label:"Την",select_year_day2:"του",repeat_text_year_day:"ημέρα",select_year_month:"μήνα",repeat_radio_end:"Χωρίς ημερομηνία λήξεως",repeat_text_occurences_count:"επαναλήψεις",repeat_radio_end3:"Λήγει την",repeat_radio_end2:"Μετά από",month_for_recurring:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάϊος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],day_for_recurring:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]}},K={date:{month_full:["January","February","March","April","May","June","July","August","September","October","November","December"],month_short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day_full:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],day_short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},labels:{dhx_cal_today_button:"Today",day_tab:"Day",week_tab:"Week",month_tab:"Month",new_event:"New event",icon_save:"Save",icon_cancel:"Cancel",icon_details:"Details",icon_edit:"Edit",icon_delete:"Delete",confirm_closing:"",confirm_deleting:"Event will be deleted permanently, are you sure?",section_description:"Description",section_time:"Time period",full_day:"Full day",confirm_recurring:"Do you want to edit the whole set of repeated events?",section_recurring:"Repeat event",button_recurring:"Disabled",button_recurring_open:"Enabled",button_edit_series:"Edit series",button_edit_occurrence:"Edit occurrence",agenda_tab:"Agenda",date:"Date",description:"Description",year_tab:"Year",week_agenda_tab:"Agenda",grid_tab:"Grid",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Daily",repeat_radio_week:"Weekly",repeat_radio_month:"Monthly",repeat_radio_year:"Yearly",repeat_radio_day_type:"Every",repeat_text_day_count:"day",repeat_radio_day_type2:"Every workday",repeat_week:" Repeat every",repeat_text_week_count:"week next days:",repeat_radio_month_type:"Repeat",repeat_radio_month_start:"On",repeat_text_month_day:"day every",repeat_text_month_count:"month",repeat_text_month_count2_before:"every",repeat_text_month_count2_after:"month",repeat_year_label:"On",select_year_day2:"of",repeat_text_year_day:"day",select_year_month:"month",repeat_radio_end:"No end date",repeat_text_occurences_count:"occurrences",repeat_radio_end2:"After",repeat_radio_end3:"End by",month_for_recurring:["January","February","March","April","May","June","July","August","September","October","November","December"],day_for_recurring:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},X={date:{month_full:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],month_short:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],day_full:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],day_short:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"]},labels:{dhx_cal_today_button:"Hoy",day_tab:"Día",week_tab:"Semana",month_tab:"Mes",new_event:"Nuevo evento",icon_save:"Guardar",icon_cancel:"Cancelar",icon_details:"Detalles",icon_edit:"Editar",icon_delete:"Eliminar",confirm_closing:"",confirm_deleting:"El evento se borrará definitivamente, ¿continuar?",section_description:"Descripción",section_time:"Período",full_day:"Todo el día",confirm_recurring:"¿Desea modificar el conjunto de eventos repetidos?",section_recurring:"Repita el evento",button_recurring:"Impedido",button_recurring_open:"Permitido",button_edit_series:"Editar la serie",button_edit_occurrence:"Editar este evento",agenda_tab:"Día",date:"Fecha",description:"Descripción",year_tab:"Año",week_agenda_tab:"Día",grid_tab:"Reja",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Diariamente",repeat_radio_week:"Semanalmente",repeat_radio_month:"Mensualmente",repeat_radio_year:"Anualmente",repeat_radio_day_type:"Cada",repeat_text_day_count:"dia",repeat_radio_day_type2:"Cada jornada de trabajo",repeat_week:" Repetir cada",repeat_text_week_count:"semana:",repeat_radio_month_type:"Repita",repeat_radio_month_start:"El",repeat_text_month_day:"dia cada ",repeat_text_month_count:"mes",repeat_text_month_count2_before:"cada",repeat_text_month_count2_after:"mes",repeat_year_label:"El",select_year_day2:"del",repeat_text_year_day:"dia",select_year_month:"mes",repeat_radio_end:"Sin fecha de finalización",repeat_text_occurences_count:"ocurrencias",repeat_radio_end3:"Fin",repeat_radio_end2:"Después de",month_for_recurring:["Enero","Febrero","Маrzo","Аbril","Mayo","Junio","Julio","Аgosto","Setiembre","Octubre","Noviembre","Diciembre"],day_for_recurring:["Domingo","Lunes","Martes","Miércoles","Jeuves","Viernes","Sabado"]}},Y={date:{month_full:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kes&auml;kuu","Hein&auml;kuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],month_short:["Tam","Hel","Maa","Huh","Tou","Kes","Hei","Elo","Syy","Lok","Mar","Jou"],day_full:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],day_short:["Su","Ma","Ti","Ke","To","Pe","La"]},labels:{dhx_cal_today_button:"Tänään",day_tab:"Päivä",week_tab:"Viikko",month_tab:"Kuukausi",new_event:"Uusi tapahtuma",icon_save:"Tallenna",icon_cancel:"Peru",icon_details:"Tiedot",icon_edit:"Muokkaa",icon_delete:"Poista",confirm_closing:"",confirm_deleting:"Haluatko varmasti poistaa tapahtuman?",section_description:"Kuvaus",section_time:"Aikajakso",full_day:"Koko päivä",confirm_recurring:"Haluatko varmasti muokata toistuvan tapahtuman kaikkia jaksoja?",section_recurring:"Toista tapahtuma",button_recurring:"Ei k&auml;yt&ouml;ss&auml;",button_recurring_open:"K&auml;yt&ouml;ss&auml;",button_edit_series:"Muokkaa sarja",button_edit_occurrence:"Muokkaa kopio",agenda_tab:"Esityslista",date:"Päivämäärä",description:"Kuvaus",year_tab:"Vuoden",week_agenda_tab:"Esityslista",grid_tab:"Ritilä",drag_to_create:"Luo uusi vetämällä",drag_to_move:"Siirrä vetämällä",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"P&auml;ivitt&auml;in",repeat_radio_week:"Viikoittain",repeat_radio_month:"Kuukausittain",repeat_radio_year:"Vuosittain",repeat_radio_day_type:"Joka",repeat_text_day_count:"p&auml;iv&auml;",repeat_radio_day_type2:"Joka arkip&auml;iv&auml;",repeat_week:"Toista joka",repeat_text_week_count:"viikko n&auml;in&auml; p&auml;ivin&auml;:",repeat_radio_month_type:"Toista",repeat_radio_month_start:"",repeat_text_month_day:"p&auml;iv&auml;n&auml; joka",repeat_text_month_count:"kuukausi",repeat_text_month_count2_before:"joka",repeat_text_month_count2_after:"kuukausi",repeat_year_label:"",select_year_day2:"",repeat_text_year_day:"p&auml;iv&auml;",select_year_month:"kuukausi",repeat_radio_end:"Ei loppumisaikaa",repeat_text_occurences_count:"Toiston j&auml;lkeen",repeat_radio_end3:"Loppuu",repeat_radio_end2:"",month_for_recurring:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kes&auml;kuu","Hein&auml;kuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],day_for_recurring:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"]}},J={date:{month_full:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],month_short:["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Aoû","Sep","Oct","Nov","Déc"],day_full:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],day_short:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]},labels:{dhx_cal_today_button:"Aujourd'hui",day_tab:"Jour",week_tab:"Semaine",month_tab:"Mois",new_event:"Nouvel événement",icon_save:"Enregistrer",icon_cancel:"Annuler",icon_details:"Détails",icon_edit:"Modifier",icon_delete:"Effacer",confirm_closing:"",confirm_deleting:"L'événement sera effacé sans appel, êtes-vous sûr ?",section_description:"Description",section_time:"Période",full_day:"Journée complète",confirm_recurring:"Voulez-vous éditer toute une série d'évènements répétés?",section_recurring:"Périodicité",button_recurring:"Désactivé",button_recurring_open:"Activé",button_edit_series:"Modifier la série",button_edit_occurrence:"Modifier une copie",agenda_tab:"Jour",date:"Date",description:"Description",year_tab:"Année",week_agenda_tab:"Jour",grid_tab:"Grille",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Quotidienne",repeat_radio_week:"Hebdomadaire",repeat_radio_month:"Mensuelle",repeat_radio_year:"Annuelle",repeat_radio_day_type:"Chaque",repeat_text_day_count:"jour",repeat_radio_day_type2:"Chaque journée de travail",repeat_week:" Répéter toutes les",repeat_text_week_count:"semaine:",repeat_radio_month_type:"Répéter",repeat_radio_month_start:"Le",repeat_text_month_day:"jour chaque",repeat_text_month_count:"mois",repeat_text_month_count2_before:"chaque",repeat_text_month_count2_after:"mois",repeat_year_label:"Le",select_year_day2:"du",repeat_text_year_day:"jour",select_year_month:"mois",repeat_radio_end:"Pas de date d&quot;achèvement",repeat_text_occurences_count:"occurrences",repeat_radio_end3:"Fin",repeat_radio_end2:"Après",month_for_recurring:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],day_for_recurring:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]}},G={date:{month_full:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],month_short:["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ"],day_full:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],day_short:["א","ב","ג","ד","ה","ו","ש"]},labels:{dhx_cal_today_button:"היום",day_tab:"יום",week_tab:"שבוע",month_tab:"חודש",new_event:"ארוע חדש",icon_save:"שמור",icon_cancel:"בטל",icon_details:"פרטים",icon_edit:"ערוך",icon_delete:"מחק",confirm_closing:"",confirm_deleting:"ארוע ימחק סופית.להמשיך?",section_description:"תיאור",section_time:"תקופה",confirm_recurring:"האם ברצונך לשנות כל סדרת ארועים מתמשכים?",section_recurring:"להעתיק ארוע",button_recurring:"לא פעיל",button_recurring_open:"פעיל",full_day:"יום שלם",button_edit_series:"ערוך את הסדרה",button_edit_occurrence:"עריכת עותק",agenda_tab:"סדר יום",date:"תאריך",description:"תיאור",year_tab:"לשנה",week_agenda_tab:"סדר יום",grid_tab:"סורג",drag_to_create:"Drag to create",drag_to_move:"גרור כדי להזיז",message_ok:"OK",message_cancel:"בטל",next:"הבא",prev:"הקודם",year:"שנה",month:"חודש",day:"יום",hour:"שעה",minute:"דקה",repeat_radio_day:"יומי",repeat_radio_week:"שבועי",repeat_radio_month:"חודשי",repeat_radio_year:"שנתי",repeat_radio_day_type:"חזור כל",repeat_text_day_count:"ימים",repeat_radio_day_type2:"חזור כל יום עבודה",repeat_week:" חזור כל",repeat_text_week_count:"שבוע לפי ימים:",repeat_radio_month_type:"חזור כל",repeat_radio_month_start:"כל",repeat_text_month_day:"ימים כל",repeat_text_month_count:"חודשים",repeat_text_month_count2_before:"חזור כל",repeat_text_month_count2_after:"חודש",repeat_year_label:"כל",select_year_day2:"בחודש",repeat_text_year_day:"ימים",select_year_month:"חודש",repeat_radio_end:"לעולם לא מסתיים",repeat_text_occurences_count:"אירועים",repeat_radio_end3:"מסתיים ב",repeat_radio_end2:"אחרי",month_for_recurring:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],day_for_recurring:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"]}},Q={date:{month_full:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],month_short:["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Sep","Okt","Nov","Dec"],day_full:["Vasárnap","Hétfõ","Kedd","Szerda","Csütörtök","Péntek","szombat"],day_short:["Va","Hé","Ke","Sze","Csü","Pé","Szo"]},labels:{dhx_cal_today_button:"Ma",day_tab:"Nap",week_tab:"Hét",month_tab:"Hónap",new_event:"Új esemény",icon_save:"Mentés",icon_cancel:"Mégse",icon_details:"Részletek",icon_edit:"Szerkesztés",icon_delete:"Törlés",confirm_closing:"",confirm_deleting:"Az esemény törölve lesz, biztosan folytatja?",section_description:"Leírás",section_time:"Idõszak",full_day:"Egesz napos",confirm_recurring:"Biztosan szerkeszteni akarod az összes ismétlõdõ esemény beállítását?",section_recurring:"Esemény ismétlése",button_recurring:"Tiltás",button_recurring_open:"Engedélyezés",button_edit_series:"Edit series",button_edit_occurrence:"Szerkesztés bíróság",agenda_tab:"Napirend",date:"Dátum",description:"Leírás",year_tab:"Év",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute"}},Z={date:{month_full:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],month_short:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Ags","Sep","Okt","Nov","Des"],day_full:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],day_short:["Ming","Sen","Sel","Rab","Kam","Jum","Sab"]},labels:{dhx_cal_today_button:"Hari Ini",day_tab:"Hari",week_tab:"Minggu",month_tab:"Bulan",new_event:"Acara Baru",icon_save:"Simpan",icon_cancel:"Batal",icon_details:"Detail",icon_edit:"Edit",icon_delete:"Hapus",confirm_closing:"",confirm_deleting:"Acara akan dihapus",section_description:"Keterangan",section_time:"Periode",full_day:"Hari penuh",confirm_recurring:"Apakah acara ini akan berulang?",section_recurring:"Acara Rutin",button_recurring:"Tidak Difungsikan",button_recurring_open:"Difungsikan",button_edit_series:"Mengedit seri",button_edit_occurrence:"Mengedit salinan",agenda_tab:"Agenda",date:"Tanggal",description:"Keterangan",year_tab:"Tahun",week_agenda_tab:"Agenda",grid_tab:"Tabel",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute"}},ee={date:{month_full:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],month_short:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],day_full:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],day_short:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]},labels:{dhx_cal_today_button:"Oggi",day_tab:"Giorno",week_tab:"Settimana",month_tab:"Mese",new_event:"Nuovo evento",icon_save:"Salva",icon_cancel:"Chiudi",icon_details:"Dettagli",icon_edit:"Modifica",icon_delete:"Elimina",confirm_closing:"",confirm_deleting:"L'evento sarà eliminato, siete sicuri?",section_description:"Descrizione",section_time:"Periodo di tempo",full_day:"Intera giornata",confirm_recurring:"Vuoi modificare l'intera serie di eventi?",section_recurring:"Ripetere l'evento",button_recurring:"Disattivato",button_recurring_open:"Attivato",button_edit_series:"Modificare la serie",button_edit_occurrence:"Modificare una copia",agenda_tab:"Agenda",date:"Data",description:"Descrizione",year_tab:"Anno",week_agenda_tab:"Agenda",grid_tab:"Griglia",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Quotidiano",repeat_radio_week:"Settimanale",repeat_radio_month:"Mensile",repeat_radio_year:"Annuale",repeat_radio_day_type:"Ogni",repeat_text_day_count:"giorno",repeat_radio_day_type2:"Ogni giornata lavorativa",repeat_week:" Ripetere ogni",repeat_text_week_count:"settimana:",repeat_radio_month_type:"Ripetere",repeat_radio_month_start:"Il",repeat_text_month_day:"giorno ogni",repeat_text_month_count:"mese",repeat_text_month_count2_before:"ogni",repeat_text_month_count2_after:"mese",repeat_year_label:"Il",select_year_day2:"del",repeat_text_year_day:"giorno",select_year_month:"mese",repeat_radio_end:"Senza data finale",repeat_text_occurences_count:"occorenze",repeat_radio_end3:"Fine",repeat_radio_end2:"Dopo",month_for_recurring:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Jiugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],day_for_recurring:["Domenica","Lunedì","Martedì","Mercoledì","Jovedì","Venerdì","Sabato"]}},te={date:{month_full:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],month_short:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],day_full:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],day_short:["日","月","火","水","木","金","土"]},labels:{dhx_cal_today_button:"今日",day_tab:"日",week_tab:"週",month_tab:"月",new_event:"新イベント",icon_save:"保存",icon_cancel:"キャンセル",icon_details:"詳細",icon_edit:"編集",icon_delete:"削除",confirm_closing:"",confirm_deleting:"イベント完全に削除されます、宜しいですか？",section_description:"デスクリプション",section_time:"期間",confirm_recurring:"繰り返されているイベントを全て編集しますか？",section_recurring:"イベントを繰り返す",button_recurring:"無効",button_recurring_open:"有効",full_day:"終日",button_edit_series:"シリーズを編集します",button_edit_occurrence:"コピーを編集",agenda_tab:"議題は",date:"日付",description:"説明",year_tab:"今年",week_agenda_tab:"議題は",grid_tab:"グリッド",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute"}}
var ae=function(){function e(t){for(var a in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._locales={},t)this._locales[a]=t[a]}return function(e,t,a){t&&function(e,t){for(var a=0;a<t.length;a++){var n=t[a]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t)}(e,[{key:"addLocale",value:function(e,t){this._locales[e]=t}},{key:"getLocale",value:function(e){return this._locales[e]}}]),e}(),ne={date:{month_full:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],month_short:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],day_full:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],day_short:["Søn","Mon","Tir","Ons","Tor","Fre","Lør"]},labels:{dhx_cal_today_button:"I dag",day_tab:"Dag",week_tab:"Uke",month_tab:"Måned",new_event:"Ny hendelse",icon_save:"Lagre",icon_cancel:"Avbryt",icon_details:"Detaljer",icon_edit:"Rediger",icon_delete:"Slett",confirm_closing:"",confirm_deleting:"Hendelsen vil bli slettet permanent. Er du sikker?",section_description:"Beskrivelse",section_time:"Tidsperiode",confirm_recurring:"Vil du forandre hele dette settet av repeterende hendelser?",section_recurring:"Repeter hendelsen",button_recurring:"Av",button_recurring_open:"På",button_edit_series:"Rediger serien",button_edit_occurrence:"Redigere en kopi",agenda_tab:"Agenda",date:"Dato",description:"Beskrivelse",year_tab:"År",week_agenda_tab:"Agenda",grid_tab:"Grid",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Daglig",repeat_radio_week:"Ukentlig",repeat_radio_month:"Månedlig",repeat_radio_year:"Årlig",repeat_radio_day_type:"Hver",repeat_text_day_count:"dag",repeat_radio_day_type2:"Alle hverdager",repeat_week:" Gjentas hver",repeat_text_week_count:"uke på:",repeat_radio_month_type:"På hver",repeat_radio_month_start:"På",repeat_text_month_day:"dag hver",repeat_text_month_count:"måned",repeat_text_month_count2_before:"hver",repeat_text_month_count2_after:"måned",repeat_year_label:"på",select_year_day2:"i",repeat_text_year_day:"dag i",select_year_month:"",repeat_radio_end:"Ingen sluttdato",repeat_text_occurences_count:"forekomst",repeat_radio_end3:"Stop den",repeat_radio_end2:"Etter",month_for_recurring:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],day_for_recurring:["Sondag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"]}},ie={date:{month_full:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],month_short:["Jan","Feb","mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],day_full:["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],day_short:["Zo","Ma","Di","Wo","Do","Vr","Za"]},labels:{dhx_cal_today_button:"Vandaag",day_tab:"Dag",week_tab:"Week",month_tab:"Maand",new_event:"Nieuw item",icon_save:"Opslaan",icon_cancel:"Annuleren",icon_details:"Details",icon_edit:"Bewerken",icon_delete:"Verwijderen",confirm_closing:"",confirm_deleting:"Item zal permanent worden verwijderd, doorgaan?",section_description:"Beschrijving",section_time:"Tijd periode",full_day:"Hele dag",confirm_recurring:"Wilt u alle terugkerende items bijwerken?",section_recurring:"Item herhalen",button_recurring:"Uit",button_recurring_open:"Aan",button_edit_series:"Bewerk de serie",button_edit_occurrence:"Bewerk een kopie",agenda_tab:"Agenda",date:"Datum",description:"Omschrijving",year_tab:"Jaar",week_agenda_tab:"Agenda",grid_tab:"Tabel",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Dagelijks",repeat_radio_week:"Wekelijks",repeat_radio_month:"Maandelijks",repeat_radio_year:"Jaarlijks",repeat_radio_day_type:"Elke",repeat_text_day_count:"dag(en)",repeat_radio_day_type2:"Elke werkdag",repeat_week:" Herhaal elke",repeat_text_week_count:"week op de volgende dagen:",repeat_radio_month_type:"Herhaal",repeat_radio_month_start:"Op",repeat_text_month_day:"dag iedere",repeat_text_month_count:"maanden",repeat_text_month_count2_before:"iedere",repeat_text_month_count2_after:"maanden",repeat_year_label:"Op",select_year_day2:"van",repeat_text_year_day:"dag",select_year_month:"maand",repeat_radio_end:"Geen eind datum",repeat_text_occurences_count:"keren",repeat_radio_end3:"Eindigd per",repeat_radio_end2:"Na",month_for_recurring:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],day_for_recurring:["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"]}},re={date:{month_full:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],month_short:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],day_full:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],day_short:["Søn","Man","Tir","Ons","Tor","Fre","Lør"]},labels:{dhx_cal_today_button:"Idag",day_tab:"Dag",week_tab:"Uke",month_tab:"Måned",new_event:"Ny",icon_save:"Lagre",icon_cancel:"Avbryt",icon_details:"Detaljer",icon_edit:"Endre",icon_delete:"Slett",confirm_closing:"Endringer blir ikke lagret, er du sikker?",confirm_deleting:"Oppføringen vil bli slettet, er du sikker?",section_description:"Beskrivelse",section_time:"Tidsperiode",full_day:"Full dag",confirm_recurring:"Vil du endre hele settet med repeterende oppføringer?",section_recurring:"Repeterende oppføring",button_recurring:"Ikke aktiv",button_recurring_open:"Aktiv",button_edit_series:"Rediger serien",button_edit_occurrence:"Redigere en kopi",agenda_tab:"Agenda",date:"Dato",description:"Beskrivelse",year_tab:"År",week_agenda_tab:"Agenda",grid_tab:"Grid",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute"}},oe={date:{month_full:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],month_short:["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],day_full:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],day_short:["Nie","Pon","Wto","Śro","Czw","Pią","Sob"]},labels:{dhx_cal_today_button:"Dziś",day_tab:"Dzień",week_tab:"Tydzień",month_tab:"Miesiąc",new_event:"Nowe zdarzenie",icon_save:"Zapisz",icon_cancel:"Anuluj",icon_details:"Szczegóły",icon_edit:"Edytuj",icon_delete:"Usuń",confirm_closing:"",confirm_deleting:"Zdarzenie zostanie usunięte na zawsze, kontynuować?",section_description:"Opis",section_time:"Okres czasu",full_day:"Cały dzień",confirm_recurring:"Czy chcesz edytować cały zbiór powtarzających się zdarzeń?",section_recurring:"Powtórz zdarzenie",button_recurring:"Nieaktywne",button_recurring_open:"Aktywne",button_edit_series:"Edytuj serię",button_edit_occurrence:"Edytuj kopię",agenda_tab:"Agenda",date:"Data",description:"Opis",year_tab:"Rok",week_agenda_tab:"Agenda",grid_tab:"Tabela",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Codziennie",repeat_radio_week:"Co tydzie",repeat_radio_month:"Co miesic",repeat_radio_year:"Co rok",repeat_radio_day_type:"Kadego",repeat_text_day_count:"dnia",repeat_radio_day_type2:"Kadego dnia roboczego",repeat_week:" Powtarzaj kadego",repeat_text_week_count:"tygodnia w dni:",repeat_radio_month_type:"Powtrz",repeat_radio_month_start:"W",repeat_text_month_day:"dnia kadego",repeat_text_month_count:"miesica",repeat_text_month_count2_before:"kadego",repeat_text_month_count2_after:"miesica",repeat_year_label:"W",select_year_day2:"miesica",repeat_text_year_day:"dnia miesica",select_year_month:"",repeat_radio_end:"Bez daty kocowej",repeat_text_occurences_count:"wystpieniu/ach",repeat_radio_end3:"Zakocz w",repeat_radio_end2:"Po",month_for_recurring:["Stycznia","Lutego","Marca","Kwietnia","Maja","Czerwca","Lipca","Sierpnia","Wrzenia","Padziernka","Listopada","Grudnia"],day_for_recurring:["Niedziela","Poniedziaek","Wtorek","roda","Czwartek","Pitek","Sobota"]}},_e={date:{month_full:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],month_short:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],day_full:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],day_short:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]},labels:{dhx_cal_today_button:"Hoje",day_tab:"Dia",week_tab:"Semana",month_tab:"Mês",new_event:"Novo evento",icon_save:"Salvar",icon_cancel:"Cancelar",icon_details:"Detalhes",icon_edit:"Editar",icon_delete:"Deletar",confirm_closing:"",confirm_deleting:"Tem certeza que deseja excluir?",section_description:"Descrição",section_time:"Período de tempo",full_day:"Dia inteiro",confirm_recurring:"Deseja editar todos esses eventos repetidos?",section_recurring:"Repetir evento",button_recurring:"Desabilitar",button_recurring_open:"Habilitar",button_edit_series:"Editar a série",button_edit_occurrence:"Editar uma cópia",agenda_tab:"Dia",date:"Data",description:"Descrição",year_tab:"Ano",week_agenda_tab:"Dia",grid_tab:"Grade",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Diário",repeat_radio_week:"Semanal",repeat_radio_month:"Mensal",repeat_radio_year:"Anual",repeat_radio_day_type:"Cada",repeat_text_day_count:"dia(s)",repeat_radio_day_type2:"Cada trabalho diário",repeat_week:" Repita cada",repeat_text_week_count:"semana:",repeat_radio_month_type:"Repetir",repeat_radio_month_start:"Em",repeat_text_month_day:"todo dia",repeat_text_month_count:"mês",repeat_text_month_count2_before:"todo",repeat_text_month_count2_after:"mês",repeat_year_label:"Em",select_year_day2:"of",repeat_text_year_day:"dia",select_year_month:"mês",repeat_radio_end:"Sem data final",repeat_text_occurences_count:"ocorrências",repeat_radio_end3:"Fim",repeat_radio_end2:"Depois",month_for_recurring:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],day_for_recurring:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]}},se={date:{month_full:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","November","December"],month_short:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Nov","Dec"],day_full:["Duminica","Luni","Marti","Miercuri","Joi","Vineri","Sambata"],day_short:["Du","Lu","Ma","Mi","Jo","Vi","Sa"]},labels:{dhx_cal_today_button:"Astazi",day_tab:"Zi",week_tab:"Saptamana",month_tab:"Luna",new_event:"Eveniment nou",icon_save:"Salveaza",icon_cancel:"Anuleaza",icon_details:"Detalii",icon_edit:"Editeaza",icon_delete:"Sterge",confirm_closing:"Schimbarile nu vor fi salvate, esti sigur?",confirm_deleting:"Evenimentul va fi sters permanent, esti sigur?",section_description:"Descriere",section_time:"Interval",full_day:"Toata ziua",confirm_recurring:"Vrei sa editezi toata seria de evenimente repetate?",section_recurring:"Repetare",button_recurring:"Dezactivata",button_recurring_open:"Activata",button_edit_series:"Editeaza serie",button_edit_occurrence:"Editeaza doar intrare",agenda_tab:"Agenda",date:"Data",description:"Descriere",year_tab:"An",week_agenda_tab:"Agenda",grid_tab:"Lista",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Zilnic",repeat_radio_week:"Saptamanal",repeat_radio_month:"Lunar",repeat_radio_year:"Anual",repeat_radio_day_type:"La fiecare",repeat_text_day_count:"zi(le)",repeat_radio_day_type2:"Fiecare zi lucratoare",repeat_week:" Repeta la fiecare",repeat_text_week_count:"saptamana in urmatoarele zile:",repeat_radio_month_type:"Repeta in",repeat_radio_month_start:"In a",repeat_text_month_day:"zi la fiecare",repeat_text_month_count:"luni",repeat_text_month_count2_before:"la fiecare",repeat_text_month_count2_after:"luni",repeat_year_label:"In",select_year_day2:"a lunii",repeat_text_year_day:"zi a lunii",select_year_month:"",repeat_radio_end:"Fara data de sfarsit",repeat_text_occurences_count:"evenimente",repeat_radio_end3:"La data",repeat_radio_end2:"Dupa",month_for_recurring:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],day_for_recurring:["Duminica","Luni","Marti","Miercuri","Joi","Vineri","Sambata"]}},de={date:{month_full:["Январь","Февраль","Март","Апрель","Maй","Июнь","Июль","Август","Сентябрь","Oктябрь","Ноябрь","Декабрь"],month_short:["Янв","Фев","Maр","Aпр","Maй","Июн","Июл","Aвг","Сен","Окт","Ноя","Дек"],day_full:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],day_short:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]},labels:{dhx_cal_today_button:"Сегодня",day_tab:"День",week_tab:"Неделя",month_tab:"Месяц",new_event:"Новое событие",icon_save:"Сохранить",icon_cancel:"Отменить",icon_details:"Детали",icon_edit:"Изменить",icon_delete:"Удалить",confirm_closing:"",confirm_deleting:"Событие будет удалено безвозвратно, продолжить?",section_description:"Описание",section_time:"Период времени",full_day:"Весь день",confirm_recurring:"Вы хотите изменить всю серию повторяющихся событий?",section_recurring:"Повторение",button_recurring:"Отключено",button_recurring_open:"Включено",button_edit_series:"Редактировать серию",button_edit_occurrence:"Редактировать экземпляр",agenda_tab:"Список",date:"Дата",description:"Описание",year_tab:"Год",week_agenda_tab:"Список",grid_tab:"Таблица",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"День",repeat_radio_week:"Неделя",repeat_radio_month:"Месяц",repeat_radio_year:"Год",repeat_radio_day_type:"Каждый",repeat_text_day_count:"день",repeat_radio_day_type2:"Каждый рабочий день",repeat_week:" Повторять каждую",repeat_text_week_count:"неделю , в:",repeat_radio_month_type:"Повторять",repeat_radio_month_start:"",repeat_text_month_day:" числа каждый ",repeat_text_month_count:"месяц",repeat_text_month_count2_before:"каждый ",repeat_text_month_count2_after:"месяц",repeat_year_label:"",select_year_day2:"",repeat_text_year_day:"день",select_year_month:"",repeat_radio_end:"Без даты окончания",repeat_text_occurences_count:"повторений",repeat_radio_end3:"До ",repeat_radio_end2:"",month_for_recurring:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],day_for_recurring:["Воскресенье","Понедельник","Вторник","Среду","Четверг","Пятницу","Субботу"]}},le={date:{month_full:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],month_short:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],day_full:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"],day_short:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"]},labels:{dhx_cal_today_button:"Danes",day_tab:"Dan",week_tab:"Teden",month_tab:"Mesec",new_event:"Nov dogodek",icon_save:"Shrani",icon_cancel:"Prekliči",icon_details:"Podrobnosti",icon_edit:"Uredi",icon_delete:"Izbriši",confirm_closing:"",confirm_deleting:"Dogodek bo izbrisan. Želite nadaljevati?",section_description:"Opis",section_time:"Časovni okvir",full_day:"Ves dan",confirm_recurring:"Želite urediti celoten set ponavljajočih dogodkov?",section_recurring:"Ponovi dogodek",button_recurring:"Onemogočeno",button_recurring_open:"Omogočeno",button_edit_series:"Edit series",button_edit_occurrence:"Edit occurrence",agenda_tab:"Zadeva",date:"Datum",description:"Opis",year_tab:"Leto",week_agenda_tab:"Zadeva",grid_tab:"Miza",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute"}},ce={date:{month_full:["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],month_short:["Jan","Feb","Mar","Apr","Máj","Jún","Júl","Aug","Sept","Okt","Nov","Dec"],day_full:["Nedeľa","Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota"],day_short:["Ne","Po","Ut","St","Št","Pi","So"]},labels:{dhx_cal_today_button:"Dnes",day_tab:"Deň",week_tab:"Týždeň",month_tab:"Mesiac",new_event:"Nová udalosť",icon_save:"Uložiť",icon_cancel:"Späť",icon_details:"Detail",icon_edit:"Edituj",icon_delete:"Zmazať",confirm_closing:"Vaše zmeny nebudú uložené. Skutočne?",confirm_deleting:"Udalosť bude natrvalo vymazaná. Skutočne?",section_description:"Poznámky",section_time:"Doba platnosti",confirm_recurring:"Prajete si upraviť celú radu opakovaných udalostí?",section_recurring:"Opakovanie udalosti",button_recurring:"Vypnuté",button_recurring_open:"Zapnuté",button_edit_series:"Upraviť opakovania",button_edit_occurrence:"Upraviť inštancie",agenda_tab:"Program",date:"Dátum",description:"Poznámka",year_tab:"Rok",full_day:"Celý deň",week_agenda_tab:"Program",grid_tab:"Mriežka",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Denne",repeat_radio_week:"Týždenne",repeat_radio_month:"Mesaène",repeat_radio_year:"Roène",repeat_radio_day_type:"Každý",repeat_text_day_count:"deò",repeat_radio_day_type2:"Každý prac. deò",repeat_week:"Opakova každý",repeat_text_week_count:"týždeò v dòoch:",repeat_radio_month_type:"Opakova",repeat_radio_month_start:"On",repeat_text_month_day:"deò každý",repeat_text_month_count:"mesiac",repeat_text_month_count2_before:"každý",repeat_text_month_count2_after:"mesiac",repeat_year_label:"On",select_year_day2:"poèas",repeat_text_year_day:"deò",select_year_month:"mesiac",repeat_radio_end:"Bez dátumu ukonèenia",repeat_text_occurences_count:"udalostiach",repeat_radio_end3:"Ukonèi",repeat_radio_end2:"Po",month_for_recurring:["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],day_for_recurring:["Nede¾a","Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota"]}},he={date:{month_full:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],month_short:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],day_full:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],day_short:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]},labels:{dhx_cal_today_button:"Idag",day_tab:"Dag",week_tab:"Vecka",month_tab:"Månad",new_event:"Ny händelse",icon_save:"Spara",icon_cancel:"Ångra",icon_details:"Detaljer",icon_edit:"Ändra",icon_delete:"Ta bort",confirm_closing:"",confirm_deleting:"Är du säker på att du vill ta bort händelsen permanent?",section_description:"Beskrivning",section_time:"Tid",full_day:"Hela dagen",confirm_recurring:"Vill du redigera hela serien med repeterande händelser?",section_recurring:"Upprepa händelse",button_recurring:"Inaktiverat",button_recurring_open:"Aktiverat",button_edit_series:"Redigera serien",button_edit_occurrence:"Redigera en kopia",agenda_tab:"Dagordning",date:"Datum",description:"Beskrivning",year_tab:"År",week_agenda_tab:"Dagordning",grid_tab:"Galler",drag_to_create:"Dra för att skapa ny",drag_to_move:"Dra för att flytta",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"Dagligen",repeat_radio_week:"Veckovis",repeat_radio_month:"Månadsvis",repeat_radio_year:"Årligen",repeat_radio_day_type:"Var",repeat_text_day_count:"dag",repeat_radio_day_type2:"Varje arbetsdag",repeat_week:" Upprepa var",repeat_text_week_count:"vecka dessa dagar:",repeat_radio_month_type:"Upprepa",repeat_radio_month_start:"Den",repeat_text_month_day:"dagen var",repeat_text_month_count:"månad",repeat_text_month_count2_before:"var",repeat_text_month_count2_after:"månad",repeat_year_label:"Den",select_year_day2:"i",repeat_text_year_day:"dag i",select_year_month:"månad",repeat_radio_end:"Inget slutdatum",repeat_text_occurences_count:"upprepningar",repeat_radio_end3:"Sluta efter",repeat_radio_end2:"Efter",month_for_recurring:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],day_for_recurring:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"]}},ue={date:{month_full:["Ocak","Þubat","Mart","Nisan","Mayýs","Haziran","Temmuz","Aðustos","Eylül","Ekim","Kasým","Aralýk"],month_short:["Oca","Þub","Mar","Nis","May","Haz","Tem","Aðu","Eyl","Eki","Kas","Ara"],day_full:["Pazar","Pazartes,","Salý","Çarþamba","Perþembe","Cuma","Cumartesi"],day_short:["Paz","Pts","Sal","Çar","Per","Cum","Cts"]},labels:{dhx_cal_today_button:"Bugün",day_tab:"Gün",week_tab:"Hafta",month_tab:"Ay",new_event:"Uygun",icon_save:"Kaydet",icon_cancel:"Ýptal",icon_details:"Detaylar",icon_edit:"Düzenle",icon_delete:"Sil",confirm_closing:"",confirm_deleting:"Etkinlik silinecek, devam?",section_description:"Açýklama",section_time:"Zaman aralýðý",full_day:"Tam gün",confirm_recurring:"Tüm tekrar eden etkinlikler silinecek, devam?",section_recurring:"Etkinliði tekrarla",button_recurring:"Pasif",button_recurring_open:"Aktif",button_edit_series:"Dizi düzenleme",button_edit_occurrence:"Bir kopyasını düzenleyin",agenda_tab:"Ajanda",date:"Tarih",description:"Açýklama",year_tab:"Yýl",week_agenda_tab:"Ajanda",grid_tab:"Izgara",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute"}},fe={date:{month_full:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],month_short:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],day_full:["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"],day_short:["Нед","Пон","Вів","Сер","Чет","Птн","Суб"]},labels:{dhx_cal_today_button:"Сьогодні",day_tab:"День",week_tab:"Тиждень",month_tab:"Місяць",new_event:"Нова подія",icon_save:"Зберегти",icon_cancel:"Відміна",icon_details:"Деталі",icon_edit:"Редагувати",icon_delete:"Вилучити",confirm_closing:"",confirm_deleting:"Подія вилучиться назавжди. Ви впевнені?",section_description:"Опис",section_time:"Часовий проміжок",full_day:"Весь день",confirm_recurring:"Хочете редагувати весь перелік повторюваних подій?",section_recurring:"Повторювана подія",button_recurring:"Відключено",button_recurring_open:"Включено",button_edit_series:"Редагувати серію",button_edit_occurrence:"Редагувати примірник",agenda_tab:"Перелік",date:"Дата",description:"Опис",year_tab:"Рік",week_agenda_tab:"Перелік",grid_tab:"Таблиця",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",repeat_radio_day:"День",repeat_radio_week:"Тиждень",repeat_radio_month:"Місяць",repeat_radio_year:"Рік",repeat_radio_day_type:"Кожний",repeat_text_day_count:"день",repeat_radio_day_type2:"Кожний робочий день",repeat_week:" Повторювати кожен",repeat_text_week_count:"тиждень , по:",repeat_radio_month_type:"Повторювати",repeat_radio_month_start:"",repeat_text_month_day:" числа кожний ",repeat_text_month_count:"місяць",repeat_text_month_count2_before:"кожен ",repeat_text_month_count2_after:"місяць",repeat_year_label:"",select_year_day2:"",repeat_text_year_day:"день",select_year_month:"",repeat_radio_end:"Без дати закінчення",repeat_text_occurences_count:"повторень",repeat_radio_end3:"До ",repeat_radio_end2:"",month_for_recurring:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],day_for_recurring:["Неділям","Понеділкам","Вівторкам","Середам","Четвергам","П'ятницям","Суботам"]}}
function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var ve=function(e){var t={version:"6.0.0"}
!function(e){var t={agenda:"https://docs.dhtmlx.com/scheduler/agenda_view.html",grid:"https://docs.dhtmlx.com/scheduler/grid_view.html",map:"https://docs.dhtmlx.com/scheduler/map_view.html",unit:"https://docs.dhtmlx.com/scheduler/units_view.html",timeline:"https://docs.dhtmlx.com/scheduler/timeline_view.html",week_agenda:"https://docs.dhtmlx.com/scheduler/weekagenda_view.html",year:"https://docs.dhtmlx.com/scheduler/year_view.html",anythingElse:"https://docs.dhtmlx.com/scheduler/views.html"},a={agenda:"ext/dhtmlxscheduler_agenda_view.js",grid:"ext/dhtmlxscheduler_grid_view.js",map:"ext/dhtmlxscheduler_map_view.js",unit:"ext/dhtmlxscheduler_units.js",timeline:"ext/dhtmlxscheduler_timeline.js, ext/dhtmlxscheduler_treetimeline.js, ext/dhtmlxscheduler_daytimeline.js",week_agenda:"ext/dhtmlxscheduler_week_agenda.js",year:"ext/dhtmlxscheduler_year_view.js",limit:"ext/dhtmlxscheduler_limit.js"}
e._commonErrorMessages={unknownView:function(e){var n=a[e]?"You're probably missing "+a[e]+".":""
return"`"+e+"` view is not defined. \nPlease check parameters you pass to `scheduler.init` or `scheduler.setCurrentView` in your code and ensure you've imported appropriate extensions. \nRelated docs: "+(t[e]||t.anythingElse)+"\n"+(n?n+"\n":"")},collapsedContainer:function(e){return"Scheduler container height is set to *100%* but the rendered height is zero and the scheduler is not visible. \nMake sure that the container has some initial height or use different units. For example:\n<div id='scheduler_here' class='dhx_cal_container' style='width:100%; height:600px;'> \n"}},e.createTimelineView=function(){throw new Error("scheduler.createTimelineView is not implemented. Be sure to add the required extension: "+a.timeline+"\nRelated docs: "+t.timeline)},e.createUnitsView=function(){throw new Error("scheduler.createUnitsView is not implemented. Be sure to add the required extension: "+a.unit+"\nRelated docs: "+t.unit)},e.createGridView=function(){throw new Error("scheduler.createGridView is not implemented. Be sure to add the required extension: "+a.grid+"\nRelated docs: "+t.grid)},e.addMarkedTimespan=function(){throw new Error("scheduler.addMarkedTimespan is not implemented. Be sure to add the required extension: ext/dhtmlxscheduler_limit.js\nRelated docs: https://docs.dhtmlx.com/scheduler/limits.html")},e.renderCalendar=function(){throw new Error("scheduler.renderCalendar is not implemented. Be sure to add the required extension: ext/dhtmlxscheduler_minical.js\nhttps://docs.dhtmlx.com/scheduler/minicalendar.html")},e.exportToPNG=function(){throw new Error(["scheduler.exportToPNG is not implemented.","This feature requires an additional module, be sure to check the related doc here https://docs.dhtmlx.com/scheduler/png.html","Licensing info: https://dhtmlx.com/docs/products/dhtmlxScheduler/export.shtml"].join("\n"))},e.exportToPDF=function(){throw new Error(["scheduler.exportToPDF is not implemented.","This feature requires an additional module, be sure to check the related doc here https://docs.dhtmlx.com/scheduler/pdf.html","Licensing info: https://dhtmlx.com/docs/products/dhtmlxScheduler/export.shtml"].join("\n"))}}(t),function(e){r(e),function(e){function t(e){var t=document.createElement("div")
return(e||"").split(" ").forEach((function(e){t.classList.add(e)})),t}var a={rows_container:function(){return t("dhx_cal_navbar_rows_container")},row:function(){return t("dhx_cal_navbar_row")},view:function(a){var n=t("dhx_cal_tab")
return n.setAttribute("name",a.view+"_tab"),n.setAttribute("data-tab",a.view),e.config.fix_tab_position&&(a.$firstTab?n.classList.add("dhx_cal_tab_first"):a.$lastTab?n.classList.add("dhx_cal_tab_last"):"week"!==a.view&&n.classList.add("dhx_cal_tab_standalone")),n},date:function(){return t("dhx_cal_date")},button:function(e){return t("dhx_cal_nav_button dhx_cal_nav_button_custom dhx_cal_tab")},builtInButton:function(e){return t("dhx_cal_"+e.view+"_button dhx_cal_nav_button")},spacer:function(){return t("dhx_cal_line_spacer")},minicalendarButton:function(a){var n=t("dhx_minical_icon")
return a.click||(n.onclick=function(){e.isCalendarVisible()?e.destroyCalendar():e.renderCalendar({position:this,date:e.getState().date,navigation:!0,handler:function(t,a){e.setCurrentView(t),e.destroyCalendar()}})}),n},html_element:function(e){return t("dhx_cal_nav_content")}}
function n(e){var t=function(e){var t
if(e.view)switch(e.view){case"today":case"next":case"prev":t=a.builtInButton
break
case"date":t=a.date
break
case"spacer":t=a.spacer
break
case"button":t=a.button
break
case"minicalendar":t=a.minicalendarButton
break
default:t=a.view}else e.rows?t=a.rows_container:e.cols&&(t=a.row)
return t}(e)
if(t){var n=t(e)
if(e.css&&n.classList.add(e.css),e.width&&((i=e.width)===1*i&&(i+="px"),n.style.width=i),e.height&&((i=e.height)===1*i&&(i+="px"),n.style.height=i),e.click&&n.addEventListener("click",e.click),e.html&&(n.innerHTML=e.html),e.align){var i=""
"right"==e.align?i="flex-end":"left"==e.align&&(i="flex-start"),n.style.justifyContent=i}return n}}function i(e){return"string"==typeof e&&(e={view:e}),e.view||e.rows||e.cols||(e.view="button"),e}e._init_nav_bar=function(t){var a=this.$container.querySelector(".dhx_cal_navline")
return a||((a=document.createElement("div")).className="dhx_cal_navline dhx_cal_navline_flex",e._update_nav_bar(t,a),a)}
var r=null
e._update_nav_bar=function(t,a){if(t){var o=!1,_=t.height||e.xy.nav_height
null!==r&&r===_||(o=!0),o&&(e.xy.nav_height=_),a.innerHTML="",a.appendChild(function e(t){var a,r=document.createDocumentFragment()
a=Array.isArray(t)?t:[t]
for(var o=0;o<a.length;o++){var _,s=i(a[o])
"day"===s.view&&a[o+1]&&("week"!==(_=i(a[o+1])).view&&"month"!==_.view||(s.$firstTab=!0)),"month"===s.view&&a[o-1]&&("week"!==(_=i(a[o-1])).view&&"day"!==_.view||(s.$lastTab=!0))
var d=n(s)
r.appendChild(d),(s.cols||s.rows)&&d.appendChild(e(s.cols||s.rows))}return r}(t)),e._els=[],e.get_elements(),e.set_actions(),a.style.display=0===_?"none":"",r=_}}}(e),e._detachDomEvent=function(e,t,a){e.removeEventListener?e.removeEventListener(t,a,!1):e.detachEvent&&e.detachEvent("on"+t,a)},e._init_once=function(){(function(e){function t(e){for(var t=document.body;e&&e!=t;)e=e.parentNode
return!(t!=e)}function a(e){return{w:e.innerWidth||document.documentElement.clientWidth,h:e.innerHeight||document.documentElement.clientHeight}}function n(e,n){var r,o=a(n)
e.event(n,"resize",(function(){clearTimeout(r),r=setTimeout((function(){if(t(e.$container)){var r=a(n);(function(e,t){return e.w==t.w&&e.h==t.h})(o,r)||(o=r,i(e))}}),150)}))}function i(e){!e.$destroyed&&e.$root&&t(e.$root)&&e.callEvent("onSchedulerResize",[])&&(e.updateView(),e.callEvent("onAfterSchedulerResize",[]))}!function(e){var t=e.$container
"static"==window.getComputedStyle(t).getPropertyValue("position")&&(t.style.position="relative")
var a=document.createElement("iframe")
a.className="scheduler_container_resize_watcher",a.tabIndex=-1,e.config.wai_aria_attributes&&(a.setAttribute("role","none"),a.setAttribute("aria-hidden",!0)),window.Sfdc||window.$A||window.Aura?function(e){var t=e.$root.offsetHeight,a=e.$root.offsetWidth
!function n(){e.$destroyed||(e.$root&&(e.$root.offsetHeight==t&&e.$root.offsetWidth==a||i(e),t=e.$root.offsetHeight,a=e.$root.offsetWidth),setTimeout(n,200))}()}(e):(t.appendChild(a),a.contentWindow?n(e,a.contentWindow):(t.removeChild(a),n(e,window)))}(e)})(e),e._init_once=function(){}}
function t(e){return!!(e.querySelector(".dhx_cal_header")&&e.querySelector(".dhx_cal_data")&&e.querySelector(".dhx_cal_navline"))}e.init=function(a,n,i){if(!this.$destroyed){if(n=n||e._currentDate(),i=i||"week",this._obj&&this.unset_actions(),this._obj="string"==typeof a?document.getElementById(a):a,this.$container=this._obj,this.$root=this._obj,!this.$container.offsetHeight&&this.$container.offsetWidth&&"100%"===this.$container.style.height&&window.console.error(e._commonErrorMessages.collapsedContainer(),this.$container),this.config.wai_aria_attributes&&this.config.wai_aria_application_role&&this.$container.setAttribute("role","application"),this.config.header||t(this.$container)||(this.config.header=function(e){var t=["day","week","month"]
if(e.matrix)for(var a in e.matrix)t.push(a)
if(e._props)for(var a in e._props)t.push(a)
if(e._grid&&e._grid.names)for(var a in e._grid.names)t.push(a)
return["map","agenda","week_agenda","year"].forEach((function(a){e[a+"_view"]&&t.push(a)})),t.concat(["date"]).concat(["prev","today","next"])}(this),window.console.log(["Required DOM elements are missing from the scheduler container and **scheduler.config.header** is not specified.","Using a default header configuration: ","scheduler.config.header = "+JSON.stringify(this.config.header,null,2),"Check this article for the details: https://docs.dhtmlx.com/scheduler/initialization.html"].join("\n"))),this.config.header)this.$container.innerHTML="",this.$container.classList.add("dhx_cal_container"),this.config.header.height&&(this.xy.nav_height=this.config.header.height),this.$container.appendChild(function(t){return e._init_nav_bar(t)}(this.config.header)),this.$container.appendChild(function(e){var t=document.createElement("div")
return t.className="dhx_cal_header",t}()),this.$container.appendChild(function(e){var t=document.createElement("div")
return t.className="dhx_cal_data",t}())
else if(!t(this.$container))throw new Error(["Required DOM elements are missing from the scheduler container.","Be sure to either specify them manually in the markup: https://docs.dhtmlx.com/scheduler/initialization.html#initializingschedulerviamarkup","Or to use **scheduler.config.header** setting so they could be created automatically: https://docs.dhtmlx.com/scheduler/initialization.html#initializingschedulerviaheaderconfig"].join("\n"))
this.config.rtl&&(this.$container.className+=" dhx_cal_container_rtl"),this._skin_init&&e._skin_init(),e.date.init(),this._scroll=!0,this._quirks=this.$env.isIE&&"BackCompat"==document.compatMode,this._quirks7=this.$env.isIE&&-1==navigator.appVersion.indexOf("MSIE 8"),this._els=[],this.get_elements(),this.init_templates(),this.set_actions(),this._init_once(),this._init_touch_events(),this.set_sizes(),e.callEvent("onSchedulerReady",[]),this.setCurrentView(n,i)}},e.xy={min_event_height:40,scale_width:50,scroll_width:18,scale_height:20,month_scale_height:20,menu_width:25,margin_top:0,margin_left:0,editor_width:140,month_head_height:22,event_header_height:14},e.keys={edit_save:13,edit_cancel:27},e.bind=function(e,t){return e.bind?e.bind(t):function(){return e.apply(t,arguments)}},e.set_sizes=function(){var t=this._x=this._obj.clientWidth-this.xy.margin_left,a=this._y=this._obj.clientHeight-this.xy.margin_top,n=this._table_view?0:this.xy.scale_width+this.xy.scroll_width,i=this._table_view?-1:this.xy.scale_width,r=this.$container.querySelector(".dhx_cal_scale_placeholder")
e._is_material_skin()?(r||((r=document.createElement("div")).className="dhx_cal_scale_placeholder",this.$container.insertBefore(r,this._els.dhx_cal_header[0])),r.style.display="block",this.set_xy(r,t,this.xy.scale_height+1,0,this.xy.nav_height+(this._quirks?-1:1))):r&&r.parentNode.removeChild(r),this._lightbox&&(e.$container.offsetWidth<1200||this._setLbPosition(document.querySelector(".dhx_cal_light"))),this.set_xy(this._els.dhx_cal_navline[0],t,this.xy.nav_height,0,0),this.set_xy(this._els.dhx_cal_header[0],t-n,this.xy.scale_height,i,this.xy.nav_height+(this._quirks?-1:1))
var o=this._els.dhx_cal_navline[0].offsetHeight
o>0&&(this.xy.nav_height=o)
var _=this.xy.scale_height+this.xy.nav_height+(this._quirks?-2:0)
this.set_xy(this._els.dhx_cal_data[0],t,a-(_+2),0,_+2)},e.set_xy=function(e,t,a,n,i){var r="left"
e.style.width=Math.max(0,t)+"px",e.style.height=Math.max(0,a)+"px",arguments.length>3&&(this.config.rtl&&(r="right"),e.style[r]=n+"px",e.style.top=i+"px")},e.get_elements=function(){for(var t=this._obj.getElementsByTagName("DIV"),a=0;a<t.length;a++){var n=e._getClassName(t[a]),i=t[a].getAttribute("data-tab")||t[a].getAttribute("name")||""
n&&(n=n.split(" ")[0]),this._els[n]||(this._els[n]=[]),this._els[n].push(t[a])
var r=e.locale.labels[i+"_tab"]||e.locale.labels[i||n]
"string"!=typeof r&&i&&!t[a].innerHTML&&(r=i.split("_")[0]),r&&(this._waiAria.labelAttr(t[a],r),t[a].innerHTML=r)}},e.unset_actions=function(){for(var e in this._els)if(this._click[e])for(var t=0;t<this._els[e].length;t++)this._els[e][t].onclick=null
this._obj.onselectstart=null,this._obj.onmousemove=null,this._obj.onmousedown=null,this._obj.onmouseup=null,this._obj.ondblclick=null,this._obj.oncontextmenu=null},e.set_actions=function(){for(var t in this._els)if(this._click[t])for(var a=0;a<this._els[t].length;a++)this._els[t][a].onclick=e._click[t]
this._obj.onselectstart=function(e){return!1},this._obj.onmousemove=function(t){e._temp_touch_block||e._on_mouse_move(t)},this._obj.onmousedown=function(t){e._ignore_next_click||e._on_mouse_down(t)},this._obj.onmouseup=function(t){e._ignore_next_click||e._on_mouse_up(t)},this._obj.ondblclick=function(t){e._on_dbl_click(t)},this._obj.oncontextmenu=function(t){var a=t,n=a.target||a.srcElement
return e.callEvent("onContextMenu",[e._locate_event(n),a])}},e.select=function(t){this._select_id!=t&&(e._close_not_saved(),this.editStop(!1),this._select_id&&this.unselect(),this._select_id=t,this.updateEvent(t),this.callEvent("onEventSelected",[t]))},e.unselect=function(e){if(!e||e==this._select_id){var t=this._select_id
this._select_id=null,t&&this.getEvent(t)&&this.updateEvent(t),this.callEvent("onEventUnselected",[t])}},e.getState=function(){return{mode:this._mode,date:new Date(this._date),min_date:new Date(this._min_date),max_date:new Date(this._max_date),editor_id:this._edit_id,lightbox_id:this._lightbox_id,new_event:this._new_event,select_id:this._select_id,expanded:this.expanded,drag_id:this._drag_id,drag_mode:this._drag_mode}},e._click={dhx_cal_data:function(t){if(e._ignore_next_click)return t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,e._ignore_next_click=!1,!1
var a=t.target,n=e._locate_event(a)
if(n){if(!e.callEvent("onClick",[n,t])||e.config.readonly)return}else e.callEvent("onEmptyClick",[e.getActionData(t).date,t])
if(n&&e.config.select){e.select(n)
var i=e._getClassName(a);-1!=i.indexOf("_icon")&&e._click.buttons[i.split(" ")[1].replace("icon_","")](n)}else e._close_not_saved(),e.getState().select_id&&(new Date).valueOf()-(e._new_event||0)>500&&e.unselect()},dhx_cal_prev_button:function(){e._click.dhx_cal_next_button(0,-1)},dhx_cal_next_button:function(t,a){var n=1
e.config.rtl&&(a=-a,n=-n),e.setCurrentView(e.date.add(e.date[e._mode+"_start"](new Date(e._date)),a||n,e._mode))},dhx_cal_today_button:function(){e.callEvent("onBeforeTodayDisplayed",[])&&e.setCurrentView(e._currentDate())},dhx_cal_tab:function(){var t=this.getAttribute("data-tab"),a=this.getAttribute("name"),n=t||a.substring(0,a.search("_tab"))
e.setCurrentView(e._date,n)},buttons:{delete:function(t){var a=e.locale.labels.confirm_deleting
e._dhtmlx_confirm(a,e.locale.labels.title_confirm_deleting,(function(){e.deleteEvent(t)}))},edit:function(t){e.edit(t)},save:function(t){e.editStop(!0)},details:function(t){e.showLightbox(t)},cancel:function(t){e.editStop(!1)}}},e._dhtmlx_confirm=function(t,a,n){if(!t)return n()
var i={text:t}
a&&(i.title=a),n&&(i.callback=function(e){e&&n()}),e.confirm(i)},e.addEventNow=function(t,a,n){var i={}
e._isObject(t)&&!e._isDate(t)&&(i=t,t=null)
var r=6e4*(this.config.event_duration||this.config.time_step)
t||(t=i.start_date||Math.round(e._currentDate().valueOf()/r)*r)
var o=new Date(t)
if(!a){var _=this.config.first_hour
_>o.getHours()&&(o.setHours(_),t=o.valueOf()),a=t.valueOf()+r}var s=new Date(a)
o.valueOf()==s.valueOf()&&s.setTime(s.valueOf()+r),i.start_date=i.start_date||o,i.end_date=i.end_date||s,i.text=i.text||this.locale.labels.new_event,i.id=this._drag_id=i.id||this.uid(),this._drag_mode="new-size",this._loading=!0
var d=this.addEvent(i)
return this.callEvent("onEventCreated",[this._drag_id,n]),this._loading=!1,this._drag_event={},this._on_mouse_up(n),d},e._on_dbl_click=function(t,a){if(a=a||t.target||t.srcElement,!this.config.readonly){var n=e._getClassName(a).split(" ")[0]
switch(n){case"dhx_scale_holder":case"dhx_scale_holder_now":case"dhx_month_body":case"dhx_wa_day_data":if(!e.config.dblclick_create)break
this.addEventNow(this.getActionData(t).date,null,t)
break
case"dhx_cal_event":case"dhx_wa_ev_body":case"dhx_agenda_line":case"dhx_grid_event":case"dhx_cal_event_line":case"dhx_cal_event_clear":var i=this._locate_event(a)
if(!this.callEvent("onDblClick",[i,t]))return
this.config.details_on_dblclick||this._table_view||!this.getEvent(i)._timed||!this.config.select?this.showLightbox(i):this.edit(i)
break
case"dhx_time_block":case"dhx_cal_container":return
default:var r=this["dblclick_"+n]
if(r)r.call(this,t)
else if(a.parentNode&&a!=this)return e._on_dbl_click(t,a.parentNode)}}},e._get_column_index=function(e){var t=0
if(this._cols){for(var a=0,n=0;a+this._cols[n]<e&&n<this._cols.length;)a+=this._cols[n],n++
if(t=n+(this._cols[n]?(e-a)/this._cols[n]:0),this._ignores&&t>=this._cols.length)for(;t>=1&&this._ignores[Math.floor(t)];)t--}return t},e._week_indexes_from_pos=function(e){if(this._cols){var t=this._get_column_index(e.x)
return e.x=Math.min(this._cols.length-1,Math.max(0,Math.ceil(t)-1)),e.y=Math.max(0,Math.ceil(60*e.y/(this.config.time_step*this.config.hour_size_px))-1)+this.config.first_hour*(60/this.config.time_step),e}return e},e._mouse_coords=function(t){var a,n=document.body,i=document.documentElement
a=this.$env.isIE||!t.pageX&&!t.pageY?{x:t.clientX+(n.scrollLeft||i.scrollLeft||0)-n.clientLeft,y:t.clientY+(n.scrollTop||i.scrollTop||0)-n.clientTop}:{x:t.pageX,y:t.pageY},this.config.rtl&&this._colsS?(a.x=this.$container.querySelector(".dhx_cal_data").offsetWidth-a.x,"month"!==this._mode&&(a.x-=this.xy.scale_width)):a.x-=this.$domHelpers.getAbsoluteLeft(this._obj)+(this._table_view?0:this.xy.scale_width)
var r=this.$container.querySelector(".dhx_cal_data")
a.y-=this.$domHelpers.getAbsoluteTop(r)-this._els.dhx_cal_data[0].scrollTop,a.ev=t
var o=this["mouse_"+this._mode]
if(o)a=o.call(this,a)
else if(this._table_view){var _=this._get_column_index(a.x)
if(!this._cols||!this._colsS)return a
var s=0
for(s=1;s<this._colsS.heights.length&&!(this._colsS.heights[s]>a.y);s++);a.y=Math.ceil(24*(Math.max(0,_)+7*Math.max(0,s-1))*60/this.config.time_step),(e._drag_mode||"month"==this._mode)&&(a.y=24*(Math.max(0,Math.ceil(_)-1)+7*Math.max(0,s-1))*60/this.config.time_step),"move"==this._drag_mode&&e._ignores_detected&&e.config.preserve_length&&(a._ignores=!0,this._drag_event._event_length||(this._drag_event._event_length=this._get_real_event_length(this._drag_event.start_date,this._drag_event.end_date,{x_step:1,x_unit:"day"}))),a.x=0}else a=this._week_indexes_from_pos(a)
return a.timestamp=+new Date,a},e._close_not_saved=function(){if((new Date).valueOf()-(e._new_event||0)>500&&e._edit_id){var t=e.locale.labels.confirm_closing
e._dhtmlx_confirm(t,e.locale.labels.title_confirm_closing,(function(){e.editStop(e.config.positive_closing)})),t&&(this._drag_id=this._drag_pos=this._drag_mode=null)}},e._correct_shift=function(t,a){return t-6e4*(new Date(e._min_date).getTimezoneOffset()-new Date(t).getTimezoneOffset())*(a?-1:1)},e._is_pos_changed=function(e,t){function a(e,t,a){return!!(Math.abs(e-t)>a)}return!e||!this._drag_pos||!!(this._drag_pos.has_moved||!this._drag_pos.timestamp||t.timestamp-this._drag_pos.timestamp>100||a(e.ev.clientX,t.ev.clientX,5)||a(e.ev.clientY,t.ev.clientY,5))},e._correct_drag_start_date=function(t){var a
e.matrix&&(a=e.matrix[e._mode]),a=a||{x_step:1,x_unit:"day"},t=new Date(t)
var n=1
return(a._start_correction||a._end_correction)&&(n=60*(a.last_hour||0)-(60*t.getHours()+t.getMinutes())||1),1*t+(e._get_fictional_event_length(t,n,a)-n)},e._correct_drag_end_date=function(t,a){var n
e.matrix&&(n=e.matrix[e._mode]),n=n||{x_step:1,x_unit:"day"}
var i=1*t+e._get_fictional_event_length(t,a,n)
return new Date(1*i-(e._get_fictional_event_length(i,-1,n,-1)+1))},e._on_mouse_move=function(t){if(this._drag_mode){var a=this._mouse_coords(t)
if(this._is_pos_changed(this._drag_pos,a)){var n,i
if(this._edit_id!=this._drag_id&&this._close_not_saved(),!this._drag_mode)return
var r=null
if(this._drag_pos&&!this._drag_pos.has_moved&&((r=this._drag_pos).has_moved=!0),this._drag_pos=a,this._drag_pos.has_moved=!0,"create"==this._drag_mode){if(r&&(a=r),this._close_not_saved(),this.unselect(this._select_id),this._loading=!0,n=this._get_date_from_pos(a).valueOf(),!this._drag_start)return this.callEvent("onBeforeEventCreated",[t,this._drag_id])?(this._loading=!1,void(this._drag_start=n)):void(this._loading=!1)
i=n,this._drag_start
var o=new Date(this._drag_start),_=new Date(i)
"day"!=this._mode&&"week"!=this._mode||o.getHours()!=_.getHours()||o.getMinutes()!=_.getMinutes()||(_=new Date(this._drag_start+1e3)),this._drag_id=this.uid(),this.addEvent(o,_,this.locale.labels.new_event,this._drag_id,a.fields),this.callEvent("onEventCreated",[this._drag_id,t]),this._loading=!1,this._drag_mode="new-size"}var s,d=this.config.time_step,l=this.getEvent(this._drag_id)
if(e.matrix&&(s=e.matrix[e._mode]),s=s||{x_step:1,x_unit:"day"},"move"==this._drag_mode)n=this._min_date.valueOf()+6e4*(a.y*this.config.time_step+24*a.x*60),!a.custom&&this._table_view&&(n+=1e3*this.date.time_part(l.start_date)),!this._table_view&&this._dragEventBody&&void 0===this._drag_event._move_event_shift&&(this._drag_event._move_event_shift=n-l.start_date),this._drag_event._move_event_shift&&(n-=this._drag_event._move_event_shift),n=this._correct_shift(n),a._ignores&&this.config.preserve_length&&this._table_view?(n=e._correct_drag_start_date(n),i=e._correct_drag_end_date(n,this._drag_event._event_length)):i=l.end_date.valueOf()-(l.start_date.valueOf()-n)
else{if(n=l.start_date.valueOf(),i=l.end_date.valueOf(),this._table_view){var c=this._min_date.valueOf()+a.y*this.config.time_step*6e4+(a.custom?0:864e5)
if("month"==this._mode)if(c=this._correct_shift(c,!1),this._drag_from_start){var h=864e5
c<=e.date.date_part(new Date(i+h-1)).valueOf()&&(n=c-h)}else i=c
else this.config.preserve_length?a.resize_from_start?n=e._correct_drag_start_date(c):i=e._correct_drag_end_date(c,0):a.resize_from_start?n=c:i=c}else{var u=this.date.date_part(new Date(l.end_date.valueOf()-1)).valueOf(),f=new Date(u),p=this.config.first_hour,v=60/d*(this.config.last_hour-p)
this.config.time_step=1
var g=this._mouse_coords(t)
this.config.time_step=d
var m=a.y*d*6e4,y=Math.min(a.y+1,v)*d*6e4,b=6e4*g.y
i=Math.abs(m-b)>Math.abs(y-b)?u+y:u+m,i+=6e4*(new Date(i).getTimezoneOffset()-f.getTimezoneOffset()),this._els.dhx_cal_data[0].style.cursor="s-resize","week"!=this._mode&&"day"!=this._mode||(i=this._correct_shift(i))}if("new-size"==this._drag_mode)if(i<=this._drag_start){var x=a.shift||(this._table_view&&!a.custom?864e5:0)
n=i-(a.shift?0:x),i=this._drag_start+(x||6e4*d)}else n=this._drag_start
else i<=n&&(i=n+6e4*d)}var w=new Date(i-1),k=new Date(n)
if("move"==this._drag_mode&&e.config.limit_drag_out&&(+k<+e._min_date||+i>+e._max_date)){if(+l.start_date<+e._min_date||+l.end_date>+e._max_date)k=new Date(l.start_date),i=new Date(l.end_date)
else{var E=i-k;+k<+e._min_date?(k=new Date(e._min_date),a._ignores&&this.config.preserve_length&&this._table_view?(k=new Date(e._correct_drag_start_date(k)),s._start_correction&&(k=new Date(k.valueOf()+s._start_correction)),i=new Date(1*k+this._get_fictional_event_length(k,this._drag_event._event_length,s))):i=new Date(+k+E)):(i=new Date(e._max_date),a._ignores&&this.config.preserve_length&&this._table_view?(s._end_correction&&(i=new Date(i.valueOf()-s._end_correction)),i=new Date(1*i-this._get_fictional_event_length(i,0,s,!0)),k=new Date(1*i-this._get_fictional_event_length(i,this._drag_event._event_length,s,!0)),this._ignores_detected&&(k=e.date.add(k,s.x_step,s.x_unit),i=new Date(1*i-this._get_fictional_event_length(i,0,s,!0)),i=e.date.add(i,s.x_step,s.x_unit))):k=new Date(+i-E))}w=new Date(i-1)}if(!this._table_view&&this._dragEventBody&&!e.config.all_timed&&(!e._get_section_view()&&a.x!=this._get_event_sday({start_date:new Date(n),end_date:new Date(n)})||new Date(n).getHours()<this.config.first_hour)&&(E=i-k,"move"==this._drag_mode&&(h=this._min_date.valueOf()+24*a.x*60*6e4,(k=new Date(h)).setHours(this.config.first_hour),i=new Date(k.valueOf()+E),w=new Date(i-1))),this._table_view||e.config.all_timed||!(!e.getView()&&a.x!=this._get_event_sday({start_date:new Date(i),end_date:new Date(i)})||new Date(i).getHours()>=this.config.last_hour)||(E=i-k,h=this._min_date.valueOf()+24*a.x*60*6e4,(i=e.date.date_part(new Date(h))).setHours(this.config.last_hour),w=new Date(i-1),"move"==this._drag_mode&&(k=new Date(+i-E))),this._table_view||w.getDate()==k.getDate()&&w.getHours()<this.config.last_hour||e._allow_dnd)if(l.start_date=k,l.end_date=new Date(i),this.config.update_render){var D=e._els.dhx_cal_data[0].scrollTop
this.update_view(),e._els.dhx_cal_data[0].scrollTop=D}else this.updateEvent(this._drag_id)
this._table_view&&this.for_rendered(this._drag_id,(function(e){e.className+=" dhx_in_move dhx_cal_event_drag"})),this.callEvent("onEventDrag",[this._drag_id,this._drag_mode,t])}}else if(e.checkEvent("onMouseMove")){var S=this._locate_event(t.target||t.srcElement)
this.callEvent("onMouseMove",[S,t])}},e._on_mouse_down=function(t,a){if(2!=t.button&&!this.config.readonly&&!this._drag_mode){a=a||t.target||t.srcElement
var n=e._getClassName(a).split(" ")[0]
switch(this.config.drag_event_body&&"dhx_body"==n&&a.parentNode&&-1===a.parentNode.className.indexOf("dhx_cal_select_menu")&&(n="dhx_event_move",this._dragEventBody=!0),n){case"dhx_cal_event_line":case"dhx_cal_event_clear":this._table_view&&(this._drag_mode="move")
break
case"dhx_event_move":case"dhx_wa_ev_body":this._drag_mode="move"
break
case"dhx_event_resize":this._drag_mode="resize",e._getClassName(a).indexOf("dhx_event_resize_end")<0?e._drag_from_start=!0:e._drag_from_start=!1
break
case"dhx_scale_holder":case"dhx_scale_holder_now":case"dhx_month_body":case"dhx_matrix_cell":case"dhx_marked_timespan":this._drag_mode="create"
break
case"":if(a.parentNode)return e._on_mouse_down(t,a.parentNode)
break
default:if((!e.checkEvent("onMouseDown")||e.callEvent("onMouseDown",[n,t]))&&a.parentNode&&a!=this&&"dhx_body"!=n)return e._on_mouse_down(t,a.parentNode)
this._drag_mode=null,this._drag_id=null}if(this._drag_mode){var i=this._locate_event(a)
if(this.config["drag_"+this._drag_mode]&&this.callEvent("onBeforeDrag",[i,this._drag_mode,t])){if(this._drag_id=i,(this._edit_id!=this._drag_id||this._edit_id&&"create"==this._drag_mode)&&this._close_not_saved(),!this._drag_mode)return
this._drag_event=e._lame_clone(this.getEvent(this._drag_id)||{}),this._drag_pos=this._mouse_coords(t)}else this._drag_mode=this._drag_id=0}this._drag_start=null}},e._get_private_properties=function(e){var t={}
for(var a in e)0===a.indexOf("_")&&(t[a]=!0)
return t},e._clear_temporary_properties=function(e,t){var a=this._get_private_properties(e),n=this._get_private_properties(t)
for(var i in n)a[i]||delete t[i]},e._on_mouse_up=function(t){if(!t||2!=t.button||!this._mobile){if(this._drag_mode&&this._drag_id){this._els.dhx_cal_data[0].style.cursor="default"
var a=this._drag_id,n=this._drag_mode,i=!this._drag_pos||this._drag_pos.has_moved
delete this._drag_event._move_event_shift
var r=this.getEvent(this._drag_id)
if(i&&(this._drag_event._dhx_changed||!this._drag_event.start_date||r.start_date.valueOf()!=this._drag_event.start_date.valueOf()||r.end_date.valueOf()!=this._drag_event.end_date.valueOf())){var o="new-size"==this._drag_mode
if(this.callEvent("onBeforeEventChanged",[r,t,o,this._drag_event]))if(this._drag_id=this._drag_mode=null,o&&this.config.edit_on_create){if(this.unselect(),this._new_event=new Date,this._table_view||this.config.details_on_create||!this.config.select||!this.isOneDayEvent(this.getEvent(a)))return e.callEvent("onDragEnd",[a,n,t]),this.showLightbox(a)
this._drag_pos=!0,this._select_id=this._edit_id=a}else this._new_event||this.callEvent(o?"onEventAdded":"onEventChanged",[a,this.getEvent(a)])
else o?this.deleteEvent(r.id,!0):(this._drag_event._dhx_changed=!1,this._clear_temporary_properties(r,this._drag_event),e._lame_copy(r,this._drag_event),this.updateEvent(r.id))}this._drag_pos&&(this._drag_pos.has_moved||!0===this._drag_pos)&&(this._drag_id=this._drag_mode=null,this.render_view_data()),e.callEvent("onDragEnd",[a,n,t])}this._drag_id=null,this._drag_mode=null,this._drag_pos=null}},e._trigger_dyn_loading=function(){return!(!this._load_mode||!this._load()||(this._render_wait=!0,0))},e.update_view=function(){this._reset_ignores(),this._update_nav_bar(this.config.header,this.$container.querySelector(".dhx_cal_navline"))
var e=this[this._mode+"_view"]
if(e?e.call(this,!0):this._reset_scale(),this._trigger_dyn_loading())return!0
this.render_view_data()},e.isViewExists=function(t){return!!(e[t+"_view"]||e.date[t+"_start"]&&e.templates[t+"_date"]&&e.templates[t+"_scale_date"])},e._set_aria_buttons_attrs=function(){for(var e=["dhx_cal_next_button","dhx_cal_prev_button","dhx_cal_tab","dhx_cal_today_button"],t=0;t<e.length;t++)for(var a=this._els[e[t]],n=0;a&&n<a.length;n++){var i=a[n].getAttribute("data-tab")||a[n].getAttribute("name"),r=this.locale.labels[e[t]]
i&&(r=this.locale.labels[i+"_tab"]||this.locale.labels[i]||r),"dhx_cal_next_button"==e[t]?r=this.locale.labels.next:"dhx_cal_prev_button"==e[t]&&(r=this.locale.labels.prev),this._waiAria.headerButtonsAttributes(a[n],r||"")}},e.updateView=function(e,t){if(!this.$container)throw new Error("The scheduler is not initialized. \n **scheduler.updateView** or **scheduler.setCurrentView** can be called only after **scheduler.init**")
e=e||this._date,t=t||this._mode
var a=this._obj,n="dhx_scheduler_"+this._mode,i="dhx_scheduler_"+t
this._mode&&-1!=a.className.indexOf(n)?a.className=a.className.replace(n,i):a.className+=" "+i
var r,o=!(this._mode!=t||!this.config.preserve_scroll)&&this._els.dhx_cal_data[0].scrollTop
this._els.dhx_multi_day&&this._els.dhx_multi_day[0]&&(r=this._els.dhx_multi_day[0].scrollTop),this[this._mode+"_view"]&&t&&this._mode!=t&&this[this._mode+"_view"](!1),this._close_not_saved(),this._els.dhx_multi_day&&(this._els.dhx_multi_day[0].parentNode.removeChild(this._els.dhx_multi_day[0]),this._els.dhx_multi_day=null),this._mode=t,this._date=e,this._table_view="month"==this._mode,this._dy_shift=0,this.update_view(),this._set_aria_buttons_attrs()
var _=this._els.dhx_cal_tab
if(_)for(var s=0;s<_.length;s++){var d=_[s]
d.getAttribute("data-tab")==this._mode||d.getAttribute("name")==this._mode+"_tab"?(d.classList.add("active"),this._waiAria.headerToggleState(d,!0)):(d.classList.remove("active"),this._waiAria.headerToggleState(d,!1))}"number"==typeof o&&(this._els.dhx_cal_data[0].scrollTop=o),"number"==typeof r&&this._els.dhx_multi_day&&this._els.dhx_multi_day[0]&&(this._els.dhx_multi_day[0].scrollTop=r)},e.setCurrentView=function(e,t){this.callEvent("onBeforeViewChange",[this._mode,this._date,t||this._mode,e||this._date])&&(this.updateView(e,t),this.callEvent("onViewChange",[this._mode,this._date]))},e.render=function(t,a){e.setCurrentView(t,a)},e._render_x_header=function(e,t,a,n,i){i=i||0
var r=document.createElement("div")
r.className="dhx_scale_bar",this.templates[this._mode+"_scalex_class"]&&(r.className+=" "+this.templates[this._mode+"_scalex_class"](a))
var o=this._cols[e]-1
"month"==this._mode&&0===e&&this.config.left_border&&(r.className+=" dhx_scale_bar_border",t+=1),this.set_xy(r,o,this.xy.scale_height-2,t,i)
var _=this.templates[this._mode+"_scale_date"](a,this._mode)
r.innerHTML=_,this._waiAria.dayHeaderAttr(r,_),n.appendChild(r)},e._get_columns_num=function(t,a){var n=7
if(!e._table_view){var i=e.date["get_"+e._mode+"_end"]
i&&(a=i(t)),n=Math.round((a.valueOf()-t.valueOf())/864e5)}return n},e._get_timeunit_start=function(){return this.date[this._mode+"_start"](new Date(this._date.valueOf()))},e._get_view_end=function(){var t=this._get_timeunit_start(),a=e.date.add(t,1,this._mode)
if(!e._table_view){var n=e.date["get_"+e._mode+"_end"]
n&&(a=n(t))}return a},e._calc_scale_sizes=function(e,t,a){var n=this.config.rtl,i=e,r=this._get_columns_num(t,a)
this._process_ignores(t,r,"day",1)
for(var o=r-this._ignores_detected,_=0;_<r;_++)this._ignores[_]?(this._cols[_]=0,o++):this._cols[_]=Math.floor(i/(o-_)),i-=this._cols[_],this._colsS[_]=(this._cols[_-1]||0)+(this._colsS[_-1]||(this._table_view?0:(n?this.xy.scroll_width:this.xy.scale_width)+2))
this._colsS.col_length=r,this._colsS[r]=this._cols[r-1]+this._colsS[r-1]||0},e._set_scale_col_size=function(e,t,a){var n=this.config
this.set_xy(e,t-1,n.hour_size_px*(n.last_hour-n.first_hour),a+this.xy.scale_width+1,0)},e._render_scales=function(t,a){var n=new Date(e._min_date),i=new Date(e._max_date),r=this.date.date_part(e._currentDate()),o=parseInt(t.style.width,10),_=new Date(this._min_date),s=this._get_columns_num(n,i)
this._calc_scale_sizes(o,n,i)
var d=0
t.innerHTML=""
for(var l=0;l<s;l++){if(this._ignores[l]||this._render_x_header(l,d,_,t),!this._table_view){var c=document.createElement("div"),h="dhx_scale_holder"
_.valueOf()==r.valueOf()&&(h="dhx_scale_holder_now"),c.setAttribute("data-column-index",l),this._ignores_detected&&this._ignores[l]&&(h+=" dhx_scale_ignore"),c.className=h+" "+this.templates.week_date_class(_,r),this._waiAria.dayColumnAttr(c,_),this._set_scale_col_size(c,this._cols[l],d),a.appendChild(c),this.callEvent("onScaleAdd",[c,_])}d+=this._cols[l],_=this.date.add(_,1,"day"),_=this.date.day_start(_)}},e._getNavDateElement=function(){return this.$container.querySelector(".dhx_cal_date")},e._reset_scale=function(){if(this.templates[this._mode+"_date"]){var t=this._els.dhx_cal_header[0],a=this._els.dhx_cal_data[0],n=this.config
t.innerHTML="",a.innerHTML=""
var i,r,o=(n.readonly||!n.drag_resize?" dhx_resize_denied":"")+(n.readonly||!n.drag_move?" dhx_move_denied":"")
a.className="dhx_cal_data"+o,this._scales={},this._cols=[],this._colsS={height:0},this._dy_shift=0,this.set_sizes()
var _=this._get_timeunit_start(),s=e._get_view_end()
i=r=this._table_view?e.date.week_start(_):_,this._min_date=i
var d=this.templates[this._mode+"_date"](_,s,this._mode),l=this._getNavDateElement()
if(l&&(l.innerHTML=d,this._waiAria.navBarDateAttr(l,d)),this._max_date=s,e._render_scales(t,a),this._table_view)this._reset_month_scale(a,_,r)
else if(this._reset_hours_scale(a,_,r),n.multi_day){this._els.dhx_multi_day&&(this._els.dhx_multi_day[0].parentNode.removeChild(this._els.dhx_multi_day[0]),this._els.dhx_multi_day=null)
var c=this._els.dhx_cal_navline[0].offsetHeight+this._els.dhx_cal_header[0].offsetHeight+1,h=document.createElement("div")
h.className="dhx_multi_day",h.style.visibility="hidden"
var u=this._colsS[this._colsS.col_length],f=n.rtl?this.xy.scale_width:this.xy.scroll_width,p=Math.max(u+f-2,0)
this.set_xy(h,p,0,0,c),a.parentNode.insertBefore(h,a)
var v=h.cloneNode(!0)
v.className="dhx_multi_day_icon",v.style.visibility="hidden",this.set_xy(v,this.xy.scale_width,0,0,c),h.appendChild(v),this._els.dhx_multi_day=[h,v],this._els.dhx_multi_day[0].onclick=this._click.dhx_cal_data}}},e._reset_hours_scale=function(t,a,n){var i=document.createElement("div")
i.className="dhx_scale_holder"
for(var r=new Date(1980,1,1,this.config.first_hour,0,0),o=1*this.config.first_hour;o<this.config.last_hour;o++){var _=document.createElement("div")
_.className="dhx_scale_hour",_.style.height=this.config.hour_size_px+"px"
var s=this.xy.scale_width
this.config.left_border&&(_.className+=" dhx_scale_hour_border"),_.style.width=s+"px"
var d=e.templates.hour_scale(r)
_.innerHTML=d,this._waiAria.hourScaleAttr(_,d),i.appendChild(_),r=this.date.add(r,1,"hour")}t.appendChild(i),this.config.scroll_hour&&(t.scrollTop=this.config.hour_size_px*(this.config.scroll_hour-this.config.first_hour))},e._currentDate=function(){return e.config.now_date?new Date(e.config.now_date):new Date},e._reset_ignores=function(){this._ignores={},this._ignores_detected=0},e._process_ignores=function(t,a,n,i,r){this._reset_ignores()
var o=e["ignore_"+this._mode]
if(o)for(var _=new Date(t),s=0;s<a;s++)o(_)&&(this._ignores_detected+=1,this._ignores[s]=!0,r&&a++),_=e.date.add(_,i,n),e.date[n+"_start"]&&(_=e.date[n+"_start"](_))},e._render_month_scale=function(t,a,n,i){var r=e.date.add(a,1,"month"),o=new Date(n),_=e._currentDate()
this.date.date_part(_),this.date.date_part(n),i=i||Math.ceil(Math.round((r.valueOf()-n.valueOf())/864e5)/7)
for(var s=[],d=0;d<=7;d++){var l=(this._cols[d]||0)-1
0===d&&this.config.left_border&&(l-=1),s[d]=l+"px"}function c(t){var a=e._colsS.height
return void 0!==e._colsS.heights[t+1]&&(a=e._colsS.heights[t+1]-(e._colsS.heights[t]||0)),a}var h=0,u=document.createElement("table")
u.setAttribute("cellpadding","0"),u.setAttribute("cellspacing","0")
var f=document.createElement("tbody")
u.appendChild(f)
var p=[]
for(d=0;d<i;d++){var v=document.createElement("tr")
f.appendChild(v)
for(var g=Math.max(c(d)-e.xy.month_head_height,0),m=0;m<7;m++){var y=document.createElement("td")
v.appendChild(y)
var b=""
n<a?b="dhx_before":n>=r?b="dhx_after":n.valueOf()==_.valueOf()&&(b="dhx_now"),this._ignores_detected&&this._ignores[m]&&(b+=" dhx_scale_ignore"),y.className=b+" "+this.templates.month_date_class(n,_),y.setAttribute("data-cell-date",e.templates.format_date(n))
var x="dhx_month_body",w="dhx_month_head"
if(0===m&&this.config.left_border&&(x+=" dhx_month_body_border",w+=" dhx_month_head_border"),this._ignores_detected&&this._ignores[m])y.appendChild(document.createElement("div")),y.appendChild(document.createElement("div"))
else{this._waiAria.monthCellAttr(y,n)
var k=document.createElement("div")
k.className=w,k.innerHTML=this.templates.month_day(n),y.appendChild(k)
var E=document.createElement("div")
E.className=x,E.style.height=g+"px",E.style.width=s[m],y.appendChild(E)}p.push(n)
var D=n.getDate();(n=this.date.add(n,1,"day")).getDate()-D>1&&(n=new Date(n.getFullYear(),n.getMonth(),D+1,12,0))}e._colsS.heights[d]=h,h+=c(d)}this._min_date=o,this._max_date=n,t.innerHTML="",t.appendChild(u),this._scales={}
var S=t.getElementsByTagName("div")
for(d=0;d<p.length;d++){t=S[2*d+1]
var M=p[d]
this._scales[+M]=t}for(d=0;d<p.length;d++)M=p[d],this.callEvent("onScaleAdd",[this._scales[+M],M])
return this._max_date},e._reset_month_scale=function(t,a,n,i){var r=e.date.add(a,1,"month"),o=e._currentDate()
this.date.date_part(o),this.date.date_part(n),i=i||Math.ceil(Math.round((r.valueOf()-n.valueOf())/864e5)/7)
var _=Math.floor(t.clientHeight/i)-this.xy.month_head_height
return this._colsS.height=_+this.xy.month_head_height,this._colsS.heights=[],e._render_month_scale(t,a,n,i)},e.getView=function(t){return t||(t=e.getState().mode),e.matrix&&e.matrix[t]?e.matrix[t]:e._props&&e._props[t]?e._props[t]:null},e.getLabel=function(e,t){for(var a=this.config.lightbox.sections,n=0;n<a.length;n++)if(a[n].map_to==e)for(var i=a[n].options,r=0;r<i.length;r++)if(i[r].key==t)return i[r].label
return""},e.updateCollection=function(t,a){var n=e.serverList(t)
return!!n&&(n.splice(0,n.length),n.push.apply(n,a||[]),e.callEvent("onOptionsLoad",[]),e.resetLightbox(),e.hideCover(),!0)},e._lame_clone=function(t,a){var n,i,r
for(a=a||[],n=0;n<a.length;n+=2)if(t===a[n])return a[n+1]
if(t&&"object"==o(t)){for(r=Object.create(t),i=[Array,Date,Number,String,Boolean],n=0;n<i.length;n++)t instanceof i[n]&&(r=n?new i[n](t):new i[n])
for(n in a.push(t,r),t)Object.prototype.hasOwnProperty.apply(t,[n])&&(r[n]=e._lame_clone(t[n],a))}return r||t},e._lame_copy=function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])
return e},e._get_date_from_pos=function(e){var t=this._min_date.valueOf()+6e4*(e.y*this.config.time_step+24*(this._table_view?0:e.x)*60)
return new Date(this._correct_shift(t))},e.getActionData=function(e){var t=this._mouse_coords(e)
return{date:this._get_date_from_pos(t),section:t.section}},e._focus=function(e,t){if(e&&e.focus)if(this._mobile)window.setTimeout((function(){e.focus()}),10)
else try{t&&e.select&&e.offsetWidth&&e.select(),e.focus()}catch(e){}},e._get_real_event_length=function(t,a,n){var i,r=a-t,o=n._start_correction+n._end_correction||0,_=this["ignore_"+this._mode],s=0
n.render?(s=this._get_date_index(n,t),i=this._get_date_index(n,a)):i=Math.round(r/60/60/1e3/24)
for(var d=!0;s<i;){var l=e.date.add(a,-n.x_step,n.x_unit)
_&&_(a)&&(!d||d&&_(l))?r-=a-l:(d=!1,r-=o),a=l,i--}return r},e._get_fictional_event_length=function(t,a,n,i){var r=new Date(t),o=i?-1:1
if(n._start_correction||n._end_correction){var _
_=i?60*r.getHours()+r.getMinutes()-60*(n.first_hour||0):60*(n.last_hour||0)-(60*r.getHours()+r.getMinutes())
var s=60*(n.last_hour-n.first_hour),d=Math.ceil((a/6e4-_)/s)
d<0&&(d=0),a+=d*(1440-s)*60*1e3}var l,c=new Date(1*t+a*o),h=this["ignore_"+this._mode],u=0
for(n.render?(u=this._get_date_index(n,r),l=this._get_date_index(n,c)):l=Math.round(a/60/60/1e3/24);u*o<=l*o;){var f=e.date.add(r,n.x_step*o,n.x_unit)
h&&h(r)&&(a+=(f-r)*o,l+=o),r=f,u+=o}return a},e._get_section_view=function(){return this.getView()},e._get_section_property=function(){return this.matrix&&this.matrix[this._mode]?this.matrix[this._mode].y_property:this._props&&this._props[this._mode]?this._props[this._mode].map_to:null},e._is_initialized=function(){var e=this.getState()
return this._obj&&e.date&&e.mode},e._is_lightbox_open=function(){var e=this.getState()
return null!==e.lightbox_id&&void 0!==e.lightbox_id}}(t),function(e){var t={event:function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&e.attachEvent("on"+t,a)},eventRemove:function(e,t,a){e.removeEventListener?e.removeEventListener(t,a,!1):e.detachEvent&&e.detachEvent("on"+t,a)}},a=function(e,n){e=e||t.event,n=n||t.eventRemove
var i=[],r={attach:function(t,a,n,r){i.push({element:t,event:a,callback:n,capture:r}),e(t,a,n,r)},detach:function(e,t,a,r){n(e,t,a,r)
for(var o=0;o<i.length;o++){var _=i[o]
_.element===e&&_.event===t&&_.callback===a&&_.capture===r&&(i.splice(o,1),o--)}},detachAll:function(){for(var e=i.slice(),t=0;t<e.length;t++){var a=e[t]
r.detach(a.element,a.event,a.callback,a.capture),r.detach(a.element,a.event,a.callback,void 0),r.detach(a.element,a.event,a.callback,!1),r.detach(a.element,a.event,a.callback,!0)}i.splice(0,i.length)},extend:function(){return a(this.event,this.eventRemove)}}
return r}()
e.event=a.attach,e.eventRemove=a.detach,e._eventRemoveAll=a.detachAll,e._createDomEventScope=a.extend,e._trim=function(e){return(String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")}).apply(e)},e._isDate=function(e){return!(!e||"object"!=_(e)||!(e.getFullYear&&e.getMonth&&e.getDate))},e._isObject=function(e){return e&&"object"==_(e)}}(t),function(e){!function(){var t=new RegExp("<(?:.|\n)*?>","gm"),a=new RegExp(" +","gm")
function n(e){return(e+"").replace(t," ").replace(a," ")}var i=new RegExp("'","gm")
function r(e){return(e+"").replace(i,"&#39;")}for(var o in e._waiAria={getAttributeString:function(e){var t=[" "]
for(var a in e)if("function"!=typeof e[a]&&"object"!=s(e[a])){var i=r(n(e[a]))
t.push(a+"='"+i+"'")}return t.push(" "),t.join(" ")},setAttributes:function(e,t){for(var a in t)e.setAttribute(a,n(t[a]))
return e},labelAttr:function(e,t){return this.setAttributes(e,{"aria-label":t})},label:function(t){return e._waiAria.getAttributeString({"aria-label":t})},hourScaleAttr:function(e,t){this.labelAttr(e,t)},monthCellAttr:function(t,a){this.labelAttr(t,e.templates.day_date(a))},navBarDateAttr:function(e,t){this.labelAttr(e,t)},dayHeaderAttr:function(e,t){this.labelAttr(e,t)},dayColumnAttr:function(t,a){this.dayHeaderAttr(t,e.templates.day_date(a))},headerButtonsAttributes:function(e,t){return this.setAttributes(e,{role:"button","aria-label":t})},headerToggleState:function(e,t){return this.setAttributes(e,{"aria-pressed":t?"true":"false"})},getHeaderCellAttr:function(t){return e._waiAria.getAttributeString({"aria-label":t})},eventAttr:function(e,t){this._eventCommonAttr(e,t)},_eventCommonAttr:function(t,a){a.setAttribute("aria-label",n(e.templates.event_text(t.start_date,t.end_date,t))),e.config.readonly&&a.setAttribute("aria-readonly",!0),t.$dataprocessor_class&&a.setAttribute("aria-busy",!0),a.setAttribute("aria-selected",e.getState().select_id==t.id?"true":"false")},setEventBarAttr:function(e,t){this._eventCommonAttr(e,t)},_getAttributes:function(e,t){var a={setAttribute:function(e,t){this[e]=t}}
return e.apply(this,[t,a]),a},eventBarAttrString:function(e){return this.getAttributeString(this._getAttributes(this.setEventBarAttr,e))},agendaHeadAttrString:function(){return this.getAttributeString({role:"row"})},agendaHeadDateString:function(e){return this.getAttributeString({role:"columnheader","aria-label":e})},agendaHeadDescriptionString:function(e){return this.agendaHeadDateString(e)},agendaDataAttrString:function(){return this.getAttributeString({role:"grid"})},agendaEventAttrString:function(e){var t=this._getAttributes(this._eventCommonAttr,e)
return t.role="row",this.getAttributeString(t)},agendaDetailsBtnString:function(){return this.getAttributeString({role:"button","aria-label":e.locale.labels.icon_details})},gridAttrString:function(){return this.getAttributeString({role:"grid"})},gridRowAttrString:function(e){return this.agendaEventAttrString(e)},gridCellAttrString:function(e,t,a){return this.getAttributeString({role:"gridcell","aria-label":[void 0===t.label?t.id:t.label,": ",a]})},mapAttrString:function(){return this.gridAttrString()},mapRowAttrString:function(e){return this.gridRowAttrString(e)},mapDetailsBtnString:function(){return this.agendaDetailsBtnString()},minicalHeader:function(e,t){this.setAttributes(e,{id:t+"","aria-live":"assertice","aria-atomic":"true"})},minicalGrid:function(e,t){this.setAttributes(e,{"aria-labelledby":t+"",role:"grid"})},minicalRow:function(e){this.setAttributes(e,{role:"row"})},minicalDayCell:function(t,a){var n=a.valueOf()<e._max_date.valueOf()&&a.valueOf()>=e._min_date.valueOf()
this.setAttributes(t,{role:"gridcell","aria-label":e.templates.day_date(a),"aria-selected":n?"true":"false"})},minicalHeadCell:function(e){this.setAttributes(e,{role:"columnheader"})},weekAgendaDayCell:function(t,a){var n=t.querySelector(".dhx_wa_scale_bar"),i=t.querySelector(".dhx_wa_day_data"),r=e.uid()+""
this.setAttributes(n,{id:r}),this.setAttributes(i,{"aria-labelledby":r})},weekAgendaEvent:function(e,t){this.eventAttr(t,e)},lightboxHiddenAttr:function(e){e.setAttribute("aria-hidden","true")},lightboxVisibleAttr:function(e){e.setAttribute("aria-hidden","false")},lightboxSectionButtonAttrString:function(e){return this.getAttributeString({role:"button","aria-label":e,tabindex:"0"})},yearHeader:function(e,t){this.setAttributes(e,{id:t+""})},yearGrid:function(e,t){this.minicalGrid(e,t)},yearHeadCell:function(e){return this.minicalHeadCell(e)},yearRow:function(e){return this.minicalRow(e)},yearDayCell:function(e){this.setAttributes(e,{role:"gridcell"})},lightboxAttr:function(e){e.setAttribute("role","dialog"),e.setAttribute("aria-hidden","true"),e.firstChild.setAttribute("role","heading")},lightboxButtonAttrString:function(t){return this.getAttributeString({role:"button","aria-label":e.locale.labels[t],tabindex:"0"})},eventMenuAttrString:function(t){return this.getAttributeString({role:"button","aria-label":e.locale.labels[t]})},lightboxHeader:function(e,t){e.setAttribute("aria-label",t)},lightboxSelectAttrString:function(t){var a=""
switch(t){case"%Y":a=e.locale.labels.year
break
case"%m":a=e.locale.labels.month
break
case"%d":a=e.locale.labels.day
break
case"%H:%i":a=e.locale.labels.hour+" "+e.locale.labels.minute}return e._waiAria.getAttributeString({"aria-label":a})},messageButtonAttrString:function(e){return"tabindex='0' role='button' aria-label='"+e+"'"},messageInfoAttr:function(e){e.setAttribute("role","alert")},messageModalAttr:function(e,t){e.setAttribute("role","dialog"),t&&e.setAttribute("aria-labelledby",t)},quickInfoAttr:function(e){e.setAttribute("role","dialog")},quickInfoHeaderAttrString:function(){return" role='heading' "},quickInfoHeader:function(e,t){e.setAttribute("aria-label",t)},quickInfoButtonAttrString:function(t){return e._waiAria.getAttributeString({role:"button","aria-label":t,tabindex:"0"})},tooltipAttr:function(e){e.setAttribute("role","tooltip")},tooltipVisibleAttr:function(e){e.setAttribute("aria-hidden","false")},tooltipHiddenAttr:function(e){e.setAttribute("aria-hidden","true")}},e._waiAria)e._waiAria[o]=function(t){return function(){return e.config.wai_aria_attributes?t.apply(this,arguments):" "}}(e._waiAria[o])}()}(t),t.utils=h,t.$domHelpers=w,t.utils.dom=w,t.uid=h.uid,t.mixin=h.mixin,t.defined=h.defined,t.assert=function(e){return function(t,a){t||e.config.show_errors&&!1!==e.callEvent("onError",[a])&&(e.message?e.message({type:"error",text:a,expire:-1}):console.log(a))}}(t),t.copy=h.copy,t._getFocusableNodes=w.getFocusableNodes,t._getClassName=w.getClassName,t._locate_css=w.locateCss
var a=function(e){var t="data-dhxbox",a=null
function n(e,t){var n=e.callback
v.hide(e.box),a=e.box=null,n&&n(t)}function i(e){if(a){var t=e.which||e.keyCode,i=!1
if(g.keyboard){if(13==t||32==t){var r=e.target||e.srcElement
w.getClassName(r).indexOf("scheduler_popup_button")>-1&&r.click?r.click():(n(a,!0),i=!0)}27==t&&(n(a,!1),i=!0)}return i?(e.preventDefault&&e.preventDefault(),!(e.cancelBubble=!0)):void 0}}function r(e){r.cover||(r.cover=document.createElement("div"),r.cover.onkeydown=i,r.cover.className="dhx_modal_cover",document.body.appendChild(r.cover)),r.cover.style.display=e?"inline-block":"none"}function o(t,a,n){var i=e._waiAria.messageButtonAttrString(t),r=(a||"").toLowerCase().replace(/ /g,"_"),o="scheduler_".concat(r,"_button dhtmlx_").concat(r,"_button")
return"<div ".concat(i," class='scheduler_popup_button dhtmlx_popup_button ").concat(o,"' data-result='").concat(n,"' result='").concat(n,"' ><div>").concat(t,"</div></div>")}function _(t){g.area||(g.area=document.createElement("div"),g.area.className="scheduler_message_area dhtmlx_message_area",g.area.style[g.position]="5px",document.body.appendChild(g.area)),g.hide(t.id)
var a=document.createElement("div")
return a.innerHTML="<div>"+t.text+"</div>",a.className="scheduler-info dhtmlx-info scheduler-"+t.type+" dhtmlx-"+t.type,a.onclick=function(){g.hide(t.id),t=null},e._waiAria.messageInfoAttr(a),"bottom"==g.position&&g.area.firstChild?g.area.insertBefore(a,g.area.firstChild):g.area.appendChild(a),t.expire>0&&(g.timers[t.id]=window.setTimeout((function(){g&&g.hide(t.id)}),t.expire)),g.pull[t.id]=a,a=null,t.id}function s(){for(var e=[].slice.apply(arguments,[0]),t=0;t<e.length;t++)if(e[t])return e[t]}function d(_,d,l){var c=_.tagName?_:function(i,r,_){var d=document.createElement("div"),l=h.uid()
e._waiAria.messageModalAttr(d,l),d.className=" scheduler_modal_box dhtmlx_modal_box scheduler-"+i.type+" dhtmlx-"+i.type,d.setAttribute(t,1)
var c=""
if(i.width&&(d.style.width=i.width),i.height&&(d.style.height=i.height),i.title&&(c+='<div class="scheduler_popup_title dhtmlx_popup_title">'+i.title+"</div>"),c+='<div class="scheduler_popup_text dhtmlx_popup_text" id="'+l+'"><span>'+(i.content?"":i.text)+'</span></div><div  class="scheduler_popup_controls dhtmlx_popup_controls">',r&&(c+=o(s(i.ok,e.locale.labels.message_ok,"OK"),"ok",!0)),_&&(c+=o(s(i.cancel,e.locale.labels.message_cancel,"Cancel"),"cancel",!1)),i.buttons)for(var u=0;u<i.buttons.length;u++){var f=i.buttons[u]
"object"==R(f)?c+=o(f.label,f.css||"scheduler_"+f.label.toLowerCase()+"_button dhtmlx_"+f.label.toLowerCase()+"_button",f.value||u):c+=o(f,f,u)}if(c+="</div>",d.innerHTML=c,i.content){var p=i.content
"string"==typeof p&&(p=document.getElementById(p)),"none"==p.style.display&&(p.style.display=""),d.childNodes[i.title?1:0].appendChild(p)}return d.onclick=function(e){var t=e.target||e.srcElement
if(t.className||(t=t.parentNode),w.closest(t,".scheduler_popup_button")){var a=t.getAttribute("data-result")
n(i,a="true"==a||"false"!=a&&a)}},i.box=d,(r||_)&&(a=i),d}(_,d,l)
_.hidden||r(!0),document.body.appendChild(c)
var u=Math.abs(Math.floor(((window.innerWidth||document.documentElement.offsetWidth)-c.offsetWidth)/2)),f=Math.abs(Math.floor(((window.innerHeight||document.documentElement.offsetHeight)-c.offsetHeight)/2))
return"top"==_.position?c.style.top="-3px":c.style.top=f+"px",c.style.left=u+"px",c.onkeydown=i,v.focus(c),_.hidden&&v.hide(c),e.callEvent("onMessagePopup",[c]),c}function l(e){return d(e,!0,!1)}function c(e){return d(e,!0,!0)}function u(e){return d(e)}function f(e,t,a){return"object"!=R(e)&&("function"==typeof t&&(a=t,t=""),e={text:e,type:t,callback:a}),e}function p(e,t,a,n){return"object"!=R(e)&&(e={text:e,type:t,expire:a,id:n}),e.id=e.id||h.uid(),e.expire=e.expire||g.expire,e}e.event(document,"keydown",i,!0)
var v=function(){var e=f.apply(this,arguments)
return e.type=e.type||"alert",u(e)}
v.hide=function(a){for(;a&&a.getAttribute&&!a.getAttribute(t);)a=a.parentNode
a&&(a.parentNode.removeChild(a),r(!1),e.callEvent("onAfterMessagePopup",[a]))},v.focus=function(e){setTimeout((function(){var t=w.getFocusableNodes(e)
t.length&&t[0].focus&&t[0].focus()}),1)}
var g=function(e,t,a,n){switch((e=p.apply(this,arguments)).type=e.type||"info",e.type.split("-")[0]){case"alert":return l(e)
case"confirm":return c(e)
case"modalbox":return u(e)
default:return _(e)}}
g.seed=(new Date).valueOf(),g.uid=h.uid,g.expire=4e3,g.keyboard=!0,g.position="top",g.pull={},g.timers={},g.hideAll=function(){for(var e in g.pull)g.hide(e)},g.hide=function(e){var t=g.pull[e]
t&&t.parentNode&&(window.setTimeout((function(){t.parentNode.removeChild(t),t=null}),2e3),t.className+=" hidden",g.timers[e]&&window.clearTimeout(g.timers[e]),delete g.pull[e])}
var m=[]
return e.attachEvent("onMessagePopup",(function(e){m.push(e)})),e.attachEvent("onAfterMessagePopup",(function(e){for(var t=0;t<m.length;t++)m[t]===e&&(m.splice(t,1),t--)})),e.attachEvent("onDestroy",(function(){r.cover&&r.cover.parentNode&&r.cover.parentNode.removeChild(r.cover)
for(var e=0;e<m.length;e++)m[e].parentNode&&m[e].parentNode.removeChild(m[e])
m=null,g.area&&g.area.parentNode&&g.area.parentNode.removeChild(g.area),g=null})),{alert:function(){var e=f.apply(this,arguments)
return e.type=e.type||"confirm",l(e)},confirm:function(){var e=f.apply(this,arguments)
return e.type=e.type||"alert",c(e)},message:g,modalbox:v}}(t)
t.utils.mixin(t,a),t.env=t.$env=D,t.Promise=S,function(e){e.destructor=function(){for(var t in e.callEvent("onDestroy",[]),this.clearAll(),this.$container&&(this.$container.innerHTML=""),this._eventRemoveAll&&this._eventRemoveAll(),this.resetLightbox&&this.resetLightbox(),this._dp&&this._dp.destructor&&this._dp.destructor(),this.detachAllEvents(),this)0===t.indexOf("$")&&delete this[t]
e.$destroyed=!0}}(t),function(e){function t(e,t){var a={method:e}
if(0===t.length)throw new Error("Arguments list of query is wrong.")
if(1===t.length)return"string"==typeof t[0]?(a.url=t[0],a.async=!0):(a.url=t[0].url,a.async=t[0].async||!0,a.callback=t[0].callback,a.headers=t[0].headers),t[0].data?"string"!=typeof t[0].data?a.data=C()(t[0].data):a.data=t[0].data:a.data="",a
switch(a.url=t[0],e){case"GET":case"DELETE":a.callback=t[1],a.headers=t[2]
break
case"POST":case"PUT":t[1]?"string"!=typeof t[1]?a.data=C()(t[1]):a.data=t[1]:a.data="",a.callback=t[2],a.headers=t[3]}return a}e.Promise=S,e.ajax={cache:!0,method:"get",serializeRequestParams:C.a,parse:function(t){return"string"!=typeof t?t:(t=t.replace(/^[\s]+/,""),"undefined"==typeof DOMParser||e.$env.isIE?void 0!==window.ActiveXObject&&((a=new window.ActiveXObject("Microsoft.XMLDOM")).async="false",a.loadXML(t)):a=(new DOMParser).parseFromString(t,"text/xml"),a)
var a},xmltop:function(t,a,n){if(void 0===a.status||a.status<400){var i=a.responseXML?a.responseXML||a:this.parse(a.responseText||a)
if(i&&null!==i.documentElement&&!i.getElementsByTagName("parsererror").length)return i.getElementsByTagName(t)[0]}return-1!==n&&e.callEvent("onLoadXMLError",["Incorrect XML",arguments[1],n]),document.createElement("DIV")},xpath:function(t,a){if(a.nodeName||(a=a.responseXML||a),e.$env.isIE)return a.selectNodes(t)||[]
for(var n,i=[],r=(a.ownerDocument||a).evaluate(t,a,null,XPathResult.ANY_TYPE,null);n=r.iterateNext();)i.push(n)
return i},query:function(e){return this._call(e.method||"GET",e.url,e.data||"",e.async||!0,e.callback,e.headers)},get:function(e,a,n){var i=t("GET",arguments)
return this.query(i)},getSync:function(e,a){var n=t("GET",arguments)
return n.async=!1,this.query(n)},put:function(e,a,n,i){var r=t("PUT",arguments)
return this.query(r)},del:function(e,a,n){var i=t("DELETE",arguments)
return this.query(i)},post:function(e,a,n,i){(1==arguments.length||2==arguments.length&&"function"==typeof a)&&(a="")
var r=t("POST",arguments)
return this.query(r)},postSync:function(e,a,n){a=null===a?"":String(a)
var i=t("POST",arguments)
return i.async=!1,this.query(i)},_call:function(t,a,n,i,r,o){return new e.Promise(function(_,s){var d=void 0===("undefined"==typeof XMLHttpRequest?"undefined":N(XMLHttpRequest))||e.$env.isIE?new window.ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest,l=null!==navigator.userAgent.match(/AppleWebKit/)&&null!==navigator.userAgent.match(/Qt/)&&null!==navigator.userAgent.match(/Safari/)
if(i&&(d.onreadystatechange=function(){if(4==d.readyState||l&&3==d.readyState){if((200!=d.status||""===d.responseText)&&!e.callEvent("onAjaxError",[d]))return
setTimeout((function(){"function"==typeof r&&r.apply(window,[{xmlDoc:d,filePath:a}]),_(d),"function"==typeof r&&(r=null,d=null)}),0)}}),"GET"!=t||this.cache||(a+=(a.indexOf("?")>=0?"&":"?")+"dhxr"+(new Date).getTime()+"=1"),d.open(t,a,i),o)for(var c in o)d.setRequestHeader(c,o[c])
else"POST"==t.toUpperCase()||"PUT"==t||"DELETE"==t?d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"):"GET"==t&&(n=null)
if(d.setRequestHeader("X-Requested-With","XMLHttpRequest"),d.send(n),!i)return{xmlDoc:d,filePath:a}}.bind(this))},urlSeparator:function(e){return-1!=e.indexOf("?")?"&":"?"}},e.$ajax=e.ajax}(t),T(t),function(e){e.config={default_date:"%j %M %Y",month_date:"%F %Y",load_date:"%Y-%m-%d",week_date:"%l",day_date:"%D, %F %j",hour_date:"%H:%i",month_day:"%d",date_format:"%Y-%m-%d %H:%i",api_date:"%d-%m-%Y %H:%i",parse_exact_format:!1,preserve_length:!0,time_step:5,start_on_monday:!0,first_hour:0,last_hour:24,readonly:!1,drag_resize:!0,drag_move:!0,drag_create:!0,drag_event_body:!0,dblclick_create:!0,edit_on_create:!0,details_on_create:!1,header:null,resize_month_events:!1,resize_month_timed:!1,responsive_lightbox:!1,rtl:!1,cascade_event_display:!1,cascade_event_count:4,cascade_event_margin:30,multi_day:!0,multi_day_height_limit:0,drag_lightbox:!0,preserve_scroll:!0,select:!0,server_utc:!1,touch:!0,touch_tip:!0,touch_drag:500,touch_swipe_dates:!1,quick_info_detached:!0,positive_closing:!1,drag_highlight:!0,limit_drag_out:!1,icons_edit:["icon_save","icon_cancel"],icons_select:["icon_details","icon_edit","icon_delete"],buttons_left:["dhx_save_btn","dhx_cancel_btn"],buttons_right:["dhx_delete_btn"],lightbox:{sections:[{name:"description",map_to:"text",type:"textarea",focus:!0},{name:"time",height:72,type:"time",map_to:"auto"}]},highlight_displayed_event:!0,left_border:!1,ajax_error:"alert",delay_render:0,timeline_swap_resize:!0,wai_aria_attributes:!0,wai_aria_application_role:!0,csp:"auto",event_attribute:"data-event-id",show_errors:!0},e.config.buttons_left.$inital=e.config.buttons_left.join(),e.config.buttons_right.$inital=e.config.buttons_right.join(),e._helpers={parseDate:function(t){return(e.templates.xml_date||e.templates.parse_date)(t)},formatDate:function(t){return(e.templates.xml_format||e.templates.format_date)(t)}},e.templates={},e.init_templates=function(){var t=e.locale.labels
t.dhx_save_btn=t.icon_save,t.dhx_cancel_btn=t.icon_cancel,t.dhx_delete_btn=t.icon_delete
var a=e.date.date_to_str,n=e.config
!function(e,t){for(var a in t)e[a]||(e[a]=t[a])}(e.templates,{day_date:a(n.default_date),month_date:a(n.month_date),week_date:function(t,a){return n.rtl?e.templates.day_date(e.date.add(a,-1,"day"))+" &ndash; "+e.templates.day_date(t):e.templates.day_date(t)+" &ndash; "+e.templates.day_date(e.date.add(a,-1,"day"))},day_scale_date:a(n.default_date),month_scale_date:a(n.week_date),week_scale_date:a(n.day_date),hour_scale:a(n.hour_date),time_picker:a(n.hour_date),event_date:a(n.hour_date),month_day:a(n.month_day),load_format:a(n.load_date),format_date:a(n.date_format,n.server_utc),parse_date:e.date.str_to_date(n.date_format,n.server_utc),api_date:e.date.str_to_date(n.api_date,!1,!1),event_header:function(t,a,n){return e.templates.event_date(t)+" - "+e.templates.event_date(a)},event_text:function(e,t,a){return a.text},event_class:function(e,t,a){return""},month_date_class:function(e){return""},week_date_class:function(e){return""},event_bar_date:function(t,a,n){return e.templates.event_date(t)+" "},event_bar_text:function(e,t,a){return a.text},month_events_link:function(e,t){return"<a>View more("+t+" events)</a>"},drag_marker_class:function(e,t,a){return""},drag_marker_content:function(e,t,a){return""},tooltip_date_format:e.date.date_to_str("%Y-%m-%d %H:%i"),tooltip_text:function(t,a,n){return"<b>Event:</b> "+n.text+"<br/><b>Start date:</b> "+e.templates.tooltip_date_format(t)+"<br/><b>End date:</b> "+e.templates.tooltip_date_format(a)}}),this.callEvent("onTemplatesReady",[])}}(t),function(e){e._events={},e.clearAll=function(){this._events={},this._loaded={},this._edit_id=null,this._select_id=null,this._drag_id=null,this._drag_mode=null,this._drag_pos=null,this._new_event=null,this.clear_view(),this.callEvent("onClearAll",[])},e.addEvent=function(t,a,n,i,r){if(!arguments.length)return this.addEventNow()
var o=t
1!=arguments.length&&((o=r||{}).start_date=t,o.end_date=a,o.text=n,o.id=i),o.id=o.id||e.uid(),o.text=o.text||"","string"==typeof o.start_date&&(o.start_date=this.templates.api_date(o.start_date)),"string"==typeof o.end_date&&(o.end_date=this.templates.api_date(o.end_date))
var _=6e4*(this.config.event_duration||this.config.time_step)
o.start_date.valueOf()==o.end_date.valueOf()&&o.end_date.setTime(o.end_date.valueOf()+_),o.start_date.setMilliseconds(0),o.end_date.setMilliseconds(0),o._timed=this.isOneDayEvent(o)
var s=!this._events[o.id]
return this._events[o.id]=o,this.event_updated(o),this._loading||this.callEvent(s?"onEventAdded":"onEventChanged",[o.id,o]),o.id},e.deleteEvent=function(t,a){var n=this._events[t];(a||this.callEvent("onBeforeEventDelete",[t,n])&&this.callEvent("onConfirmedBeforeEventDelete",[t,n]))&&(n&&(e.getState().select_id==t&&e.unselect(),delete this._events[t],this.event_updated(n),this._drag_id==n.id&&(this._drag_id=null,this._drag_mode=null,this._drag_pos=null)),this.callEvent("onEventDeleted",[t,n]))},e.getEvent=function(e){return this._events[e]},e.setEvent=function(e,t){t.id||(t.id=e),this._events[e]=t},e.for_rendered=function(e,t){for(var a=this._rendered.length-1;a>=0;a--)this._rendered[a].getAttribute(this.config.event_attribute)==e&&t(this._rendered[a],a)},e.changeEventId=function(t,a){if(t!=a){var n=this._events[t]
n&&(n.id=a,this._events[a]=n,delete this._events[t]),this.for_rendered(t,(function(t){t.setAttribute("event_id",a),t.setAttribute(e.config.event_attribute,a)})),this._select_id==t&&(this._select_id=a),this._edit_id==t&&(this._edit_id=a),this.callEvent("onEventIdChange",[t,a])}},function(){for(var t=["text","Text","start_date","StartDate","end_date","EndDate"],a=function(t){return function(a){return e.getEvent(a)[t]}},n=function(t){return function(a,n){var i=e.getEvent(a)
i[t]=n,i._changed=!0,i._timed=this.isOneDayEvent(i),e.event_updated(i,!0)}},i=0;i<t.length;i+=2)e["getEvent"+t[i+1]]=a(t[i]),e["setEvent"+t[i+1]]=n(t[i])}(),e.event_updated=function(e,t){this.is_visible_events(e)?this.render_view_data():this.clear_event(e.id)},e.is_visible_events=function(e){if(!this._min_date||!this._max_date)return!1
if(e.start_date.valueOf()<this._max_date.valueOf()&&this._min_date.valueOf()<e.end_date.valueOf()){var t=e.start_date.getHours(),a=e.end_date.getHours()+e.end_date.getMinutes()/60,n=this.config.last_hour,i=this.config.first_hour
return!(!this._table_view&&(a>n||a<=i)&&(t>=n||t<i)&&!((e.end_date.valueOf()-e.start_date.valueOf())/36e5>24-(this.config.last_hour-this.config.first_hour)||t<n&&a>i))}return!1},e.isOneDayEvent=function(e){var t=new Date(e.end_date.valueOf()-1)
return e.start_date.getFullYear()===t.getFullYear()&&e.start_date.getMonth()===t.getMonth()&&e.start_date.getDate()===t.getDate()&&e.end_date.valueOf()-e.start_date.valueOf()<864e5},e.get_visible_events=function(e){var t=[]
for(var a in this._events)this.is_visible_events(this._events[a])&&(e&&!this._events[a]._timed||this.filter_event(a,this._events[a])&&t.push(this._events[a]))
return t},e.filter_event=function(e,t){var a=this["filter_"+this._mode]
return!a||a(e,t)},e._is_main_area_event=function(e){return!!e._timed},e.render_view_data=function(t,a){var n=!1
if(!t){if(n=!0,this._not_render)return void(this._render_wait=!0)
this._render_wait=!1,this.clear_view(),t=this.get_visible_events(!(this._table_view||this.config.multi_day))}for(var i=0,r=t.length;i<r;i++)this._recalculate_timed(t[i])
if(this.config.multi_day&&!this._table_view){var o=[],_=[]
for(i=0;i<t.length;i++)this._is_main_area_event(t[i])?o.push(t[i]):_.push(t[i])
if(!this._els.dhx_multi_day){var s=e._commonErrorMessages.unknownView(this._mode)
throw new Error(s)}this._rendered_location=this._els.dhx_multi_day[0],this._table_view=!0,this.render_data(_,a),this._table_view=!1,this._rendered_location=this._els.dhx_cal_data[0],this._table_view=!1,this.render_data(o,a)}else{var d=document.createDocumentFragment(),l=this._els.dhx_cal_data[0]
this._rendered_location=d,this.render_data(t,a),l.appendChild(d),this._rendered_location=l}n&&this.callEvent("onDataRender",[])},e._view_month_day=function(t){var a=e.getActionData(t).date
e.callEvent("onViewMoreClick",[a])&&e.setCurrentView(a,"day")},e._render_month_link=function(t){for(var a=this._rendered_location,n=this._lame_clone(t),i=t._sday;i<t._eday;i++){n._sday=i,n._eday=i+1
var r=e.date,o=e._min_date
o=r.add(o,n._sweek,"week"),o=r.add(o,n._sday,"day")
var _=e.getEvents(o,r.add(o,1,"day")).length,s=this._get_event_bar_pos(n),d=s.x2-s.x,l=document.createElement("div")
l.onclick=function(t){e._view_month_day(t)},l.className="dhx_month_link",l.style.top=s.y+"px",l.style.left=s.x+"px",l.style.width=d+"px",l.innerHTML=e.templates.month_events_link(o,_),this._rendered.push(l),a.appendChild(l)}},e._recalculate_timed=function(t){var a
t&&(a="object"!=A(t)?this._events[t]:t)&&(a._timed=e.isOneDayEvent(a))},e.attachEvent("onEventChanged",e._recalculate_timed),e.attachEvent("onEventAdded",e._recalculate_timed),e.render_data=function(t,a){t=this._pre_render_events(t,a)
for(var n={},i=0;i<t.length;i++)if(this._table_view)if("month"!=e._mode)this.render_event_bar(t[i])
else{var r=e.config.max_month_events
r!==1*r||t[i]._sorder<r?this.render_event_bar(t[i]):void 0!==r&&t[i]._sorder==r&&e._render_month_link(t[i])}else{var o=t[i],_=e.locate_holder(o._sday)
if(!_)continue
n[o._sday]||(n[o._sday]={real:_,buffer:document.createDocumentFragment(),width:_.clientWidth})
var s=n[o._sday]
this.render_event(o,s.buffer,s.width)}for(var i in n)(s=n[i]).real&&s.buffer&&s.real.appendChild(s.buffer)},e._get_first_visible_cell=function(e){for(var t=0;t<e.length;t++)if(-1==(e[t].className||"").indexOf("dhx_scale_ignore"))return e[t]
return e[0]},e._pre_render_events=function(t,a){var n=this.xy.bar_height,i=this._colsS.heights,r=this._colsS.heights=[0,0,0,0,0,0,0],o=this._els.dhx_cal_data[0]
if(t=this._table_view?this._pre_render_events_table(t,a):this._pre_render_events_line(t,a),this._table_view)if(a)this._colsS.heights=i
else{var _=o.firstChild
if(_.rows){for(var s=0;s<_.rows.length;s++){r[s]++
var d=_.rows[s].cells,l=this._colsS.height-this.xy.month_head_height
if(r[s]*n>l){var c=l
1*this.config.max_month_events!==this.config.max_month_events||r[s]<=this.config.max_month_events?c=r[s]*n:(this.config.max_month_events+1)*n>l&&(c=(this.config.max_month_events+1)*n)
for(var h=0;h<d.length;h++)d[h].childNodes[1].style.height=c+"px"}r[s]=(r[s-1]||0)+e._get_first_visible_cell(d).offsetHeight}if(r.unshift(0),_.parentNode.offsetHeight<_.parentNode.scrollHeight&&!e._colsS.scroll_fix&&e.xy.scroll_width){var u=e._colsS,f=u[u.col_length],p=u.heights.slice()
f-=e.xy.scroll_width||0,this._calc_scale_sizes(f,this._min_date,this._max_date),e._colsS.heights=p,this.set_xy(this._els.dhx_cal_header[0],f,this.xy.scale_height),e._render_scales(this._els.dhx_cal_header[0]),e._render_month_scale(this._els.dhx_cal_data[0],this._get_timeunit_start(),this._min_date),u.scroll_fix=!0}}else if(t.length||"visible"!=this._els.dhx_multi_day[0].style.visibility||(r[0]=-1),t.length||-1==r[0]){var v=(r[0]+1)*n+1,g=v,m=v+"px"
this.config.multi_day_height_limit&&(m=(g=Math.min(v,this.config.multi_day_height_limit))+"px"),o.style.top=this._els.dhx_cal_navline[0].offsetHeight+this._els.dhx_cal_header[0].offsetHeight+g+"px",o.style.height=this._obj.offsetHeight-parseInt(o.style.top,10)-(this.xy.margin_top||0)+"px"
var y=this._els.dhx_multi_day[0]
y.style.height=m,y.style.visibility=-1==r[0]?"hidden":"visible"
var b=this._els.dhx_multi_day[1]
b.style.height=m,b.style.visibility=-1==r[0]?"hidden":"visible",b.className=r[0]?"dhx_multi_day_icon":"dhx_multi_day_icon_small",this._dy_shift=(r[0]+1)*n,this.config.multi_day_height_limit&&(this._dy_shift=Math.min(this.config.multi_day_height_limit,this._dy_shift)),r[0]=0,g!=v&&(o.style.top=parseInt(o.style.top)+2+"px",y.style.overflowY="auto",b.style.position="fixed",b.style.top="",b.style.left="")}}return t},e._get_event_sday=function(e){var t=this.date.day_start(new Date(e.start_date))
return Math.round((t.valueOf()-this._min_date.valueOf())/864e5)},e._get_event_mapped_end_date=function(e){var t=e.end_date
if(this.config.separate_short_events){var a=(e.end_date-e.start_date)/6e4
a<this._min_mapped_duration&&(t=this.date.add(t,this._min_mapped_duration-a,"minute"))}return t},e._pre_render_events_line=function(e,t){e.sort((function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e.id>t.id?1:-1:e.start_date>t.start_date?1:-1}))
var a=[],n=[]
this._min_mapped_duration=Math.ceil(60*this.xy.min_event_height/this.config.hour_size_px)
for(var i=0;i<e.length;i++){var r=e[i],o=r.start_date,_=r.end_date,s=o.getHours(),d=_.getHours()
if(r._sday=this._get_event_sday(r),this._ignores[r._sday])e.splice(i,1),i--
else{if(a[r._sday]||(a[r._sday]=[]),!t){r._inner=!1
for(var l=a[r._sday];l.length;){var c=l[l.length-1]
if(!(this._get_event_mapped_end_date(c).valueOf()<=r.start_date.valueOf()))break
l.splice(l.length-1,1)}for(var h=l.length,u=!1,f=0;f<l.length;f++)if(c=l[f],this._get_event_mapped_end_date(c).valueOf()<=r.start_date.valueOf()){u=!0,r._sorder=c._sorder,h=f,r._inner=!0
break}if(l.length&&(l[l.length-1]._inner=!0),!u)if(l.length)if(l.length<=l[l.length-1]._sorder){if(l[l.length-1]._sorder)for(f=0;f<l.length;f++){for(var p=!1,v=0;v<l.length;v++)if(l[v]._sorder==f){p=!0
break}if(!p){r._sorder=f
break}}else r._sorder=0
r._inner=!0}else{var g=l[0]._sorder
for(f=1;f<l.length;f++)l[f]._sorder>g&&(g=l[f]._sorder)
r._sorder=g+1,r._inner=!1}else r._sorder=0
l.splice(h,h==l.length?0:1,r),l.length>(l.max_count||0)?(l.max_count=l.length,r._count=l.length):r._count=r._count?r._count:1}(s<this.config.first_hour||d>=this.config.last_hour)&&(n.push(r),e[i]=r=this._copy_event(r),s<this.config.first_hour&&(r.start_date.setHours(this.config.first_hour),r.start_date.setMinutes(0)),d>=this.config.last_hour&&(r.end_date.setMinutes(0),r.end_date.setHours(this.config.last_hour)),r.start_date>r.end_date||s==this.config.last_hour)&&(e.splice(i,1),i--)}}if(!t){for(i=0;i<e.length;i++)e[i]._count=a[e[i]._sday].max_count
for(i=0;i<n.length;i++)n[i]._count=a[n[i]._sday].max_count}return e},e._time_order=function(e){e.sort((function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e._timed&&!t._timed?1:!e._timed&&t._timed?-1:e.id>t.id?1:-1:e.start_date>t.start_date?1:-1}))},e._is_any_multiday_cell_visible=function(t,a,n){var i=this._cols.length,r=!1,o=t,_=!0,s=new Date(a)
for(e.date.day_start(new Date(a)).valueOf()!=a.valueOf()&&(s=e.date.day_start(s),s=e.date.add(s,1,"day"));o<s;){_=!1
var d=this.locate_holder_day(o,!1,n)%i
if(!this._ignores[d]){r=!0
break}o=e.date.add(o,1,"day")}return _||r},e._pre_render_events_table=function(t,a){this._time_order(t)
for(var n,i=[],r=[[],[],[],[],[],[],[]],o=this._colsS.heights,_=this._cols.length,s={},d=0;d<t.length;d++){var l=t[d],c=l.id
s[c]||(s[c]={first_chunk:!0,last_chunk:!0})
var h=s[c],u=n||l.start_date,f=l.end_date
u<this._min_date&&(h.first_chunk=!1,u=this._min_date),f>this._max_date&&(h.last_chunk=!1,f=this._max_date)
var p=this.locate_holder_day(u,!1,l)
if(l._sday=p%_,!this._ignores[l._sday]||!l._timed){var v=this.locate_holder_day(f,!0,l)||_
if(l._eday=v%_||_,l._length=v-p,l._sweek=Math.floor((this._correct_shift(u.valueOf(),1)-this._min_date.valueOf())/(864e5*_)),e._is_any_multiday_cell_visible(u,f,l)){var g,m=r[l._sweek]
for(g=0;g<m.length&&!(m[g]._eday<=l._sday);g++);if(l._sorder&&a||(l._sorder=g),l._sday+l._length<=_)n=null,i.push(l),m[g]=l,o[l._sweek]=m.length-1,l._first_chunk=h.first_chunk,l._last_chunk=h.last_chunk
else{var y=this._copy_event(l)
y.id=l.id,y._length=_-l._sday,y._eday=_,y._sday=l._sday,y._sweek=l._sweek,y._sorder=l._sorder,y.end_date=this.date.add(u,y._length,"day"),y._first_chunk=h.first_chunk,h.first_chunk&&(h.first_chunk=!1),i.push(y),m[g]=y,n=y.end_date,o[l._sweek]=m.length-1,d--}}}}return i},e._copy_dummy=function(){var e=new Date(this.start_date),t=new Date(this.end_date)
this.start_date=e,this.end_date=t},e._copy_event=function(e){return this._copy_dummy.prototype=e,new this._copy_dummy},e._rendered=[],e.clear_view=function(){for(var e=0;e<this._rendered.length;e++){var t=this._rendered[e]
t.parentNode&&t.parentNode.removeChild(t)}this._rendered=[]},e.updateEvent=function(e){var t=this.getEvent(e)
this.clear_event(e),t&&this.is_visible_events(t)&&this.filter_event(e,t)&&(this._table_view||this.config.multi_day||t._timed)&&(this.config.update_render?this.render_view_data():"month"!=this.getState().mode||this.getState().drag_id||this.isOneDayEvent(t)?this.render_view_data([t],!0):this.render_view_data())},e.clear_event=function(t){this.for_rendered(t,(function(t,a){t.parentNode&&t.parentNode.removeChild(t),e._rendered.splice(a,1)}))},e._y_from_date=function(e){var t=60*e.getHours()+e.getMinutes()
return Math.round((60*t*1e3-60*this.config.first_hour*60*1e3)*this.config.hour_size_px/36e5)%(24*this.config.hour_size_px)},e._calc_event_y=function(t,a){a=a||0
var n=60*t.start_date.getHours()+t.start_date.getMinutes(),i=60*t.end_date.getHours()+t.end_date.getMinutes()||60*e.config.last_hour
return{top:this._y_from_date(t.start_date),height:Math.max(a,(i-n)*this.config.hour_size_px/60)}},e.render_event=function(t,a,n){var i=e.xy.menu_width,r=this.config.use_select_menu_space?0:i
if(!(t._sday<0)){var o=e.locate_holder(t._sday)
if(o){a=a||o
var _=this._calc_event_y(t,e.xy.min_event_height),s=_.top,d=_.height,l=t._count||1,c=t._sorder||0
n=n||o.clientWidth
var h=Math.floor((n-r)/l),u=c*h+1
if(t._inner||(h*=l-c),this.config.cascade_event_display){var f=this.config.cascade_event_count,p=this.config.cascade_event_margin
u=c%f*p
var v=t._inner?(l-c-1)%f*p/2:0
h=Math.floor(n-r-u-v)}var g=this._render_v_bar(t,r+u,s,h,d,t._text_style,e.templates.event_header(t.start_date,t.end_date,t),e.templates.event_text(t.start_date,t.end_date,t))
if(this._waiAria.eventAttr(t,g),this._rendered.push(g),a.appendChild(g),u=u+parseInt(this.config.rtl?o.style.right:o.style.left,10)+r,this._edit_id==t.id){g.style.zIndex=1,h=Math.max(h-4,e.xy.editor_width),(g=document.createElement("div")).setAttribute("event_id",t.id),g.setAttribute(this.config.event_attribute,t.id),this._waiAria.eventAttr(t,g),g.className="dhx_cal_event dhx_cal_editor",this.config.rtl&&u++,this.set_xy(g,h,d-20,u,s+(e.xy.event_header_height||14)),t.color&&(g.style.backgroundColor=t.color)
var m=e.templates.event_class(t.start_date,t.end_date,t)
m&&(g.className+=" "+m)
var y=document.createElement("div")
this.set_xy(y,h-6,d-26),y.style.cssText+=";margin:2px 2px 2px 2px;overflow:hidden;",g.appendChild(y),this._els.dhx_cal_data[0].appendChild(g),this._rendered.push(g),y.innerHTML="<textarea class='dhx_cal_editor'>"+t.text+"</textarea>",this._editor=y.querySelector("textarea"),this._quirks7&&(this._editor.style.height=d-12+"px"),this._editor.onkeydown=function(t){if(t.shiftKey)return!0
var a=t.keyCode
a==e.keys.edit_save&&e.editStop(!0),a==e.keys.edit_cancel&&e.editStop(!1),a!=e.keys.edit_save&&a!=e.keys.edit_cancel||t.preventDefault&&t.preventDefault()},this._editor.onselectstart=function(e){return e.cancelBubble=!0,!0},e._focus(this._editor,!0),this._els.dhx_cal_data[0].scrollLeft=0}if(0!==this.xy.menu_width&&this._select_id==t.id){this.config.cascade_event_display&&this._drag_mode&&(g.style.zIndex=1)
for(var b,x=this.config["icons_"+(this._edit_id==t.id?"edit":"select")],w="",k=t.color?"background-color: "+t.color+";":"",E=t.textColor?"color: "+t.textColor+";":"",D=0;D<x.length;D++)b=this._waiAria.eventMenuAttrString(x[D]),w+="<div class='dhx_menu_icon "+x[D]+"' style='"+k+E+"' title='"+this.locale.labels[x[D]]+"'"+b+"></div>"
var S=this._render_v_bar(t,u-i+1,s,i,20*x.length+26-2,"","<div style='"+k+E+"' class='dhx_menu_head'></div>",w,!0)
S.style.left=u-i+1,this._els.dhx_cal_data[0].appendChild(S),this._rendered.push(S)}this.config.drag_highlight&&this._drag_id==t.id&&this.highlightEventPosition(t)}}},e._render_v_bar=function(t,a,n,i,r,o,_,s,d){var l=document.createElement("div"),c=t.id,h=d?"dhx_cal_event dhx_cal_select_menu":"dhx_cal_event",u=e.getState()
u.drag_id==t.id&&(h+=" dhx_cal_event_drag"),u.select_id==t.id&&(h+=" dhx_cal_event_selected")
var f=e.templates.event_class(t.start_date,t.end_date,t)
f&&(h=h+" "+f),this.config.cascade_event_display&&(h+=" dhx_cal_event_cascade")
var p=t.color?"background-color:"+t.color+";":"",v=t.textColor?"color:"+t.textColor+";":"",g=e._border_box_events(),m=i-2,y=g?m:i-4,b=g?m:i-6,x=g?m:i-(this._quirks?4:14),w=g?m-2:i-8,k=g?r-this.xy.event_header_height-1:r-(this._quirks?20:30)+1,E='<div event_id="'+c+'" '+this.config.event_attribute+'="'+c+'" class="'+h+'" style="position:absolute; top:'+n+"px; "+(this.config.rtl?"right:":"left:")+a+"px; width:"+y+"px; height:"+r+"px;"+(o||"")+'"></div>'
l.innerHTML=E
var D=l.cloneNode(!0).firstChild
if(!d&&e.renderEvent(D,t,i,r,_,s))return D
D=l.firstChild
var S='<div class="dhx_event_move dhx_header" style=" width:'+b+"px;"+p+'" >&nbsp;</div>'
S+='<div class="dhx_event_move dhx_title" style="'+p+v+'">'+_+"</div>",S+='<div class="dhx_body" style=" width:'+x+"px; height:"+k+"px;"+p+v+'">'+s+"</div>"
var M="dhx_event_resize dhx_footer"
return(d||!1===t._drag_resize)&&(M="dhx_resize_denied "+M),S+='<div class="'+M+'" style=" width:'+w+"px;"+(d?" margin-top:-1px;":"")+p+v+'" ></div>',D.innerHTML=S,D},e.renderEvent=function(){return!1},e.locate_holder=function(e){return"day"==this._mode?this._els.dhx_cal_data[0].firstChild:this._els.dhx_cal_data[0].childNodes[e]},e.locate_holder_day=function(e,t){var a=Math.floor((this._correct_shift(e,1)-this._min_date)/864e5)
return t&&this.date.time_part(e)&&a++,a},e._get_dnd_order=function(e,t,a){if(!this._drag_event)return e
this._drag_event._orig_sorder?e=this._drag_event._orig_sorder:this._drag_event._orig_sorder=e
for(var n=t*e;n+t>a;)e--,n-=t
return Math.max(e,0)},e._get_event_bar_pos=function(t){var a=this.config.rtl,n=this._colsS,i=n[t._sday],r=n[t._eday]
a&&(i=n[n.col_length]-n[t._eday]+n[0],r=n[n.col_length]-n[t._sday]+n[0]),r==i&&(r=n[t._eday+1])
var o=this.xy.bar_height,_=t._sorder
if(t.id==this._drag_id){var s=n.heights[t._sweek+1]-n.heights[t._sweek]-this.xy.month_head_height
_=e._get_dnd_order(_,o,s)}var d=_*o
return{x:i,x2:r,y:n.heights[t._sweek]+(n.height?this.xy.month_scale_height+2:2)+d}},e.render_event_bar=function(t){var a=this._rendered_location,n=this._get_event_bar_pos(t),i=n.y,r=n.x,o=n.x2,_=""
if(o){var s=e.config.resize_month_events&&"month"==this._mode&&(!t._timed||e.config.resize_month_timed),d=document.createElement("div"),l=t.hasOwnProperty("_first_chunk")&&t._first_chunk,c=t.hasOwnProperty("_last_chunk")&&t._last_chunk,h=s&&(t._timed||l),u=s&&(t._timed||c),f=!0,p="dhx_cal_event_clear"
t._timed&&!s||(f=!1,p="dhx_cal_event_line"),l&&(p+=" dhx_cal_event_line_start"),c&&(p+=" dhx_cal_event_line_end"),h&&(_+="<div class='dhx_event_resize dhx_event_resize_start'></div>"),u&&(_+="<div class='dhx_event_resize dhx_event_resize_end'></div>")
var v=e.templates.event_class(t.start_date,t.end_date,t)
v&&(p+=" "+v)
var g=t.color?"background:"+t.color+";":"",m=["position:absolute","top:"+i+"px","left:"+r+"px","width:"+(o-r-3-(f?1:0))+"px",t.textColor?"color:"+t.textColor+";":"",g,t._text_style||""].join(";"),y="<div event_id='"+t.id+"' "+this.config.event_attribute+"='"+t.id+"' class='"+p+"' style='"+m+"'"+this._waiAria.eventBarAttrString(t)+">"
s&&(y+=_),"month"==e.getState().mode&&(t=e.getEvent(t.id)),t._timed&&(y+=e.templates.event_bar_date(t.start_date,t.end_date,t)),y+=e.templates.event_bar_text(t.start_date,t.end_date,t)+"</div>",y+="</div>",d.innerHTML=y,this._rendered.push(d.firstChild),a.appendChild(d.firstChild)}},e._locate_event=function(e){for(var t=null;e&&!t&&e.getAttribute;)t=e.getAttribute(this.config.event_attribute),e=e.parentNode
return t},e.edit=function(e){this._edit_id!=e&&(this.editStop(!1,e),this._edit_id=e,this.updateEvent(e))},e.editStop=function(e,t){if(!t||this._edit_id!=t){var a=this.getEvent(this._edit_id)
a&&(e&&(a.text=this._editor.value),this._edit_id=null,this._editor=null,this.updateEvent(a.id),this._edit_stop_event(a,e))}},e._edit_stop_event=function(e,t){this._new_event?(t?this.callEvent("onEventAdded",[e.id,e]):e&&this.deleteEvent(e.id,!0),this._new_event=null):t&&this.callEvent("onEventChanged",[e.id,e])},e.getEvents=function(e,t){var a=[]
for(var n in this._events){var i=this._events[n]
i&&(!e&&!t||i.start_date<t&&i.end_date>e)&&a.push(i)}return a},e.getRenderedEvent=function(t){if(t){for(var a=e._rendered,n=0;n<a.length;n++){var i=a[n]
if(i.getAttribute(e.config.event_attribute)==t)return i}return null}},e.showEvent=function(t,a){t&&"object"===A(t)&&(a=t.mode,c=t.section,t=t.section)
var n="number"==typeof t||"string"==typeof t?e.getEvent(t):t
if(a=a||e._mode,n&&(!this.checkEvent("onBeforeEventDisplay")||this.callEvent("onBeforeEventDisplay",[n,a]))){var i=e.config.scroll_hour
e.config.scroll_hour=n.start_date.getHours()
var r=e.config.preserve_scroll
e.config.preserve_scroll=!1
var o=n.color,_=n.textColor
if(e.config.highlight_displayed_event&&(n.color=e.config.displayed_event_color,n.textColor=e.config.displayed_event_text_color),e.setCurrentView(new Date(n.start_date),a),e.config.scroll_hour=i,e.config.preserve_scroll=r,e.matrix&&e.matrix[a]){var s=e.getView(),d=s.y_property,l=e.getEvent(n.id)
if(l){if(!c){var c=l[d]
Array.isArray(c)?c=c[0]:"string"==typeof c&&e.config.section_delimiter&&c.indexOf(e.config.section_delimiter)>-1&&(c=c.split(e.config.section_delimiter)[0])}var h=s.getSectionTop(c),u=s.posFromDate(l.start_date),f=e.$container.querySelector(".dhx_timeline_data_wrapper")
if(u-=(f.offsetWidth-s.dx)/2,h=h-f.offsetHeight/2+s.dy/2,s._smartRenderingEnabled())var p=s.attachEvent("onScroll",(function(){v(),s.detachEvent(p)}))
s.scrollTo({left:u,top:h}),s._smartRenderingEnabled()||v()}}else v()
e.callEvent("onAfterEventDisplay",[n,a])}function v(){n.color=o,n.textColor=_}}}(t),function(e){e._append_drag_marker=function(t){if(!t.parentNode){var a=e._els.dhx_cal_data[0].lastChild,n=e._getClassName(a)
n.indexOf("dhx_scale_holder")<0&&a.previousSibling&&(a=a.previousSibling),n=e._getClassName(a),a&&0===n.indexOf("dhx_scale_holder")&&a.appendChild(t)}},e._update_marker_position=function(t,a){var n=e._calc_event_y(a,0)
t.style.top=n.top+"px",t.style.height=n.height+"px"},e.highlightEventPosition=function(e){var t=document.createElement("div")
t.setAttribute("event_id",e.id),t.setAttribute(this.config.event_attribute,e.id),this._rendered.push(t),this._update_marker_position(t,e)
var a=this.templates.drag_marker_class(e.start_date,e.end_date,e),n=this.templates.drag_marker_content(e.start_date,e.end_date,e)
t.className="dhx_drag_marker",a&&(t.className+=" "+a),n&&(t.innerHTML=n),this._append_drag_marker(t)}}(t),function(e){e._loaded={},e._load=function(t,a){if(t=t||this._load_url){var n
if(t+=(-1==t.indexOf("?")?"?":"&")+"timeshift="+(new Date).getTimezoneOffset(),this.config.prevent_cache&&(t+="&uid="+this.uid()),a=a||this._date,this._load_mode){var i=this.templates.load_format
for(a=this.date[this._load_mode+"_start"](new Date(a.valueOf()));a>this._min_date;)a=this.date.add(a,-1,this._load_mode)
n=a
for(var r=!0;n<this._max_date;)n=this.date.add(n,1,this._load_mode),this._loaded[i(a)]&&r?a=this.date.add(a,1,this._load_mode):r=!1
var o=n
do{n=o,o=this.date.add(n,-1,this._load_mode)}while(o>a&&this._loaded[i(o)])
if(n<=a)return!1
for(e.ajax.get(t+"&from="+i(a)+"&to="+i(n),_);a<n;)this._loaded[i(a)]=!0,a=this.date.add(a,1,this._load_mode)}else e.ajax.get(t,_)
return this.callEvent("onXLS",[]),this.callEvent("onLoadStart",[]),!0}function _(t){e.on_load(t),e.callEvent("onLoadEnd",[])}},e._parsers={},function(e){e._parsers.xml={canParse:function(t,a){if(a.responseXML&&a.responseXML.firstChild)return!0
try{var n=e.ajax.parse(a.responseText),i=e.ajax.xmltop("data",n)
if(i&&"data"===i.tagName)return!0}catch(e){}return!1},parse:function(t){var a
if(t.xmlDoc.responseXML||(t.xmlDoc.responseXML=e.ajax.parse(t.xmlDoc.responseText)),"data"!=(a=e.ajax.xmltop("data",t.xmlDoc)).tagName)return null
var n=a.getAttribute("dhx_security")
n&&(window.dhtmlx&&(window.dhtmlx.security_key=n),e.security_key=n)
for(var i=e.ajax.xpath("//coll_options",t.xmlDoc),r=0;r<i.length;r++){var o=i[r].getAttribute("for"),_=e.serverList[o]
_||(e.serverList[o]=_=[]),_.splice(0,_.length)
for(var s=e.ajax.xpath(".//item",i[r]),d=0;d<s.length;d++){for(var l=s[d].attributes,c={key:s[d].getAttribute("value"),label:s[d].getAttribute("label")},h=0;h<l.length;h++){var u=l[h]
"value"!=u.nodeName&&"label"!=u.nodeName&&(c[u.nodeName]=u.nodeValue)}_.push(c)}}i.length&&e.callEvent("onOptionsLoad",[])
var f=e.ajax.xpath("//userdata",t.xmlDoc)
for(r=0;r<f.length;r++){var p=e._xmlNodeToJSON(f[r])
e._userdata[p.name]=p.text}var v=[]
for(a=e.ajax.xpath("//event",t.xmlDoc),r=0;r<a.length;r++){var g=v[r]=e._xmlNodeToJSON(a[r])
e._init_event(g)}return v}}}(e),function(e){e.json=e._parsers.json={canParse:function(e){if(e&&"object"===O(e))return!0
if("string"==typeof e)try{var t=JSON.parse(e)
return"[object Object]"===Object.prototype.toString.call(t)||"[object Array]"===Object.prototype.toString.call(t)}catch(e){return!1}return!1},parse:function(t){var a=[]
"string"==typeof t&&(t=JSON.parse(t)),"[object Array]"===Object.prototype.toString.call(t)?a=t:t&&(t.events?a=t.events:t.data&&(a=t.data)),a=a||[],t.dhx_security&&(window.dhtmlx&&(window.dhtmlx.security_key=t.dhx_security),e.security_key=t.dhx_security)
var n=t&&t.collections?t.collections:{},i=!1
for(var r in n)if(n.hasOwnProperty(r)){i=!0
var o=n[r],_=e.serverList[r]
_||(e.serverList[r]=_=[]),_.splice(0,_.length)
for(var s=0;s<o.length;s++){var d=o[s],l={key:d.value,label:d.label}
for(var c in d)if(d.hasOwnProperty(c)){if("value"==c||"label"==c)continue
l[c]=d[c]}_.push(l)}}i&&e.callEvent("onOptionsLoad",[])
for(var h=[],u=0;u<a.length;u++){var f=a[u]
e._init_event(f),h.push(f)}return h}}}(e),function(e){e.ical=e._parsers.ical={canParse:function(e){return"string"==typeof e&&new RegExp("^BEGIN:VCALENDAR").test(e)},parse:function(e){var t=e.match(RegExp(this.c_start+"[^\f]*"+this.c_end,""))
if(t.length){t[0]=t[0].replace(/[\r\n]+ /g,""),t[0]=t[0].replace(/[\r\n]+(?=[a-z \t])/g," "),t[0]=t[0].replace(/;[^:\r\n]*:/g,":")
for(var a,n=[],i=RegExp("(?:"+this.e_start+")([^\f]*?)(?:"+this.e_end+")","g");null!==(a=i.exec(t));){for(var r,o={},_=/[^\r\n]+[\r\n]+/g;null!==(r=_.exec(a[1]));)this.parse_param(r.toString(),o)
o.uid&&!o.id&&(o.id=o.uid),n.push(o)}return n}},parse_param:function(e,t){var a=e.indexOf(":")
if(-1!=a){var n=e.substr(0,a).toLowerCase(),i=e.substr(a+1).replace(/\\,/g,",").replace(/[\r\n]+$/,"")
"summary"==n?n="text":"dtstart"==n?(n="start_date",i=this.parse_date(i,0,0)):"dtend"==n&&(n="end_date",i=this.parse_date(i,0,0)),t[n]=i}},parse_date:function(t,a,n){var i=t.split("T"),r=!1
i[1]&&(a=i[1].substr(0,2),n=i[1].substr(2,2),r=!("Z"!=i[1][6]))
var o=i[0].substr(0,4),_=parseInt(i[0].substr(4,2),10)-1,s=i[0].substr(6,2)
return e.config.server_utc||r?new Date(Date.UTC(o,_,s,a,n)):new Date(o,_,s,a,n)},c_start:"BEGIN:VCALENDAR",e_start:"BEGIN:VEVENT",e_end:"END:VEVENT",c_end:"END:VCALENDAR"}}(e),e.on_load=function(e){var t
this.callEvent("onBeforeParse",[])
var a=!1,n=!1
for(var i in this._parsers){var r=this._parsers[i]
if(r.canParse(e.xmlDoc.responseText,e.xmlDoc)){try{var o=e.xmlDoc.responseText
"xml"===i&&(o=e),(t=r.parse(o))||(a=!0)}catch(e){a=!0}n=!0
break}}if(!n)if(this._process&&this[this._process])try{t=this[this._process].parse(e.xmlDoc.responseText)}catch(e){a=!0}else a=!0;(a||e.xmlDoc.status&&e.xmlDoc.status>=400)&&(this.callEvent("onLoadError",[e.xmlDoc]),t=[]),this._process_loading(t),this.callEvent("onXLE",[]),this.callEvent("onParse",[])},e._process_loading=function(e){this._loading=!0,this._not_render=!0
for(var t=0;t<e.length;t++)this.callEvent("onEventLoading",[e[t]])&&this.addEvent(e[t])
this._not_render=!1,this._render_wait&&this.render_view_data(),this._loading=!1,this._after_call&&this._after_call(),this._after_call=null},e._init_event=function(t){t.text=t.text||t._tagvalue||"",t.start_date=e._init_date(t.start_date),t.end_date=e._init_date(t.end_date)},e._init_date=function(t){return t?"string"==typeof t?e._helpers.parseDate(t):new Date(t):null}
var t=H()(e)
e.serialize=function(){var a=[],n=t()
for(var i in n){var r={},o=n[i]
for(var _ in o)if("$"!=_.charAt(0)&&"_"!=_.charAt(0)){var s,d=o[_]
s=e.utils.isDate(d)?e.defined(e.templates.xml_format)?e.templates.xml_format(d):e.templates.format_date(d):d,r[_]=s}a.push(r)}return a},e.parse=function(e,t){this._process=t,this.on_load({xmlDoc:{responseText:e}})},e.load=function(e,t){"string"==typeof t&&(this._process=t,t=arguments[2]),this._load_url=e,this._after_call=t,this._load(e,this._date)},e.setLoadMode=function(e){"all"==e&&(e=""),this._load_mode=e},e.serverList=function(e,t){return t?(this.serverList[e]=t.slice(0),this.serverList[e]):(this.serverList[e]=this.serverList[e]||[],this.serverList[e])},e._userdata={},e._xmlNodeToJSON=function(e){for(var t={},a=0;a<e.attributes.length;a++)t[e.attributes[a].name]=e.attributes[a].value
for(a=0;a<e.childNodes.length;a++){var n=e.childNodes[a]
1==n.nodeType&&(t[n.tagName]=n.firstChild?n.firstChild.nodeValue:"")}return t.text||(t.text=e.firstChild?e.firstChild.nodeValue:""),t},e.attachEvent("onXLS",(function(){var e
!0===this.config.show_loading&&((e=this.config.show_loading=document.createElement("div")).className="dhx_loading",e.style.left=Math.round((this._x-128)/2)+"px",e.style.top=Math.round((this._y-15)/2)+"px",this._obj.appendChild(e))})),e.attachEvent("onXLE",(function(){var e=this.config.show_loading
e&&"object"==P(e)&&(e.parentNode&&e.parentNode.removeChild(e),this.config.show_loading=!0)}))}(t),function(e){e._lightbox_controls={},e.formSection=function(t){for(var a=this.config.lightbox.sections,n=0;n<a.length&&a[n].name!=t;n++);if(n===a.length)return null
var i=a[n]
e._lightbox||e.getLightbox()
var r=document.getElementById(i.id),o=r.nextSibling,_={section:i,header:r,node:o,getValue:function(t){return e.form_blocks[i.type].get_value(o,t||{},i)},setValue:function(t,a){return e.form_blocks[i.type].set_value(o,t,a||{},i)}},s=e._lightbox_controls["get_"+i.type+"_control"]
return s?s(_):_},e._lightbox_controls.get_template_control=function(e){return e.control=e.node,e},e._lightbox_controls.get_select_control=function(e){return e.control=e.node.getElementsByTagName("select")[0],e},e._lightbox_controls.get_textarea_control=function(e){return e.control=e.node.getElementsByTagName("textarea")[0],e},e._lightbox_controls.get_time_control=function(e){return e.control=e.node.getElementsByTagName("select"),e},e._lightbox_controls.defaults={template:{height:30},textarea:{height:200},select:{height:23},time:{height:20}},e.form_blocks={template:{render:function(t){var a=e._lightbox_controls.defaults.template,n=a?a.height:30
return"<div class='dhx_cal_ltext dhx_cal_template' style='height:"+(t.height||n||30)+"px;'></div>"},set_value:function(e,t,a,n){e.innerHTML=t||""},get_value:function(e,t,a){return e.innerHTML||""},focus:function(e){}},textarea:{render:function(t){var a=e._lightbox_controls.defaults.textarea,n=a?a.height:200
return"<div class='dhx_cal_ltext' style='height:"+(t.height||n||"130")+"px;'><textarea></textarea></div>"},set_value:function(t,a,n){e.form_blocks.textarea._get_input(t).value=a||""},get_value:function(t,a){return e.form_blocks.textarea._get_input(t).value},focus:function(t){var a=e.form_blocks.textarea._get_input(t)
e._focus(a,!0)},_get_input:function(e){return e.getElementsByTagName("textarea")[0]}},select:{render:function(t){for(var a=e._lightbox_controls.defaults.select,n=a?a.height:23,i="<div class='dhx_cal_ltext' style='height:"+(t.height||n||"23")+"px;'><select style='width:100%;'>",r=0;r<t.options.length;r++)i+="<option value='"+t.options[r].key+"'>"+t.options[r].label+"</option>"
return i+"</select></div>"},set_value:function(e,t,a,n){var i=e.firstChild
!i._dhx_onchange&&n.onchange&&(i.onchange=n.onchange,i._dhx_onchange=!0),void 0===t&&(t=(i.options[0]||{}).value),i.value=t||""},get_value:function(e,t){return e.firstChild.value},focus:function(t){var a=t.firstChild
e._focus(a,!0)}},time:{render:function(t){t.time_format||(t.time_format=["%H:%i","%d","%m","%Y"]),t._time_format_order={}
var a=t.time_format,n=e.config,i=e.date.date_part(e._currentDate()),r=1440,o=0
e.config.limit_time_select&&(r=60*n.last_hour+1,o=60*n.first_hour,i.setHours(n.first_hour))
for(var _="",s=0;s<a.length;s++){var d=a[s]
s>0&&(_+=" ")
var l="",c=""
switch(d){case"%Y":var h,u,f
l="dhx_lightbox_year_select",t._time_format_order[3]=s,t.year_range&&(isNaN(t.year_range)?t.year_range.push&&(u=t.year_range[0],f=t.year_range[1]):h=t.year_range),h=h||10
var p=p||Math.floor(h/2)
u=u||i.getFullYear()-p,f=f||u+h
for(var v=u;v<f;v++)c+="<option value='"+v+"'>"+v+"</option>"
break
case"%m":for(l="dhx_lightbox_month_select",t._time_format_order[2]=s,v=0;v<12;v++)c+="<option value='"+v+"'>"+this.locale.date.month_full[v]+"</option>"
break
case"%d":for(l="dhx_lightbox_day_select",t._time_format_order[1]=s,v=1;v<32;v++)c+="<option value='"+v+"'>"+v+"</option>"
break
case"%H:%i":l="dhx_lightbox_time_select",t._time_format_order[0]=s,v=o
var g=i.getDate()
for(t._time_values=[];v<r;)c+="<option value='"+v+"'>"+this.templates.time_picker(i)+"</option>",t._time_values.push(v),i.setTime(i.valueOf()+60*this.config.time_step*1e3),v=24*(i.getDate()!=g?1:0)*60+60*i.getHours()+i.getMinutes()}if(c){var m=e._waiAria.lightboxSelectAttrString(d)
_+="<select class='"+l+"' "+(t.readonly?"disabled='disabled'":"")+m+">"+c+"</select> "}}var y=e._lightbox_controls.defaults.select
return"<div style='height:"+((y?y.height:23)||30)+"px;padding-top:0px;font-size:inherit;' class='dhx_section_time'>"+_+"<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>"+_+"</div>"},set_value:function(t,a,n,i){var r,o,_=e.config,s=t.getElementsByTagName("select"),d=i._time_format_order
if(_.full_day){if(!t._full_day){var l="<label class='dhx_fullday'><input type='checkbox' name='full_day' value='true'> "+e.locale.labels.full_day+"&nbsp;</label></input>"
e.config.wide_form||(l=t.previousSibling.innerHTML+l),t.previousSibling.innerHTML=l,t._full_day=!0}var c=t.previousSibling.getElementsByTagName("input")[0]
c.checked=0===e.date.time_part(n.start_date)&&0===e.date.time_part(n.end_date),s[d[0]].disabled=c.checked,s[d[0]+s.length/2].disabled=c.checked,c.onclick=function(){if(c.checked){var a={}
e.form_blocks.time.get_value(t,a,i),r=e.date.date_part(a.start_date),(+(o=e.date.date_part(a.end_date))==+r||+o>=+r&&(0!==n.end_date.getHours()||0!==n.end_date.getMinutes()))&&(o=e.date.add(o,1,"day"))}else r=null,o=null
s[d[0]].disabled=c.checked,s[d[0]+s.length/2].disabled=c.checked,f(s,0,r||n.start_date),f(s,4,o||n.end_date)}}if(_.auto_end_date&&_.event_duration)for(var h=function(){_.auto_end_date&&_.event_duration&&(r=new Date(s[d[3]].value,s[d[2]].value,s[d[1]].value,0,s[d[0]].value),o=new Date(r.getTime()+60*e.config.event_duration*1e3),f(s,4,o))},u=0;u<4;u++)s[u].onchange=h
function f(e,t,a){for(var n=i._time_values,r=60*a.getHours()+a.getMinutes(),o=r,_=!1,s=0;s<n.length;s++){var l=n[s]
if(l===r){_=!0
break}l<r&&(o=l)}e[t+d[0]].value=_?r:o,_||o||(e[t+d[0]].selectedIndex=-1),e[t+d[1]].value=a.getDate(),e[t+d[2]].value=a.getMonth(),e[t+d[3]].value=a.getFullYear()}f(s,0,n.start_date),f(s,4,n.end_date)},get_value:function(t,a,n){var i=t.getElementsByTagName("select"),r=n._time_format_order
if(a.start_date=new Date(i[r[3]].value,i[r[2]].value,i[r[1]].value,0,i[r[0]].value),a.end_date=new Date(i[r[3]+4].value,i[r[2]+4].value,i[r[1]+4].value,0,i[r[0]+4].value),!i[r[3]].value||!i[r[3]+4].value){var o=e.getEvent(e._lightbox_id)
o&&(a.start_date=o.start_date,a.end_date=o.end_date)}return a.end_date<=a.start_date&&(a.end_date=e.date.add(a.start_date,e.config.time_step,"minute")),{start_date:new Date(a.start_date),end_date:new Date(a.end_date)}},focus:function(t){e._focus(t.getElementsByTagName("select")[0])}}},e._setLbPosition=function(e){if(e){var t=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,a=window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft,n=window.innerHeight||document.documentElement.clientHeight
e.style.top=t?Math.round(t+Math.max((n-e.offsetHeight)/2,0))+"px":Math.round(Math.max((n-e.offsetHeight)/2,0)+9)+"px",document.documentElement.scrollWidth>document.body.offsetWidth?e.style.left=Math.round(a+(document.body.offsetWidth-e.offsetWidth)/2)+"px":e.style.left=Math.round((document.body.offsetWidth-e.offsetWidth)/2)+"px"}},e.showCover=function(t){t&&(t.style.display="block",this._setLbPosition(t)),e.config.responsive_lightbox&&(document.documentElement.classList.add("dhx_cal_overflow_container"),document.body.classList.add("dhx_cal_overflow_container")),this.show_cover()},e.showLightbox=function(e){if(e)if(this.callEvent("onBeforeLightbox",[e])){var t=this.getLightbox()
this.showCover(t),this._fill_lightbox(e,t),this._waiAria.lightboxVisibleAttr(t),this.callEvent("onLightbox",[e])}else this._new_event&&(this._new_event=null)},e._fill_lightbox=function(t,a){var n=this.getEvent(t),i=a.getElementsByTagName("span"),r=[]
if(e.templates.lightbox_header){r.push("")
var o=e.templates.lightbox_header(n.start_date,n.end_date,n)
r.push(o),i[1].innerHTML="",i[2].innerHTML=o}else{var _=this.templates.event_header(n.start_date,n.end_date,n),s=(this.templates.event_bar_text(n.start_date,n.end_date,n)||"").substr(0,70)
r.push(_),r.push(s),i[1].innerHTML=_,i[2].innerHTML=s}this._waiAria.lightboxHeader(a,r.join(" "))
for(var d=this.config.lightbox.sections,l=0;l<d.length;l++){var c=d[l],h=e._get_lightbox_section_node(c),u=this.form_blocks[c.type],f=void 0!==n[c.map_to]?n[c.map_to]:c.default_value
u.set_value.call(this,h,f,n,c),d[l].focus&&u.focus.call(this,h)}e._lightbox_id=t},e._get_lightbox_section_node=function(e){return document.getElementById(e.id).nextSibling},e._lightbox_out=function(e){for(var t=this.config.lightbox.sections,a=0;a<t.length;a++){var n=document.getElementById(t[a].id)
n=n?n.nextSibling:n
var i=this.form_blocks[t[a].type].get_value.call(this,n,e,t[a])
"auto"!=t[a].map_to&&(e[t[a].map_to]=i)}return e},e._empty_lightbox=function(t){var a=e._lightbox_id,n=this.getEvent(a)
this._lame_copy(n,t),this.setEvent(n.id,n),this._edit_stop_event(n,!0),this.render_view_data()},e.hide_lightbox=function(t){e.endLightbox(!1,this.getLightbox())},e.hideCover=function(t){t&&(t.style.display="none"),this.hide_cover(),e.config.responsive_lightbox&&(document.documentElement.classList.remove("dhx_cal_overflow_container"),document.body.classList.remove("dhx_cal_overflow_container"))},e.hide_cover=function(){this._cover&&this._cover.parentNode.removeChild(this._cover),this._cover=null},e.show_cover=function(){this._cover||(this._cover=document.createElement("div"),this._cover.className="dhx_cal_cover",document.body.appendChild(this._cover))},e.save_lightbox=function(){var e=this._lightbox_out({},this._lame_copy(this.getEvent(this._lightbox_id)))
this.checkEvent("onEventSave")&&!this.callEvent("onEventSave",[this._lightbox_id,e,this._new_event])||(this._empty_lightbox(e),this.hide_lightbox())},e.startLightbox=function(e,t){this._lightbox_id=e,this._custom_lightbox=!0,this._temp_lightbox=this._lightbox,this._lightbox=t,this.showCover(t)},e.endLightbox=function(t,a){a=a||e.getLightbox()
var n=e.getEvent(this._lightbox_id)
n&&this._edit_stop_event(n,t),t&&e.render_view_data(),this.hideCover(a),this._custom_lightbox&&(this._lightbox=this._temp_lightbox,this._custom_lightbox=!1),this._temp_lightbox=this._lightbox_id=null,this._waiAria.lightboxHiddenAttr(a),this.callEvent("onAfterLightbox",[])},e.resetLightbox=function(){e._lightbox&&!e._custom_lightbox&&e._lightbox.parentNode.removeChild(e._lightbox),e._lightbox=null},e.cancel_lightbox=function(){this._lightbox_id&&this.callEvent("onEventCancel",[this._lightbox_id,this._new_event]),this.hide_lightbox()},e.hideLightbox=e.cancel_lightbox,e._init_lightbox_events=function(){this.getLightbox().onclick=function(t){var a=t.target
if(a.className||(a=a.previousSibling),!(a&&a.className&&e._getClassName(a).indexOf("dhx_btn_set")>-1)||(a=a.querySelector("[dhx_button]"))){var n=e._getClassName(a)
if(a&&n)switch(n){case"dhx_save_btn":e.save_lightbox()
break
case"dhx_delete_btn":var i=e.locale.labels.confirm_deleting
e._dhtmlx_confirm(i,e.locale.labels.title_confirm_deleting,(function(){e.deleteEvent(e._lightbox_id),e._new_event=null,e.hide_lightbox()}))
break
case"dhx_cancel_btn":e.cancel_lightbox()
break
default:var r,o
a.getAttribute("dhx_button")?e.callEvent("onLightboxButton",[n,a,t]):(-1!=n.indexOf("dhx_custom_button")&&(-1!=n.indexOf("dhx_custom_button_")?(r=a.parentNode.getAttribute("index"),o=a.parentNode.parentNode):(r=a.getAttribute("index"),o=a.parentNode,a=a.firstChild)),r&&e.form_blocks[e.config.lightbox.sections[r].type].button_click(r,a,o,o.nextSibling))}}},this.getLightbox().onkeydown=function(t){var a=t||window.event,n=t.target||t.srcElement,i=n.querySelector("[dhx_button]")
switch(i||(i=n.parentNode.querySelector(".dhx_custom_button, .dhx_readonly")),(t||a).keyCode){case 32:if((t||a).shiftKey)return
i&&i.click&&i.click()
break
case e.keys.edit_save:if((t||a).shiftKey)return
i&&i.click?i.click():e.save_lightbox()
break
case e.keys.edit_cancel:e.cancel_lightbox()}}},e.setLightboxSize=function(){var t=this._lightbox
if(t){var a=t.childNodes[1]
a.style.height="0px",a.style.height=a.scrollHeight+"px",t.style.height=a.scrollHeight+e.xy.lightbox_additional_height+"px",a.style.height=a.scrollHeight+"px"}},e._init_dnd_events=function(){e.event(document.body,"mousemove",e._move_while_dnd),e.event(document.body,"mouseup",e._finish_dnd),e._init_dnd_events=function(){}},e._move_while_dnd=function(t){if(e._dnd_start_lb){document.dhx_unselectable||(document.body.className+=" dhx_unselectable",document.dhx_unselectable=!0)
var a=e.getLightbox(),n=[t.pageX,t.pageY]
a.style.top=e._lb_start[1]+n[1]-e._dnd_start_lb[1]+"px",a.style.left=e._lb_start[0]+n[0]-e._dnd_start_lb[0]+"px"}},e._ready_to_dnd=function(t){var a=e.getLightbox()
e._lb_start=[parseInt(a.style.left,10),parseInt(a.style.top,10)],e._dnd_start_lb=[t.pageX,t.pageY]},e._finish_dnd=function(){e._lb_start&&(e._lb_start=e._dnd_start_lb=!1,document.body.className=document.body.className.replace(" dhx_unselectable",""),document.dhx_unselectable=!1)},e.getLightbox=function(){if(!this._lightbox){var t=document.createElement("div")
t.className="dhx_cal_light",e.config.wide_form&&(t.className+=" dhx_cal_light_wide"),e.form_blocks.recurring&&(t.className+=" dhx_cal_light_rec"),e.config.rtl&&(t.className+=" dhx_cal_light_rtl"),e.config.responsive_lightbox&&(t.className+=" dhx_cal_light_responsive"),/msie|MSIE 6/.test(navigator.userAgent)&&(t.className+=" dhx_ie6"),t.style.visibility="hidden"
for(var a=this._lightbox_template,n=this.config.buttons_left,i=0;i<n.length;i++)a+="<div "+this._waiAria.lightboxButtonAttrString(n[i])+" class='dhx_btn_set dhx_"+(e.config.rtl?"right":"left")+"_btn_set "+n[i]+"_set'><div dhx_button='1' class='"+n[i]+"'></div><div>"+e.locale.labels[n[i]]+"</div></div>"
n=this.config.buttons_right
var r=e.config.rtl
for(i=0;i<n.length;i++)a+="<div "+this._waiAria.lightboxButtonAttrString(n[i])+" class='dhx_btn_set dhx_"+(r?"left":"right")+"_btn_set "+n[i]+"_set' style='float:"+(r?"left":"right")+";'><div dhx_button='1' class='"+n[i]+"'></div><div>"+e.locale.labels[n[i]]+"</div></div>"
a+="</div>",t.innerHTML=a,e.config.drag_lightbox&&(t.firstChild.onmousedown=e._ready_to_dnd,t.firstChild.onselectstart=function(){return!1},t.firstChild.style.cursor="move",e._init_dnd_events()),this._waiAria.lightboxAttr(t),document.body.insertBefore(t,document.body.firstChild),this._lightbox=t
var o=this.config.lightbox.sections
for(a="",i=0;i<o.length;i++){var _=this.form_blocks[o[i].type]
if(_){o[i].id="area_"+this.uid()
var s=""
o[i].button&&(s="<div "+e._waiAria.lightboxSectionButtonAttrString(this.locale.labels["button_"+o[i].button])+" class='dhx_custom_button' index='"+i+"'><div class='dhx_custom_button_"+o[i].button+"'></div><div>"+this.locale.labels["button_"+o[i].button]+"</div></div>"),this.config.wide_form&&(a+="<div class='dhx_wrap_section'>")
var d=this.locale.labels["section_"+o[i].name]
"string"!=typeof d&&(d=o[i].name),a+="<div id='"+o[i].id+"' class='dhx_cal_lsection'>"+s+"<label>"+d+"</label></div>"+_.render.call(this,o[i]),a+="</div>"}}var l=t.getElementsByTagName("div")
for(i=0;i<l.length;i++){var c=l[i]
if("dhx_cal_larea"==e._getClassName(c)){c.innerHTML=a
break}}e._bindLightboxLabels(o),this.setLightboxSize(),this._init_lightbox_events(this),t.style.display="none",t.style.visibility="visible"}return this._lightbox},e._bindLightboxLabels=function(t){for(var a=0;a<t.length;a++){var n=t[a]
if(n.id&&document.getElementById(n.id)){for(var i=document.getElementById(n.id).querySelector("label"),r=e._get_lightbox_section_node(n);r&&!r.querySelector;)r=r.nextSibling
var o=!0
if(r){var _=r.querySelector("input, select, textarea")
_&&(n.inputId=_.id||"input_"+e.uid(),_.id||(_.id=n.inputId),i.setAttribute("for",n.inputId),o=!1)}o&&e.form_blocks[n.type].focus&&(i.onclick=function(t){return function(){var a=e.form_blocks[t.type],n=e._get_lightbox_section_node(t)
a&&a.focus&&a.focus.call(e,n)}}(n))}}},e.attachEvent("onEventIdChange",(function(e,t){this._lightbox_id==e&&(this._lightbox_id=t)})),e._lightbox_template="<div class='dhx_cal_ltitle'><span class='dhx_mark'>&nbsp;</span><span class='dhx_time'></span><span class='dhx_title'></span></div><div class='dhx_cal_larea'></div>"}(t),function(e){e._init_touch_events=function(){if((this.config.touch&&(-1!=navigator.userAgent.indexOf("Mobile")||-1!=navigator.userAgent.indexOf("iPad")||-1!=navigator.userAgent.indexOf("Android")||-1!=navigator.userAgent.indexOf("Touch"))&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&(this.xy.scroll_width=0,this._mobile=!0),this.config.touch){var e=!0
try{document.createEvent("TouchEvent")}catch(t){e=!1}e?this._touch_events(["touchmove","touchstart","touchend"],(function(e){return e.touches&&e.touches.length>1?null:e.touches[0]?{target:e.target,pageX:e.touches[0].pageX,pageY:e.touches[0].pageY,clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:e}),(function(){return!1})):window.PointerEvent||window.navigator.pointerEnabled?this._touch_events(["pointermove","pointerdown","pointerup"],(function(e){return"mouse"==e.pointerType?null:e}),(function(e){return!e||"mouse"==e.pointerType})):window.navigator.msPointerEnabled&&this._touch_events(["MSPointerMove","MSPointerDown","MSPointerUp"],(function(e){return e.pointerType==e.MSPOINTER_TYPE_MOUSE?null:e}),(function(e){return!e||e.pointerType==e.MSPOINTER_TYPE_MOUSE}))}},e._touch_events=function(t,a,n){var i,r,o,_,s,d,l=0
function c(t,a,i){t.addEventListener(a,(function(t){return!!e._is_lightbox_open()||(n(t)?void 0:i(t))}),{passive:!1})}function h(t){n(t)||(e._hide_global_tip(),_&&(e._on_mouse_up(a(t)),e._temp_touch_block=!1),e._drag_id=null,e._drag_mode=null,e._drag_pos=null,e._pointerDragId=null,clearTimeout(o),_=d=!1,s=!0)}c(document.body,t[0],(function(t){if(!n(t)){var l=a(t)
if(l){if(_)return function(t){if(!n(t)){var a=e.getState().drag_mode,i=!!e.matrix&&e.matrix[e._mode],r=e.render_view_data
"create"==a&&i&&(e.render_view_data=function(){for(var t=e.getState().drag_id,a=e.getEvent(t),n=i.y_property,r=e.getEvents(a.start_date,a.end_date),o=0;o<r.length;o++)r[o][n]!=a[n]&&(r.splice(o,1),o--)
a._sorder=r.length-1,a._count=r.length,this.render_data([a],e.getState().mode)}),e._on_mouse_move(t),"create"==a&&i&&(e.render_view_data=r),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0}}(l),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,e._update_global_tip(),!1
r=a(t),d&&(r?(i.target!=r.target||Math.abs(i.pageX-r.pageX)>5||Math.abs(i.pageY-r.pageY)>5)&&(s=!0,clearTimeout(o)):s=!0)}}})),c(this._els.dhx_cal_data[0],"touchcancel",h),c(this._els.dhx_cal_data[0],"contextmenu",(function(e){if(!n(e))return d?(e&&e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,!1):void 0})),c(this._obj,t[1],(function(t){var c
if(document&&document.body&&document.body.classList.add("dhx_cal_touch_active"),!n(t))if(e._pointerDragId=t.pointerId,_=s=!1,d=!0,c=r=a(t)){var h=new Date
if(!s&&!_&&h-l<250)return e._click.dhx_cal_data(c),window.setTimeout((function(){c.type="dblclick",e._on_dbl_click(c)}),50),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,e._block_next_stop=!0,!1
if(l=h,!s&&!_&&e.config.touch_drag){var u=e._locate_event(document.activeElement),f=e._locate_event(c.target),p=i?e._locate_event(i.target):null
if(u&&f&&u==f&&u!=p)return t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,e._ignore_next_click=!1,e._click.dhx_cal_data(c),i=c,!1
o=setTimeout((function(){_=!0
var t=i.target,a=e._getClassName(t)
t&&-1!=a.indexOf("dhx_body")&&(t=t.previousSibling),e._on_mouse_down(i,t),e._drag_mode&&"create"!=e._drag_mode&&e.for_rendered(e._drag_id,(function(t,a){t.style.display="none",e._rendered.splice(a,1)})),e.config.touch_tip&&e._show_global_tip(),e.updateEvent(e._drag_id)}),e.config.touch_drag),i=c}}else s=!0})),c(this._els.dhx_cal_data[0],t[2],(function(t){if(document&&document.body&&document.body.classList.remove("dhx_cal_touch_active"),!n(t))return e.config.touch_swipe_dates&&!_&&function(t,a,n,i){if(!t||!a)return!1
for(var r=t.target;r&&r!=e._obj;)r=r.parentNode
if(r!=e._obj)return!1
if(e.matrix&&e.matrix[e.getState().mode]&&e.matrix[e.getState().mode].scrollable)return!1
var o=Math.abs(t.pageY-a.pageY),_=Math.abs(t.pageX-a.pageX)
return o<100&&_>200&&(!o||_/o>3)&&(t.pageX>a.pageX?e._click.dhx_cal_next_button():e._click.dhx_cal_prev_button(),!0)}(i,r)&&(e._block_next_stop=!0),_&&(e._ignore_next_click=!0,setTimeout((function(){e._ignore_next_click=!1}),100)),h(t),e._block_next_stop?(e._block_next_stop=!1,t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,!1):void 0})),e.event(document.body,t[2],h)},e._show_global_tip=function(){e._hide_global_tip()
var t=e._global_tip=document.createElement("div")
t.className="dhx_global_tip",e._update_global_tip(1),document.body.appendChild(t)},e._update_global_tip=function(t){var a=e._global_tip
if(a){var n=""
if(e._drag_id&&!t){var i=e.getEvent(e._drag_id)
i&&(n="<div>"+(i._timed?e.templates.event_header(i.start_date,i.end_date,i):e.templates.day_date(i.start_date,i.end_date,i))+"</div>")}"create"==e._drag_mode||"new-size"==e._drag_mode?a.innerHTML=(e.locale.labels.drag_to_create||"Drag to create")+n:a.innerHTML=(e.locale.labels.drag_to_move||"Drag to move")+n}},e._hide_global_tip=function(){var t=e._global_tip
t&&t.parentNode&&(t.parentNode.removeChild(t),e._global_tip=0)}}(t),function(e){e.getRootView=function(){return{view:{render:function(){return{tag:"div",type:1,attrs:{style:"width:100%;height:100%;"},hooks:{didInsert:function(){e.setCurrentView()}},body:[{el:this.el,type:1}]}},init:function(){var t=document.createElement("DIV")
t.id="scheduler_"+e.uid(),t.style.width="100%",t.style.height="100%",t.classList.add("dhx_cal_container"),t.cmp="grid",t.innerHTML='<div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div><div class="dhx_cal_tab" data-tab="day"></div><div class="dhx_cal_tab" data-tab="week"></div><div class="dhx_cal_tab" data-tab="month"></div></div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div>',e.init(t),this.el=t}},type:4}}}(t),function(e){var t,a
function n(){if(e._is_material_skin())return!0
if(void 0!==a)return a
var t=document.createElement("div")
t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",t.innerHTML="<div class='dhx_cal_container'><div class='dhx_cal_data'><div class='dhx_cal_event'><div class='dhx_body'></div></div><div>",document.body.appendChild(t)
var n=window.getComputedStyle(t.querySelector(".dhx_body")).getPropertyValue("box-sizing")
document.body.removeChild(t),(a=!("border-box"!==n))||setTimeout((function(){a=void 0}),1e3)}function i(){if(!e._is_material_skin()&&!e._border_box_events()){var i=a
a=void 0,t=void 0,i!==n()&&e.$container&&e.getState().mode&&e.setCurrentView()}}e._skin_settings={fix_tab_position:[1,0],use_select_menu_space:[1,0],wide_form:[1,0],hour_size_px:[44,42],displayed_event_color:["#ff4a4a","ffc5ab"],displayed_event_text_color:["#ffef80","7e2727"]},e._skin_xy={lightbox_additional_height:[90,50],nav_height:[59,22],bar_height:[24,20]},e._is_material_skin=function(){return e.skin?(e.skin+"").indexOf("material")>-1:function(){if(void 0===t){var e=document.createElement("div")
e.style.position="absolute",e.style.left="-9999px",e.style.top="-9999px",e.innerHTML="<div class='dhx_cal_container'><div class='dhx_cal_scale_placeholder'></div><div>",document.body.appendChild(e)
var a=window.getComputedStyle(e.querySelector(".dhx_cal_scale_placeholder")).getPropertyValue("position")
t="absolute"===a,setTimeout((function(){t=null}),500)}return t}()},window.addEventListener("DOMContentLoaded",i),window.addEventListener("load",i),e._border_box_events=function(){return n()},e._configure=function(e,t,a){for(var n in t)void 0===e[n]&&(e[n]=t[n][a])},e._skin_init=function(){if(!e.skin)for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var n=t[a].href.match("dhtmlxscheduler_([a-z]+).css")
if(n){e.skin=n[1]
break}}var i=0
if(!e.skin||"classic"!==e.skin&&"glossy"!==e.skin||(i=1),e._is_material_skin()){var r=e.config.buttons_left.$inital,o=e.config.buttons_right.$inital
if(r&&e.config.buttons_left.slice().join()==r&&o&&e.config.buttons_right.slice().join()==o){var _=e.config.buttons_left.slice()
e.config.buttons_left=e.config.buttons_right.slice(),e.config.buttons_right=_}e.xy.event_header_height=18,e.xy.week_agenda_scale_height=35,e.xy.map_icon_width=38,e._lightbox_controls.defaults.textarea.height=64,e._lightbox_controls.defaults.time.height="auto"}if(this._configure(e.config,e._skin_settings,i),this._configure(e.xy,e._skin_xy,i),"flat"===e.skin&&(e.xy.scale_height=35,e.templates.hour_scale=function(e){var t=e.getMinutes()
return t=t<10?"0"+t:t,"<span class='dhx_scale_h'>"+e.getHours()+"</span><span class='dhx_scale_m'>&nbsp;"+t+"</span>"}),!i){var s=e.config.minicalendar
s&&(s.padding=14),e.templates.event_bar_date=function(t,a,n){return"• <b>"+e.templates.event_date(t)+"</b> "},e.attachEvent("onTemplatesReady",(function(){var t=e.date.date_to_str("%d")
e.templates._old_month_day||(e.templates._old_month_day=e.templates.month_day)
var a=e.templates._old_month_day
if(e.templates.month_day=function(n){if("month"==this._mode){var i=t(n)
return 1==n.getDate()&&(i=e.locale.date.month_full[n.getMonth()]+" "+i),+n==+e.date.date_part(this._currentDate())&&(i=e.locale.labels.dhx_cal_today_button+" "+i),i}return a.call(this,n)},e.config.fix_tab_position){var n=e._els.dhx_cal_navline[0].getElementsByTagName("div"),i=null,r=211,o=[14,75,136],_=14
e._is_material_skin()&&(o=[16,103,192],r=294,_=-1)
for(var s=0;s<n.length;s++){var d=n[s],l=d.getAttribute("data-tab")||d.getAttribute("name")
if(l){switch(d.style.right="auto",l){case"day":case"day_tab":d.style.left=o[0]+"px",d.className+=" dhx_cal_tab_first"
break
case"week":case"week_tab":d.style.left=o[1]+"px"
break
case"month":case"month_tab":d.style.left=o[2]+"px",d.className+=" dhx_cal_tab_last"
break
default:d.style.left=r+"px",d.className+=" dhx_cal_tab_standalone",r=r+_+d.offsetWidth}d.className+=" "+l}else 0===(d.className||"").indexOf("dhx_minical_icon")&&d.parentNode==e._els.dhx_cal_navline[0]&&(i=d)}i&&(i.style.left=r+"px")}})),e._skin_init=function(){}}}}(t),window.jQuery&&function(e){var t=0,a=[]
e.fn.dhx_scheduler=function(n){if("string"!=typeof n){var i=[]
return this.each((function(){if(this&&this.getAttribute)if(this.getAttribute("dhxscheduler"))i.push(window[this.getAttribute("dhxscheduler")])
else{var e="scheduler"
t&&(e="scheduler"+(t+1),window[e]=Scheduler.getSchedulerInstance())
var a=window[e]
for(var r in this.setAttribute("dhxscheduler",e),n)"data"!=r&&(a.config[r]=n[r])
this.getElementsByTagName("div").length||(this.innerHTML='<div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div><div class="dhx_cal_tab" name="day_tab" data-tab="day" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" data-tab="week" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" data-tab="month" style="right:76px;"></div></div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div>',this.className+=" dhx_cal_container"),a.init(this,a.config.date,a.config.mode),n.data&&a.parse(n.data),i.push(a),t++}})),1===i.length?i[0]:i}if(a[n])return a[n].apply(this,[])
e.error("Method "+n+" does not exist on jQuery.dhx_scheduler")}}(window.jQuery),function(e){!function(){var t=e.setCurrentView,a=e.updateView,i=null,r=null,o=function(t,o){var _=this
n.a.clearTimeout(r),n.a.clearTimeout(i)
var d=_._date,l=_._mode
s(this,t,o),r=setTimeout((function(){_.callEvent("onBeforeViewChange",[l,d,o||_._mode,t||_._date])?(a.call(_,t,o),_.callEvent("onViewChange",[_._mode,_._date]),n.a.clearTimeout(i),r=0):s(_,d,l)}),e.config.delay_render)},_=function(t,o){var _=this,d=arguments
s(this,t,o),n.a.clearTimeout(i),i=setTimeout((function(){r||a.apply(_,d)}),e.config.delay_render)}
function s(e,t,a){t&&(e._date=t),a&&(e._mode=a)}e.attachEvent("onSchedulerReady",(function(){e.config.delay_render?(e.setCurrentView=o,e.updateView=_):(e.setCurrentView=t,e.updateView=a)}))}()}(t),function(e){e.createDataProcessor=function(t){var a,n
t instanceof Function?a=t:t.hasOwnProperty("router")&&(a=t.router),n=a?"CUSTOM":t.mode||"REST-JSON"
var i=new z(t.url)
return i.init(e),i.setTransactionMode({mode:n,router:a},t.batchUpdate),i},e.DataProcessor=z}(t),function(e){e.attachEvent("onSchedulerReady",(function(){"undefined"!=typeof dhtmlxError&&window.dhtmlxError.catchError("LoadXML",(function(t,a,i){var r=i[0].responseText
switch(e.config.ajax_error){case"alert":n.a.alert(r)
break
case"console":n.a.console.log(r)}}))}))}(t)
var i=new ae({en:K,ar:I,be:F,ca:$,cn:B,cs:V,da:U,de:q,el:W,es:X,fi:Y,fr:J,he:G,hu:Q,id:Z,it:ee,jp:te,nb:ne,nl:ie,no:re,pl:oe,pt:_e,ro:se,ru:de,si:le,sk:ce,sv:he,tr:ue,ua:fe})
t.i18n={addLocale:i.addLocale,setLocale:function(e){if("string"==typeof e){var a=i.getLocale(e)
a||(a=i.getLocale("en")),t.locale=a}else if(e)if(t.locale)for(var n in e)e[n]&&"object"===pe(e[n])?(t.locale[n]||(t.locale[n]={}),t.mixin(t.locale[n],e[n],!0)):t.locale[n]=e[n]
else t.locale=e},getLocale:i.getLocale},t.i18n.setLocale("en"),t.ext={}
var d={}
return t.plugins=function(a){(function(e,t,a){var n=[]
for(var i in e)if(e[i]){var r=i.toLowerCase()
t[r]&&t[r].forEach((function(t){var a=t.toLowerCase()
e[a]||n.push(a)})),n.push(r)}return n.sort((function(e,t){var n=a[e]||0,i=a[t]||0
return n>i?1:n<i?-1:0})),n})(a,{treetimeline:["timeline"],daytimeline:["timeline"],outerdrag:["legacy"]},{legacy:1,limit:1,timeline:2,daytimeline:3,treetimeline:3,outerdrag:6}).forEach((function(a){if(!d[a]){var n=e.getExtension(a)
if(!n)throw new Error("unknown plugin "+a)
n(t),d[a]=!0}}))},t}
var ge=function(){function e(t){for(var a in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._extensions={},t)this._extensions[a]=t[a]}return function(e,t,a){t&&function(e,t){for(var a=0;a<t.length;a++){var n=t[a]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t)}(e,[{key:"addExtension",value:function(e,t){this._extensions[e]=t}},{key:"getExtension",value:function(e){return this._extensions[e]}}]),e}()
"undefined"!=typeof dhtmlx&&dhtmlx.attaches&&(dhtmlx.attaches.attachScheduler=function(e,t,a,n){a=a||'<div class="dhx_cal_tab" name="day_tab" data-tab="day" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" data-tab="week" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" data-tab="month" style="right:76px;"></div>'
var i=document.createElement("DIV")
return i.id="dhxSchedObj_"+this._genStr(12),i.innerHTML='<div id="'+i.id+'" class="dhx_cal_container" style="width:100%; height:100%;"><div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div>'+a+'</div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div></div>',document.body.appendChild(i.firstChild),this.attachObject(i.id,!1,!0),this.vs[this.av].sched=n,this.vs[this.av].schedId=i.id,n.setSizes=n.updateView,n.destructor=function(){},n.init(i.id,e,t),this.vs[this._viewRestore()].sched})
var me=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._seed=0,this._schedulerPlugins=[],this._bundledExtensions=t,this._extensionsManager=new ge(t)}return function(e,t,a){t&&function(e,t){for(var a=0;a<t.length;a++){var n=t[a]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t)}(e,[{key:"plugin",value:function(e){this._schedulerPlugins.push(e),n.a.scheduler&&e(n.a.scheduler)}},{key:"getSchedulerInstance",value:function(e){for(var t=ve(this._extensionsManager),a=0;a<this._schedulerPlugins.length;a++)this._schedulerPlugins[a](t)
return t._internal_id=this._seed++,this.$syncFactory&&this.$syncFactory(t),e&&this._initFromConfig(t,e),t}},{key:"_initFromConfig",value:function(e,t){if(t.plugins&&e.plugins(t.plugins),t.config&&e.mixin(e.config,t.config,!0),t.templates&&e.attachEvent("onTemplatesReady",(function(){e.mixin(e.templates,t.templates,!0)}),{once:!0}),t.events)for(var a in t.events)e.attachEvent(a,t.events[a])
t.locale&&e.i18n.setLocale(t.locale),Array.isArray(t.calendars)&&t.calendars.forEach((function(t){e.addCalendar(t)})),t.container?e.init(t.container):e.init(),t.data&&("string"==typeof t.data?e.load(t.data):e.parse(t.data))}}]),e}()
function ye(e){e._inited_multisection_copies||(e.attachEvent("onEventIdChange",(function(e,t){var a=this._multisection_copies
if(a&&a[e]&&!a[t]){var n=a[e]
delete a[e],a[t]=n}})),e._inited_multisection_copies=!0),e._register_copies_array=function(e){for(var t=0;t<e.length;t++)this._register_copy(e[t])},e._register_copy=function(e){if(this._multisection_copies){this._multisection_copies[e.id]||(this._multisection_copies[e.id]={})
var t=e[this._get_section_property()]
this._multisection_copies[e.id][t]=e}},e._get_copied_event=function(t,a){if(!this._multisection_copies[t])return null
if(this._multisection_copies[t][a])return this._multisection_copies[t][a]
var n=this._multisection_copies[t]
if(e._drag_event&&e._drag_event._orig_section&&n[e._drag_event._orig_section])return n[e._drag_event._orig_section]
var i=1/0,r=null
for(var o in n)n[o]._sorder<i&&(r=n[o],i=n[o]._sorder)
return r},e._clear_copied_events=function(){this._multisection_copies={}},e._restore_render_flags=function(t){for(var a=this._get_section_property(),n=0;n<t.length;n++){var i=t[n],r=e._get_copied_event(i.id,i[a])
if(r)for(var o in r)0===o.indexOf("_")&&(i[o]=r[o])}}}var be={from_scheduler:null,to_scheduler:null,drag_data:null,drag_placeholder:null,delete_dnd_holder:function(){var e=this.drag_placeholder
e&&(e.parentNode&&e.parentNode.removeChild(e),document.body.className=document.body.className.replace(" dhx_no_select",""),this.drag_placeholder=null)},copy_event_node:function(e,t){for(var a=null,n=0;n<t._rendered.length;n++){var i=t._rendered[n]
if(i.getAttribute(t.config.event_attribute)==e.id||i.getAttribute(t.config.event_attribute)==t._drag_id){(a=i.cloneNode(!0)).style.position=a.style.top=a.style.left=""
break}}return a||document.createElement("div")},create_dnd_holder:function(e,t){if(this.drag_placeholder)return this.drag_placeholder
var a=document.createElement("div"),n=t.templates.event_outside(e.start_date,e.end_date,e)
return n?a.innerHTML=n:a.appendChild(this.copy_event_node(e,t)),a.className="dhx_drag_placeholder",a.style.position="absolute",this.drag_placeholder=a,document.body.appendChild(a),document.body.className+=" dhx_no_select",a},move_dnd_holder:function(e){var t={x:e.clientX,y:e.clientY}
if(this.create_dnd_holder(this.drag_data.ev,this.from_scheduler),this.drag_placeholder){var a=t.x,n=t.y,i=document.documentElement,r=document.body,o=this.drag_placeholder
o.style.left=10+a+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i.clientLeft||0)+"px",o.style.top=10+n+(i&&i.scrollTop||r&&r.scrollTop||0)-(i.clientTop||0)+"px"}},clear_scheduler_dnd:function(e){e._drag_id=e._drag_pos=e._drag_mode=e._drag_event=e._new_event=null},stop_drag:function(e){e&&this.clear_scheduler_dnd(e),this.delete_dnd_holder(),this.drag_data=null},inject_into_scheduler:function(e,t,a){e._count=1,e._sorder=0,e.event_pid&&"0"!=e.event_pid&&(e.event_pid=null,e.rec_type=e.rec_pattern="",e.event_length=0),t._drag_event=e,t._events[e.id]=e,t._drag_id=e.id,t._drag_mode="move",a&&t._on_mouse_move(a)},start_dnd:function(e){if(e.config.drag_out){this.from_scheduler=e,this.to_scheduler=e
var t=this.drag_data={}
t.ev=e._drag_event,t.orig_id=e._drag_event.id}},land_into_scheduler:function(e,t){if(!e.config.drag_in)return this.move_dnd_holder(t),!1
var a=this.drag_data,n=e._lame_clone(a.ev)
if(e!=this.from_scheduler){n.id=e.uid()
var i=n.end_date-n.start_date
n.start_date=new Date(e.getState().min_date),n.end_date=new Date(n.start_date.valueOf()+i)}else n.id=this.drag_data.orig_id,n._dhx_changed=!0
return this.drag_data.target_id=n.id,!!e.callEvent("onBeforeEventDragIn",[n.id,n,t])&&(this.to_scheduler=e,this.inject_into_scheduler(n,e,t),this.delete_dnd_holder(),e.updateView(),e.callEvent("onEventDragIn",[n.id,n,t]),!0)},drag_from_scheduler:function(e,t){if(this.drag_data&&e._drag_id&&e.config.drag_out){if(!e.callEvent("onBeforeEventDragOut",[e._drag_id,e._drag_event,t]))return!1
this.to_scheduler==e&&(this.to_scheduler=null),this.create_dnd_holder(this.drag_data.ev,e)
var a=e._drag_id
return this.drag_data.target_id=null,delete e._events[a],this.clear_scheduler_dnd(e),e.updateEvent(a),e.callEvent("onEventDragOut",[a,this.drag_data.ev,t]),!0}return!1},reset_event:function(e,t){this.inject_into_scheduler(e,t),this.stop_drag(t),t.updateView()},move_permanently:function(e,t,a,n){n.callEvent("onEventAdded",[t.id,t]),this.inject_into_scheduler(e,a),this.stop_drag(a),e.event_pid&&"0"!=e.event_pid?(a.callEvent("onConfirmedBeforeEventDelete",[e.id]),a.updateEvent(t.event_pid)):a.deleteEvent(e.id),a.updateView(),n.updateView()}},xe=!1,we=[]
function ke(e){return(ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Ee=a(7)
function De(e){return(De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Se(e){return(Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Me(e){return(Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ce(e){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Ne=function(){var e,t={minMax:"[0;max]",maxMin:"[max;0]",nMaxMin:"[-max;0]"}
function a(e,a){var i=n()
return i===t.nMaxMin?e?-e:0:i===t.minMax?a-e:e}function n(){return e||(e=function(){var e=t.minMax,a=function(){var e=document.createElement("div")
e.style.cssText="direction: rtl;overflow: auto;width:100px;height: 100px;position:absolute;top: -100500px;left: -100500px;"
var t=document.createElement("div")
return t.style.cssText="width: 100500px;height: 1px;",e.appendChild(t),e}()
return document.body.appendChild(a),a.scrollLeft>0?e=t.minMax:(a.scrollLeft=-50,e=-50===a.scrollLeft?t.nMaxMin:t.maxMin),document.body.removeChild(a),e}()),e}return{modes:t,getMode:n,normalizeValue:a,getScrollValue:function(e){var t=getComputedStyle(e).direction
if(t&&"ltr"!==t){var n=e.scrollWidth-e.offsetWidth
return a(e.scrollLeft,n)}return e.scrollLeft},setScrollValue:function(e,t){var n=getComputedStyle(e).direction
if(n&&"ltr"!==n){var i=a(t,e.scrollWidth-e.offsetWidth)
e.scrollLeft=i}else e.scrollLeft=t}}}
function Te(e){return(Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Ae=new me({active_links:function(e){e.config.active_link_view="day",e._active_link_click=function(t){var a=t.target.getAttribute("jump_to"),n=e.date.str_to_date(e.config.api_date)
if(a)return e.setCurrentView(n(a),e.config.active_link_view),t&&t.preventDefault&&t.preventDefault(),!1},e.attachEvent("onTemplatesReady",(function(){var t=function(t,a){a=a||t+"_scale_date",e.templates["_active_links_old_"+a]||(e.templates["_active_links_old_"+a]=e.templates[a])
var n=e.templates["_active_links_old_"+a],i=e.date.date_to_str(e.config.api_date)
e.templates[a]=function(e){return"<a jump_to='"+i(e)+"' href='#'>"+n(e)+"</a>"}}
if(t("week"),t("","month_day"),this.matrix)for(var a in this.matrix)t(a)
this._detachDomEvent(this._obj,"click",e._active_link_click),e.event(this._obj,"click",e._active_link_click)}))},agenda_view:function(e){e.date.add_agenda=function(t){return e.date.add(t,1,"year")},e.templates.agenda_time=function(t,a,n){return n._timed?this.day_date(n.start_date,n.end_date,n)+" "+this.event_date(t):e.templates.day_date(t)+" &ndash; "+e.templates.day_date(a)},e.templates.agenda_text=function(e,t,a){return a.text},e.templates.agenda_date=function(){return""},e.date.agenda_start=function(){return e.date.date_part(e._currentDate())},e.attachEvent("onTemplatesReady",(function(){var t=e.dblclick_dhx_cal_data
e.dblclick_dhx_cal_data=function(){if("agenda"==this._mode)!this.config.readonly&&this.config.dblclick_create&&this.addEventNow()
else if(t)return t.apply(this,arguments)}
var a=e.render_data
e.render_data=function(e){if("agenda"!=this._mode)return a.apply(this,arguments)
i()}
var n=e.render_view_data
function i(){var t=e.get_visible_events()
t.sort((function(e,t){return e.start_date>t.start_date?1:-1}))
for(var a,n="<div class='dhx_agenda_area' "+e._waiAria.agendaDataAttrString()+">",i=0;i<t.length;i++){var r=t[i],o=r.color?"background:"+r.color+";":"",_=r.textColor?"color:"+r.textColor+";":"",s=e.templates.event_class(r.start_date,r.end_date,r)
a=e._waiAria.agendaEventAttrString(r)
var d=e._waiAria.agendaDetailsBtnString()
n+="<div "+a+" class='dhx_agenda_line"+(s?" "+s:"")+"' event_id='"+r.id+"' "+e.config.event_attribute+"='"+r.id+"' style='"+_+o+(r._text_style||"")+"'><div class='dhx_agenda_event_time'>"+(e.config.rtl?e.templates.agenda_time(r.end_date,r.start_date,r):e.templates.agenda_time(r.start_date,r.end_date,r))+"</div>",n+="<div "+d+" class='dhx_event_icon icon_details'>&nbsp;</div>",n+="<span>"+e.templates.agenda_text(r.start_date,r.end_date,r)+"</span></div>"}n+="<div class='dhx_v_border'></div></div>",e._els.dhx_cal_data[0].innerHTML=n,e._els.dhx_cal_data[0].childNodes[0].scrollTop=e._agendaScrollTop||0
var l=e._els.dhx_cal_data[0].childNodes[0]
l.childNodes[l.childNodes.length-1].style.height=l.offsetHeight<e._els.dhx_cal_data[0].offsetHeight?"100%":l.offsetHeight+"px"
var c=e._els.dhx_cal_data[0].firstChild.childNodes,h=e._getNavDateElement()
for(h&&(h.innerHTML=e.templates.agenda_date(e._min_date,e._max_date,e._mode)),e._rendered=[],i=0;i<c.length-1;i++)e._rendered[i]=c[i]}e.render_view_data=function(){return"agenda"==this._mode&&(e._agendaScrollTop=e._els.dhx_cal_data[0].childNodes[0].scrollTop,e._els.dhx_cal_data[0].childNodes[0].scrollTop=0),n.apply(this,arguments)},e.agenda_view=function(t){e._min_date=e.config.agenda_start||e.date.agenda_start(e._date),e._max_date=e.config.agenda_end||e.date.add_agenda(e._min_date,1),function(t){if(t){var a=e.locale.labels,n=e._waiAria.agendaHeadAttrString(),i=e._waiAria.agendaHeadDateString(a.date),r=e._waiAria.agendaHeadDescriptionString(a.description)
e._els.dhx_cal_header[0].innerHTML="<div "+n+" class='dhx_agenda_line'><div "+i+">"+a.date+"</div><span class = 'description_header' style='padding-left:25px' "+r+">"+a.description+"</span></div>",e._table_view=!0,e.set_sizes()}}(t),t?(e._cols=null,e._colsS=null,e._table_view=!0,i()):e._table_view=!1}}))},all_timed:function(e){e.config.all_timed="short",e.config.all_timed_month=!1
var t=function(t){return!((t.end_date-t.start_date)/36e5>=24)||"resize"==e._drag_mode&&e._drag_id==t.id}
e._safe_copy=function(t){var a=null,n=e._copy_event(t)
return t.event_pid&&(a=e.getEvent(t.event_pid)),a&&a.isPrototypeOf(t)&&(delete n.event_length,delete n.event_pid,delete n.rec_pattern,delete n.rec_type),n}
var a=e._pre_render_events_line,n=e._pre_render_events_table,i=function(e,t){return this._table_view?n.call(this,e,t):a.call(this,e,t)}
e._pre_render_events_line=e._pre_render_events_table=function(a,n){if(!this.config.all_timed||this._table_view&&"month"!=this._mode||"month"==this._mode&&!this.config.all_timed_month)return i.call(this,a,n)
for(var r=0;r<a.length;r++){var o=a[r]
if(!o._timed)if("short"!=this.config.all_timed||t(o)){var _=this._safe_copy(o)
o._virtual?_._first_chunk=!1:_._first_chunk=!0,_._drag_resize=!1,_._virtual=!0,_.start_date=new Date(_.start_date),c(o)?(_.end_date=h(_.start_date),24!=this.config.last_hour&&(_.end_date=u(_.start_date,this.config.last_hour))):_.end_date=new Date(o.end_date)
var s=!1
_.start_date<this._max_date&&_.end_date>this._min_date&&_.start_date<_.end_date&&(a[r]=_,s=!0)
var d=this._safe_copy(o)
if(d._virtual=!0,d.end_date=new Date(d.end_date),d.start_date<this._min_date?d.start_date=u(this._min_date,this.config.first_hour):d.start_date=u(h(o.start_date),this.config.first_hour),d.start_date<this._max_date&&d.start_date<d.end_date){if(!s){a[r--]=d
continue}a.splice(r+1,0,d),d._last_chunk=!1}else _._last_chunk=!0,_._drag_resize=!0}else"month"!=this._mode&&a.splice(r--,1)}var l="move"!=this._drag_mode&&n
return i.call(this,a,l)
function c(e){var t=h(e.start_date)
return+e.end_date>+t}function h(t){var a=e.date.add(t,1,"day")
return e.date.date_part(a)}function u(t,a){var n=e.date.date_part(new Date(t))
return n.setHours(a),n}}
var r=e.get_visible_events
e.get_visible_events=function(e){return this.config.all_timed&&this.config.multi_day?r.call(this,!1):r.call(this,e)},e.attachEvent("onBeforeViewChange",(function(t,a,n,i){return e._allow_dnd="day"==n||"week"==n,!0})),e._is_main_area_event=function(e){return!!(e._timed||!0===this.config.all_timed||"short"==this.config.all_timed&&t(e))}
var o=e.updateEvent
e.updateEvent=function(t){var a,n,i=e.getEvent(t)
i&&(a=e.config.all_timed&&!(e.isOneDayEvent(e._events[t])||e.getState().drag_id))&&(n=e.config.update_render,e.config.update_render=!0),o.apply(e,arguments),i&&a&&(e.config.update_render=n)}},collision:function(e){var t,a
function n(a){e._get_section_view()&&a&&(t=e.getEvent(a)[e._get_section_property()])}e.config.collision_limit=1,e.attachEvent("onBeforeDrag",(function(e){return n(e),!0})),e.attachEvent("onBeforeLightbox",(function(t){var i=e.getEvent(t)
return a=[i.start_date,i.end_date],n(t),!0})),e.attachEvent("onEventChanged",(function(t){if(!t||!e.getEvent(t))return!0
var n=e.getEvent(t)
if(!e.checkCollision(n)){if(!a)return!1
n.start_date=a[0],n.end_date=a[1],n._timed=this.isOneDayEvent(n)}return!0})),e.attachEvent("onBeforeEventChanged",(function(t,a,n){return e.checkCollision(t)})),e.attachEvent("onEventAdded",(function(t,a){e.checkCollision(a)||e.deleteEvent(t)})),e.attachEvent("onEventSave",(function(t,a,n){if((a=e._lame_clone(a)).id=t,!a.start_date||!a.end_date){var i=e.getEvent(t)
a.start_date=new Date(i.start_date),a.end_date=new Date(i.end_date)}return a.rec_type&&e._roll_back_dates(a),e.checkCollision(a)})),e._check_sections_collision=function(t,a){var n=e._get_section_property()
return t[n]==a[n]&&t.id!=a.id},e.checkCollision=function(a){var n=[],i=e.config.collision_limit
if(a.rec_type)for(var r=e.getRecDates(a),o=0;o<r.length;o++)for(var _=e.getEvents(r[o].start_date,r[o].end_date),s=0;s<_.length;s++)(_[s].event_pid||_[s].id)!=a.id&&n.push(_[s])
else{n=e.getEvents(a.start_date,a.end_date)
for(var d=0;d<n.length;d++){var l=n[d]
if(l.id==a.id||l.event_length&&[l.event_pid,l.event_length].join("#")==a.id){n.splice(d,1)
break}}}var c=e._get_section_view(),h=e._get_section_property(),u=!0
if(c){var f=0
for(d=0;d<n.length;d++)n[d].id!=a.id&&this._check_sections_collision(n[d],a)&&f++
f>=i&&(u=!1)}else n.length>=i&&(u=!1)
if(!u){var p=!e.callEvent("onEventCollision",[a,n])
return p||(a[h]=t||a[h]),p}return u}},container_autoresize:function(e){e.config.container_autoresize=!0,e.config.month_day_min_height=90,e.config.min_grid_size=25,e.config.min_map_size=400
var t=e._pre_render_events,a=!0,n=0,i=0
e._pre_render_events=function(r,o){if(!e.config.container_autoresize||!a)return t.apply(this,arguments)
var _=this.xy.bar_height,s=this._colsS.heights,d=this._colsS.heights=[0,0,0,0,0,0,0],l=this._els.dhx_cal_data[0]
if(r=this._table_view?this._pre_render_events_table(r,o):this._pre_render_events_line(r,o),this._table_view)if(o)this._colsS.heights=s
else{var c=l.firstChild
if(c.rows){for(var h=0;h<c.rows.length;h++){if(d[h]++,d[h]*_>this._colsS.height-this.xy.month_head_height){var u=c.rows[h].cells,f=this._colsS.height-this.xy.month_head_height
1*this.config.max_month_events!==this.config.max_month_events||d[h]<=this.config.max_month_events?f=d[h]*_:(this.config.max_month_events+1)*_>this._colsS.height-this.xy.month_head_height&&(f=(this.config.max_month_events+1)*_)
for(var p=0;p<u.length;p++)u[p].childNodes[1].style.height=f+"px"
d[h]=(d[h-1]||0)+u[0].offsetHeight}d[h]=(d[h-1]||0)+c.rows[h].cells[0].offsetHeight}d.unshift(0),c.parentNode.offsetHeight<c.parentNode.scrollHeight&&c._h_fix}else if(r.length||"visible"!=this._els.dhx_multi_day[0].style.visibility||(d[0]=-1),r.length||-1==d[0]){var v=(d[0]+1)*_+1
i!=v+1&&(this._obj.style.height=n-i+v-1+"px"),v+="px",l.style.top=this._els.dhx_cal_navline[0].offsetHeight+this._els.dhx_cal_header[0].offsetHeight+parseInt(v,10)+"px",l.style.height=this._obj.offsetHeight-parseInt(l.style.top,10)-(this.xy.margin_top||0)+"px"
var g=this._els.dhx_multi_day[0]
g.style.height=v,g.style.visibility=-1==d[0]?"hidden":"visible",(g=this._els.dhx_multi_day[1]).style.height=v,g.style.visibility=-1==d[0]?"hidden":"visible",g.className=d[0]?"dhx_multi_day_icon":"dhx_multi_day_icon_small",this._dy_shift=(d[0]+1)*_,d[0]=0}}return r}
var r=["dhx_cal_navline","dhx_cal_header","dhx_multi_day","dhx_cal_data"],o=function(t){n=0
for(var a=0;a<r.length;a++){var o=r[a],_=e._els[o]?e._els[o][0]:null,s=0
switch(o){case"dhx_cal_navline":case"dhx_cal_header":s=parseInt(_.style.height,10)
break
case"dhx_multi_day":s=_?_.offsetHeight-1:0,i=s
break
case"dhx_cal_data":var l=e.getState().mode
if(s=_.childNodes[1]&&"month"!=l?_.childNodes[1].offsetHeight:Math.max(_.offsetHeight-1,_.scrollHeight),"month"==l)e.config.month_day_min_height&&!t&&(s=_.getElementsByTagName("tr").length*e.config.month_day_min_height),t&&(_.style.height=s+"px")
else if("year"==l)s=190*e.config.year_y
else if("agenda"==l){if(s=0,_.childNodes&&_.childNodes.length)for(var c=0;c<_.childNodes.length;c++)s+=_.childNodes[c].offsetHeight
s+2<e.config.min_grid_size?s=e.config.min_grid_size:s+=2}else if("week_agenda"==l){for(var h,u,f=e.xy.week_agenda_scale_height+e.config.min_grid_size,p=0;p<_.childNodes.length;p++)for(u=_.childNodes[p],c=0;c<u.childNodes.length;c++){for(var v=0,g=u.childNodes[c].childNodes[1],m=0;m<g.childNodes.length;m++)v+=g.childNodes[m].offsetHeight
h=v+e.xy.week_agenda_scale_height,(h=1!=p||2!=c&&3!=c?h:2*h)>f&&(f=h)}s=3*f}else if("map"==l){s=0
var y=_.querySelectorAll(".dhx_map_line")
for(c=0;c<y.length;c++)s+=y[c].offsetHeight
s+2<e.config.min_map_size?s=e.config.min_map_size:s+=2}else if(e._gridView)if(s=0,_.childNodes[1].childNodes[0].childNodes&&_.childNodes[1].childNodes[0].childNodes.length){for(y=_.childNodes[1].childNodes[0].childNodes[0].childNodes,c=0;c<y.length;c++)s+=y[c].offsetHeight;(s+=2)<e.config.min_grid_size&&(s=e.config.min_grid_size)}else s=e.config.min_grid_size
if(e.matrix&&e.matrix[l]){if(t)s+=0,_.style.height=s+"px"
else{s=0
for(var b=e.matrix[l],x=b.y_unit,w=0;w<x.length;w++)s+=b.getSectionHeight(x[w].key)
e.$container.clientWidth!=e.$container.scrollWidth&&(s+=d())}s-=1}("day"==l||"week"==l||e._props&&e._props[l])&&(s+=2)}n+=s+=1}e._obj.style.height=n+"px",t||e.updateView()}
function _(){a=!1,e.callEvent("onAfterSchedulerResize",[]),a=!0}var s=function(){if(!e.config.container_autoresize||!a)return!0
var t=e.getState().mode
if(!t)return!0
var n=window.requestAnimationFrame||window.setTimeout,i=document.documentElement.scrollTop
n((function(){o()})),e.matrix&&e.matrix[t]||"month"==t?n((function(){o(!0),document.documentElement.scrollTop=i,_()}),1):_()}
function d(){var e=document.createElement("div")
e.style.cssText="visibility:hidden;position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;height:110px;min-height:100px;overflow-y:scroll;",document.body.appendChild(e)
var t=e.offsetWidth-e.clientWidth
return document.body.removeChild(e),t}e.attachEvent("onBeforeViewChange",(function(){var t=e.config.container_autoresize
if(e.xy.$original_scroll_width||(e.xy.$original_scroll_width=e.xy.scroll_width),e.xy.scroll_width=t?0:e.xy.$original_scroll_width,e.matrix)for(var a in e.matrix){var n=e.matrix[a]
n.$original_section_autoheight||(n.$original_section_autoheight=n.section_autoheight),n.section_autoheight=!t&&n.$original_section_autoheight}return!0})),e.attachEvent("onViewChange",s),e.attachEvent("onXLE",s),e.attachEvent("onEventChanged",s),e.attachEvent("onEventCreated",s),e.attachEvent("onEventAdded",s),e.attachEvent("onEventDeleted",s),e.attachEvent("onAfterSchedulerResize",s),e.attachEvent("onClearAll",s),e.attachEvent("onBeforeExpand",(function(){return a=!1,!0})),e.attachEvent("onBeforeCollapse",(function(){return a=!0,!0}))},cookie:function(e){function t(e){return(e._obj.id||"scheduler")+"_settings"}var a=!0
e.attachEvent("onBeforeViewChange",(function(n,i,r,o){if(a&&e._get_url_nav){var _=e._get_url_nav();(_.date||_.mode||_.event)&&(a=!1)}var s=t(e)
if(a){a=!1
var d=function(e){var t=e+"="
if(document.cookie.length>0){var a=document.cookie.indexOf(t)
if(-1!=a){a+=t.length
var n=document.cookie.indexOf(";",a)
return-1==n&&(n=document.cookie.length),document.cookie.substring(a,n)}}return""}(s)
if(d){e._min_date||(e._min_date=o),(d=unescape(d).split("@"))[0]=this._helpers.parseDate(d[0])
var l=this.isViewExists(d[1])?d[1]:r
return o=isNaN(+d[0])?o:d[0],window.setTimeout((function(){e.setCurrentView(o,l)}),1),!1}}return!0})),e.attachEvent("onViewChange",(function(a,n){!function(e,t,a){var n=e+"="+a+"; expires=Sun, 31 Jan 9999 22:00:00 GMT"
document.cookie=n}(t(e),0,escape(this._helpers.formatDate(n)+"@"+a))}))
var n=e._load
e._load=function(){var t=arguments
if(e._date)n.apply(this,t)
else{var a=this
window.setTimeout((function(){n.apply(a,t)}),1)}}},daytimeline:function(e){ye(e)
var t=e.createTimelineView
e.createTimelineView=function(a){if("days"==a.render){var n=a.name,i=a.y_property="timeline-week"+n
a.y_unit=[],a.render="bar",a.days=a.days||7,t.call(this,a),e.templates[n+"_scalex_class"]=function(){},e.templates[n+"_scaley_class"]=function(){},e.templates[n+"_scale_label"]=function(t,a,n){return e.templates.day_date(a)},e.date[n+"_start"]=function(t){return t=e.date.week_start(t),e.date.add(t,a.x_step*a.x_start,a.x_unit)},e.date["add_"+n]=function(t,n){return e.date.add(t,n*a.days,"day")}
var r=e._renderMatrix
e._renderMatrix=function(t,i){t&&function(){var t=new Date(e.getState().date),i=e.date[n+"_start"](t)
i=e.date.date_part(i)
var r=[],o=e.matrix[n]
o.y_unit=r,o.order={}
for(var _=0;_<a.days;_++)r.push({key:+i,label:i}),o.order[o.y_unit[_].key]=_,i=e.date.add(i,1,"day")}(),r.apply(this,arguments)}
var o=e.checkCollision
e.checkCollision=function(t){return t[i]&&delete(t=function(e){var t={}
for(var a in e)t[a]=e[a]
return t}(t))[i],o.apply(e,[t])},e.attachEvent("onBeforeDrag",(function(t,a,n){var i=n.target||n.srcElement,r=e._getClassName(i)
if("resize"==a)r.indexOf("dhx_event_resize_end")<0?e._w_line_drag_from_start=!0:e._w_line_drag_from_start=!1
else if("move"==a&&r.indexOf("no_drag_move")>=0)return!1
return!0}))
var _=e["mouse_"+n]
e["mouse_"+n]=function(t){var a
this._drag_event&&(a=this._drag_event._move_delta)
var i=e.matrix[this._mode]
if(i.scrollable&&!t.converted&&(t.converted=1,t.x-=-i._x_scroll,t.y+=i._y_scroll),void 0===a&&"move"==e._drag_mode){var r={y:t.y}
e._resolve_timeline_section(i,r)
var o=t.x-i.dx,s=new Date(r.section)
m(e._timeline_drag_date(i,o),s)
var d=e._drag_event,l=this.getEvent(this._drag_id)
l&&(d._move_delta=(l.start_date-s)/6e4,this.config.preserve_length&&t._ignores&&(d._move_delta=this._get_real_event_length(l.start_date,s,i),d._event_length=this._get_real_event_length(l.start_date,l.end_date,i)))}if(t=_.apply(e,arguments),e._drag_mode&&"move"!=e._drag_mode){var c=null
c=e._drag_event&&e._drag_event["timeline-week"+n]?new Date(e._drag_event["timeline-week"+n]):new Date(t.section),t.y+=Math.round((c-e.date.date_part(new Date(e._min_date)))/(6e4*this.config.time_step)),"resize"==e._drag_mode&&(t.resize_from_start=e._w_line_drag_from_start)}else if(e._drag_event){var h=Math.floor(Math.abs(t.y/(1440/e.config.time_step)))
h*=t.y>0?1:-1,t.y=t.y%(1440/e.config.time_step)
var u=e.date.date_part(new Date(e._min_date))
u.valueOf()!=new Date(t.section).valueOf()&&(t.x=Math.floor((t.section-u)/864e5),t.x+=h)}return t},e.attachEvent("onEventCreated",(function(t,a){return e._events[t]&&delete e._events[t][i],!0})),e.attachEvent("onBeforeEventChanged",(function(t,a,n,r){return e._events[t.id]&&delete e._events[t.id][i],!0}))
var s=e._update_timeline_section
e._update_timeline_section=function(t){var a,i
this._mode==n&&(a=t.event)&&(i=e._get_copied_event(a.id,e.date.day_start(new Date(a.start_date.valueOf()))))&&(t.event._sorder=i._sorder,t.event._count=i._count),s.apply(this,arguments),a&&i&&(i._count=a._count,i._sorder=a._sorder)}
var d=e.render_view_data
e.render_view_data=function(t,a){return this._mode==n&&t&&(t=f(t),e._restore_render_flags(t)),d.apply(e,[t,a])}
var l=e.get_visible_events
e.get_visible_events=function(){if(this._mode==n){this._clear_copied_events(),e._max_date=e.date.date_part(e.date.add(e._min_date,a.days,"day"))
var t=l.apply(e,arguments)
return t=f(t),e._register_copies_array(t),t}return l.apply(e,arguments)}
var c=e.addEventNow
e.addEventNow=function(t){if(e.getState().mode==n)if(t[i]){var a=new Date(t[i])
u(a,t.start_date),u(a,t.end_date)}else{var r=new Date(t.start_date)
t[i]=+e.date.date_part(r)}return c.apply(e,arguments)}
var h=e._render_marked_timespan
e._render_marked_timespan=function(){if(e._mode!=n)return h.apply(this,arguments)}}else t.apply(this,arguments)
function u(e,t){t.setDate(1),t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(e.getDate())}function f(t){for(var a=[],n=0;n<t.length;n++){var i=v(t[n])
if(e.isOneDayEvent(i))g(i),a.push(i)
else{for(var r=new Date(Math.min(+i.end_date,+e._max_date)),o=new Date(Math.max(+i.start_date,+e._min_date)),_=[];+o<+r;){var s=v(i)
s.start_date=o,s.end_date=new Date(Math.min(+y(s.start_date),+r)),o=y(o),g(s),a.push(s),_.push(s)}p(_,i)}}return a}function p(e,t){for(var a=!1,n=!1,i=0,r=e.length;i<r;i++){var o=e[i]
a=+o._w_start_date==+t.start_date,n=+o._w_end_date==+t.end_date,o._no_resize_start=o._no_resize_end=!0,a&&(o._no_resize_start=!1),n&&(o._no_resize_end=!1)}}function v(t){var a=e.getEvent(t.event_pid)
return a&&a.isPrototypeOf(t)?(delete(t=e._copy_event(t)).event_length,delete t.event_pid,delete t.rec_pattern,delete t.rec_type):t=e._lame_clone(t),t}function g(t){if(!t._w_start_date||!t._w_end_date){var a=e.date,n=t._w_start_date=new Date(t.start_date),r=t._w_end_date=new Date(t.end_date)
t[i]=+a.date_part(t.start_date),t._count||(t._count=1),t._sorder||(t._sorder=0)
var o=r-n
t.start_date=new Date(e._min_date),m(n,t.start_date),t.end_date=new Date(+t.start_date+o),n.getTimezoneOffset()!=r.getTimezoneOffset()&&(t.end_date=new Date(t.end_date.valueOf()+6e4*(n.getTimezoneOffset()-r.getTimezoneOffset())))}}function m(e,t){t.setMinutes(e.getMinutes()),t.setHours(e.getHours())}function y(t){var a=e.date.add(t,1,"day")
return e.date.date_part(a)}}},drag_between:function(e){window.Scheduler&&(window.Scheduler._outer_drag=be),we.push(e),xe||function e(t){t.attachEvent("onSchedulerReady",(function(){!function(e){e.event(document.body,"mousemove",(function(e){var t=be,a=t.target_scheduler
if(a)if(t.from_scheduler)if(a._drag_id);else{var n=t.to_scheduler
n&&!t.drag_from_scheduler(n,e)||t.land_into_scheduler(a,e)}else"move"==a.getState().drag_mode&&a.config.drag_out&&t.start_dnd(a)
else t.from_scheduler&&(t.to_scheduler?t.drag_from_scheduler(t.to_scheduler,e):t.move_dnd_holder(e))
t.target_scheduler=null})),e.event(document.body,"mouseup",(function(e){var t=be,a=t.from_scheduler,n=t.to_scheduler
if(a)if(n&&a==n)a.updateEvent(t.drag_data.target_id)
else if(n&&a!==n){var i=t.drag_data.ev,r=n.getEvent(t.drag_data.target_id)
a.callEvent("onEventDropOut",[i.id,i,n,e])?t.move_permanently(i,r,a,n):t.reset_event(i,a)}else i=t.drag_data.ev,a.callEvent("onEventDropOut",[i.id,i,null,e])&&t.reset_event(i,a)
t.stop_drag(),t.current_scheduler=t.from_scheduler=t.to_scheduler=null}))}(t),xe=!0}),{once:!0}),t.attachEvent("onDestroy",(function(){xe=!1
var t=we.unshift()
t&&e(t)}),{once:!0})}(e),e.config.drag_in=!0,e.config.drag_out=!0,e.templates.event_outside=function(e,t,a){}
var t=be
e.attachEvent("onTemplatesReady",(function(){e.event(e._obj,"mousemove",(function(a){t.target_scheduler=e})),e.event(e._obj,"mouseup",(function(a){t.target_scheduler=e}))}))},editors:function(e){e.form_blocks.combo={render:function(e){return e.cached_options||(e.cached_options={}),"<div class='"+e.type+"' style='height:"+(e.height||20)+"px;' ></div>"},set_value:function(t,a,n,i){!function(){n()
var a=e.attachEvent("onAfterLightbox",(function(){n(),e.detachEvent(a)}))
function n(){if(t._combo&&t._combo.DOMParent){var e=t._combo
e.unload?e.unload():e.destructor&&e.destructor(),e.DOMParent=e.DOMelem=null}}}(),window.dhx_globalImgPath=i.image_path||"/",t._combo=new dhtmlXCombo(t,i.name,t.offsetWidth-8),i.onchange&&t._combo.attachEvent("onChange",i.onchange),i.options_height&&t._combo.setOptionHeight(i.options_height)
var r=t._combo
if(r.enableFilteringMode(i.filtering,i.script_path||null,!!i.cache),i.script_path){var o=n[i.map_to]
o?i.cached_options[o]?(r.addOption(o,i.cached_options[o]),r.disable(1),r.selectOption(0),r.disable(0)):e.ajax.get(i.script_path+"?id="+o+"&uid="+e.uid(),(function(t){var a,n=t.xmlDoc.responseText
try{a=JSON.parse(n).options[0].text}catch(n){a=e.ajax.xpath("//option",t.xmlDoc)[0].childNodes[0].nodeValue}i.cached_options[o]=a,r.addOption(o,a),r.disable(1),r.selectOption(0),r.disable(0)})):r.setComboValue("")}else{for(var _=[],s=0;s<i.options.length;s++){var d=i.options[s],l=[d.key,d.label,d.css]
_.push(l)}if(r.addOption(_),n[i.map_to]){var c=r.getIndexByValue(n[i.map_to])
r.selectOption(c)}}},get_value:function(e,t,a){var n=e._combo.getSelectedValue()
return a.script_path&&(a.cached_options[n]=e._combo.getSelectedText()),n},focus:function(e){}},e.form_blocks.radio={render:function(t){var a=""
a+="<div class='dhx_cal_ltext dhx_cal_radio' style='height:"+t.height+"px;' >"
for(var n=0;n<t.options.length;n++){var i=e.uid()
a+="<input id='"+i+"' type='radio' name='"+t.name+"' value='"+t.options[n].key+"'><label for='"+i+"'> "+t.options[n].label+"</label>",t.vertical&&(a+="<br/>")}return a+"</div>"},set_value:function(e,t,a,n){for(var i=e.getElementsByTagName("input"),r=0;r<i.length;r++){i[r].checked=!1
var o=a[n.map_to]||t
i[r].value==o&&(i[r].checked=!0)}},get_value:function(e,t,a){for(var n=e.getElementsByTagName("input"),i=0;i<n.length;i++)if(n[i].checked)return n[i].value},focus:function(e){}},e.form_blocks.checkbox={render:function(t){return e.config.wide_form?'<div class="dhx_cal_wide_checkbox" '+(t.height?"style='height:"+t.height+"px;'":"")+"></div>":""},set_value:function(t,a,n,i){t=document.getElementById(i.id)
var r=e.uid(),o=void 0!==i.checked_value?a==i.checked_value:!!a
t.className+=" dhx_cal_checkbox"
var _="<input id='"+r+"' type='checkbox' value='true' name='"+i.name+"'"+(o?"checked='true'":"")+"'>",s="<label for='"+r+"'>"+(e.locale.labels["section_"+i.name]||i.name)+"</label>"
e.config.wide_form?(t.innerHTML=s,t.nextSibling.innerHTML=_):t.innerHTML=_+s,i.handler&&(t.getElementsByTagName("input")[0].onclick=i.handler)},get_value:function(e,t,a){var n=(e=document.getElementById(a.id)).getElementsByTagName("input")[0]
return n||(n=e.nextSibling.getElementsByTagName("input")[0]),n.checked?a.checked_value||!0:a.unchecked_value||!1},focus:function(e){}}},expand:function(e){e.ext.fullscreen={toggleIcon:null},e.expand=function(){if(e.callEvent("onBeforeExpand",[])){var t=e._obj
do{t._position=t.style.position||"",t.style.position="static"}while((t=t.parentNode)&&t.style);(t=e._obj).style.position="absolute",t._width=t.style.width,t._height=t.style.height,t.style.width=t.style.height="100%",t.style.top=t.style.left="0px"
var a=document.body
a.scrollTop=0,(a=a.parentNode)&&(a.scrollTop=0),document.body._overflow=document.body.style.overflow||"",document.body.style.overflow="hidden",e._maximize(),e.callEvent("onExpand",[])}},e.collapse=function(){if(e.callEvent("onBeforeCollapse",[])){var t=e._obj
do{t.style.position=t._position}while((t=t.parentNode)&&t.style);(t=e._obj).style.width=t._width,t.style.height=t._height,document.body.style.overflow=document.body._overflow,e._maximize(),e.callEvent("onCollapse",[])}},e.attachEvent("onTemplatesReady",(function(){var t=document.createElement("div")
t.className="dhx_expand_icon",e.ext.fullscreen.toggleIcon=t,e._obj.appendChild(t),t.onclick=function(){e.expanded?e.collapse():e.expand()}})),e._maximize=function(){this.expanded=!this.expanded,e.ext.fullscreen.toggleIcon.style.backgroundPosition="0 "+(this.expanded?"0":"18")+"px"
for(var t=["left","top"],a=0;a<t.length;a++){var n=e["_prev_margin_"+t[a]]
e.xy["margin_"+t[a]]?(e["_prev_margin_"+t[a]]=e.xy["margin_"+t[a]],e.xy["margin_"+t[a]]=0):n&&(e.xy["margin_"+t[a]]=e["_prev_margin_"+t[a]],delete e["_prev_margin_"+t[a]])}e.setCurrentView()}},grid_view:function(e){e._grid={names:{},sort_rules:{int:function(e,t,a){return 1*a(e)<1*a(t)?1:-1},str:function(e,t,a){return a(e)<a(t)?1:-1},date:function(e,t,a){return new Date(a(e))<new Date(a(t))?1:-1}},_getObjName:function(e){return"grid_"+e},_getViewName:function(e){return e.replace(/^grid_/,"")}},e.createGridView=function(t){var a=t.name||"grid",n=e._grid._getObjName(a)
function i(e){return!(void 0!==e&&(1*e!=e||e<0))}e._grid.names[a]=a,e.config[a+"_start"]=t.from||new Date(0),e.config[a+"_end"]=t.to||new Date(9999,1,1),e[n]=t,e[n].defPadding=8,e[n].columns=e[n].fields,e[n].unit=t.unit||"month",e[n].step=t.step||1,delete e[n].fields
for(var r=e[n].columns,o=0;o<r.length;o++)i(r[o].width)&&(r[o].initialWidth=r[o].width),i(r[o].paddingLeft)||delete r[o].paddingLeft,i(r[o].paddingRight)||delete r[o].paddingRight
e[n].select=void 0===t.select||t.select,void 0===e.locale.labels[a+"_tab"]&&(e.locale.labels[a+"_tab"]=e[n].label||e.locale.labels.grid_tab),e[n]._selected_divs=[],e.date[a+"_start"]=function(a){return e.date[t.unit+"_start"]?e.date[t.unit+"_start"](a):a},e.date["add_"+a]=function(t,a){return e.date.add(t,a*e[n].step,e[n].unit)},e.templates[a+"_date"]=function(t,a){return e.config.rtl?e.templates.day_date(a)+" - "+e.templates.day_date(t):e.templates.day_date(t)+" - "+e.templates.day_date(a)},e.templates[a+"_full_date"]=function(t,n,i){return e.isOneDayEvent(i)?this[a+"_single_date"](t):e.config.rtl?e.templates.day_date(n)+" &ndash; "+e.templates.day_date(t):e.templates.day_date(t)+" &ndash; "+e.templates.day_date(n)},e.templates[a+"_single_date"]=function(t){return e.templates.day_date(t)+" "+this.event_date(t)},e.templates[a+"_field"]=function(e,t){return t[e]},e.attachEvent("onTemplatesReady",(function(){e.attachEvent("onEventSelected",(function(t){if(this._mode==a&&e[n].select)return e._grid.selectEvent(t,a),!1})),e.attachEvent("onEventUnselected",(function(t){this._mode==a&&e[n].select&&e._grid.unselectEvent("",a)}))
var t=e.render_data
e.render_data=function(i){if(this._mode!=a)return t.apply(this,arguments)
e._grid._fill_grid_tab(n)}
var i=e.render_view_data
e.render_view_data=function(){var t=e._els.dhx_cal_data[0].lastChild
return this._mode==a&&t&&(e._grid._gridScrollTop=t.scrollTop),i.apply(this,arguments)}})),e[a+"_view"]=function(t){if(e._grid._sort_marker=null,delete e._gridView,e._grid._gridScrollTop=0,e._rendered=[],e[n]._selected_divs=[],t){var i=null,r=null
e[n].paging?(i=e.date[a+"_start"](new Date(e._date)),r=e.date["add_"+a](i,1)):(i=e.config[a+"_start"],r=e.config[a+"_end"]),e._min_date=i,e._max_date=r,e._grid.set_full_view(n)
var o="";+i>+new Date(0)&&+r<+new Date(9999,1,1)&&(o=e.templates[a+"_date"](i,r))
var _=e._getNavDateElement()
_&&(_.innerHTML=o),e._gridView=n}}},e.dblclick_dhx_grid_area=function(){!this.config.readonly&&this.config.dblclick_create&&this.addEventNow()},e._click.dhx_cal_header&&(e._old_header_click=e._click.dhx_cal_header),e._click.dhx_cal_header=function(t){if(e._gridView){var a=t||window.event,n=e._grid._get_target_column(a,e._gridView)
e._grid._toggle_sort_state(e._gridView,n.id),e.clear_view(),e._grid._fill_grid_tab(e._gridView)}else if(e._old_header_click)return e._old_header_click.apply(this,arguments)},e._grid.selectEvent=function(t,a){if(e.callEvent("onBeforeRowSelect",[t])){var n=e._grid._getObjName(a)
e.for_rendered(t,(function(t){t.className+=" dhx_grid_event_selected",e[n]._selected_divs.push(t)}))}},e._grid._unselectDiv=function(e){e.className=e.className.replace(/ dhx_grid_event_selected/,"")},e._grid.unselectEvent=function(t,a){var n=e._grid._getObjName(a)
if(n&&e[n]._selected_divs)if(t){for(i=0;i<e[n]._selected_divs.length;i++)if(e[n]._selected_divs[i].getAttribute(e.config.event_attribute)==t){e._grid._unselectDiv(e[n]._selected_divs[i]),e[n]._selected_divs.slice(i,1)
break}}else{for(var i=0;i<e[n]._selected_divs.length;i++)e._grid._unselectDiv(e[n]._selected_divs[i])
e[n]._selected_divs=[]}},e._grid._get_target_column=function(t,a){var n=t.originalTarget||t.srcElement
"dhx_grid_view_sort"==e._getClassName(n)&&(n=n.parentNode)
for(var i=0,r=0;r<n.parentNode.childNodes.length;r++)if(n.parentNode.childNodes[r]==n){i=r
break}return e[a].columns[i]},e._grid._get_sort_state=function(t){return e[t].sort},e._grid._toggle_sort_state=function(t,a){var n=this._get_sort_state(t),i=e[t]
n&&n.column==a?n.direction="asc"==n.direction?"desc":"asc":i.sort={column:a,direction:"desc"}},e._grid._get_sort_value_for_column=function(e){var t=null
if(e.template){var a=e.template
t=function(e){return a(e.start_date,e.end_date,e)}}else{var n=e.id
"date"==n&&(n="start_date"),t=function(e){return e[n]}}return t},e._grid.draw_sort_marker=function(t,a){if(e._grid._sort_marker&&(e._grid._sort_marker.className=e._grid._sort_marker.className.replace(/( )?dhx_grid_sort_(asc|desc)/,""),e._grid._sort_marker.removeChild(e._grid._sort_marker.lastChild)),a){var n=e._grid._get_column_node(t,a.column)
n.className+=" dhx_grid_sort_"+a.direction,e._grid._sort_marker=n
var i="<div class='dhx_grid_view_sort' style='left:"+(+n.style.width.replace("px","")-15+n.offsetLeft)+"px'>&nbsp;</div>"
n.innerHTML+=i}},e._grid.sort_grid=function(t){t=t||{direction:"desc",value:function(e){return e.start_date},rule:e._grid.sort_rules.date}
var a=e.get_visible_events()
return a.sort((function(e,a){return t.rule(e,a,t.value)})),"asc"==t.direction&&(a=a.reverse()),a},e._grid.set_full_view=function(t){if(t){var a=e._grid._print_grid_header(t)
e._els.dhx_cal_header[0].innerHTML=a,e._table_view=!0,e.set_sizes()}},e._grid._calcPadding=function(t,a){return(void 0!==t.paddingLeft?1*t.paddingLeft:e[a].defPadding)+(void 0!==t.paddingRight?1*t.paddingRight:e[a].defPadding)},e._grid._getStyles=function(e,t){for(var a=[],n="",i=0;t[i];i++)switch(n=t[i]+":",t[i]){case"text-align":e.align&&a.push(n+e.align)
break
case"vertical-align":e.valign&&a.push(n+e.valign)
break
case"padding-left":void 0!==e.paddingLeft&&a.push(n+(e.paddingLeft||"0")+"px")
break
case"padding-right":void 0!==e.paddingRight&&a.push(n+(e.paddingRight||"0")+"px")}return a},e._grid._get_column_node=function(t,a){for(var n=-1,i=0;i<t.length;i++)if(t[i].id==a){n=i
break}return n<0?null:e._obj.querySelectorAll(".dhx_grid_line > div")[n]},e._grid._get_sort_rule=function(t){var a,n=e[t],i=this._get_sort_state(t)
if(i){for(var r,o=0;o<n.columns.length;o++)if(n.columns[o].id==i.column){r=n.columns[o]
break}if(r){var _=e._grid._get_sort_value_for_column(r),s=r.sort
"function"!=typeof s&&(s=e._grid.sort_rules[s]||e._grid.sort_rules.str),a={direction:i.direction,rule:s,value:_}}}return a},e._grid._fill_grid_tab=function(t){var a=e[t],n=this._get_sort_state(t),i=this._get_sort_rule(t)
i&&e._grid.draw_sort_marker(a.columns,n)
for(var r=e._grid.sort_grid(i),o=e[t].columns,_="<div>",s=-2,d=0;d<o.length;d++){var l=e._grid._calcPadding(o[d],t)
s+=o[d].width+l,d<o.length-1&&(_+="<div class='dhx_grid_v_border' style='"+(e.config.rtl?"right":"left")+":"+s+"px'></div>")}for(_+="</div>",_+="<div class='dhx_grid_area'><table "+e._waiAria.gridAttrString()+">",d=0;d<r.length;d++)_+=e._grid._print_event_row(r[d],t)
_+="</table></div>",e._els.dhx_cal_data[0].innerHTML=_,e._els.dhx_cal_data[0].lastChild.scrollTop=e._grid._gridScrollTop||0
var c=e._els.dhx_cal_data[0].getElementsByTagName("tr")
for(e._rendered=[],d=0;d<c.length;d++)e._rendered[d]=c[d]},e._grid._getCellContent=function(t,a){var n=e.getState().mode
return a.template?a.template(t.start_date,t.end_date,t):"date"==a.id?e.templates[n+"_full_date"](t.start_date,t.end_date,t):"start_date"==a.id||"end_date"==a.id?e.templates[n+"_single_date"](t[a.id]):e.templates[n+"_field"](a.id,t)},e._grid._print_event_row=function(t,a){var n=[]
t.color&&n.push("background:"+t.color),t.textColor&&n.push("color:"+t.textColor),t._text_style&&n.push(t._text_style),e[a].rowHeight&&n.push("height:"+e[a].rowHeight+"px")
var i=""
n.length&&(i="style='"+n.join(";")+"'")
for(var r=e[a].columns,o=e.templates.event_class(t.start_date,t.end_date,t),_="<tr "+e._waiAria.gridRowAttrString(t)+" class='dhx_grid_event"+(o?" "+o:"")+"' event_id='"+t.id+"' "+e.config.event_attribute+"='"+t.id+"' "+i+">",s=["text-align","vertical-align","padding-left","padding-right"],d=0;d<r.length;d++){var l=e._grid._getCellContent(t,r[d]),c=e._waiAria.gridCellAttrString(t,r[d],l),h=e._grid._getStyles(r[d],s),u=r[d].css?' class="'+r[d].css+'"':""
_+="<td "+c+" style='width:"+r[d].width+"px;"+h.join(";")+"' "+u+">"+l+"</td>"}return _+"<td class='dhx_grid_dummy'></td></tr>"},e._grid._print_grid_header=function(t){for(var a="<div class='dhx_grid_line'>",n=e[t].columns,i=[],r=n.length,o=e._obj.clientWidth-2*n.length-20,_=0;_<n.length;_++){var s=1*n[_].initialWidth
isNaN(s)||""===n[_].initialWidth||null===n[_].initialWidth||"boolean"==typeof n[_].initialWidth?i[_]=null:(r--,o-=s,i[_]=s)}for(var d=Math.floor(o/r),l=["text-align","padding-left","padding-right"],c=0;c<n.length;c++){var h=i[c]?i[c]:d
n[c].width=h-e._grid._calcPadding(n[c],t)
var u=e._grid._getStyles(n[c],l)
a+="<div style='width:"+(n[c].width-1)+"px;"+u.join(";")+"'>"+(void 0===n[c].label?n[c].id:n[c].label)+"</div>"}return a+"</div>"}},html_templates:function(e){e.attachEvent("onTemplatesReady",(function(){for(var t=document.body.getElementsByTagName("DIV"),a=0;a<t.length;a++){var n=t[a].className||""
if(2==(n=n.split(":")).length&&"template"==n[0]){var i='return "'+(t[a].innerHTML||"").replace(/"/g,'\\"').replace(/[\n\r]+/g,"")+'";'
i=unescape(i).replace(/\{event\.([a-z]+)\}/g,(function(e,t){return'"+ev.'+t+'+"'})),e.templates[n[1]]=Function("start","end","ev",i),t[a].style.display="none"}}}))},key_nav:function(e){function t(t){var a={minicalButton:e.$keyboardNavigation.MinicalButton,minicalDate:e.$keyboardNavigation.MinicalCell,scheduler:e.$keyboardNavigation.SchedulerNode,dataArea:e.$keyboardNavigation.DataArea,timeSlot:e.$keyboardNavigation.TimeSlot,event:e.$keyboardNavigation.Event},n={}
for(var i in a)n[i.toLowerCase()]=a[i]
return n[t=(t+"").toLowerCase()]||a.scheduler}e.config.key_nav=!0,e.config.key_nav_step=30,e.addShortcut=function(e,a,n){var i=t(n)
i&&i.prototype.bind(e,a)},e.getShortcutHandler=function(a,n){var i=t(n)
if(i){var r=e.$keyboardNavigation.shortcuts.parse(a)
if(r.length)return i.prototype.findHandler(r[0])}},e.removeShortcut=function(e,a){var n=t(a)
n&&n.prototype.unbind(e)},e.focus=function(){if(e.config.key_nav){var t=e.$keyboardNavigation.dispatcher
t.enable()
var a=t.getActiveNode()
!a||a instanceof e.$keyboardNavigation.MinicalButton||a instanceof e.$keyboardNavigation.MinicalCell?t.setDefaultNode():t.focusNode(t.getActiveNode())}},e.$keyboardNavigation={},e._compose=function(){for(var e=Array.prototype.slice.call(arguments,0),t={},a=0;a<e.length;a++){var n=e[a]
for(var i in"function"==typeof n&&(n=new n),n)t[i]=n[i]}return t},function(e){e.$keyboardNavigation.shortcuts={createCommand:function(){return{modifiers:{shift:!1,alt:!1,ctrl:!1,meta:!1},keyCode:null}},parse:function(e){for(var t=[],a=this.getExpressions(this.trim(e)),n=0;n<a.length;n++){for(var i=this.getWords(a[n]),r=this.createCommand(),o=0;o<i.length;o++)this.commandKeys[i[o]]?r.modifiers[i[o]]=!0:this.specialKeys[i[o]]?r.keyCode=this.specialKeys[i[o]]:r.keyCode=i[o].charCodeAt(0)
t.push(r)}return t},getCommandFromEvent:function(e){var t=this.createCommand()
t.modifiers.shift=!!e.shiftKey,t.modifiers.alt=!!e.altKey,t.modifiers.ctrl=!!e.ctrlKey,t.modifiers.meta=!!e.metaKey,t.keyCode=e.which||e.keyCode,t.keyCode>=96&&t.keyCode<=105&&(t.keyCode-=48)
var a=String.fromCharCode(t.keyCode)
return a&&(t.keyCode=a.toLowerCase().charCodeAt(0)),t},getHashFromEvent:function(e){return this.getHash(this.getCommandFromEvent(e))},getHash:function(e){var t=[]
for(var a in e.modifiers)e.modifiers[a]&&t.push(a)
return t.push(e.keyCode),t.join(this.junctionChar)},getExpressions:function(e){return e.split(this.junctionChar)},getWords:function(e){return e.split(this.combinationChar)},trim:function(e){return e.replace(/\s/g,"")},junctionChar:",",combinationChar:"+",commandKeys:{shift:16,alt:18,ctrl:17,meta:!0},specialKeys:{backspace:8,tab:9,enter:13,esc:27,space:32,up:38,down:40,left:37,right:39,home:36,end:35,pageup:33,pagedown:34,delete:46,insert:45,plus:107,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123}}}(e),function(e){e.$keyboardNavigation.EventHandler={_handlers:null,findHandler:function(t){this._handlers||(this._handlers={})
var a=e.$keyboardNavigation.shortcuts.getHash(t)
return this._handlers[a]},doAction:function(e,t){var a=this.findHandler(e)
a&&(a.call(this,t),t.preventDefault?t.preventDefault():t.returnValue=!1)},bind:function(t,a){this._handlers||(this._handlers={})
for(var n=e.$keyboardNavigation.shortcuts,i=n.parse(t),r=0;r<i.length;r++)this._handlers[n.getHash(i[r])]=a},unbind:function(t){for(var a=e.$keyboardNavigation.shortcuts,n=a.parse(t),i=0;i<n.length;i++)this._handlers[a.getHash(n[i])]&&delete this._handlers[a.getHash(n[i])]},bindAll:function(e){for(var t in e)this.bind(t,e[t])},initKeys:function(){this._handlers||(this._handlers={}),this.keys&&this.bindAll(this.keys)}}}(e),function(e){e.$keyboardNavigation.getFocusableNodes=e._getFocusableNodes,e.$keyboardNavigation.trapFocus=function(t,a){if(9!=a.keyCode)return!1
for(var n,i=e.$keyboardNavigation.getFocusableNodes(t),r=document.activeElement,o=-1,_=0;_<i.length;_++)if(i[_]==r){o=_
break}if(a.shiftKey){if(n=i[o<=0?i.length-1:o-1])return n.focus(),a.preventDefault(),!0}else if(n=i[o>=i.length-1?0:o+1])return n.focus(),a.preventDefault(),!0
return!1}}(e),function(e){e.$keyboardNavigation.marker={clear:function(){for(var t=e.$container.querySelectorAll(".dhx_focus_slot"),a=0;a<t.length;a++)t[a].parentNode.removeChild(t[a])},createElement:function(){var e=document.createElement("div")
return e.setAttribute("tabindex",-1),e.className="dhx_focus_slot",e},renderMultiple:function(t,a,n){for(var i=[],r=new Date(t),o=new Date(Math.min(a.valueOf(),e.date.add(e.date.day_start(new Date(t)),1,"day").valueOf()));r.valueOf()<a.valueOf();)i=i.concat(n.call(this,r,new Date(Math.min(o.valueOf(),a.valueOf())))),r=e.date.day_start(e.date.add(r,1,"day")),o=e.date.day_start(e.date.add(r,1,"day")),o=new Date(Math.min(o.valueOf(),a.valueOf()))
return i},render:function(t,a,n){this.clear()
var i=[],r=e.$keyboardNavigation.TimeSlot.prototype._modes
switch(e.$keyboardNavigation.TimeSlot.prototype._getMode()){case r.units:i=this.renderVerticalMarker(t,a,n)
break
case r.timeline:i=this.renderTimelineMarker(t,a,n)
break
case r.year:i=i.concat(this.renderMultiple(t,a,this.renderYearMarker))
break
case r.month:i=this.renderMonthMarker(t,a)
break
case r.weekAgenda:i=i.concat(this.renderMultiple(t,a,this.renderWeekAgendaMarker))
break
case r.list:i=this.renderAgendaMarker(t,a)
break
case r.dayColumns:i=i.concat(this.renderMultiple(t,a,this.renderVerticalMarker))}this.addWaiAriaLabel(i,t,a,n),this.addDataAttributes(i,t,a,n)
for(var o=i.length-1;o>=0;o--)if(i[o].offsetWidth)return i[o]
return null},addDataAttributes:function(t,a,n,i){for(var r=e.date.date_to_str(e.config.api_date),o=r(a),_=r(n),s=0;s<t.length;s++)t[s].setAttribute("data-start-date",o),t[s].setAttribute("data-end-date",_),i&&t[s].setAttribute("data-section",i)},addWaiAriaLabel:function(t,a,n,i){var r="",o=e.getState().mode,_=!1
r+=e.templates.day_date(a),e.date.day_start(new Date(a)).valueOf()!=a.valueOf()&&(r+=" "+e.templates.hour_scale(a),_=!0),e.date.day_start(new Date(a)).valueOf()!=e.date.day_start(new Date(n)).valueOf()&&(r+=" - "+e.templates.day_date(n),(_||e.date.day_start(new Date(n)).valueOf()!=n.valueOf())&&(r+=" "+e.templates.hour_scale(n))),i&&(e.matrix&&e.matrix[o]?r+=", "+e.templates[o+"_scale_label"](i.key,i.label,i):e._props&&e._props[o]&&(r+=", "+e.templates[o+"_scale_text"](i.key,i.label,i)))
for(var s=0;s<t.length;s++)e._waiAria.setAttributes(t[s],{"aria-label":r,"aria-live":"polite"})},renderWeekAgendaMarker:function(t,a){for(var n=e.$container.querySelectorAll(".dhx_wa_day_cont .dhx_wa_scale_bar"),i=e.date.week_start(new Date(e.getState().min_date)),r=-1,o=e.date.day_start(new Date(t)),_=0;_<n.length&&(r++,e.date.day_start(new Date(i)).valueOf()!=o.valueOf());_++)i=e.date.add(i,1,"day")
return-1!=r?this._wrapDiv(n[r]):[]},_wrapDiv:function(e){var t=this.createElement()
return t.style.top=e.offsetTop+"px",t.style.left=e.offsetLeft+"px",t.style.width=e.offsetWidth+"px",t.style.height=e.offsetHeight+"px",e.appendChild(t),[t]},renderYearMarker:function(t,a){var n=e._get_year_cell(t)
n.style.position="relative"
var i=this.createElement()
return i.style.top="0px",i.style.left="0px",i.style.width="100%",i.style.height="100%",n.appendChild(i),[i]},renderAgendaMarker:function(t,a){var n=this.createElement()
return n.style.height="1px",n.style.width="100%",n.style.opacity=1,n.style.top="0px",n.style.left="0px",e.$container.querySelector(".dhx_cal_data").appendChild(n),[n]},renderTimelineMarker:function(t,a,n){var i=e._lame_copy({},e.matrix[e._mode]),r=i._scales
i.round_position=!1
var o=[],_=t?new Date(t):e._min_date,s=a?new Date(a):e._max_date
if(_.valueOf()<e._min_date.valueOf()&&(_=new Date(e._min_date)),s.valueOf()>e._max_date.valueOf()&&(s=new Date(e._max_date)),!i._trace_x)return o
for(var d=0;d<i._trace_x.length&&!e._is_column_visible(i._trace_x[d]);d++);if(d==i._trace_x.length)return o
var l=r[n]
if(!(_<a&&s>t))return o
var c=this.createElement(),h=e._timeline_getX({start_date:t},!1,i)-1,u=e._timeline_getX({start_date:a},!1,i)-1,f=i._section_height[n]-1||i.dy-1,p=0
e._isRender("cell")&&(p=l.offsetTop,h+=i.dx,u+=i.dx,l=e.$container.querySelector(".dhx_cal_data"))
var v=Math.max(1,u-h-1)
return c.style.cssText="height: "+f+"px; left: "+h+"px; width: "+v+"px; top: "+p+"px;",l.appendChild(c),o.push(c),o},renderMonthCell:function(t){for(var a=e.$container.querySelectorAll(".dhx_month_head"),n=[],i=0;i<a.length;i++)n.push(a[i].parentNode)
var r=-1,o=0,_=-1,s=e.date.week_start(new Date(e.getState().min_date)),d=e.date.day_start(new Date(t))
for(i=0;i<n.length&&(r++,6==_?(o++,_=0):_++,e.date.day_start(new Date(s)).valueOf()!=d.valueOf());i++)s=e.date.add(s,1,"day")
if(-1==r)return[]
var l=e._colsS[_],c=e._colsS.heights[o],h=this.createElement()
h.style.top=c+"px",h.style.left=l+"px",h.style.width=e._cols[_]+"px",h.style.height=(e._colsS.heights[o+1]-c||e._colsS.height)+"px"
var u=e.$container.querySelector(".dhx_cal_data"),f=u.querySelector("table")
return f.nextSibling?u.insertBefore(h,f.nextSibling):u.appendChild(h),h},renderMonthMarker:function(t,a){for(var n=[],i=t;i.valueOf()<a.valueOf();)n.push(this.renderMonthCell(i)),i=e.date.add(i,1,"day")
return n},renderVerticalMarker:function(t,a,n){var i=e.locate_holder_day(t),r=[],o=null,_=e.config
if(e._ignores[i])return r
if(e._props&&e._props[e._mode]&&n){var s=e._props[e._mode]
i=s.order[n]
var d=s.order[n]
s.days>1?i=e.locate_holder_day(t)+d:(i=d,s.size&&i>s.position+s.size&&(i=0))}if(!(o=e.locate_holder(i))||o.querySelector(".dhx_scale_hour"))return document.createElement("div")
var l=Math.max(60*t.getHours()+t.getMinutes(),60*_.first_hour),c=Math.min(60*a.getHours()+a.getMinutes(),60*_.last_hour)
if(!c&&e.date.day_start(new Date(a)).valueOf()>e.date.day_start(new Date(t)).valueOf()&&(c=60*_.last_hour),c<=l)return[]
var h=this.createElement(),u=e.config.hour_size_px*_.last_hour+1
return h.style.top=Math.round((60*l*1e3-36e5*e.config.first_hour)*e.config.hour_size_px/36e5)%u+"px",h.style.lineHeight=h.style.height=Math.max(Math.round(60*(c-l)*1e3*e.config.hour_size_px/36e5)%u,1)+"px",h.style.width="100%",o.appendChild(h),r.push(h),r[0]}}}(e),function(e){e.$keyboardNavigation.SchedulerNode=function(){},e.$keyboardNavigation.SchedulerNode.prototype=e._compose(e.$keyboardNavigation.EventHandler,{getDefaultNode:function(){var t=new e.$keyboardNavigation.TimeSlot
return t.isValid()||(t=t.fallback()),t},_modes:{month:"month",year:"year",dayColumns:"dayColumns",timeline:"timeline",units:"units",weekAgenda:"weekAgenda",list:"list"},getMode:function(){var t=e.getState().mode
return e.matrix&&e.matrix[t]?this._modes.timeline:e._props&&e._props[t]?this._modes.units:"month"==t?this._modes.month:"year"==t?this._modes.year:"week_agenda"==t?this._modes.weekAgenda:"map"==t||"agenda"==t||e._grid&&e["grid_"+t]?this._modes.list:this._modes.dayColumns},focus:function(){e.focus()},blur:function(){},disable:function(){e.$container.setAttribute("tabindex","0")},enable:function(){e.$container&&e.$container.removeAttribute("tabindex")},isEnabled:function(){return e.$container.hasAttribute("tabindex")},_compareEvents:function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e.id>t.id?1:-1:e.start_date.valueOf()>t.start_date.valueOf()?1:-1},_pickEvent:function(t,a,n,i){var r=e.getState()
t=new Date(Math.max(r.min_date.valueOf(),t.valueOf())),a=new Date(Math.min(r.max_date.valueOf(),a.valueOf()))
var o=e.getEvents(t,a)
o.sort(this._compareEvents),i&&(o=o.reverse())
for(var _=!!n,s=0;s<o.length&&_;s++)o[s].id==n&&(_=!1),o.splice(s,1),s--
for(s=0;s<o.length;s++)if(new e.$keyboardNavigation.Event(o[s].id).getNode())return o[s]
return null},nextEventHandler:function(t){var a=e.$keyboardNavigation.dispatcher.activeNode,n=t||a&&a.eventId,i=null
if(n&&e.getEvent(n)){var r=e.getEvent(n)
i=e.$keyboardNavigation.SchedulerNode.prototype._pickEvent(r.start_date,e.date.add(r.start_date,1,"year"),r.id,!1)}if(!i&&!t){var o=e.getState()
i=e.$keyboardNavigation.SchedulerNode.prototype._pickEvent(o.min_date,e.date.add(o.min_date,1,"year"),null,!1)}if(i){var _=new e.$keyboardNavigation.Event(i.id)
_.isValid()?(a&&a.blur(),e.$keyboardNavigation.dispatcher.setActiveNode(_)):this.nextEventHandler(i.id)}},prevEventHandler:function(t){var a=e.$keyboardNavigation.dispatcher.activeNode,n=t||a&&a.eventId,i=null
if(n&&e.getEvent(n)){var r=e.getEvent(n)
i=e.$keyboardNavigation.SchedulerNode.prototype._pickEvent(e.date.add(r.end_date,-1,"year"),r.end_date,r.id,!0)}if(!i&&!t){var o=e.getState()
i=e.$keyboardNavigation.SchedulerNode.prototype._pickEvent(e.date.add(o.max_date,-1,"year"),o.max_date,null,!0)}if(i){var _=new e.$keyboardNavigation.Event(i.id)
_.isValid()?(a&&a.blur(),e.$keyboardNavigation.dispatcher.setActiveNode(_)):this.prevEventHandler(i.id)}},keys:{"alt+1, alt+2, alt+3, alt+4, alt+5, alt+6, alt+7, alt+8, alt+9":function(t){var a=e.$keyboardNavigation.HeaderCell.prototype.getNodes(".dhx_cal_navline .dhx_cal_tab"),n=t.key
void 0===n&&(n=t.keyCode-48),a[1*n-1]&&a[1*n-1].click()},"ctrl+left,meta+left":function(t){e._click.dhx_cal_prev_button()},"ctrl+right,meta+right":function(t){e._click.dhx_cal_next_button()},"ctrl+up,meta+up":function(t){e.$container.querySelector(".dhx_cal_data").scrollTop-=20},"ctrl+down,meta+down":function(t){e.$container.querySelector(".dhx_cal_data").scrollTop+=20},e:function(){this.nextEventHandler()},home:function(){e.setCurrentView(new Date)},"shift+e":function(){this.prevEventHandler()},"ctrl+enter,meta+enter":function(){e.addEventNow({start_date:new Date(e.getState().date)})},"ctrl+c,meta+c":function(t){e._key_nav_copy_paste(t)},"ctrl+v,meta+v":function(t){e._key_nav_copy_paste(t)},"ctrl+x,meta+x":function(t){e._key_nav_copy_paste(t)}}}),e.$keyboardNavigation.SchedulerNode.prototype.bindAll(e.$keyboardNavigation.SchedulerNode.prototype.keys)}(e),function(e){e.$keyboardNavigation.KeyNavNode=function(){},e.$keyboardNavigation.KeyNavNode.prototype=e._compose(e.$keyboardNavigation.EventHandler,{isValid:function(){return!0},fallback:function(){return null},moveTo:function(t){e.$keyboardNavigation.dispatcher.setActiveNode(t)},compareTo:function(e){if(!e)return!1
for(var t in this){if(!!this[t]!=!!e[t])return!1
var a=!(!this[t]||!this[t].toString),n=!(!e[t]||!e[t].toString)
if(n!=a)return!1
if(n&&a){if(e[t].toString()!=this[t].toString())return!1}else if(e[t]!=this[t])return!1}return!0},getNode:function(){},focus:function(){var e=this.getNode()
e&&(e.setAttribute("tabindex","-1"),e.focus&&e.focus())},blur:function(){var e=this.getNode()
e&&e.setAttribute("tabindex","-1")}})}(e),function(e){e.$keyboardNavigation.HeaderCell=function(e){this.index=e||0},e.$keyboardNavigation.HeaderCell.prototype=e._compose(e.$keyboardNavigation.KeyNavNode,{getNode:function(e){e=e||this.index||0
var t=this.getNodes()
if(t[e])return t[e]},getNodes:function(t){t=t||[".dhx_cal_navline .dhx_cal_prev_button",".dhx_cal_navline .dhx_cal_next_button",".dhx_cal_navline .dhx_cal_today_button",".dhx_cal_navline .dhx_cal_tab"].join(", ")
var a=Array.prototype.slice.call(e.$container.querySelectorAll(t))
return a.sort((function(e,t){return e.offsetLeft-t.offsetLeft})),a},_handlers:null,isValid:function(){return!!this.getNode(this.index)},fallback:function(){var t=this.getNode(0)
return t||(t=new e.$keyboardNavigation.TimeSlot),t},keys:{left:function(){var t=this.index-1
t<0&&(t=this.getNodes().length-1),this.moveTo(new e.$keyboardNavigation.HeaderCell(t))},right:function(){var t=this.index+1
t>=this.getNodes().length&&(t=0),this.moveTo(new e.$keyboardNavigation.HeaderCell(t))},down:function(){this.moveTo(new e.$keyboardNavigation.TimeSlot)},enter:function(){var e=this.getNode()
e&&e.click()}}}),e.$keyboardNavigation.HeaderCell.prototype.bindAll(e.$keyboardNavigation.HeaderCell.prototype.keys)}(e),function(e){e.$keyboardNavigation.Event=function(t){if(this.eventId=null,e.getEvent(t)){var a=e.getEvent(t)
this.start=new Date(a.start_date),this.end=new Date(a.end_date),this.section=this._getSection(a),this.eventId=t}},e.$keyboardNavigation.Event.prototype=e._compose(e.$keyboardNavigation.KeyNavNode,{_getNodes:function(){return Array.prototype.slice.call(e.$container.querySelectorAll("["+e.config.event_attribute+"]"))},_modes:e.$keyboardNavigation.SchedulerNode.prototype._modes,getMode:e.$keyboardNavigation.SchedulerNode.prototype.getMode,_handlers:null,isValid:function(){return!(!e.getEvent(this.eventId)||!this.getNode())},fallback:function(){var t=this._getNodes()[0],a=null
if(t&&e._locate_event(t)){var n=e._locate_event(t)
a=new e.$keyboardNavigation.Event(n)}else a=new e.$keyboardNavigation.TimeSlot
return a},isScrolledIntoView:function(t){var a=t.getBoundingClientRect(),n=e.$container.querySelector(".dhx_cal_data").getBoundingClientRect()
return!(a.bottom<n.top||a.top>n.bottom)},getNode:function(){var t="["+e.config.event_attribute+"='"+this.eventId+"']",a=e.$keyboardNavigation.dispatcher.getInlineEditor(this.eventId)
if(a)return a
if(e.isMultisectionEvent&&e.isMultisectionEvent(e.getEvent(this.eventId))){for(var n=e.$container.querySelectorAll(t),i=0;i<n.length;i++)if(this.isScrolledIntoView(n[i]))return n[i]
return n[0]}return e.$container.querySelector(t)},focus:function(){var t=e.getEvent(this.eventId),a=e.getState();(t.start_date.valueOf()>a.max_date.valueOf()||t.end_date.valueOf()<=a.min_date.valueOf())&&e.setCurrentView(t.start_date)
var n=this.getNode()
this.isScrolledIntoView(n)?e.$keyboardNavigation.dispatcher.keepScrollPosition(function(){e.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this)}.bind(this)):e.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this)},blur:function(){e.$keyboardNavigation.KeyNavNode.prototype.blur.apply(this)},_getSection:function(t){var a=null,n=e.getState().mode
return e.matrix&&e.matrix[n]?a=t[e.matrix[e.getState().mode].y_property]:e._props&&e._props[n]&&(a=t[e._props[n].map_to]),a},_moveToSlot:function(t){var a=e.getEvent(this.eventId)
if(a){var n=this._getSection(a),i=new e.$keyboardNavigation.TimeSlot(a.start_date,null,n)
this.moveTo(i.nextSlot(i,t))}else this.moveTo(new e.$keyboardNavigation.TimeSlot)},keys:{left:function(){this._moveToSlot("left")},right:function(){this._moveToSlot("right")},down:function(){this.getMode()==this._modes.list?e.$keyboardNavigation.SchedulerNode.prototype.nextEventHandler():this._moveToSlot("down")},space:function(){var t=this.getNode()
t&&t.click?t.click():this.moveTo(new e.$keyboardNavigation.TimeSlot)},up:function(){this.getMode()==this._modes.list?e.$keyboardNavigation.SchedulerNode.prototype.prevEventHandler():this._moveToSlot("up")},delete:function(){e.getEvent(this.eventId)?e._click.buttons.delete(this.eventId):this.moveTo(new e.$keyboardNavigation.TimeSlot)},enter:function(){e.getEvent(this.eventId)?e.showLightbox(this.eventId):this.moveTo(new e.$keyboardNavigation.TimeSlot)}}}),e.$keyboardNavigation.Event.prototype.bindAll(e.$keyboardNavigation.Event.prototype.keys)}(e),function(e){e.$keyboardNavigation.TimeSlot=function(t,a,n,i){var r=e.getState(),o=e.matrix&&e.matrix[r.mode]
t||(t=this.getDefaultDate()),a||(a=o?e.date.add(t,o.x_step,o.x_unit):e.date.add(t,e.config.key_nav_step,"minute")),this.section=n||this._getDefaultSection(),this.start_date=new Date(t),this.end_date=new Date(a),this.movingDate=i||null},e.$keyboardNavigation.TimeSlot.prototype=e._compose(e.$keyboardNavigation.KeyNavNode,{_handlers:null,getDefaultDate:function(){var t,a=e.getState(),n=new Date(a.date)
n.setSeconds(0),n.setMilliseconds(0)
var i=new Date
i.setSeconds(0),i.setMilliseconds(0)
var r=e.matrix&&e.matrix[a.mode],o=!1
if(n.valueOf()===i.valueOf()&&(o=!0),r)o?("day"===r.x_unit?(i.setHours(0),i.setMinutes(0)):"hour"===r.x_unit&&i.setMinutes(0),t=i):t=e.date[r.name+"_start"](new Date(a.date)),t=this.findVisibleColumn(t)
else if(t=new Date(e.getState().min_date),o&&(t=i),t=this.findVisibleColumn(t),o||t.setHours(e.config.first_hour),!e._table_view){var _=e.$container.querySelector(".dhx_cal_data")
_.scrollTop&&t.setHours(e.config.first_hour+Math.ceil(_.scrollTop/e.config.hour_size_px))}return t},clone:function(t){return new e.$keyboardNavigation.TimeSlot(t.start_date,t.end_date,t.section,t.movingDate)},_getMultisectionView:function(){var t,a=e.getState()
return e._props&&e._props[a.mode]?t=e._props[a.mode]:e.matrix&&e.matrix[a.mode]&&(t=e.matrix[a.mode]),t},_getDefaultSection:function(){var e=null
return this._getMultisectionView()&&!e&&(e=this._getNextSection()),e},_getNextSection:function(e,t){var a=this._getMultisectionView(),n=a.order[e],i=n
i=(i=void 0!==n?n+t:a.size&&a.position?a.position:0)<0?i=(a.options||a.y_unit).length-1:i
var r=a.options||a.y_unit
return r[i]?r[i].key:null},isValid:function(){var t=e.getState()
if(this.start_date.valueOf()<t.min_date.valueOf()||this.start_date.valueOf()>=t.max_date.valueOf())return!1
if(!this.isVisible(this.start_date,this.end_date))return!1
var a=this._getMultisectionView()
return!a||void 0!==a.order[this.section]},fallback:function(){var t=new e.$keyboardNavigation.TimeSlot
return t.isValid()?t:new e.$keyboardNavigation.DataArea},getNodes:function(){return Array.prototype.slice.call(e.$container.querySelectorAll(".dhx_focus_slot"))},getNode:function(){return this.getNodes()[0]},focus:function(){e.$keyboardNavigation.marker.render(this.start_date,this.end_date,this.section),e.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this),e.$keyboardNavigation._pasteDate=this.start_date,e.$keyboardNavigation._pasteSection=this.section},blur:function(){e.$keyboardNavigation.KeyNavNode.prototype.blur.apply(this),e.$keyboardNavigation.marker.clear()},_modes:e.$keyboardNavigation.SchedulerNode.prototype._modes,_getMode:e.$keyboardNavigation.SchedulerNode.prototype.getMode,addMonthDate:function(t,a,n){var i
switch(a){case"up":i=e.date.add(t,-1,"week")
break
case"down":i=e.date.add(t,1,"week")
break
case"left":i=e.date.day_start(e.date.add(t,-1,"day")),i=this.findVisibleColumn(i,-1)
break
case"right":i=e.date.day_start(e.date.add(t,1,"day")),i=this.findVisibleColumn(i,1)
break
default:i=e.date.day_start(new Date(t))}var r=e.getState()
return(t.valueOf()<r.min_date.valueOf()||!n&&t.valueOf()>=r.max_date.valueOf())&&(i=new Date(r.min_date)),i},nextMonthSlot:function(t,a,n){var i,r
return(i=this.addMonthDate(t.start_date,a,n)).setHours(e.config.first_hour),(r=new Date(i)).setHours(e.config.last_hour),{start_date:i,end_date:r}},_alignTimeSlot:function(t,a,n,i){for(var r=new Date(a);r.valueOf()<t.valueOf();)r=e.date.add(r,i,n)
return r.valueOf()>t.valueOf()&&(r=e.date.add(r,-i,n)),r},nextTimelineSlot:function(t,a,n){var i=e.getState(),r=e.matrix[i.mode],o=this._alignTimeSlot(t.start_date,e.date[r.name+"_start"](new Date(t.start_date)),r.x_unit,r.x_step),_=this._alignTimeSlot(t.end_date,e.date[r.name+"_start"](new Date(t.end_date)),r.x_unit,r.x_step)
_.valueOf()<=o.valueOf()&&(_=e.date.add(o,r.x_step,r.x_unit))
var s=this.clone(t)
switch(s.start_date=o,s.end_date=_,s.section=t.section||this._getNextSection(),a){case"up":s.section=this._getNextSection(t.section,-1)
break
case"down":s.section=this._getNextSection(t.section,1)
break
case"left":s.start_date=this.findVisibleColumn(e.date.add(s.start_date,-r.x_step,r.x_unit),-1),s.end_date=e.date.add(s.start_date,r.x_step,r.x_unit)
break
case"right":s.start_date=this.findVisibleColumn(e.date.add(s.start_date,r.x_step,r.x_unit),1),s.end_date=e.date.add(s.start_date,r.x_step,r.x_unit)}return(s.start_date.valueOf()<i.min_date.valueOf()||s.start_date.valueOf()>=i.max_date.valueOf())&&(n&&s.start_date.valueOf()>=i.max_date.valueOf()?s.start_date=new Date(i.max_date):(s.start_date=e.date[i.mode+"_start"](e.date.add(i.date,"left"==a?-1:1,i.mode)),s.end_date=e.date.add(s.start_date,r.x_step,r.x_unit))),s},nextUnitsSlot:function(t,a,n){var i=this.clone(t)
i.section=t.section||this._getNextSection()
var r=t.section||this._getNextSection(),o=e.getState(),_=e._props[o.mode]
switch(a){case"left":r=this._getNextSection(t.section,-1)
var s=_.size?_.size-1:_.options.length
_.days>1&&_.order[r]==s-1&&e.date.add(t.start_date,-1,"day").valueOf()>=o.min_date.valueOf()&&(i=this.nextDaySlot(t,a,n))
break
case"right":r=this._getNextSection(t.section,1),_.days>1&&!_.order[r]&&e.date.add(t.start_date,1,"day").valueOf()<o.max_date.valueOf()&&(i=this.nextDaySlot(t,a,n))
break
default:i=this.nextDaySlot(t,a,n),r=t.section}return i.section=r,i},_moveDate:function(t,a){var n=this.findVisibleColumn(e.date.add(t,a,"day"),a)
return n.setHours(t.getHours()),n.setMinutes(t.getMinutes()),n},isBeforeLastHour:function(t,a){var n=t.getMinutes(),i=t.getHours(),r=e.config.last_hour
return i<r||!a&&(24==r||i==r)&&!n},isAfterFirstHour:function(t,a){var n=t.getMinutes(),i=t.getHours(),r=e.config.first_hour,o=e.config.last_hour
return i>=r||!a&&!n&&(!i&&24==o||i==o)},isInVisibleDayTime:function(e,t){return this.isBeforeLastHour(e,t)&&this.isAfterFirstHour(e,t)},nextDaySlot:function(t,a,n){var i,r,o=e.config.key_nav_step,_=this._alignTimeSlot(t.start_date,e.date.day_start(new Date(t.start_date)),"minute",o),s=t.start_date
switch(a){case"up":if(i=e.date.add(_,-o,"minute"),!this.isInVisibleDayTime(i,!0)&&(!n||this.isInVisibleDayTime(s,!0))){var d=!0
n&&e.date.date_part(new Date(i)).valueOf()!=e.date.date_part(new Date(s)).valueOf()&&(d=!1),d&&(i=this.findVisibleColumn(e.date.add(t.start_date,-1,"day"),-1)),i.setHours(e.config.last_hour),i.setMinutes(0),i=e.date.add(i,-o,"minute")}r=e.date.add(i,o,"minute")
break
case"down":i=e.date.add(_,o,"minute")
var l=n?i:e.date.add(i,o,"minute")
this.isInVisibleDayTime(l,!1)||n&&!this.isInVisibleDayTime(s,!1)||(n?(d=!0,e.date.date_part(new Date(s)).valueOf()==s.valueOf()&&(d=!1),d&&(i=this.findVisibleColumn(e.date.add(t.start_date,1,"day"),1)),i.setHours(e.config.first_hour),i.setMinutes(0),i=e.date.add(i,o,"minute")):((i=this.findVisibleColumn(e.date.add(t.start_date,1,"day"),1)).setHours(e.config.first_hour),i.setMinutes(0))),r=e.date.add(i,o,"minute")
break
case"left":i=this._moveDate(t.start_date,-1),r=this._moveDate(t.end_date,-1)
break
case"right":i=this._moveDate(t.start_date,1),r=this._moveDate(t.end_date,1)
break
default:i=_,r=e.date.add(i,o,"minute")}return{start_date:i,end_date:r}},nextWeekAgendaSlot:function(t,a){var n,i,r=e.getState()
switch(a){case"down":case"left":n=e.date.day_start(e.date.add(t.start_date,-1,"day")),n=this.findVisibleColumn(n,-1)
break
case"up":case"right":n=e.date.day_start(e.date.add(t.start_date,1,"day")),n=this.findVisibleColumn(n,1)
break
default:n=e.date.day_start(t.start_date)}return(t.start_date.valueOf()<r.min_date.valueOf()||t.start_date.valueOf()>=r.max_date.valueOf())&&(n=new Date(r.min_date)),(i=new Date(n)).setHours(e.config.last_hour),{start_date:n,end_date:i}},nextAgendaSlot:function(e,t){return{start_date:e.start_date,end_date:e.end_date}},isDateVisible:function(t){if(!e._ignores_detected)return!0
var a,n=e.matrix&&e.matrix[e.getState().mode]
return a=n?e._get_date_index(n,t):e.locate_holder_day(t),!e._ignores[a]},findVisibleColumn:function(t,a){var n=t
a=a||1
for(var i=e.getState();!this.isDateVisible(n)&&(a>0&&n.valueOf()<=i.max_date.valueOf()||a<0&&n.valueOf()>=i.min_date.valueOf());)n=this.nextDateColumn(n,a)
return n},nextDateColumn:function(t,a){a=a||1
var n=e.matrix&&e.matrix[e.getState().mode]
return n?e.date.add(t,a*n.x_step,n.x_unit):e.date.day_start(e.date.add(t,a,"day"))},isVisible:function(t,a){if(!e._ignores_detected)return!0
for(var n=new Date(t);n.valueOf()<a.valueOf();){if(this.isDateVisible(n))return!0
n=this.nextDateColumn(n)}return!1},nextSlot:function(t,a,n,i){var r
n=n||this._getMode()
var o=e.$keyboardNavigation.TimeSlot.prototype.clone(t)
switch(n){case this._modes.units:r=this.nextUnitsSlot(o,a,i)
break
case this._modes.timeline:r=this.nextTimelineSlot(o,a,i)
break
case this._modes.year:case this._modes.month:r=this.nextMonthSlot(o,a,i)
break
case this._modes.weekAgenda:r=this.nextWeekAgendaSlot(o,a,i)
break
case this._modes.list:r=this.nextAgendaSlot(o,a,i)
break
case this._modes.dayColumns:r=this.nextDaySlot(o,a,i)}return r.start_date.valueOf()>=r.end_date.valueOf()&&(r=this.nextSlot(r,a,n)),e.$keyboardNavigation.TimeSlot.prototype.clone(r)},extendSlot:function(t,a){var n
switch(this._getMode()){case this._modes.units:n="left"==a||"right"==a?this.nextUnitsSlot(t,a):this.extendUnitsSlot(t,a)
break
case this._modes.timeline:n="down"==a||"up"==a?this.nextTimelineSlot(t,a):this.extendTimelineSlot(t,a)
break
case this._modes.year:case this._modes.month:n=this.extendMonthSlot(t,a)
break
case this._modes.dayColumns:n=this.extendDaySlot(t,a)
break
case this._modes.weekAgenda:n=this.extendWeekAgendaSlot(t,a)
break
default:n=t}var i=e.getState()
return n.start_date.valueOf()<i.min_date.valueOf()&&(n.start_date=this.findVisibleColumn(i.min_date),n.start_date.setHours(e.config.first_hour)),n.end_date.valueOf()>i.max_date.valueOf()&&(n.end_date=this.findVisibleColumn(i.max_date,-1)),e.$keyboardNavigation.TimeSlot.prototype.clone(n)},extendTimelineSlot:function(e,t){return this.extendGenericSlot({left:"start_date",right:"end_date"},e,t,"timeline")},extendWeekAgendaSlot:function(e,t){return this.extendGenericSlot({left:"start_date",right:"end_date"},e,t,"weekAgenda")},extendGenericSlot:function(t,a,n,i){var r,o=a.movingDate
if(o||(o=t[n]),!o||!t[n])return a
if(!n)return e.$keyboardNavigation.TimeSlot.prototype.clone(a);(r=this.nextSlot({start_date:a[o],section:a.section},n,i,!0)).start_date.valueOf()==a.start_date.valueOf()&&(r=this.nextSlot({start_date:r.start_date,section:r.section},n,i,!0)),r.movingDate=o
var _=this.extendSlotDates(a,r,r.movingDate)
return _.end_date.valueOf()<=_.start_date.valueOf()&&(r.movingDate="end_date"==r.movingDate?"start_date":"end_date"),_=this.extendSlotDates(a,r,r.movingDate),r.start_date=_.start_date,r.end_date=_.end_date,r},extendSlotDates:function(e,t,a){var n={start_date:null,end_date:null}
return"start_date"==a?(n.start_date=t.start_date,n.end_date=e.end_date):(n.start_date=e.start_date,n.end_date=t.start_date),n},extendMonthSlot:function(t,a){return(t=this.extendGenericSlot({up:"start_date",down:"end_date",left:"start_date",right:"end_date"},t,a,"month")).start_date.setHours(e.config.first_hour),t.end_date=e.date.add(t.end_date,-1,"day"),t.end_date.setHours(e.config.last_hour),t},extendUnitsSlot:function(e,t){var a
switch(t){case"down":case"up":a=this.extendDaySlot(e,t)
break
default:a=e}return a.section=e.section,a},extendDaySlot:function(e,t){return this.extendGenericSlot({up:"start_date",down:"end_date",left:"start_date",right:"end_date"},e,t,"dayColumns")},scrollSlot:function(t){var a=e.getState(),n=this.nextSlot(this,t);(n.start_date.valueOf()<a.min_date.valueOf()||n.start_date.valueOf()>=a.max_date.valueOf())&&e.setCurrentView(new Date(n.start_date)),this.moveTo(n)},keys:{left:function(){this.scrollSlot("left")},right:function(){this.scrollSlot("right")},down:function(){this._getMode()==this._modes.list?e.$keyboardNavigation.SchedulerNode.prototype.nextEventHandler():this.scrollSlot("down")},up:function(){this._getMode()==this._modes.list?e.$keyboardNavigation.SchedulerNode.prototype.prevEventHandler():this.scrollSlot("up")},"shift+down":function(){this.moveTo(this.extendSlot(this,"down"))},"shift+up":function(){this.moveTo(this.extendSlot(this,"up"))},"shift+right":function(){this.moveTo(this.extendSlot(this,"right"))},"shift+left":function(){this.moveTo(this.extendSlot(this,"left"))},enter:function(){var t={start_date:new Date(this.start_date),end_date:new Date(this.end_date)},a=e.getState().mode
e.matrix&&e.matrix[a]?t[e.matrix[e.getState().mode].y_property]=this.section:e._props&&e._props[a]&&(t[e._props[a].map_to]=this.section),e.addEventNow(t)}}}),e.$keyboardNavigation.TimeSlot.prototype.bindAll(e.$keyboardNavigation.TimeSlot.prototype.keys)}(e),function(e){e.$keyboardNavigation.MinicalButton=function(e,t){this.container=e,this.index=t||0},e.$keyboardNavigation.MinicalButton.prototype=e._compose(e.$keyboardNavigation.KeyNavNode,{isValid:function(){return!!this.container.offsetWidth},fallback:function(){var t=new e.$keyboardNavigation.TimeSlot
return t.isValid()?t:new e.$keyboardNavigation.DataArea},focus:function(){e.$keyboardNavigation.dispatcher.globalNode.disable(),this.container.removeAttribute("tabindex"),e.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this)},blur:function(){this.container.setAttribute("tabindex","0"),e.$keyboardNavigation.KeyNavNode.prototype.blur.apply(this)},getNode:function(){return this.index?this.container.querySelector(".dhx_cal_next_button"):this.container.querySelector(".dhx_cal_prev_button")},keys:{right:function(t){this.moveTo(new e.$keyboardNavigation.MinicalButton(this.container,this.index?0:1))},left:function(t){this.moveTo(new e.$keyboardNavigation.MinicalButton(this.container,this.index?0:1))},down:function(){var t=new e.$keyboardNavigation.MinicalCell(this.container,0,0)
t&&!t.isValid()&&(t=t.fallback()),this.moveTo(t)},enter:function(e){this.getNode().click()}}}),e.$keyboardNavigation.MinicalButton.prototype.bindAll(e.$keyboardNavigation.MinicalButton.prototype.keys)}(e),function(e){e.$keyboardNavigation.MinicalCell=function(e,t,a){this.container=e,this.row=t||0,this.col=a||0},e.$keyboardNavigation.MinicalCell.prototype=e._compose(e.$keyboardNavigation.KeyNavNode,{isValid:function(){var e=this._getGrid()
return!(!e[this.row]||!e[this.row][this.col])},fallback:function(){var t=this.row,a=this.col,n=this._getGrid()
n[t]||(t=0)
var i=!0
if(t>n.length/2&&(i=!1),!n[t]){var r=new e.$keyboardNavigation.TimeSlot
return r.isValid()?r:new e.$keyboardNavigation.DataArea}if(i){for(var o=a;n[t]&&o<n[t].length;o++)if(n[t][o]||o!=n[t].length-1||(t++,a=0),n[t][o])return new e.$keyboardNavigation.MinicalCell(this.container,t,o)}else for(o=a;n[t]&&o<n[t].length;o--)if(n[t][o]||o||(a=n[--t].length-1),n[t][o])return new e.$keyboardNavigation.MinicalCell(this.container,t,o)
return new e.$keyboardNavigation.MinicalButton(this.container,0)},focus:function(){e.$keyboardNavigation.dispatcher.globalNode.disable(),this.container.removeAttribute("tabindex"),e.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this)},blur:function(){this.container.setAttribute("tabindex","0"),e.$keyboardNavigation.KeyNavNode.prototype.blur.apply(this)},_getNode:function(e,t){return this.container.querySelector(".dhx_year_body tr:nth-child("+(e+1)+") td:nth-child("+(t+1)+")")},getNode:function(){return this._getNode(this.row,this.col)},_getGrid:function(){for(var t=this.container.querySelectorAll(".dhx_year_body tr"),a=[],n=0;n<t.length;n++){a[n]=[]
for(var i=t[n].querySelectorAll("td"),r=0;r<i.length;r++){var o=i[r],_=!0,s=e._getClassName(o);(s.indexOf("dhx_after")>-1||s.indexOf("dhx_before")>-1||s.indexOf("dhx_scale_ignore")>-1)&&(_=!1),a[n][r]=_}}return a},keys:{right:function(t){var a=this._getGrid(),n=this.row,i=this.col+1
a[n]&&a[n][i]||(a[n+1]?(n+=1,i=0):i=this.col)
var r=new e.$keyboardNavigation.MinicalCell(this.container,n,i)
r.isValid()||(r=r.fallback()),this.moveTo(r)},left:function(t){var a=this._getGrid(),n=this.row,i=this.col-1
a[n]&&a[n][i]||(i=a[n-1]?a[n-=1].length-1:this.col)
var r=new e.$keyboardNavigation.MinicalCell(this.container,n,i)
r.isValid()||(r=r.fallback()),this.moveTo(r)},down:function(){var t=this._getGrid(),a=this.row+1,n=this.col
t[a]&&t[a][n]||(a=this.row)
var i=new e.$keyboardNavigation.MinicalCell(this.container,a,n)
i.isValid()||(i=i.fallback()),this.moveTo(i)},up:function(){var t=this._getGrid(),a=this.row-1,n=this.col
if(t[a]&&t[a][n]){var i=new e.$keyboardNavigation.MinicalCell(this.container,a,n)
i.isValid()||(i=i.fallback()),this.moveTo(i)}else{var r=0
this.col>t[this.row].length/2&&(r=1),this.moveTo(new e.$keyboardNavigation.MinicalButton(this.container,r))}},enter:function(e){this.getNode().querySelector(".dhx_month_head").click()}}}),e.$keyboardNavigation.MinicalCell.prototype.bindAll(e.$keyboardNavigation.MinicalCell.prototype.keys)}(e),function(e){e.$keyboardNavigation.DataArea=function(e){this.index=e||0},e.$keyboardNavigation.DataArea.prototype=e._compose(e.$keyboardNavigation.KeyNavNode,{getNode:function(t){return e.$container.querySelector(".dhx_cal_data")},_handlers:null,isValid:function(){return!0},fallback:function(){return this},keys:{"up,down,right,left":function(){this.moveTo(new e.$keyboardNavigation.TimeSlot)}}}),e.$keyboardNavigation.DataArea.prototype.bindAll(e.$keyboardNavigation.DataArea.prototype.keys)}(e),function(e){!function(){var t=[]
function a(){return!!t.length}function n(t){setTimeout((function(){a()||function(e,t){for(;e&&e!=t;)e=e.parentNode
return!(e!=t)}(document.activeElement,e.$container)||e.focus()}),1)}function i(a){var n=(a=a||window.event).currentTarget;(function(e){return e==t[t.length-1]})(n)&&e.$keyboardNavigation.trapFocus(n,a)}if(e.attachEvent("onLightbox",(function(){!function(a){e.eventRemove(a,"keydown",i),e.event(a,"keydown",i),t.push(a)}(e.getLightbox())})),e.attachEvent("onAfterLightbox",(function(){var a=t.pop()
a&&e.eventRemove(a,"keydown",i),n()})),e.attachEvent("onAfterQuickInfo",(function(){n()})),!e._keyNavMessagePopup){e._keyNavMessagePopup=!0
var r=null,o=null,_=[]
e.attachEvent("onMessagePopup",(function(t){for(r=document.activeElement,o=r;o&&e._getClassName(o).indexOf("dhx_cal_data")<0;)o=o.parentNode
o&&(o=o.parentNode),e.eventRemove(t,"keydown",i),e.event(t,"keydown",i),_.push(t)})),e.attachEvent("onAfterMessagePopup",(function(){var t=_.pop()
t&&e.eventRemove(t,"keydown",i),setTimeout((function(){for(var t=document.activeElement;t&&e._getClassName(t).indexOf("dhx_cal_light")<0;)t=t.parentNode
t||(r&&r.parentNode?r.focus():o&&o.parentNode&&o.focus(),r=null,o=null)}),1)}))}e.$keyboardNavigation.isModal=a}()}(e),function(e){e.$keyboardNavigation.dispatcher={isActive:!1,activeNode:null,globalNode:new e.$keyboardNavigation.SchedulerNode,keepScrollPosition:function(t){var a,n,i=e.$container.querySelector(".dhx_timeline_scrollable_data")
i||(i=e.$container.querySelector(".dhx_cal_data")),i&&(a=i.scrollTop,n=i.scrollLeft),t(),i&&(i.scrollTop=a,i.scrollLeft=n)},enable:function(){if(e.$container){this.isActive=!0
var t=this
this.keepScrollPosition((function(){t.globalNode.enable(),t.setActiveNode(t.getActiveNode())}))}},disable:function(){this.isActive=!1,this.globalNode.disable()},isEnabled:function(){return!!this.isActive},getDefaultNode:function(){return this.globalNode.getDefaultNode()},setDefaultNode:function(){this.setActiveNode(this.getDefaultNode())},getActiveNode:function(){var e=this.activeNode
return e&&!e.isValid()&&(e=e.fallback()),e},focusGlobalNode:function(){this.blurNode(this.globalNode),this.focusNode(this.globalNode)},setActiveNode:function(e){e&&e.isValid()&&(this.activeNode&&this.activeNode.compareTo(e)||this.isEnabled()&&(this.blurNode(this.activeNode),this.activeNode=e,this.focusNode(this.activeNode)))},focusNode:function(t){t&&t.focus&&(t.focus(),t.getNode&&document.activeElement!=t.getNode()&&this.setActiveNode(new e.$keyboardNavigation.DataArea))},blurNode:function(e){e&&e.blur&&e.blur()},getInlineEditor:function(t){var a=e.$container.querySelector(".dhx_cal_editor["+e.config.event_attribute+"='"+t+"'] textarea")
return a&&a.offsetWidth?a:null},keyDownHandler:function(t){if(!t.defaultPrevented){var a=this.getActiveNode()
if((!e.$keyboardNavigation.isModal()||a&&a.container&&e.utils.dom.locateCss({target:a.container},"dhx_minical_popup",!1))&&(!e.getState().editor_id||!this.getInlineEditor(e.getState().editor_id))&&this.isEnabled()){t=t||window.event
var n=this.globalNode,i=e.$keyboardNavigation.shortcuts.getCommandFromEvent(t)
a?a.findHandler(i)?a.doAction(i,t):n.findHandler(i)&&n.doAction(i,t):this.setDefaultNode()}}},_timeout:null,delay:function(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t||1)}}}(e),function(e){e._temp_key_scope=function(){e.config.key_nav=!0,e.$keyboardNavigation._pasteDate=null,e.$keyboardNavigation._pasteSection=null
var t=null,a={}
function n(e){e=e||window.event,a.x=e.clientX,a.y=e.clientY}function i(){for(var t,n,i=document.elementFromPoint(a.x,a.y);i&&i!=e._obj;)i=i.parentNode
return t=!(i!=e._obj),n=e.$keyboardNavigation.dispatcher.isEnabled(),t||n}function r(t){return e._lame_copy({},t)}document.body?e.event(document.body,"mousemove",n):e.event(window,"load",(function(){e.event(document.body,"mousemove",n)})),e.attachEvent("onMouseMove",(function(t,a){var n=e.getState()
if(n.mode&&n.min_date){var i=e.getActionData(a)
e.$keyboardNavigation._pasteDate=i.date,e.$keyboardNavigation._pasteSection=i.section}})),e._make_pasted_event=function(t){var a=e.$keyboardNavigation._pasteDate,n=e.$keyboardNavigation._pasteSection,i=t.end_date-t.start_date,o=r(t)
if(function(e){delete e.rec_type,delete e.rec_pattern,delete e.event_pid,delete e.event_length}(o),o.start_date=new Date(a),o.end_date=new Date(o.start_date.valueOf()+i),n){var _=e._get_section_property()
e.config.multisection?o[_]=t[_]:o[_]=n}return o},e._do_paste=function(t,a,n){!1!==e.callEvent("onBeforeEventPasted",[t,a,n])&&(e.addEvent(a),e.callEvent("onEventPasted",[t,a,n]))},e._is_key_nav_active=function(){return!(!this._is_initialized()||this._is_lightbox_open()||!this.config.key_nav)},e.event(document,"keydown",(function(t){(t.ctrlKey||t.metaKey)&&86==t.keyCode&&e._buffer_event&&!e.$keyboardNavigation.dispatcher.isEnabled()&&(e.$keyboardNavigation.dispatcher.isActive=i())})),e._key_nav_copy_paste=function(a){if(!e._is_key_nav_active())return!0
if(37==a.keyCode||39==a.keyCode){a.cancelBubble=!0
var n=e.date.add(e._date,37==a.keyCode?-1:1,e._mode)
return e.setCurrentView(n),!0}var o=function(){var t=e.$keyboardNavigation.dispatcher.getActiveNode()
return t&&t.eventId?t.eventId:e._select_id}()
if((a.ctrlKey||a.metaKey)&&67==a.keyCode)return o&&(e._buffer_event=r(e.getEvent(o)),t=!0,e.callEvent("onEventCopied",[e.getEvent(o)])),!0
if((a.ctrlKey||a.metaKey)&&88==a.keyCode&&o){t=!1
var _=e._buffer_event=r(e.getEvent(o))
e.updateEvent(_.id),e.callEvent("onEventCut",[_])}if((a.ctrlKey||a.metaKey)&&86==a.keyCode&&i()){if(_=(_=e._buffer_event?e.getEvent(e._buffer_event.id):e._buffer_event)||e._buffer_event){var s=e._make_pasted_event(_)
t?(s.id=e.uid(),e._do_paste(t,s,_)):e.callEvent("onBeforeEventChanged",[s,a,!1,_])&&(e._do_paste(t,s,_),t=!0)}return!0}}},e._temp_key_scope()}(e),function(){(function(e){e.$keyboardNavigation.attachSchedulerHandlers=function(){var t,a=e.$keyboardNavigation.dispatcher,n=function(t){if(e.config.key_nav)return a.keyDownHandler(t)},i=function(){a.keepScrollPosition((function(){a.focusGlobalNode()}))}
e.attachEvent("onDataRender",(function(){e.config.key_nav&&a.isEnabled()&&!e.getState().editor_id&&(clearTimeout(t),t=setTimeout((function(){a.isEnabled()||a.enable(),r()})))}))
var r=function(){if(a.isEnabled()){var t=a.getActiveNode()
t&&(t.isValid()||(t=t.fallback()),!t||t instanceof e.$keyboardNavigation.MinicalButton||t instanceof e.$keyboardNavigation.MinicalCell||a.keepScrollPosition((function(){t.focus(!0)})))}}
function o(t){if(!e.config.key_nav)return!0
var n,i=e.$keyboardNavigation.isChildOf(t.target||t.srcElement,e.$container.querySelector(".dhx_cal_data")),r=e.getActionData(t)
e._locate_event(t.target||t.srcElement)?n=new e.$keyboardNavigation.Event(e._locate_event(t.target||t.srcElement)):i&&(n=new e.$keyboardNavigation.TimeSlot,r.date&&i&&(n=n.nextSlot(new e.$keyboardNavigation.TimeSlot(r.date,null,r.section)))),n&&(a.isEnabled()?r.date&&i&&a.delay((function(){a.setActiveNode(n)})):a.activeNode=n)}e.attachEvent("onSchedulerReady",(function(){var t=e.$container
e.eventRemove(document,"keydown",n),e.eventRemove(t,"mousedown",o),e.eventRemove(t,"focus",i),e.config.key_nav?(e.event(document,"keydown",n),e.event(t,"mousedown",o),e.event(t,"focus",i),t.setAttribute("tabindex","0")):t.removeAttribute("tabindex")}))
var _=e.updateEvent
e.updateEvent=function(t){var n=_.apply(this,arguments)
if(e.config.key_nav&&a.isEnabled()&&e.getState().select_id==t){var i=new e.$keyboardNavigation.Event(t)
e.getState().lightbox_id||function(t){if(e.config.key_nav&&a.isEnabled()){var n=t,i=new e.$keyboardNavigation.Event(n.eventId)
if(!i.isValid()){var r=i.start||n.start,o=i.end||n.end,_=i.section||n.section;(i=new e.$keyboardNavigation.TimeSlot(r,o,_)).isValid()||(i=new e.$keyboardNavigation.TimeSlot)}a.setActiveNode(i)
var s=a.getActiveNode()
s&&s.getNode&&document.activeElement!=s.getNode()&&a.focusNode(a.getActiveNode())}}(i)}return n},e.attachEvent("onEventDeleted",(function(t){return!e.config.key_nav||(a.isEnabled()&&a.getActiveNode().eventId==t&&a.setActiveNode(new e.$keyboardNavigation.TimeSlot),!0)})),e.attachEvent("onClearAll",(function(){if(!e.config.key_nav)return!0
a.isEnabled()&&a.getActiveNode()instanceof e.$keyboardNavigation.Event&&a.setActiveNode(new e.$keyboardNavigation.TimeSlot)}))}})(e),function(e){e.$keyboardNavigation._minicalendars=[],e.$keyboardNavigation.isMinical=function(t){for(var a=e.$keyboardNavigation._minicalendars,n=0;n<a.length;n++)if(this.isChildOf(t,a[n]))return!0
return!1},e.$keyboardNavigation.isChildOf=function(e,t){for(;e&&e!==t;)e=e.parentNode
return!(e!==t)},e.$keyboardNavigation.patchMinicalendar=function(){var t=e.$keyboardNavigation.dispatcher
function a(a){var n=a.target
t.enable(),t.setActiveNode(new e.$keyboardNavigation.MinicalButton(n,0))}function n(a){var n=a.target||a.srcElement,i=e.utils.dom.locateCss(a,"dhx_cal_prev_button",!1),r=e.utils.dom.locateCss(a,"dhx_cal_next_button",!1),o=e.utils.dom.locateCss(a,"dhx_year_body",!1),_=0,s=0
if(o){for(var d,l,c=n;c&&"td"!=c.tagName.toLowerCase();)c=c.parentNode
if(c&&(d=(l=c).parentNode),d&&l){for(var h=d.parentNode.querySelectorAll("tr"),u=0;u<h.length;u++)if(h[u]==d){_=u
break}var f=d.querySelectorAll("td")
for(u=0;u<f.length;u++)if(f[u]==l){s=u
break}}}var p=a.currentTarget
t.delay((function(){var a;(i||r||o)&&(i?(a=new e.$keyboardNavigation.MinicalButton(p,0),t.setActiveNode(new e.$keyboardNavigation.MinicalButton(p,0))):r?a=new e.$keyboardNavigation.MinicalButton(p,1):o&&(a=new e.$keyboardNavigation.MinicalCell(p,_,s)),a&&(t.enable(),a.isValid()&&(t.activeNode=null,t.setActiveNode(a))))}))}if(e.renderCalendar){var i=e.renderCalendar
e.renderCalendar=function(){var r=i.apply(this,arguments),o=e.$keyboardNavigation._minicalendars
e.eventRemove(r,"click",n),e.event(r,"click",n),e.eventRemove(r,"focus",a),e.event(r,"focus",a)
for(var _=!1,s=0;s<o.length;s++)if(o[s]==r){_=!0
break}if(_||o.push(r),t.isEnabled()){var d=t.getActiveNode()
d&&d.container==r?t.focusNode(d):r.setAttribute("tabindex","0")}else r.setAttribute("tabindex","0")
return r}}if(e.destroyCalendar){var r=e.destroyCalendar
e.destroyCalendar=function(t,n){t=t||(e._def_count?e._def_count.firstChild:null)
var i=r.apply(this,arguments)
if(!t||!t.parentNode)for(var o=e.$keyboardNavigation._minicalendars,_=0;_<o.length;_++)o[_]==t&&(e.eventRemove(o[_],"focus",a),o.splice(_,1),_--)
return i}}}}(e)
var t=e.$keyboardNavigation.dispatcher
if(e.$keyboardNavigation.attachSchedulerHandlers(),e.renderCalendar)e.$keyboardNavigation.patchMinicalendar()
else var a=e.attachEvent("onSchedulerReady",(function(){e.detachEvent(a),e.$keyboardNavigation.patchMinicalendar()}))
function n(){if(e.config.key_nav){var t=document.activeElement
return!(!t||e.utils.dom.locateCss(t,"dhx_cal_quick_info",!1))&&(e.$keyboardNavigation.isChildOf(t,e.$container)||e.$keyboardNavigation.isMinical(t))}}function i(e){e&&!t.isEnabled()?t.enable():!e&&t.isEnabled()&&t.disable()}setInterval((function(){if(e.$container&&e.$keyboardNavigation.isChildOf(e.$container,document.body)){var a=n()
a?i(a):!a&&t.isEnabled()&&setTimeout((function(){e.config.key_nav?i(n()):e.$container.removeAttribute("tabindex")}),100)}}),500)}()},layer:function(e){e.attachEvent("onTemplatesReady",(function(){this.layers.sort((function(e,t){return e.zIndex-t.zIndex})),e._dp_init=function(t){t._methods=["_set_event_text_style","","changeEventId","deleteEvent"],this.attachEvent("onEventAdded",(function(e){!this._loading&&this.validId(e)&&this.getEvent(e)&&this.getEvent(e).layer==t.layer&&t.setUpdated(e,!0,"inserted")})),this.attachEvent("onBeforeEventDelete",(function(e){if(this.getEvent(e)&&this.getEvent(e).layer==t.layer){if(!this.validId(e))return
var a=t.getState(e)
return"inserted"==a||this._new_event?(t.setUpdated(e,!1),!0):"deleted"!=a&&("true_deleted"==a||(t.setUpdated(e,!0,"deleted"),!1))}return!0})),this.attachEvent("onEventChanged",(function(e){!this._loading&&this.validId(e)&&this.getEvent(e)&&this.getEvent(e).layer==t.layer&&t.setUpdated(e,!0,"updated")})),t._getRowData=function(e,t){var a=this.obj.getEvent(e),n={}
for(var i in a)0!==i.indexOf("_")&&(a[i]&&a[i].getUTCFullYear?n[i]=this.obj._helpers.formatDate(a[i]):n[i]=a[i])
return n},t._clearUpdateFlag=function(){},t.attachEvent("insertCallback",e._update_callback),t.attachEvent("updateCallback",e._update_callback),t.attachEvent("deleteCallback",(function(e,t){this.obj.setUserData(t,this.action_param,"true_deleted"),this.obj.deleteEvent(t)}))},function(){var t=function e(t){if(null===t||"object"!=ke(t))return t
var a=new t.constructor
for(var n in t)a[n]=e(t[n])
return a}
e._dataprocessors=[],e._layers_zindex={}
for(var a=0;a<e.layers.length;a++){if(e.config["lightbox_"+e.layers[a].name]={},e.config["lightbox_"+e.layers[a].name].sections=t(e.config.lightbox.sections),e._layers_zindex[e.layers[a].name]=e.config.inital_layer_zindex||5+3*a,e.layers[a].url){var n=e.createDataProcessor({url:e.layers[a].url})
n.layer=e.layers[a].name,e._dataprocessors.push(n),e._dataprocessors[a].init(e)}e.layers[a].isDefault&&(e.defaultLayer=e.layers[a].name)}}(),e.showLayer=function(e){this.toggleLayer(e,!0)},e.hideLayer=function(e){this.toggleLayer(e,!1)},e.toggleLayer=function(e,t){var a=this.getLayer(e)
a.visible=void 0!==t?!!t:!a.visible,this.setCurrentView(this._date,this._mode)},e.getLayer=function(t){var a,n
"string"==typeof t&&(n=t),"object"==ke(t)&&(n=t.layer)
for(var i=0;i<e.layers.length;i++)e.layers[i].name==n&&(a=e.layers[i])
return a},e.attachEvent("onBeforeLightbox",(function(t){var a=this.getEvent(t)
return this.config.lightbox.sections=this.config["lightbox_"+a.layer].sections,e.resetLightbox(),!0})),e.attachEvent("onClick",(function(t,a){var n=e.getEvent(t)
return!e.getLayer(n.layer).noMenu})),e.attachEvent("onEventCollision",(function(t,a){var n=this.getLayer(t)
if(!n.checkCollision)return!1
for(var i=0,r=0;r<a.length;r++)a[r].layer==n.name&&a[r].id!=t.id&&i++
return i>=e.config.collision_limit})),e.addEvent=function(t,a,n,i,r){var o=t
1!=arguments.length&&((o=r||{}).start_date=t,o.end_date=a,o.text=n,o.id=i,o.layer=this.defaultLayer),o.id=o.id||e.uid(),o.text=o.text||"","string"==typeof o.start_date&&(o.start_date=this.templates.api_date(o.start_date)),"string"==typeof o.end_date&&(o.end_date=this.templates.api_date(o.end_date)),o._timed=this.isOneDayEvent(o)
var _=!this._events[o.id]
this._events[o.id]=o,this.event_updated(o),this._loading||this.callEvent(_?"onEventAdded":"onEventChanged",[o.id,o])},this._evs_layer={}
for(var t=0;t<this.layers.length;t++)this._evs_layer[this.layers[t].name]=[]
e.addEventNow=function(t,a,n){var i={}
"object"==ke(t)&&(i=t,t=null)
var r=6e4*(this.config.event_duration||this.config.time_step)
t||(t=Math.round(e._currentDate().valueOf()/r)*r)
var o=new Date(t)
if(!a){var _=this.config.first_hour
_>o.getHours()&&(o.setHours(_),t=o.valueOf()),a=t+r}i.start_date=i.start_date||o,i.end_date=i.end_date||new Date(a),i.text=i.text||this.locale.labels.new_event,i.id=this._drag_id=this.uid(),i.layer=this.defaultLayer,this._drag_mode="new-size",this._loading=!0,this.addEvent(i),this.callEvent("onEventCreated",[this._drag_id,n]),this._loading=!1,this._drag_event={},this._on_mouse_up(n)},e._t_render_view_data=function(e){if(this.config.multi_day&&!this._table_view){for(var t=[],a=[],n=0;n<e.length;n++)e[n]._timed?t.push(e[n]):a.push(e[n])
this._table_view=!0,this.render_data(a),this._table_view=!1,this.render_data(t)}else this.render_data(e)},e.render_view_data=function(){if(this._not_render)this._render_wait=!0
else{this._render_wait=!1,this.clear_view(),this._evs_layer={}
for(var e=0;e<this.layers.length;e++)this._evs_layer[this.layers[e].name]=[]
var t=this.get_visible_events()
for(e=0;e<t.length;e++)this._evs_layer[t[e].layer]&&this._evs_layer[t[e].layer].push(t[e])
if("month"==this._mode){var a=[]
for(e=0;e<this.layers.length;e++)this.layers[e].visible&&(a=a.concat(this._evs_layer[this.layers[e].name]))
this._t_render_view_data(a)}else for(e=0;e<this.layers.length;e++)if(this.layers[e].visible){var n=this._evs_layer[this.layers[e].name]
this._t_render_view_data(n)}}},e._render_v_bar=function(t,a,n,i,r,o,_,s,d){var l=t.id;-1==_.indexOf("<div class=")&&(_=e.templates["event_header_"+t.layer]?e.templates["event_header_"+t.layer](t.start_date,t.end_date,t):_),-1==s.indexOf("<div class=")&&(s=e.templates["event_text_"+t.layer]?e.templates["event_text_"+t.layer](t.start_date,t.end_date,t):s)
var c=document.createElement("div"),h="dhx_cal_event",u=e.templates["event_class_"+t.layer]?e.templates["event_class_"+t.layer](t.start_date,t.end_date,t):e.templates.event_class(t.start_date,t.end_date,t)
u&&(h=h+" "+u)
var f=e._border_box_events(),p=i-2,v=f?p:i-4,g=f?p:i-6,m=f?p:i-(this._quirks?4:14),y=f?p-2:i-8,b=f?r-this.xy.event_header_height:r-(this._quirks?20:30)+1,x='<div event_id="'+l+'" '+e.config.event_attribute+'="'+l+'" class="'+h+'" style="position:absolute; top:'+n+"px; left:"+a+"px; width:"+v+"px; height:"+r+"px;"+(o||"")+'">'
return x+='<div class="dhx_header" style=" width:'+g+'px;" >&nbsp;</div>',x+='<div class="dhx_title">'+_+"</div>",x+='<div class="dhx_body" style=" width:'+m+"px; height:"+b+'px;">'+s+"</div>",x+='<div class="dhx_footer" style=" width:'+y+"px;"+(d?" margin-top:-1px;":"")+'" ></div></div>',c.innerHTML=x,c.style.zIndex=100,c.firstChild},e.render_event_bar=function(t){var a=this._els.dhx_cal_data[0],n=this._colsS[t._sday],i=this._colsS[t._eday]
i==n&&(i=this._colsS[t._eday+1])
var r=this.xy.bar_height,o=this._colsS.heights[t._sweek]+(this._colsS.height?this.xy.month_scale_height+2:2)+t._sorder*r,_=document.createElement("div"),s=t._timed?"dhx_cal_event_clear":"dhx_cal_event_line",d=e.templates["event_class_"+t.layer]?e.templates["event_class_"+t.layer](t.start_date,t.end_date,t):e.templates.event_class(t.start_date,t.end_date,t)
d&&(s=s+" "+d)
var l='<div event_id="'+t.id+'" '+this.config.event_attribute+'="'+t.id+'" class="'+s+'" style="position:absolute; top:'+o+"px; left:"+n+"px; width:"+(i-n-15)+"px;"+(t._text_style||"")+'">'
t._timed&&(l+=e.templates["event_bar_date_"+t.layer]?e.templates["event_bar_date_"+t.layer](t.start_date,t.end_date,t):e.templates.event_bar_date(t.start_date,t.end_date,t)),l+=e.templates["event_bar_text_"+t.layer]?e.templates["event_bar_text_"+t.layer](t.start_date,t.end_date,t):e.templates.event_bar_text(t.start_date,t.end_date,t)+"</div>)",l+="</div>",_.innerHTML=l,this._rendered.push(_.firstChild),a.appendChild(_.firstChild)},e.render_event=function(t){var a=e.xy.menu_width
if(e.getLayer(t.layer).noMenu&&(a=0),!(t._sday<0)){var n=e.locate_holder(t._sday)
if(n){var i=60*t.start_date.getHours()+t.start_date.getMinutes(),r=60*t.end_date.getHours()+t.end_date.getMinutes()||60*e.config.last_hour,o=Math.round((60*i*1e3-60*this.config.first_hour*60*1e3)*this.config.hour_size_px/36e5)%(24*this.config.hour_size_px)+1,_=Math.max(e.xy.min_event_height,(r-i)*this.config.hour_size_px/60)+1,s=Math.floor((n.clientWidth-a)/t._count),d=t._sorder*s+1
t._inner||(s*=t._count-t._sorder)
var l=this._render_v_bar(t.id,a+d,o,s,_,t._text_style,e.templates.event_header(t.start_date,t.end_date,t),e.templates.event_text(t.start_date,t.end_date,t))
if(this._rendered.push(l),n.appendChild(l),d=d+parseInt(n.style.left,10)+a,o+=this._dy_shift,l.style.zIndex=this._layers_zindex[t.layer],this._edit_id==t.id){l.style.zIndex=parseInt(l.style.zIndex)+1
var c=l.style.zIndex
s=Math.max(s-4,e.xy.editor_width),(l=document.createElement("div")).setAttribute("event_id",t.id),l.setAttribute(this.config.event_attribute,t.id),this.set_xy(l,s,_-20,d,o+14),l.className="dhx_cal_editor",l.style.zIndex=c
var h=document.createElement("div")
this.set_xy(h,s-6,_-26),h.style.cssText+=";margin:2px 2px 2px 2px;overflow:hidden;",h.style.zIndex=c,l.appendChild(h),this._els.dhx_cal_data[0].appendChild(l),this._rendered.push(l),h.innerHTML="<textarea class='dhx_cal_editor'>"+t.text+"</textarea>",this._quirks7&&(h.firstChild.style.height=_-12+"px"),this._editor=h.firstChild,this._editor.onkeypress=function(t){if(t.shiftKey)return!0
var a=t.keyCode
a==e.keys.edit_save&&e.editStop(!0),a==e.keys.edit_cancel&&e.editStop(!1)},this._editor.onselectstart=function(e){return e.cancelBubble=!0,!0},h.firstChild.focus(),this._els.dhx_cal_data[0].scrollLeft=0,h.firstChild.select()}if(this._select_id==t.id){l.style.zIndex=parseInt(l.style.zIndex)+1
for(var u=this.config["icons_"+(this._edit_id==t.id?"edit":"select")],f="",p=0;p<u.length;p++)f+="<div class='dhx_menu_icon "+u[p]+"' title='"+this.locale.labels[u[p]]+"'></div>"
var v=this._render_v_bar(t.id,d-a+1,o,a,20*u.length+26,"","<div class='dhx_menu_head'></div>",f,!0)
v.style.left=d-a+1,v.style.zIndex=l.style.zIndex,this._els.dhx_cal_data[0].appendChild(v),this._rendered.push(v)}}}},e.filter_agenda=function(t,a){var n=e.getLayer(a.layer)
return n&&n.visible}}))},legacy:function(e){Object(Ee.a)()},limit:function(e){e.config.limit_start=null,e.config.limit_end=null,e.config.limit_view=!1,e.config.check_limits=!0,e.config.mark_now=!0,e.config.display_marked_timespans=!0,e.config.overwrite_marked_timespans=!0,e._temp_limit_scope=function(){var t=null,a=function(e,t,a){var n="object"==De(e)?e:{days:e}
return n.type="dhx_time_block",n.css="",t&&(a&&(n.sections=a),n=function(e,t,a){return t instanceof Date&&a instanceof Date?(e.start_date=t,e.end_date=a):(e.days=t,e.zones=a),e}(n,e,t)),n}
e.blockTime=function(t,n,i){var r=a(t,n,i)
return e.addMarkedTimespan(r)},e.unblockTime=function(t,n,i){var r=a(t,n=n||"fullday",i)
return e.deleteMarkedTimespan(r)},e.attachEvent("onBeforeViewChange",(function(t,a,n,i){function r(t,a){var n=e.config.limit_start,i=e.config.limit_end,r=e.date.add(t,1,a)
return t.valueOf()>i.valueOf()||r<=n.valueOf()}return!e.config.limit_view||!r(i=i||a,n=n||t)||a.valueOf()==i.valueOf()||(setTimeout((function(){var t=r(a,n)?e.config.limit_start:a
e.setCurrentView(r(t,n)?null:t,n)}),1),!1)})),e.checkInMarkedTimespan=function(t,a,n){a=a||"default"
for(var r=!0,o=new Date(t.start_date.valueOf()),_=e.date.add(o,1,"day"),s=e._marked_timespans;o<t.end_date;o=e.date.date_part(_),_=e.date.add(o,1,"day")){var d=+e.date.date_part(new Date(o)),l=i(t,s,o.getDay(),d,a)
if(l)for(var c=0;c<l.length;c+=2){var h=e._get_zone_minutes(o),u=t.end_date>_||t.end_date.getDate()!=o.getDate()?1440:e._get_zone_minutes(t.end_date),f=l[c],p=l[c+1]
if(f<u&&p>h&&!(r="function"==typeof n&&n(t,h,u,f,p)))break}}return!r}
var n=e.checkLimitViolation=function(t){if(!t)return!0
if(!e.config.check_limits)return!0
var a=e,n=a.config,i=[]
if(t.rec_type)for(var r=e.getRecDates(t),o=0;o<r.length;o++){var _=e._copy_event(t)
e._lame_copy(_,r[o]),i.push(_)}else i=[t]
for(var s=!0,d=0;d<i.length;d++){var l=!0;(_=i[d])._timed=e.isOneDayEvent(_),(l=!n.limit_start||!n.limit_end||_.start_date.valueOf()>=n.limit_start.valueOf()&&_.end_date.valueOf()<=n.limit_end.valueOf())&&(l=!e.checkInMarkedTimespan(_,"dhx_time_block",(function(e,t,n,i,r){var o=!0
return t<=r&&t>=i&&((1440==r||n<=r)&&(o=!1),e._timed&&a._drag_id&&"new-size"==a._drag_mode?(e.start_date.setHours(0),e.start_date.setMinutes(r)):o=!1),(n>=i&&n<=r||t<i&&n>r)&&(e._timed&&a._drag_id&&"new-size"==a._drag_mode?(e.end_date.setHours(0),e.end_date.setMinutes(i)):o=!1),o}))),l||(l=a.checkEvent("onLimitViolation")?a.callEvent("onLimitViolation",[_.id,_]):l),s=s&&l}return s||(a._drag_id=null,a._drag_mode=null),s}
function i(t,a,n,i,r){var o=e,_=[],s={_props:"map_to",matrix:"y_property"}
for(var d in s){var l=s[d]
if(o[d])for(var c in o[d]){var h=o[d][c][l]
t[h]&&(_=o._add_timespan_zones(_,e._get_blocked_zones(a[c],t[h],n,i,r)))}}return o._add_timespan_zones(_,e._get_blocked_zones(a,"global",n,i,r))}e._get_blocked_zones=function(e,t,a,n,i){var r=[]
if(e&&e[t])for(var o=e[t],_=this._get_relevant_blocked_zones(a,n,o,i),s=0;s<_.length;s++)r=this._add_timespan_zones(r,_[s].zones)
return r},e._get_relevant_blocked_zones=function(t,a,n,i){var r
return e.config.overwrite_marked_timespans?r=n[a]&&n[a][i]?n[a][i]:n[t]&&n[t][i]?n[t][i]:[]:(r=[],n[a]&&n[a][i]&&(r=r.concat(n[a][i])),n[t]&&n[t][i]&&(r=r.concat(n[t][i]))),r},e.attachEvent("onMouseDown",(function(e){return!("dhx_time_block"==e)})),e.attachEvent("onBeforeDrag",(function(t){return!t||n(e.getEvent(t))})),e.attachEvent("onClick",(function(t,a){return n(e.getEvent(t))})),e.attachEvent("onBeforeLightbox",(function(a){var i=e.getEvent(a)
return t=[i.start_date,i.end_date],n(i)})),e.attachEvent("onEventSave",(function(t,a,i){if(!a.start_date||!a.end_date){var r=e.getEvent(t)
a.start_date=new Date(r.start_date),a.end_date=new Date(r.end_date)}if(a.rec_type){var o=e._lame_clone(a)
return e._roll_back_dates(o),n(o)}return n(a)})),e.attachEvent("onEventAdded",(function(t){if(!t)return!0
var a=e.getEvent(t)
return!n(a)&&e.config.limit_start&&e.config.limit_end&&(a.start_date<e.config.limit_start&&(a.start_date=new Date(e.config.limit_start)),a.start_date.valueOf()>=e.config.limit_end.valueOf()&&(a.start_date=this.date.add(e.config.limit_end,-1,"day")),a.end_date<e.config.limit_start&&(a.end_date=new Date(e.config.limit_start)),a.end_date.valueOf()>=e.config.limit_end.valueOf()&&(a.end_date=this.date.add(e.config.limit_end,-1,"day")),a.start_date.valueOf()>=a.end_date.valueOf()&&(a.end_date=this.date.add(a.start_date,this.config.event_duration||this.config.time_step,"minute")),a._timed=this.isOneDayEvent(a)),!0})),e.attachEvent("onEventChanged",(function(a){if(!a)return!0
var i=e.getEvent(a)
if(!n(i)){if(!t)return!1
i.start_date=t[0],i.end_date=t[1],i._timed=this.isOneDayEvent(i)}return!0})),e.attachEvent("onBeforeEventChanged",(function(e,t,a){return n(e)})),e.attachEvent("onBeforeEventCreated",(function(t){var a=e.getActionData(t).date,i={_timed:!0,start_date:a,end_date:e.date.add(a,e.config.time_step,"minute")}
return n(i)})),e.attachEvent("onViewChange",(function(){e._mark_now()})),e.attachEvent("onAfterSchedulerResize",(function(){return window.setTimeout((function(){e._mark_now()}),1),!0})),e.attachEvent("onTemplatesReady",(function(){e._mark_now_timer=window.setInterval((function(){e._is_initialized()&&e._mark_now()}),6e4)})),e._mark_now=function(t){this._els.dhx_now_time||(this._els.dhx_now_time=[])
var a=e._currentDate(),n=this.config
if(e._remove_mark_now(),!t&&n.mark_now&&a<this._max_date&&a>this._min_date&&a.getHours()>=n.first_hour&&a.getHours()<n.last_hour){var i=this.locate_holder_day(a)
this._els.dhx_now_time=e._append_mark_now(i,a)}},e._append_mark_now=function(t,a){var n=e._get_zone_minutes(a),i={zones:[n,n+1],css:"dhx_now_time",type:"dhx_now_time"}
if(!this._table_view){if(this._props&&this._props[this._mode]){var r,o,_=this._props[this._mode],s=_.size||_.options.length
_.days>1?(_.size&&_.options.length&&(t=(_.position+t)/_.options.length*_.size),r=t,o=t+s):o=(r=0)+s
for(var d=[],l=r;l<o;l++){var c=l
i.days=c
var h=e._render_marked_timespan(i,null,c)[0]
d.push(h)}return d}return i.days=t,e._render_marked_timespan(i,null,t)}if("month"==this._mode)return i.days=+e.date.date_part(a),e._render_marked_timespan(i,null,null)},e._remove_mark_now=function(){for(var e=this._els.dhx_now_time,t=0;t<e.length;t++){var a=e[t],n=a.parentNode
n&&n.removeChild(a)}this._els.dhx_now_time=[]},e._marked_timespans={global:{}},e._get_zone_minutes=function(e){return 60*e.getHours()+e.getMinutes()},e._prepare_timespan_options=function(t){var a=[],n=[]
if("fullweek"==t.days&&(t.days=[0,1,2,3,4,5,6]),t.days instanceof Array){for(var i=t.days.slice(),r=0;r<i.length;r++){var o=e._lame_clone(t)
o.days=i[r],a.push.apply(a,e._prepare_timespan_options(o))}return a}if(!t||!(t.start_date&&t.end_date&&t.end_date>t.start_date||void 0!==t.days&&t.zones)&&!t.type)return a
"fullday"==t.zones&&(t.zones=[0,1440]),t.zones&&t.invert_zones&&(t.zones=e.invertZones(t.zones)),t.id=e.uid(),t.css=t.css||"",t.type=t.type||"default"
var _=t.sections
if(_){for(var s in _)if(_.hasOwnProperty(s)){var d=_[s]
for(d instanceof Array||(d=[d]),r=0;r<d.length;r++)(v=e._lame_copy({},t)).sections={},v.sections[s]=d[r],n.push(v)}}else n.push(t)
for(var l=0;l<n.length;l++){var c=n[l],h=c.start_date,u=c.end_date
if(h&&u)for(var f=e.date.date_part(new Date(h)),p=e.date.add(f,1,"day");f<u;){var v
delete(v=e._lame_copy({},c)).start_date,delete v.end_date,v.days=f.valueOf()
var g=h>f?e._get_zone_minutes(h):0,m=u>p||u.getDate()!=f.getDate()?1440:e._get_zone_minutes(u)
v.zones=[g,m],a.push(v),f=p,p=e.date.add(p,1,"day")}else c.days instanceof Date&&(c.days=e.date.date_part(c.days).valueOf()),c.zones=t.zones.slice(),a.push(c)}return a},e._get_dates_by_index=function(t,a,n){var i=[]
a=e.date.date_part(new Date(a||e._min_date)),n=new Date(n||e._max_date)
for(var r=a.getDay(),o=t-r>=0?t-r:7-a.getDay()+t,_=e.date.add(a,o,"day");_<n;_=e.date.add(_,1,"week"))i.push(_)
return i},e._get_css_classes_by_config=function(e){var t=[]
return"dhx_time_block"==e.type&&(t.push("dhx_time_block"),e.css&&t.push("dhx_time_block_reset")),t.push("dhx_marked_timespan",e.css),t.join(" ")},e._get_block_by_config=function(e){var t=document.createElement("div")
return e.html&&("string"==typeof e.html?t.innerHTML=e.html:t.appendChild(e.html)),t},e._render_marked_timespan=function(t,a,n){var i=[],r=e.config,o=this._min_date,_=this._max_date,s=!1
if(!r.display_marked_timespans)return i
if(!n&&0!==n){if(t.days<7)n=t.days
else{var d=new Date(t.days)
if(s=+d,!(+_>+d&&+o<=+d))return i
n=d.getDay()}var l=o.getDay()
l>n?n=7-(l-n):n-=l}var c=t.zones,h=e._get_css_classes_by_config(t)
if(e._table_view&&"month"==e._mode){var u=[],f=[]
if(a)u.push(a),f.push(n)
else{f=s?[s]:e._get_dates_by_index(n)
for(var p=0;p<f.length;p++)u.push(this._scales[f[p]])}for(p=0;p<u.length;p++){a=u[p],n=f[p]
var v=Math.floor((this._correct_shift(n,1)-o.valueOf())/(864e5*this._cols.length)),g=this.locate_holder_day(n,!1)%this._cols.length
if(!this._ignores[g]){var m=this.config.rtl?this._colsS.col_length-1-g:g,y=e._get_block_by_config(t),b=Math.max(a.offsetHeight-1,0),x=Math.max(a.offsetWidth-1,0),w=this._colsS[m],k=this._colsS.heights[v]+(this._colsS.height?this.xy.month_scale_height+2:2)-1
y.className=h,y.style.top=k+"px",y.style.lineHeight=y.style.height=b+"px"
for(var E=0;E<c.length;E+=2){var D=c[p]
if((N=c[p+1])<=D)return[];(T=y.cloneNode(!0)).style.left=w+Math.round(D/1440*x)+"px",T.style.width=Math.round((N-D)/1440*x)+"px",a.appendChild(T),i.push(T)}}}}else{var S=n
if(this._ignores[this.locate_holder_day(n,!1)])return i
if(this._props&&this._props[this._mode]&&t.sections&&t.sections[this._mode]){var M=this._props[this._mode]
S=M.order[t.sections[this._mode]]
var C=M.order[t.sections[this._mode]]
M.days>1?S=S*(M.size||M.options.length)+C:(S=C,M.size&&S>M.position+M.size&&(S=0))}for(a=a||e.locate_holder(S),p=0;p<c.length;p+=2){var N,T
if(D=Math.max(c[p],60*r.first_hour),(N=Math.min(c[p+1],60*r.last_hour))<=D){if(p+2<c.length)continue
return[]}(T=e._get_block_by_config(t)).className=h
var A=24*this.config.hour_size_px+1
T.style.top=Math.round((60*D*1e3-36e5*this.config.first_hour)*this.config.hour_size_px/36e5)%A+"px",T.style.lineHeight=T.style.height=Math.max(Math.round(60*(N-D)*1e3*this.config.hour_size_px/36e5)%A,1)+"px",a.appendChild(T),i.push(T)}}return i},e._mark_timespans=function(){var t=this._els.dhx_cal_data[0],a=[]
if(e._table_view&&"month"==e._mode)for(var n in this._scales){var i=new Date(+n)
a.push.apply(a,e._on_scale_add_marker(this._scales[n],i))}else{i=new Date(e._min_date)
for(var r=0,o=t.childNodes.length;r<o;r++){var _=t.childNodes[r]
_.firstChild&&e._getClassName(_.firstChild).indexOf("dhx_scale_hour")>-1||(a.push.apply(a,e._on_scale_add_marker(_,i)),i=e.date.add(i,1,"day"))}}return a},e.markTimespan=function(t){var a=!1
this._els.dhx_cal_data||(e.get_elements(),a=!0)
var n=e._marked_timespans_ids,i=e._marked_timespans_types,r=e._marked_timespans
e.deleteMarkedTimespan(),e.addMarkedTimespan(t)
var o=e._mark_timespans()
return a&&(e._els=[]),e._marked_timespans_ids=n,e._marked_timespans_types=i,e._marked_timespans=r,o},e.unmarkTimespan=function(e){if(e)for(var t=0;t<e.length;t++){var a=e[t]
a.parentNode&&a.parentNode.removeChild(a)}},e._addMarkerTimespanConfig=function(t){var a=e._marked_timespans,n=t.id,i=e._marked_timespans_ids
i[n]||(i[n]=[])
var r=t.days,o=t.sections,_=t.type
if(t.id=n,o){for(var s in o)if(o.hasOwnProperty(s)){a[s]||(a[s]={})
var d=o[s],l=a[s]
l[d]||(l[d]={}),l[d][r]||(l[d][r]={}),l[d][r][_]||(l[d][r][_]=[],e._marked_timespans_types||(e._marked_timespans_types={}),e._marked_timespans_types[_]||(e._marked_timespans_types[_]=!0))
var c=l[d][r][_]
t._array=c,c.push(t),i[n].push(t)}}else a.global[r]||(a.global[r]={}),a.global[r][_]||(a.global[r][_]=[]),e._marked_timespans_types||(e._marked_timespans_types={}),e._marked_timespans_types[_]||(e._marked_timespans_types[_]=!0),c=a.global[r][_],t._array=c,c.push(t),i[n].push(t)},e._marked_timespans_ids={},e.addMarkedTimespan=function(t){var a=e._prepare_timespan_options(t)
if(a.length){for(var n=a[0].id,i=0;i<a.length;i++)e._addMarkerTimespanConfig(a[i])
return n}},e._add_timespan_zones=function(e,t){var a=e.slice()
if(t=t.slice(),!a.length)return t
for(var n=0;n<a.length;n+=2)for(var i=a[n],r=a[n+1],o=n+2==a.length,_=0;_<t.length;_+=2){var s=t[_],d=t[_+1]
if(d>r&&s<=r||s<i&&d>=i)a[n]=Math.min(i,s),a[n+1]=Math.max(r,d),n-=2
else{if(!o)continue
var l=i>s?0:2
a.splice(n+l,0,s,d)}t.splice(_--,2)
break}return a},e._subtract_timespan_zones=function(e,t){for(var a=e.slice(),n=0;n<a.length;n+=2)for(var i=a[n],r=a[n+1],o=0;o<t.length;o+=2){var _=t[o],s=t[o+1]
if(s>i&&_<r){var d=!1
i>=_&&r<=s&&a.splice(n,2),i<_&&(a.splice(n,2,i,_),d=!0),r>s&&a.splice(d?n+2:n,d?0:2,s,r),n-=2
break}}return a},e.invertZones=function(t){return e._subtract_timespan_zones([0,1440],t.slice())},e._delete_marked_timespan_by_id=function(t){var a=e._marked_timespans_ids[t]
if(a)for(var n=0;n<a.length;n++)for(var i=a[n],r=i._array,o=0;o<r.length;o++)if(r[o]==i){r.splice(o,1)
break}},e._delete_marked_timespan_by_config=function(t){var a,n=e._marked_timespans,i=t.sections,r=t.days,o=t.type||"default"
if(i){for(var _ in i)if(i.hasOwnProperty(_)&&n[_]){var s=i[_]
n[_][s]&&(a=n[_][s])}}else a=n.global
if(a)if(void 0!==r)a[r]&&a[r][o]&&(e._addMarkerTimespanConfig(t),e._delete_marked_timespans_list(a[r][o],t))
else for(var d in a)if(a[d][o]){var l=e._lame_clone(t)
t.days=d,e._addMarkerTimespanConfig(l),e._delete_marked_timespans_list(a[d][o],t)}},e._delete_marked_timespans_list=function(t,a){for(var n=0;n<t.length;n++){var i=t[n],r=e._subtract_timespan_zones(i.zones,a.zones)
if(r.length)i.zones=r
else{t.splice(n,1),n--
for(var o=e._marked_timespans_ids[i.id],_=0;_<o.length;_++)if(o[_]==i){o.splice(_,1)
break}}}},e.deleteMarkedTimespan=function(t){if(arguments.length||(e._marked_timespans={global:{}},e._marked_timespans_ids={},e._marked_timespans_types={}),"object"!=De(t))e._delete_marked_timespan_by_id(t)
else{t.start_date&&t.end_date||(void 0!==t.days||t.type||(t.days="fullweek"),t.zones||(t.zones="fullday"))
var a=[]
if(t.type)a.push(t.type)
else for(var n in e._marked_timespans_types)a.push(n)
for(var i=e._prepare_timespan_options(t),r=0;r<i.length;r++)for(var o=i[r],_=0;_<a.length;_++){var s=e._lame_clone(o)
s.type=a[_],e._delete_marked_timespan_by_config(s)}}},e._get_types_to_render=function(t,a){var n=t?e._lame_copy({},t):{}
for(var i in a||{})a.hasOwnProperty(i)&&(n[i]=a[i])
return n},e._get_configs_to_render=function(e){var t=[]
for(var a in e)e.hasOwnProperty(a)&&t.push.apply(t,e[a])
return t},e._on_scale_add_marker=function(t,a){if(!e._table_view||"month"==e._mode){var n=a.getDay(),i=a.valueOf(),r=this._mode,o=e._marked_timespans,_=[],s=[]
if(this._props&&this._props[r]){var d=this._props[r],l=d.options,c=l[e._get_unit_index(d,a)]
if(d.days>1){var h=Math.round((a-e._min_date)/864e5),u=d.size||l.length
a=e.date.add(e._min_date,Math.floor(h/u),"day"),a=e.date.date_part(a)}else a=e.date.date_part(new Date(this._date))
if(n=a.getDay(),i=a.valueOf(),o[r]&&o[r][c.key]){var f=o[r][c.key],p=e._get_types_to_render(f[n],f[i])
_.push.apply(_,e._get_configs_to_render(p))}}var v=o.global
if(e.config.overwrite_marked_timespans){var g=v[i]||v[n]
_.push.apply(_,e._get_configs_to_render(g))}else v[i]&&_.push.apply(_,e._get_configs_to_render(v[i])),v[n]&&_.push.apply(_,e._get_configs_to_render(v[n]))
for(var m=0;m<_.length;m++)s.push.apply(s,e._render_marked_timespan(_[m],t,a))
return s}},e.attachEvent("onScaleAdd",(function(){e._on_scale_add_marker.apply(e,arguments)})),e.dblclick_dhx_marked_timespan=function(t,a){e.callEvent("onScaleDblClick",[e.getActionData(t).date,a,t]),e.config.dblclick_create&&e.addEventNow(e.getActionData(t).date,null,t)}},e._temp_limit_scope()},map_view:function(e){var t
e.xy.map_date_width=188,e.xy.map_icon_width=25,e.xy.map_description_width=400,e.config.map_resolve_event_location=!0,e.config.map_resolve_user_location=!0,e.config.map_initial_position=new google.maps.LatLng(48.724,8.215),e.config.map_error_position=new google.maps.LatLng(15,15),e.config.map_infowindow_max_width=300,e.config.map_type=google.maps.MapTypeId.ROADMAP,e.config.map_zoom_after_resolve=15,e.locale.labels.marker_geo_success="It seems you are here.",e.locale.labels.marker_geo_fail="Sorry, could not get your current position using geolocation.",e.templates.marker_date=e.date.date_to_str("%Y-%m-%d %H:%i"),e.templates.marker_text=function(t,a,n){return"<div><b>"+n.text+"</b><br/><br/>"+(n.event_location||"")+"<br/><br/>"+e.templates.marker_date(t)+" - "+e.templates.marker_date(a)+"</div>"},e.dblclick_dhx_map_area=function(){!this.config.readonly&&this.config.dblclick_create&&this.addEventNow({start_date:e._date,end_date:e.date.add(e._date,e.config.time_step,"minute")})},e.templates.map_time=function(t,a,n){return e.config.rtl&&!n._timed?e.templates.day_date(a)+" &ndash; "+e.templates.day_date(t):n._timed?this.day_date(n.start_date,n.end_date,n)+" "+this.event_date(t):e.templates.day_date(t)+" &ndash; "+e.templates.day_date(a)},e.templates.map_text=function(e,t,a){return a.text},e.date.map_start=function(e){return e},e.date.add_map=function(e,t,a){return new Date(e.valueOf())},e.templates.map_date=function(e,t,a){return""},e._latLngUpdate=!1,e.attachEvent("onSchedulerReady",(function(){e._isMapPositionSet=!1
var a=document.createElement("div")
a.className="dhx_map",a.id="dhx_gmap",a.style.dispay="none",e._obj.appendChild(a),e._els.dhx_gmap=[],e._els.dhx_gmap.push(a),s("dhx_gmap")
var n={zoom:e.config.map_inital_zoom||10,center:e.config.map_initial_position,mapTypeId:e.config.map_type||google.maps.MapTypeId.ROADMAP},i=new google.maps.Map(document.getElementById("dhx_gmap"),n)
i.disableDefaultUI=!1,i.disableDoubleClickZoom=!e.config.readonly,google.maps.event.addListener(i,"dblclick",(function(a){if(!e.config.readonly&&e.config.dblclick_create){var n=a.latLng
t.geocode({latLng:n},(function(t,a){a==google.maps.GeocoderStatus.OK&&(n=t[0].geometry.location,e.addEventNow({lat:n.lat(),lng:n.lng(),event_location:t[0].formatted_address,start_date:e._date,end_date:e.date.add(e._date,e.config.time_step,"minute")}))}))}}))
var r={content:""}
e.config.map_infowindow_max_width&&(r.maxWidth=e.config.map_infowindow_max_width),e.map={_points:[],_markers:[],_infowindow:new google.maps.InfoWindow(r),_infowindows_content:[],_initialization_count:-1,_obj:i},t=new google.maps.Geocoder,e.config.map_resolve_user_location&&navigator.geolocation&&(e._isMapPositionSet||navigator.geolocation.getCurrentPosition((function(t){var a=new google.maps.LatLng(t.coords.latitude,t.coords.longitude)
i.setCenter(a),i.setZoom(e.config.map_zoom_after_resolve||10),e.map._infowindow.setContent(e.locale.labels.marker_geo_success),e.map._infowindow.position=i.getCenter(),e.map._infowindow.open(i),e._isMapPositionSet=!0}),(function(){e.map._infowindow.setContent(e.locale.labels.marker_geo_fail),e.map._infowindow.setPosition(i.getCenter()),e.map._infowindow.open(i),e._isMapPositionSet=!0}))),google.maps.event.addListener(i,"resize",(function(e){a.style.zIndex="5",i.setZoom(i.getZoom())})),google.maps.event.addListener(i,"tilesloaded",(function(e){a.style.zIndex="5"})),a.style.display="none"
var o=e.render_data
function _(){var t=e.get_visible_events()
t.sort((function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e.id>t.id?1:-1:e.start_date>t.start_date?1:-1}))
for(var a="<div "+(s=e._waiAria.mapAttrString())+" class='dhx_map_area'>",n=0;n<t.length;n++){var i=t[n],r=i.id==e._selected_event_id?"dhx_map_line highlight":"dhx_map_line",o=i.color?"background:"+i.color+";":"",_=i.textColor?"color:"+i.textColor+";":"",s=e._waiAria.mapRowAttrString(i),d=e._waiAria.mapDetailsBtnString()
a+="<div "+s+" class='"+r+"' event_id='"+i.id+"' "+e.config.event_attribute+"='"+i.id+"' style='"+o+_+(i._text_style||"")+" width: "+(e.xy.map_date_width+e.xy.map_description_width+2)+"px;'><div class='dhx_map_event_time' style='width: "+e.xy.map_date_width+"px;' >"+e.templates.map_time(i.start_date,i.end_date,i)+"</div>",a+="<div "+d+" class='dhx_event_icon icon_details'>&nbsp;</div>",a+="<div class='line_description' style='width:"+(e.xy.map_description_width-e.xy.map_icon_width)+"px;'>"+e.templates.map_text(i.start_date,i.end_date,i)+"</div></div>"}a+="<div class='dhx_v_border' style="+(e.config.rtl?"'right: ":"'left: ")+(e.xy.map_date_width-2)+"px;'></div><div class='dhx_v_border_description'></div></div>",e._els.dhx_cal_data[0].scrollTop=0,e._els.dhx_cal_data[0].innerHTML=a,e._els.dhx_cal_data[0].style.width=e.xy.map_date_width+e.xy.map_description_width+1+"px"
var l=e._els.dhx_cal_data[0].firstChild.childNodes,c=e._getNavDateElement()
for(c&&(c.innerHTML=e.templates[e._mode+"_date"](e._min_date,e._max_date,e._mode)),e._rendered=[],n=0;n<l.length-2;n++)e._rendered[n]=l[n]}function s(t){var a=document.getElementById(t),n=e._y-e.xy.nav_height
n<0&&(n=0)
var i=e._x-e.xy.map_date_width-e.xy.map_description_width-1
i<0&&(i=0),a.style.height=n+"px",a.style.width=i+"px",e.config.rtl?a.style.marginRight=e.xy.map_date_width+e.xy.map_description_width+1+"px":a.style.marginLeft=e.xy.map_date_width+e.xy.map_description_width+1+"px",a.style.marginTop=e.xy.nav_height+2+"px"}e.render_data=function(t,a){if("map"!=this._mode)return o.apply(this,arguments)
_()
for(var n=e.get_visible_events(),i=0;i<n.length;i++)e.map._markers[n[i].id]||l(n[i],!1,!1)},e.map_view=function(t){e.map._initialization_count++
var a,n=e._els.dhx_gmap[0]
if(e._els.dhx_cal_data[0].style.width=e.xy.map_date_width+e.xy.map_description_width+1+"px",e._min_date=e.config.map_start||e._currentDate(),e._max_date=e.config.map_end||e.date.add(e._currentDate(),1,"year"),e._table_view=!0,function(t){if(t){var a=e.locale.labels
e._els.dhx_cal_header[0].innerHTML="<div class='dhx_map_line' style='width: "+(e.xy.map_date_width+e.xy.map_description_width+2)+"px;' ><div class='headline_date' style='width: "+e.xy.map_date_width+"px;'>"+a.date+"</div><div class='headline_description' style='width: "+e.xy.map_description_width+"px;'>"+a.description+"</div></div>",e._table_view=!0,e.set_sizes()}}(t),t){!function(){e._selected_event_id=null,e.map._infowindow.close()
var t=e.map._markers
for(var a in t)t.hasOwnProperty(a)&&(t[a].setMap(null),delete e.map._markers[a],e.map._infowindows_content[a]&&delete e.map._infowindows_content[a])}(),_(),n.style.display="block",s("dhx_gmap"),a=e.map._obj.getCenter()
for(var i=e.get_visible_events(),r=0;r<i.length;r++)e.map._markers[i[r].id]||l(i[r])}else n.style.display="none"
google.maps.event.trigger(e.map._obj,"resize"),0===e.map._initialization_count&&a&&e.map._obj.setCenter(a),e._selected_event_id&&d(e._selected_event_id)}
var d=function(t){e.map._obj.setCenter(e.map._points[t]),e.callEvent("onClick",[t])},l=function(t,a,n){var i=e.config.map_error_position
t.lat&&t.lng&&(i=new google.maps.LatLng(t.lat,t.lng))
var r=e.templates.marker_text(t.start_date,t.end_date,t)
e._new_event||(e.map._infowindows_content[t.id]=r,e.map._markers[t.id]&&e.map._markers[t.id].setMap(null),e.map._markers[t.id]=new google.maps.Marker({position:i,map:e.map._obj}),google.maps.event.addListener(e.map._markers[t.id],"click",(function(){e.map._infowindow.setContent(e.map._infowindows_content[t.id]),e.map._infowindow.open(e.map._obj,e.map._markers[t.id]),e._selected_event_id=t.id,e.render_data()})),e.map._points[t.id]=i,a&&e.map._obj.setCenter(e.map._points[t.id]),n&&e.callEvent("onClick",[t.id]))}
e.attachEvent("onClick",(function(t,a){if("map"==this._mode){e._selected_event_id=t
for(var n=0;n<e._rendered.length;n++)e._rendered[n].className="dhx_map_line",e._rendered[n].getAttribute(e.config.event_attribute)==t&&(e._rendered[n].className+=" highlight")
e.map._points[t]&&e.map._markers[t]&&(e.map._obj.setCenter(e.map._points[t]),google.maps.event.trigger(e.map._markers[t],"click"))}return!0}))
var c=function(a){a.event_location&&t?t.geocode({address:a.event_location,language:e.uid().toString()},(function(t,n){var i={}
n!=google.maps.GeocoderStatus.OK?(i=e.callEvent("onLocationError",[a.id]))&&!0!==i||(i=e.config.map_error_position):i=t[0].geometry.location,a.lat=i.lat(),a.lng=i.lng(),e._selected_event_id=a.id,e._latLngUpdate=!0,e.callEvent("onEventChanged",[a.id,a]),l(a,!0,!0)})):l(a,!0,!0)},h=function(a){a.event_location&&t&&t.geocode({address:a.event_location,language:e.uid().toString()},(function(t,n){var i={}
n!=google.maps.GeocoderStatus.OK?(i=e.callEvent("onLocationError",[a.id]))&&!0!==i||(i=e.config.map_error_position):i=t[0].geometry.location,a.lat=i.lat(),a.lng=i.lng(),e._latLngUpdate=!0,e.callEvent("onEventChanged",[a.id,a])}))}
e.attachEvent("onEventChanged",(function(t,a){if(this._latLngUpdate)this._latLngUpdate=!1
else{var n=e.getEvent(t)
n.start_date<e._min_date&&n.end_date>e._min_date||n.start_date<e._max_date&&n.end_date>e._max_date||n.start_date.valueOf()>=e._min_date&&n.end_date.valueOf()<=e._max_date?(e.map._markers[t]&&e.map._markers[t].setMap(null),c(n)):(e._selected_event_id=null,e.map._infowindow.close(),e.map._markers[t]&&e.map._markers[t].setMap(null))}return!0})),e.attachEvent("onEventIdChange",(function(t,a){var n=e.getEvent(a)
return(n.start_date<e._min_date&&n.end_date>e._min_date||n.start_date<e._max_date&&n.end_date>e._max_date||n.start_date.valueOf()>=e._min_date&&n.end_date.valueOf()<=e._max_date)&&(e.map._markers[t]&&(e.map._markers[t].setMap(null),delete e.map._markers[t]),e.map._infowindows_content[t]&&delete e.map._infowindows_content[t],c(n)),!0})),e.attachEvent("onEventAdded",(function(t,a){return e._dataprocessor||(a.start_date<e._min_date&&a.end_date>e._min_date||a.start_date<e._max_date&&a.end_date>e._max_date||a.start_date.valueOf()>=e._min_date&&a.end_date.valueOf()<=e._max_date)&&(e.map._markers[t]&&e.map._markers[t].setMap(null),c(a)),!0})),e.attachEvent("onBeforeEventDelete",(function(t,a){return e.map._markers[t]&&e.map._markers[t].setMap(null),e._selected_event_id=null,e.map._infowindow.close(),!0})),e._event_resolve_delay=1500,e.attachEvent("onEventLoading",(function(t){return e.config.map_resolve_event_location&&t.event_location&&!t.lat&&!t.lng&&(e._event_resolve_delay+=1500,function(e,t,a,n){setTimeout((function(){var n=e.apply(t,a)
return e=t=a=null,n}),n||1)}(h,this,[t],e._event_resolve_delay)),!0})),e.attachEvent("onEventCancel",(function(t,a){return a&&(e.map._markers[t]&&e.map._markers[t].setMap(null),e.map._infowindow.close()),!0}))}))},minical:function(e){e.templates.calendar_month=e.date.date_to_str("%F %Y"),e.templates.calendar_scale_date=e.date.date_to_str("%D"),e.templates.calendar_date=e.date.date_to_str("%d"),e.config.minicalendar={mark_events:!0},e._synced_minicalendars=[],e.renderCalendar=function(t,a,n){var i=null,r=t.date||e._currentDate()
if("string"==typeof r&&(r=this.templates.api_date(r)),a)i=this._render_calendar(a.parentNode,r,t,a),e.unmarkCalendar(i)
else{var o=t.container,_=t.position
if("string"==typeof o&&(o=document.getElementById(o)),"string"==typeof _&&(_=document.getElementById(_)),_&&void 0===_.left&&void 0===_.right){var s=e.$domHelpers.getOffset(_)
_={top:s.top+_.offsetHeight,left:s.left}}o||(o=e._get_def_cont(_)),(i=this._render_calendar(o,r,t)).onclick=function(t){var a=t.target||t.srcElement,n=e.$domHelpers
if(n.closest(a,".dhx_month_head")&&!n.closest(a,".dhx_after")&&!n.closest(a,".dhx_before")){var i=n.closest(a,"[data-cell-date]").getAttribute("data-cell-date"),r=e.templates.parse_date(i)
e.unmarkCalendar(this),e.markCalendar(this,r,"dhx_calendar_click"),this._last_date=r,this.conf.handler&&this.conf.handler.call(e,r,this)}}}if(e.config.minicalendar.mark_events)for(var d=e.date.month_start(r),l=e.date.add(d,1,"month"),c=this.getEvents(d,l),h=this["filter_"+this._mode],u={},f=0;f<c.length;f++){var p=c[f]
if(!h||h(p.id,p)){var v=p.start_date
for(v.valueOf()<d.valueOf()&&(v=d),v=e.date.date_part(new Date(v.valueOf()));v<p.end_date&&(u[+v]||(u[+v]=!0,this.markCalendar(i,v,"dhx_year_event")),!((v=this.date.add(v,1,"day")).valueOf()>=l.valueOf())););}}return this._markCalendarCurrentDate(i),i.conf=t,t.sync&&!n&&this._synced_minicalendars.push(i),i.conf._on_xle_handler||(i.conf._on_xle_handler=e.attachEvent("onXLE",(function(){e.updateCalendar(i,i.conf.date)}))),this.config.wai_aria_attributes&&this.config.wai_aria_application_role&&i.setAttribute("role","application"),i},e._get_def_cont=function(e){return this._def_count||(this._def_count=document.createElement("div"),this._def_count.className="dhx_minical_popup",this._def_count.onclick=function(e){e.cancelBubble=!0},document.body.appendChild(this._def_count)),e.left&&(this._def_count.style.left=e.left+"px"),e.right&&(this._def_count.style.right=e.right+"px"),e.top&&(this._def_count.style.top=e.top+"px"),e.bottom&&(this._def_count.style.bottom=e.bottom+"px"),this._def_count._created=new Date,this._def_count},e._locateCalendar=function(t,a){if("string"==typeof a&&(a=e.templates.api_date(a)),+a>+t._max_date||+a<+t._min_date)return null
for(var n=t.querySelector(".dhx_year_body").childNodes[0],i=0,r=new Date(t._min_date);+this.date.add(r,1,"week")<=+a;)r=this.date.add(r,1,"week"),i++
var o=e.config.start_on_monday,_=(a.getDay()||(o?7:0))-(o?1:0)
return n.rows[i].cells[_].firstChild},e.markCalendar=function(e,t,a){var n=this._locateCalendar(e,t)
n&&(n.className+=" "+a)},e.unmarkCalendar=function(e,t,a){if(a=a||"dhx_calendar_click",t=t||e._last_date){var n=this._locateCalendar(e,t)
n&&(n.className=(n.className||"").replace(RegExp(a,"g")))}},e._week_template=function(t){for(var a=t||250,n=0,i=document.createElement("div"),r=this.date.week_start(e._currentDate()),o=0;o<7;o++)this._cols[o]=Math.floor(a/(7-o)),this._render_x_header(o,n,r,i),r=this.date.add(r,1,"day"),a-=this._cols[o],n+=this._cols[o]
return i.lastChild.className+=" dhx_scale_bar_last",i},e.updateCalendar=function(e,t){e.conf.date=t,this.renderCalendar(e.conf,e,!0)},e._mini_cal_arrows=["&nbsp;","&nbsp;"],e._render_calendar=function(t,a,n,i){var r=e.templates,o=this._cols
this._cols=[]
var _=this._mode
this._mode="calendar"
var s=this._colsS
this._colsS={height:0}
var d=new Date(this._min_date),l=new Date(this._max_date),c=new Date(e._date),h=r.month_day,u=this._ignores_detected
this._ignores_detected=0,r.month_day=r.calendar_date,a=this.date.month_start(a)
var f,p=this._week_template(t.offsetWidth-1-this.config.minicalendar.padding)
i?f=i:(f=document.createElement("div")).className="dhx_cal_container dhx_mini_calendar",f.setAttribute("date",this._helpers.formatDate(a)),f.innerHTML="<div class='dhx_year_month'></div><div class='dhx_year_grid"+(e.config.rtl?" dhx_grid_rtl'>":"'>")+"<div class='dhx_year_week'>"+(p?p.innerHTML:"")+"</div><div class='dhx_year_body'></div></div>"
var v=f.querySelector(".dhx_year_month"),g=f.querySelector(".dhx_year_week"),m=f.querySelector(".dhx_year_body")
if(v.innerHTML=this.templates.calendar_month(a),n.navigation)for(var y=function(t,a){var n=e.date.add(t._date,a,"month")
e.updateCalendar(t,n),e._date.getMonth()==t._date.getMonth()&&e._date.getFullYear()==t._date.getFullYear()&&e._markCalendarCurrentDate(t)},b=["dhx_cal_prev_button","dhx_cal_next_button"],x=["left:1px;top:2px;position:absolute;","left:auto; right:1px;top:2px;position:absolute;"],w=[-1,1],k=function(t){return function(){if(n.sync)for(var a=e._synced_minicalendars,i=0;i<a.length;i++)y(a[i],t)
else e.config.rtl&&(t=-t),y(f,t)}},E=[e.locale.labels.prev,e.locale.labels.next],D=0;D<2;D++){var S=document.createElement("div")
S.className=b[D],e._waiAria.headerButtonsAttributes(S,E[D]),S.style.cssText=x[D],S.innerHTML=this._mini_cal_arrows[D],v.appendChild(S),S.onclick=k(w[D])}f._date=new Date(a),f.week_start=(a.getDay()-(this.config.start_on_monday?1:0)+7)%7
var M=f._min_date=this.date.week_start(a)
f._max_date=this.date.add(f._min_date,6,"week"),this._reset_month_scale(m,a,M,6),i||t.appendChild(f),g.style.height=g.childNodes[0].offsetHeight-1+"px"
var C=e.uid()
e._waiAria.minicalHeader(v,C),e._waiAria.minicalGrid(f.querySelector(".dhx_year_grid"),C),e._waiAria.minicalRow(g)
for(var N=g.querySelectorAll(".dhx_scale_bar"),T=0;T<N.length;T++)e._waiAria.minicalHeadCell(N[T])
var A=m.querySelectorAll("td"),O=new Date(M)
for(T=0;T<A.length;T++)e._waiAria.minicalDayCell(A[T],new Date(O)),O=e.date.add(O,1,"day")
return e._waiAria.minicalHeader(v,C),this._cols=o,this._mode=_,this._colsS=s,this._min_date=d,this._max_date=l,e._date=c,r.month_day=h,this._ignores_detected=u,f},e.destroyCalendar=function(t,a){!t&&this._def_count&&this._def_count.firstChild&&(a||(new Date).valueOf()-this._def_count._created.valueOf()>500)&&(t=this._def_count.firstChild),t&&(t.onclick=null,t.innerHTML="",t.parentNode&&t.parentNode.removeChild(t),this._def_count&&(this._def_count.style.top="-1000px"),t.conf&&t.conf._on_xle_handler&&e.detachEvent(t.conf._on_xle_handler))},e.isCalendarVisible=function(){return!!(this._def_count&&parseInt(this._def_count.style.top,10)>0)&&this._def_count},e._attach_minical_events=function(){e.event(document.body,"click",(function(){e.destroyCalendar()})),e._attach_minical_events=function(){}},e.attachEvent("onTemplatesReady",(function(){e._attach_minical_events()})),e.templates.calendar_time=e.date.date_to_str("%d-%m-%Y"),e.form_blocks.calendar_time={render:function(t){var a="<input class='dhx_readonly' type='text' readonly='true'>",n=e.config,i=this.date.date_part(e._currentDate()),r=1440,o=0
n.limit_time_select&&(o=60*n.first_hour,r=60*n.last_hour+1),i.setHours(o/60),t._time_values=[],a+=" <select class='dhx_lightbox_time_select'>"
for(var _=o;_<r;_+=1*this.config.time_step)a+="<option value='"+_+"'>"+this.templates.time_picker(i)+"</option>",t._time_values.push(_),i=this.date.add(i,this.config.time_step,"minute")
return"<div style='height:30px;padding-top:0; font-size:inherit;' class='dhx_section_time dhx_lightbox_minical'>"+(a+="</select>")+"<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>"+a+"</div>"},set_value:function(t,a,n,i){var r,o,_=t.getElementsByTagName("input"),s=t.getElementsByTagName("select"),d=function(t,a,n){t.onclick=function(){e.destroyCalendar(null,!0),e.renderCalendar({position:t,date:new Date(this._date),navigation:!0,handler:function(a){t.value=e.templates.calendar_time(a),t._date=new Date(a),e.destroyCalendar(),e.config.event_duration&&e.config.auto_end_date&&0===n&&u()}})}}
if(e.config.full_day){if(!t._full_day){var l="<label class='dhx_fullday'><input type='checkbox' name='full_day' value='true'> "+e.locale.labels.full_day+"&nbsp;</label></input>"
e.config.wide_form||(l=t.previousSibling.innerHTML+l),t.previousSibling.innerHTML=l,t._full_day=!0}var c=t.previousSibling.getElementsByTagName("input")[0],h=0===e.date.time_part(n.start_date)&&0===e.date.time_part(n.end_date)
c.checked=h,s[0].disabled=c.checked,s[1].disabled=c.checked,c.onclick=function(){if(!0===c.checked){var a={}
e.form_blocks.calendar_time.get_value(t,a),r=e.date.date_part(a.start_date),(+(o=e.date.date_part(a.end_date))==+r||+o>=+r&&(0!==n.end_date.getHours()||0!==n.end_date.getMinutes()))&&(o=e.date.add(o,1,"day"))}var i=r||n.start_date,d=o||n.end_date
f(_[0],i),f(_[1],d),s[0].value=60*i.getHours()+i.getMinutes(),s[1].value=60*d.getHours()+d.getMinutes(),s[0].disabled=c.checked,s[1].disabled=c.checked}}if(e.config.event_duration&&e.config.auto_end_date){var u=function(){e.config.auto_end_date&&e.config.event_duration&&(r=e.date.add(_[0]._date,s[0].value,"minute"),o=new Date(r.getTime()+60*e.config.event_duration*1e3),_[1].value=e.templates.calendar_time(o),_[1]._date=e.date.date_part(new Date(o)),s[1].value=60*o.getHours()+o.getMinutes())}
s[0].onchange=u}function f(t,a,n){d(t,a,n),t.value=e.templates.calendar_time(a),t._date=e.date.date_part(new Date(a))}function p(e){for(var t=i._time_values,a=60*e.getHours()+e.getMinutes(),n=a,r=!1,o=0;o<t.length;o++){var _=t[o]
if(_===a){r=!0
break}_<a&&(n=_)}return r||n?r?a:n:-1}f(_[0],n.start_date,0),f(_[1],n.end_date,1),d=function(){},s[0].value=p(n.start_date),s[1].value=p(n.end_date)},get_value:function(t,a){var n=t.getElementsByTagName("input"),i=t.getElementsByTagName("select")
return a.start_date=e.date.add(n[0]._date,i[0].value,"minute"),a.end_date=e.date.add(n[1]._date,i[1].value,"minute"),a.end_date<=a.start_date&&(a.end_date=e.date.add(a.start_date,e.config.time_step,"minute")),{start_date:new Date(a.start_date),end_date:new Date(a.end_date)}},focus:function(e){}},e.linkCalendar=function(t,a){var n=function(){var n=e._date,i=new Date(n.valueOf())
return a&&(i=a(i)),i.setDate(1),e.updateCalendar(t,i),!0}
e.attachEvent("onViewChange",n),e.attachEvent("onXLE",n),e.attachEvent("onEventAdded",n),e.attachEvent("onEventChanged",n),e.attachEvent("onEventDeleted",n),n()},e._markCalendarCurrentDate=function(t){var a=e.getState(),n=a.min_date,i=a.max_date,r=a.mode,o=e.date.month_start(new Date(t._date)),_=e.date.add(o,1,"month")
if(!({month:!0,year:!0,agenda:!0,grid:!0}[r]||n.valueOf()<=o.valueOf()&&i.valueOf()>=_.valueOf()))for(var s=n;s.valueOf()<i.valueOf();)o.valueOf()<=s.valueOf()&&_>s&&e.markCalendar(t,s,"dhx_calendar_click"),s=e.date.add(s,1,"day")},e.attachEvent("onEventCancel",(function(){e.destroyCalendar(null,!0)}))},monthheight:function(e){e.attachEvent("onTemplatesReady",(function(){e.xy.scroll_width=0
var t=e.render_view_data
e.render_view_data=function(){var a=this._els.dhx_cal_data[0]
a.firstChild._h_fix=!0,t.apply(e,arguments)
var n=parseInt(a.style.height)
a.style.height="1px",a.style.height=a.scrollHeight+"px",this._obj.style.height=this._obj.clientHeight+a.scrollHeight-n+"px"}
var a=e._reset_month_scale
e._reset_month_scale=function(t,n,i,r){var o={clientHeight:100}
a.apply(e,[o,n,i,r]),t.innerHTML=o.innerHTML}}))},multisection:function(e){e.config.multisection=!0,e.config.multisection_shift_all=!0,e.config.section_delimiter=",",e.attachEvent("onSchedulerReady",(function(){ye(e)
var t=e._update_unit_section
e._update_unit_section=function(a){return e._update_sections(a,t)}
var a=e._update_timeline_section
e._update_timeline_section=function(t){return e._update_sections(t,a)},e.isMultisectionEvent=function(e){return!(!e||!this._get_multisection_view())&&this._get_event_sections(e).length>1},e._get_event_sections=function(e){var t=e[this._get_section_property()]||""
return this._parse_event_sections(t)},e._parse_event_sections=function(t){return t instanceof Array?t:t.toString().split(e.config.section_delimiter)},e._clear_copied_events(),e._split_events=function(t){var a=[],n=this._get_multisection_view(),i=this._get_section_property()
if(n)for(var r=0;r<t.length;r++){var o=this._get_event_sections(t[r])
if(o.length>1){for(var _=0;_<o.length;_++)if(void 0!==n.order[o[_]]){var s=e._copy_event(t[r])
s[i]=o[_],a.push(s)}}else a.push(t[r])}else a=t
return a},e._get_multisection_view=function(){return!!this.config.multisection&&e._get_section_view()}
var n=e.get_visible_events
e.get_visible_events=function(e){this._clear_copied_events()
var t=n.apply(this,arguments)
if(this._get_multisection_view()){t=this._split_events(t)
for(var a=0;a<t.length;a++)this.is_visible_events(t[a])||(t.splice(a,1),a--)
this._register_copies_array(t)}return t},e._rendered_events={}
var i=e.render_view_data
e.render_view_data=function(e,t){return this._get_multisection_view()&&e&&(e=this._split_events(e),this._restore_render_flags(e)),i.apply(this,[e,t])},e._update_sections=function(t,a){var n=t.view,i=t.event,r=t.pos
if(e.isMultisectionEvent(i)){if(e._drag_event._orig_section||(e._drag_event._orig_section=r.section),e._drag_event._orig_section!=r.section){var o=n.order[r.section]-n.order[e._drag_event._orig_section]
if(o){var _=this._get_event_sections(i),s=[],d=!0
if(e.config.multisection_shift_all)for(var l=0;l<_.length;l++){if(null===(c=e._shift_sections(n,_[l],o))){s=_,d=!1
break}s[l]=c}else for(l=0;l<_.length;l++){if(_[l]==r.section){s=_,d=!1
break}if(_[l]==e._drag_event._orig_section){var c
if(null===(c=e._shift_sections(n,_[l],o))){s=_,d=!1
break}s[l]=c}else s[l]=_[l]}d&&(e._drag_event._orig_section=r.section),i[e._get_section_property()]=s.join(e.config.section_delimiter)}}}else a.apply(e,[t])},e._shift_sections=function(e,t,a){for(var n=null,i=e.y_unit||e.options,r=0;r<i.length;r++)if(i[r].key==t){n=r
break}var o=i[n+a]
return o?o.key:null}
var r=e._get_blocked_zones
e._get_blocked_zones=function(e,t,a,n,i){if(t&&this.config.multisection){t=this._parse_event_sections(t)
for(var o=[],_=0;_<t.length;_++)o=o.concat(r.apply(this,[e,t[_],a,n,i]))
return o}return r.apply(this,arguments)}
var o=e._check_sections_collision
e._check_sections_collision=function(e,t){if(this.config.multisection&&this._get_section_view()){e=this._split_events([e]),t=this._split_events([t])
for(var a=!1,n=0,i=e.length;n<i&&!a;n++)for(var r=0,_=t.length;r<_;r++)if(o.apply(this,[e[n],t[r]])){a=!0
break}return a}return o.apply(this,arguments)}}))},multiselect:function(e){e.form_blocks.multiselect={render:function(e){var t="dhx_multi_select_control dhx_multi_select_"+e.name
e.vertical&&(t+=" dhx_multi_select_control_vertical")
for(var a="<div class='"+t+"' style='overflow: auto; height: "+e.height+"px; position: relative;' >",n=0;n<e.options.length;n++)a+="<label><input type='checkbox' value='"+e.options[n].key+"'/>"+e.options[n].label+"</label>",e.vertical&&(a+="<br/>")
return a+"</div>"},set_value:function(t,a,n,i){for(var r=t.getElementsByTagName("input"),o=0;o<r.length;o++)r[o].checked=!1
function _(e){for(var a=t.getElementsByTagName("input"),n=0;n<a.length;n++)a[n].checked=!!e[a[n].value]}var s={}
if(n[i.map_to]){var d=(n[i.map_to]+"").split(i.delimiter||e.config.section_delimiter||",")
for(o=0;o<d.length;o++)s[d[o]]=!0
_(s)}else{if(e._new_event||!i.script_url)return
var l=document.createElement("div")
l.className="dhx_loading",l.style.cssText="position: absolute; top: 40%; left: 40%;",t.appendChild(l)
var c=[i.script_url,-1==i.script_url.indexOf("?")?"?":"&","dhx_crosslink_"+i.map_to+"="+n.id+"&uid="+e.uid()].join("")
e.ajax.get(c,(function(a){var n=function(e,t){try{for(var a=JSON.parse(e.xmlDoc.responseText),n={},i=0;i<a.length;i++){var r=a[i]
n[r.value||r.key||r.id]=!0}return n}catch(e){return null}}(a)
n||(n=function(t,a){for(var n=e.ajax.xpath("//data/item",t.xmlDoc),i={},r=0;r<n.length;r++)i[n[r].getAttribute(a.map_to)]=!0
return i}(a,i)),_(n),t.removeChild(l)}))}},get_value:function(t,a,n){for(var i=[],r=t.getElementsByTagName("input"),o=0;o<r.length;o++)r[o].checked&&i.push(r[o].value)
return i.join(n.delimiter||e.config.section_delimiter||",")},focus:function(e){}}},multisource:function(e){var t=e._load
e._load=function(e,a){if("object"==Se(e=e||this._load_url))for(var n=function(e){var t=function(){}
return t.prototype=e,t}(this._loaded),i=0;i<e.length;i++)this._loaded=new n,t.call(this,e[i],a)
else t.apply(this,arguments)}},mvc:function(e){var t,a={use_id:!1}
function n(e){var t={}
for(var n in e)0!==n.indexOf("_")&&(t[n]=e[n])
return a.use_id||delete t.id,t}function i(e){e._not_render=!1,e._render_wait&&e.render_view_data(),e._loading=!1,e.callEvent("onXLE",[])}function r(e){return a.use_id?e.id:e.cid}e.backbone=function(o,_){_&&(a=_),o.bind("change",(function(a,n){var i=r(a),o=e._events[i]=a.toJSON()
o.id=i,e._init_event(o),clearTimeout(t),t=setTimeout((function(){e.updateView()}),1)})),o.bind("remove",(function(t,a){var n=r(t)
e._events[n]&&e.deleteEvent(n)}))
var s=[]
function d(){s.length&&(e.parse(s,"json"),s=[])}o.bind("add",(function(t,a){var n=r(t)
if(!e._events[n]){var i=t.toJSON()
i.id=n,e._init_event(i),s.push(i),1==s.length&&setTimeout(d,1)}})),o.bind("request",(function(t){t instanceof Backbone.Collection&&function(e){e._loading=!0,e._not_render=!0,e.callEvent("onXLS",[])}(e)})),o.bind("sync",(function(t){t instanceof Backbone.Collection&&i(e)})),o.bind("error",(function(t){t instanceof Backbone.Collection&&i(e)})),e.attachEvent("onEventCreated",(function(t){var a=new o.model(e.getEvent(t))
return e._events[t]=a.toJSON(),e._events[t].id=t,!0})),e.attachEvent("onEventAdded",(function(t){if(!o.get(t)){var a=n(e.getEvent(t)),i=new o.model(a),_=r(i)
_!=t&&this.changeEventId(t,_),o.add(i),o.trigger("scheduler:add",i)}return!0})),e.attachEvent("onEventChanged",(function(t){var a=o.get(t),i=n(e.getEvent(t))
return a.set(i),o.trigger("scheduler:change",a),!0})),e.attachEvent("onEventDeleted",(function(e){var t=o.get(e)
return t&&(o.trigger("scheduler:remove",t),o.remove(e)),!0}))}},outerdrag:function(e){e.attachEvent("onTemplatesReady",(function(){var t,a=new dhtmlDragAndDropObject,n=a.stopDrag
function i(a,n,i,r){if(!e.checkEvent("onBeforeExternalDragIn")||e.callEvent("onBeforeExternalDragIn",[a,n,i,r,t])){var o=e.attachEvent("onEventCreated",(function(n){e.callEvent("onExternalDragIn",[n,a,t])||(this._drag_mode=this._drag_id=null,this.deleteEvent(n))})),_=e.getActionData(t),s={start_date:new Date(_.date)}
if(e.matrix&&e.matrix[e._mode]){var d=e.matrix[e._mode]
s[d.y_property]=_.section
var l=e._locate_cell_timeline(t)
s.start_date=d._trace_x[l.x],s.end_date=e.date.add(s.start_date,d.x_step,d.x_unit)}e._props&&e._props[e._mode]&&(s[e._props[e._mode].map_to]=_.section),e.addEventNow(s),e.detachEvent(o)}}a.stopDrag=function(e){return t=e,n.apply(this,arguments)},a.addDragLanding(e._els.dhx_cal_data[0],{_drag:function(e,t,a,n){i(e,t,a,n)},_dragIn:function(e,t){return e},_dragOut:function(e){return this}}),dhtmlx.DragControl&&dhtmlx.DragControl.addDrop(e._els.dhx_cal_data[0],{onDrop:function(e,a,n,r){var o=dhtmlx.DragControl.getMaster(e)
t=r,i(e,o,a,r.target||r.srcElement)},onDragIn:function(e,t,a){return t}},!0)}))},pdf:function(e){var t,a,n=new RegExp("<[^>]*>","g"),i=new RegExp("<br[^>]*>","g")
function r(e){return e.replace(i,"\n").replace(n,"")}function o(e,a){e=parseFloat(e),a=parseFloat(a),isNaN(a)||(e-=a)
var n=s(e)
return e=e-n.width+n.cols*t,isNaN(e)?"auto":100*e/t}function _(e,a,n){e=parseFloat(e),a=parseFloat(a),!isNaN(a)&&n&&(e-=a)
var i=s(e)
return e=e-i.width+i.cols*t,isNaN(e)?"auto":100*e/(t-(isNaN(a)?0:a))}function s(t){for(var a=0,n=e._els.dhx_cal_header[0].childNodes,i=n[1]?n[1].childNodes:n[0].childNodes,r=0;r<i.length;r++){var o=i[r].style?i[r]:i[r].parentNode,_=parseFloat(o.style.width)
if(!(t>_))break
t-=_+1,a+=_+1}return{width:a,cols:r}}function d(e){return e=parseFloat(e),isNaN(e)?"auto":100*e/a}function l(e,t){return(window.getComputedStyle?window.getComputedStyle(e,null)[t]:e.currentStyle?e.currentStyle[t]:null)||""}function c(t,a){for(var n=parseInt(t.style.left,10),i=0;i<e._cols.length;i++)if((n-=e._cols[i])<0)return i
return a}function h(t,a){for(var n=parseInt(t.style.top,10),i=0;i<e._colsS.heights.length;i++)if(e._colsS.heights[i]>n)return i
return a}function u(e){return e?"<"+e+">":""}function f(e){return e?"</"+e+">":""}function p(e,t,a,n){var i="<"+e+" profile='"+t+"'"
return a&&(i+=" header='"+a+"'"),n&&(i+=" footer='"+n+"'"),i+">"}function v(){var t="",n=e._mode
if(e.matrix&&e.matrix[e._mode]&&(n="cell"==e.matrix[e._mode].render?"matrix":"timeline"),t+="<scale mode='"+n+"' today='"+e._els.dhx_cal_date[0].innerHTML+"'>","week_agenda"==e._mode)for(var i=e._els.dhx_cal_data[0].getElementsByTagName("DIV"),o=0;o<i.length;o++)"dhx_wa_scale_bar"==i[o].className&&(t+="<column>"+r(i[o].innerHTML)+"</column>")
else if("agenda"==e._mode||"map"==e._mode)t+="<column>"+r((i=e._els.dhx_cal_header[0].childNodes[0].childNodes)[0].innerHTML)+"</column><column>"+r(i[1].innerHTML)+"</column>"
else if("year"==e._mode)for(i=e._els.dhx_cal_data[0].childNodes,o=0;o<i.length;o++)t+="<month label='"+r(i[o].querySelector(".dhx_year_month").innerHTML)+"'>",t+=m(i[o].querySelector(".dhx_year_week").childNodes),t+=g(i[o].querySelector(".dhx_year_body")),t+="</month>"
else{t+="<x>",t+=m(i=e._els.dhx_cal_header[0].childNodes),t+="</x>"
var _=e._els.dhx_cal_data[0]
if(e.matrix&&e.matrix[e._mode]){for(t+="<y>",o=0;o<_.firstChild.rows.length;o++)t+="<row><![CDATA["+r(_.firstChild.rows[o].cells[0].innerHTML)+"]]></row>"
t+="</y>",a=_.firstChild.rows[0].cells[0].offsetHeight}else if("TABLE"==_.firstChild.tagName)t+=g(_)
else{for(_=_.childNodes[_.childNodes.length-1];-1==_.className.indexOf("dhx_scale_holder");)_=_.previousSibling
for(_=_.childNodes,t+="<y>",o=0;o<_.length;o++)t+="\n<row><![CDATA["+r(_[o].innerHTML)+"]]></row>"
t+="</y>",a=_[0].offsetHeight}}return t+"</scale>"}function g(e){for(var t="",n=e.querySelectorAll("tr"),i=0;i<n.length;i++){for(var o=[],_=n[i].querySelectorAll("td"),s=0;s<_.length;s++)o.push(_[s].querySelector(".dhx_month_head").innerHTML)
t+="\n<row height='"+_[0].offsetHeight+"'><![CDATA["+r(o.join("|"))+"]]></row>",a=_[0].offsetHeight}return t}function m(a){var n,i=""
e.matrix&&e.matrix[e._mode]&&(e.matrix[e._mode].second_scale&&(n=a[1].childNodes),a=a[0].childNodes)
for(var o=0;o<a.length;o++)i+="\n<column><![CDATA["+r(a[o].innerHTML)+"]]></column>"
if(t=a[0].offsetWidth,n){var _=0,s=a[0].offsetWidth,d=1
for(o=0;o<n.length;o++)i+="\n<column second_scale='"+d+"'><![CDATA["+r(n[o].innerHTML)+"]]></column>",(_+=n[o].offsetWidth)>=s&&(s+=a[d]?a[d].offsetWidth:0,d++),t=n[0].offsetWidth}return i}function y(t){var n="",i=e._rendered,s=e.matrix&&e.matrix[e._mode]
if("agenda"==e._mode||"map"==e._mode)for(var u=0;u<i.length;u++)n+="<event><head><![CDATA["+r(i[u].childNodes[0].innerHTML)+"]]></head><body><![CDATA["+r(i[u].childNodes[2].innerHTML)+"]]></body></event>"
else if("week_agenda"==e._mode)for(u=0;u<i.length;u++)n+="<event day='"+i[u].parentNode.getAttribute("day")+"'><body>"+r(i[u].innerHTML)+"</body></event>"
else if("year"==e._mode)for(i=e.get_visible_events(),u=0;u<i.length;u++){var f=i[u].start_date
for(f.valueOf()<e._min_date.valueOf()&&(f=e._min_date);f<i[u].end_date;){var p=f.getMonth()+12*(f.getFullYear()-e._min_date.getFullYear())-e.week_starts._month,v=e.week_starts[p]+f.getDate()-1,g=t?l(e._get_year_cell(f),"color"):"",m=t?l(e._get_year_cell(f),"backgroundColor"):""
if(n+="<event day='"+v%7+"' week='"+Math.floor(v/7)+"' month='"+p+"' backgroundColor='"+m+"' color='"+g+"'></event>",(f=e.date.add(f,1,"day")).valueOf()>=e._max_date.valueOf())break}}else if(s&&"cell"==s.render)for(i=e._els.dhx_cal_data[0].getElementsByTagName("TD"),u=0;u<i.length;u++)g=t?l(i[u],"color"):"",n+="\n<event><body backgroundColor='"+(m=t?l(i[u],"backgroundColor"):"")+"' color='"+g+"'><![CDATA["+r(i[u].innerHTML)+"]]></body></event>"
else for(u=0;u<i.length;u++){var y,b
if(e.matrix&&e.matrix[e._mode])y=o(i[u].style.left),b=o(i[u].offsetWidth)-1
else{var x=e.config.use_select_menu_space?0:26
y=_(i[u].style.left,x,!0),b=_(i[u].style.width,x)-1}if(!isNaN(1*b)){var w=d(i[u].style.top),k=d(i[u].style.height),E=i[u].className.split(" ")[0].replace("dhx_cal_","")
if("dhx_tooltip_line"!==E){var D=e.getEvent(i[u].getAttribute(e.config.event_attribute))
if(D){v=D._sday
var S=D._sweek,M=D._length||0
if("month"==e._mode)k=parseInt(i[u].offsetHeight,10),w=parseInt(i[u].style.top,10)-e.xy.month_head_height,v=c(i[u],v),S=h(i[u],S)
else if(e.matrix&&e.matrix[e._mode]){v=0,S=i[u].parentNode.parentNode.parentNode.rowIndex
var C=a
a=i[u].parentNode.offsetHeight,w=d(i[u].style.top),w-=.2*w,a=C}else{if(i[u].parentNode==e._els.dhx_cal_data[0])continue
var N=e._els.dhx_cal_data[0].childNodes[0],T=parseFloat(-1!=N.className.indexOf("dhx_scale_holder")?N.style.left:0)
y+=o(i[u].parentNode.style.left,T)}n+="\n<event week='"+S+"' day='"+v+"' type='"+E+"' x='"+y+"' y='"+w+"' width='"+b+"' height='"+k+"' len='"+M+"'>","event"==E?(n+="<header><![CDATA["+r(i[u].childNodes[1].innerHTML)+"]]></header>",g=t?l(i[u].childNodes[2],"color"):"",n+="<body backgroundColor='"+(m=t?l(i[u].childNodes[2],"backgroundColor"):"")+"' color='"+g+"'><![CDATA["+r(i[u].childNodes[2].innerHTML)+"]]></body>"):(g=t?l(i[u],"color"):"",n+="<body backgroundColor='"+(m=t?l(i[u],"backgroundColor"):"")+"' color='"+g+"'><![CDATA["+r(i[u].innerHTML)+"]]></body>"),n+="</event>"}}}}return n}function b(t,a,n,i,r,o){var _=!1
"fullcolor"==i&&(_=!0,i="color"),i=i||"color"
var s=""
if(t){var d=e._date,l=e._mode
a=e.date[n+"_start"](a),a=e.date["get_"+n+"_end"]?e.date["get_"+n+"_end"](a):e.date.add(a,1,n),s=p("pages",i,r,o)
for(var c=new Date(t);+c<+a;c=this.date.add(c,1,n))this.setCurrentView(c,n),s+=u("page")+v().replace("–","-")+y(_)+f("page")
s+=f("pages"),this.setCurrentView(d,l)}else s=p("data",i,r,o)+v().replace("–","-")+y(_)+f("data")
return s}function x(t,a,n,i,r,o,_){!function(t,a){var n=e.uid(),i=document.createElement("div")
i.style.display="none",document.body.appendChild(i),i.innerHTML='<form id="'+n+'" method="post" target="_blank" action="'+a+'" accept-charset="utf-8" enctype="application/x-www-form-urlencoded"><input type="hidden" name="mycoolxmlbody"/> </form>',document.getElementById(n).firstChild.value=encodeURIComponent(t),document.getElementById(n).submit(),i.parentNode.removeChild(i)}("object"==Me(r)?function(e){for(var t="<data>",a=0;a<e.length;a++)t+=e[a].source.getPDFData(e[a].start,e[a].end,e[a].view,e[a].mode,e[a].header,e[a].footer)
return t+"</data>"}(r):b.apply(this,[t,a,n,r,o,_]),i)}e.getPDFData=b,e.toPDF=function(e,t,a,n){return x.apply(this,[null,null,null,e,t,a,n])},e.toPDFRange=function(t,a,n,i,r,o,_){return"string"==typeof t&&(t=e.templates.api_date(t),a=e.templates.api_date(a)),x.apply(this,arguments)}},quick_info:function(e){e.config.icons_select=["icon_details","icon_delete"],e.config.details_on_create=!0,e.config.show_quick_info=!0,e.xy.menu_width=0,e.attachEvent("onClick",(function(t){return e.showQuickInfo(t),!0})),function(){for(var t=["onEmptyClick","onViewChange","onLightbox","onBeforeEventDelete","onBeforeDrag"],a=function(){return e.hideQuickInfo(!0),!0},n=0;n<t.length;n++)e.attachEvent(t[n],a)}(),e.templates.quick_info_title=function(e,t,a){return a.text.substr(0,50)},e.templates.quick_info_content=function(e,t,a){return a.details||a.text},e.templates.quick_info_date=function(t,a,n){return e.isOneDayEvent(n)&&e.config.rtl?e.templates.day_date(t,a,n)+" "+e.templates.event_header(a,t,n):e.isOneDayEvent(n)?e.templates.day_date(t,a,n)+" "+e.templates.event_header(t,a,n):e.config.rtl?e.templates.week_date(a,t,n):e.templates.week_date(t,a,n)},e.showQuickInfo=function(e){if(e!=this._quick_info_box_id&&this.config.show_quick_info){this.hideQuickInfo(!0)
var t=this._get_event_counter_part(e)
t&&(this._quick_info_box=this._init_quick_info(t),this._fill_quick_data(e),this._show_quick_info(t),this.callEvent("onQuickInfo",[e]))}},function(){function t(e){e=e||""
var t,a=parseFloat(e),n=e.match(/m?s/)
switch(n&&(n=n[0]),n){case"s":t=1e3*a
break
case"ms":t=a
break
default:t=0}return t}e.hideQuickInfo=function(a){var n=this._quick_info_box,i=this._quick_info_box_id
if(this._quick_info_box_id=0,n&&n.parentNode){var r=n.offsetWidth
if(e.config.quick_info_detached)return this.callEvent("onAfterQuickInfo",[i]),n.parentNode.removeChild(n)
if("auto"==n.style.right?n.style.left=-r+"px":n.style.right=-r+"px",a)n.parentNode.removeChild(n)
else{var o
window.getComputedStyle?o=window.getComputedStyle(n,null):n.currentStyle&&(o=n.currentStyle)
var _=t(o["transition-delay"])+t(o["transition-duration"])
setTimeout((function(){n.parentNode&&n.parentNode.removeChild(n)}),_)}this.callEvent("onAfterQuickInfo",[i])}}}(),e.event(window,"keydown",(function(t){27==t.keyCode&&e.hideQuickInfo()})),e._show_quick_info=function(t){var a=e._quick_info_box
e._obj.appendChild(a)
var n=a.offsetWidth,i=a.offsetHeight
if(e.config.quick_info_detached){var r=t.left-t.dx*(n-t.width)
r+n>window.innerWidth&&(r=window.innerWidth-n),r=Math.max(0,r),a.style.left=r+"px",a.style.top=t.top-(t.dy?i:-t.height)+"px"}else a.style.top=this.xy.scale_height+this.xy.nav_height+20+"px",1==t.dx?(a.style.right="auto",a.style.left=-n+"px",setTimeout((function(){a.style.left="-10px"}),1)):(a.style.left="auto",a.style.right=-n+"px",setTimeout((function(){a.style.right="-10px"}),1)),a.className=a.className.replace(" dhx_qi_left","").replace(" dhx_qi_right","")+" dhx_qi_"+(1==t.dx?"left":"right")},e.attachEvent("onTemplatesReady",(function(){if(e.hideQuickInfo(),this._quick_info_box){var t=this._quick_info_box
t.parentNode&&t.parentNode.removeChild(t),this._quick_info_box=null}})),e._quick_info_onscroll_handler=function(t){e.hideQuickInfo()},e._init_quick_info=function(){if(!this._quick_info_box){var t=e.xy,a=this._quick_info_box=document.createElement("div")
this._waiAria.quickInfoAttr(a),a.className="dhx_cal_quick_info",e.$testmode&&(a.className+=" dhx_no_animate"),e.config.rtl&&(a.className+=" dhx_quick_info_rtl")
var n=this._waiAria.quickInfoHeaderAttrString(),i='<div class="dhx_cal_qi_title" style="height:'+t.quick_info_title+'px" '+n+'><div class="dhx_cal_qi_tcontent"></div><div  class="dhx_cal_qi_tdate"></div></div><div class="dhx_cal_qi_content"></div>'
i+='<div class="dhx_cal_qi_controls" style="height:'+t.quick_info_buttons+'px">'
for(var r=e.config.icons_select,o=0;o<r.length;o++)i+="<div "+(n=this._waiAria.quickInfoButtonAttrString(this.locale.labels[r[o]]))+' class="dhx_qi_big_icon '+r[o]+'" title="'+e.locale.labels[r[o]]+"\"><div class='dhx_menu_icon "+r[o]+"'></div><div>"+e.locale.labels[r[o]]+"</div></div>"
i+="</div>",a.innerHTML=i,e.event(a,"click",(function(t){e._qi_button_click(t.target||t.srcElement)})),e.config.quick_info_detached&&(e._detachDomEvent(e._els.dhx_cal_data[0],"scroll",e._quick_info_onscroll_handler),e.event(e._els.dhx_cal_data[0],"scroll",e._quick_info_onscroll_handler))}return this._quick_info_box},e._qi_button_click=function(t){var a=e._quick_info_box
if(t&&t!=a){var n=e._getClassName(t)
if(-1!=n.indexOf("_icon")){var i=e._quick_info_box_id
e._click.buttons[n.split(" ")[1].replace("icon_","")](i)}else e._qi_button_click(t.parentNode)}},e._get_event_counter_part=function(t){for(var a=e.getRenderedEvent(t),n=0,i=0,r=a;r&&r!=e._obj;)n+=r.offsetLeft,i+=r.offsetTop-r.scrollTop,r=r.offsetParent
return r?{left:n,top:i,dx:n+a.offsetWidth/2>e._x/2?1:0,dy:i+a.offsetHeight/2>e._y/2?1:0,width:a.offsetWidth,height:a.offsetHeight}:0},e._fill_quick_data=function(t){var a=e.getEvent(t),n=e._quick_info_box
e._quick_info_box_id=t
var i={content:e.templates.quick_info_title(a.start_date,a.end_date,a),date:e.templates.quick_info_date(a.start_date,a.end_date,a)},r=n.firstChild.firstChild
r.innerHTML=i.content,r.nextSibling.innerHTML=i.date,e._waiAria.quickInfoHeader(n,[i.content,i.date].join(" ")),n.firstChild.nextSibling.innerHTML=e.templates.quick_info_content(a.start_date,a.end_date,a)}},readonly:function(e){e.attachEvent("onTemplatesReady",(function(){var t
e.form_blocks.recurring&&(t=e.form_blocks.recurring.set_value)
var a=e.config.buttons_left.slice(),n=e.config.buttons_right.slice()
function i(e,t,a,n){for(var i=t.getElementsByTagName(e),r=a.getElementsByTagName(e),o=r.length-1;o>=0;o--)if(a=r[o],n){var _=document.createElement("span")
_.className="dhx_text_disabled",_.innerHTML=n(i[o]),a.parentNode.insertBefore(_,a),a.parentNode.removeChild(a)}else a.disabled=!0,t.checked&&(a.checked=!0)}e.attachEvent("onBeforeLightbox",(function(i){this.config.readonly_form||this.getEvent(i).readonly?this.config.readonly_active=!0:(this.config.readonly_active=!1,e.config.buttons_left=a.slice(),e.config.buttons_right=n.slice(),e.form_blocks.recurring&&(e.form_blocks.recurring.set_value=t))
var r=this.config.lightbox.sections
if(this.config.readonly_active){for(var o=0;o<r.length;o++)"recurring"==r[o].type&&this.config.readonly_active&&e.form_blocks.recurring&&(e.form_blocks.recurring.set_value=function(t,a,n){var i=e.$domHelpers.closest(t,".dhx_wrap_section")
i.querySelector(".dhx_cal_lsection").display="none",i.querySelector(".dhx_form_repeat").display="none",i.style.display="none",e.setLightboxSize()})
var _=["dhx_delete_btn","dhx_save_btn"],s=[e.config.buttons_left,e.config.buttons_right]
for(o=0;o<_.length;o++)for(var d=_[o],l=0;l<s.length;l++){for(var c=s[l],h=-1,u=0;u<c.length;u++)if(c[u]==d){h=u
break}-1!=h&&c.splice(h,1)}}return this.resetLightbox(),!0}))
var r=e._fill_lightbox
e._fill_lightbox=function(){var t=this.getLightbox()
this.config.readonly_active&&(t.style.visibility="hidden",t.style.display="block")
var a=r.apply(this,arguments)
if(this.config.readonly_active&&(t.style.visibility="",t.style.display="none"),this.config.readonly_active){var n=this.getLightbox(),_=this._lightbox_r=n.cloneNode(!0)
_.id=e.uid(),_.className+=" dhx_cal_light_readonly",i("textarea",n,_,(function(e){return e.value})),i("input",n,_,!1),i("select",n,_,(function(e){return e.options.length?e.options[Math.max(e.selectedIndex||0,0)].text:""})),n.parentNode.insertBefore(_,n),o.call(this,_),e._lightbox&&e._lightbox.parentNode.removeChild(e._lightbox),this._lightbox=_,e.config.drag_lightbox&&(_.firstChild.onmousedown=e._ready_to_dnd),this.setLightboxSize(),_.onclick=function(t){var a=t.target,n=e.$domHelpers.closest(a,".dhx_btn_set")
n&&n.querySelector(".dhx_cancel_btn")&&e.cancel_lightbox()},_.onkeydown=function(t){var a=t,n=t.target||t.srcElement,i=n.querySelector("[dhx_button]")
switch(i||(i=n.parentNode.querySelector(".dhx_custom_button, .dhx_readonly")),(t||a).keyCode){case 32:if((t||a).shiftKey)return
i&&i.click&&i.click()
break
case e.keys.edit_cancel:e.cancel_lightbox()}}}return a}
var o=e.showCover
e.showCover=function(){this.config.readonly_active||o.apply(this,arguments)}
var _=e.hide_lightbox
e.hide_lightbox=function(){return this._lightbox_r&&(this._lightbox_r.parentNode.removeChild(this._lightbox_r),this._lightbox_r=this._lightbox=null),_.apply(this,arguments)}}))},recurring:function(e){function t(){var t=e.formSection("recurring")
if(t||(t=a("recurring")),!t)throw new Error(["Can't locate the Recurring form section.","Make sure that you have the recurring control on the lightbox configuration https://docs.dhtmlx.com/scheduler/recurring_events.html#recurringlightbox ",'and that the recurring control has name "recurring":',"","scheduler.config.lightbox.sections = [",'\t{name:"recurring", ... }',"];"].join("\n"))
return t}function a(t){for(var a=0;a<e.config.lightbox.sections.length;a++){var n=e.config.lightbox.sections[a]
if(n.type===t)return e.formSection(n.name)}return null}function n(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),0)}e.config.occurrence_timestamp_in_utc=!1,e.config.recurring_workdays=[1,2,3,4,5],e.form_blocks.recurring={_get_node:function(e){return"string"==typeof e&&(e=document.getElementById(e)),"none"==e.style.display&&(e.style.display=""),e},_outer_html:function(e){return e.outerHTML||function(e){var t,a=document.createElement("div")
return a.appendChild(e.cloneNode(!0)),t=a.innerHTML,a=null,t}(e)},render:function(t){if(t.form){var a=e.form_blocks.recurring,n=a._get_node(t.form),i=a._outer_html(n)
return n.style.display="none",i}var r=e.locale.labels
return'<div class="dhx_form_repeat"> <form> <div class="dhx_repeat_left"> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="day" />'+r.repeat_radio_day+'</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="week"/>'+r.repeat_radio_week+'</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="month" checked />'+r.repeat_radio_month+'</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="repeat" value="year" />'+r.repeat_radio_year+'</label> </div> <div class="dhx_repeat_divider"></div> <div class="dhx_repeat_center"> <div style="display:none;" id="dhx_repeat_day"> <label><input class="dhx_repeat_radio" type="radio" name="day_type" value="d"/>'+r.repeat_radio_day_type+'</label><label><input class="dhx_repeat_text" type="text" name="day_count" value="1" />'+r.repeat_text_day_count+'</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="day_type" checked value="w"/>'+r.repeat_radio_day_type2+'</label> </div> <div style="display:none;" id="dhx_repeat_week"><label>'+r.repeat_week+'<input class="dhx_repeat_text" type="text" name="week_count" value="1" /></label><span>'+r.repeat_text_week_count+'</span><br /> <table class="dhx_repeat_days"> <tr> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="1" />'+r.day_for_recurring[1]+'</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="4" />'+r.day_for_recurring[4]+'</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="2" />'+r.day_for_recurring[2]+'</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="5" />'+r.day_for_recurring[5]+'</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="3" />'+r.day_for_recurring[3]+'</label><br /> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="6" />'+r.day_for_recurring[6]+'</label> </td> <td> <label><input class="dhx_repeat_checkbox" type="checkbox" name="week_day" value="0" />'+r.day_for_recurring[0]+'</label><br /><br /> </td> </tr> </table> </div> <div id="dhx_repeat_month"> <label class = "dhx_repeat_month_label"><input class="dhx_repeat_radio" type="radio" name="month_type" value="d"/>'+r.repeat_radio_month_type+'</label><label><input class="dhx_repeat_text" type="text" name="month_day" value="1" />'+r.repeat_text_month_day+'</label><label><input class="dhx_repeat_text" type="text" name="month_count" value="1" />'+r.repeat_text_month_count+'</label><br /> <label class = "dhx_repeat_month_label"><input class="dhx_repeat_radio" type="radio" name="month_type" checked value="w"/>'+r.repeat_radio_month_start+'</label><input class="dhx_repeat_text" type="text" name="month_week2" value="1" /><label><select name="month_day2">\t<option value="1" selected >'+e.locale.date.day_full[1]+'<option value="2">'+e.locale.date.day_full[2]+'<option value="3">'+e.locale.date.day_full[3]+'<option value="4">'+e.locale.date.day_full[4]+'<option value="5">'+e.locale.date.day_full[5]+'<option value="6">'+e.locale.date.day_full[6]+'<option value="0">'+e.locale.date.day_full[0]+"</select>"+r.repeat_text_month_count2_before+'</label><label><input class="dhx_repeat_text" type="text" name="month_count2" value="1" />'+r.repeat_text_month_count2_after+'</label><br /> </div> <div style="display:none;" id="dhx_repeat_year"> <label class = "dhx_repeat_year_label"><input class="dhx_repeat_radio" type="radio" name="year_type" value="d"/>'+r.repeat_radio_day_type+'</label><label><input class="dhx_repeat_text" type="text" name="year_day" value="1" />'+r.repeat_text_year_day+'</label><label><select name="year_month"><option value="0" selected >'+r.month_for_recurring[0]+'<option value="1">'+r.month_for_recurring[1]+'<option value="2">'+r.month_for_recurring[2]+'<option value="3">'+r.month_for_recurring[3]+'<option value="4">'+r.month_for_recurring[4]+'<option value="5">'+r.month_for_recurring[5]+'<option value="6">'+r.month_for_recurring[6]+'<option value="7">'+r.month_for_recurring[7]+'<option value="8">'+r.month_for_recurring[8]+'<option value="9">'+r.month_for_recurring[9]+'<option value="10">'+r.month_for_recurring[10]+'<option value="11">'+r.month_for_recurring[11]+"</select>"+r.select_year_month+'</label><br /> <label class = "dhx_repeat_year_label"><input class="dhx_repeat_radio" type="radio" name="year_type" checked value="w"/>'+r.repeat_year_label+'</label><input class="dhx_repeat_text" type="text" name="year_week2" value="1" /><select name="year_day2"><option value="1" selected >'+e.locale.date.day_full[1]+'<option value="2">'+e.locale.date.day_full[2]+'<option value="3">'+e.locale.date.day_full[3]+'<option value="4">'+e.locale.date.day_full[4]+'<option value="5">'+e.locale.date.day_full[5]+'<option value="6">'+e.locale.date.day_full[6]+'<option value="7">'+e.locale.date.day_full[0]+"</select>"+r.select_year_day2+'<select name="year_month2"><option value="0" selected >'+r.month_for_recurring[0]+'<option value="1">'+r.month_for_recurring[1]+'<option value="2">'+r.month_for_recurring[2]+'<option value="3">'+r.month_for_recurring[3]+'<option value="4">'+r.month_for_recurring[4]+'<option value="5">'+r.month_for_recurring[5]+'<option value="6">'+r.month_for_recurring[6]+'<option value="7">'+r.month_for_recurring[7]+'<option value="8">'+r.month_for_recurring[8]+'<option value="9">'+r.month_for_recurring[9]+'<option value="10">'+r.month_for_recurring[10]+'<option value="11">'+r.month_for_recurring[11]+'</select><br /> </div> </div> <div class="dhx_repeat_divider"></div> <div class="dhx_repeat_right"> <label><input class="dhx_repeat_radio" type="radio" name="end" checked/>'+r.repeat_radio_end+'</label><br /> <label><input class="dhx_repeat_radio" type="radio" name="end" />'+r.repeat_radio_end2+'</label><input class="dhx_repeat_text" type="text" name="occurences_count" value="1" />'+r.repeat_text_occurences_count+'<br /> <label><input class="dhx_repeat_radio" type="radio" name="end" />'+r.repeat_radio_end3+'</label><input class="dhx_repeat_date" type="text" name="date_of_end" value="'+e.config.repeat_date_of_end+'" /><br /> </div> </form> </div> <div style="clear:both"> </div>'},_ds:{},_get_form_node:function(e,t,a){var n=e[t]
if(!n)return null
if(n.nodeName)return n
if(n.length)for(var i=0;i<n.length;i++)if(n[i].value==a)return n[i]},_get_node_value:function(e,t,a){var n=e[t]
if(!n)return""
if(n.length){if(a){for(var i=[],r=0;r<n.length;r++)n[r].checked&&i.push(n[r].value)
return i}for(r=0;r<n.length;r++)if(n[r].checked)return n[r].value}return n.value?a?[n.value]:n.value:void 0},_get_node_numeric_value:function(t,a){return 1*e.form_blocks.recurring._get_node_value(t,a)||0},_set_node_value:function(e,t,a){var n=e[t]
if(n)if(n.name==t)n.value=a
else if(n.length)for(var i="object"==Ce(a),r=0;r<n.length;r++)(i||n[r].value==a)&&(n[r].checked=i?!!a[n[r].value]:!!a)},_init_set_value:function(t,a,n){var i=e.form_blocks.recurring,r=i._get_node_value,o=i._set_node_value
e.form_blocks.recurring._ds={start:n.start_date,end:n._end_date}
var _=e.date.str_to_date(e.config.repeat_date),s=e.date.date_to_str(e.config.repeat_date),d=t.getElementsByTagName("FORM")[0],l={}
function c(e){for(var t=0;t<e.length;t++){var a=e[t]
if(a.name)if(l[a.name])if(l[a.name].nodeType){var n=l[a.name]
l[a.name]=[n,a]}else l[a.name].push(a)
else l[a.name]=a}}if(c(d.getElementsByTagName("INPUT")),c(d.getElementsByTagName("SELECT")),!e.config.repeat_date_of_end){var h=e.date.date_to_str(e.config.repeat_date)
e.config.repeat_date_of_end=h(e.date.add(e._currentDate(),30,"day"))}o(l,"date_of_end",e.config.repeat_date_of_end)
var u=function(e){return document.getElementById(e)||{style:{}}}
function f(){u("dhx_repeat_day").style.display="none",u("dhx_repeat_week").style.display="none",u("dhx_repeat_month").style.display="none",u("dhx_repeat_year").style.display="none",u("dhx_repeat_"+this.value).style.display="block",e.setLightboxSize()}function p(e,t){var a=e.end
if(a.length)if(a[0].value&&"on"!=a[0].value)for(var n=0;n<a.length;n++)a[n].value==t&&(a[n].checked=!0)
else{var i=0
switch(t){case"no":i=0
break
case"date_of_end":i=2
break
default:i=1}a[i].checked=!0}else a.value=t}e.form_blocks.recurring._get_repeat_code=function(t){var a=[r(l,"repeat")]
for(v[a[0]](a,t);a.length<5;)a.push("")
var n="",i=function(e){var t=e.end
if(t.length){for(var a=0;a<t.length;a++)if(t[a].checked)return t[a].value&&"on"!=t[a].value?t[a].value:a?2==a?"date_of_end":"occurences_count":"no"}else if(t.value)return t.value
return"no"}(l)
return"no"==i?(t.end=new Date(9999,1,1),n="no"):"date_of_end"==i?t.end=function(t){var a=_(t)
return e.config.include_end_by&&(a=e.date.add(a,1,"day")),a}(r(l,"date_of_end")):(e.transpose_type(a.join("_")),n=Math.max(1,r(l,"occurences_count")),t.end=e.date["add_"+a.join("_")](new Date(t.start),n+0,{start_date:t.start})||t.start),a.join("_")+"#"+n}
var v={month:function(t,a){var n=e.form_blocks.recurring._get_node_value,i=e.form_blocks.recurring._get_node_numeric_value
"d"==n(l,"month_type")?(t.push(Math.max(1,i(l,"month_count"))),a.start.setDate(n(l,"month_day"))):(t.push(Math.max(1,i(l,"month_count2"))),t.push(n(l,"month_day2")),t.push(Math.max(1,i(l,"month_week2"))),e.config.repeat_precise||a.start.setDate(1)),a._start=!0},week:function(t,a){var n=e.form_blocks.recurring._get_node_value,i=e.form_blocks.recurring._get_node_numeric_value
t.push(Math.max(1,i(l,"week_count"))),t.push(""),t.push("")
for(var r=[],o=n(l,"week_day",!0),_=a.start.getDay(),s=!1,d=0;d<o.length;d++)r.push(o[d]),s=s||o[d]==_
r.length||(r.push(_),s=!0),r.sort(),e.config.repeat_precise?s||(e.transpose_day_week(a.start,r,1,7),a._start=!0):(a.start=e.date.week_start(a.start),a._start=!0),t.push(r.join(","))},day:function(t){var a=e.form_blocks.recurring._get_node_value,n=e.form_blocks.recurring._get_node_numeric_value
"d"==a(l,"day_type")?t.push(Math.max(1,n(l,"day_count"))):(t.push("week"),t.push(1),t.push(""),t.push(""),t.push(e.config.recurring_workdays.join(",")),t.splice(0,1))},year:function(t,a){var n=e.form_blocks.recurring._get_node_value
"d"==n(l,"year_type")?(t.push("1"),a.start.setMonth(0),a.start.setDate(n(l,"year_day")),a.start.setMonth(n(l,"year_month"))):(t.push("1"),t.push(n(l,"year_day2")),t.push(n(l,"year_week2")),a.start.setDate(1),a.start.setMonth(n(l,"year_month2"))),a._start=!0}},g={week:function(t,a){var n=e.form_blocks.recurring._set_node_value
n(l,"week_count",t[1])
for(var i=t[4].split(","),r={},o=0;o<i.length;o++)r[i[o]]=!0
n(l,"week_day",r)},month:function(t,a){var n=e.form_blocks.recurring._set_node_value
""===t[2]?(n(l,"month_type","d"),n(l,"month_count",t[1]),n(l,"month_day",a.start.getDate())):(n(l,"month_type","w"),n(l,"month_count2",t[1]),n(l,"month_week2",t[3]),n(l,"month_day2",t[2]))},day:function(t,a){var n=e.form_blocks.recurring._set_node_value
n(l,"day_type","d"),n(l,"day_count",t[1])},year:function(t,a){var n=e.form_blocks.recurring._set_node_value
""===t[2]?(n(l,"year_type","d"),n(l,"year_day",a.start.getDate()),n(l,"year_month",a.start.getMonth())):(n(l,"year_type","w"),n(l,"year_week2",t[3]),n(l,"year_day2",t[2]),n(l,"year_month2",a.start.getMonth()))}}
e.form_blocks.recurring._set_repeat_code=function(t,a){var n=e.form_blocks.recurring._set_node_value,i=t.split("#")
switch(t=i[0].split("_"),g[t[0]](t,a),i[1]){case"no":p(l,"no")
break
case"":p(l,"date_of_end")
var r=a.end
e.config.include_end_by&&(r=e.date.add(r,-1,"day")),n(l,"date_of_end",s(r))
break
default:p(l,"occurences_count"),n(l,"occurences_count",i[1])}n(l,"repeat",t[0])
var o=e.form_blocks.recurring._get_form_node(l,"repeat",t[0])
"SELECT"==o.nodeName&&o.onchange?o.onchange():o.onclick&&o.onclick()}
for(var m=0;m<d.elements.length;m++){var y=d.elements[m]
switch(y.name){case"repeat":"SELECT"==y.nodeName?y.onchange=f:y.onclick=f}}e._lightbox._rec_init_done=!0},set_value:function(t,a,n){var i=e.form_blocks.recurring
e._lightbox._rec_init_done||i._init_set_value(t,a,n),t.open=!n.rec_type,t.blocked=this._is_modified_occurence(n)
var r=i._ds
r.start=n.start_date,r.end=n._end_date,i._toggle_block(),a&&i._set_repeat_code(a,r)},get_value:function(t,n){if(t.open){var i=e.form_blocks.recurring._ds,r={};(function(){var t=e.formSection("time")
if(t||(t=a("time")),t||(t=a("calendar_time")),!t)throw new Error(["Can't calculate the recurring rule, the Recurring form block can't find the Time control. Make sure you have the time control in 'scheduler.config.lightbox.sections' config.","You can use either the default time control https://docs.dhtmlx.com/scheduler/time.html, or the datepicker https://docs.dhtmlx.com/scheduler/minicalendar.html, or a custom control. ",'In the latter case, make sure the control is named "time":',"","scheduler.config.lightbox.sections = [",'{name:"time", height:72, type:"YOU CONTROL", map_to:"auto" }];'].join("\n"))
return t})().getValue(r),i.start=r.start_date,n.rec_type=e.form_blocks.recurring._get_repeat_code(i),i._start?(n.start_date=new Date(i.start),n._start_date=new Date(i.start),i._start=!1):n._start_date=null,n._end_date=i.end,n.rec_pattern=n.rec_type.split("#")[0]}else n.rec_type=n.rec_pattern="",n._end_date=n.end_date
return n.rec_type},_get_button:function(){return t().header.firstChild.firstChild},_get_form:function(){return t().node},open:function(){var t=e.form_blocks.recurring
t._get_form().open||t._toggle_block()},close:function(){var t=e.form_blocks.recurring
t._get_form().open&&t._toggle_block()},_toggle_block:function(){var t=e.form_blocks.recurring,a=t._get_form(),n=t._get_button()
a.open||a.blocked?(a.style.height="0px",n&&(n.style.backgroundPosition="-5px 20px",n.nextSibling.innerHTML=e.locale.labels.button_recurring)):(a.style.height="auto",n&&(n.style.backgroundPosition="-5px 0px",n.nextSibling.innerHTML=e.locale.labels.button_recurring_open)),a.open=!a.open,e.setLightboxSize()},focus:function(e){},button_click:function(t,a,n,i){e.form_blocks.recurring._get_form().blocked||e.form_blocks.recurring._toggle_block()}},e._rec_markers={},e._rec_markers_pull={},e._add_rec_marker=function(e,t){e._pid_time=t,this._rec_markers[e.id]=e,this._rec_markers_pull[e.event_pid]||(this._rec_markers_pull[e.event_pid]={}),this._rec_markers_pull[e.event_pid][t]=e},e._get_rec_marker=function(e,t){var a=this._rec_markers_pull[t]
return a?a[e]:null},e._get_rec_markers=function(e){return this._rec_markers_pull[e]||[]},e._rec_temp=[],function(){var t=e.addEvent
e.addEvent=function(a,i,r,o,_){var s=t.apply(this,arguments)
if(s&&e.getEvent(s)){var d=e.getEvent(s)
d.start_date&&(d.start_date=n(d.start_date)),d.end_date&&(d.end_date=n(d.end_date)),this._is_modified_occurence(d)&&e._add_rec_marker(d,1e3*d.event_length),d.rec_type&&(d.rec_pattern=d.rec_type.split("#")[0])}return s}}(),e.attachEvent("onEventIdChange",(function(t,a){if(!this._ignore_call){this._ignore_call=!0,e._rec_markers[t]&&(e._rec_markers[a]=e._rec_markers[t],delete e._rec_markers[t]),e._rec_markers_pull[t]&&(e._rec_markers_pull[a]=e._rec_markers_pull[t],delete e._rec_markers_pull[t])
for(var n=0;n<this._rec_temp.length;n++)(i=this._rec_temp[n]).event_pid==t&&(i.event_pid=a,this.changeEventId(i.id,a+"#"+i.id.split("#")[1]))
for(var n in this._rec_markers){var i;(i=this._rec_markers[n]).event_pid==t&&(i.event_pid=a,i._pid_changed=!0)}var r=e._rec_markers[a]
r&&r._pid_changed&&(delete r._pid_changed,setTimeout((function(){e.callEvent("onEventChanged",[a,e.getEvent(a)])}),1)),delete this._ignore_call}})),e.attachEvent("onConfirmedBeforeEventDelete",(function(e){var t=this.getEvent(e)
if(this._is_virtual_event(e)||this._is_modified_occurence(t)&&t.rec_type&&"none"!=t.rec_type){e=e.split("#")
var a=this.uid(),n=e[1]?e[1]:Math.round(t._pid_time/1e3),i=this._copy_event(t)
i.id=a,i.event_pid=t.event_pid||e[0]
var r=n
i.event_length=r,i.rec_type=i.rec_pattern="none",this.addEvent(i),this._add_rec_marker(i,1e3*r)}else{t.rec_type&&this._lightbox_id&&this._roll_back_dates(t)
var o=this._get_rec_markers(e)
for(var _ in o)o.hasOwnProperty(_)&&(e=o[_].id,this.getEvent(e)&&this.deleteEvent(e,!0))}return!0})),e.attachEvent("onEventDeleted",(function(t,a){!this._is_virtual_event(t)&&this._is_modified_occurence(a)&&(e._events[t]||(a.rec_type=a.rec_pattern="none",this.setEvent(t,a)))})),e.attachEvent("onEventChanged",(function(e,t){if(this._loading)return!0
var a=this.getEvent(e)
if(this._is_virtual_event(e)){e=e.split("#")
var i=this.uid()
this._not_render=!0
var r=this._copy_event(t)
r.id=i,r.event_pid=e[0]
var o=e[1]
r.event_length=o,r.rec_type=r.rec_pattern="",this._add_rec_marker(r,1e3*o),this.addEvent(r),this._not_render=!1}else{a.start_date&&(a.start_date=n(a.start_date)),a.end_date&&(a.end_date=n(a.end_date)),a.rec_type&&this._lightbox_id&&this._roll_back_dates(a)
var _=this._get_rec_markers(e)
for(var s in _)_.hasOwnProperty(s)&&(delete this._rec_markers[_[s].id],this.deleteEvent(_[s].id,!0))
delete this._rec_markers_pull[e]
for(var d=!1,l=0;l<this._rendered.length;l++)this._rendered[l].getAttribute(this.config.event_attribute)==e&&(d=!0)
d||(this._select_id=null)}return!0})),e.attachEvent("onEventAdded",(function(e){if(!this._loading){var t=this.getEvent(e)
t.rec_type&&!t.event_length&&this._roll_back_dates(t)}return!0})),e.attachEvent("onEventSave",(function(e,t,a){return this.getEvent(e).rec_type||!t.rec_type||this._is_virtual_event(e)||(this._select_id=null),!0})),e.attachEvent("onEventCreated",(function(e){var t=this.getEvent(e)
return t.rec_type||(t.rec_type=t.rec_pattern=t.event_length=t.event_pid=""),!0})),e.attachEvent("onEventCancel",(function(e){var t=this.getEvent(e)
t.rec_type&&(this._roll_back_dates(t),this.render_view_data())})),e._roll_back_dates=function(e){e.start_date&&(e.start_date=n(e.start_date)),e.end_date&&(e.end_date=n(e.end_date)),e.event_length=Math.round((e.end_date.valueOf()-e.start_date.valueOf())/1e3),e.end_date=e._end_date,e._start_date&&(e.start_date.setMonth(0),e.start_date.setDate(e._start_date.getDate()),e.start_date.setMonth(e._start_date.getMonth()),e.start_date.setFullYear(e._start_date.getFullYear()))},e._is_virtual_event=function(e){return-1!=e.toString().indexOf("#")},e._is_modified_occurence=function(e){return e.event_pid&&"0"!=e.event_pid},e._validId=function(e){return!this._is_virtual_event(e)},e.showLightbox_rec=e.showLightbox,e.showLightbox=function(t){var a=this.locale,n=e.config.lightbox_recurring,i=this.getEvent(t),r=i.event_pid,o=this._is_virtual_event(t)
o&&(r=t.split("#")[0])
var _=function(t){var a=e.getEvent(t)
return a._end_date=a.end_date,a.end_date=new Date(a.start_date.valueOf()+1e3*a.event_length),e.showLightbox_rec(t)}
if((r||1*r==0)&&i.rec_type)return _(t)
if(!r||"0"===r||!a.labels.confirm_recurring||"instance"==n||"series"==n&&!o)return this.showLightbox_rec(t)
if("ask"==n){var s=this
e.modalbox({text:a.labels.confirm_recurring,title:a.labels.title_confirm_recurring,width:"500px",position:"middle",buttons:[a.labels.button_edit_series,a.labels.button_edit_occurrence,a.labels.icon_cancel],callback:function(e){switch(+e){case 0:return _(r)
case 1:return s.showLightbox_rec(t)
case 2:return}}})}else _(r)},e.get_visible_events_rec=e.get_visible_events,e.get_visible_events=function(e){for(var t=0;t<this._rec_temp.length;t++)delete this._events[this._rec_temp[t].id]
this._rec_temp=[]
var a=this.get_visible_events_rec(e),n=[]
for(t=0;t<a.length;t++)a[t].rec_type?"none"!=a[t].rec_pattern&&this.repeat_date(a[t],n):n.push(a[t])
return n},function(){var t=e.isOneDayEvent
e.isOneDayEvent=function(e){return!!e.rec_type||t.call(this,e)}
var a=e.updateEvent
e.updateEvent=function(t){var n=e.getEvent(t)
n&&n.rec_type&&(n.rec_pattern=(n.rec_type||"").split("#")[0]),n&&n.rec_type&&!this._is_virtual_event(t)?e.update_view():a.call(this,t)}}(),e.transponse_size={day:1,week:7,month:1,year:12},e.date.day_week=function(t,a,n){t.setDate(1)
var i=e.date.month_start(new Date(t)),r=1*a+(n=7*(n-1))-t.getDay()+1
t.setDate(r<=n?r+7:r)
var o=e.date.month_start(new Date(t))
return i.valueOf()===o.valueOf()},e.transpose_day_week=function(t,a,n,i,r){for(var o=(t.getDay()||(e.config.start_on_monday?7:0))-n,_=0;_<a.length;_++)if(a[_]>o)return t.setDate(t.getDate()+1*a[_]-o-(i?n:r))
this.transpose_day_week(t,a,n+i,null,n)},e.transpose_type=function(t){var a="transpose_"+t
if(!this.date[a]){var n=t.split("_"),i="add_"+t,r=this.transponse_size[n[0]]*n[1]
if("day"==n[0]||"week"==n[0]){var o=null
if(n[4]&&(o=n[4].split(","),e.config.start_on_monday)){for(var _=0;_<o.length;_++)o[_]=1*o[_]||7
o.sort()}this.date[a]=function(t,a){var n=Math.floor((a.valueOf()-t.valueOf())/(864e5*r))
return n>0&&t.setDate(t.getDate()+n*r),o&&e.transpose_day_week(t,o,1,r),t},this.date[i]=function(t,a){var n=new Date(t.valueOf())
if(o)for(var i=0;i<a;i++)e.transpose_day_week(n,o,0,r)
else n.setDate(n.getDate()+a*r)
return n}}else"month"!=n[0]&&"year"!=n[0]||(this.date[a]=function(t,a,n){var o=Math.ceil((12*a.getFullYear()+1*a.getMonth()+1-(12*t.getFullYear()+1*t.getMonth()+1))/r-1)
return o>=0&&(t.setDate(1),t.setMonth(t.getMonth()+o*r)),e.date[i](t,0,n)},this.date[i]=function(t,a,o,_){if(_?_++:_=1,_>12)return null
var s=new Date(t.valueOf())
s.setDate(1),s.setMonth(s.getMonth()+a*r)
var d=s.getMonth(),l=s.getFullYear()
s.setDate(o.start_date.getDate()),n[3]&&e.date.day_week(s,n[2],n[3])
var c=e.config.recurring_overflow_instances
return s.getMonth()!=d&&"none"!=c&&(s="lastDay"===c?new Date(l,d+1,0,s.getHours(),s.getMinutes(),s.getSeconds(),s.getMilliseconds()):e.date[i](new Date(l,d+1,0),a||1,o,_)),s})}},e.repeat_date=function(t,a,n,i,r,o){i=i||this._min_date,r=r||this._max_date
var _=o||-1,s=new Date(t.start_date.valueOf()),d=s.getHours(),l=0
for(!t.rec_pattern&&t.rec_type&&(t.rec_pattern=t.rec_type.split("#")[0]),this.transpose_type(t.rec_pattern),s=e.date["transpose_"+t.rec_pattern](s,i,t);s&&(s<t.start_date||e._fix_daylight_saving_date(s,i,t,s,new Date(s.valueOf()+1e3*t.event_length)).valueOf()<=i.valueOf()||s.valueOf()+1e3*t.event_length<=i.valueOf());)s=this.date["add_"+t.rec_pattern](s,1,t)
for(;s&&s<r&&s<t.end_date&&(_<0||l<_);){s.setHours(d)
var c=e.config.occurrence_timestamp_in_utc?Date.UTC(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds()):s.valueOf(),h=this._get_rec_marker(c,t.id)
if(h)n&&("none"!=h.rec_type&&l++,a.push(h))
else{var u=new Date(s.valueOf()+1e3*t.event_length),f=this._copy_event(t)
if(f.text=t.text,f.start_date=s,f.event_pid=t.id,f.id=t.id+"#"+Math.round(c/1e3),f.end_date=u,f.end_date=e._fix_daylight_saving_date(f.start_date,f.end_date,t,s,f.end_date),f._timed=this.isOneDayEvent(f),!f._timed&&!this._table_view&&!this.config.multi_day)return
a.push(f),n||(this._events[f.id]=f,this._rec_temp.push(f)),l++}s=this.date["add_"+t.rec_pattern](s,1,t)}},e._fix_daylight_saving_date=function(e,t,a,n,i){var r=e.getTimezoneOffset()-t.getTimezoneOffset()
return r?r>0?new Date(n.valueOf()+1e3*a.event_length-60*r*1e3):new Date(t.valueOf()-60*r*1e3):new Date(i.valueOf())},e.getRecDates=function(t,a){var n="object"==Ce(t)?t:e.getEvent(t),i=[]
if(a=a||100,!n.rec_type)return[{start_date:n.start_date,end_date:n.end_date}]
if("none"==n.rec_type)return[]
e.repeat_date(n,i,!0,n.start_date,n.end_date,a)
for(var r=[],o=0;o<i.length;o++)"none"!=i[o].rec_type&&r.push({start_date:i[o].start_date,end_date:i[o].end_date})
return r},e.getEvents=function(e,t){var a=[]
for(var n in this._events){var i=this._events[n]
if(i&&i.start_date<t&&i.end_date>e)if(i.rec_pattern){if("none"==i.rec_pattern)continue
var r=[]
this.repeat_date(i,r,!0,e,t)
for(var o=0;o<r.length;o++)!r[o].rec_pattern&&r[o].start_date<t&&r[o].end_date>e&&!this._rec_markers[r[o].id]&&a.push(r[o])}else this._is_virtual_event(i.id)||a.push(i)}return a},e.config.repeat_date="%m.%d.%Y",e.config.lightbox.sections=[{name:"description",map_to:"text",type:"textarea",focus:!0},{name:"recurring",type:"recurring",map_to:"rec_type",button:"recurring"},{name:"time",height:72,type:"time",map_to:"auto"}],e._copy_dummy=function(e){var t=new Date(this.start_date),a=new Date(this.end_date)
this.start_date=t,this.end_date=a,this.event_length=this.event_pid=this.rec_pattern=this.rec_type=null},e.config.include_end_by=!1,e.config.lightbox_recurring="ask",e.attachEvent("onClearAll",(function(){e._rec_markers={},e._rec_markers_pull={},e._rec_temp=[]}))},serialize:function(e){var t=H()(e)
e.data_attributes=function(){var a=[],n=e._helpers.formatDate,i=t()
for(var r in i){var o=i[r]
for(var _ in o)"_"!=_.substr(0,1)&&a.push([_,"start_date"==_||"end_date"==_?n:null])
break}return a},e.toXML=function(e){var a=[],n=this.data_attributes(),i=t()
for(var r in i){var o=i[r]
a.push("<event>")
for(var _=0;_<n.length;_++)a.push("<"+n[_][0]+"><![CDATA["+(n[_][1]?n[_][1](o[n[_][0]]):o[n[_][0]])+"]]></"+n[_][0]+">")
a.push("</event>")}return(e||"")+"<data>"+a.join("\n")+"</data>"},e._serialize_json_value=function(e){return null===e||"boolean"==typeof e?e=""+e:(e||0===e||(e=""),e='"'+e.toString().replace(/\n/g,"").replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'),e},e.toJSON=function(){return JSON.stringify(this.serialize())},e.toICal=function(a){var n=e.date.date_to_str("%Y%m%dT%H%i%s"),i=e.date.date_to_str("%Y%m%d"),r=[],o=t()
for(var _ in o){var s=o[_]
r.push("BEGIN:VEVENT"),s._timed&&(s.start_date.getHours()||s.start_date.getMinutes())?r.push("DTSTART:"+n(s.start_date)):r.push("DTSTART:"+i(s.start_date)),s._timed&&(s.end_date.getHours()||s.end_date.getMinutes())?r.push("DTEND:"+n(s.end_date)):r.push("DTEND:"+i(s.end_date)),r.push("SUMMARY:"+s.text),r.push("END:VEVENT")}return"BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//dhtmlXScheduler//NONSGML v2.2//EN\nDESCRIPTION:"+(a||"")+"\n"+r.join("\n")+"\nEND:VCALENDAR"}},timeline:function(e){function t(){var e=document.createElement("p")
e.style.width="100%",e.style.height="200px"
var t=document.createElement("div")
t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t)
var a=e.offsetWidth
t.style.overflow="scroll"
var n=e.offsetWidth
return a==n&&(n=t.clientWidth),document.body.removeChild(t),a-n}e.ext.timeline={renderCells:function(e,t,a){if(e&&e.length){var n=[]
return e.forEach((function(e){var i=""
e.$width&&(i="width:"+e.$width+"px;")
var r=a
e.css&&(r+=" "+e.css)
var o=t(e)||""
n.push("<div class='".concat(r,"' style='").concat(i,"'>").concat(o,"</div>"))})),n.join("")}},renderHeading:function(){return this.renderCells(this.columns,(function(e){return e.label}),"dhx_timeline_label_column dhx_timeline_label_column_header")},renderColumns:function(e){return this.renderCells(this.columns,(function(t){return t.template&&t.template.call(self,e)||""}),"dhx_timeline_label_column")},scrollTo:function(a){if(a){var n
n=a.date?a.date:a.left?a.left:a
var i,r=-1
if(a.section?r=this.getSectionTop(a.section):a.top&&(r=a.top),i="number"==typeof n?n:this.posFromDate(n),e.config.rtl){var o=+e.$container.querySelector(".dhx_timeline_label_wrapper").style.height.replace("px",""),_=this._section_height[this.y_unit.length]+this._label_rows[this._label_rows.length-1].top
this.scrollHelper.getMode()==this.scrollHelper.modes.minMax&&(_>o||"tree"==this.render)&&(i-=t())}var s=e.$container.querySelector(".dhx_timeline_data_wrapper")
this.scrollable||(s=e.$container.querySelector(".dhx_cal_data")),this.scrollable&&this.scrollHelper.setScrollValue(s,i),r>0&&(s.scrollTop=r)}},getScrollPosition:function(){return{left:this._x_scroll||0,top:this._y_scroll||0}},posFromDate:function(t){return e._timeline_getX({start_date:t},!1,this)-1},dateFromPos:function(t){return e._timeline_drag_date(this,t)},sectionFromPos:function(t){var a={y:t}
return e._resolve_timeline_section(this,a),a.section},resolvePosition:function(e){var t={date:null,section:null}
return e.left&&(t.date=this.dateFromPos(e.left)),e.top&&(t.section=this.sectionFromPos(e.top)),t},getSectionHeight:function(e){return this._section_height[e]},getSectionTop:function(e){return this._rowStats[e].top},getEventTop:function(t){var a=this.getEventHeight(t),n=t._sorder||0,i=2+n*a+(n?2*n:0)
return e.config.cascade_event_display&&(i=2+n*e.config.cascade_event_margin+(n?2*n:0)),i},getEventHeight:function(e){var t=e[this.y_property],a=this.event_dy
return"full"==this.event_dy&&(a=this.section_autoheight?this.getSectionHeight(t)-6:this.dy-3),this.resize_events&&(a=Math.max(Math.floor(a/(e._count||1)),this.event_min_dy)),a}},e._temp_matrix_scope=function(){function a(e,t){var a=t.order[e]
return void 0===a&&(a="$_"+e),a}function i(e,t){if(t[e.key]=e,e.children)for(var a=0;a<e.children.length;a++)i(e.children[a],t)}e.matrix={},e._merge=function(e,t){for(var a in t)void 0===e[a]&&(e[a]=t[a])},e.createTimelineView=function(a){e._skin_init(),e._merge(a,{scrollHelper:Ne(),column_width:100,autoscroll:{range_x:200,range_y:100,speed_x:20,speed_y:10},_is_new_view:!0,_section_autowidth:!0,_x_scroll:0,_y_scroll:0,_h_cols:{},_label_rows:[],section_autoheight:!0,name:"matrix",x:"time",y:"time",x_step:1,x_unit:"hour",y_unit:"day",y_step:1,x_start:0,x_size:24,y_start:0,y_size:7,render:"cell",dx:200,dy:50,event_dy:e.xy.bar_height-5,event_min_dy:e.xy.bar_height-5,resize_events:!0,fit_events:!0,fit_events_offset:0,show_unassigned:!1,second_scale:!1,round_position:!1,_logic:function(t,a,n){var i={}
return e.checkEvent("onBeforeSectionRender")&&(i=e.callEvent("onBeforeSectionRender",[t,a,n])),i}}),a._original_x_start=a.x_start,"day"!=a.x_unit&&(a.first_hour=a.last_hour=0),a._start_correction=a.first_hour?60*a.first_hour*60*1e3:0,a._end_correction=a.last_hour?60*(24-a.last_hour)*60*1e3:0,e.checkEvent("onTimelineCreated")&&e.callEvent("onTimelineCreated",[a]),r(a),e.attachEvent("onDestroy",(function(){a.detachAllEvents()}))
var n=e.render_data
e.render_data=function(t,i){if(this._mode!=a.name)return n.apply(this,arguments)
if(i&&!a.show_unassigned&&"cell"!=a.render)for(var r=0;r<t.length;r++)this.clear_event(t[r]),this.render_timeline_event.call(this.matrix[this._mode],t[r],!0)
else e._renderMatrix.call(a,!0,!0)},e.matrix[a.name]=a,e.templates[a.name+"_cell_value"]=function(e){return e?e.length:""},e.templates[a.name+"_cell_class"]=function(e){return""},e.templates[a.name+"_scalex_class"]=function(e){return""},e.templates[a.name+"_second_scalex_class"]=function(e){return""},e.templates[a.name+"_row_class"]=function(e,t){return t.folder_events_available&&e.children?"folder":""},e.templates[a.name+"_scaley_class"]=function(e,t,a){return""},a.attachEvent("onBeforeRender",(function(){return a.columns&&a.columns.length&&function(e,t){var a=t.dx,n=0,i=[],r=[]
e.forEach((function(e){e.width?(n+=e.width,e.$width=e.width,i.push(e)):r.push(e)}))
var o=!1,_=a-n;(_<0||0===r.length)&&(o=!0)
var s=r.length
r.forEach((function(e){e.$width=Math.max(Math.floor(_/s),20),_-=e.$width,n+=e.$width,s--})),o&&(t.dx=n)}(a.columns,a),!0})),a.renderColumns=a.renderColumns||e.ext.timeline.renderColumns.bind(a),a.renderHeading=a.renderHeading||e.ext.timeline.renderHeading.bind(a),a.renderCells=a.renderCells||e.ext.timeline.renderCells.bind(a),e.templates[a.name+"_scale_label"]=function(e,t,n){return a.columns&&a.columns.length?a.renderColumns(n):t},e.templates[a.name+"_scale_header"]=function(t){return a.columns?t.renderHeading(t):e.locale.labels[a.name+"_scale_header"]||""},e.templates[a.name+"_tooltip"]=function(e,t,a){return a.text},e.templates[a.name+"_date"]=function(t,a){return t.getDay()==a.getDay()&&a-t<864e5||+t==+e.date.date_part(new Date(a))||+e.date.add(t,1,"day")==+a&&0===a.getHours()&&0===a.getMinutes()?e.templates.day_date(t):t.getDay()!=a.getDay()&&a-t<864e5?e.templates.day_date(t)+" &ndash; "+e.templates.day_date(a):e.templates.week_date(t,a)},e.templates[a.name+"_scale_date"]=e.date.date_to_str(a.x_date||e.config.hour_date),e.templates[a.name+"_second_scale_date"]=e.date.date_to_str(a.second_scale&&a.second_scale.x_date?a.second_scale.x_date:e.config.hour_date),e.date["add_"+a.name+"_private"]=function(t,n){var i=n,r=a.x_unit
if("minute"==a.x_unit||"hour"==a.x_unit){var o=i
"hour"==a.x_unit&&(o*=60),o%1440||(i=o/1440,r="day")}return e.date.add(t,i,r)},e.date["add_"+a.name]=function(t,n,i){var r=e.date["add_"+a.name+"_private"](t,(a.x_length||a.x_size)*a.x_step*n)
if("minute"==a.x_unit||"hour"==a.x_unit){var o=a.x_length||a.x_size,_="hour"==a.x_unit?60*a.x_step:a.x_step
if(_*o%1440)if(+e.date.date_part(new Date(t))==+e.date.date_part(new Date(r)))a.x_start+=n*o
else{var s=1440/(o*_)-1,d=Math.round(s*o)
a.x_start=n>0?a.x_start-d:d+a.x_start}}return r},e.date[a.name+"_start"]=function(t){var n=(e.date[a.x_unit+"_start"]||e.date.day_start).call(e.date,t),i=n.getTimezoneOffset(),r=(n=e.date.add(n,a.x_step*a.x_start,a.x_unit)).getTimezoneOffset()
return i!=r&&n.setTime(n.getTime()+6e4*(r-i)),n},a._smartRenderingEnabled=function(){var t=null;(this.scrollable||this.smart_rendering)&&(t=e._timeline_smart_render.getViewPort(this.scrollHelper,this._sch_height))
var a=!!t
return!!(this.scrollable?!1!==this.smart_rendering&&a:this.smart_rendering&&a)},a.scrollTo=a.scrollTo||e.ext.timeline.scrollTo.bind(a),a.getScrollPosition=a.getScrollPosition||e.ext.timeline.getScrollPosition.bind(a),a.posFromDate=a.posFromDate||e.ext.timeline.posFromDate.bind(a),a.dateFromPos=a.dateFromPos||e.ext.timeline.dateFromPos.bind(a),a.sectionFromPos=a.sectionFromPos||e.ext.timeline.sectionFromPos.bind(a),a.resolvePosition=a.resolvePosition||e.ext.timeline.resolvePosition.bind(a),a.getSectionHeight=a.getSectionHeight||e.ext.timeline.getSectionHeight.bind(a),a.getSectionTop=a.getSectionTop||e.ext.timeline.getSectionTop.bind(a),a.getEventTop=a.getEventTop||e.ext.timeline.getEventTop.bind(a),a.getEventHeight=a.getEventHeight||e.ext.timeline.getEventHeight.bind(a),a.selectEvents=e.bind((function(t){var a=t.section,n=t.date,i=t.selectNested
return n?function(t,a,n,i){var r=e._timeline_smart_render.getPreparedEvents(i),o=[],_=[],s=i.order[t],d=i.y_unit[s]
if(!d)return[]
var l=e._get_date_index(i,a)
return r.$matrix?(o=r.$matrix[s][l]||[],n&&r.$matrix.$tree&&r.$matrix.$tree[d.key]&&(_=r.$matrix.$tree[d.key][l]||[]),o.concat(_)):r[s]||[]}(a,n,i,this):a?function(t,a,n){var i=e._timeline_smart_render.getPreparedEvents(n),r=n.order[t],o=n.y_unit[r]
if(!o)return[]
var _=[t]
a&&function e(t,a){if(a=a||[],t.children)for(var n=0;n<t.children.length;n++)a.push(t.children[n].key),e(t.children[n],a)
return a}(o,_)
for(var s=[],d=0;d<_.length;d++)if(void 0!==(r=n.order[_[d]])&&i[r])s=s.concat(i[r])
else if(i.undefined)for(var l=0;l<i.undefined.length;l++){var c=i.undefined[l]
c[n.y_property]==_[d]&&s.push(c)}return s}(a,i,this):void 0}),a),a.setRange=e.bind((function(t,a){var n=e.date[this.name+"_start"](new Date(t)),i=function(t,a,n){for(var i=0,r=e.date[n.name+"_start"](new Date(t)),o=n.x_step,_=n.x_unit;r<a;)i++,r=e.date.add(r,o,_)
return i}(t,a,this)
this.x_size=i,e.setCurrentView(n,this.name)}),a),e.callEvent("onOptionsLoad",[a]),e[a.name+"_view"]=function(t){t?e._set_timeline_dates(a):e._renderMatrix.apply(a,arguments)},e["mouse_"+a.name]=function(n){var i=this._drag_event
if(this._drag_id&&(i=this.getEvent(this._drag_id)),a.scrollable&&!n.converted){if(n.converted=1,n.x+=-a.dx+a._x_scroll,e.config.rtl){var r=+e.$container.querySelector(".dhx_timeline_label_wrapper").style.height.replace("px",""),o=a._section_height[a.y_unit.length]+a._label_rows[a._label_rows.length-1].top
n.x+=e.xy.scale_width,a.scrollHelper.getMode()==a.scrollHelper.modes.minMax&&(o>r||"tree"==a.render)&&(n.x+=t())}n.y+=a._y_scroll}else e.config.rtl?n.x-=a.dx-e.xy.scale_width:n.x-=a.dx
var _=e._timeline_drag_date(a,n.x)
if(n.x=0,n.force_redraw=!0,n.custom=!0,"move"==this._drag_mode&&this._drag_id&&this._drag_event){i=this.getEvent(this._drag_id)
var s=this._drag_event
if(n._ignores=this._ignores_detected||a._start_correction||a._end_correction,void 0===s._move_delta&&(s._move_delta=(i.start_date-_)/6e4,this.config.preserve_length&&n._ignores&&(s._move_delta=this._get_real_event_length(i.start_date,_,a),s._event_length=this._get_real_event_length(i.start_date,i.end_date,a))),this.config.preserve_length&&n._ignores){var d=this._get_fictional_event_length(_,s._move_delta,a,!0)
_=new Date(_-d)}else _=e.date.add(_,s._move_delta,"minute")}if("resize"==this._drag_mode&&i&&(this.config.timeline_swap_resize&&this._drag_id&&(this._drag_from_start&&+_>+i.end_date?this._drag_from_start=!1:!this._drag_from_start&&+_<+i.start_date&&(this._drag_from_start=!0)),n.resize_from_start=this._drag_from_start,!this.config.timeline_swap_resize&&this._drag_id&&this._drag_from_start&&+_>=+e.date.add(i.end_date,-e.config.time_step,"minute")&&(_=e.date.add(i.end_date,-e.config.time_step,"minute"))),a.round_position)switch(this._drag_mode){case"move":this.config.preserve_length||(_=e._timeline_get_rounded_date.call(a,_,!1),"day"==a.x_unit&&(n.custom=!1))
break
case"resize":this._drag_event&&(null!==this._drag_event._resize_from_start&&void 0!==this._drag_event._resize_from_start||(this._drag_event._resize_from_start=n.resize_from_start),n.resize_from_start=this._drag_event._resize_from_start,_=e._timeline_get_rounded_date.call(a,_,!this._drag_event._resize_from_start))}this._resolve_timeline_section(a,n),n.section&&this._update_timeline_section({pos:n,event:this.getEvent(this._drag_id),view:a}),n.y=Math.round((this._correct_shift(_,1)-this._min_date)/(6e4*this.config.time_step)),n.shift=this.config.time_step,a.round_position&&"new-size"==this._drag_mode&&_<=this._drag_start&&(n.shift=e.date.add(this._drag_start,a.x_step,a.x_unit)-this._drag_start)
var l=this._is_pos_changed(this._drag_pos,n)
return this._drag_pos&&l&&(this._drag_event._dhx_changed=!0),l||this._drag_pos.has_moved||(n.force_redraw=!1),n}},e._prepare_timeline_events=function(t){var a=[]
if("cell"==t.render)a=e._timeline_trace_events.call(t)
else{for(var n=e.get_visible_events(),i=t.order,r=0;r<n.length;r++){var o=n[r],_=o[t.y_property],s=t.order[_]
if(t.show_unassigned&&!_){for(var d in i)if(i.hasOwnProperty(d)){a[s=i[d]]||(a[s]=[])
var l=e._lame_copy({},o)
l[t.y_property]=d,a[s].push(l)
break}}else a[s]||(a[s]=[]),a[s].push(o)}a.$matrix=e._timeline_trace_events.call(t)}return a},e._populate_timeline_rendered=function(t){e._rendered=[]
for(var a=t.querySelectorAll("div["+e.config.event_attribute+"]"),n=0;n<a.length;n++)e._rendered.push(a[n])},e.render_timeline_event=function(t,a){var n=t[this.y_property]
if(!n)return""
var i=t._sorder,r=e._timeline_getX(t,!1,this),o=e._timeline_getX(t,!0,this),_=e._get_timeline_event_height?e._get_timeline_event_height(t,this):this.getEventHeight(t),s=_-2
t._inner||"full"!=this.event_dy||(s=(s+2)*(t._count-i)-2),s+=3
var d=e._get_timeline_event_y?e._get_timeline_event_y(t._sorder,_):this.getEventTop(t),l=_+d+2;(!this._events_height[n]||this._events_height[n]<l)&&(this._events_height[n]=l)
var c=e.templates.event_class(t.start_date,t.end_date,t)
c="dhx_cal_event_line "+(c||""),e.getState().select_id==t.id&&(c+=" dhx_cal_event_selected"),t._no_drag_move&&(c+=" no_drag_move")
var h=t.color?"background:"+t.color+";":"",u=t.textColor?"color:"+t.textColor+";":"",f=e.templates.event_bar_text(t.start_date,t.end_date,t),p="<div "+e._waiAria.eventBarAttrString(t)+" event_id='"+t.id+"' "+e.config.event_attribute+"='"+t.id+"' class='"+c+"' style='"+h+u+"position:absolute; top:"+d+"px; height: "+s+"px; "+(e.config.rtl?"right:":"left:")+r+"px; width:"+Math.max(0,o-r)+"px;"+(t._text_style||"")+"'>"
if(e.config.drag_resize&&!e.config.readonly){var v=s+1,g="<div class='dhx_event_resize dhx_event_resize_start' style='height: "+v+"px;'></div>",m="<div class='dhx_event_resize dhx_event_resize_end' style='height: "+v+"px;'></div>"
p+=(t._no_resize_start?"":g)+(t._no_resize_end?"":m)}if(p+=f+"</div>",!a)return p
var y=document.createElement("div")
y.innerHTML=p
var b=this._scales[n]
b&&(e._rendered.push(y.firstChild),b.appendChild(y.firstChild))}
var o=function(e){return String(e).replace(/'/g,"&apos;").replace(/"/g,"&quot;")}
function _(e){return e.height&&!isNaN(Number(e.height))}function s(t){return e._helpers.formatDate(t)}function d(t,a){var n=t.querySelector(".dhx_timeline_data_wrapper")
return a.scrollable||(n=e.$container.querySelector(".dhx_cal_data")),n}function l(){return e.$container.querySelector(".dhx_cal_data .dhx_timeline_label_col")}e._timeline_trace_events=function(){return function(t,n){for(var r,o=[],_=0;_<n.y_unit.length;_++)o[_]=[]
o[r]||(o[r]=[])
var s=function(e){for(var t={},a=e.y_unit_original||e.y_unit,n=0;n<a.length;n++)i(a[n],t)
return t}(n),d="tree"==n.render
function l(e,t,a,n){e[t]||(e[t]=[])
for(var i=a;i<=n;i++)e[t][i]||(e[t][i]=[]),e[t][i].push(h)}d&&(o.$tree={})
var c=n.y_property
for(_=0;_<t.length;_++){var h=t[_],u=h[c]
r=a(u,n)
var f=e._get_date_index(n,h.start_date),p=e._get_date_index(n,h.end_date)
h.end_date.valueOf()==n._trace_x[p].valueOf()&&(p-=1),o[r]||(o[r]=[]),l(o,r,f,p)
var v=s[u]
if(d&&v&&v.$parent)for(var g={};v.$parent;){if(g[v.key])throw new Error("Invalid sections tree. Section `{key:'"+v.key+"', label:'"+v.label+"'}` has the same key as one of its parents. Make sure all sections have unique keys")
g[v.key]=!0
var m=s[v.$parent]
l(o.$tree,m.key,f,p),v=m}}return o}(e.get_visible_events(),this)},e._timeline_getX=function(t,a,n){var i=0,r=n._step,o=n.round_position,_=0,s=a?t.end_date:t.start_date
s.valueOf()>e._max_date.valueOf()&&(s=e._max_date)
var d=s-e._min_date_timeline
if(d>0){var l=e._get_date_index(n,s)
e._ignores[l]&&(o=!0)
for(var c=0;c<l;c++)i+=e._cols[c]
var h=e._timeline_get_rounded_date.apply(n,[s,!1])
o?+s>+h&&a&&(_=e._cols[l]):(d=s-h,n.first_hour||n.last_hour?((d-=n._start_correction)<0&&(d=0),(_=Math.round(d/r))>e._cols[l]&&(_=e._cols[l])):_=Math.round(d/r))}return i+(a?0===d||o?_-2:_:_+1)},e._timeline_get_rounded_date=function(t,a){var n=e._get_date_index(this,t),i=this._trace_x[n]
return a&&+t!=+this._trace_x[n]&&(i=this._trace_x[n+1]?this._trace_x[n+1]:e.date.add(this._trace_x[n],this.x_step,this.x_unit)),new Date(i)},e._timeline_skip_ignored=function(t){if(e._ignores_detected)for(var a,n,i,r,o=0;o<t.length;o++){for(r=t[o],i=!1,a=e._get_date_index(this,r.start_date),n=e._get_date_index(this,r.end_date);a<n;){if(!e._ignores[a]){i=!0
break}a++}i||a!=n||e._ignores[n]||+r.end_date>+this._trace_x[n]&&(i=!0),i||(t.splice(o,1),o--)}},e._timeline_calculate_event_positions=function(t){if(t&&"cell"!=this.render){e._timeline_skip_ignored.call(this,t),t.sort(this.sort||function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e.id>t.id?1:-1:e.start_date>t.start_date?1:-1})
for(var a=[],n=t.length,i=-1,r=null,o=0;o<n;o++){var _=t[o]
_._inner=!1
for(var s=this.round_position?e._timeline_get_rounded_date.apply(this,[_.start_date,!1]):_.start_date;a.length&&a[a.length-1].end_date.valueOf()<=s.valueOf();)a.splice(a.length-1,1)
for(var d=!1,l=0;l<a.length;l++){var c=a[l]
if(c.end_date.valueOf()<=s.valueOf()){d=!0,_._sorder=c._sorder,a.splice(l,1),_._inner=!0
break}}if(a.length&&(a[a.length-1]._inner=!0),!d)if(a.length)if(a.length<=a[a.length-1]._sorder){if(a[a.length-1]._sorder)for(var h=0;h<a.length;h++){for(var u=!1,f=0;f<a.length;f++)if(a[f]._sorder==h){u=!0
break}if(!u){_._sorder=h
break}}else _._sorder=0
_._inner=!0}else{for(var p=a[0]._sorder,v=1;v<a.length;v++)a[v]._sorder>p&&(p=a[v]._sorder)
_._sorder=p+1,i<_._sorder&&(i=_._sorder,r=_),_._inner=!1}else _._sorder=0
a.push(_),a.length>(a.max_count||0)?(a.max_count=a.length,_._count=a.length):_._count=_._count?_._count:1}for(var g=0;g<t.length;g++)t[g]._count=a.max_count,e._register_copy&&e._register_copy(t[g]);(r||t[0])&&e.render_timeline_event.call(this,r||t[0],!1)}},e._timeline_get_events_html=function(t){var a=""
if(t&&"cell"!=this.render)for(var n=0;n<t.length;n++)a+=e.render_timeline_event.call(this,t[n],!1)
return a},e._timeline_update_events_html=function(t){var a=""
if(t&&"cell"!=this.render){var n=e.getView(),i={},r=function(e,t){return e+"_"+t}
t.forEach((function(e){i[r(e.id,e[n.y_property])]=!0})),e._rendered.forEach((function(t){if(t.parentNode){var a=t.parentNode.getAttribute("data-section-id")
i[r(t.getAttribute(e.config.event_attribute),a)]&&t.parentNode.removeChild(t)}}))
for(var o=0;o<t.length;o++)a+=e.render_timeline_event.call(this,t[o],!1)}return a},e._timeline_get_block_stats=function(a,n){var i={}
return n._sch_height=a.offsetHeight,i.style_data_wrapper=(e.config.rtl?"padding-right:":"padding-left:")+n.dx+"px;",i.style_label_wrapper="width: "+n.dx+"px;",n.scrollable?(i.style_data_wrapper+="height:"+(n._sch_height-1)+"px;",void 0===n.html_scroll_width&&(n.html_scroll_width=t()),n._section_autowidth?n.custom_scroll_width=0:n.custom_scroll_width=n.html_scroll_width,i.style_label_wrapper+="height:"+(n._sch_height-1-n.custom_scroll_width)+"px;"):(i.style_data_wrapper+="height:"+(n._sch_height-1)+"px;",i.style_label_wrapper+="height:"+(n._sch_height-1)+"px;overflow:visible;"),i},e._timeline_get_cur_row_stats=function(t,a){var n=t.y_unit[a],i=t._logic(t.render,n,t)
if(e._merge(i,{height:t.dy}),t.section_autoheight&&!_(n)){var r=function(e,t){var a=0,n=e.y_unit.length,i=0
return e.y_unit.forEach((function(e){_(e)&&(a+=Number(e.height),i+=Number(e.height),n--)})),{totalHeight:a+=n*t,rowsWithDefaultHeight:n,totalCustomHeight:i}}(t,i.height),o=t.scrollable?t._sch_height-e.xy.scroll_width:t._sch_height
r.totalHeight<o&&r.rowsWithDefaultHeight>0&&(i.height=Math.max(i.height,Math.floor((o-1-r.totalCustomHeight)/r.rowsWithDefaultHeight)))}if(_(n)&&(i.height=Number(n.height)),t._section_height[n.key]=i.height,!i.td_className){i.td_className="dhx_matrix_scell"
var s=e.templates[t.name+"_scaley_class"](t.y_unit[a].key,t.y_unit[a].label,t.y_unit[a])
s&&(i.td_className+=" "+s),t.columns&&(i.td_className+=" dhx_matrix_scell_columns")}return i.td_content||(i.td_content=e.templates[t.name+"_scale_label"](t.y_unit[a].key,t.y_unit[a].label,t.y_unit[a])),e._merge(i,{tr_className:"",style_height:"height:"+i.height+"px;",style_width:"width:"+t.dx+"px;",summ_width:"width:"+t._summ+"px;",table_className:""}),i},e._timeline_get_fit_events_stats=function(e,t,a){if(e.fit_events){var n=e._events_height[e.y_unit[t].key]||0
e.fit_events_offset&&(n+=e.fit_events_offset),a.height=n>a.height?n:a.height,a.style_height="height:"+a.height+"px;",a.style_line_height="line-height:"+(a.height-1)+"px;",e._section_height[e.y_unit[t].key]=a.height}return a.style_height="height:"+a.height+"px;",a.style_line_height="line-height:"+(a.height-1)+"px;",e._section_height[e.y_unit[t].key]=a.height,a},e._timeline_set_scroll_pos=function(e,a){var n=e.querySelector(".dhx_timeline_data_wrapper")
n.scrollTop=a._y_scroll||0,a.scrollHelper.setScrollValue(n,a._x_scroll||0),a.scrollHelper.getMode()!=a.scrollHelper.modes.maxMin&&n.scrollLeft==a._summ-n.offsetWidth+a.dx&&(n.scrollLeft+=t())},e._timeline_save_scroll_pos=function(e,t,a,n){e._y_scroll=t||0,e._x_scroll=a||0},e._timeline_get_html_for_cell_data_row=function(e,t,a,n,i){var r=""
return i.template&&(r+=" "+(i.template(i.section,i.view)||"")),"<div class='dhx_timeline_data_row"+r+"' data-section-id='"+o(n)+"' data-section-index='"+e+"' style='"+t.summ_width+t.style_height+" position:absolute; top:"+a+"px;'>"},e._timeline_get_html_for_cell_ignores=function(e){return'<div class="dhx_matrix_cell dhx_timeline_data_cell" style="'+e.style_height+e.style_line_height+';display:none"></div>'},e._timeline_get_html_for_cell=function(t,a,n,i,r,o){var _=n._trace_x[t],d=n.y_unit[a],l=e._cols[t],c=s(_),h=e.templates[n.name+"_cell_value"](i,_,d)
return"<div data-col-id='"+t+"' data-col-date='"+c+"' class='dhx_matrix_cell dhx_timeline_data_cell "+e.templates[n.name+"_cell_class"](i,_,d)+"' style='width:"+l+"px;"+r.style_height+r.style_line_height+(e.config.rtl?" right:":"  left:")+o+"px;'><div style='width:auto'>"+h+"</div></div>"},e._timeline_get_html_for_bar_matrix_line=function(e,t,a,n){return"<div style='"+t.summ_width+" "+t.style_height+" position:absolute; top:"+a+"px;' data-section-id='"+o(n)+"' data-section-index='"+e+"' class='dhx_matrix_line'>"},e._timeline_get_html_for_bar_data_row=function(e,t){var a=e.table_className
return t.template&&(a+=" "+(t.template(t.section,t.view)||"")),"<div class='dhx_timeline_data_row "+a+"' style='"+e.summ_width+" "+e.style_height+"' >"},e._timeline_get_html_for_bar_ignores=function(){return""},e._timeline_get_html_for_bar=function(t,a,n,i,r,o){var _=s(n._trace_x[t]),d=n.y_unit[a],l=""
n.cell_template&&(l=e.templates[n.name+"_cell_value"](i,n._trace_x[t],d,o))
var c="line-height:"+n._section_height[d.key]+"px;"
return"<div class='dhx_matrix_cell dhx_timeline_data_cell "+e.templates[n.name+"_cell_class"](i,n._trace_x[t],d,o)+"' style='width:"+e._cols[t]+"px; "+(e.config.rtl?"right:":"left:")+r+"px;'  data-col-id='"+t+"' data-col-date='"+_+"' ><div style='width:auto; height:100%;position:relative;"+c+"'>"+l+"</div></div>"},e._timeline_render_scale_header=function(t,a){var n=e.$container.querySelector(".dhx_timeline_scale_header")
if(n&&n.parentNode.removeChild(n),a){n=document.createElement("div")
var i="dhx_timeline_scale_header"
t.second_scale&&(i+=" dhx_timeline_second_scale")
var r=e.xy.scale_height
n.className=i,n.style.cssText=["width:"+(t.dx-1)+"px","height:"+r+"px","line-height:"+r+"px","top:"+(e.xy.nav_height+2)+"px",e.config.rtl?"right:0":"left:0"].join(";"),n.innerHTML=e.templates[t.name+"_scale_header"](t),e.$container.appendChild(n)}},e._timeline_y_scale=function(a){var n=e._timeline_get_block_stats(a,this),i=this.scrollable?" dhx_timeline_scrollable_data":"",r="<div class='dhx_timeline_table_wrapper'>",_="<div class='dhx_timeline_label_wrapper' style='"+n.style_label_wrapper+"'><div class='dhx_timeline_label_col'>",s="<div class='dhx_timeline_data_wrapper"+i+"' style='"+n.style_data_wrapper+"'><div class='dhx_timeline_data_col'>"
e._load_mode&&e._load(),e._timeline_smart_render.clearPreparedEventsCache(c)
var c=e._timeline_smart_render.getPreparedEvents(this)
e._timeline_smart_render.cachePreparedEvents(c)
for(var h=0,u=0;u<e._cols.length;u++)h+=e._cols[u]
var f=new Date,p=e._cols.length-e._ignores_detected
f=(e.date.add(f,this.x_step*p,this.x_unit)-f-(this._start_correction+this._end_correction)*p)/h,this._step=f,this._summ=h
var v=e._colsS.heights=[],g=[]
this._events_height={},this._section_height={},this._label_rows=[]
var m=!1,y=null;(this.scrollable||this.smart_rendering)&&(y=e._timeline_smart_render.getViewPort(this.scrollHelper,this._sch_height)),e._timeline_smart_render._rendered_labels_cache=[],e._timeline_smart_render._rendered_events_cache=[]
var b=!!y,x=this._smartRenderingEnabled(),w=function(t,a){for(var n=[],i={},r=0,o=0;o<t.y_unit.length;o++){e._timeline_calculate_event_positions.call(t,a[o])
var _=e._timeline_get_cur_row_stats(t,o);(_=e._timeline_get_fit_events_stats(t,o,_)).top=r,n.push(_),i[t.y_unit[o].key]=_,r+=_.height}return{totalHeight:r,rowStats:n,rowStatsByKey:i}}(this,c)
y&&w.totalHeight<y.scrollTop&&(y.scrollTop=Math.max(0,w.totalHeight-y.height)),this._rowStats=w.rowStatsByKey
for(var k=0;k<this.y_unit.length;k++){var E=w.rowStats[k],D=this.y_unit[k],S=E.top,M="<div class='dhx_timeline_label_row "+E.tr_className+"' style='top:"+S+"px;"+E.style_height+E.style_line_height+"'data-row-index='"+k+"' data-row-id='"+o(D.key)+"'><div class='"+E.td_className+"' style='"+E.style_width+" height:"+E.height+"px;' "+e._waiAria.label(E.td_content)+">"+E.td_content+"</div></div>"
if(x&&this._label_rows.push({div:M,top:S,section:D}),x&&(e._timeline_smart_render.isInYViewPort({top:S,bottom:S+E.height},y)||(m=!0)),m)m=!1
else{_+=M,x&&e._timeline_smart_render._rendered_labels_cache.push(k)
var C={view:this,section:D,template:e.templates[this.name+"_row_class"]},N=0
if("cell"==this.render){s+=e._timeline_get_html_for_cell_data_row(k,E,E.top,D.key,C)
for(var T=0;T<e._cols.length;T++)e._ignores[T]&&!x?s+=e._timeline_get_html_for_cell_ignores(E):x&&b?e._timeline_smart_render.isInXViewPort({left:N,right:N+e._cols[T]},y)&&(s+=e._timeline_get_html_for_cell(T,k,this,c[k][T],E,N)):s+=e._timeline_get_html_for_cell(T,k,this,c[k][T],E,N),N+=e._cols[T]
s+="</div>"}else{s+=e._timeline_get_html_for_bar_matrix_line(k,E,E.top,D.key)
var A=c[k]
for(x&&b&&(A=e._timeline_smart_render.getVisibleEventsForRow(this,y,c,k)),s+=e._timeline_get_events_html.call(this,A),s+=e._timeline_get_html_for_bar_data_row(E,C),T=0;T<e._cols.length;T++)e._ignores[T]?s+=e._timeline_get_html_for_bar_ignores():x&&b?e._timeline_smart_render.isInXViewPort({left:N,right:N+e._cols[T]},y)&&(s+=e._timeline_get_html_for_bar(T,k,this,c[k],N)):s+=e._timeline_get_html_for_bar(T,k,this,c[k],N),N+=e._cols[T]
s+="</div></div>"}}E.sectionKey=D.key,g.push(E)}r+=_+"</div></div>",r+=s+"</div></div>",r+="</div>",this._matrix=c,a.innerHTML=r,x&&(e.$container.querySelector(".dhx_timeline_data_col").style.height=w.totalHeight+"px"),e._populate_timeline_rendered(a),this._scales={},u=0
for(var O=g.length;u<O;u++){v.push(g[u].height)
var L=g[u].sectionKey
e._timeline_finalize_section_add(this,L,a)}x&&e._timeline_smart_render&&(e._timeline_smart_render._rendered_events_cache=[]),(x||this.scrollable)&&function(a,n,i,r){n._is_ev_creating=!1
var o=d(a,n),_=e._els.dhx_cal_header[0]
function s(e){if(!e.shiftKey){var t=e.deltaY||e.detail||-e.wheelDelta
t=t<0?-100:100,o.scrollTop+=t,e.preventDefault&&e.preventDefault()}}var c,h=function(e){return e.querySelector(".dhx_timeline_label_wrapper")}(a)
if(h&&(h.addEventListener?"onwheel"in document?h.addEventListener("wheel",s):"onmousewheel"in document&&h.addEventListener("mousewheel",s):h.attachEvent("onmousewheel",s),!h.$eventsAttached)){h.$eventsAttached=!0
var u={pageX:0,pageY:0}
h.addEventListener("touchstart",(function(e){var t=e
e.touches&&(t=e.touches[0]),u={pageX:t.pageX,pageY:t.pageY}})),h.addEventListener("touchmove",(function(e){var t=e
e.touches&&(t=e.touches[0])
var a=u.pageY-t.pageY
u={pageX:t.pageX,pageY:t.pageY},a&&(o.scrollTop+=a),e&&e.preventDefault&&e.preventDefault()}))}if(o.onscroll=function(s){var h=d(a,n),u=h.scrollTop,f=n.scrollHelper.getScrollValue(h),p=e._timeline_smart_render.getViewPort(n.scrollHelper,0,f,u),v=l()
if(n.scrollable&&(v.style.top=-u+"px"),!1!==n.smart_rendering){if((f!==n._x_scroll||n._is_ev_creating)&&(n.second_scale?e._timeline_smart_render.updateHeader(n,p,_.children[1]):e._timeline_smart_render.updateHeader(n,p,_.children[0])),e.config.rtl){var g=+e.$container.querySelector(".dhx_timeline_label_wrapper").style.height.replace("px",""),m=n._section_height[n.y_unit.length]+n._label_rows[n._label_rows.length-1].top
n.scrollHelper.getMode()==n.scrollHelper.modes.minMax&&(m>g||"tree"==n.render)?_.style.right=-1-f-t()+"px":_.style.right=-1-f+"px",_.style.left="unset"}else _.style.left=-1-f+"px";(n._options_changed||u!==n._y_scroll||n._is_ev_creating)&&e._timeline_smart_render.updateLabels(n,p,v),n._is_ev_creating=!1,e._timeline_smart_render.updateGridCols(n,p),e._timeline_smart_render.updateGridRows(n,p)
var y=!1
"cell"!=n.render&&(y=!0,c&&cancelAnimationFrame(c),c=requestAnimationFrame((function(){n.name===e.getState().mode&&(e._timeline_smart_render.updateEvents(n,p),c=0,n.callEvent("onScroll",[n.scrollHelper.getScrollValue(o),o.scrollTop]))})))
var b,x=0
n._scales={}
for(var w=0,k=(b="cell"===n.render?h.querySelectorAll(".dhx_timeline_data_col .dhx_timeline_data_row"):h.querySelectorAll(".dhx_timeline_data_col .dhx_matrix_line")).length;w<k;w++){var E=b[w].getAttribute("data-section-id"),D=n.order[E]
i[D]=r[D].height,n._scales[E]=b[w]}for(w=0,k=i.length;w<k;w++)x+=i[w]
e.$container.querySelector(".dhx_timeline_data_col").style.height=x+"px"
var S=h.scrollTop,M=n.scrollHelper.getScrollValue(h),C=n._summ-e.$container.querySelector(".dhx_cal_data").offsetWidth+n.dx+n.custom_scroll_width
e._timeline_save_scroll_pos(n,S,M,C),y||n.callEvent("onScroll",[M,S]),n._is_new_view=!1}},!o.$eventsAttached){o.$eventsAttached=!0
var f={pageX:0,pageY:0}
o.addEventListener("touchstart",(function(e){var t=e
e.touches&&(t=e.touches[0]),f={pageX:t.pageX,pageY:t.pageY}})),o.addEventListener("touchmove",(function(t){var a=t
t.touches&&(a=t.touches[0])
var i=l(),r=f.pageX-a.pageX,_=f.pageY-a.pageY
if(f={pageX:a.pageX,pageY:a.pageY},(r||_)&&!e.getState().drag_id){var s=Math.abs(r),d=Math.abs(_),c=Math.sqrt(r*r+_*_)
s/c<.42?r=0:d/c<.42&&(_=0),n.scrollHelper.setScrollValue(o,n.scrollHelper.getScrollValue(o)+r),o.scrollTop+=_,n.scrollable&&_&&(i.style.top=-o.scrollTop+"px")}return t&&t.preventDefault&&t.preventDefault(),!1}))}n.scroll_position&&n._is_new_view?n.scrollTo(n.scroll_position):e._timeline_set_scroll_pos(a,n),n._is_ev_creating=!0}(a,this,v,g)},e._timeline_finalize_section_add=function(t,a,n){var i=t._scales[a]=n.querySelector(".dhx_timeline_data_col [data-section-id='"+function(e){return String(e).replace(/'/g,"\\'").replace(/"/g,'\\"')}(a)+"']")
i&&e.callEvent("onScaleAdd",[i,a])},e.attachEvent("onBeforeViewChange",(function(t,a,n,i){if(e.matrix[n]){var r=e.matrix[n]
if(r.scrollable){if("tree"==r.render&&t===n&&a===i)return!0
r._x_scroll=r._y_scroll=0,e.$container.querySelector(".dhx_timeline_scrollable_data")&&e._timeline_set_scroll_pos(e._els.dhx_cal_data[0],r)}}return!0})),e._timeline_x_dates=function(t){var a=e._min_date,n=e._max_date
e._process_ignores(a,this.x_size,this.x_unit,this.x_step,t)
for(var i=0,r=0;+a<+n;)if(this._trace_x[r]=new Date(a),"month"==this.x_unit&&e.date[this.x_unit+"_start"]&&(a=e.date[this.x_unit+"_start"](new Date(a))),a=e.date.add(a,this.x_step,this.x_unit),e.date[this.x_unit+"_start"]&&(a=e.date[this.x_unit+"_start"](a)),e._ignores[r]||i++,r++,t)if(i<this.x_size&&!(+a<+n))n=e.date["add_"+this.name+"_private"](n,(this.x_length||this.x_size)*this.x_step)
else if(i>=this.x_size){e._max_date=a
break}return{total:r,displayed:i}},e._timeline_x_scale=function(t){var a=e._x-this.dx-e.xy.scroll_width,n=e._min_date,i=e.xy.scale_height,r=this._header_resized||e.xy.scale_height
e._cols=[],e._colsS={height:0},this._trace_x=[]
var o=e.config.preserve_scale_length,_=e._timeline_x_dates.call(this,o)
if(this.scrollable&&this.column_width>0){var d=this.column_width*_.displayed
d>a&&(a=d,this._section_autowidth=!1)}var l=[this.dx]
e._els.dhx_cal_header[0].style.width=l[0]+a+"px",n=e._min_date_timeline=e._min_date
for(var c=_.displayed,h=_.total,u=0;u<h;u++)e._ignores[u]?(e._cols[u]=0,c++):e._cols[u]=Math.floor(a/(c-u)),a-=e._cols[u],l[u+1]=l[u]+e._cols[u]
if(t.innerHTML="<div></div>",this.second_scale){for(var f=this.second_scale.x_unit,p=[this._trace_x[0]],v=[],g=[this.dx,this.dx],m=0,y=0;y<this._trace_x.length;y++){var b=this._trace_x[y]
e._timeline_is_new_interval(f,b,p[m])&&(p[++m]=b,g[m+1]=g[m])
var x=m+1
v[m]=e._cols[y]+(v[m]||0),g[x]+=e._cols[y]}t.innerHTML="<div></div><div></div>"
var w=t.firstChild
w.style.height=r+"px"
var k=t.lastChild
k.style.position="relative",k.className="dhx_bottom_scale_container"
for(var E=0;E<p.length;E++){var D=p[E],S=e.templates[this.name+"_second_scalex_class"](D),M=document.createElement("div")
M.className="dhx_scale_bar dhx_second_scale_bar"+(S?" "+S:""),e.set_xy(M,v[E]-1,r-3,g[E],0),M.innerHTML=e.templates[this.name+"_second_scale_date"](D),w.appendChild(M)}}e.xy.scale_height=r,t=t.lastChild,this._h_cols={}
for(var C=0;C<this._trace_x.length;C++)if(!e._ignores[C]){n=this._trace_x[C],e._render_x_header(C,l[C],n,t)
var N=e.templates[this.name+"_scalex_class"](n)
N&&(t.lastChild.className+=" "+N),t.lastChild.setAttribute("data-col-id",C),t.lastChild.setAttribute("data-col-date",s(n))
var T=t.lastChild.cloneNode(!0)
this._h_cols[C]={div:T,left:l[C]}}e.xy.scale_height=i
var A=this._trace_x
t.onclick=function(t){var a=e._timeline_locate_hcell(t)
a&&e.callEvent("onXScaleClick",[a.x,A[a.x],t])},t.ondblclick=function(t){var a=e._timeline_locate_hcell(t)
a&&e.callEvent("onXScaleDblClick",[a.x,A[a.x],t])}},e._timeline_is_new_interval=function(t,a,n){switch(t){case"hour":return a.getHours()!=n.getHours()||e._timeline_is_new_interval("day",a,n)
case"day":return!(a.getDate()==n.getDate()&&a.getMonth()==n.getMonth()&&a.getFullYear()==n.getFullYear())
case"week":return!(e.date.week_start(new Date(a)).valueOf()==e.date.week_start(new Date(n)).valueOf())
case"month":return!(a.getMonth()==n.getMonth()&&a.getFullYear()==n.getFullYear())
case"year":return!(a.getFullYear()==n.getFullYear())
default:return!1}},e._timeline_reset_scale_height=function(t){if(this._header_resized&&(!t||!this.second_scale)){e.xy.scale_height/=2,this._header_resized=!1
var a=e._els.dhx_cal_header[0]
a.className=a.className.replace(/ dhx_second_cal_header/gi,"")}},e._timeline_set_full_view=function(t){if(e._timeline_reset_scale_height.call(this,t),t){this.second_scale&&!this._header_resized&&(this._header_resized=e.xy.scale_height,e.xy.scale_height*=2,e._els.dhx_cal_header[0].className+=" dhx_second_cal_header"),e.set_sizes(),e._init_matrix_tooltip()
var a=e._min_date
if(e._timeline_x_scale.call(this,e._els.dhx_cal_header[0]),e.$container.querySelector(".dhx_timeline_scrollable_data")){var n=e._timeline_smart_render.getViewPort(this.scrollHelper),i=e._timeline_smart_render.getVisibleHeader(this,n)
i&&(this.second_scale?e._els.dhx_cal_header[0].children[1].innerHTML=i:e._els.dhx_cal_header[0].children[0].innerHTML=i)}e._timeline_y_scale.call(this,e._els.dhx_cal_data[0]),e._min_date=a
var r=e._getNavDateElement()
r&&(r.innerHTML=e.templates[this.name+"_date"](e._min_date,e._max_date)),e._mark_now&&e._mark_now(),e._timeline_reset_scale_height.call(this,t)}e._timeline_render_scale_header(this,t),e._timeline_hideToolTip()},e._timeline_hideToolTip=function(){e._tooltip&&(e._tooltip.style.display="none",e._tooltip.date="")},e._timeline_showToolTip=function(t,a,n){if("cell"==t.render){var i=a.x+"_"+a.y,r=t._matrix[a.y][a.x]
if(!r)return e._timeline_hideToolTip()
if(r.sort((function(e,t){return e.start_date>t.start_date?1:-1})),e._tooltip){if(e._tooltip.date==i)return
e._tooltip.innerHTML=""}else{var o=e._tooltip=document.createElement("div")
o.className="dhx_year_tooltip",e.config.rtl&&(o.className+=" dhx_tooltip_rtl"),document.body.appendChild(o),o.onclick=e._click.dhx_cal_data}for(var _="",s=0;s<r.length;s++){var d=r[s].color?"background-color:"+r[s].color+";":"",l=r[s].textColor?"color:"+r[s].textColor+";":""
_+="<div class='dhx_tooltip_line' event_id='"+r[s].id+"' "+e.config.event_attribute+"='"+r[s].id+"' style='"+d+l+"'>",_+="<div class='dhx_tooltip_date'>"+(r[s]._timed?e.templates.event_date(r[s].start_date):"")+"</div>",_+="<div class='dhx_event_icon icon_details'>&nbsp;</div>",_+=e.templates[t.name+"_tooltip"](r[s].start_date,r[s].end_date,r[s])+"</div>"}e._tooltip.style.display="",e._tooltip.style.top="0px",e.config.rtl&&n.left-e._tooltip.offsetWidth>=0||document.body.offsetWidth-a.src.offsetWidth-n.left-e._tooltip.offsetWidth<0?e._tooltip.style.left=n.left-e._tooltip.offsetWidth+"px":e._tooltip.style.left=n.left+a.src.offsetWidth+"px",e._tooltip.date=i,e._tooltip.innerHTML=_,document.body.offsetHeight-n.top-e._tooltip.offsetHeight<0?e._tooltip.style.top=n.top-e._tooltip.offsetHeight+a.src.offsetHeight+"px":e._tooltip.style.top=n.top+"px"}},e._matrix_tooltip_handler=function(t){var a=e.matrix[e._mode]
if(a&&"cell"==a.render){if(a){var n=e._locate_cell_timeline(t)
if(n)return e._timeline_showToolTip(a,n,e.$domHelpers.getOffset(n.src))}e._timeline_hideToolTip()}},e._init_matrix_tooltip=function(){e._detachDomEvent(e._els.dhx_cal_data[0],"mouseover",e._matrix_tooltip_handler),e.event(e._els.dhx_cal_data[0],"mouseover",e._matrix_tooltip_handler)},e._set_timeline_dates=function(t){e._min_date=e.date[t.name+"_start"](new Date(e._date)),e._max_date=e.date["add_"+t.name+"_private"](e._min_date,t.x_size*t.x_step),e.date[t.x_unit+"_start"]&&(e._max_date=e.date[t.x_unit+"_start"](e._max_date)),e._table_view=!0},e._renderMatrix=function(t,a){this.callEvent("onBeforeRender",[]),a||(e._els.dhx_cal_data[0].scrollTop=0),e._set_timeline_dates(this),e._timeline_set_full_view.call(this,t)},e._timeline_html_index=function(t){for(var a=t.parentNode.childNodes,n=-1,i=0;i<a.length;i++)if(a[i]==t){n=i
break}var r=n
if(e._ignores_detected)for(var o in e._ignores)e._ignores[o]&&1*o<=r&&r++
return r},e._timeline_locate_hcell=function(t){for(var a=t.target?t.target:t.srcElement;a&&"DIV"!=a.tagName;)a=a.parentNode
if(a&&"DIV"==a.tagName&&"dhx_scale_bar"==e._getClassName(a).split(" ")[0])return{x:e._timeline_html_index(a),y:-1,src:a,scale:!0}},e._locate_cell_timeline=function(t){for(var a=t.target?t.target:t.srcElement,i={},r=e.matrix[e._mode],o=e.getActionData(t),_=e._ignores,s=0,d=0;d<r._trace_x.length-1&&!(+o.date<r._trace_x[d+1]);d++)_[d]||s++
i.x=0===s?0:d,i.y=r.order[o.section]
var l=0
if(r.scrollable&&"cell"===r.render){if(!r._scales[o.section]||!r._scales[o.section].querySelector(".dhx_matrix_cell"))return
var c=r._scales[o.section].querySelector(".dhx_matrix_cell")
if(!c)return
var h=c.offsetLeft
if(h>0){for(var u=e._timeline_drag_date(r,h),f=0;f<r._trace_x.length-1&&!(+u<r._trace_x[f+1]);f++);l=f}}i.src=r._scales[o.section]?r._scales[o.section].querySelectorAll(".dhx_matrix_cell")[d-l]:null
var p=!1,v=function(e,t){if(e.closest)return e.closest(t)
if(e.matches||e.msMatchesSelector||e.webkitMatchesSelector){var a=e
if(!document.documentElement.contains(a))return null
do{if((a.matches||a.msMatchesSelector||a.webkitMatchesSelector).call(a,t))return a
a=a.parentElement||a.parentNode}while(null!==a&&1===a.nodeType)
return null}return n.a.console.error("Your browser is not supported"),null}(a,".dhx_matrix_scell")
return v&&(a=v,p=!0),p?(i.x=-1,i.src=a,i.scale=!0):i.x=d,i}
var c=e._click.dhx_cal_data
e._click.dhx_marked_timespan=e._click.dhx_cal_data=function(t){var a=c.apply(this,arguments),n=e.matrix[e._mode]
if(n){var i=e._locate_cell_timeline(t)
i&&(i.scale?e.callEvent("onYScaleClick",[i.y,n.y_unit[i.y],t]):(e.callEvent("onCellClick",[i.x,i.y,n._trace_x[i.x],(n._matrix[i.y]||{})[i.x]||[],t]),e._timeline_set_scroll_pos(e._els.dhx_cal_data[0],n)))}return a},e.dblclick_dhx_matrix_cell=function(t){var a=e.matrix[e._mode]
if(a){var n=e._locate_cell_timeline(t)
n&&(n.scale?e.callEvent("onYScaleDblClick",[n.y,a.y_unit[n.y],t]):e.callEvent("onCellDblClick",[n.x,n.y,a._trace_x[n.x],(a._matrix[n.y]||{})[n.x]||[],t]))}}
var h=e.dblclick_dhx_marked_timespan||function(){}
e.dblclick_dhx_marked_timespan=function(t){return e.matrix[e._mode]?e.dblclick_dhx_matrix_cell(t):h.apply(this,arguments)},e.dblclick_dhx_matrix_scell=function(t){return e.dblclick_dhx_matrix_cell(t)},e._isRender=function(t){return e.matrix[e._mode]&&e.matrix[e._mode].render==t},e.attachEvent("onCellDblClick",(function(t,a,n,i,r){if(!this.config.readonly&&("dblclick"!=r.type||this.config.dblclick_create)){var o=e.matrix[e._mode],_={}
_.start_date=o._trace_x[t],_.end_date=o._trace_x[t+1]?o._trace_x[t+1]:e.date.add(o._trace_x[t],o.x_step,o.x_unit),o._start_correction&&(_.start_date=new Date(1*_.start_date+o._start_correction)),o._end_correction&&(_.end_date=new Date(_.end_date-o._end_correction)),_[o.y_property]=o.y_unit[a].key,e.addEventNow(_,null,r)}})),e.attachEvent("onBeforeDrag",(function(t,a,n){return!e._isRender("cell")})),e.attachEvent("onEventChanged",(function(e,t){t._timed=this.isOneDayEvent(t)})),e.attachEvent("onBeforeEventChanged",(function(e,t,a,n){return e&&(e._move_delta=void 0),n&&(n._move_delta=void 0),!0})),e._is_column_visible=function(t){var a=e.matrix[e._mode],n=e._get_date_index(a,t)
return!e._ignores[n]}
var u=e._render_marked_timespan
e._render_marked_timespan=function(t,a,n,i,r){if(!e.config.display_marked_timespans)return[]
if(e.matrix&&e.matrix[e._mode]){if(e._isRender("cell"))return
var o=e._lame_copy({},e.matrix[e._mode])
o.round_position=!1
var _=[],s=[],d=[],l=t.sections?t.sections.units||t.sections.timeline:null
if(n)d=[a],s=[n]
else{var c=o.order
if(l)c.hasOwnProperty(l)&&(s.push(l),d.push(o._scales[l]))
else if(o._scales)for(var h in c)c.hasOwnProperty(h)&&o._scales[h]&&(s.push(h),d.push(o._scales[h]))}if(i=i?new Date(i):e._min_date,r=r?new Date(r):e._max_date,i.valueOf()<e._min_date.valueOf()&&(i=new Date(e._min_date)),r.valueOf()>e._max_date.valueOf()&&(r=new Date(e._max_date)),!o._trace_x)return
for(var f=0;f<o._trace_x.length&&!e._is_column_visible(o._trace_x[f]);f++);if(f==o._trace_x.length)return
var p=[]
if(t.days>6){var v=new Date(t.days)
e.date.date_part(new Date(i))<=+v&&+r>=+v&&p.push(v)}else p.push.apply(p,e._get_dates_by_index(t.days))
for(var g=t.zones,m=e._get_css_classes_by_config(t),y=0;y<s.length;y++)for(a=d[y],n=s[y],f=0;f<p.length;f++)for(var b=p[f],x=0;x<g.length;x+=2){var w=g[x],k=g[x+1],E=new Date(+b+60*w*1e3),D=new Date(+b+60*k*1e3)
if(E=new Date(E.valueOf()+1e3*(E.getTimezoneOffset()-b.getTimezoneOffset())*60),i<(D=new Date(D.valueOf()+1e3*(D.getTimezoneOffset()-b.getTimezoneOffset())*60))&&r>E){var S=e._get_block_by_config(t)
S.className=m
var M=e._timeline_getX({start_date:E},!1,o)-1,C=e._timeline_getX({start_date:D},!1,o)-1,N=Math.max(1,C-M-1),T=o._section_height[n]-1||o.dy-1
S.style.cssText="height: "+T+"px; "+(e.config.rtl?"right: ":"left: ")+M+"px; width: "+N+"px; top: 0;",a.insertBefore(S,a.firstChild),_.push(S)}}return _}return u.apply(e,[t,a,n])}
var f=e._append_mark_now
e._append_mark_now=function(t,a){if(e.matrix&&e.matrix[e._mode]){var n=e._currentDate(),i=e._get_zone_minutes(n),r={days:+e.date.date_part(n),zones:[i,i+1],css:"dhx_matrix_now_time",type:"dhx_now_time"}
return e._render_marked_timespan(r)}return f.apply(e,[t,a])}
var p=e._mark_timespans
e._mark_timespans=function(){if(e.matrix&&e.matrix[e.getState().mode]){for(var t=[],a=e.matrix[e.getState().mode],n=a.y_unit,i=0;i<n.length;i++){var r=n[i].key,o=a._scales[r],_=e._on_scale_add_marker(o,r)
t.push.apply(t,_)}return t}return p.apply(this,arguments)}
var v=e._on_scale_add_marker
e._on_scale_add_marker=function(t,a){if(e.matrix&&e.matrix[e._mode]){var n=[],i=e._marked_timespans
if(i&&e.matrix&&e.matrix[e._mode])for(var r=e._mode,o=e._min_date,_=e._max_date,s=i.global,d=e.date.date_part(new Date(o));d<_;d=e.date.add(d,1,"day")){var l=+d,c=d.getDay(),h=[]
if(e.config.overwrite_marked_timespans){var u=s[l]||s[c]
h.push.apply(h,e._get_configs_to_render(u))}else s[l]&&h.push.apply(h,e._get_configs_to_render(s[l])),s[c]&&h.push.apply(h,e._get_configs_to_render(s[c]))
if(i[r]&&i[r][a]){var f=[],p=e._get_types_to_render(i[r][a][c],i[r][a][l])
f.push.apply(f,e._get_configs_to_render(p)),e.config.overwrite_marked_timespans?f.length&&(h=f):h=h.concat(f)}for(var g=0;g<h.length;g++){var m=h[g],y=m.days
y<7?(y=l,n.push.apply(n,e._render_marked_timespan(m,t,a,d,e.date.add(d,1,"day"))),y=c):n.push.apply(n,e._render_marked_timespan(m,t,a,d,e.date.add(d,1,"day")))}}return n}return v.apply(this,arguments)},e._resolve_timeline_section=function(e,t){for(var a=0,n=0;a<this._colsS.heights.length&&!((n+=this._colsS.heights[a])>t.y);a++);e.y_unit[a]||(a=e.y_unit.length-1),this._drag_event&&!this._drag_event._orig_section&&(this._drag_event._orig_section=e.y_unit[a].key),t.fields={},a>=0&&e.y_unit[a]&&(t.section=t.fields[e.y_property]=e.y_unit[a].key)},e._update_timeline_section=function(e){var t=e.view,a=e.event,n=e.pos
if(a){if(a[t.y_property]!=n.section){var i=this._get_timeline_event_height?this._get_timeline_event_height(a,t):t.getEventHeight(a)
a._sorder=this._get_dnd_order(a._sorder,i,t.getSectionHeight(n.section))}a[t.y_property]=n.section}},e._get_date_index=function(e,t){for(var a=e._trace_x,n=0,i=a.length-1,r=t.valueOf();i-n>3;){var o=n+Math.floor((i-n)/2)
a[o].valueOf()>r?i=o:n=o}for(var _=n;_<=i&&+t>=+a[_+1];)_++
return _},e._timeline_drag_date=function(t,a){var n=t,i=a
if(!n._trace_x.length)return new Date(e.getState().date)
for(var r,o,_,s=0,d=0;d<=this._cols.length-1;d++)if((s+=o=this._cols[d])>i){r=(r=(i-(s-o))/o)<0?0:r
break}if(n.round_position){var l=1,c=e.getState().drag_mode
c&&"move"!=c&&"create"!=c&&(l=.5),r>=l&&d++,r=0}if(0===d&&this._ignores[0])for(d=1,r=0;this._ignores[d];)d++
else if(d==this._cols.length&&this._ignores[d-1]){for(d=this._cols.length-1,r=0;this._ignores[d];)d--
d++}if(d>=n._trace_x.length)_=e.date.add(n._trace_x[n._trace_x.length-1],n.x_step,n.x_unit),n._end_correction&&(_=new Date(_-n._end_correction))
else{var h=r*o*n._step+n._start_correction
_=new Date(+n._trace_x[d]+h)}return _},e.attachEvent("onBeforeTodayDisplayed",(function(){for(var t in e.matrix){var a=e.matrix[t]
a.x_start=a._original_x_start}return!0})),e.attachEvent("onOptionsLoad",(function(){for(var t in e.matrix){var a=e.matrix[t]
for(a.order={},e.callEvent("onOptionsLoadStart",[]),t=0;t<a.y_unit.length;t++)a.order[a.y_unit[t].key]=t
e.callEvent("onOptionsLoadFinal",[]),e._date&&a.name==e._mode&&(a._options_changed=!0,e.setCurrentView(e._date,e._mode),setTimeout((function(){a._options_changed=!1})))}})),e.attachEvent("onEventIdChange",(function(){var t=e.getView()
t&&e.matrix[t.name]&&e._timeline_smart_render&&(e._timeline_smart_render.clearPreparedEventsCache(),e._timeline_smart_render.getPreparedEvents(t))})),e.attachEvent("onBeforeDrag",(function(t,a,n){if("resize"==a){var i=n.target||n.srcElement
e._getClassName(i).indexOf("dhx_event_resize_end")<0?e._drag_from_start=!0:e._drag_from_start=!1}return!0})),function(e){var t=null,a=null
function n(n){t&&clearInterval(t),e._schedulerOuter=e.$container.querySelector(".dhx_timeline_data_wrapper")
var r={pageX:n.touches?n.touches[0].pageX:n.pageX,pageY:n.touches?n.touches[0].pageY:n.pageY}
t=setInterval((function(){!function(n){if(!e.getState().drag_id)return clearInterval(t),void(a=null)
var r=e.matrix[e._mode]
if(r){var o=e._schedulerOuter,_=function(t,a){var n=e.matrix[e._mode],i={},r={},o=a
for(i.x=t.touches?t.touches[0].pageX:t.pageX,i.y=t.touches?t.touches[0].pageY:t.pageY,r.left=o.offsetLeft+n.dx,r.top=o.offsetTop;o;)r.left+=o.offsetLeft,r.top+=o.offsetTop,o=o.offsetParent
return{x:i.x-r.left,y:i.y-r.top}}(n,o),s=o.offsetWidth-r.dx,d=o.offsetHeight,l=_.x,c=_.y,h=r.autoscroll||{}
e._merge(h,{range_x:200,range_y:100,speed_x:20,speed_y:10})
var u=i(l,s,a?a.x:0,h.range_x)
r.scrollable||(u=0)
var f=i(c,d,a?a.y:0,h.range_y)
!f&&!u||a||(a={x:l,y:c},u=0,f=0),u*=h.speed_x,f*=h.speed_y,u&&f&&(Math.abs(u/5)>Math.abs(f)?f=0:Math.abs(f/5)>Math.abs(u)&&(u=0)),u||f?(a.started=!0,function(t,a){var n=e._schedulerOuter
a&&(n.scrollTop+=a),t&&(n.scrollLeft+=t)}(u,f)):clearInterval(t)}}(r)}),10)}function i(e,t,n,i){return e<i&&(!a||a.started||e<n)?-1:t-e<i&&(!a||a.started||e>n)?1:0}var r=e.attachEvent("onSchedulerReady",(function(){e.matrix&&(e.event(document.body,"mousemove",n),e.detachEvent(r))}))}(e),function(e){e._timeline_smart_render={_prepared_events_cache:null,_rendered_events_cache:[],_rendered_header_cache:[],_rendered_labels_cache:[],_rows_to_delete:[],_rows_to_add:[],_cols_to_delete:[],_cols_to_add:[],getViewPort:function(t,a,n,i){var r=e.$container.querySelector(".dhx_cal_data"),o=r.getBoundingClientRect(),_=e.$container.querySelector(".dhx_timeline_scrollable_data")
_&&void 0===n&&(n=t.getScrollValue(_)),void 0===i&&(i=_?_.scrollTop:r.scrollTop)
var s={}
for(var d in o)s[d]=o[d]
return s.scrollLeft=n||0,s.scrollTop=i||0,a&&(o.height=a),s},isInXViewPort:function(e,t){var a=t.scrollLeft,n=t.width+t.scrollLeft
return e.left<n+100&&e.right>a-100},isInYViewPort:function(e,t){var a=t.scrollTop,n=t.height+t.scrollTop
return e.top<n+100&&e.bottom>a-100},getVisibleHeader:function(t,a){var n=""
for(var i in this._rendered_header_cache=[],t._h_cols){var r=t._h_cols[i]
this.isInXViewPort({left:r.left,right:r.left+e._cols[i]},a)&&(n+=r.div.outerHTML,this._rendered_header_cache.push(r.div.getAttribute("data-col-id")))}return n},updateHeader:function(t,a,n){this._cols_to_delete=[],this._cols_to_add=[]
for(var i=e.$container.querySelectorAll(".dhx_cal_header > div"),r=i[i.length-1].querySelectorAll(".dhx_scale_bar"),o=[],_=0;_<r.length;_++)o.push(r[_].getAttribute("data-col-id"))
if(this.getVisibleHeader(t,a)){for(var s=this._rendered_header_cache.slice(),d=[],l=(_=0,o.length);_<l;_++){var c=s.indexOf(o[_])
c>-1?s.splice(c,1):d.push(o[_])}d.length&&(this._cols_to_delete=d.slice(),this._deleteHeaderCells(d,t,n)),s.length&&(this._cols_to_add=s.slice(),this._addHeaderCells(s,t,n))}},_deleteHeaderCells:function(e,t,a){for(var n=0;n<e.length;n++){var i=a.querySelector('[data-col-id="'+e[n]+'"]')
i&&a.removeChild(i)}},_addHeaderCells:function(e,t,a){for(var n="",i=0;i<e.length;i++)n+=t._h_cols[e[i]].div.outerHTML
a.insertAdjacentHTML("beforeEnd",n)},getVisibleLabels:function(e,t){if(e._label_rows.length){var a=""
this._rendered_labels_cache=[]
for(var n=0;n<e._label_rows.length;n++)this.isInYViewPort({top:e._label_rows[n].top,bottom:e._label_rows[n].top+e._section_height[e.y_unit[n].key]},t)&&(a+=e._label_rows[n].div,this._rendered_labels_cache.push(n))
return a}},updateLabels:function(e,t,a){this._rows_to_delete=[],this._rows_to_add=[]
var n=this._rendered_labels_cache.slice()
if(n.length||(this.getVisibleLabels(e,t),n=this._rendered_labels_cache.slice()),this.getVisibleLabels(e,t)){for(var i=this._rendered_labels_cache.slice(),r=[],o=0,_=n.length;o<_;o++){var s=i.indexOf(n[o])
s>-1?i.splice(s,1):r.push(n[o])}r.length&&(this._rows_to_delete=r.slice(),this._deleteLabelCells(r,e,a)),i.length&&(this._rows_to_add=i.slice(),this._addLabelCells(i,e,a))}},_deleteLabelCells:function(e,t,a){for(var n=0;n<e.length;n++){var i=a.querySelector('[data-row-index="'+e[n]+'"]')
i&&a.removeChild(i)}},_addLabelCells:function(e,t,a){for(var n="",i=0;i<e.length;i++)n+=t._label_rows[e[i]].div
a.insertAdjacentHTML("beforeEnd",n)},clearPreparedEventsCache:function(){this.cachePreparedEvents(null)},cachePreparedEvents:function(e){this._prepared_events_cache=e,this._prepared_events_coordinate_cache=e},getPreparedEvents:function(t){var a
return this._prepared_events_cache?a=this._prepared_events_cache:((a=e._prepare_timeline_events(t)).$coordinates={},this.cachePreparedEvents(a)),a},updateEvents:function(t,a){var n=this.getPreparedEvents(t),i=this._rendered_events_cache.slice()
this._rendered_events_cache=[]
var r=e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col")
if(r){for(var o=0;o<this._rendered_labels_cache.length;o++){var _=this._rendered_labels_cache[o],s=[],d=i[_]?i[_].slice():[]
e._timeline_calculate_event_positions.call(t,n[_])
for(var l=e._timeline_smart_render.getVisibleEventsForRow(t,a,n,_),c=0,h=l.length;c<h;c++){var u=d.indexOf(l[c].id)
u>-1?d.splice(u,1):s.push(l[c])}var f=r.querySelector('[data-section-index="'+_+'"]')
d.length&&this._deleteEvents(d,t,f),s.length&&this._addEvents(s,t,f,_)}e._populate_timeline_rendered(e.$container),t._matrix=n}},_deleteEvents:function(t,a,n){for(var i=0;i<t.length;i++){var r=n.querySelector("["+e.config.event_attribute+'="'+t[i]+'"]')
r&&(r.classList.contains("dhx_in_move")||n.removeChild(r))}},_addEvents:function(t,a,n,i){var r=e._timeline_update_events_html.call(a,t)
n.insertAdjacentHTML("beforeEnd",r)},getVisibleEventsForRow:function(t,a,n,i){var r=[]
if("cell"==t.render)r=n
else{var o=n[i]
if(o)for(var _=0,s=o.length;_<s;_++){var d,l,c=o[_],h=i+"_"+c.id
n.$coordinates&&n.$coordinates[h]?(d=n.$coordinates[h].xStart,l=n.$coordinates[h].xEnd):(d=e._timeline_getX(c,!1,t),l=e._timeline_getX(c,!0,t),n.$coordinates&&(n.$coordinates[h]={xStart:d,xEnd:l})),e._timeline_smart_render.isInXViewPort({left:d,right:l},a)&&(r.push(c),this._rendered_events_cache[i]||(this._rendered_events_cache[i]=[]),this._rendered_events_cache[i].push(c.id))}}return r},getVisibleRowCellsHTML:function(t,a,n,i,r){for(var o,_="",s=this._rendered_header_cache,d=0;d<s.length;d++){var l=s[d]
o=t._h_cols[l].left-t.dx,e._ignores[l]?"cell"==t.render?_+=e._timeline_get_html_for_cell_ignores(n):_+=e._timeline_get_html_for_bar_ignores():"cell"==t.render?_+=e._timeline_get_html_for_cell(l,r,t,i[r][l],n,o):_+=e._timeline_get_html_for_bar(l,r,t,i[r],o)}return _},getVisibleTimelineRowsHTML:function(t,a,n,i){var r="",o=e._timeline_get_cur_row_stats(t,i)
o=e._timeline_get_fit_events_stats(t,i,o)
var _=t._label_rows[i],s=e.templates[t.name+"_row_class"],d={view:t,section:_.section,template:s}
return"cell"==t.render?(r+=e._timeline_get_html_for_cell_data_row(i,o,_.top,_.section.key,d),r+=this.getVisibleRowCellsHTML(t,a,o,n,i),r+="</div>"):(r+=e._timeline_get_html_for_bar_matrix_line(i,o,_.top,_.section.key,d),r+=e._timeline_get_html_for_bar_data_row(o,d),r+=this.getVisibleRowCellsHTML(t,a,o,n,i),r+="</div></div>"),r},updateGridRows:function(e,t){this._rows_to_delete.length&&this._deleteGridRows(this._rows_to_delete),this._rows_to_add.length&&this._addGridRows(this._rows_to_add,e,t)},_deleteGridRows:function(t){var a=e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col")
if(a){for(var n=0;n<t.length;n++){var i=a.querySelector('[data-section-index="'+t[n]+'"]')
a.removeChild(i)}this._rows_to_delete=[]}},_addGridRows:function(t,a,n){var i=e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col")
if(i){for(var r=this.getPreparedEvents(a),o="",_=0;_<t.length;_++)o+=this.getVisibleTimelineRowsHTML(a,n,r,t[_])
for(i.insertAdjacentHTML("beforeEnd",o),_=0;_<t.length;_++)e._timeline_finalize_section_add(a,a.y_unit[t[_]].key,i)
e._mark_now&&e._mark_now(),this._rows_to_add=[]}},updateGridCols:function(t,a){for(var n=this._rendered_header_cache,i={},r={},o=0;o<n.length;o++)r[n[o]]=!0
var _=e.$container.querySelector(".dhx_timeline_data_row")
if(_){var s=_.querySelectorAll("[data-col-id]")
for(o=0;o<s.length;o++)i[s[o].getAttribute("data-col-id")]=!0}var d=[],l=[]
for(var o in i)r[o]||d.push(o)
for(var o in r)i[o]||l.push(o)
d.length&&this._deleteGridCols(d,t),l.length&&this._addGridCols(l,t,a)},_deleteGridCols:function(t,a){var n=e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col")
if(n){for(var i=0;i<this._rendered_labels_cache.length;i++){var r
if(r="cell"==a.render?n.querySelector('[data-section-index="'+this._rendered_labels_cache[i]+'"]'):n.querySelector('[data-section-index="'+this._rendered_labels_cache[i]+'"] .dhx_timeline_data_row '))for(var o=0;o<t.length;o++){var _=r.querySelector('[data-col-id="'+t[o]+'"]')
_&&r.removeChild(_)}}this._cols_to_delete=[]}},_addGridCols:function(t,a,n){var i=e.$container.querySelector(".dhx_cal_data .dhx_timeline_data_col")
if(i){for(var r=this.getPreparedEvents(a),o=0;o<this._rendered_labels_cache.length;o++){var _,s=this._rendered_labels_cache[o],d="",l=e._timeline_get_cur_row_stats(a,s)
if(l=e._timeline_get_fit_events_stats(a,s,l),_="cell"==a.render?i.querySelector('[data-section-index="'+s+'"]'):i.querySelector('[data-section-index="'+s+'"] .dhx_timeline_data_row')){for(var c=0;c<t.length;c++)if(!_.querySelector('[data-col-id="'+t[c]+'"]')){var h=this.getVisibleGridCell(a,n,l,r,s,t[c])
h&&(d+=h)}_.insertAdjacentHTML("beforeEnd",d)}}this._cols_to_add=[]}},getVisibleGridCell:function(t,a,n,i,r,o){if(t._h_cols[o]){var _="",s=t._h_cols[o].left-t.dx
return"cell"==t.render?e._ignores[o]||(_+=e._timeline_get_html_for_cell(o,r,t,i[r][o],n,s)):e._ignores[o]||(_+=e._timeline_get_html_for_bar(o,r,t,i[r],s)),_}}}}(e)},e._temp_matrix_scope()},tooltip:function(e){var t={}
e.ext.tooltip=e.dhtmlXTooltip=e.tooltip=t,t.config={className:"dhtmlXTooltip scheduler_tooltip tooltip",timeout_to_display:50,timeout_to_hide:50,delta_x:15,delta_y:-20},t.tooltip=document.createElement("div"),t.tooltip.className=t.config.className,e._waiAria.tooltipAttr(t.tooltip),t.show=function(a,n){if(!this._mobile||e.config.touch_tooltip){var i=t,r=this.tooltip,o=r.style
i.tooltip.className=i.config.className
var _=this.position(a),s=a.target||a.srcElement
if(!this.isTooltip(s)){var d=_.x+(i.config.delta_x||0),l=_.y-(i.config.delta_y||0)
o.visibility="hidden",o.removeAttribute?(o.removeAttribute("right"),o.removeAttribute("bottom")):(o.removeProperty("right"),o.removeProperty("bottom")),o.left="0",o.top="0",e.config.rtl&&(r.className+=" dhtmlXTooltip_rtl"),this.tooltip.innerHTML=n,document.body.appendChild(this.tooltip)
var c=this.tooltip.offsetWidth,h=this.tooltip.offsetHeight
document.documentElement.clientWidth-d-c<0?(o.removeAttribute?o.removeAttribute("left"):o.removeProperty("left"),o.right=document.documentElement.clientWidth-d+2*(i.config.delta_x||0)+"px"):o.left=d<0?_.x+Math.abs(i.config.delta_x||0)+"px":d+"px",document.documentElement.clientHeight-l-h<0?(o.removeAttribute?o.removeAttribute("top"):o.removeProperty("top"),o.bottom=document.documentElement.clientHeight-l-2*(i.config.delta_y||0)+"px"):o.top=l<0?_.y+Math.abs(i.config.delta_y||0)+"px":l+"px",e._waiAria.tooltipVisibleAttr(this.tooltip),o.visibility="visible",this.tooltip.onmouseleave=function(t){for(var a=e.dhtmlXTooltip,n=t.relatedTarget;n!=e._obj&&n;)n=n.parentNode
n!=e._obj&&a.delay(a.hide,a,[],a.config.timeout_to_hide)},e.callEvent("onTooltipDisplayed",[this.tooltip,this.tooltip.event_id])}}},t._clearTimeout=function(){this.tooltip._timeout_id&&clearTimeout(this.tooltip._timeout_id)},t.hide=function(){if(this.tooltip.parentNode){e._waiAria.tooltipHiddenAttr(this.tooltip)
var t=this.tooltip.event_id
this.tooltip.event_id=null,this.tooltip.onmouseleave=null,this.tooltip.parentNode.removeChild(this.tooltip),e.callEvent("onAfterTooltip",[t])}this._clearTimeout()},t.delay=function(e,t,a,n){this._clearTimeout(),this.tooltip._timeout_id=setTimeout((function(){var n=e.apply(t,a)
return e=t=a=null,n}),n||this.config.timeout_to_display)},t.isTooltip=function(e){for(var t=!1;e&&!t;)t=e.className==this.tooltip.className,e=e.parentNode
return t},t.position=function(e){return{x:e.clientX,y:e.clientY}},e.attachEvent("onMouseMove",(function(a,n){var i=n.target||n.srcElement,r=t,o=r.isTooltip(i),_=r.isTooltipTarget&&r.isTooltipTarget(i)
if(a&&e.getState().editor_id!=a||o||_){var s,d
if(a||r.tooltip.event_id){var l=e.getEvent(a)||e.getEvent(r.tooltip.event_id)
if(!l)return
if(r.tooltip.event_id=l.id,!(s=e.templates.tooltip_text(l.start_date,l.end_date,l)))return r.hide()}if(_&&(s=""),e.$env.isIE)for(var c in d={pageX:void 0,pageY:void 0,clientX:void 0,clientY:void 0,target:void 0,srcElement:void 0})d[c]=n[c]
if(!e.callEvent("onBeforeTooltip",[a])||!s)return
r.delay(r.show,r,[d||n,s])}else r.delay(r.hide,r,[],r.config.timeout_to_hide)})),e.attachEvent("onBeforeDrag",(function(){return t.hide(),!0})),e.attachEvent("onEventDeleted",(function(){return t.hide(),!0}))},treetimeline:function(e){var t
e.attachEvent("onTimelineCreated",(function(t){"tree"==t.render&&(t.y_unit_original=t.y_unit,t.y_unit=e._getArrayToDisplay(t.y_unit_original),e.attachEvent("onOptionsLoadStart",(function(){t.y_unit=e._getArrayToDisplay(t.y_unit_original)})),e.form_blocks[t.name]={render:function(e){return"<div class='dhx_section_timeline' style='overflow: hidden; height: "+e.height+"px'></div>"},set_value:function(t,a,n,i){var r=e._getArrayForSelect(e.matrix[i.type].y_unit_original,i.type)
t.innerHTML=""
var o=document.createElement("select")
t.appendChild(o)
var _=t.getElementsByTagName("select")[0]
!_._dhx_onchange&&i.onchange&&(_.onchange=i.onchange,_._dhx_onchange=!0)
for(var s=0;s<r.length;s++){var d=document.createElement("option")
d.value=r[s].key,d.value==n[e.matrix[i.type].y_property]&&(d.selected=!0),d.innerHTML=r[s].label,_.appendChild(d)}},get_value:function(e,t,a){return e.firstChild.value},focus:function(e){}})})),e.attachEvent("onBeforeSectionRender",(function(t,a,n){var i,r,o,_,s,d,l={}
return"tree"==t&&(_="dhx_matrix_scell",a.children?(i=n.folder_dy||n.dy,n.folder_dy&&!n.section_autoheight&&(o="height:"+n.folder_dy+"px;"),r="dhx_row_folder",_+=" folder",a.open?_+=" opened":_+=" closed",s="<div class='dhx_scell_expand'>"+(a.open?"-":"+")+"</div>",d=n.folder_events_available?"dhx_data_table folder_events":"dhx_data_table folder"):(i=n.dy,r="dhx_row_item",_+=" item",s="",d="dhx_data_table"),l={height:i,style_height:o,tr_className:r,td_className:_+=e.templates[n.name+"_scaley_class"](a.key,a.label,a)?" "+e.templates[n.name+"_scaley_class"](a.key,a.label,a):"",td_content:"<div class='dhx_scell_level"+a.level+"'>"+s+"<div class='dhx_scell_name'>"+(e.templates[n.name+"_scale_label"](a.key,a.label,a)||a.label)+"</div></div>",table_className:d}),l})),e.attachEvent("onBeforeEventChanged",(function(a,n,i){if(e._isRender("tree"))for(var r=e._get_event_sections?e._get_event_sections(a):[a[e.matrix[e._mode].y_property]],o=0;o<r.length;o++){var _=e.getSection(r[o])
if(_&&_.children&&!e.matrix[e._mode].folder_events_available)return i||(a[e.matrix[e._mode].y_property]=t),!1}return!0})),e.attachEvent("onBeforeDrag",(function(a,n,i){if(e._isRender("tree")){var r,o=e._locate_cell_timeline(i)
if(o&&(r=e.matrix[e._mode].y_unit[o.y].key,e.matrix[e._mode].y_unit[o.y].children&&!e.matrix[e._mode].folder_events_available))return!1
var _=e.getEvent(a),s=e.matrix[e._mode].y_property
t=_&&_[s]?_[s]:r}return!0})),e._getArrayToDisplay=function(t){var a=[]
return function t(n,i,r,o){for(var _=i||0,s=0;s<n.length;s++){var d=n[s]
d.level=_,d.$parent=r||null,d.children&&void 0===d.key&&(d.key=e.uid()),o||a.push(d),d.children&&t(d.children,_+1,d.key,o||!d.open)}}(t),a},e._getArrayForSelect=function(t,a){var n=[]
return function t(i){for(var r=0;r<i.length;r++)e.matrix[a].folder_events_available?n.push(i[r]):i[r].children||n.push(i[r]),i[r].children&&t(i[r].children)}(t),n},e._toggleFolderDisplay=function(t,a,n){var i=e.getSection(t)
void 0!==a||n||(a=!i.open),e.callEvent("onBeforeFolderToggle",[i,a,n])&&(function e(t,a,n,i){for(var r=0;r<a.length&&(a[r].key!=t&&!i||!a[r].children||(a[r].open=void 0!==n?n:!a[r].open,i));r++)a[r].children&&e(t,a[r].children,n,i)}(t,e.matrix[e._mode].y_unit_original,a,n),e.matrix[e._mode].y_unit=e._getArrayToDisplay(e.matrix[e._mode].y_unit_original),e.callEvent("onOptionsLoad",[]),e.callEvent("onAfterFolderToggle",[i,a,n]))},e.attachEvent("onCellClick",(function(t,a,n,i,r){e._isRender("tree")&&(e.matrix[e._mode].folder_events_available||void 0!==e.matrix[e._mode].y_unit[a]&&e.matrix[e._mode].y_unit[a].children&&e._toggleFolderDisplay(e.matrix[e._mode].y_unit[a].key))})),e.attachEvent("onYScaleClick",(function(t,a,n){e._isRender("tree")&&a.children&&e._toggleFolderDisplay(a.key)})),e.getSection=function(t){var a
if(e._isRender("tree"))return function e(t,n){for(var i=0;i<n.length;i++)n[i].key==t&&(a=n[i]),n[i].children&&e(t,n[i].children)}(t,e.matrix[e._mode].y_unit_original),a||null},e.deleteSection=function(t){if(e._isRender("tree")){var a=!1
return function e(t,n){for(var i=0;i<n.length&&(n[i].key==t&&(n.splice(i,1),a=!0),!a);i++)n[i].children&&e(t,n[i].children)}(t,e.matrix[e._mode].y_unit_original),e.matrix[e._mode].y_unit=e._getArrayToDisplay(e.matrix[e._mode].y_unit_original),e.callEvent("onOptionsLoad",[]),a}},e.deleteAllSections=function(){e._isRender("tree")&&(e.matrix[e._mode].y_unit_original=[],e.matrix[e._mode].y_unit=e._getArrayToDisplay(e.matrix[e._mode].y_unit_original),e.callEvent("onOptionsLoad",[]))},e.addSection=function(t,a){if(e._isRender("tree")){var n=!1
return function e(t,i,r){if(a)for(var o=0;o<r.length&&(r[o].key==i&&r[o].children&&(r[o].children.push(t),n=!0),!n);o++)r[o].children&&e(t,i,r[o].children)
else r.push(t),n=!0}(t,a,e.matrix[e._mode].y_unit_original),e.matrix[e._mode].y_unit=e._getArrayToDisplay(e.matrix[e._mode].y_unit_original),e.callEvent("onOptionsLoad",[]),n}},e.openAllSections=function(){e._isRender("tree")&&e._toggleFolderDisplay(1,!0,!0)},e.closeAllSections=function(){e._isRender("tree")&&e._toggleFolderDisplay(1,!1,!0)},e.openSection=function(t){e._isRender("tree")&&e._toggleFolderDisplay(t,!0)},e.closeSection=function(t){e._isRender("tree")&&e._toggleFolderDisplay(t,!1)}},units:function(e){e._props={},e.createUnitsView=function(t,a,n,i,r,o,_){function s(t){return Math.round((e._correct_shift(+t,1)-+e._min_date)/864e5)}"object"==Te(t)&&(n=t.list,a=t.property,i=t.size||0,r=t.step||1,o=t.skip_incorrect,_=t.days||1,t=t.name),e._props[t]={map_to:a,options:n,step:r,position:0,days:_},i>e._props[t].options.length&&(e._props[t]._original_size=i,i=0),e._props[t].size=i,e._props[t].skip_incorrect=o||!1,e.date[t+"_start"]=e.date.day_start,e.templates[t+"_date"]=function(a,n){return e._props[t].days>1?e.templates.week_date(a,n):e.templates.day_date(a)},e._get_unit_index=function(e,t){var a=e.position||0,n=s(t),i=e.size||e.options.length
return n>=i&&(n%=i),a+n},e.templates[t+"_scale_text"]=function(e,t,a){return a.css?"<span class='"+a.css+"'>"+t+"</span>":t},e.templates[t+"_scale_date"]=function(a){var n=e._props[t],i=n.options
if(!i.length)return""
var r=i[e._get_unit_index(n,a)],o=s(a),_=n.size||n.options.length,d=e.date.add(e.getState().min_date,Math.floor(o/_),"day")
return e.templates[t+"_scale_text"](r.key,r.label,r,d)},e.templates[t+"_second_scale_date"]=function(t){return e.templates.week_scale_date(t)},e.date["add_"+t]=function(a,n){return e.date.add(a,n*e._props[t].days,"day")},e.date["get_"+t+"_end"]=function(a){return e.date.add(a,(e._props[t].size||e._props[t].options.length)*e._props[t].days,"day")},e.attachEvent("onOptionsLoad",(function(){for(var a=e._props[t],n=a.order={},i=a.options,r=0;r<i.length;r++)n[i[r].key]=r
a._original_size&&0===a.size&&(a.size=a._original_size,delete a._original_size),a.size>i.length?(a._original_size=a.size,a.position=0,a.size=0):a.size=a._original_size||a.size,e._date&&e._mode==t&&e.setCurrentView(e._date,e._mode)})),e["mouse_"+t]=function(t){var a=e._props[this._mode]
if(a){if(t=this._week_indexes_from_pos(t),this._drag_event||(this._drag_event={}),this._drag_id&&this._drag_mode&&(this._drag_event._dhx_changed=!0),this._drag_mode&&"new-size"==this._drag_mode){var n=e._get_event_sday(e._events[e._drag_id])
Math.floor(t.x/a.options.length)!=Math.floor(n/a.options.length)&&(t.x=n)}var i=a.size||a.options.length,r=t.x%i,o=Math.min(r+a.position,a.options.length-1)
t.section=(a.options[o]||{}).key,t.x=Math.floor(t.x/i)
var _=this.getEvent(this._drag_id)
this._update_unit_section({view:a,event:_,pos:t})}return t.force_redraw=!0,t}
var d=!1
function l(){d&&(e.xy.scale_height/=2,d=!1)}e[t+"_view"]=function(t){var a=e._props[e._mode]
t?(a&&a.days>1?d||(d=e.xy.scale_height,e.xy.scale_height=2*e.xy.scale_height):l(),e._reset_scale()):l()},e.callEvent("onOptionsLoad",[])},e._update_unit_section=function(e){var t=e.view,a=e.event,n=e.pos
a&&(a[t.map_to]=n.section)},e.scrollUnit=function(t){var a=e._props[this._mode]
a&&(a.position=Math.min(Math.max(0,a.position+t),a.options.length-a.size),this.setCurrentView())},function(){var t=function(t){var a=e._props[e._mode]
if(a&&a.order&&a.skip_incorrect){for(var n=[],i=0;i<t.length;i++)void 0!==a.order[t[i][a.map_to]]&&n.push(t[i])
t.splice(0,t.length),t.push.apply(t,n)}return t},a=e._pre_render_events_table
e._pre_render_events_table=function(e,n){return e=t(e),a.apply(this,[e,n])}
var n=e._pre_render_events_line
e._pre_render_events_line=function(e,a){return e=t(e),n.apply(this,[e,a])}
var i=function(t,a){if(t&&void 0===t.order[a[t.map_to]]){var n=e,i=Math.floor((a.end_date-n._min_date)/864e5)
return t.options.length&&(a[t.map_to]=t.options[Math.min(i+t.position,t.options.length-1)].key),!0}},r=e.is_visible_events
e.is_visible_events=function(t){var a=r.apply(this,arguments)
if(a){var n=e._props[this._mode]
if(n&&n.size){var i=n.order[t[n.map_to]]
if(i<n.position||i>=n.size+n.position)return!1}}return a}
var o=e._process_ignores
e._process_ignores=function(t,a,n,i,r){if(e._props[this._mode]){this._ignores={},this._ignores_detected=0
var _=e["ignore_"+this._mode]
if(_){var s=e._props&&e._props[this._mode]?e._props[this._mode].size||e._props[this._mode].options.length:1
a/=s
for(var d=new Date(t),l=0;l<a;l++){if(_(d))for(var c=(l+1)*s,h=l*s;h<c;h++)this._ignores_detected+=1,this._ignores[h]=!0,r&&a++
d=e.date.add(d,i,n),e.date[n+"_start"]&&(d=e.date[n+"_start"](d))}}}else o.call(this,t,a,n,i,r)}
var _=e._reset_scale
e._reset_scale=function(){var t=e._props[this._mode]
t&&(t.size&&t.position&&t.size+t.position>t.options.length?t.position=Math.max(0,t.options.length-t.size):t.size||(t.position=0))
var a=_.apply(this,arguments)
if(t){this._max_date=this.date.add(this._min_date,t.days,"day")
for(var n=this._els.dhx_cal_data[0].childNodes,i=0;i<n.length;i++)n[i].className=n[i].className.replace("_now","")
var r=this._currentDate()
if(r.valueOf()>=this._min_date&&r.valueOf()<this._max_date){var o=Math.floor((r-e._min_date)/864e5),s=t.size||t.options.length,d=o*s,l=d+s
for(i=d;i<l;i++)n[i]&&(n[i].className=n[i].className.replace("dhx_scale_holder","dhx_scale_holder_now"))}if(t.size&&t.size<t.options.length){var c=this._els.dhx_cal_header[0],h=document.createElement("div")
t.position&&(this._waiAria.headerButtonsAttributes(h,""),e.config.rtl?(h.className="dhx_cal_next_button",h.style.cssText="left:auto; right:0px;top:2px;position:absolute;"):(h.className="dhx_cal_prev_button",h.style.cssText="left:1px;top:2px;position:absolute;"),h.innerHTML="&nbsp;",c.firstChild.appendChild(h),h.onclick=function(){e.scrollUnit(-1*t.step)}),t.position+t.size<t.options.length&&(this._waiAria.headerButtonsAttributes(h,""),h=document.createElement("div"),e.config.rtl?(h.className="dhx_cal_prev_button",h.style.cssText="left:1px;top:2px;position:absolute;"):(h.className="dhx_cal_next_button",h.style.cssText="left:auto; right:0px;top:2px;position:absolute;"),h.innerHTML="&nbsp;",c.lastChild.appendChild(h),h.onclick=function(){e.scrollUnit(t.step)})}}return a}
var s=e._get_view_end
e._get_view_end=function(){var t=e._props[this._mode]
if(t&&t.days>1){var a=this._get_timeunit_start()
return e.date.add(a,t.days,"day")}return s.apply(this,arguments)}
var d=e._render_x_header
e._render_x_header=function(t,a,n,i){var r=e._props[this._mode]
if(!r||r.days<=1)return d.apply(this,arguments)
if(r.days>1){var o=i.querySelector(".dhx_second_cal_header")
o||((o=document.createElement("div")).className="dhx_second_cal_header",i.appendChild(o))
var _=e.xy.scale_height
e.xy.scale_height=Math.ceil(_/2),d.call(this,t,a,n,o,Math.ceil(e.xy.scale_height))
var s=r.size||r.options.length
if((t+1)%s==0){var l=document.createElement("div")
l.className="dhx_scale_bar dhx_second_scale_bar"
var c=this.date.add(this._min_date,Math.floor(t/s),"day")
this.templates[this._mode+"_second_scalex_class"]&&(l.className+=" "+this.templates[this._mode+"_second_scalex_class"](new Date(c)))
var h,u=this._cols[t]*s-1
h=s>1&&this.config.rtl?this._colsS[t-(s-1)]-this.xy.scroll_width-2:s>1?this._colsS[t-(s-1)]-this.xy.scale_width-2:a,this.set_xy(l,u,this.xy.scale_height-2,h,0),l.innerHTML=this.templates[this._mode+"_second_scale_date"](new Date(c),this._mode),o.appendChild(l)}e.xy.scale_height=_}}
var l=e._get_event_sday
e._get_event_sday=function(t){var a=e._props[this._mode]
return a?a.days<=1?(i(a,t),this._get_section_sday(t[a.map_to])):Math.floor((t.end_date.valueOf()-1-60*t.end_date.getTimezoneOffset()*1e3-(e._min_date.valueOf()-60*e._min_date.getTimezoneOffset()*1e3))/864e5)*(a.size||a.options.length)+a.order[t[a.map_to]]-a.position:l.call(this,t)},e._get_section_sday=function(t){var a=e._props[this._mode]
return a.order[t]-a.position}
var c=e.locate_holder_day
e.locate_holder_day=function(t,a,n){var r,o=e._props[this._mode]
return o?(n?i(o,n):(n={start_date:t,end_date:t},r=0),o.days<=1?1*(void 0===r?o.order[n[o.map_to]]:r)+(a?1:0)-o.position:Math.floor((n.start_date.valueOf()-e._min_date.valueOf())/864e5)*(o.size||o.options.length)+1*(void 0===r?o.order[n[o.map_to]]:r)+(a?1:0)-o.position):c.apply(this,arguments)}
var h=e._time_order
e._time_order=function(t){var a=e._props[this._mode]
a?t.sort((function(e,t){return a.order[e[a.map_to]]>a.order[t[a.map_to]]?1:-1})):h.apply(this,arguments)}
var u=e._pre_render_events_table
e._pre_render_events_table=function(t,a){var n=e._props[this._mode]
if(n&&n.days>1){for(var i,r={},o=0;o<t.length;o++){var _=t[o]
if(e.isOneDayEvent(t[o]))r[l=+e.date.date_part(new Date(_.start_date))]||(r[l]=[]),r[l].push(_)
else{var s=new Date(Math.min(+_.end_date,+this._max_date)),d=new Date(Math.max(+_.start_date,+this._min_date))
for(d=e.date.day_start(d),t.splice(o,1),o--;+d<+s;){var l,c=this._copy_event(_)
c.start_date=d,c.end_date=g(c.start_date),d=e.date.add(d,1,"day"),r[l=+e.date.date_part(new Date(d))]||(r[l]=[]),r[l].push(c)}}}for(var o in t=[],r){var h=u.apply(this,[r[o],a]),f=this._colsS.heights;(!i||f[0]>i[0])&&(i=f.slice()),t.push.apply(t,h)}var p=this._colsS.heights
for(p.splice(0,p.length),p.push.apply(p,i),o=0;o<t.length;o++)if(this._ignores[t[o]._sday])t.splice(o,1),o--
else{var v=t[o]
v._first_chunk=v._last_chunk=!1,this.getEvent(v.id)._sorder=v._sorder}t.sort((function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e.id>t.id?1:-1:e.start_date>t.start_date?1:-1}))}else t=u.apply(this,[t,a])
function g(t){var a=e.date.add(t,1,"day")
return e.date.date_part(a)}return t},e.attachEvent("onEventAdded",(function(t,a){if(this._loading)return!0
for(var n in e._props){var i=e._props[n]
void 0===a[i.map_to]&&i.options[0]&&(a[i.map_to]=i.options[0].key)}return!0})),e.attachEvent("onEventCreated",(function(t,a){var n=e._props[this._mode]
if(n&&a){var r=this.getEvent(t)
i(n,r)
var o=this._mouse_coords(a)
this._update_unit_section({view:n,event:r,pos:o}),this.event_updated(r)}return!0}))}()},url:function(e){e._get_url_nav=function(){for(var e={},t=(document.location.hash||"").replace("#","").split(","),a=0;a<t.length;a++){var n=t[a].split("=")
2==n.length&&(e[n[0]]=n[1])}return e},e.attachEvent("onTemplatesReady",(function(){var t=!0,a=e.date.str_to_date("%Y-%m-%d"),n=e.date.date_to_str("%Y-%m-%d"),i=e._get_url_nav().event||null
function r(t){i=t,e.getEvent(t)&&e.showEvent(t)}e.attachEvent("onAfterEventDisplay",(function(e){return i=null,!0})),e.attachEvent("onBeforeViewChange",(function(o,_,s,d){if(t){t=!1
var l=e._get_url_nav()
if(l.event)try{if(e.getEvent(l.event))return setTimeout((function(){r(l.event)})),!1
var c=e.attachEvent("onXLE",(function(){setTimeout((function(){r(l.event)})),e.detachEvent(c)}))}catch(e){}if(l.date||l.mode){try{this.setCurrentView(l.date?a(l.date):null,l.mode||null)}catch(e){this.setCurrentView(l.date?a(l.date):null,s)}return!1}}var h=["date="+n(d||_),"mode="+(s||o)]
i&&h.push("event="+i)
var u="#"+h.join(",")
return document.location.hash=u,!0}))}))},week_agenda:function(e){e._wa={},e.xy.week_agenda_scale_height=20,e.templates.week_agenda_event_text=function(t,a,n,i){return e.templates.event_date(t)+" "+n.text},e.date.week_agenda_start=e.date.week_start,e.date.week_agenda_end=function(t){return e.date.add(t,7,"day")},e.date.add_week_agenda=function(t,a){return e.date.add(t,7*a,"day")},e.attachEvent("onSchedulerReady",(function(){var t=e.templates
t.week_agenda_date||(t.week_agenda_date=t.week_date)})),function(){var t=e.date.date_to_str("%l, %F %d")
e.templates.week_agenda_scale_date=function(e){return t(e)}}(),e.attachEvent("onTemplatesReady",(function(){var t=e.render_data
e.render_data=function(a){if("week_agenda"!=this._mode)return t.apply(this,arguments)
e.week_agenda_view(!0)},e.week_agenda_view=function(t){if(e._min_date=e.date.week_start(e._date),e._max_date=e.date.add(e._min_date,1,"week"),e.set_sizes(),t){e._table_view=e._allow_dnd=!0,void 0===e._wa._prev_data_border&&(e._wa._prev_data_border=e._els.dhx_cal_data[0].style.borderTopWidth),e._els.dhx_cal_data[0].style.borderTopWidth=0,e._els.dhx_cal_data[0].style.overflowY="hidden",e._els.dhx_cal_date[0].innerHTML="",e._els.dhx_cal_data[0].style.top=parseInt(e._els.dhx_cal_data[0].style.top)-20-1+"px",e._els.dhx_cal_data[0].style.height=parseInt(e._els.dhx_cal_data[0].style.height)+20+1+"px",e._els.dhx_cal_header[0].style.display="none"
var a=e.$container.querySelector(".dhx_cal_scale_placeholder")
a&&(a.style.display="none"),function(){!function(){e._cols=[]
var t=parseInt(e._els.dhx_cal_data[0].style.width)
e._cols.push(Math.floor(t/2)),e._cols.push(t-e._cols[0]-1),e._colsS={0:[],1:[]}
for(var a=parseInt(e._els.dhx_cal_data[0].style.height),n=0;n<3;n++)e._colsS[0].push(Math.floor(a/(3-e._colsS[0].length))),a-=e._colsS[0][n]
e._colsS[1].push(e._colsS[0][0]),e._colsS[1].push(e._colsS[0][1]),a=e._colsS[0][e._colsS[0].length-1],e._colsS[1].push(Math.floor(a/2)),e._colsS[1].push(a-e._colsS[1][e._colsS[1].length-1])}(),e._els.dhx_cal_data[0].innerHTML="",e._rendered=[]
for(var t="",a=0;a<2;a++){var n="dhx_wa_column"
1==a&&(n+=" dhx_wa_column_last"),t+="<div class='"+n+"' style='width: "+e._cols[a]+"px;'>"
for(var i=0;i<e._colsS[a].length;i++){var r=e.xy.week_agenda_scale_height-2
t+="<div class='dhx_wa_day_cont'><div style='height:"+r+"px; line-height:"+r+"px;' class='dhx_wa_scale_bar'></div><div style='height:"+(e._colsS[a][i]-r-2)+"px;' class='dhx_wa_day_data' day='"+Math.min(6,2*i+a)+"'></div></div>"}t+="</div>"}var o=e._getNavDateElement()
o&&(o.innerHTML=e.templates[e._mode+"_date"](e._min_date,e._max_date,e._mode)),e._els.dhx_cal_data[0].innerHTML=t
var _=e._els.dhx_cal_data[0].getElementsByTagName("div"),s=[]
for(a=0;a<_.length;a++)"dhx_wa_day_cont"==_[a].className&&s.push(_[a])
e._wa._selected_divs=[]
var d=e.get_visible_events(),l=e.date.week_start(e._date),c=e.date.add(l,1,"day")
for(a=0;a<7;a++){s[a]._date=l,e._waiAria.weekAgendaDayCell(s[a],l)
var h=s[a].childNodes[0],u=s[a].childNodes[1]
h.innerHTML=e.templates.week_agenda_scale_date(l)
for(var f=[],p=0;p<d.length;p++){var v=d[p]
v.start_date<c&&v.end_date>l&&f.push(v)}for(f.sort((function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e.id>t.id?1:-1:e.start_date>t.start_date?1:-1})),i=0;i<f.length;i++){var g=f[i],m=document.createElement("div")
e._rendered.push(m)
var y=e.templates.event_class(g.start_date,g.end_date,g)
m.className="dhx_wa_ev_body"+(y?" "+y:""),e.config.rtl&&(m.className+=" dhx_wa_ev_body_rtl"),g._text_style&&(m.style.cssText=g._text_style),g.color&&(m.style.background=g.color),g.textColor&&(m.style.color=g.textColor),e._select_id&&g.id==e._select_id&&(e.config.week_agenda_select||void 0===e.config.week_agenda_select)&&(m.className+=" dhx_cal_event_selected",e._wa._selected_divs.push(m))
var b=""
g._timed||(b="middle",g.start_date.valueOf()>=l.valueOf()&&g.start_date.valueOf()<=c.valueOf()&&(b="start"),g.end_date.valueOf()>=l.valueOf()&&g.end_date.valueOf()<=c.valueOf()&&(b="end")),m.innerHTML=e.templates.week_agenda_event_text(g.start_date,g.end_date,g,l,b),m.setAttribute("event_id",g.id),m.setAttribute(e.config.event_attribute,g.id),e._waiAria.weekAgendaEvent(m,g),u.appendChild(m)}l=e.date.add(l,1,"day"),c=e.date.add(c,1,"day")}}()}else e._table_view=e._allow_dnd=!1,void 0!==e._wa._prev_data_border&&(e._els.dhx_cal_data[0].style.borderTopWidth=e._wa._prev_data_border,delete e._wa._prev_data_border),e._els.dhx_cal_data[0].style.overflowY="auto",e._els.dhx_cal_data[0].style.top=parseInt(e._els.dhx_cal_data[0].style.top)+20+"px",e._els.dhx_cal_data[0].style.height=parseInt(e._els.dhx_cal_data[0].style.height)-20+"px",e._els.dhx_cal_header[0].style.display="block"},e.mouse_week_agenda=function(t){for(var a,n=t.ev,i=n.srcElement||n.target;i.parentNode;)i._date&&(a=i._date),i=i.parentNode
if(!a)return t
t.x=0
var r=a.valueOf()-e._min_date.valueOf()
if(t.y=Math.ceil(r/6e4/this.config.time_step),"move"==this._drag_mode&&this._drag_pos&&this._is_pos_changed(this._drag_pos,t)){var o
this._drag_event._dhx_changed=!0,this._select_id=this._drag_id
for(var _=0;_<e._rendered.length;_++)e._drag_id==this._rendered[_].getAttribute(this.config.event_attribute)&&(o=this._rendered[_])
if(!e._wa._dnd){var s=o.cloneNode(!0)
this._wa._dnd=s,s.className=o.className,s.id="dhx_wa_dnd",s.className+=" dhx_wa_dnd",document.body.appendChild(s)}var d=document.getElementById("dhx_wa_dnd")
d.style.top=(n.pageY||n.clientY)+20+"px",d.style.left=(n.pageX||n.clientX)+20+"px"}return t},e.attachEvent("onBeforeEventChanged",(function(t,a,n){if("week_agenda"==this._mode&&"move"==this._drag_mode){var i=document.getElementById("dhx_wa_dnd")
i.parentNode.removeChild(i),e._wa._dnd=!1}return!0})),e.attachEvent("onEventSave",(function(e,t,a){return a&&"week_agenda"==this._mode&&(this._select_id=e),!0})),e._wa._selected_divs=[],e.attachEvent("onClick",(function(t,a){if("week_agenda"==this._mode&&(e.config.week_agenda_select||void 0===e.config.week_agenda_select)){if(e._wa._selected_divs)for(var n=0;n<this._wa._selected_divs.length;n++){var i=this._wa._selected_divs[n]
i.className=i.className.replace(/ dhx_cal_event_selected/,"")}return this.for_rendered(t,(function(t){t.className+=" dhx_cal_event_selected",e._wa._selected_divs.push(t)})),e._select_id=t,!1}return!0}))}))},wp:function(e){e.attachEvent("onLightBox",(function(){if(this._cover)try{this._cover.style.height=this.expanded?"100%":(document.body.parentNode||document.body).scrollHeight+"px"}catch(e){}})),e.form_blocks.select.set_value=function(e,t,a){void 0!==t&&""!==t||(t=(e.firstChild.options[0]||{}).value),e.firstChild.value=t||""}},year_view:function(e){e.config.year_x=4,e.config.year_y=3,e.xy.year_top=0,e.templates.year_date=function(t){return e.date.date_to_str(e.locale.labels.year_tab+" %Y")(t)},e.templates.year_month=e.date.date_to_str("%F"),e.templates.year_scale_date=e.date.date_to_str("%D"),e.templates.year_tooltip=function(e,t,a){return a.text}
var t=function(){return"year"==e._mode}
e.dblclick_dhx_month_head=function(a){if(t()){var n=a.target||a.srcElement,i=e._getClassName(n.parentNode)
if(-1!=i.indexOf("dhx_before")||-1!=i.indexOf("dhx_after"))return!1
for(var r=n;r&&(!r.hasAttribute||!r.hasAttribute("date"));)r=r.parentNode
if(r){var o=this._helpers.parseDate(r.getAttribute("date"))
o.setDate(parseInt(n.innerHTML,10))
var _=this.date.add(o,1,"day")
!this.config.readonly&&this.config.dblclick_create&&this.addEventNow(o.valueOf(),_.valueOf(),a)}}}
var a=e.changeEventId
e.changeEventId=function(){a.apply(this,arguments),t()&&this.year_view(!0)}
var n=e.render_data,i=e.date.date_to_str("%Y/%m/%d"),r=e.date.str_to_date("%Y/%m/%d")
e.render_data=function(e){if(!t())return n.apply(this,arguments)
for(var a=0;a<e.length;a++)this._year_render_event(e[a])}
var o=e.clear_view
e.clear_view=function(){if(!t())return o.apply(this,arguments)
var a=e._year_marked_cells,n=null
for(var i in a)a.hasOwnProperty(i)&&((n=a[i]).className="dhx_month_head",n.removeAttribute("date"))
e._year_marked_cells={}},e._hideToolTip=function(){this._tooltip&&(this._tooltip.style.display="none",this._tooltip.date=new Date(9999,1,1))},e._showToolTip=function(t,a,n,i){if(this._tooltip){if(this._tooltip.date.valueOf()==t.valueOf())return
this._tooltip.innerHTML=""}else{var r=this._tooltip=document.createElement("div")
r.className="dhx_year_tooltip",this.config.rtl&&(r.className+=" dhx_tooltip_rtl"),document.body.appendChild(r),r.onclick=e._click.dhx_cal_data}for(var o=this.getEvents(t,this.date.add(t,1,"day")),_="",s=0;s<o.length;s++){var d=o[s]
if(this.filter_event(d.id,d)){var l=d.color?"background:"+d.color+";":"",c=d.textColor?"color:"+d.textColor+";":""
_+="<div class='dhx_tooltip_line' style='"+l+c+"' event_id='"+o[s].id+"' "+this.config.event_attribute+"='"+o[s].id+"'>",_+="<div class='dhx_tooltip_date' style='"+l+c+"'>"+(o[s]._timed?this.templates.event_date(o[s].start_date):"")+"</div>",_+="<div class='dhx_event_icon icon_details'>&nbsp;</div>",_+=this.templates.year_tooltip(o[s].start_date,o[s].end_date,o[s])+"</div>"}}this._tooltip.style.display="",this._tooltip.style.top="0px",document.body.offsetWidth-a.left-this._tooltip.offsetWidth<0?this._tooltip.style.left=a.left-this._tooltip.offsetWidth+"px":this._tooltip.style.left=a.left+i.offsetWidth+"px",this._tooltip.date=t,this._tooltip.innerHTML=_,document.body.offsetHeight-a.top-this._tooltip.offsetHeight<0?this._tooltip.style.top=a.top-this._tooltip.offsetHeight+i.offsetHeight+"px":this._tooltip.style.top=a.top+"px"},e._year_view_tooltip_handler=function(a){if(t()){var n=a.target||a.srcElement
"a"==n.tagName.toLowerCase()&&(n=n.parentNode),-1!=e._getClassName(n).indexOf("dhx_year_event")?e._showToolTip(r(n.getAttribute("date")),e.$domHelpers.getOffset(n),a,n):e._hideToolTip()}},e._init_year_tooltip=function(){e._detachDomEvent(e._els.dhx_cal_data[0],"mouseover",e._year_view_tooltip_handler),e.event(e._els.dhx_cal_data[0],"mouseover",e._year_view_tooltip_handler)},e._get_year_cell=function(e){var t=e.getMonth()+12*(e.getFullYear()-this._min_date.getFullYear())-this.week_starts._month,a=this._els.dhx_cal_data[0].childNodes[t],n=this.week_starts[t]+e.getDate()-1
return a.querySelectorAll(".dhx_year_body tr")[Math.floor(n/7)].querySelectorAll("td")[n%7].querySelector(".dhx_month_head")},e._year_marked_cells={},e._mark_year_date=function(t,a){var n=i(t),r=this._get_year_cell(t)
if(r){var o=this.templates.event_class(a.start_date,a.end_date,a)
e._year_marked_cells[n]||(r.className="dhx_month_head dhx_year_event",r.setAttribute("date",n),e._year_marked_cells[n]=r),r.className+=o?" "+o:""}},e._unmark_year_date=function(e){var t=this._get_year_cell(e)
t&&(t.className="dhx_month_head")},e._year_render_event=function(e){var t=e.start_date
for(t=t.valueOf()<this._min_date.valueOf()?this._min_date:this.date.date_part(new Date(t));t<e.end_date;)if(this._mark_year_date(t,e),(t=this.date.add(t,1,"day")).valueOf()>=this._max_date.valueOf())return},e.year_view=function(t){var a
if(t&&(a=e.xy.scale_height,e.xy.scale_height=-1),e._els.dhx_cal_header[0].style.display=t?"none":"",e.set_sizes(),t&&(e.xy.scale_height=a),e._table_view=t,!this._load_mode||!this._load())if(t){if(e._init_year_tooltip(),e._reset_year_scale(),e._load_mode&&e._load())return void(e._render_wait=!0)
e.render_view_data()}else e._hideToolTip()},e._reset_year_scale=function(){this._cols=[],this._colsS={}
var t=[],a=this._els.dhx_cal_data[0],n=this.config
a.scrollTop=0,a.innerHTML=""
var i=Math.floor(parseInt(a.style.width)/n.year_x),r=Math.floor((parseInt(a.style.height)-e.xy.year_top)/n.year_y)
r<190&&(r=190,i=Math.floor((parseInt(a.style.width)-e.xy.scroll_width)/n.year_x))
var o=i-11,_=0,s=document.createElement("div"),d=this.date.week_start(e._currentDate())
this._process_ignores(d,7,"day",1)
for(var l=7-(this._ignores_detected||0),c=0,h=0;h<7;h++)this._ignores&&this._ignores[h]||(this._cols[h]=Math.floor(o/(l-c)),this._render_x_header(h,_,d,s),o-=this._cols[h],_+=this._cols[h],c++),d=this.date.add(d,1,"day")
for(s.lastChild.className+=" dhx_scale_bar_last",h=0;h<s.childNodes.length;h++)this._waiAria.yearHeadCell(s.childNodes[h])
var u=this.date[this._mode+"_start"](this.date.copy(this._date)),f=u,p=null
for(h=0;h<n.year_y;h++)for(var v=0;v<n.year_x;v++){(p=document.createElement("div")).className="dhx_year_box",p.style.cssText="position:absolute;",p.setAttribute("date",this._helpers.formatDate(u)),p.innerHTML="<div class='dhx_year_month'></div><div class='dhx_year_grid'><div class='dhx_year_week'>"+s.innerHTML+"</div><div class='dhx_year_body'></div></div>"
var g=p.querySelector(".dhx_year_month"),m=p.querySelector(".dhx_year_grid"),y=p.querySelector(".dhx_year_week"),b=p.querySelector(".dhx_year_body"),x=e.uid()
this._waiAria.yearHeader(g,x),this._waiAria.yearGrid(m,x),g.innerHTML=this.templates.year_month(u)
var w=this.date.week_start(u)
this._reset_month_scale(b,u,w,6)
for(var k=b.querySelectorAll("td"),E=0;E<k.length;E++)this._waiAria.yearDayCell(k[E])
a.appendChild(p),y.style.height=y.childNodes[0].offsetHeight+"px"
var D=Math.round((r-190)/2)
p.style.marginTop=D+"px",this.set_xy(p,i-10,r-D-10,i*v+5,r*h+5+e.xy.year_top),t[h*n.year_x+v]=(u.getDay()-(this.config.start_on_monday?1:0)+7)%7,u=this.date.add(u,1,"month")}var S=this._getNavDateElement()
S&&(S.innerHTML=this.templates[this._mode+"_date"](f,u,this._mode)),this.week_starts=t,t._month=f.getMonth(),this._min_date=f,this._max_date=u}
var _=e.getActionData
e.getActionData=function(a){if(!t())return _.apply(e,arguments)
var n=a.target,i=e._get_year_month_date(n),r=e._get_year_month_cell(n),o=e._get_year_day_indexes(r)
return o&&i?(i=e.date.add(i,o.week,"week"),i=e.date.add(i,o.day,"day")):i=null,{date:i,section:null}},e._get_year_day_indexes=function(t){var a=e._get_year_el_node(t,this._locate_year_month_table)
if(!a)return null
for(var n=0,i=0,r=(n=0,a.rows.length);n<r;n++){for(var o=a.rows[n].getElementsByTagName("td"),_=(i=0,o.length);i<_&&o[i]!=t;i++);if(i<_)break}return n<r?{day:i,week:n}:null},e._get_year_month_date=function(t){if(!(t=e._get_year_el_node(t,e._locate_year_month_root)))return null
var a=t.getAttribute("date")
return a?e.date.week_start(e.date.month_start(r(a))):null},e._locate_year_month_day=function(t){return-1!=e._getClassName(t).indexOf("dhx_year_event")&&t.hasAttribute&&t.hasAttribute("date")}
var s=e._locate_event
e._locate_event=function(t){var a=s.apply(e,arguments)
if(!a){var n=e._get_year_el_node(t,e._locate_year_month_day)
if(!n||!n.hasAttribute("date"))return null
var i=r(n.getAttribute("date")),o=e.getEvents(i,e.date.add(i,1,"day"))
if(!o.length)return null
a=o[0].id}return a},e._locate_year_month_cell=function(e){return"td"==e.nodeName.toLowerCase()},e._locate_year_month_table=function(e){return"table"==e.nodeName.toLowerCase()},e._locate_year_month_root=function(e){return e.hasAttribute&&e.hasAttribute("date")},e._get_year_month_cell=function(e){return this._get_year_el_node(e,this._locate_year_month_cell)},e._get_year_month_table=function(e){return this._get_year_el_node(e,this._locate_year_month_table)},e._get_year_month_root=function(e){return this._get_year_el_node(this._get_year_month_table(e),this._locate_year_month_root)},e._get_year_el_node=function(e,t){for(;e&&!t(e);)e=e.parentNode
return e}}}),Oe=Ae.getSchedulerInstance(),Le=Ae
window.scheduler=Oe,window.Scheduler=Le,t.default=Oe}])},"object"==_typeof2(exports)&&"object"==_typeof2(module)?module.exports=t():(__WEBPACK_AMD_DEFINE_ARRAY__=[],void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=t)?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}).call(this,__webpack_require__(7)(module))},7:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}])
