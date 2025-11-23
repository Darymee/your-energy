var ue=Object.defineProperty;var W=e=>{throw TypeError(e)};var me=(e,t,r)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var E=(e,t,r)=>me(e,typeof t!="symbol"?t+"":t,r),Y=(e,t,r)=>t.has(e)||W("Cannot "+r);var p=(e,t,r)=>(Y(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>t.has(e)?W("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);var F=(e,t,r)=>(Y(e,t,"access private method"),r);import{a as y,i as b}from"./vendor-pFq095uA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.navLinks.forEach(r=>r.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();let I=window.location.pathname.split("/").pop()||"index.html",X=I===""||I==="index.html"?"home":I.replace(".html","");const M=document.querySelectorAll(".nav-link");M.forEach(e=>{e.dataset.page===X&&(e.classList.add("is-active"),e.classList.add("is-current"))});const j=document.querySelector(".nav-list"),O=document.querySelector(".nav-indicator");function $(e){if(!O||!j||!e)return;const t=j.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-t.left;O.style.width=r.width+"px",O.style.transform=`translateX(${s}px)`}let m=document.querySelector(".nav-link.is-active")||M[0];$(m);M.forEach(e=>{e.addEventListener("mouseenter",()=>{$(e),e!==m?m.classList.remove("is-current"):m.classList.add("is-current")}),e.addEventListener("click",t=>{if(e===m){t.preventDefault();return}if(e.dataset.page===X){t.preventDefault(),m=e,m.classList.add("is-current"),$(m);return}M.forEach(r=>r.classList.remove("is-active","is-current")),e.classList.add("is-active","is-current"),m=e})});j.addEventListener("mouseleave",()=>{$(m),m.classList.add("is-current")});window.addEventListener("resize",()=>{$(m)});const Z=document.querySelector(".theme-switch .checkbox"),A=document.documentElement,ge=localStorage.getItem("theme"),ve=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,ee=ge||(ve?"dark":"light");A.setAttribute("data-theme",ee);Z.checked=ee==="dark";function fe(e){A.classList.add("theme-transition"),window.setTimeout(()=>{A.classList.remove("theme-transition")},400),e()}Z.addEventListener("change",e=>{const t=e.target.checked?"dark":"light";fe(()=>{A.setAttribute("data-theme",t),localStorage.setItem("theme",t)})});const z=document.querySelector(".anchor-button");function he(e=1e3){const t=window.scrollY,r=performance.now();function s(i){const a=i-r,o=Math.min(a/e,1),d=1-Math.pow(1-o,3);window.scrollTo(0,t*(1-d)),o<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}window.addEventListener("scroll",()=>{window.scrollY>300?z.classList.add("show"):z.classList.remove("show")});z.addEventListener("click",e=>{e.preventDefault(),he()});y.defaults.baseURL="https://your-energy.b.goit.study/api";y.defaults.headers.common["Content-Type"]="application/json";var x,te,R,re,v;class pe{constructor(){T(this,x);E(this,"totalPages",0);E(this,"currentPage",1);E(this,"limitPage",9);E(this,"filterType","Muscles");T(this,R,()=>{const r=window.innerWidth>=768?12:9;r!==this.limitPage&&(this.limitPage=r,this.currentPage=1)});T(this,v,t=>{var r,s;return console.error("API Error:",t),Promise.reject(((s=(r=t.response)==null?void 0:r.data)==null?void 0:s.message)||t.message||"An unexpected error occurred")});F(this,x,te).call(this),window.addEventListener("resize",p(this,R))}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(t){this.filterType=t,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const t=await y.get("/filters",{params:F(this,x,re).call(this)});return this.totalPages=t.data.totalPages,t.data}catch(t){return p(this,v).call(this,t)}}async getExercises(t={},r=1,s=10){try{const i={...t,page:r,limit:s};return(await y.get("/exercises",{params:i})).data}catch(i){return p(this,v).call(this,i)}}async getExerciseByCategory(t,r,s=1,i=10){try{const a={...t,...r,...s,limit:i};return(await y.get("/exercises",{params:a})).data}catch(a){return p(this,v).call(this,a)}}async getExerciseById(t){try{return(await y.get(`/exercises/${t}`)).data}catch(r){return p(this,v).call(this,r)}}async rateExercise(t,r,s,i=""){try{if(r<1||r>5)throw new Error("Rating must be between 1 and 5");return(await y.patch(`/exercises/${t}/rating`,{rate:r,email:s,review:i})).data}catch(a){return p(this,v).call(this,a)}}async getQuote(){try{return(await y.get("/quote")).data}catch(t){return p(this,v).call(this,t)}}async subscribe(t){try{return await y.post("/subscription",{email:t})}catch(r){return p(this,v).call(this,r)}}}x=new WeakSet,te=function(){const{matches:t}=window.matchMedia("(max-width: 767px)");this.limitPage=t?9:12},R=new WeakMap,re=function(){return{filter:this.filterType,page:this.currentPage,limit:this.limitPage}},v=new WeakMap;const n=new pe,Q={form:document.querySelector(".footer-form")},ye=async e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!t){b.info({message:"Email is required",position:"topRight"});return}if(!r.test(t)){b.info({message:"Invalid email format",position:"topRight"});return}try{const s=await n.subscribe(t);if(s.status===201){b.success({message:s.data.message,position:"topRight"}),Q.form.reset();return}}catch(s){b.error({message:s,position:"topRight"}),Q.form.reset()}};Q.form.addEventListener("submit",ye);const B={FAVORITES:"favorites",UI_THEME:"ui-theme",LAST_SESSION:"last_session"},be=()=>{try{const e=localStorage.getItem(B.LAST_SESSION);return e?JSON.parse(e):null}catch(e){return console.error("Error parsing last session from localStorage:",e),null}},K=e=>{if(e){try{localStorage.setItem(B.LAST_SESSION,JSON.stringify(e))}catch{}console.error("Error setting last session to localStorage:",error)}},U=()=>{try{const e=localStorage.getItem(B.FAVORITES);return e?JSON.parse(e):[]}catch(e){return console.error("Error parsing favorites from localStorage:",e),[]}},k=e=>U().includes(e),Se=e=>{try{const t=U();t.includes(e)||(t.push(e),localStorage.setItem(B.FAVORITES,JSON.stringify(t)))}catch(t){console.error("Error adding favorite:",t)}},se=e=>{try{const r=U().filter(s=>s!==e);localStorage.setItem(B.FAVORITES,JSON.stringify(r))}catch(t){console.error("Error removing favorite:",t)}},Le=e=>k(e)?(se(e),!1):(Se(e),!0),g="/your-energy/img/sprite.svg";function D(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function we(e){const t=Math.round(Math.max(0,Math.min(5,Number(e)||0))),r=Array(t).fill(`<svg class="full" width="18" height="18">
        <use href="${g}#icon-star"></use>
        </svg>`).join(""),s=Array(5-t).fill(`<svg class="empty" width="18" height="18">
        <use href="${g}#icon-star"></use>
        </svg>`).join("");return r+s}const f={exerciseCard({filter:e,name:t,imgURL:r}){return`<li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${r});'>
              <div class="exercises-wrap-info">
                <p>${(i=>i?i.split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()).join(" "):"")(t)}</p>
                <p>${e}</p>
              </div>
            </div>
          </li>`},itemPagination(e){return`<button class="pagination-item" type="button">
          ${e}
        </button>`},quote(e,t){return`<p class="quote-card-text">
             ${t}
            </p>
            <p class="quote-card-author">${e}</p>`},skeletonExMarkup(e=n.limitPage){return Array.from({length:e}).map(()=>`
      <li class="exercises-item is-skeleton">
        <div class="exercises-background-img skeleton-bg"></div>
        <div class="exercises-wrap-info skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
        </div>
      </li>`).join("")},favoriteCard({_id:e,name:t,burnedCalories:r,time:s,bodyPart:i,target:a,rating:o}){return`
      <li class="favorites-item" data-id=${e}>
        <div class="card-header">
          <div class="card-header-info">
            <div class="card-badge">WORKOUT</div>
            <div class="card-rating">
              <span class="card-rating-value">${o}</span>
                  <svg class="card-rating-icon" width="18" height="18">
                   <use href="${g}#icon-star"></use>
                 </svg>
            </div>
          </div>
           ${k(e)?`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${e}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="${g}#icon-trash"></use>
                 </svg>
               </button>`:""}

          <button class="card-btn-start js-start-btn" data-id="${e}" data-open-overlay="exercise" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${g}#icon-arrow-start"></use>
              </svg>
          </button>
        </div>

        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${g}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${D(t)}</h3>
        </div>

        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${r} / ${s} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${D(i)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${D(a)}</span>
          </li>
        </ul>
      </li>
    `},exerciseModal({_id:e,name:t,rating:r,gifUrl:s,target:i,bodyPart:a,equipment:o,popularity:d,burnedCalories:u,description:S,time:h}){const w=we(r);return`
      <div class="modal-exercises">
        <div class="modal-img-wrapper">
            <img class="modal-img" src="${s}" alt="${t}" />
        </div>
        <div class="modal-details">
            <p class="modal-title">${t}</p>
            <div class="modal-rating">
                <div class="modal-rating-value">${r}</div>
                <div class="modal-rating-stars">${w}</div>
            </div>
            <div class="info-grid">
                <div class="info-row">
                    <div class="info-grid-item">
                        <div class="info-grid-label">Target</div>
                        <div class="info-grid-value">${i}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Body Part</div>
                        <div class="info-grid-value">${a}</div>
                    </div>

                    <div class="info-grid-item">
                        <div class="info-grid-label">Equipment</div>
                        <div class="info-grid-value">${o}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Popular</div>
                        <div class="info-grid-value">${d}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Burned calories</div>
                        <div class="info-grid-value">${u} / ${h}</div>
                    </div>
                </div>
            </div>

            <p class="modal-description">${S}</p>

            <div class="modal-btn-wrapper">
                <button type="button" class="modal-btn" data-btn-favorites>
                  ${k(e)?"Remove from favorites":"Add to favorites"}
                    <svg class="modal-btn-icon" width="18" height="18">
                      <use href="img/sprite.svg#${k(e)?"icon-trash":"icon-heart"}"  data-fav-icon></use>
                    </svg>

                <button type="button" class="modal-btn modal-btn-rating" data-btn-rating>
                  Give a rating
                </button>
            </div>
        </div>
      </div>`},ratingModal(){return`
      <form class="rating-form">
        <div class="rating-form-stars-container">
          <p class="rating-form-stars-title">Rating</p>
          <div class="rating-form-value-stars">
            <div class="rating-form-value">0.0</div>
            <div class="rating-form-stars">
              <input
                type="radio"
                name="rate"
                value="5.0"
                class="rating-form-radio"
                id="star5"
              />
              <label for="star5">
                <svg class="card-icon-star" width="24" height="24">
                  <use href="${g}#icon-star"></use>
                </svg>
              </label>
              <input
                type="radio"
                name="rate"
                value="4.0"
                class="rating-form-radio"
                id="star4"
              />
              <label for="star4">
                <svg class="card-icon-star" width="24" height="24">
                  <use href="${g}#icon-star"></use>
                </svg>
              </label>

              <input
                type="radio"
                name="rate"
                value="3.0"
                class="rating-form-radio"
                id="star3"
              />
              <label for="star3">
                <svg class="card-icon-star" width="24" height="24">
                  <use href="${g}#icon-star"></use>
                </svg>
              </label>

              <input
                type="radio"
                name="rate"
                value="2.0"
                class="rating-form-radio"
                id="star2"
              />
              <label for="star2">
                <svg class="card-icon-star" width="24" height="24">
                  <use href="${g}#icon-star"></use>
                </svg>
              </label>

              <input
                type="radio"
                name="rate"
                value="1.0"
                class="rating-form-radio"
                id="star1"
              />
              <label for="star1">
                <svg class="card-icon-star" width="24" height="24">
                  <use href="${g}#icon-star"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>

        <div class="rating-form-group-container">
          <div class="rating-form-group">
            <input
              type="email"
              name="email"
              id="rating-email"
              class="rating-form-input"
              placeholder="Email"
              required
            />
          </div>

          <div class="rating-form-group">
            <textarea
              id="rating-comment"
              name="review"
              class="rating-form-textarea"
              placeholder="Your comment"
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" class="modal-btn rating-form-btn" data-btn-submit-rating>Send</button>
      </form>
     `}},ae={};let l=null,q=null,P=null;function G(e,t,r=null){ae[e]=t,r!==null&&l.modal.classList.add(r)}function xe(){l={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")},document.querySelectorAll("[data-open-overlay]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.openOverlay;J(t)})})}function J(e){if(!l){console.warn("Modal system is not initialized");return}const t=ae[e];if(!t)return console.warn(`No modal found for key: ${e}`);oe(),l.modalContent.innerHTML=t,l.modal.classList.add("is-open"),document.body.style.overflow="hidden";const r=l.modal.querySelector("[data-close-overlay]");r&&(P=ie,r.addEventListener("click",P)),q=Ee,l.modal.addEventListener("click",q)}function ie(){l&&(l.modalContent.innerHTML="",l.modal.classList.remove("is-open"),document.body.style.overflow="",oe())}function oe(){if(q&&(l.modal.removeEventListener("click",q),q=null),P){const e=l.modal.querySelector("[data-close-overlay]");e==null||e.removeEventListener("click",P),P=null}}function Ee(e){e.target===l.modal&&ie()}xe();const c={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body")};let C=n.limitPage,H=n.limitPage,N=!1;const L=c.btnBox?c.btnBox.querySelector(".exercises-thumb-indicator"):null,qe=async()=>{if(L&&(V(),n.limitPage!==H&&!N)){N=!0;try{H=n.limitPage,C=H,await _({updatePagination:!0})}finally{N=!1}}},V=()=>{if(!L)return;const e=c.btnBox.querySelector("button.active");if(!e||!L)return;const t=c.btnBox.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-t.left,i=r.width;L.style.transform=`translateX(${s}px)`,L.style.width=`${i}px`},Pe=()=>{c.listEx.innerHTML=f.skeletonExMarkup(C)},ne=e=>{const t=[];for(let r=1;r<=e;r++)t.push(f.itemPagination(r));c.paginationBox.innerHTML=t.join("")},ce=e=>{const t=[...c.paginationBox.children];if(!t.length)return;t.forEach(s=>s.classList.remove("pagination-item-active"));const r=e-1;r>=0&&r<t.length&&t[r].classList.add("pagination-item-active")},le=e=>{e.stopPropagation();const t=e.currentTarget.dataset.id;se(t),e.currentTarget.remove();const r=document.querySelector(".modal-exercises");if(r){const s=r.querySelector("[data-btn-favorites]");if(s){s.textContent="Add to favorites",s.classList.remove("active");const i=s.querySelector("use");i&&i.setAttribute("href","img/sprite.svg#icon-heart")}}},$e=async(e,t)=>{var d,u;e.preventDefault();const r=e.target.closest("form");if(!r)return;const s=((d=r.querySelector("#rating-email"))==null?void 0:d.value.trim())||"",i=((u=r.querySelector("#rating-comment"))==null?void 0:u.value.trim())||"",a=r.querySelector('input[name="rate"]:checked'),o=a?parseFloat(a.value):null;if(!o){b.info({message:"Please select your rating.",position:"topRight"});return}if(!s){b.info({message:"Please enter your email",position:"topRight"});return}if(!i){b.info({message:"Please enter your review",position:"topRight"});return}try{if(await n.rateExercise(t,o,s,i)){b.success({message:"Rating submitted successfully!",position:"topRight"});const h=document.querySelector(".full-overlay.is-open [data-close-overlay]");h&&h.click()}}catch(S){b.error({message:S,position:"topRight"})}},Be=async e=>{const t=e.currentTarget.dataset.id,r=await n.getExerciseById(t);G("exercise",f.exerciseModal(r),"overlay-exersices"),J("exercise");const s=document.querySelector("[data-btn-favorites]"),i=document.querySelector("[data-btn-rating]");s.addEventListener("click",()=>{const a=r._id,o=Le(a),d=s.querySelector("[data-fav-icon]");if(o){s.textContent="Remove from favorites",s.appendChild(d.closest("svg")),d.setAttribute("href","img/sprite.svg#icon-trash");const u=document.querySelector(`.favorites-item[data-id="${a}"] [data-open-overlay]`),S=`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${a}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="img/sprite.svg#icon-trash"></use>
                 </svg>
               </button>`;u.insertAdjacentHTML("beforebegin",S);const h=document.querySelector(`[data-btn-remove-favorites][data-id="${a}"]`);h&&h.addEventListener("click",le)}else{s.textContent="Add to favorites",s.appendChild(d.closest("svg")),d.setAttribute("href","img/sprite.svg#icon-heart");const u=document.querySelector(`[data-btn-remove-favorites][data-id="${a}"]`);u&&u.remove()}}),i.addEventListener("click",()=>{const a=document.querySelector(".modal-exercises");a&&a.remove();const o=f.ratingModal();G("rating",o,"overalay-rating"),J("rating"),document.querySelector("[data-btn-submit-rating]").addEventListener("click",w=>$e(w,t));const u=document.querySelector(".rating-form"),S=u.querySelectorAll('input[name="rate"]'),h=u.querySelector(".rating-form-value");S.forEach(w=>{w.addEventListener("change",()=>{h.textContent=w.value})})})},Te=async e=>{const t=await n.getExerciseByCategory(n.filterType,e.currentTarget.dataset.name);c.listEx.classList.add("body-parts-list");const r=t.results.map(s=>f.favoriteCard(s));c.listEx.innerHTML=r.join(""),ke()},ke=()=>{const e=document.querySelectorAll(".card-btn-start"),t=document.querySelectorAll("[data-btn-remove-favorites]");e.forEach(r=>r.addEventListener("click",Be)),t.forEach(r=>r.addEventListener("click",le))},Me=()=>{document.querySelectorAll(".exercises-item").forEach(t=>t.addEventListener("click",Te))},de=e=>{const t=e.results.map(r=>f.exerciseCard(r));c.listEx.innerHTML=t.join(""),Me(),C=Math.max(t.length,n.limitPage)},Ae=e=>{const r=Date.now()-e,s=24*60*60*1e3;return r>=s},Re=async()=>{try{const e=be();if(e){const{author:t,quote:r,time:s}=e;if(Ae(s)){const a=await n.getQuote(),o=f.quote(a.author,a.quote);c.quoteBody.innerHTML=o,K({author:a.author,quote:a.quote,time:Date.now()})}else{const a=f.quote(t,r);c.quoteBody.innerHTML=a}}else{const t=await n.getQuote(),r=f.quote(t.author,t.quote);c.quoteBody.innerHTML=r,K({author:t.author,quote:t.quote,time:Date.now()})}}catch{const s=f.quote("Tom Brady","A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.");if(!L)return;c.quoteBody.innerHTML=s}},_=async({updatePagination:e=!1}={})=>{Pe();const t=await n.getDataByFilter();de(t),e&&ne(n.totalPages),ce(n.currentPage)},Ce=async()=>{if(L)try{Re();const e=await n.getDataByFilter();c.btnBox.children[0]&&(c.btnBox.children[0].classList.add("active"),requestAnimationFrame(V)),de(e),ne(n.totalPages),ce(n.currentPage)}catch(e){console.log("🚀 ~ error:",e)}},Fe=async e=>{try{const t=e.target.closest("button");if(!t)return;const r=t.dataset.type;if(!r)return;n.changeSearchType(r),C=n.limitPage,[...e.currentTarget.children].forEach(s=>s.classList.remove("active")),t.classList.add("active"),requestAnimationFrame(V),await _({updatePagination:!0})}catch(t){console.log("🚀 ~ error:",t)}},Ie=async e=>{try{const t=e.target.closest("button");if(!t)return;const r=Number(t.textContent.trim());if(!Number.isFinite(r)||r===n.currentPage)return;n.currentPage=r,await _()}catch(t){console.log("🚀 ~ error:",t)}};Ce();c.btnBox&&(window.addEventListener("resize",qe),c.btnBox.addEventListener("click",Fe));c.paginationBox&&c.paginationBox.addEventListener("click",Ie);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-reset-btn");!e||!t||(e.addEventListener("input",()=>{e.value.trim()!==""?t.classList.remove("visually-hidden"):t.classList.add("visually-hidden")}),t.addEventListener("click",r=>{r.preventDefault(),e.value="",t.classList.add("visually-hidden"),e.focus()}))});export{f as T,n as d,U as g,se as r};
//# sourceMappingURL=main-uQUcM1X9.js.map
