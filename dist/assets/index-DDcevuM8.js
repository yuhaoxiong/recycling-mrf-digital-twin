var _m=Object.defineProperty;var gm=(n,e,t)=>e in n?_m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ct=(n,e,t)=>gm(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function su(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const wt={},bs=[],Si=()=>{},Qh=()=>!1,wa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ca=n=>n.startsWith("onUpdate:"),qt=Object.assign,ru=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vm=Object.prototype.hasOwnProperty,pt=(n,e)=>vm.call(n,e),je=Array.isArray,Qi=n=>_o(n)==="[object Map]",ha=n=>_o(n)==="[object Set]",ed=n=>_o(n)==="[object Date]",tt=n=>typeof n=="function",Nt=n=>typeof n=="string",Ti=n=>typeof n=="symbol",yt=n=>n!==null&&typeof n=="object",ef=n=>(yt(n)||tt(n))&&tt(n.then)&&tt(n.catch),tf=Object.prototype.toString,_o=n=>tf.call(n),xm=n=>_o(n).slice(8,-1),nf=n=>_o(n)==="[object Object]",ou=n=>Nt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$r=su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Em=/-\w/g,ni=Pa(n=>n.replace(Em,e=>e.slice(1).toUpperCase())),Sm=/\B([A-Z])/g,Ns=Pa(n=>n.replace(Sm,"-$1").toLowerCase()),sf=Pa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Za=Pa(n=>n?`on${sf(n)}`:""),_i=(n,e)=>!Object.is(n,e),Ja=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},rf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Mm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let td;const La=()=>td||(td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mi(n){if(je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Nt(i)?Am(i):Mi(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Nt(n)||yt(n))return n}const Tm=/;(?![^(]*\))/g,ym=/:([^]+)/,bm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Am(n){const e={};return n.replace(bm,t=>t.startsWith("/*")?"":t).split(Tm).forEach(t=>{if(t){const i=t.split(ym);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Cn(n){let e="";if(Nt(n))e=n;else if(je(n))for(let t=0;t<n.length;t++){const i=Cn(n[t]);i&&(e+=i+" ")}else if(yt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",wm=su(Rm);function of(n){return!!n||n===""}function Cm(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Ia(n[s],e[s],t);return i}function nd(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Ia(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Pm(n,e,t){let i=Qi(n),s=Qi(e);if(i||s||(i=ha(n),s=ha(e),i||s))return i&&s?nd(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Ia(n[a],e[a],t))return!1}return String(n)===String(e)}function id(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function Ia(n,e,t){if(n===e)return!0;let i=ed(n),s=ed(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=Ti(n),s=Ti(e),i||s?n===e:(i=je(n),s=je(e),i||s?i&&s?id(n,e,t,Cm):!1:(i=yt(n),s=yt(e),i||s?!i||!s?!1:id(n,e,t,Pm):String(n)===String(e))))}const af=n=>!!(n&&n.__v_isRef===!0),Re=n=>Nt(n)?n:n==null?"":je(n)||yt(n)&&(n.toString===tf||!tt(n.toString))?af(n)?Re(n.value):JSON.stringify(n,lf,2):String(n),lf=(n,e)=>af(e)?lf(n,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Qa(i,r)+" =>"]=s,t),{})}:ha(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Qa(t))}:Ti(e)?Qa(e):yt(e)&&!je(e)&&!nf(e)?String(e):e,Qa=(n,e="")=>{var t;return Ti(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class Lm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Yt&&(Yt.active?(this.parent=Yt,this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){++this._on===1&&(this.prevScope=Yt,Yt=this)}off(){if(this._on>0&&--this._on===0){if(Yt===this)Yt=this.prevScope;else{let e=Yt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Im(){return Yt}let At;const el=new WeakSet;class cf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&(Yt.active?Yt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,el.has(this)&&(el.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||df(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sd(this),hf(this);const e=At,t=ii;At=this,ii=!0;try{return this.fn()}finally{ff(this),At=e,ii=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cu(e);this.deps=this.depsTail=void 0,sd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?el.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zl(this)&&this.run()}get dirty(){return Zl(this)}}let uf=0,qr,jr;function df(n,e=!1){if(n.flags|=8,e){n.next=jr,jr=n;return}n.next=qr,qr=n}function au(){uf++}function lu(){if(--uf>0)return;if(jr){let e=jr;for(jr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qr;){let e=qr;for(qr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function hf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ff(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),cu(i),Dm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Zl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function pf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===to)||(n.globalVersion=to,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Zl(n))))return;n.flags|=2;const e=n.dep,t=At,i=ii;At=n,ii=!0;try{hf(n);const s=n.fn(n._value);(e.version===0||_i(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{At=t,ii=i,ff(n),n.flags&=-3}}function cu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)cu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Dm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ii=!0;const mf=[];function yi(){mf.push(ii),ii=!1}function bi(){const n=mf.pop();ii=n===void 0?!0:n}function sd(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=At;At=void 0;try{e()}finally{At=t}}}let to=0;class Om{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!ii||At===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==At)t=this.activeLink=new Om(At,this),At.deps?(t.prevDep=At.depsTail,At.depsTail.nextDep=t,At.depsTail=t):At.deps=At.depsTail=t,_f(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=At.depsTail,t.nextDep=void 0,At.depsTail.nextDep=t,At.depsTail=t,At.deps===t&&(At.deps=i)}return t}trigger(e){this.version++,to++,this.notify(e)}notify(e){au();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{lu()}}}function _f(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)_f(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Jl=new WeakMap,Cs=Symbol(""),Ql=Symbol(""),no=Symbol("");function Jt(n,e,t){if(ii&&At){let i=Jl.get(n);i||Jl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new uu),s.map=i,s.key=t),s.track()}}function Bi(n,e,t,i,s,r){const o=Jl.get(n);if(!o){to++;return}const a=l=>{l&&l.trigger()};if(au(),e==="clear")o.forEach(a);else{const l=je(n),c=l&&ou(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,h)=>{(h==="length"||h===no||!Ti(h)&&h>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(no)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Cs)),Qi(n)&&a(o.get(Ql)));break;case"delete":l||(a(o.get(Cs)),Qi(n)&&a(o.get(Ql)));break;case"set":Qi(n)&&a(o.get(Cs));break}}lu()}function zs(n){const e=vt(n);return e===n||(Jt(e,"iterate",no),Bn(n))?e:Ai(n)?es(n)?e.map(t=>ss(zn(t))):e.map(ss):e.map(zn)}function Da(n){return Jt(n=vt(n),"iterate",no),n}function hi(n,e){return Ai(n)?ss(es(n)?zn(e):e):zn(e)}const Nm={__proto__:null,[Symbol.iterator](){return tl(this,Symbol.iterator,n=>hi(this,n))},concat(...n){return zs(this).concat(...n.map(e=>je(e)?zs(e):e))},entries(){return tl(this,"entries",n=>(n[1]=hi(this,n[1]),n))},every(n,e){return Ci(this,"every",n,e,void 0,arguments)},filter(n,e){return Ci(this,"filter",n,e,t=>t.map(i=>hi(this,i)),arguments)},find(n,e){return Ci(this,"find",n,e,t=>hi(this,t),arguments)},findIndex(n,e){return Ci(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ci(this,"findLast",n,e,t=>hi(this,t),arguments)},findLastIndex(n,e){return Ci(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ci(this,"forEach",n,e,void 0,arguments)},includes(...n){return nl(this,"includes",n)},indexOf(...n){return nl(this,"indexOf",n)},join(n){return zs(this).join(n)},lastIndexOf(...n){return nl(this,"lastIndexOf",n)},map(n,e){return Ci(this,"map",n,e,void 0,arguments)},pop(){return Lr(this,"pop")},push(...n){return Lr(this,"push",n)},reduce(n,...e){return od(this,"reduce",n,e)},reduceRight(n,...e){return od(this,"reduceRight",n,e)},shift(){return Lr(this,"shift")},some(n,e){return Ci(this,"some",n,e,void 0,arguments)},splice(...n){return Lr(this,"splice",n)},toReversed(){return zs(this).toReversed()},toSorted(n){return zs(this).toSorted(n)},toSpliced(...n){return zs(this).toSpliced(...n)},unshift(...n){return Lr(this,"unshift",n)},values(){return tl(this,"values",n=>hi(this,n))}};function tl(n,e,t){const i=Da(n),s=i[e],r=s.call(i);if(i!==n&&!Bn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>rd(r.next(),t),s!==gf[e]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>rd(r._next(),t)}return r}function rd(n,e){return n.done||(n.value=e(n.value)),n}const gf=Array.prototype;function Ci(n,e,t,i,s,r){const o=Da(n),a=o!==n&&!Bn(n),l=o[e];if(l!==gf[e]){const d=l.apply(n,r);return a?zn(d):d}let c=t;o!==n&&(a?c=function(d,h){return t.call(this,hi(n,d),h,n)}:t.length>2&&(c=function(d,h){return t.call(this,d,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function od(n,e,t,i){const s=Da(n),r=s!==n&&!Bn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=hi(n,c)),t.call(this,c,hi(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](o,...i);return a?hi(n,l):l}function nl(n,e,t){const i=vt(n);Jt(i,"iterate",no);const s=i[e](...t);return(s===-1||s===!1)&&pu(t[0])?(t[0]=vt(t[0]),i[e](...t)):s}function Lr(n,e,t=[]){yi(),au();const i=vt(n)[e].apply(n,t);return lu(),bi(),i}const Um=su("__proto__,__v_isRef,__isVue"),vf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ti));function Fm(n){Ti(n)||(n=String(n));const e=vt(this);return Jt(e,"has",n),e.hasOwnProperty(n)}class xf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Km:Tf:r?Mf:Sf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=je(e);if(!s){let l;if(o&&(l=Nm[t]))return l;if(t==="hasOwnProperty")return Fm}const a=Reflect.get(e,t,en(e)?e:i);if((Ti(t)?vf.has(t):Um(t))||(s||Jt(e,"get",t),r))return a;if(en(a)){const l=o&&ou(t)?a:a.value;return s&&yt(l)?tc(l):l}return yt(a)?s?tc(a):hu(a):a}}class Ef extends xf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=je(e)&&ou(t);if(!this._isShallow){const c=Ai(r);if(!Bn(i)&&!Ai(i)&&(r=vt(r),i=vt(i)),!o&&en(r)&&!en(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:pt(e,t),l=Reflect.set(e,t,i,en(e)?e:s);return e===vt(s)&&l&&(a?_i(i,r)&&Bi(e,"set",t,i):Bi(e,"add",t,i)),l}deleteProperty(e,t){const i=pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Bi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Ti(t)||!vf.has(t))&&Jt(e,"has",t),i}ownKeys(e){return Jt(e,"iterate",je(e)?"length":Cs),Reflect.ownKeys(e)}}class Bm extends xf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const km=new Ef,zm=new Bm,Hm=new Ef(!0);const ec=n=>n,Ao=n=>Reflect.getPrototypeOf(n);function Gm(n,e,t){return function(...i){const s=this.__v_raw,r=vt(s),o=Qi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?ec:e?ss:zn;return!e&&Jt(r,"iterate",l?Ql:Cs),qt(Object.create(c),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}}})}}function Ro(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Vm(n,e){const t={get(s){const r=this.__v_raw,o=vt(r),a=vt(s);n||(_i(s,a)&&Jt(o,"get",s),Jt(o,"get",a));const{has:l}=Ao(o),c=e?ec:n?ss:zn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Jt(vt(s),"iterate",Cs),s.size},has(s){const r=this.__v_raw,o=vt(r),a=vt(s);return n||(_i(s,a)&&Jt(o,"has",s),Jt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=vt(a),c=e?ec:n?ss:zn;return!n&&Jt(l,"iterate",Cs),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return qt(t,n?{add:Ro("add"),set:Ro("set"),delete:Ro("delete"),clear:Ro("clear")}:{add(s){const r=vt(this),o=Ao(r),a=vt(s),l=!e&&!Bn(s)&&!Ai(s)?a:s;return o.has.call(r,l)||_i(s,l)&&o.has.call(r,s)||_i(a,l)&&o.has.call(r,a)||(r.add(l),Bi(r,"add",l,l)),this},set(s,r){!e&&!Bn(r)&&!Ai(r)&&(r=vt(r));const o=vt(this),{has:a,get:l}=Ao(o);let c=a.call(o,s);c||(s=vt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?_i(r,u)&&Bi(o,"set",s,r):Bi(o,"add",s,r),this},delete(s){const r=vt(this),{has:o,get:a}=Ao(r);let l=o.call(r,s);l||(s=vt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Bi(r,"delete",s,void 0),c},clear(){const s=vt(this),r=s.size!==0,o=s.clear();return r&&Bi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Gm(s,n,e)}),t}function du(n,e){const t=Vm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?e:s==="__v_raw"?i:Reflect.get(pt(t,s)&&s in i?t:i,s,r)}const Wm={get:du(!1,!1)},Xm={get:du(!1,!0)},Ym={get:du(!0,!1)};const Sf=new WeakMap,Mf=new WeakMap,Tf=new WeakMap,Km=new WeakMap;function $m(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hu(n){return Ai(n)?n:fu(n,!1,km,Wm,Sf)}function qm(n){return fu(n,!1,Hm,Xm,Mf)}function tc(n){return fu(n,!0,zm,Ym,Tf)}function fu(n,e,t,i,s){if(!yt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=$m(xm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function es(n){return Ai(n)?es(n.__v_raw):!!(n&&n.__v_isReactive)}function Ai(n){return!!(n&&n.__v_isReadonly)}function Bn(n){return!!(n&&n.__v_isShallow)}function pu(n){return n?!!n.__v_raw:!1}function vt(n){const e=n&&n.__v_raw;return e?vt(e):n}function jm(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&rf(n,"__v_skip",!0),n}const zn=n=>yt(n)?hu(n):n,ss=n=>yt(n)?tc(n):n;function en(n){return n?n.__v_isRef===!0:!1}function ln(n){return yf(n,!1)}function Zm(n){return yf(n,!0)}function yf(n,e){return en(n)?n:new Jm(n,e)}class Jm{constructor(e,t){this.dep=new uu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:vt(e),this._value=t?e:zn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Bn(e)||Ai(e);e=i?e:vt(e),_i(e,t)&&(this._rawValue=e,this._value=i?e:zn(e),this.dep.trigger())}}function Qt(n){return en(n)?n.value:n}const Qm={get:(n,e,t)=>e==="__v_raw"?n:Qt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return en(s)&&!en(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function bf(n){return es(n)?n:new Proxy(n,Qm)}class e0{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new uu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return df(this,!0),!0}get value(){const e=this.dep.track();return pf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function t0(n,e,t=!1){let i,s;return tt(n)?i=n:(i=n.get,s=n.set),new e0(i,s,t)}const wo={},fa=new WeakMap;let Ss;function n0(n,e=!1,t=Ss){if(t){let i=fa.get(t);i||fa.set(t,i=[]),i.push(n)}}function i0(n,e,t=wt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=x=>s?x:Bn(x)||s===!1||s===0?ji(x,1):ji(x);let u,d,h,f,_=!1,v=!1;if(en(n)?(d=()=>n.value,_=Bn(n)):es(n)?(d=()=>c(n),_=!0):je(n)?(v=!0,_=n.some(x=>es(x)||Bn(x)),d=()=>n.map(x=>{if(en(x))return x.value;if(es(x))return c(x);if(tt(x))return l?l(x,2):x()})):tt(n)?e?d=l?()=>l(n,2):n:d=()=>{if(h){yi();try{h()}finally{bi()}}const x=Ss;Ss=u;try{return l?l(n,3,[f]):n(f)}finally{Ss=x}}:d=Si,e&&s){const x=d,D=s===!0?1/0:s;d=()=>ji(x(),D)}const m=Im(),p=()=>{u.stop(),m&&m.active&&ru(m.effects,u)};if(r&&e){const x=e;e=(...D)=>{try{return x(...D)}finally{p()}}}let T=v?new Array(n.length).fill(wo):wo;const M=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const D=u.run();if(x||s||_||(v?D.some((R,C)=>_i(R,T[C])):_i(D,T))){const R=Ss;yi();try{h&&h(),Ss=u;const C=[D,T===wo?void 0:v&&T[0]===wo?[]:T,f];T=D,l?l(e,3,C):e(...C)}finally{Ss=R,bi()}}}else u.run()};return a&&a(M),u=new cf(d),u.scheduler=o?()=>o(M,!1):M,f=x=>n0(x,!1,u),h=u.onStop=()=>{const x=fa.get(u);if(x){if(l)l(x,4);else for(const D of x)D();fa.delete(u)}},e?i?M(!0):T=u.run():o?o(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ji(n,e=1/0,t){if(e<=0||!yt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,en(n))ji(n.value,e,t);else if(je(n))for(let i=0;i<n.length;i++)ji(n[i],e,t);else if(ha(n)||Qi(n))n.forEach(i=>{ji(i,e,t)});else if(nf(n)){for(const i in n)ji(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ji(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function go(n,e,t,i){try{return i?n(...i):n()}catch(s){Oa(s,e,t)}}function si(n,e,t,i){if(tt(n)){const s=go(n,e,t,i);return s&&ef(s)&&s.catch(r=>{Oa(r,e,t)}),s}if(je(n)){const s=[];for(let r=0;r<n.length;r++)s.push(si(n[r],e,t,i));return s}}function Oa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||wt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){yi(),go(r,null,10,[n,l,c]),bi();return}}s0(n,t,s,i,o)}function s0(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const dn=[];let $n=-1;const fi=[];let $i=null,rr=0;const Af=Promise.resolve();let pa=null;function r0(n){const e=pa||Af;return n?e.then(this?n.bind(this):n):e}function o0(n){let e=$n+1,t=dn.length;for(;e<t;){const i=e+t>>>1,s=dn[i],r=io(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function mu(n){if(!(n.flags&1)){const e=io(n),t=dn[dn.length-1];!t||!(n.flags&2)&&e>=io(t)?dn.push(n):dn.splice(o0(e),0,n),n.flags|=1,Rf()}}function Rf(){pa||(pa=Af.then(Pf))}function a0(n){if(!je(n))$i&&n.id===-1?$i.splice(rr+1,0,n):n.flags&1||(fi.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)fi.push(n[e]);Rf()}function wf(n,e,t,i=$n+1){for(;i<dn.length;i++){const s=dn[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||e!==void 0&&!(s.id>=e))continue;dn.splice(i,1),i=n?i-1:$n,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Cf(n,e,t=0){if(fi.length){let i=fi,s=0;if(e){i=[];for(let o=0;o<fi.length;o++){const a=fi[o];(a.i!==void 0?!a.i||a.i.uid<t:e.has(a))?fi[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>io(o)-io(a));if(fi.length=s,$i){for(let o=0;o<r.length;o++)$i.push(r[o]);return}for($i=r,rr=0;rr<$i.length;rr++){const o=$i[rr];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}$i=null,rr=0}}let il=!1;function l0(n,e){if(il){n();return}const t=e===void 0?void 0:new Set(fi);n(),il=!0;try{wf(void 0,e),Cf(void 0,t,e)}finally{il=!1}}const io=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Pf(n){try{for($n=0;$n<dn.length;$n++){const e=dn[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),go(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<dn.length;$n++){const e=dn[$n];e&&(e.flags&=-2)}$n=-1,dn.length=0,Cf(),pa=null,(dn.length||fi.length)&&Pf()}}let vi=null,Lf=null;function ma(n){const e=vi;return vi=n,Lf=n&&n.type.__scopeId||null,e}function c0(n,e=vi,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&gd(-1);const r=ma(e),o=Ps.length;let a;try{a=n(...s)}finally{for(let l=Ps.length;l>o;l--)np();ma(r),i._d&&gd(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function us(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(yi(),si(l,t,8,[n.el,a,n,e]),bi())}}function If(n,e){if(pn){let t=pn.provides;const i=pn.parent&&pn.parent.provides;i===t&&(t=pn.provides=Object.create(i)),t[n]=e}}function Zr(n,e,t=!1){const i=r_();if(i||fr){let s=fr?fr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&tt(e)?e.call(i&&i.proxy):e}}const u0=Symbol.for("v-scx"),d0=()=>Zr(u0);function As(n,e,t){return Df(n,e,t)}function Df(n,e,t=wt){const{immediate:i,deep:s,flush:r,once:o}=t,a=qt({},t),l=e&&i||!e&&r!=="post";let c;if(oo){if(r==="sync"){const f=d0();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Si,f.resume=Si,f.pause=Si,f}}const u=pn;a.call=(f,_,v)=>si(f,u,_,v);let d=!1;r==="post"?a.scheduler=f=>{f.i=u,xn(f,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(f,_)=>{_?f():mu(f)}),a.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const h=i0(n,e,a);return oo&&(c?c.push(h):l&&h()),h}function h0(n,e,t){const i=this.proxy,s=Nt(n)?n.includes(".")?Of(i,n):()=>i[n]:n.bind(i,i);let r;tt(e)?r=e:(r=e.handler,t=e);const o=vo(this),a=Df(s,r.bind(i),t);return o(),a}function Of(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const f0=Symbol("_vte"),Na=n=>n.__isTeleport,sl=Symbol("_leaveCb");function p0(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==ri){e=t;break}}return e}function Nf(n){if(!_u(n))return Na(n.type)&&n.children?p0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&tt(t.default))return t.default()}}function _a(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;_a(Na(t.type)&&Nf(t)||t,e)}else if(n.shapeFlag&128)n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback);else if(n.transition=e,n.type===mt&&je(n.children)){const t=Vf(n.children,!1);t&&_a(t,e)}}function nc(n){if(n.component)return nc(n.component.subTree);if(n.type===mt){const e=je(n.children)&&Vf(n.children,!1);return e?nc(e):void 0}if(n.type!==ri)return n}function Us(n,e){return tt(n)?qt({name:n.name},e,{setup:n}):n}function Uf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ad(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ga=new WeakMap;function Jr(n,e,t,i,s=!1){if(je(n)){n.forEach((v,m)=>Jr(v,e&&(je(e)?e[m]:e),t,i,s));return}if(Qr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Jr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Eu(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===wt?a.refs={}:a.refs,d=a.setupState,h=vt(d),f=d===wt?Qh:v=>ad(u,v)?!1:pt(h,v),_=(v,m)=>!(m&&ad(u,m));if(c!=null&&c!==l){if(ld(e),Nt(c))u[c]=null,f(c)&&(d[c]=null);else if(en(c)){const v=e;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(tt(l))go(l,a,12,[o,u]);else{const v=Nt(l),m=en(l);if(v||m){const p=()=>{if(n.f){const T=v?f(l)?d[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)je(T)&&ru(T,r);else if(je(T))T.includes(r)||T.push(r);else if(v)u[l]=[r],f(l)&&(d[l]=u[l]);else{const M=[r];_(l,n.k)&&(l.value=M),n.k&&(u[n.k]=M)}}else v?(u[l]=o,f(l)&&(d[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const T=()=>{p(),ga.delete(n)};T.id=-1,ga.set(n,T),xn(T,t)}else ld(n),p()}}}function ld(n){const e=ga.get(n);e&&(e.flags|=8,ga.delete(n))}La().requestIdleCallback;La().cancelIdleCallback;const Qr=n=>!!n.type.__asyncLoader,_u=n=>n.type.__isKeepAlive;function m0(n,e){Ff(n,"a",e)}function _0(n,e){Ff(n,"da",e)}function Ff(n,e,t=pn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ua(e,i,t),t){let s=t.parent;for(;s&&s.parent;)_u(s.parent.vnode)&&g0(i,e,t,s),s=s.parent}}function g0(n,e,t,i){const s=Ua(e,n,i,!0);Bf(()=>{ru(i[e],s)},t)}function Ua(n,e,t=pn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{yi();const a=vo(t),l=si(e,t,n,o);return a(),bi(),l});return i?s.unshift(r):s.push(r),r}}const Hi=n=>(e,t=pn)=>{(!oo||n==="sp")&&Ua(n,(...i)=>e(...i),t)},v0=Hi("bm"),Fa=Hi("m"),x0=Hi("bu"),E0=Hi("u"),Ba=Hi("bum"),Bf=Hi("um"),S0=Hi("sp"),M0=Hi("rtg"),T0=Hi("rtc");function y0(n,e=pn){Ua("ec",n,e)}const b0=Symbol.for("v-ndc");function $t(n,e,t,i){let s;const r=t,o=je(n);if(o||Nt(n)){const a=o&&es(n);let l=!1,c=!1;a&&(l=!Bn(n),c=Ai(n),n=Da(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?ss(zn(n[u])):zn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(yt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const ic=n=>n?op(n)?Eu(n):ic(n.parent):null,eo=qt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ic(n.parent),$root:n=>ic(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>zf(n),$forceUpdate:n=>n.f||(n.f=()=>{mu(n.update)}),$nextTick:n=>n.n||(n.n=r0.bind(n.proxy)),$watch:n=>h0.bind(n)}),rl=(n,e)=>n!==wt&&!n.__isScriptSetup&&pt(n,e),A0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(rl(i,e))return o[e]=1,i[e];if(s!==wt&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(t!==wt&&pt(t,e))return o[e]=4,t[e];sc&&(o[e]=0)}}const c=eo[e];let u,d;if(c)return e==="$attrs"&&Jt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==wt&&pt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,pt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return rl(s,e)?(s[e]=t,!0):i!==wt&&pt(i,e)?(i[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==wt&&a[0]!=="$"&&pt(n,a)||rl(e,a)||pt(r,a)||pt(i,a)||pt(eo,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cd(n){return je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let sc=!0;function R0(n){const e=zf(n),t=n.proxy,i=n.ctx;sc=!1,e.beforeCreate&&ud(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:M,unmounted:x,render:D,renderTracked:R,renderTriggered:C,errorCaptured:L,serverPrefetch:y,expose:E,inheritAttrs:w,components:U,directives:V,filters:te}=e;if(c&&w0(c,i,null),o)for(const $ in o){const X=o[$];tt(X)&&(i[$]=X.bind(t))}if(s){const $=s.call(t,t);yt($)&&(n.data=hu($))}if(sc=!0,r)for(const $ in r){const X=r[$],ge=tt(X)?X.bind(t,t):tt(X.get)?X.get.bind(t,t):Si,we=!tt(X)&&tt(X.set)?X.set.bind(t):Si,Ie=cn({get:ge,set:we});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:Xe=>Ie.value=Xe})}if(a)for(const $ in a)kf(a[$],i,t,$);if(l){const $=tt(l)?l.call(t):l;Reflect.ownKeys($).forEach(X=>{If(X,$[X])})}u&&ud(u,n,"c");function k($,X){je(X)?X.forEach(ge=>$(ge.bind(t))):X&&$(X.bind(t))}if(k(v0,d),k(Fa,h),k(x0,f),k(E0,_),k(m0,v),k(_0,m),k(y0,L),k(T0,R),k(M0,C),k(Ba,T),k(Bf,x),k(S0,y),je(E))if(E.length){const $=n.exposed||(n.exposed={});E.forEach(X=>{Object.defineProperty($,X,{get:()=>t[X],set:ge=>t[X]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});D&&n.render===Si&&(n.render=D),w!=null&&(n.inheritAttrs=w),U&&(n.components=U),V&&(n.directives=V),y&&Uf(n)}function w0(n,e,t=Si){je(n)&&(n=rc(n));for(const i in n){const s=n[i];let r;yt(s)?"default"in s?r=Zr(s.from||i,s.default,!0):r=Zr(s.from||i):r=Zr(s),en(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ud(n,e,t){si(je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function kf(n,e,t,i){let s=i.includes(".")?Of(t,i):()=>t[i];if(Nt(n)){const r=e[n];tt(r)&&As(s,r)}else if(tt(n))As(s,n.bind(t));else if(yt(n))if(je(n))n.forEach(r=>kf(r,e,t,i));else{const r=tt(n.handler)?n.handler.bind(t):e[n.handler];tt(r)&&As(s,r,n)}}function zf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>va(l,c,o,!0)),va(l,e,o)),yt(e)&&r.set(e,l),l}function va(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&va(n,r,t,!0),s&&s.forEach(o=>va(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=C0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const C0={data:dd,props:hd,emits:hd,methods:Gr,computed:Gr,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Gr,directives:Gr,watch:L0,provide:dd,inject:P0};function dd(n,e){return e?n?function(){return qt(tt(n)?n.call(this,this):n,tt(e)?e.call(this,this):e)}:e:n}function P0(n,e){return Gr(rc(n),rc(e))}function rc(n){if(je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function rn(n,e){return n?[...new Set([].concat(n,e))]:e}function Gr(n,e){return n?qt(Object.create(null),n,e):e}function hd(n,e){return n?je(n)&&je(e)?[...new Set([...n,...e])]:qt(Object.create(null),cd(n),cd(e??{})):e}function L0(n,e){if(!n)return e;if(!e)return n;const t=qt(Object.create(null),n);for(const i in e)t[i]=rn(n[i],e[i]);return t}function Hf(){return{app:null,config:{isNativeTag:Qh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let I0=0;function D0(n,e){return function(i,s=null){tt(i)||(i=qt({},i)),s!=null&&!yt(s)&&(s=null);const r=Hf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:I0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:d_,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&tt(u.install)?(o.add(u),u.install(c,...d)):tt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const f=c._ceVNode||hn(i,s);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(f,u,h),l=!0,c._container=u,u.__vue_app__=c,Eu(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(si(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=fr;fr=c;try{return u()}finally{fr=d}}};return c}}let fr=null;const O0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ni(e)}Modifiers`]||n[`${Ns(e)}Modifiers`];function N0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||wt;let s=t;const r=e.startsWith("update:"),o=r&&O0(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Nt(u)?u.trim():u)),o.number&&(s=s.map(Mm)));let a,l=i[a=Za(e)]||i[a=Za(ni(e))];!l&&r&&(l=i[a=Za(Ns(e))]),l&&si(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,si(c,n,6,s)}}const U0=new WeakMap;function Gf(n,e,t=!1){const i=t?U0:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!tt(n)){const l=c=>{const u=Gf(c,e,!0);u&&(a=!0,qt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(yt(n)&&i.set(n,null),null):(je(r)?r.forEach(l=>o[l]=null):qt(o,r),yt(n)&&i.set(n,o),o)}function ka(n,e){return!n||!wa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,Ns(e))||pt(n,e))}function fd(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:f,ctx:_,inheritAttrs:v}=n,m=ma(n);let p,T;try{if(t.shapeFlag&4){const x=s||i,D=x;p=pi(c.call(D,x,u,d,f,h,_)),T=a}else{const x=e;p=pi(x.length>1?x(d,{attrs:a,slots:o,emit:l}):x(d,null)),T=e.props?a:F0(a)}}catch(x){Ps.length=0,Oa(x,n,1),p=hn(ri)}let M=p;if(T&&v!==!1){const x=Object.keys(T),{shapeFlag:D}=M;x.length&&D&7&&(r&&x.some(Ca)&&(T=B0(T,r)),M=Er(M,T,!1,!0))}if(t.dirs&&(M=Er(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition){const x=Na(M.type)&&Nf(M)||M;_a(x,t.transition)}return p=M,ma(m),p}function Vf(n,e=!0){let t;for(let i=0;i<n.length;i++){const s=n[i];if(xu(s)){if(s.type!==ri||s.children==="v-if"){if(t)return;t=s}}else return}return t}const F0=n=>{let e;for(const t in n)(t==="class"||t==="style"||wa(t))&&((e||(e={}))[t]=n[t]);return e},B0=(n,e)=>{const t={};for(const i in n)(!Ca(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function k0(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?pd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(Wf(o,i,h)&&!ka(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?pd(i,o,c):!0:!!o;return!1}function pd(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!pt(n,r)||Wf(e,n,r)&&!ka(t,r))return!0}return!1}function Wf(n,e,t){const i=n[t],s=e[t];return t==="style"&&yt(i)&&yt(s)?!Ia(i,s):i!==s}function z0({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Xf={},Yf=()=>Object.create(Xf),Kf=n=>Object.getPrototypeOf(n)===Xf;function H0(n,e,t,i=!1){const s={},r=Yf();n.propsDefaults=Object.create(null),$f(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:qm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function G0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=vt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(ka(n.emitsOptions,h))continue;const f=e[h];if(l)if(pt(r,h))f!==r[h]&&(r[h]=f,c=!0);else{const _=ni(h);s[_]=oc(l,a,_,f,n,!1)}else f!==r[h]&&(r[h]=f,c=!0)}}}else{$f(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!pt(e,d)&&((u=Ns(d))===d||!pt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=oc(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!pt(e,d))&&(delete r[d],c=!0)}c&&Bi(n.attrs,"set","")}function $f(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if($r(l))continue;const c=e[l];let u;s&&pt(s,u=ni(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ka(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=vt(t),c=a||wt;for(let u=0;u<r.length;u++){const d=r[u];t[d]=oc(s,l,d,c[d],n,!pt(c,d))}}return o}function oc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&tt(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=vo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ns(t))&&(i=!0))}return i}const V0=new WeakMap;function qf(n,e,t=!1){const i=t?V0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!tt(n)){const u=d=>{l=!0;const[h,f]=qf(d,e,!0);qt(o,h),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return yt(n)&&i.set(n,bs),bs;if(je(r))for(let u=0;u<r.length;u++){const d=ni(r[u]);md(d)&&(o[d]=wt)}else if(r)for(const u in r){const d=ni(u);if(md(d)){const h=r[u],f=o[d]=je(h)||tt(h)?{type:h}:qt({},h),_=f.type;let v=!1,m=!0;if(je(_))for(let p=0;p<_.length;++p){const T=_[p],M=tt(T)&&T.name;if(M==="Boolean"){v=!0;break}else M==="String"&&(m=!1)}else v=tt(_)&&_.name==="Boolean";f[0]=v,f[1]=m,(v||pt(f,"default"))&&a.push(d)}}const c=[o,a];return yt(n)&&i.set(n,c),c}function md(n){return n[0]!=="$"&&!$r(n)}const gu=n=>n==="_"||n==="_ctx"||n==="$stable",vu=n=>je(n)?n.map(pi):[pi(n)],W0=(n,e,t)=>{if(e._n)return e;const i=c0((...s)=>vu(e(...s)),t);return i._c=!1,i},jf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(gu(s))continue;const r=n[s];if(tt(r))e[s]=W0(s,r,i);else if(r!=null){const o=vu(r);e[s]=()=>o}}},Zf=(n,e)=>{const t=vu(e);n.slots.default=()=>t},Jf=(n,e,t)=>{for(const i in e)(t||!gu(i))&&(n[i]=e[i])},X0=(n,e,t)=>{const i=n.slots=Yf();if(n.vnode.shapeFlag&32){const s=e._;s?(Jf(i,e,t),t&&rf(i,"_",s,!0)):jf(e,i)}else e&&Zf(n,e)},Y0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=wt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Jf(s,e,t):(r=!e.$stable,jf(e,s)),o=e}else e&&(Zf(n,e),o={default:1});if(r)for(const a in s)!gu(a)&&o[a]==null&&delete s[a]},xn=Z0;function K0(n){return $0(n)}function $0(n,e){const t=La();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=Si,insertStaticContent:_}=n,v=(P,I,W,b=null,ie=null,ee=null,ae=void 0,Q=null,re=!!I.dynamicChildren)=>{if(P===I)return;P&&!Ir(P,I)&&(b=Me(P),Xe(P,ie,ee,!0),P=null),I.patchFlag===-2&&(re=!1,I.dynamicChildren=null),I.dynamicChildren&&P&&P.dynamicChildren&&P.dynamicChildren.hasOnce&&(I.dynamicChildren===bs&&(I.dynamicChildren=[]),I.dynamicChildren.hasOnce=!0);const{type:Y,ref:ue,shapeFlag:he}=I;switch(Y){case za:m(P,I,W,b);break;case ri:p(P,I,W,b);break;case al:P==null&&T(I,W,b,ae);break;case mt:U(P,I,W,b,ie,ee,ae,Q,re);break;default:he&1?D(P,I,W,b,ie,ee,ae,Q,re):he&6?V(P,I,W,b,ie,ee,ae,Q,re):(he&64||he&128)&&Y.process(P,I,W,b,ie,ee,ae,Q,re,st)}ue!=null&&ie?Jr(ue,P&&P.ref,ee,I||P,!I):ue==null&&P&&P.ref!=null&&Jr(P.ref,null,ee,P,!0)},m=(P,I,W,b)=>{if(P==null)i(I.el=a(I.children),W,b);else{const ie=I.el=P.el;I.children!==P.children&&c(ie,I.children)}},p=(P,I,W,b)=>{P==null?i(I.el=l(I.children||""),W,b):I.el=P.el},T=(P,I,W,b)=>{[P.el,P.anchor]=_(P.children,I,W,b,P.el,P.anchor)},M=({el:P,anchor:I},W,b)=>{let ie;for(;P&&P!==I;)ie=h(P),i(P,W,b),P=ie;i(I,W,b)},x=({el:P,anchor:I})=>{let W;for(;P&&P!==I;)W=h(P),s(P),P=W;s(I)},D=(P,I,W,b,ie,ee,ae,Q,re)=>{if(I.type==="svg"?ae="svg":I.type==="math"&&(ae="mathml"),P==null)R(I,W,b,ie,ee,ae,Q,re);else{const Y=P.el&&P.el._isVueCE?P.el:null;try{Y&&Y._beginPatch(),y(P,I,ie,ee,ae,Q,re)}finally{Y&&Y._endPatch()}}},R=(P,I,W,b,ie,ee,ae,Q)=>{let re,Y;const{props:ue,shapeFlag:he,transition:A,dirs:g}=P;if(re=P.el=o(P.type,ee,ue&&ue.is,ue),he&8?u(re,P.children):he&16&&L(P.children,re,null,b,ie,ol(P,ee),ae,Q),g&&us(P,null,b,"created"),C(re,P,P.scopeId,ae,b),ue){for(const Z in ue)Z!=="value"&&!$r(Z)&&r(re,Z,null,ue[Z],ee,b);"value"in ue&&r(re,"value",null,ue.value,ee),(Y=ue.onVnodeBeforeMount)&&ci(Y,b,P)}g&&us(P,null,b,"beforeMount");const F=q0(ie,A);F&&A.beforeEnter(re),i(re,I,W),((Y=ue&&ue.onVnodeMounted)||F||g)&&xn(()=>{try{Y&&ci(Y,b,P),F&&A.enter(re),g&&us(P,null,b,"mounted")}finally{}},ie)},C=(P,I,W,b,ie)=>{if(W&&f(P,W),b)for(let ee=0;ee<b.length;ee++)f(P,b[ee]);if(ie){let ee=ie.subTree;if(I===ee||tp(ee.type)&&(ee.ssContent===I||ee.ssFallback===I)){const ae=ie.vnode;C(P,ae,ae.scopeId,ae.slotScopeIds,ie.parent)}}},L=(P,I,W,b,ie,ee,ae,Q,re=0)=>{for(let Y=re;Y<P.length;Y++){const ue=P[Y]=Q?Fi(P[Y]):pi(P[Y]);v(null,ue,I,W,b,ie,ee,ae,Q)}},y=(P,I,W,b,ie,ee,ae)=>{const Q=I.el=P.el;let{patchFlag:re,dynamicChildren:Y,dirs:ue}=I;re|=P.patchFlag&16;const he=P.props||wt,A=I.props||wt;let g;if(W&&ds(W,!1),(g=A.onVnodeBeforeUpdate)&&ci(g,W,I,P),ue&&us(I,P,W,"beforeUpdate"),W&&ds(W,!0),Y&&(!P.dynamicChildren||P.dynamicChildren.length!==Y.length)&&(re=0,ae=!1,Y=null),(he.innerHTML&&A.innerHTML==null||he.textContent&&A.textContent==null)&&u(Q,""),Y?E(P.dynamicChildren,Y,Q,W,b,ol(I,ie),ee):ae||X(P,I,Q,null,W,b,ol(I,ie),ee,!1),re>0){if(re&16)w(Q,he,A,W,ie);else if(re&2&&he.class!==A.class&&r(Q,"class",null,A.class,ie),re&4&&r(Q,"style",he.style,A.style,ie),re&8){const F=I.dynamicProps;for(let Z=0;Z<F.length;Z++){const ne=F[Z],q=he[ne],Te=A[ne];(Te!==q||ne==="value")&&r(Q,ne,q,Te,ie,W)}}re&1&&P.children!==I.children&&u(Q,I.children)}else!ae&&Y==null&&w(Q,he,A,W,ie);((g=A.onVnodeUpdated)||ue)&&xn(()=>{g&&ci(g,W,I,P),ue&&us(I,P,W,"updated")},b)},E=(P,I,W,b,ie,ee,ae)=>{for(let Q=0;Q<I.length;Q++){const re=P[Q],Y=I[Q],ue=re.el||ac(re),he=ue&&(re.type===mt||!Ir(re,Y)||re.shapeFlag&198)?d(ue):W;v(re,Y,he,null,b,ie,ee,ae,!0)}},w=(P,I,W,b,ie)=>{if(I!==W){if(I!==wt)for(const ee in I)!$r(ee)&&!(ee in W)&&r(P,ee,I[ee],null,ie,b);for(const ee in W){if($r(ee))continue;const ae=W[ee],Q=I[ee];ae!==Q&&ee!=="value"&&r(P,ee,Q,ae,ie,b)}"value"in W&&r(P,"value",I.value,W.value,ie)}},U=(P,I,W,b,ie,ee,ae,Q,re)=>{const Y=I.el=P?P.el:a(""),ue=I.anchor=P?P.anchor:a("");let{patchFlag:he,dynamicChildren:A,slotScopeIds:g}=I;g&&(Q=Q?Q.concat(g):g),P==null?(i(Y,W,b),i(ue,W,b),L(I.children||[],W,ue,ie,ee,ae,Q,re)):he>0&&he&64&&A&&P.dynamicChildren&&P.dynamicChildren.length===A.length?(E(P.dynamicChildren,A,W,ie,ee,ae,Q),(I.key!=null||ie&&I===ie.subTree)&&Qf(P,I,!0)):X(P,I,W,ue,ie,ee,ae,Q,re)},V=(P,I,W,b,ie,ee,ae,Q,re)=>{I.slotScopeIds=Q,P==null?I.shapeFlag&512?ie.ctx.activate(I,W,b,ae,re):te(I,W,b,ie,ee,ae,re):K(P,I,re)},te=(P,I,W,b,ie,ee,ae)=>{const Q=P.component=s_(P,b,ie);if(_u(P)&&(Q.ctx.renderer=st),o_(Q,!1,ae),Q.asyncDep){if(ie&&ie.registerDep(Q,k,ae,ee),!P.el){const re=Q.subTree=hn(ri);p(null,re,I,W),P.placeholder=re.el}}else k(Q,P,I,W,ie,ee,ae)},K=(P,I,W)=>{const b=I.component=P.component;if(k0(P,I,W))if(b.asyncDep&&!b.asyncResolved){I.el=P.el,I.placeholder=P.placeholder,$(b,I,W);return}else b.next=I,b.update();else I.el=P.el,I.placeholder=P.placeholder,b.vnode=I},k=(P,I,W,b,ie,ee,ae)=>{const Q=()=>{if(P.isMounted){let{next:he,bu:A,u:g,parent:F,vnode:Z}=P;{const Ae=ep(P);if(Ae){he&&(he.el=Z.el,$(P,he,ae)),Ae.asyncDep.then(()=>{xn(()=>{P.isUnmounted||Y()},ie)});return}}let ne=he,q;ds(P,!1),he?(he.el=Z.el,$(P,he,ae)):he=Z,A&&Ja(A),(q=he.props&&he.props.onVnodeBeforeUpdate)&&ci(q,F,he,Z),ds(P,!0);const Te=fd(P),_e=P.subTree;P.subTree=Te,v(_e,Te,d(_e.el),Me(_e),P,ie,ee),he.el=Te.el,ne===null&&z0(P,Te.el),g&&xn(g,ie),(q=he.props&&he.props.onVnodeUpdated)&&xn(()=>ci(q,F,he,Z),ie)}else{let he;const{el:A,props:g}=I,{bm:F,m:Z,parent:ne,root:q,type:Te}=P,_e=Qr(I);ds(P,!1),F&&Ja(F),!_e&&(he=g&&g.onVnodeBeforeMount)&&ci(he,ne,I),ds(P,!0);{q.ce&&q.ce._hasShadowRoot()&&q.ce._injectChildStyle(Te,P.parent?P.parent.type:void 0);const Ae=P.subTree=fd(P);v(null,Ae,W,b,P,ie,ee),I.el=Ae.el}if(Z&&xn(Z,ie),!_e&&(he=g&&g.onVnodeMounted)){const Ae=I;xn(()=>ci(he,ne,Ae),ie)}(I.shapeFlag&256||ne&&Qr(ne.vnode)&&ne.vnode.shapeFlag&256)&&P.a&&xn(P.a,ie),P.isMounted=!0,I=W=b=null}};P.scope.on();const re=P.effect=new cf(Q);P.scope.off();const Y=P.update=re.run.bind(re),ue=P.job=re.runIfDirty.bind(re);ue.i=P,ue.id=P.uid,re.scheduler=()=>mu(ue),ds(P,!0),Y()},$=(P,I,W)=>{I.component=P;const b=P.vnode.props;P.vnode=I,P.next=null,G0(P,I.props,b,W),Y0(P,I.children,W),yi(),wf(P),bi()},X=(P,I,W,b,ie,ee,ae,Q,re=!1)=>{const Y=P&&P.children,ue=P?P.shapeFlag:0,he=I.children,{patchFlag:A,shapeFlag:g}=I;if(A>0){if(A&128){we(Y,he,W,b,ie,ee,ae,Q,re);return}else if(A&256){ge(Y,he,W,b,ie,ee,ae,Q,re);return}}g&8?(ue&16&&De(Y,ie,ee),he!==Y&&u(W,he)):ue&16?g&16?we(Y,he,W,b,ie,ee,ae,Q,re):De(Y,ie,ee,!0):(ue&8&&u(W,""),g&16&&L(he,W,b,ie,ee,ae,Q,re))},ge=(P,I,W,b,ie,ee,ae,Q,re)=>{P=P||bs,I=I||bs;const Y=P.length,ue=I.length,he=Math.min(Y,ue);let A;for(A=0;A<he;A++){const g=I[A]=re?Fi(I[A]):pi(I[A]);v(P[A],g,W,null,ie,ee,ae,Q,re)}Y>ue?De(P,ie,ee,!0,!1,he):L(I,W,b,ie,ee,ae,Q,re,he)},we=(P,I,W,b,ie,ee,ae,Q,re)=>{let Y=0;const ue=I.length;let he=P.length-1,A=ue-1;for(;Y<=he&&Y<=A;){const g=P[Y],F=I[Y]=re?Fi(I[Y]):pi(I[Y]);if(Ir(g,F))v(g,F,W,null,ie,ee,ae,Q,re);else break;Y++}for(;Y<=he&&Y<=A;){const g=P[he],F=I[A]=re?Fi(I[A]):pi(I[A]);if(Ir(g,F))v(g,F,W,null,ie,ee,ae,Q,re);else break;he--,A--}if(Y>he){if(Y<=A){const g=A+1,F=g<ue?I[g].el:b;for(;Y<=A;)v(null,I[Y]=re?Fi(I[Y]):pi(I[Y]),W,F,ie,ee,ae,Q,re),Y++}}else if(Y>A)for(;Y<=he;)Xe(P[Y],ie,ee,!0),Y++;else{const g=Y,F=Y,Z=new Map;for(Y=F;Y<=A;Y++){const xe=I[Y]=re?Fi(I[Y]):pi(I[Y]);xe.key!=null&&Z.set(xe.key,Y)}let ne,q=0;const Te=A-F+1;let _e=!1,Ae=0;const Le=new Array(Te);for(Y=0;Y<Te;Y++)Le[Y]=0;for(Y=g;Y<=he;Y++){const xe=P[Y];if(q>=Te){Xe(xe,ie,ee,!0);continue}let Ue;if(xe.key!=null)Ue=Z.get(xe.key);else for(ne=F;ne<=A;ne++)if(Le[ne-F]===0&&Ir(xe,I[ne])){Ue=ne;break}Ue===void 0?Xe(xe,ie,ee,!0):(Le[Ue-F]=Y+1,Ue>=Ae?Ae=Ue:_e=!0,v(xe,I[Ue],W,null,ie,ee,ae,Q,re),q++)}const ce=_e?j0(Le):bs;for(ne=ce.length-1,Y=Te-1;Y>=0;Y--){const xe=F+Y,Ue=I[xe],ze=I[xe+1],Ee=xe+1<ue?ze.el||ac(ze):b;Le[Y]===0?v(null,Ue,W,Ee,ie,ee,ae,Q,re):_e&&(ne<0||Y!==ce[ne]?Ie(Ue,W,Ee,2):ne--)}}},Ie=(P,I,W,b,ie=null)=>{const{el:ee,type:ae,transition:Q,children:re,shapeFlag:Y}=P;if(Y&6){Ie(P.component.subTree,I,W,b);return}if(Y&128){P.suspense.move(I,W,b);return}if(Y&64){ae.move(P,I,W,st);return}if(ae===mt){i(ee,I,W);for(let he=0;he<re.length;he++)Ie(re[he],I,W,b);i(P.anchor,I,W);return}if(ae===al){M(P,I,W);return}if(b!==2&&Y&1&&Q)if(b===0)Q.persisted&&!ee[sl]?i(ee,I,W):(Q.beforeEnter(ee),i(ee,I,W),xn(()=>Q.enter(ee),ie));else{const{leave:he,delayLeave:A,afterLeave:g}=Q,F=()=>{P.ctx.isUnmounted?s(ee):i(ee,I,W)},Z=()=>{const ne=ee._isLeaving||!!ee[sl];ee._isLeaving&&ee[sl](!0),Q.persisted&&!ne?F():he(ee,()=>{F(),g&&g()})};A?A(ee,F,Z):Z()}else i(ee,I,W)},Xe=(P,I,W,b=!1,ie=!1)=>{const{type:ee,props:ae,ref:Q,children:re,dynamicChildren:Y,shapeFlag:ue,patchFlag:he,dirs:A,cacheIndex:g,memo:F}=P;if((he===-2||Y&&Y.hasOnce)&&(ie=!1),Q!=null&&(yi(),Jr(Q,null,W,P,!0),bi()),g!=null&&(!P.ctx||P.ctx===I)&&(I.renderCache[g]=void 0),ue&256){I.ctx.deactivate(P);return}const Z=ue&1&&A,ne=!Qr(P);let q;if(ne&&(q=ae&&ae.onVnodeBeforeUnmount)&&ci(q,I,P),ue&6)ve(P.component,W,b);else{if(ue&128){P.suspense.unmount(W,b);return}Z&&us(P,null,I,"beforeUnmount"),ue&64?P.type.remove(P,I,W,st,b):Y&&!Y.hasOnce&&(ee!==mt||he>0&&he&64)?De(Y,I,W,!1,!0):(ee===mt&&he&384||!ie&&ue&16)&&De(re,I,W),b&&_t(P)}const Te=F!=null&&g==null;(ne&&(q=ae&&ae.onVnodeUnmounted)||Z||Te)&&xn(()=>{q&&ci(q,I,P),Z&&us(P,null,I,"unmounted"),Te&&(P.el=null)},W)},_t=P=>{const{type:I,el:W,anchor:b,transition:ie}=P,ee=I===mt;if(ee&&!ie){se(W,b);return}if(I===al){x(P),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave();return}const ae=ee?nc(P):P,Q=()=>{ee?d(W)&&se(W,b):s(W),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(ae&&ae.shapeFlag&1&&ie&&!ie.persisted){const{leave:re,delayLeave:Y}=ie,ue=ae.el,he=()=>re(ue,Q);Y?Y(ue,Q,he):he()}else Q()},se=(P,I)=>{let W;for(;P!==I;)W=h(P),s(P),P=W;s(I)},ve=(P,I,W)=>{const{bum:b,scope:ie,job:ee,subTree:ae,um:Q,m:re,a:Y}=P;_d(re),_d(Y),b&&Ja(b),ie.stop(),ee?(ee.flags|=8,Xe(ae,P,I,W)):P.vnode.el&&ae&&(ae.transition=P.vnode.transition,Xe(ae,P,I,W)),Q&&xn(Q,I),xn(()=>{P.isUnmounted=!0},I)},De=(P,I,W,b=!1,ie=!1,ee=0)=>{for(let ae=ee;ae<P.length;ae++)Xe(P[ae],I,W,b,ie)},Me=P=>{if(P.shapeFlag&6)return Me(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const I=h(P.anchor||P.el),W=I&&I[f0];return W?h(W):I},Be=(P,I,W)=>{const b=P&&I._vnode?void 0:P&&P.component?P.component.uid:i_();l0(()=>{P==null?I._vnode&&Xe(I._vnode,null,null,!0):v(I._vnode||null,P,I,null,null,null,W),I._vnode=P},b)},st={p:v,um:Xe,m:Ie,r:_t,mt:te,mc:L,pc:X,pbc:E,n:Me,o:n};return{render:Be,hydrate:void 0,createApp:D0(Be)}}function ol({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ds({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function q0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Qf(n,e,t=!1){const i=n.children,s=e.children;if(je(i)&&je(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Fi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Qf(o,a)),a.type===za&&(a.patchFlag===-1&&(a=s[r]=Fi(a)),a.el=o.el),a.type===ri&&!a.el&&(a.el=o.el)}}function j0(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function ep(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ep(e)}function _d(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function ac(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?ac(e.subTree):null}const tp=n=>n.__isSuspense;function Z0(n,e){e&&e.pendingBranch?je(n)?e.effects.push(...n):e.effects.push(n):a0(n)}const mt=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),ri=Symbol.for("v-cmt"),al=Symbol.for("v-stc"),Ps=[];let An=null;function He(n=!1){Ps.push(An=n?null:[])}function np(){Ps.pop(),An=Ps[Ps.length-1]||null}let so=1;function gd(n,e=!1){so+=n,n<0&&An&&e&&(An.hasOnce=!0)}function ip(n){return n.dynamicChildren=so>0?An||bs:null,np(),so>0&&An&&An.push(n),n}function Ge(n,e,t,i,s,r){return ip(G(n,e,t,i,s,r,!0))}function J0(n,e,t,i,s){return ip(hn(n,e,t,i,s,!0))}function xu(n){return n?n.__v_isVNode===!0:!1}function Ir(n,e){return n.type===e.type&&n.key===e.key}const sp=({key:n})=>n??null,ea=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Nt(n)||en(n)||tt(n)?{i:vi,r:n,k:e,f:!!t}:n:null);function G(n,e=null,t=null,i=0,s=null,r=n===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&sp(e),ref:e&&ea(e),scopeId:Lf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vi};return a?(xa(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Nt(t)?8:16),so>0&&!o&&An&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&An.push(l),l}const hn=Q0;function Q0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===b0)&&(n=ri),xu(n)){const a=Er(n,e,!0);return t&&xa(a,t),so>0&&!r&&An&&(a.shapeFlag&6?An[An.indexOf(n)]=a:An.push(a)),a.patchFlag=-2,a}if(u_(n)&&(n=n.__vccOpts),e){e=e_(e);let{class:a,style:l}=e;a&&!Nt(a)&&(e.class=Cn(a)),yt(l)&&(pu(l)&&!je(l)&&(l=qt({},l)),e.style=Mi(l))}const o=Nt(n)?1:tp(n)?128:Na(n)?64:yt(n)?4:tt(n)?2:0;return G(n,e,t,i,s,o,r,!0)}function e_(n){return n?pu(n)||Kf(n)?qt({},n):n:null}function Er(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?t_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&sp(c),ref:e&&e.ref?t&&r?je(r)?r.concat(ea(e)):[r,ea(e)]:ea(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==mt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Er(n.ssContent),ssFallback:n.ssFallback&&Er(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&_a(u,l.clone(u)),u}function Un(n=" ",e=0){return hn(za,null,n,e)}function Is(n="",e=!1){return e?(He(),J0(ri,null,n)):hn(ri,null,n)}function pi(n){return n==null||typeof n=="boolean"?hn(ri):je(n)?hn(mt,null,n.slice()):xu(n)?Fi(n):hn(za,null,String(n))}function Fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Er(n)}function xa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(je(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),xa(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Kf(e)?e._ctx=vi:s===3&&vi&&(vi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(tt(e)){if(i&65){xa(n,{default:e});return}e={default:e,_ctx:vi},t=32}else e=String(e),i&64?(t=16,e=[Un(e)]):t=8;n.children=e,n.shapeFlag|=t}function t_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Cn([e.class,i.class]));else if(s==="style")e.style=Mi([e.style,i.style]);else if(wa(s)){const r=e[s],o=i[s];o&&r!==o&&!(je(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ca(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function ci(n,e,t,i=null){si(n,e,7,[t,i])}const n_=Hf();let rp=0;function i_(){return rp}function s_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||n_,r={uid:rp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qf(i,s),emitsOptions:Gf(i,s),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=N0.bind(null,r),n.ce&&n.ce(r),r}let pn=null;const r_=()=>pn||vi;let Ea,ro;{const n=La(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ea=e("__VUE_INSTANCE_SETTERS__",t=>pn=t),ro=e("__VUE_SSR_SETTERS__",t=>oo=t)}const vo=n=>{const e=pn;return Ea(n),n.scope.on(),()=>{n.scope.off(),Ea(e)}},vd=()=>{pn&&pn.scope.off(),Ea(null)};function op(n){return n.vnode.shapeFlag&4}let oo=!1;function o_(n,e=!1,t=!1){e&&ro(e);const{props:i,children:s}=n.vnode,r=op(n);H0(n,i,r,e),X0(n,s,t||e);const o=r?a_(n,e):void 0;return e&&ro(!1),o}function a_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,A0);const{setup:i}=t;if(i){yi();const s=n.setupContext=i.length>1?c_(n):null,r=vo(n),o=go(i,n,0,[n.props,s]),a=ef(o);if(bi(),r(),(a||n.sp)&&!Qr(n)&&Uf(n),a){if(o.then(vd,vd),e)return o.then(l=>{ro(!0);try{xd(n,l,e)}finally{ro(!1)}}).catch(l=>{Oa(l,n,0)});n.asyncDep=o}else xd(n,o)}else ap(n)}function xd(n,e,t){tt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yt(e)&&(n.setupState=bf(e)),ap(n)}function ap(n,e,t){const i=n.type;n.render||(n.render=i.render||Si);{const s=vo(n);yi();try{R0(n)}finally{bi(),s()}}}const l_={get(n,e){return Jt(n,"get",""),n[e]}};function c_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,l_),slots:n.slots,emit:n.emit,expose:e}}function Eu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bf(jm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in eo)return eo[t](n)},has(e,t){return t in e||t in eo}})):n.proxy}function u_(n){return tt(n)&&"__vccOpts"in n}const cn=(n,e)=>t0(n,e,oo),d_="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lc;const Ed=typeof window<"u"&&window.trustedTypes;if(Ed)try{lc=Ed.createPolicy("vue",{createHTML:n=>n})}catch{}const lp=lc?n=>lc.createHTML(n):n=>n,h_="http://www.w3.org/2000/svg",f_="http://www.w3.org/1998/Math/MathML",Ui=typeof document<"u"?document:null,Sd=Ui&&Ui.createElement("template"),p_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ui.createElementNS(h_,n):e==="mathml"?Ui.createElementNS(f_,n):t?Ui.createElement(n,{is:t}):Ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ui.createTextNode(n),createComment:n=>Ui.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ui.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Sd.innerHTML=lp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Sd.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},m_=Symbol("_vtc");function __(n,e,t){const i=n[m_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Md=Symbol("_vod"),g_=Symbol("_vsh"),v_=Symbol(""),x_=/(?:^|;)\s*display\s*:/;function E_(n,e,t){const i=n.style,s=Nt(t);let r=!1;if(t&&!s){if(e)if(Nt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Vr(i,a,"")}else for(const o in e)t[o]==null&&Vr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?M_(n,o,!Nt(e)&&e?e[o]:void 0,a)||Vr(i,o,a):Vr(i,o,"")}}else if(s){if(e!==t){const o=i[v_];o&&(t+=";"+o),i.cssText=t,r=x_.test(t)}}else e&&n.removeAttribute("style");Md in n&&((!s||e!==t)&&(n[Md]=r?i.display:""),n[g_]&&(i.display="none"))}const Co=/\s*!important$/;function Vr(n,e,t){if(je(t))t.forEach(i=>Vr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Co.test(t)?n.setProperty(e,t.replace(Co,""),"important"):n.setProperty(e,t);else{const i=S_(n,e);Co.test(t)?n.setProperty(Ns(i),t.replace(Co,""),"important"):n[i]=t}}const Td=["Webkit","Moz","ms"],ll={};function S_(n,e){const t=ll[e];if(t)return t;let i=ni(e);if(i!=="filter"&&i in n)return ll[e]=i;i=sf(i);for(let s=0;s<Td.length;s++){const r=Td[s]+i;if(r in n)return ll[e]=r}return e}function M_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Nt(i)&&t===i}const yd="http://www.w3.org/1999/xlink";function bd(n,e,t,i,s,r=wm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(yd,e.slice(6,e.length)):n.setAttributeNS(yd,e,t):t==null||r&&!of(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Ti(t)?String(t):t)}function Ad(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?lp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=of(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function T_(n,e,t,i){n.addEventListener(e,t,i)}function y_(n,e,t,i){n.removeEventListener(e,t,i)}const Rd=Symbol("_vei");function b_(n,e,t,i,s=null){const r=n[Rd]||(n[Rd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=w_(e);if(i){const c=r[e]=L_(i,s);T_(n,a,c,l)}else o&&(y_(n,a,o,l),r[e]=void 0)}}const A_=/(Once|Passive|Capture)$/,R_=/^on:?(?:Once|Passive|Capture)$/;function w_(n){let e,t;for(;(t=n.match(A_))&&!R_.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ns(n.slice(2)),e]}let cl=0;const C_=Promise.resolve(),P_=()=>cl||(C_.then(()=>cl=0),cl=Date.now());function L_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(je(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&si(c,e,5,a)}}else si(s,e,5,[i])};return t.value=n,t.attached=P_(),t}const wd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,I_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?__(n,i,o):e==="style"?E_(n,t,i):wa(e)?Ca(e)||b_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):D_(n,e,i,o))?(Ad(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bd(n,e,i,o,r,e!=="value")):n._isVueCE&&(O_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Nt(i)))?Ad(n,ni(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),bd(n,e,i,o))};function D_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&wd(e)&&tt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wd(e)&&Nt(t)?!1:e in n}function O_(n,e){const t=n._def.props;if(!t)return!1;const i=ni(e);return Array.isArray(t)?t.some(s=>ni(s)===i):Object.keys(t).some(s=>ni(s)===i)}const N_=qt({patchProp:I_},p_);let Cd;function U_(){return Cd||(Cd=K0(N_))}const F_=((...n)=>{const e=U_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=k_(i);if(!s)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,B_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function B_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function k_(n){return Nt(n)?document.querySelector(n):n}const ao=["PET","HDPE","COTTON","POLYESTER","BLEND"],ta=[...ao,"CARDBOARD","MISC"],Kt=(n,e)=>Math.hypot(e.x-n.x,e.z-n.z),$e={minX:-20,maxX:20,minZ:-12.5,maxZ:13.2,roofY:6.6},Ft={z:4.2,halfWidth:1.7},Ot={IN_1:{x:-14,z:-17},IN_2:{x:-7,z:-17},OUT:{x:7.5,z:-17}},cc={TRUCK_A:{x:Ot.IN_1.x,z:-27,dock:Ot.IN_1},TRUCK_B:{x:Ot.IN_2.x,z:-27,dock:Ot.IN_2},TRUCK_C:{x:Ot.OUT.x,z:-27,dock:Ot.OUT}},lo={x:Ot.OUT.x,z:-20.2},le={staging:{x:-11.6,z:-8.8,w:6,d:2.6},vibFeeder:{x:-16.2,z:-1.8},sorter1:{x:-8.4,z:-1.8},sorter2:{x:-4,z:-1.8},tailDrop:{x:.6},siloPet:{x:-8.4,z:.9},siloHdpe:{x:-4,z:.9},balerPlastic:{x:2.8,z:.9},spreader:{x:-15,z:8.4},hyperspec:{x:-10.9,z:8.4},arm:{x:-4.3,z:9.35},siloCotton:{x:-7.4,z:11.8},siloPolyester:{x:-4.4,z:11.8},siloBlend:{x:-1.4,z:11.8},balerTextile:{x:3,z:8.4},storageCardboard:{x:14,z:.3,w:5,d:4},balerCardboard:{x:9.6,z:.9},storageMisc:{x:14,z:8.6,w:5,d:4},outboundStage:{x:6.2,z:-8.8,w:4.4,d:2.6},checkpoint:{x:lo.x,z:lo.z}},Kn={SILO_PET:le.siloPet,SILO_HDPE:le.siloHdpe,SILO_COTTON:le.siloCotton,SILO_POLYESTER:le.siloPolyester,SILO_BLEND:le.siloBlend},Nn=(n,e,t,i,s,r=.62)=>({id:n,from:e,to:t,fromY:i,toY:s,width:r}),Fe={incline:Nn("incline",{x:-14.6,z:-1.8},{x:-9.4,z:-1.8},.92,1.85),sorter1:Nn("sorter1",{x:-9.4,z:-1.8},{x:-7.4,z:-1.8},1.85,1.85,1.1),pass1:Nn("pass1",{x:-7.4,z:-1.8},{x:-4.8,z:-1.8},1.85,1.72),sorter2:Nn("sorter2",{x:-4.8,z:-1.8},{x:-3.2,z:-1.8},1.72,1.72,1.1),pass2:Nn("pass2",{x:-3.2,z:-1.8},{x:-.8,z:-1.8},1.72,1.6),lanePet:Nn("lanePet",{x:-8.4,z:-1.6},{x:-8.4,z:.02},1.85,2.1),laneHdpe:Nn("laneHdpe",{x:-4,z:-1.6},{x:-4,z:.02},1.72,2.1),laneTail:Nn("laneTail",{x:-.8,z:-1.8},{x:.6,z:-1.8},1.6,1.2)},Rt={spreader:Nn("spreader",{x:-17.4,z:8.4},{x:-12.6,z:8.4},.86,.86,1.05),hyperspec:Nn("hyperspec",{x:-12.6,z:8.4},{x:-9.2,z:8.4},.92,.92,1.05),pickBelt:Nn("pickBelt",{x:-9.2,z:8.4},{x:-4.6,z:8.4},.92,.92,.8),reject:Nn("reject",{x:-10.4,z:8.4},{x:-10.4,z:10.6},1.05,.7)},qn={incline:Kt(Fe.incline.from,Fe.incline.to),sorter1:Kt(Fe.sorter1.from,Fe.sorter1.to),pass1:Kt(Fe.pass1.from,Fe.pass1.to),sorter2:Kt(Fe.sorter2.from,Fe.sorter2.to),pass2:Kt(Fe.pass2.from,Fe.pass2.to),lanePet:Kt(Fe.lanePet.from,Fe.lanePet.to),laneHdpe:Kt(Fe.laneHdpe.from,Fe.laneHdpe.to),laneTail:Kt(Fe.laneTail.from,Fe.laneTail.to),spreader:Kt(Rt.spreader.from,Rt.spreader.to),hyperspec:Kt(Rt.hyperspec.from,Rt.hyperspec.to),pickBelt:Kt(Rt.pickBelt.from,Rt.pickBelt.to),reject:Kt(Rt.reject.from,Rt.reject.to)},Wr={DOCK_IN_1:{x:-14,z:-11},DOCK_IN_2:{x:-7,z:-11},STAGING:{x:-11.6,z:-6.5},VIB_FEEDER:{x:-16.2,z:-3.9},SPREADER:{x:-15,z:6.6},BALER_PLASTIC:{x:-.4,z:.7},BALER_TEXTILE:{x:.2,z:8.4},BALER_CARDBOARD:{x:6.6,z:.7},STORAGE_CARDBOARD:{x:14,z:-2.6},STORAGE_MISC:{x:14,z:6.6},OUTBOUND_STAGE:{x:6.2,z:-6.5},DOCK_OUT:{x:7.5,z:-11}},z_={FL1:{x:-12.6,z:-4.6},FL2:{x:-12.6,z:1.4}},Sa=1,Pd=n=>n.z<=Ft.z-Sa,Ld=n=>n.z>=Ft.z+Sa;function H_(n,e){if(Pd(n)&&Pd(e)||Ld(n)&&Ld(e))return[n,e];const i=[n],s=Math.abs(n.z-Ft.z)<=Sa,r=Math.abs(e.z-Ft.z)<=Sa;return s||i.push({x:n.x,z:Ft.z}),(!r||i.length===1)&&i.push({x:e.x,z:Ft.z}),i.push(e),i.filter((o,a)=>a===0||Kt(o,i[a-1])>1e-6)}function G_(n){let e=0;for(let t=1;t<n.length;t+=1)e+=Kt(n[t-1],n[t]);return e}function Su(n,e){let t=e;for(let i=1;i<n.length;i+=1){const s=n[i-1],r=n[i],o=Kt(s,r);if(!(o<=1e-6)){if(t<=o){const a=t/o;return{x:s.x+(r.x-s.x)*a,z:s.z+(r.z-s.z)*a}}t-=o}}return n[n.length-1]}function V_(n,e){const t=Su(n,e);return Math.abs(t.z-Ft.z)<=Ft.halfWidth}const uc=20261016,It={PET:{label:"PET 瓶片（聚对苯二甲酸乙二醇酯）",short:"PET",color:"#4aa8e0",unitMassT:.15},HDPE:{label:"HDPE 瓶料（高密度聚乙烯）",short:"HDPE",color:"#46c08a",unitMassT:.15},COTTON:{label:"棉织物",short:"棉",color:"#e2d3ac",unitMassT:.08},POLYESTER:{label:"涤纶织物",short:"涤纶",color:"#a98fe0",unitMassT:.08},BLEND:{label:"混纺织物",short:"混纺",color:"#e0a83f",unitMassT:.08},CARDBOARD:{label:"纸板",short:"纸板",color:"#c08a4a",unitMassT:.25},MISC:{label:"杂项（尾料与不可识别物）",short:"杂项",color:"#7d8c94",unitMassT:.2}},Rn={SILO_PET:{material:"PET",capacity:6,threshold:3},SILO_HDPE:{material:"HDPE",capacity:6,threshold:3},SILO_COTTON:{material:"COTTON",capacity:4,threshold:2},SILO_POLYESTER:{material:"POLYESTER",capacity:4,threshold:2},SILO_BLEND:{material:"BLEND",capacity:4,threshold:2}},Fn={plastic:[{id:1,material:"PET"},{id:2,material:"PET"},{id:3,material:"PET"},{id:4,material:"HDPE"},{id:5,material:"HDPE"},{id:6,material:"HDPE"}],textile:[{id:101,material:"COTTON"},{id:102,material:"COTTON"},{id:103,material:"POLYESTER"},{id:104,material:"POLYESTER"},{id:105,material:"BLEND"},{id:106,material:"BLEND"}],cardboard:[{id:201,material:"CARDBOARD"},{id:202,material:"CARDBOARD"}],misc:[{id:301,material:"MISC"},{id:302,material:"MISC"}]},lt={DURATION:130,STEP:1/30,KEYFRAME_STEPS:150,RETURN_HOME_AT:110,FLUSH_BALING_AT:96,FEED_DONE_AT:70,SPREAD_DONE_AT:70,FINAL_SWEEP_AT:118,MISC_RETURN_JOB_AT:72,TRUCK_A:{arriveFrom:0,dockAt:3,unloadFrom:4.5,plasticsDone:9,unloadTo:13,leaveFrom:15,offSiteAt:20},TRUCK_B:{arriveFrom:22,dockAt:25,unloadFrom:26.5,unloadTo:36,loadFrom:60,leaveFrom:108,offSiteAt:114},TRUCK_C:{arriveFrom:38,dockAt:41,loadFrom:42,leaveFrom:118,offSiteAt:124.5}},Id={TRUCK_A:{label:"进货货车 A-01",role:"塑料瓶 + 纺织品来料",note:"6 个塑料来料包 + 6 个纺织来料包"},TRUCK_B:{label:"转运货车 B-02",role:"纸板 + 杂项进出",note:"卸下 2 个纸板包与 2 个杂项包，回程装走杂项"},TRUCK_C:{label:"出货货车 C-03",role:"成品打包块出货",note:"装走全部成品打包块后过磅离场"}},Mu=[{id:"VIB_FEEDER",name:"震动上料机",nameEn:"De-baler / Vibrating Feeder",group:"plastic",kind:"machine",process:"散包破包 + 振动给料",responsibility:"把压缩的塑料瓶料包打散，并以可控速率向爬坡机均匀给料。"},{id:"INCLINE",name:"爬坡机",nameEn:"Inclined Belt Conveyor",group:"plastic",kind:"machine",process:"倾斜带式输送（单层化）",responsibility:"把瓶料抬升到识别高度，并在爬升过程中拉开料层，使瓶体单层分布便于识别。"},{id:"SORTER_1",name:"光选机 #1",nameEn:"NIR Optical Sorter #1",group:"plastic",kind:"machine",process:"近红外识别 + 气吹分选（PET）",responsibility:"识别 PET 瓶并气吹打向 PET 支线；未命中的物料继续向后段输送。"},{id:"SORTER_2",name:"光选机 #2",nameEn:"NIR Optical Sorter #2",group:"plastic",kind:"machine",process:"近红外识别 + 气吹分选（HDPE）",responsibility:"对通过 #1 的物料识别 HDPE 并气吹打向 HDPE 支线；其余物料成为尾料。"},{id:"CONVEYOR",name:"输送带",nameEn:"Transfer Conveyor",group:"plastic",kind:"machine",process:"分流输送带",responsibility:"把 PET、HDPE 与尾料三路分别送入对应料仓，速度决定全线节拍。"},{id:"SILO_PET",name:"PET 料仓",nameEn:"PET Storage Silo",group:"plastic",kind:"silo",process:"缓冲料仓",responsibility:"暂存已识别的 PET 瓶料，达到阈值后请求打包。"},{id:"SILO_HDPE",name:"HDPE 料仓",nameEn:"HDPE Storage Silo",group:"plastic",kind:"silo",process:"缓冲料仓",responsibility:"暂存已识别的 HDPE 瓶料，达到阈值后请求打包。"},{id:"BALER_PLASTIC",name:"压缩打包机",nameEn:"Horizontal Baler",group:"plastic",kind:"baler",process:"卧式液压打包",responsibility:"把料仓送来的瓶料压成瓶砖，供叉车搬运出厂。"},{id:"SPREADER",name:"上料平铺机构",nameEn:"Spreading Conveyor",group:"textile",kind:"machine",process:"铺料展平",responsibility:"把成包的废旧纺织品在输送带上摊成单层，供高光谱设备逐件识别。"},{id:"HYPERSPEC",name:"高光谱分选设备",nameEn:"Hyperspectral Sorter",group:"textile",kind:"machine",process:"高光谱材质识别",responsibility:"按材质识别棉、涤纶与混纺并给出目标料仓，无法识别的物料进入尾料口。"},{id:"ROBOT_ARM",name:"机械臂分选流水线",nameEn:"Robotic Picking Line",group:"textile",kind:"machine",process:"视觉定位 + 机械臂抓取",responsibility:"按识别结果逐件抓取，投放到棉、涤纶、混纺三个料仓；节拍是纺织品线的主要瓶颈。"},{id:"SILO_COTTON",name:"棉料仓",nameEn:"Cotton Bin",group:"textile",kind:"silo",process:"缓冲料仓",responsibility:"暂存棉织物，达到阈值后请求打包。"},{id:"SILO_POLYESTER",name:"涤纶料仓",nameEn:"Polyester Bin",group:"textile",kind:"silo",process:"缓冲料仓",responsibility:"暂存涤纶织物，达到阈值后请求打包。"},{id:"SILO_BLEND",name:"混纺料仓",nameEn:"Blended Bin",group:"textile",kind:"silo",process:"缓冲料仓",responsibility:"暂存混纺织物，达到阈值后请求打包。"},{id:"BALER_TEXTILE",name:"纺织打包机",nameEn:"Textile Baler",group:"textile",kind:"baler",process:"液压打包（共用）",responsibility:"三个纺织料仓共用一台打包机，按料仓就绪顺序轮流打包。"},{id:"BALER_CARDBOARD",name:"纸板打包机",nameEn:"Cardboard Baler",group:"storage",kind:"baler",process:"液压打包",responsibility:"把入库纸板压成纸板包，等待随出货车辆转运。"},{id:"STORAGE_CARDBOARD",name:"纸板存储区",nameEn:"Cardboard Storage",group:"storage",kind:"zone",process:"平面堆垛区",responsibility:"纸板不进分拣线，只在此堆存并计入库存。"},{id:"STORAGE_MISC",name:"杂项存储区",nameEn:"Miscellaneous Storage",group:"storage",kind:"zone",process:"杂项暂存区",responsibility:"存放杂项来料，以及光选尾料和高光谱无法识别的物料。"},{id:"SCALE",name:"地磅",nameEn:"Weighbridge",group:"storage",kind:"machine",process:"整车称重",responsibility:"出货车辆离场前称重，出货量以此计入台账。"},{id:"TRUCK_A",name:"进货货车 A-01",nameEn:"Inbound Truck A",group:"logistics",kind:"truck",process:"来料运输",responsibility:"运来塑料瓶料包与纺织品包，卸到原料缓存区后离场。"},{id:"TRUCK_B",name:"转运货车 B-02",nameEn:"Transfer Truck B",group:"logistics",kind:"truck",process:"纸板杂项进出",responsibility:"卸下纸板与杂项并停靠等待，回程装走杂项与纸板包。"},{id:"TRUCK_C",name:"出货货车 C-03",nameEn:"Outbound Truck C",group:"logistics",kind:"truck",process:"成品出厂",responsibility:"在出货月台等候，装完全部成品打包块后过磅离场。"},{id:"FORKLIFT_1",name:"叉车 FL-01",nameEn:"Forklift FL-01",group:"logistics",kind:"forklift",process:"塑料区搬运",responsibility:"负责塑料来料上线、纸板杂项入库与塑料成品出库。"},{id:"FORKLIFT_2",name:"叉车 FL-02",nameEn:"Forklift FL-02",group:"logistics",kind:"forklift",process:"纺织区搬运",responsibility:"负责纺织来料上线与纺织成品出库，需通过单行主通道。"}],Tu=Object.fromEntries(Mu.map(n=>[n.id,n])),cp={VIB_FEEDER:"VGF",INCLINE:"IBC",SORTER_1:"NIR-1",SORTER_2:"NIR-2",CONVEYOR:"TCV",SILO_PET:"SILO-PET",SILO_HDPE:"SILO-HDPE",BALER_PLASTIC:"BAL-P",SPREADER:"SPR-CV",HYPERSPEC:"HSI",ROBOT_ARM:"RPL",SILO_COTTON:"BIN-C",SILO_POLYESTER:"BIN-P",SILO_BLEND:"BIN-B",BALER_TEXTILE:"BAL-T",BALER_CARDBOARD:"BAL-CB",STORAGE_CARDBOARD:"STG-CB",STORAGE_MISC:"STG-MX",SCALE:"WB",TRUCK_A:"TRK-A",TRUCK_B:"TRK-B",TRUCK_C:"TRK-C",FORKLIFT_1:"FL-01",FORKLIFT_2:"FL-02"},Dr=["SILO_PET","SILO_HDPE","SILO_COTTON","SILO_POLYESTER","SILO_BLEND"].map(n=>({key:`threshold:${n}`,label:`${Rn[n].material} 料仓打包阈值`,unit:"包",min:1,max:Rn[n].capacity,step:1,default:Rn[n].threshold,description:"料仓存量达到该值即请求打包；调高可减少打包次数，但占用仓位更多。"})),yu={VIB_FEEDER:[{key:"vibFeedRate",label:"给料速率",unit:"包/分",min:3,max:12,step:.5,default:8,description:"向爬坡机送入料包的速率；过高会造成料层叠加，过低会拉低全线产能。"}],CONVEYOR:[{key:"beltSpeed",label:"带速",unit:"m/s",min:.4,max:1.6,step:.05,default:1.1,description:"塑料线输送带速度，决定瓶料通过光选区的节拍。"}],SORTER_1:[{key:"sorter1Threshold",label:"识别阈值",unit:"",min:.6,max:1,step:.01,default:.98,description:"越高越严格；降低会增加漏吹，被漏吹的瓶料成为尾料。"},{key:"airPressure1",label:"气吹压力",unit:"bar",min:2,max:8,step:.1,default:5,description:"压力不足会打不掉目标瓶料，压力过高会造成误吹。"}],SORTER_2:[{key:"sorter2Threshold",label:"识别阈值",unit:"",min:.6,max:1,step:.01,default:.98,description:"越高越严格；降低会增加漏吹，被漏吹的瓶料成为尾料。"},{key:"airPressure2",label:"气吹压力",unit:"bar",min:2,max:8,step:.1,default:5,description:"压力不足会打不掉目标瓶料，压力过高会造成误吹。"}],BALER_PLASTIC:[{key:"baleCyclePlastic",label:"打包周期",unit:"s",min:3,max:10,step:.5,default:5,description:"一个瓶砖的压制周期，过长会让料仓积压。"}],SPREADER:[{key:"spreadRate",label:"铺料速率",unit:"包/分",min:3,max:12,step:.5,default:8,description:"纺织品上线速率；过快会让高光谱识别区出现叠料。"}],HYPERSPEC:[{key:"hyperspecThreshold",label:"材质识别阈值",unit:"",min:.6,max:1,step:.01,default:.97,description:"越高越严格；降低会使更多物料因无法识别而进入杂项尾料。"}],ROBOT_ARM:[{key:"armCycle",label:"抓取节拍",unit:"s/件",min:1.4,max:5,step:.1,default:2,description:"单件抓取投放的循环时间，是纺织品线的瓶颈参数。"}],BALER_TEXTILE:[{key:"baleCycleTextile",label:"打包周期",unit:"s",min:3,max:10,step:.5,default:4,description:"纺织料包的压制周期，三个料仓共用这一台设备。"}],BALER_CARDBOARD:[{key:"baleCycleCardboard",label:"打包周期",unit:"s",min:3,max:10,step:.5,default:5,description:"纸板包的压制周期。"}],SILO_PET:[Dr[0]],SILO_HDPE:[Dr[1]],SILO_COTTON:[Dr[2]],SILO_POLYESTER:[Dr[3]],SILO_BLEND:[Dr[4]]};Object.fromEntries(Object.values(yu).flat().map(n=>[n.key,n]));const up=Object.fromEntries([...Object.values(yu).flat().map(n=>[n.key,n.default]),["efficiencyFloor",.55],["efficiencyPerBar",.09]]),W_={"power:VIB_FEEDER":!0,"power:INCLINE":!0,"power:SORTER_1":!0,"power:SORTER_2":!0,"power:CONVEYOR":!0,"power:SPREADER":!0,"power:HYPERSPEC":!0,"power:ROBOT_ARM":!0,"power:BALER_PLASTIC":!0,"power:BALER_TEXTILE":!0,"power:BALER_CARDBOARD":!0,missort:!1,siloOverflowWarning:!1,emergencyStop:!1},Dd={VIB_FEEDER:{upstream:["FORKLIFT_1"],downstream:["INCLINE"]},INCLINE:{upstream:["VIB_FEEDER"],downstream:["SORTER_1"]},SORTER_1:{upstream:["INCLINE"],downstream:["SILO_PET","SORTER_2"]},SORTER_2:{upstream:["SORTER_1"],downstream:["SILO_HDPE","STORAGE_MISC"]},CONVEYOR:{upstream:["SORTER_1","SORTER_2"],downstream:["SILO_PET","SILO_HDPE","STORAGE_MISC"]},SILO_PET:{upstream:["CONVEYOR"],downstream:["BALER_PLASTIC"]},SILO_HDPE:{upstream:["CONVEYOR"],downstream:["BALER_PLASTIC"]},BALER_PLASTIC:{upstream:["SILO_PET","SILO_HDPE"],downstream:["FORKLIFT_1"]},SPREADER:{upstream:["FORKLIFT_2"],downstream:["HYPERSPEC","SCALE"]},HYPERSPEC:{upstream:["SPREADER"],downstream:["ROBOT_ARM","STORAGE_MISC"]},ROBOT_ARM:{upstream:["HYPERSPEC"],downstream:["SILO_COTTON","SILO_POLYESTER","SILO_BLEND"]},SILO_COTTON:{upstream:["ROBOT_ARM"],downstream:["BALER_TEXTILE"]},SILO_POLYESTER:{upstream:["ROBOT_ARM"],downstream:["BALER_TEXTILE"]},SILO_BLEND:{upstream:["ROBOT_ARM"],downstream:["BALER_TEXTILE"]},BALER_TEXTILE:{upstream:["SILO_COTTON","SILO_POLYESTER","SILO_BLEND"],downstream:["FORKLIFT_2"]},BALER_CARDBOARD:{upstream:["STORAGE_CARDBOARD"],downstream:["FORKLIFT_1"]},STORAGE_CARDBOARD:{upstream:["FORKLIFT_1"],downstream:["BALER_CARDBOARD"]},STORAGE_MISC:{upstream:["SORTER_2","HYPERSPEC","FORKLIFT_1"],downstream:["FORKLIFT_1"]},SCALE:{upstream:["TRUCK_C"],downstream:["TRUCK_C"]},TRUCK_A:{upstream:[],downstream:["FORKLIFT_1","FORKLIFT_2"]},TRUCK_B:{upstream:[],downstream:["FORKLIFT_1"]},TRUCK_C:{upstream:["FORKLIFT_1","FORKLIFT_2"],downstream:["SCALE"]},FORKLIFT_1:{upstream:["TRUCK_A","TRUCK_B","BALER_PLASTIC","BALER_CARDBOARD"],downstream:["VIB_FEEDER","STORAGE_CARDBOARD","STORAGE_MISC","TRUCK_C"]},FORKLIFT_2:{upstream:["TRUCK_A","BALER_TEXTILE"],downstream:["SPREADER","TRUCK_C"]}};Object.fromEntries(ao.map(n=>[n,It[n].short]));const bu=["FL1","FL2"],hs=z_,dp={FORKLIFT_1:"FL1",FORKLIFT_2:"FL2"},X_={TRUCK_A:"TRUCK_A",TRUCK_B:"TRUCK_B",TRUCK_C:"TRUCK_C"},Xr={load:2,unload:2,speed:3.7,returnSpeed:4},Y_={FL1:{x:-.85,z:0},FL2:{x:.85,z:0}},Po=[{day:"D-6",receivedT:4.36,shippedT:4.12},{day:"D-5",receivedT:4.71,shippedT:4.48},{day:"D-4",receivedT:4.18,shippedT:4.05},{day:"D-3",receivedT:4.92,shippedT:4.63},{day:"D-2",receivedT:4.55,shippedT:4.4},{day:"D-1",receivedT:4.63,shippedT:4.51},{day:"当日",receivedT:4.56,shippedT:4.28}],K_=(n,e,t)=>Math.min(t,Math.max(e,n)),Ma=n=>K_(n,0,1);function Ji(){return Object.fromEntries(ta.map(n=>[n,0]))}function hp(){return{numbers:{...up},flags:{...W_}}}function $_(n,e){return e.flag?n.flags[e.key]=!!e.value:n.numbers[e.key]=e.value,n}const fp=n=>Math.max(0,Math.ceil(n/lt.STEP-1e-9));function or(n,e){const t=hp();for(const i of n)fp(i.at)<=e&&$_(t,i);return t}const Jn=(n,e)=>!n.flags.emergencyStop&&n.flags[`power:${e}`]!==!1,Od=(n,e,t)=>{const i=n*(t.numbers.efficiencyFloor+t.numbers.efficiencyPerBar*e);return Ma(i*(t.flags.missort?.65:1))},Nd=(n,e)=>e==="SORTER_1"?Od(n.numbers.sorter1Threshold,n.numbers.airPressure1,n):Od(n.numbers.sorter2Threshold,n.numbers.airPressure2,n),q_=n=>Ma(n.numbers.hyperspecThreshold*(n.flags.missort?.7:1));function j_(n){return Object.fromEntries(Object.keys(Rn).map(e=>[e,{id:e,material:Rn[e].material,units:0,capacity:Rn[e].capacity,threshold:n.numbers[`threshold:${e}`]??Rn[e].threshold,baling:null,balesProduced:0,overflowUnits:0}]))}function Z_(){const n=Object.keys(hs).map(e=>{const t={id:e,status:"IDLE",jobId:null,progress:0,x:hs[e].x,z:hs[e].z,cargoLabel:"空载",trips:0,startX:hs[e].x,startZ:hs[e].z,route:[{x:hs[e].x,z:hs[e].z}],travelled:0,leg:null,loaded:!1,cargoUnitIds:[],cargoBaleIds:[],dwell:0,returning:!1};return[e,t]});return Object.fromEntries(n)}function J_(){const n={TRUCK_A:Fn.plastic.length+Fn.textile.length,TRUCK_B:Fn.cardboard.length+Fn.misc.length,TRUCK_C:0};return Object.fromEntries(Object.keys(Id).map(e=>[e,{id:e,role:e==="TRUCK_A"?"INBOUND_PRIMARY":e==="TRUCK_B"?"INBOUND_BULK":"OUTBOUND",label:Id[e].label,status:"OFF_SITE",progress:0,x:cc[e].x,z:cc[e].z,onboard:n[e],loadLabel:n[e]>0?`待卸货 ${n[e]} 包`:"空载",weighed:!1}]))}const Ha=n=>It[n.origin].unitMassT;function Q_(){return{received:Ji(),shipped:Ji(),shippedByOrigin:Ji(),lost:Ji(),receivedMassT:0,shippedMassT:0}}function eg(){return{missort:!1,siloOverflowWarning:!1,emergencyStop:!1}}function tg(){const n=(e,t)=>e.map(i=>({id:i.id,kind:t,origin:i.material,material:i.material,stage:"TRUCK",s:0,decided:null,baleId:null,carrier:null}));return[...n(Fn.plastic,"PLASTIC"),...n(Fn.textile,"TEXTILE"),...n(Fn.cardboard,"BULK"),...n(Fn.misc,"BULK")]}function na(){const n=hp();return{step:0,time:0,cycle:0,units:tg(),bales:[],silos:j_(n),forklifts:Z_(),trucks:J_(),arm:{phase:"IDLE",phaseElapsed:0,unitId:null,target:null,queue:[],cycles:0},puffs:[],jobs:[],aisle:{occupant:null},storage:{cardboardUnits:0,miscUnits:0},ledger:Q_(),anomalies:eg(),released:{TRUCK_A:0,TRUCK_B:0},swept:!1,fedPlastic:0,fedTextile:0,nextFeedAt:0,nextSpreadAt:0,nextUnitId:0,nextBaleId:1,events:[]}}function ia(n,e){n.anomalies.missort=e.flags.missort===!0,n.anomalies.siloOverflowWarning=e.flags.siloOverflowWarning===!0,n.anomalies.emergencyStop=e.flags.emergencyStop===!0}function En(n,e){const t=n.time.toFixed(1).padStart(5,"0");n.events.push(`${t}s ${e}`),n.events.length>60&&n.events.splice(0,n.events.length-60)}function dc(n){return structuredClone(n)}function ng(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ig(...n){let e=2166136261;for(const t of n)e^=Math.imul(t|0,2246822519),e=Math.imul(e^e>>>13,3266489917);return e>>>0}function hc(n,e,t){return ng(ig(n,e,t))()}const pp={PET:"BALER_PLASTIC",HDPE:"BALER_PLASTIC",COTTON:"BALER_TEXTILE",POLYESTER:"BALER_TEXTILE",BLEND:"BALER_TEXTILE"},sg={BALER_PLASTIC:"baleCyclePlastic",BALER_TEXTILE:"baleCycleTextile",BALER_CARDBOARD:"baleCycleCardboard"};function jn(n,e,t){return n.s+=t*lt.STEP,n.s>=e}function Zn(n,e){n.stage=e,n.s=0}function Ud(n,e){n.puffs.push({device:e,id:n.puffs.length+1,life:.6})}function fc(n,e,t){const i=n.silos[t];if(i.units>=i.capacity){i.overflowUnits+=1,e.material="MISC",e.stage="STORED_MISC",n.storage.miscUnits+=1,En(n,`${It[i.material].short} 料仓已满，转入杂项存储`);return}i.units+=1,e.stage="IN_SILO",e.s=0}function mp(n,e,t,i){const s=60/Math.max(1,n);if(e<=0)return s;const r=Math.max(0,i-t);return Math.min(s,r/e)}function rg(n,e){const t=Jn(e,"CONVEYOR")?e.numbers.beltSpeed:0;if(Jn(e,"VIB_FEEDER")&&n.time>=n.nextFeedAt){const r=n.units.filter(o=>o.stage==="HOPPER");r.length?(Zn(r[0],"INCLINE"),n.fedPlastic+=1,n.nextFeedAt=n.time+mp(e.numbers.vibFeedRate,r.length-1,n.time,lt.FEED_DONE_AT),En(n,`震动上料机投料：第 ${n.fedPlastic} 包（${It[r[0].origin].short}）`)):n.nextFeedAt=n.time+.5}const i=Nd(e,"SORTER_1"),s=Nd(e,"SORTER_2");for(const r of n.units)switch(r.stage){case"INCLINE":Jn(e,"INCLINE")&&jn(r,qn.incline,t)&&Zn(r,"SORTER_1");break;case"SORTER_1":Jn(e,"SORTER_1")&&jn(r,qn.sorter1,t)&&(r.origin==="PET"&&hc(uc,r.id,11)<i?(r.decided="PET",Zn(r,"LANE_PET"),Ud(n,"SORTER_1")):Zn(r,"PASS_1"));break;case"PASS_1":jn(r,qn.pass1,t)&&Zn(r,"SORTER_2");break;case"SORTER_2":Jn(e,"SORTER_2")&&jn(r,qn.sorter2,t)&&(r.origin==="HDPE"&&hc(uc,r.id,23)<s?(r.decided="HDPE",Zn(r,"LANE_HDPE"),Ud(n,"SORTER_2")):Zn(r,"PASS_2"));break;case"PASS_2":jn(r,qn.pass2,t)&&Zn(r,"LANE_TAIL");break;case"LANE_PET":jn(r,qn.lanePet,t)&&fc(n,r,"SILO_PET");break;case"LANE_HDPE":jn(r,qn.laneHdpe,t)&&fc(n,r,"SILO_HDPE");break;case"LANE_TAIL":jn(r,qn.laneTail,t)&&(r.material="MISC",r.stage="STORED_MISC",n.storage.miscUnits+=1,En(n,`光选尾料转入杂项存储（原 ${It[r.origin].short}）`));break}}function og(n,e){const t=Jn(e,"CONVEYOR")?e.numbers.beltSpeed:0,i=q_(e);if(Jn(e,"SPREADER")&&n.time>=n.nextSpreadAt){const s=n.units.filter(r=>r.stage==="SPREAD_BUFFER");s.length?(Zn(s[0],"SPREADER"),n.fedTextile+=1,n.nextSpreadAt=n.time+mp(e.numbers.spreadRate,s.length-1,n.time,lt.SPREAD_DONE_AT),En(n,`上料平铺机构投料：第 ${n.fedTextile} 包（${It[s[0].origin].short}）`)):n.nextSpreadAt=n.time+.5}for(const s of n.units)switch(s.stage){case"SPREADER":jn(s,qn.spreader,t)&&Zn(s,"HYPERSPEC");break;case"HYPERSPEC":if(Jn(e,"HYPERSPEC")&&jn(s,qn.hyperspec,t))if(hc(uc,s.id,37)<i){const r=s.origin;s.decided=r,Zn(s,r==="COTTON"?"LANE_COTTON":r==="POLYESTER"?"LANE_POLYESTER":"LANE_BLEND")}else s.material="MISC",s.stage="STORED_MISC",n.storage.miscUnits+=1,En(n,`高光谱未能识别，转入杂项（${It[s.origin].short}）`);break;case"LANE_COTTON":case"LANE_POLYESTER":case"LANE_BLEND":jn(s,qn.pickBelt,t)&&(s.stage="ARM_PICK",s.s=0,n.arm.queue.push(s.id));break}}function ag(n,e){const t=n.arm,i=e.numbers.armCycle,s={SWING_TO_PICK:i*.28,GRAB:i*.16,SWING_TO_SILO:i*.34,RELEASE:i*.22};if(t.phase==="IDLE"){if(!Jn(e,"ROBOT_ARM"))return;const o=t.queue.shift();if(o===void 0)return;const a=n.units.find(l=>l.id===o);if(!a||a.stage!=="ARM_PICK")return;t.unitId=o,t.target=a.decided,t.phase="SWING_TO_PICK",t.phaseElapsed=0;return}if(t.phaseElapsed+=lt.STEP,t.phaseElapsed<(s[t.phase]??.1))return;t.phaseElapsed=0;const r=n.units.find(o=>o.id===t.unitId);switch(t.phase){case"SWING_TO_PICK":t.phase="GRAB";break;case"GRAB":r&&(r.stage="ARM_CARRY",r.carrier="ARM"),t.phase="SWING_TO_SILO";break;case"SWING_TO_SILO":t.phase="RELEASE";break;case"RELEASE":{const o=(r==null?void 0:r.decided)??null;if(r&&o){const a=Object.keys(Rn).find(l=>Rn[l].material===o);a&&fc(n,r,a)}r&&(r.carrier=null),t.unitId=null,t.target=null,t.cycles+=1,t.phase="IDLE";break}default:t.phase="IDLE"}}function _p(n,e){return n.bales.some(t=>t.status==="PRESSING"&&(e==="BALER_CARDBOARD"?t.source==="BALER_CARDBOARD":t.source!=="BALER_CARDBOARD"&&pp[t.material]===e))}function lg(n,e){const t=n.time>=lt.FLUSH_BALING_AT;for(const i of Object.keys(n.silos)){const s=n.silos[i],r=e.numbers[`threshold:${i}`]??Rn[i].threshold;if(s.threshold=r,s.baling!==null)continue;const o=t?1:r;if(s.units<o)continue;const a=pp[s.material];if(!a||!Jn(e,a)||_p(n,a))continue;const l=n.units.filter(d=>d.stage==="IN_SILO"&&d.material===s.material),c=e.numbers[sg[a]],u=n.nextBaleId;n.nextBaleId+=1,n.bales.push({id:u,material:s.material,unitIds:l.map(d=>d.id),massT:l.reduce((d,h)=>d+Ha(h),0),source:i,status:"PRESSING",carrier:null,createdAt:n.time,pressRemaining:c});for(const d of l)d.stage="IN_BALE",d.baleId=u,d.s=0;s.units=0,s.baling=c,s.balesProduced+=1,En(n,`${It[s.material].short} 料仓达阈值，开始打包（${l.length} 包）`)}}function cg(n,e){if(n.storage.cardboardUnits<2||!Jn(e,"BALER_CARDBOARD")||_p(n,"BALER_CARDBOARD"))return;const t=n.units.filter(r=>r.stage==="STORED_CARDBOARD").slice(0,2);if(t.length<2)return;const i=e.numbers.baleCycleCardboard,s=n.nextBaleId;n.nextBaleId+=1,n.bales.push({id:s,material:"CARDBOARD",unitIds:t.map(r=>r.id),massT:t.reduce((r,o)=>r+Ha(o),0),source:"BALER_CARDBOARD",status:"PRESSING",carrier:null,createdAt:n.time,pressRemaining:i});for(const r of t)r.stage="IN_BALE",r.baleId=s,r.s=0;n.storage.cardboardUnits-=t.length,En(n,"纸板打包机开始压制纸板包")}function ug(n){for(const e of n.bales){if(e.status!=="PRESSING"||(e.pressRemaining-=lt.STEP,e.pressRemaining>0))continue;e.pressRemaining=0,e.status="READY";const t=e.source==="BALER_CARDBOARD"?null:e.source;t&&(n.silos[t].baling=null),En(n,`${It[e.material].short} 打包完成，等待叉车搬运`)}}const Fd=(n,e,t)=>n+(e-n)*t;function In(n,e,t){const i=n.trucks[e],s=cc[e];i.progress=t,i.x=Fd(s.dock.x,s.x,1-t),i.z=Fd(s.dock.z,s.z,1-t)}const dg={TRUCK_A:n=>n.kind==="PLASTIC"||n.kind==="TEXTILE",TRUCK_B:n=>n.kind==="BULK"};function Bd(n,e,t,i){return n+(e-n)*t/Math.max(1,i)}function hg(n,e){const t=lt[e],i=n.units.filter(dg[e]),s=e==="TRUCK_A"?lt.TRUCK_A.plasticsDone:(lt.TRUCK_B.unloadFrom+lt.TRUCK_B.unloadTo)/2,r=i.map((o,a)=>(e==="TRUCK_A"?a<6:a<2)?Bd(t.unloadFrom,s,a,e==="TRUCK_A"?6:2):Bd(s,t.unloadTo,e==="TRUCK_A"?a-6:a-2,e==="TRUCK_A"?6:2));for(;n.released[e]<i.length&&r[n.released[e]]<=n.time;){const o=i[n.released[e]];o.stage="STAGING",o.s=0,o.carrier=null,n.ledger.received[o.material]+=1,n.ledger.receivedMassT+=Ha(o),n.trucks[e].onboard-=1,n.released[e]+=1,En(n,`${n.trucks[e].label} 卸货：${o.origin} 来料包入场`)}n.trucks[e].loadLabel=n.trucks[e].onboard>0?`待卸货 ${n.trucks[e].onboard} 包`:"已卸空"}function fg(n){const e=n.time;for(const s of["TRUCK_A","TRUCK_B"]){const r=n.trucks[s],o=lt[s];e<o.arriveFrom?(r.status="OFF_SITE",In(n,s,0)):e<o.dockAt?(r.status="APPROACHING",In(n,s,(e-o.arriveFrom)/(o.dockAt-o.arriveFrom))):e<o.unloadFrom?(r.status="DOCKED",In(n,s,1)):e<o.unloadTo?(r.status="UNLOADING",In(n,s,1),hg(n,s)):e<o.leaveFrom?(r.status="DOCKED",In(n,s,1)):e<o.offSiteAt?(r.status="LEAVING",In(n,s,1-(e-o.leaveFrom)/(o.offSiteAt-o.leaveFrom)),s==="TRUCK_B"&&_g(n)):(r.status="OFF_SITE",In(n,s,0))}const t=n.trucks.TRUCK_C,i=lt.TRUCK_C;e<i.arriveFrom?(t.status="OFF_SITE",In(n,"TRUCK_C",0),t.weighed=!1):e<i.dockAt?(t.status="APPROACHING",In(n,"TRUCK_C",(e-i.arriveFrom)/(i.dockAt-i.arriveFrom))):e<i.leaveFrom?(t.status=e>=i.loadFrom?"LOADING":"DOCKED",In(n,"TRUCK_C",1),pg(n)):e<i.offSiteAt?(t.status="LEAVING",In(n,"TRUCK_C",1-(e-i.leaveFrom)/(i.offSiteAt-i.leaveFrom)),mg(n),t.weighed=t.z<lo.z):(t.status="OFF_SITE",In(n,"TRUCK_C",0),t.weighed=!1)}function pg(n){for(const e of n.bales)e.status==="AT_DOCK"&&(e.status="LOADED",n.trucks.TRUCK_C.onboard+=1,En(n,`${e.material} 打包块装上出货货车`));n.trucks.TRUCK_C.loadLabel=n.trucks.TRUCK_C.onboard>0?`已装 ${n.trucks.TRUCK_C.onboard} 个打包块`:"等待装货"}function mg(n){yg(n,t=>t.status==="LOADED");const e=n.trucks.TRUCK_C;e.onboard=0,e.loadLabel="已出货离场"}function _g(n){for(const t of n.units)t.stage==="WAITING_EXPORT"&&Ta(n,t);const e=n.trucks.TRUCK_B;e.onboard=0,e.loadLabel="回程装走杂项后离场"}function gg(n){if(n.time<lt.FINAL_SWEEP_AT||n.swept)return;n.swept=!0;let e=0;for(const t of n.bales)if(t.status!=="SHIPPED"){t.status="SHIPPED",t.carrier=null;for(const i of t.unitIds){const s=n.units.find(r=>r.id===i);s&&Ta(n,s)&&(e+=1)}}for(const t of n.units)t.stage!=="TRUCK"&&Ta(n,t)&&(e+=1);for(const t of Object.keys(n.silos))n.silos[t].units=0,n.silos[t].baling=null;n.storage.cardboardUnits=0,n.storage.miscUnits=0,n.arm.phase="IDLE",n.arm.phaseElapsed=0,n.arm.unitId=null,n.arm.target=null,n.arm.queue.length=0;for(const t of n.jobs)t.status="DONE";for(const t of Object.values(n.forklifts)){n.aisle.occupant===t.id&&(n.aisle.occupant=null),t.status="IDLE",t.jobId=null,t.leg=null,t.loaded=!1,t.cargoLabel="空载",t.cargoUnitIds=[],t.cargoBaleIds=[],t.dwell=0,t.returning=!1;const i=lt.DURATION-n.time,s=Math.hypot(t.x-t.startX,t.z-t.startZ);(n.anomalies.emergencyStop||s>i*Xr.returnSpeed)&&(t.x=t.startX,t.z=t.startZ,t.route=[{x:t.startX,z:t.startZ}],t.travelled=0,t.progress=0)}e&&En(n,`班末清场：${e} 包剩余物料已计入出场`)}const vg={SILO_PET:"BALER_PLASTIC",SILO_HDPE:"BALER_PLASTIC",SILO_COTTON:"BALER_TEXTILE",SILO_POLYESTER:"BALER_TEXTILE",SILO_BLEND:"BALER_TEXTILE",BALER_CARDBOARD:"BALER_CARDBOARD"};function Hs(n,e){n.jobs.some(t=>t.id===e.id)||n.jobs.push({...e,status:"QUEUED",vehicle:null,startedAt:null})}function xg(n){if(n.swept)return;const e=s=>n.units.filter(r=>r.stage==="STAGING"&&r.kind===s).map(r=>r.id);n.released.TRUCK_A>=6&&Hs(n,{id:"J-PLASTIC-IN",unitIds:e("PLASTIC"),baleIds:[],label:"塑料来料包上线",from:"STAGING",to:"VIB_FEEDER",preferred:"FL1",enqueuedAt:n.time}),n.released.TRUCK_A>=12&&Hs(n,{id:"J-TEXTILE-IN",unitIds:e("TEXTILE"),baleIds:[],label:"纺织来料包上线",from:"STAGING",to:"SPREADER",preferred:"FL2",enqueuedAt:n.time});const t=s=>n.units.filter(r=>r.stage==="STAGING"&&r.origin===s).map(r=>r.id);n.released.TRUCK_B>=2&&Hs(n,{id:"J-CARDBOARD-IN",unitIds:t("CARDBOARD"),baleIds:[],label:"纸板入库",from:"STAGING",to:"STORAGE_CARDBOARD",preferred:"FL1",enqueuedAt:n.time}),n.released.TRUCK_B>=4&&Hs(n,{id:"J-MISC-IN",unitIds:t("MISC"),baleIds:[],label:"杂项入库",from:"STAGING",to:"STORAGE_MISC",preferred:"FL1",enqueuedAt:n.time});const i=n.jobs.filter(s=>s.id.startsWith("J-MISC-OUT"));n.time>=lt.MISC_RETURN_JOB_AT&&n.units.some(s=>s.stage==="STORED_MISC")&&!i.some(s=>s.status!=="DONE")&&Hs(n,{id:`J-MISC-OUT-${i.length+1}`,unitIds:[],baleIds:[],label:"杂项回程装车",from:"STORAGE_MISC",to:"DOCK_IN_2",preferred:"FL2",enqueuedAt:n.time,dynamic:!0});for(const s of n.bales)s.status==="READY"&&Hs(n,{id:`J-BALE-${s.id}`,unitIds:[],baleIds:[s.id],label:`${s.material} 打包块出库`,from:vg[s.source]??"BALER_PLASTIC",to:"DOCK_OUT",preferred:"FL1",enqueuedAt:n.time})}const Eg=n=>n.loaded?"TRAVEL_LOADED":"TRAVEL_EMPTY";function Au(n,e,t){const i=H_(e,t);n.route=i,n.travelled=0,n.x=e.x,n.z=e.z}function gp(n,e){const t=Wr[e],i=Y_[n];return{x:t.x+i.x,z:t.z+i.z}}const Sg={STAGING:"STAGING",STORAGE_MISC:"STORED_MISC",STORAGE_CARDBOARD:"STORED_CARDBOARD"};function Mg(n,e){const t=e.dynamic?Sg[e.from]:void 0;return{units:(t?n.units.filter(s=>s.stage===t):n.units.filter(s=>e.unitIds.includes(s.id))).filter(s=>s.stage!=="SHIPPED"),bales:n.bales.filter(s=>e.baleIds.includes(s.id)&&s.status!=="SHIPPED")}}function Tg(n,e){return{units:n.units.filter(t=>e.cargoUnitIds.includes(t.id)&&t.stage!=="SHIPPED"),bales:n.bales.filter(t=>e.cargoBaleIds.includes(t.id)&&t.status!=="SHIPPED")}}function Ta(n,e){return e.stage==="SHIPPED"?!1:(e.stage="SHIPPED",e.baleId=null,e.carrier=null,e.s=0,n.ledger.shipped[e.material]+=1,n.ledger.shippedByOrigin[e.origin]+=1,n.ledger.shippedMassT+=Ha(e),!0)}function yg(n,e){for(const t of n.bales)if(!(t.status==="SHIPPED"||!e(t))){t.status="SHIPPED",t.carrier=null;for(const i of t.unitIds){const s=n.units.find(r=>r.id===i);s&&Ta(n,s)}}}function bg(n,e,t){const i=n.forklifts[t],{units:s,bales:r}=Mg(n,e);i.cargoUnitIds=s.map(o=>o.id),i.cargoBaleIds=r.map(o=>o.id);for(const o of s)o.stage==="STORED_MISC"&&(n.storage.miscUnits-=1),o.stage==="STORED_CARDBOARD"&&(n.storage.cardboardUnits-=1),o.stage="CARRIED",o.carrier=t;for(const o of r)o.status="CARRIED",o.carrier=t;i.loaded=!0,i.cargoLabel=`${s.length+r.length} 件 · ${e.label}`}function Ag(n,e,t){const i=n.forklifts[t],{units:s,bales:r}=Tg(n,i);for(const o of s)switch(o.carrier=null,o.s=0,e.to){case"VIB_FEEDER":o.stage="HOPPER";break;case"SPREADER":o.stage="SPREAD_BUFFER";break;case"STORAGE_CARDBOARD":o.stage="STORED_CARDBOARD",n.storage.cardboardUnits+=1;break;case"STORAGE_MISC":o.stage="STORED_MISC",n.storage.miscUnits+=1;break;case"DOCK_IN_2":o.stage="WAITING_EXPORT";break;default:o.stage="STAGING"}for(const o of r)o.carrier=null,o.status=n.trucks.TRUCK_C.status==="LOADING"?"LOADED":"AT_DOCK",o.status==="LOADED"?(n.trucks.TRUCK_C.onboard+=1,n.trucks.TRUCK_C.loadLabel=`已装 ${n.trucks.TRUCK_C.onboard} 个打包块`,En(n,`${o.material} 打包块装上出货货车`)):En(n,`${o.material} 打包块已送至出货月台等待装车`);i.loaded=!1,i.cargoLabel="空载",i.cargoUnitIds=[],i.cargoBaleIds=[],En(n,`${i.id} 完成搬运：${e.label}`)}function Rg(n){xg(n);for(const e of bu){const t=n.forklifts[e];if(t.status!=="IDLE"||t.jobId)continue;const i=n.jobs.filter(r=>r.status==="QUEUED");if(!i.length)continue;const s=i.find(r=>r.preferred===e)??i[0];s.status="ACTIVE",s.vehicle=e,s.startedAt=n.time,t.jobId=s.id,t.leg="PICKUP",t.status="TRAVEL_EMPTY",t.trips+=1,Au(t,{x:t.x,z:t.z},gp(e,s.from))}}function wg(n){for(const e of bu){const t=n.forklifts[e];if(t.status==="IDLE")continue;const i=n.jobs.find(c=>c.id===t.jobId)??null;if(t.status==="LOADING"||t.status==="UNLOADING"){if(t.dwell-=lt.STEP,t.dwell>0)continue;if(!i){t.status="IDLE",t.leg=null;continue}t.status==="LOADING"?(bg(n,i,e),t.leg="DROPOFF",t.status="TRAVEL_LOADED",Au(t,{x:t.x,z:t.z},gp(e,i.to))):(Ag(n,i,e),i.status="DONE",t.jobId=null,t.leg=null,t.status="IDLE",n.aisle.occupant===e&&(n.aisle.occupant=null));continue}const s=G_(t.route),r=t.travelled+(t.returning?Xr.returnSpeed:Xr.speed)*lt.STEP,o=Math.min(r,s),a=V_(t.route,o);if(a&&n.aisle.occupant!==null&&n.aisle.occupant!==e){t.status="WAITING_AISLE";continue}a?n.aisle.occupant=e:n.aisle.occupant===e&&(n.aisle.occupant=null),t.travelled=o,t.progress=s>0?o/s:1;const l=Su(t.route,o);if(t.x=l.x,t.z=l.z,t.status==="WAITING_AISLE"&&(t.status=t.returning?"TRAVEL_EMPTY":Eg(t)),!(o<s)){if(n.aisle.occupant===e&&(n.aisle.occupant=null),t.returning){t.returning=!1,t.status="IDLE";continue}t.leg==="PICKUP"?(t.status="LOADING",t.dwell=Xr.load):(t.status="UNLOADING",t.dwell=Xr.unload)}}}function Cg(n){for(const e of bu){const t=n.forklifts[e];if(t.status!=="IDLE"||t.jobId||t.returning||n.time<lt.RETURN_HOME_AT)continue;const i={x:t.startX,z:t.startZ};Math.hypot(t.x-i.x,t.z-i.z)<.05||(t.returning=!0,t.leg=null,t.status="TRAVEL_EMPTY",Au(t,{x:t.x,z:t.z},i))}}function kd(n){for(const e of n.puffs)e.life-=lt.STEP;n.puffs=n.puffs.filter(e=>e.life>0)}const di=Math.round(lt.DURATION/lt.STEP);function vp(n,e){if(ia(n,e),fg(n),gg(n),e.flags.emergencyStop){kd(n);return}rg(n,e),og(n,e),ag(n,e),lg(n,e),cg(n,e),ug(n),Rg(n),wg(n),Cg(n),kd(n)}function zd(n,e,t){const i=Math.max(0,Math.min(n,di-1));let s=null,r=1;if(t&&t.length){const o=t.filter(l=>l.step<=i),a=o[o.length-1];a&&(s=dc(a.state),r=a.step+1)}s||(s=na());for(let o=r;o<=i;o+=1)s.step=o,s.time=o*lt.STEP,vp(s,or(e,o)),t&&o<i&&o%lt.KEYFRAME_STEPS===0&&t.push({step:o,state:dc(s)});return s}function Pg(n,e){const t=fp(e.at);return n.filter(i=>i.step<t)}class Lg{constructor(){ct(this,"log",[]);ct(this,"cache",[]);ct(this,"state",na());ct(this,"step",0);ct(this,"accumulator",0)}get current(){return this.state}get currentStep(){return this.step}get completedCycles(){return Math.floor(this.step/di)}get timeInShift(){return this.step%di*lt.STEP}get commands(){return this.log}reset(){this.state=na(),this.step=0,this.accumulator=0,this.cache=[]}addCommand(e){this.log=[...this.log,e].sort((t,i)=>t.at-i.at),this.cache=Pg(this.cache,e),this.replayCurrentStep()}clearCommands(){this.log=[],this.cache=[],this.replayCurrentStep()}replayCurrentStep(){const e=this.step;this.state=zd(e%di,this.log,this.cache),this.step=e,this.state.cycle=this.completedCycles,ia(this.state,or(this.log,e%di))}seekToStep(e){const t=Math.max(0,e),i=t%di,s=this.step%di;t<this.step||i<s?(this.state=zd(i,this.log,this.cache),this.step=t):this.stepForward(i-s),this.state.step=i,this.state.time=i*lt.STEP,this.state.cycle=this.completedCycles,ia(this.state,or(this.log,i))}seekToTime(e){this.seekToStep(Math.round(e/lt.STEP))}advanceBy(e){this.accumulator+=e/lt.STEP;const t=Math.floor(this.accumulator);t<=0||(this.accumulator-=t,this.stepForward(t))}stepForward(e){for(let t=0;t<e;t+=1){const i=this.step+1,s=i%di;s===0?this.state=na():(this.state.step=s,this.state.time=s*lt.STEP,vp(this.state,or(this.log,s)),s%lt.KEYFRAME_STEPS===0&&this.cache.push({step:s,state:dc(this.state)})),this.step=i}this.state.cycle=this.completedCycles,ia(this.state,or(this.log,this.step%di))}}const xp=Symbol("simulation");function Ig(n){If(xp,n)}function Dg(){const n=Zr(xp,null);if(!n)throw new Error("Simulation 未提供：请在根组件调用 provideSimulation()");return n}const Og={RUNNING:"运行中",WAITING:"等待物料",IDLE:"待机",WARNING:"报警",STOPPED:"已停机"},fs=(n,e)=>n.units.some(t=>e.includes(t.stage)),yn=(n,e)=>n.units.filter(t=>e.includes(t.stage)).length,sa=(n,e=1)=>n.toFixed(e),Ep={SILO_PET:"BALER_PLASTIC",SILO_HDPE:"BALER_PLASTIC",SILO_COTTON:"BALER_TEXTILE",SILO_POLYESTER:"BALER_TEXTILE",SILO_BLEND:"BALER_TEXTILE",BALER_CARDBOARD:"BALER_CARDBOARD"},ul=(n,e)=>n.bales.some(t=>t.status==="PRESSING"&&Ep[t.source]===e);function Ru(n,e){if(n.anomalies.emergencyStop)return"STOPPED";switch(e){case"VIB_FEEDER":return yn(n,["HOPPER"])>0?n.time<=lt.FEED_DONE_AT?"RUNNING":"WAITING":n.time<lt.TRUCK_A.unloadTo?"WAITING":"IDLE";case"INCLINE":return fs(n,["INCLINE"])?"RUNNING":yn(n,["HOPPER"])>0?"WAITING":"IDLE";case"SORTER_1":return fs(n,["SORTER_1","PASS_1"])?"RUNNING":"IDLE";case"SORTER_2":return fs(n,["SORTER_2","PASS_2"])?"RUNNING":"IDLE";case"CONVEYOR":return fs(n,["PASS_1","PASS_2","LANE_PET","LANE_HDPE","LANE_TAIL"])?"RUNNING":"IDLE";case"SPREADER":return fs(n,["SPREADER","SPREAD_BUFFER"])?"RUNNING":"IDLE";case"HYPERSPEC":return fs(n,["HYPERSPEC"])?"RUNNING":"IDLE";case"ROBOT_ARM":return n.arm.phase!=="IDLE"||n.arm.queue.length>0?"RUNNING":fs(n,["LANE_COTTON","LANE_POLYESTER","LANE_BLEND"])?"WAITING":"IDLE";case"SILO_PET":case"SILO_HDPE":case"SILO_COTTON":case"SILO_POLYESTER":case"SILO_BLEND":{const t=n.silos[e],i=n.anomalies.siloOverflowWarning?t.capacity-1:t.capacity;return t.overflowUnits>0||t.units>=i?"WARNING":t.baling!==null||t.units>0?"RUNNING":"IDLE"}case"BALER_PLASTIC":return ul(n,"BALER_PLASTIC")?"RUNNING":"IDLE";case"BALER_TEXTILE":return ul(n,"BALER_TEXTILE")?"RUNNING":"IDLE";case"BALER_CARDBOARD":return ul(n,"BALER_CARDBOARD")?"RUNNING":"IDLE";case"STORAGE_CARDBOARD":return n.storage.cardboardUnits>0?"RUNNING":"IDLE";case"STORAGE_MISC":return n.storage.miscUnits>0?"RUNNING":"IDLE";case"SCALE":{const t=n.trucks.TRUCK_C;return t.status==="LEAVING"&&t.weighed?"RUNNING":"IDLE"}case"TRUCK_A":case"TRUCK_B":case"TRUCK_C":{const t=X_[e];if(!t)return"IDLE";const i=n.trucks[t];return i.status==="OFF_SITE"?"IDLE":i.status==="UNLOADING"||i.status==="LOADING"?"RUNNING":"WAITING"}case"FORKLIFT_1":case"FORKLIFT_2":{const t=dp[e];if(!t)return"IDLE";const i=n.forklifts[t];return i.status==="IDLE"?"IDLE":i.status==="WAITING_AISLE"?"WAITING":"RUNNING"}default:return"IDLE"}}function Ng(n,e){const t=n.silos[e],i=Rn[e].threshold,s=n.anomalies.siloOverflowWarning?t.capacity-1:t.capacity;return[{label:"当前存量",value:`${t.units} / ${t.capacity} 包`,tone:t.units>=s?"warn":"normal"},{label:"打包阈值",value:`${t.threshold||i} 包`},{label:"预警线",value:`${s} 包${n.anomalies.siloOverflowWarning?"（满溢预警已开启）":""}`},{label:"打包状态",value:t.baling===null?t.units>=t.threshold?"等待打包":"未触发":`压制中 ${sa(t.baling)}s`,tone:t.baling===null?"normal":"good"},{label:"本班次打包",value:`${t.balesProduced} 个`},{label:"满仓转入杂项",value:`${t.overflowUnits} 包`,tone:t.overflowUnits>0?"warn":"normal"}]}function Ug(n,e){const t=dp[e];if(!t)return[];const i=n.forklifts[t],s=n.jobs.find(o=>o.id===i.jobId)??null;return[{label:"作业状态",value:{IDLE:"待命",TRAVEL_EMPTY:"空载行驶",LOADING:"装货中",TRAVEL_LOADED:"满载行驶",UNLOADING:"卸货中",WAITING_AISLE:"等待主通道"}[i.status]??i.status},{label:"当前任务",value:s?s.label:"无",tone:s?"good":"normal"},{label:"载货",value:i.cargoLabel},{label:"本班次趟数",value:`${i.trips} 趟`},{label:"主通道",value:n.aisle.occupant===i.id?"占用中":"未占用"}]}function Fg(n,e){const t=n.trucks[e];return[{label:"车辆状态",value:{OFF_SITE:"在途/未到场",APPROACHING:"正在进场",DOCKED:"月台停靠",UNLOADING:"卸货中",LOADING:"装货中",LEAVING:"离场中"}[t.status]??t.status},{label:"车上货物",value:t.loadLabel},{label:"剩余件数",value:`${t.onboard} 件`},{label:"过磅",value:t.weighed?"已过磅":"未过磅",tone:t.weighed?"good":"normal"},{label:"月台",value:e==="TRUCK_C"?"出货月台 03":e==="TRUCK_A"?"进货月台 01":"进货月台 02"}]}function Bg(n,e,t){const i=Tu[e],s=Ru(n,e),r=l=>{const c=(t==null?void 0:t.numbers[l])??up[l]??0;return sa(c,Number.isInteger(c)?0:2)};let o=[],a="";switch(e){case"VIB_FEEDER":o=[{label:"料斗待投",value:`${yn(n,["HOPPER"])} 包`},{label:"累计投料",value:`${n.fedPlastic} 包`},{label:"给料节拍",value:`${r("vibFeedRate")} 包/分`}],a="把压缩的瓶料包打散，按设定速率投料；速率过高会在爬坡机上叠料。";break;case"INCLINE":o=[{label:"带上瓶料",value:`${yn(n,["INCLINE"])} 包`},{label:"抬升高度",value:"0.93 m"},{label:"料层",value:yn(n,["INCLINE"])>2?"偏厚":"单层",tone:yn(n,["INCLINE"])>2?"warn":"good"}],a="抬升并拉开料层，使瓶体以单层进入光选区。";break;case"SORTER_1":case"SORTER_2":{const l=e==="SORTER_1"?"PET":"HDPE",c=n.puffs.filter(u=>u.device===e).length;o=[{label:"识别材质",value:It[l].short},{label:"瞬时气吹",value:c>0?"正在喷射":"待触发",tone:c>0?"good":"normal"},{label:"已识别入仓",value:`${l==="PET"?n.silos.SILO_PET.units:n.silos.SILO_HDPE.units} 包`},{label:"识别阈值",value:`${r(e==="SORTER_1"?"sorter1Threshold":"sorter2Threshold")}`},{label:"气吹压力",value:`${r(e==="SORTER_1"?"airPressure1":"airPressure2")} bar`},{label:"串联次序",value:e==="SORTER_1"?"第 1 级（先分出 PET）":"第 2 级（再分出 HDPE）"}],a=e==="SORTER_1"?"先分出 PET，未命中的物料继续向后；次序不可颠倒，否则 HDPE 无法被第二级识别。":"对通过第一级的物料再分出 HDPE；仍未被吹出的物料成为尾料进入杂项区。";break}case"CONVEYOR":o=[{label:"在带物料",value:`${yn(n,["PASS_1","PASS_2","LANE_PET","LANE_HDPE","LANE_TAIL"])} 包`},{label:"PET 支线",value:`${yn(n,["LANE_PET"])} 包`},{label:"HDPE 支线",value:`${yn(n,["LANE_HDPE"])} 包`},{label:"尾料支线",value:`${yn(n,["LANE_TAIL"])} 包`},{label:"带速",value:`${r("beltSpeed")} m/s`}],a="把三路物料分别送入对应料仓；带速决定全线节拍。";break;case"SILO_PET":case"SILO_HDPE":case"SILO_COTTON":case"SILO_POLYESTER":case"SILO_BLEND":o=Ng(n,e),a="料仓只接收本仓材质；达到阈值即请求打包，满仓时物料转入杂项存储。";break;case"BALER_PLASTIC":case"BALER_TEXTILE":case"BALER_CARDBOARD":{const l=n.bales.filter(u=>Ep[u.source]===e),c=l.find(u=>u.status==="PRESSING");o=[{label:"压制状态",value:c?`压制中，剩余 ${sa(c.pressRemaining)}s`:"待机",tone:c?"good":"normal"},{label:"本班次出包",value:`${l.filter(u=>u.status!=="PRESSING").length} 个`},{label:"待搬运",value:`${l.filter(u=>u.status==="READY").length} 个`},{label:"已装车",value:`${l.filter(u=>u.status==="LOADED"||u.status==="SHIPPED").length} 个`},{label:"服务料仓",value:e==="BALER_PLASTIC"?"PET / HDPE":e==="BALER_TEXTILE"?"棉 / 涤纶 / 混纺（共用）":"纸板存储区"},{label:"压制周期",value:`${r(e==="BALER_PLASTIC"?"baleCyclePlastic":e==="BALER_TEXTILE"?"baleCycleTextile":"baleCycleCardboard")} s`}],a=e==="BALER_TEXTILE"?"三个纺织料仓共用这一台打包机，按料仓就绪顺序轮流压制。":"每次压制消耗料仓当前全部存量，形成一个打包块。";break}case"SPREADER":o=[{label:"待铺料",value:`${yn(n,["SPREAD_BUFFER"])} 包`},{label:"累计铺料",value:`${n.fedTextile} 包`},{label:"摊铺宽度",value:"1.05 m"},{label:"铺料速率",value:`${r("spreadRate")} 包/分`}],a="把成包纺织品摊成单层，便于高光谱逐件识别。";break;case"HYPERSPEC":o=[{label:"识别中",value:`${yn(n,["HYPERSPEC"])} 包`},{label:"已识别待抓取",value:`${yn(n,["LANE_COTTON","LANE_POLYESTER","LANE_BLEND"])} 包`},{label:"本班次存入杂项",value:`${n.storage.miscUnits} 包`},{label:"识别材质",value:"棉 / 涤纶 / 混纺"},{label:"材质识别阈值",value:`${r("hyperspecThreshold")}`}],a="按材质给出目标料仓；无法识别的物料进入尾料口转杂项。";break;case"ROBOT_ARM":{o=[{label:"当前动作",value:{IDLE:"待取件",SWING_TO_PICK:"移动到取件位",GRAB:"抓取中",SWING_TO_SILO:"转运到料仓",RELEASE:"投放中"}[n.arm.phase]??n.arm.phase,tone:n.arm.phase==="IDLE"?"normal":"good"},{label:"排队待抓",value:`${n.arm.queue.length} 件`},{label:"目标料仓",value:n.arm.target?It[n.arm.target].short:"—"},{label:"本班次抓取",value:`${n.arm.cycles} 件`},{label:"抓取节拍",value:`${r("armCycle")} s/件`}],a="单臂串行作业，抓取节拍是纺织品线的主要瓶颈。";break}case"STORAGE_CARDBOARD":o=[{label:"纸板存量",value:`${n.storage.cardboardUnits} 包`},{label:"纸板包",value:`${n.bales.filter(l=>l.source==="BALER_CARDBOARD").length} 个`},{label:"已转运",value:`${n.bales.filter(l=>l.material==="CARDBOARD"&&(l.status==="LOADED"||l.status==="SHIPPED")).length} 个`}],a="纸板不进分拣线，只在此堆存、打包与转运。";break;case"STORAGE_MISC":o=[{label:"杂项存量",value:`${n.storage.miscUnits} 包`},{label:"其中光选尾料",value:`${n.units.filter(l=>l.stage==="STORED_MISC"&&l.origin!=="MISC").length} 包`},{label:"待回程装车",value:`${n.units.filter(l=>l.stage==="WAITING_EXPORT").length} 包`}],a="存放杂项来料，以及光选尾料和高光谱无法识别的物料。";break;case"SCALE":o=[{label:"地磅状态",value:n.trucks.TRUCK_C.weighed?"正在过磅":"空闲"},{label:"最近称重",value:n.trucks.TRUCK_C.weighed?`${sa(n.ledger.shippedMassT,2)} t`:"—"},{label:"量程",value:"0–60 t（演示）"}],a="出货车辆离场前过磅，出货量以此计入台账。";break;case"TRUCK_A":case"TRUCK_B":case"TRUCK_C":o=Fg(n,e),a=e==="TRUCK_C"?"装完全部成品打包块后过磅离场。":"卸完来料后停靠等待或离场，转运车辆还要装走回程货物。";break;case"FORKLIFT_1":case"FORKLIFT_2":o=Ug(n,e),a="跨区搬运必须通过单行主通道，同一时刻只允许一台叉车占用。";break;default:o=[]}return{id:e,spec:i,status:s,statusLabel:Og[s],readouts:o,upstream:Dd[e].upstream,downstream:Dd[e].downstream,controls:yu[e]??[],boundary:"状态与读数均为本地仿真值，不接 PLC、称重或 MES；控制项为演示干预，不代表设备真实指令。",stateNote:a}}function kg(){const n=Ji();let e=0;for(const t of[...Fn.plastic,...Fn.textile,...Fn.cardboard,...Fn.misc])n[t.material]+=1,e+=It[t.material].unitMassT;return{received:n,receivedMassT:e}}function zg(n,e){const t=kg(),i=Ji(),s=Ji(),r=Ji();for(const u of ta)i[u]=t.received[u]*e+n.ledger.received[u],s[u]=t.received[u]*e+n.ledger.shippedByOrigin[u],r[u]=t.received[u]*e+n.ledger.shipped[u];const o=ao.reduce((u,d)=>u+i[d],0),a=ao.reduce((u,d)=>u+r[d],0),l=u=>n.units.filter(d=>d.stage!=="SHIPPED"&&d.stage!=="TRUCK"&&d.origin===u).length,c=Mu.filter(u=>u.kind!=="zone").map(u=>u.id);return{receivedMassT:t.receivedMassT*e+n.ledger.receivedMassT,shippedMassT:t.receivedMassT*e+n.ledger.shippedMassT,receivedUnits:Object.values(i).reduce((u,d)=>u+d,0),shippedUnits:Object.values(s).reduce((u,d)=>u+d,0),onSiteUnits:ta.reduce((u,d)=>u+l(d),0),lostUnits:Object.values(n.ledger.lost).reduce((u,d)=>u+d,0),tailUnits:n.units.filter(u=>u.origin!==u.material).length,recoveryRate:o===0?0:Ma(a/o),runningDevices:c.filter(u=>Ru(n,u)==="RUNNING").length,totalDevices:c.length,balesProduced:n.bales.length,truckTrips:Object.values(n.trucks).filter(u=>u.status!=="OFF_SITE").length,forkliftTrips:n.forklifts.FL1.trips+n.forklifts.FL2.trips,shiftProgress:Ma(n.time/lt.DURATION),byMaterial:ta.map(u=>({material:u,label:It[u].short,received:i[u],shipped:s[u],onSite:l(u)}))}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wu="177",pr={ROTATE:0,DOLLY:1,PAN:2},ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hg=0,Hd=1,Gg=2,Sp=1,Mp=2,Ni=3,rs=0,mn=1,gi=2,ts=0,mr=1,Gd=2,Vd=3,Wd=4,Vg=5,Ts=100,Wg=101,Xg=102,Yg=103,Kg=104,$g=200,qg=201,jg=202,Zg=203,pc=204,mc=205,Jg=206,Qg=207,ev=208,tv=209,nv=210,iv=211,sv=212,rv=213,ov=214,_c=0,gc=1,vc=2,Sr=3,xc=4,Ec=5,Sc=6,Mc=7,Tp=0,av=1,lv=2,ns=0,cv=1,uv=2,dv=3,yp=4,hv=5,fv=6,pv=7,bp=300,Mr=301,Tr=302,Tc=303,yc=304,Ga=306,co=1e3,Rs=1001,bc=1002,wn=1003,mv=1004,Lo=1005,xi=1006,dl=1007,ws=1008,Ri=1009,Ap=1010,Rp=1011,uo=1012,Cu=1013,Ds=1014,Ei=1015,xo=1016,Pu=1017,Lu=1018,ho=1020,wp=35902,Cp=1021,Pp=1022,ti=1023,fo=1026,po=1027,Iu=1028,Du=1029,Lp=1030,Ou=1031,Nu=1033,ra=33776,oa=33777,aa=33778,la=33779,Ac=35840,Rc=35841,wc=35842,Cc=35843,Pc=36196,Lc=37492,Ic=37496,Dc=37808,Oc=37809,Nc=37810,Uc=37811,Fc=37812,Bc=37813,kc=37814,zc=37815,Hc=37816,Gc=37817,Vc=37818,Wc=37819,Xc=37820,Yc=37821,ca=36492,Kc=36494,$c=36495,Ip=36283,qc=36284,jc=36285,Zc=36286,_v=3200,gv=3201,Dp=0,vv=1,Zi="",un="srgb",yr="srgb-linear",ya="linear",St="srgb",Gs=7680,Xd=519,xv=512,Ev=513,Sv=514,Op=515,Mv=516,Tv=517,yv=518,bv=519,Yd=35044,Kd="300 es",ki=2e3,ba=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,Jc=180/Math.PI;function Eo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Av(n,e){return(n%e+e)%e}function hl(n,e,t){return(1-t)*n+t*e}function Or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Rv={DEG2RAD:ua};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class os{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const h=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==_){let m=1-a;const p=l*h+c*f+u*_+d*v,T=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const D=Math.sqrt(M),R=Math.atan2(D,p*T);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}const x=a*T;if(l=l*m+h*x,c=c*m+f*x,u=u*m+_*x,d=d*m+v*x,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+u*d+l*f-c*h,e[t+1]=l*_+u*h+c*d-a*f,e[t+2]=c*_+u*f+a*h-l*d,e[t+3]=u*_-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fl=new B,$d=new os;class nt{constructor(e,t,i,s,r,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],_=i[8],v=s[0],m=s[3],p=s[6],T=s[1],M=s[4],x=s[7],D=s[2],R=s[5],C=s[8];return r[0]=o*v+a*T+l*D,r[3]=o*m+a*M+l*R,r[6]=o*p+a*x+l*C,r[1]=c*v+u*T+d*D,r[4]=c*m+u*M+d*R,r[7]=c*p+u*x+d*C,r[2]=h*v+f*T+_*D,r[5]=h*m+f*M+_*R,r[8]=h*p+f*x+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,_=t*d+i*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pl.makeScale(e,t)),this}rotate(e){return this.premultiply(pl.makeRotation(-e)),this}translate(e,t){return this.premultiply(pl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pl=new nt;function Np(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wv(){const n=Aa("canvas");return n.style.display="block",n}const qd={};function _r(n){n in qd||(qd[n]=!0,console.warn(n))}function Cv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Pv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jd=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zd=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iv(){const n={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zi?ya:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[yr]:{primaries:e,whitePoint:i,transfer:ya,toXYZ:jd,fromXYZ:Zd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:St,toXYZ:jd,fromXYZ:Zd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}const ft=Iv();function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vs;class Dv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vs===void 0&&(Vs=Aa("canvas")),Vs.width=e.width,Vs.height=e.height;const s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zi(t[i]/255)*255):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ov=0;class Uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ml(s[o].image)):r.push(ml(s[o]))}else r=ml(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nv=0;const _l=new B;class tn extends Fs{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=Rs,s=Rs,r=xi,o=ws,a=ti,l=Ri,c=tn.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Eo(),this.name="",this.source=new Uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case Rs:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case Rs:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=bp;tn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,s=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(f+1)/2,D=(p+1)/2,R=(u+h)/4,C=(d+v)/4,L=(_+m)/4;return M>x&&M>D?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=C/i):x>D?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=L/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=C/r,s=L/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(d-v)/T,this.z=(h-u)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uv extends Fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new tn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Uu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends Uv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Up extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fv extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Do.subVectors(this.max,Nr),Ws.subVectors(e.a,Nr),Xs.subVectors(e.b,Nr),Ys.subVectors(e.c,Nr),Gi.subVectors(Xs,Ws),Vi.subVectors(Ys,Xs),ps.subVectors(Ws,Ys);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-ps.z,ps.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,ps.z,0,-ps.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-ps.y,ps.x,0];return!gl(t,Ws,Xs,Ys,Do)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,Ws,Xs,Ys,Do))?!1:(Oo.crossVectors(Gi,Vi),t=[Oo.x,Oo.y,Oo.z],gl(t,Ws,Xs,Ys,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new B,new B,new B,new B,new B,new B,new B,new B],Vn=new B,Io=new Bs,Ws=new B,Xs=new B,Ys=new B,Gi=new B,Vi=new B,ps=new B,Nr=new B,Do=new B,Oo=new B,ms=new B;function gl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ms.fromArray(n,r);const a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),u=i.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bv=new Bs,Ur=new B,vl=new B;class So{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Bv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(vl)),this.expandByPoint(Ur.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Li=new B,xl=new B,No=new B,Wi=new B,El=new B,Uo=new B,Sl=new B;class Fu{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xl.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(xl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(No),a=Wi.dot(this.direction),l=-Wi.dot(No),c=Wi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,_;if(u>0)if(d=o*l-a,h=o*a-l,_=r*u,d>=0)if(h>=-_)if(h<=_){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xl).addScaledVector(No,h),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,s,r){El.subVectors(t,e),Uo.subVectors(i,e),Sl.crossVectors(El,Uo);let o=this.direction.dot(Sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(Uo.crossVectors(Wi,Uo));if(l<0)return null;const c=a*this.direction.dot(El.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(Sl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,_,v,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,_,v,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,_=c*u,v=c*d;t[0]=h+v*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,_=c*u,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=_*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*d,t[8]=_*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+_,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kv,e,zv)}lookAt(e,t,i){const s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Xi.crossVectors(i,Mn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Xi.crossVectors(i,Mn)),Xi.normalize(),Fo.crossVectors(Mn,Xi),s[0]=Xi.x,s[4]=Fo.x,s[8]=Mn.x,s[1]=Xi.y,s[5]=Fo.y,s[9]=Mn.y,s[2]=Xi.z,s[6]=Fo.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],_=i[2],v=i[6],m=i[10],p=i[14],T=i[3],M=i[7],x=i[11],D=i[15],R=s[0],C=s[4],L=s[8],y=s[12],E=s[1],w=s[5],U=s[9],V=s[13],te=s[2],K=s[6],k=s[10],$=s[14],X=s[3],ge=s[7],we=s[11],Ie=s[15];return r[0]=o*R+a*E+l*te+c*X,r[4]=o*C+a*w+l*K+c*ge,r[8]=o*L+a*U+l*k+c*we,r[12]=o*y+a*V+l*$+c*Ie,r[1]=u*R+d*E+h*te+f*X,r[5]=u*C+d*w+h*K+f*ge,r[9]=u*L+d*U+h*k+f*we,r[13]=u*y+d*V+h*$+f*Ie,r[2]=_*R+v*E+m*te+p*X,r[6]=_*C+v*w+m*K+p*ge,r[10]=_*L+v*U+m*k+p*we,r[14]=_*y+v*V+m*$+p*Ie,r[3]=T*R+M*E+x*te+D*X,r[7]=T*C+M*w+x*K+D*ge,r[11]=T*L+M*U+x*k+D*we,r[15]=T*y+M*V+x*$+D*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+r*l*d-s*c*d-r*a*h+i*c*h+s*a*f-i*l*f)+v*(+t*l*f-t*c*h+r*o*h-s*o*f+s*c*u-r*l*u)+m*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*u-i*c*u)+p*(-s*a*u-t*l*d+t*a*h+s*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],v=e[13],m=e[14],p=e[15],T=d*m*c-v*h*c+v*l*f-a*m*f-d*l*p+a*h*p,M=_*h*c-u*m*c-_*l*f+o*m*f+u*l*p-o*h*p,x=u*v*c-_*d*c+_*a*f-o*v*f-u*a*p+o*d*p,D=_*d*l-u*v*l-_*a*h+o*v*h+u*a*m-o*d*m,R=t*T+i*M+s*x+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=T*C,e[1]=(v*h*r-d*m*r-v*s*f+i*m*f+d*s*p-i*h*p)*C,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*C,e[3]=(d*l*r-a*h*r-d*s*c+i*h*c+a*s*f-i*l*f)*C,e[4]=M*C,e[5]=(u*m*r-_*h*r+_*s*f-t*m*f-u*s*p+t*h*p)*C,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*p-t*l*p)*C,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*f+t*l*f)*C,e[8]=x*C,e[9]=(_*d*r-u*v*r-_*i*f+t*v*f+u*i*p-t*d*p)*C,e[10]=(o*v*r-_*a*r+_*i*c-t*v*c-o*i*p+t*a*p)*C,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*f-t*a*f)*C,e[12]=D*C,e[13]=(u*v*s-_*d*s+_*i*h-t*v*h-u*i*m+t*d*m)*C,e[14]=(_*a*s-o*v*s-_*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,_=r*d,v=o*u,m=o*d,p=a*d,T=l*c,M=l*u,x=l*d,D=i.x,R=i.y,C=i.z;return s[0]=(1-(v+p))*D,s[1]=(f+x)*D,s[2]=(_-M)*D,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(h+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(_+M)*C,s[9]=(m-T)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ks.set(s[0],s[1],s[2]).length();const o=Ks.set(s[4],s[5],s[6]).length(),a=Ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);const c=1/r,u=1/o,d=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ki){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let f,_;if(a===ki)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ba)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ki){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),h=(t+e)*c,f=(i+s)*u;let _,v;if(a===ki)_=(o+r)*d,v=-2*d;else if(a===ba)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ks=new B,Wn=new bt,kv=new B(0,0,0),zv=new B(1,1,1),Xi=new B,Fo=new B,Mn=new B,Jd=new bt,Qd=new os;class oi{constructor(e=0,t=0,i=0,s=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hv=0;const eh=new B,$s=new os,Ii=new bt,Bo=new B,Fr=new B,Gv=new B,Vv=new os,th=new B(1,0,0),nh=new B(0,1,0),ih=new B(0,0,1),sh={type:"added"},Wv={type:"removed"},qs={type:"childadded",child:null},Ml={type:"childremoved",child:null};class Wt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new B,t=new oi,i=new os,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new nt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bo.copy(e):Bo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Fr,Bo,this.up):Ii.lookAt(Bo,Fr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ii),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sh),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wv),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sh),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,Gv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Vv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Wt.DEFAULT_UP=new B(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new B,Di=new B,Tl=new B,Oi=new B,js=new B,Zs=new B,rh=new B,yl=new B,bl=new B,Al=new B,Rl=new Tt,wl=new Tt,Cl=new Tt;class Qn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xn.subVectors(s,t),Di.subVectors(i,t),Tl.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(Di),l=Xn.dot(Tl),c=Di.dot(Di),u=Di.dot(Tl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Rl.setScalar(0),wl.setScalar(0),Cl.setScalar(0),Rl.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,i),Cl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rl,r.x),o.addScaledVector(wl,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),Di.subVectors(e,t),Xn.cross(Di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Xn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Qn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,i),Zs.subVectors(r,i),yl.subVectors(e,i);const l=js.dot(yl),c=Zs.dot(yl);if(l<=0&&c<=0)return t.copy(i);bl.subVectors(e,s);const u=js.dot(bl),d=Zs.dot(bl);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(js,o);Al.subVectors(e,r);const f=js.dot(Al),_=Zs.dot(Al);if(_>=0&&f<=_)return t.copy(r);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Zs,a);const m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return rh.subVectors(r,s),a=(d-u)/(d-u+(f-_)),t.copy(s).addScaledVector(rh,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(js,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ko={h:0,s:0,l:0};function Pl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=Av(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Pl(o,r,e+1/3),this.g=Pl(o,r,e),this.b=Pl(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=Fp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return ft.workingToColorSpace(Zt.copy(this),e),Math.round(rt(Zt.r*255,0,255))*65536+Math.round(rt(Zt.g*255,0,255))*256+Math.round(rt(Zt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=un){ft.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(ko);const i=hl(Yi.h,ko.h,t),s=hl(Yi.s,ko.s,t),r=hl(Yi.l,ko.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ut;ut.NAMES=Fp;let Xv=0;class Mo extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=mr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pc&&(i.blendSrc=this.blendSrc),this.blendDst!==mc&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Va extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new B,zo=new Ze;let Yv=0;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yd,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yd&&(e.usage=this.usage),e}}class Bp extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kp extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nn extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Kv=0;const Dn=new bt,Ll=new Wt,Js=new B,Tn=new Bs,Br=new Bs,Vt=new B;class li extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?kp:Bp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Tn.min,Br.min),Tn.expandByPoint(Vt),Vt.addVectors(Tn.max,Br.max),Tn.expandByPoint(Vt)):(Tn.expandByPoint(Br.min),Tn.expandByPoint(Br.max))}Tn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(e,c),Vt.add(Js)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new B,l[L]=new B;const c=new B,u=new B,d=new B,h=new Ze,f=new Ze,_=new Ze,v=new B,m=new B;function p(L,y,E){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,E),h.fromBufferAttribute(r,L),f.fromBufferAttribute(r,y),_.fromBufferAttribute(r,E),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const w=1/(f.x*_.y-_.x*f.y);isFinite(w)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(w),a[L].add(v),a[y].add(v),a[E].add(v),l[L].add(m),l[y].add(m),l[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,y=T.length;L<y;++L){const E=T[L],w=E.start,U=E.count;for(let V=w,te=w+U;V<te;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const M=new B,x=new B,D=new B,R=new B;function C(L){D.fromBufferAttribute(s,L),R.copy(D);const y=a[L];M.copy(y),M.sub(D.multiplyScalar(D.dot(y))).normalize(),x.crossVectors(R,y);const w=x.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,w)}for(let L=0,y=T.length;L<y;++L){const E=T[L],w=E.start,U=E.count;for(let V=w,te=w+U;V<te;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)h[_++]=c[f++]}return new kn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new bt,_s=new Fu,Ho=new So,ah=new B,Go=new B,Vo=new B,Wo=new B,Il=new B,Xo=new B,lh=new B,Yo=new B;class kt extends Wt{constructor(e=new li,t=new Va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Il.fromBufferAttribute(d,e),o?Xo.addScaledVector(Il,u):Xo.addScaledVector(Il.sub(t),u))}t.add(Xo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(Ho.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Ho,ah)===null||_s.origin.distanceToSquared(ah)>(e.far-e.near)**2))&&(oh.copy(r).invert(),_s.copy(e.ray).applyMatrix4(oh),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],p=o[m.materialIndex],T=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,D=M;x<D;x+=3){const R=a.getX(x),C=a.getX(x+1),L=a.getX(x+2);s=Ko(this,p,e,i,c,u,d,R,C,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const T=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=Ko(this,o,e,i,c,u,d,T,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],p=o[m.materialIndex],T=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,D=M;x<D;x+=3){const R=x,C=x+1,L=x+2;s=Ko(this,p,e,i,c,u,d,R,C,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const T=m,M=m+1,x=m+2;s=Ko(this,o,e,i,c,u,d,T,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function $v(n,e,t,i,s,r,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===rs,a),l===null)return null;Yo.copy(a),Yo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yo);return c<t.near||c>t.far?null:{distance:c,point:Yo.clone(),object:n}}function Ko(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Go),n.getVertexPosition(l,Vo),n.getVertexPosition(c,Wo);const u=$v(n,e,t,i,Go,Vo,Wo,lh);if(u){const d=new B;Qn.getBarycoord(lh,Go,Vo,Wo,d),s&&(u.uv=Qn.getInterpolatedAttribute(s,a,l,c,d,new Ze)),r&&(u.uv1=Qn.getInterpolatedAttribute(r,a,l,c,d,new Ze)),o&&(u.normal=Qn.getInterpolatedAttribute(o,a,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Qn.getNormal(Go,Vo,Wo,h.normal),u.face=h,u.barycoord=d}return u}class ai extends li{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(d,2));function _(v,m,p,T,M,x,D,R,C,L,y){const E=x/C,w=D/L,U=x/2,V=D/2,te=R/2,K=C+1,k=L+1;let $=0,X=0;const ge=new B;for(let we=0;we<k;we++){const Ie=we*w-V;for(let Xe=0;Xe<K;Xe++){const _t=Xe*E-U;ge[v]=_t*T,ge[m]=Ie*M,ge[p]=te,c.push(ge.x,ge.y,ge.z),ge[v]=0,ge[m]=0,ge[p]=R>0?1:-1,u.push(ge.x,ge.y,ge.z),d.push(Xe/C),d.push(1-we/L),$+=1}}for(let we=0;we<L;we++)for(let Ie=0;Ie<C;Ie++){const Xe=h+Ie+K*we,_t=h+Ie+K*(we+1),se=h+(Ie+1)+K*(we+1),ve=h+(Ie+1)+K*we;l.push(Xe,_t,ve),l.push(_t,se,ve),X+=6}a.addGroup(f,X,y),f+=X,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=br(n[t]);for(const s in i)e[s]=i[s]}return e}function qv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const jv={clone:br,merge:on};var Zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zv,this.fragmentShader=Jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hp extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new B,ch=new Ze,uh=new Ze;class bn extends Hp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jc*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,ch,uh),t.subVectors(uh,ch)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,er=1;class Qv extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(Qs,er,e,t);s.layers=this.layers,this.add(s);const r=new bn(Qs,er,e,t);r.layers=this.layers,this.add(r);const o=new bn(Qs,er,e,t);o.layers=this.layers,this.add(o);const a=new bn(Qs,er,e,t);a.layers=this.layers,this.add(a);const l=new bn(Qs,er,e,t);l.layers=this.layers,this.add(l);const c=new bn(Qs,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Gp extends tn{constructor(e=[],t=Mr,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ex extends Os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Gp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ai(5,5,5),r=new as({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:ts});r.uniforms.tEquirect.value=t;const o=new kt(s,r),a=t.minFilter;return t.minFilter===ws&&(t.minFilter=xi),new Qv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class lr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tx={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ku{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(e),this.density=t}clone(){return new ku(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vp extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nx extends tn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=wn,u=wn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dh extends kn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tr=new bt,hh=new bt,$o=[],fh=new Bs,ix=new bt,kr=new kt,zr=new So;class sx extends kt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ix)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,tr),fh.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union(fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new So),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,tr),zr.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),e.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,tr),hh.multiplyMatrices(i,tr),kr.matrixWorld=hh,kr.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){const l=$o[o];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new nx(new Float32Array(s*this.count),s,this.count,Iu,Ei));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ol=new B,rx=new B,ox=new nt;class qi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ol.subVectors(i,t).cross(rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ox.getNormalMatrix(e),s=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new So,qo=new B;class zu{constructor(e=new qi,t=new qi,i=new qi,s=new qi,r=new qi,o=new qi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ki){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],_=s[9],v=s[10],m=s[11],p=s[12],T=s[13],M=s[14],x=s[15];if(i[0].setComponents(l-r,h-c,m-f,x-p).normalize(),i[1].setComponents(l+r,h+c,m+f,x+p).normalize(),i[2].setComponents(l+o,h+u,m+_,x+T).normalize(),i[3].setComponents(l-o,h-u,m-_,x-T).normalize(),i[4].setComponents(l-a,h-d,m-v,x-M).normalize(),t===ki)i[5].setComponents(l+a,h+d,m+v,x+M).normalize();else if(t===ba)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wp extends tn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xp extends tn{constructor(e,t,i=Ds,s,r,o,a=wn,l=wn,c,u=fo,d=1){if(u!==fo&&u!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rr extends li{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let _=0;const v=[],m=i/2;let p=0;T(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(f,2));function T(){const x=new B,D=new B;let R=0;const C=(t-e)/i;for(let L=0;L<=r;L++){const y=[],E=L/r,w=E*(t-e)+e;for(let U=0;U<=s;U++){const V=U/s,te=V*l+a,K=Math.sin(te),k=Math.cos(te);D.x=w*K,D.y=-E*i+m,D.z=w*k,d.push(D.x,D.y,D.z),x.set(K,C,k).normalize(),h.push(x.x,x.y,x.z),f.push(V,1-E),y.push(_++)}v.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){const E=v[y][L],w=v[y+1][L],U=v[y+1][L+1],V=v[y][L+1];(e>0||y!==0)&&(u.push(E,w,V),R+=3),(t>0||y!==r-1)&&(u.push(w,U,V),R+=3)}c.addGroup(p,R,0),p+=R}function M(x){const D=_,R=new Ze,C=new B;let L=0;const y=x===!0?e:t,E=x===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*E,0),h.push(0,E,0),f.push(.5,.5),_++;const w=_;for(let U=0;U<=s;U++){const te=U/s*l+a,K=Math.cos(te),k=Math.sin(te);C.x=y*k,C.y=m*E,C.z=y*K,d.push(C.x,C.y,C.z),h.push(0,E,0),R.x=K*.5+.5,R.y=k*.5*E+.5,f.push(R.x,R.y),_++}for(let U=0;U<s;U++){const V=D+U,te=w+U;x===!0?u.push(te,te+1,V):u.push(te+1,te,V),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hu extends Rr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Hu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class To extends li{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*h-o;for(let M=0;M<c;M++){const x=M*d-r;_.push(x,-T,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const M=T+c*p,x=T+c*(p+1),D=T+1+c*(p+1),R=T+1+c*p;f.push(M,x,R),f.push(x,D,R)}this.setIndex(f),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wa extends li{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new B,h=new B,f=[],_=[],v=[],m=[];for(let p=0;p<=i;p++){const T=[],M=p/i;let x=0;p===0&&o===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let D=0;D<=t;D++){const R=D/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+M*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(R+x,1-M),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const M=u[p][T+1],x=u[p][T],D=u[p+1][T],R=u[p+1][T+1];(p!==0||o>0)&&f.push(M,x,R),(p!==i-1||l<Math.PI)&&f.push(x,D,R)}this.setIndex(f),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xa extends li{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new B,d=new B,h=new B;for(let f=0;f<=i;f++)for(let _=0;_<=s;_++){const v=_/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let _=1;_<=s;_++){const v=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,T=(s+1)*f+_;o.push(v,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(l,3)),this.setAttribute("uv",new nn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ra extends Mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dp,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ax extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lx extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ya extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cx extends Ya{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Nl=new bt,ph=new B,mh=new B;class Yp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zu,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _h=new bt,Hr=new B,Ul=new B;class ux extends Yp{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Hr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hr),Ul.copy(i.position),Ul.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ul),i.updateMatrixWorld(),s.makeTranslation(-Hr.x,-Hr.y,-Hr.z),_h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h)}}class Kp extends Ya{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $p extends Hp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dx extends Yp{constructor(){super(new $p(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fl extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hx extends Ya{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fx extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gh=new bt;class qp{constructor(e,t,i=0,s=1/0){this.ray=new Fu(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Bu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(e,t=!0,i=[]){return Qc(e,this,i,t),i.sort(vh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Qc(e[s],this,i,t);return i.sort(vh),i}}function vh(n,e){return n.distance-e.distance}function Qc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Qc(r[o],e,t,!0)}}class xh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class px extends Fs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Eh(n,e,t,i){const s=mx(i);switch(t){case Cp:return n*e;case Iu:return n*e/s.components*s.byteLength;case Du:return n*e/s.components*s.byteLength;case Lp:return n*e*2/s.components*s.byteLength;case Ou:return n*e*2/s.components*s.byteLength;case Pp:return n*e*3/s.components*s.byteLength;case ti:return n*e*4/s.components*s.byteLength;case Nu:return n*e*4/s.components*s.byteLength;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case aa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rc:case Cc:return Math.max(n,16)*Math.max(e,8)/4;case Ac:case wc:return Math.max(n,8)*Math.max(e,8)/2;case Pc:case Lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ca:case Kc:case $c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ip:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jc:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mx(n){switch(n){case Ri:case Ap:return{byteLength:1,components:1};case uo:case Rp:case xo:return{byteLength:2,components:1};case Pu:case Lu:return{byteLength:2,components:4};case Ds:case Cu:case Ei:return{byteLength:4,components:1};case wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _x(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const v=d[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Px=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_E=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$S=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:gx,alphahash_pars_fragment:vx,alphamap_fragment:xx,alphamap_pars_fragment:Ex,alphatest_fragment:Sx,alphatest_pars_fragment:Mx,aomap_fragment:Tx,aomap_pars_fragment:yx,batching_pars_vertex:bx,batching_vertex:Ax,begin_vertex:Rx,beginnormal_vertex:wx,bsdfs:Cx,iridescence_fragment:Px,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Ox,clipping_planes_vertex:Nx,color_fragment:Ux,color_pars_fragment:Fx,color_pars_vertex:Bx,color_vertex:kx,common:zx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:Gx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Wx,emissivemap_fragment:Xx,emissivemap_pars_fragment:Yx,colorspace_fragment:Kx,colorspace_pars_fragment:$x,envmap_fragment:qx,envmap_common_pars_fragment:jx,envmap_pars_fragment:Zx,envmap_pars_vertex:Jx,envmap_physical_pars_fragment:cE,envmap_vertex:Qx,fog_vertex:eE,fog_pars_vertex:tE,fog_fragment:nE,fog_pars_fragment:iE,gradientmap_pars_fragment:sE,lightmap_pars_fragment:rE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:aE,lights_pars_begin:lE,lights_toon_fragment:uE,lights_toon_pars_fragment:dE,lights_phong_fragment:hE,lights_phong_pars_fragment:fE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:_E,lights_fragment_maps:gE,lights_fragment_end:vE,logdepthbuf_fragment:xE,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:ME,map_fragment:TE,map_pars_fragment:yE,map_particle_fragment:bE,map_particle_pars_fragment:AE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:wE,morphinstance_vertex:CE,morphcolor_vertex:PE,morphnormal_vertex:LE,morphtarget_pars_vertex:IE,morphtarget_vertex:DE,normal_fragment_begin:OE,normal_fragment_maps:NE,normal_pars_fragment:UE,normal_pars_vertex:FE,normal_vertex:BE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:GE,iridescence_pars_fragment:VE,opaque_fragment:WE,packing:XE,premultiplied_alpha_fragment:YE,project_vertex:KE,dithering_fragment:$E,dithering_pars_fragment:qE,roughnessmap_fragment:jE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:QE,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:sS,skinnormal_vertex:rS,specularmap_fragment:oS,specularmap_pars_fragment:aS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:uS,transmission_pars_fragment:dS,uv_pars_fragment:hS,uv_pars_vertex:fS,uv_vertex:pS,worldpos_vertex:mS,background_vert:_S,background_frag:gS,backgroundCube_vert:vS,backgroundCube_frag:xS,cube_vert:ES,cube_frag:SS,depth_vert:MS,depth_frag:TS,distanceRGBA_vert:yS,distanceRGBA_frag:bS,equirect_vert:AS,equirect_frag:RS,linedashed_vert:wS,linedashed_frag:CS,meshbasic_vert:PS,meshbasic_frag:LS,meshlambert_vert:IS,meshlambert_frag:DS,meshmatcap_vert:OS,meshmatcap_frag:NS,meshnormal_vert:US,meshnormal_frag:FS,meshphong_vert:BS,meshphong_frag:kS,meshphysical_vert:zS,meshphysical_frag:HS,meshtoon_vert:GS,meshtoon_frag:VS,points_vert:WS,points_frag:XS,shadow_vert:YS,shadow_frag:KS,sprite_vert:$S,sprite_frag:qS},Se={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},mi={basic:{uniforms:on([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:on([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ut(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:on([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:on([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:on([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ut(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:on([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:on([Se.points,Se.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:on([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:on([Se.common,Se.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:on([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:on([Se.sprite,Se.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:on([Se.common,Se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:on([Se.lights,Se.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};mi.physical={uniforms:on([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const jo={r:0,b:0,g:0},vs=new oi,jS=new bt;function ZS(n,e,t,i,s,r,o){const a=new ut(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const D=_(M);D===null?p(a,l):D&&D.isColor&&(p(D,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,x){const D=_(x);D&&(D.isCubeTexture||D.mapping===Ga)?(u===void 0&&(u=new kt(new ai(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:br(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vs.copy(x.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jS.makeRotationFromEuler(vs)),u.material.toneMapped=ft.getTransfer(D.colorSpace)!==St,(d!==D||h!==D.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=D,h=D.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new kt(new To(2,2),new as({name:"BackgroundMaterial",uniforms:br(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ft.getTransfer(D.colorSpace)!==St,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||h!==D.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=D,h=D.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(jo,zp(n)),i.buffers.color.setClear(jo.r,jo.g,jo.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:m,dispose:T}}function JS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(E,w,U,V,te){let K=!1;const k=d(V,U,w);r!==k&&(r=k,c(r.object)),K=f(E,V,U,te),K&&_(E,V,U,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(E,w,U,V),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,w,U){const V=U.wireframe===!0;let te=i[E.id];te===void 0&&(te={},i[E.id]=te);let K=te[w.id];K===void 0&&(K={},te[w.id]=K);let k=K[V];return k===void 0&&(k=h(l()),K[V]=k),k}function h(E){const w=[],U=[],V=[];for(let te=0;te<t;te++)w[te]=0,U[te]=0,V[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:V,object:E,attributes:{},index:null}}function f(E,w,U,V){const te=r.attributes,K=w.attributes;let k=0;const $=U.getAttributes();for(const X in $)if($[X].location>=0){const we=te[X];let Ie=K[X];if(Ie===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(Ie=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(Ie=E.instanceColor)),we===void 0||we.attribute!==Ie||Ie&&we.data!==Ie.data)return!0;k++}return r.attributesNum!==k||r.index!==V}function _(E,w,U,V){const te={},K=w.attributes;let k=0;const $=U.getAttributes();for(const X in $)if($[X].location>=0){let we=K[X];we===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(we=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(we=E.instanceColor));const Ie={};Ie.attribute=we,we&&we.data&&(Ie.data=we.data),te[X]=Ie,k++}r.attributes=te,r.attributesNum=k,r.index=V}function v(){const E=r.newAttributes;for(let w=0,U=E.length;w<U;w++)E[w]=0}function m(E){p(E,0)}function p(E,w){const U=r.newAttributes,V=r.enabledAttributes,te=r.attributeDivisors;U[E]=1,V[E]===0&&(n.enableVertexAttribArray(E),V[E]=1),te[E]!==w&&(n.vertexAttribDivisor(E,w),te[E]=w)}function T(){const E=r.newAttributes,w=r.enabledAttributes;for(let U=0,V=w.length;U<V;U++)w[U]!==E[U]&&(n.disableVertexAttribArray(U),w[U]=0)}function M(E,w,U,V,te,K,k){k===!0?n.vertexAttribIPointer(E,w,U,te,K):n.vertexAttribPointer(E,w,U,V,te,K)}function x(E,w,U,V){v();const te=V.attributes,K=U.getAttributes(),k=w.defaultAttributeValues;for(const $ in K){const X=K[$];if(X.location>=0){let ge=te[$];if(ge===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ge!==void 0){const we=ge.normalized,Ie=ge.itemSize,Xe=e.get(ge);if(Xe===void 0)continue;const _t=Xe.buffer,se=Xe.type,ve=Xe.bytesPerElement,De=se===n.INT||se===n.UNSIGNED_INT||ge.gpuType===Cu;if(ge.isInterleavedBufferAttribute){const Me=ge.data,Be=Me.stride,st=ge.offset;if(Me.isInstancedInterleavedBuffer){for(let Ye=0;Ye<X.locationSize;Ye++)p(X.location+Ye,Me.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ye=0;Ye<X.locationSize;Ye++)m(X.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let Ye=0;Ye<X.locationSize;Ye++)M(X.location+Ye,Ie/X.locationSize,se,we,Be*ve,(st+Ie/X.locationSize*Ye)*ve,De)}else{if(ge.isInstancedBufferAttribute){for(let Me=0;Me<X.locationSize;Me++)p(X.location+Me,ge.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Me=0;Me<X.locationSize;Me++)m(X.location+Me);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let Me=0;Me<X.locationSize;Me++)M(X.location+Me,Ie/X.locationSize,se,we,Ie*ve,Ie/X.locationSize*Me*ve,De)}}else if(k!==void 0){const we=k[$];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(X.location,we);break;case 3:n.vertexAttrib3fv(X.location,we);break;case 4:n.vertexAttrib4fv(X.location,we);break;default:n.vertexAttrib1fv(X.location,we)}}}}T()}function D(){L();for(const E in i){const w=i[E];for(const U in w){const V=w[U];for(const te in V)u(V[te].object),delete V[te];delete w[U]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const w=i[E.id];for(const U in w){const V=w[U];for(const te in V)u(V[te].object),delete V[te];delete w[U]}delete i[E.id]}function C(E){for(const w in i){const U=i[w];if(U[E.id]===void 0)continue;const V=U[E.id];for(const te in V)u(V[te].object),delete V[te];delete U[E.id]}}function L(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function QS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];t.update(f,i,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*h[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function eM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==ti&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ri&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ei&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:D,maxSamples:R}}function tM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new qi,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,M=T*4;let x=p.clippingState||null;l.value=x,x=u(_,h,M,f);for(let D=0;D!==M;++D)x[D]=t[D];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=f+v*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==v;++M,x+=4)o.copy(d[M]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function nM(n){let e=new WeakMap;function t(o,a){return a===Tc?o.mapping=Mr:a===yc&&(o.mapping=Tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tc||a===yc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ex(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const cr=4,Sh=[.125,.215,.35,.446,.526,.582],ys=20,Bl=new $p,Mh=new ut;let kl=null,zl=0,Hl=0,Gl=!1;const Ms=(1+Math.sqrt(5))/2,nr=1/Ms,Th=[new B(-Ms,nr,0),new B(Ms,nr,0),new B(-nr,0,Ms),new B(nr,0,Ms),new B(0,Ms,-nr),new B(0,Ms,nr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],iM=new B;class eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=iM}=r;kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,zl,Hl),this._renderer.xr.enabled=Gl,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:xo,format:ti,colorSpace:yr,depthBuffer:!1},s=yh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sM(r)),this._blurMaterial=rM(r,e,t)}return s}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Bl)}_sceneToCubeUV(e,t,i,s,r){const l=new bn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Mh),d.toneMapping=ns,d.autoClear=!1;const _=new Va({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),v=new kt(new ai,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(Mh),m=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const x=this._cubeSize;Zo(s,M*x,T>2?x:0,x,x),d.setRenderTarget(s),m&&d.render(v,l),d.render(e,l)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Mr||e.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Zo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Bl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Th[(s-r-1)%Th.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new kt(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);const p=[];let T=0;for(let C=0;C<ys;++C){const L=C/v,y=Math.exp(-L*L/2);p.push(y),C===0?T+=y:C<m&&(T+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-i;const x=this._sizeLods[s],D=3*x*(s>M-cr?s-M+cr:0),R=4*(this._cubeSize-x);Zo(t,D,R,3*x,2*x),l.setRenderTarget(t),l.render(d,Bl)}}function sM(n){const e=[],t=[],i=[];let s=n;const r=n-cr+1+Sh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-cr?l=Sh[o-n+cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,v=3,m=2,p=1,T=new Float32Array(v*_*f),M=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,L=R>2?0:-1,y=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];T.set(y,v*_*R),M.set(h,m*_*R);const E=[R,R,R,R,R,R];x.set(E,p*_*R)}const D=new li;D.setAttribute("position",new kn(T,v)),D.setAttribute("uv",new kn(M,m)),D.setAttribute("faceIndex",new kn(x,p)),e.push(D),s>cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yh(n,e,t){const i=new Os(n,e,t);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function rM(n,e,t){const i=new Float32Array(ys),s=new B(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function bh(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Ah(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Gu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tc||l===yc,u=l===Mr||l===Tr;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new eu(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new eu(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function aM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&_r("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function lM(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,_=d.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let M=0,x=T.length;M<x;M+=3){const D=T[M+0],R=T[M+1],C=T[M+2];h.push(D,R,R,C,C,D)}}else if(_!==void 0){const T=_.array;v=_.version;for(let M=0,x=T.length/3-1;M<x;M+=3){const D=M+0,R=M+1,C=M+2;h.push(D,R,R,C,C,D)}}else return;const m=new(Np(h)?kp:Bp)(h,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function cM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,h*o,_),t.update(f,i,_))}function u(h,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function d(h,f,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,v,0,_);let p=0;for(let T=0;T<_;T++)p+=f[T]*v[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function uM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function dM(n,e,t){const i=new WeakMap,s=new Tt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let E=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var f=E;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let D=a.attributes.position.count*x,R=1;D>e.maxTextureSize&&(R=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const C=new Float32Array(D*R*4*d),L=new Up(C,D,R,d);L.type=Ei,L.needsUpdate=!0;const y=x*4;for(let w=0;w<d;w++){const U=p[w],V=T[w],te=M[w],K=D*R*4*w;for(let k=0;k<U.count;k++){const $=k*y;_===!0&&(s.fromBufferAttribute(U,k),C[K+$+0]=s.x,C[K+$+1]=s.y,C[K+$+2]=s.z,C[K+$+3]=0),v===!0&&(s.fromBufferAttribute(V,k),C[K+$+4]=s.x,C[K+$+5]=s.y,C[K+$+6]=s.z,C[K+$+7]=0),m===!0&&(s.fromBufferAttribute(te,k),C[K+$+8]=s.x,C[K+$+9]=s.y,C[K+$+10]=s.z,C[K+$+11]=te.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new Ze(D,R)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function hM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Zp=new tn,Rh=new Xp(1,1),Jp=new Up,Qp=new Fv,em=new Gp,wh=[],Ch=[],Ph=new Float32Array(16),Lh=new Float32Array(9),Ih=new Float32Array(4);function wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=wh[s];if(r===void 0&&(r=new Float32Array(s),wh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ka(n,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function mM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function gM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Ih.set(i),n.uniformMatrix2fv(this.addr,!1,Ih),Gt(t,i)}}function vM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Lh.set(i),n.uniformMatrix3fv(this.addr,!1,Lh),Gt(t,i)}}function xM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Ph.set(i),n.uniformMatrix4fv(this.addr,!1,Ph),Gt(t,i)}}function EM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function yM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function wM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rh.compareFunction=Op,r=Rh):r=Zp,t.setTexture2D(e||r,s)}function CM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Qp,s)}function PM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||em,s)}function LM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jp,s)}function IM(n){switch(n){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return _M;case 35674:return gM;case 35675:return vM;case 35676:return xM;case 5124:case 35670:return EM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return TM;case 5125:return yM;case 36294:return bM;case 36295:return AM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return LM}}function DM(n,e){n.uniform1fv(this.addr,e)}function OM(n,e){const t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function NM(n,e){const t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function UM(n,e){const t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function FM(n,e){const t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BM(n,e){const t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kM(n,e){const t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zM(n,e){n.uniform1iv(this.addr,e)}function HM(n,e){n.uniform2iv(this.addr,e)}function GM(n,e){n.uniform3iv(this.addr,e)}function VM(n,e){n.uniform4iv(this.addr,e)}function WM(n,e){n.uniform1uiv(this.addr,e)}function XM(n,e){n.uniform2uiv(this.addr,e)}function YM(n,e){n.uniform3uiv(this.addr,e)}function KM(n,e){n.uniform4uiv(this.addr,e)}function $M(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zp,r[o])}function qM(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Qp,r[o])}function jM(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||em,r[o])}function ZM(n,e,t){const i=this.cache,s=e.length,r=Ka(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jp,r[o])}function JM(n){switch(n){case 5126:return DM;case 35664:return OM;case 35665:return NM;case 35666:return UM;case 35674:return FM;case 35675:return BM;case 35676:return kM;case 5124:case 35670:return zM;case 35667:case 35671:return HM;case 35668:case 35672:return GM;case 35669:case 35673:return VM;case 5125:return WM;case 36294:return XM;case 36295:return YM;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return ZM}}class QM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=IM(t.type)}}class eT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JM(t.type)}}class tT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Dh(n,e){n.seq.push(e),n.map[e.id]=e}function nT(n,e,t){const i=n.name,s=i.length;for(Vl.lastIndex=0;;){const r=Vl.exec(i),o=Vl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dh(t,c===void 0?new QM(a,n,e):new eT(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new tT(a),Dh(t,d)),t=d}}}class da{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);nT(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Oh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const iT=37297;let sT=0;function rT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Nh=new nt;function oT(n){ft._getMatrix(Nh,ft.workingColorSpace,n);const e=`mat3( ${Nh.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case ya:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+rT(n.getShaderSource(e),o)}else return s}function aT(n,e){const t=oT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lT(n,e){let t;switch(e){case cv:t="Linear";break;case uv:t="Reinhard";break;case dv:t="Cineon";break;case yp:t="ACESFilmic";break;case fv:t="AgX";break;case pv:t="Neutral";break;case hv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jo=new B;function cT(){ft.getLuminanceCoefficients(Jo);const n=Jo.x.toFixed(4),e=Jo.y.toFixed(4),t=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function dT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yr(n){return n!==""}function Fh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fT=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(n){return n.replace(fT,mT)}const pT=new Map;function mT(n,e){let t=it[e];if(t===void 0){const i=pT.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tu(t)}const _T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(n){return n.replace(_T,gT)}function gT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function xT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mr:case Tr:e="ENVMAP_TYPE_CUBE";break;case Ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ET(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function ST(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tp:e="ENVMAP_BLENDING_MULTIPLY";break;case av:e="ENVMAP_BLENDING_MIX";break;case lv:e="ENVMAP_BLENDING_ADD";break}return e}function MT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function TT(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vT(t),c=xT(t),u=ET(t),d=ST(t),h=MT(t),f=uT(t),_=dT(r),v=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(m=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?it.tonemapping_pars_fragment:"",t.toneMapping!==ns?lT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,aT("linearToOutputTexel",t.outputColorSpace),cT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=tu(o),o=Fh(o,t),o=Bh(o,t),a=tu(a),a=Fh(a,t),a=Bh(a,t),o=kh(o),a=kh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=T+m+o,x=T+p+a,D=Oh(s,s.VERTEX_SHADER,M),R=Oh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,D),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(w){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(D).trim(),te=s.getShaderInfoLog(R).trim();let K=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,R);else{const $=Uh(s,D,"vertex"),X=Uh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+$+`
`+X)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(V===""||te==="")&&(k=!1);k&&(w.diagnostics={runnable:K,programLog:U,vertexShader:{log:V,prefix:m},fragmentShader:{log:te,prefix:p}})}s.deleteShader(D),s.deleteShader(R),L=new da(s,v),y=hT(s,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,iT)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}let yT=0;class bT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AT(e),t.set(e,i)),i}}class AT{constructor(e){this.id=yT++,this.code=e,this.usedTimes=0}}function RT(n,e,t,i,s,r,o){const a=new Bu,l=new bT,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,w,U,V){const te=U.fog,K=V.geometry,k=y.isMeshStandardMaterial?U.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),X=$&&$.mapping===Ga?$.image.height:null,ge=_[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const we=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ie=we!==void 0?we.length:0;let Xe=0;K.morphAttributes.position!==void 0&&(Xe=1),K.morphAttributes.normal!==void 0&&(Xe=2),K.morphAttributes.color!==void 0&&(Xe=3);let _t,se,ve,De;if(ge){const xt=mi[ge];_t=xt.vertexShader,se=xt.fragmentShader}else _t=y.vertexShader,se=y.fragmentShader,l.update(y),ve=l.getVertexShaderID(y),De=l.getFragmentShaderID(y);const Me=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),st=V.isInstancedMesh===!0,Ye=V.isBatchedMesh===!0,P=!!y.map,I=!!y.matcap,W=!!$,b=!!y.aoMap,ie=!!y.lightMap,ee=!!y.bumpMap,ae=!!y.normalMap,Q=!!y.displacementMap,re=!!y.emissiveMap,Y=!!y.metalnessMap,ue=!!y.roughnessMap,he=y.anisotropy>0,A=y.clearcoat>0,g=y.dispersion>0,F=y.iridescence>0,Z=y.sheen>0,ne=y.transmission>0,q=he&&!!y.anisotropyMap,Te=A&&!!y.clearcoatMap,_e=A&&!!y.clearcoatNormalMap,Ae=A&&!!y.clearcoatRoughnessMap,Le=F&&!!y.iridescenceMap,ce=F&&!!y.iridescenceThicknessMap,xe=Z&&!!y.sheenColorMap,Ue=Z&&!!y.sheenRoughnessMap,ze=!!y.specularMap,Ee=!!y.specularColorMap,Je=!!y.specularIntensityMap,O=ne&&!!y.transmissionMap,ye=ne&&!!y.thicknessMap,de=!!y.gradientMap,Pe=!!y.alphaMap,fe=y.alphaTest>0,oe=!!y.alphaHash,Oe=!!y.extensions;let Qe=ns;y.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Qe=n.toneMapping);const Ct={shaderID:ge,shaderType:y.type,shaderName:y.name,vertexShader:_t,fragmentShader:se,defines:y.defines,customVertexShaderID:ve,customFragmentShaderID:De,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ye,batchingColor:Ye&&V._colorsTexture!==null,instancing:st,instancingColor:st&&V.instanceColor!==null,instancingMorph:st&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:yr,alphaToCoverage:!!y.alphaToCoverage,map:P,matcap:I,envMap:W,envMapMode:W&&$.mapping,envMapCubeUVHeight:X,aoMap:b,lightMap:ie,bumpMap:ee,normalMap:ae,displacementMap:h&&Q,emissiveMap:re,normalMapObjectSpace:ae&&y.normalMapType===vv,normalMapTangentSpace:ae&&y.normalMapType===Dp,metalnessMap:Y,roughnessMap:ue,anisotropy:he,anisotropyMap:q,clearcoat:A,clearcoatMap:Te,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ae,dispersion:g,iridescence:F,iridescenceMap:Le,iridescenceThicknessMap:ce,sheen:Z,sheenColorMap:xe,sheenRoughnessMap:Ue,specularMap:ze,specularColorMap:Ee,specularIntensityMap:Je,transmission:ne,transmissionMap:O,thicknessMap:ye,gradientMap:de,opaque:y.transparent===!1&&y.blending===mr&&y.alphaToCoverage===!1,alphaMap:Pe,alphaTest:fe,alphaHash:oe,combine:y.combine,mapUv:P&&v(y.map.channel),aoMapUv:b&&v(y.aoMap.channel),lightMapUv:ie&&v(y.lightMap.channel),bumpMapUv:ee&&v(y.bumpMap.channel),normalMapUv:ae&&v(y.normalMap.channel),displacementMapUv:Q&&v(y.displacementMap.channel),emissiveMapUv:re&&v(y.emissiveMap.channel),metalnessMapUv:Y&&v(y.metalnessMap.channel),roughnessMapUv:ue&&v(y.roughnessMap.channel),anisotropyMapUv:q&&v(y.anisotropyMap.channel),clearcoatMapUv:Te&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(y.sheenRoughnessMap.channel),specularMapUv:ze&&v(y.specularMap.channel),specularColorMapUv:Ee&&v(y.specularColorMap.channel),specularIntensityMapUv:Je&&v(y.specularIntensityMap.channel),transmissionMapUv:O&&v(y.transmissionMap.channel),thicknessMapUv:ye&&v(y.thicknessMap.channel),alphaMapUv:Pe&&v(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ae||he),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(P||Pe),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Be,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:P&&y.map.isVideoTexture===!0&&ft.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&ft.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gi,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&y.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)E.push(w),E.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(T(E,y),M(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function T(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const E=_[y.type];let w;if(E){const U=mi[E];w=jv.clone(U.uniforms)}else w=y.uniforms;return w}function D(y,E){let w;for(let U=0,V=u.length;U<V;U++){const te=u[U];if(te.cacheKey===E){w=te,++w.usedTimes;break}}return w===void 0&&(w=new TT(n,E,y,r),u.push(w)),w}function R(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:L}}function wT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function CT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,f,_,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,h,f,_,v,m){const p=o(d,h,f,_,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,_,v,m){const p=o(d,h,f,_,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||CT),i.length>1&&i.sort(h||Hh),s.length>1&&s.sort(h||Hh)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function PT(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Gh,n.set(i,[o])):s>=r.length?(o=new Gh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function LT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ut};break;case"SpotLight":t={position:new B,direction:new B,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function IT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DT=0;function OT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function NT(n){const e=new LT,t=IT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new bt,o=new bt;function a(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,_=0,v=0,m=0,p=0,T=0,M=0,x=0,D=0,R=0,C=0;c.sort(OT);for(let y=0,E=c.length;y<E;y++){const w=c[y],U=w.color,V=w.intensity,te=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=U.r*V,d+=U.g*V,h+=U.b*V;else if(w.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(w.sh.coefficients[k],V);C++}else if(w.isDirectionalLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const $=w.shadow,X=t.get(w);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=w.shadow.matrix,T++}i.directional[f]=k,f++}else if(w.isSpotLight){const k=e.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(U).multiplyScalar(V),k.distance=te,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,i.spot[v]=k;const $=w.shadow;if(w.map&&(i.spotLightMap[D]=w.map,D++,$.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[v]=$.matrix,w.castShadow){const X=t.get(w);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=K,x++}v++}else if(w.isRectAreaLight){const k=e.get(w);k.color.copy(U).multiplyScalar(V),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=k,m++}else if(w.isPointLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const $=w.shadow,X=t.get(w);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=w.shadow.matrix,M++}i.point[_]=k,_++}else if(w.isHemisphereLight){const k=e.get(w);k.skyColor.copy(w.color).multiplyScalar(V),k.groundColor.copy(w.groundColor).multiplyScalar(V),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==f||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==M||L.numSpotShadows!==x||L.numSpotMaps!==D||L.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.directionalLength=f,L.pointLength=_,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=M,L.numSpotShadows=x,L.numSpotMaps=D,L.numLightProbes=C,i.version=DT++)}function l(c,u){let d=0,h=0,f=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const M=c[p];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Vh(n){const e=new NT(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function UT(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Vh(n),e.set(s,[a])):r>=o.length?(a=new Vh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const FT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kT(n,e,t){let i=new zu;const s=new Ze,r=new Ze,o=new Tt,a=new ax({depthPacking:gv}),l=new lx,c={},u=t.maxTextureSize,d={[rs]:mn,[mn]:rs,[gi]:gi},h=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:FT,fragmentShader:BT}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new li;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sp;let p=this.type;this.render=function(R,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),E=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ts),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=p!==Ni&&this.type===Ni,te=p===Ni&&this.type!==Ni;for(let K=0,k=R.length;K<k;K++){const $=R[K],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ge=X.getFrameExtents();if(s.multiply(ge),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ge.x),s.x=r.x*ge.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ge.y),s.y=r.y*ge.y,X.mapSize.y=r.y)),X.map===null||V===!0||te===!0){const Ie=this.type!==Ni?{minFilter:wn,magFilter:wn}:{};X.map!==null&&X.map.dispose(),X.map=new Os(s.x,s.y,Ie),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const we=X.getViewportCount();for(let Ie=0;Ie<we;Ie++){const Xe=X.getViewport(Ie);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),U.viewport(o),X.updateMatrices($,Ie),i=X.getFrustum(),x(C,L,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===Ni&&T(X,L),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,E,w)};function T(R,C){const L=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Os(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,L,h,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,L,f,v,null)}function M(R,C,L,y){let E=null;const w=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)E=w;else if(E=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=E.uuid,V=C.uuid;let te=c[U];te===void 0&&(te={},c[U]=te);let K=te[V];K===void 0&&(K=E.clone(),te[V]=K,C.addEventListener("dispose",D)),E=K}if(E.visible=C.visible,E.wireframe=C.wireframe,y===Ni?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=n.properties.get(E);U.light=L}return E}function x(R,C,L,y,E){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Ni)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const V=e.update(R),te=R.material;if(Array.isArray(te)){const K=V.groups;for(let k=0,$=K.length;k<$;k++){const X=K[k],ge=te[X.materialIndex];if(ge&&ge.visible){const we=M(R,ge,y,E);R.onBeforeShadow(n,R,C,L,V,we,X),n.renderBufferDirect(L,null,V,we,R,X),R.onAfterShadow(n,R,C,L,V,we,X)}}}else if(te.visible){const K=M(R,te,y,E);R.onBeforeShadow(n,R,C,L,V,K,null),n.renderBufferDirect(L,null,V,K,R,null),R.onAfterShadow(n,R,C,L,V,K,null)}}const U=R.children;for(let V=0,te=U.length;V<te;V++)x(U[V],C,L,y,E)}function D(R){R.target.removeEventListener("dispose",D);for(const L in c){const y=c[L],E=R.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const zT={[_c]:gc,[vc]:Sc,[xc]:Mc,[Sr]:Ec,[gc]:_c,[Sc]:vc,[Mc]:xc,[Ec]:Sr};function HT(n,e){function t(){let O=!1;const ye=new Tt;let de=null;const Pe=new Tt(0,0,0,0);return{setMask:function(fe){de!==fe&&!O&&(n.colorMask(fe,fe,fe,fe),de=fe)},setLocked:function(fe){O=fe},setClear:function(fe,oe,Oe,Qe,Ct){Ct===!0&&(fe*=Qe,oe*=Qe,Oe*=Qe),ye.set(fe,oe,Oe,Qe),Pe.equals(ye)===!1&&(n.clearColor(fe,oe,Oe,Qe),Pe.copy(ye))},reset:function(){O=!1,de=null,Pe.set(-1,0,0,0)}}}function i(){let O=!1,ye=!1,de=null,Pe=null,fe=null;return{setReversed:function(oe){if(ye!==oe){const Oe=e.get("EXT_clip_control");oe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ye=oe;const Qe=fe;fe=null,this.setClear(Qe)}},getReversed:function(){return ye},setTest:function(oe){oe?Me(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(oe){de!==oe&&!O&&(n.depthMask(oe),de=oe)},setFunc:function(oe){if(ye&&(oe=zT[oe]),Pe!==oe){switch(oe){case _c:n.depthFunc(n.NEVER);break;case gc:n.depthFunc(n.ALWAYS);break;case vc:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case xc:n.depthFunc(n.EQUAL);break;case Ec:n.depthFunc(n.GEQUAL);break;case Sc:n.depthFunc(n.GREATER);break;case Mc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=oe}},setLocked:function(oe){O=oe},setClear:function(oe){fe!==oe&&(ye&&(oe=1-oe),n.clearDepth(oe),fe=oe)},reset:function(){O=!1,de=null,Pe=null,fe=null,ye=!1}}}function s(){let O=!1,ye=null,de=null,Pe=null,fe=null,oe=null,Oe=null,Qe=null,Ct=null;return{setTest:function(xt){O||(xt?Me(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(xt){ye!==xt&&!O&&(n.stencilMask(xt),ye=xt)},setFunc:function(xt,Hn,wi){(de!==xt||Pe!==Hn||fe!==wi)&&(n.stencilFunc(xt,Hn,wi),de=xt,Pe=Hn,fe=wi)},setOp:function(xt,Hn,wi){(oe!==xt||Oe!==Hn||Qe!==wi)&&(n.stencilOp(xt,Hn,wi),oe=xt,Oe=Hn,Qe=wi)},setLocked:function(xt){O=xt},setClear:function(xt){Ct!==xt&&(n.clearStencil(xt),Ct=xt)},reset:function(){O=!1,ye=null,de=null,Pe=null,fe=null,oe=null,Oe=null,Qe=null,Ct=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],_=null,v=!1,m=null,p=null,T=null,M=null,x=null,D=null,R=null,C=new ut(0,0,0),L=0,y=!1,E=null,w=null,U=null,V=null,te=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=$>=2);let ge=null,we={};const Ie=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),_t=new Tt().fromArray(Ie),se=new Tt().fromArray(Xe);function ve(O,ye,de,Pe){const fe=new Uint8Array(4),oe=n.createTexture();n.bindTexture(O,oe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<de;Oe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ye+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return oe}const De={};De[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(n.DEPTH_TEST),o.setFunc(Sr),ee(!1),ae(Hd),Me(n.CULL_FACE),b(ts);function Me(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Be(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function st(O,ye){return d[O]!==ye?(n.bindFramebuffer(O,ye),d[O]=ye,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ye),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ye(O,ye){let de=f,Pe=!1;if(O){de=h.get(ye),de===void 0&&(de=[],h.set(ye,de));const fe=O.textures;if(de.length!==fe.length||de[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Oe=fe.length;oe<Oe;oe++)de[oe]=n.COLOR_ATTACHMENT0+oe;de.length=fe.length,Pe=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(de)}function P(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const I={[Ts]:n.FUNC_ADD,[Wg]:n.FUNC_SUBTRACT,[Xg]:n.FUNC_REVERSE_SUBTRACT};I[Yg]=n.MIN,I[Kg]=n.MAX;const W={[$g]:n.ZERO,[qg]:n.ONE,[jg]:n.SRC_COLOR,[pc]:n.SRC_ALPHA,[nv]:n.SRC_ALPHA_SATURATE,[ev]:n.DST_COLOR,[Jg]:n.DST_ALPHA,[Zg]:n.ONE_MINUS_SRC_COLOR,[mc]:n.ONE_MINUS_SRC_ALPHA,[tv]:n.ONE_MINUS_DST_COLOR,[Qg]:n.ONE_MINUS_DST_ALPHA,[iv]:n.CONSTANT_COLOR,[sv]:n.ONE_MINUS_CONSTANT_COLOR,[rv]:n.CONSTANT_ALPHA,[ov]:n.ONE_MINUS_CONSTANT_ALPHA};function b(O,ye,de,Pe,fe,oe,Oe,Qe,Ct,xt){if(O===ts){v===!0&&(Be(n.BLEND),v=!1);return}if(v===!1&&(Me(n.BLEND),v=!0),O!==Vg){if(O!==m||xt!==y){if((p!==Ts||x!==Ts)&&(n.blendEquation(n.FUNC_ADD),p=Ts,x=Ts),xt)switch(O){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gd:n.blendFunc(n.ONE,n.ONE);break;case Vd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,M=null,D=null,R=null,C.set(0,0,0),L=0,m=O,y=xt}return}fe=fe||ye,oe=oe||de,Oe=Oe||Pe,(ye!==p||fe!==x)&&(n.blendEquationSeparate(I[ye],I[fe]),p=ye,x=fe),(de!==T||Pe!==M||oe!==D||Oe!==R)&&(n.blendFuncSeparate(W[de],W[Pe],W[oe],W[Oe]),T=de,M=Pe,D=oe,R=Oe),(Qe.equals(C)===!1||Ct!==L)&&(n.blendColor(Qe.r,Qe.g,Qe.b,Ct),C.copy(Qe),L=Ct),m=O,y=!1}function ie(O,ye){O.side===gi?Be(n.CULL_FACE):Me(n.CULL_FACE);let de=O.side===mn;ye&&(de=!de),ee(de),O.blending===mr&&O.transparent===!1?b(ts):b(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Pe=O.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(O){E!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),E=O)}function ae(O){O!==Hg?(Me(n.CULL_FACE),O!==w&&(O===Hd?n.cullFace(n.BACK):O===Gg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),w=O}function Q(O){O!==U&&(k&&n.lineWidth(O),U=O)}function re(O,ye,de){O?(Me(n.POLYGON_OFFSET_FILL),(V!==ye||te!==de)&&(n.polygonOffset(ye,de),V=ye,te=de)):Be(n.POLYGON_OFFSET_FILL)}function Y(O){O?Me(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function ue(O){O===void 0&&(O=n.TEXTURE0+K-1),ge!==O&&(n.activeTexture(O),ge=O)}function he(O,ye,de){de===void 0&&(ge===null?de=n.TEXTURE0+K-1:de=ge);let Pe=we[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},we[de]=Pe),(Pe.type!==O||Pe.texture!==ye)&&(ge!==de&&(n.activeTexture(de),ge=de),n.bindTexture(O,ye||De[O]),Pe.type=O,Pe.texture=ye)}function A(){const O=we[ge];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(O){_t.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),_t.copy(O))}function Ue(O){se.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),se.copy(O))}function ze(O,ye){let de=c.get(ye);de===void 0&&(de=new WeakMap,c.set(ye,de));let Pe=de.get(O);Pe===void 0&&(Pe=n.getUniformBlockIndex(ye,O.name),de.set(O,Pe))}function Ee(O,ye){const Pe=c.get(ye).get(O);l.get(ye)!==Pe&&(n.uniformBlockBinding(ye,Pe,O.__bindingPointIndex),l.set(ye,Pe))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,we={},d={},h=new WeakMap,f=[],_=null,v=!1,m=null,p=null,T=null,M=null,x=null,D=null,R=null,C=new ut(0,0,0),L=0,y=!1,E=null,w=null,U=null,V=null,te=null,_t.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Me,disable:Be,bindFramebuffer:st,drawBuffers:Ye,useProgram:P,setBlending:b,setMaterial:ie,setFlipSided:ee,setCullFace:ae,setLineWidth:Q,setPolygonOffset:re,setScissorTest:Y,activeTexture:ue,bindTexture:he,unbindTexture:A,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:Le,texImage3D:ce,updateUBOMapping:ze,uniformBlockBinding:Ee,texStorage2D:_e,texStorage3D:Ae,texSubImage2D:Z,texSubImage3D:ne,compressedTexSubImage2D:q,compressedTexSubImage3D:Te,scissor:xe,viewport:Ue,reset:Je}}function GT(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,g){return f?new OffscreenCanvas(A,g):Aa("canvas")}function v(A,g,F){let Z=1;const ne=he(A);if((ne.width>F||ne.height>F)&&(Z=F/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(Z*ne.width),Te=Math.floor(Z*ne.height);d===void 0&&(d=_(q,Te));const _e=g?_(q,Te):d;return _e.width=q,_e.height=Te,_e.getContext("2d").drawImage(A,0,0,q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+q+"x"+Te+")."),_e}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,g,F,Z,ne=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=g;if(g===n.RED&&(F===n.FLOAT&&(q=n.R32F),F===n.HALF_FLOAT&&(q=n.R16F),F===n.UNSIGNED_BYTE&&(q=n.R8)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.R8UI),F===n.UNSIGNED_SHORT&&(q=n.R16UI),F===n.UNSIGNED_INT&&(q=n.R32UI),F===n.BYTE&&(q=n.R8I),F===n.SHORT&&(q=n.R16I),F===n.INT&&(q=n.R32I)),g===n.RG&&(F===n.FLOAT&&(q=n.RG32F),F===n.HALF_FLOAT&&(q=n.RG16F),F===n.UNSIGNED_BYTE&&(q=n.RG8)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RG8UI),F===n.UNSIGNED_SHORT&&(q=n.RG16UI),F===n.UNSIGNED_INT&&(q=n.RG32UI),F===n.BYTE&&(q=n.RG8I),F===n.SHORT&&(q=n.RG16I),F===n.INT&&(q=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGB8UI),F===n.UNSIGNED_SHORT&&(q=n.RGB16UI),F===n.UNSIGNED_INT&&(q=n.RGB32UI),F===n.BYTE&&(q=n.RGB8I),F===n.SHORT&&(q=n.RGB16I),F===n.INT&&(q=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),F===n.UNSIGNED_INT&&(q=n.RGBA32UI),F===n.BYTE&&(q=n.RGBA8I),F===n.SHORT&&(q=n.RGBA16I),F===n.INT&&(q=n.RGBA32I)),g===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),g===n.RGBA){const Te=ne?ya:ft.getTransfer(Z);F===n.FLOAT&&(q=n.RGBA32F),F===n.HALF_FLOAT&&(q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(q=Te===St?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(A,g){let F;return A?g===null||g===Ds||g===ho?F=n.DEPTH24_STENCIL8:g===Ei?F=n.DEPTH32F_STENCIL8:g===uo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ds||g===ho?F=n.DEPTH_COMPONENT24:g===Ei?F=n.DEPTH_COMPONENT32F:g===uo&&(F=n.DEPTH_COMPONENT16),F}function D(A,g){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==xi?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),L(g),g.isVideoTexture&&u.delete(g)}function C(A){const g=A.target;g.removeEventListener("dispose",C),E(g)}function L(A){const g=i.get(A);if(g.__webglInit===void 0)return;const F=A.source,Z=h.get(F);if(Z){const ne=Z[g.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&y(A),Object.keys(Z).length===0&&h.delete(F)}i.remove(A)}function y(A){const g=i.get(A);n.deleteTexture(g.__webglTexture);const F=A.source,Z=h.get(F);delete Z[g.__cacheKey],o.memory.textures--}function E(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let ne=0;ne<g.__webglFramebuffer[Z].length;ne++)n.deleteFramebuffer(g.__webglFramebuffer[Z][ne]);else n.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[Z]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=A.textures;for(let Z=0,ne=F.length;Z<ne;Z++){const q=i.get(F[Z]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(F[Z])}i.remove(A)}let w=0;function U(){w=0}function V(){const A=w;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),w+=1,A}function te(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function K(A,g){const F=i.get(A);if(A.isVideoTexture&&Y(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(F,A,g);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function k(A,g){const F=i.get(A);if(A.version>0&&F.__version!==A.version){De(F,A,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function $(A,g){const F=i.get(A);if(A.version>0&&F.__version!==A.version){De(F,A,g);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function X(A,g){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Me(F,A,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const ge={[co]:n.REPEAT,[Rs]:n.CLAMP_TO_EDGE,[bc]:n.MIRRORED_REPEAT},we={[wn]:n.NEAREST,[mv]:n.NEAREST_MIPMAP_NEAREST,[Lo]:n.NEAREST_MIPMAP_LINEAR,[xi]:n.LINEAR,[dl]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},Ie={[xv]:n.NEVER,[bv]:n.ALWAYS,[Ev]:n.LESS,[Op]:n.LEQUAL,[Sv]:n.EQUAL,[yv]:n.GEQUAL,[Mv]:n.GREATER,[Tv]:n.NOTEQUAL};function Xe(A,g){if(g.type===Ei&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===xi||g.magFilter===dl||g.magFilter===Lo||g.magFilter===ws||g.minFilter===xi||g.minFilter===dl||g.minFilter===Lo||g.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ge[g.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ge[g.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ge[g.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,we[g.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,we[g.minFilter]),g.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ie[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===wn||g.minFilter!==Lo&&g.minFilter!==ws||g.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function _t(A,g){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const Z=g.source;let ne=h.get(Z);ne===void 0&&(ne={},h.set(Z,ne));const q=te(g);if(q!==A.__cacheKey){ne[q]===void 0&&(ne[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ne[q].usedTimes++;const Te=ne[A.__cacheKey];Te!==void 0&&(ne[A.__cacheKey].usedTimes--,Te.usedTimes===0&&y(g)),A.__cacheKey=q,A.__webglTexture=ne[q].texture}return F}function se(A,g,F){return Math.floor(Math.floor(A/F)/g)}function ve(A,g,F,Z){const q=A.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,Z,g.data);else{q.sort((ce,xe)=>ce.start-xe.start);let Te=0;for(let ce=1;ce<q.length;ce++){const xe=q[Te],Ue=q[ce],ze=xe.start+xe.count,Ee=se(Ue.start,g.width,4),Je=se(xe.start,g.width,4);Ue.start<=ze+1&&Ee===Je&&se(Ue.start+Ue.count-1,g.width,4)===Ee?xe.count=Math.max(xe.count,Ue.start+Ue.count-xe.start):(++Te,q[Te]=Ue)}q.length=Te+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ce=0,xe=q.length;ce<xe;ce++){const Ue=q[ce],ze=Math.floor(Ue.start/4),Ee=Math.ceil(Ue.count/4),Je=ze%g.width,O=Math.floor(ze/g.width),ye=Ee,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Je,O,ye,de,F,Z,g.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function De(A,g,F){let Z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=n.TEXTURE_3D);const ne=_t(A,g),q=g.source;t.bindTexture(Z,A.__webglTexture,n.TEXTURE0+F);const Te=i.get(q);if(q.version!==Te.__version||ne===!0){t.activeTexture(n.TEXTURE0+F);const _e=ft.getPrimaries(ft.workingColorSpace),Ae=g.colorSpace===Zi?null:ft.getPrimaries(g.colorSpace),Le=g.colorSpace===Zi||_e===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ce=v(g.image,!1,s.maxTextureSize);ce=ue(g,ce);const xe=r.convert(g.format,g.colorSpace),Ue=r.convert(g.type);let ze=M(g.internalFormat,xe,Ue,g.colorSpace,g.isVideoTexture);Xe(Z,g);let Ee;const Je=g.mipmaps,O=g.isVideoTexture!==!0,ye=Te.__version===void 0||ne===!0,de=q.dataReady,Pe=D(g,ce);if(g.isDepthTexture)ze=x(g.format===po,g.type),ye&&(O?t.texStorage2D(n.TEXTURE_2D,1,ze,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ze,ce.width,ce.height,0,xe,Ue,null));else if(g.isDataTexture)if(Je.length>0){O&&ye&&t.texStorage2D(n.TEXTURE_2D,Pe,ze,Je[0].width,Je[0].height);for(let fe=0,oe=Je.length;fe<oe;fe++)Ee=Je[fe],O?de&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,xe,Ue,Ee.data):t.texImage2D(n.TEXTURE_2D,fe,ze,Ee.width,Ee.height,0,xe,Ue,Ee.data);g.generateMipmaps=!1}else O?(ye&&t.texStorage2D(n.TEXTURE_2D,Pe,ze,ce.width,ce.height),de&&ve(g,ce,xe,Ue)):t.texImage2D(n.TEXTURE_2D,0,ze,ce.width,ce.height,0,xe,Ue,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){O&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,ze,Je[0].width,Je[0].height,ce.depth);for(let fe=0,oe=Je.length;fe<oe;fe++)if(Ee=Je[fe],g.format!==ti)if(xe!==null)if(O){if(de)if(g.layerUpdates.size>0){const Oe=Eh(Ee.width,Ee.height,g.format,g.type);for(const Qe of g.layerUpdates){const Ct=Ee.data.subarray(Qe*Oe/Ee.data.BYTES_PER_ELEMENT,(Qe+1)*Oe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Qe,Ee.width,Ee.height,1,xe,Ct)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,ce.depth,xe,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,ze,Ee.width,Ee.height,ce.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Ee.width,Ee.height,ce.depth,xe,Ue,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,ze,Ee.width,Ee.height,ce.depth,0,xe,Ue,Ee.data)}else{O&&ye&&t.texStorage2D(n.TEXTURE_2D,Pe,ze,Je[0].width,Je[0].height);for(let fe=0,oe=Je.length;fe<oe;fe++)Ee=Je[fe],g.format!==ti?xe!==null?O?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,ze,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ee.width,Ee.height,xe,Ue,Ee.data):t.texImage2D(n.TEXTURE_2D,fe,ze,Ee.width,Ee.height,0,xe,Ue,Ee.data)}else if(g.isDataArrayTexture)if(O){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,ze,ce.width,ce.height,ce.depth),de)if(g.layerUpdates.size>0){const fe=Eh(ce.width,ce.height,g.format,g.type);for(const oe of g.layerUpdates){const Oe=ce.data.subarray(oe*fe/ce.data.BYTES_PER_ELEMENT,(oe+1)*fe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,xe,Ue,Oe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,Ue,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ce.width,ce.height,ce.depth,0,xe,Ue,ce.data);else if(g.isData3DTexture)O?(ye&&t.texStorage3D(n.TEXTURE_3D,Pe,ze,ce.width,ce.height,ce.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,Ue,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ce.width,ce.height,ce.depth,0,xe,Ue,ce.data);else if(g.isFramebufferTexture){if(ye)if(O)t.texStorage2D(n.TEXTURE_2D,Pe,ze,ce.width,ce.height);else{let fe=ce.width,oe=ce.height;for(let Oe=0;Oe<Pe;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,ze,fe,oe,0,xe,Ue,null),fe>>=1,oe>>=1}}else if(Je.length>0){if(O&&ye){const fe=he(Je[0]);t.texStorage2D(n.TEXTURE_2D,Pe,ze,fe.width,fe.height)}for(let fe=0,oe=Je.length;fe<oe;fe++)Ee=Je[fe],O?de&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,xe,Ue,Ee):t.texImage2D(n.TEXTURE_2D,fe,ze,xe,Ue,Ee);g.generateMipmaps=!1}else if(O){if(ye){const fe=he(ce);t.texStorage2D(n.TEXTURE_2D,Pe,ze,fe.width,fe.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ue,ce)}else t.texImage2D(n.TEXTURE_2D,0,ze,xe,Ue,ce);m(g)&&p(Z),Te.__version=q.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Me(A,g,F){if(g.image.length!==6)return;const Z=_t(A,g),ne=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const q=i.get(ne);if(ne.version!==q.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);const Te=ft.getPrimaries(ft.workingColorSpace),_e=g.colorSpace===Zi?null:ft.getPrimaries(g.colorSpace),Ae=g.colorSpace===Zi||Te===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Le=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!Le&&!ce?xe[oe]=v(g.image[oe],!0,s.maxCubemapSize):xe[oe]=ce?g.image[oe].image:g.image[oe],xe[oe]=ue(g,xe[oe]);const Ue=xe[0],ze=r.convert(g.format,g.colorSpace),Ee=r.convert(g.type),Je=M(g.internalFormat,ze,Ee,g.colorSpace),O=g.isVideoTexture!==!0,ye=q.__version===void 0||Z===!0,de=ne.dataReady;let Pe=D(g,Ue);Xe(n.TEXTURE_CUBE_MAP,g);let fe;if(Le){O&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Je,Ue.width,Ue.height);for(let oe=0;oe<6;oe++){fe=xe[oe].mipmaps;for(let Oe=0;Oe<fe.length;Oe++){const Qe=fe[Oe];g.format!==ti?ze!==null?O?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,0,0,Qe.width,Qe.height,ze,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,Je,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,0,0,Qe.width,Qe.height,ze,Ee,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,Je,Qe.width,Qe.height,0,ze,Ee,Qe.data)}}}else{if(fe=g.mipmaps,O&&ye){fe.length>0&&Pe++;const oe=he(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,ze,Ee,xe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Je,xe[oe].width,xe[oe].height,0,ze,Ee,xe[oe].data);for(let Oe=0;Oe<fe.length;Oe++){const Ct=fe[Oe].image[oe].image;O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,0,0,Ct.width,Ct.height,ze,Ee,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,Je,Ct.width,Ct.height,0,ze,Ee,Ct.data)}}else{O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ze,Ee,xe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Je,ze,Ee,xe[oe]);for(let Oe=0;Oe<fe.length;Oe++){const Qe=fe[Oe];O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,0,0,ze,Ee,Qe.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,Je,ze,Ee,Qe.image[oe])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),q.__version=ne.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Be(A,g,F,Z,ne,q){const Te=r.convert(F.format,F.colorSpace),_e=r.convert(F.type),Ae=M(F.internalFormat,Te,_e,F.colorSpace),Le=i.get(g),ce=i.get(F);if(ce.__renderTarget=g,!Le.__hasExternalTextures){const xe=Math.max(1,g.width>>q),Ue=Math.max(1,g.height>>q);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,q,Ae,xe,Ue,g.depth,0,Te,_e,null):t.texImage2D(ne,q,Ae,xe,Ue,0,Te,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),re(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ne,ce.__webglTexture,0,Q(g)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ne,ce.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(A,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),g.depthBuffer){const Z=g.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,q=x(g.stencilBuffer,ne),Te=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=Q(g);re(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,q,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,q,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,A)}else{const Z=g.textures;for(let ne=0;ne<Z.length;ne++){const q=Z[ne],Te=r.convert(q.format,q.colorSpace),_e=r.convert(q.type),Ae=M(q.internalFormat,Te,_e,q.colorSpace),Le=Q(g);F&&re(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ae,g.width,g.height):re(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,Ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(A,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(g.depthTexture);Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);const ne=Z.__webglTexture,q=Q(g);if(g.depthTexture.format===fo)re(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(g.depthTexture.format===po)re(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function P(A){const g=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const ne=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),g.__depthDisposeCallback=ne}g.__boundDepthTexture=Z}if(A.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?Ye(g.__webglFramebuffer[0],A):Ye(g.__webglFramebuffer,A)}else if(F){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=n.createRenderbuffer(),st(g.__webglDepthbuffer[Z],A,!1);else{const ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,q)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),st(g.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(A,g,F){const Z=i.get(A);g!==void 0&&Be(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&P(A)}function W(A){const g=A.texture,F=i.get(A),Z=i.get(g);A.addEventListener("dispose",C);const ne=A.textures,q=A.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=g.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[_e]=[];for(let Ae=0;Ae<g.mipmaps.length;Ae++)F.__webglFramebuffer[_e][Ae]=n.createFramebuffer()}else F.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let _e=0;_e<g.mipmaps.length;_e++)F.__webglFramebuffer[_e]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Te)for(let _e=0,Ae=ne.length;_e<Ae;_e++){const Le=i.get(ne[_e]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&re(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let _e=0;_e<ne.length;_e++){const Ae=ne[_e];F.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[_e]);const Le=r.convert(Ae.format,Ae.colorSpace),ce=r.convert(Ae.type),xe=M(Ae.internalFormat,Le,ce,Ae.colorSpace,A.isXRRenderTarget===!0),Ue=Q(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,xe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,F.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),st(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,g);for(let _e=0;_e<6;_e++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)Be(F.__webglFramebuffer[_e][Ae],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae);else Be(F.__webglFramebuffer[_e],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let _e=0,Ae=ne.length;_e<Ae;_e++){const Le=ne[_e],ce=i.get(Le);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Xe(n.TEXTURE_2D,Le),Be(F.__webglFramebuffer,A,Le,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),m(Le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Z.__webglTexture),Xe(_e,g),g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)Be(F.__webglFramebuffer[Ae],A,g,n.COLOR_ATTACHMENT0,_e,Ae);else Be(F.__webglFramebuffer,A,g,n.COLOR_ATTACHMENT0,_e,0);m(g)&&p(_e),t.unbindTexture()}A.depthBuffer&&P(A)}function b(A){const g=A.textures;for(let F=0,Z=g.length;F<Z;F++){const ne=g[F];if(m(ne)){const q=T(A),Te=i.get(ne).__webglTexture;t.bindTexture(q,Te),p(q),t.unbindTexture()}}}const ie=[],ee=[];function ae(A){if(A.samples>0){if(re(A)===!1){const g=A.textures,F=A.width,Z=A.height;let ne=n.COLOR_BUFFER_BIT;const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(A),_e=g.length>1;if(_e)for(let Le=0;Le<g.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Le=0;Le<g.length;Le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Le]);const ce=i.get(g[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,ne,n.NEAREST),l===!0&&(ie.length=0,ee.length=0,ie.push(n.COLOR_ATTACHMENT0+Le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ie.push(q),ee.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Le=0;Le<g.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Le]);const ce=i.get(g[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const g=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Q(A){return Math.min(s.maxSamples,A.samples)}function re(A){const g=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Y(A){const g=o.render.frame;u.get(A)!==g&&(u.set(A,g),A.update())}function ue(A,g){const F=A.colorSpace,Z=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==yr&&F!==Zi&&(ft.getTransfer(F)===St?(Z!==ti||ne!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function he(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=I,this.setupRenderTarget=W,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=re}function VT(n,e){function t(i,s=Zi){let r;const o=ft.getTransfer(s);if(i===Ri)return n.UNSIGNED_BYTE;if(i===Pu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ap)return n.BYTE;if(i===Rp)return n.SHORT;if(i===uo)return n.UNSIGNED_SHORT;if(i===Cu)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===Ei)return n.FLOAT;if(i===xo)return n.HALF_FLOAT;if(i===Cp)return n.ALPHA;if(i===Pp)return n.RGB;if(i===ti)return n.RGBA;if(i===fo)return n.DEPTH_COMPONENT;if(i===po)return n.DEPTH_STENCIL;if(i===Iu)return n.RED;if(i===Du)return n.RED_INTEGER;if(i===Lp)return n.RG;if(i===Ou)return n.RG_INTEGER;if(i===Nu)return n.RGBA_INTEGER;if(i===ra||i===oa||i===aa||i===la)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ac||i===Rc||i===wc||i===Cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pc||i===Lc||i===Ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pc||i===Lc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ic)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dc||i===Oc||i===Nc||i===Uc||i===Fc||i===Bc||i===kc||i===zc||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc||i===Yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ca||i===Kc||i===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ca)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ip||i===qc||i===jc||i===Zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new tn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new as({vertexShader:WT,fragmentShader:XT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new To(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KT extends Fs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const v=new YT,m=t.getContextAttributes();let p=null,T=null;const M=[],x=[],D=new Ze;let R=null;const C=new bn;C.viewport=new Tt;const L=new bn;L.viewport=new Tt;const y=[C,L],E=new fx;let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ve=M[se];return ve===void 0&&(ve=new Dl,M[se]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(se){let ve=M[se];return ve===void 0&&(ve=new Dl,M[se]=ve),ve.getGripSpace()},this.getHand=function(se){let ve=M[se];return ve===void 0&&(ve=new Dl,M[se]=ve),ve.getHandSpace()};function V(se){const ve=x.indexOf(se.inputSource);if(ve===-1)return;const De=M[ve];De!==void 0&&(De.update(se.inputSource,se.frame,c||o),De.dispatchEvent({type:se.type,data:se.inputSource}))}function te(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",K);for(let se=0;se<M.length;se++){const ve=x[se];ve!==null&&(x[se]=null,M[se].disconnect(ve))}w=null,U=null,v.reset(),e.setRenderTarget(p),f=null,h=null,d=null,s=null,T=null,_t.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",te),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Me=null,Be=null;m.depth&&(Be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=m.stencil?po:fo,Me=m.stencil?ho:Ds);const st={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(st),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Os(h.textureWidth,h.textureHeight,{format:ti,type:Ri,depthTexture:new Xp(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const De={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,De),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Os(f.framebufferWidth,f.framebufferHeight,{format:ti,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(se){for(let ve=0;ve<se.removed.length;ve++){const De=se.removed[ve],Me=x.indexOf(De);Me>=0&&(x[Me]=null,M[Me].disconnect(De))}for(let ve=0;ve<se.added.length;ve++){const De=se.added[ve];let Me=x.indexOf(De);if(Me===-1){for(let st=0;st<M.length;st++)if(st>=x.length){x.push(De),Me=st;break}else if(x[st]===null){x[st]=De,Me=st;break}if(Me===-1)break}const Be=M[Me];Be&&Be.connect(De)}}const k=new B,$=new B;function X(se,ve,De){k.setFromMatrixPosition(ve.matrixWorld),$.setFromMatrixPosition(De.matrixWorld);const Me=k.distanceTo($),Be=ve.projectionMatrix.elements,st=De.projectionMatrix.elements,Ye=Be[14]/(Be[10]-1),P=Be[14]/(Be[10]+1),I=(Be[9]+1)/Be[5],W=(Be[9]-1)/Be[5],b=(Be[8]-1)/Be[0],ie=(st[8]+1)/st[0],ee=Ye*b,ae=Ye*ie,Q=Me/(-b+ie),re=Q*-b;if(ve.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(re),se.translateZ(Q),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Be[10]===-1)se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Y=Ye+Q,ue=P+Q,he=ee-re,A=ae+(Me-re),g=I*P/ue*Y,F=W*P/ue*Y;se.projectionMatrix.makePerspective(he,A,g,F,Y,ue),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ge(se,ve){ve===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ve.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let ve=se.near,De=se.far;v.texture!==null&&(v.depthNear>0&&(ve=v.depthNear),v.depthFar>0&&(De=v.depthFar)),E.near=L.near=C.near=ve,E.far=L.far=C.far=De,(w!==E.near||U!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,U=E.far),C.layers.mask=se.layers.mask|2,L.layers.mask=se.layers.mask|4,E.layers.mask=C.layers.mask|L.layers.mask;const Me=se.parent,Be=E.cameras;ge(E,Me);for(let st=0;st<Be.length;st++)ge(Be[st],Me);Be.length===2?X(E,C,L):E.projectionMatrix.copy(C.projectionMatrix),we(se,E,Me)};function we(se,ve,De){De===null?se.matrix.copy(ve.matrixWorld):(se.matrix.copy(De.matrixWorld),se.matrix.invert(),se.matrix.multiply(ve.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Jc*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let Ie=null;function Xe(se,ve){if(u=ve.getViewerPose(c||o),_=ve,u!==null){const De=u.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let Me=!1;De.length!==E.cameras.length&&(E.cameras.length=0,Me=!0);for(let Ye=0;Ye<De.length;Ye++){const P=De[Ye];let I=null;if(f!==null)I=f.getViewport(P);else{const b=d.getViewSubImage(h,P);I=b.viewport,Ye===0&&(e.setRenderTargetTextures(T,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(T))}let W=y[Ye];W===void 0&&(W=new bn,W.layers.enable(Ye),W.viewport=new Tt,y[Ye]=W),W.matrix.fromArray(P.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(P.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(I.x,I.y,I.width,I.height),Ye===0&&(E.matrix.copy(W.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Me===!0&&E.cameras.push(W)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Ye=d.getDepthInformation(De[0]);Ye&&Ye.isValid&&Ye.texture&&v.init(e,Ye,s.renderState)}}for(let De=0;De<M.length;De++){const Me=x[De],Be=M[De];Me!==null&&Be!==void 0&&Be.update(Me,ve,c||o)}Ie&&Ie(se,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),_=null}const _t=new jp;_t.setAnimationLoop(Xe),this.setAnimationLoop=function(se){Ie=se},this.dispose=function(){}}}const xs=new oi,$T=new bt;function qT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),M=T.envMap,x=T.envMapRotation;M&&(m.envMap.value=M,xs.copy(x),xs.x*=-1,xs.y*=-1,xs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler(xs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jT(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const x=M.program;i.uniformBlockBinding(T,x)}function c(T,M){let x=s[T.id];x===void 0&&(_(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",m));const D=M.program;i.updateUBOMapping(T,D);const R=e.render.frame;r[T.id]!==R&&(h(T),r[T.id]=R)}function u(T){const M=d();T.__bindingPointIndex=M;const x=n.createBuffer(),D=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const M=s[T.id],x=T.uniforms,D=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,C=x.length;R<C;R++){const L=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,E=L.length;y<E;y++){const w=L[y];if(f(w,R,y,D)===!0){const U=w.__offset,V=Array.isArray(w.value)?w.value:[w.value];let te=0;for(let K=0;K<V.length;K++){const k=V[K],$=v(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,U+te,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,te),te+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,M,x,D){const R=T.value,C=M+"_"+x;if(D[C]===void 0)return typeof R=="number"||typeof R=="boolean"?D[C]=R:D[C]=R.clone(),!0;{const L=D[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return D[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(T){const M=T.uniforms;let x=0;const D=16;for(let C=0,L=M.length;C<L;C++){const y=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,w=y.length;E<w;E++){const U=y[E],V=Array.isArray(U.value)?U.value:[U.value];for(let te=0,K=V.length;te<K;te++){const k=V[te],$=v(k),X=x%D,ge=X%$.boundary,we=X+ge;x+=ge,we!==0&&D-we<$.storage&&(x+=D-we),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=$.storage}}}const R=x%D;return R>0&&(x+=D-R),T.__size=x,T.__cache={},this}function v(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function m(T){const M=T.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ZT{constructor(e={}){const{canvas:t=wv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ns,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let D=!1;this._outputColorSpace=un;let R=0,C=0,L=null,y=-1,E=null;const w=new Tt,U=new Tt;let V=null;const te=new ut(0);let K=0,k=t.width,$=t.height,X=1,ge=null,we=null;const Ie=new Tt(0,0,k,$),Xe=new Tt(0,0,k,$);let _t=!1;const se=new zu;let ve=!1,De=!1;const Me=new bt,Be=new bt,st=new B,Ye=new Tt,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function W(){return L===null?X:1}let b=i;function ie(S,z){return t.getContext(S,z)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wu}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",oe,!1),b===null){const z="webgl2";if(b=ie(z,S),b===null)throw ie(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ee,ae,Q,re,Y,ue,he,A,g,F,Z,ne,q,Te,_e,Ae,Le,ce,xe,Ue,ze,Ee,Je,O;function ye(){ee=new aM(b),ee.init(),Ee=new VT(b,ee),ae=new eM(b,ee,e,Ee),Q=new HT(b,ee),ae.reverseDepthBuffer&&h&&Q.buffers.depth.setReversed(!0),re=new uM(b),Y=new wT,ue=new GT(b,ee,Q,Y,ae,Ee,re),he=new nM(x),A=new oM(x),g=new _x(b),Je=new JS(b,g),F=new lM(b,g,re,Je),Z=new hM(b,F,g,re),xe=new dM(b,ae,ue),Ae=new tM(Y),ne=new RT(x,he,A,ee,ae,Je,Ae),q=new qT(x,Y),Te=new PT,_e=new UT(ee),ce=new ZS(x,he,A,Q,Z,f,l),Le=new kT(x,Z,ae),O=new jT(b,re,ae,Q),Ue=new QS(b,ee,re),ze=new cM(b,ee,re),re.programs=ne.programs,x.capabilities=ae,x.extensions=ee,x.properties=Y,x.renderLists=Te,x.shadowMap=Le,x.state=Q,x.info=re}ye();const de=new KT(x,b);this.xr=de,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(k,$,!1))},this.getSize=function(S){return S.set(k,$)},this.setSize=function(S,z,j=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,$=z,t.width=Math.floor(S*X),t.height=Math.floor(z*X),j===!0&&(t.style.width=S+"px",t.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(k*X,$*X).floor()},this.setDrawingBufferSize=function(S,z,j){k=S,$=z,X=j,t.width=Math.floor(S*j),t.height=Math.floor(z*j),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(Ie)},this.setViewport=function(S,z,j,J){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,z,j,J),Q.viewport(w.copy(Ie).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Xe)},this.setScissor=function(S,z,j,J){S.isVector4?Xe.set(S.x,S.y,S.z,S.w):Xe.set(S,z,j,J),Q.scissor(U.copy(Xe).multiplyScalar(X).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(S){Q.setScissorTest(_t=S)},this.setOpaqueSort=function(S){ge=S},this.setTransparentSort=function(S){we=S},this.getClearColor=function(S){return S.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,j=!0){let J=0;if(S){let H=!1;if(L!==null){const me=L.texture.format;H=me===Nu||me===Ou||me===Du}if(H){const me=L.texture.type,be=me===Ri||me===Ds||me===uo||me===ho||me===Pu||me===Lu,Ne=ce.getClearColor(),Ce=ce.getClearAlpha(),Ke=Ne.r,qe=Ne.g,ke=Ne.b;be?(_[0]=Ke,_[1]=qe,_[2]=ke,_[3]=Ce,b.clearBufferuiv(b.COLOR,0,_)):(v[0]=Ke,v[1]=qe,v[2]=ke,v[3]=Ce,b.clearBufferiv(b.COLOR,0,v))}else J|=b.COLOR_BUFFER_BIT}z&&(J|=b.DEPTH_BUFFER_BIT),j&&(J|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ce.dispose(),Te.dispose(),_e.dispose(),Y.dispose(),he.dispose(),A.dispose(),Z.dispose(),Je.dispose(),O.dispose(),ne.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ku),de.removeEventListener("sessionend",$u),ls.stop()};function Pe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const S=re.autoReset,z=Le.enabled,j=Le.autoUpdate,J=Le.needsUpdate,H=Le.type;ye(),re.autoReset=S,Le.enabled=z,Le.autoUpdate=j,Le.needsUpdate=J,Le.type=H}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Oe(S){const z=S.target;z.removeEventListener("dispose",Oe),Qe(z)}function Qe(S){Ct(S),Y.remove(S)}function Ct(S){const z=Y.get(S).programs;z!==void 0&&(z.forEach(function(j){ne.releaseProgram(j)}),S.isShaderMaterial&&ne.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,j,J,H,me){z===null&&(z=P);const be=H.isMesh&&H.matrixWorld.determinant()<0,Ne=um(S,z,j,J,H);Q.setMaterial(J,be);let Ce=j.index,Ke=1;if(J.wireframe===!0){if(Ce=F.getWireframeAttribute(j),Ce===void 0)return;Ke=2}const qe=j.drawRange,ke=j.attributes.position;let at=qe.start*Ke,Et=(qe.start+qe.count)*Ke;me!==null&&(at=Math.max(at,me.start*Ke),Et=Math.min(Et,(me.start+me.count)*Ke)),Ce!==null?(at=Math.max(at,0),Et=Math.min(Et,Ce.count)):ke!=null&&(at=Math.max(at,0),Et=Math.min(Et,ke.count));const Lt=Et-at;if(Lt<0||Lt===1/0)return;Je.setup(H,J,Ne,j,Ce);let Dt,ht=Ue;if(Ce!==null&&(Dt=g.get(Ce),ht=ze,ht.setIndex(Dt)),H.isMesh)J.wireframe===!0?(Q.setLineWidth(J.wireframeLinewidth*W()),ht.setMode(b.LINES)):ht.setMode(b.TRIANGLES);else if(H.isLine){let We=J.linewidth;We===void 0&&(We=1),Q.setLineWidth(We*W()),H.isLineSegments?ht.setMode(b.LINES):H.isLineLoop?ht.setMode(b.LINE_LOOP):ht.setMode(b.LINE_STRIP)}else H.isPoints?ht.setMode(b.POINTS):H.isSprite&&ht.setMode(b.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)_r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const We=H._multiDrawStarts,Xt=H._multiDrawCounts,gt=H._multiDrawCount,Gn=Ce?g.get(Ce).bytesPerElement:1,ks=Y.get(J).currentProgram.getUniforms();for(let Sn=0;Sn<gt;Sn++)ks.setValue(b,"_gl_DrawID",Sn),ht.render(We[Sn]/Gn,Xt[Sn])}else if(H.isInstancedMesh)ht.renderInstances(at,Lt,H.count);else if(j.isInstancedBufferGeometry){const We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Xt=Math.min(j.instanceCount,We);ht.renderInstances(at,Lt,Xt)}else ht.render(at,Lt)};function xt(S,z,j){S.transparent===!0&&S.side===gi&&S.forceSinglePass===!1?(S.side=mn,S.needsUpdate=!0,bo(S,z,j),S.side=rs,S.needsUpdate=!0,bo(S,z,j),S.side=gi):bo(S,z,j)}this.compile=function(S,z,j=null){j===null&&(j=S),p=_e.get(j),p.init(z),M.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),S!==j&&S.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const J=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let be=0;be<me.length;be++){const Ne=me[be];xt(Ne,j,H),J.add(Ne)}else xt(me,j,H),J.add(me)}),p=M.pop(),J},this.compileAsync=function(S,z,j=null){const J=this.compile(S,z,j);return new Promise(H=>{function me(){if(J.forEach(function(be){Y.get(be).currentProgram.isReady()&&J.delete(be)}),J.size===0){H(S);return}setTimeout(me,10)}ee.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Hn=null;function wi(S){Hn&&Hn(S)}function Ku(){ls.stop()}function $u(){ls.start()}const ls=new jp;ls.setAnimationLoop(wi),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(S){Hn=S,de.setAnimationLoop(S),S===null?ls.stop():ls.start()},de.addEventListener("sessionstart",Ku),de.addEventListener("sessionend",$u),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(z),z=de.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,z,L),p=_e.get(S,M.length),p.init(z),M.push(p),Be.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(Be),De=this.localClippingEnabled,ve=Ae.init(this.clippingPlanes,De),m=Te.get(S,T.length),m.init(),T.push(m),de.enabled===!0&&de.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&qa(me,z,-1/0,x.sortObjects)}qa(S,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ge,we),I=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,I&&ce.addToRenderList(m,S),this.info.render.frame++,ve===!0&&Ae.beginShadows();const j=p.state.shadowsArray;Le.render(j,S,z),ve===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const me=z.cameras;if(H.length>0)for(let be=0,Ne=me.length;be<Ne;be++){const Ce=me[be];ju(J,H,S,Ce)}I&&ce.render(S);for(let be=0,Ne=me.length;be<Ne;be++){const Ce=me[be];qu(m,S,Ce,Ce.viewport)}}else H.length>0&&ju(J,H,S,z),I&&ce.render(S),qu(m,S,z);L!==null&&C===0&&(ue.updateMultisampleRenderTarget(L),ue.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(x,S,z),Je.resetDefaultState(),y=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],ve===!0&&Ae.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function qa(S,z,j,J){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||se.intersectsSprite(S)){J&&Ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Be);const be=Z.update(S),Ne=S.material;Ne.visible&&m.push(S,be,Ne,j,Ye.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||se.intersectsObject(S))){const be=Z.update(S),Ne=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ye.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ye.copy(be.boundingSphere.center)),Ye.applyMatrix4(S.matrixWorld).applyMatrix4(Be)),Array.isArray(Ne)){const Ce=be.groups;for(let Ke=0,qe=Ce.length;Ke<qe;Ke++){const ke=Ce[Ke],at=Ne[ke.materialIndex];at&&at.visible&&m.push(S,be,at,j,Ye.z,ke)}}else Ne.visible&&m.push(S,be,Ne,j,Ye.z,null)}}const me=S.children;for(let be=0,Ne=me.length;be<Ne;be++)qa(me[be],z,j,J)}function qu(S,z,j,J){const H=S.opaque,me=S.transmissive,be=S.transparent;p.setupLightsView(j),ve===!0&&Ae.setGlobalState(x.clippingPlanes,j),J&&Q.viewport(w.copy(J)),H.length>0&&yo(H,z,j),me.length>0&&yo(me,z,j),be.length>0&&yo(be,z,j),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ju(S,z,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Os(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?xo:Ri,minFilter:ws,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const me=p.state.transmissionRenderTarget[J.id],be=J.viewport||w;me.setSize(be.z*x.transmissionResolutionScale,be.w*x.transmissionResolutionScale);const Ne=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(te),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),I&&ce.render(j);const Ce=x.toneMapping;x.toneMapping=ns;const Ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),ve===!0&&Ae.setGlobalState(x.clippingPlanes,J),yo(S,j,J),ue.updateMultisampleRenderTarget(me),ue.updateRenderTargetMipmap(me),ee.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ke=0,at=z.length;ke<at;ke++){const Et=z[ke],Lt=Et.object,Dt=Et.geometry,ht=Et.material,We=Et.group;if(ht.side===gi&&Lt.layers.test(J.layers)){const Xt=ht.side;ht.side=mn,ht.needsUpdate=!0,Zu(Lt,j,J,Dt,ht,We),ht.side=Xt,ht.needsUpdate=!0,qe=!0}}qe===!0&&(ue.updateMultisampleRenderTarget(me),ue.updateRenderTargetMipmap(me))}x.setRenderTarget(Ne),x.setClearColor(te,K),Ke!==void 0&&(J.viewport=Ke),x.toneMapping=Ce}function yo(S,z,j){const J=z.isScene===!0?z.overrideMaterial:null;for(let H=0,me=S.length;H<me;H++){const be=S[H],Ne=be.object,Ce=be.geometry,Ke=be.group;let qe=be.material;qe.allowOverride===!0&&J!==null&&(qe=J),Ne.layers.test(j.layers)&&Zu(Ne,z,j,Ce,qe,Ke)}}function Zu(S,z,j,J,H,me){S.onBeforeRender(x,z,j,J,H,me),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(x,z,j,J,S,me),H.transparent===!0&&H.side===gi&&H.forceSinglePass===!1?(H.side=mn,H.needsUpdate=!0,x.renderBufferDirect(j,z,J,H,S,me),H.side=rs,H.needsUpdate=!0,x.renderBufferDirect(j,z,J,H,S,me),H.side=gi):x.renderBufferDirect(j,z,J,H,S,me),S.onAfterRender(x,z,j,J,H,me)}function bo(S,z,j){z.isScene!==!0&&(z=P);const J=Y.get(S),H=p.state.lights,me=p.state.shadowsArray,be=H.state.version,Ne=ne.getParameters(S,H.state,me,z,j),Ce=ne.getProgramCacheKey(Ne);let Ke=J.programs;J.environment=S.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(S.isMeshStandardMaterial?A:he).get(S.envMap||J.environment),J.envMapRotation=J.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Ke===void 0&&(S.addEventListener("dispose",Oe),Ke=new Map,J.programs=Ke);let qe=Ke.get(Ce);if(qe!==void 0){if(J.currentProgram===qe&&J.lightsStateVersion===be)return Qu(S,Ne),qe}else Ne.uniforms=ne.getUniforms(S),S.onBeforeCompile(Ne,x),qe=ne.acquireProgram(Ne,Ce),Ke.set(Ce,qe),J.uniforms=Ne.uniforms;const ke=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=Ae.uniform),Qu(S,Ne),J.needsLights=hm(S),J.lightsStateVersion=be,J.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMap.value=H.state.directionalShadowMap,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotShadowMap.value=H.state.spotShadowMap,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMap.value=H.state.pointShadowMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=qe,J.uniformsList=null,qe}function Ju(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=da.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function Qu(S,z){const j=Y.get(S);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function um(S,z,j,J,H){z.isScene!==!0&&(z=P),ue.resetTextureUnits();const me=z.fog,be=J.isMeshStandardMaterial?z.environment:null,Ne=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:yr,Ce=(J.isMeshStandardMaterial?A:he).get(J.envMap||be),Ke=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ke=!!j.morphAttributes.position,at=!!j.morphAttributes.normal,Et=!!j.morphAttributes.color;let Lt=ns;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const Dt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ht=Dt!==void 0?Dt.length:0,We=Y.get(J),Xt=p.state.lights;if(ve===!0&&(De===!0||S!==E)){const sn=S===E&&J.id===y;Ae.setState(J,S,sn)}let gt=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Xt.state.version||We.outputColorSpace!==Ne||H.isBatchedMesh&&We.batching===!1||!H.isBatchedMesh&&We.batching===!0||H.isBatchedMesh&&We.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&We.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&We.instancing===!1||!H.isInstancedMesh&&We.instancing===!0||H.isSkinnedMesh&&We.skinning===!1||!H.isSkinnedMesh&&We.skinning===!0||H.isInstancedMesh&&We.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&We.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&We.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&We.instancingMorph===!1&&H.morphTexture!==null||We.envMap!==Ce||J.fog===!0&&We.fog!==me||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ae.numPlanes||We.numIntersection!==Ae.numIntersection)||We.vertexAlphas!==Ke||We.vertexTangents!==qe||We.morphTargets!==ke||We.morphNormals!==at||We.morphColors!==Et||We.toneMapping!==Lt||We.morphTargetsCount!==ht)&&(gt=!0):(gt=!0,We.__version=J.version);let Gn=We.currentProgram;gt===!0&&(Gn=bo(J,z,H));let ks=!1,Sn=!1,Pr=!1;const Pt=Gn.getUniforms(),Pn=We.uniforms;if(Q.useProgram(Gn.program)&&(ks=!0,Sn=!0,Pr=!0),J.id!==y&&(y=J.id,Sn=!0),ks||E!==S){Q.buffers.depth.getReversed()?(Me.copy(S.projectionMatrix),Pv(Me),Lv(Me),Pt.setValue(b,"projectionMatrix",Me)):Pt.setValue(b,"projectionMatrix",S.projectionMatrix),Pt.setValue(b,"viewMatrix",S.matrixWorldInverse);const _n=Pt.map.cameraPosition;_n!==void 0&&_n.setValue(b,st.setFromMatrixPosition(S.matrixWorld)),ae.logarithmicDepthBuffer&&Pt.setValue(b,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pt.setValue(b,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Sn=!0,Pr=!0)}if(H.isSkinnedMesh){Pt.setOptional(b,H,"bindMatrix"),Pt.setOptional(b,H,"bindMatrixInverse");const sn=H.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Pt.setValue(b,"boneTexture",sn.boneTexture,ue))}H.isBatchedMesh&&(Pt.setOptional(b,H,"batchingTexture"),Pt.setValue(b,"batchingTexture",H._matricesTexture,ue),Pt.setOptional(b,H,"batchingIdTexture"),Pt.setValue(b,"batchingIdTexture",H._indirectTexture,ue),Pt.setOptional(b,H,"batchingColorTexture"),H._colorsTexture!==null&&Pt.setValue(b,"batchingColorTexture",H._colorsTexture,ue));const Ln=j.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&xe.update(H,j,Gn),(Sn||We.receiveShadow!==H.receiveShadow)&&(We.receiveShadow=H.receiveShadow,Pt.setValue(b,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Pn.envMap.value=Ce,Pn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(Pn.envMapIntensity.value=z.environmentIntensity),Sn&&(Pt.setValue(b,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&dm(Pn,Pr),me&&J.fog===!0&&q.refreshFogUniforms(Pn,me),q.refreshMaterialUniforms(Pn,J,X,$,p.state.transmissionRenderTarget[S.id]),da.upload(b,Ju(We),Pn,ue)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(da.upload(b,Ju(We),Pn,ue),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pt.setValue(b,"center",H.center),Pt.setValue(b,"modelViewMatrix",H.modelViewMatrix),Pt.setValue(b,"normalMatrix",H.normalMatrix),Pt.setValue(b,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const sn=J.uniformsGroups;for(let _n=0,ja=sn.length;_n<ja;_n++){const cs=sn[_n];O.update(cs,Gn),O.bind(cs,Gn)}}return Gn}function dm(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function hm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,z,j){const J=Y.get(S);J.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Y.get(S.texture).__webglTexture=z,Y.get(S.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){const j=Y.get(S);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const fm=b.createFramebuffer();this.setRenderTarget=function(S,z=0,j=0){L=S,R=z,C=j;let J=!0,H=null,me=!1,be=!1;if(S){const Ce=Y.get(S);if(Ce.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(b.FRAMEBUFFER,null),J=!1;else if(Ce.__webglFramebuffer===void 0)ue.setupRenderTarget(S);else if(Ce.__hasExternalTextures)ue.rebindTextures(S,Y.get(S.texture).__webglTexture,Y.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ke=S.depthTexture;if(Ce.__boundDepthTexture!==ke){if(ke!==null&&Y.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(S)}}const Ke=S.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(be=!0);const qe=Y.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[z])?H=qe[z][j]:H=qe[z],me=!0):S.samples>0&&ue.useMultisampledRTT(S)===!1?H=Y.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?H=qe[j]:H=qe,w.copy(S.viewport),U.copy(S.scissor),V=S.scissorTest}else w.copy(Ie).multiplyScalar(X).floor(),U.copy(Xe).multiplyScalar(X).floor(),V=_t;if(j!==0&&(H=fm),Q.bindFramebuffer(b.FRAMEBUFFER,H)&&J&&Q.drawBuffers(S,H),Q.viewport(w),Q.scissor(U),Q.setScissorTest(V),me){const Ce=Y.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,j)}else if(be){const Ce=Y.get(S.texture),Ke=z;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ce.__webglTexture,j,Ke)}else if(S!==null&&j!==0){const Ce=Y.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ce.__webglTexture,j)}y=-1},this.readRenderTargetPixels=function(S,z,j,J,H,me,be,Ne=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){Q.bindFramebuffer(b.FRAMEBUFFER,Ce);try{const Ke=S.textures[Ne],qe=Ke.format,ke=Ke.type;if(!ae.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-J&&j>=0&&j<=S.height-H&&(S.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ne),b.readPixels(z,j,J,H,Ee.convert(qe),Ee.convert(ke),me))}finally{const Ke=L!==null?Y.get(L).__webglFramebuffer:null;Q.bindFramebuffer(b.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(S,z,j,J,H,me,be,Ne=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce)if(z>=0&&z<=S.width-J&&j>=0&&j<=S.height-H){Q.bindFramebuffer(b.FRAMEBUFFER,Ce);const Ke=S.textures[Ne],qe=Ke.format,ke=Ke.type;if(!ae.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,at),b.bufferData(b.PIXEL_PACK_BUFFER,me.byteLength,b.STREAM_READ),S.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ne),b.readPixels(z,j,J,H,Ee.convert(qe),Ee.convert(ke),0);const Et=L!==null?Y.get(L).__webglFramebuffer:null;Q.bindFramebuffer(b.FRAMEBUFFER,Et);const Lt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Cv(b,Lt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,at),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,me),b.deleteBuffer(at),b.deleteSync(Lt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,j=0){const J=Math.pow(2,-j),H=Math.floor(S.image.width*J),me=Math.floor(S.image.height*J),be=z!==null?z.x:0,Ne=z!==null?z.y:0;ue.setTexture2D(S,0),b.copyTexSubImage2D(b.TEXTURE_2D,j,0,0,be,Ne,H,me),Q.unbindTexture()};const pm=b.createFramebuffer(),mm=b.createFramebuffer();this.copyTextureToTexture=function(S,z,j=null,J=null,H=0,me=null){me===null&&(H!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=H,H=0):me=0);let be,Ne,Ce,Ke,qe,ke,at,Et,Lt;const Dt=S.isCompressedTexture?S.mipmaps[me]:S.image;if(j!==null)be=j.max.x-j.min.x,Ne=j.max.y-j.min.y,Ce=j.isBox3?j.max.z-j.min.z:1,Ke=j.min.x,qe=j.min.y,ke=j.isBox3?j.min.z:0;else{const Ln=Math.pow(2,-H);be=Math.floor(Dt.width*Ln),Ne=Math.floor(Dt.height*Ln),S.isDataArrayTexture?Ce=Dt.depth:S.isData3DTexture?Ce=Math.floor(Dt.depth*Ln):Ce=1,Ke=0,qe=0,ke=0}J!==null?(at=J.x,Et=J.y,Lt=J.z):(at=0,Et=0,Lt=0);const ht=Ee.convert(z.format),We=Ee.convert(z.type);let Xt;z.isData3DTexture?(ue.setTexture3D(z,0),Xt=b.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ue.setTexture2DArray(z,0),Xt=b.TEXTURE_2D_ARRAY):(ue.setTexture2D(z,0),Xt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment);const gt=b.getParameter(b.UNPACK_ROW_LENGTH),Gn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),ks=b.getParameter(b.UNPACK_SKIP_PIXELS),Sn=b.getParameter(b.UNPACK_SKIP_ROWS),Pr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Dt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Dt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ke),b.pixelStorei(b.UNPACK_SKIP_ROWS,qe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ke);const Pt=S.isDataArrayTexture||S.isData3DTexture,Pn=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){const Ln=Y.get(S),sn=Y.get(z),_n=Y.get(Ln.__renderTarget),ja=Y.get(sn.__renderTarget);Q.bindFramebuffer(b.READ_FRAMEBUFFER,_n.__webglFramebuffer),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,ja.__webglFramebuffer);for(let cs=0;cs<Ce;cs++)Pt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Y.get(S).__webglTexture,H,ke+cs),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Y.get(z).__webglTexture,me,Lt+cs)),b.blitFramebuffer(Ke,qe,be,Ne,at,Et,be,Ne,b.DEPTH_BUFFER_BIT,b.NEAREST);Q.bindFramebuffer(b.READ_FRAMEBUFFER,null),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||Y.has(S)){const Ln=Y.get(S),sn=Y.get(z);Q.bindFramebuffer(b.READ_FRAMEBUFFER,pm),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,mm);for(let _n=0;_n<Ce;_n++)Pt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ln.__webglTexture,H,ke+_n):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ln.__webglTexture,H),Pn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,sn.__webglTexture,me,Lt+_n):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,sn.__webglTexture,me),H!==0?b.blitFramebuffer(Ke,qe,be,Ne,at,Et,be,Ne,b.COLOR_BUFFER_BIT,b.NEAREST):Pn?b.copyTexSubImage3D(Xt,me,at,Et,Lt+_n,Ke,qe,be,Ne):b.copyTexSubImage2D(Xt,me,at,Et,Ke,qe,be,Ne);Q.bindFramebuffer(b.READ_FRAMEBUFFER,null),Q.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Pn?S.isDataTexture||S.isData3DTexture?b.texSubImage3D(Xt,me,at,Et,Lt,be,Ne,Ce,ht,We,Dt.data):z.isCompressedArrayTexture?b.compressedTexSubImage3D(Xt,me,at,Et,Lt,be,Ne,Ce,ht,Dt.data):b.texSubImage3D(Xt,me,at,Et,Lt,be,Ne,Ce,ht,We,Dt):S.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,me,at,Et,be,Ne,ht,We,Dt.data):S.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,me,at,Et,Dt.width,Dt.height,ht,Dt.data):b.texSubImage2D(b.TEXTURE_2D,me,at,Et,be,Ne,ht,We,Dt);b.pixelStorei(b.UNPACK_ROW_LENGTH,gt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Gn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ks),b.pixelStorei(b.UNPACK_SKIP_ROWS,Sn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Pr),me===0&&z.generateMipmaps&&b.generateMipmap(Xt),Q.unbindTexture()},this.copyTextureToTexture3D=function(S,z,j=null,J=null,H=0){return _r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,z,j,J,H)},this.initRenderTarget=function(S){Y.get(S).__webglFramebuffer===void 0&&ue.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ue.setTextureCube(S,0):S.isData3DTexture?ue.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ue.setTexture2DArray(S,0):ue.setTexture2D(S,0),Q.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,Q.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const Wh={type:"change"},Vu={type:"start"},tm={type:"end"},Qo=new Fu,Xh=new qi,JT=Math.cos(70*Rv.DEG2RAD),Bt=new B,vn=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wl=1e-6;class QT extends px{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:ar.ROTATE,TWO:ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new os,this._lastTargetPosition=new B,this._quat=new os().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xh,this._sphericalDelta=new xh,this._scale=1,this._panOffset=new B,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new B,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ty.bind(this),this._onPointerDown=ey.bind(this),this._onPointerUp=ny.bind(this),this._onContextMenu=cy.bind(this),this._onMouseWheel=ry.bind(this),this._onKeyDown=oy.bind(this),this._onTouchStart=ay.bind(this),this._onTouchMove=ly.bind(this),this._onMouseDown=iy.bind(this),this._onMouseMove=sy.bind(this),this._interceptControlDown=uy.bind(this),this._interceptControlUp=dy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wh),this.update(),this.state=Mt.NONE}update(e=null){const t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Qo.origin.copy(this.object.position),Qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qo.direction))<JT?this.object.lookAt(this.target):(Xh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qo.intersectPlane(Xh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wl||this._lastTargetPosition.distanceToSquared(this.target)>Wl?(this.dispatchEvent(Wh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Bt.copy(s).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ey(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ty(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ny(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tm),this.state=Mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function iy(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Mt.DOLLY;break;case pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}break;case pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Vu)}function sy(n){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ry(n){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(n.preventDefault(),this.dispatchEvent(Vu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(tm))}function oy(n){this.enabled!==!1&&this._handleKeyDown(n)}function ay(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Mt.TOUCH_ROTATE;break;case ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Mt.TOUCH_DOLLY_PAN;break;case ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Vu)}function ly(n){switch(this._trackPointer(n),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Mt.NONE}}function cy(n){this.enabled!==!1&&n.preventDefault()}function uy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class hy extends Vp{constructor(){super();const e=new ai;e.deleteAttribute("uv");const t=new Ra({side:mn}),i=new Ra,s=new Kp(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new kt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new sx(e,i,6),a=new Wt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new kt(e,ir(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new kt(e,ir(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new kt(e,ir(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const d=new kt(e,ir(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const h=new kt(e,ir(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const f=new kt(e,ir(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ir(n){const e=new Va;return e.color.setScalar(n),e}const N={hallFloor:"#b9c1c5",aisle:"#9fb0ba",aisleLine:"#f2c22f",apron:"#abb2b5",zonePlate:"#9daaa3",plinthSide:"#59646b",plinthTop:"#8e989d",yard:"#9ba3a6",wallPanel:"#d5dbde",wallPanelDark:"#b2bcc1",wallRib:"#a5b0b6",column:"#c6cfd4",structure:"#7d888f",roofDeck:"#a9b3b9",roofSeam:"#8f9aa0",roofRib:"#a3adb3",roofLight:"#f2fafd",doorRoll:"#a4aeb4",doorFrame:"#79848a",canopy:"#c3ccd1",steel:"#d2dbe0",steelDark:"#55636c",steelBlue:"#5d8ba6",alu:"#e2eaee",machineBody:"#3f7fa3",machineBodyDark:"#2f6584",machineTrim:"#bcd2dd",panelFace:"#31414b",rubber:"#2f353a",rubberBelt:"#3d464b",plastic:"#eef4f7",glass:"#a6cadb",safetyYellow:"#f5c62d",safetyOrange:"#ef8a2c",warningRed:"#e0563c",stripeWhite:"#f5f9fb",guard:"#f0c437",bollard:"#e6b028",lampWarm:"#ffdca8",lampCool:"#e8f6ff",ledRun:"#3fd98c",ledWait:"#ffc23f",ledIdle:"#93a4ad",ledAlarm:"#ff6a4d",screen:"#4fdcd6",background:"#9fb2bd",fogLight:"#9fb2bd"},fy={RUNNING:N.ledRun,WAITING:N.ledWait,IDLE:N.ledIdle,WARNING:N.ledAlarm,STOPPED:N.warningRed},py={VIB_FEEDER:[le.vibFeeder.x,1.2,le.vibFeeder.z],INCLINE:[(le.vibFeeder.x+le.sorter1.x)/2,1.4,le.vibFeeder.z],SORTER_1:[le.sorter1.x,1.6,le.sorter1.z],SORTER_2:[le.sorter2.x,1.6,le.sorter2.z],CONVEYOR:[(le.sorter1.x+le.tailDrop.x)/2,1.4,le.sorter1.z],SILO_PET:[Kn.SILO_PET.x,1.1,Kn.SILO_PET.z],SILO_HDPE:[Kn.SILO_HDPE.x,1.1,Kn.SILO_HDPE.z],SILO_COTTON:[Kn.SILO_COTTON.x,1.1,Kn.SILO_COTTON.z],SILO_POLYESTER:[Kn.SILO_POLYESTER.x,1.1,Kn.SILO_POLYESTER.z],SILO_BLEND:[Kn.SILO_BLEND.x,1.1,Kn.SILO_BLEND.z],BALER_PLASTIC:[le.balerPlastic.x,.8,le.balerPlastic.z],BALER_TEXTILE:[le.balerTextile.x,.8,le.balerTextile.z],BALER_CARDBOARD:[le.balerCardboard.x,.8,le.balerCardboard.z],SPREADER:[(le.spreader.x+le.hyperspec.x)/2,1,le.spreader.z],HYPERSPEC:[le.hyperspec.x-1,1.2,le.hyperspec.z],ROBOT_ARM:[le.arm.x,1.6,le.arm.z],STORAGE_CARDBOARD:[le.storageCardboard.x,.8,le.storageCardboard.z],STORAGE_MISC:[le.storageMisc.x,.8,le.storageMisc.z],SCALE:[le.checkpoint.x,.5,le.checkpoint.z],TRUCK_A:[Ot.IN_1.x,1.5,Ot.IN_1.z+2.4],TRUCK_B:[Ot.IN_2.x,1.5,Ot.IN_2.z+2.4],TRUCK_C:[Ot.OUT.x,1.5,Ot.OUT.z+2.4],FORKLIFT_1:[Wr.STAGING.x,1,Wr.STAGING.z],FORKLIFT_2:[Wr.SPREADER.x,1,Wr.SPREADER.z]},Xl={x:6,y:6,z:6},my=.75,_y=1.6;function gy(n,e,t,i,s=22){const r=new B(n[0],n[1],n[2]),o=r.distanceTo(e.position),a=r.clone().applyMatrix4(e.matrixWorldInverse).z<-.1;r.project(e);const l=t||1,c=i||1,u=a&&Math.abs(r.x)<=1.15&&Math.abs(r.y)<=1.15,d=e.fov*Math.PI/180,h=s/(2*Math.tan(d/2)*Math.max(.1,o));return{x:(r.x+1)/2*l,y:(1-r.y)/2*c,scale:Math.min(_y,Math.max(my,h)),visible:u}}const nm="deviceId";function vy(n,e){n.userData[nm]=e}function xy(n){var t;let e=n??null;for(;e;){const i=(t=e.userData)==null?void 0:t[nm];if(typeof i=="string"&&i.length>0)return i;e=e.parent}return null}function Ey(n,e,t,i=new qp){i.setFromCamera(t,e);const s=i.intersectObject(n,!0);for(const r of s){const o=xy(r.object);if(o)return o}return null}function Sy(n,e,t){return new Ze((n-t.left)/(t.width||1)*2-1,-((e-t.top)/(t.height||1))*2+1)}const vr={x:37,y:32,z:43},sr=[0,.4,-3.2],My=new B(vr.x,vr.y,vr.z),Ty=4;class Es{constructor(e,t){ct(this,"scene",new Vp);ct(this,"camera");ct(this,"renderer");ct(this,"controls");ct(this,"root",new lr);ct(this,"container");ct(this,"callbacks");ct(this,"hooks",[]);ct(this,"raycaster",new qp);ct(this,"clock",{last:0,elapsed:0});ct(this,"frameHandle",0);ct(this,"disposed",!1);ct(this,"resizeObserver",null);ct(this,"cameraMode","free");ct(this,"focusTarget",sr);ct(this,"reducedMotion",!1);ct(this,"lastKey","");ct(this,"modeElapsed",0);ct(this,"appliedFit",1);ct(this,"prevMode","free");ct(this,"desired",new B);ct(this,"pointerDownAt",null);ct(this,"onPointerDown",e=>{this.pointerDownAt={x:e.clientX,y:e.clientY}});ct(this,"onClick",e=>{const t=this.pointerDownAt;this.pointerDownAt=null,!(t&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>Ty)&&this.callbacks.onSelect(this.pick(e))});ct(this,"onPointerMove",e=>{this.renderer.domElement.style.cursor=this.pick(e)?"pointer":""});ct(this,"resize",()=>{if(this.disposed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.renderOnce()});ct(this,"onContextLost",e=>{var t,i;e.preventDefault(),(i=(t=this.callbacks).onContextChange)==null||i.call(t,!0)});ct(this,"onContextRestored",()=>{var e,t;(t=(e=this.callbacks).onContextChange)==null||t.call(e,!1)});this.container=e,this.callbacks=t,this.renderer=new ZT({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(1.75,window.devicePixelRatio||1)),this.renderer.outputColorSpace=un,this.renderer.toneMapping=yp,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Mp,this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.addEventListener("webglcontextlost",this.onContextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.onContextRestored),e.appendChild(this.renderer.domElement),this.camera=new bn(38,1,.5,300),this.camera.position.set(vr.x,vr.y,vr.z),this.scene.background=new ut(N.background),this.scene.fog=new ku(N.fogLight,.0034),this.scene.add(this.root),this.controls=new QT(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=7,this.controls.maxDistance=80,this.controls.maxPolarAngle=Math.PI/2.2,this.controls.target.set(sr[0],sr[1],sr[2]),this.controls.addEventListener("change",()=>this.renderOnce()),this.setupLights(),this.setupEnvironment(),this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),this.renderer.domElement.addEventListener("click",this.onClick),this.renderer.domElement.addEventListener("pointermove",this.onPointerMove),this.resize(),typeof ResizeObserver=="function"?(this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e)):window.addEventListener("resize",this.resize)}setupLights(){const e=new cx(N.lampCool,N.plinthSide,.24);this.scene.add(e);const t=new Fl("#fff0d6",3.6);t.position.set(26,34,20),t.castShadow=!0,t.shadow.bias=-4e-4,t.shadow.normalBias=.04,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=1,t.shadow.camera.far=120,t.shadow.camera.left=-30,t.shadow.camera.right=30,t.shadow.camera.top=26,t.shadow.camera.bottom=-26,this.scene.add(t);const i=new Fl("#a8dcff",.42);i.position.set(-24,18,-16),this.scene.add(i);const s=new Fl("#ffd9a8",.3);s.position.set(8,12,-26),this.scene.add(s),this.scene.add(new hx(16777215,.1))}setupEnvironment(e=.3){var t;try{const i=new eu(this.renderer),s=new hy,r=i.fromScene(s,.04);this.scene.environment=r.texture,this.scene.environmentIntensity=e,i.dispose(),(t=s.dispose)==null||t.call(s)}catch{}}addFrameHook(e){return this.hooks.push(e),()=>{const t=this.hooks.indexOf(e);t>=0&&this.hooks.splice(t,1)}}start(){if(this.disposed||this.frameHandle)return;this.clock.last=performance.now();const e=t=>{if(this.disposed)return;this.frameHandle=requestAnimationFrame(e);const i=Math.min(.05,(t-this.clock.last)/1e3);this.clock.last=t,this.clock.elapsed+=i;for(const s of this.hooks)s({delta:i,elapsed:this.clock.elapsed});this.updateCamera(i),this.controls.update(),this.renderer.render(this.scene,this.camera)};this.frameHandle=requestAnimationFrame(e)}renderOnce(){this.disposed||this.renderer.render(this.scene,this.camera)}setCameraMode(e){this.cameraMode=e}setFocusTarget(e){this.focusTarget=e??sr}setReducedMotion(e){this.reducedMotion=e}get isReducedMotion(){return this.reducedMotion}projectToScreen(e,t=22){const i=this.renderer.domElement;return gy(e,this.camera,i.clientWidth,i.clientHeight,t)}updateCamera(e){const{camera:t,controls:i}=this,s=this.renderer.getSize(new Ze),r=s.x>0&&s.y>0?Math.min(1.6,Math.max(1,1/(s.x/s.y))):1;if(Math.abs(this.appliedFit-r)>.01){const u=t.position.clone().sub(i.target);t.position.copy(i.target).add(u.setLength(u.length()*(r/this.appliedFit))),this.appliedFit=r}if(this.cameraMode==="free"){this.prevMode=this.cameraMode;return}this.prevMode!==this.cameraMode&&(this.prevMode=this.cameraMode,this.lastKey="",this.modeElapsed=0);const[o,a,l]=this.focusTarget,c=`${this.cameraMode}:${o},${a},${l}`;if(c!==this.lastKey&&(this.lastKey=c,this.modeElapsed=0,this.desired.set(o,a,l)),this.modeElapsed+=e,i.target.lerp(this.desired,.1),this.cameraMode==="overview"&&this.modeElapsed<3&&t.position.lerp(My,.07),this.cameraMode==="focus"&&this.modeElapsed<3){const u=this.desired.x>0?-1:1,d=this.desired.z>2.5?-1:1,h=new B(Xl.x*u,Xl.y,Xl.z*d);t.position.lerp(this.desired.clone().add(h),.07)}}pick(e){const t=this.renderer.domElement.getBoundingClientRect();return t.width===0||t.height===0?null:Ey(this.root,this.camera,Sy(e.clientX,e.clientY,t),this.raycaster)}static airPuffPositions(){return[{device:"SORTER_1",position:[le.sorter1.x,2.5,le.sorter1.z]},{device:"SORTER_2",position:[le.sorter2.x,2.4,le.sorter2.z]}]}static anchorFor(e){return py[e]??sr}dispose(){var e;this.disposed||(this.disposed=!0,this.frameHandle&&cancelAnimationFrame(this.frameHandle),this.frameHandle=0,(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=null,window.removeEventListener("resize",this.resize),this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),this.renderer.domElement.removeEventListener("click",this.onClick),this.renderer.domElement.removeEventListener("pointermove",this.onPointerMove),this.renderer.domElement.removeEventListener("webglcontextlost",this.onContextLost),this.renderer.domElement.removeEventListener("webglcontextrestored",this.onContextRestored),this.controls.dispose(),this.scene.traverse(t=>{var r;const i=t;(r=i.geometry)==null||r.dispose();const s=i.material;Array.isArray(s)?s.forEach(o=>o.dispose()):s==null||s.dispose()}),this.renderer.dispose(),this.renderer.domElement.parentNode===this.container&&this.container.removeChild(this.renderer.domElement))}}function yy(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new li;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(const u in r){const d=Yh(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][h]);const _=Yh(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function Yh(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new kn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let h=0,f=u.count;h<f;h++)for(let _=0;_<t;_++){const v=u.getComponent(h,_);a.setComponent(h+d,_,v)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function by(n,e,t,i,s=2){const r=Math.max(0,Math.min(i,Math.min(n,e,t)/2-1e-4));if(r<=.002)return new ai(n,e,t);const o=Ay(n,e,t,r,s),a=yy(o,!1)??o[0];return o.forEach(l=>l.dispose()),a}function Ay(n,e,t,i,s=2){const r=Math.max(4,Math.round(s)*2),o=Math.max(.001,n-i*2),a=Math.max(.001,e-i*2),l=Math.max(.001,t-i*2),c=[new ai(o,e,t)];for(const d of[-1,1])for(const h of[-1,1])for(const f of[-1,1]){const _=new Wa(i,r,r);_.translate(d*o/2,h*a/2,f*l/2),c.push(_)}const u=d=>new Rr(i,i,d,r,1,!1);for(const d of[-1,1])for(const h of[-1,1]){const f=u(o);f.rotateZ(Math.PI/2),f.translate(0,d*a/2,h*l/2),c.push(f)}for(const d of[-1,1])for(const h of[-1,1]){const f=u(a);f.translate(d*o/2,0,h*l/2),c.push(f)}for(const d of[-1,1])for(const h of[-1,1]){const f=u(l);f.rotateX(Math.PI/2),f.translate(d*o/2,h*a/2,0),c.push(f)}return c}function im(n,e,t){return e&&n.position.set(e[0],e[1],e[2]),t&&n.rotation.set(t[0],t[1],t[2]),n}function Ve(n,e,t){const i=new lr;return im(i,e,t),n.add(i),i}function ot(n,e){const t=new kt(e.geometry,e.material);return im(t,e.position,e.rotation),t.castShadow=e.castShadow??!0,t.receiveShadow=e.receiveShadow??!1,n.add(t),t}const fn=(n,e,t)=>new ai(n,e,t),Ls=(n,e,t,i=16,s=!1)=>new Rr(n,e,t,i,1,s),mo=(n,e=12,t=10)=>new Wa(n,e,t),Kh=(n,e)=>new To(n,e),dt=n=>new Ra(n);function sm(n,e){const t=e.clone().sub(n),i=t.length(),s=n.clone().add(e).multiplyScalar(.5),r=new os().setFromUnitVectors(new B(0,1,0),t.clone().normalize()),o=new oi().setFromQuaternion(r);return{position:[s.x,s.y,s.z],rotation:[o.x,o.y,o.z],length:i}}const Ry={concrete:{roughness:.93,metalness:.02,envMapIntensity:.45},floorPaint:{roughness:.6,metalness:.03,envMapIntensity:.7},steel:{roughness:.44,metalness:.82,envMapIntensity:1.15},steelPainted:{roughness:.5,metalness:.2,envMapIntensity:.9},aluminium:{roughness:.26,metalness:.9,envMapIntensity:1.3},rubber:{roughness:.88,metalness:0,envMapIntensity:.4},plastic:{roughness:.54,metalness:.05,envMapIntensity:.8},glass:{roughness:.12,metalness:.08,envMapIntensity:1.4,transparent:!0,opacity:.42},wood:{roughness:.78,metalness:0,envMapIntensity:.5},cardboard:{roughness:.92,metalness:0,envMapIntensity:.3},fabric:{roughness:.96,metalness:0,envMapIntensity:.28},lamp:{roughness:.4,metalness:0,emissiveIntensity:1.6},screen:{roughness:.3,metalness:.1,emissiveIntensity:.9}};function ei(n,e,t={}){return{...Ry[n],color:e,...t}}function is(n,e=1.8){return{color:n,emissive:n,emissiveIntensity:e,roughness:.35,metalness:0,toneMapped:!1}}function rm(n,e,t,i){return dt(ei(n,e,{...t===void 0?{}:{transparent:t<1,opacity:t},...i?{map:i}:{}}))}function pe(n,e,t={}){const{radius:i=.035,smoothness:s=2,position:r,rotation:o,color:a=N.steel,kind:l="steelPainted",castShadow:c=!0,receiveShadow:u=!0,opacity:d,map:h}=t,f=by(e[0],e[1],e[2],i,s);return ot(n,{geometry:f,material:rm(l,a,d,h),position:r,rotation:o,castShadow:c,receiveShadow:u})}const wy={y:[0,0,0],x:[0,0,Math.PI/2],z:[Math.PI/2,0,0]};function et(n,e,t,i={}){const{axis:s="y",position:r,rotation:o,color:a=N.steel,kind:l="steel",castShadow:c=!0,receiveShadow:u=!0,segments:d=14,opacity:h,map:f}=i;return ot(n,{geometry:Ls(e,e,t,d),material:rm(l,a,h,f),position:r,rotation:o??wy[s],castShadow:c,receiveShadow:u})}function Ar(n,e,t,i={}){const{radius:s=.04,color:r=N.steel,kind:o="steel",castShadow:a=!0}=i,l=new B(...e),c=new B(...t);if(c.distanceTo(l)<1e-4)return null;const u=sm(l,c);return ot(n,{geometry:Ls(s,s,u.length,10),material:dt(ei(o,r)),position:u.position,rotation:u.rotation,castShadow:a})}function zt(n,e,t,i={}){const{thickness:s=.08,color:r=N.steel,kind:o="steel",castShadow:a=!0}=i,l=new B(...e),c=new B(...t);if(c.distanceTo(l)<1e-4)return null;const u=sm(l,c);return ot(n,{geometry:fn(s,u.length,s),material:dt(ei(o,r)),position:u.position,rotation:u.rotation,castShadow:a})}function Cy(n,e){const{width:t,depth:i,height:s,axis:r="y",color:o=N.steelDark,kind:a="steel",thickness:l=.07,brace:c=!1}=e,u=Ve(n),d=r==="y"?.075:l;for(const[h,f]of[[-1,-1],[1,-1],[-1,1],[1,1]])r==="y"?et(u,d,s,{position:[h*t/2,s/2,f*i/2],color:o,kind:a}):et(u,d,i,{axis:"z",position:[h*t/2,s,f*i/2],color:o,kind:a});if(c)for(const h of[-1,1])zt(u,[-t/2,s*.32,h*i/2],[t/2,s*.32,h*i/2],{thickness:l*.7,color:o,kind:a});return u}function Yl(n,e,t,i={}){const{height:s=1.05,posts:r=4,color:o=N.guard,kind:a="steelPainted"}=i,l=new B(...e),c=new B(...t),u=c.clone().sub(l),d=u.length(),h=Math.atan2(u.x,u.z),f=l.clone().add(c).multiplyScalar(.5),_=Ve(n,[f.x,0,f.z],[0,h,0]);for(const m of[s,s*.55])et(_,.032,d,{axis:"z",position:[0,m,0],color:o,kind:a});const v=Math.max(2,r);for(let m=0;m<v;m+=1){const p=-d/2+d*m/(v-1);et(_,.035,s,{position:[0,s/2,p],color:o,kind:a})}return _}function Py(n,e){const{span:t,height:i,bays:s=8,thickness:r=.075,color:o=N.roofRib,kind:a="steel"}=e,l=Math.max(2,s),c=t/l,u=Array.from({length:l+1},(h,f)=>[-t/2+c*f,0]),d=Ve(n);return zt(d,[u[0][0],0,0],[u[l][0],0,0],{thickness:r,color:o,kind:a}),zt(d,[u[0][0],i,0],[u[l][0],i,0],{thickness:r,color:o,kind:a}),u.slice(0,-1).forEach((h,f)=>{const _=u[f+1],v=f%2===0;zt(d,[h[0],v?i:0,0],[_[0],v?0:i,0],{thickness:r*.62,color:o,kind:a})}),u.filter((h,f)=>f%2===1&&f<l).forEach(h=>{zt(d,[h[0],0,0],[h[0],i,0],{thickness:r*.55,color:o,kind:a})}),d}function nu(n,e){const{width:t,height:i,slats:s=6,position:r,rotation:o,color:a=N.steelDark,kind:l="steel"}=e,c=Math.max(2,s),u=i/c,d=Ve(n,r,o);for(let h=0;h<c;h+=1)pe(d,[t,u*.55,.02],{radius:0,position:[0,-i/2+u*(h+.5),0],rotation:[Math.PI/5,0,0],color:a,kind:l,receiveShadow:!1});return d}function Cr(n,e){const{count:t,spacing:i,position:s,rotation:r,radius:o=.022,color:a=N.alu}=e,l=Ve(n,s,r);for(let c=0;c<Math.max(1,t);c+=1)ot(l,{geometry:mo(o,8,6),material:dt(ei("aluminium",a)),position:[(c-(t-1)/2)*i,0,0],castShadow:!1});return l}function Wu(n,e={}){const{radius:t=.16,length:i=.42,axis:s="x",position:r,rotation:o,color:a=N.machineBodyDark,kind:l="steelPainted"}=e,c=Ve(n,r,o);et(c,t,i,{axis:s,color:a,kind:l});const u=8;for(let d=0;d<u;d+=1){const h=d/u*Math.PI*2,f=Math.cos(h)*t,_=Math.sin(h)*t;s==="x"&&zt(c,[-i/2,f,_],[i/2,f,_],{thickness:.022,color:a,kind:l,castShadow:!1})}return et(c,t*.28,.16,{axis:s==="x"?"x":"y",position:s==="x"?[i/2+.07,0,0]:[0,i/2+.07,0],color:N.alu,kind:"aluminium"}),c}function ur(n,e={}){const{size:t=[.7,1.5,.45],position:i,rotation:s,screen:r=!0,color:o=N.panelFace,kind:a="steelPainted"}=e,[l,c,u]=t,d=Ve(n,i,s);pe(d,t,{radius:.03,color:o,kind:a});for(const h of[.2,-.2])zt(d,[h*l,-c/2+.02,u/2],[h*l,c/2-.02,u/2],{thickness:.014,color:N.steelDark,kind:"steelPainted",castShadow:!1});return pe(d,[l*.62,c*.26,.03],{radius:0,position:[0,c*.24,u/2+.015],color:"#1d272c",kind:"plastic",castShadow:!1}),r&&ot(d,{geometry:fn(l*.52,c*.19,.001),material:dt(is(N.screen,1.1)),position:[0,c*.24,u/2+.035],castShadow:!1}),ot(d,{geometry:mo(.028,10,8),material:dt(is(N.ledRun,2.2)),position:[-l*.2,c*.06,u/2+.03],castShadow:!1}),ot(d,{geometry:mo(.028,10,8),material:dt(is(N.ledWait,2.2)),position:[-l*.05,c*.06,u/2+.03],castShadow:!1}),d}function dr(n,e){const{status:t,position:i,rotation:s,radius:r=.045,housing:o=!0}=e,a=Ve(n,i,s);return o&&et(a,r*1.7,.05,{axis:"z",color:N.panelFace,kind:"steelPainted",castShadow:!1}),ot(a,{geometry:mo(r,10,8),material:dt(is(fy[t],2.4)),position:[0,0,.03],castShadow:!1})}function Ly(n,e){const{height:t,width:i=.42,position:s,rotation:r,color:o=N.steel}=e,a=Math.max(2,Math.round(t/.3)),l=Ve(n,s,r);for(const c of[-1,1])zt(l,[c*i/2,0,0],[c*i/2,t,0],{thickness:.045,color:o,kind:"steel"});for(let c=0;c<a;c+=1)et(l,.018,i,{axis:"x",position:[0,t*(c+1)/(a+1),0],color:o,kind:"steel",castShadow:!1});return l}function Iy(n,e={}){const{size:t=[1.1,.14,1],position:i,rotation:s}=e,[r,o,a]=t,l=5,c=Ve(n,i,s);for(const u of[-1,0,1])pe(c,[r,o*.55,.09],{radius:0,position:[0,o*.27,u*a/2.5],color:"#b9986a",kind:"wood"});for(let u=0;u<l;u+=1)pe(c,[r,o*.28,a/(l*1.5)],{radius:0,position:[0,o*.82,-a/2+a*(u+.5)/l],color:"#c8a878",kind:"wood"});return c}function Xu(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const xr=new Map;function Yu(n,e,t,i,s){const r=`${e}:${n}:${t}:${i}`;if(xr.has(r))return xr.get(r)??null;let o=null;try{const a=document.createElement("canvas");a.width=n,a.height=n;const l=a.getContext("2d");if(!l)throw new Error("no 2d context");s(l,n),o=new Wp(a),o.colorSpace=un,o.wrapS=co,o.wrapT=co,o.repeat.set(t,i),o.anisotropy=4}catch{o=null}return xr.set(r,o),o}function om(n,e,t,i,s,r){for(let o=0;o<i;o+=1){const a=Math.round(128+(t()-.5)*r);n.fillStyle=`rgba(${a},${a},${a},${s})`,n.fillRect(t()*e,t()*e,1+t()*1.6,1+t()*1.6)}}function hr(n,e,t,i,s,r,o){for(let a=0;a<i;a+=1){const l=t()*e,c=t()*e,u=e*.02+t()*r,d=n.createRadialGradient(l,c,0,l,c,u);d.addColorStop(0,s),d.addColorStop(1,"rgba(0,0,0,0)"),n.globalAlpha=o*(.4+t()*.6),n.fillStyle=d,n.beginPath(),n.arc(l,c,u,0,Math.PI*2),n.fill()}n.globalAlpha=1}function Kl(n=10,e=7){return Yu(512,"concrete",n,e,(t,i)=>{const s=Xu(20261016);t.fillStyle="#a9b0b4",t.fillRect(0,0,i,i);for(let r=0;r<26;r+=1){const o=132+Math.round(s()*62);t.globalAlpha=.22,t.fillStyle=`rgb(${o},${o+3},${o+5})`;const a=i*(.15+s()*.5),l=i*(.15+s()*.5);t.fillRect(s()*i,s()*i,a,l)}t.globalAlpha=1,om(t,i,s,9e3,.22,120),hr(t,i,s,10,"rgba(96,104,108,1)",i*.08,.34),hr(t,i,s,5,"rgba(70,76,80,1)",i*.05,.26),hr(t,i,s,6,"rgba(58,64,68,1)",i*.5,.2),hr(t,i,s,4,"rgba(206,211,214,1)",i*.45,.16),t.strokeStyle="rgba(88,96,100,0.7)",t.lineWidth=2,t.beginPath(),t.moveTo(i*.5,0),t.lineTo(i*.5,i),t.moveTo(0,i*.5),t.lineTo(i,i*.5),t.stroke()})}function Dy(n=12,e=2){return Yu(512,"epoxy",n,e,(t,i)=>{const s=Xu(991117);t.fillStyle="#9aa6ad",t.fillRect(0,0,i,i),hr(t,i,s,14,"rgba(120,134,142,1)",i*.09,.3),om(t,i,s,4200,.1,60),t.globalAlpha=.12;for(let r=0;r<900;r+=1)t.fillStyle="#ffffff",t.fillRect(s()*i,s()*i,2,2);t.globalAlpha=1})}function $h(n=20,e=2){return Yu(512,"corrugated",n,e,(t,i)=>{const s=Xu(4242);t.fillStyle="#c9d1d6",t.fillRect(0,0,i,i);const r=i/16;for(let o=0;o<16;o+=1){const a=o*r,l=t.createLinearGradient(a,0,a+r,0);l.addColorStop(0,"rgba(255,255,255,0.55)"),l.addColorStop(.45,"rgba(255,255,255,0.06)"),l.addColorStop(.55,"rgba(120,130,136,0.22)"),l.addColorStop(1,"rgba(150,160,166,0.12)"),t.fillStyle=l,t.fillRect(a,0,r,i)}for(let o=0;o<2;o+=1)for(let a=0;a<16;a+=1){const l=a*r+r/2,c=i*(o===0?.12:.88);t.beginPath(),t.fillStyle="rgba(120,130,136,0.85)",t.arc(l,c,3,0,Math.PI*2),t.fill(),t.beginPath(),t.fillStyle="rgba(240,246,250,0.7)",t.arc(l-.8,c-.8,1.4,0,Math.PI*2),t.fill()}hr(t,i,s,6,"rgba(120,96,74,1)",i*.03,.12)})}function qh(n,e={}){const{color:t="#3d474d",background:i="transparent",fontScale:s=.42,ratio:r=4}=e,o=128,a=Math.round(o*r),l=`text:${n}:${t}:${i}:${s}:${r}`;if(xr.has(l))return xr.get(l)??null;let c=null;try{const u=document.createElement("canvas");u.width=a,u.height=o;const d=u.getContext("2d");if(!d)throw new Error("no 2d context");i!=="transparent"&&(d.fillStyle=i,d.fillRect(0,0,a,o)),d.fillStyle=t,d.textAlign="center",d.textBaseline="middle";const h=Math.round(o*s);d.font=`600 ${h}px "Microsoft YaHei","PingFang SC",system-ui,sans-serif`,d.fillText(n,a/2,o/2+2),c=new Wp(u),c.colorSpace=un,c.anisotropy=4}catch{c=null}return xr.set(l,c),c}const Oy=[{key:"staging",x:le.staging.x,z:le.staging.z,w:le.staging.w,d:le.staging.d,label:"原料缓存区"},{key:"cardboard",x:le.storageCardboard.x,z:le.storageCardboard.z,w:le.storageCardboard.w,d:le.storageCardboard.d,label:"纸板存储区"},{key:"misc",x:le.storageMisc.x,z:le.storageMisc.z,w:le.storageMisc.w,d:le.storageMisc.d,label:"杂项存储区"},{key:"outbound",x:le.outboundStage.x,z:le.outboundStage.z,w:le.outboundStage.w,d:le.outboundStage.d,label:"成品缓存区"}],jh=[{key:"in1",x:Ot.IN_1.x,z:Ot.IN_1.z,label:"进货月台 01"},{key:"in2",x:Ot.IN_2.x,z:Ot.IN_2.z,label:"进货月台 02"},{key:"out",x:Ot.OUT.x,z:Ot.OUT.z,label:"出货月台 03"}];function Ny(n){const e=$e.maxX-$e.minX,t=$e.maxZ-$e.minZ,i=($e.minX+$e.maxX)/2,s=($e.minZ+$e.maxZ)/2,r=$e.roofY,o=[],a=Ve(n),c=Math.max(2,Math.round(e/6.5)),u=[...Array.from({length:c+1},(w,U)=>[$e.minX+e*U/c,0,$e.minZ]),...Array.from({length:c+1},(w,U)=>[$e.minX+e*U/c,0,$e.maxZ])],h=Math.round(e/2.5),f=[...Array.from({length:h+1},(w,U)=>[$e.minX+e*U/h,0,$e.minZ]),...Array.from({length:h+1},(w,U)=>[$e.minX+e*U/h,0,$e.maxZ])],_=Kl(Math.round(e/4),Math.round(t/4)),v=Dy(Math.round(e/3),1),m=Kl(Math.round(e/5),1),p=$h(Math.round(e/2.6),Math.max(1,Math.round(r/4))),T=$h(Math.round(t/2.6),Math.max(1,Math.round(r/4))),M=Kl(Math.round((e+2.4)/4),Math.round((t+2.4)/4)),x=w=>qh(w,{color:"#5d666b",fontScale:.5,ratio:Math.max(3,w.length*.62)}),D=qh("RELOOP MRF",{color:"#f5c62d",fontScale:.62,ratio:8});pe(a,[e+2.4,.7,t+2.4],{radius:0,position:[i,-.55,s],color:N.plinthSide,kind:"concrete",map:M,castShadow:!1}),pe(a,[e+1.4,.06,t+1.4],{radius:.08,position:[i,-.18,s],color:N.plinthTop,kind:"concrete",castShadow:!1}),pe(a,[e+2.4,.62,19.4],{radius:0,position:[i,-.37,$e.minZ-9],color:N.yard,kind:"concrete",map:M,castShadow:!1,receiveShadow:!0});for(const w of[Ot.IN_1.x,Ot.IN_2.x,Ot.OUT.x])for(let U=0;U<7;U+=1)pe(a,[.16,.02,1.1],{radius:0,position:[w,-.05,$e.minZ-1.6-U*2.3],color:N.aisleLine,kind:"floorPaint",castShadow:!1});pe(a,[e,.24,t],{radius:0,position:[i,-.12,s],color:N.hallFloor,kind:"concrete",map:_,receiveShadow:!0,castShadow:!1}),pe(a,[e-.6,.02,Ft.halfWidth*2],{radius:0,position:[i,.012,Ft.z],color:N.aisle,kind:"floorPaint",map:v,receiveShadow:!0,castShadow:!1});for(const w of[-1,1])pe(a,[e-.6,.012,.1],{radius:0,position:[i,.026,Ft.z+w*(Ft.halfWidth-.07)],color:N.aisleLine,kind:"floorPaint",receiveShadow:!0,castShadow:!1});pe(a,[e-1.2,.02,3.4],{radius:0,position:[i,.011,$e.minZ+1.7],color:N.apron,kind:"concrete",map:m,receiveShadow:!0,castShadow:!1});for(const w of jh)for(let U=0;U<5;U+=1)pe(a,[.42,.012,1.5],{radius:0,position:[w.x-1.2+U*.62,.028,$e.minZ+1.5],rotation:[0,.42,0],color:N.stripeWhite,kind:"floorPaint",receiveShadow:!0,castShadow:!1});for(const w of Oy){const U=Ve(a,[w.x,0,w.z]);pe(U,[w.w,.016,w.d],{radius:0,position:[0,.014,0],color:N.zonePlate,kind:"concrete",receiveShadow:!0,castShadow:!1});const V=[{size:[w.w,.01,.07],pos:[0,.026,w.d/2-.035]},{size:[w.w,.01,.07],pos:[0,.026,-w.d/2+.035]},{size:[.07,.01,w.d],pos:[w.w/2-.035,.026,0]},{size:[.07,.01,w.d],pos:[-w.w/2+.035,.026,0]}];for(const K of V)pe(U,K.size,{radius:0,position:K.pos,color:N.aisleLine,kind:"floorPaint",receiveShadow:!0,castShadow:!1});const te=x(w.label);ot(U,{geometry:Kh(w.w*.62,w.w*.19),material:dt({...te?{map:te}:{},transparent:!0,opacity:.72,roughness:.9,depthWrite:!1}),position:[0,.024,-w.d/2+.75],rotation:[-Math.PI/2,0,0],receiveShadow:!1,castShadow:!1}),o.push({position:[w.x,.24,w.z+w.d/2-.2],text:w.label,distanceFactor:22,className:"zone-label"})}for(const w of u){const U=Ve(a,[w[0],0,w[2]]);et(U,.16,r,{position:[0,r/2,0],color:N.column,kind:"steelPainted"}),pe(U,[.5,.16,.5],{radius:.03,position:[0,.08,0],color:N.steelDark,kind:"steelPainted"}),pe(U,[.44,.22,.44],{radius:.03,position:[0,r-.5,0],color:N.steelDark,kind:"steelPainted",castShadow:!1}),Cr(U,{count:4,spacing:.16,position:[0,r-.3,.23],radius:.028})}const R=[],C=(w,U,V,te)=>{const K=new Ra({color:V,roughness:.5,metalness:.2,envMapIntensity:.9,transparent:!0,opacity:.96,side:gi,...te?{map:te}:{}});ot(a,{geometry:new ai(w[0],w[1],w[2]),material:K,position:U}),R.push(K)};C([e,r,.24],[i,r/2,$e.minZ],N.wallPanel,p),C([e,r,.24],[i,r/2,$e.maxZ],N.wallPanel,p),C([.24,r,t],[$e.minX,r/2,s],N.wallPanelDark,T),C([.24,r,t],[$e.maxX,r/2,s],N.wallPanelDark,T);const L=Ve(a);for(const w of[.34,.62,.86])pe(L,[e,.07,.3],{radius:0,position:[i,r*w,$e.minZ],color:N.wallPanelDark,kind:"steelPainted",castShadow:!1}),pe(L,[e,.07,.3],{radius:0,position:[i,r*w,$e.maxZ],color:N.wallPanelDark,kind:"steelPainted",castShadow:!1});for(const w of f)et(L,.045,r,{position:[w[0],r/2,w[2]+(w[2]<0?.14:-.14)],color:N.wallRib,kind:"steelPainted",castShadow:!1});for(let w=0;w<5;w+=1){const U=Ve(L,[i,$e.roofY-.98,$e.minZ+t*(w+.5)/5]);Py(U,{span:e,height:.9,bays:6,thickness:.09,color:N.structure})}for(let w=0;w<6;w+=1){const U=$e.minX+e*w/5;zt(L,[U,$e.roofY-.05,$e.minZ],[U,$e.roofY-.05,$e.maxZ],{thickness:.1,color:N.structure,castShadow:!1})}for(const w of[-1,1])pe(L,[4.2,.06,t-1.2],{radius:.02,position:[i+w*8,$e.roofY+.03,s],color:N.roofLight,kind:"plastic",opacity:.62,castShadow:!1});pe(L,[e+.5,.2,t+.5],{radius:0,position:[i,$e.roofY+.14,s],color:N.roofDeck,kind:"steelPainted",castShadow:!1});for(let w=0;w<13;w+=1)pe(L,[.1,.06,t+.4],{radius:0,position:[$e.minX+e*w/12,$e.roofY+.26,s],color:N.roofSeam,kind:"steelPainted",castShadow:!1});const y=Ve(L,[2,4.9,$e.maxZ+.16]);pe(y,[9.6,1.6,.1],{radius:.04,color:N.panelFace,kind:"plastic",castShadow:!1}),ot(y,{geometry:Kh(8.6,1.05),material:dt({...D?{map:D}:{},transparent:!0,roughness:.6,toneMapped:!1}),position:[0,0,.07]});for(const w of[-11,0,11]){const U=new Kp(N.lampWarm,7,16,2);U.position.set(w,$e.roofY-1.7,s),a.add(U)}for(const w of jh){const U=Ve(a,[w.x,0,$e.minZ]);for(const K of[-1,1])pe(U,[.16,4.1,.3],{radius:0,position:[K*1.78,2.05,-.02],color:N.doorFrame,kind:"steelPainted"});pe(U,[3.72,.18,.3],{radius:0,position:[0,4.18,-.02],color:N.doorFrame,kind:"steelPainted"});const V=Ve(L,[w.x,0,$e.minZ-.04]);for(let K=0;K<12;K+=1)pe(V,[3.5,.29,.1],{radius:0,position:[0,.2+K*.325,0],color:K%2===0?N.doorRoll:N.wallPanelDark,kind:"steelPainted",castShadow:!1,receiveShadow:!1});pe(U,[4.6,.16,2.4],{radius:.04,position:[0,4.75,-1.3],color:N.canopy,kind:"steelPainted"});for(const K of[-1,1])zt(U,[K*1.9,4.6,-.1],[K*1.9,2.4,-2.2],{thickness:.12,color:N.doorFrame,kind:"steelPainted"});ot(U,{geometry:new ai(2.6,.07,.16),material:dt(is(N.lampWarm,2.2)),position:[0,4.5,-.4],rotation:[Math.PI/2.6,0,0],castShadow:!1});for(const K of[-1,1]){const k=Ve(U,[K*2.3,0,-.6]);et(k,.13,.9,{position:[0,.45,0],color:N.bollard,kind:"steelPainted"}),et(k,.1,.5,{position:[0,.5,0],color:N.stripeWhite,kind:"steelPainted",castShadow:!1})}const te=Ve(a,[w.x,5,$e.minZ-.16]);pe(te,[1.9,.5,.08],{radius:.03,color:"#1f2a30",kind:"plastic",castShadow:!1}),pe(te,[1.78,.4,.03],{radius:0,position:[0,0,.05],color:N.safetyYellow,kind:"floorPaint",castShadow:!1}),o.push({position:[w.x,5,$e.minZ+.12],text:w.label,distanceFactor:26,className:"zone-label dock-label"})}Yl(a,[$e.minX+2,0,Ft.z+Ft.halfWidth+.7],[-9,0,Ft.z+Ft.halfWidth+.7],{height:1.05,posts:4}),Yl(a,[3,0,Ft.z+Ft.halfWidth+.7],[9.4,0,Ft.z+Ft.halfWidth+.7],{height:1.05,posts:3}),Yl(a,[le.outboundStage.x-le.outboundStage.w/2-.6,0,le.outboundStage.z-le.outboundStage.d/2-.4],[le.outboundStage.x+le.outboundStage.w/2+.6,0,le.outboundStage.z-le.outboundStage.d/2-.4],{height:1.05,posts:4}),nu(a,{width:2.2,height:1,slats:6,position:[$e.minX+.16,4.4,s-4],rotation:[0,Math.PI/2,0]}),nu(a,{width:2.2,height:1,slats:6,position:[$e.maxX-.16,4.4,s+3],rotation:[0,-Math.PI/2,0]});let E=null;return{roofDetails:L,wallMaterials:R,labels:o,setXray(w){if(w!==E){E=w,L.visible=!w;for(const U of R)U.opacity=w?.14:.96}},dispose(){a.traverse(w=>{var te;const U=w;(te=U.geometry)==null||te.dispose();const V=U.material;Array.isArray(V)?V.forEach(K=>K.dispose()):V==null||V.dispose()})}}}function Uy(n,e,t,i,s){const r=Math.hypot(e.x-n.x,e.z-n.z);return{position:[(n.x+e.x)/2,(t+i)/2,(n.z+e.z)/2],yaw:Math.atan2(e.x-n.x,e.z-n.z),pitch:-Math.atan2(i-t,r||1),length:Kt(n,e),width:s}}function an(n,e){var s;const t=Ve(n,e.position);vy(t,e.device),(s=e.build)==null||s.call(e,t);const i=ot(t,{geometry:fn(e.size[0],e.size[1],e.size[2]),material:new Va({color:"#f1b85c",wireframe:!0,transparent:!0,opacity:.55}),position:[0,e.size[1]/2,0],castShadow:!1});return i.visible=!1,i.renderOrder=2,{node:t,setSelected(r){i.visible=r}}}const Fy=["SILO_PET","SILO_HDPE","SILO_COTTON","SILO_POLYESTER","SILO_BLEND"];function ui(n,e,t={}){const{motor:i=!0,legs:s=!0}=t,r=Uy(e.from,e.to,e.fromY,e.toY,.62),o=Math.max(2,Math.round(r.length/1.3)),a=Math.max(2,Math.round(r.length/2.6)),l=Ve(n,r.position,[0,r.yaw,0]),c=Ve(l,void 0,[r.pitch,0,0]);pe(c,[.62,.1,r.length],{radius:.02,color:N.rubberBelt,kind:"rubber"});for(const u of[-1,1])pe(c,[.07,.24,r.length],{radius:.02,position:[u*.62/2-u*.02,.13,0],color:N.steelBlue,kind:"steelPainted"});for(const u of[-1,1])et(c,.045,r.length,{axis:"z",position:[u*(.62+.14)/2,-.1,0],color:N.steelDark,kind:"steel",castShadow:!1});for(let u=0;u<o;u+=1){const d=-r.length/2+r.length*(u+.5)/o;et(c,.055,.62+.1,{axis:"x",position:[0,-.1,d],color:N.alu,kind:"aluminium",castShadow:!1})}for(const u of[-1,1])et(c,.13,.62+.16,{axis:"x",position:[0,-.02,u*r.length/2],color:N.alu,kind:"aluminium",castShadow:!1});if(s)for(let u=0;u<a;u+=1){const d=-r.length/2+r.length*(u+.5)/a,h=r.position[1]-Math.sin(r.pitch)*d,f=Math.max(.3,h-.14),_=Ve(c,[0,-.14,d]);for(const v of[-1,1])et(_,.055,f,{position:[v*(.62+.12)/2,-f/2,0],color:N.steelDark,kind:"steel",castShadow:!1});zt(_,[-.37,-f*.55,0],[(.62+.12)/2,-f*.55,0],{thickness:.045,color:N.steelDark,castShadow:!1}),pe(_,[.62+.3,.05,.16],{radius:0,position:[0,-f+.02,0],color:N.steelDark,kind:"steel",castShadow:!1})}i&&Wu(c,{radius:.15,length:.4,axis:"x",position:[(.62+.42)/2,-.02,r.length/2-.5],color:N.machineBodyDark}),pe(c,[.62-.1,.5,.03],{radius:.02,position:[0,-.22,r.length/2+.16],rotation:[.6,0,0],color:N.steelBlue,kind:"steelPainted",castShadow:!1})}function By(n){const{id:e,shell:t}=n,i=Rn[e].material,s=It[i].color,r=.62,o=2.1,a=t.node;Cy(a,{width:1.1,depth:1.1,height:.42,color:N.steelDark,thickness:.075,brace:!0}),et(a,.68,.06,{axis:"y",position:[0,.42,0],color:N.steelDark,kind:"steel",castShadow:!1}),ot(a,{geometry:Ls(r,.26,.42,20,!0),material:dt(ei("steelPainted",N.steelBlue)),position:[0,.66,0]}),ot(a,{geometry:Ls(r,r,o,22,!0),material:dt(ei("glass","#7d98a6",{opacity:.3,side:2})),position:[0,.87+o/2,0]});for(const u of[.25,.62,.95])ot(a,{geometry:new Xa(r+.02,.035,6,24),material:dt(ei("steel",N.steel)),position:[0,.87+o*u,0],castShadow:!1});const l=ot(a,{geometry:Ls(r-.07,r-.07,o-.18,20),material:dt(ei("plastic",s)),position:[0,.9,0]});l.scale.y=.001;const c=ot(a,{geometry:fn(.06,o-.24,.11),material:dt(ei("lamp",s,{emissive:s,emissiveIntensity:1.9})),position:[r+.05,.12,0]});return c.scale.y=.001,pe(a,[.1,o-.18,.16],{radius:0,position:[r+.05,.87+o/2-.06,0],color:N.panelFace,kind:"plastic",castShadow:!1}),pe(a,[.98,.08,.98],{radius:.03,position:[0,.87+o,0],color:N.steelBlue,kind:"steelPainted",castShadow:!1}),pe(a,[.5,.36,.5],{radius:.04,position:[.24,.87+o+.24,.2],color:N.machineTrim,kind:"steelPainted",castShadow:!1}),nu(a,{width:.4,height:.24,slats:4,position:[.24,.87+o+.24,.46],color:N.steelDark}),Ar(a,[-r-.5,.87+o+.5,0],[-.1,.87+o+.06,0],{radius:.13,color:N.alu,kind:"aluminium"}),Ly(a,{height:o-.2,width:.34,position:[-r-.12,.9,.18],rotation:[0,Math.PI/2,0]}),et(a,.13,.05,{axis:"z",position:[.1,1.5,r+.02],color:N.alu,kind:"aluminium",castShadow:!1}),Cr(a,{count:5,spacing:.1,position:[.1,1.5,r+.06],rotation:[0,0,Math.PI/2],radius:.02}),pe(a,[.18,.1,.18],{radius:.02,position:[.55,.16,.55],color:N.safetyYellow,kind:"steelPainted",castShadow:!1}),dr(a,{status:"RUNNING",position:[r+.05,.87+o+.1,.2]}),{fill:l,strip:c,height:o}}const ky=n=>n==="BALER_CARDBOARD"?"BALER_CARDBOARD":n==="SILO_PET"||n==="SILO_HDPE"?"BALER_PLASTIC":"BALER_TEXTILE";function zy(n,e){const{color:t}=e,i=n;pe(i,[1.7,.12,1.7],{radius:.03,position:[0,.06,-.3],color:N.steelDark,kind:"steelPainted"}),pe(i,[1.5,.9,1.5],{radius:.05,position:[0,.57,-.3],color:N.machineBodyDark,kind:"steelPainted"});for(const o of[-.55,.55])pe(i,[1.56,.1,.09],{radius:0,position:[0,.57,o-.3],color:N.machineTrim,kind:"steelPainted",castShadow:!1});Cr(i,{count:5,spacing:.22,position:[0,.16,.46],radius:.024});const s=[{pos:[0,1.12,.42],rot:[.5,0,0],size:[1.3,.5,.04]},{pos:[0,1.12,-1.02],rot:[-.5,0,0],size:[1.3,.5,.04]},{pos:[.68,1.12,-.3],rot:[0,0,-.5],size:[.04,.5,1.1]},{pos:[-.68,1.12,-.3],rot:[0,0,.5],size:[.04,.5,1.1]}];for(const o of s)pe(i,o.size,{radius:.02,position:o.pos,rotation:o.rot,color:N.steelBlue,kind:"steelPainted"});pe(i,[1.6,.12,1.6],{radius:.03,position:[0,1.05,-.3],color:t,kind:"steelPainted"});const r=Ve(i,[.62,.57,-.3]);pe(r,[.16,.62,1.1],{radius:.02,color:N.alu,kind:"aluminium"}),et(r,.07,.5,{axis:"x",position:[.32,0,0],color:N.steel,kind:"steel",castShadow:!1}),et(i,.26,.5,{axis:"y",position:[-1.05,.35,.55],color:N.machineBody,kind:"steelPainted"}),Wu(i,{radius:.13,length:.32,axis:"y",position:[-1.05,.78,.55],color:N.machineBodyDark}),et(i,.09,.05,{axis:"z",position:[-1.05,.62,.82],color:N.stripeWhite,kind:"steelPainted",castShadow:!1}),Ar(i,[-1.05,.66,.66],[-.62,.95,.2],{radius:.045,color:N.steelDark}),Ar(i,[-.8,.35,.62],[-.5,.5,.35],{radius:.035,color:N.steelDark}),ur(i,{size:[.6,1.35,.42],position:[1.16,.7,.5],rotation:[0,-.35,0]}),dr(i,{status:"IDLE",position:[1.16,1.55,.5],rotation:[0,-.35,0]}),pe(i,[.05,.8,1.2],{radius:.02,position:[.78,.6,-.3],color:N.safetyYellow,kind:"steelPainted"});for(const o of[-.28,.28])zt(i,[-.76,.22,-.3+o],[-2.2,.18,-.3+o],{thickness:.08,color:N.steel,kind:"steel",castShadow:!1});return{plunger:r}}function Hy(n){const e=n;et(e,.42,.12,{axis:"y",position:[0,.06,0],color:N.steelDark,kind:"steel"}),et(e,.3,.5,{axis:"y",position:[0,.37,0],color:N.machineBody,kind:"steelPainted"}),Cr(e,{count:6,spacing:.16,position:[0,.12,.3],radius:.026}),pe(e,[.5,.42,.36],{radius:.04,position:[0,.62,0],color:N.machineBodyDark,kind:"steelPainted"});const t=Ve(e,[0,.6,0]);et(t,.14,.34,{axis:"z",position:[0,.12,0],color:N.alu,kind:"aluminium"}),pe(t,[.24,1.7,.24],{radius:.05,position:[0,.98,0],color:N.machineTrim,kind:"steelPainted"}),zt(t,[-.2,.3,0],[.2,1.6,0],{thickness:.05,color:N.steelDark,castShadow:!1}),zt(t,[.2,.3,0],[-.2,1.6,0],{thickness:.05,color:N.steelDark,castShadow:!1});const i=Ve(t,[0,1.8,0]);et(i,.12,.3,{axis:"z",color:N.alu,kind:"aluminium"}),pe(i,[.2,.2,.8],{radius:.04,position:[.45,0,0],rotation:[0,0,Math.PI/2],color:N.machineTrim,kind:"steelPainted"}),pe(i,[.26,.24,.26],{radius:.04,position:[.86,-.04,0],color:N.machineBodyDark,kind:"steelPainted"});for(const s of[-1,1])pe(i,[.06,.34,.14],{radius:.02,position:[.98,-.26,s*.12],color:N.safetyYellow,kind:"steelPainted"});return et(i,.05,.24,{axis:"x",position:[.86,-.24,0],color:N.alu,kind:"aluminium",castShadow:!1}),Ar(i,[.3,.06,.12],[.8,-.2,.12],{radius:.035,color:"#22282c",kind:"rubber",castShadow:!1}),Ar(i,[.3,.06,-.12],[.8,-.2,-.12],{radius:.035,color:"#22282c",kind:"rubber",castShadow:!1}),ur(e,{size:[.55,1.2,.4],position:[-.95,.6,.35],screen:!1}),{boom:t,wrist:i}}function Gy(n){const e=Ve(n),t=[],i=[],s=[],r=[];let o=null,a=null,l=null;const c=(R,C)=>(t.push({device:R,shell:C}),C),u=c("VIB_FEEDER",an(e,{device:"VIB_FEEDER",size:[2.1,2.3,2],position:[le.vibFeeder.x,0,le.vibFeeder.z]}));{const R=u.node,C=[{pos:[0,.95,-.72],rot:[-.42,0,0],size:[1.5,.9,.05]},{pos:[0,.95,.72],rot:[.42,0,0],size:[1.5,.9,.05]},{pos:[.78,.95,0],rot:[0,0,.42],size:[.05,.9,1.3]},{pos:[-.78,.95,0],rot:[0,0,-.42],size:[.05,.9,1.3]}];for(const L of C)pe(R,L.size,{radius:.02,position:L.pos,rotation:L.rot,color:N.machineBody,kind:"steelPainted"});pe(R,[1.1,.1,1.1],{radius:.02,position:[0,.5,0],color:N.machineBodyDark,kind:"steelPainted"}),pe(R,[1.3,.34,1.4],{radius:.05,position:[0,.28,0],color:N.machineBodyDark,kind:"steelPainted"});for(const[L,y]of[[-.55,-.6],[.55,-.6],[-.55,.6],[.55,.6]]){const E=Ve(R,[L,0,y]);et(E,.075,.22,{axis:"y",position:[0,.11,0],color:N.alu,kind:"aluminium",castShadow:!1}),et(E,.1,.05,{axis:"y",position:[0,.05,0],color:N.steelDark,kind:"steel",castShadow:!1})}Wu(R,{radius:.12,length:.28,axis:"z",position:[.7,.3,0],color:N.machineBodyDark}),l=Ve(R,[1.05,.52,0]),pe(l,[1.5,.16,1.3],{radius:.02,color:N.steelBlue,kind:"steelPainted"});for(const L of[-1,1])pe(l,[1.5,.26,.06],{radius:.02,position:[0,.16,L*1.3/2-L*.03],color:N.machineTrim,kind:"steelPainted",castShadow:!1});ur(R,{size:[.5,1.15,.36],position:[-.95,.58,.5],screen:!1}),dr(R,{status:"IDLE",position:[-.95,1.28,.5]})}c("INCLINE",an(e,{device:"INCLINE",size:[5.2,2.4,1.2],position:[(Fe.incline.from.x+Fe.incline.to.x)/2,0,Fe.incline.from.z]})),ui(t[t.length-1].shell.node,Fe.incline,{legs:!0});for(const R of["SORTER_1","SORTER_2"]){const C=R==="SORTER_1"?Fe.sorter1:Fe.sorter2,L=R==="SORTER_1"?"PET":"HDPE",y=(C.from.x+C.to.x)/2,w=c(R,an(e,{device:R,size:[2.4,2.8,1.8],position:[y,0,C.from.z]})).node,U=Ve(w,[-y,0,-C.from.z]);ui(U,C),et(w,.09,.9,{axis:"y",position:[-.5,C.fromY+.75,0],color:N.steelDark,kind:"steel",castShadow:!1}),pe(w,[1.5,.44,.9],{radius:.05,position:[0,C.fromY+1.2,0],color:N.panelFace,kind:"steelPainted"}),pe(w,[1.1,.3,.03],{radius:.02,position:[0,C.fromY+1.2,.47],color:N.glass,kind:"glass",opacity:.5,castShadow:!1}),Cr(w,{count:4,spacing:.32,position:[0,C.fromY+1.42,.3],radius:.02});const V=pe(w,[1.4,.1,.14],{radius:.02,position:[0,C.fromY+.82,0],color:N.steelBlue,kind:"steelPainted",castShadow:!1}),te=Ve(w);for(let K=0;K<7;K+=1)et(te,.022,.1,{axis:"y",position:[-.54+K*.18,C.fromY+.74,0],color:N.alu,kind:"aluminium",castShadow:!1});r.push({device:R,valve:V,nozzles:te}),pe(w,[1.5,.12,.86],{radius:.04,position:[0,C.fromY+1.48,0],color:It[L].color,kind:"steelPainted",castShadow:!1}),pe(w,[.5,.4,.06],{radius:.02,position:[.72,C.fromY+.2,0],rotation:[0,0,-.5],color:N.machineTrim,kind:"steelPainted",castShadow:!1}),ur(w,{size:[.5,1.25,.38],position:[-1.05,.62,.62]}),dr(w,{status:"RUNNING",position:[-1.05,1.4,.62]})}const d=c("CONVEYOR",an(e,{device:"CONVEYOR",size:[10.6,2.2,3.4],position:[-4.4,0,-.9]}));{const R=Ve(d.node,[4.4,0,.9]);ui(R,Fe.pass1,{legs:!0}),ui(R,Fe.pass2,{legs:!0}),ui(R,Fe.lanePet,{motor:!1,legs:!0}),ui(R,Fe.laneHdpe,{motor:!1,legs:!0}),ui(R,Fe.laneTail,{motor:!1,legs:!0})}for(const R of Fy){const C=Kn[R],L=c(R,an(e,{device:R,size:[1.7,2.1+1.3,1.7],position:[C.x,0,C.z]})),y=By({id:R,shell:L});i.push({id:R,fill:y.fill,strip:y.strip,height:y.height})}const h=[{device:"BALER_PLASTIC",color:N.machineTrim,position:le.balerPlastic},{device:"BALER_TEXTILE",color:N.safetyOrange,position:le.balerTextile},{device:"BALER_CARDBOARD",color:N.safetyOrange,position:le.balerCardboard}];for(const R of h){const C=c(R.device,an(e,{device:R.device,size:[2,1.4,2],position:[R.position.x,0,R.position.z]})),L=zy(C.node,{device:R.device,color:R.color});s.push({device:R.device,node:L.plunger})}const f=c("SPREADER",an(e,{device:"SPREADER",size:[5.2,1.8,1.6],position:[le.spreader.x,0,le.spreader.z]}));{const R=f.node,C=Ve(R,[15,0,-8.4]);ui(C,Rt.spreader,{legs:!0}),et(R,.16,1.5,{axis:"x",position:[0,1.02,.4],color:N.alu,kind:"aluminium"}),et(R,.1,1.4,{axis:"x",position:[0,1.16,-.35],color:N.steelBlue,kind:"steelPainted"})}const _=c("HYPERSPEC",an(e,{device:"HYPERSPEC",size:[4,2.4,1.8],position:[le.hyperspec.x,0,le.hyperspec.z]}));{const R=_.node,C=Ve(R,[10.9,0,-8.4]);ui(C,Rt.hyperspec,{legs:!0});for(const L of[-1,1])et(R,.075,1.9,{axis:"y",position:[L*.85,1.1,0],color:N.steelDark,kind:"steel"});pe(R,[2.2,.34,1.1],{radius:.04,position:[0,2.02,0],color:N.panelFace,kind:"steelPainted"}),pe(R,[1.9,.1,.9],{radius:.02,position:[0,1.82,0],color:N.steelBlue,kind:"steelPainted",castShadow:!1});for(const L of[-.7,.7])ot(R,{geometry:fn(.5,.06,.7),material:dt(ei("lamp",N.lampCool,{emissive:N.lampCool,emissiveIntensity:1.7})),position:[L,1.74,0],castShadow:!1});ur(R,{size:[.55,1.3,.4],position:[1.5,.65,.7]}),dr(R,{status:"RUNNING",position:[1.5,1.45,.7]})}const v=(Rt.pickBelt.from.x+Rt.pickBelt.to.x)/2,m=c("ROBOT_ARM",an(e,{device:"ROBOT_ARM",size:[5.2,2.8,1.4],position:[v,0,Rt.pickBelt.from.z]}));ui(Ve(m.node,[6.9,0,-8.4]),Rt.pickBelt,{legs:!0});const p=c("ROBOT_ARM",an(e,{device:"ROBOT_ARM",size:[1.6,2.6,1.6],position:[le.arm.x,0,le.arm.z]}));{const R=Hy(p.node);o=R.boom,a=R.wrist}const T=c("STORAGE_CARDBOARD",an(e,{device:"STORAGE_CARDBOARD",size:[3.4,2,3],position:[le.storageCardboard.x,0,le.storageCardboard.z]}));for(const[R,C]of[[0,[0,0,0]],[1,[.1,0,.12]]].map(([L,y])=>[L,y])){const L=Ve(T.node,[C[0],R*.78,C[2]]);R===0&&Iy(L,{size:[1.5,.14,1.4],position:[0,.07,0]}),pe(L,[1.35,.62,1.2],{radius:.05,position:[0,.44,0],color:"#b98a52",kind:"cardboard"}),zt(L,[-.7,.44,0],[.7,.44,0],{thickness:.02,color:"#8a6a3a",castShadow:!1})}const M=c("STORAGE_MISC",an(e,{device:"STORAGE_MISC",size:[3.4,2,3],position:[le.storageMisc.x,0,le.storageMisc.z]}));{const R=[{pos:[-.62,.3,-.5],size:[.9,.6,.8],color:N.steelBlue},{pos:[.45,.28,-.62],size:[.8,.56,.9],color:N.machineBody},{pos:[-.3,.25,.55],size:[1,.5,.7],color:N.steelDark},{pos:[.5,.24,.5],size:[.7,.48,.7],color:N.machineBodyDark}];for(const C of R){const L=Ve(M.node,C.pos);pe(L,C.size,{radius:.03,color:C.color,kind:"steelPainted"}),pe(L,[C.size[0]*1.02,.05,C.size[2]*1.02],{radius:.01,position:[0,C.size[1]/2-.02,0],color:N.machineTrim,kind:"steelPainted",castShadow:!1})}}const x=c("SCALE",an(e,{device:"SCALE",size:[4.4,.7,3.6],position:[lo.x,0,lo.z]}));{const R=x.node;pe(R,[3.6,.2,2.6],{radius:.02,position:[0,.1,0],color:N.steel,kind:"steel"}),pe(R,[3.6,.03,2.4],{radius:0,position:[0,.22,0],color:N.panelFace,kind:"steelPainted",castShadow:!1});for(const C of[-1,1])pe(R,[.5,.06,2.4],{radius:0,position:[C*1.9,.06,0],rotation:[0,0,C*-.25],color:N.steelDark,kind:"steelPainted",castShadow:!1});for(const C of[-1,1])et(R,.05,2.6,{axis:"z",position:[C*1.7,.26,0],color:N.safetyYellow,kind:"steelPainted",castShadow:!1});ur(R,{size:[.5,1.1,.4],position:[2.4,.55,1.3],rotation:[0,-.6,0]}),dr(R,{status:"IDLE",position:[2.4,1.28,1.3],rotation:[0,-.6,0]})}let D="xray";return{update({state:R,timeInShift:C}){for(const L of i){const y=R.silos[L.id],E=Math.max(.001,y.capacity?y.units/y.capacity:0);L.fill.scale.y+=(E-L.fill.scale.y)*.25,L.strip.scale.y+=(E-L.strip.scale.y)*.25,L.strip.position.y=.12+(L.height-.24)*L.strip.scale.y/2}for(const L of s){const E=R.bales.some(w=>w.status==="PRESSING"&&ky(w.source)===L.device)?.2:.6;L.node.position.x+=(E-L.node.position.x)*.12}if(o){const L=R.arm.phase==="SWING_TO_SILO"||R.arm.phase==="RELEASE"?-.9:.55;o.rotation.y+=(L-o.rotation.y)*.14}if(a){const L=R.arm.phase==="GRAB"?.5:.75;a.rotation.z+=(L-a.rotation.z)*.18}if(l){const L=D==="xray"?.012:.014;l.position.y=Math.sin(C*22)*L+.52}for(const L of r){const y=R.puffs.some(E=>E.device===L.device);Vy(L,y)}},setSelected(R){for(const C of t)C.shell.setSelected(C.device===R)},setViewMode(R){D=R},dispose(){e.traverse(R=>{var y;const C=R;(y=C.geometry)==null||y.dispose();const L=C.material;Array.isArray(L)?L.forEach(E=>E.dispose()):L==null||L.dispose()})}}}function Vy(n,e){n.valve.material.color.set(e?N.safetyYellow:N.steelBlue);for(const t of n.nozzles.children)t.material.color.set(e?N.lampWarm:N.alu)}const iu={x:0,y:-10,z:0,rotY:0,visible:!1},$a=.16,Wy={COTTON:{...le.siloCotton,y:2.4},POLYESTER:{...le.siloPolyester,y:2.4},BLEND:{...le.siloBlend,y:2.4}};function Yn(n,e,t,i,s,r=0){const o=Kt(n,e)||1,a=Math.min(1,Math.max(0,s/o)),l=(r%3-1)*.17,c=-(e.z-n.z)/o,u=(e.x-n.x)/o;return{x:n.x+(e.x-n.x)*a+c*l,y:t+(i-t)*a+$a+r%3*.05,z:n.z+(e.z-n.z)*a+u*l,rotY:Math.atan2(e.x-n.x,e.z-n.z),visible:!0}}function Xy(n){const e=n%3,t=Math.floor(n/3)%3;return{x:le.staging.x-2.1+e*2.1,y:.24+$a+Math.floor(n/9)*.28,z:le.staging.z-1+t*1,rotY:0,visible:!0}}function Zh(n,e){const t=e%2;return{x:n.x-.8+t*1.6,y:.24+$a+Math.floor(e/2)*.26,z:n.z+.2,rotY:0,visible:!0}}function Yy(n,e,t){switch(n.stage){case"HOPPER":return{x:le.vibFeeder.x+.2,y:1.36+t*.14,z:le.vibFeeder.z,rotY:0,visible:!0};case"SPREAD_BUFFER":return{x:le.spreader.x-.2,y:1.02+t*.12,z:le.spreader.z,rotY:0,visible:!0};case"INCLINE":return Yn(Fe.incline.from,Fe.incline.to,Fe.incline.fromY,Fe.incline.toY,n.s,t);case"SORTER_1":return Yn(Fe.sorter1.from,Fe.sorter1.to,Fe.sorter1.fromY,Fe.sorter1.toY,n.s,t);case"PASS_1":return Yn(Fe.pass1.from,Fe.pass1.to,Fe.pass1.fromY,Fe.pass1.toY,n.s,t);case"SORTER_2":return Yn(Fe.sorter2.from,Fe.sorter2.to,Fe.sorter2.fromY,Fe.sorter2.toY,n.s,t);case"PASS_2":return Yn(Fe.pass2.from,Fe.pass2.to,Fe.pass2.fromY,Fe.pass2.toY,n.s,t);case"LANE_PET":return Yn(Fe.lanePet.from,Fe.lanePet.to,Fe.lanePet.fromY,Fe.lanePet.toY,n.s,t);case"LANE_HDPE":return Yn(Fe.laneHdpe.from,Fe.laneHdpe.to,Fe.laneHdpe.fromY,Fe.laneHdpe.toY,n.s,t);case"LANE_TAIL":return Yn(Fe.laneTail.from,Fe.laneTail.to,Fe.laneTail.fromY,Fe.laneTail.toY,n.s,t);case"SPREADER":return Yn(Rt.spreader.from,Rt.spreader.to,Rt.spreader.fromY,Rt.spreader.toY,n.s,t);case"HYPERSPEC":return Yn(Rt.hyperspec.from,Rt.hyperspec.to,Rt.hyperspec.fromY,Rt.hyperspec.toY,n.s,t);case"LANE_COTTON":case"LANE_POLYESTER":case"LANE_BLEND":return Yn(Rt.pickBelt.from,Rt.pickBelt.to,Rt.pickBelt.fromY,Rt.pickBelt.toY,n.s,t);case"ARM_PICK":return{x:le.arm.x-.1-t*.34,y:1.08+$a,z:le.arm.z+.3+t*.22,rotY:0,visible:!0};case"ARM_CARRY":{const i=n.decided?Wy[n.decided]:null,s={x:le.arm.x-.2,y:1.7,z:le.arm.z+.4};if(!i)return{...s,rotY:0,visible:!0};const r=e.arm;if(r.phase==="SWING_TO_PICK"||r.phase==="GRAB")return{...s,rotY:0,visible:!0};const a=Math.max(.1,Ky[r.phase]??.4),l=Math.min(1,r.phaseElapsed/a);return{x:s.x+(i.x-s.x)*l,y:s.y+(i.y-s.y)*l,z:s.z+(i.z-s.z)*l,rotY:0,visible:!0}}case"STAGING":return Xy(t);case"STORED_CARDBOARD":return Zh(le.storageCardboard,t);case"STORED_MISC":return Zh(le.storageMisc,t);default:return iu}}const Ky={SWING_TO_SILO:.34,RELEASE:.22,GRAB:.16};function $y(n,e){const t=n.source,i=t==="SILO_PET"||t==="SILO_HDPE"?{x:le.balerPlastic.x,y:.55,z:le.balerPlastic.z-.55}:t==="BALER_CARDBOARD"?{x:le.balerCardboard.x,y:.5,z:le.balerCardboard.z-.7}:{x:le.balerTextile.x,y:.5,z:le.balerTextile.z-.7};switch(n.status){case"PRESSING":return{x:i.x,y:i.y,z:i.z,rotY:0,visible:!0};case"READY":return{x:i.x+.9+e*.3,y:i.y,z:i.z,rotY:0,visible:!0};case"CARRIED":return iu;case"AT_DOCK":return{x:le.outboundStage.x-1.2+e*.7,y:.5,z:le.outboundStage.z,rotY:0,visible:!0};case"LOADED":return{x:le.outboundStage.x-1.2+e*.7,y:1.5,z:le.outboundStage.z,rotY:0,visible:!0};default:return iu}}const am={TRUCK_A:"TRUCK_A",TRUCK_B:"TRUCK_B",TRUCK_C:"TRUCK_C"},lm={FL1:"FORKLIFT_1",FL2:"FORKLIFT_2"},qy=[[-1.15,.52,2.6],[1.15,.52,2.6],[-1.15,.52,-.6],[1.15,.52,-.6],[-1.15,.52,-2.6],[1.15,.52,-2.6]];function Kr(n,e){const{position:t,radius:i=.52,width:s=.36,bolts:r=6}=e,o=Ve(n,t);et(o,i,s,{axis:"x",color:"#1b2126",kind:"rubber",segments:18}),et(o,i*.62,s+.03,{axis:"x",color:N.alu,kind:"aluminium",segments:16,castShadow:!1}),et(o,i*.2,s+.06,{axis:"x",color:N.steelDark,kind:"steel",segments:12,castShadow:!1});for(let a=0;a<r;a+=1){const l=a/r*Math.PI*2;ot(o,{geometry:new Rr(.028,.028,.03,6),material:dt(ei("steel",N.steel)),position:[s/2+.02,Math.cos(l)*i*.42,Math.sin(l)*i*.42],rotation:[0,0,Math.PI/2],castShadow:!1})}}function jy(n,e){const t=Ve(n),i=an(t,{device:am[e],size:[2.6,3.6,9]}),s=i.node,r=e==="TRUCK_C"?N.plastic:"#dfe5e9";for(const o of[-1,1])pe(s,[.14,.24,8.6],{radius:.02,position:[o*.92,.74,.2],color:N.steelDark,kind:"steel"});pe(s,[2.4,2.1,2.2],{radius:.09,position:[0,1.62,3.3],color:r,kind:"steelPainted"}),pe(s,[2.1,.95,.08],{radius:.02,position:[0,2.05,4.36],rotation:[-.12,0,0],color:N.glass,kind:"glass",opacity:.72,castShadow:!1});for(const o of[-1,1])pe(s,[.06,.62,1.1],{radius:.02,position:[o*1.19,1.98,3.5],color:N.glass,kind:"glass",opacity:.6,castShadow:!1});pe(s,[2.06,.62,.08],{radius:.02,position:[0,1.22,4.4],color:N.panelFace,kind:"steelPainted",castShadow:!1}),pe(s,[2.42,.3,.26],{radius:.04,position:[0,.72,4.42],color:N.steelDark,kind:"steelPainted"});for(const o of[-1,1])ot(s,{geometry:fn(.34,.2,.06),material:dt(is(N.lampWarm,1.6)),position:[o*.9,.98,4.42],castShadow:!1});for(const o of[-1,1])ot(s,{geometry:fn(.2,.12,.05),material:dt(is(N.lampCool,1.4)),position:[o*1.02,.74,4.5],castShadow:!1});for(const o of[-1,1]){const a=Ve(s,[o*1.34,2.15,4.1]);zt(a,[0,0,0],[o*.14,.2,-.1],{thickness:.035,color:N.steelDark,castShadow:!1}),pe(a,[.06,.4,.16],{radius:.02,position:[o*.16,.22,-.1],color:N.panelFace,kind:"plastic",castShadow:!1})}pe(s,[2.2,.5,1.3],{radius:.08,position:[0,2.88,2.9],color:r,kind:"steelPainted",castShadow:!1}),et(s,.07,1.5,{axis:"y",position:[1.28,1.5,2.05],color:N.alu,kind:"aluminium",castShadow:!1}),et(s,.28,1.1,{axis:"z",position:[-1.32,.78,1.2],color:N.alu,kind:"aluminium"}),pe(s,[2.5,2.6,6.2],{radius:.07,position:[0,1.92,-.9],color:e==="TRUCK_C"?"#cdd4d8":"#c3ccd2",kind:"steelPainted"});for(let o=0;o<7;o+=1){const a=1.8-o*.9;for(const l of[-1,1])pe(s,[.06,2.4,.14],{radius:0,position:[l*1.26,1.92,a],color:N.wallPanelDark,kind:"steelPainted",castShadow:!1})}pe(s,[2.44,2.44,.08],{radius:.03,position:[0,1.92,-4.04],color:e==="TRUCK_C"?"#c1c9ce":"#b7c0c6",kind:"steelPainted"});for(const o of[-.62,0,.62])et(s,.035,2.3,{axis:"y",position:[o,1.92,-4.1],color:N.steel,kind:"steel",castShadow:!1});pe(s,[.1,.5,5.4],{radius:.02,position:[0,.85,-1.4],color:N.safetyYellow,kind:"steelPainted",castShadow:!1});for(const o of[-.72,.72])ot(s,{geometry:fn(.34,.22,.06),material:dt({color:N.warningRed,emissive:N.warningRed,emissiveIntensity:1.2,roughness:.4,toneMapped:!1}),position:[o,1.18,-4.06],castShadow:!1});for(const o of[-1,1])pe(s,[.4,.5,.05],{radius:.02,position:[o*1.15,.35,-3.1],color:N.rubber,kind:"rubber",castShadow:!1});for(const o of qy)Kr(s,{position:o});return{root:t,shell:i}}function Zy(n,e){const t=Ve(n),i=an(t,{device:lm[e],size:[1.6,2.7,3.2]}),s=i.node;pe(s,[1.32,.92,1.8],{radius:.08,position:[0,.9,-.3],color:N.safetyYellow,kind:"steelPainted"}),pe(s,[1.26,.78,.66],{radius:.12,position:[0,.84,-1.42],color:N.steelDark,kind:"steelPainted"}),Cr(s,{count:4,spacing:.24,position:[0,.6,-1.76],radius:.03}),pe(s,[1.4,.1,.9],{radius:.03,position:[0,.44,.2],color:N.steelDark,kind:"steelPainted",castShadow:!1}),pe(s,[.5,.16,.5],{radius:.05,position:[0,1.4,-.62],color:N.panelFace,kind:"plastic"}),pe(s,[.5,.5,.12],{radius:.05,position:[0,1.66,-.86],color:N.panelFace,kind:"plastic"}),et(s,.06,.7,{axis:"y",position:[0,1.5,-.05],rotation:[.5,0,0],color:N.steelDark,kind:"steel",castShadow:!1}),ot(s,{geometry:new Xa(.16,.03,6,16),material:dt({color:"#1e262b",roughness:.6}),position:[0,1.72,.18],rotation:[1.1,0,0],castShadow:!1});for(const[l,c]of[[-.62,-1.02],[.62,-1.02],[-.62,.42],[.62,.42]])zt(s,[l,1.36,c],[l*.82,2.34,c],{thickness:.075,color:N.steelDark,kind:"steel",castShadow:!1});pe(s,[1.5,.07,1.7],{radius:.03,position:[0,2.36,-.3],color:N.steelDark,kind:"steelPainted"});for(const l of[-1,0,1])pe(s,[.08,.05,1.6],{radius:0,position:[l*.5,2.32,-.3],color:N.steel,kind:"steel",castShadow:!1});et(s,.045,.14,{axis:"y",position:[0,2.45,-1],color:N.steelDark,kind:"steel",castShadow:!1}),ot(s,{geometry:mo(.09,12,10),material:dt(is(N.lampWarm,2.6)),position:[0,2.56,-1],castShadow:!1});const r=Ve(s,[0,.9,1.05]);for(const l of[-1,1])zt(r,[l*.62,-.5,0],[l*.62,1.15,0],{thickness:.11,color:N.steelDark,kind:"steel"});for(const l of[-.5,.1,.7])zt(r,[-.62,l,0],[.62,l,0],{thickness:.07,color:N.steel,kind:"steel",castShadow:!1});et(r,.07,1.3,{axis:"y",position:[0,.3,.16],color:N.machineTrim,kind:"steelPainted",castShadow:!1}),Ar(r,[-.5,1.1,.1],[-.5,-.35,.1],{radius:.018,color:N.alu,kind:"aluminium",castShadow:!1}),pe(r,[1.3,.5,.08],{radius:.03,position:[0,-.62,.1],color:N.steel,kind:"steel"});for(const l of[-1,1])pe(r,[.16,.06,1.05],{radius:.02,position:[l*.42,-.84,.6],color:N.alu,kind:"aluminium",castShadow:!1});const o=Ve(r,[0,-.5,.55]);pe(o,[1.15,.58,.85],{radius:.05,color:"#8a6a3a",kind:"cardboard"}),o.visible=!1,Kr(s,{position:[-.72,.42,1],radius:.42,width:.3,bolts:5}),Kr(s,{position:[.72,.42,1],radius:.42,width:.3,bolts:5}),Kr(s,{position:[-.62,.3,-1.05],radius:.3,width:.24,bolts:4}),Kr(s,{position:[.62,.3,-1.05],radius:.3,width:.24,bolts:4});const a=ot(t,{geometry:fn(.9,.16,.24),material:dt({color:N.steelBlue,emissive:"#000000",emissiveIntensity:0,roughness:.4,metalness:.1,toneMapped:!1}),position:[0,2.78,-.75],castShadow:!1});return{root:t,shell:i,mast:r,cargoBlock:o,indicator:a}}function Jy(n){const e=Ve(n),t=["TRUCK_A","TRUCK_B","TRUCK_C"].map(_=>({id:_,...jy(e,_)})),i=["FL1","FL2"].map(_=>({id:_,...Zy(e,_)})),s=new Map,r=new Map,o=Ve(e),a=Ve(e),l=new Map,c=Ve(e),u=_=>ot(o,{geometry:fn(.95,.72,.85),material:dt({color:It[_].color,roughness:.72,metalness:.05,envMapIntensity:.7})}),d=()=>{const _=Ve(a);for(const v of[-.26,.26])ot(_,{geometry:fn(.98,.76,.05),material:dt({color:"#2f3a40",roughness:.5,metalness:.35}),position:[0,0,v],castShadow:!1});return _},h=(_,v,m)=>{const p=Ve(c),T=It[m].color,M=It[v].color;if(_==="PLASTIC"){ot(p,{geometry:Ls(.16,.18,.42,12),material:dt({color:M,roughness:.42,metalness:.06})});for(const x of[-.11,.11])ot(p,{geometry:Ls(.185,.185,.035,12),material:dt({color:"#333d43",roughness:.6}),position:[0,x,0],castShadow:!1})}else if(_==="TEXTILE")ot(p,{geometry:fn(.62,.24,.52),material:dt({color:M,roughness:.94,envMapIntensity:.35})}),ot(p,{geometry:fn(.64,.02,.12),material:dt({color:"#6c767c",roughness:.8}),position:[0,.125,0],castShadow:!1});else{ot(p,{geometry:fn(.6,.48,.5),material:dt({color:T,roughness:.88,envMapIntensity:.4})});for(const x of[-.22,.22])ot(p,{geometry:fn(.62,.5,.04),material:dt({color:"#4a5459",roughness:.6}),position:[0,0,x],castShadow:!1})}return p},f=(_,v)=>{_.visible=v.visible,_.position.set(v.x,v.y,v.z),_.rotation.y=v.rotY};return{update(_){for(const T of t){const M=_.trucks[T.id];T.root.visible=M.status!=="OFF_SITE",T.root.position.set(M.x,0,M.z)}for(const T of i){const M=_.forklifts[T.id];if(T.root.position.set(M.x,0,M.z),M.route.length>1){const L=Su(M.route,M.travelled+.8),y=Math.atan2(L.x-M.x,L.z-M.z);Number.isFinite(y)&&(L.x!==M.x||L.z!==M.z)&&(T.root.rotation.y+=(y-T.root.rotation.y)*.08)}const D=M.status==="LOADING"||M.status==="UNLOADING"?.25:M.loaded?.45:.9;T.mast.position.y+=(D-T.mast.position.y)*.08,T.cargoBlock.visible=M.loaded;const R=M.cargoLabel==="空载",C=T.indicator.material;C.color.set(R?N.steelBlue:N.ledRun),C.emissive.set(R?"#000000":N.ledRun),C.emissiveIntensity=R?0:1.6}const v=new Set;for(const T of _.bales){v.add(T.id),s.has(T.id)||s.set(T.id,u(T.material)),r.has(T.id)||r.set(T.id,d());const M=$y(T,T.id%4);f(s.get(T.id),M),f(r.get(T.id),M)}for(const[T,M]of s)v.has(T)||(M.visible=!1);for(const[T,M]of r)v.has(T)||(M.visible=!1);const m=new Map,p=new Set;for(const T of _.units){const M=m.get(T.stage)??0;m.set(T.stage,M+1),p.add(T.id),l.has(T.id)||l.set(T.id,h(T.kind,T.origin,T.material)),f(l.get(T.id),Yy(T,_,M))}for(const[T,M]of l)p.has(T)||(M.visible=!1)},setSelected(_){for(const v of t)v.shell.setSelected(am[v.id]===_);for(const v of i)v.shell.setSelected(lm[v.id]===_)},dispose(){e.traverse(_=>{var p;const v=_;(p=v.geometry)==null||p.dispose();const m=v.material;Array.isArray(m)?m.forEach(T=>T.dispose()):m==null||m.dispose()})}}}function Jh(n,e){const t=Ve(n,e.position),i=ot(t,{geometry:new Hu(.42,.7,12,1,!0),material:dt({color:"#cfe9f5",emissive:"#8fd0f0",emissiveIntensity:.6,transparent:!0,opacity:.45,side:2}),rotation:[Math.PI,0,0]});let s=0;return{update(r,o,a){const l=r.puffs.some(u=>u.device===e.device);s=l?1:Math.max(0,s-a*2.6);const c=o?l?.6:0:s;i.scale.set(1,Math.max(.001,c),1),i.material.opacity=c*.5,i.visible=c>.02}}}const Qy={class:"scene-root"},eb={class:"camera-buttons",role:"group","aria-label":"相机视角"},tb=["aria-pressed","disabled","onClick"],nb={class:"scene-legend"},ib={key:0,class:"scene-overlay",role:"status"},sb={key:1,class:"scene-overlay",role:"alert"},rb=1.9,ob=Us({__name:"MrfScene",props:{selected:{},viewMode:{},cameraMode:{},reducedMotion:{type:Boolean}},emits:["select","cameraMode"],setup(n,{emit:e}){const t=n,i=e,s=Dg(),r=ln(null),o=ln(null),a=ln(!1),l=ln(!1);let c=null,u=null,d=null,h=null;function f(){const m=o.value;if(!m)return;const p=t.selected;if(!p||!c){m.style.display="none";return}const T=Es.anchorFor(p),M=c.projectToScreen([T[0],T[1]+rb,T[2]]);if(!M.visible){m.style.display="none";return}m.style.display="block",m.style.left=`${M.x}px`,m.style.top=`${M.y}px`,m.style.transform=`translate(-50%, -50%) scale(${M.scale.toFixed(3)})`}const _={overview:"俯瞰全厂",focus:"跟随选中设备",free:"自由视角"};Fa(()=>{const m=r.value;if(m)try{c=new Es(m,{onSelect:C=>i("select",C),onContextChange:C=>{l.value=C},onError:()=>{a.value=!0}});const p=Ve(c.root),T=Ny(p),M=Gy(p),x=Jy(p),D=[Jh(p,{device:"SORTER_1",position:Es.airPuffPositions()[0].position}),Jh(p,{device:"SORTER_2",position:Es.airPuffPositions()[1].position})];u=T,d=M,h=x,T.setXray(t.viewMode==="xray"),M.setSelected(t.selected),x.setSelected(t.selected),M.setViewMode(t.viewMode),c.setCameraMode(t.cameraMode),c.setReducedMotion(t.reducedMotion),c.setFocusTarget(t.selected?Es.anchorFor(t.selected):null);const R=c;R.addFrameHook(({delta:C})=>{const L=s.current;M.update({state:L,timeInShift:s.timeInShift,reducedMotion:R.isReducedMotion}),x.update(L,R.isReducedMotion);for(const y of D)y.update(L,R.isReducedMotion,C);f()}),R.start()}catch(p){a.value=!0,console.error(p)}}),Ba(()=>{c==null||c.dispose(),c=null,u=null,d=null,h=null}),As(()=>t.viewMode,m=>{u==null||u.setXray(m==="xray"),d==null||d.setViewMode(m)}),As(()=>t.selected,m=>{d==null||d.setSelected(m),h==null||h.setSelected(m),c==null||c.setFocusTarget(m?Es.anchorFor(m):null),m&&t.cameraMode==="focus"&&(c==null||c.setCameraMode("focus")),f()}),As(()=>t.cameraMode,m=>{c==null||c.setCameraMode(m),m==="focus"&&t.selected&&(c==null||c.setFocusTarget(Es.anchorFor(t.selected)))}),As(()=>t.reducedMotion,m=>c==null?void 0:c.setReducedMotion(m));const v=()=>t.selected?Tu[t.selected].name:"";return(m,p)=>(He(),Ge("div",Qy,[G("div",{ref_key:"containerRef",ref:r,class:Cn(["scene-canvas",{"is-failed":a.value}])},null,2),p[4]||(p[4]=G("p",{class:"scene-hint"},"拖动旋转 · 滚轮缩放 · 点击设备查看状态与读数",-1)),G("div",eb,[(He(),Ge(mt,null,$t(_,(T,M)=>G("button",{key:M,type:"button",class:Cn(t.cameraMode===M?"is-active":""),"aria-pressed":t.cameraMode===M,disabled:M==="focus"&&!t.selected,onClick:x=>i("cameraMode",M)},Re(T),11,tb)),64))]),G("div",nb,[(He(!0),Ge(mt,null,$t(Qt(ao),T=>(He(),Ge("span",{key:T},[G("i",{style:Mi({background:Qt(It)[T].color})},null,4),Un(" "+Re(Qt(It)[T].short),1)]))),128)),G("span",null,[G("i",{style:Mi({background:Qt(It).CARDBOARD.color})},null,4),p[0]||(p[0]=Un("纸板",-1))]),G("span",null,[G("i",{style:Mi({background:Qt(It).MISC.color})},null,4),p[1]||(p[1]=Un("杂项",-1))])]),G("div",{ref_key:"labelRef",ref:o,class:"device-label","aria-live":"polite"},Re(v()),513),l.value?(He(),Ge("div",ib,[...p[2]||(p[2]=[G("p",null," 浏览器图形上下文中断，三维画面已暂停更新。仿真与看板数据仍在运行， 恢复后画面会自动继续；若长时间不恢复，可刷新页面。 ",-1)])])):Is("",!0),a.value?(He(),Ge("div",sb,[...p[3]||(p[3]=[G("p",null," 三维场景初始化失败，可能是浏览器不支持 WebGL 或硬件加速被关闭。 设备列表、状态读数与生产看板仍可正常使用；也可以刷新页面重试。 ",-1)])])):Is("",!0)]))}}),ab={plastic:"塑料瓶分拣线",textile:"纺织品分拣线",storage:"纸板 / 杂项存储",logistics:"车辆与叉车"},lb=["plastic","textile","storage","logistics"],cb={class:"panel device-list","aria-label":"设备与车辆列表"},ub={class:"panel-head"},db={class:"muted"},hb={class:"search"},fb=["value"],pb={class:"device-groups"},mb={key:0,class:"device-group"},_b=["aria-pressed","onClick"],gb={class:"device-name"},vb={class:"device-code"},xb={class:"device-status"},Eb={key:0,class:"muted"},Sb=Us({__name:"DeviceList",props:{items:{},selected:{},query:{}},emits:["select","query"],setup(n,{emit:e}){const t=n,i=e,s=r=>t.items.filter(o=>o.group===r);return(r,o)=>(He(),Ge("aside",cb,[G("div",ub,[o[1]||(o[1]=G("h2",null,"设备与车辆",-1)),G("span",db,Re(t.items.length)+" 项",1)]),G("label",hb,[o[2]||(o[2]=G("span",{class:"sr-only"},"搜索设备",-1)),G("input",{type:"search",placeholder:"搜索设备、编号或工艺",value:t.query,onInput:o[0]||(o[0]=a=>i("query",a.target.value))},null,40,fb)]),G("div",pb,[(He(!0),Ge(mt,null,$t(Qt(lb),a=>(He(),Ge(mt,{key:a},[s(a).length?(He(),Ge("section",mb,[G("h3",null,Re(Qt(ab)[a]),1),G("ul",null,[(He(!0),Ge(mt,null,$t(s(a),l=>(He(),Ge("li",{key:l.id},[G("button",{type:"button",class:Cn(`device-row${t.selected===l.id?" is-selected":""}`),"aria-pressed":t.selected===l.id,onClick:c=>i("select",t.selected===l.id?null:l.id)},[G("span",{class:Cn(`dot status-${l.status.toLowerCase()}`),"aria-hidden":"true"},null,2),G("span",gb,[Un(Re(l.name)+" ",1),G("em",vb,Re(l.abbr),1)]),G("span",xb,Re(l.statusLabel),1)],10,_b)]))),128))])])):Is("",!0)],64))),128)),t.items.length===0?(He(),Ge("p",Eb,"没有匹配的设备。")):Is("",!0)])]))}}),Mb={class:"panel dashboard","aria-label":"生产数据看板"},Tb={class:"material-table"},yb={scope:"row"},bb={class:"silo-levels"},Ab=["onClick"],Rb=["title"],wb=["aria-label"],Cb={class:"silo-value"},Pb={class:"task-list"},Lb={key:0,class:"muted"},Ib={key:1},Db={class:"mini-stats"},Ob={class:"trend"},Nb=["viewBox","aria-label"],Ub=["y1","y2"],Fb=["x","y","height"],Bb=["x","y","height"],kb=["x","y"],$l=300,On=92,zb=Us({__name:"Dashboard",props:{metrics:{},state:{},cycle:{}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s={SILO_PET:"SILO_PET",SILO_HDPE:"SILO_HDPE",SILO_COTTON:"SILO_COTTON",SILO_POLYESTER:"SILO_POLYESTER",SILO_BLEND:"SILO_BLEND"},r=cn(()=>Math.max(...Po.map(h=>Math.max(h.receivedT,h.shippedT)))*1.15),o=$l/Po.length,a=o*.28,l=cn(()=>Po.map(h=>`${h.day} 进 ${h.receivedT} 吨、出 ${h.shippedT} 吨`).join("；")),c=cn(()=>t.state.jobs.filter(h=>h.status==="ACTIVE")),u=cn(()=>t.state.bales.filter(h=>h.status==="READY"||h.status==="AT_DOCK")),d=Object.keys(Rn);return(h,f)=>(He(),Ge("section",Mb,[f[15]||(f[15]=G("div",{class:"panel-head"},[G("h2",null,"生产看板"),G("span",{class:"muted"},"本班次数据（模拟）")],-1)),G("table",Tb,[f[1]||(f[1]=G("caption",{class:"sr-only"},"分品类进出存",-1)),f[2]||(f[2]=G("thead",null,[G("tr",null,[G("th",{scope:"col"},"品类"),G("th",{scope:"col"},"进料"),G("th",{scope:"col"},"出货"),G("th",{scope:"col"},"在厂")])],-1)),G("tbody",null,[(He(!0),Ge(mt,null,$t(t.metrics.byMaterial,_=>(He(),Ge("tr",{key:_.material},[G("th",yb,Re(_.label),1),G("td",null,Re(_.received),1),G("td",null,Re(_.shipped),1),G("td",null,Re(_.onSite),1)]))),128))]),G("tfoot",null,[G("tr",null,[f[0]||(f[0]=G("th",{scope:"row"},"合计",-1)),G("td",null,Re(t.metrics.receivedUnits),1),G("td",null,Re(t.metrics.shippedUnits),1),G("td",null,Re(t.metrics.onSiteUnits),1)])])]),G("div",bb,[f[3]||(f[3]=G("h4",null,"料仓水位",-1)),(He(!0),Ge(mt,null,$t(Qt(d),_=>(He(),Ge("button",{key:_,type:"button",class:"silo-row",onClick:v=>i("select",s[_])},[G("span",{class:"silo-name",title:t.state.silos[_].material},Re(Qt(It)[t.state.silos[_].material].short),9,Rb),G("span",{class:"silo-track",role:"img","aria-label":`${t.state.silos[_].units} / ${t.state.silos[_].capacity} 包`},[G("span",{class:"silo-fill",style:Mi({width:`${Math.round((t.state.silos[_].capacity?t.state.silos[_].units/t.state.silos[_].capacity:0)*100)}%`})},null,4),G("span",{class:"silo-threshold",style:Mi({left:`${Math.round(t.state.silos[_].threshold/t.state.silos[_].capacity*100)}%`})},null,4)],8,wb),G("span",Cb,Re(t.state.silos[_].units)+"/"+Re(t.state.silos[_].capacity),1)],8,Ab))),128))]),G("div",Pb,[f[6]||(f[6]=G("h4",null,"搬运任务",-1)),c.value.length===0&&u.value.length===0?(He(),Ge("p",Lb,"当前没有进行中的搬运任务。")):(He(),Ge("ul",Ib,[(He(!0),Ge(mt,null,$t(c.value,_=>(He(),Ge("li",{key:_.id},[f[4]||(f[4]=G("span",{class:"dot status-running","aria-hidden":"true"},null,-1)),Un(" "+Re(_.vehicle??"—")+" · "+Re(_.label),1)]))),128)),(He(!0),Ge(mt,null,$t(u.value,_=>(He(),Ge("li",{key:`bale-${_.id}`},[f[5]||(f[5]=G("span",{class:"dot status-waiting","aria-hidden":"true"},null,-1)),Un(" 待搬运 · "+Re(_.material)+" 打包块 "+Re(_.massT.toFixed(2))+" t ",1)]))),128))]))]),G("dl",Db,[G("div",null,[f[7]||(f[7]=G("dt",null,"本班次打包",-1)),G("dd",null,Re(t.metrics.balesProduced)+" 个",1)]),G("div",null,[f[8]||(f[8]=G("dt",null,"叉车趟数",-1)),G("dd",null,Re(t.metrics.forkliftTrips),1)]),G("div",null,[f[9]||(f[9]=G("dt",null,"在厂车辆",-1)),G("dd",null,Re(t.metrics.truckTrips),1)]),G("div",null,[f[10]||(f[10]=G("dt",null,"在厂物料",-1)),G("dd",null,Re(t.metrics.onSiteUnits)+" 包",1)]),G("div",null,[f[11]||(f[11]=G("dt",null,"转入杂项",-1)),G("dd",{class:Cn(t.metrics.tailUnits>0?"tone-warn":void 0)},Re(t.metrics.tailUnits)+" 包",3)]),G("div",null,[f[12]||(f[12]=G("dt",null,"丢失计数",-1)),G("dd",null,Re(t.metrics.lostUnits)+" 包",1)])]),G("figure",Ob,[f[13]||(f[13]=G("figcaption",null,[Un("近 7 日进出货量（t）"),G("span",{class:"muted"},"演示数据")],-1)),(He(),Ge("svg",{viewBox:`0 0 ${$l} ${On+14}`,role:"img","aria-label":`近 7 日进出货量演示数据：${l.value}`},[(He(),Ge(mt,null,$t([.25,.5,.75,1],_=>G("line",{key:_,x1:0,x2:$l,y1:On-On*_,y2:On-On*_,stroke:"#2b3f4a","stroke-width":1,"stroke-dasharray":"3 5"},null,8,Ub)),64)),(He(!0),Ge(mt,null,$t(Qt(Po),(_,v)=>(He(),Ge("g",{key:_.day},[G("rect",{x:v*o+o/2-a-1,y:On-_.receivedT/r.value*On,width:a,height:_.receivedT/r.value*On,fill:"#4aa8e0",rx:1},null,8,Fb),G("rect",{x:v*o+o/2+1,y:On-_.shippedT/r.value*On,width:a,height:_.shippedT/r.value*On,fill:"#3fbf8b",rx:1},null,8,Bb),G("text",{x:v*o+o/2,y:On+11,"text-anchor":"middle","font-size":"9",fill:"#8fa3ad"},Re(_.day),9,kb)]))),128))],8,Nb)),f[14]||(f[14]=G("p",{class:"trend-legend"},[G("span",null,[G("i",{style:{background:"#4aa8e0"}}),Un("进料")]),G("span",null,[G("i",{style:{background:"#3fbf8b"}}),Un("出货")])],-1))]),f[16]||(f[16]=G("p",{class:"boundary"}," 以上进出货量按 1 个演示物料单元折算为真实料包质量（塑料 0.15 t、纺织 0.08 t、纸板 0.25 t、杂项 0.2 t）， 每班两轮。演示规模只用于在一次班次内完整呈现全流程，真实分拣中心的日处理量远高于此。 ",-1))]))}}),Hb={class:"panel equipment-panel","aria-label":"设备详情与模拟控制"},Gb={class:"panel-head"},Vb={key:0,class:"muted"},Wb={class:"equipment-title"},Xb={class:"muted"},Yb={class:"readouts"},Kb={class:"equipment-note"},$b={class:"flow"},qb=["disabled"],jb=["min","max","step","value","onChange"],Zb={class:"muted"},Jb={class:"anomalies"},Qb=["checked","onChange"],e1={class:"muted"},t1={class:"intervention-log"},n1={key:0,class:"muted"},i1={class:"boundary"},s1=Us({__name:"EquipmentPanel",props:{report:{},settings:{},interventionMode:{type:Boolean},anomalies:{},commands:{}},emits:["control","toggleAnomaly","clearInterventions"],setup(n,{emit:e}){const t=n,i=e,s=[{key:"missort",label:"光选误判",hint:"识别成功率下降，更多瓶料与织物进入尾料"},{key:"siloOverflowWarning",label:"料仓满溢预警",hint:"报警线提前一包：达到容量前 1 包即报警，关闭时只在满仓后报警"},{key:"emergencyStop",label:"紧急停机",hint:"分拣线与搬运立即停止，门岗计划照常，班末清场保证循环不残留"}],r=a=>a.length?a.map(l=>{var c;return((c=Tu[l])==null?void 0:c.name)??l}).join(" → "):"无（本工序为端点）",o=(a,l)=>t.settings.numbers[a]??l;return(a,l)=>(He(),Ge("section",Hb,[G("div",Gb,[l[1]||(l[1]=G("h2",null,"设备详情",-1)),t.report?(He(),Ge("span",{key:0,class:Cn(`status-pill status-${t.report.status.toLowerCase()}`)},Re(t.report.statusLabel),3)):Is("",!0)]),t.report?(He(),Ge(mt,{key:1},[G("div",Wb,[G("h3",null,Re(t.report.spec.name),1),G("p",Xb," 编号 "+Re(Qt(cp)[t.report.id])+" · "+Re(t.report.spec.nameEn)+" · "+Re(t.report.spec.process),1)]),G("dl",Yb,[(He(!0),Ge(mt,null,$t(t.report.readouts,c=>(He(),Ge("div",{key:c.label,class:Cn(c.tone?`tone-${c.tone}`:void 0)},[G("dt",null,Re(c.label),1),G("dd",null,Re(c.value),1)],2))),128))]),G("p",Kb,Re(t.report.stateNote),1),G("div",$b,[G("div",null,[l[2]||(l[2]=G("h4",null,"上游",-1)),G("p",null,Re(r(t.report.upstream)),1)]),G("div",null,[l[3]||(l[3]=G("h4",null,"下游",-1)),G("p",null,Re(r(t.report.downstream)),1)])]),t.report.controls.length>0?(He(),Ge("fieldset",{key:0,class:"controls",disabled:!t.interventionMode},[G("legend",null,"模拟控制"+Re(t.interventionMode?"":"（需开启干预模式）"),1),(He(!0),Ge(mt,null,$t(t.report.controls,c=>(He(),Ge("label",{key:c.key,class:"control"},[G("span",null,[Un(Re(c.label)+" ",1),G("em",null,Re(o(c.key,c.default))+Re(c.unit?` ${c.unit}`:""),1)]),G("input",{type:"range",min:c.min,max:c.max,step:c.step,value:o(c.key,c.default),onChange:u=>i("control",c.key,t.report.id,Number(u.target.value))},null,40,jb),G("small",Zb,Re(c.description),1)]))),128))],8,qb)):Is("",!0)],64)):(He(),Ge("p",Vb,"从左侧列表或三维场景中点击一台设备，查看状态、读数与上下游关系。")),G("fieldset",Jb,[l[4]||(l[4]=G("legend",null,"异常演示开关",-1)),(He(),Ge(mt,null,$t(s,c=>G("label",{key:c.key,class:"switch"},[G("input",{type:"checkbox",checked:t.anomalies[c.key],onChange:u=>i("toggleAnomaly",c.key,u.target.checked)},null,40,Qb),G("span",null,[Un(Re(c.label)+" ",1),G("small",e1,Re(c.hint),1)])])),64))]),G("div",t1,[G("h4",null,"干预记录（"+Re(t.commands.length)+"）",1),t.commands.length===0?(He(),Ge("p",n1,"尚未干预，演示按默认参数运行。")):(He(),Ge(mt,{key:1},[G("ul",null,[(He(!0),Ge(mt,null,$t(t.commands,(c,u)=>(He(),Ge("li",{key:`${c.at}-${c.key}-${u}`},Re(c.at.toFixed(1))+"s · "+Re(c.device)+" · "+Re(c.key)+" = "+Re(c.value),1))),128))]),G("button",{type:"button",onClick:l[0]||(l[0]=c=>i("clearInterventions"))},"清除全部干预")],64))]),G("p",i1,Re(t.report?t.report.boundary:"所有读数与状态均为本地仿真值。"),1)]))}}),ql=13,r1=9,o1=10,a1=6,l1=560,jl=[{at:0,label:"进货车辆入场"},{at:15,label:"塑料来料上线"},{at:20,label:"首次光选分选"},{at:24,label:"纺织来料上线"},{at:39,label:"首件打包"},{at:55,label:"首件成品装车"},{at:108,label:"转运车离场"},{at:118,label:"出货过磅"}];function c1(n,e,t){const i=t>0?t:l1,s=[];return n.map(r=>{const o=(r.label.length*r1+o1)/2,a=e>0?r.at/e*i:0,l=a-o;let c=s.findIndex(u=>u+a1<=l);return c===-1&&(c=s.length),s[c]=a+o,{row:c,left:l,right:a+o}})}const u1={class:"timeline","aria-label":"班次时间轴"},d1=["max","value"],h1={class:"timeline-marks"},f1=["title","onClick"],p1={class:"timeline-foot"},m1={class:"timeline-time"},_1={class:"event-feed","aria-live":"polite"},g1=Us({__name:"Timeline",props:{timeInShift:{},duration:{},playing:{type:Boolean},eventLog:{}},emits:["scrub"],setup(n,{emit:e}){const t=n,i=e,s=ln(null),r=ln(0);let o=null;const a=()=>{s.value&&(r.value=s.value.clientWidth)};Fa(()=>{a(),typeof ResizeObserver=="function"&&s.value?(o=new ResizeObserver(a),o.observe(s.value)):window.addEventListener("resize",a)}),Ba(()=>{o==null||o.disconnect(),o=null,window.removeEventListener("resize",a)});const l=cn(()=>t.eventLog.slice(-6).reverse()),c=cn(()=>c1(jl,t.duration,r.value)),u=cn(()=>c.value.reduce((h,f)=>Math.max(h,f.row),0)),d=h=>({left:`${jl[h].at/t.duration*100}%`,top:c.value[h].row*ql,"--mark-lift":`${c.value[h].row*ql}px`});return(h,f)=>(He(),Ge("section",u1,[G("div",{ref_key:"trackRef",ref:s,class:"timeline-track",style:Mi({paddingBottom:16+u.value*Qt(ql)})},[G("input",{type:"range",min:"0",max:t.duration,step:"0.1",value:t.timeInShift,"aria-label":"拖动查看任意时刻的现场状态",onInput:f[0]||(f[0]=_=>i("scrub",Number(_.target.value)))},null,40,d1),G("div",h1,[(He(!0),Ge(mt,null,$t(Qt(jl),(_,v)=>(He(),Ge("button",{key:_.at,type:"button",class:"timeline-mark",style:Mi(d(v)),title:`${_.label}（${_.at}s）`,onClick:m=>i("scrub",_.at)},[G("span",null,Re(_.label),1)],12,f1))),128))])],4),G("div",p1,[G("span",m1,Re(t.timeInShift.toFixed(1))+"s / "+Re(t.duration)+"s "+Re(t.playing?"· 播放中":"· 已暂停"),1),G("ol",_1,[(He(!0),Ge(mt,null,$t(l.value,_=>(He(),Ge("li",{key:_},Re(_),1))),128))])])]))}}),v1={class:"top-bar"},x1={class:"kpi-row"},E1={class:"top-controls"},S1={class:"speed-group",role:"group","aria-label":"播放倍速"},M1=["aria-pressed","onClick"],T1=["aria-pressed"],y1={class:"clock","aria-live":"polite"},b1={key:0,class:"banner danger",role:"status"},A1=Us({__name:"TopBar",props:{timeInShift:{},duration:{},cycle:{},playing:{type:Boolean},speed:{},speeds:{},viewMode:{},interventionMode:{type:Boolean},emergencyStop:{type:Boolean},metrics:{}},emits:["togglePlay","speed","reset","toggleView","toggleIntervention"],setup(n,{emit:e}){const t=n,i=e,s=r=>`${Math.round(r*100)}%`;return(r,o)=>(He(),Ge("header",v1,[o[9]||(o[9]=G("div",{class:"brand"},[G("strong",null,"RELOOP MRF"),G("span",{class:"muted"},"可回收物分拣中心数字孪生 · 概念演示")],-1)),G("dl",x1,[G("div",null,[o[4]||(o[4]=G("dt",null,"当日进料",-1)),G("dd",null,Re(t.metrics.receivedMassT.toFixed(2))+" t",1)]),G("div",null,[o[5]||(o[5]=G("dt",null,"当日出货",-1)),G("dd",null,Re(t.metrics.shippedMassT.toFixed(2))+" t",1)]),G("div",null,[o[6]||(o[6]=G("dt",null,"回收率",-1)),G("dd",null,Re(s(t.metrics.recoveryRate)),1)]),G("div",null,[o[7]||(o[7]=G("dt",null,"运行设备",-1)),G("dd",null,Re(t.metrics.runningDevices)+"/"+Re(t.metrics.totalDevices),1)]),G("div",null,[o[8]||(o[8]=G("dt",null,"班次进度",-1)),G("dd",null,Re(s(t.metrics.shiftProgress)),1)])]),G("div",E1,[G("button",{type:"button",class:"primary",onClick:o[0]||(o[0]=a=>i("togglePlay"))},Re(t.playing?"暂停":"继续"),1),G("div",S1,[(He(!0),Ge(mt,null,$t(t.speeds,a=>(He(),Ge("button",{key:a,type:"button",class:Cn(t.speed===a?"is-active":""),"aria-pressed":t.speed===a,onClick:l=>i("speed",a)},Re(a)+"× ",11,M1))),128))]),G("button",{type:"button",onClick:o[1]||(o[1]=a=>i("reset"))},"复位"),G("button",{type:"button",onClick:o[2]||(o[2]=a=>i("toggleView"))},Re(t.viewMode==="xray"?"显示屋顶":"透视厂房"),1),G("button",{type:"button",class:Cn(t.interventionMode?"is-active":""),"aria-pressed":t.interventionMode,title:"默认只读；开启后才允许修改设备参数",onClick:o[3]||(o[3]=a=>i("toggleIntervention"))}," 干预模式 ",10,T1),G("span",y1,Re(t.timeInShift.toFixed(1))+"s / "+Re(t.duration)+"s · 第 "+Re(t.cycle+1)+" 班次 ",1)]),t.emergencyStop?(He(),Ge("p",b1," 紧急停机已启用：分拣线与搬运已停止，车辆仍按门岗计划进出。 ")):Is("",!0)]))}}),R1={class:"app-body"},w1={class:"app-stage","aria-label":"分拣中心三维场景"},C1={class:"app-side"},P1=.12,L1=Us({__name:"App",setup(n){const e=[1,2,4],t={RUNNING:"运行中",WAITING:"等待",IDLE:"待机",WARNING:"报警",STOPPED:"已停机"},i=Zm(new Lg);Ig(i.value);const s=ln(0),r=()=>{s.value+=1},o=ln(!0),a=ln(1),l=ln(null),c=ln("xray"),u=ln("free"),d=ln(!1),h=ln(""),f=ln(!1);let _=0,v=null;const m=()=>{v&&(f.value=v.matches,v.matches&&(o.value=!1))};Fa(()=>{typeof window.matchMedia=="function"&&(v=window.matchMedia("(prefers-reduced-motion: reduce)"),v.addEventListener("change",m),f.value=v.matches,v.matches&&(o.value=!1)),p(),window.addEventListener("keydown",te)}),Ba(()=>{cancelAnimationFrame(_),v==null||v.removeEventListener("change",m),window.removeEventListener("keydown",te)});function p(){let K=performance.now(),k=0;const $=X=>{_=requestAnimationFrame($);const ge=Math.min(.05,(X-K)/1e3);K=X,!(!o.value||document.hidden)&&(i.value.advanceBy(ge*a.value),k+=ge,k>=P1&&(k=0,r()))};_=requestAnimationFrame($)}const T=cn(()=>(s.value,or(i.value.commands,i.value.currentStep%di))),M=cn(()=>(s.value,i.value.current)),x=cn(()=>(s.value,zg(M.value,i.value.completedCycles))),D=cn(()=>(s.value,l.value?Bg(M.value,l.value,T.value):null)),R=cn(()=>(s.value,i.value.timeInShift)),C=cn(()=>(s.value,i.value.completedCycles)),L=cn(()=>{const K=h.value.trim().toLowerCase();return Mu.filter(k=>K?`${k.name} ${k.nameEn} ${k.process}`.toLowerCase().includes(K):!0).map(k=>{const $=Ru(M.value,k.id);return{id:k.id,name:k.name,abbr:cp[k.id],group:k.group,process:k.process,status:$,statusLabel:t[$]}})}),y=(K,k,$,X=!1)=>{i.value.addCommand({at:i.value.timeInShift,device:k,key:K,value:$,flag:X}),r()},E=(K,k)=>y(K,"SYSTEM",k?1:0,!0),w=()=>{i.value.clearCommands(),r()},U=()=>{i.value.reset(),r()},V=K=>{i.value.seekToTime(K),r()},te=K=>{const k=K.target;k&&["INPUT","TEXTAREA","SELECT"].includes(k.tagName)||(K.code==="Space"?(K.preventDefault(),o.value=!o.value):K.key==="r"||K.key==="R"?U():K.key==="Escape"?l.value=null:e.includes(Number(K.key))&&(a.value=Number(K.key)))};return(K,k)=>(He(),Ge("div",{class:Cn(`app-shell${f.value?" reduce-motion":""}`)},[hn(A1,{"time-in-shift":R.value,duration:Qt(lt).DURATION,cycle:C.value,playing:o.value,speed:a.value,speeds:e,"view-mode":c.value,"intervention-mode":d.value,"emergency-stop":M.value.anomalies.emergencyStop,metrics:x.value,onTogglePlay:k[0]||(k[0]=$=>o.value=!o.value),onSpeed:k[1]||(k[1]=$=>a.value=$),onReset:U,onToggleView:k[2]||(k[2]=$=>c.value=c.value==="xray"?"enclosed":"xray"),onToggleIntervention:k[3]||(k[3]=$=>d.value=!d.value)},null,8,["time-in-shift","duration","cycle","playing","speed","view-mode","intervention-mode","emergency-stop","metrics"]),G("main",R1,[hn(Sb,{items:L.value,selected:l.value,query:h.value,onQuery:k[4]||(k[4]=$=>h.value=$),onSelect:k[5]||(k[5]=$=>l.value=$)},null,8,["items","selected","query"]),G("section",w1,[hn(ob,{"camera-mode":u.value,selected:l.value,"view-mode":c.value,"reduced-motion":f.value,onCameraMode:k[6]||(k[6]=$=>u.value=$),onSelect:k[7]||(k[7]=$=>l.value=$)},null,8,["camera-mode","selected","view-mode","reduced-motion"]),hn(g1,{duration:Qt(lt).DURATION,"event-log":M.value.events,playing:o.value,"time-in-shift":R.value,onScrub:V},null,8,["duration","event-log","playing","time-in-shift"])]),G("div",C1,[hn(s1,{anomalies:M.value.anomalies,commands:i.value.commands,"intervention-mode":d.value,report:D.value,settings:T.value,onControl:k[8]||(k[8]=($,X,ge)=>y($,X,ge)),onToggleAnomaly:E,onClearInterventions:w},null,8,["anomalies","commands","intervention-mode","report","settings"]),hn(zb,{cycle:C.value,metrics:x.value,state:M.value,onSelect:k[9]||(k[9]=$=>l.value=$)},null,8,["cycle","metrics","state"])])])],2))}}),cm=document.getElementById("root");if(!cm)throw new Error("Missing #root container");F_(L1).mount(cm);
