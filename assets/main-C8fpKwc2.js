var ue=Object.defineProperty;var K=e=>{throw TypeError(e)};var me=(e,t,r)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var E=(e,t,r)=>me(e,typeof t!="symbol"?t+"":t,r),_=(e,t,r)=>t.has(e)||K("Cannot "+r);var h=(e,t,r)=>(_(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>t.has(e)?K("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);var F=(e,t,r)=>(_(e,t,"access private method"),r);import{a as p,i as y}from"./vendor-pFq095uA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.navLinks.forEach(r=>r.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();let I=window.location.pathname.split("/").pop()||"index.html",X=I===""||I==="index.html"?"home":I.replace(".html","");const A=document.querySelectorAll(".nav-link");A.forEach(e=>{e.dataset.page===X&&(e.classList.add("is-active"),e.classList.add("is-current"))});const D=document.querySelector(".nav-list"),O=document.querySelector(".nav-indicator");function B(e){if(!O||!D||!e)return;const t=D.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-t.left;O.style.width=r.width+"px",O.style.transform=`translateX(${s}px)`}let u=document.querySelector(".nav-link.is-active")||A[0];B(u);A.forEach(e=>{e.addEventListener("mouseenter",()=>{B(e),e!==u?u.classList.remove("is-current"):u.classList.add("is-current")}),e.addEventListener("click",t=>{if(e===u){t.preventDefault();return}if(e.dataset.page===X){t.preventDefault(),u=e,u.classList.add("is-current"),B(u);return}A.forEach(r=>r.classList.remove("is-active","is-current")),e.classList.add("is-active","is-current"),u=e})});D.addEventListener("mouseleave",()=>{B(u),u.classList.add("is-current")});window.addEventListener("resize",()=>{B(u)});const Z=document.querySelector(".theme-switch .checkbox"),M=document.documentElement,ve=localStorage.getItem("theme"),ge=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,ee=ve||(ge?"dark":"light");M.setAttribute("data-theme",ee);Z.checked=ee==="dark";function fe(e){M.classList.add("theme-transition"),window.setTimeout(()=>{M.classList.remove("theme-transition")},400),e()}Z.addEventListener("change",e=>{const t=e.target.checked?"dark":"light";fe(()=>{M.setAttribute("data-theme",t),localStorage.setItem("theme",t)})});const N=document.querySelector(".anchor-button");function he(e=1e3){const t=window.scrollY,r=performance.now();function s(a){const i=a-r,n=Math.min(i/e,1),v=1-Math.pow(1-n,3);window.scrollTo(0,t*(1-v)),n<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}window.addEventListener("scroll",()=>{window.scrollY>300?N.classList.add("show"):N.classList.remove("show")});N.addEventListener("click",e=>{e.preventDefault(),he()});p.defaults.baseURL="https://your-energy.b.goit.study/api";p.defaults.headers.common["Content-Type"]="application/json";var x,te,R,re,f;class pe{constructor(){T(this,x);E(this,"totalPages",0);E(this,"currentPage",1);E(this,"limitPage",9);E(this,"filterType","Muscles");T(this,R,()=>{const r=window.innerWidth>=768?12:9;r!==this.limitPage&&(this.limitPage=r,this.currentPage=1)});T(this,f,t=>{var r,s;return console.error("API Error:",t),Promise.reject(((s=(r=t.response)==null?void 0:r.data)==null?void 0:s.message)||t.message||"An unexpected error occurred")});F(this,x,te).call(this),window.addEventListener("resize",h(this,R))}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(t){this.filterType=t,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const t=await p.get("/filters",{params:F(this,x,re).call(this)});return this.totalPages=t.data.totalPages,t.data}catch(t){return h(this,f).call(this,t)}}async getExercises(t={},r=1,s=10){try{const a={...t,page:r,limit:s};return(await p.get("/exercises",{params:a})).data}catch(a){return h(this,f).call(this,a)}}async getExerciseByCategory(t,r,s=1,a=10){try{const i={...t,...r,...s,limit:a};return(await p.get("/exercises",{params:i})).data}catch(i){return h(this,f).call(this,i)}}async getExerciseById(t){try{return(await p.get(`/exercises/${t}`)).data}catch(r){return h(this,f).call(this,r)}}async rateExercise(t,r,s,a=""){try{if(r<1||r>5)throw new Error("Rating must be between 1 and 5");return(await p.patch(`/exercises/${t}/rating`,{rate:r,email:s,review:a})).data}catch(i){return h(this,f).call(this,i)}}async getQuote(){try{return(await p.get("/quote")).data}catch(t){return h(this,f).call(this,t)}}async subscribe(t){try{return await p.post("/subscription",{email:t})}catch(r){return h(this,f).call(this,r)}}}x=new WeakSet,te=function(){const{matches:t}=window.matchMedia("(max-width: 767px)");this.limitPage=t?9:12},R=new WeakMap,re=function(){return{filter:this.filterType,page:this.currentPage,limit:this.limitPage}},f=new WeakMap;const o=new pe,Q={form:document.querySelector(".footer-form")},ye=async e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!t){y.info({message:"Email is required",position:"topRight"});return}if(!r.test(t)){y.info({message:"Invalid email format",position:"topRight"});return}try{const s=await o.subscribe(t);if(s.status===201){y.success({message:s.data.message,position:"topRight"}),Q.form.reset();return}}catch(s){y.error({message:s,position:"topRight"}),Q.form.reset()}};Q.form.addEventListener("submit",ye);const V={FAVORITES:"favorites",UI_THEME:"ui-theme",LAST_SESSION:"last_session"},W=()=>{try{const e=localStorage.getItem(V.FAVORITES);return e?JSON.parse(e):[]}catch(e){return console.error("Error parsing favorites from localStorage:",e),[]}},k=e=>W().includes(e),be=e=>{try{const t=W();t.includes(e)||(t.push(e),localStorage.setItem(V.FAVORITES,JSON.stringify(t)))}catch(t){console.error("Error adding favorite:",t)}},se=e=>{try{const r=W().filter(s=>s!==e);localStorage.setItem(V.FAVORITES,JSON.stringify(r))}catch(t){console.error("Error removing favorite:",t)}},we=e=>k(e)?(se(e),!1):(be(e),!0),m="/your-energy/img/sprite.svg";function j(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function Le(e){const t=Math.round(Math.max(0,Math.min(5,Number(e)||0))),r=Array(t).fill(`<svg class="full" width="18" height="18">
        <use href="${m}#icon-star"></use>
        </svg>`).join(""),s=Array(5-t).fill(`<svg class="empty" width="18" height="18">
        <use href="${m}#icon-star"></use>
        </svg>`).join("");return r+s}const w={exerciseCard({filter:e,name:t,imgURL:r}){return`<li class='exercises-item' data-name-category=${t}>
            <div class='exercises-background-img' style='background-image: url(${r});'>
              <div class="exercises-wrap-info">
                <p>${(a=>a?a.split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "):"")(t)}</p>
                <p>${e}</p>
              </div>
            </div>
          </li>`},itemPagination(e){return`<button class="pagination-item" type="button">
          ${e}
        </button>`},skeletonExMarkup(e=o.limitPage){return Array.from({length:e}).map(()=>`
      <li class="exercises-item is-skeleton">
        <div class="exercises-background-img skeleton-bg"></div>
        <div class="exercises-wrap-info skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
        </div>
      </li>`).join("")},favoriteCard({_id:e,name:t,burnedCalories:r,time:s,bodyPart:a,target:i,rating:n}){return`
      <li class="favorites-item" data-id=${e}>
        <div class="card-header">
          <div class="card-header-info">
            <div class="card-badge">WORKOUT</div>
            <div class="card-rating">
              <span class="card-rating-value">${n}</span>
                  <svg class="card-rating-icon" width="18" height="18">
                   <use href="${m}#icon-star"></use>
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
                   <use href="${m}#icon-trash"></use>
                 </svg>
               </button>`:""}

          <button class="card-btn-start js-start-btn" data-id="${e}" data-open-overlay="exercise" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${m}#icon-arrow-start"></use>
              </svg>
          </button>
        </div>

        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${m}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${j(t)}</h3>
        </div>

        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${r} / ${s} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${j(a)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${j(i)}</span>
          </li>
        </ul>
      </li>
    `},exerciseModal({_id:e,name:t,rating:r,gifUrl:s,target:a,bodyPart:i,equipment:n,popularity:v,burnedCalories:g,description:d,time:b}){const L=Le(r);return`
      <div class="modal-exercises">
        <div class="modal-img-wrapper">
            <img class="modal-img" src="${s}" alt="${t}" />
        </div>
        <div class="modal-details">
            <p class="modal-title">${t}</p>
            <div class="modal-rating">
                <div class="modal-rating-value">${r}</div>
                <div class="modal-rating-stars">${L}</div>
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
                        <div class="info-grid-value">${n}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Popular</div>
                        <div class="info-grid-value">${v}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Burned calories</div>
                        <div class="info-grid-value">${g} / ${b}</div>
                    </div>
                </div>
            </div>

            <p class="modal-description">${d}</p>

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
                  <use href="${m}#icon-star"></use>
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
                  <use href="${m}#icon-star"></use>
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
                  <use href="${m}#icon-star"></use>
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
                  <use href="${m}#icon-star"></use>
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
                  <use href="${m}#icon-star"></use>
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
     `},quoteTemplate:({quote:e,author:t})=>`
    <div class="quote-icon-run">
      <svg width="20" height="20">
        <use href="img/sprite.svg#icon-running-stick-figure"></use>
      </svg>
    </div>

    <div class="quote-content">
      <h3 class="quote-title">Quote of the day</h3>
      <p class="quote-text js-quote-text">${e}</p>
      <p class="quote-author js-quote-author">${t}</p>
    </div>

    <div class="quote-icon">
      <svg width="20" height="20">
        <use href="img/sprite.svg#icon-inverted-commas"></use>
      </svg>
    </div>
  `},ae={};let l=null,q=null,P=null;function G(e,t,r=null){ae[e]=t,l.modal.classList="full-overlay",r!==null&&l.modal.classList.add(r)}function Se(){l={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")},document.querySelectorAll("[data-open-overlay]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.openOverlay;U(t)})})}function U(e){if(!l){console.warn("Modal system is not initialized");return}const t=ae[e];if(!t)return console.warn(`No modal found for key: ${e}`);ne(),l.modalContent.innerHTML=t,l.modal.classList.add("is-open"),document.body.style.overflow="hidden";const r=l.modal.querySelector("[data-close-overlay]");r&&(P=ie,r.addEventListener("click",P)),q=xe,l.modal.addEventListener("click",q)}function ie(){l&&(l.modalContent.innerHTML="",l.modal.classList="full-overlay",document.body.style.overflow="",ne())}function ne(){if(q&&(l.modal.removeEventListener("click",q),q=null),P){const e=l.modal.querySelector("[data-close-overlay]");e==null||e.removeEventListener("click",P),P=null}}function xe(e){e.target===l.modal&&ie()}Se();const c={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body"),searchBar:document.querySelector(".search-bar"),exercisesBredcrumbs:document.querySelector(".exercises-bredcrumbs")};let C=o.limitPage,H=o.limitPage,z=!1;const S=c.btnBox?c.btnBox.querySelector(".exercises-thumb-indicator"):null,Ee=async()=>{if(S&&(Y(),o.limitPage!==H&&!z)){z=!0;try{H=o.limitPage,C=H,await J({updatePagination:!0})}finally{z=!1}}},Y=()=>{if(!S)return;const e=c.btnBox.querySelector("button.active");if(!e||!S)return;const t=c.btnBox.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-t.left,a=r.width;S.style.transform=`translateX(${s}px)`,S.style.width=`${a}px`},qe=()=>{c.listEx.innerHTML=w.skeletonExMarkup(C)},oe=e=>{const t=[];for(let r=1;r<=e;r++)t.push(w.itemPagination(r));c.paginationBox.innerHTML=t.join("")},ce=e=>{const t=[...c.paginationBox.children];if(!t.length)return;t.forEach(s=>s.classList.remove("pagination-item-active"));const r=e-1;r>=0&&r<t.length&&t[r].classList.add("pagination-item-active")},le=e=>{e.stopPropagation();const t=e.currentTarget.dataset.id;se(t),e.currentTarget.remove();const r=document.querySelector(".modal-exercises");if(r){const s=r.querySelector("[data-btn-favorites]");if(s){s.textContent="Add to favorites",s.classList.remove("active");const a=s.querySelector("use");a&&a.setAttribute("href","img/sprite.svg#icon-heart")}}},Pe=async(e,t)=>{var v,g;e.preventDefault();const r=e.target.closest("form");if(!r)return;const s=((v=r.querySelector("#rating-email"))==null?void 0:v.value.trim())||"",a=((g=r.querySelector("#rating-comment"))==null?void 0:g.value.trim())||"",i=r.querySelector('input[name="rate"]:checked'),n=i?parseFloat(i.value):null;if(!n){y.info({message:"Please select your rating.",position:"topRight"});return}if(!s){y.info({message:"Please enter your email",position:"topRight"});return}if(!a){y.info({message:"Please enter your review",position:"topRight"});return}try{if(await o.rateExercise(t,n,s,a)){y.success({message:"Rating submitted successfully!",position:"topRight"});const b=document.querySelector(".full-overlay.is-open [data-close-overlay]");b&&b.click()}}catch(d){y.error({message:d,position:"topRight"})}},Be=async(e,t)=>{const r=t||e.currentTarget.dataset.id,s=await o.getExerciseById(r);G("exercise",w.exerciseModal(s),"overlay-exersices"),U("exercise");const a=document.querySelector("[data-btn-favorites]"),i=document.querySelector("[data-btn-rating]");a.addEventListener("click",()=>{const n=s._id,v=we(n),g=a.querySelector("[data-fav-icon]");if(v){a.textContent="Remove from favorites",a.appendChild(g.closest("svg")),g.setAttribute("href","img/sprite.svg#icon-trash");const d=document.querySelector(`.favorites-item[data-id="${n}"] [data-open-overlay]`),b=`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${n}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="img/sprite.svg#icon-trash"></use>
                 </svg>
               </button>`;d.insertAdjacentHTML("beforebegin",b);const L=document.querySelector(`[data-btn-remove-favorites][data-id="${n}"]`);L&&L.addEventListener("click",le)}else{a.textContent="Add to favorites",a.appendChild(g.closest("svg")),g.setAttribute("href","img/sprite.svg#icon-heart");const d=document.querySelector(`[data-btn-remove-favorites][data-id="${n}"]`);d&&d.remove()}}),i.addEventListener("click",()=>{const n=document.querySelector(".modal-exercises");n&&n.remove();const v=w.ratingModal();G("rating",v,"overlay-rating"),U("rating"),document.querySelector("[data-btn-submit-rating]").addEventListener("click",$=>Pe($,r));const d=document.querySelector(".rating-form"),b=d.querySelectorAll('input[name="rate"]'),L=d.querySelector(".rating-form-value");b.forEach($=>{$.addEventListener("change",()=>{L.textContent=$.value})})})},$e=()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-icon");if(!e||!t)return;let r=null;e.addEventListener("focusin",()=>{t.style.opacity="0",t.style.pointerEvents="none"}),e.addEventListener("focusout",()=>{e.value.trim()===""&&(t.style.opacity="1",t.style.pointerEvents="auto")}),e.addEventListener("input",s=>{const a=s.target.value.trim().toLowerCase();clearTimeout(r),r=setTimeout(()=>{Te(a)},250)})},Te=e=>{document.querySelectorAll(".favorites-item").forEach(r=>{const s=r.querySelector(".card-title"),a=(s==null?void 0:s.textContent.trim().toLowerCase())||"";if(e===""){r.style.display="";return}a.includes(e)?r.style.display="":r.style.display="none"})},ke=async e=>{const t=e.currentTarget.dataset.nameCategory,r=await o.getExerciseByCategory(o.filterType,t);c.searchBar.classList.add("is-show"),c.exercisesBredcrumbs.classList.add("is-show"),c.exercisesBredcrumbs.querySelector(".exercises-category").innerHTML=t,c.listEx.classList.add("body-parts-list");const s=r.results.map(a=>w.favoriteCard(a));c.listEx.innerHTML=s.join(""),$e(),Ae()},Ae=()=>{const e=document.querySelectorAll(".card-btn-start"),t=document.querySelectorAll("[data-btn-remove-favorites]");e.forEach(r=>r.addEventListener("click",Be)),t.forEach(r=>r.addEventListener("click",le))},Me=()=>{document.querySelectorAll(".exercises-item").forEach(t=>t.addEventListener("click",ke))},de=e=>{const t=e.results.map(r=>w.exerciseCard(r));c.listEx.innerHTML=t.join(""),Me(),C=Math.max(t.length,o.limitPage)},Re=async()=>{const e=document.querySelector(".quote-card");try{const t=await o.getQuote();e.innerHTML=w.quoteTemplate(t)}catch{const r="Tom Brady",s="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.";e.innerHTML=w.quoteTemplate({quote:s,author:r})}},J=async({updatePagination:e=!1}={})=>{qe();const t=await o.getDataByFilter();de(t),e&&oe(o.totalPages),ce(o.currentPage)},Ce=async()=>{try{if(Re(),!S)return;const e=await o.getDataByFilter();c.btnBox.children[0]&&(c.btnBox.children[0].classList.add("active"),requestAnimationFrame(Y)),de(e),oe(o.totalPages),ce(o.currentPage)}catch(e){console.log("🚀 ~ error:",e)}},Fe=async e=>{try{const t=e.target.closest("button");if(!t)return;const r=t.dataset.type;if(!r)return;o.changeSearchType(r),C=o.limitPage,[...e.currentTarget.children].forEach(s=>s.classList.remove("active")),t.classList.add("active"),requestAnimationFrame(Y),await J({updatePagination:!0}),c.searchBar.classList.remove("is-show"),c.exercisesBredcrumbs.classList.remove("is-show")}catch(t){console.log("🚀 ~ error:",t)}},Ie=async e=>{try{const t=e.target.closest("button");if(!t)return;const r=Number(t.textContent.trim());if(!Number.isFinite(r)||r===o.currentPage)return;o.currentPage=r,await J()}catch(t){console.log("🚀 ~ error:",t)}};Ce();c.btnBox&&(window.addEventListener("resize",Ee),c.btnBox.addEventListener("click",Fe));c.paginationBox&&c.paginationBox.addEventListener("click",Ie);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-reset-btn");!e||!t||(e.addEventListener("input",()=>{e.value.trim()!==""?t.classList.remove("visually-hidden"):t.classList.add("visually-hidden")}),t.addEventListener("click",r=>{r.preventDefault(),e.value="",t.classList.add("visually-hidden"),e.focus()}))});export{w as T,o as d,W as g,Be as h,se as r};
//# sourceMappingURL=main-C8fpKwc2.js.map
