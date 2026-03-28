const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-PjcF_4HK.js","assets/authService-BvZQcZLh.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/Login-_8WdQMx6.css","assets/OutletSelector-Cn4697-H.js","assets/OutletSelector-jna6oay-.css","assets/MainLayout-BDyNEXAr.js","assets/MainLayout-BnU4_sW6.css","assets/Dashboard-B8P8Aeie.js","assets/posService-yng79Moi.js","assets/Dashboard-Cm6oqJsZ.css","assets/ManageOutlets-i89g_CKf.js","assets/ManageOutlets-CIZ3GLPw.css","assets/ManageStaff-Bmt8bSmx.js","assets/ManageStaff-D-7Q4Oew.css","assets/MasterIngredients-DyW9VYxl.js","assets/MasterIngredients-DTYdbjj8.css","assets/MasterRecipes-BYfHHuA7.js","assets/MasterRecipes-D71vRsfA.css","assets/Inventory-AUCmCAA8.js","assets/Inventory-3ELn-7QW.css","assets/Expenses-FHuxqpFL.js","assets/Expenses-BuzM2ptx.css","assets/Ledger-D8J0dbfH.js","assets/accountingService-klT3vevE.js","assets/Ledger-2X1xpEg6.css","assets/BalanceSheet-Db075G6-.js","assets/BalanceSheet-BOgmPPZD.css","assets/Reports-D2juUo1X.js","assets/Reports-B-k4qb7H.css","assets/POS-CFPQKNdL.js","assets/POS-DLY-uR1y.css","assets/History-DU_ieaNt.js","assets/History-CQIL_7UL.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},qr=[],Jt=()=>{},_d=()=>!1,zo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),el=t=>t.startsWith("onUpdate:"),et=Object.assign,tl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},C_=Object.prototype.hasOwnProperty,Re=(t,e)=>C_.call(t,e),se=Array.isArray,$r=t=>vi(t)==="[object Map]",us=t=>vi(t)==="[object Set]",sh=t=>vi(t)==="[object Date]",ue=t=>typeof t=="function",qe=t=>typeof t=="string",nn=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",yd=t=>(Se(t)||ue(t))&&ue(t.then)&&ue(t.catch),vd=Object.prototype.toString,vi=t=>vd.call(t),O_=t=>vi(t).slice(8,-1),Ed=t=>vi(t)==="[object Object]",nl=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qs=Zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},N_=/-\w/g,Mt=Qo(t=>t.replace(N_,e=>e.slice(1).toUpperCase())),D_=/\B([A-Z])/g,Rr=Qo(t=>t.replace(D_,"-$1").toLowerCase()),Jo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ja=Qo(t=>t?`on${Jo(t)}`:""),Kn=(t,e)=>!Object.is(t,e),uo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Td=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Yo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ih;const Xo=()=>ih||(ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?M_(r):rl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Se(t))return t}const V_=/;(?![^(]*\))/g,k_=/:([^]+)/,x_=/\/\*[^]*?\*\//g;function M_(t){const e={};return t.replace(x_,"").split(V_).forEach(n=>{if(n){const r=n.split(k_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sl(t){let e="";if(qe(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=sl(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const L_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F_=Zc(L_);function Id(t){return!!t||t===""}function U_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=hs(t[r],e[r]);return n}function hs(t,e){if(t===e)return!0;let n=sh(t),r=sh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=nn(t),r=nn(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?U_(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!hs(t[o],e[o]))return!1}}return String(t)===String(e)}function il(t,e){return t.findIndex(n=>hs(n,e))}const wd=t=>!!(t&&t.__v_isRef===!0),B_=t=>qe(t)?t:t==null?"":se(t)||Se(t)&&(t.toString===vd||!ue(t.toString))?wd(t)?B_(t.value):JSON.stringify(t,Ad,2):String(t),Ad=(t,e)=>wd(e)?Ad(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[qa(r,i)+" =>"]=s,n),{})}:us(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qa(n))}:nn(e)?qa(e):Se(e)&&!se(e)&&!Ed(e)?String(e):e,qa=(t,e="")=>{var n;return nn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class j_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){this._on>0&&--this._on===0&&(wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function q_(){return wt}let Oe;const $a=new WeakSet;class Rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&wt.active&&wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oh(this),Pd(this);const e=Oe,n=jt;Oe=this,jt=!0;try{return this.fn()}finally{Cd(this),Oe=e,jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cl(e);this.deps=this.depsTail=void 0,oh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fc(this)&&this.run()}get dirty(){return fc(this)}}let bd=0,$s,Hs;function Sd(t,e=!1){if(t.flags|=8,e){t.next=Hs,Hs=t;return}t.next=$s,$s=t}function ol(){bd++}function al(){if(--bd>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$s;){let e=$s;for($s=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Pd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),cl(r),$_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function fc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Od(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Od(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ti)||(t.globalVersion=ti,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!fc(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=jt;Oe=t,jt=!0;try{Pd(t);const s=t.fn(t._value);(e.version===0||Kn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,jt=r,Cd(t),t.flags&=-3}}function cl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)cl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function $_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let jt=!0;const Nd=[];function Tn(){Nd.push(jt),jt=!1}function In(){const t=Nd.pop();jt=t===void 0?!0:t}function oh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let ti=0;class H_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ll{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!jt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new H_(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,Dd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,ti++,this.notify(e)}notify(e){ol();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{al()}}}function Dd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Dd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const dc=new WeakMap,mr=Symbol(""),pc=Symbol(""),ni=Symbol("");function at(t,e,n){if(jt&&Oe){let r=dc.get(t);r||dc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ll),s.map=r,s.key=n),s.track()}}function dn(t,e,n,r,s,i){const o=dc.get(t);if(!o){ti++;return}const c=l=>{l&&l.trigger()};if(ol(),e==="clear")o.forEach(c);else{const l=se(t),h=l&&nl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===ni||!nn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(ni)),e){case"add":l?h&&c(o.get("length")):(c(o.get(mr)),$r(t)&&c(o.get(pc)));break;case"delete":l||(c(o.get(mr)),$r(t)&&c(o.get(pc)));break;case"set":$r(t)&&c(o.get(mr));break}}al()}function kr(t){const e=Ae(t);return e===t?e:(at(e,"iterate",ni),xt(t)?e:e.map(qt))}function Zo(t){return at(t=Ae(t),"iterate",ni),t}function Ln(t,e){return wn(t)?Yr(gr(t)?qt(e):e):qt(e)}const W_={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,t=>Ln(this,t))},concat(...t){return kr(this).concat(...t.map(e=>se(e)?kr(e):e))},entries(){return Ha(this,"entries",t=>(t[1]=Ln(this,t[1]),t))},every(t,e){return cn(this,"every",t,e,void 0,arguments)},filter(t,e){return cn(this,"filter",t,e,n=>n.map(r=>Ln(this,r)),arguments)},find(t,e){return cn(this,"find",t,e,n=>Ln(this,n),arguments)},findIndex(t,e){return cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return cn(this,"findLast",t,e,n=>Ln(this,n),arguments)},findLastIndex(t,e){return cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wa(this,"includes",t)},indexOf(...t){return Wa(this,"indexOf",t)},join(t){return kr(this).join(t)},lastIndexOf(...t){return Wa(this,"lastIndexOf",t)},map(t,e){return cn(this,"map",t,e,void 0,arguments)},pop(){return Ns(this,"pop")},push(...t){return Ns(this,"push",t)},reduce(t,...e){return ah(this,"reduce",t,e)},reduceRight(t,...e){return ah(this,"reduceRight",t,e)},shift(){return Ns(this,"shift")},some(t,e){return cn(this,"some",t,e,void 0,arguments)},splice(...t){return Ns(this,"splice",t)},toReversed(){return kr(this).toReversed()},toSorted(t){return kr(this).toSorted(t)},toSpliced(...t){return kr(this).toSpliced(...t)},unshift(...t){return Ns(this,"unshift",t)},values(){return Ha(this,"values",t=>Ln(this,t))}};function Ha(t,e,n){const r=Zo(t),s=r[e]();return r!==t&&!xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const K_=Array.prototype;function cn(t,e,n,r,s,i){const o=Zo(t),c=o!==t&&!xt(t),l=o[e];if(l!==K_[e]){const p=l.apply(t,i);return c?qt(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,Ln(t,p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function ah(t,e,n,r){const s=Zo(t);let i=n;return s!==t&&(xt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Ln(t,c),l,t)}),s[e](i,...r)}function Wa(t,e,n){const r=Ae(t);at(r,"iterate",ni);const s=r[e](...n);return(s===-1||s===!1)&&fl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ns(t,e,n=[]){Tn(),ol();const r=Ae(t)[e].apply(t,n);return al(),In(),r}const G_=Zc("__proto__,__v_isRef,__isVue"),Vd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nn));function z_(t){nn(t)||(t=String(t));const e=Ae(this);return at(e,"has",t),e.hasOwnProperty(t)}class kd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sy:Fd:i?Ld:Md).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let l;if(o&&(l=W_[n]))return l;if(n==="hasOwnProperty")return z_}const c=Reflect.get(e,n,ut(e)?e:r);if((nn(n)?Vd.has(n):G_(n))||(s||at(e,"get",n),i))return c;if(ut(c)){const l=o&&nl(n)?c:c.value;return s&&Se(l)?gc(l):l}return Se(c)?s?gc(c):ea(c):c}}class xd extends kd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=se(e)&&nl(n);if(!this._isShallow){const h=wn(i);if(!xt(r)&&!wn(r)&&(i=Ae(i),r=Ae(r)),!o&&ut(i)&&!ut(r))return h||(i.value=r),!0}const c=o?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,ut(e)?e:s);return e===Ae(s)&&(c?Kn(r,i)&&dn(e,"set",n,r):dn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!nn(n)||!Vd.has(n))&&at(e,"has",n),r}ownKeys(e){return at(e,"iterate",se(e)?"length":mr),Reflect.ownKeys(e)}}class Q_ extends kd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const J_=new xd,Y_=new Q_,X_=new xd(!0);const mc=t=>t,no=t=>Reflect.getPrototypeOf(t);function Z_(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=$r(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?mc:e?Yr:qt;return!e&&at(i,"iterate",l?pc:mr),et(Object.create(h),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function ro(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ey(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(Kn(s,c)&&at(o,"get",s),at(o,"get",c));const{has:l}=no(o),h=e?mc:t?Yr:qt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&at(Ae(s),"iterate",mr),s.size},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(Kn(s,c)&&at(o,"has",s),at(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),h=e?mc:t?Yr:qt;return!t&&at(l,"iterate",mr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return et(n,t?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){!e&&!xt(s)&&!wn(s)&&(s=Ae(s));const i=Ae(this);return no(i).has.call(i,s)||(i.add(s),dn(i,"add",s,s)),this},set(s,i){!e&&!xt(i)&&!wn(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=no(o);let h=c.call(o,s);h||(s=Ae(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?Kn(i,f)&&dn(o,"set",s,i):dn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=no(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&dn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Z_(s,t,e)}),n}function ul(t,e){const n=ey(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const ty={get:ul(!1,!1)},ny={get:ul(!1,!0)},ry={get:ul(!0,!1)};const Md=new WeakMap,Ld=new WeakMap,Fd=new WeakMap,sy=new WeakMap;function iy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oy(t){return t.__v_skip||!Object.isExtensible(t)?0:iy(O_(t))}function ea(t){return wn(t)?t:hl(t,!1,J_,ty,Md)}function Ud(t){return hl(t,!1,X_,ny,Ld)}function gc(t){return hl(t,!0,Y_,ry,Fd)}function hl(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=oy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function gr(t){return wn(t)?gr(t.__v_raw):!!(t&&t.__v_isReactive)}function wn(t){return!!(t&&t.__v_isReadonly)}function xt(t){return!!(t&&t.__v_isShallow)}function fl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function ay(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Td(t,"__v_skip",!0),t}const qt=t=>Se(t)?ea(t):t,Yr=t=>Se(t)?gc(t):t;function ut(t){return t?t.__v_isRef===!0:!1}function cy(t){return Bd(t,!1)}function ly(t){return Bd(t,!0)}function Bd(t,e){return ut(t)?t:new uy(t,e)}class uy{constructor(e,n){this.dep=new ll,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xt(e)||wn(e);e=r?e:Ae(e),Kn(e,n)&&(this._rawValue=e,this._value=r?e:qt(e),this.dep.trigger())}}function Hr(t){return ut(t)?t.value:t}const hy={get:(t,e,n)=>e==="__v_raw"?t:Hr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ut(s)&&!ut(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jd(t){return gr(t)?t:new Proxy(t,hy)}class fy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ll(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Sd(this,!0),!0}get value(){const e=this.dep.track();return Od(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dy(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new fy(r,s,n)}const so={},bo=new WeakMap;let hr;function py(t,e=!1,n=hr){if(n){let r=bo.get(n);r||bo.set(n,r=[]),r.push(t)}}function my(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=K=>s?K:xt(K)||s===!1||s===0?pn(K,1):pn(K);let f,p,g,v,O=!1,N=!1;if(ut(t)?(p=()=>t.value,O=xt(t)):gr(t)?(p=()=>h(t),O=!0):se(t)?(N=!0,O=t.some(K=>gr(K)||xt(K)),p=()=>t.map(K=>{if(ut(K))return K.value;if(gr(K))return h(K);if(ue(K))return l?l(K,2):K()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){Tn();try{g()}finally{In()}}const K=hr;hr=f;try{return l?l(t,3,[v]):t(v)}finally{hr=K}}:p=Jt,e&&s){const K=p,fe=s===!0?1/0:s;p=()=>pn(K(),fe)}const V=q_(),W=()=>{f.stop(),V&&V.active&&tl(V.effects,f)};if(i&&e){const K=e;e=(...fe)=>{K(...fe),W()}}let B=N?new Array(t.length).fill(so):so;const q=K=>{if(!(!(f.flags&1)||!f.dirty&&!K))if(e){const fe=f.run();if(s||O||(N?fe.some((de,w)=>Kn(de,B[w])):Kn(fe,B))){g&&g();const de=hr;hr=f;try{const w=[fe,B===so?void 0:N&&B[0]===so?[]:B,v];B=fe,l?l(e,3,w):e(...w)}finally{hr=de}}}else f.run()};return c&&c(q),f=new Rd(p),f.scheduler=o?()=>o(q,!1):q,v=K=>py(K,!1,f),g=f.onStop=()=>{const K=bo.get(f);if(K){if(l)l(K,4);else for(const fe of K)fe();bo.delete(f)}},e?r?q(!0):B=f.run():o?o(q.bind(null,!0),!0):f.run(),W.pause=f.pause.bind(f),W.resume=f.resume.bind(f),W.stop=W,W}function pn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ut(t))pn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)pn(t[r],e,n);else if(us(t)||$r(t))t.forEach(r=>{pn(r,e,n)});else if(Ed(t)){for(const r in t)pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ei(t,e,n,r){try{return r?t(...r):t()}catch(s){ta(s,e,n)}}function rn(t,e,n,r){if(ue(t)){const s=Ei(t,e,n,r);return s&&yd(s)&&s.catch(i=>{ta(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(rn(t[i],e,n,r));return s}}function ta(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){Tn(),Ei(i,null,10,[t,l,h]),In();return}}gy(t,n,s,r,o)}function gy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Gt=-1;const Wr=[];let Fn=null,Mr=0;const qd=Promise.resolve();let So=null;function dl(t){const e=So||qd;return t?e.then(this?t.bind(this):t):e}function _y(t){let e=Gt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=ri(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function pl(t){if(!(t.flags&1)){const e=ri(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=ri(n)?_t.push(t):_t.splice(_y(e),0,t),t.flags|=1,$d()}}function $d(){So||(So=qd.then(Wd))}function yy(t){se(t)?Wr.push(...t):Fn&&t.id===-1?Fn.splice(Mr+1,0,t):t.flags&1||(Wr.push(t),t.flags|=1),$d()}function ch(t,e,n=Gt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Hd(t){if(Wr.length){const e=[...new Set(Wr)].sort((n,r)=>ri(n)-ri(r));if(Wr.length=0,Fn){Fn.push(...e);return}for(Fn=e,Mr=0;Mr<Fn.length;Mr++){const n=Fn[Mr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fn=null,Mr=0}}const ri=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wd(t){try{for(Gt=0;Gt<_t.length;Gt++){const e=_t[Gt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gt<_t.length;Gt++){const e=_t[Gt];e&&(e.flags&=-2)}Gt=-1,_t.length=0,Hd(),So=null,(_t.length||Wr.length)&&Wd()}}let Pt=null,Kd=null;function Po(t){const e=Pt;return Pt=t,Kd=t&&t.type.__scopeId||null,e}function vy(t,e=Pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&No(-1);const i=Po(e);let o;try{o=t(...s)}finally{Po(i),r._d&&No(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function uS(t,e){if(Pt===null)return t;const n=ia(Pt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ce]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&pn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Tn(),rn(l,n,8,[t.el,c,t,e]),In())}}function ho(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=Av();if(r||Kr){let s=Kr?Kr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const Ey=Symbol.for("v-scx"),Ty=()=>Yt(Ey);function fo(t,e,n){return Gd(t,e,n)}function Gd(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=et({},n),l=e&&r||!e&&i!=="post";let h;if(ii){if(i==="sync"){const v=Ty();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!l){const v=()=>{};return v.stop=Jt,v.resume=Jt,v.pause=Jt,v}}const f=lt;c.call=(v,O,N)=>rn(v,f,O,N);let p=!1;i==="post"?c.scheduler=v=>{It(v,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(v,O)=>{O?v():pl(v)}),c.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const g=my(t,e,c);return ii&&(h?h.push(g):l&&g()),g}function Iy(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?zd(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Ti(this),c=Gd(s,i.bind(r),n);return o(),c}function zd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const wy=Symbol("_vte"),Ay=t=>t.__isTeleport,Ry=Symbol("_leaveCb");function ml(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ml(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Qd(t,e){return ue(t)?et({name:t.name},e,{setup:t}):t}function Jd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function lh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Co=new WeakMap;function Ws(t,e,n,r,s=!1){if(se(t)){t.forEach((N,V)=>Ws(N,e&&(se(e)?e[V]:e),n,r,s));return}if(Ks(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ws(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ia(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ce?c.refs={}:c.refs,p=c.setupState,g=Ae(p),v=p===Ce?_d:N=>lh(f,N)?!1:Re(g,N),O=(N,V)=>!(V&&lh(f,V));if(h!=null&&h!==l){if(uh(e),qe(h))f[h]=null,v(h)&&(p[h]=null);else if(ut(h)){const N=e;O(h,N.k)&&(h.value=null),N.k&&(f[N.k]=null)}}if(ue(l))Ei(l,c,12,[o,f]);else{const N=qe(l),V=ut(l);if(N||V){const W=()=>{if(t.f){const B=N?v(l)?p[l]:f[l]:O()||!t.k?l.value:f[t.k];if(s)se(B)&&tl(B,i);else if(se(B))B.includes(i)||B.push(i);else if(N)f[l]=[i],v(l)&&(p[l]=f[l]);else{const q=[i];O(l,t.k)&&(l.value=q),t.k&&(f[t.k]=q)}}else N?(f[l]=o,v(l)&&(p[l]=o)):V&&(O(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const B=()=>{W(),Co.delete(t)};B.id=-1,Co.set(t,B),It(B,n)}else uh(t),W()}}}function uh(t){const e=Co.get(t);e&&(e.flags|=8,Co.delete(t))}Xo().requestIdleCallback;Xo().cancelIdleCallback;const Ks=t=>!!t.type.__asyncLoader,Yd=t=>t.type.__isKeepAlive;function by(t,e){Xd(t,"a",e)}function Sy(t,e){Xd(t,"da",e)}function Xd(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(na(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Yd(s.parent.vnode)&&Py(r,e,n,s),s=s.parent}}function Py(t,e,n,r){const s=na(e,t,r,!0);Zd(()=>{tl(r[e],s)},n)}function na(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Tn();const c=Ti(n),l=rn(e,n,t,o);return c(),In(),l});return r?s.unshift(i):s.push(i),i}}const Pn=t=>(e,n=lt)=>{(!ii||t==="sp")&&na(t,(...r)=>e(...r),n)},Cy=Pn("bm"),Oy=Pn("m"),Ny=Pn("bu"),Dy=Pn("u"),Vy=Pn("bum"),Zd=Pn("um"),ky=Pn("sp"),xy=Pn("rtg"),My=Pn("rtc");function Ly(t,e=lt){na("ec",t,e)}const Fy="components";function Uy(t,e){return jy(Fy,t,!0,e)||t}const By=Symbol.for("v-ndc");function jy(t,e,n=!0,r=!1){const s=Pt||lt;if(s){const i=s.type;{const c=Cv(i,!1);if(c&&(c===e||c===Mt(e)||c===Jo(Mt(e))))return i}const o=hh(s[t]||i[t],e)||hh(s.appContext[t],e);return!o&&r?i:o}}function hh(t,e){return t&&(t[e]||t[Mt(e)]||t[Jo(Mt(e))])}function hS(t,e,n,r){let s;const i=n,o=se(t);if(o||qe(t)){const c=o&&gr(t);let l=!1,h=!1;c&&(l=!xt(t),h=wn(t),t=Zo(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?Yr(qt(t[f])):qt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const _c=t=>t?Tp(t)?ia(t):_c(t.parent):null,Gs=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_c(t.parent),$root:t=>_c(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>tp(t),$forceUpdate:t=>t.f||(t.f=()=>{pl(t.update)}),$nextTick:t=>t.n||(t.n=dl.bind(t.proxy)),$watch:t=>Iy.bind(t)}),Ka=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),qy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ka(r,e))return o[e]=1,r[e];if(s!==Ce&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==Ce&&Re(n,e))return o[e]=4,n[e];yc&&(o[e]=0)}}const h=Gs[e];let f,p;if(h)return e==="$attrs"&&at(t.attrs,"get",""),h(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ce&&Re(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ka(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ce&&c[0]!=="$"&&Re(t,c)||Ka(e,c)||Re(i,c)||Re(r,c)||Re(Gs,c)||Re(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fh(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yc=!0;function $y(t){const e=tp(t),n=t.proxy,r=t.ctx;yc=!1,e.beforeCreate&&dh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:v,updated:O,activated:N,deactivated:V,beforeDestroy:W,beforeUnmount:B,destroyed:q,unmounted:K,render:fe,renderTracked:de,renderTriggered:w,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:R,components:S,directives:E,filters:ft}=e;if(h&&Hy(h,r,null),o)for(const ye in o){const me=o[ye];ue(me)&&(r[ye]=me.bind(n))}if(s){const ye=s.call(n,n);Se(ye)&&(t.data=ea(ye))}if(yc=!0,i)for(const ye in i){const me=i[ye],Rt=ue(me)?me.bind(n,n):ue(me.get)?me.get.bind(n,n):Jt,Ft=!ue(me)&&ue(me.set)?me.set.bind(n):Jt,Dt=Bt({get:Rt,set:Ft});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Ve=>Dt.value=Ve})}if(c)for(const ye in c)ep(c[ye],r,n,ye);if(l){const ye=ue(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(me=>{ho(me,ye[me])})}f&&dh(f,t,"c");function Ue(ye,me){se(me)?me.forEach(Rt=>ye(Rt.bind(n))):me&&ye(me.bind(n))}if(Ue(Cy,p),Ue(Oy,g),Ue(Ny,v),Ue(Dy,O),Ue(by,N),Ue(Sy,V),Ue(Ly,y),Ue(My,de),Ue(xy,w),Ue(Vy,B),Ue(Zd,K),Ue(ky,T),se(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(me=>{Object.defineProperty(ye,me,{get:()=>n[me],set:Rt=>n[me]=Rt,enumerable:!0})})}else t.exposed||(t.exposed={});fe&&t.render===Jt&&(t.render=fe),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),E&&(t.directives=E),T&&Jd(t)}function Hy(t,e,n=Jt){se(t)&&(t=vc(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Yt(s.from||r,s.default,!0):i=Yt(s.from||r):i=Yt(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function dh(t,e,n){rn(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ep(t,e,n,r){let s=r.includes(".")?zd(n,r):()=>n[r];if(qe(t)){const i=e[t];ue(i)&&fo(s,i)}else if(ue(t))fo(s,t.bind(n));else if(Se(t))if(se(t))t.forEach(i=>ep(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&fo(s,i,t)}}function tp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Oo(l,h,o,!0)),Oo(l,e,o)),Se(e)&&i.set(e,l),l}function Oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oo(t,i,n,!0),s&&s.forEach(o=>Oo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Wy[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Wy={data:ph,props:mh,emits:mh,methods:xs,computed:xs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:xs,directives:xs,watch:Gy,provide:ph,inject:Ky};function ph(t,e){return e?t?function(){return et(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function Ky(t,e){return xs(vc(t),vc(e))}function vc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function xs(t,e){return t?et(Object.create(null),t,e):e}function mh(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:et(Object.create(null),fh(t),fh(e??{})):e}function Gy(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function np(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zy=0;function Qy(t,e){return function(r,s=null){ue(r)||(r=et({},r)),s!=null&&!Se(s)&&(s=null);const i=np(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:zy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Nv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(h,...p)):ue(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const v=h._ceVNode||yt(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(v,f,g),l=!0,h._container=f,f.__vue_app__=h,ia(v.component)}},onUnmount(f){c.push(f)},unmount(){l&&(rn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Kr;Kr=h;try{return f()}finally{Kr=p}}};return h}}let Kr=null;const Jy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Mt(e)}Modifiers`]||t[`${Rr(e)}Modifiers`];function Yy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&Jy(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>qe(f)?f.trim():f)),o.number&&(s=n.map(Yo)));let c,l=r[c=ja(e)]||r[c=ja(Mt(e))];!l&&i&&(l=r[c=ja(Rr(e))]),l&&rn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,rn(h,t,6,s)}}const Xy=new WeakMap;function rp(t,e,n=!1){const r=n?Xy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=h=>{const f=rp(h,e,!0);f&&(c=!0,et(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Se(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):et(o,i),Se(t)&&r.set(t,o),o)}function ra(t,e){return!t||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Rr(e))||Re(t,e))}function gh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:v,ctx:O,inheritAttrs:N}=t,V=Po(t);let W,B;try{if(n.shapeFlag&4){const K=s||r,fe=K;W=zt(h.call(fe,K,f,p,v,g,O)),B=c}else{const K=e;W=zt(K.length>1?K(p,{attrs:c,slots:o,emit:l}):K(p,null)),B=e.props?c:Zy(c)}}catch(K){zs.length=0,ta(K,t,1),W=yt(Yn)}let q=W;if(B&&N!==!1){const K=Object.keys(B),{shapeFlag:fe}=q;K.length&&fe&7&&(i&&K.some(el)&&(B=ev(B,i)),q=Xr(q,B,!1,!0))}return n.dirs&&(q=Xr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&ml(q,n.transition),W=q,Po(V),W}const Zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||zo(n))&&((e||(e={}))[n]=t[n]);return e},ev=(t,e)=>{const n={};for(const r in t)(!el(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_h(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(sp(o,r,g)&&!ra(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?_h(r,o,h):!0:!!o;return!1}function _h(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(sp(e,t,i)&&!ra(n,i))return!0}return!1}function sp(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!hs(r,s):r!==s}function nv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ip={},op=()=>Object.create(ip),ap=t=>Object.getPrototypeOf(t)===ip;function rv(t,e,n,r=!1){const s={},i=op();t.propsDefaults=Object.create(null),cp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ud(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ra(t.emitsOptions,g))continue;const v=e[g];if(l)if(Re(i,g))v!==i[g]&&(i[g]=v,h=!0);else{const O=Mt(g);s[O]=Ec(l,c,O,v,t,!1)}else v!==i[g]&&(i[g]=v,h=!0)}}}else{cp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Rr(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Ec(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&dn(t.attrs,"set","")}function cp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(qs(l))continue;const h=e[l];let f;s&&Re(s,f=Mt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:ra(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ae(n),h=c||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Ec(s,l,p,h[p],t,!Re(h,p))}}return o}function Ec(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ti(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Rr(n))&&(r=!0))}return r}const iv=new WeakMap;function lp(t,e,n=!1){const r=n?iv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[g,v]=lp(p,e,!0);et(o,g),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Se(t)&&r.set(t,qr),qr;if(se(i))for(let f=0;f<i.length;f++){const p=Mt(i[f]);yh(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=Mt(f);if(yh(p)){const g=i[f],v=o[p]=se(g)||ue(g)?{type:g}:et({},g),O=v.type;let N=!1,V=!0;if(se(O))for(let W=0;W<O.length;++W){const B=O[W],q=ue(B)&&B.name;if(q==="Boolean"){N=!0;break}else q==="String"&&(V=!1)}else N=ue(O)&&O.name==="Boolean";v[0]=N,v[1]=V,(N||Re(v,"default"))&&c.push(p)}}const h=[o,c];return Se(t)&&r.set(t,h),h}function yh(t){return t[0]!=="$"&&!qs(t)}const gl=t=>t==="_"||t==="_ctx"||t==="$stable",_l=t=>se(t)?t.map(zt):[zt(t)],ov=(t,e,n)=>{if(e._n)return e;const r=vy((...s)=>_l(e(...s)),n);return r._c=!1,r},up=(t,e,n)=>{const r=t._ctx;for(const s in t){if(gl(s))continue;const i=t[s];if(ue(i))e[s]=ov(s,i,r);else if(i!=null){const o=_l(i);e[s]=()=>o}}},hp=(t,e)=>{const n=_l(e);t.slots.default=()=>n},fp=(t,e,n)=>{for(const r in e)(n||!gl(r))&&(t[r]=e[r])},av=(t,e,n)=>{const r=t.slots=op();if(t.vnode.shapeFlag&32){const s=e._;s?(fp(r,e,n),n&&Td(r,"_",s,!0)):up(e,r)}else e&&hp(t,e)},cv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:fp(s,e,n):(i=!e.$stable,up(e,s)),o=e}else e&&(hp(t,e),o={default:1});if(i)for(const c in s)!gl(c)&&o[c]==null&&delete s[c]},It=dv;function lv(t){return uv(t)}function uv(t,e){const n=Xo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:v=Jt,insertStaticContent:O}=t,N=(_,I,b,D=null,L=null,x=null,G=void 0,H=null,j=!!I.dynamicChildren)=>{if(_===I)return;_&&!Ds(_,I)&&(D=k(_),Ve(_,L,x,!0),_=null),I.patchFlag===-2&&(j=!1,I.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:Q}=I;switch(F){case sa:V(_,I,b,D);break;case Yn:W(_,I,b,D);break;case po:_==null&&B(I,b,D,G);break;case hn:S(_,I,b,D,L,x,G,H,j);break;default:Q&1?fe(_,I,b,D,L,x,G,H,j):Q&6?E(_,I,b,D,L,x,G,H,j):(Q&64||Q&128)&&F.process(_,I,b,D,L,x,G,H,j,Z)}ne!=null&&L?Ws(ne,_&&_.ref,x,I||_,!I):ne==null&&_&&_.ref!=null&&Ws(_.ref,null,x,_,!0)},V=(_,I,b,D)=>{if(_==null)r(I.el=c(I.children),b,D);else{const L=I.el=_.el;I.children!==_.children&&h(L,I.children)}},W=(_,I,b,D)=>{_==null?r(I.el=l(I.children||""),b,D):I.el=_.el},B=(_,I,b,D)=>{[_.el,_.anchor]=O(_.children,I,b,D,_.el,_.anchor)},q=({el:_,anchor:I},b,D)=>{let L;for(;_&&_!==I;)L=g(_),r(_,b,D),_=L;r(I,b,D)},K=({el:_,anchor:I})=>{let b;for(;_&&_!==I;)b=g(_),s(_),_=b;s(I)},fe=(_,I,b,D,L,x,G,H,j)=>{if(I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),_==null)de(I,b,D,L,x,G,H,j);else{const F=_.el&&_.el._isVueCE?_.el:null;try{F&&F._beginPatch(),T(_,I,L,x,G,H,j)}finally{F&&F._endPatch()}}},de=(_,I,b,D,L,x,G,H)=>{let j,F;const{props:ne,shapeFlag:Q,transition:ee,dirs:ie}=_;if(j=_.el=o(_.type,x,ne&&ne.is,ne),Q&8?f(j,_.children):Q&16&&y(_.children,j,null,D,L,Ga(_,x),G,H),ie&&lr(_,null,D,"created"),w(j,_,_.scopeId,G,D),ne){for(const he in ne)he!=="value"&&!qs(he)&&i(j,he,null,ne[he],x,D);"value"in ne&&i(j,"value",null,ne.value,x),(F=ne.onVnodeBeforeMount)&&Kt(F,D,_)}ie&&lr(_,null,D,"beforeMount");const re=hv(L,ee);re&&ee.beforeEnter(j),r(j,I,b),((F=ne&&ne.onVnodeMounted)||re||ie)&&It(()=>{F&&Kt(F,D,_),re&&ee.enter(j),ie&&lr(_,null,D,"mounted")},L)},w=(_,I,b,D,L)=>{if(b&&v(_,b),D)for(let x=0;x<D.length;x++)v(_,D[x]);if(L){let x=L.subTree;if(I===x||gp(x.type)&&(x.ssContent===I||x.ssFallback===I)){const G=L.vnode;w(_,G,G.scopeId,G.slotScopeIds,L.parent)}}},y=(_,I,b,D,L,x,G,H,j=0)=>{for(let F=j;F<_.length;F++){const ne=_[F]=H?fn(_[F]):zt(_[F]);N(null,ne,I,b,D,L,x,G,H)}},T=(_,I,b,D,L,x,G)=>{const H=I.el=_.el;let{patchFlag:j,dynamicChildren:F,dirs:ne}=I;j|=_.patchFlag&16;const Q=_.props||Ce,ee=I.props||Ce;let ie;if(b&&ur(b,!1),(ie=ee.onVnodeBeforeUpdate)&&Kt(ie,b,I,_),ne&&lr(I,_,b,"beforeUpdate"),b&&ur(b,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(H,""),F?A(_.dynamicChildren,F,H,b,D,Ga(I,L),x):G||me(_,I,H,null,b,D,Ga(I,L),x,!1),j>0){if(j&16)R(H,Q,ee,b,L);else if(j&2&&Q.class!==ee.class&&i(H,"class",null,ee.class,L),j&4&&i(H,"style",Q.style,ee.style,L),j&8){const re=I.dynamicProps;for(let he=0;he<re.length;he++){const ve=re[he],Ge=Q[ve],ze=ee[ve];(ze!==Ge||ve==="value")&&i(H,ve,Ge,ze,L,b)}}j&1&&_.children!==I.children&&f(H,I.children)}else!G&&F==null&&R(H,Q,ee,b,L);((ie=ee.onVnodeUpdated)||ne)&&It(()=>{ie&&Kt(ie,b,I,_),ne&&lr(I,_,b,"updated")},D)},A=(_,I,b,D,L,x,G)=>{for(let H=0;H<I.length;H++){const j=_[H],F=I[H],ne=j.el&&(j.type===hn||!Ds(j,F)||j.shapeFlag&198)?p(j.el):b;N(j,F,ne,null,D,L,x,G,!0)}},R=(_,I,b,D,L)=>{if(I!==b){if(I!==Ce)for(const x in I)!qs(x)&&!(x in b)&&i(_,x,I[x],null,L,D);for(const x in b){if(qs(x))continue;const G=b[x],H=I[x];G!==H&&x!=="value"&&i(_,x,H,G,L,D)}"value"in b&&i(_,"value",I.value,b.value,L)}},S=(_,I,b,D,L,x,G,H,j)=>{const F=I.el=_?_.el:c(""),ne=I.anchor=_?_.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:ie}=I;ie&&(H=H?H.concat(ie):ie),_==null?(r(F,b,D),r(ne,b,D),y(I.children||[],b,ne,L,x,G,H,j)):Q>0&&Q&64&&ee&&_.dynamicChildren&&_.dynamicChildren.length===ee.length?(A(_.dynamicChildren,ee,b,L,x,G,H),(I.key!=null||L&&I===L.subTree)&&dp(_,I,!0)):me(_,I,b,ne,L,x,G,H,j)},E=(_,I,b,D,L,x,G,H,j)=>{I.slotScopeIds=H,_==null?I.shapeFlag&512?L.ctx.activate(I,b,D,G,j):ft(I,b,D,L,x,G,j):Nt(_,I,j)},ft=(_,I,b,D,L,x,G)=>{const H=_.component=wv(_,D,L);if(Yd(_)&&(H.ctx.renderer=Z),Rv(H,!1,G),H.asyncDep){if(L&&L.registerDep(H,Ue,G),!_.el){const j=H.subTree=yt(Yn);W(null,j,I,b),_.placeholder=j.el}}else Ue(H,_,I,b,L,x,G)},Nt=(_,I,b)=>{const D=I.component=_.component;if(tv(_,I,b))if(D.asyncDep&&!D.asyncResolved){ye(D,I,b);return}else D.next=I,D.update();else I.el=_.el,D.vnode=I},Ue=(_,I,b,D,L,x,G)=>{const H=()=>{if(_.isMounted){let{next:Q,bu:ee,u:ie,parent:re,vnode:he}=_;{const nt=pp(_);if(nt){Q&&(Q.el=he.el,ye(_,Q,G)),nt.asyncDep.then(()=>{It(()=>{_.isUnmounted||F()},L)});return}}let ve=Q,Ge;ur(_,!1),Q?(Q.el=he.el,ye(_,Q,G)):Q=he,ee&&uo(ee),(Ge=Q.props&&Q.props.onVnodeBeforeUpdate)&&Kt(Ge,re,Q,he),ur(_,!0);const ze=gh(_),Vt=_.subTree;_.subTree=ze,N(Vt,ze,p(Vt.el),k(Vt),_,L,x),Q.el=ze.el,ve===null&&nv(_,ze.el),ie&&It(ie,L),(Ge=Q.props&&Q.props.onVnodeUpdated)&&It(()=>Kt(Ge,re,Q,he),L)}else{let Q;const{el:ee,props:ie}=I,{bm:re,m:he,parent:ve,root:Ge,type:ze}=_,Vt=Ks(I);ur(_,!1),re&&uo(re),!Vt&&(Q=ie&&ie.onVnodeBeforeMount)&&Kt(Q,ve,I),ur(_,!0);{Ge.ce&&Ge.ce._hasShadowRoot()&&Ge.ce._injectChildStyle(ze);const nt=_.subTree=gh(_);N(null,nt,b,D,_,L,x),I.el=nt.el}if(he&&It(he,L),!Vt&&(Q=ie&&ie.onVnodeMounted)){const nt=I;It(()=>Kt(Q,ve,nt),L)}(I.shapeFlag&256||ve&&Ks(ve.vnode)&&ve.vnode.shapeFlag&256)&&_.a&&It(_.a,L),_.isMounted=!0,I=b=D=null}};_.scope.on();const j=_.effect=new Rd(H);_.scope.off();const F=_.update=j.run.bind(j),ne=_.job=j.runIfDirty.bind(j);ne.i=_,ne.id=_.uid,j.scheduler=()=>pl(ne),ur(_,!0),F()},ye=(_,I,b)=>{I.component=_;const D=_.vnode.props;_.vnode=I,_.next=null,sv(_,I.props,D,b),cv(_,I.children,b),Tn(),ch(_),In()},me=(_,I,b,D,L,x,G,H,j=!1)=>{const F=_&&_.children,ne=_?_.shapeFlag:0,Q=I.children,{patchFlag:ee,shapeFlag:ie}=I;if(ee>0){if(ee&128){Ft(F,Q,b,D,L,x,G,H,j);return}else if(ee&256){Rt(F,Q,b,D,L,x,G,H,j);return}}ie&8?(ne&16&&Tt(F,L,x),Q!==F&&f(b,Q)):ne&16?ie&16?Ft(F,Q,b,D,L,x,G,H,j):Tt(F,L,x,!0):(ne&8&&f(b,""),ie&16&&y(Q,b,D,L,x,G,H,j))},Rt=(_,I,b,D,L,x,G,H,j)=>{_=_||qr,I=I||qr;const F=_.length,ne=I.length,Q=Math.min(F,ne);let ee;for(ee=0;ee<Q;ee++){const ie=I[ee]=j?fn(I[ee]):zt(I[ee]);N(_[ee],ie,b,null,L,x,G,H,j)}F>ne?Tt(_,L,x,!0,!1,Q):y(I,b,D,L,x,G,H,j,Q)},Ft=(_,I,b,D,L,x,G,H,j)=>{let F=0;const ne=I.length;let Q=_.length-1,ee=ne-1;for(;F<=Q&&F<=ee;){const ie=_[F],re=I[F]=j?fn(I[F]):zt(I[F]);if(Ds(ie,re))N(ie,re,b,null,L,x,G,H,j);else break;F++}for(;F<=Q&&F<=ee;){const ie=_[Q],re=I[ee]=j?fn(I[ee]):zt(I[ee]);if(Ds(ie,re))N(ie,re,b,null,L,x,G,H,j);else break;Q--,ee--}if(F>Q){if(F<=ee){const ie=ee+1,re=ie<ne?I[ie].el:D;for(;F<=ee;)N(null,I[F]=j?fn(I[F]):zt(I[F]),b,re,L,x,G,H,j),F++}}else if(F>ee)for(;F<=Q;)Ve(_[F],L,x,!0),F++;else{const ie=F,re=F,he=new Map;for(F=re;F<=ee;F++){const Qe=I[F]=j?fn(I[F]):zt(I[F]);Qe.key!=null&&he.set(Qe.key,F)}let ve,Ge=0;const ze=ee-re+1;let Vt=!1,nt=0;const Nn=new Array(ze);for(F=0;F<ze;F++)Nn[F]=0;for(F=ie;F<=Q;F++){const Qe=_[F];if(Ge>=ze){Ve(Qe,L,x,!0);continue}let kt;if(Qe.key!=null)kt=he.get(Qe.key);else for(ve=re;ve<=ee;ve++)if(Nn[ve-re]===0&&Ds(Qe,I[ve])){kt=ve;break}kt===void 0?Ve(Qe,L,x,!0):(Nn[kt-re]=F+1,kt>=nt?nt=kt:Vt=!0,N(Qe,I[kt],b,null,L,x,G,H,j),Ge++)}const ys=Vt?fv(Nn):qr;for(ve=ys.length-1,F=ze-1;F>=0;F--){const Qe=re+F,kt=I[Qe],Bi=I[Qe+1],Cr=Qe+1<ne?Bi.el||mp(Bi):D;Nn[F]===0?N(null,kt,b,Cr,L,x,G,H,j):Vt&&(ve<0||F!==ys[ve]?Dt(kt,b,Cr,2):ve--)}}},Dt=(_,I,b,D,L=null)=>{const{el:x,type:G,transition:H,children:j,shapeFlag:F}=_;if(F&6){Dt(_.component.subTree,I,b,D);return}if(F&128){_.suspense.move(I,b,D);return}if(F&64){G.move(_,I,b,Z);return}if(G===hn){r(x,I,b);for(let Q=0;Q<j.length;Q++)Dt(j[Q],I,b,D);r(_.anchor,I,b);return}if(G===po){q(_,I,b);return}if(D!==2&&F&1&&H)if(D===0)H.beforeEnter(x),r(x,I,b),It(()=>H.enter(x),L);else{const{leave:Q,delayLeave:ee,afterLeave:ie}=H,re=()=>{_.ctx.isUnmounted?s(x):r(x,I,b)},he=()=>{x._isLeaving&&x[Ry](!0),Q(x,()=>{re(),ie&&ie()})};ee?ee(x,re,he):he()}else r(x,I,b)},Ve=(_,I,b,D=!1,L=!1)=>{const{type:x,props:G,ref:H,children:j,dynamicChildren:F,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:ie}=_;if(Q===-2&&(L=!1),H!=null&&(Tn(),Ws(H,null,b,_,!0),In()),ie!=null&&(I.renderCache[ie]=void 0),ne&256){I.ctx.deactivate(_);return}const re=ne&1&&ee,he=!Ks(_);let ve;if(he&&(ve=G&&G.onVnodeBeforeUnmount)&&Kt(ve,I,_),ne&6)bt(_.component,b,D);else{if(ne&128){_.suspense.unmount(b,D);return}re&&lr(_,null,I,"beforeUnmount"),ne&64?_.type.remove(_,I,b,Z,D):F&&!F.hasOnce&&(x!==hn||Q>0&&Q&64)?Tt(F,I,b,!1,!0):(x===hn&&Q&384||!L&&ne&16)&&Tt(j,I,b),D&&ke(_)}(he&&(ve=G&&G.onVnodeUnmounted)||re)&&It(()=>{ve&&Kt(ve,I,_),re&&lr(_,null,I,"unmounted")},b)},ke=_=>{const{type:I,el:b,anchor:D,transition:L}=_;if(I===hn){On(b,D);return}if(I===po){K(_);return}const x=()=>{s(b),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(_.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:H}=L,j=()=>G(b,x);H?H(_.el,x,j):j()}else x()},On=(_,I)=>{let b;for(;_!==I;)b=g(_),s(_),_=b;s(I)},bt=(_,I,b)=>{const{bum:D,scope:L,job:x,subTree:G,um:H,m:j,a:F}=_;vh(j),vh(F),D&&uo(D),L.stop(),x&&(x.flags|=8,Ve(G,_,I,b)),H&&It(H,I),It(()=>{_.isUnmounted=!0},I)},Tt=(_,I,b,D=!1,L=!1,x=0)=>{for(let G=x;G<_.length;G++)Ve(_[G],I,b,D,L)},k=_=>{if(_.shapeFlag&6)return k(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const I=g(_.anchor||_.el),b=I&&I[wy];return b?g(b):I};let Y=!1;const z=(_,I,b)=>{let D;_==null?I._vnode&&(Ve(I._vnode,null,null,!0),D=I._vnode.component):N(I._vnode||null,_,I,null,null,null,b),I._vnode=_,Y||(Y=!0,ch(D),Hd(),Y=!1)},Z={p:N,um:Ve,m:Dt,r:ke,mt:ft,mc:y,pc:me,pbc:A,n:k,o:t};return{render:z,hydrate:void 0,createApp:Qy(z)}}function Ga({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function dp(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=fn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&dp(o,c)),c.type===sa&&(c.patchFlag===-1&&(c=s[i]=fn(c)),c.el=o.el),c.type===Yn&&!c.el&&(c.el=o.el)}}function fv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function pp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pp(e)}function vh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function mp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?mp(e.subTree):null}const gp=t=>t.__isSuspense;function dv(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):yy(t)}const hn=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),Yn=Symbol.for("v-cmt"),po=Symbol.for("v-stc"),zs=[];let Ct=null;function _p(t=!1){zs.push(Ct=t?null:[])}function pv(){zs.pop(),Ct=zs[zs.length-1]||null}let si=1;function No(t,e=!1){si+=t,t<0&&Ct&&e&&(Ct.hasOnce=!0)}function yp(t){return t.dynamicChildren=si>0?Ct||qr:null,pv(),si>0&&Ct&&Ct.push(t),t}function mv(t,e,n,r,s,i){return yp(Ep(t,e,n,r,s,i,!0))}function gv(t,e,n,r,s){return yp(yt(t,e,n,r,s,!0))}function Do(t){return t?t.__v_isVNode===!0:!1}function Ds(t,e){return t.type===e.type&&t.key===e.key}const vp=({key:t})=>t??null,mo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||ut(t)||ue(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function Ep(t,e=null,n=null,r=0,s=null,i=t===hn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vp(e),ref:e&&mo(e),scopeId:Kd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return c?(yl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=qe(n)?8:16),si>0&&!o&&Ct&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ct.push(l),l}const yt=_v;function _v(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===By)&&(t=Yn),Do(t)){const c=Xr(t,e,!0);return n&&yl(c,n),si>0&&!i&&Ct&&(c.shapeFlag&6?Ct[Ct.indexOf(t)]=c:Ct.push(c)),c.patchFlag=-2,c}if(Ov(t)&&(t=t.__vccOpts),e){e=yv(e);let{class:c,style:l}=e;c&&!qe(c)&&(e.class=sl(c)),Se(l)&&(fl(l)&&!se(l)&&(l=et({},l)),e.style=rl(l))}const o=qe(t)?1:gp(t)?128:Ay(t)?64:Se(t)?4:ue(t)?2:0;return Ep(t,e,n,r,s,o,i,!0)}function yv(t){return t?fl(t)||ap(t)?et({},t):t:null}function Xr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Ev(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&vp(h),ref:e&&e.ref?n&&i?se(i)?i.concat(mo(e)):[i,mo(e)]:mo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==hn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xr(t.ssContent),ssFallback:t.ssFallback&&Xr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ml(f,l.clone(f)),f}function vv(t=" ",e=0){return yt(sa,null,t,e)}function fS(t,e){const n=yt(po,null,t);return n.staticCount=e,n}function dS(t="",e=!1){return e?(_p(),gv(Yn,null,t)):yt(Yn,null,t)}function zt(t){return t==null||typeof t=="boolean"?yt(Yn):se(t)?yt(hn,null,t.slice()):Do(t)?fn(t):yt(sa,null,String(t))}function fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xr(t)}function yl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),yl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ap(e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[vv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ev(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=sl([e.class,r.class]));else if(s==="style")e.style=rl([e.style,r.style]);else if(zo(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){rn(t,e,7,[n,r])}const Tv=np();let Iv=0;function wv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Tv,i={uid:Iv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(r,s),emitsOptions:rp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Yy.bind(null,i),t.ce&&t.ce(i),i}let lt=null;const Av=()=>lt||Pt;let Vo,Tc;{const t=Xo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Vo=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),Tc=e("__VUE_SSR_SETTERS__",n=>ii=n)}const Ti=t=>{const e=lt;return Vo(t),t.scope.on(),()=>{t.scope.off(),Vo(e)}},Eh=()=>{lt&&lt.scope.off(),Vo(null)};function Tp(t){return t.vnode.shapeFlag&4}let ii=!1;function Rv(t,e=!1,n=!1){e&&Tc(e);const{props:r,children:s}=t.vnode,i=Tp(t);rv(t,r,i,e),av(t,s,n||e);const o=i?bv(t,e):void 0;return e&&Tc(!1),o}function bv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qy);const{setup:r}=n;if(r){Tn();const s=t.setupContext=r.length>1?Pv(t):null,i=Ti(t),o=Ei(r,t,0,[t.props,s]),c=yd(o);if(In(),i(),(c||t.sp)&&!Ks(t)&&Jd(t),c){if(o.then(Eh,Eh),e)return o.then(l=>{Th(t,l)}).catch(l=>{ta(l,t,0)});t.asyncDep=o}else Th(t,o)}else Ip(t)}function Th(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=jd(e)),Ip(t)}function Ip(t,e,n){const r=t.type;t.render||(t.render=r.render||Jt);{const s=Ti(t);Tn();try{$y(t)}finally{In(),s()}}}const Sv={get(t,e){return at(t,"get",""),t[e]}};function Pv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sv),slots:t.slots,emit:t.emit,expose:e}}function ia(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jd(ay(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}})):t.proxy}function Cv(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Ov(t){return ue(t)&&"__vccOpts"in t}const Bt=(t,e)=>dy(t,e,ii);function wp(t,e,n){try{No(-1);const r=arguments.length;return r===2?Se(e)&&!se(e)?Do(e)?yt(t,null,[e]):yt(t,e):yt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Do(n)&&(n=[n]),yt(t,e,n))}finally{No(1)}}const Nv="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ic;const Ih=typeof window<"u"&&window.trustedTypes;if(Ih)try{Ic=Ih.createPolicy("vue",{createHTML:t=>t})}catch{}const Ap=Ic?t=>Ic.createHTML(t):t=>t,Dv="http://www.w3.org/2000/svg",Vv="http://www.w3.org/1998/Math/MathML",un=typeof document<"u"?document:null,wh=un&&un.createElement("template"),kv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?un.createElementNS(Dv,t):e==="mathml"?un.createElementNS(Vv,t):n?un.createElement(t,{is:n}):un.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>un.createTextNode(t),createComment:t=>un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wh.innerHTML=Ap(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=wh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xv=Symbol("_vtc");function Mv(t,e,n){const r=t[xv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ah=Symbol("_vod"),Lv=Symbol("_vsh"),Fv=Symbol(""),Uv=/(?:^|;)\s*display\s*:/;function Bv(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&go(r,c,"")}else for(const o in e)n[o]==null&&go(r,o,"");for(const o in n)o==="display"&&(i=!0),go(r,o,n[o])}else if(s){if(e!==n){const o=r[Fv];o&&(n+=";"+o),r.cssText=n,i=Uv.test(n)}}else e&&t.removeAttribute("style");Ah in t&&(t[Ah]=i?r.display:"",t[Lv]&&(r.display="none"))}const Rh=/\s*!important$/;function go(t,e,n){if(se(n))n.forEach(r=>go(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jv(t,e);Rh.test(n)?t.setProperty(Rr(r),n.replace(Rh,""),"important"):t[r]=n}}const bh=["Webkit","Moz","ms"],za={};function jv(t,e){const n=za[e];if(n)return n;let r=Mt(e);if(r!=="filter"&&r in t)return za[e]=r;r=Jo(r);for(let s=0;s<bh.length;s++){const i=bh[s]+r;if(i in t)return za[e]=i}return e}const Sh="http://www.w3.org/1999/xlink";function Ph(t,e,n,r,s,i=F_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Sh,e.slice(6,e.length)):t.setAttributeNS(Sh,e,n):n==null||i&&!Id(n)?t.removeAttribute(e):t.setAttribute(e,i?"":nn(n)?String(n):n)}function Ch(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ap(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Id(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Bn(t,e,n,r){t.addEventListener(e,n,r)}function qv(t,e,n,r){t.removeEventListener(e,n,r)}const Oh=Symbol("_vei");function $v(t,e,n,r,s=null){const i=t[Oh]||(t[Oh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Hv(e);if(r){const h=i[e]=Gv(r,s);Bn(t,c,h,l)}else o&&(qv(t,c,o,l),i[e]=void 0)}}const Nh=/(?:Once|Passive|Capture)$/;function Hv(t){let e;if(Nh.test(t)){e={};let r;for(;r=t.match(Nh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let Qa=0;const Wv=Promise.resolve(),Kv=()=>Qa||(Wv.then(()=>Qa=0),Qa=Date.now());function Gv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;rn(zv(r,n.value),e,5,[r])};return n.value=t,n.attached=Kv(),n}function zv(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Dh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Qv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Mv(t,r,o):e==="style"?Bv(t,n,r):zo(e)?el(e)||$v(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jv(t,e,r,o))?(Ch(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ph(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?Ch(t,Mt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ph(t,e,r,o))};function Jv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Dh(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Dh(e)&&qe(n)?!1:e in t}const Zr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>uo(e,n):e};function Yv(t){t.target.composing=!0}function Vh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yn=Symbol("_assign");function kh(t,e,n){return e&&(t=t.trim()),n&&(t=Yo(t)),t}const pS={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[yn]=Zr(s);const i=r||s.props&&s.props.type==="number";Bn(t,e?"change":"input",o=>{o.target.composing||t[yn](kh(t.value,n,i))}),(n||i)&&Bn(t,"change",()=>{t.value=kh(t.value,n,i)}),e||(Bn(t,"compositionstart",Yv),Bn(t,"compositionend",Vh),Bn(t,"change",Vh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[yn]=Zr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Yo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},mS={deep:!0,created(t,e,n){t[yn]=Zr(n),Bn(t,"change",()=>{const r=t._modelValue,s=oi(t),i=t.checked,o=t[yn];if(se(r)){const c=il(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),o(h)}}else if(us(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Rp(t,i))})},mounted:xh,beforeUpdate(t,e,n){t[yn]=Zr(n),xh(t,e,n)}};function xh(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(se(e))s=il(e,r.props.value)>-1;else if(us(e))s=e.has(r.props.value);else{if(e===n)return;s=hs(e,Rp(t,!0))}t.checked!==s&&(t.checked=s)}const gS={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=us(e);Bn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Yo(oi(o)):oi(o));t[yn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,dl(()=>{t._assigning=!1})}),t[yn]=Zr(r)},mounted(t,{value:e}){Mh(t,e)},beforeUpdate(t,e,n){t[yn]=Zr(n)},updated(t,{value:e}){t._assigning||Mh(t,e)}};function Mh(t,e){const n=t.multiple,r=se(e);if(!(n&&!r&&!us(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=oi(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=il(e,c)>-1}else o.selected=e.has(c);else if(hs(oi(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function oi(t){return"_value"in t?t._value:t.value}function Rp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Xv=["ctrl","shift","alt","meta"],Zv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Xv.some(n=>t[`${n}Key`]&&!e.includes(n))},_S=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Zv[e[o]];if(c&&c(s,e))return}return t(s,...i)})},eE=et({patchProp:Qv},kv);let Lh;function tE(){return Lh||(Lh=lv(eE))}const nE=(...t)=>{const e=tE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sE(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sE(t){return qe(t)?document.querySelector(t):t}const iE={id:"app-root"},oE={__name:"App",setup(t){return(e,n)=>{const r=Uy("router-view");return _p(),mv("div",iE,[yt(r)])}}},aE="modulepreload",cE=function(t){return"/franchiseApp/"+t},Fh={},pt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=cE(l),l in Fh)return;Fh[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":aE,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,v)=>{p.addEventListener("load",g),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Lr=typeof document<"u";function bp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&bp(t.default)}const we=Object.assign;function Ja(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const Qs=()=>{},$t=Array.isArray;function Uh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Sp=/#/g,uE=/&/g,hE=/\//g,fE=/=/g,dE=/\?/g,Pp=/\+/g,pE=/%5B/g,mE=/%5D/g,Cp=/%5E/g,gE=/%60/g,Op=/%7B/g,_E=/%7C/g,Np=/%7D/g,yE=/%20/g;function vl(t){return t==null?"":encodeURI(""+t).replace(_E,"|").replace(pE,"[").replace(mE,"]")}function vE(t){return vl(t).replace(Op,"{").replace(Np,"}").replace(Cp,"^")}function wc(t){return vl(t).replace(Pp,"%2B").replace(yE,"+").replace(Sp,"%23").replace(uE,"%26").replace(gE,"`").replace(Op,"{").replace(Np,"}").replace(Cp,"^")}function EE(t){return wc(t).replace(fE,"%3D")}function TE(t){return vl(t).replace(Sp,"%23").replace(dE,"%3F")}function IE(t){return TE(t).replace(hE,"%2F")}function ai(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const wE=/\/$/,AE=t=>t.replace(wE,"");function Ya(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=PE(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:ai(o)}}function RE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&es(e.matched[r],n.matched[s])&&Dp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!SE(t[n],e[n]))return!1;return!0}function SE(t,e){return $t(t)?jh(t,e):$t(e)?jh(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function jh(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function PE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ac=function(t){return t.pop="pop",t.push="push",t}({}),Xa=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function CE(t){if(!t)if(Lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),AE(t)}const OE=/^[^#]+#/;function NE(t,e){return t.replace(OE,"#")+e}function DE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const oa=()=>({left:window.scrollX,top:window.scrollY});function VE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=DE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qh(t,e){return(history.state?history.state.position-e:-1)+t}const Rc=new Map;function kE(t,e){Rc.set(t,e)}function xE(t){const e=Rc.get(t);return Rc.delete(t),e}function ME(t){return typeof t=="string"||t&&typeof t=="object"}function Vp(t){return typeof t=="string"||typeof t=="symbol"}let Le=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const kp=Symbol("");Le.MATCHER_NOT_FOUND+"",Le.NAVIGATION_GUARD_REDIRECT+"",Le.NAVIGATION_ABORTED+"",Le.NAVIGATION_CANCELLED+"",Le.NAVIGATION_DUPLICATED+"";function ts(t,e){return we(new Error,{type:t,[kp]:!0},e)}function ln(t,e){return t instanceof Error&&kp in t&&(e==null||!!(t.type&e))}const LE=["params","query","hash"];function FE(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of LE)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function UE(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Pp," "),i=s.indexOf("="),o=ai(i<0?s:s.slice(0,i)),c=i<0?null:ai(s.slice(i+1));if(o in e){let l=e[o];$t(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function $h(t){let e="";for(let n in t){const r=t[n];if(n=EE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(s=>s&&wc(s)):[r&&wc(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function BE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jE=Symbol(""),Hh=Symbol(""),aa=Symbol(""),xp=Symbol(""),bc=Symbol("");function Vs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Un(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(ts(Le.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):ME(g)?l(ts(Le.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function Za(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(bp(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Un(h,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=lE(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const g=(p.__vccOpts||p)[e];return g&&Un(g,n,r,o,c,s)()}))}}return i}function qE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>es(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>es(h,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $E=()=>location.protocol+"//"+location.host;function Mp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),Bh(c,"")}return Bh(n,t)+r+s}function HE(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const v=Mp(t,location),O=n.value,N=e.value;let V=0;if(g){if(n.value=v,e.value=g,o&&o===O){o=null;return}V=N?g.position-N.position:0}else r(v);s.forEach(W=>{W(n.value,O,{delta:V,type:Ac.pop,direction:V?V>0?Xa.forward:Xa.back:Xa.unknown})})};function l(){o=n.value}function h(g){s.push(g);const v=()=>{const O=s.indexOf(g);O>-1&&s.splice(O,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(we({},g.state,{scroll:oa()}),"")}}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:h,destroy:p}}function Wh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?oa():null}}function WE(t){const{history:e,location:n}=window,r={value:Mp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:$E()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(v){console.error(v),n[f?"replace":"assign"](g)}}function o(l,h){i(l,we({},e.state,Wh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=l}function c(l,h){const f=we({},s.value,e.state,{forward:l,scroll:oa()});i(f.current,f,!0),i(l,we({},Wh(r.value,l,null),{position:f.position+1},h),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function KE(t){t=CE(t);const e=WE(t),n=HE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:NE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function GE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),KE(t)}let dr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var He=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(He||{});const zE={type:dr.Static,value:""},QE=/[a-zA-Z0-9_]/;function JE(t){if(!t)return[[]];if(t==="/")return[[zE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=He.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===He.Static?i.push({type:dr.Static,value:h}):n===He.Param||n===He.ParamRegExp||n===He.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:dr.Param,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==He.ParamRegExp){r=n,n=He.EscapeNext;continue}switch(n){case He.Static:l==="/"?(h&&p(),o()):l===":"?(p(),n=He.Param):g();break;case He.EscapeNext:g(),n=r;break;case He.Param:l==="("?n=He.ParamRegExp:QE.test(l)?g():(p(),n=He.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case He.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=He.ParamRegExpEnd:f+=l;break;case He.ParamRegExpEnd:p(),n=He.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===He.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const Kh="[^/]+?",YE={sensitive:!1,strict:!1,start:!0,end:!0};var gt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(gt||{});const XE=/[.+*?^${}()[\]/\\]/g;function ZE(t,e){const n=we({},YE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[gt.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let v=gt.Segment+(n.sensitive?gt.BonusCaseSensitive:0);if(g.type===dr.Static)p||(s+="/"),s+=g.value.replace(XE,"\\$&"),v+=gt.Static;else if(g.type===dr.Param){const{value:O,repeatable:N,optional:V,regexp:W}=g;i.push({name:O,repeatable:N,optional:V});const B=W||Kh;if(B!==Kh){v+=gt.BonusCustomRegExp;try{`${B}`}catch(K){throw new Error(`Invalid custom RegExp for param "${O}" (${B}): `+K.message)}}let q=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(q=V&&h.length<2?`(?:/${q})`:"/"+q),V&&(q+="?"),s+=q,v+=gt.Dynamic,V&&(v+=gt.BonusOptional),N&&(v+=gt.BonusRepeatable),B===".*"&&(v+=gt.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=gt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const v=f[g]||"",O=i[g-1];p[O.name]=v&&O.repeatable?v.split("/"):v}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of g)if(v.type===dr.Static)f+=v.value;else if(v.type===dr.Param){const{value:O,repeatable:N,optional:V}=v,W=O in h?h[O]:"";if($t(W)&&!N)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const B=$t(W)?W.join("/"):W;if(!B)if(V)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);f+=B}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function eT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===gt.Static+gt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===gt.Static+gt.Segment?1:-1:0}function Lp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=eT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Gh(r))return 1;if(Gh(s))return-1}return s.length-r.length}function Gh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tT={strict:!1,end:!0,sensitive:!1};function nT(t,e,n){const r=ZE(JE(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function rT(t,e){const n=[],r=new Map;e=Uh(tT,e);function s(p){return r.get(p)}function i(p,g,v){const O=!v,N=Qh(p);N.aliasOf=v&&v.record;const V=Uh(e,p),W=[N];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const fe of K)W.push(Qh(we({},N,{components:v?v.record.components:N.components,path:fe,aliasOf:v?v.record:N})))}let B,q;for(const K of W){const{path:fe}=K;if(g&&fe[0]!=="/"){const de=g.record.path,w=de[de.length-1]==="/"?"":"/";K.path=g.record.path+(fe&&w+fe)}if(B=nT(K,g,V),v?v.alias.push(B):(q=q||B,q!==B&&q.alias.push(B),O&&p.name&&!Jh(B)&&o(p.name)),Fp(B)&&l(B),N.children){const de=N.children;for(let w=0;w<de.length;w++)i(de[w],B,v&&v.children[w])}v=v||B}return q?()=>{o(q)}:Qs}function o(p){if(Vp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=oT(p,n);n.splice(g,0,p),p.record.name&&!Jh(p)&&r.set(p.record.name,p)}function h(p,g){let v,O={},N,V;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw ts(Le.MATCHER_NOT_FOUND,{location:p});V=v.record.name,O=we(zh(g.params,v.keys.filter(q=>!q.optional).concat(v.parent?v.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&zh(p.params,v.keys.map(q=>q.name))),N=v.stringify(O)}else if(p.path!=null)N=p.path,v=n.find(q=>q.re.test(N)),v&&(O=v.parse(N),V=v.record.name);else{if(v=g.name?r.get(g.name):n.find(q=>q.re.test(g.path)),!v)throw ts(Le.MATCHER_NOT_FOUND,{location:p,currentLocation:g});V=v.record.name,O=we({},g.params,p.params),N=v.stringify(O)}const W=[];let B=v;for(;B;)W.unshift(B.record),B=B.parent;return{name:V,path:N,params:O,matched:W,meta:iT(W)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function zh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:sT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function sT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Jh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function oT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Lp(t,e[i])<0?r=i:n=i+1}const s=aT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function aT(t){let e=t;for(;e=e.parent;)if(Fp(e)&&Lp(t,e)===0)return e}function Fp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Yh(t){const e=Yt(aa),n=Yt(xp),r=Bt(()=>{const l=Hr(t.to);return e.resolve(l)}),s=Bt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(es.bind(null,f));if(g>-1)return g;const v=Xh(l[h-2]);return h>1&&Xh(f)===v&&p[p.length-1].path!==v?p.findIndex(es.bind(null,l[h-2])):g}),i=Bt(()=>s.value>-1&&fT(n.params,r.value.params)),o=Bt(()=>s.value>-1&&s.value===n.matched.length-1&&Dp(n.params,r.value.params));function c(l={}){if(hT(l)){const h=e[Hr(t.replace)?"replace":"push"](Hr(t.to)).catch(Qs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function cT(t){return t.length===1?t[0]:t}const lT=Qd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Yh,setup(t,{slots:e}){const n=ea(Yh(t)),{options:r}=Yt(aa),s=Bt(()=>({[Zh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&cT(e.default(n));return t.custom?i:wp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),uT=lT;function hT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Xh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zh=(t,e,n)=>t??e??n,dT=Qd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Yt(bc),s=Bt(()=>t.route||r.value),i=Yt(Hh,0),o=Bt(()=>{let h=Hr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Bt(()=>s.value.matched[o.value]);ho(Hh,Bt(()=>o.value+1)),ho(jE,c),ho(bc,s);const l=cy();return fo(()=>[l.value,c.value,t.name],([h,f,p],[g,v,O])=>{f&&(f.instances[p]=h,v&&v!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),h&&f&&(!v||!es(f,v)||!g)&&(f.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return ef(n.default,{Component:g,route:h});const v=p.props[f],O=v?v===!0?h.params:typeof v=="function"?v(h):v:null,V=wp(g,we({},O,e,{onVnodeUnmounted:W=>{W.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return ef(n.default,{Component:V,route:h})||V}}});function ef(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pT=dT;function mT(t){const e=rT(t.routes,t),n=t.parseQuery||UE,r=t.stringifyQuery||$h,s=t.history,i=Vs(),o=Vs(),c=Vs(),l=ly(xn);let h=xn;Lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ja.bind(null,k=>""+k),p=Ja.bind(null,IE),g=Ja.bind(null,ai);function v(k,Y){let z,Z;return Vp(k)?(z=e.getRecordMatcher(k),Z=Y):Z=k,e.addRoute(Z,z)}function O(k){const Y=e.getRecordMatcher(k);Y&&e.removeRoute(Y)}function N(){return e.getRoutes().map(k=>k.record)}function V(k){return!!e.getRecordMatcher(k)}function W(k,Y){if(Y=we({},Y||l.value),typeof k=="string"){const b=Ya(n,k,Y.path),D=e.resolve({path:b.path},Y),L=s.createHref(b.fullPath);return we(b,D,{params:g(D.params),hash:ai(b.hash),redirectedFrom:void 0,href:L})}let z;if(k.path!=null)z=we({},k,{path:Ya(n,k.path,Y.path).path});else{const b=we({},k.params);for(const D in b)b[D]==null&&delete b[D];z=we({},k,{params:p(b)}),Y.params=p(Y.params)}const Z=e.resolve(z,Y),pe=k.hash||"";Z.params=f(g(Z.params));const _=RE(r,we({},k,{hash:vE(pe),path:Z.path})),I=s.createHref(_);return we({fullPath:_,hash:pe,query:r===$h?BE(k.query):k.query||{}},Z,{redirectedFrom:void 0,href:I})}function B(k){return typeof k=="string"?Ya(n,k,l.value.path):we({},k)}function q(k,Y){if(h!==k)return ts(Le.NAVIGATION_CANCELLED,{from:Y,to:k})}function K(k){return w(k)}function fe(k){return K(we(B(k),{replace:!0}))}function de(k,Y){const z=k.matched[k.matched.length-1];if(z&&z.redirect){const{redirect:Z}=z;let pe=typeof Z=="function"?Z(k,Y):Z;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=B(pe):{path:pe},pe.params={}),we({query:k.query,hash:k.hash,params:pe.path!=null?{}:k.params},pe)}}function w(k,Y){const z=h=W(k),Z=l.value,pe=k.state,_=k.force,I=k.replace===!0,b=de(z,Z);if(b)return w(we(B(b),{state:typeof b=="object"?we({},pe,b.state):pe,force:_,replace:I}),Y||z);const D=z;D.redirectedFrom=Y;let L;return!_&&bE(r,Z,z)&&(L=ts(Le.NAVIGATION_DUPLICATED,{to:D,from:Z}),Dt(Z,Z,!0,!1)),(L?Promise.resolve(L):A(D,Z)).catch(x=>ln(x)?ln(x,Le.NAVIGATION_GUARD_REDIRECT)?x:Ft(x):me(x,D,Z)).then(x=>{if(x){if(ln(x,Le.NAVIGATION_GUARD_REDIRECT))return w(we({replace:I},B(x.to),{state:typeof x.to=="object"?we({},pe,x.to.state):pe,force:_}),Y||D)}else x=S(D,Z,!0,I,pe);return R(D,Z,x),x})}function y(k,Y){const z=q(k,Y);return z?Promise.reject(z):Promise.resolve()}function T(k){const Y=On.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(k):k()}function A(k,Y){let z;const[Z,pe,_]=qE(k,Y);z=Za(Z.reverse(),"beforeRouteLeave",k,Y);for(const b of Z)b.leaveGuards.forEach(D=>{z.push(Un(D,k,Y))});const I=y.bind(null,k,Y);return z.push(I),Tt(z).then(()=>{z=[];for(const b of i.list())z.push(Un(b,k,Y));return z.push(I),Tt(z)}).then(()=>{z=Za(pe,"beforeRouteUpdate",k,Y);for(const b of pe)b.updateGuards.forEach(D=>{z.push(Un(D,k,Y))});return z.push(I),Tt(z)}).then(()=>{z=[];for(const b of _)if(b.beforeEnter)if($t(b.beforeEnter))for(const D of b.beforeEnter)z.push(Un(D,k,Y));else z.push(Un(b.beforeEnter,k,Y));return z.push(I),Tt(z)}).then(()=>(k.matched.forEach(b=>b.enterCallbacks={}),z=Za(_,"beforeRouteEnter",k,Y,T),z.push(I),Tt(z))).then(()=>{z=[];for(const b of o.list())z.push(Un(b,k,Y));return z.push(I),Tt(z)}).catch(b=>ln(b,Le.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function R(k,Y,z){c.list().forEach(Z=>T(()=>Z(k,Y,z)))}function S(k,Y,z,Z,pe){const _=q(k,Y);if(_)return _;const I=Y===xn,b=Lr?history.state:{};z&&(Z||I?s.replace(k.fullPath,we({scroll:I&&b&&b.scroll},pe)):s.push(k.fullPath,pe)),l.value=k,Dt(k,Y,z,I),Ft()}let E;function ft(){E||(E=s.listen((k,Y,z)=>{if(!bt.listening)return;const Z=W(k),pe=de(Z,bt.currentRoute.value);if(pe){w(we(pe,{replace:!0,force:!0}),Z).catch(Qs);return}h=Z;const _=l.value;Lr&&kE(qh(_.fullPath,z.delta),oa()),A(Z,_).catch(I=>ln(I,Le.NAVIGATION_ABORTED|Le.NAVIGATION_CANCELLED)?I:ln(I,Le.NAVIGATION_GUARD_REDIRECT)?(w(we(B(I.to),{force:!0}),Z).then(b=>{ln(b,Le.NAVIGATION_ABORTED|Le.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===Ac.pop&&s.go(-1,!1)}).catch(Qs),Promise.reject()):(z.delta&&s.go(-z.delta,!1),me(I,Z,_))).then(I=>{I=I||S(Z,_,!1),I&&(z.delta&&!ln(I,Le.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===Ac.pop&&ln(I,Le.NAVIGATION_ABORTED|Le.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(Z,_,I)}).catch(Qs)}))}let Nt=Vs(),Ue=Vs(),ye;function me(k,Y,z){Ft(k);const Z=Ue.list();return Z.length?Z.forEach(pe=>pe(k,Y,z)):console.error(k),Promise.reject(k)}function Rt(){return ye&&l.value!==xn?Promise.resolve():new Promise((k,Y)=>{Nt.add([k,Y])})}function Ft(k){return ye||(ye=!k,ft(),Nt.list().forEach(([Y,z])=>k?z(k):Y()),Nt.reset()),k}function Dt(k,Y,z,Z){const{scrollBehavior:pe}=t;if(!Lr||!pe)return Promise.resolve();const _=!z&&xE(qh(k.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return dl().then(()=>pe(k,Y,_)).then(I=>I&&VE(I)).catch(I=>me(I,k,Y))}const Ve=k=>s.go(k);let ke;const On=new Set,bt={currentRoute:l,listening:!0,addRoute:v,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:N,resolve:W,options:t,push:K,replace:fe,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ue.add,isReady:Rt,install(k){k.component("RouterLink",uT),k.component("RouterView",pT),k.config.globalProperties.$router=bt,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Hr(l)}),Lr&&!ke&&l.value===xn&&(ke=!0,K(s.location).catch(Z=>{}));const Y={};for(const Z in xn)Object.defineProperty(Y,Z,{get:()=>l.value[Z],enumerable:!0});k.provide(aa,bt),k.provide(xp,Ud(Y)),k.provide(bc,l);const z=k.unmount;On.add(k),k.unmount=function(){On.delete(k),On.size<1&&(h=xn,E&&E(),E=null,l.value=xn,ke=!1,ye=!1),z()}}};function Tt(k){return k.reduce((Y,z)=>Y.then(()=>T(z)),Promise.resolve())}return bt}function yS(){return Yt(aa)}var tf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,v=h&63;l||(v=64,o||(g=64)),r.push(n[f],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Up(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new _T;const g=i<<2|c>>4;if(r.push(g),h!==64){const v=c<<4&240|h>>2;if(r.push(v),p!==64){const O=h<<6&192|p;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _T extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yT=function(t){const e=Up(t);return Bp.encodeByteArray(e,!0)},ko=function(t){return yT(t).replace(/\./g,"")},jp=function(t){try{return Bp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=()=>vT().__FIREBASE_DEFAULTS__,TT=()=>{if(typeof process>"u"||typeof tf>"u")return;const t=tf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jp(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return ET()||TT()||IT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qp=t=>{var e,n;return(n=(e=ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wT=t=>{const e=qp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$p=()=>{var t;return(t=ca())===null||t===void 0?void 0:t.config},Hp=t=>{var e;return(e=ca())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function ST(){var t;const e=(t=ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NT(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DT(){return!ST()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VT(){try{return typeof indexedDB=="object"}catch{return!1}}function kT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xT,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?MT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Cn(s,c,r)}}function MT(t,e){return t.replace(LT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LT=/\{\$([^}]+)}/g;function FT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nf(i)&&nf(o)){if(!xo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UT(t,e){const n=new BT(t,e);return n.subscribe.bind(n)}class BT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ec),s.error===void 0&&(s.error=ec),s.complete===void 0&&(s.complete=ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new AT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HT(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$T(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $T(t){return t===fr?void 0:t}function HT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const KT={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},GT=_e.INFO,zT={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},QT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class El{constructor(e){this.name=e,this._logLevel=GT,this._logHandler=QT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const JT=(t,e)=>e.some(n=>t instanceof n);let rf,sf;function YT(){return rf||(rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XT(){return sf||(sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wp=new WeakMap,Sc=new WeakMap,Kp=new WeakMap,tc=new WeakMap,Tl=new WeakMap;function ZT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wp.set(n,t)}).catch(()=>{}),Tl.set(e,t),e}function eI(t){if(Sc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sc.set(t,e)}let Pc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tI(t){Pc=t(Pc)}function nI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nc(this),e,...n);return Kp.set(r,e.sort?e.sort():[e]),Gn(r)}:XT().includes(t)?function(...e){return t.apply(nc(this),e),Gn(Wp.get(this))}:function(...e){return Gn(t.apply(nc(this),e))}}function rI(t){return typeof t=="function"?nI(t):(t instanceof IDBTransaction&&eI(t),JT(t,YT())?new Proxy(t,Pc):t)}function Gn(t){if(t instanceof IDBRequest)return ZT(t);if(tc.has(t))return tc.get(t);const e=rI(t);return e!==t&&(tc.set(t,e),Tl.set(e,t)),e}const nc=t=>Tl.get(t);function sI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const iI=["get","getKey","getAll","getAllKeys","count"],oI=["put","add","delete","clear"],rc=new Map;function of(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=oI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||iI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return rc.set(e,i),i}tI(t=>({...t,get:(e,n,r)=>of(e,n)||t.get(e,n,r),has:(e,n)=>!!of(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cc="@firebase/app",af="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new El("@firebase/app"),lI="@firebase/app-compat",uI="@firebase/analytics-compat",hI="@firebase/analytics",fI="@firebase/app-check-compat",dI="@firebase/app-check",pI="@firebase/auth",mI="@firebase/auth-compat",gI="@firebase/database",_I="@firebase/data-connect",yI="@firebase/database-compat",vI="@firebase/functions",EI="@firebase/functions-compat",TI="@firebase/installations",II="@firebase/installations-compat",wI="@firebase/messaging",AI="@firebase/messaging-compat",RI="@firebase/performance",bI="@firebase/performance-compat",SI="@firebase/remote-config",PI="@firebase/remote-config-compat",CI="@firebase/storage",OI="@firebase/storage-compat",NI="@firebase/firestore",DI="@firebase/vertexai-preview",VI="@firebase/firestore-compat",kI="firebase",xI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="[DEFAULT]",MI={[Cc]:"fire-core",[lI]:"fire-core-compat",[hI]:"fire-analytics",[uI]:"fire-analytics-compat",[dI]:"fire-app-check",[fI]:"fire-app-check-compat",[pI]:"fire-auth",[mI]:"fire-auth-compat",[gI]:"fire-rtdb",[_I]:"fire-data-connect",[yI]:"fire-rtdb-compat",[vI]:"fire-fn",[EI]:"fire-fn-compat",[TI]:"fire-iid",[II]:"fire-iid-compat",[wI]:"fire-fcm",[AI]:"fire-fcm-compat",[RI]:"fire-perf",[bI]:"fire-perf-compat",[SI]:"fire-rc",[PI]:"fire-rc-compat",[CI]:"fire-gcs",[OI]:"fire-gcs-compat",[NI]:"fire-fst",[VI]:"fire-fst-compat",[DI]:"fire-vertex","fire-js":"fire-js",[kI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map,Nc=new Map,Dc=new Map;function cf(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Dc.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of vr.values())cf(n,t);for(const n of Nc.values())cf(n,t);return!0}function Il(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new Ii("app","Firebase",LI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=xI;function Gp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=$p()),!n)throw zn.create("no-options");const i=vr.get(s);if(i){if(xo(n,i.options)&&xo(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const o=new WT(s);for(const l of Dc.values())o.addComponent(l);const c=new FI(n,r,o);return vr.set(s,c),c}function zp(t=Oc){const e=vr.get(t);if(!e&&t===Oc&&$p())return Gp();if(!e)throw zn.create("no-app",{appName:t});return e}function vS(){return Array.from(vr.values())}async function ES(t){let e=!1;const n=t.name;vr.has(n)?(e=!0,vr.delete(n)):Nc.has(n)&&t.decRefCount()<=0&&(Nc.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Qn(t,e,n){var r;let s=(r=MI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(c.join(" "));return}ns(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="firebase-heartbeat-database",BI=1,ci="firebase-heartbeat-store";let sc=null;function Qp(){return sc||(sc=sI(UI,BI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),sc}async function jI(t){try{const n=(await Qp()).transaction(ci),r=await n.objectStore(ci).get(Jp(t));return await n.done,r}catch(e){if(e instanceof Cn)An.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function lf(t,e){try{const r=(await Qp()).transaction(ci,"readwrite");await r.objectStore(ci).put(e,Jp(t)),await r.done}catch(n){if(n instanceof Cn)An.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function Jp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1024,$I=30*24*60*60*1e3;class HI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=uf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=$I}),this._storage.overwrite(this._heartbeatsCache))}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uf(),{heartbeatsToSend:r,unsentEntries:s}=WI(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return An.warn(n),""}}}function uf(){return new Date().toISOString().substring(0,10)}function WI(t,e=qI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VT()?kT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hf(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){ns(new yr("platform-logger",e=>new aI(e),"PRIVATE")),ns(new yr("heartbeat",e=>new HI(e),"PRIVATE")),Qn(Cc,af,t),Qn(Cc,af,"esm2017"),Qn("fire-js","")}GI("");var zI="firebase",QI="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(zI,QI,"app");function wl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Yp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JI=Yp,Xp=new Ii("auth","Firebase",Yp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new El("@firebase/auth");function YI(t,...e){Mo.logLevel<=_e.WARN&&Mo.warn(`Auth (${fs}): ${t}`,...e)}function _o(t,...e){Mo.logLevel<=_e.ERROR&&Mo.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Al(t,...e)}function Xt(t,...e){return Al(t,...e)}function Zp(t,e,n){const r=Object.assign(Object.assign({},JI()),{[e]:n});return new Ii("auth","Firebase",r).create(e,{appName:t.name})}function vn(t){return Zp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Al(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xp.create(t,...e)}function oe(t,e,...n){if(!t)throw Al(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function Rn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XI(){return ff()==="http:"||ff()==="https:"}function ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XI()||CT()||"connection"in navigator)?navigator.onLine:!0}function ew(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=bT()||OT()}get(){return ZI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=new Ai(3e4,6e4);function tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return tm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=wi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return PT()||(h.referrerPolicy="no-referrer"),em.fetch()(nm(t,t.config.apiHost,n,c),h)})}async function tm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tw),e);try{const s=new sw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw io(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zp(t,f,h);Ht(t,f)}}catch(s){if(s instanceof Cn)throw s;Ht(t,"network-request-failed",{message:String(s)})}}async function Ri(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Rl(t.config,s):`${t.config.apiScheme}://${s}`}function rw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),nw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xt(t,e,r);return s.customData._tokenResponse=n,s}function df(t){return t!==void 0&&t.enterprise!==void 0}class iw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ow(t,e){return nr(t,"GET","/v2/recaptchaConfig",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function rm(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cw(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=bl(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Js(ic(s.auth_time)),issuedAtTime:Js(ic(s.iat)),expirationTime:Js(ic(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ic(t){return Number(t)*1e3}function bl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=jp(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function pf(t){const e=bl(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&lw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await li(t,rm(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sm(i.providerUserInfo):[],c=fw(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new kc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function hw(t){const e=$e(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sm(t){return t.map(e=>{var{providerId:n}=e,r=wl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(t,e){const n=await tm(t,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=nm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",em.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pw(t,e){return nr(t,"POST","/v2/accounts:revokeToken",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=pf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Gr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cw(this,e)}reload(){return hw(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await li(this,aw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,O=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,V=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,W=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:K,isAnonymous:fe,providerData:de,stsTokenManager:w}=n;oe(q&&w,e,"internal-error");const y=Gr.fromJSON(this.name,w);oe(typeof q=="string",e,"internal-error"),Mn(p,e.name),Mn(g,e.name),oe(typeof K=="boolean",e,"internal-error"),oe(typeof fe=="boolean",e,"internal-error"),Mn(v,e.name),Mn(O,e.name),Mn(N,e.name),Mn(V,e.name),Mn(W,e.name),Mn(B,e.name);const T=new gn({uid:q,auth:e,email:g,emailVerified:K,displayName:p,isAnonymous:fe,photoURL:O,phoneNumber:v,tenantId:N,stsTokenManager:y,createdAt:W,lastLoginAt:B});return de&&Array.isArray(de)&&(T.providerData=de.map(A=>Object.assign({},A))),V&&(T._redirectEventId=V),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gr;s.updateFromServerResponse(n);const i=new gn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Gr;c.updateFromIdToken(r);const l=new gn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=new Map;function _n(t){Rn(t instanceof Function,"Expected a class definition");let e=mf.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}im.type="NONE";const gf=im;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(_n(gf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_n(gf);const o=yo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const p=gn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new zr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(om(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hm(e))return"Blackberry";if(fm(e))return"Webos";if(am(e))return"Safari";if((e.includes("chrome/")||cm(e))&&!e.includes("edge/"))return"Chrome";if(um(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function om(t=ht()){return/firefox\//i.test(t)}function am(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cm(t=ht()){return/crios\//i.test(t)}function lm(t=ht()){return/iemobile/i.test(t)}function um(t=ht()){return/android/i.test(t)}function hm(t=ht()){return/blackberry/i.test(t)}function fm(t=ht()){return/webos/i.test(t)}function Sl(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mw(t=ht()){var e;return Sl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gw(){return NT()&&document.documentMode===10}function dm(t=ht()){return Sl(t)||um(t)||fm(t)||hm(t)||/windows phone/i.test(t)||lm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e=[]){let n;switch(t){case"Browser":n=_f(ht());break;case"Worker":n=`${_f(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(t,e={}){return nr(t,"GET","/v2/passwordPolicy",tr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=6;class Ew{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yf(this),this.idTokenSubscription=new yf(this),this.beforeStateQueue=new _w(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rm(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ew()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(vn(this));const n=e?$e(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yw(this),n=new Ew(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function br(t){return $e(t)}class yf{constructor(e){this.auth=e,this.observer=null,this.addObserver=UT(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Iw(t){la=t}function mm(t){return la.loadJS(t)}function ww(){return la.recaptchaEnterpriseScript}function Aw(){return la.gapiScript}function Rw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bw="recaptcha-enterprise",Sw="NO_RECAPTCHA";class Pw{constructor(e){this.type=bw,this.auth=br(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{ow(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new iw(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;df(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Sw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&df(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ww();l.length!==0&&(l+=c),mm(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function vf(t,e,n,r=!1){const s=new Pw(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await vf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t,e){const n=Il(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xo(i,e??{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function Ow(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nw(t,e,n){const r=br(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gm(e),{host:o,port:c}=Dw(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Vw()}function gm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Dw(t){const e=gm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ef(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ef(o)}}}function Ef(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function kw(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(t,e){return Ri(t,"POST","/v1/accounts:signInWithPassword",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(t,e){return Ri(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}async function Lw(t,e){return Ri(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Pl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ui(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ui(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,n,"signInWithPassword",xw);case"emailLink":return Mw(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,r,"signUpPassword",kw);case"emailLink":return Lw(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e){return Ri(t,"POST","/v1/accounts:signInWithIdp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="http://localhost";class Er extends Pl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Er(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qr(e,n)}buildRequest(){const e={requestUri:Fw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bw(t){const e=Ms(Ls(t)).link,n=e?Ms(Ls(e)).deep_link_id:null,r=Ms(Ls(t)).deep_link_id;return(r?Ms(Ls(r)).link:null)||r||n||e||t}class Cl{constructor(e){var n,r,s,i,o,c;const l=Ms(Ls(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Uw((s=l.mode)!==null&&s!==void 0?s:null);oe(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Bw(e);try{return new Cl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.providerId=ds.PROVIDER_ID}static credential(e,n){return ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cl.parseLink(n);return oe(r,"argument-error"),ui._fromEmailAndCode(e,r.code,r.tenantId)}}ds.PROVIDER_ID="password";ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends _m{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends bi{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends bi{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends bi{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(t,e){return Ri(t,"POST","/v1/accounts:signUp",tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gn._fromIdTokenResponse(e,r,s),o=Tf(r);return new Tr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Tf(r);return new Tr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Tf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends Cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fo(e,n,r,s)}}function ym(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(t,i,e,r):i})}async function qw(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(vn(r));const s="reauthenticate";try{const i=await li(t,ym(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=bl(i.idToken);oe(o,r,"internal-error");const{sub:c}=o;return oe(t.uid===c,r,"user-mismatch"),Tr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(t,e,n=!1){if(Qt(t.app))return Promise.reject(vn(t));const r="signIn",s=await ym(t,r,e),i=await Tr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Hw(t,e){return vm(br(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(t){const e=br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TS(t,e,n){if(Qt(t.app))return Promise.reject(vn(t));const r=br(t),o=await xc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Em(t),l}),c=await Tr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function IS(t,e,n){return Qt(t.app)?Promise.reject(vn(t)):Hw($e(t),ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Em(t),r})}function Ww(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function Kw(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function Gw(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function wS(t){return $e(t).signOut()}const Uo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=1e3,Qw=10;class Im extends Tm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Qw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Im.type="LOCAL";const Jw=Im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm extends Tm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wm.type="SESSION";const Am=wm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await Yw(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Ol("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function Zw(t){Zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function eA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nA(){return Rm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="firebaseLocalStorageDb",rA=1,Bo="firebaseLocalStorage",Sm="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ha(t,e){return t.transaction([Bo],e?"readwrite":"readonly").objectStore(Bo)}function sA(){const t=indexedDB.deleteDatabase(bm);return new Si(t).toPromise()}function Mc(){const t=indexedDB.open(bm,rA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bo,{keyPath:Sm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bo)?e(r):(r.close(),await sA(),e(await Mc()))})})}async function If(t,e,n){const r=ha(t,!0).put({[Sm]:e,value:n});return new Si(r).toPromise()}async function iA(t,e){const n=ha(t,!1).get(e),r=await new Si(n).toPromise();return r===void 0?null:r.value}function wf(t,e){const n=ha(t,!0).delete(e);return new Si(n).toPromise()}const oA=800,aA=3;class Pm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(nA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eA(),!this.activeServiceWorker)return;this.sender=new Xw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await If(e,Uo,"1"),await wf(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>If(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new Si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pm.type="LOCAL";const cA=Pm;new Ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e){return e?_n(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends Pl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uA(t){return vm(t.auth,new Nl(t),t.bypassAuthState)}function hA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),$w(n,new Nl(t),t.bypassAuthState)}async function fA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),qw(n,new Nl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uA;case"linkViaPopup":case"linkViaRedirect":return fA;case"reauthViaPopup":case"reauthViaRedirect":return hA;default:Ht(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=new Ai(2e3,1e4);class jr extends Cm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dA.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="pendingRedirect",vo=new Map;class mA extends Cm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await gA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gA(t,e){const n=vA(e),r=yA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _A(t,e){vo.set(t._key(),e)}function yA(t){return _n(t._redirectPersistence)}function vA(t){return yo(pA,t.config.apiKey,t.name)}async function EA(t,e,n=!1){if(Qt(t.app))return Promise.reject(vn(t));const r=br(t),s=lA(r,e),o=await new mA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=10*60*1e3;class IA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Om(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(e))}saveEventToCache(e){this.cachedEventUids.add(Af(e)),this.lastProcessedEventTime=Date.now()}}function Af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Om({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Om(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bA=/^https?/;async function SA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AA(t);for(const n of e)try{if(PA(n))return}catch{}Ht(t,"unauthorized-domain")}function PA(t){const e=Vc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bA.test(n))return!1;if(RA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new Ai(3e4,6e4);function Rf(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OA(t){return new Promise((e,n)=>{var r,s,i;function o(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(Xt(t,"network-request-failed"))},timeout:CA.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)o();else{const c=Rw("iframefcb");return Zt()[c]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},mm(`${Aw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function NA(t){return Eo=Eo||OA(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new Ai(5e3,15e3),VA="__/auth/iframe",kA="emulator/auth/iframe",xA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LA(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rl(e,kA):`https://${t.config.authDomain}/${VA}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=MA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wi(r).slice(1)}`}async function FA(t){const e=await NA(t),n=Zt().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:LA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),c=Zt().setTimeout(()=>{i(o)},DA.get());function l(){Zt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BA=500,jA=600,qA="_blank",$A="http://localhost";class bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HA(t,e,n,r=BA,s=jA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},UA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ht().toLowerCase();n&&(c=cm(h)?qA:n),om(h)&&(e=e||$A,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[v,O])=>`${g}${v}=${O},`,"");if(mw(h)&&c!=="_self")return WA(e||"",c),new bf(null);const p=window.open(e||"",c,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new bf(p)}function WA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="__/auth/handler",GA="emulator/auth/handler",zA=encodeURIComponent("fac");async function Sf(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof _m){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof bi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${zA}=${encodeURIComponent(l)}`:"";return`${QA(t)}?${wi(c).slice(1)}${h}`}function QA({config:t}){return t.emulator?Rl(t,GA):`https://${t.authDomain}/${KA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="webStorageSupport";class JA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Am,this._completeRedirectFn=EA,this._overrideRedirectResult=_A}async _openPopup(e,n,r,s){var i;Rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sf(e,n,r,Vc(),s);return HA(e,o,Ol())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sf(e,n,r,Vc(),s);return Zw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FA(e),r=new IA(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oc];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dm()||am()||Sl()}}const YA=JA;var Pf="@firebase/auth",Cf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eR(t){ns(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pm(t)},h=new Tw(r,s,i,l);return Ow(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new yr("auth-internal",e=>{const n=br(e.getProvider("auth").getImmediate());return(r=>new XA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(Pf,Cf,ZA(t)),Qn(Pf,Cf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=5*60,nR=Hp("authIdTokenMaxAge")||tR;let Of=null;const rR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nR)return;const s=n==null?void 0:n.token;Of!==s&&(Of=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sR(t=zp()){const e=Il(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Cw(t,{popupRedirectResolver:YA,persistence:[cA,Jw,Am]}),r=Hp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=rR(i.toString());Kw(n,o,()=>o(n.currentUser)),Ww(n,c=>o(c))}}const s=qp("auth");return s&&Nw(n,`http://${s}`),n}function iR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Iw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",iR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eR("Browser");var Nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,Nm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function T(){}T.prototype=y.prototype,w.D=y.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(A,R,S){for(var E=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)E[ft-2]=arguments[ft];return y.prototype[R].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(R=0;16>R;++R)A[R]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=w.g[0],T=w.g[1],R=w.g[2];var S=w.g[3],E=y+(S^T&(R^S))+A[0]+3614090360&4294967295;y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[1]+3905402710&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[2]+606105819&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[4]+4118548399&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[5]+1200080426&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[6]+2821735955&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[8]+1770035416&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[9]+2336552879&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[10]+4294925233&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[12]+1804603682&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[13]+4254626195&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[14]+2792965006&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(R^S&(T^R))+A[1]+4129170786&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[6]+3225465664&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[11]+643717713&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[5]+3593408605&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[10]+38016083&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[15]+3634488961&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[9]+568446438&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[14]+3275163606&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[3]+4107603335&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[13]+2850285829&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[2]+4243563512&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[7]+1735328473&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(T^R^S)+A[5]+4294588738&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[8]+2272392833&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[11]+1839030562&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[1]+2763975236&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[4]+1272893353&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[7]+4139469664&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[13]+681279174&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[0]+3936430074&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[3]+3572445317&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[9]+3654602809&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[12]+3873151461&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[15]+530742520&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(R^(T|~S))+A[0]+4096336452&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[7]+1126891415&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[14]+2878612391&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[12]+1700485571&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[3]+2399980690&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[10]+4293915773&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[8]+1873313359&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[15]+4264355552&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[6]+2734768916&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[4]+4149444226&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[11]+3174756917&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[2]+718787259&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var T=y-this.blockSize,A=this.B,R=this.h,S=0;S<y;){if(R==0)for(;S<=T;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(A[R++]=w.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<y;)if(A[R++]=w[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var T=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=T&255,T/=256;for(this.u(w),w=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)w[T++]=this.g[y]>>>A&255;return w};function i(w,y){var T=c;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=y(w)}function o(w,y){this.h=y;for(var T=[],A=!0,R=w.length-1;0<=R;R--){var S=w[R]|0;A&&S==y||(T[R]=S,A=!1)}this.g=T}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return V(h(-w));for(var y=[],T=1,A=0;w>=T;A++)y[A]=w/T|0,T*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return V(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),A=p,R=0;R<w.length;R+=8){var S=Math.min(8,w.length-R),E=parseInt(w.substring(R,R+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(E))):(A=A.j(T),A=A.add(h(E)))}return A}var p=l(0),g=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-V(this).m();for(var w=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);w+=(0<=A?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(N(this))return"-"+V(this).toString(w);for(var y=h(Math.pow(w,6)),T=this,A="";;){var R=K(T,y).g;T=W(T,R.j(y));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=R,O(T))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=W(this,w),N(w)?-1:O(w)?0:1};function V(w){for(var y=w.g.length,T=[],A=0;A<y;A++)T[A]=~w.g[A];return new o(T,~w.h).add(g)}t.abs=function(){return N(this)?V(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0,R=0;R<=y;R++){var S=A+(this.i(R)&65535)+(w.i(R)&65535),E=(S>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=E>>>16,S&=65535,E&=65535,T[R]=E<<16|S}return new o(T,T[T.length-1]&-2147483648?-1:0)};function W(w,y){return w.add(V(y))}t.j=function(w){if(O(this)||O(w))return p;if(N(this))return N(w)?V(this).j(V(w)):V(V(this).j(w));if(N(w))return V(this.j(V(w)));if(0>this.l(v)&&0>w.l(v))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var S=this.i(A)>>>16,E=this.i(A)&65535,ft=w.i(R)>>>16,Nt=w.i(R)&65535;T[2*A+2*R]+=E*Nt,B(T,2*A+2*R),T[2*A+2*R+1]+=S*Nt,B(T,2*A+2*R+1),T[2*A+2*R+1]+=E*ft,B(T,2*A+2*R+1),T[2*A+2*R+2]+=S*ft,B(T,2*A+2*R+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function B(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function q(w,y){this.g=w,this.h=y}function K(w,y){if(O(y))throw Error("division by zero");if(O(w))return new q(p,p);if(N(w))return y=K(V(w),y),new q(V(y.g),V(y.h));if(N(y))return y=K(w,V(y)),new q(V(y.g),y.h);if(30<w.g.length){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;0>=A.l(w);)T=fe(T),A=fe(A);var R=de(T,1),S=de(A,1);for(A=de(A,2),T=de(T,2);!O(A);){var E=S.add(A);0>=E.l(w)&&(R=R.add(T),S=E),A=de(A,1),T=de(T,1)}return y=W(w,R.j(y)),new q(R,y)}for(R=p;0<=w.l(y);){for(T=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(T),E=S.j(y);N(E)||0<E.l(w);)T-=A,S=h(T),E=S.j(y);O(S)&&(S=g),R=R.add(S),w=W(w,E)}return new q(R,w)}t.A=function(w){return K(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&w.i(A);return new o(T,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|w.i(A);return new o(T,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^w.i(A);return new o(T,this.h^w.h)};function fe(w){for(var y=w.g.length+1,T=[],A=0;A<y;A++)T[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(T,w.h)}function de(w,y){var T=y>>5;y%=32;for(var A=w.g.length-T,R=[],S=0;S<A;S++)R[S]=0<y?w.i(S+T)>>>y|w.i(S+T+1)<<32-y:w.i(S+T);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Nm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,_r=o}).apply(typeof Nf<"u"?Nf:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dm,Fs,Vm,To,Lc,km,xm,Mm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,P={next:function(){if(!m&&d<a.length){var C=d++;return{value:u(C,a[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function O(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,P,C){for(var $=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)$[Pe-2]=arguments[Pe];return u.prototype[P].apply(m,$)}}function N(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function V(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const P=a.length||0,C=m.length||0;a.length=P+C;for(let $=0;$<C;$++)a[P+$]=m[$]}else a.push(m)}}class W{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function K(a){return K[" "](a),a}K[" "]=function(){};var fe=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function de(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let C=0;C<T.length;C++)d=T[C],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function E(){var a=Rt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ft{constructor(){this.h=this.g=null}add(u,d){const m=Nt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Nt=new W(()=>new Ue,a=>a.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,me=!1,Rt=new ft,Ft=()=>{const a=c.Promise.resolve(void 0);ye=()=>{a.then(Dt)}};var Dt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){S(d)}var u=Nt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}me=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var On=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function bt(a,u){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(fe){e:{try{K(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Tt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&bt.aa.h.call(this)}}O(bt,ke);var Tt={2:"touch",3:"pen",4:"mouse"};bt.prototype.h=function(){bt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),Y=0;function z(a,u,d,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++Y,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pe(a){this.src=a,this.g={},this.h=0}pe.prototype.add=function(a,u,d,m,P){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var $=I(a,u,m,P);return-1<$?(u=a[$],d||(u.fa=!1)):(u=new z(u,this.src,C,!!m,P),u.fa=d,a.push(u)),u};function _(a,u){var d=u.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,u,void 0),C;(C=0<=P)&&Array.prototype.splice.call(m,P,1),C&&(Z(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function I(a,u,d,m){for(var P=0;P<a.length;++P){var C=a[P];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==m)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),D={};function L(a,u,d,m,P){if(Array.isArray(u)){for(var C=0;C<u.length;C++)L(a,u[C],d,m,P);return null}return d=ie(d),a&&a[k]?a.K(u,d,h(m)?!!m.capture:!1,P):x(a,u,d,!1,m,P)}function x(a,u,d,m,P,C){if(!u)throw Error("Invalid event type");var $=h(P)?!!P.capture:!!P,Pe=Q(a);if(Pe||(a[b]=Pe=new pe(a)),d=Pe.add(u,d,m,$,C),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)On||(P=$),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(F(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return u.call(a.src,a.listener,d)}const u=ne;return a}function H(a,u,d,m,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)H(a,u[C],d,m,P);else m=h(m)?!!m.capture:!!m,d=ie(d),a&&a[k]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],d=I(C,d,m,P),-1<d&&(Z(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=I(u,d,m,P)),(d=-1<a?u[a]:null)&&j(d))}function j(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[k])_(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(F(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Q(u))?(_(d,a),d.h==0&&(d.src=null,u[b]=null)):Z(a)}}}function F(a){return a in D?D[a]:D[a]="on"+a}function ne(a,u){if(a.da)a=!0;else{u=new bt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&j(a),a=d.call(m,u)}return a}function Q(a){return a=a[b],a instanceof pe?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function re(){Ve.call(this),this.i=new pe(this),this.M=this,this.F=null}O(re,Ve),re.prototype[k]=!0,re.prototype.removeEventListener=function(a,u,d,m){H(this,a,u,d,m)};function he(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new ke(u,a);else if(u instanceof ke)u.target=u.target||a;else{var P=u;u=new ke(m,a),A(u,P)}if(P=!0,d)for(var C=d.length-1;0<=C;C--){var $=u.g=d[C];P=ve($,m,!0,u)&&P}if($=u.g=a,P=ve($,m,!0,u)&&P,P=ve($,m,!1,u)&&P,d)for(C=0;C<d.length;C++)$=u.g=d[C],P=ve($,m,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Z(d[m]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},re.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function ve(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,C=0;C<u.length;++C){var $=u[C];if($&&!$.da&&$.capture==d){var Pe=$.listener,Je=$.ha||$.src;$.fa&&_(a.i,$),P=Pe.call(Je,m)!==!1&&P}}return P&&!m.defaultPrevented}function Ge(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function ze(a){a.g=Ge(()=>{a.g=null,a.i&&(a.i=!1,ze(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Vt extends Ve{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(a){Ve.call(this),this.h=a,this.g={}}O(nt,Ve);var Nn=[];function ys(a){de(a.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},a),a.g={}}nt.prototype.N=function(){nt.aa.N.call(this),ys(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,kt=c.JSON.parse,Bi=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Cr(){}Cr.prototype.h=null;function du(a){return a.h||(a.h=a.i())}function pu(){}var vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sa(){ke.call(this,"d")}O(Sa,ke);function Pa(){ke.call(this,"c")}O(Pa,ke);var ir={},mu=null;function ji(){return mu=mu||new re}ir.La="serverreachability";function gu(a){ke.call(this,ir.La,a)}O(gu,ke);function Es(a){const u=ji();he(u,new gu(u))}ir.STAT_EVENT="statevent";function _u(a,u){ke.call(this,ir.STAT_EVENT,a),this.stat=u}O(_u,ke);function dt(a){const u=ji();he(u,new _u(u,a))}ir.Ma="timingevent";function yu(a,u){ke.call(this,ir.Ma,a),this.size=u}O(yu,ke);function Ts(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function o_(a,u,d,m,P,C){a.info(function(){if(a.g)if(C)for(var $="",Pe=C.split("&"),Je=0;Je<Pe.length;Je++){var Te=Pe[Je].split("=");if(1<Te.length){var rt=Te[0];Te=Te[1];var st=rt.split("_");$=2<=st.length&&st[1]=="type"?$+(rt+"="+Te+"&"):$+(rt+"=redacted&")}}else $=null;else $=C;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+$})}function a_(a,u,d,m,P,C,$){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+C+" "+$})}function Or(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+l_(a,d)+(m?" "+m:"")})}function c_(a,u){a.info(function(){return"TIMEOUT: "+u})}Is.prototype.info=function(){};function l_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var $=1;$<P.length;$++)P[$]=""}}}}return Qe(d)}catch{return u}}var qi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ca;function $i(){}O($i,Cr),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},Ca=new $i;function Dn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Eu}function Eu(){this.i=null,this.g="",this.h=!1}var Tu={},Oa={};function Na(a,u,d){a.L=1,a.v=Gi(on(u)),a.m=d,a.P=!0,Iu(a,null)}function Iu(a,u){a.F=Date.now(),Hi(a),a.A=on(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Mu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Eu,a.g=eh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Vt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Nn[0]=P.toString()),P=Nn);for(var C=0;C<P.length;C++){var $=L(d,P[C],m||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Es(),o_(a.i,a.u,a.A,a.l,a.R,a.m)}Dn.prototype.ca=function(a){a=a.target;const u=this.M;u&&an(a)==3?u.j():this.Y(a)},Dn.prototype.Y=function(a){try{if(a==this.g)e:{const st=an(this.g);var u=this.g.Ba();const Vr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||$u(this.g)))){this.J||st!=4||u==7||(u==8||0>=Vr?Es(3):Es(2)),Da(this);var d=this.g.Z();this.X=d;t:if(wu(this)){var m=$u(this.g);a="";var P=m.length,C=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),ws(this);var $="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(C&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,a_(this.i,this.u,this.A,this.l,this.R,st,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Je=this.g;if((Pe=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Pe)){var Te=Pe;break t}}Te=null}if(d=Te)Or(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Va(this,d);else{this.o=!1,this.s=3,dt(12),or(this),ws(this);break e}}if(this.P){d=!0;let Ut;for(;!this.J&&this.C<$.length;)if(Ut=u_(this,$),Ut==Oa){st==4&&(this.s=4,dt(14),d=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==Tu){this.s=4,dt(15),Or(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else Or(this.i,this.l,Ut,null),Va(this,Ut);if(wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||$.length!=0||this.h.h||(this.s=1,dt(16),d=!1),this.o=this.o&&d,!d)Or(this.i,this.l,$,"[Invalid Chunked Response]"),or(this),ws(this);else if(0<$.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Ua(rt),rt.M=!0,dt(11))}}else Or(this.i,this.l,$,null),Va(this,$);st==4&&or(this),this.o&&!this.J&&(st==4?Ju(this.j,this):(this.o=!1,Hi(this)))}else S_(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),or(this),ws(this)}}}catch{}finally{}};function wu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function u_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Oa:(d=Number(u.substring(d,m)),isNaN(d)?Tu:(m+=1,m+d>u.length?Oa:(u=u.slice(m,m+d),a.C=m+d,u)))}Dn.prototype.cancel=function(){this.J=!0,or(this)};function Hi(a){a.S=Date.now()+a.I,Au(a,a.I)}function Au(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ts(g(a.ba,a),u)}function Da(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Dn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(c_(this.i,this.A),this.L!=2&&(Es(),dt(17)),or(this),this.s=2,ws(this)):Au(this,this.S-a)};function ws(a){a.j.G==0||a.J||Ju(a.j,a)}function or(a){Da(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,ys(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Va(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||ka(d.h,a))){if(!a.K&&ka(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Zi(d),Yi(d);else break e;Fa(d),dt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ts(g(d.Za,d),6e3));if(1>=Su(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else cr(d,11)}else if((a.K||d.g==a)&&Zi(d),!B(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Te=P[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const rt=Te[3];rt!=null&&(d.la=rt,d.j.info("VER="+d.la));const st=Te[4];st!=null&&(d.Aa=st,d.j.info("SVER="+d.Aa));const Vr=Te[5];Vr!=null&&typeof Vr=="number"&&0<Vr&&(m=1.5*Vr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ut=a.g;if(Ut){const to=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(to){var C=m.h;C.g||to.indexOf("spdy")==-1&&to.indexOf("quic")==-1&&to.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(xa(C,C.h),C.h=null))}if(m.D){const Ba=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Ba&&(m.ya=Ba,Ne(m.I,m.D,Ba))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var $=a;if(m.qa=Zu(m,m.J?m.ia:null,m.W),$.K){Pu(m.h,$);var Pe=$,Je=m.L;Je&&(Pe.I=Je),Pe.B&&(Da(Pe),Hi(Pe)),m.g=$}else zu(m);0<d.i.length&&Xi(d)}else Te[0]!="stop"&&Te[0]!="close"||cr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?cr(d,7):La(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}Es(4)}catch{}}var h_=class{constructor(a,u){this.g=a,this.map=u}};function Ru(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Su(a){return a.h?1:a.g?a.g.size:0}function ka(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function xa(a,u){a.g?a.g.add(u):a.h=u}function Pu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Ru.prototype.cancel=function(){if(this.i=Cu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Cu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return N(a.i)}function f_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function d_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Ou(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=d_(a),m=f_(a),P=m.length,C=0;C<P;C++)u.call(void 0,m[C],d&&d[C],a)}var Nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function p_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),P=null;if(0<=m){var C=a[d].substring(0,m);P=a[d].substring(m+1)}else C=a[d];u(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ar){this.h=a.h,Wi(this,a.j),this.o=a.o,this.g=a.g,Ki(this,a.s),this.l=a.l;var u=a.i,d=new bs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Du(this,d),this.m=a.m}else a&&(u=String(a).match(Nu))?(this.h=!1,Wi(this,u[1]||"",!0),this.o=As(u[2]||""),this.g=As(u[3]||"",!0),Ki(this,u[4]),this.l=As(u[5]||"",!0),Du(this,u[6]||"",!0),this.m=As(u[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}ar.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Rs(u,Vu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Rs(u,Vu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Rs(d,d.charAt(0)=="/"?__:g_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Rs(d,v_)),a.join("")};function on(a){return new ar(a)}function Wi(a,u,d){a.j=d?As(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ki(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Du(a,u,d){u instanceof bs?(a.i=u,E_(a.i,a.h)):(d||(u=Rs(u,y_)),a.i=new bs(u,a.h))}function Ne(a,u,d){a.i.set(u,d)}function Gi(a){return Ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function As(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Rs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,m_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function m_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vu=/[#\/\?@]/g,g_=/[#\?:]/g,__=/[#\?]/g,y_=/[#\?@]/g,v_=/#/g;function bs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Vn(a){a.g||(a.g=new Map,a.h=0,a.i&&p_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=bs.prototype,t.add=function(a,u){Vn(this),this.i=null,a=Nr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function ku(a,u){Vn(a),u=Nr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function xu(a,u){return Vn(a),u=Nr(a,u),a.g.has(u)}t.forEach=function(a,u){Vn(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){Vn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=a[m];for(let C=0;C<P.length;C++)d.push(u[m])}return d},t.V=function(a){Vn(this);let u=[];if(typeof a=="string")xu(this,a)&&(u=u.concat(this.g.get(Nr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Vn(this),this.i=null,a=Nr(this,a),xu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Mu(a,u,d){ku(a,u),0<d.length&&(a.i=null,a.g.set(Nr(a,u),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const C=encodeURIComponent(String(m)),$=this.V(m);for(m=0;m<$.length;m++){var P=C;$[m]!==""&&(P+="="+encodeURIComponent(String($[m]))),a.push(P)}}return this.i=a.join("&")};function Nr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function E_(a,u){u&&!a.j&&(Vn(a),a.i=null,a.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(ku(this,m),Mu(this,P,d))},a)),a.j=u}function T_(a,u){const d=new Is;if(c.Image){const m=new Image;m.onload=v(kn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=v(kn,d,"TestLoadImage: error",!1,u,m),m.onabort=v(kn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=v(kn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function I_(a,u){const d=new Is,m=new AbortController,P=setTimeout(()=>{m.abort(),kn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(C=>{clearTimeout(P),C.ok?kn(d,"TestPingServer: ok",!0,u):kn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),kn(d,"TestPingServer: error",!1,u)})}function kn(a,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function w_(){this.g=new Bi}function A_(a,u,d){const m=d||"";try{Ou(a,function(P,C){let $=P;h(P)&&($=Qe(P)),u.push(m+C+"="+encodeURIComponent($))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function zi(a){this.l=a.Ub||null,this.j=a.eb||!1}O(zi,Cr),zi.prototype.g=function(){return new Qi(this.l,this.j)},zi.prototype.i=function(a){return function(){return a}}({});function Qi(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Qi,re),t=Qi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ps(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ss(this):Ps(this),this.readyState==3&&Lu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ss(this))},t.Qa=function(a){this.g&&(this.response=a,Ss(this))},t.ga=function(){this.g&&Ss(this)};function Ss(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ps(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Fu(a){let u="";return de(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ma(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Fu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ne(a,u,d))}function Me(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Me,re);var R_=/^https?$/i,b_=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ca.g(),this.v=this.o?du(this.o):du(Ca),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){Uu(this,C);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(b_,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,$]of d)this.g.setRequestHeader(C,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qu(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){Uu(this,C)}};function Uu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Bu(a),Ji(a)}function Bu(a){a.A||(a.A=!0,he(a,"complete"),he(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,he(this,"complete"),he(this,"abort"),Ji(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ji(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ju(this):this.bb())},t.bb=function(){ju(this)};function ju(a){if(a.h&&typeof o<"u"&&(!a.v[1]||an(a)!=4||a.Z()!=2)){if(a.u&&an(a)==4)Ge(a.Ea,0,a);else if(he(a,"readystatechange"),an(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=$===0){var P=String(a.D).match(Nu)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),m=!R_.test(P?P.toLowerCase():"")}d=m}if(d)he(a,"complete"),he(a,"success");else{a.m=6;try{var C=2<an(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",Bu(a)}}finally{Ji(a)}}}}function Ji(a,u){if(a.g){qu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||he(a,"ready");try{d.onreadystatechange=m}catch{}}}function qu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),kt(u)}};function $u(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function S_(a){const u={};a=(a.g&&2<=an(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var d=R(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[P]||[];u[P]=C,C.push(d)}w(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Hu(a){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cs("baseRetryDelayMs",5e3,a),this.cb=Cs("retryDelaySeedMs",1e4,a),this.Wa=Cs("forwardChannelMaxRetries",2,a),this.wa=Cs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ru(a&&a.concurrentRequestLimit),this.Da=new w_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Hu.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){dt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Zu(this,null,this.W),Xi(this)};function La(a){if(Wu(a),a.G==3){var u=a.U++,d=on(a.I);if(Ne(d,"SID",a.K),Ne(d,"RID",u),Ne(d,"TYPE","terminate"),Os(a,d),u=new Dn(a,a.j,u),u.L=2,u.v=Gi(on(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=eh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Hi(u)}Xu(a)}function Yi(a){a.g&&(Ua(a),a.g.cancel(),a.g=null)}function Wu(a){Yi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Zi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Xi(a){if(!bu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||Ft(),me||(ye(),me=!0),Rt.add(u,a),a.B=0}}function P_(a,u){return Su(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ts(g(a.Ga,a,u),Yu(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Dn(this,this.j,a);let C=this.o;if(this.S&&(C?(C=y(C),A(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Gu(this,P,u),d=on(this.I),Ne(d,"RID",a),Ne(d,"CVER",22),this.D&&Ne(d,"X-HTTP-Session-Id",this.D),Os(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Fu(C)))+"&"+u:this.m&&Ma(d,this.m,C)),xa(this.h,P),this.Ua&&Ne(d,"TYPE","init"),this.P?(Ne(d,"$req",u),Ne(d,"SID","null"),P.T=!0,Na(P,d,null)):Na(P,d,u),this.G=2}}else this.G==3&&(a?Ku(this,a):this.i.length==0||bu(this.h)||Ku(this))};function Ku(a,u){var d;u?d=u.l:d=a.U++;const m=on(a.I);Ne(m,"SID",a.K),Ne(m,"RID",d),Ne(m,"AID",a.T),Os(a,m),a.m&&a.o&&Ma(m,a.m,a.o),d=new Dn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Gu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),xa(a.h,d),Na(d,m,u)}function Os(a,u){a.H&&de(a.H,function(d,m){Ne(u,m,d)}),a.l&&Ou({},function(d,m){Ne(u,m,d)})}function Gu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let C=-1;for(;;){const $=["count="+d];C==-1?0<d?(C=P[0].g,$.push("ofs="+C)):C=0:$.push("ofs="+C);let Pe=!0;for(let Je=0;Je<d;Je++){let Te=P[Je].g;const rt=P[Je].map;if(Te-=C,0>Te)C=Math.max(0,P[Je].g-100),Pe=!1;else try{A_(rt,$,"req"+Te+"_")}catch{m&&m(rt)}}if(Pe){m=$.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function zu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||Ft(),me||(ye(),me=!0),Rt.add(u,a),a.v=0}}function Fa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ts(g(a.Fa,a),Yu(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Qu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ts(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Yi(this),Qu(this))};function Ua(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Qu(a){a.g=new Dn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=on(a.qa);Ne(u,"RID","rpc"),Ne(u,"SID",a.K),Ne(u,"AID",a.T),Ne(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ne(u,"TO",a.ja),Ne(u,"TYPE","xmlhttp"),Os(a,u),a.m&&a.o&&Ma(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Gi(on(u)),d.m=null,d.P=!0,Iu(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Yi(this),Fa(this),dt(19))};function Zi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Ju(a,u){var d=null;if(a.g==u){Zi(a),Ua(a),a.g=null;var m=2}else if(ka(a.h,u))d=u.D,Pu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=ji(),he(m,new yu(m,d)),Xi(a)}else zu(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&P_(a,u)||m==2&&Fa(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:cr(a,5);break;case 4:cr(a,10);break;case 3:cr(a,6);break;default:cr(a,2)}}}function Yu(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function cr(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const P=!m;m=new ar(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Wi(m,"https"),Gi(m),P?T_(m.toString(),d):I_(m.toString(),d)}else dt(2);a.G=0,a.l&&a.l.sa(u),Xu(a),Wu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Xu(a){if(a.G=0,a.ka=[],a.l){const u=Cu(a.h);(u.length!=0||a.i.length!=0)&&(V(a.ka,u),V(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Zu(a,u,d){var m=d instanceof ar?on(d):new ar(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ki(m,m.s);else{var P=c.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var C=new ar(null);m&&Wi(C,m),u&&(C.g=u),P&&Ki(C,P),d&&(C.l=d),m=C}return d=a.D,u=a.ya,d&&u&&Ne(m,d,u),Ne(m,"VER",a.la),Os(a,m),m}function eh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Me(new zi({eb:d})):new Me(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function th(){}t=th.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function eo(){}eo.prototype.g=function(a,u){return new St(a,u)};function St(a,u){re.call(this),this.g=new Hu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Dr(this)}O(St,re),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){La(this.g)},St.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Qe(a),a=d);u.i.push(new h_(u.Ya++,a)),u.G==3&&Xi(u)},St.prototype.N=function(){this.g.l=null,delete this.j,La(this.g),delete this.g,St.aa.N.call(this)};function nh(a){Sa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}O(nh,Sa);function rh(){Pa.call(this),this.status=1}O(rh,Pa);function Dr(a){this.g=a}O(Dr,th),Dr.prototype.ua=function(){he(this.g,"a")},Dr.prototype.ta=function(a){he(this.g,new nh(a))},Dr.prototype.sa=function(a){he(this.g,new rh)},Dr.prototype.ra=function(){he(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Mm=function(){return new eo},xm=function(){return ji()},km=ir,Lc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qi.NO_ERROR=0,qi.TIMEOUT=8,qi.HTTP_ERROR=6,To=qi,vu.COMPLETE="complete",Vm=vu,pu.EventType=vs,vs.OPEN="a",vs.CLOSE="b",vs.ERROR="c",vs.MESSAGE="d",re.prototype.listen=re.prototype.K,Fs=pu,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,Dm=Me}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const Df="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new El("@firebase/firestore");function ks(){return Ir.logLevel}function X(t,...e){if(Ir.logLevel<=_e.DEBUG){const n=e.map(Dl);Ir.debug(`Firestore (${ps}): ${t}`,...n)}}function bn(t,...e){if(Ir.logLevel<=_e.ERROR){const n=e.map(Dl);Ir.error(`Firestore (${ps}): ${t}`,...n)}}function rs(t,...e){if(Ir.logLevel<=_e.WARN){const n=e.map(Dl);Ir.warn(`Firestore (${ps}): ${t}`,...n)}}function Dl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function be(t,e){t||ae()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class aR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cR{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new En;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new En,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new En)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new Lm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new ot(e)}}class lR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class uR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){be(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new hR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=dR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new We(0,0))}static max(){return new ce(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends hi{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const pR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends hi{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return pR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}function mR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new Xn(s,te.empty(),e)}function gR(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(ce.min(),te.empty(),-1)}static max(){return new Xn(ce.max(),te.empty(),-1)}}function _R(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==yR)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ER(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ci(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vl.oe=-1;function fa(t){return t==null}function jo(t){return t===0&&1/t==-1/0}function TR(t){return typeof t=="number"&&Number.isInteger(t)&&!jo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Um(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kf(this.data.getIterator())}getIteratorFrom(e){return new kf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class kf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bm("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const IR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(be(!!t),typeof t=="string"){let e=0;const n=IR.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xl(t){const e=t.mapValue.fields.__previous_value__;return kl(e)?xl(e):e}function fi(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co={mapValue:{}};function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kl(t)?4:RR(t)?9007199254740991:AR(t)?10:11:ae()}function sn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fi(t).isEqual(fi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zn(s.timestampValue),c=Zn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return wr(s.bytesValue).isEqual(wr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),c=Fe(i.doubleValue);return o===c?jo(o)===jo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Vf(o)!==Vf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!sn(o[l],c[l])))return!1;return!0}(t,e);default:return ae()}}function pi(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return xf(t.timestampValue,e.timestampValue);case 4:return xf(fi(t),fi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const c=wr(i),l=wr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Ie(c[h],l[h]);if(f!==0)return f}return Ie(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ie(Fe(i.latitude),Fe(o.latitude));return c!==0?c:Ie(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Mf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},g=o.fields||{},v=(c=p.value)===null||c===void 0?void 0:c.arrayValue,O=(l=g.value)===null||l===void 0?void 0:l.arrayValue,N=Ie(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((f=O==null?void 0:O.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Mf(v,O)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===co.mapValue&&o===co.mapValue)return 0;if(i===co.mapValue)return 1;if(o===co.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Ie(l[p],f[p]);if(g!==0)return g;const v=is(c[l[p]],h[f[p]]);if(v!==0)return v}return Ie(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ae()}}function xf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Zn(t),r=Zn(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Mf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=is(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function os(t){return Fc(t)}function Fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fc(n.fields[o])}`;return s+"}"}(t.mapValue):ae()}function Lf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uc(t){return!!t&&"integerValue"in t}function Ml(t){return!!t&&"arrayValue"in t}function Ff(t){return!!t&&"nullValue"in t}function Uf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Io(t){return!!t&&"mapValue"in t}function AR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ys(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Sr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(Ys(this.value))}}function jm(t){const e=[];return Sr(t.fields,(n,r)=>{const s=new Xe([n]);if(Io(r)){const i=jm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,ce.min(),ce.min(),ce.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,ce.min(),ce.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,ce.min(),ce.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.position=e,this.inclusive=n}}function Bf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n="asc"){this.field=e,this.dir=n}}function bR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{}class je extends qm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PR(e,n,r):n==="array-contains"?new NR(e,r):n==="in"?new DR(e,r):n==="not-in"?new VR(e,r):n==="array-contains-any"?new kR(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CR(e,r):new OR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(is(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends qm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wt(e,n)}matches(e){return $m(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $m(t){return t.op==="and"}function Hm(t){return SR(t)&&$m(t)}function SR(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Bc(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+os(t.value);if(Hm(t))return t.filters.map(e=>Bc(e)).join(",");{const e=t.filters.map(n=>Bc(n)).join(",");return`${t.op}(${e})`}}function Wm(t,e){return t instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&sn(r.value,s.value)}(t,e):t instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Wm(o,s.filters[c]),!0):!1}(t,e):void ae()}function Km(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(Km).join(" ,")+"}"}(t):"Filter"}class PR extends je{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class CR extends je{constructor(e,n){super(e,"in",n),this.keys=Gm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OR extends je{constructor(e,n){super(e,"not-in",n),this.keys=Gm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class NR extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ml(n)&&pi(n.arrayValue,this.value)}}class DR extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class VR extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class kR extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ml(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function qf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xR(t,e,n,r,s,i,o)}function Ll(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),fa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.ue=n}return e.ue}function Fl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jf(t.startAt,e.startAt)&&jf(t.endAt,e.endAt)}function jc(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function MR(t,e,n,r,s,i,o,c){return new Oi(t,e,n,r,s,i,o,c)}function Ul(t){return new Oi(t)}function $f(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zm(t){return t.collectionGroup!==null}function Xs(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ze(Xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $o(i,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new $o(Xe.keyField(),r))}return e.ce}function en(t){const e=le(t);return e.le||(e.le=LR(e,Xs(t))),e.le}function LR(t,e){if(t.limitType==="F")return qf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $o(s.field,i)});const n=t.endAt?new qo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qo(t.startAt.position,t.startAt.inclusive):null;return qf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qc(t,e){const n=t.filters.concat([e]);return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $c(t,e,n){return new Oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function da(t,e){return Fl(en(t),en(e))&&t.limitType===e.limitType}function Qm(t){return`${Ll(en(t))}|lt:${t.limitType}`}function Fr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Km(s)).join(", ")}]`),fa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>os(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>os(s)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Bf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Xs(r),s)||r.endAt&&!function(o,c,l){const h=Bf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Xs(r),s))}(t,e)}function FR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jm(t){return(e,n)=>{let r=!1;for(const s of Xs(t)){const i=UR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function UR(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?is(l,h):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Um(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=new xe(te.comparator);function Sn(){return BR}const Ym=new xe(te.comparator);function Us(...t){let e=Ym;for(const n of t)e=e.insert(n.key,n);return e}function Xm(t){let e=Ym;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pr(){return Zs()}function Zm(){return Zs()}function Zs(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const jR=new xe(te.comparator),qR=new Ze(te.comparator);function ge(...t){let e=qR;for(const n of t)e=e.add(n);return e}const $R=new Ze(Ie);function HR(){return $R}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jo(e)?"-0":e}}function eg(t){return{integerValue:""+t}}function tg(t,e){return TR(e)?eg(e):Bl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this._=void 0}}function WR(t,e,n){return t instanceof mi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kl(i)&&(i=xl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof gi?rg(t,e):t instanceof _i?sg(t,e):function(s,i){const o=ng(s,i),c=Hf(o)+Hf(s.Pe);return Uc(o)&&Uc(s.Pe)?eg(c):Bl(s.serializer,c)}(t,e)}function KR(t,e,n){return t instanceof gi?rg(t,e):t instanceof _i?sg(t,e):n}function ng(t,e){return t instanceof yi?function(r){return Uc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mi extends ma{}class gi extends ma{constructor(e){super(),this.elements=e}}function rg(t,e){const n=ig(e);for(const r of t.elements)n.some(s=>sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class _i extends ma{constructor(e){super(),this.elements=e}}function sg(t,e){let n=ig(e);for(const r of t.elements)n=n.filter(s=>!sn(s,r));return{arrayValue:{values:n}}}class yi extends ma{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Hf(t){return Fe(t.integerValue||t.doubleValue)}function ig(t){return Ml(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n){this.field=e,this.transform=n}}function GR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof gi&&s instanceof gi||r instanceof _i&&s instanceof _i?ss(r.elements,s.elements,sn):r instanceof yi&&s instanceof yi?sn(r.Pe,s.Pe):r instanceof mi&&s instanceof mi}(t.transform,e.transform)}class zR{constructor(e,n){this.version=e,this.transformResults=n}}class vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ga{}function ag(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _a(t.key,vt.none()):new Ni(t.key,t.data,vt.none());{const n=t.data,r=At.empty();let s=new Ze(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new rr(t.key,r,new Ot(s.toArray()),vt.none())}}function QR(t,e,n){t instanceof Ni?function(s,i,o){const c=s.value.clone(),l=Kf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(s,i,o){if(!wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Kf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(cg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ei(t,e,n,r){return t instanceof Ni?function(i,o,c,l){if(!wo(i.precondition,o))return c;const h=i.value.clone(),f=Gf(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof rr?function(i,o,c,l){if(!wo(i.precondition,o))return c;const h=Gf(i.fieldTransforms,l,o),f=o.data;return f.setAll(cg(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function JR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ng(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function Wf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ss(r,s,(i,o)=>GR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ni extends ga{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rr extends ga{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kf(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,KR(o,c,n[s]))}return r}function Gf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,WR(i,o,e))}return r}class _a extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YR extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Zm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=ag(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>Wf(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>Wf(n,r))}}class jl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return jR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new jl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,Ee;function t0(t){switch(t){default:return ae();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function lg(t){if(t===void 0)return bn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Be.OK:return M.OK;case Be.CANCELLED:return M.CANCELLED;case Be.UNKNOWN:return M.UNKNOWN;case Be.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Be.INTERNAL:return M.INTERNAL;case Be.UNAVAILABLE:return M.UNAVAILABLE;case Be.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Be.NOT_FOUND:return M.NOT_FOUND;case Be.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Be.ABORTED:return M.ABORTED;case Be.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Be.DATA_LOSS:return M.DATA_LOSS;default:return ae()}}(Ee=Be||(Be={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new _r([4294967295,4294967295],0);function zf(t){const e=n0().encode(t),n=new Nm;return n.update(e),new Uint8Array(n.digest())}function Qf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _r([n,r],0),new _r([s,i],0)]}class ql{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bs(`Invalid padding: ${n}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_r.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(_r.fromNumber(r)));return s.compare(r0)===1&&(s=new _r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=zf(e),[r,s]=Qf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ql(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=zf(e),[r,s]=Qf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ya(ce.min(),s,new xe(Ie),Sn(),ge())}}class Di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Di(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class ug{constructor(e,n){this.targetId=e,this.me=n}}class hg{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jf{constructor(){this.fe=0,this.ge=Xf(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new Di(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Xf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class s0{constructor(e){this.Le=e,this.Be=new Map,this.ke=Sn(),this.qe=Yf(),this.Qe=new xe(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(jc(i))if(r===0){const o=new te(i.path);this.Ue(n,o,ct.newNoDocument(o,ce.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=wr(r).toUint8Array()}catch(l){if(l instanceof Bm)return rs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ql(o,s,i)}catch(l){return rs(l instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&jc(c.target)){const l=new te(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ct.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ya(e,n,this.Qe,this.ke,r);return this.ke=Sn(),this.qe=Yf(),this.Qe=new xe(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Jf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Jf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Yf(){return new xe(te.comparator)}function Xf(){return new xe(te.comparator)}const i0={asc:"ASCENDING",desc:"DESCENDING"},o0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a0={and:"AND",or:"OR"};class c0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hc(t,e){return t.useProto3Json||fa(e)?e:{value:e}}function Ho(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function l0(t,e){return Ho(t,e.toTimestamp())}function tn(t){return be(!!t),ce.fromTimestamp(function(n){const r=Zn(n);return new We(r.seconds,r.nanos)}(t))}function $l(t,e){return Wc(t,e).canonicalString()}function Wc(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dg(t){const e=De.fromString(t);return be(yg(e)),e}function Kc(t,e){return $l(t.databaseId,e.path)}function ac(t,e){const n=dg(e);if(n.get(1)!==t.databaseId.projectId)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(mg(n))}function pg(t,e){return $l(t.databaseId,e)}function u0(t){const e=dg(t);return e.length===4?De.emptyPath():mg(e)}function Gc(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mg(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zf(t,e,n){return{name:Kc(t,e),fields:n.value.mapValue.fields}}function h0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string"),tt.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array),tt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?M.UNKNOWN:lg(h.code);return new J(f,h.message||"")}(o);n=new hg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ac(t,r.document.name),i=tn(r.document.updateTime),o=r.document.createTime?tn(r.document.createTime):ce.min(),c=new At({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ao(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ac(t,r.document),i=r.readTime?tn(r.readTime):ce.min(),o=ct.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ao([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ac(t,r.document),i=r.removedTargetIds||[];n=new Ao([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new e0(s,i),c=r.targetId;n=new ug(c,o)}}return n}function f0(t,e){let n;if(e instanceof Ni)n={update:Zf(t,e.key,e.value)};else if(e instanceof _a)n={delete:Kc(t,e.key)};else if(e instanceof rr)n={update:Zf(t,e.key,e.data),updateMask:T0(e.fieldMask)};else{if(!(e instanceof YR))return ae();n={verify:Kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof mi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof _i)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof yi)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:l0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function d0(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?tn(s.updateTime):tn(i);return o.isEqual(ce.min())&&(o=tn(i)),new zR(o,s.transformResults||[])}(n,e))):[]}function p0(t,e){return{documents:[pg(t,e.path)]}}function m0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pg(t,s);const i=function(h){if(h.length!==0)return _g(Wt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Ur(g.field),direction:y0(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Hc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function g0(t){let e=u0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=gg(p);return g instanceof Wt&&Hm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(O){return new $o(Br(O.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,fa(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,v=p.values||[];return new qo(v,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,v=p.values||[];return new qo(v,g)}(n.endAt)),MR(e,s,o,i,c,"F",l,h)}function _0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Br(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Br(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Br(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return je.create(Br(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>gg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function y0(t){return i0[t]}function v0(t){return o0[t]}function E0(t){return a0[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Br(t){return Xe.fromServerFormat(t.fieldPath)}function _g(t){return t instanceof je?function(n){if(n.op==="=="){if(Uf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(Ff(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(Ff(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:v0(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(s=>_g(s));return r.length===1?r[0]:{compositeFilter:{op:E0(n.op),filters:r}}}(t):ae()}function T0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.ct=e}}function w0(t){const e=g0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$c(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(){this.un=new R0}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Xn.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class R0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new as(0)}static kn(){return new as(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ei(r.mutation,s,Ot.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Us();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Sn();const o=Zs(),c=function(){return Zs()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof rr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ei(f.mutation,h,f.mutation.getFieldMask(),We.now())):o.set(h.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new S0(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Zs();let s=new xe((o,c)=>o-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Ot.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||ge()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Zm();f.forEach(g=>{if(!i.has(g)){const v=ag(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(pr());let c=-1,l=i;return o.next(h=>U.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ge())).next(f=>({batchId:c,changes:Xm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,l=>{const h=function(p,g){return new Oi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let c=Us();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ei(f.mutation,h,Ot.empty(),We.now()),pa(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:tn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:w0(s.bundledQuery),readTime:tn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.overlays=new xe(te.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=pr(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=pr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=pr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return U.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZR(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.Tr=new Ze(Ke.Er),this.dr=new Ze(Ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ke(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new De([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new De([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze(Ke.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(Ie);return n.forEach(s=>{const i=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new te(i),0);let c=new Ze(Ie);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),U.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ke(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.Mr=e,this.docs=function(){return new xe(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Sn();const o=n.path,c=new te(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||_R(gR(f),r)<=0||(s.has(f.key)||pa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new k0(this)}getSize(e){return U.resolve(this.size)}}class k0 extends b0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.persistence=e,this.Nr=new ms(n=>Ll(n),Fl),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Hl,this.targetCount=0,this.kr=as.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Vl(0),this.Kr=!1,this.Kr=!0,this.$r=new N0,this.referenceDelegate=e(this),this.Ur=new x0(this),this.indexManager=new A0,this.remoteDocumentCache=function(s){return new V0(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new I0(n),this.Gr=new C0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new O0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new D0(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new L0(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class L0 extends vR{constructor(e){super(),this.currentSequenceNumber=e}}class Wl{constructor(e){this.persistence=e,this.Jr=new Hl,this.Yr=null}static Zr(e){return new Wl(e)}get Xr(){if(this.Yr)return this.Yr;throw ae()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=te.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return DT()?8:ER(ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new F0;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ks()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(ks()<=_e.DEBUG&&X("QueryEngine","Query:",Fr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ks()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):U.resolve())}Yi(e,n){if($f(n))return U.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=$c(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,$c(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return $f(n)||s.isEqual(ce.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(ks()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fr(n)),this.rs(e,o,n,mR(s,-1)).next(c=>c))})}ts(e,n){let r=new Ze(Jm(e));return n.forEach((s,i)=>{pa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ks()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Xn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new xe(Ie),this._s=new ms(i=>Ll(i),Fl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function j0(t,e,n,r){return new B0(t,e,n,r)}async function vg(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ge();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function q0(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let v=U.resolve();return g.forEach(O=>{v=v.next(()=>f.getEntry(l,O)).next(N=>{const V=h.docVersions.get(O);be(V!==null),N.version.compareTo(V)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ge();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Eg(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function $0(t,e){const n=le(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(tt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),function(N,V,W){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(g,v,f)&&c.push(n.Ur.updateTargetData(i,v))});let l=Sn(),h=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(H0(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(ce.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return U.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function H0(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Sn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function W0(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function K0(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function zc(t,e,n){const r=le(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ci(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ed(t,e,n){const r=le(t);let s=ce.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=le(l),g=p._s.get(f);return g!==void 0?U.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,en(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:ge())).next(c=>(G0(r,FR(e),c),{documents:c,Ts:i})))}function G0(t,e,n){let r=t.us.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class td{constructor(){this.activeTargetIds=HR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class z0{constructor(){this.so=new td,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new td,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo=null;function cc(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class X0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=cc(),l=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(f=>(X("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw rs("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=J0[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=cc();return new Promise((o,c)=>{const l=new Dm;l.setWithCredentials(!0),l.listenOnce(Vm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case To.NO_ERROR:const f=l.getResponseJson();X(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case To.TIMEOUT:X(it,`RPC '${e}' ${i} timed out`),c(new J(M.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const p=l.getStatus();if(X(it,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const O=function(V){const W=V.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(W)>=0?W:M.UNKNOWN}(v.status);c(new J(O,v.message))}else c(new J(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new J(M.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{X(it,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(it,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=cc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Mm(),c=xm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(it,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,v=!1;const O=new Y0({Io:V=>{v?X(it,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(g||(X(it,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(it,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},To:()=>p.close()}),N=(V,W,B)=>{V.listen(W,q=>{try{B(q)}catch(K){setTimeout(()=>{throw K},0)}})};return N(p,Fs.EventType.OPEN,()=>{v||(X(it,`RPC '${e}' stream ${s} transport opened.`),O.yo())}),N(p,Fs.EventType.CLOSE,()=>{v||(v=!0,X(it,`RPC '${e}' stream ${s} transport closed`),O.So())}),N(p,Fs.EventType.ERROR,V=>{v||(v=!0,rs(it,`RPC '${e}' stream ${s} transport errored:`,V),O.So(new J(M.UNAVAILABLE,"The operation could not be completed")))}),N(p,Fs.EventType.MESSAGE,V=>{var W;if(!v){const B=V.data[0];be(!!B);const q=B,K=q.error||((W=q[0])===null||W===void 0?void 0:W.error);if(K){X(it,`RPC '${e}' stream ${s} received error:`,K);const fe=K.status;let de=function(T){const A=Be[T];if(A!==void 0)return lg(A)}(fe),w=K.message;de===void 0&&(de=M.INTERNAL,w="Unknown error status: "+fe+" with message "+K.message),v=!0,O.So(new J(de,w)),p.close()}else X(it,`RPC '${e}' stream ${s} received:`,B),O.bo(B)}}),N(c,km.STAT_EVENT,V=>{V.stat===Lc.PROXY?X(it,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Lc.NOPROXY&&X(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.wo()},0),O}}function lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return new c0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Tg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new J(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Z0 extends Ig{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=h0(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?tn(o.readTime):ce.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Gc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=jc(l)?{documents:p0(i,l)}:{query:m0(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=fg(i,o.resumeToken);const h=Hc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=Ho(i,o.snapshotVersion.toTimestamp());const h=Hc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=_0(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Gc(this.serializer),n.removeTarget=e,this.a_(n)}}class eb extends Ig{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=d0(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Gc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>f0(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Wc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Wc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(bn(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Pr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=le(l);h.L_.add(4),await Vi(h),h.q_.set("Unknown"),h.L_.delete(4),await Ea(h)}(this))})}),this.q_=new nb(r,s)}}async function Ea(t){if(Pr(t))for(const e of t.B_)await e(!0)}async function Vi(t){for(const e of t.B_)await e(!1)}function wg(t,e){const n=le(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Jl(n)?Ql(n):gs(n).r_()&&zl(n,e))}function Gl(t,e){const n=le(t),r=gs(n);n.N_.delete(e),r.r_()&&Ag(n,e),n.N_.size===0&&(r.r_()?r.o_():Pr(n)&&n.q_.set("Unknown"))}function zl(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).A_(e)}function Ag(t,e){t.Q_.xe(e),gs(t).R_(e)}function Ql(t){t.Q_=new s0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.q_.v_()}function Jl(t){return Pr(t)&&!gs(t).n_()&&t.N_.size>0}function Pr(t){return le(t).L_.size===0}function Rg(t){t.Q_=void 0}async function sb(t){t.q_.set("Online")}async function ib(t){t.N_.forEach((e,n)=>{zl(t,e)})}async function ob(t,e){Rg(t),Jl(t)?(t.q_.M_(e),Ql(t)):t.q_.set("Unknown")}async function ab(t,e,n){if(t.q_.set("Online"),e instanceof hg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wo(t,r)}else if(e instanceof Ao?t.Q_.Ke(e):e instanceof ug?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ce.min()))try{const r=await Eg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(tt.EMPTY_BYTE_STRING,f.snapshotVersion)),Ag(i,l);const p=new Wn(f.target,l,h,f.sequenceNumber);zl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Wo(t,r)}}async function Wo(t,e,n){if(!Ci(e))throw e;t.L_.add(1),await Vi(t),t.q_.set("Offline"),n||(n=()=>Eg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ea(t)})}function bg(t,e){return e().catch(n=>Wo(t,n,e))}async function Ta(t){const e=le(t),n=er(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;cb(e);)try{const s=await W0(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,lb(e,s)}catch(s){await Wo(e,s)}Sg(e)&&Pg(e)}function cb(t){return Pr(t)&&t.O_.length<10}function lb(t,e){t.O_.push(e);const n=er(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Sg(t){return Pr(t)&&!er(t).n_()&&t.O_.length>0}function Pg(t){er(t).start()}async function ub(t){er(t).p_()}async function hb(t){const e=er(t);for(const n of t.O_)e.m_(n.mutations)}async function fb(t,e,n){const r=t.O_.shift(),s=jl.from(r,e,n);await bg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ta(t)}async function db(t,e){e&&er(t).V_&&await async function(r,s){if(function(o){return t0(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();er(r).s_(),await bg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ta(r)}}(t,e),Sg(t)&&Pg(t)}async function rd(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Pr(n);n.L_.add(3),await Vi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ea(n)}async function pb(t,e){const n=le(t);e?(n.L_.delete(2),await Ea(n)):e||(n.L_.add(2),await Vi(n),n.q_.set("Unknown"))}function gs(t){return t.K_||(t.K_=function(n,r,s){const i=le(n);return i.w_(),new Z0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:sb.bind(null,t),Ro:ib.bind(null,t),mo:ob.bind(null,t),d_:ab.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Jl(t)?Ql(t):t.q_.set("Unknown")):(await t.K_.stop(),Rg(t))})),t.K_}function er(t){return t.U_||(t.U_=function(n,r,s){const i=le(n);return i.w_(),new eb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ub.bind(null,t),mo:db.bind(null,t),f_:hb.bind(null,t),g_:fb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ta(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Yl(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xl(t,e){if(bn("AsyncQueue",`${e}: ${t}`),Ci(t))return new J(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.W_=new xe(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ae():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new cs(e,n,Jr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class gb{constructor(){this.queries=id(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=id(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new J(M.ABORTED,"Firestore shutting down"))}}function id(){return new ms(t=>Qm(t),da)}async function Cg(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new mb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Xl(o,`Initialization of query '${Fr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Zl(n)}async function Og(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _b(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Zl(n)}function yb(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Zl(t){t.Y_.forEach(e=>{e.next()})}var Qc,od;(od=Qc||(Qc={})).ea="default",od.Cache="cache";class Ng{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Qc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.key=e}}class Vg{constructor(e){this.key=e}}class vb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=Jm(e),this.Ra=new Jr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new sd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),v=pa(this.query,p)?p:null,O=!!g&&this.mutatedKeys.has(g.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let V=!1;g&&v?g.data.isEqual(v.data)?O!==N&&(r.track({type:3,doc:v}),V=!0):this.ga(g,v)||(r.track({type:2,doc:v}),V=!0,(l&&this.Aa(v,l)>0||h&&this.Aa(v,h)<0)&&(c=!0)):!g&&v?(r.track({type:0,doc:v}),V=!0):g&&!v&&(r.track({type:1,doc:g}),V=!0,(l||h)&&(c=!0)),V&&(v?(o=o.add(v),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(v,O){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return N(v)-N(O)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new cs(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new sd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Vg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Dg(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return cs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Eb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Tb{constructor(e){this.key=e,this.va=!1}}class Ib{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ms(c=>Qm(c),da),this.Ma=new Map,this.xa=new Set,this.Oa=new xe(te.comparator),this.Na=new Map,this.La=new Hl,this.Ba={},this.ka=new Map,this.qa=as.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function wb(t,e,n=!0){const r=Ug(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await kg(r,e,n,!0),s}async function Ab(t,e){const n=Ug(t);await kg(n,e,!0,!1)}async function kg(t,e,n,r){const s=await K0(t.localStore,en(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Rb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&wg(t.remoteStore,s),c}async function Rb(t,e,n,r,s){t.Ka=(p,g,v)=>async function(N,V,W,B){let q=V.view.ma(W);q.ns&&(q=await ed(N.localStore,V.query,!1).then(({documents:w})=>V.view.ma(w,q)));const K=B&&B.targetChanges.get(V.targetId),fe=B&&B.targetMismatches.get(V.targetId)!=null,de=V.view.applyChanges(q,N.isPrimaryClient,K,fe);return cd(N,V.targetId,de.wa),de.snapshot}(t,p,g,v);const i=await ed(t.localStore,e,!0),o=new vb(e,i.Ts),c=o.ma(i.documents),l=Di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);cd(t,n,h.wa);const f=new Eb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function bb(t,e,n){const r=le(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!da(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Gl(r.remoteStore,s.targetId),Jc(r,s.targetId)}).catch(Pi)):(Jc(r,s.targetId),await zc(r.localStore,s.targetId,!0))}async function Sb(t,e){const n=le(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gl(n.remoteStore,r.targetId))}async function Pb(t,e,n){const r=xb(t);try{const s=await function(o,c){const l=le(o),h=We.now(),f=c.reduce((v,O)=>v.add(O.key),ge());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let O=Sn(),N=ge();return l.cs.getEntries(v,f).next(V=>{O=V,O.forEach((W,B)=>{B.isValidDocument()||(N=N.add(W))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,O)).next(V=>{p=V;const W=[];for(const B of c){const q=JR(B,p.get(B.key).overlayedDocument);q!=null&&W.push(new rr(B.key,q,jm(q.value.mapValue),vt.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,W,c)}).next(V=>{g=V;const W=V.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(v,V.batchId,W)})}).then(()=>({batchId:g.batchId,changes:Xm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new xe(Ie)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await ki(r,s.changes),await Ta(r.remoteStore)}catch(s){const i=Xl(s,"Failed to persist write");n.reject(i)}}async function xg(t,e){const n=le(t);try{const r=await $0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?be(o.va):s.removedDocuments.size>0&&(be(o.va),o.va=!1))}),await ki(n,r,e)}catch(r){await Pi(r)}}function ad(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=le(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(c)&&(h=!0)}),h&&Zl(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Cb(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new xe(te.comparator);o=o.insert(i,ct.newNoDocument(i,ce.min()));const c=ge().add(i),l=new ya(ce.min(),new Map,new xe(Ie),o,c);await xg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),eu(r)}else await zc(r.localStore,e,!1).then(()=>Jc(r,e,n)).catch(Pi)}async function Ob(t,e){const n=le(t),r=e.batch.batchId;try{const s=await q0(n.localStore,e);Lg(n,r,null),Mg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ki(n,s)}catch(s){await Pi(s)}}async function Nb(t,e,n){const r=le(t);try{const s=await function(o,c){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(be(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Lg(r,e,n),Mg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ki(r,s)}catch(s){await Pi(s)}}function Mg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Lg(t,e,n){const r=le(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Fg(t,r)})}function Fg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Gl(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),eu(t))}function cd(t,e,n){for(const r of n)r instanceof Dg?(t.La.addReference(r.key,e),Db(t,r)):r instanceof Vg?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Fg(t,r.key)):ae()}function Db(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),eu(t))}function eu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(De.fromString(e)),r=t.qa.next();t.Na.set(r,new Tb(n)),t.Oa=t.Oa.insert(n,r),wg(t.remoteStore,new Wn(en(Ul(n.path)),r,"TargetPurposeLimboResolution",Vl.oe))}}async function ki(t,e,n){const r=le(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Kl.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=le(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.$i,v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>U.forEach(g.Ui,v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Ci(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=f.os.get(g),O=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(O);f.os=f.os.insert(g,N)}}}(r.localStore,i))}async function Vb(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await vg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new J(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(n,r.hs)}}function kb(t,e){const n=le(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function Ug(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cb.bind(null,e),e.Ca.d_=_b.bind(null,e.eventManager),e.Ca.$a=yb.bind(null,e.eventManager),e}function xb(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ob.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nb.bind(null,e),e}class Ko{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=va(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return j0(this.persistence,new U0,e.initialUser,this.serializer)}Ga(e){return new M0(Wl.Zr,this.serializer)}Wa(e){return new z0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ko.provider={build:()=>new Ko};class Yc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ad(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vb.bind(null,this.syncEngine),await pb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gb}()}createDatastore(e){const n=va(e.databaseInfo.databaseId),r=function(i){return new X0(i)}(e.databaseInfo);return function(i,o,c,l){return new tb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new rb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>ad(this.syncEngine,n,0),function(){return nd.D()?new nd:new Q0}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new Ib(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Vi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Yc.provider={build:()=>new Yc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=Fm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uc(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ld(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Lb(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>rd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>rd(e.remoteStore,s)),t._onlineComponents=e}async function Lb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await uc(t,new Ko)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await uc(t,new Ko);return t._offlineComponents}async function jg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await ld(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await ld(t,new Yc))),t._onlineComponents}function Fb(t){return jg(t).then(e=>e.syncEngine)}async function qg(t){const e=await jg(t),n=e.eventManager;return n.onListen=wb.bind(null,e.syncEngine),n.onUnlisten=bb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ab.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Sb.bind(null,e.syncEngine),n}function Ub(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new Bg({next:g=>{f.Za(),o.enqueueAndForget(()=>Og(i,p));const v=g.docs.has(c);!v&&g.fromCache?h.reject(new J(M.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&l&&l.source==="server"?h.reject(new J(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ng(Ul(c.path),f,{includeMetadataChanges:!0,_a:!0});return Cg(i,p)}(await qg(t),t.asyncQueue,e,n,r)),r.promise}function Bb(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new Bg({next:g=>{f.Za(),o.enqueueAndForget(()=>Og(i,p)),g.fromCache&&l.source==="server"?h.reject(new J(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Ng(c,f,{includeMetadataChanges:!0,_a:!0});return Cg(i,p)}(await qg(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e,n){if(!n)throw new J(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jb(t,e,n,r){if(e===!0&&r===!0)throw new J(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hd(t){if(!te.isDocumentKey(t))throw new J(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fd(t){if(te.isDocumentKey(t))throw new J(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ia(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(t);throw new J(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$g((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oR;switch(r.type){case"firstParty":return new uR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ud.get(n);r&&(X("ComponentProvider","Removing Datastore"),ud.delete(n),r.terminate())}(this),Promise.resolve()}}function qb(t,e,n,r={}){var s;const i=(t=Lt(t,wa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ot.MOCK_USER;else{c=RT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new J(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ot(h)}t._authCredentials=new aR(new Lm(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _s(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Jn extends _s{constructor(e,n,r){super(e,n,Ul(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new te(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function SS(t,e,...n){if(t=$e(t),Hg("collection","path",e),t instanceof wa){const r=De.fromString(e,...n);return fd(r),new Jn(t,null,r)}{if(!(t instanceof Et||t instanceof Jn))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return fd(r),new Jn(t.firestore,null,r)}}function Wg(t,e,...n){if(t=$e(t),arguments.length===1&&(e=Fm.newId()),Hg("doc","path",e),t instanceof wa){const r=De.fromString(e,...n);return hd(r),new Et(t,null,new te(r))}{if(!(t instanceof Et||t instanceof Jn))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return hd(r),new Et(t.firestore,t instanceof Jn?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Tg(this,"async_queue_retry"),this.Vu=()=>{const r=lc();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=lc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new En;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ci(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw bn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Yl.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ae()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class sr extends wa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new pd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pd(e),this._firestoreClient=void 0,await e}}}function $b(t,e){const n=typeof t=="object"?t:zp(),r=typeof t=="string"?t:"(default)",s=Il(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wT("firestore");i&&qb(s,...i)}return s}function Aa(t){if(t._terminated)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Hb(t),t._firestoreClient}function Hb(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new wR(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$g(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Mb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(tt.fromBase64String(e))}catch(n){throw new J(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ls(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=/^__.*__$/;class Kb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ni(e,this.data,n,this.fieldTransforms)}}class Kg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class ru{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Go(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Gg(this.Cu)&&Wb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Gb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||va(e)}Qu(e,n,r,s=!1){return new ru({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Li(t){const e=t._freezeSettings(),n=va(t._databaseId);return new Gb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function su(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);au("Data must be an object, but it was:",o,r);const c=Jg(r,o);let l,h;if(i.merge)l=new Ot(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Xc(e,p,n);if(!o.contains(g))throw new J(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Xg(f,g)||f.push(g)}l=new Ot(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new Kb(new At(c),l,h)}class Ra extends Mi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ra}}class iu extends Mi{_toFieldTransform(e){return new og(e.path,new mi)}isEqual(e){return e instanceof iu}}class ou extends Mi{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new yi(e.serializer,tg(e.serializer,this.$u));return new og(e.path,n)}isEqual(e){return e instanceof ou&&this.$u===e.$u}}function zg(t,e,n,r){const s=t.Qu(1,e,n);au("Data must be an object, but it was:",s,r);const i=[],o=At.empty();Sr(r,(l,h)=>{const f=cu(e,l,n);h=$e(h);const p=s.Nu(f);if(h instanceof Ra)i.push(f);else{const g=Fi(h,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new Ot(i);return new Kg(o,c,s.fieldTransforms)}function Qg(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[Xc(e,r,n)],l=[s];if(i.length%2!=0)throw new J(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Xc(e,i[g])),l.push(i[g+1]);const h=[],f=At.empty();for(let g=c.length-1;g>=0;--g)if(!Xg(h,c[g])){const v=c[g];let O=l[g];O=$e(O);const N=o.Nu(v);if(O instanceof Ra)h.push(v);else{const V=Fi(O,N);V!=null&&(h.push(v),f.set(v,V))}}const p=new Ot(h);return new Kg(f,p,o.fieldTransforms)}function zb(t,e,n,r=!1){return Fi(n,t.Qu(r?4:3,e))}function Fi(t,e){if(Yg(t=$e(t)))return au("Unsupported field value:",e,t),Jg(t,e);if(t instanceof Mi)return function(r,s){if(!Gg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Fi(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:Ho(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ho(s.serializer,i)}}if(r instanceof tu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ls)return{bytesValue:fg(s.serializer,r._byteString)};if(r instanceof Et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$l(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof nu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Bl(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ia(r)}`)}(t,e)}function Jg(t,e){const n={};return Um(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(t,(r,s)=>{const i=Fi(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Yg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof tu||t instanceof ls||t instanceof Et||t instanceof Mi||t instanceof nu)}function au(t,e,n){if(!Yg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ia(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Xc(t,e,n){if((e=$e(e))instanceof xi)return e._internalPath;if(typeof e=="string")return cu(t,e);throw Go("Field path arguments must be of type string or ",t,!1,void 0,n)}const Qb=new RegExp("[~\\*/\\[\\]]");function cu(t,e,n){if(e.search(Qb)>=0)throw Go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xi(...e.split("."))._internalPath}catch{throw Go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Go(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(M.INVALID_ARGUMENT,c+t+l)}function Xg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Jb extends Zg{data(){return super.data()}}function lu(t,e){return typeof e=="string"?cu(t,e):e instanceof xi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uu{}class Xb extends uu{}function PS(t,e,...n){let r=[];e instanceof uu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof hu).length,c=i.filter(l=>l instanceof ba).length;if(o>1||o>0&&c>0)throw new J(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ba extends Xb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ba(e,n,r)}_apply(e){const n=this._parse(e);return e_(e._query,n),new _s(e.firestore,e.converter,qc(e._query,n))}_parse(e){const n=Li(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){gd(p,f);const v=[];for(const O of p)v.push(md(l,i,O));g={arrayValue:{values:v}}}else g=md(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||gd(p,f),g=zb(c,o,p,f==="in"||f==="not-in");return je.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function CS(t,e,n){const r=e,s=lu("where",t);return ba._create(s,r,n)}class hu extends uu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)e_(o,l),o=qc(o,l)}(e._query,n),new _s(e.firestore,e.converter,qc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function md(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new J(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zm(e)&&n.indexOf("/")!==-1)throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!te.isDocumentKey(r))throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Lf(t,new te(r))}if(n instanceof Et)return Lf(t,n._key);throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(n)}.`)}function gd(t,e){if(!Array.isArray(t)||t.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function e_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Zb{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Sr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Fe(o.doubleValue));return new nu(i)}convertGeoPoint(e){return new tu(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);be(yg(r));const s=new di(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class t_ extends Zg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ro extends t_{data(e={}){return super.data(e)}}class eS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ro(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ro(s._firestore,s._userDataWriter,c.doc.key,c.doc,new js(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ro(s._firestore,s._userDataWriter,c.doc.key,c.doc,new js(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:tS(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){t=Lt(t,Et);const e=Lt(t.firestore,sr);return Ub(Aa(e),t._key).then(n=>rS(e,t,n))}class n_ extends Zb{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function OS(t){t=Lt(t,_s);const e=Lt(t.firestore,sr),n=Aa(e),r=new n_(e);return Yb(t._query),Bb(n,t._query).then(s=>new eS(e,r,t,s))}function NS(t,e,n){t=Lt(t,Et);const r=Lt(t.firestore,sr),s=fu(t.converter,e,n);return Ui(r,[su(Li(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,vt.none())])}function DS(t,e,n,...r){t=Lt(t,Et);const s=Lt(t.firestore,sr),i=Li(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof xi?Qg(i,"updateDoc",t._key,e,n,r):zg(i,"updateDoc",t._key,e),Ui(s,[o.toMutation(t._key,vt.exists(!0))])}function VS(t){return Ui(Lt(t.firestore,sr),[new _a(t._key,vt.none())])}function kS(t,e){const n=Lt(t.firestore,sr),r=Wg(t),s=fu(t.converter,e);return Ui(n,[su(Li(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,vt.exists(!1))]).then(()=>r)}function Ui(t,e){return function(r,s){const i=new En;return r.asyncQueue.enqueueAndForget(async()=>Pb(await Fb(r),s,i)),i.promise}(Aa(t),e)}function rS(t,e,n){const r=n.docs.get(e._key),s=new n_(t);return new t_(t,s,e._key,r,new js(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Li(e)}set(e,n,r){this._verifyNotCommitted();const s=hc(e,this._firestore),i=fu(s.converter,n,r),o=su(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,vt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=hc(e,this._firestore);let o;return o=typeof(n=$e(n))=="string"||n instanceof xi?Qg(this._dataReader,"WriteBatch.update",i._key,n,r,s):zg(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,vt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=hc(e,this._firestore);return this._mutations=this._mutations.concat(new _a(n._key,vt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new J(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hc(t,e){if((t=$e(t)).firestore!==e)throw new J(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function xS(){return new iu("serverTimestamp")}function MS(t){return new ou("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){return Aa(t=Lt(t,sr)),new sS(t,e=>Ui(t,e))}(function(e,n=!0){(function(s){ps=s})(fs),ns(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new sr(new cR(r.getProvider("auth-internal")),new fR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Qn(Df,"4.7.3",e),Qn(Df,"4.7.3","esm2017")})();const iS={apiKey:"AIzaSyB8WQaZmOw5POUs2TvCA-89AyyFSn4uuCM",authDomain:"franchise-pos-959d6.firebaseapp.com",projectId:"franchise-pos-959d6",storageBucket:"franchise-pos-959d6.firebasestorage.app",messagingSenderId:"716844697746",appId:"1:716844697746:web:bfd9b461d9d2f326157e4b"},r_=Gp(iS),oS=sR(r_),aS=$b(r_),cS=()=>new Promise(t=>{const e=Gw(oS,n=>{e(),t(n)})}),lS=[{path:"/login",name:"Login",component:()=>pt(()=>import("./Login-PjcF_4HK.js"),__vite__mapDeps([0,1,2,3]))},{path:"/select-outlet",name:"OutletSelector",component:()=>pt(()=>import("./OutletSelector-Cn4697-H.js"),__vite__mapDeps([4,2,5])),meta:{requiresAuth:!0}},{path:"/",component:()=>pt(()=>import("./MainLayout-BDyNEXAr.js"),__vite__mapDeps([6,2,7])),meta:{requiresAuth:!0},children:[{path:"dashboard",name:"Dashboard",component:()=>pt(()=>import("./Dashboard-B8P8Aeie.js"),__vite__mapDeps([8,9,2,10]))},{path:"admin/manage-outlets",name:"ManageOutlets",component:()=>pt(()=>import("./ManageOutlets-i89g_CKf.js"),__vite__mapDeps([11,2,12])),meta:{role:"owner"}},{path:"admin/manage-staff",name:"ManageStaff",component:()=>pt(()=>import("./ManageStaff-Bmt8bSmx.js"),__vite__mapDeps([13,1,2,14])),meta:{role:"owner"}},{path:"admin/master-ingredients",name:"MasterIngredients",component:()=>pt(()=>import("./MasterIngredients-DyW9VYxl.js"),__vite__mapDeps([15,9,2,16])),meta:{role:"owner"}},{path:"admin/master-recipes",name:"MasterRecipes",component:()=>pt(()=>import("./MasterRecipes-BYfHHuA7.js"),__vite__mapDeps([17,9,2,18])),meta:{role:"owner"}},{path:"inventory",name:"Inventory",component:()=>pt(()=>import("./Inventory-AUCmCAA8.js"),__vite__mapDeps([19,9,2,20])),meta:{requiresOutlet:!0}},{path:"expenses",name:"Expenses",component:()=>pt(()=>import("./Expenses-FHuxqpFL.js"),__vite__mapDeps([21,2,22])),meta:{requiresOutlet:!0}},{path:"ledger",name:"Ledger",component:()=>pt(()=>import("./Ledger-D8J0dbfH.js"),__vite__mapDeps([23,24,2,25])),meta:{requiresOutlet:!0}},{path:"balance-sheet",name:"BalanceSheet",component:()=>pt(()=>import("./BalanceSheet-Db075G6-.js"),__vite__mapDeps([26,24,2,27])),meta:{requiresOutlet:!0}},{path:"reports",name:"Reports",component:()=>pt(()=>import("./Reports-D2juUo1X.js"),__vite__mapDeps([28,9,2,29])),meta:{requiresOutlet:!0}},{path:"pos",name:"POS",component:()=>pt(()=>import("./POS-CFPQKNdL.js"),__vite__mapDeps([30,9,2,31])),meta:{requiresOutlet:!0}},{path:"history",name:"History",component:()=>pt(()=>import("./History-DU_ieaNt.js"),__vite__mapDeps([32,9,2,33])),meta:{requiresOutlet:!0}},{path:"",redirect:"dashboard"}]},{path:"/:pathMatch(.*)*",redirect:"/dashboard"}],s_=mT({history:GE(),routes:lS});let xr=null;s_.beforeEach(async(t,e,n)=>{const r=await cS(),s=localStorage.getItem("active_outlet_id");if(t.matched.some(i=>i.meta.requiresAuth)&&!r)return n("/login");if(r){if(!xr||xr.uid!==r.uid){const o=await nS(Wg(aS,"users",r.uid));xr=o.exists()?{uid:r.uid,...o.data()}:null}const i=xr==null?void 0:xr.role;if(t.meta.role==="owner"&&i!=="owner"&&i!=="superadmin")return n("/dashboard");if(t.meta.requiresOutlet&&!s)return n("/select-outlet")}n()});const i_=nE(oE);i_.use(s_);i_.mount("#app");export{Bt as A,gS as B,DS as C,ea as D,kS as E,hn as F,xS as G,IS as H,NS as I,vS as J,Gp as K,iS as L,sR as M,TS as N,ES as O,fS as P,mS as Q,dl as R,VS as S,LS as T,fo as U,Zd as V,We as W,MS as X,Ep as a,uS as b,mv as c,vv as d,yt as e,vy as f,Uy as g,Oy as h,oS as i,nS as j,Wg as k,aS as l,OS as m,SS as n,_p as o,CS as p,PS as q,cy as r,hS as s,B_ as t,yS as u,pS as v,_S as w,dS as x,wS as y,sl as z};
