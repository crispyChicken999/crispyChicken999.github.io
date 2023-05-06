import{E as De,V as S,M as N,T as k,Q as ce,S as le,y as T,a as Ne,e as ke,r as Re,z as Ie,A as je,f as Ce,o as ve,h as ze,i as Ye,w as He,j as Ke,k as de,F as Fe,s as Ue,x as Ze}from"./entry.09808d03.js";const ue={type:"change"},X={type:"start"},pe={type:"end"};class Xe extends De{constructor(x,u){super(),this.object=x,this.domElement=u,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:N.ROTATE,MIDDLE:N.DOLLY,RIGHT:N.PAN},this.touches={ONE:k.ROTATE,TWO:k.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",U),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",U),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(ue),e.update(),o=a.NONE},this.update=function(){const t=new S,n=new ce().setFromUnitVectors(x.up,new S(0,1,0)),l=n.clone().invert(),p=new S,E=new ce,D=2*Math.PI;return function(){const re=e.object.position;t.copy(re).sub(e.target),t.applyQuaternion(n),r.setFromVector3(t),e.autoRotate&&o===a.NONE&&j(me()),e.enableDamping?(r.theta+=d.theta*e.dampingFactor,r.phi+=d.phi*e.dampingFactor):(r.theta+=d.theta,r.phi+=d.phi);let O=e.minAzimuthAngle,A=e.maxAzimuthAngle;return isFinite(O)&&isFinite(A)&&(O<-Math.PI?O+=D:O>Math.PI&&(O-=D),A<-Math.PI?A+=D:A>Math.PI&&(A-=D),O<=A?r.theta=Math.max(O,Math.min(A,r.theta)):r.theta=r.theta>(O+A)/2?Math.max(O,r.theta):Math.min(A,r.theta)),r.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=m,r.radius=Math.max(e.minDistance,Math.min(e.maxDistance,r.radius)),e.enableDamping===!0?e.target.addScaledVector(i,e.dampingFactor):e.target.add(i),t.setFromSpherical(r),t.applyQuaternion(l),re.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(d.theta*=1-e.dampingFactor,d.phi*=1-e.dampingFactor,i.multiplyScalar(1-e.dampingFactor)):(d.set(0,0,0),i.set(0,0,0)),m=1,c||p.distanceToSquared(e.object.position)>h||8*(1-E.dot(e.object.quaternion))>h?(e.dispatchEvent(ue),p.copy(e.object.position),E.copy(e.object.quaternion),c=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",ie),e.domElement.removeEventListener("pointerdown",oe),e.domElement.removeEventListener("pointercancel",C),e.domElement.removeEventListener("wheel",ae),e.domElement.removeEventListener("pointermove",F),e.domElement.removeEventListener("pointerup",C),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",U),e._domElementKeyEvents=null)};const e=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=a.NONE;const h=1e-6,r=new le,d=new le;let m=1;const i=new S;let c=!1;const b=new T,f=new T,y=new T,g=new T,P=new T,L=new T,w=new T,M=new T,I=new T,s=[],v={};function me(){return 2*Math.PI/60/60*e.autoRotateSpeed}function z(){return Math.pow(.95,e.zoomSpeed)}function j(t){d.theta-=t}function Y(t){d.phi-=t}const V=function(){const t=new S;return function(l,p){t.setFromMatrixColumn(p,0),t.multiplyScalar(-l),i.add(t)}}(),B=function(){const t=new S;return function(l,p){e.screenSpacePanning===!0?t.setFromMatrixColumn(p,1):(t.setFromMatrixColumn(p,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(l),i.add(t)}}(),_=function(){const t=new S;return function(l,p){const E=e.domElement;if(e.object.isPerspectiveCamera){const D=e.object.position;t.copy(D).sub(e.target);let H=t.length();H*=Math.tan(e.object.fov/2*Math.PI/180),V(2*l*H/E.clientHeight,e.object.matrix),B(2*p*H/E.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(V(l*(e.object.right-e.object.left)/e.object.zoom/E.clientWidth,e.object.matrix),B(p*(e.object.top-e.object.bottom)/e.object.zoom/E.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function K(t){e.object.isPerspectiveCamera?m/=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*t)),e.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function G(t){e.object.isPerspectiveCamera?m*=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/t)),e.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function W(t){b.set(t.clientX,t.clientY)}function he(t){w.set(t.clientX,t.clientY)}function q(t){g.set(t.clientX,t.clientY)}function fe(t){f.set(t.clientX,t.clientY),y.subVectors(f,b).multiplyScalar(e.rotateSpeed);const n=e.domElement;j(2*Math.PI*y.x/n.clientHeight),Y(2*Math.PI*y.y/n.clientHeight),b.copy(f),e.update()}function be(t){M.set(t.clientX,t.clientY),I.subVectors(M,w),I.y>0?K(z()):I.y<0&&G(z()),w.copy(M),e.update()}function ye(t){P.set(t.clientX,t.clientY),L.subVectors(P,g).multiplyScalar(e.panSpeed),_(L.x,L.y),g.copy(P),e.update()}function ge(t){t.deltaY<0?G(z()):t.deltaY>0&&K(z()),e.update()}function Ee(t){let n=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?Y(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):_(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?Y(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):_(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?j(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):_(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?j(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):_(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function Q(){if(s.length===1)b.set(s[0].pageX,s[0].pageY);else{const t=.5*(s[0].pageX+s[1].pageX),n=.5*(s[0].pageY+s[1].pageY);b.set(t,n)}}function J(){if(s.length===1)g.set(s[0].pageX,s[0].pageY);else{const t=.5*(s[0].pageX+s[1].pageX),n=.5*(s[0].pageY+s[1].pageY);g.set(t,n)}}function $(){const t=s[0].pageX-s[1].pageX,n=s[0].pageY-s[1].pageY,l=Math.sqrt(t*t+n*n);w.set(0,l)}function Te(){e.enableZoom&&$(),e.enablePan&&J()}function Pe(){e.enableZoom&&$(),e.enableRotate&&Q()}function ee(t){if(s.length==1)f.set(t.pageX,t.pageY);else{const l=Z(t),p=.5*(t.pageX+l.x),E=.5*(t.pageY+l.y);f.set(p,E)}y.subVectors(f,b).multiplyScalar(e.rotateSpeed);const n=e.domElement;j(2*Math.PI*y.x/n.clientHeight),Y(2*Math.PI*y.y/n.clientHeight),b.copy(f)}function te(t){if(s.length===1)P.set(t.pageX,t.pageY);else{const n=Z(t),l=.5*(t.pageX+n.x),p=.5*(t.pageY+n.y);P.set(l,p)}L.subVectors(P,g).multiplyScalar(e.panSpeed),_(L.x,L.y),g.copy(P)}function ne(t){const n=Z(t),l=t.pageX-n.x,p=t.pageY-n.y,E=Math.sqrt(l*l+p*p);M.set(0,E),I.set(0,Math.pow(M.y/w.y,e.zoomSpeed)),K(I.y),w.copy(M)}function we(t){e.enableZoom&&ne(t),e.enablePan&&te(t)}function Me(t){e.enableZoom&&ne(t),e.enableRotate&&ee(t)}function oe(t){e.enabled!==!1&&(s.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",F),e.domElement.addEventListener("pointerup",C)),xe(t),t.pointerType==="touch"?Le(t):Oe(t))}function F(t){e.enabled!==!1&&(t.pointerType==="touch"?Se(t):Ae(t))}function C(t){_e(t),s.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",F),e.domElement.removeEventListener("pointerup",C)),e.dispatchEvent(pe),o=a.NONE}function Oe(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case N.DOLLY:if(e.enableZoom===!1)return;he(t),o=a.DOLLY;break;case N.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;q(t),o=a.PAN}else{if(e.enableRotate===!1)return;W(t),o=a.ROTATE}break;case N.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;W(t),o=a.ROTATE}else{if(e.enablePan===!1)return;q(t),o=a.PAN}break;default:o=a.NONE}o!==a.NONE&&e.dispatchEvent(X)}function Ae(t){switch(o){case a.ROTATE:if(e.enableRotate===!1)return;fe(t);break;case a.DOLLY:if(e.enableZoom===!1)return;be(t);break;case a.PAN:if(e.enablePan===!1)return;ye(t);break}}function ae(t){e.enabled===!1||e.enableZoom===!1||o!==a.NONE||(t.preventDefault(),e.dispatchEvent(X),ge(t),e.dispatchEvent(pe))}function U(t){e.enabled===!1||e.enablePan===!1||Ee(t)}function Le(t){switch(se(t),s.length){case 1:switch(e.touches.ONE){case k.ROTATE:if(e.enableRotate===!1)return;Q(),o=a.TOUCH_ROTATE;break;case k.PAN:if(e.enablePan===!1)return;J(),o=a.TOUCH_PAN;break;default:o=a.NONE}break;case 2:switch(e.touches.TWO){case k.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Te(),o=a.TOUCH_DOLLY_PAN;break;case k.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Pe(),o=a.TOUCH_DOLLY_ROTATE;break;default:o=a.NONE}break;default:o=a.NONE}o!==a.NONE&&e.dispatchEvent(X)}function Se(t){switch(se(t),o){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;ee(t),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;te(t),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;we(t),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Me(t),e.update();break;default:o=a.NONE}}function ie(t){e.enabled!==!1&&t.preventDefault()}function xe(t){s.push(t)}function _e(t){delete v[t.pointerId];for(let n=0;n<s.length;n++)if(s[n].pointerId==t.pointerId){s.splice(n,1);return}}function se(t){let n=v[t.pointerId];n===void 0&&(n=new T,v[t.pointerId]=n),n.set(t.pageX,t.pageY)}function Z(t){const n=t.pointerId===s[0].pointerId?s[1]:s[0];return v[n.pointerId]}e.domElement.addEventListener("contextmenu",ie),e.domElement.addEventListener("pointerdown",oe),e.domElement.addEventListener("pointercancel",C),e.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}const Ve=R=>(Ue("data-v-6b28dd23"),R=R(),Ze(),R),Be=Ve(()=>de("div",{class:"msg"},"Hello ThreeJs!",-1)),Ge={__name:"three",setup(R){ke({title:"ThreeJs Playground",meta:[{hid:"description",name:"description",content:"ThreeJs Playground"}]});const x=Re(null),{$THREE:u}=Ie();function e(){const o=new u.WebGLRenderer({antialias:!0,alpha:!0});x.value.appendChild(o.domElement),o.setSize(1e3,500);const h=new u.PerspectiveCamera(75,1e3/500,.1,1e3);h.position.z=3;const r=new u.Scene,d=new u.BoxGeometry(2,2,2),m=new u.MeshPhongMaterial({color:"#1989fa"}),i=new u.Mesh(d,m);r.add(i);const c=16777215,b=1,f=new u.DirectionalLight(c,b);f.position.set(-1,2,4),r.add(f);const y=()=>{requestAnimationFrame(y),i.rotation.x+=.01,i.rotation.y+=.01,o.render(r,h)};y()}function a(){const o=new u.WebGLRenderer({antialias:!0,alpha:!0});x.value.appendChild(o.domElement),o.setSize(1e3,500);const h=new u.PerspectiveCamera(75,1e3/500,.1,1e3);h.position.z=15;const r=new Xe(h,o.domElement),d=new u.Scene,m=new u.Shape,i=-2.5,c=-5;m.moveTo(i+2.5,c+2.5),m.bezierCurveTo(i+2.5,c+2.5,i+2,c,i,c),m.bezierCurveTo(i-3,c,i-3,c+3.5,i-3,c+3.5),m.bezierCurveTo(i-3,c+5.5,i-1.5,c+7.7,i+2.5,c+9.5),m.bezierCurveTo(i+6,c+7.7,i+8,c+4.5,i+8,c+3.5),m.bezierCurveTo(i+8,c+3.5,i+8,c,i+5,c),m.bezierCurveTo(i+3.5,c,i+2.5,c+2.5,i+2.5,c+2.5);const b={steps:10,depth:4,bevelEnabled:!0,bevelThickness:.77,bevelSize:1.29,bevelSegments:4},f=new u.ExtrudeGeometry(m,b),y=new u.MeshPhongMaterial({color:"#f40"}),g=new u.Mesh(f,y);d.add(g);const P=16777215,L=1,w=new u.DirectionalLight(P,L);w.position.set(-1,2,4),d.add(w);const M=()=>{requestAnimationFrame(M),g.rotation.x+=.01,g.rotation.y+=.01,o.render(d,h),r.update()};M()}return je(()=>{e(),a()}),(o,h)=>{const r=Ce("el-button");return ve(),ze(Fe,null,[Ye(r,{onClick:h[0]||(h[0]=d=>o.$router.push("/"))},{default:He(()=>[Ke("Back to homepage")]),_:1}),Be,de("div",{ref_key:"container",ref:x},null,512)],64)}}},qe=Ne(Ge,[["__scopeId","data-v-6b28dd23"]]);export{qe as default};
