(function(){var e={1358:function(){function e(e){const t=e.clientX-50,n=e.clientY-50;let r=document.getElementById("cursorBlur");r.style.opacity="100%",r.style.left=t+"px",r.style.top=n+"px"}function t(){document.getElementById("cursorBlur").style.opacity="0"}document.addEventListener("mousemove",e),document.addEventListener("mouseleave",t)},5872:function(e,t,n){"use strict";var r=n(5130),i=n(6768);function a(e,t,n,r,a,o){const s=(0,i.g2)("ScrollAnimator"),l=(0,i.g2)("HomeSpread"),c=(0,i.g2)("SkillsSection"),u=(0,i.g2)("ProjectSection"),d=(0,i.g2)("MainFooter");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(s),(0,i.bF)(l),(0,i.bF)(c),(0,i.bF)(u),(0,i.bF)(d)],64)}const o={id:"progress"};function s(e,t,n,r,a,s){return(0,i.uX)(),(0,i.CE)("div",o)}var l={name:"ScrollAnimator"},c=n(1241);const u=(0,c.A)(l,[["render",s],["__scopeId","data-v-faf45fa4"]]);var d=u;const f={id:"firstFullScreen"},h=(0,i.Lk)("div",{id:"nameContainer"},[(0,i.Lk)("h1",{id:"bigName"},"Oliver Heffernan"),(0,i.Lk)("h2",null,"Software Engineer")],-1);function p(e,t,n,r,a,o){const s=(0,i.g2)("CursorBlur"),l=(0,i.g2)("StarsContainer");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",f,[h,(0,i.bF)(s)]),(0,i.bF)(l)],64)}const b={id:"starsContainer"};function m(e,t,n,r,a,o){const s=(0,i.g2)("StarTag");return(0,i.uX)(),(0,i.CE)("div",b,[((0,i.uX)(),(0,i.CE)(i.FK,null,(0,i.pI)(80,(e=>(0,i.bF)(s,{key:e,instance:e},null,8,["instance"]))),64))])}const v=["id"];function g(e,t,n,r,a,o){return(0,i.uX)(),(0,i.CE)("div",{class:"star",id:"star"+this.instance},null,8,v)}var k={props:{instance:{type:Number,required:!0}},data(){return{pos:[0,0],speed:5}},mounted(){console.log(this.instance),this.speed=3*Math.random()+1;const e=document.getElementById(`star${this.instance}`);this.pos[0]=Math.random()*window.innerWidth,this.pos[1]=Math.random()*window.innerHeight;let t=2*this.speed;e.style.opacity=(t/8).toString(),console.log(e.style.opacity),e.style.width=t+"px",e.style.height=t+"px",e.style.left=this.pos[0]+"px",e.style.top=this.pos[1]+"px",this.runEveryFrame(this.instance)},methods:{runEveryFrame(){const e=()=>{this.pos[0]-=this.speed,this.pos[0]<=0&&(this.pos[1]=Math.random()*window.innerHeight,document.getElementById(`star${this.instance}`).style.top=this.pos[1]+"px",this.pos[0]=window.innerWidth),document.getElementById(`star${this.instance}`).style.left=this.pos[0]+"px",requestAnimationFrame(e)};requestAnimationFrame(e)}}};const y=(0,c.A)(k,[["render",g]]);var w=y,C={name:"StarsContainer",components:{StarTag:w}};const S=(0,c.A)(C,[["render",m]]);var L=S;const j={id:"cursorBlur"};function I(e,t,n,r,a,o){return(0,i.uX)(),(0,i.CE)("div",j)}var E=n(1358),F=n.n(E);const A=(0,c.A)(F(),[["render",I]]);var x=A,O={name:"HomeSpread",components:{StarsContainer:L,CursorBlur:x}};function H(e){const t=40,n=e.clientX,r=e.clientY,i=window.innerWidth,a=window.innerHeight,o=-(n-i/2)/(i/2)*t,s=-(r-a/2)/(a/2)*t;document.getElementById("nameContainer").style.transform=`translate(${o}px, ${s}px)`}document.addEventListener("mousemove",H);const _=(0,c.A)(O,[["render",p]]);var X=_;const B=e=>((0,i.Qi)("data-v-0c6f66a1"),e=e(),(0,i.jt)(),e),M={id:"section"},T=B((()=>(0,i.Lk)("h1",null,"My Skills",-1)));function q(e,t,n,r,a,o){const s=(0,i.g2)("SkillContainer");return(0,i.uX)(),(0,i.CE)("div",M,[T,(0,i.bF)(s,{icon:"fa-brands fa-js",title:"JavaScript",blurb:"I have a lot of experience with JavaScript. A project that I created using JavaScript was 'RaceTracker', this is in a public repository on my github profile.\n            <br><br>\n            I have also created a very basic javaScript front-end framework called 'block.js', also a public repository on my github profile. "}),(0,i.bF)(s,{icon:"fa-brands fa-unity",title:"Unity",blurb:"I have created several games using Unity. One of these was 'Lone Wolf: World War 2', which I created with my brother, and published on Steam.\n            <br><br>\n            I am also developing a mobile game using Unity which I intend to publish on the Google Play Store."}),(0,i.bF)(s,{icon:"fa-brands fa-vuejs",title:"Vue",blurb:"I have a small amount of experience with the Vue front-end framework. I used it to create this website."})])}var P=n(4232);const V=e=>((0,i.Qi)("data-v-9ce35066"),e=e(),(0,i.jt)(),e),W={id:"container"},J=V((()=>(0,i.Lk)("div",{id:"underlineContainer"},[(0,i.Lk)("div",{id:"underline"})],-1))),R=["innerHTML"];function $(e,t,n,r,a,o){return(0,i.uX)(),(0,i.CE)("div",W,[(0,i.Lk)("i",{class:(0,P.C4)(n.icon)},null,2),(0,i.Lk)("div",null,[(0,i.Lk)("h1",null,(0,P.v_)(n.title),1),J,(0,i.Lk)("p",{innerHTML:n.blurb},null,8,R)])])}var K={name:"SkillContainer",props:{icon:{type:String,required:!0},title:{type:String,required:!0},blurb:{type:String,required:!0}}};const U=(0,c.A)(K,[["render",$],["__scopeId","data-v-9ce35066"]]);var N=U,Q={name:"NavBar",components:{SkillContainer:N}};const G=(0,c.A)(Q,[["render",q],["__scopeId","data-v-0c6f66a1"]]);var Y=G;const z=e=>((0,i.Qi)("data-v-56bb9a71"),e=e(),(0,i.jt)(),e),D={id:"projectsSection"},Z=z((()=>(0,i.Lk)("h1",null,"My Projects",-1))),ee=z((()=>(0,i.Lk)("h3",null,"Each project is linked to it's GitHub repository",-1))),te={id:"projectsContainer"};function ne(e,t,n,r,a,o){const s=(0,i.g2)("ProjectContainer");return(0,i.uX)(),(0,i.CE)("div",D,[Z,ee,(0,i.Lk)("div",te,[(0,i.bF)(s,{title:"RaceTracker",blurb:"A free to use running race organiser. Fully editable results, exportable pdf results. All data is handled through JavaScript on the client-side, so your information is safe.",ghLink:"https://github.com/OliverHeffernan/Racetracker",skillIcons:["fa-brands fa-js","fa-brands fa-html5","fa-brands fa-css3-alt"]}),(0,i.bF)(s,{title:"Block.js Library",blurb:"Block.js is an open-source, lightweight, simple-to-use JavaScript front-end framework. It makes it extremely simple to have multiple similar elements, without extremely repetitive code.",ghLink:"https://github.com/OliverHeffernan/block-js-library",skillIcons:["fa-brands fa-vuejs","fa-brands fa-js","fa-brands fa-html5","fa-brands fa-css3-alt"]}),(0,i.bF)(s,{title:"Markdown To HTML Converter",blurb:"A simple tool that converts markdown code to html, and vice versa.",ghLink:"https://github.com/OliverHeffernan/markdown-to-html-translator",skillIcons:["fa-brands fa-js","fa-brands fa-html5","fa-brands fa-css3-alt"]}),(0,i.bF)(s,{title:"Vue Calculator",blurb:"A keyboard based calculator built in Vue. Utilises the math.js library. Includes features like syntax highlighting, bracket pair highlighting, super script, multi-line calculations, and a wide range of mathematical functions.",ghLink:"https://github.com/OliverHeffernan/vue-calculator",skillIcons:["fa-brands fa-vuejs","fa-brands fa-js","fa-brands fa-html5","fa-brands fa-css3-alt"]}),(0,i.bF)(s,{title:"Ice Cold VS Code theme",blurb:"A dark theme for Visual Studio Code, a dark deep slate blue background, and blue tones on the text. It creates a blue vibe without sacrificing readability of code.",ghLink:"https://github.com/OliverHeffernan/ice-cold-VSCode-theme",skillIcons:["fa-brands fa-js"]})])])}const re=["href"],ie={class:"icons"};function ae(e,t,n,r,a,o){const s=(0,i.g2)("SkillIcon");return(0,i.uX)(),(0,i.CE)("a",{href:n.ghLink,target:"_blank",class:"projectContainer"},[(0,i.Lk)("h2",null,(0,P.v_)(n.title),1),(0,i.Lk)("p",null,(0,P.v_)(n.blurb),1),(0,i.Lk)("div",ie,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.skillIcons,((e,t)=>((0,i.uX)(),(0,i.Wv)(s,{key:t,iconClass:e},null,8,["iconClass"])))),128))])],8,re)}function oe(e,t,n,r,a,o){return(0,i.uX)(),(0,i.CE)("i",{class:(0,P.C4)(n.iconClass)},null,2)}var se={name:"SkillIcon",props:{iconClass:{type:String,required:!0}}};const le=(0,c.A)(se,[["render",oe],["__scopeId","data-v-5ebb2ee9"]]);var ce=le,ue={name:"ProjectContainer",props:{title:{type:String,required:!0},blurb:{type:String,required:!0},skillIcons:{type:Array,required:!0},ghLink:{type:String,required:!0}},components:{SkillIcon:ce}};const de=(0,c.A)(ue,[["render",ae]]);var fe=de,he={name:"ProjectSection",components:{ProjectContainer:fe}};const pe=(0,c.A)(he,[["render",ne],["__scopeId","data-v-56bb9a71"]]);var be=pe;const me={id:"centered"},ve={id:"contacts",class:"column"},ge=(0,i.Fv)('<h4>Oliver Heffernan</h4><div id="socialLinks"><a href="https://github.com/OliverHeffernan"><i class="fa-brands fa-github"></i></a><a href="https://www.instagram.com/o.heff/"><i class="fa-brands fa-instagram"></i></a></div>',2),ke=(0,i.Lk)("h3",null,[(0,i.Lk)("i",{id:"envelope",class:"fa-solid fa-envelope"}),(0,i.Lk)("i",{id:"clipboard",class:"fa-solid fa-clipboard first-hidden"}),(0,i.Lk)("i",{id:"clipboard-check",class:"fa-solid fa-clipboard-check first-hidden"}),(0,i.eW)(" oliverheffernan@icloud.com ")],-1),ye=[ke],we=(0,i.Fv)('<div id="projectLinks" class="column"><h4>Project Links</h4><ul><li><a href="https://github.com/OliverHeffernan/Racetracker">RaceTracker</a></li><li><a href="https://github.com/OliverHeffernan/block-js-library">Block.js Library</a></li><li><a href="https://github.com/OliverHeffernan/markdown-to-html-translator">Markdown To HTML Converter</a></li><li><a href="https://github.com/OliverHeffernan/vue-calculator">Vue Calculator</a></li></ul></div>',1);function Ce(e,t,n,r,a,o){return(0,i.uX)(),(0,i.CE)("footer",null,[(0,i.Lk)("div",me,[(0,i.Lk)("div",ve,[ge,(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>o.copyEmail&&o.copyEmail(...e))},ye)]),we])])}var Se={methods:{copyEmail(){navigator.clipboard.writeText("oliverheffernan@icloud.com")}}};const Le=(0,c.A)(Se,[["render",Ce]]);var je=Le,Ie={name:"App",components:{HomeSpread:X,SkillsSection:Y,ScrollAnimator:d,ProjectSection:be,MainFooter:je}};const Ee=(0,c.A)(Ie,[["render",a]]);var Fe=Ee;(0,r.Ef)(Fe).mount("#app");const Ae=document.createElement("link");Ae.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",Ae.rel="stylesheet",document.head.appendChild(Ae)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],a=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],s=r[1],l=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var u=l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkvue_portfolio_website"]=self["webpackChunkvue_portfolio_website"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5872)}));r=n.O(r)})();
//# sourceMappingURL=app.ff69af2f.js.map