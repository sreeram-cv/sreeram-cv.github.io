(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[2],{30:function(t,e,i){"use strict"

;/*!
 * GridStack 4.2.6
 * https://gridstackjs.com/
 *
 * Copyright (c) 2021 Alain Dumesny
 * see root license https://github.com/gridstack/gridstack.js/tree/master/LICENSE
 */function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e)
var i=Object.prototype.toString.call(t).slice(8,-1)
return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length)
for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i]
return n}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=this&&this.__createBinding||(Object.create?function(t,e,i,n){void 0===n&&(n=i),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,n){void 0===n&&(n=i),t[n]=e[i]}),l=this&&this.__exportStar||function(t,e){for(var i in t)"default"===i||e.hasOwnProperty(i)||a(e,t,i)}
Object.defineProperty(e,"__esModule",{value:!0}),e.GridStack=void 0
var h=i(70),u=i(44),d=i(63)
l(i(75),e),l(i(44),e),l(i(70),e),l(i(63),e)
var c={column:12,minRow:0,maxRow:0,itemClass:"grid-stack-item",placeholderClass:"grid-stack-placeholder",placeholderText:"",handle:".grid-stack-item-content",handleClass:null,styleInHead:!1,cellHeight:"auto",cellHeightThrottle:100,margin:10,auto:!0,minWidth:768,float:!1,staticGrid:!1,animate:!0,alwaysShowResizeHandle:!1,resizable:{autoHide:!0,handles:"se"},draggable:{handle:".grid-stack-item-content",scroll:!1,appendTo:"body"},disableDrag:!1,disableResize:!1,rtl:"auto",removable:!1,removableOptions:{accept:".grid-stack-item"},marginUnit:"px",cellHeightUnit:"px",disableOneColumnMode:!1,oneColumnModeDomSort:!1},g=function(){function t(e){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
s(this,t),this._gsEventHandler={},this._extraDragRow=0,this.el=e,(n=n||{}).row&&(n.minRow=n.maxRow=n.row,delete n.row)
var o=u.Utils.toNumber(e.getAttribute("gs-row")),r=Object.assign(Object.assign({},u.Utils.cloneDeep(c)),{column:u.Utils.toNumber(e.getAttribute("gs-column"))||12,minRow:o||u.Utils.toNumber(e.getAttribute("gs-min-row"))||0,maxRow:o||u.Utils.toNumber(e.getAttribute("gs-max-row"))||0,staticGrid:u.Utils.toBool(e.getAttribute("gs-static"))||!1,_styleSheetClass:"grid-stack-instance-"+(1e4*Math.random()).toFixed(0),alwaysShowResizeHandle:n.alwaysShowResizeHandle||!1,resizable:{autoHide:!n.alwaysShowResizeHandle,handles:"se"},draggable:{handle:(n.handleClass?"."+n.handleClass:n.handle?n.handle:"")||".grid-stack-item-content",scroll:!1,appendTo:"body"},removableOptions:{accept:"."+(n.itemClass||"grid-stack-item")}})
e.getAttribute("gs-animate")&&(r.animate=u.Utils.toBool(e.getAttribute("gs-animate"))),this.opts=u.Utils.defaults(n,r),n=null,this.initMargin(),1!==this.opts.column&&!this.opts.disableOneColumnMode&&this._widthOrContainer()<=this.opts.minWidth&&(this._prevColumn=this.opts.column,this.opts.column=1),"auto"===this.opts.rtl&&(this.opts.rtl="rtl"===e.style.direction),this.opts.rtl&&this.el.classList.add("grid-stack-rtl")
var a=u.Utils.closestByClass(this.el,c.itemClass)
if(a&&a.gridstackNode&&(this.opts._isNested=a.gridstackNode,this.opts._isNested.subGrid=this,this.el.classList.add("grid-stack-nested")),this._isAutoCellHeight="auto"===this.opts.cellHeight,this._isAutoCellHeight||"initial"===this.opts.cellHeight?this.cellHeight(void 0,!1):this.cellHeight(this.opts.cellHeight,!1),this.el.classList.add(this.opts._styleSheetClass),this._setStaticClass(),this.engine=new h.GridStackEngine({column:this.opts.column,float:this.opts.float,maxRow:this.opts.maxRow,onChange:function(t){var e=0
i.engine.nodes.forEach((function(t){e=Math.max(e,t.y+t.h)})),t.forEach((function(t){var e=t.el
t._removeDOM?(e&&e.remove(),delete t._removeDOM):i._writePosAttr(e,t)})),i._updateStyles(!1,e)}}),this.opts.auto){this.batchUpdate()
var l=[]
this.getGridItems().forEach((function(t){var e=parseInt(t.getAttribute("gs-x")),n=parseInt(t.getAttribute("gs-y"))
l.push({el:t,i:(Number.isNaN(e)?1e3:e)+(Number.isNaN(n)?1e3:n)*i.opts.column})})),l.sort((function(t,e){return t.i-e.i})).forEach((function(t){return i._prepareElement(t.el)})),this.commit()}this.setAnimation(this.opts.animate),this._updateStyles(),12!=this.opts.column&&this.el.classList.add("grid-stack-"+this.opts.column),this.opts.dragIn&&t.setupDragIn(this.opts.dragIn,this.opts.dragInOptions),delete this.opts.dragIn,delete this.opts.dragInOptions,this._setupRemoveDrop(),this._setupAcceptWidget(),this._updateWindowResizeEvent()}var e,i,o
return e=t,o=[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".grid-stack",n=t.getGridElement(i)
return n?(n.gridstack||(n.gridstack=new t(n,u.Utils.cloneDeep(e))),n.gridstack):("string"==typeof i?console.error('GridStack.initAll() no grid was found with selector "'+i+'" - element missing or wrong selector ?\nNote: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.'):console.error("GridStack.init() no grid element was passed."),null)}},{key:"initAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".grid-stack",n=[]
return t.getGridElements(i).forEach((function(i){i.gridstack||(i.gridstack=new t(i,u.Utils.cloneDeep(e)),delete e.dragIn,delete e.dragInOptions),n.push(i.gridstack)})),0===n.length&&console.error('GridStack.initAll() no grid was found with selector "'+i+'" - element missing or wrong selector ?\nNote: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.'),n}},{key:"addGrid",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!e)return null
var n=e
if(!e.classList.contains("grid-stack")){var o=document.implementation.createHTMLDocument()
o.body.innerHTML='<div class="grid-stack '.concat(i.class||"",'"></div>'),n=o.body.children[0],e.appendChild(n)}var s=t.init(i,n)
if(s.opts.children){var r=s.opts.children
delete s.opts.children,s.load(r)}return s}},{key:"getElement",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".grid-stack-item"
return u.Utils.getElement(t)}},{key:"getElements",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".grid-stack-item"
return u.Utils.getElements(t)}},{key:"getGridElement",value:function(e){return t.getElement(e)}},{key:"getGridElements",value:function(t){return u.Utils.getElements(t)}},{key:"setupDragIn",value:function(t,e){}}],(i=[{key:"addWidget",value:function(e,i){if(arguments.length>2){console.warn("gridstack.ts: `addWidget(el, x, y, width...)` is deprecated. Use `addWidget({x, y, w, content, ...})`. It will be removed soon")
var n=arguments,o=1,s={x:n[o++],y:n[o++],w:n[o++],h:n[o++],autoPosition:n[o++],minW:n[o++],maxW:n[o++],minH:n[o++],maxH:n[o++],id:n[o++]}
return this.addWidget(e,s)}function r(t){return void 0!==t.x||void 0!==t.y||void 0!==t.w||void 0!==t.h||void 0!==t.content}var a
if("string"==typeof e){var l=document.implementation.createHTMLDocument()
l.body.innerHTML=e,a=l.body.children[0]}else if(0===arguments.length||1===arguments.length&&r(e)){var h=e&&e.content||""
i=e
var d=document.implementation.createHTMLDocument()
d.body.innerHTML='<div class="grid-stack-item '.concat(this.opts.itemClass||"",'"><div class="grid-stack-item-content">').concat(h,"</div></div>"),a=d.body.children[0]}else a=e
var c=this._readAttr(a)
i=u.Utils.cloneDeep(i)||{},u.Utils.defaults(i,c)
var g=this.engine.prepareNode(i)
if(this._writeAttr(a,i),this._insertNotAppend?this.el.prepend(a):this.el.appendChild(a),this._prepareElement(a,!0,i),this._updateContainerHeight(),g.subGrid&&!g.subGrid.el){var f=g.el.querySelector(".grid-stack-item-content")
g.subGrid=t.addGrid(f,g.subGrid)}return this._triggerAddEvent(),this._triggerChangeEvent(),a}},{key:"save",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.engine.save(t)
if(i.forEach((function(e){if(t&&e.el&&!e.subGrid){var i=e.el.querySelector(".grid-stack-item-content")
e.content=i?i.innerHTML:void 0,e.content||delete e.content}else t||delete e.content,e.subGrid&&(e.subGrid=e.subGrid.save(t,!0))
delete e.el})),e){var n=u.Utils.cloneDeep(this.opts)
return n.marginBottom===n.marginTop&&n.marginRight===n.marginLeft&&n.marginTop===n.marginRight&&(n.margin=n.marginTop,delete n.marginTop,delete n.marginRight,delete n.marginBottom,delete n.marginLeft),n.rtl===("rtl"===this.el.style.direction)&&(n.rtl="auto"),this._isAutoCellHeight&&(n.cellHeight="auto"),u.Utils.removeInternalAndSame(n,c),n.children=i,n}return i}},{key:"load",value:function(e){var i=this,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=t.Utils.sort(n(e),-1,this._prevColumn||this.opts.column)
this._insertNotAppend=!0,this._prevColumn&&this._prevColumn!==this.opts.column&&s.some((function(t){return t.x+t.w>i.opts.column}))&&(this._ignoreLayoutsNodeChange=!0,this.engine.cacheLayout(s,this._prevColumn,!0))
var r=[]
if(this.batchUpdate(),o){var a=n(this.engine.nodes)
a.forEach((function(t){s.find((function(e){return t.id===e.id}))||("function"==typeof o?o(i,t,!1):(r.push(t),i.removeWidget(t.el,!0,!1)))}))}return s.forEach((function(t){var e=t.id||0===t.id?i.engine.nodes.find((function(e){return e.id===t.id})):void 0
if(e){if(i.update(e.el,t),t.subGrid&&t.subGrid.children){var n=e.el.querySelector(".grid-stack")
n&&n.gridstack&&(n.gridstack.load(t.subGrid.children),i._insertNotAppend=!0)}}else o&&(t="function"==typeof o?o(i,t,!0).gridstackNode:i.addWidget(t).gridstackNode)})),this.engine.removedNodes=r,this.commit(),delete this._ignoreLayoutsNodeChange,delete this._insertNotAppend,this}},{key:"batchUpdate",value:function(){return this.engine.batchUpdate(),this}},{key:"getCellHeight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return!this.opts.cellHeight||"auto"===this.opts.cellHeight||t&&this.opts.cellHeightUnit&&"px"!==this.opts.cellHeightUnit?Math.round(this.el.getBoundingClientRect().height)/parseInt(this.el.getAttribute("gs-current-row")):this.opts.cellHeight}},{key:"cellHeight",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(e&&void 0!==t&&this._isAutoCellHeight!==("auto"===t)&&(this._isAutoCellHeight="auto"===t,this._updateWindowResizeEvent()),"initial"!==t&&"auto"!==t||(t=void 0),void 0===t){var i=-this.opts.marginRight-this.opts.marginLeft+this.opts.marginTop+this.opts.marginBottom
t=this.cellWidth()+i}var n=u.Utils.parseHeight(t)
return this.opts.cellHeightUnit===n.unit&&this.opts.cellHeight===n.h||(this.opts.cellHeightUnit=n.unit,this.opts.cellHeight=n.h,e&&this._updateStyles(!0,this.getRow())),this}},{key:"cellWidth",value:function(){return this._widthOrContainer()/this.opts.column}},{key:"_widthOrContainer",value:function(){return this.el.clientWidth||this.el.parentElement.clientWidth||window.innerWidth}},{key:"commit",value:function(){return this.engine.commit(),this._triggerRemoveEvent(),this._triggerAddEvent(),this._triggerChangeEvent(),this}},{key:"compact",value:function(){return this.engine.compact(),this._triggerChangeEvent(),this}},{key:"column",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"moveScale"
if(this.opts.column===t)return this
var i,n=this.opts.column
return 1===t?this._prevColumn=n:delete this._prevColumn,this.el.classList.remove("grid-stack-"+n),this.el.classList.add("grid-stack-"+t),this.opts.column=this.engine.column=t,1===t&&this.opts.oneColumnModeDomSort&&(i=[],this.getGridItems().forEach((function(t){t.gridstackNode&&i.push(t.gridstackNode)})),i.length||(i=void 0)),this.engine.updateNodeWidths(n,t,i,e),this._isAutoCellHeight&&this.cellHeight(),this._ignoreLayoutsNodeChange=!0,this._triggerChangeEvent(),delete this._ignoreLayoutsNodeChange,this}},{key:"getColumn",value:function(){return this.opts.column}},{key:"getGridItems",value:function(){var t=this
return Array.from(this.el.children).filter((function(e){return e.matches("."+t.opts.itemClass)&&!e.matches("."+t.opts.placeholderClass)}))}},{key:"destroy",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
if(this.el)return this._updateWindowResizeEvent(!0),this.setStatic(!0,!1),this.setAnimation(!1),t?this.el.parentNode.removeChild(this.el):(this.removeAll(t),this.el.classList.remove(this.opts._styleSheetClass)),this._removeStylesheet(),this.el.removeAttribute("gs-current-row"),delete this.opts._isNested,delete this.opts,delete this._placeholder,delete this.engine,delete this.el.gridstack,delete this.el,this}},{key:"float",value:function(t){return this.engine.float=t,this._triggerChangeEvent(),this}},{key:"getFloat",value:function(){return this.engine.float}},{key:"getCellFromPixel",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.el.getBoundingClientRect()
e=i?{top:n.top+document.documentElement.scrollTop,left:n.left}:{top:this.el.offsetTop,left:this.el.offsetLeft}
var o=t.left-e.left,s=t.top-e.top,r=n.width/this.opts.column,a=n.height/parseInt(this.el.getAttribute("gs-current-row"))
return{x:Math.floor(o/r),y:Math.floor(s/a)}}},{key:"getRow",value:function(){return Math.max(this.engine.getRow(),this.opts.minRow)}},{key:"isAreaEmpty",value:function(t,e,i,n){return this.engine.isAreaEmpty(t,e,i,n)}},{key:"makeWidget",value:function(e){var i=t.getElement(e)
return this._prepareElement(i,!0),this._updateContainerHeight(),this._triggerAddEvent(),this._triggerChangeEvent(),i}},{key:"on",value:function(t,e){var i=this
if(-1!==t.indexOf(" "))return t.split(" ").forEach((function(t){return i.on(t,e)})),this
if("change"===t||"added"===t||"removed"===t||"enable"===t||"disable"===t){var n="enable"===t||"disable"===t
this._gsEventHandler[t]=n?function(t){return e(t)}:function(t){return e(t,t.detail)},this.el.addEventListener(t,this._gsEventHandler[t])}else"drag"===t||"dragstart"===t||"dragstop"===t||"resizestart"===t||"resize"===t||"resizestop"===t||"dropped"===t?this._gsEventHandler[t]=e:console.log("GridStack.on("+t+') event not supported, but you can still use $(".grid-stack").on(...) while jquery-ui is still used internally.')
return this}},{key:"off",value:function(t){var e=this
return-1!==t.indexOf(" ")?(t.split(" ").forEach((function(t){return e.off(t)})),this):("change"!==t&&"added"!==t&&"removed"!==t&&"enable"!==t&&"disable"!==t||this._gsEventHandler[t]&&this.el.removeEventListener(t,this._gsEventHandler[t]),delete this._gsEventHandler[t],this)}},{key:"removeWidget",value:function(e){var i=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return t.getElements(e).forEach((function(t){if(t.parentElement===i.el){var e=t.gridstackNode
e||(e=i.engine.nodes.find((function(e){return t===e.el}))),e&&(delete t.gridstackNode,d.GridStackDDI.get().remove(t),i.engine.removeNode(e,n,o),n&&t.parentElement&&t.remove())}})),o&&(this._triggerRemoveEvent(),this._triggerChangeEvent()),this}},{key:"removeAll",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
return this.engine.nodes.forEach((function(t){delete t.el.gridstackNode,d.GridStackDDI.get().remove(t.el)})),this.engine.removeAll(t),this._triggerRemoveEvent(),this}},{key:"setAnimation",value:function(t){return t?this.el.classList.add("grid-stack-animate"):this.el.classList.remove("grid-stack-animate"),this}},{key:"setStatic",value:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
return this.opts.staticGrid===t||(this.opts.staticGrid=t,this._setupRemoveDrop(),this._setupAcceptWidget(),this.engine.nodes.forEach((function(t){return e._prepareDragDropByNode(t)})),i&&this._setStaticClass()),this}},{key:"update",value:function(e,i){var n=this
if(arguments.length>2){console.warn("gridstack.ts: `update(el, x, y, w, h)` is deprecated. Use `update({x, w, content, ...})`. It will be removed soon")
var o=arguments,s=1
return i={x:o[s++],y:o[s++],w:o[s++],h:o[s++]},this.update(e,i)}return t.getElements(e).forEach((function(t){if(t&&t.gridstackNode){var e=t.gridstackNode,o=u.Utils.cloneDeep(i)
delete o.autoPosition
var s,r=["x","y","w","h"]
if(r.some((function(t){return void 0!==o[t]&&o[t]!==e[t]}))&&(s={},r.forEach((function(t){s[t]=void 0!==o[t]?o[t]:e[t],delete o[t]}))),!s&&(o.minW||o.minH||o.maxW||o.maxH)&&(s={}),o.content){var a=t.querySelector(".grid-stack-item-content")
a&&a.innerHTML!==o.content&&(a.innerHTML=o.content),delete o.content}var l=!1,h=!1
for(var d in o)"_"!==d[0]&&e[d]!==o[d]&&(e[d]=o[d],l=!0,h=h||!n.opts.staticGrid&&("noResize"===d||"noMove"===d||"locked"===d))
s&&(n.engine.cleanNodes().beginUpdate(e).moveNode(e,s),n._updateContainerHeight(),n._triggerChangeEvent(),n.engine.endUpdate()),l&&n._writeAttr(t,e),h&&n._prepareDragDropByNode(e)}})),this}},{key:"margin",value:function(t){if(!("string"==typeof t&&t.split(" ").length>1)){var e=u.Utils.parseHeight(t)
if(this.opts.marginUnit===e.unit&&this.opts.margin===e.h)return}return this.opts.margin=t,this.opts.marginTop=this.opts.marginBottom=this.opts.marginLeft=this.opts.marginRight=void 0,this.initMargin(),this._updateStyles(!0),this}},{key:"getMargin",value:function(){return this.opts.margin}},{key:"willItFit",value:function(t){if(arguments.length>1){console.warn("gridstack.ts: `willItFit(x,y,w,h,autoPosition)` is deprecated. Use `willItFit({x, y,...})`. It will be removed soon")
var e=arguments,i=0,n={x:e[i++],y:e[i++],w:e[i++],h:e[i++],autoPosition:e[i++]}
return this.willItFit(n)}return this.engine.willItFit(t)}},{key:"_triggerChangeEvent",value:function(){if(this.engine.batchMode)return this
var t=this.engine.getDirtyNodes(!0)
return t&&t.length&&(this._ignoreLayoutsNodeChange||this.engine.layoutsNodesChange(t),this._triggerEvent("change",t)),this.engine.saveInitial(),this}},{key:"_triggerAddEvent",value:function(){return this.engine.batchMode||this.engine.addedNodes&&this.engine.addedNodes.length>0&&(this._ignoreLayoutsNodeChange||this.engine.layoutsNodesChange(this.engine.addedNodes),this.engine.addedNodes.forEach((function(t){delete t._dirty})),this._triggerEvent("added",this.engine.addedNodes),this.engine.addedNodes=[]),this}},{key:"_triggerRemoveEvent",value:function(){return this.engine.batchMode||this.engine.removedNodes&&this.engine.removedNodes.length>0&&(this._triggerEvent("removed",this.engine.removedNodes),this.engine.removedNodes=[]),this}},{key:"_triggerEvent",value:function(t,e){var i=e?new CustomEvent(t,{bubbles:!1,detail:e}):new Event(t)
return this.el.dispatchEvent(i),this}},{key:"_removeStylesheet",value:function(){return this._styles&&(u.Utils.removeStylesheet(this._styles._id),delete this._styles),this}},{key:"_updateStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0
if(t&&this._removeStylesheet(),this._updateContainerHeight(),0===this.opts.cellHeight)return this
var i=this.opts.cellHeight,n=this.opts.cellHeightUnit,o=".".concat(this.opts._styleSheetClass," > .").concat(this.opts.itemClass)
if(!this._styles){var s="gridstack-style-"+(1e5*Math.random()).toFixed(),r=this.opts.styleInHead?void 0:this.el.parentNode
if(this._styles=u.Utils.createStylesheet(s,r),!this._styles)return this
this._styles._id=s,this._styles._max=0,u.Utils.addCSSRule(this._styles,o,"min-height: ".concat(i).concat(n))
var a=this.opts.marginTop+this.opts.marginUnit,l=this.opts.marginBottom+this.opts.marginUnit,h=this.opts.marginRight+this.opts.marginUnit,d=this.opts.marginLeft+this.opts.marginUnit,c="".concat(o," > .grid-stack-item-content"),g=".".concat(this.opts._styleSheetClass," > .grid-stack-placeholder > .placeholder-content")
u.Utils.addCSSRule(this._styles,c,"top: ".concat(a,"; right: ").concat(h,"; bottom: ").concat(l,"; left: ").concat(d,";")),u.Utils.addCSSRule(this._styles,g,"top: ".concat(a,"; right: ").concat(h,"; bottom: ").concat(l,"; left: ").concat(d,";")),u.Utils.addCSSRule(this._styles,"".concat(o," > .ui-resizable-ne"),"right: ".concat(h)),u.Utils.addCSSRule(this._styles,"".concat(o," > .ui-resizable-e"),"right: ".concat(h)),u.Utils.addCSSRule(this._styles,"".concat(o," > .ui-resizable-se"),"right: ".concat(h,"; bottom: ").concat(l)),u.Utils.addCSSRule(this._styles,"".concat(o," > .ui-resizable-nw"),"left: ".concat(d)),u.Utils.addCSSRule(this._styles,"".concat(o," > .ui-resizable-w"),"left: ".concat(d)),u.Utils.addCSSRule(this._styles,"".concat(o," > .ui-resizable-sw"),"left: ".concat(d,"; bottom: ").concat(l))}if((e=e||this._styles._max)>this._styles._max){for(var f=function(t){return i*t+n},m=this._styles._max+1;m<=e;m++){var v=f(m)
u.Utils.addCSSRule(this._styles,"".concat(o,'[gs-y="').concat(m-1,'"]'),"top: ".concat(f(m-1))),u.Utils.addCSSRule(this._styles,"".concat(o,'[gs-h="').concat(m,'"]'),"height: ".concat(v)),u.Utils.addCSSRule(this._styles,"".concat(o,'[gs-min-h="').concat(m,'"]'),"min-height: ".concat(v)),u.Utils.addCSSRule(this._styles,"".concat(o,'[gs-max-h="').concat(m,'"]'),"max-height: ".concat(v))}this._styles._max=e}return this}},{key:"_updateContainerHeight",value:function(){if(!this.engine||this.engine.batchMode)return this
var t=this.getRow()+this._extraDragRow,e=parseInt(getComputedStyle(this.el)["min-height"])
if(e>0){var i=Math.round(e/this.getCellHeight(!0))
t<i&&(t=i)}if(this.el.setAttribute("gs-current-row",String(t)),0===t)return this.el.style.removeProperty("height"),this
var n=this.opts.cellHeight,o=this.opts.cellHeightUnit
return n?(this.el.style.height=t*n+o,this):this}},{key:"_prepareElement",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2?arguments[2]:void 0
i||(t.classList.add(this.opts.itemClass),i=this._readAttr(t)),t.gridstackNode=i,i.el=t,i.grid=this
var n=Object.assign({},i)
return i=this.engine.addNode(i,e),u.Utils.same(i,n)||this._writeAttr(t,i),this._prepareDragDropByNode(i),this}},{key:"_writePosAttr",value:function(t,e){return void 0!==e.x&&null!==e.x&&t.setAttribute("gs-x",String(e.x)),void 0!==e.y&&null!==e.y&&t.setAttribute("gs-y",String(e.y)),e.w&&t.setAttribute("gs-w",String(e.w)),e.h&&t.setAttribute("gs-h",String(e.h)),this}},{key:"_writeAttr",value:function(t,e){if(!e)return this
this._writePosAttr(t,e)
var i={autoPosition:"gs-auto-position",minW:"gs-min-w",minH:"gs-min-h",maxW:"gs-max-w",maxH:"gs-max-h",noResize:"gs-no-resize",noMove:"gs-no-move",locked:"gs-locked",id:"gs-id",resizeHandles:"gs-resize-handles"}
for(var n in i)e[n]?t.setAttribute(i[n],String(e[n])):t.removeAttribute(i[n])
return this}},{key:"_readAttr",value:function(t){var e={}
for(var i in e.x=u.Utils.toNumber(t.getAttribute("gs-x")),e.y=u.Utils.toNumber(t.getAttribute("gs-y")),e.w=u.Utils.toNumber(t.getAttribute("gs-w")),e.h=u.Utils.toNumber(t.getAttribute("gs-h")),e.maxW=u.Utils.toNumber(t.getAttribute("gs-max-w")),e.minW=u.Utils.toNumber(t.getAttribute("gs-min-w")),e.maxH=u.Utils.toNumber(t.getAttribute("gs-max-h")),e.minH=u.Utils.toNumber(t.getAttribute("gs-min-h")),e.autoPosition=u.Utils.toBool(t.getAttribute("gs-auto-position")),e.noResize=u.Utils.toBool(t.getAttribute("gs-no-resize")),e.noMove=u.Utils.toBool(t.getAttribute("gs-no-move")),e.locked=u.Utils.toBool(t.getAttribute("gs-locked")),e.resizeHandles=t.getAttribute("gs-resize-handles"),e.id=t.getAttribute("gs-id"),e){if(!e.hasOwnProperty(i))return
e[i]||0===e[i]||delete e[i]}return e}},{key:"_setStaticClass",value:function(){var t,e,i=["grid-stack-static"]
return this.opts.staticGrid?((t=this.el.classList).add.apply(t,i),this.el.setAttribute("gs-static","true")):((e=this.el.classList).remove.apply(e,i),this.el.removeAttribute("gs-static")),this}},{key:"onParentResize",value:function(){var t=this
if(this.el&&this.el.clientWidth){var e=!this.opts.disableOneColumnMode&&this.el.clientWidth<=this.opts.minWidth,i=!1
return 1===this.opts.column!==e&&(i=!0,this.opts.animate&&this.setAnimation(!1),this.column(e?1:this._prevColumn),this.opts.animate&&this.setAnimation(!0)),this._isAutoCellHeight&&(!i&&this.opts.cellHeightThrottle?(this._cellHeightThrottle||(this._cellHeightThrottle=u.Utils.throttle((function(){return t.cellHeight()}),this.opts.cellHeightThrottle)),this._cellHeightThrottle()):this.cellHeight()),this.engine.nodes.forEach((function(t){t.subGrid&&t.subGrid.onParentResize()})),this}}},{key:"_updateWindowResizeEvent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(this._isAutoCellHeight||!this.opts.disableOneColumnMode)&&!this.opts._isNested
return t||!e||this._windowResizeBind?!t&&e||!this._windowResizeBind||(window.removeEventListener("resize",this._windowResizeBind),delete this._windowResizeBind):(this._windowResizeBind=this.onParentResize.bind(this),window.addEventListener("resize",this._windowResizeBind)),this}},{key:"initMargin",value:function(){var t,e=0,i=[]
return"string"==typeof this.opts.margin&&(i=this.opts.margin.split(" ")),2===i.length?(this.opts.marginTop=this.opts.marginBottom=i[0],this.opts.marginLeft=this.opts.marginRight=i[1]):4===i.length?(this.opts.marginTop=i[0],this.opts.marginRight=i[1],this.opts.marginBottom=i[2],this.opts.marginLeft=i[3]):(t=u.Utils.parseHeight(this.opts.margin),this.opts.marginUnit=t.unit,e=this.opts.margin=t.h),void 0===this.opts.marginTop?this.opts.marginTop=e:(t=u.Utils.parseHeight(this.opts.marginTop),this.opts.marginTop=t.h,delete this.opts.margin),void 0===this.opts.marginBottom?this.opts.marginBottom=e:(t=u.Utils.parseHeight(this.opts.marginBottom),this.opts.marginBottom=t.h,delete this.opts.margin),void 0===this.opts.marginRight?this.opts.marginRight=e:(t=u.Utils.parseHeight(this.opts.marginRight),this.opts.marginRight=t.h,delete this.opts.margin),void 0===this.opts.marginLeft?this.opts.marginLeft=e:(t=u.Utils.parseHeight(this.opts.marginLeft),this.opts.marginLeft=t.h,delete this.opts.margin),this.opts.marginUnit=t.unit,this.opts.marginTop===this.opts.marginBottom&&this.opts.marginLeft===this.opts.marginRight&&this.opts.marginTop===this.opts.marginRight&&(this.opts.margin=this.opts.marginTop),this}},{key:"movable",value:function(t,e){return this}},{key:"resizable",value:function(t,e){return this}},{key:"disable",value:function(){return this}},{key:"enable",value:function(){return this}},{key:"enableMove",value:function(t){return this}},{key:"enableResize",value:function(t){return this}},{key:"_setupAcceptWidget",value:function(){return this}},{key:"_setupRemoveDrop",value:function(){return this}},{key:"_prepareDragDropByNode",value:function(t){return this}},{key:"_onStartMoving",value:function(t,e,i,n,o,s){}},{key:"_dragOrResize",value:function(t,e,i,n,o,s){}},{key:"_leave",value:function(t,e){}},{key:"placeholder",get:function(){if(!this._placeholder){var t=document.createElement("div")
t.className="placeholder-content",this.opts.placeholderText&&(t.innerHTML=this.opts.placeholderText),this._placeholder=document.createElement("div"),this._placeholder.classList.add(this.opts.placeholderClass,c.itemClass,this.opts.itemClass),this.placeholder.appendChild(t)}return this._placeholder}}])&&r(e.prototype,i),o&&r(e,o),t}()
e.GridStack=g,g.Utils=u.Utils,g.Engine=h.GridStackEngine},44:function(t,e,i){"use strict"
function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e)
var i=Object.prototype.toString.call(t).slice(8,-1)
return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length)
for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i]
return n}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.Utils=e.obsoleteAttr=e.obsoleteOptsDel=e.obsoleteOpts=e.obsolete=void 0,e.obsolete=function(t,e,i,n,o){var s=function(){console.warn("gridstack.js: Function `"+i+"` is deprecated in "+o+" and has been replaced with `"+n+"`. It will be **completely** removed in v1.0")
for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a]
return e.apply(t,r)}
return s.prototype=e.prototype,s},e.obsoleteOpts=function(t,e,i,n){void 0!==t[e]&&(t[i]=t[e],console.warn("gridstack.js: Option `"+e+"` is deprecated in "+n+" and has been replaced with `"+i+"`. It will be **completely** removed in v1.0"))},e.obsoleteOptsDel=function(t,e,i,n){void 0!==t[e]&&console.warn("gridstack.js: Option `"+e+"` is deprecated in "+i+n)},e.obsoleteAttr=function(t,e,i,n){var o=t.getAttribute(e)
null!==o&&(t.setAttribute(i,o),console.warn("gridstack.js: attribute `"+e+"`="+o+" is deprecated on this object in "+n+" and has been replaced with `"+i+"`. It will be **completely** removed in v1.0"))}
var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i
return e=t,i=[{key:"getElements",value:function(t){if("string"==typeof t){var e=document.querySelectorAll(t)
return e.length||"."===t[0]||"#"===t[0]||(e=document.querySelectorAll("."+t)).length||(e=document.querySelectorAll("#"+t)),Array.from(e)}return[t]}},{key:"getElement",value:function(t){if("string"==typeof t){if(!t.length)return null
if("#"===t[0])return document.getElementById(t.substring(1))
if("."===t[0]||"["===t[0])return document.querySelector(t)
if(!isNaN(+t[0]))return document.getElementById(t)
var e=document.querySelector(t)
return e||(e=document.getElementById(t)),e||(e=document.querySelector("."+t)),e}return t}},{key:"isIntercepted",value:function(t,e){return!(t.y>=e.y+e.h||t.y+t.h<=e.y||t.x+t.w<=e.x||t.x>=e.x+e.w)}},{key:"isTouching",value:function(e,i){return t.isIntercepted(e,{x:i.x-.5,y:i.y-.5,w:i.w+1,h:i.h+1})}},{key:"sort",value:function(t,e,i){return i=i||t.reduce((function(t,e){return Math.max(e.x+e.w,t)}),0)||12,-1===e?t.sort((function(t,e){return e.x+e.y*i-(t.x+t.y*i)})):t.sort((function(t,e){return t.x+t.y*i-(e.x+e.y*i)}))}},{key:"createStylesheet",value:function(t,e){var i=document.createElement("style")
return i.setAttribute("type","text/css"),i.setAttribute("gs-style-id",t),i.styleSheet?i.styleSheet.cssText="":i.appendChild(document.createTextNode("")),e?e.insertBefore(i,e.firstChild):(e=document.getElementsByTagName("head")[0]).appendChild(i),i.sheet}},{key:"removeStylesheet",value:function(t){var e=document.querySelector("STYLE[gs-style-id="+t+"]")
e&&e.parentNode&&e.remove()}},{key:"addCSSRule",value:function(t,e,i){"function"==typeof t.addRule?t.addRule(e,i):"function"==typeof t.insertRule&&t.insertRule("".concat(e,"{").concat(i,"}"))}},{key:"toBool",value:function(t){return"boolean"==typeof t?t:"string"==typeof t?!(""===(t=t.toLowerCase())||"no"===t||"false"===t||"0"===t):Boolean(t)}},{key:"toNumber",value:function(t){return null===t||0===t.length?void 0:Number(t)}},{key:"parseHeight",value:function(t){var e,i="px"
if("string"==typeof t){var n=t.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%)?$/)
if(!n)throw new Error("Invalid height")
i=n[2]||"px",e=parseFloat(n[1])}else e=t
return{h:e,unit:i}}},{key:"defaults",value:function(t){for(var e=this,i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o]
return n.forEach((function(i){for(var n in i){if(!i.hasOwnProperty(n))return
null===t[n]||void 0===t[n]?t[n]=i[n]:"object"===s(i[n])&&"object"===s(t[n])&&e.defaults(t[n],i[n])}})),t}},{key:"same",value:function(t,e){if("object"!==s(t))return t==e
if(s(t)!==s(e))return!1
if(Object.keys(t).length!==Object.keys(e).length)return!1
for(var i in t)if(t[i]!==e[i])return!1
return!0}},{key:"copyPos",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
return t.x=e.x,t.y=e.y,t.w=e.w,t.h=e.h,i?(e.minW&&(t.minW=e.minW),e.minH&&(t.minH=e.minH),e.maxW&&(t.maxW=e.maxW),e.maxH&&(t.maxH=e.maxH),t):t}},{key:"samePos",value:function(t,e){return t&&e&&t.x===e.x&&t.y===e.y&&t.w===e.w&&t.h===e.h}},{key:"removeInternalAndSame",value:function(t,e){if("object"===s(t)&&"object"===s(e))for(var i in t){var n=t[i]
if("_"===i[0]||n===e[i])delete t[i]
else if(n&&"object"===s(n)&&void 0!==e[i]){for(var o in n)n[o]!==e[i][o]&&"_"!==o[0]||delete n[o]
Object.keys(n).length||delete t[i]}}}},{key:"closestByClass",value:function(t,e){for(;t=t.parentElement;)if(t.classList.contains(e))return t
return null}},{key:"throttle",value:function(t,e){var i=!1
return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s]
i||(i=!0,setTimeout((function(){t.apply(void 0,o),i=!1}),e))}}},{key:"removePositioningStyles",value:function(t){var e=t.style
e.position&&e.removeProperty("position"),e.left&&e.removeProperty("left"),e.top&&e.removeProperty("top"),e.width&&e.removeProperty("width"),e.height&&e.removeProperty("height")}},{key:"getScrollElement",value:function(t){if(!t)return document.scrollingElement
var e=getComputedStyle(t)
return/(auto|scroll)/.test(e.overflow+e.overflowY)?t:this.getScrollElement(t.parentElement)}},{key:"updateScrollPosition",value:function(t,e,i){var n=t.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight
if(n.top<0||n.bottom>o){var s=n.bottom-o,r=n.top,a=this.getScrollElement(t)
if(null!==a){var l=a.scrollTop
n.top<0&&i<0?t.offsetHeight>o?a.scrollTop+=i:a.scrollTop+=Math.abs(r)>Math.abs(i)?i:r:i>0&&(t.offsetHeight>o?a.scrollTop+=i:a.scrollTop+=s>i?i:s),e.top+=a.scrollTop-l}}}},{key:"updateScrollResize",value:function(t,e,i){var n=this.getScrollElement(e),o=n.clientHeight,s=n===this.getScrollElement()?0:n.getBoundingClientRect().top,r=t.clientY-s,a=r>o-i
r<i?n.scrollBy({behavior:"smooth",top:r-i}):a&&n.scrollBy({behavior:"smooth",top:i-(o-r)})}},{key:"clone",value:function(t){return null==t||"object"!==s(t)?t:t instanceof Array?n(t):Object.assign({},t)}},{key:"cloneDeep",value:function(e){var i=t.clone(e)
for(var n in i)i.hasOwnProperty(n)&&"object"===s(i[n])&&"__"!==n.substring(0,2)&&(i[n]=t.cloneDeep(e[n]))
return i}}],null&&r(e.prototype,null),i&&r(e,i),t}()
e.Utils=a},63:function(t,e,i){"use strict"
function n(t,e){for(var i=0;i<e.length;i++){var n=e[i]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.GridStackDDI=void 0
var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i,o
return e=t,o=[{key:"registerPlugin",value:function(e){return t.ddi=new e,t.ddi}},{key:"get",value:function(){return t.ddi||t.registerPlugin(t)}}],(i=[{key:"remove",value:function(t){return this}}])&&n(e.prototype,i),o&&n(e,o),t}()
e.GridStackDDI=o},70:function(t,e,i){"use strict"
function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.GridStackEngine=void 0
var s=i(44),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
n(this,t),this.addedNodes=[],this.removedNodes=[],this.column=e.column||12,this.onChange=e.onChange,this._float=e.float,this.maxRow=e.maxRow,this.nodes=e.nodes||[]}var e,i
return e=t,(i=[{key:"batchUpdate",value:function(){return this.batchMode||(this.batchMode=!0,this._prevFloat=this._float,this._float=!0,this.saveInitial()),this}},{key:"commit",value:function(){return this.batchMode?(this.batchMode=!1,this._float=this._prevFloat,delete this._prevFloat,this._packNodes()._notify()):this}},{key:"_useEntireRowArea",value:function(t,e){return!this.float&&!this._hasLocked&&(!t._moving||t._skipDown||e.y<=t.y)}},{key:"_fixCollisions",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
if(this._sortNodes(-1),!(i=i||this.collide(t,e)))return!1
if(t._moving&&!n.nested&&!this.float&&this.swap(t,i))return!0
var o=e
this._useEntireRowArea(t,e)&&(o={x:0,w:this.column,y:e.y,h:e.h},i=this.collide(t,o,n.skip))
for(var r=!1,a={nested:!0,pack:!1};i=i||this.collide(t,o,n.skip);){var l=void 0
if(i.locked||t._moving&&!t._skipDown&&e.y>t.y&&!this.float&&(!this.collide(i,Object.assign(Object.assign({},i),{y:t.y}),t)||!this.collide(i,Object.assign(Object.assign({},i),{y:e.y-i.h}),t))?(t._skipDown=t._skipDown||e.y>t.y,l=this.moveNode(t,Object.assign(Object.assign(Object.assign({},e),{y:i.y+i.h}),a)),i.locked&&l?s.Utils.copyPos(e,t):!i.locked&&l&&n.pack&&(this._packNodes(),e.y=i.y+i.h,s.Utils.copyPos(t,e)),r=r||l):l=this.moveNode(i,Object.assign(Object.assign(Object.assign({},i),{y:e.y+e.h,skip:t}),a)),!l)return r
i=void 0}return r}},{key:"collide",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=arguments.length>2?arguments[2]:void 0
return this.nodes.find((function(n){return n!==t&&n!==i&&s.Utils.isIntercepted(n,e)}))}},{key:"collideAll",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=arguments.length>2?arguments[2]:void 0
return this.nodes.filter((function(n){return n!==t&&n!==i&&s.Utils.isIntercepted(n,e)}))}},{key:"collideCoverage",value:function(t,e,i){if(e.rect&&t._rect){var n,o=t._rect,s=Object.assign({},e.rect)
return s.y>o.y?(s.h+=s.y-o.y,s.y=o.y):s.h+=o.y-s.y,s.x>o.x?(s.w+=s.x-o.x,s.x=o.x):s.w+=o.x-s.x,i.forEach((function(t){if(!t.locked&&t._rect){var e=t._rect,i=Number.MAX_VALUE,r=Number.MAX_VALUE,a=.5
o.y<e.y?i=(s.y+s.h-e.y)/e.h:o.y+o.h>e.y+e.h&&(i=(e.y+e.h-s.y)/e.h),o.x<e.x?r=(s.x+s.w-e.x)/e.w:o.x+o.w>e.x+e.w&&(r=(e.x+e.w-s.x)/e.w)
var l=Math.min(r,i)
l>a&&(a=l,n=t)}})),n}}},{key:"cacheRects",value:function(t,e,i,n,o,s){return this.nodes.forEach((function(r){return r._rect={y:r.y*e+i,x:r.x*t+s,w:r.w*t-s-n,h:r.h*e-i-o}})),this}},{key:"swap",value:function(t,e){if(!e||e.locked||!t||t.locked)return!1
function i(){var i=e.x,n=e.y
return e.x=t.x,e.y=t.y,t.h!=e.h?(t.x=i,t.y=e.y+e.h):(t.x=i,t.y=n),t._dirty=e._dirty=!0,!0}var n
if(t.w===e.w&&t.h===e.h&&(t.x===e.x||t.y===e.y)&&(n=s.Utils.isTouching(t,e)))return i()
if(!1!==n){if(t.w===e.w&&t.x===e.x&&(n||s.Utils.isTouching(t,e))){if(e.y<t.y){var o=t
t=e,e=o}return i()}return!1}}},{key:"isAreaEmpty",value:function(t,e,i,n){var o={x:t||0,y:e||0,w:i||1,h:n||1}
return!this.collide(o)}},{key:"compact",value:function(){var t=this
if(0===this.nodes.length)return this
this.batchUpdate()._sortNodes()
var e=this.nodes
return this.nodes=[],e.forEach((function(e){e.locked||(e.autoPosition=!0),t.addNode(e,!1),e._dirty=!0})),this.commit()}},{key:"_sortNodes",value:function(t){return this.nodes=s.Utils.sort(this.nodes,t,this.column),this}},{key:"_packNodes",value:function(){var t=this
return this._sortNodes(),this.float?this.nodes.forEach((function(e){if(!e._updating&&void 0!==e._orig&&e.y!==e._orig.y)for(var i=e.y;i>e._orig.y;)--i,t.collide(e,{x:e.x,y:i,w:e.w,h:e.h})||(e._dirty=!0,e.y=i)})):this.nodes.forEach((function(e,i){if(!e.locked)for(;e.y>0;){var n=0===i?0:e.y-1
if(0!==i&&t.collide(e,{x:e.x,y:n,w:e.w,h:e.h}))break
e._dirty=e.y!==n,e.y=n}})),this}},{key:"prepareNode",value:function(e,i){(e=e||{})._id=e._id||t._idSeq++,void 0!==e.x&&void 0!==e.y&&null!==e.x&&null!==e.y||(e.autoPosition=!0)
var n={x:0,y:0,w:1,h:1}
return s.Utils.defaults(e,n),e.autoPosition||delete e.autoPosition,e.noResize||delete e.noResize,e.noMove||delete e.noMove,"string"==typeof e.x&&(e.x=Number(e.x)),"string"==typeof e.y&&(e.y=Number(e.y)),"string"==typeof e.w&&(e.w=Number(e.w)),"string"==typeof e.h&&(e.h=Number(e.h)),isNaN(e.x)&&(e.x=n.x,e.autoPosition=!0),isNaN(e.y)&&(e.y=n.y,e.autoPosition=!0),isNaN(e.w)&&(e.w=n.w),isNaN(e.h)&&(e.h=n.h),this.nodeBoundFix(e,i)}},{key:"nodeBoundFix",value:function(t,e){return t.maxW&&(t.w=Math.min(t.w,t.maxW)),t.maxH&&(t.h=Math.min(t.h,t.maxH)),t.minW&&(t.w=Math.max(t.w,t.minW)),t.minH&&(t.h=Math.max(t.h,t.minH)),t.w>this.column?(this.column<12&&(t.w=Math.min(12,t.w),this.cacheOneLayout(t,12)),t.w=this.column):t.w<1&&(t.w=1),this.maxRow&&t.h>this.maxRow?t.h=this.maxRow:t.h<1&&(t.h=1),t.x<0&&(t.x=0),t.y<0&&(t.y=0),t.x+t.w>this.column&&(e?t.w=this.column-t.x:t.x=this.column-t.w),this.maxRow&&t.y+t.h>this.maxRow&&(e?t.h=this.maxRow-t.y:t.y=this.maxRow-t.h),t}},{key:"getDirtyNodes",value:function(t){return t?this.nodes.filter((function(t){return t._dirty&&!s.Utils.samePos(t,t._orig)})):this.nodes.filter((function(t){return t._dirty}))}},{key:"_notify",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(this.batchMode)return this
var i=(t=void 0===t?[]:Array.isArray(t)?t:[t]).concat(this.getDirtyNodes())
return this.onChange&&this.onChange(i,e),this}},{key:"cleanNodes",value:function(){return this.batchMode||this.nodes.forEach((function(t){delete t._dirty,delete t._lastTried})),this}},{key:"saveInitial",value:function(){return this.nodes.forEach((function(t){t._orig=s.Utils.copyPos({},t),delete t._dirty})),this._hasLocked=this.nodes.some((function(t){return t.locked})),this}},{key:"restoreInitial",value:function(){return this.nodes.forEach((function(t){s.Utils.samePos(t,t._orig)||(s.Utils.copyPos(t,t._orig),t._dirty=!0)})),this._notify(),this}},{key:"addNode",value:function(t){var e,i=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(e=this.nodes.find((function(e){return e._id===t._id})))return e
if(delete(t=this.prepareNode(t))._temporaryRemoved,delete t._removeDOM,t.autoPosition){this._sortNodes()
for(var o=function(e){var n=e%i.column,o=Math.floor(e/i.column)
if(n+t.w>i.column)return"continue"
var r={x:n,y:o,w:t.w,h:t.h}
return i.nodes.find((function(t){return s.Utils.isIntercepted(r,t)}))?void 0:(t.x=n,t.y=o,delete t.autoPosition,"break")},r=0;;++r){var a=o(r)
if("continue"!==a&&"break"===a)break}}return this.nodes.push(t),n&&this.addedNodes.push(t),this._fixCollisions(t),this._packNodes()._notify(),t}},{key:"removeNode",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
return this.nodes.find((function(e){return e===t}))?(i&&this.removedNodes.push(t),e&&(t._removeDOM=!0),this.nodes=this.nodes.filter((function(e){return e!==t})),this._packNodes()._notify(t)):this}},{key:"removeAll",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
return delete this._layouts,0===this.nodes.length?this:(t&&this.nodes.forEach((function(t){return t._removeDOM=!0})),this.removedNodes=this.nodes,this.nodes=[],this._notify(this.removedNodes))}},{key:"moveNodeCheck",value:function(e,i){var n,o=this
if(!this.changedPosConstrain(e,i))return!1
if(i.pack=!0,!this.maxRow)return this.moveNode(e,i)
var r=new t({column:this.column,float:this.float,nodes:this.nodes.map((function(t){return t===e?n=Object.assign({},t):Object.assign({},t)}))})
if(!n)return!1
var a=r.moveNode(n,i)
if(this.maxRow&&a&&!(a=r.getRow()<=this.maxRow)){var l=this.collide(e,i)
if(l&&this.swap(e,l))return this._notify(),!0}return!!a&&(r.nodes.filter((function(t){return t._dirty})).forEach((function(t){var e=o.nodes.find((function(e){return e._id===t._id}))
e&&(s.Utils.copyPos(e,t),e._dirty=!0)})),this._notify(),!0)}},{key:"willItFit",value:function(e){if(delete e._willFitPos,!this.maxRow)return!0
var i=new t({column:this.column,float:this.float,nodes:this.nodes.map((function(t){return Object.assign({},t)}))}),n=Object.assign({},e)
return this.cleanupNode(n),delete n.el,delete n._id,delete n.content,delete n.grid,i.addNode(n),i.getRow()<=this.maxRow&&(e._willFitPos=s.Utils.copyPos({},n),!0)}},{key:"changedPosConstrain",value:function(t,e){return e.w=e.w||t.w,e.h=e.h||t.h,t.x!==e.x||t.y!==e.y||(t.maxW&&(e.w=Math.min(e.w,t.maxW)),t.maxH&&(e.h=Math.min(e.h,t.maxH)),t.minW&&(e.w=Math.max(e.w,t.minW)),t.minH&&(e.h=Math.max(e.h,t.minH)),t.w!==e.w||t.h!==e.h)}},{key:"moveNode",value:function(t,e){if(!t||!e)return!1
void 0===e.pack&&(e.pack=!0),"number"!=typeof e.x&&(e.x=t.x),"number"!=typeof e.y&&(e.y=t.y),"number"!=typeof e.w&&(e.w=t.w),"number"!=typeof e.h&&(e.h=t.h)
var i=t.w!==e.w||t.h!==e.h,n=s.Utils.copyPos({},t,!0)
if(s.Utils.copyPos(n,e),n=this.nodeBoundFix(n,i),s.Utils.copyPos(e,n),s.Utils.samePos(t,e))return!1
var o=s.Utils.copyPos({},t),r=n,a=this.collideAll(t,r,e.skip),l=!0
if(a.length){var h=t._moving&&!e.nested?this.collideCoverage(t,e,a):a[0]
l=!!h&&!this._fixCollisions(t,n,h,e)}return l&&(t._dirty=!0,s.Utils.copyPos(t,n)),e.pack&&this._packNodes()._notify(),!s.Utils.samePos(t,o)}},{key:"getRow",value:function(){return this.nodes.reduce((function(t,e){return Math.max(t,e.y+e.h)}),0)}},{key:"beginUpdate",value:function(t){return t._updating||(t._updating=!0,delete t._skipDown,this.batchMode||this.saveInitial()),this}},{key:"endUpdate",value:function(){var t=this.nodes.find((function(t){return t._updating}))
return t&&(delete t._updating,delete t._skipDown),this}},{key:"save",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=[]
return this._sortNodes(),this.nodes.forEach((function(i){var n={}
for(var o in i)"_"!==o[0]&&null!==i[o]&&void 0!==i[o]&&(n[o]=i[o])
delete n.grid,t||delete n.el,n.autoPosition||delete n.autoPosition,n.noResize||delete n.noResize,n.noMove||delete n.noMove,n.locked||delete n.locked,e.push(n)})),e}},{key:"layoutsNodesChange",value:function(t){var e=this
return!this._layouts||this._ignoreLayoutsNodeChange||this._layouts.forEach((function(i,n){if(!i||n===e.column)return e
n<e.column?e._layouts[n]=void 0:t.forEach((function(t){if(t._orig){var o=i.find((function(e){return e._id===t._id}))
if(o){var s=n/e.column
t.y!==t._orig.y&&(o.y+=t.y-t._orig.y),t.x!==t._orig.x&&(o.x=Math.round(t.x*s)),t.w!==t._orig.w&&(o.w=Math.round(t.w*s))}}}))})),this}},{key:"updateNodeWidths",value:function(t,e,i){var n=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"moveScale"
if(!this.nodes.length||t===e)return this
if(this.cacheLayout(this.nodes,t),1===e&&i&&i.length){var r=0
i.forEach((function(t){t.x=0,t.w=1,t.y=Math.max(t.y,r),r=t.y+t.h}))}else i=s.Utils.sort(this.nodes,-1,t)
var a=this._layouts[e]||[],l=this._layouts.length-1
0===a.length&&e>t&&e<l&&(a=this._layouts[l]||[]).length&&(t=l,a.forEach((function(t){var e=i.findIndex((function(e){return e._id===t._id}));-1!==e&&(i[e].x=t.x,i[e].y=t.y,i[e].w=t.w)})),a=[])
var h=[]
if(a.forEach((function(t){var e=i.findIndex((function(e){return e._id===t._id}));-1!==e&&(i[e].x=t.x,i[e].y=t.y,i[e].w=t.w,h.push(i[e]),i.splice(e,1))})),i.length)if("function"==typeof o)o(e,t,h,i)
else{var u=e/t,d="move"===o||"moveScale"===o,c="scale"===o||"moveScale"===o
i.forEach((function(i){i.x=1===e?0:d?Math.round(i.x*u):Math.min(i.x,e-1),i.w=1===e||1===t?1:c?Math.round(i.w*u)||1:Math.min(i.w,e),h.push(i)})),i=[]}return h=s.Utils.sort(h,-1,e),this._ignoreLayoutsNodeChange=!0,this.batchUpdate(),this.nodes=[],h.forEach((function(t){n.addNode(t,!1),t._dirty=!0}),this),this.commit(),delete this._ignoreLayoutsNodeChange,this}},{key:"cacheLayout",value:function(e,i){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=[]
return e.forEach((function(e,i){e._id=e._id||t._idSeq++,o[i]={x:e.x,y:e.y,w:e.w,_id:e._id}})),this._layouts=n?[]:this._layouts||[],this._layouts[i]=o,this}},{key:"cacheOneLayout",value:function(e,i){e._id=e._id||t._idSeq++
var n={x:e.x,y:e.y,w:e.w,_id:e._id}
this._layouts=this._layouts||[],this._layouts[i]=this._layouts[i]||[]
var o=this._layouts[i].findIndex((function(t){return t._id===e._id}))
return-1===o?this._layouts[i].push(n):this._layouts[i][o]=n,this}},{key:"cleanupNode",value:function(t){for(var e in t)"_"===e[0]&&"_id"!==e&&delete t[e]
return this}},{key:"float",set:function(t){this._float!==t&&(this._float=t||!1,t||this._packNodes()._notify())},get:function(){return this._float||!1}}])&&o(e.prototype,i),t}()
e.GridStackEngine=r,r._idSeq=1},75:function(t,e,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})}}])
