(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();var re,m,Ce,W,me,X={},xe=[],ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function P(e,t){for(var n in t)e[n]=t[n];return e}function we(e){var t=e.parentNode;t&&t.removeChild(e)}function $e(e,t,n){var s,l,r,c={};for(r in t)r=="key"?s=t[r]:r=="ref"?l=t[r]:c[r]=t[r];if(arguments.length>2&&(c.children=arguments.length>3?re.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return Y(e,c,s,l,null)}function Y(e,t,n,s,l){var r={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++Ce:l};return l==null&&m.vnode!=null&&m.vnode(r),r}function ie(e){return e.children}function J(e,t){this.props=e,this.context=t}function U(e,t){if(t==null)return e.__?U(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?U(e):null}function ke(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ke(e)}}function ge(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!ee.__r++||me!==m.debounceRendering)&&((me=m.debounceRendering)||setTimeout)(ee)}function ee(){for(var e;ee.__r=W.length;)e=W.sort(function(t,n){return t.__v.__b-n.__v.__b}),W=[],e.some(function(t){var n,s,l,r,c,f;t.__d&&(c=(r=(n=t).__v).__e,(f=n.__P)&&(s=[],(l=P({},r)).__v=r.__v+1,de(f,r,l,n.__n,f.ownerSVGElement!==void 0,r.__h!=null?[c]:null,s,c==null?U(r):c,r.__h),Se(s,r),r.__e!=c&&ke(r)))})}function Ne(e,t,n,s,l,r,c,f,h,g){var o,b,_,a,p,M,v,y=s&&s.__k||xe,T=y.length;for(n.__k=[],o=0;o<t.length;o++)if((a=n.__k[o]=(a=t[o])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?Y(null,a,null,null,a):Array.isArray(a)?Y(ie,{children:a},null,null,null):a.__b>0?Y(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(_=y[o])===null||_&&a.key==_.key&&a.type===_.type)y[o]=void 0;else for(b=0;b<T;b++){if((_=y[b])&&a.key==_.key&&a.type===_.type){y[b]=void 0;break}_=null}de(e,a,_=_||X,l,r,c,f,h,g),p=a.__e,(b=a.ref)&&_.ref!=b&&(v||(v=[]),_.ref&&v.push(_.ref,null,a),v.push(b,a.__c||p,a)),p!=null?(M==null&&(M=p),typeof a.type=="function"&&a.__k===_.__k?a.__d=h=Te(a,h,e):h=Ie(e,a,_,y,p,h),typeof n.type=="function"&&(n.__d=h)):h&&_.__e==h&&h.parentNode!=e&&(h=U(_))}for(n.__e=M,o=T;o--;)y[o]!=null&&Pe(y[o],y[o]);if(v)for(o=0;o<v.length;o++)Le(v[o],v[++o],v[++o])}function Te(e,t,n){for(var s,l=e.__k,r=0;l&&r<l.length;r++)(s=l[r])&&(s.__=e,t=typeof s.type=="function"?Te(s,t,n):Ie(n,s,s,l,s.__e,t));return t}function Ie(e,t,n,s,l,r){var c,f,h;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||l!=r||l.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(l),c=null;else{for(f=r,h=0;(f=f.nextSibling)&&h<s.length;h+=2)if(f==l)break e;e.insertBefore(l,r),c=r}return c!==void 0?c:l.nextSibling}function qe(e,t,n,s,l){var r;for(r in n)r==="children"||r==="key"||r in t||te(e,r,null,n[r],s);for(r in t)l&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||te(e,r,t[r],n[r],s)}function be(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||ze.test(t)?n:n+"px"}function te(e,t,n,s,l){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||be(e.style,t,"");if(n)for(t in n)s&&n[t]===s[t]||be(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?s||e.addEventListener(t,r?ye:ve,r):e.removeEventListener(t,r?ye:ve,r);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function ve(e){this.l[e.type+!1](m.event?m.event(e):e)}function ye(e){this.l[e.type+!0](m.event?m.event(e):e)}function de(e,t,n,s,l,r,c,f,h){var g,o,b,_,a,p,M,v,y,T,z,E,he,$,q,w=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(h=n.__h,f=t.__e=n.__e,t.__h=null,r=[f]),(g=m.__b)&&g(t);try{e:if(typeof w=="function"){if(v=t.props,y=(g=w.contextType)&&s[g.__c],T=g?y?y.props.value:g.__:s,n.__c?M=(o=t.__c=n.__c).__=o.__E:("prototype"in w&&w.prototype.render?t.__c=o=new w(v,T):(t.__c=o=new J(v,T),o.constructor=w,o.render=Ge),y&&y.sub(o),o.props=v,o.state||(o.state={}),o.context=T,o.__n=s,b=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),w.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=P({},o.__s)),P(o.__s,w.getDerivedStateFromProps(v,o.__s))),_=o.props,a=o.state,b)w.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(w.getDerivedStateFromProps==null&&v!==_&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,T),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,T)===!1||t.__v===n.__v){for(o.props=v,o.state=o.__s,t.__v!==n.__v&&(o.__d=!1),o.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(Q){Q&&(Q.__=t)}),z=0;z<o._sb.length;z++)o.__h.push(o._sb[z]);o._sb=[],o.__h.length&&c.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,T),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(_,a,p)})}if(o.context=T,o.props=v,o.__v=t,o.__P=e,E=m.__r,he=0,"prototype"in w&&w.prototype.render){for(o.state=o.__s,o.__d=!1,E&&E(t),g=o.render(o.props,o.state,o.context),$=0;$<o._sb.length;$++)o.__h.push(o._sb[$]);o._sb=[]}else do o.__d=!1,E&&E(t),g=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++he<25);o.state=o.__s,o.getChildContext!=null&&(s=P(P({},s),o.getChildContext())),b||o.getSnapshotBeforeUpdate==null||(p=o.getSnapshotBeforeUpdate(_,a)),q=g!=null&&g.type===ie&&g.key==null?g.props.children:g,Ne(e,Array.isArray(q)?q:[q],t,n,s,l,r,c,f,h),o.base=t.__e,t.__h=null,o.__h.length&&c.push(o),M&&(o.__E=o.__=null),o.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Qe(n.__e,t,n,s,l,r,c,h);(g=m.diffed)&&g(t)}catch(Q){t.__v=null,(h||r!=null)&&(t.__e=f,t.__h=!!h,r[r.indexOf(f)]=null),m.__e(Q,t,n)}}function Se(e,t){m.__c&&m.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){m.__e(s,n.__v)}})}function Qe(e,t,n,s,l,r,c,f){var h,g,o,b=n.props,_=t.props,a=t.type,p=0;if(a==="svg"&&(l=!0),r!=null){for(;p<r.length;p++)if((h=r[p])&&"setAttribute"in h==!!a&&(a?h.localName===a:h.nodeType===3)){e=h,r[p]=null;break}}if(e==null){if(a===null)return document.createTextNode(_);e=l?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,_.is&&_),r=null,f=!1}if(a===null)b===_||f&&e.data===_||(e.data=_);else{if(r=r&&re.call(e.childNodes),g=(b=n.props||X).dangerouslySetInnerHTML,o=_.dangerouslySetInnerHTML,!f){if(r!=null)for(b={},p=0;p<e.attributes.length;p++)b[e.attributes[p].name]=e.attributes[p].value;(o||g)&&(o&&(g&&o.__html==g.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(qe(e,_,b,l,f),o)t.__k=[];else if(p=t.props.children,Ne(e,Array.isArray(p)?p:[p],t,n,s,l&&a!=="foreignObject",r,c,r?r[0]:n.__k&&U(n,0),f),r!=null)for(p=r.length;p--;)r[p]!=null&&we(r[p]);f||("value"in _&&(p=_.value)!==void 0&&(p!==e.value||a==="progress"&&!p||a==="option"&&p!==b.value)&&te(e,"value",p,b.value,!1),"checked"in _&&(p=_.checked)!==void 0&&p!==e.checked&&te(e,"checked",p,b.checked,!1))}return e}function Le(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(s){m.__e(s,n)}}function Pe(e,t,n){var s,l;if(m.unmount&&m.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||Le(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(r){m.__e(r,t)}s.base=s.__P=null,e.__c=void 0}if(s=e.__k)for(l=0;l<s.length;l++)s[l]&&Pe(s[l],t,n||typeof e.type!="function");n||e.__e==null||we(e.__e),e.__=e.__e=e.__d=void 0}function Ge(e,t,n){return this.constructor(e,n)}function Ke(e,t,n){var s,l,r;m.__&&m.__(e,t),l=(s=typeof n=="function")?null:n&&n.__k||t.__k,r=[],de(t,e=(!s&&n||t).__k=$e(ie,null,[e]),l||X,X,t.ownerSVGElement!==void 0,!s&&n?[n]:l?null:t.firstChild?re.call(t.childNodes):null,r,!s&&n?n:l?l.__e:t.firstChild,s),Se(r,e)}re=xe.slice,m={__e:function(e,t,n,s){for(var l,r,c;t=t.__;)if((l=t.__c)&&!l.__)try{if((r=l.constructor)&&r.getDerivedStateFromError!=null&&(l.setState(r.getDerivedStateFromError(e)),c=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,s||{}),c=l.__d),c)return l.__E=l}catch(f){e=f}throw e}},Ce=0,J.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},n),this.props)),e&&P(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ge(this))},J.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ge(this))},J.prototype.render=ie,W=[],ee.__r=0;function Ae(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ae(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function d(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=Ae(e))&&(s&&(s+=" "),s+=t);return s}const Ye=d,H=d,_e=d,pe=d,se=d,F=d,le=d,Je=d,j=d,Xe=d,Me=d,et=d,S=d,He=d,C=d,tt=d,k=d,je=d,A=d,fe=d,B=d,Be=d,De=d,x=d,nt=d,L=d,ne=d,ot=d,N=d,O=d,ae=d,rt=d,oe=d,it=d,Ve=d,I=d,D=d,st=d,V=d,ce=d,Re=d,u=d;var lt=0;function i(e,t,n,s,l){var r,c,f={};for(c in t)c=="ref"?r=t[c]:f[c]=t[c];var h={type:e,props:f,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--lt,__source:l,__self:s};if(typeof e=="function"&&(r=e.defaultProps))for(c in r)f[c]===void 0&&(f[c]=r[c]);return m.vnode&&m.vnode(h),h}const R=u(V("text-white")),Z=u(R);u(Z,D("font-medium"));u(V("text-blue-300"));const at=u(Z,I("text-xl","sm:text-3xl"));function Ee({children:e}){return i("h3",{className:at,children:e})}const ct=u(Z,Ve("text-justify"));function G({children:e}){return i("h3",{className:ct,children:e})}const We=u(V("hover:text-yellow-100","group-hover:text-yellow-100")),Ue=u(V("text-transparent"),Ye("bg-clip-text"),_e("bg-gradient-to-r"),pe("from-pink-300","via-red-500","to-yellow-300"),Me("animate-shimmering")),ut=u(Ue,I("text-4xl","sm:text-6xl","md:text-8xl"),D("font-bold"));function dt({children:e}){return i("h1",{className:ut,children:e})}const _t=u(Z,I("text-lg","sm:text-xl","md:text-3xl"));function pt({children:e}){return i("h2",{className:_t,children:e})}const ft=u(Z,I("text-xl","sm:text-2xl","md:text-4xl"));function ht({children:e}){return i("h2",{className:ft,children:e})}const mt=u(Ue,I("text-xl","sm:text-4xl"),D("font-bold"));function gt({children:e}){return i("h3",{className:mt,children:e})}const bt=u(R,I("text-base","sm:text-xl","md:text-2xl"));function vt({children:e}){return i("h4",{className:bt,children:e})}const yt=u(R,st("leading-tight"),I("text-sm","sm:text-base","md:text-xl"),Ve("text-justify"));function Ct({children:e}){return i("p",{className:yt,children:e})}const xt=u(We,R,I("text-base","sm:text-xl","md:text-2xl"),D("font-semibold"));function wt({children:e}){return i("p",{className:xt,children:e})}const kt=u(We,R,I("text-base","sm:text-lg"),D("font-medium"));function Fe({children:e}){return i("p",{className:kt,children:e})}u(I("text-3xl"));const Nt=u(R,D("font-semibold"),I("text-xl","sm:text-3xl"));function Tt({children:e}){return i("p",{className:Nt,children:e})}const Oe=u(x("flex"),S("flex-row"),N("w-3/4","md:w-1/2"),O("max-w-5xl"),De("space-x-2"),C("items-baseline"));function Ze(){return i("div",{className:u(je("grow"),le("border-t-2","sm:border-t-4"),se("border-gray-400"))})}const It=()=>i("div",{className:Oe,children:[i(Ee,{children:"About me"}),i(Ze,{})]}),St=()=>i("div",{className:Oe,children:[i(Ze,{}),i(Ee,{children:"Some things I've built"})]}),Lt=u(B("py-10"),x("flex"),S("flex-col"),k("justify-center"),C("items-center"),De("space-y-6"),L("relative"),j("group:opacity-100"),fe("group")),ue=u(L("absolute"),N("w-96"),ae("h-96"),F("rounded-full"),Re("blur-xl","filter"),Je("mix-blend-multiply"),j("opacity-80","group-hover:opacity-0"),Xe("duration-500"),Me("animate-blob"),x("hidden","lg:block")),Pt=u(x("flex"),S("flex-row"),k("justify-between"),C("items-center"),N("w-full"),O("max-w-3xl"),A("gap-3"),He("flex-wrap"));function At(){return i("section",{className:Lt,id:"about",children:[i("div",{className:u(ue,ne("left-10"),H("bg-purple-400"))}),i("div",{className:u(ue,H("bg-orange-400"))}),i("div",{className:u(ue,ne("right-8"),H("bg-blue-400"))}),i(It,{}),i("div",{className:Pt,children:[i(G,{children:"Hi! I'm Anton. I love coding, solving problems and making positive impact."}),i(G,{children:"I've started programming at the university. It was a course in C where we had to learn how to manage memory, use pointers and all of that low-level stuff. Then there were some more courses in C++, Python, a project using C#. It was a good start and then I I kept learning programming by myself and I never stopped."}),i(G,{children:"Recently, I was mainly a backend developer but I've always felt incomplete as I didn't know how to make a UI using web technologies as it is was a great part of a modern app. And now I know! Being a full-stack developer means I can bring a project from concept to implementation."}),i(G,{children:"I've worked with different technologies and languages. In my work and projects I mainly use Python, TypeScript, SQL\\NoSQL databases."})]})]})}const Mt=u(x("flex"),k("justify-center"),C("items-center"),B("pb-10"));function Ht(){return i("footer",{children:i("div",{className:Mt,style:" text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor; ",children:i(Tt,{children:"Thanks for scrolling!"})})})}const jt=u(x("flex"),S("flex-row"),k("justify-center"),C("items-center"),rt("min-h-screen"),A("gap-3","sm:gap-6")),K=u(oe("fill-white"),j("opacity-60","hover:opacity-100"),N("w-5","sm:w-7","md:w-10"),ae("h-5","sm:h-7","md:h-10"),oe("fill-current"),V("text-white","hover:text-yellow-100")),Bt=[{name:"telegram",link:"https://t.me/anthonythetrader",svg:i("svg",{className:K,viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M27.6822 3.93122C27.2322 3.54962 26.5254 3.49502 25.7946 3.78842H25.7934C25.0248 4.09682 4.03678 13.0992 3.18238 13.467C3.02698 13.521 1.66978 14.0274 1.80958 15.1554C1.93438 16.1724 3.02518 16.5936 3.15838 16.6422L8.49418 18.4692C8.84818 19.6476 10.1532 23.9952 10.4418 24.924C10.6218 25.503 10.9152 26.2638 11.4294 26.4204C11.8806 26.5944 12.3294 26.4354 12.6198 26.2074L15.882 23.1816L21.1482 27.2886L21.2736 27.3636C21.6312 27.522 21.9738 27.6012 22.3008 27.6012C22.5534 27.6012 22.7958 27.5538 23.0274 27.459C23.8164 27.135 24.132 26.3832 24.165 26.298L28.0986 5.85182C28.3386 4.75982 28.005 4.20422 27.6822 3.93122ZM13.2 19.2L11.4 24L9.59999 18L23.4 7.80002L13.2 19.2Z"})})},{name:"email",link:"mailto:donanthonywins@gmail.com",svg:i("svg",{className:K,viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",children:[i("path",{d:"M15.0586 12.3047C13.6046 12.3047 12.4219 13.4875 12.4219 14.9414C12.4219 16.3954 13.6046 17.5781 15.0586 17.5781C16.5125 17.5781 17.6953 16.3954 17.6953 14.9414C17.6953 13.4875 16.5125 12.3047 15.0586 12.3047Z"}),i("path",{d:"M14.9414 0C6.70254 0 0 6.70254 0 14.9414C0 23.1803 6.70254 30 14.9414 30C23.1803 30 30 23.1803 30 14.9414C30 6.70254 23.1803 0 14.9414 0ZM21.2109 19.3359C20.0231 19.3359 18.9755 18.7406 18.3388 17.8362C17.533 18.7483 16.3684 19.3359 15.0586 19.3359C12.6356 19.3359 10.6641 17.3644 10.6641 14.9414C10.6641 12.5184 12.6356 10.5469 15.0586 10.5469C16.0516 10.5469 16.9586 10.8905 17.6953 11.4482V11.4258C17.6953 10.94 18.0884 10.5469 18.5742 10.5469C19.06 10.5469 19.4531 10.94 19.4531 11.4258C19.4531 13.3805 19.4531 13.8647 19.4531 15.8203C19.4531 16.7893 20.2419 17.5781 21.2109 17.5781C22.18 17.5781 22.9688 16.7893 22.9688 15.8203C22.9688 9.93803 19.0763 7.03125 15.0586 7.03125C10.6967 7.03125 7.14844 10.5795 7.14844 14.9414C7.14844 19.3033 10.6967 22.8516 15.0586 22.8516C16.8164 22.8516 18.4789 22.2885 19.8669 21.2225C20.7939 20.5148 21.8555 21.9118 20.938 22.6164C19.2394 23.9201 17.2069 24.6094 15.0586 24.6094C9.72768 24.6094 5.39062 20.2723 5.39062 14.9414C5.39062 9.61049 9.72768 5.27344 15.0586 5.27344C19.9158 5.27344 24.7266 8.85557 24.7266 15.8203C24.7266 17.7592 23.1499 19.3359 21.2109 19.3359Z"})]})},{name:"linkedin",link:"https://www.linkedin.com/in/anton-buev-6a1127254/",svg:i("svg",{className:K,viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M24.375 0H5.625C2.51769 0 0 2.51769 0 5.625V24.375C0 27.4823 2.51769 30 5.625 30H24.375C27.4823 30 30 27.4823 30 24.375V5.625C30 2.51769 27.4823 0 24.375 0ZM9.27577 25.4642H4.61538L4.58885 11.5119H9.24923L9.27577 25.4642ZM6.82846 9.68538H6.79962C5.27885 9.68538 4.29462 8.63769 4.29462 7.32923C4.29462 5.99192 5.30885 4.97423 6.85846 4.97423C8.40923 4.97423 9.36346 5.99192 9.39231 7.32923C9.39231 8.63654 8.40808 9.68538 6.82846 9.68538ZM25.4331 25.4654H20.7312V17.8835C20.7312 16.0512 20.2454 14.8015 18.6058 14.8015C17.355 14.8015 16.6777 15.645 16.35 16.4596C16.23 16.7515 16.2 17.1565 16.2 17.5638V25.4665H11.475L11.4485 11.5119H16.1735L16.2 13.4792C16.8012 12.5492 17.8085 11.2258 20.2154 11.2258C23.1969 11.2258 25.4319 13.1735 25.4319 17.3608V25.4654H25.4331Z"})})},{name:"github",link:"https://github.com/soapkelele",svg:i("svg",{className:K,viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M10.6746 28.1016C11.1012 27.918 11.4 27.4938 11.4 27V23.76C11.4 23.6418 11.4096 23.5188 11.4246 23.394C11.4162 23.3964 11.4084 23.3982 11.4 23.4C11.4 23.4 9.60001 23.4 9.24001 23.4C8.34001 23.4 7.56001 23.04 7.20001 22.32C6.78001 21.54 6.60001 20.22 5.52001 19.5C5.34001 19.38 5.46001 19.2 5.82001 19.2C6.18001 19.26 6.96001 19.74 7.44001 20.4C7.98001 21.06 8.52001 21.6 9.48001 21.6C10.9722 21.6 11.772 21.525 12.2532 21.267C12.8136 20.4336 13.5894 19.8 14.4 19.8V19.785C10.9992 19.6758 8.82661 18.5454 7.81501 16.8C5.61601 16.8252 3.70141 17.043 2.60881 17.2242C2.57401 17.028 2.54401 16.8306 2.51821 16.632C3.59641 16.4544 5.42401 16.2438 7.52521 16.2036C7.45801 16.038 7.39981 15.8682 7.35061 15.6942C5.24401 15.5874 3.42601 15.6708 2.43841 15.7524C2.42641 15.5532 2.41021 15.3546 2.40781 15.153C3.39721 15.072 5.16601 14.991 7.21861 15.0864C7.17121 14.7864 7.14061 14.4798 7.14061 14.1606C7.14061 13.1406 7.50061 12.0606 8.16061 11.1606C7.86061 10.1406 7.44061 7.98061 8.28061 7.20061C9.90061 7.20061 11.0406 7.98061 11.5806 8.46061C12.6 8.04001 13.74 7.80001 15 7.80001C16.26 7.80001 17.4 8.04001 18.36 8.46001C18.9 7.98001 20.04 7.20001 21.66 7.20001C22.56 8.04001 22.08 10.2 21.78 11.16C22.44 12.06 22.8 13.08 22.74 14.16C22.74 14.4504 22.713 14.7306 22.674 15.0054C24.7734 14.9022 26.5902 14.985 27.5964 15.0666C27.5952 15.2688 27.5766 15.4662 27.5658 15.666C26.5632 15.5832 24.7008 15.498 22.5504 15.6126C22.497 15.8142 22.4322 16.0104 22.3554 16.2006C24.483 16.2282 26.3544 16.434 27.4842 16.614C27.4584 16.8132 27.4284 17.0106 27.3936 17.2062C26.2464 17.0226 24.291 16.8078 22.0662 16.797C21.0672 18.5238 18.9342 19.65 15.6 19.7814V19.8C17.16 19.8 18.6 22.14 18.6 23.76V27C18.6 27.4938 18.8988 27.918 19.3254 28.1016C24.822 26.2824 28.8 21.0984 28.8 15C28.8 7.39081 22.6098 1.20001 15 1.20001C7.39021 1.20001 1.20001 7.39081 1.20001 15C1.20001 21.0984 5.17801 26.2824 10.6746 28.1016Z"})})}],Dt=u(x("flex"),S("flex-col"),A("gap-3","md:gap-6"),k("justify-evenly"),C("items-center")),Vt=()=>i("ul",{className:Dt,children:Bt.map(e=>i("li",{children:i("a",{href:e.link,alt:e.name,target:"_blank",children:e.svg})}))});function Rt(){return i("section",{className:jt,id:"home",children:[i(Vt,{}),i("div",{children:[i(pt,{children:"Hi \u{1F44B}, my name is"}),i(dt,{children:" Anton Buev"}),i(ht,{children:"I'm a software developer"})]})]})}const Et=u(Be("mx-auto"),N("w-full"),O("max-w-6xl"),ae("h-16"),k("justify-between"),C("items-center"),L("fixed"),B("py-4","px-20"),H("bg-black-background"),ot("z-10")),Wt=u(x("flex"),k("justify-end"),C("items-center"),N("w-full"),A("gap-3")),Ut=u(x("flex"),S("flex-row"),k("justify-end"),C("items-center"),A("gap-3")),Ft=u(fe("group"),L("relative")),Ot=u(L("absolute"),ne("-inset-0.5"),pe("from-pink-600","via-red-500","to-orange-500"),F("rounded-lg"),et("blur"),j("opacity-75","group-hover:opacity-100"),ce("transition","duration-200"),_e("bg-gradient-to-r")),Zt=u(L("relative"),F("rounded-lg"),B("px-2","py-1"),H("bg-black-background"),se("border-gray-400"),ce("duration-200","transition"),le("border-1")),zt=[{buttonName:"home",address:"#home"},{buttonName:"about",address:"#about"},{buttonName:"projects",address:"#projects"}],$t=()=>i("ul",{className:Ut,children:zt.map(e=>i("a",{href:e.address,children:i("li",{children:i(Fe,{children:e.buttonName})})}))}),qt=()=>i("div",{className:Ft,children:[i("div",{className:Ot}),i("button",{className:Zt,children:i("a",{href:"/resume.pdf",target:"_blank",children:i(Fe,{children:"resume"})})})]});function Qt(){return i("header",{className:Et,children:i("nav",{className:Wt,children:[i($t,{}),i(qt,{})]})})}const Gt=u(N("w-full"),L("relative"),H("bg-black-background"),F("rounded-lg"),B("p-4","md:p-6"),x("flex"),S("flex-col"),se("border-gray-400"),C("items-start"),A("gap-2","sm:gap-3"),ce("ease-in-out","duration-1000","transition"),it("group-hover:scale-102"),le("border-1")),Kt=u(x("flex"),S("flex-row"),He("flex-wrap"),k("justify-evenly"),C("items-center"),N("w-full"),A("gap-2"));function Yt(){return i("div",{className:u(je("grow"),se("border-b-gray-400"),tt("self-center"),N("w-full"),le("border-b-0.5"))})}const Jt=u(x("flex"),C("items-center"),k("justify-between"),N("w-full")),Xt=u(oe("fill-white"),j("opacity-60","hover:!opacity-100","group-hover:opacity-80"),N("w-10"),ae("h-10"),oe("fill-current"),V("text-white","hover:!text-yellow-100"));function en({link:e}){return i("a",{href:e,alt:"github",target:"_blank",children:i("svg",{viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",className:Xt,children:i("path",{d:"M10.6746 28.1016C11.1012 27.918 11.4 27.4938 11.4 27V23.76C11.4 23.6418 11.4096 23.5188 11.4246 23.394C11.4162 23.3964 11.4084 23.3982 11.4 23.4C11.4 23.4 9.60001 23.4 9.24001 23.4C8.34001 23.4 7.56001 23.04 7.20001 22.32C6.78001 21.54 6.60001 20.22 5.52001 19.5C5.34001 19.38 5.46001 19.2 5.82001 19.2C6.18001 19.26 6.96001 19.74 7.44001 20.4C7.98001 21.06 8.52001 21.6 9.48001 21.6C10.9722 21.6 11.772 21.525 12.2532 21.267C12.8136 20.4336 13.5894 19.8 14.4 19.8V19.785C10.9992 19.6758 8.82661 18.5454 7.81501 16.8C5.61601 16.8252 3.70141 17.043 2.60881 17.2242C2.57401 17.028 2.54401 16.8306 2.51821 16.632C3.59641 16.4544 5.42401 16.2438 7.52521 16.2036C7.45801 16.038 7.39981 15.8682 7.35061 15.6942C5.24401 15.5874 3.42601 15.6708 2.43841 15.7524C2.42641 15.5532 2.41021 15.3546 2.40781 15.153C3.39721 15.072 5.16601 14.991 7.21861 15.0864C7.17121 14.7864 7.14061 14.4798 7.14061 14.1606C7.14061 13.1406 7.50061 12.0606 8.16061 11.1606C7.86061 10.1406 7.44061 7.98061 8.28061 7.20061C9.90061 7.20061 11.0406 7.98061 11.5806 8.46061C12.6 8.04001 13.74 7.80001 15 7.80001C16.26 7.80001 17.4 8.04001 18.36 8.46001C18.9 7.98001 20.04 7.20001 21.66 7.20001C22.56 8.04001 22.08 10.2 21.78 11.16C22.44 12.06 22.8 13.08 22.74 14.16C22.74 14.4504 22.713 14.7306 22.674 15.0054C24.7734 14.9022 26.5902 14.985 27.5964 15.0666C27.5952 15.2688 27.5766 15.4662 27.5658 15.666C26.5632 15.5832 24.7008 15.498 22.5504 15.6126C22.497 15.8142 22.4322 16.0104 22.3554 16.2006C24.483 16.2282 26.3544 16.434 27.4842 16.614C27.4584 16.8132 27.4284 17.0106 27.3936 17.2062C26.2464 17.0226 24.291 16.8078 22.0662 16.797C21.0672 18.5238 18.9342 19.65 15.6 19.7814V19.8C17.16 19.8 18.6 22.14 18.6 23.76V27C18.6 27.4938 18.8988 27.918 19.3254 28.1016C24.822 26.2824 28.8 21.0984 28.8 15C28.8 7.39081 22.6098 1.20001 15 1.20001C7.39021 1.20001 1.20001 7.39081 1.20001 15C1.20001 21.0984 5.17801 26.2824 10.6746 28.1016Z"})})})}function tn({project:e}){return i("div",{className:Gt,children:[i("div",{className:Jt,children:[i("a",{href:e==null?void 0:e.url,target:"_blank",children:i(gt,{children:e.title})}),(e==null?void 0:e.github)&&i(en,{link:e.github})]}),i(vt,{children:e.subtitle}),e.description.map(t=>i(Ct,{children:t})),i(Yt,{}),i("ul",{className:Kt,children:e.technologies.map(t=>i("li",{children:i(wt,{children:t})}))})]})}const nn=[{title:"@surfwaybookingbot",subtitle:"Telegram bot for booking surf classes.",url:"https://t.me/surfwaybookingbot",description:["This is my biggest and most complex bot I've done. It automates the process of booking classes, purchasing and activating certificates, and making deposits. I've connected it to a payment solution and made integration with a CRM system. The bot features calendar for choosing dates of classes which is implemented using native telegram buttons. The initial schema of database was totally redisigned by me to make it possible to store all types of calendars, classes and certificates. It also has a messaging system. Metabase is used to provide charts and tables for analytics. The bot and metabase run in Docker containers."],technologies:["Python","MySQL","Redis","Docker","Metabase"]},{title:"@workoutybot",subtitle:"Telegram bot for saving workouts and weight measurements.",url:"https://t.me/workoutybot",description:["Workoutybot is my favourite pet project. I love sports and some time ago I didn't find an app which would be simple enough and better than a plain textbook, so I created this bot. It provides a minimalistic interface with a calendar to view and save workouts. I also added a graph chart to view weight progress.","I wrote an article on vc.ru promoting this bot. More than 2000+ users have registered since then and they are still coming."],technologies:["Python","PostgreSQL","Redis","Docker","TypeScript"]},{title:"antonbuev.com",subtitle:"This is this website!",url:"https://antonbuev.com/",github:"https://github.com/SOAPkelele/my-landing",description:["I think any developer needs one! I've made it to gather all info about my projects and myself. I'll try to keep updated with the latest info."],technologies:["TypeScript","TailwindCSS","React"]},{title:"@ltuniversity_bot",subtitle:"Multilingual Telegram bot for crypto quizzes.",url:"https://t.me/ltuniversity_bot",description:["Beatiful Telegram bot for taking polls from LocalTrade University. It utilizes built-in telegram quizzes for a seamless experience. It is available in 4 languages and has a small admin panel where you can get stats. Adding new polls and questions is automated by parsing google spreadsheet."],technologies:["Python","PostgreSQL","Docker"]},{title:"Smart camera",subtitle:"Raspberry Pi and camera to detect people.",github:"https://github.com/soapkelele/smart-camera",description:["A coursework project for Sberbank's internal use. It's a program to identify people who perform maintenance and repair of equipment in the office environment. I found, trained and compressed a neural network so we could start it on a Raspberry  Pi."],technologies:["Python","Raspberry Pi","OpenCV","YoloV4","TFLite"]}],on=u(B("py-20"),x("flex"),S("flex-col"),k("justify-center"),C("items-center"),A("gap-4","sm:gap-6")),rn=u(x("flex"),S("flex-col"),k("justify-center"),C("items-center"),N("w-full"),O("max-w-4xl"),L("relative"),fe("group")),sn=u(L("absolute"),ne("inset-1","group-hover:-inset-x-3","group-hover:-inset-y-2"),_e("bg-gradient-to-r"),pe("from-pink-600","via-red-500","to-orange-500"),F("rounded-lg"),j("opacity-75","group-hover:opacity-100"),ce("duration-1000","group-hover:duration-1000","animate-tilt"),Re("group-hover:blur"));function ln(){return i("section",{className:on,id:"projects",children:[i(St,{}),nn.map(e=>i("div",{className:rn,children:[i("div",{className:sn}),i(tn,{project:e})]}))]})}const an=u(nt("container"),Be("mx-auto"),O("max-w-6xl"));function cn({children:e}){return i("div",{className:an,children:e})}function un(){return i(cn,{children:[i(Qt,{}),i(Rt,{}),i(At,{}),i(ln,{}),i(Ht,{})]})}Ke(i(un,{}),document.getElementById("root"));
