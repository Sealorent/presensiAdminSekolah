import{M as $e}from"./MenuBottomBar-cc847334.js";import{V as ts,u as es}from"./summaryStore-b3c82702.js";import{r as ss,t as is,f as ns,i as rs}from"./index-e472ee1a.js";import{h as as,j as os,k as U,l as it,m as ve,o as H,p as ls,a as r,b as nt,q as _e,w as qt,s as cs,T as hs,n as us,x as Wt,y as fs,z as ps,A as vs,_ as ds,i as ms,r as Ot,c as X,g as de,F as jt,f as Bt,t as _,B as _s}from"./index-d249554b.js";import{g as gs}from"./_commonjsHelpers-de833af9.js";import"./mainRepositories-09f24805.js";import"./axios-4a70c6fc.js";function Ts(u){return ss(1,arguments),is(u).getFullYear()}class ys{static listMonth(){const o=Ts(new Date),v=[];for(let p=0;p<12;p++){const l=new Date(o,p,1),m=ns(l,"MMMM",{locale:rs});v.push({index:p+1,name:m})}return v}static listYear(){const o=[],v=new Date().getFullYear(),p=2020,l=new Date().getFullYear();for(let m=p;m<=Math.min(l,v);m++)o.push(m);return o}}const me=ys;class Es{constructor(o){this.jam_datang=o.jam_datang||"-",this.jam_pulang=o.jam_pulang||"-",this.lokasi_datang=o.lokasi_datang||"-",this.lokasi_pulang=o.lokasi_pulang||"-",this.catatan_datang=o.catatan_datang||"-",this.catatan_pulang=o.catatan_pulang||"-"}}class xs{constructor(o){this.hari=o.hari||"-",this.status=o.status||"-",this.detail=new Es(o.detail||{})}}class Is{constructor(o){this.is_correct=o.is_correct??!1,this.message=o.message||"",this.hadir=`${o.hadir} Hari`||"0 Hari",this.ijin=`${o.ijin} Hari`||"0 Hari",this.sakit=`${o.sakit} Hari`||"0 Hari",this.lain=`${o.lain} Hari`||"0 hari",this.terlambat=`${o.terlambat} Hari`||"0 Hari",this.percentase=o.percentase||"0 Hari",this.percentase_hari=o.percentase_hari||"0/0 Hari",this.hadir_tahun_ini=o.hadir_tahun_ini||"0 Hari",this.rekap=Array.isArray(o.rekap)?o.rekap.map(v=>new xs(v)):[]}}var ge={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(u){(function(o,v,p,l){var m=["","webkit","Moz","MS","ms","o"],N=v.createElement("div"),z="function",A=Math.round,P=Math.abs,f=Date.now;function D(t,e,s){return setTimeout(at(t,s),e)}function W(t,e,s){return Array.isArray(t)?(M(t,s[e],s),!0):!1}function M(t,e,s){var i;if(t)if(t.forEach)t.forEach(e,s);else if(t.length!==l)for(i=0;i<t.length;)e.call(s,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(s,t[i],i,t)}function rt(t,e,s){var i="DEPRECATED METHOD: "+e+`
`+s+` AT 
`;return function(){var n=new Error("get-stack-trace"),a=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",c=o.console&&(o.console.warn||o.console.log);return c&&c.call(o.console,i,a),t.apply(this,arguments)}}var w;typeof Object.assign!="function"?w=function(e){if(e===l||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var s=Object(e),i=1;i<arguments.length;i++){var n=arguments[i];if(n!==l&&n!==null)for(var a in n)n.hasOwnProperty(a)&&(s[a]=n[a])}return s}:w=Object.assign;var mt=rt(function(e,s,i){for(var n=Object.keys(s),a=0;a<n.length;)(!i||i&&e[n[a]]===l)&&(e[n[a]]=s[n[a]]),a++;return e},"extend","Use `assign`."),bt=rt(function(e,s){return mt(e,s,!0)},"merge","Use `assign`.");function y(t,e,s){var i=e.prototype,n;n=t.prototype=Object.create(i),n.constructor=t,n._super=i,s&&w(n,s)}function at(t,e){return function(){return t.apply(e,arguments)}}function ot(t,e){return typeof t==z?t.apply(e&&e[0]||l,e):t}function _t(t,e){return t===l?e:t}function tt(t,e,s){M(et(e),function(i){t.addEventListener(i,s,!1)})}function J(t,e,s){M(et(e),function(i){t.removeEventListener(i,s,!1)})}function gt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function S(t,e){return t.indexOf(e)>-1}function et(t){return t.trim().split(/\s+/g)}function R(t,e,s){if(t.indexOf&&!s)return t.indexOf(e);for(var i=0;i<t.length;){if(s&&t[i][s]==e||!s&&t[i]===e)return i;i++}return-1}function h(t){return Array.prototype.slice.call(t,0)}function I(t,e,s){for(var i=[],n=[],a=0;a<t.length;){var c=e?t[a][e]:t[a];R(n,c)<0&&i.push(t[a]),n[a]=c,a++}return s&&(e?i=i.sort(function(T,x){return T[e]>x[e]}):i=i.sort()),i}function Y(t,e){for(var s,i,n=e[0].toUpperCase()+e.slice(1),a=0;a<m.length;){if(s=m[a],i=s?s+n:e,i in t)return i;a++}return l}var At=1;function Te(){return At++}function zt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||o}var ye=/mobile|tablet|ip(ad|hone|od)|android/i,Gt="ontouchstart"in o,Ee=Y(o,"PointerEvent")!==l,xe=Gt&&ye.test(navigator.userAgent),lt="touch",Ie="pen",Dt="mouse",Ce="kinect",Ne=25,E=1,Q=2,d=4,C=8,Tt=1,ct=2,ht=4,ut=8,ft=16,L=ct|ht,K=ut|ft,Zt=L|K,Jt=["x","y"],yt=["clientX","clientY"];function O(t,e){var s=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(i){ot(t.options.enable,[t])&&s.handler(i)},this.init()}O.prototype={handler:function(){},init:function(){this.evEl&&tt(this.element,this.evEl,this.domHandler),this.evTarget&&tt(this.target,this.evTarget,this.domHandler),this.evWin&&tt(zt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&J(this.element,this.evEl,this.domHandler),this.evTarget&&J(this.target,this.evTarget,this.domHandler),this.evWin&&J(zt(this.element),this.evWin,this.domHandler)}};function Pe(t){var e,s=t.options.inputClass;return s?e=s:Ee?e=Yt:xe?e=It:Gt?e=kt:e=xt,new e(t,we)}function we(t,e,s){var i=s.pointers.length,n=s.changedPointers.length,a=e&E&&i-n===0,c=e&(d|C)&&i-n===0;s.isFirst=!!a,s.isFinal=!!c,a&&(t.session={}),s.eventType=e,Se(t,s),t.emit("hammer.input",s),t.recognize(s),t.session.prevInput=s}function Se(t,e){var s=t.session,i=e.pointers,n=i.length;s.firstInput||(s.firstInput=Qt(e)),n>1&&!s.firstMultiple?s.firstMultiple=Qt(e):n===1&&(s.firstMultiple=!1);var a=s.firstInput,c=s.firstMultiple,g=c?c.center:a.center,T=e.center=Kt(i);e.timeStamp=f(),e.deltaTime=e.timeStamp-a.timeStamp,e.angle=Mt(g,T),e.distance=Et(g,T),Oe(s,e),e.offsetDirection=te(e.deltaX,e.deltaY);var x=$t(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=x.x,e.overallVelocityY=x.y,e.overallVelocity=P(x.x)>P(x.y)?x.x:x.y,e.scale=c?De(c.pointers,i):1,e.rotation=c?Ae(c.pointers,i):0,e.maxPointers=s.prevInput?e.pointers.length>s.prevInput.maxPointers?e.pointers.length:s.prevInput.maxPointers:e.pointers.length,be(s,e);var V=t.element;gt(e.srcEvent.target,V)&&(V=e.srcEvent.target),e.target=V}function Oe(t,e){var s=e.center,i=t.offsetDelta||{},n=t.prevDelta||{},a=t.prevInput||{};(e.eventType===E||a.eventType===d)&&(n=t.prevDelta={x:a.deltaX||0,y:a.deltaY||0},i=t.offsetDelta={x:s.x,y:s.y}),e.deltaX=n.x+(s.x-i.x),e.deltaY=n.y+(s.y-i.y)}function be(t,e){var s=t.lastInterval||e,i=e.timeStamp-s.timeStamp,n,a,c,g;if(e.eventType!=C&&(i>Ne||s.velocity===l)){var T=e.deltaX-s.deltaX,x=e.deltaY-s.deltaY,V=$t(i,T,x);a=V.x,c=V.y,n=P(V.x)>P(V.y)?V.x:V.y,g=te(T,x),t.lastInterval=e}else n=s.velocity,a=s.velocityX,c=s.velocityY,g=s.direction;e.velocity=n,e.velocityX=a,e.velocityY=c,e.direction=g}function Qt(t){for(var e=[],s=0;s<t.pointers.length;)e[s]={clientX:A(t.pointers[s].clientX),clientY:A(t.pointers[s].clientY)},s++;return{timeStamp:f(),pointers:e,center:Kt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Kt(t){var e=t.length;if(e===1)return{x:A(t[0].clientX),y:A(t[0].clientY)};for(var s=0,i=0,n=0;n<e;)s+=t[n].clientX,i+=t[n].clientY,n++;return{x:A(s/e),y:A(i/e)}}function $t(t,e,s){return{x:e/t||0,y:s/t||0}}function te(t,e){return t===e?Tt:P(t)>=P(e)?t<0?ct:ht:e<0?ut:ft}function Et(t,e,s){s||(s=Jt);var i=e[s[0]]-t[s[0]],n=e[s[1]]-t[s[1]];return Math.sqrt(i*i+n*n)}function Mt(t,e,s){s||(s=Jt);var i=e[s[0]]-t[s[0]],n=e[s[1]]-t[s[1]];return Math.atan2(n,i)*180/Math.PI}function Ae(t,e){return Mt(e[1],e[0],yt)+Mt(t[1],t[0],yt)}function De(t,e){return Et(e[0],e[1],yt)/Et(t[0],t[1],yt)}var Me={mousedown:E,mousemove:Q,mouseup:d},Ye="mousedown",ke="mousemove mouseup";function xt(){this.evEl=Ye,this.evWin=ke,this.pressed=!1,O.apply(this,arguments)}y(xt,O,{handler:function(e){var s=Me[e.type];s&E&&e.button===0&&(this.pressed=!0),s&Q&&e.which!==1&&(s=d),this.pressed&&(s&d&&(this.pressed=!1),this.callback(this.manager,s,{pointers:[e],changedPointers:[e],pointerType:Dt,srcEvent:e}))}});var Ue={pointerdown:E,pointermove:Q,pointerup:d,pointercancel:C,pointerout:C},He={2:lt,3:Ie,4:Dt,5:Ce},ee="pointerdown",se="pointermove pointerup pointercancel";o.MSPointerEvent&&!o.PointerEvent&&(ee="MSPointerDown",se="MSPointerMove MSPointerUp MSPointerCancel");function Yt(){this.evEl=ee,this.evWin=se,O.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}y(Yt,O,{handler:function(e){var s=this.store,i=!1,n=e.type.toLowerCase().replace("ms",""),a=Ue[n],c=He[e.pointerType]||e.pointerType,g=c==lt,T=R(s,e.pointerId,"pointerId");a&E&&(e.button===0||g)?T<0&&(s.push(e),T=s.length-1):a&(d|C)&&(i=!0),!(T<0)&&(s[T]=e,this.callback(this.manager,a,{pointers:s,changedPointers:[e],pointerType:c,srcEvent:e}),i&&s.splice(T,1))}});var Re={touchstart:E,touchmove:Q,touchend:d,touchcancel:C},Le="touchstart",Fe="touchstart touchmove touchend touchcancel";function ie(){this.evTarget=Le,this.evWin=Fe,this.started=!1,O.apply(this,arguments)}y(ie,O,{handler:function(e){var s=Re[e.type];if(s===E&&(this.started=!0),!!this.started){var i=Ve.call(this,e,s);s&(d|C)&&i[0].length-i[1].length===0&&(this.started=!1),this.callback(this.manager,s,{pointers:i[0],changedPointers:i[1],pointerType:lt,srcEvent:e})}}});function Ve(t,e){var s=h(t.touches),i=h(t.changedTouches);return e&(d|C)&&(s=I(s.concat(i),"identifier",!0)),[s,i]}var Xe={touchstart:E,touchmove:Q,touchend:d,touchcancel:C},We="touchstart touchmove touchend touchcancel";function It(){this.evTarget=We,this.targetIds={},O.apply(this,arguments)}y(It,O,{handler:function(e){var s=Xe[e.type],i=je.call(this,e,s);i&&this.callback(this.manager,s,{pointers:i[0],changedPointers:i[1],pointerType:lt,srcEvent:e})}});function je(t,e){var s=h(t.touches),i=this.targetIds;if(e&(E|Q)&&s.length===1)return i[s[0].identifier]=!0,[s,s];var n,a,c=h(t.changedTouches),g=[],T=this.target;if(a=s.filter(function(x){return gt(x.target,T)}),e===E)for(n=0;n<a.length;)i[a[n].identifier]=!0,n++;for(n=0;n<c.length;)i[c[n].identifier]&&g.push(c[n]),e&(d|C)&&delete i[c[n].identifier],n++;if(g.length)return[I(a.concat(g),"identifier",!0),g]}var Be=2500,ne=25;function kt(){O.apply(this,arguments);var t=at(this.handler,this);this.touch=new It(this.manager,t),this.mouse=new xt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}y(kt,O,{handler:function(e,s,i){var n=i.pointerType==lt,a=i.pointerType==Dt;if(!(a&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)qe.call(this,s,i);else if(a&&ze.call(this,i))return;this.callback(e,s,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function qe(t,e){t&E?(this.primaryTouch=e.changedPointers[0].identifier,re.call(this,e)):t&(d|C)&&re.call(this,e)}function re(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var s={x:e.clientX,y:e.clientY};this.lastTouches.push(s);var i=this.lastTouches,n=function(){var a=i.indexOf(s);a>-1&&i.splice(a,1)};setTimeout(n,Be)}}function ze(t){for(var e=t.srcEvent.clientX,s=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var n=this.lastTouches[i],a=Math.abs(e-n.x),c=Math.abs(s-n.y);if(a<=ne&&c<=ne)return!0}return!1}var ae=Y(N.style,"touchAction"),oe=ae!==l,le="compute",ce="auto",Ut="manipulation",$="none",pt="pan-x",vt="pan-y",Ct=Ze();function Ht(t,e){this.manager=t,this.set(e)}Ht.prototype={set:function(t){t==le&&(t=this.compute()),oe&&this.manager.element.style&&Ct[t]&&(this.manager.element.style[ae]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return M(this.manager.recognizers,function(e){ot(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Ge(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,s=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var i=this.actions,n=S(i,$)&&!Ct[$],a=S(i,vt)&&!Ct[vt],c=S(i,pt)&&!Ct[pt];if(n){var g=t.pointers.length===1,T=t.distance<2,x=t.deltaTime<250;if(g&&T&&x)return}if(!(c&&a)&&(n||a&&s&L||c&&s&K))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function Ge(t){if(S(t,$))return $;var e=S(t,pt),s=S(t,vt);return e&&s?$:e||s?e?pt:vt:S(t,Ut)?Ut:ce}function Ze(){if(!oe)return!1;var t={},e=o.CSS&&o.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(s){t[s]=e?o.CSS.supports("touch-action",s):!0}),t}var Nt=1,b=2,st=4,G=8,j=G,dt=16,F=32;function B(t){this.options=w({},this.defaults,t||{}),this.id=Te(),this.manager=null,this.options.enable=_t(this.options.enable,!0),this.state=Nt,this.simultaneous={},this.requireFail=[]}B.prototype={defaults:{},set:function(t){return w(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(W(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=Pt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return W(t,"dropRecognizeWith",this)?this:(t=Pt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(W(t,"requireFailure",this))return this;var e=this.requireFail;return t=Pt(t,this),R(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(W(t,"dropRequireFailure",this))return this;t=Pt(t,this);var e=R(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,s=this.state;function i(n){e.manager.emit(n,t)}s<G&&i(e.options.event+he(s)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),s>=G&&i(e.options.event+he(s))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=F},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(F|Nt)))return!1;t++}return!0},recognize:function(t){var e=w({},t);if(!ot(this.options.enable,[this,e])){this.reset(),this.state=F;return}this.state&(j|dt|F)&&(this.state=Nt),this.state=this.process(e),this.state&(b|st|G|dt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function he(t){return t&dt?"cancel":t&G?"end":t&st?"move":t&b?"start":""}function ue(t){return t==ft?"down":t==ut?"up":t==ct?"left":t==ht?"right":""}function Pt(t,e){var s=e.manager;return s?s.get(t):t}function k(){B.apply(this,arguments)}y(k,B,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,s=t.eventType,i=e&(b|st),n=this.attrTest(t);return i&&(s&C||!n)?e|dt:i||n?s&d?e|G:e&b?e|st:b:F}});function wt(){k.apply(this,arguments),this.pX=null,this.pY=null}y(wt,k,{defaults:{event:"pan",threshold:10,pointers:1,direction:Zt},getTouchAction:function(){var t=this.options.direction,e=[];return t&L&&e.push(vt),t&K&&e.push(pt),e},directionTest:function(t){var e=this.options,s=!0,i=t.distance,n=t.direction,a=t.deltaX,c=t.deltaY;return n&e.direction||(e.direction&L?(n=a===0?Tt:a<0?ct:ht,s=a!=this.pX,i=Math.abs(t.deltaX)):(n=c===0?Tt:c<0?ut:ft,s=c!=this.pY,i=Math.abs(t.deltaY))),t.direction=n,s&&i>e.threshold&&n&e.direction},attrTest:function(t){return k.prototype.attrTest.call(this,t)&&(this.state&b||!(this.state&b)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=ue(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function Rt(){k.apply(this,arguments)}y(Rt,k,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[$]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&b)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function Lt(){B.apply(this,arguments),this._timer=null,this._input=null}y(Lt,B,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ce]},process:function(t){var e=this.options,s=t.pointers.length===e.pointers,i=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!i||!s||t.eventType&(d|C)&&!n)this.reset();else if(t.eventType&E)this.reset(),this._timer=D(function(){this.state=j,this.tryEmit()},e.time,this);else if(t.eventType&d)return j;return F},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===j&&(t&&t.eventType&d?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}});function Ft(){k.apply(this,arguments)}y(Ft,k,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[$]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&b)}});function Vt(){k.apply(this,arguments)}y(Vt,k,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:L|K,pointers:1},getTouchAction:function(){return wt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,s;return e&(L|K)?s=t.overallVelocity:e&L?s=t.overallVelocityX:e&K&&(s=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&P(s)>this.options.velocity&&t.eventType&d},emit:function(t){var e=ue(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function St(){B.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}y(St,B,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ut]},process:function(t){var e=this.options,s=t.pointers.length===e.pointers,i=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&E&&this.count===0)return this.failTimeout();if(i&&n&&s){if(t.eventType!=d)return this.failTimeout();var a=this.pTime?t.timeStamp-this.pTime<e.interval:!0,c=!this.pCenter||Et(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!c||!a?this.count=1:this.count+=1,this._input=t;var g=this.count%e.taps;if(g===0)return this.hasRequireFailures()?(this._timer=D(function(){this.state=j,this.tryEmit()},e.interval,this),b):j}return F},failTimeout:function(){return this._timer=D(function(){this.state=F},this.options.interval,this),F},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==j&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function q(t,e){return e=e||{},e.recognizers=_t(e.recognizers,q.defaults.preset),new Xt(t,e)}q.VERSION="2.0.7",q.defaults={domEvents:!1,touchAction:le,enable:!0,inputTarget:null,inputClass:null,preset:[[Ft,{enable:!1}],[Rt,{enable:!1},["rotate"]],[Vt,{direction:L}],[wt,{direction:L},["swipe"]],[St],[St,{event:"doubletap",taps:2},["tap"]],[Lt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Je=1,fe=2;function Xt(t,e){this.options=w({},q.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=Pe(this),this.touchAction=new Ht(this,this.options.touchAction),pe(this,!0),M(this.options.recognizers,function(s){var i=this.add(new s[0](s[1]));s[2]&&i.recognizeWith(s[2]),s[3]&&i.requireFailure(s[3])},this)}Xt.prototype={set:function(t){return w(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?fe:Je},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var s,i=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&j)&&(n=e.curRecognizer=null);for(var a=0;a<i.length;)s=i[a],e.stopped!==fe&&(!n||s==n||s.canRecognizeWith(n))?s.recognize(t):s.reset(),!n&&s.state&(b|st|G)&&(n=e.curRecognizer=s),a++}},get:function(t){if(t instanceof B)return t;for(var e=this.recognizers,s=0;s<e.length;s++)if(e[s].options.event==t)return e[s];return null},add:function(t){if(W(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(W(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,s=R(e,t);s!==-1&&(e.splice(s,1),this.touchAction.update())}return this},on:function(t,e){if(t!==l&&e!==l){var s=this.handlers;return M(et(t),function(i){s[i]=s[i]||[],s[i].push(e)}),this}},off:function(t,e){if(t!==l){var s=this.handlers;return M(et(t),function(i){e?s[i]&&s[i].splice(R(s[i],e),1):delete s[i]}),this}},emit:function(t,e){this.options.domEvents&&Qe(t,e);var s=this.handlers[t]&&this.handlers[t].slice();if(!(!s||!s.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<s.length;)s[i](e),i++}},destroy:function(){this.element&&pe(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function pe(t,e){var s=t.element;if(s.style){var i;M(t.options.cssProps,function(n,a){i=Y(s.style,a),e?(t.oldCssProps[i]=s.style[i],s.style[i]=n):s.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function Qe(t,e){var s=v.createEvent("Event");s.initEvent(t,!0,!0),s.gesture=e,e.target.dispatchEvent(s)}w(q,{INPUT_START:E,INPUT_MOVE:Q,INPUT_END:d,INPUT_CANCEL:C,STATE_POSSIBLE:Nt,STATE_BEGAN:b,STATE_CHANGED:st,STATE_ENDED:G,STATE_RECOGNIZED:j,STATE_CANCELLED:dt,STATE_FAILED:F,DIRECTION_NONE:Tt,DIRECTION_LEFT:ct,DIRECTION_RIGHT:ht,DIRECTION_UP:ut,DIRECTION_DOWN:ft,DIRECTION_HORIZONTAL:L,DIRECTION_VERTICAL:K,DIRECTION_ALL:Zt,Manager:Xt,Input:O,TouchAction:Ht,TouchInput:It,MouseInput:xt,PointerEventInput:Yt,TouchMouseInput:kt,SingleTouchInput:ie,Recognizer:B,AttrRecognizer:k,Tap:St,Pan:wt,Swipe:Vt,Pinch:Rt,Rotate:Ft,Press:Lt,on:tt,off:J,each:M,merge:bt,extend:mt,assign:w,inherit:y,bindFn:at,prefixed:Y});var Ke=typeof o<"u"?o:typeof self<"u"?self:{};Ke.Hammer=q,typeof l=="function"&&l.amd?l(function(){return q}):u.exports?u.exports=q:o[p]=q})(window,document,"Hammer")})(ge);var Cs=ge.exports;const Z=gs(Cs),Ns=u=>(ps("data-v-c62a35c7"),u=u(),vs(),u),Ps=["aria-hidden"],ws=Ns(()=>r("div",{class:"bottom-sheet__draggable-thumb"},null,-1)),Ss=[ws],Os=as({__name:"VueBottomSheet",props:{overlay:{type:Boolean,default:!0},overlayColor:{default:"#0000004D"},maxWidth:{default:640},maxHeight:{},transitionDuration:{default:.5},overlayClickClose:{type:Boolean,default:!0},canSwipe:{type:Boolean,default:!0}},emits:["opened","closed","dragging-up","dragging-down"],setup(u,{expose:o,emit:v}){const p=u;os(h=>({"5d2e8b30":bt.value,"75598e1f":p.overlayColor,"1ce344a2":ot.value,"4f86afe9":y.value,"54ab19e1":_t.value,"513024ee":at.value}));const l=U(!1),m=U(0),N=U(100),z=U(!1),A=U(0),P=U(null),f=U(null),D=U(null),W=U(null),M=U(null),rt=U(null),w=h=>document.activeElement===h;window.addEventListener("keyup",h=>{const I=P.value.contains(h.target)&&w(h.target);h.key==="Escape"&&!I&&S()});const mt=it(()=>["bottom-sheet__content",{"bottom-sheet__content--fullscreen":m.value>=window.innerHeight,"bottom-sheet__content--dragging":z.value}]),bt=it(()=>`${p.transitionDuration}s`),y=it(()=>m.value&&m.value>0?`${m.value+1}px`:"auto"),at=it(()=>p.maxHeight?`${p.maxHeight}px`:"inherit"),ot=it(()=>`${N.value}%`),_t=it(()=>`${p.maxWidth}px`),tt=async()=>{await ve(),m.value=f.value.offsetHeight+D.value.clientHeight+W.value.offsetHeight},J=(h,I)=>{if(p.canSwipe){z.value=!0;const Y=At=>{At.preventDefault()};h.deltaY>0&&(I==="main"&&h.type==="panup"&&(N.value=R(h.deltaY),h.cancelable&&D.value.addEventListener("touchmove",Y)),I==="main"&&h.type==="pandown"&&A.value===0&&(N.value=R(h.deltaY)),I==="area"&&(N.value=R(h.deltaY)),h.type==="panup"&&v("dragging-up"),h.type==="pandown"&&v("dragging-down")),h.isFinal&&(D.value.removeEventListener("touchmove",Y),I==="main"&&(A.value=D.value.scrollTop),z.value=!1,N.value>=10?S():N.value=0)}};ve(()=>{tt();const h=new Z(rt.value,{inputClass:Z.TouchMouseInput,recognizers:[[Z.Pan,{direction:Z.DIRECTION_VERTICAL}]]}),I=new Z(D.value,{inputClass:Z.TouchMouseInput,recognizers:[[Z.Pan,{direction:Z.DIRECTION_VERTICAL}]]});h.on("panstart panup pandown panend",Y=>{J(Y,"area")}),I.on("panstart panup pandown panend",Y=>{J(Y,"main")})});const gt=()=>{N.value=0,document.documentElement.style.overflowY="hidden",document.documentElement.style.overscrollBehavior="none",l.value=!0,v("opened")},S=async()=>{l.value=!1,N.value=100,setTimeout(()=>{document.documentElement.style.overflowY="auto",document.documentElement.style.overscrollBehavior="",v("closed")},p.transitionDuration*1e3)},et=()=>{p.overlayClickClose&&S()},R=h=>{const I=p.maxHeight&&p.maxHeight<=m.value?p.maxHeight:m.value;return h/I*100};return o({open:gt,close:S}),(h,I)=>(H(),ls(fs,{to:"body"},[r("div",{class:"bottom-sheet",ref_key:"bottomSheet",ref:P,"aria-hidden":!l.value,role:"dialog"},[nt(hs,null,{default:_e(()=>[qt(r("div",{onClick:et,class:"bottom-sheet__overlay"},null,512),[[cs,h.overlay&&l.value]])]),_:1}),r("div",{ref_key:"bottomSheetContent",ref:M,class:us(mt.value)},[r("header",{ref_key:"bottomSheetHeader",ref:f,class:"bottom-sheet__header"},[r("div",{class:"bottom-sheet__draggable-area",ref_key:"bottomSheetDraggableArea",ref:rt},Ss,512),Wt(h.$slots,"header",{},void 0,!0)],512),r("main",{ref_key:"bottomSheetMain",ref:D,class:"bottom-sheet__main"},[Wt(h.$slots,"default",{},void 0,!0)],512),r("footer",{ref_key:"bottomSheetFooter",ref:W,class:"bottom-sheet__footer"},[Wt(h.$slots,"footer",{},void 0,!0)],512)],2)],8,Ps)]))}}),bs=(u,o)=>{const v=u.__vccOpts||u;for(const[p,l]of o)v[p]=l;return v},As=bs(Os,[["__scopeId","data-v-c62a35c7"]]);const Ds={name:"SummaryView",components:{MenuBottomBar:$e,VueApexCharts:ts,VueBottomSheet:As},data(){return{state:ms("state"),data:[],chartOptions:{chart:{height:280,type:"radialBar"}},series:[],listMonth:me.listMonth(),listYear:me.listYear(),selectedMonth:null,selectedYear:null,summaryStore:es(),arrDetail:[]}},mounted(){this.state.Loading(),this.setNowMonth(),this.setNowYear(),this.fetch()},methods:{setNowMonth(){const u=new Date,o=u.getMonth();this.currentDate=u.toLocaleDateString(),this.selectedMonth=this.listMonth.find(v=>v.index===o+1)},setNowYear(){const o=new Date().getFullYear();this.selectedYear=o},detail(u){this.arrDetail=u,console.log(Object.keys(this.arrDetail).length),this.$refs.detail.open()},toDetailYear(u){this.$router.push({name:"summaryYearly",params:{year:u}})},async fetch(){await this.summaryStore.getMonthly({month:this.selectedMonth.index,year:this.selectedYear}),this.data=new Is(this.summaryStore.data),this.chartOptions={plotOptions:{radialBar:{hollow:{size:"60%"},dataLabels:{showOn:"always",name:{offsetY:-10,show:!0,color:"#ffffff",fontSize:"10px"},value:{offsetY:-5,color:"#ffffff",fontSize:"15px",show:!0}}}},stroke:{lineCap:"round"},labels:[this.data.percentase_hari],colors:["#ffffff"]},this.series=[parseFloat(this.data.percentase)]}}},Ms={class:"flex justify-center"},Ys={class:"w-full md:w-1/2 lg:w-1/3 h-screen overflow-auto lg:mb-20 md:pb-24"},ks={class:"flex flex-col pb-10 bg-blue-500 radius_bottom"},Us={class:"flex flex-row items-center justify-center w-full py-2 gap-x-4"},Hs=["value"],Rs=["value"],Ls={class:"flex flex-row pt-2"},Fs={class:"w-full"},Vs={class:"container flex flex-col w-full"},Xs={class:"flex flex-row justify-between"},Ws=r("p",{class:"text-white font-mulish"},"Hadir",-1),js={class:"text-white font-mulish"},Bs={class:"flex flex-row justify-between"},qs=r("p",{class:"text-white font-mulish"},"Izin",-1),zs={class:"text-white font-mulish"},Gs={class:"flex flex-row justify-between"},Zs=r("p",{class:"text-white font-mulish"},"Sakit",-1),Js={class:"text-white font-mulish"},Qs={class:"flex flex-row justify-between"},Ks=r("p",{class:"text-white font-mulish"},"Lain-Lain",-1),$s={class:"text-white font-mulish"},ti={class:"flex flex-row justify-between"},ei=r("p",{class:"text-white font-mulish"},"Terlambat",-1),si={class:"text-white font-mulish"},ii={class:"container flex flex-row justify-between"},ni=r("p",{class:"w-full text-white font-mulish"},"Presensi Tahun Ini",-1),ri={key:0,class:"container overflow-x-auto"},ai={class:"table table-zebra"},oi=r("thead",null,[r("tr",null,[r("th",{class:"text-sm text-black font-mulish text-bold"},"Tanggal"),r("th",{class:"text-sm text-black font-mulish text-bold"},"Datang"),r("th",{class:"text-sm text-black font-mulish text-bold"},"Pulang"),r("th")])],-1),li=["onClick"],ci={key:1,class:"flex items-center justify-center h-1/2"},hi={class:"flex flex-col"},ui=r("p",{class:"font-mulish text-primaryColors"},"Data Masih Kosong",-1),fi={key:0,class:"container"},pi={class:"flex flex-row justify-between"},vi={class:"text-lg text-black font-mulish text-bold"},di={class:"text-primaryColors font-mulish text-bold"},mi={class:"flex flex-row py-4 gap-x-20"},_i={class:"flex flex-col gap-y-2"},gi=r("p",{class:"text-xs uppercase font-mulish"},"jam datang",-1),Ti={class:"text-lg text-black uppercase font-mulish"},yi={class:"flex flex-col gap-y-2"},Ei=r("p",{class:"text-xs uppercase font-mulish"},"jam pulang",-1),xi={class:"text-lg text-black uppercase font-mulish"},Ii={class:"flex flex-row py-4 md:gap-x-12"},Ci={class:"flex flex-col gap-y-2"},Ni=r("p",{class:"text-xs font-mulish"},"Lokasi Datang",-1),Pi={class:"text-sm text-black uppercase font-mulish"},wi={class:"flex flex-col gap-y-2"},Si=r("p",{class:"text-xs uppercase font-mulish"},"Lokasi Pulang",-1),Oi={class:"text-sm text-black uppercase font-mulish"},bi={class:"flex flex-row py-4 gap-x-20"},Ai={class:"flex flex-col gap-y-2"},Di=r("p",{class:"text-xs font-mulish"},"Catatan Datang",-1),Mi={class:"text-sm text-black uppercase font-mulish"},Yi={class:"flex flex-col gap-y-2"},ki=r("p",{class:"text-xs uppercase font-mulish"},"Catatan Pulang",-1),Ui={class:"text-sm text-black uppercase font-mulish"};function Hi(u,o,v,p,l,m){const N=Ot("VueApexCharts"),z=Ot("font-awesome-icon"),A=Ot("MenuBottomBar"),P=Ot("vue-bottom-sheet");return H(),X("div",Ms,[r("div",Ys,[r("div",ks,[r("div",Us,[qt(r("select",{class:"w-2/5 text-white bg-blue-500 font-mulish","onUpdate:modelValue":o[0]||(o[0]=f=>l.selectedMonth=f)},[(H(!0),X(jt,null,Bt(l.listMonth,f=>(H(),X("option",{key:f,value:f},_(f.name),9,Hs))),128))],512),[[de,l.selectedMonth]]),qt(r("select",{class:"w-2/5 text-white bg-blue-500 font-mulish","onUpdate:modelValue":o[1]||(o[1]=f=>l.selectedYear=f)},[(H(!0),X(jt,null,Bt(l.listYear,f=>(H(),X("option",{key:f,value:f},_(f),9,Rs))),128))],512),[[de,l.selectedYear]])]),r("div",Ls,[r("div",Fs,[nt(N,{options:l.chartOptions,series:l.series,class:"w-full",type:"radialBar"},null,8,["options","series"])]),r("div",Vs,[r("div",Xs,[Ws,r("p",js,_(l.data.hadir),1)]),r("div",Bs,[qs,r("p",zs,_(l.data.ijin),1)]),r("div",Gs,[Zs,r("p",Js,_(l.data.sakit),1)]),r("div",Qs,[Ks,r("p",$s,_(l.data.lain),1)]),r("div",ti,[ei,r("p",si,_(l.data.terlambat),1)])])]),r("div",ii,[ni,r("button",{class:"flex flex-row items-center text-white gap-x-2",onClick:o[2]||(o[2]=f=>m.toDetailYear(l.selectedYear))},[r("p",null,_(l.data.hadir_tahun_ini),1),nt(z,{icon:["fas","chevron-right"]})])])]),l.data.rekap&&l.data.rekap.length>0?(H(),X("div",ri,[r("table",ai,[oi,r("tbody",null,[(H(!0),X(jt,null,Bt(l.data.rekap,f=>(H(),X("tr",{key:f},[r("th",null,_(f.hari),1),r("td",null,_(f.detail.jam_datang),1),r("td",null,_(f.detail.jam_pulang),1),r("td",null,[r("button",{class:"text-primaryColors",onClick:D=>m.detail(f)}," Detail ",8,li)])]))),128))])])])):(H(),X("div",ci,[r("div",hi,[nt(z,{icon:["far","circle-question"],size:"xl",class:"text-primaryColors"}),ui])])),nt(A),nt(P,{ref:"detail"},{default:_e(()=>[Object.keys(l.arrDetail).length>0?(H(),X("div",fi,[r("div",pi,[r("p",vi,_(l.arrDetail.hari),1),r("p",di,_(l.arrDetail.status),1)]),r("div",mi,[r("div",_i,[gi,r("p",Ti,_(l.arrDetail.detail.jam_datang),1)]),r("div",yi,[Ei,r("p",xi,_(l.arrDetail.detail.jam_pulang),1)])]),r("div",Ii,[r("div",Ci,[Ni,r("p",Pi,_(l.arrDetail.detail.lokasi_datang),1)]),r("div",wi,[Si,r("p",Oi,_(l.arrDetail.detail.lokasi_pulang),1)])]),r("div",bi,[r("div",Ai,[Di,r("p",Mi,_(l.arrDetail.detail.catatan_datang),1)]),r("div",Yi,[ki,r("p",Ui,_(l.arrDetail.detail.catatan_pulang),1)])])])):_s("",!0)]),_:1},512)])])}const Bi=ds(Ds,[["render",Hi]]);export{Bi as default};