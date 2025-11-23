var Le=Object.defineProperty;var re=e=>{throw TypeError(e)};var we=(e,t,r)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var q=(e,t,r)=>we(e,typeof t!="symbol"?t+"":t,r),se=(e,t,r)=>t.has(e)||re("Cannot "+r);var p=(e,t,r)=>(se(e,t,"read from private field"),r?r.call(e):t.get(e)),A=(e,t,r)=>t.has(e)?re("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);var N=(e,t,r)=>(se(e,t,"access private method"),r);import{a as y,i as b}from"./vendor-pFq095uA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.navLinks.forEach(r=>r.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();let z=window.location.pathname.split("/").pop()||"index.html",oe=z===""||z==="index.html"?"home":z.replace(".html","");const R=document.querySelectorAll(".nav-link");R.forEach(e=>{e.dataset.page===oe&&(e.classList.add("is-active"),e.classList.add("is-current"))});const K=document.querySelector(".nav-list"),Q=document.querySelector(".nav-indicator");function P(e){if(!Q||!K||!e)return;const t=K.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-t.left;Q.style.width=r.width+"px",Q.style.transform=`translateX(${s}px)`}let g=document.querySelector(".nav-link.is-active")||R[0];P(g);R.forEach(e=>{e.addEventListener("mouseenter",()=>{P(e),e!==g?g.classList.remove("is-current"):g.classList.add("is-current")}),e.addEventListener("click",t=>{if(e===g){t.preventDefault();return}if(e.dataset.page===oe){t.preventDefault(),g=e,g.classList.add("is-current"),P(g);return}R.forEach(r=>r.classList.remove("is-active","is-current")),e.classList.add("is-active","is-current"),g=e})});K.addEventListener("mouseleave",()=>{P(g),g.classList.add("is-current")});window.addEventListener("resize",()=>{P(g)});const ne=document.querySelector(".theme-switch .checkbox"),I=document.documentElement,xe=localStorage.getItem("theme"),Se=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,ce=xe||(Se?"dark":"light");I.setAttribute("data-theme",ce);ne.checked=ce==="dark";function Ee(e){I.classList.add("theme-transition"),window.setTimeout(()=>{I.classList.remove("theme-transition")},400),e()}ne.addEventListener("change",e=>{const t=e.target.checked?"dark":"light";Ee(()=>{I.setAttribute("data-theme",t),localStorage.setItem("theme",t)})});const V=document.querySelector(".anchor-button");function qe(e=1e3){const t=window.scrollY,r=performance.now();function s(a){const o=a-r,n=Math.min(o/e,1),d=1-Math.pow(1-n,3);window.scrollTo(0,t*(1-d)),n<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}window.addEventListener("scroll",()=>{window.scrollY>300?V.classList.add("show"):V.classList.remove("show")});V.addEventListener("click",e=>{e.preventDefault(),qe()});y.defaults.baseURL="https://your-energy.b.goit.study/api";y.defaults.headers.common["Content-Type"]="application/json";var E,le,D,de,f;class Te{constructor(){A(this,E);q(this,"totalPages",0);q(this,"currentPage",1);q(this,"limitPage",9);q(this,"filterType","Muscles");A(this,D,()=>{const r=window.innerWidth>=768?12:9;r!==this.limitPage&&(this.limitPage=r,this.currentPage=1)});A(this,f,t=>{var r,s;return console.error("API Error:",t),Promise.reject(((s=(r=t.response)==null?void 0:r.data)==null?void 0:s.message)||t.message||"An unexpected error occurred")});N(this,E,le).call(this),window.addEventListener("resize",p(this,D))}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(t){this.filterType=t,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const t=await y.get("/filters",{params:N(this,E,de).call(this)});return this.totalPages=t.data.totalPages,t.data}catch(t){return p(this,f).call(this,t)}}async getExercises(t={},r=1,s=10){try{const a={...t,page:r,limit:s};return(await y.get("/exercises",{params:a})).data}catch(a){return p(this,f).call(this,a)}}async getExerciseByCategory(t,r,s=1,a=10,o=""){try{const d={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"}[t];if(!d)throw new Error(`Unknown filter type: ${t}`);const u={[d]:r.toLowerCase(),page:s,limit:a};return o&&(u.keyword=o.toLowerCase()),(await y.get("/exercises",{params:u})).data}catch(n){return p(this,f).call(this,n)}}async getExerciseById(t){try{return(await y.get(`/exercises/${t}`)).data}catch(r){return p(this,f).call(this,r)}}async rateExercise(t,r,s,a=""){try{if(r<1||r>5)throw new Error("Rating must be between 1 and 5");return(await y.patch(`/exercises/${t}/rating`,{rate:r,email:s,review:a})).data}catch(o){return p(this,f).call(this,o)}}async getQuote(){try{return(await y.get("/quote")).data}catch(t){return p(this,f).call(this,t)}}async subscribe(t){try{return await y.post("/subscription",{email:t})}catch(r){return p(this,f).call(this,r)}}}E=new WeakSet,le=function(){const{matches:t}=window.matchMedia("(max-width: 767px)");this.limitPage=t?9:12},D=new WeakMap,de=function(){return{filter:this.filterType,page:this.currentPage,limit:this.limitPage}},f=new WeakMap;const c=new Te,J={form:document.querySelector(".footer-form")},Be=async e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!t){b.info({message:"Email is required",position:"topRight"});return}if(!r.test(t)){b.info({message:"Invalid email format",position:"topRight"});return}try{const s=await c.subscribe(t);if(s.status===201){b.success({message:s.data.message,position:"topRight"}),J.form.reset();return}}catch(s){b.error({message:s,position:"topRight"}),J.form.reset()}};J.form.addEventListener("submit",Be);const k={FAVORITES:"favorites",UI_THEME:"ui-theme",LAST_SESSION:"last_session",DAILY_QUOTE:"daily_quote"},G=()=>{try{const e=localStorage.getItem(k.FAVORITES);return e?JSON.parse(e):[]}catch(e){return console.error("Error parsing favorites from localStorage:",e),[]}},C=e=>G().includes(e),Pe=e=>{try{const t=G();t.includes(e)||(t.push(e),localStorage.setItem(k.FAVORITES,JSON.stringify(t)))}catch(t){console.error("Error adding favorite:",t)}},ue=e=>{try{const r=G().filter(s=>s!==e);localStorage.setItem(k.FAVORITES,JSON.stringify(r))}catch(t){console.error("Error removing favorite:",t)}},$e=e=>C(e)?(ue(e),!1):(Pe(e),!0),ke=e=>{if(!e)return!1;const t=new Date(e),r=new Date;return t.getFullYear()===r.getFullYear()&&t.getMonth()===r.getMonth()&&t.getDate()===r.getDate()},Me=()=>{try{const e=localStorage.getItem(k.DAILY_QUOTE);if(!e)return null;const t=JSON.parse(e);return ke(t.timestamp)?t:null}catch(e){return console.error("Error getting daily quote from localStorage:",e),null}},Ae=(e,t)=>{try{const r={quote:e,author:t,timestamp:Date.now()};localStorage.setItem(k.DAILY_QUOTE,JSON.stringify(r))}catch(r){console.error("Error saving daily quote to localStorage:",r)}},v="/your-energy/img/sprite.svg";function U(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function Ce(e){const t=Math.round(Math.max(0,Math.min(5,Number(e)||0))),r=Array(t).fill(`<svg class="full" width="18" height="18">
        <use href="${v}#icon-star"></use>
        </svg>`).join(""),s=Array(5-t).fill(`<svg class="empty" width="18" height="18">
        <use href="${v}#icon-star"></use>
        </svg>`).join("");return r+s}const h={exerciseCard({filter:e,name:t,imgURL:r}){return`<li class='exercises-item' data-name-category=${t}>
            <div class='exercises-background-img' style='background-image: url(${r});'>
              <div class="exercises-wrap-info">
                <p>${(a=>a?a.split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "):"")(t)}</p>
                <p>${e}</p>
              </div>
            </div>
          </li>`},itemPagination(e){return`<button class="pagination-item" type="button">
          ${e}
        </button>`},skeletonExMarkup(e=c.limitPage){return Array.from({length:e}).map(()=>`
      <li class="exercises-item is-skeleton">
        <div class="exercises-background-img skeleton-bg"></div>
        <div class="exercises-wrap-info skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
        </div>
      </li>`).join("")},favoriteCard({_id:e,name:t,burnedCalories:r,time:s,bodyPart:a,target:o,rating:n}){return`
      <li class="favorites-item" data-id=${e}>
        <div class="card-header">
          <div class="card-header-info">
            <div class="card-badge">WORKOUT</div>
            <div class="card-rating">
              <span class="card-rating-value">${n}</span>
                  <svg class="card-rating-icon" width="18" height="18">
                   <use href="${v}#icon-star"></use>
                 </svg>
            </div>
          </div>
           ${C(e)?`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${e}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="${v}#icon-trash"></use>
                 </svg>
               </button>`:""}

          <button class="card-btn-start js-start-btn" data-id="${e}" data-open-overlay="exercise" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${v}#icon-arrow-start"></use>
              </svg>
          </button>
        </div>

        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${v}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${U(t)}</h3>
        </div>

        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${r} / ${s} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${U(a)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${U(o)}</span>
          </li>
        </ul>
      </li>
    `},exerciseModal({_id:e,name:t,rating:r,gifUrl:s,target:a,bodyPart:o,equipment:n,popularity:d,burnedCalories:u,description:m,time:L}){const x=Ce(r);return`
      <div class="modal-exercises">
        <div class="modal-img-wrapper">
            <img class="modal-img" src="${s}" alt="${t}" />
        </div>
        <div class="modal-details">
            <p class="modal-title">${t}</p>
            <div class="modal-rating">
                <div class="modal-rating-value">${r}</div>
                <div class="modal-rating-stars">${x}</div>
            </div>
            <div class="info-grid">
                <div class="info-row">
                    <div class="info-grid-item">
                        <div class="info-grid-label">Target</div>
                        <div class="info-grid-value">${a}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Body Part</div>
                        <div class="info-grid-value">${o}</div>
                    </div>

                    <div class="info-grid-item">
                        <div class="info-grid-label">Equipment</div>
                        <div class="info-grid-value">${n}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Popular</div>
                        <div class="info-grid-value">${d}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Burned calories</div>
                        <div class="info-grid-value">${u} / ${L}</div>
                    </div>
                </div>
            </div>

            <p class="modal-description">${m}</p>

            <div class="modal-btn-wrapper">
                <button type="button" class="modal-btn" data-btn-favorites>
                  ${C(e)?"Remove from favorites":"Add to favorites"}
                    <svg class="modal-btn-icon" width="18" height="18">
                      <use href="img/sprite.svg#${C(e)?"icon-trash":"icon-heart"}"  data-fav-icon></use>
                    </svg>
                </button>

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
                  <use href="${v}#icon-star"></use>
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
                  <use href="${v}#icon-star"></use>
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
                  <use href="${v}#icon-star"></use>
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
                  <use href="${v}#icon-star"></use>
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
                  <use href="${v}#icon-star"></use>
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
      <svg width="18" height="20">
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
  `},me={};let l=null,T=null,B=null;function ae(e,t,r=null){me[e]=t,l.modal.classList="full-overlay",r!==null&&l.modal.classList.add(r)}function Re(){l={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")},document.querySelectorAll("[data-open-overlay]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.openOverlay;W(t)})})}function W(e){if(!l){console.warn("Modal system is not initialized");return}const t=me[e];if(!t)return console.warn(`No modal found for key: ${e}`);ve(),l.modalContent.innerHTML=t,l.modal.classList.add("is-open"),document.body.style.overflow="hidden";const r=l.modal.querySelector("[data-close-overlay]");r&&(B=ge,r.addEventListener("click",B)),T=Ie,l.modal.addEventListener("click",T)}function ge(){l&&(l.modalContent.innerHTML="",l.modal.classList="full-overlay",document.body.style.overflow="",ve())}function ve(){if(T&&(l.modal.removeEventListener("click",T),T=null),B){const e=l.modal.querySelector("[data-close-overlay]");e==null||e.removeEventListener("click",B),B=null}}function Ie(e){e.target===l.modal&&ge()}Re();const i={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body"),searchBar:document.querySelector(".search-bar"),exercisesBredcrumbs:document.querySelector(".exercises-bredcrumbs"),favoritesEmpty:document.querySelector(".favorites-empty"),exercisedTitleThumb:document.querySelector(".exercises-title-thumb")};let O=c.limitPage,Y=c.limitPage,_=!1,X="categories",$=null,w=1,F=1,Z="";const S=i.btnBox?i.btnBox.querySelector(".exercises-thumb-indicator"):null,Fe=async()=>{if(S&&(ee(),c.limitPage!==Y&&!_)){_=!0;try{Y=c.limitPage,O=Y,await te({updatePagination:!0})}finally{_=!1}}},ee=()=>{if(!S)return;const e=i.btnBox.querySelector("button.active");if(!e||!S)return;const t=i.btnBox.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-t.left,a=r.width;S.style.transform=`translateX(${s}px)`,S.style.width=`${a}px`},fe=()=>{i.listEx.innerHTML=h.skeletonExMarkup(O)},H=e=>{const t=[];for(let r=1;r<=e;r++)t.push(h.itemPagination(r));i.paginationBox.innerHTML=t.join("")},j=e=>{const t=[...i.paginationBox.children];if(!t.length)return;t.forEach(s=>s.classList.remove("pagination-item-active"));const r=e-1;r>=0&&r<t.length&&t[r].classList.add("pagination-item-active")},he=e=>{e.stopPropagation();const t=e.currentTarget.dataset.id;ue(t),e.currentTarget.remove();const r=document.querySelector(".modal-exercises");if(r){const s=r.querySelector("[data-btn-favorites]");if(s){s.textContent="Add to favorites",s.classList.remove("active");const a=s.querySelector("use");a&&a.setAttribute("href","img/sprite.svg#icon-heart")}}},De=async(e,t)=>{var d,u;e.preventDefault();const r=e.target.closest("form");if(!r)return;const s=((d=r.querySelector("#rating-email"))==null?void 0:d.value.trim())||"",a=((u=r.querySelector("#rating-comment"))==null?void 0:u.value.trim())||"",o=r.querySelector('input[name="rate"]:checked'),n=o?parseFloat(o.value):null;if(!n){b.info({message:"Please select your rating.",position:"topRight"});return}if(!s){b.info({message:"Please enter your email",position:"topRight"});return}if(!a){b.info({message:"Please enter your review",position:"topRight"});return}try{if(await c.rateExercise(t,n,s,a)){b.success({message:"Rating submitted successfully!",position:"topRight"});const L=document.querySelector(".full-overlay.is-open [data-close-overlay]");L&&L.click()}}catch(m){b.error({message:m,position:"topRight"})}},Oe=async(e,t)=>{const r=t||e.currentTarget.dataset.id,s=await c.getExerciseById(r);ae("exercise",h.exerciseModal(s),"overlay-exersices"),W("exercise");const a=document.querySelector("[data-btn-favorites]"),o=document.querySelector("[data-btn-rating]");a.addEventListener("click",()=>{const n=s._id,d=$e(n),u=a.querySelector("[data-fav-icon]");if(d){a.textContent="Remove from favorites",a.appendChild(u.closest("svg")),u.setAttribute("href","img/sprite.svg#icon-trash");const m=document.querySelector(`.favorites-item[data-id="${n}"] [data-open-overlay]`),L=`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${n}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="img/sprite.svg#icon-trash"></use>
                 </svg>
               </button>`;m.insertAdjacentHTML("beforebegin",L);const x=document.querySelector(`[data-btn-remove-favorites][data-id="${n}"]`);x&&x.addEventListener("click",he)}else{a.textContent="Add to favorites",a.appendChild(u.closest("svg")),u.setAttribute("href","img/sprite.svg#icon-heart");const m=document.querySelector(`[data-btn-remove-favorites][data-id="${n}"]`);m&&m.remove()}}),o.addEventListener("click",()=>{const n=document.querySelector(".modal-exercises");n&&n.remove();const d=h.ratingModal();ae("rating",d,"overlay-rating"),W("rating"),document.querySelector("[data-btn-submit-rating]").addEventListener("click",M=>De(M,r));const m=document.querySelector(".rating-form"),L=m.querySelectorAll('input[name="rate"]'),x=m.querySelector(".rating-form-value");L.forEach(M=>{M.addEventListener("change",()=>{x.textContent=M.value})})})},He=()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-icon-close");if(!e||!t)return;let r=null;e.addEventListener("input",s=>{const a=s.target.value.trim();a.length>0?t.classList.add("visible"):t.classList.remove("visible"),clearTimeout(r),r=setTimeout(async()=>{await ie(a)},500)}),t.addEventListener("click",async()=>{e.value="",t.classList.remove("visible"),Z="",await ie("")})},ie=async e=>{Z=e;try{fe();const t=await c.getExerciseByCategory(c.filterType,$,w,10,e);if(F=t.totalPages||1,!t.results.length){i.favoritesEmpty.classList.remove("is-hidden"),i.listEx.innerHTML="",i.listEx.style.display="none",i.paginationBox.style.display="none";return}i.listEx.style.display="grid",i.paginationBox.style.display="flex",i.favoritesEmpty.classList.add("is-hidden"),i.listEx.classList.add("body-parts-list");const r=t.results.map(s=>h.favoriteCard(s));i.listEx.innerHTML=r.join(""),H(F),j(w),ye()}catch(t){console.error("Search error:",t)}},je=async e=>{$=e.currentTarget.dataset.nameCategory,X="exercises",w=1,await pe()},pe=async()=>{const e=await c.getExerciseByCategory(c.filterType,$,w,10,Z);if(F=e.totalPages||1,i.exercisedTitleThumb.classList.add("is-search-shown"),i.searchBar.classList.add("is-show"),i.exercisesBredcrumbs.classList.add("is-show"),i.exercisesBredcrumbs.querySelector(".exercises-category").innerHTML=$,!e.results.length){console.log("sadas"),i.favoritesEmpty.classList.remove("is-hidden"),i.listEx.innerHTML="",i.listEx.style.display="none";return}i.listEx.style.display="grid",i.favoritesEmpty.classList.add("is-hidden"),i.searchBar.classList.add("is-show"),i.listEx.classList.add("body-parts-list");const t=e.results.map(r=>h.favoriteCard(r));i.listEx.innerHTML=t.join(""),H(F),j(w),He(),ye()},ye=()=>{const e=document.querySelectorAll(".card-btn-start"),t=document.querySelectorAll("[data-btn-remove-favorites]");e.forEach(r=>r.addEventListener("click",Oe)),t.forEach(r=>r.addEventListener("click",he))},Ne=()=>{document.querySelectorAll(".exercises-item").forEach(t=>t.addEventListener("click",je))},be=e=>{const t=e.results.map(r=>h.exerciseCard(r));i.listEx.innerHTML=t.join(""),Ne(),O=Math.max(t.length,c.limitPage)},ze=async()=>{const e=document.querySelector(".quote-card");if(!e)return;const t={author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},r=Me();if(r){e.innerHTML=h.quoteTemplate({quote:r.quote,author:r.author});return}try{const s=await c.getQuote();e.innerHTML=h.quoteTemplate(s),Ae(s.quote,s.author)}catch(s){console.error("Error fetching quote:",s),e.innerHTML=h.quoteTemplate(t)}},te=async({updatePagination:e=!1}={})=>{fe();const t=await c.getDataByFilter();be(t),e&&H(c.totalPages),j(c.currentPage)},Qe=async()=>{try{if(ze(),!S)return;const e=await c.getDataByFilter();i.btnBox.children[0]&&(i.btnBox.children[0].classList.add("active"),requestAnimationFrame(ee)),be(e),H(c.totalPages),j(c.currentPage)}catch(e){console.log("🚀 ~ error:",e)}},Ue=async e=>{try{X="categories",$=null,i.listEx.classList.remove("body-parts-list");const t=e.target.closest("button");if(!t)return;const r=t.dataset.type;if(!r)return;c.changeSearchType(r),O=c.limitPage,[...e.currentTarget.children].forEach(s=>s.classList.remove("active")),t.classList.add("active"),requestAnimationFrame(ee),await te({updatePagination:!0}),i.exercisedTitleThumb.classList.remove("is-search-shown"),i.searchBar.classList.remove("is-show"),i.exercisesBredcrumbs.classList.remove("is-show"),i.listEx.style.display="grid"}catch(t){console.error("Filter error:",t)}},Ye=async e=>{try{const t=e.target.closest("button");if(!t)return;const r=Number(t.textContent.trim());if(!Number.isFinite(r))return;if(X==="exercises"){if(r===w)return;w=r,await pe()}else{if(r===c.currentPage)return;c.currentPage=r,await te()}}catch(t){console.error("Pagination error:",t)}};Qe();i.btnBox&&(window.addEventListener("resize",Fe),i.btnBox.addEventListener("click",Ue));i.paginationBox&&i.paginationBox.addEventListener("click",Ye);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-reset-btn");!e||!t||(e.addEventListener("input",()=>{e.value.trim()!==""?t.classList.remove("visually-hidden"):t.classList.add("visually-hidden")}),t.addEventListener("click",r=>{r.preventDefault(),e.value="",t.classList.add("visually-hidden"),e.focus()}))});export{h as T,G as a,c as d,Me as g,Oe as h,ue as r,Ae as s};
//# sourceMappingURL=main-pU2qbS-q.js.map
