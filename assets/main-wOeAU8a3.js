var X=Object.defineProperty;var M=t=>{throw TypeError(t)};var Z=(t,e,s)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var g=(t,e,s)=>Z(t,typeof e!="symbol"?e+"":e,s),_=(t,e,s)=>e.has(t)||M("Cannot "+s);var u=(t,e,s)=>(_(t,e,"read from private field"),s?s.call(t):e.get(t)),x=(t,e,s)=>e.has(t)?M("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);import{a as m,i as f}from"./vendor-pFq095uA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();(()=>{const t={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e),t.navLinks.forEach(s=>s.addEventListener("click",e));function e(){t.modal.classList.toggle("is-open")}})();let L=window.location.pathname.split("/").pop()||"index.html",A=L===""||L==="index.html"?"home":L.replace(".html","");const v=document.querySelectorAll(".nav-link");v.forEach(t=>{t.dataset.page===A&&(t.classList.add("is-active"),t.classList.add("is-current"))});const $=document.querySelector(".nav-list"),P=document.querySelector(".nav-indicator");function p(t){if(!P||!$||!t)return;const e=$.getBoundingClientRect(),s=t.getBoundingClientRect(),i=s.left-e.left;P.style.width=s.width+"px",P.style.transform=`translateX(${i}px)`}let c=document.querySelector(".nav-link.is-active")||v[0];p(c);v.forEach(t=>{t.addEventListener("mouseenter",()=>{p(t),t!==c?c.classList.remove("is-current"):c.classList.add("is-current")}),t.addEventListener("click",e=>{if(t===c){e.preventDefault();return}if(t.dataset.page===A){e.preventDefault(),c=t,c.classList.add("is-current"),p(c);return}v.forEach(s=>s.classList.remove("is-active","is-current")),t.classList.add("is-active","is-current"),c=t})});$.addEventListener("mouseleave",()=>{p(c),c.classList.add("is-current")});window.addEventListener("resize",()=>{p(c)});const C=document.querySelector(".theme-switch .checkbox"),h=document.documentElement,G=localStorage.getItem("theme"),Q=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,R=G||(Q?"dark":"light");h.setAttribute("data-theme",R);C.checked=R==="dark";function W(t){h.classList.add("theme-transition"),window.setTimeout(()=>{h.classList.remove("theme-transition")},400),t()}C.addEventListener("change",t=>{const e=t.target.checked?"dark":"light";W(()=>{h.setAttribute("data-theme",e),localStorage.setItem("theme",e)})});const j={};function F(t,e){j[t]=e}function J(){const t={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")};document.querySelectorAll("[data-open-overlay]").forEach(a=>{a.addEventListener("click",()=>{const r=a.dataset.openOverlay;e(r)})});function e(a){const r=j[a];if(!r)return console.warn(`No modal found for key: ${a}`);t.modalContent.innerHTML=r,t.modal.classList.add("is-open");const n=t.modal.querySelector("[data-close-overlay]");n==null||n.addEventListener("click",s),t.modal.addEventListener("click",i)}function s(){t.modalContent.innerHTML="",t.modal.classList.remove("is-open"),t.modal.removeEventListener("click",i)}function i(a){a.target===t.modal&&s()}}J();F("exercise",ee({_id:"64f389465ae26083f39b17a5",bodyPart:"waist",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0006.gif",name:"alternate heel touchers",target:"abs",description:"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",rating:3,burnedCalories:116,time:3,popularity:1}));function V(t){const e=Math.max(0,Math.min(5,Number(t)||0)),s=Array(e).fill(`<svg class="full" width="18" height="18">
        <use href="/img/sprite.svg#icon-star"></use>
        </svg>`).join(""),i=Array(5-e).fill(`<svg class="empty" width="18" height="18">
        <use href="/img/sprite.svg#icon-star"></use>
        </svg>`).join("");return s+i}function ee(t){const{name:e,rating:s,gifUrl:i,target:a,bodyPart:r,equipment:n,popularity:w,burnedCalories:H,description:U,time:Y}=t,K=V(s);return`
        <div class="modal-exercises">
            <div class="modal-img-wrapper">
                <img class="modal-img" src="${i}" alt="${e}" />
            </div>
            <div class="modal-details">
                <p class="modal-title">${e}</p>
                <div class="modal-rating">
                    <div class="modal-rating-value">${s}</div>
                    <div class="modal-rating-stars">${K}</div>
                </div>
                <div class="info-grid">
                    <div class="info-row">
                        <div class="info-grid-item">
                            <div class="info-grid-label">Target</div>
                            <div class="info-grid-value">${a}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Body Part</div>
                            <div class="info-grid-value">${r}</div>
                        </div>

                        <div class="info-grid-item">
                            <div class="info-grid-label">Equipment</div>
                            <div class="info-grid-value">${n}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Popular</div>
                            <div class="info-grid-value">${w}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Burned calories</div>
                            <div class="info-grid-value">${H} / ${Y}</div>
                        </div>
                    </div>
                </div>

                <p class="modal-description">${U}</p>

                <div class="modal-btn-wrapper">
                    <button type="button" class="modal-btn">
                      Add to favorites
                        <svg class="modal-btn-icon" width="18" height="18">
                        <use href="img/sprite.svg#icon-heart"></use>
                        </svg>
                    
                    <button type="button" class="modal-btn-rating">
                      Give a rating
                    </button>
                </div>  
            </div>
        </div>`}F("rating",te());function te(){return`
    <div class="modal-rating-overlay">
      <p class="rating-label">Rating</p>

      <div class="rating-stars">
        <span class="rating-value">0.0</span>
        <div class="stars">
          <span data-rate="1">★</span>
          <span data-rate="2">★</span>
          <span data-rate="3">★</span>
          <span data-rate="4">★</span>
          <span data-rate="5">★</span>
        </div>
      </div>

      <input class="rating-email" type="email" placeholder="Email">

      <textarea class="rating-text" placeholder="Your comment"></textarea>

      <button class="rating-send">Send</button>
    </div>
  `}m.defaults.baseURL="https://your-energy.b.goit.study/api";m.defaults.headers.common["Content-Type"]="application/json";var b,d;class se{constructor(){g(this,"totalPages",0);g(this,"currentPage",1);g(this,"limitPage",12);g(this,"filterType","Muscles");x(this,b,()=>({filter:this.filterType,page:this.currentPage,limit:this.limitPage}));x(this,d,e=>{var s,i;return console.error("API Error:",e),Promise.reject(((i=(s=e.response)==null?void 0:s.data)==null?void 0:i.message)||e.message||"An unexpected error occurred")})}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(e){this.filterType=e,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const e=await m.get("/filters",{params:u(this,b).call(this)});return this.totalPages=e.data.totalPages,e.data}catch(e){return u(this,d).call(this,e)}}async getExercises(e={},s=1,i=10){try{const a={...e,page:s,limit:i};return(await m.get("/exercises",{params:a})).data}catch(a){return u(this,d).call(this,a)}}async getExerciseById(e){try{return(await m.get(`/exercises/${e}`)).data}catch(s){return u(this,d).call(this,s)}}async rateExercise(e,s,i,a=""){try{if(s<1||s>5)throw new Error("Rating must be between 1 and 5");return(await m.patch(`/exercises/${e}/rating`,{rate:s,email:i,review:a})).data}catch(r){return u(this,d).call(this,r)}}async getQuote(){try{return(await m.get("/quote")).data}catch(e){return u(this,d).call(this,e)}}async subscribe(e){try{return await m.post("/subscription",{email:e})}catch(s){return u(this,d).call(this,s)}}}b=new WeakMap,d=new WeakMap;const o=new se,q={form:document.querySelector(".footer-form")},ae=async t=>{t.preventDefault();const e=t.target.elements.email.value.trim(),s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!e){f.info({message:"Email is required",position:"topRight"});return}if(!s.test(e)){f.info({message:"Invalid email format",position:"topRight"});return}try{const i=await o.subscribe(e);if(i.status===201){f.success({message:i.data.message,position:"topRight"}),q.form.reset();return}}catch(i){f.error({message:i,position:"topRight"}),q.form.reset()}};q.form.addEventListener("submit",ae);const B=document.querySelector(".anchor-button");function ie(t=1e3){const e=window.scrollY,s=performance.now();function i(a){const r=a-s,n=Math.min(r/t,1),w=1-Math.pow(1-n,3);window.scrollTo(0,e*(1-w)),n<1&&requestAnimationFrame(i)}requestAnimationFrame(i)}window.addEventListener("scroll",()=>{window.scrollY>300?B.classList.add("show"):B.classList.remove("show")});B.addEventListener("click",t=>{t.preventDefault(),ie()});const E="img/sprite.svg";function S(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}const T={exCard({filter:t,name:e,imgURL:s}){return`<li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${s});'>
              <div class="exercises-wrap-info">
                <p>${(a=>a?a.split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "):"")(e)}</p>
                <p>${t}</p>
              </div>
            </div>
          </li>`},itemPagination(t){return`<button class="pagination-item" type="button">
          ${t}
        </button>`},quote(t,e){return`<p class="quote-card-text">
             ${e}
            </p>
            <p class="quote-card-author">${t}</p>`},skeletonExMarkup(t=o.limitPage){return Array.from({length:t}).map(()=>`
      <li class="exercises-item is-skeleton">
        <div class="exercises-background-img skeleton-bg"></div>
        <div class="exercises-wrap-info skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
        </div>
      </li>`).join("")},favoriteCard({_id:t,name:e,burnedCalories:s,time:i,bodyPart:a,target:r}){return`
      <li class="favorites-item">
        <div class="card-header">
          <div class="card-badge">WORKOUT</div>
          
          <button class="card-btn-delete js-delete-btn" data-id="${t}" type="button" aria-label="Remove">
            <svg class="card-icon-trash" width="16" height="16">
              <use href="${E}#icon-trash"></use>
            </svg>
          </button>
          
          <button class="card-btn-start js-start-btn" data-id="${t}" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${E}#icon-arrow-right"></use>
              </svg>
          </button>
        </div>
  
        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${E}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${S(e)}</h3>
        </div>
  
        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${s} / ${i} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${S(a)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${S(r)}</span>
          </li>
        </ul>
      </li>
    `}},l={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body")};let y=o.limitPage;const k=l.btnBox.querySelector(".exercises-thumb-indicator"),D=()=>{const t=l.btnBox.querySelector("button.active");if(!t||!k)return;const e=l.btnBox.getBoundingClientRect(),s=t.getBoundingClientRect(),i=s.left-e.left,a=s.width;k.style.transform=`translateX(${i}px)`,k.style.width=`${a}px`},re=()=>{l.listEx.innerHTML=T.skeletonExMarkup(y)},O=t=>{const e=[];for(let s=1;s<=t;s++)e.push(T.itemPagination(s));l.paginationBox.innerHTML=e.join("")},z=t=>{const e=[...l.paginationBox.children];if(!e.length)return;e.forEach(i=>i.classList.remove("pagination-item-active"));const s=t-1;s>=0&&s<e.length&&e[s].classList.add("pagination-item-active")},I=t=>{const e=t.results.map(a=>T.exCard(a)),s=Math.max(0,y-e.length),i=Array.from({length:s}).map(()=>'<li class="exercises-item is-filler"></li>');l.listEx.innerHTML=[...e,...i].join(""),y=Math.max(e.length,o.limitPage)},N=async({updatePagination:t=!1}={})=>{re();const e=await o.getDataByFilter();I(e),t&&O(o.totalPages),z(o.currentPage)};async function ne(){try{const t=await o.getDataByFilter();l.btnBox.children[0]&&l.btnBox.children[0].classList.add("active"),I(t),O(o.totalPages),z(o.currentPage)}catch(t){console.log("🚀 ~ error:",t)}}ne();const oe=async t=>{try{const e=t.target.closest("button");if(!e)return;const s=e.dataset.type;if(!s)return;o.changeSearchType(s),y=o.limitPage,[...t.currentTarget.children].forEach(i=>i.classList.remove("active")),e.classList.add("active"),requestAnimationFrame(D),await N({updatePagination:!0})}catch(e){console.log("🚀 ~ error:",e)}},ce=async t=>{try{const e=t.target.closest("button");if(!e)return;const s=Number(e.textContent.trim());if(!Number.isFinite(s)||s===o.currentPage)return;o.currentPage=s,await N()}catch(e){console.log("🚀 ~ error:",e)}};window.addEventListener("resize",D);l.btnBox.addEventListener("click",oe);l.paginationBox.addEventListener("click",ce);export{T,o as d};
//# sourceMappingURL=main-wOeAU8a3.js.map
