var ie=Object.defineProperty;var D=t=>{throw TypeError(t)};var ne=(t,e,s)=>e in t?ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var f=(t,e,s)=>ne(t,typeof e!="symbol"?e+"":e,s),N=(t,e,s)=>e.has(t)||D("Cannot "+s);var m=(t,e,s)=>(N(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>e.has(t)?D("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s);var q=(t,e,s)=>(N(t,e,"access private method"),s);import{a as g,i as b}from"./vendor-pFq095uA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();(()=>{const t={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e),t.navLinks.forEach(s=>s.addEventListener("click",e));function e(){t.modal.classList.toggle("is-open")}})();let T=window.location.pathname.split("/").pop()||"index.html",z=T===""||T==="index.html"?"home":T.replace(".html","");const w=document.querySelectorAll(".nav-link");w.forEach(t=>{t.dataset.page===z&&(t.classList.add("is-active"),t.classList.add("is-current"))});const R=document.querySelector(".nav-list"),B=document.querySelector(".nav-indicator");function v(t){if(!B||!R||!t)return;const e=R.getBoundingClientRect(),s=t.getBoundingClientRect(),r=s.left-e.left;B.style.width=s.width+"px",B.style.transform=`translateX(${r}px)`}let l=document.querySelector(".nav-link.is-active")||w[0];v(l);w.forEach(t=>{t.addEventListener("mouseenter",()=>{v(t),t!==l?l.classList.remove("is-current"):l.classList.add("is-current")}),t.addEventListener("click",e=>{if(t===l){e.preventDefault();return}if(t.dataset.page===z){e.preventDefault(),l=t,l.classList.add("is-current"),v(l);return}w.forEach(s=>s.classList.remove("is-active","is-current")),t.classList.add("is-active","is-current"),l=t})});R.addEventListener("mouseleave",()=>{v(l),l.classList.add("is-current")});window.addEventListener("resize",()=>{v(l)});const Q=document.querySelector(".theme-switch .checkbox"),S=document.documentElement,oe=localStorage.getItem("theme"),ce=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,_=oe||(ce?"dark":"light");S.setAttribute("data-theme",_);Q.checked=_==="dark";function le(t){S.classList.add("theme-transition"),window.setTimeout(()=>{S.classList.remove("theme-transition")},400),t()}Q.addEventListener("change",t=>{const e=t.target.checked?"dark":"light";le(()=>{S.setAttribute("data-theme",e),localStorage.setItem("theme",e)})});function de(t){const e=Math.round(Math.max(0,Math.min(5,Number(t)||0))),s=Array(e).fill(`<svg class="full" width="18" height="18">
        <use href="/img/sprite.svg#icon-star"></use>
        </svg>`).join(""),r=Array(5-e).fill(`<svg class="empty" width="18" height="18">
        <use href="/img/sprite.svg#icon-star"></use>
        </svg>`).join("");return s+r}function ue(t){const{name:e,rating:s,gifUrl:r,target:a,bodyPart:i,equipment:c,popularity:P,burnedCalories:te,description:se,time:re}=t,ae=de(s);return`
        <div class="modal-exercises">
            <div class="modal-img-wrapper">
                <img class="modal-img" src="${r}" alt="${e}" />
            </div>
            <div class="modal-details">
                <p class="modal-title">${e}</p>
                <div class="modal-rating">
                    <div class="modal-rating-value">${s}</div>
                    <div class="modal-rating-stars">${ae}</div>
                </div>
                <div class="info-grid">
                    <div class="info-row">
                        <div class="info-grid-item">
                            <div class="info-grid-label">Target</div>
                            <div class="info-grid-value">${a}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Body Part</div>
                            <div class="info-grid-value">${i}</div>
                        </div>

                        <div class="info-grid-item">
                            <div class="info-grid-label">Equipment</div>
                            <div class="info-grid-value">${c}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Popular</div>
                            <div class="info-grid-value">${P}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Burned calories</div>
                            <div class="info-grid-value">${te} / ${re}</div>
                        </div>
                    </div>
                </div>

                <p class="modal-description">${se}</p>

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
        </div>`}const U={};let u=null;function J(t,e){U[t]=e}function me(){u={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")},document.querySelectorAll("[data-open-overlay]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.openOverlay;W(e)})})}function W(t){if(!u){console.warn("Modal system is not initialized");return}const e=U[t];if(!e)return console.warn(`No modal found for key: ${t}`);u.modalContent.innerHTML=e,u.modal.classList.add("is-open");const s=u.modal.querySelector("[data-close-overlay]");s==null||s.addEventListener("click",Y),u.modal.addEventListener("click",K)}function Y(){u.modalContent.innerHTML="",u.modal.classList.remove("is-open"),u.modal.removeEventListener("click",K)}function K(t){t.target===u.modal&&Y()}me();J("rating",ge());function ge(){return`
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
  `}g.defaults.baseURL="https://your-energy.b.goit.study/api";g.defaults.headers.common["Content-Type"]="application/json";var h,G,L,V,d;class pe{constructor(){y(this,h);f(this,"totalPages",0);f(this,"currentPage",1);f(this,"limitPage",9);f(this,"filterType","Muscles");y(this,L,()=>{const s=window.innerWidth>=768?12:9;s!==this.limitPage&&(this.limitPage=s,this.currentPage=1)});y(this,d,e=>{var s,r;return console.error("API Error:",e),Promise.reject(((r=(s=e.response)==null?void 0:s.data)==null?void 0:r.message)||e.message||"An unexpected error occurred")});q(this,h,G).call(this),window.addEventListener("resize",m(this,L))}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(e){this.filterType=e,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const e=await g.get("/filters",{params:q(this,h,V).call(this)});return this.totalPages=e.data.totalPages,e.data}catch(e){return m(this,d).call(this,e)}}async getExercises(e={},s=1,r=10){try{const a={...e,page:s,limit:r};return(await g.get("/exercises",{params:a})).data}catch(a){return m(this,d).call(this,a)}}async getExerciseByCategory(e,s,r=1,a=10){try{const i={...e,...s,...r,limit:a};return(await g.get("/exercises",{params:i})).data}catch(i){return m(this,d).call(this,i)}}async getExerciseById(e){try{return(await g.get(`/exercises/${e}`)).data}catch(s){return m(this,d).call(this,s)}}async rateExercise(e,s,r,a=""){try{if(s<1||s>5)throw new Error("Rating must be between 1 and 5");return(await g.patch(`/exercises/${e}/rating`,{rate:s,email:r,review:a})).data}catch(i){return m(this,d).call(this,i)}}async getQuote(){try{return(await g.get("/quote")).data}catch(e){return m(this,d).call(this,e)}}async subscribe(e){try{return await g.post("/subscription",{email:e})}catch(s){return m(this,d).call(this,s)}}}h=new WeakSet,G=function(){const{matches:e}=window.matchMedia("(max-width: 767px)");this.limitPage=e?9:12},L=new WeakMap,V=function(){return{filter:this.filterType,page:this.currentPage,limit:this.limitPage}},d=new WeakMap;const n=new pe,I={form:document.querySelector(".footer-form")},he=async t=>{t.preventDefault();const e=t.target.elements.email.value.trim(),s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!e){b.info({message:"Email is required",position:"topRight"});return}if(!s.test(e)){b.info({message:"Invalid email format",position:"topRight"});return}try{const r=await n.subscribe(e);if(r.status===201){b.success({message:r.data.message,position:"topRight"}),I.form.reset();return}}catch(r){b.error({message:r,position:"topRight"}),I.form.reset()}};I.form.addEventListener("submit",he);const O=document.querySelector(".anchor-button");function fe(t=1e3){const e=window.scrollY,s=performance.now();function r(a){const i=a-s,c=Math.min(i/t,1),P=1-Math.pow(1-c,3);window.scrollTo(0,e*(1-P)),c<1&&requestAnimationFrame(r)}requestAnimationFrame(r)}window.addEventListener("scroll",()=>{window.scrollY>300?O.classList.add("show"):O.classList.remove("show")});O.addEventListener("click",t=>{t.preventDefault(),fe()});const M="img/sprite.svg";function A(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}const p={exerciseCard({filter:t,name:e,imgURL:s}){return`<li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${s});'>
              <div class="exercises-wrap-info">
                <p>${(a=>a?a.split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()).join(" "):"")(e)}</p>
                <p>${t}</p>
              </div>
            </div>
          </li>`},itemPagination(t){return`<button class="pagination-item" type="button">
          ${t}
        </button>`},quote(t,e){return`<p class="quote-card-text">
             ${e}
            </p>
            <p class="quote-card-author">${t}</p>`},skeletonExMarkup(t=n.limitPage){return Array.from({length:t}).map(()=>`
      <li class="exercises-item is-skeleton">
        <div class="exercises-background-img skeleton-bg"></div>
        <div class="exercises-wrap-info skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
        </div>
      </li>`).join("")},favoriteCard({_id:t,name:e,burnedCalories:s,time:r,bodyPart:a,target:i}){return`
      <li class="favorites-item">
        <div class="card-header">
          <div class="card-badge">WORKOUT</div>
          
          <button class="card-btn-delete js-delete-btn" data-id="${t}" type="button" aria-label="Remove">
            <svg class="card-icon-trash" width="16" height="16">
              <use href="${M}#icon-trash"></use>
            </svg>
          </button>
          
          <button class="card-btn-start js-start-btn" data-id="${t}" data-open-overlay="exercise" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${M}#icon-arrow-right"></use>
              </svg>
          </button>
        </div>
  
        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${M}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${A(e)}</h3>
        </div>
  
        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${s} / ${r} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${A(a)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${A(i)}</span>
          </li>
        </ul>
      </li>
    `}},x={FAVOTIRES:"favorites",UI_THEME:"ui-theme",LAST_SESSION:"last_session"},ve=()=>{try{const t=localStorage.getItem(x.LAST_SESSION);return t?JSON.parse(t):null}catch(t){return console.error("Error parsing last session from localStorage:",t),null}},H=t=>{if(t){try{localStorage.setItem(x.LAST_SESSION,JSON.stringify(t))}catch{}console.error("Error setting last session to localStorage:",error)}},ye=()=>{try{const t=localStorage.getItem(x.FAVOTIRES);return t?JSON.parse(t):[]}catch(t){return console.error("Error parsing favorites from localStorage:",t),[]}},Ae=t=>{try{const s=ye().filter(r=>r!==t);localStorage.setItem(x,JSON.stringify(s))}catch(e){console.error("Error removing favorite item from localStorage:",e)}},o={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body")};let E=n.limitPage,k=n.limitPage,$=!1;const C=o.btnBox.querySelector(".exercises-thumb-indicator"),be=async()=>{if(F(),n.limitPage!==k&&!$){$=!0;try{k=n.limitPage,E=k,await j({updatePagination:!0})}finally{$=!1}}},F=()=>{const t=o.btnBox.querySelector("button.active");if(!t||!C)return;const e=o.btnBox.getBoundingClientRect(),s=t.getBoundingClientRect(),r=s.left-e.left,a=s.width;C.style.transform=`translateX(${r}px)`,C.style.width=`${a}px`},we=()=>{o.listEx.innerHTML=p.skeletonExMarkup(E)},X=t=>{const e=[];for(let s=1;s<=t;s++)e.push(p.itemPagination(s));o.paginationBox.innerHTML=e.join("")},Z=t=>{const e=[...o.paginationBox.children];if(!e.length)return;e.forEach(r=>r.classList.remove("pagination-item-active"));const s=t-1;s>=0&&s<e.length&&e[s].classList.add("pagination-item-active")},Se=async t=>{const e=t.target.dataset.id,s=await n.getExerciseById(e);console.log(s),J("exercise",ue(s)),W("exercise")},Le=async t=>{const e=await n.getExerciseByCategory(n.filterType,t.currentTarget.dataset.name);o.listEx.classList.add("body-parts-list");const s=e.results.map(a=>p.favoriteCard(a));o.listEx.innerHTML=s.join(""),document.querySelectorAll(".card-btn-start").forEach(a=>a.addEventListener("click",i=>Se(i)))},ee=t=>{const e=t.results.map(r=>p.exerciseCard(r));o.listEx.innerHTML=e.join(""),document.querySelectorAll(".exercises-item").forEach(r=>r.addEventListener("click",a=>Le(a))),E=Math.max(e.length,n.limitPage)},xe=t=>{const s=Date.now()-t,r=24*60*60*1e3;return s>=r},Ee=async()=>{try{const t=ve();if(t){const{author:e,quote:s,time:r}=t;if(xe(r)){const i=await n.getQuote(),c=p.quote(i.author,i.quote);o.quoteBody.insertAdjacentHTML("beforeend",c),H({author:i.author,quote:i.quote,time:Date.now()})}else{const i=p.quote(e,s);o.quoteBody.insertAdjacentHTML("beforeend",i)}}else{const e=await n.getQuote(),s=p.quote(e.author,e.quote);o.quoteBody.insertAdjacentHTML("beforeend",s),H({author:e.author,quote:e.quote,time:Date.now()})}}catch{const r=p.quote("Tom Brady","A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.");o.quoteBody.insertAdjacentHTML("beforeend",r)}},j=async({updatePagination:t=!1}={})=>{we();const e=await n.getDataByFilter();ee(e),t&&X(n.totalPages),Z(n.currentPage)},Pe=async()=>{try{Ee();const t=await n.getDataByFilter();o.btnBox.children[0]&&(o.btnBox.children[0].classList.add("active"),requestAnimationFrame(F)),ee(t),X(n.totalPages),Z(n.currentPage)}catch(t){console.log("🚀 ~ error:",t)}};Pe();const qe=async t=>{try{const e=t.target.closest("button");if(!e)return;const s=e.dataset.type;if(!s)return;n.changeSearchType(s),E=n.limitPage,[...t.currentTarget.children].forEach(r=>r.classList.remove("active")),e.classList.add("active"),requestAnimationFrame(F),await j({updatePagination:!0})}catch(e){console.log("🚀 ~ error:",e)}},Te=async t=>{try{const e=t.target.closest("button");if(!e)return;const s=Number(e.textContent.trim());if(!Number.isFinite(s)||s===n.currentPage)return;n.currentPage=s,await j()}catch(e){console.log("🚀 ~ error:",e)}};window.addEventListener("resize",be);o.btnBox.addEventListener("click",qe);o.paginationBox.addEventListener("click",Te);export{p as T,n as d,ye as g,Ae as r};
//# sourceMappingURL=main-DaXY2Xcy.js.map
