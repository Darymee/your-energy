var z=Object.defineProperty;var M=t=>{throw TypeError(t)};var D=(t,e,s)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>D(t,typeof e!="symbol"?e+"":e,s),O=(t,e,s)=>e.has(t)||M("Cannot "+s);var u=(t,e,s)=>(O(t,e,"read from private field"),s?s.call(t):e.get(t)),b=(t,e,s)=>e.has(t)?M("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);import{a as p,i as f}from"./vendor-pFq095uA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();(()=>{const t={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e),t.navLinks.forEach(s=>s.addEventListener("click",e));function e(){t.modal.classList.toggle("is-open")}})();let L=window.location.pathname.split("/").pop()||"index.html",T=L===""||L==="index.html"?"home":L.replace(".html","");const h=document.querySelectorAll(".nav-link");h.forEach(t=>{t.dataset.page===T&&(t.classList.add("is-active"),t.classList.add("is-current"))});const B=document.querySelector(".nav-list"),x=document.querySelector(".nav-indicator");function g(t){if(!x||!B||!t)return;const e=B.getBoundingClientRect(),s=t.getBoundingClientRect(),n=s.left-e.left;x.style.width=s.width+"px",x.style.transform=`translateX(${n}px)`}let o=document.querySelector(".nav-link.is-active")||h[0];g(o);h.forEach(t=>{t.addEventListener("mouseenter",()=>{g(t),t!==o?o.classList.remove("is-current"):o.classList.add("is-current")}),t.addEventListener("click",e=>{if(t===o){e.preventDefault();return}if(t.dataset.page===T){e.preventDefault(),o=t,o.classList.add("is-current"),g(o);return}h.forEach(s=>s.classList.remove("is-active","is-current")),t.classList.add("is-active","is-current"),o=t})});B.addEventListener("mouseleave",()=>{g(o),o.classList.add("is-current")});window.addEventListener("resize",()=>{g(o)});const H=t=>{const e={openModalBtn:document.querySelector("[data-open-overlay]"),modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")};e.openModalBtn.addEventListener("click",s);function s(){e.modalContent.innerHTML=t,e.modal.classList.add("is-open");const r=e.modal.querySelector("[data-close-overlay]");r==null||r.addEventListener("click",n)}function n(){e.modalContent.innerHTML="",e.modal.classList.remove("is-open")}};H("<p>Test</p>");p.defaults.baseURL="https://your-energy.b.goit.study/api";p.defaults.headers.common["Content-Type"]="application/json";var y,d;class I{constructor(){m(this,"totalPages",0);m(this,"currentPage",1);m(this,"limitPage",12);m(this,"filterType","Muscles");b(this,y,()=>({filter:this.filterType,page:this.currentPage,limit:this.limitPage}));b(this,d,e=>{var s,n;return console.error("API Error:",e),Promise.reject(((n=(s=e.response)==null?void 0:s.data)==null?void 0:n.message)||e.message||"An unexpected error occurred")})}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(e){this.filterType=e,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const e=await p.get("/filters",{params:u(this,y).call(this)});return this.totalPages=e.data.totalPages,e.data}catch(e){return u(this,d).call(this,e)}}async getExercises(e={},s=1,n=10){try{const r={...e,page:s,limit:n};return(await p.get("/exercises",{params:r})).data}catch(r){return u(this,d).call(this,r)}}async getExerciseById(e){try{return(await p.get(`/exercises/${e}`)).data}catch(s){return u(this,d).call(this,s)}}async rateExercise(e,s,n,r=""){try{if(s<1||s>5)throw new Error("Rating must be between 1 and 5");return(await p.patch(`/exercises/${e}/rating`,{rate:s,email:n,review:r})).data}catch(a){return u(this,d).call(this,a)}}async getQuote(){try{return(await p.get("/quote")).data}catch(e){return u(this,d).call(this,e)}}async subscribe(e){try{return await p.post("/subscription",{email:e})}catch(s){return u(this,d).call(this,s)}}}y=new WeakMap,d=new WeakMap;const i=new I,S={form:document.querySelector(".footer-form")},N=async t=>{t.preventDefault();const e=t.target.elements.email.value.trim(),s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!e){f.info({message:"Email is required",position:"topRight"});return}if(!s.test(e)){f.info({message:"Invalid email format",position:"topRight"});return}try{const n=await i.subscribe(e);if(n.status===201){f.success({message:n.data.message,position:"topRight"}),S.form.reset();return}}catch(n){f.error({message:n,position:"topRight"}),S.form.reset()}};S.form.addEventListener("submit",N);const q=document.querySelector(".anchor-button");function U(t=1e3){const e=window.scrollY,s=performance.now();function n(r){const a=r-s,l=Math.min(a/t,1),j=1-Math.pow(1-l,3);window.scrollTo(0,e*(1-j)),l<1&&requestAnimationFrame(n)}requestAnimationFrame(n)}window.addEventListener("scroll",()=>{window.scrollY>300?q.classList.add("show"):q.classList.remove("show")});q.addEventListener("click",t=>{t.preventDefault(),U()});const w="./img/sprite.svg";function P(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}const $={exCard({filter:t,name:e,imgURL:s}){return`<li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${s});'>
              <div class="exercises-wrap-info">
                <p>${(r=>r?r.split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1).toLowerCase()).join(" "):"")(e)}</p>
                <p>${t}</p>
              </div>
            </div>
          </li>`},itemPagination(t){return`<button class="pagination-item" type="button">
          ${t}
        </button>`},quote(t,e){return`<p class="quote-card-text">
             ${e}
            </p>
            <p class="quote-card-author">${t}</p>`},skeletonExMarkup(t=i.limitPage){return Array.from({length:t}).map(()=>`
      <li class="exercises-item is-skeleton">
        <div class="exercises-background-img skeleton-bg"></div>
        <div class="exercises-wrap-info skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
        </div>
      </li>`).join("")},favoriteCard({_id:t,name:e,burnedCalories:s,time:n,bodyPart:r,target:a}){return`
      <li class="favorites-item">
        <div class="card-header">
          <div class="card-badge">WORKOUT</div>
          
          <button class="card-btn-delete js-delete-btn" data-id="${t}" type="button" aria-label="Remove">
            <svg class="card-icon-trash" width="16" height="16">
              <use href="${w}#icon-trash"></use>
            </svg>
          </button>
          
          <button class="card-btn-start js-start-btn" data-id="${t}" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${w}#icon-arrow-right"></use>
              </svg>
          </button>
        </div>
  
        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${w}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${P(e)}</h3>
        </div>
  
        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${s} / ${n} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${P(r)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${P(a)}</span>
          </li>
        </ul>
      </li>
    `}},c={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body")};let v=i.limitPage;const E=c.btnBox.querySelector(".exercises-thumb-indicator"),k=()=>{const t=c.btnBox.querySelector("button.active");if(!t||!E)return;const e=c.btnBox.getBoundingClientRect(),s=t.getBoundingClientRect(),n=s.left-e.left,r=s.width;E.style.transform=`translateX(${n}px)`,E.style.width=`${r}px`},K=()=>{c.listEx.innerHTML=$.skeletonExMarkup(v)},C=t=>{const e=[];for(let s=1;s<=t;s++)e.push($.itemPagination(s));c.paginationBox.innerHTML=e.join("")},R=t=>{const e=[...c.paginationBox.children];if(!e.length)return;e.forEach(n=>n.classList.remove("pagination-item-active"));const s=t-1;s>=0&&s<e.length&&e[s].classList.add("pagination-item-active")},A=t=>{const e=t.results.map(r=>$.exCard(r)),s=Math.max(0,v-e.length),n=Array.from({length:s}).map(()=>'<li class="exercises-item is-filler"></li>');c.listEx.innerHTML=[...e,...n].join(""),v=Math.max(e.length,i.limitPage)},F=async({updatePagination:t=!1}={})=>{K();const e=await i.getDataByFilter();A(e),t&&C(i.totalPages),R(i.currentPage)};async function X(){try{const t=await i.getDataByFilter();c.btnBox.children[0]&&c.btnBox.children[0].classList.add("active"),A(t),C(i.totalPages),R(i.currentPage)}catch(t){console.log("🚀 ~ error:",t)}}X();const Y=async t=>{try{const e=t.target.closest("button");if(!e)return;const s=e.dataset.type;if(!s)return;i.changeSearchType(s),v=i.limitPage,[...t.currentTarget.children].forEach(n=>n.classList.remove("active")),e.classList.add("active"),requestAnimationFrame(k),await F({updatePagination:!0})}catch(e){console.log("🚀 ~ error:",e)}},Z=async t=>{try{const e=t.target.closest("button");if(!e)return;const s=Number(e.textContent.trim());if(!Number.isFinite(s)||s===i.currentPage)return;i.currentPage=s,await F()}catch(e){console.log("🚀 ~ error:",e)}};window.addEventListener("resize",k);c.btnBox.addEventListener("click",Y);c.paginationBox.addEventListener("click",Z);export{$ as T,i as d};
//# sourceMappingURL=main-BpMnTifj.js.map
