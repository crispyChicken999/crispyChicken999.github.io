import{E as Kt,V as I,M as N,T as R,Q as _t,S as xt,y as S,a as Xt,e as Ut,r as G,z as Gt,A as Zt,f as j,o as Wt,h as Jt,i as F,w as B,j as tt,k as L,t as et,F as Qt,B as it,s as qt,x as te}from"./entry.a457a0dd.js";const Ct={type:"change"},nt={type:"start"},$t={type:"end"};class kt extends Kt{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:N.ROTATE,MIDDLE:N.DOLLY,RIGHT:N.PAN},this.touches={ONE:R.ROTATE,TWO:R.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(i){i.addEventListener("keydown",Q),this._domElementKeyEvents=i},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Q),this._domElementKeyEvents=null},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(Ct),t.update(),a=o.NONE},this.update=function(){const i=new I,l=new _t().setFromUnitVectors(e.up,new I(0,1,0)),x=l.clone().invert(),C=new I,M=new _t,H=2*Math.PI;return function(){const Et=t.object.position;i.copy(Et).sub(t.target),i.applyQuaternion(l),u.setFromVector3(i),t.autoRotate&&a===o.NONE&&V(k()),t.enableDamping?(u.theta+=E.theta*t.dampingFactor,u.phi+=E.phi*t.dampingFactor):(u.theta+=E.theta,u.phi+=E.phi);let T=t.minAzimuthAngle,P=t.maxAzimuthAngle;return isFinite(T)&&isFinite(P)&&(T<-Math.PI?T+=H:T>Math.PI&&(T-=H),P<-Math.PI?P+=H:P>Math.PI&&(P-=H),T<=P?u.theta=Math.max(T,Math.min(P,u.theta)):u.theta=u.theta>(T+P)/2?Math.max(T,u.theta):Math.min(P,u.theta)),u.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=v,u.radius=Math.max(t.minDistance,Math.min(t.maxDistance,u.radius)),t.enableDamping===!0?t.target.addScaledVector(g,t.dampingFactor):t.target.add(g),i.setFromSpherical(u),i.applyQuaternion(x),Et.copy(t.target).add(i),t.object.lookAt(t.target),t.enableDamping===!0?(E.theta*=1-t.dampingFactor,E.phi*=1-t.dampingFactor,g.multiplyScalar(1-t.dampingFactor)):(E.set(0,0,0),g.set(0,0,0)),v=1,p||C.distanceToSquared(t.object.position)>y||8*(1-M.dot(t.object.quaternion))>y?(t.dispatchEvent(Ct),C.copy(t.object.position),M.copy(t.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",yt),t.domElement.removeEventListener("pointerdown",vt),t.domElement.removeEventListener("pointercancel",Y),t.domElement.removeEventListener("wheel",At),t.domElement.removeEventListener("pointermove",J),t.domElement.removeEventListener("pointerup",Y),t._domElementKeyEvents!==null&&(t._domElementKeyEvents.removeEventListener("keydown",Q),t._domElementKeyEvents=null)};const t=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const y=1e-6,u=new xt,E=new xt;let v=1;const g=new I;let p=!1;const A=new S,f=new S,b=new S,c=new S,d=new S,s=new S,m=new S,_=new S,$=new S,h=[],D={};function k(){return 2*Math.PI/60/60*t.autoRotateSpeed}function w(){return Math.pow(.95,t.zoomSpeed)}function V(i){E.theta-=i}function X(i){E.phi-=i}const lt=function(){const i=new I;return function(x,C){i.setFromMatrixColumn(C,0),i.multiplyScalar(-x),g.add(i)}}(),rt=function(){const i=new I;return function(x,C){t.screenSpacePanning===!0?i.setFromMatrixColumn(C,1):(i.setFromMatrixColumn(C,0),i.crossVectors(t.object.up,i)),i.multiplyScalar(x),g.add(i)}}(),z=function(){const i=new I;return function(x,C){const M=t.domElement;if(t.object.isPerspectiveCamera){const H=t.object.position;i.copy(H).sub(t.target);let U=i.length();U*=Math.tan(t.object.fov/2*Math.PI/180),lt(2*x*U/M.clientHeight,t.object.matrix),rt(2*C*U/M.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(lt(x*(t.object.right-t.object.left)/t.object.zoom/M.clientWidth,t.object.matrix),rt(C*(t.object.top-t.object.bottom)/t.object.zoom/M.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function W(i){t.object.isPerspectiveCamera?v/=i:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom*i)),t.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function ht(i){t.object.isPerspectiveCamera?v*=i:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/i)),t.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function ct(i){A.set(i.clientX,i.clientY)}function Mt(i){m.set(i.clientX,i.clientY)}function dt(i){c.set(i.clientX,i.clientY)}function St(i){f.set(i.clientX,i.clientY),b.subVectors(f,A).multiplyScalar(t.rotateSpeed);const l=t.domElement;V(2*Math.PI*b.x/l.clientHeight),X(2*Math.PI*b.y/l.clientHeight),A.copy(f),t.update()}function Ot(i){_.set(i.clientX,i.clientY),$.subVectors(_,m),$.y>0?W(w()):$.y<0&&ht(w()),m.copy(_),t.update()}function Dt(i){d.set(i.clientX,i.clientY),s.subVectors(d,c).multiplyScalar(t.panSpeed),z(s.x,s.y),c.copy(d),t.update()}function Tt(i){i.deltaY<0?ht(w()):i.deltaY>0&&W(w()),t.update()}function Pt(i){let l=!1;switch(i.code){case t.keys.UP:i.ctrlKey||i.metaKey||i.shiftKey?X(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):z(0,t.keyPanSpeed),l=!0;break;case t.keys.BOTTOM:i.ctrlKey||i.metaKey||i.shiftKey?X(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):z(0,-t.keyPanSpeed),l=!0;break;case t.keys.LEFT:i.ctrlKey||i.metaKey||i.shiftKey?V(2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):z(t.keyPanSpeed,0),l=!0;break;case t.keys.RIGHT:i.ctrlKey||i.metaKey||i.shiftKey?V(-2*Math.PI*t.rotateSpeed/t.domElement.clientHeight):z(-t.keyPanSpeed,0),l=!0;break}l&&(i.preventDefault(),t.update())}function ut(){if(h.length===1)A.set(h[0].pageX,h[0].pageY);else{const i=.5*(h[0].pageX+h[1].pageX),l=.5*(h[0].pageY+h[1].pageY);A.set(i,l)}}function pt(){if(h.length===1)c.set(h[0].pageX,h[0].pageY);else{const i=.5*(h[0].pageX+h[1].pageX),l=.5*(h[0].pageY+h[1].pageY);c.set(i,l)}}function mt(){const i=h[0].pageX-h[1].pageX,l=h[0].pageY-h[1].pageY,x=Math.sqrt(i*i+l*l);m.set(0,x)}function Ft(){t.enableZoom&&mt(),t.enablePan&&pt()}function It(){t.enableZoom&&mt(),t.enableRotate&&ut()}function gt(i){if(h.length==1)f.set(i.pageX,i.pageY);else{const x=q(i),C=.5*(i.pageX+x.x),M=.5*(i.pageY+x.y);f.set(C,M)}b.subVectors(f,A).multiplyScalar(t.rotateSpeed);const l=t.domElement;V(2*Math.PI*b.x/l.clientHeight),X(2*Math.PI*b.y/l.clientHeight),A.copy(f)}function ft(i){if(h.length===1)d.set(i.pageX,i.pageY);else{const l=q(i),x=.5*(i.pageX+l.x),C=.5*(i.pageY+l.y);d.set(x,C)}s.subVectors(d,c).multiplyScalar(t.panSpeed),z(s.x,s.y),c.copy(d)}function bt(i){const l=q(i),x=i.pageX-l.x,C=i.pageY-l.y,M=Math.sqrt(x*x+C*C);_.set(0,M),$.set(0,Math.pow(_.y/m.y,t.zoomSpeed)),W($.y),m.copy(_)}function Vt(i){t.enableZoom&&bt(i),t.enablePan&&ft(i)}function zt(i){t.enableZoom&&bt(i),t.enableRotate&&gt(i)}function vt(i){t.enabled!==!1&&(h.length===0&&(t.domElement.setPointerCapture(i.pointerId),t.domElement.addEventListener("pointermove",J),t.domElement.addEventListener("pointerup",Y)),jt(i),i.pointerType==="touch"?Rt(i):Ht(i))}function J(i){t.enabled!==!1&&(i.pointerType==="touch"?Yt(i):Nt(i))}function Y(i){Bt(i),h.length===0&&(t.domElement.releasePointerCapture(i.pointerId),t.domElement.removeEventListener("pointermove",J),t.domElement.removeEventListener("pointerup",Y)),t.dispatchEvent($t),a=o.NONE}function Ht(i){let l;switch(i.button){case 0:l=t.mouseButtons.LEFT;break;case 1:l=t.mouseButtons.MIDDLE;break;case 2:l=t.mouseButtons.RIGHT;break;default:l=-1}switch(l){case N.DOLLY:if(t.enableZoom===!1)return;Mt(i),a=o.DOLLY;break;case N.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(t.enablePan===!1)return;dt(i),a=o.PAN}else{if(t.enableRotate===!1)return;ct(i),a=o.ROTATE}break;case N.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(t.enableRotate===!1)return;ct(i),a=o.ROTATE}else{if(t.enablePan===!1)return;dt(i),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&t.dispatchEvent(nt)}function Nt(i){switch(a){case o.ROTATE:if(t.enableRotate===!1)return;St(i);break;case o.DOLLY:if(t.enableZoom===!1)return;Ot(i);break;case o.PAN:if(t.enablePan===!1)return;Dt(i);break}}function At(i){t.enabled===!1||t.enableZoom===!1||a!==o.NONE||(i.preventDefault(),t.dispatchEvent(nt),Tt(i),t.dispatchEvent($t))}function Q(i){t.enabled===!1||t.enablePan===!1||Pt(i)}function Rt(i){switch(wt(i),h.length){case 1:switch(t.touches.ONE){case R.ROTATE:if(t.enableRotate===!1)return;ut(),a=o.TOUCH_ROTATE;break;case R.PAN:if(t.enablePan===!1)return;pt(),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(t.touches.TWO){case R.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Ft(),a=o.TOUCH_DOLLY_PAN;break;case R.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;It(),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&t.dispatchEvent(nt)}function Yt(i){switch(wt(i),a){case o.TOUCH_ROTATE:if(t.enableRotate===!1)return;gt(i),t.update();break;case o.TOUCH_PAN:if(t.enablePan===!1)return;ft(i),t.update();break;case o.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Vt(i),t.update();break;case o.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;zt(i),t.update();break;default:a=o.NONE}}function yt(i){t.enabled!==!1&&i.preventDefault()}function jt(i){h.push(i)}function Bt(i){delete D[i.pointerId];for(let l=0;l<h.length;l++)if(h[l].pointerId==i.pointerId){h.splice(l,1);return}}function wt(i){let l=D[i.pointerId];l===void 0&&(l=new S,D[i.pointerId]=l),l.set(i.pageX,i.pageY)}function q(i){const l=i.pointerId===h[0].pointerId?h[1]:h[0];return D[l.pointerId]}t.domElement.addEventListener("contextmenu",yt),t.domElement.addEventListener("pointerdown",vt),t.domElement.addEventListener("pointercancel",Y),t.domElement.addEventListener("wheel",At,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class O{constructor(e,n,t,o,a="div"){this.parent=e,this.object=n,this.property=t,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("name"),O.nextNameID=O.nextNameID||0,this.$name.id=`lil-gui-name-${++O.nextNameID}`,this.$widget=document.createElement(a),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(t)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const n=this.parent.add(this.object,this.property,e);return n.name(this._name),this.destroy(),n}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ee extends O{constructor(e,n,t){super(e,n,t,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ot(r){let e,n;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),n?"#"+n:!1}const ie={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:ot,toHexString:ot},K={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},ne={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,n=1){const t=K.fromHexString(r);e[0]=(t>>16&255)/255*n,e[1]=(t>>8&255)/255*n,e[2]=(t&255)/255*n},toHexString([r,e,n],t=1){t=255/t;const o=r*t<<16^e*t<<8^n*t<<0;return K.toHexString(o)}},se={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,n=1){const t=K.fromHexString(r);e.r=(t>>16&255)/255*n,e.g=(t>>8&255)/255*n,e.b=(t&255)/255*n},toHexString({r,g:e,b:n},t=1){t=255/t;const o=r*t<<16^e*t<<8^n*t<<0;return K.toHexString(o)}},oe=[ie,K,ne,se];function ae(r){return oe.find(e=>e.match(r))}class le extends O{constructor(e,n,t,o){super(e,n,t,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ae(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=ot(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const n=this._format.fromHexString(e);this.setValue(n)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class st extends O{constructor(e,n,t){super(e,n,t,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class re extends O{constructor(e,n,t,o,a,y){super(e,n,t,"number"),this._initInput(),this.min(o),this.max(a);const u=y!==void 0;this.step(u?y:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,n=!0){return this._step=e,this._stepExplicit=n,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let n=(e-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let s=parseFloat(this.$input.value);isNaN(s)||(this._stepExplicit&&(s=this._snap(s)),this.setValue(this._clamp(s)))},n=s=>{const m=parseFloat(this.$input.value);isNaN(m)||(this._snapClampSetValue(m+s),this.$input.value=this.getValue())},t=s=>{s.code==="Enter"&&this.$input.blur(),s.code==="ArrowUp"&&(s.preventDefault(),n(this._step*this._arrowKeyMultiplier(s))),s.code==="ArrowDown"&&(s.preventDefault(),n(this._step*this._arrowKeyMultiplier(s)*-1))},o=s=>{this._inputFocused&&(s.preventDefault(),n(this._step*this._normalizeMouseWheel(s)))};let a=!1,y,u,E,v,g;const p=5,A=s=>{y=s.clientX,u=E=s.clientY,a=!0,v=this.getValue(),g=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",b)},f=s=>{if(a){const m=s.clientX-y,_=s.clientY-u;Math.abs(_)>p?(s.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(m)>p&&b()}if(!a){const m=s.clientY-E;g-=m*this._step*this._arrowKeyMultiplier(s),v+g>this._max?g=this._max-v:v+g<this._min&&(g=this._min-v),this._snapClampSetValue(v+g)}E=s.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",b)},c=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",t),this.$input.addEventListener("wheel",o,{passive:!1}),this.$input.addEventListener("mousedown",A),this.$input.addEventListener("focus",c),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(s,m,_,$,h)=>(s-m)/(_-m)*(h-$)+$,n=s=>{const m=this.$slider.getBoundingClientRect();let _=e(s,m.left,m.right,this._min,this._max);this._snapClampSetValue(_)},t=s=>{this._setDraggingStyle(!0),n(s.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",a)},o=s=>{n(s.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a)};let y=!1,u,E;const v=s=>{s.preventDefault(),this._setDraggingStyle(!0),n(s.touches[0].clientX),y=!1},g=s=>{s.touches.length>1||(this._hasScrollBar?(u=s.touches[0].clientX,E=s.touches[0].clientY,y=!0):v(s),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",A))},p=s=>{if(y){const m=s.touches[0].clientX-u,_=s.touches[0].clientY-E;Math.abs(m)>Math.abs(_)?v(s):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",A))}else s.preventDefault(),n(s.touches[0].clientX)},A=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",A)},f=this._callOnFinishChange.bind(this),b=400;let c;const d=s=>{if(Math.abs(s.deltaX)<Math.abs(s.deltaY)&&this._hasScrollBar)return;s.preventDefault();const _=this._normalizeMouseWheel(s)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(c),c=setTimeout(f,b)};this.$slider.addEventListener("mousedown",t),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",d,{passive:!1})}_setDraggingStyle(e,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${n}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:n,deltaY:t}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(n=0,t=-e.wheelDelta/120,t*=this._stepExplicit?1:10),n+-t}_arrowKeyMultiplier(e){let n=this._stepExplicit?1:10;return e.shiftKey?n*=10:e.altKey&&(n/=10),n}_snap(e){const n=Math.round(e/this._step)*this._step;return parseFloat(n.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class he extends O{constructor(e,n,t,o){super(e,n,t,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(o)?o:Object.values(o),this._names=Array.isArray(o)?o:Object.keys(o),this._names.forEach(a=>{const y=document.createElement("option");y.innerHTML=a,this.$select.appendChild(y)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),n=this._values.indexOf(e);return this.$select.selectedIndex=n,this.$display.innerHTML=n===-1?e:this._names[n],this}}class ce extends O{constructor(e,n,t){super(e,n,t,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const de=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function ue(r){const e=document.createElement("style");e.innerHTML=r;const n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}let Lt=!1;class at{constructor({parent:e,autoPlace:n=e===void 0,container:t,width:o,title:a="Controls",closeFolders:y=!1,injectStyles:u=!0,touchStyles:E=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",v=>{(v.code==="Enter"||v.code==="Space")&&(v.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),E&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Lt&&u&&(ue(de),Lt=!0),t?t.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this._closeFolders=y,this.domElement.addEventListener("keydown",v=>v.stopPropagation()),this.domElement.addEventListener("keyup",v=>v.stopPropagation())}add(e,n,t,o,a){if(Object(t)===t)return new he(this,e,n,t);const y=e[n];switch(typeof y){case"number":return new re(this,e,n,t,o,a);case"boolean":return new ee(this,e,n);case"string":return new ce(this,e,n);case"function":return new st(this,e,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,e,`
	value:`,y)}addColor(e,n,t=1){return new le(this,e,n,t)}addFolder(e){const n=new at({parent:this,title:e});return this.root._closeFolders&&n.close(),n}load(e,n=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof st||t._name in e.controllers&&t.load(e.controllers[t._name])}),n&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof st)){if(t._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);n.controllers[t._name]=t.save()}}),e&&this.folders.forEach(t=>{if(t._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);n.folders[t._title]=t.save()}),n}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const t=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",t))};this.$children.addEventListener("transitionend",t);const o=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(n=>{e=e.concat(n.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(n=>{e=e.concat(n.foldersRecursive())}),e}}const pe=at;const Z=r=>(qt("data-v-a9322926"),r=r(),te(),r),me=Z(()=>L("div",{class:"msg"},"Hello ThreeJs!",-1)),ge={class:"controls"},fe={class:"first-control"},be=Z(()=>L("span",null,"Light's x:",-1)),ve=Z(()=>L("span",null,"Light's y:",-1)),Ae=Z(()=>L("span",null,"Light's z:",-1)),ye={__name:"three",setup(r){Ut({title:"ThreeJs Playground",meta:[{hid:"description",name:"description",content:"ThreeJs Playground"}]});const e=G(null),{$THREE:n}=Gt(),t=G({first:{x:0,y:0,z:4}}),o=G([[-5,0,0],[0,0,0],[5,0,0]]),a=G(!1);function y(){t.value.first.x=0,t.value.first.y=0,t.value.first.z=4}function u(){const g=new n.WebGLRenderer({antialias:!0,alpha:!0});e.value.appendChild(g.domElement),g.setSize(1e3,500);const p=new n.PerspectiveCamera(75,1e3/500,.1,1e3);p.position.z=10;const A=new kt(p,g.domElement),f=new n.Scene,b=new n.BoxGeometry(2,2,2),c=new n.MeshPhongMaterial({color:"#1989fa"}),d=[];class s{constructor(w,V){this.fog=w,this.backgroundColor=V}get near(){return this.fog.near}set near(w){this.fog.near=w,this.fog.far=Math.max(this.fog.far,w)}get far(){return this.fog.far}set far(w){this.fog.far=w,this.fog.near=Math.min(this.fog.near,w)}get color(){return`#${this.fog.color.getHexString()}`}set color(w){this.fog.color.set(w),this.backgroundColor.set(w)}}let m;it(()=>{if(a.value){f.fog=new n.Fog("lightblue",2,20),f.background=new n.Color("lightblue"),m=new pe({container:e.value});const k=new s(f.fog,f.background);m.add(k,"near",0,100).listen(),m.add(k,"far",0,100).listen(),m.addColor(k,"color")}else f.fog=null,f.background=null,m&&m.destroy()});const _=16777215,$=1,h=new n.DirectionalLight(_,$);it(()=>{h.position.set(t.value.first.x,t.value.first.y,t.value.first.z)}),it(()=>{o.value.forEach(k=>{const w=new n.Mesh(b,c);d.push(w),w.position.set(...k),f.add(w)})}),f.add(h);const D=()=>{requestAnimationFrame(D),d.forEach(k=>{k.rotation.x+=.01,k.rotation.y+=.01}),A.update(),g.render(f,p)};D()}function E(){const g=Math.floor(Math.random()*60-30),p=Math.floor(Math.random()*60-30),A=Math.floor(Math.random()*60-30);o.value.splice(0,o.value.length,[g,p,A])}function v(){const g=new n.WebGLRenderer({antialias:!0,alpha:!0});e.value.appendChild(g.domElement),g.setSize(1e3,500);const p=new n.PerspectiveCamera(75,1e3/500,.1,1e3);p.position.z=15;const A=new kt(p,g.domElement),f=new n.Scene,b=new n.Shape,c=-2.5,d=-5;b.moveTo(c+2.5,d+2.5),b.bezierCurveTo(c+2.5,d+2.5,c+2,d,c,d),b.bezierCurveTo(c-3,d,c-3,d+3.5,c-3,d+3.5),b.bezierCurveTo(c-3,d+5.5,c-1.5,d+7.7,c+2.5,d+9.5),b.bezierCurveTo(c+6,d+7.7,c+8,d+4.5,c+8,d+3.5),b.bezierCurveTo(c+8,d+3.5,c+8,d,c+5,d),b.bezierCurveTo(c+3.5,d,c+2.5,d+2.5,c+2.5,d+2.5);const s={steps:10,depth:4,bevelEnabled:!0,bevelThickness:.77,bevelSize:1.29,bevelSegments:4},m=new n.ExtrudeGeometry(b,s),_=new n.MeshPhongMaterial({color:"#f40"}),$=new n.Mesh(m,_);f.add($);const h=16777215,D=1,k=new n.DirectionalLight(h,D);k.position.set(-1,2,4),f.add(k);const w=()=>{requestAnimationFrame(w),$.rotation.x+=.01,$.rotation.y+=.01,g.render(f,p),A.update()};w()}return Zt(()=>{u(),v()}),(g,p)=>{const A=j("el-button"),f=j("el-slider"),b=j("RefreshRight"),c=j("el-icon"),d=j("el-checkbox");return Wt(),Jt(Qt,null,[F(A,{onClick:p[0]||(p[0]=s=>g.$router.push("/"))},{default:B(()=>[tt("Back to homepage")]),_:1}),me,L("div",ge,[L("div",fe,[L("p",null,[be,F(f,{min:-100,max:100,modelValue:t.value.first.x,"onUpdate:modelValue":p[1]||(p[1]=s=>t.value.first.x=s)},null,8,["modelValue"]),L("span",null,et(t.value.first.x),1)]),L("p",null,[ve,F(f,{min:-100,max:100,modelValue:t.value.first.y,"onUpdate:modelValue":p[2]||(p[2]=s=>t.value.first.y=s)},null,8,["modelValue"]),L("span",null,et(t.value.first.y),1)]),L("p",null,[Ae,F(f,{min:-100,max:100,modelValue:t.value.first.z,"onUpdate:modelValue":p[3]||(p[3]=s=>t.value.first.z=s)},null,8,["modelValue"]),L("span",null,et(t.value.first.z),1)]),L("p",null,[F(A,{onClick:y},{default:B(()=>[F(c,{color:"#1989fa"},{default:B(()=>[F(b)]),_:1})]),_:1}),F(A,{onClick:E},{default:B(()=>[tt("Add Cubes")]),_:1}),F(d,{modelValue:a.value,"onUpdate:modelValue":p[4]||(p[4]=s=>a.value=s)},{default:B(()=>[tt("Enable Fog")]),_:1},8,["modelValue"])])])]),L("div",{ref_key:"container",ref:e,id:"container"},null,512)],64)}}},Ee=Xt(ye,[["__scopeId","data-v-a9322926"]]);export{Ee as default};
