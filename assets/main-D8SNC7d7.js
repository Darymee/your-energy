var he=Object.defineProperty;var G=e=>{throw TypeError(e)};var pe=(e,t,s)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var E=(e,t,s)=>pe(e,typeof t!="symbol"?t+"":t,s),Z=(e,t,s)=>t.has(e)||G("Cannot "+s);var p=(e,t,s)=>(Z(e,t,"read from private field"),s?s.call(e):t.get(e)),M=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s);var H=(e,t,s)=>(Z(e,t,"access private method"),s);import{a as y,i as b}from"./vendor-pFq095uA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.navLinks.forEach(s=>s.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();let j=window.location.pathname.split("/").pop()||"index.html",te=j===""||j==="index.html"?"home":j.replace(".html","");const C=document.querySelectorAll(".nav-link");C.forEach(e=>{e.dataset.page===te&&(e.classList.add("is-active"),e.classList.add("is-current"))});const z=document.querySelector(".nav-list"),N=document.querySelector(".nav-indicator");function B(e){if(!N||!z||!e)return;const t=z.getBoundingClientRect(),s=e.getBoundingClientRect(),r=s.left-t.left;N.style.width=s.width+"px",N.style.transform=`translateX(${r}px)`}let g=document.querySelector(".nav-link.is-active")||C[0];B(g);C.forEach(e=>{e.addEventListener("mouseenter",()=>{B(e),e!==g?g.classList.remove("is-current"):g.classList.add("is-current")}),e.addEventListener("click",t=>{if(e===g){t.preventDefault();return}if(e.dataset.page===te){t.preventDefault(),g=e,g.classList.add("is-current"),B(g);return}C.forEach(s=>s.classList.remove("is-active","is-current")),e.classList.add("is-active","is-current"),g=e})});z.addEventListener("mouseleave",()=>{B(g),g.classList.add("is-current")});window.addEventListener("resize",()=>{B(g)});const se=document.querySelector(".theme-switch .checkbox"),R=document.documentElement,ye=localStorage.getItem("theme"),be=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,re=ye||(be?"dark":"light");R.setAttribute("data-theme",re);se.checked=re==="dark";function Le(e){R.classList.add("theme-transition"),window.setTimeout(()=>{R.classList.remove("theme-transition")},400),e()}se.addEventListener("change",e=>{const t=e.target.checked?"dark":"light";Le(()=>{R.setAttribute("data-theme",t),localStorage.setItem("theme",t)})});const U=document.querySelector(".anchor-button");function xe(e=1e3){const t=window.scrollY,s=performance.now();function r(a){const o=a-s,n=Math.min(o/e,1),d=1-Math.pow(1-n,3);window.scrollTo(0,t*(1-d)),n<1&&requestAnimationFrame(r)}requestAnimationFrame(r)}window.addEventListener("scroll",()=>{window.scrollY>300?U.classList.add("show"):U.classList.remove("show")});U.addEventListener("click",e=>{e.preventDefault(),xe()});y.defaults.baseURL="https://your-energy.b.goit.study/api";y.defaults.headers.common["Content-Type"]="application/json";var S,ae,F,ie,f;class we{constructor(){M(this,S);E(this,"totalPages",0);E(this,"currentPage",1);E(this,"limitPage",9);E(this,"filterType","Muscles");M(this,F,()=>{const s=window.innerWidth>=768?12:9;s!==this.limitPage&&(this.limitPage=s,this.currentPage=1)});M(this,f,t=>{var s,r;return console.error("API Error:",t),Promise.reject(((r=(s=t.response)==null?void 0:s.data)==null?void 0:r.message)||t.message||"An unexpected error occurred")});H(this,S,ae).call(this),window.addEventListener("resize",p(this,F))}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(t){this.filterType=t,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const t=await y.get("/filters",{params:H(this,S,ie).call(this)});return this.totalPages=t.data.totalPages,t.data}catch(t){return p(this,f).call(this,t)}}async getExercises(t={},s=1,r=10){try{const a={...t,page:s,limit:r};return(await y.get("/exercises",{params:a})).data}catch(a){return p(this,f).call(this,a)}}async getExerciseByCategory(t,s,r=1,a=10,o=""){try{const d={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"}[t];if(!d)throw new Error(`Unknown filter type: ${t}`);const u={[d]:s.toLowerCase(),page:r,limit:a};return o&&(u.keyword=o.toLowerCase()),(await y.get("/exercises",{params:u})).data}catch(n){return p(this,f).call(this,n)}}async getExerciseById(t){try{return(await y.get(`/exercises/${t}`)).data}catch(s){return p(this,f).call(this,s)}}async rateExercise(t,s,r,a=""){try{if(s<1||s>5)throw new Error("Rating must be between 1 and 5");return(await y.patch(`/exercises/${t}/rating`,{rate:s,email:r,review:a})).data}catch(o){return p(this,f).call(this,o)}}async getQuote(){try{return(await y.get("/quote")).data}catch(t){return p(this,f).call(this,t)}}async subscribe(t){try{return await y.post("/subscription",{email:t})}catch(s){return p(this,f).call(this,s)}}}S=new WeakSet,ae=function(){const{matches:t}=window.matchMedia("(max-width: 767px)");this.limitPage=t?9:12},F=new WeakMap,ie=function(){return{filter:this.filterType,page:this.currentPage,limit:this.limitPage}},f=new WeakMap;const c=new we,Y={form:document.querySelector(".footer-form")},Se=async e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!t){b.info({message:"Email is required",position:"topRight"});return}if(!s.test(t)){b.info({message:"Invalid email format",position:"topRight"});return}try{const r=await c.subscribe(t);if(r.status===201){b.success({message:r.data.message,position:"topRight"}),Y.form.reset();return}}catch(r){b.error({message:r,position:"topRight"}),Y.form.reset()}};Y.form.addEventListener("submit",Se);const k={FAVORITES:"favorites",UI_THEME:"ui-theme",LAST_SESSION:"last_session",DAILY_QUOTE:"daily_quote"},K=()=>{try{const e=localStorage.getItem(k.FAVORITES);return e?JSON.parse(e):[]}catch(e){return console.error("Error parsing favorites from localStorage:",e),[]}},A=e=>K().includes(e),Ee=e=>{try{const t=K();t.includes(e)||(t.push(e),localStorage.setItem(k.FAVORITES,JSON.stringify(t)))}catch(t){console.error("Error adding favorite:",t)}},oe=e=>{try{const s=K().filter(r=>r!==e);localStorage.setItem(k.FAVORITES,JSON.stringify(s))}catch(t){console.error("Error removing favorite:",t)}},qe=e=>A(e)?(oe(e),!1):(Ee(e),!0),Te=e=>{if(!e)return!1;const t=new Date(e),s=new Date;return t.getFullYear()===s.getFullYear()&&t.getMonth()===s.getMonth()&&t.getDate()===s.getDate()},Be=()=>{try{const e=localStorage.getItem(k.DAILY_QUOTE);if(!e)return null;const t=JSON.parse(e);return Te(t.timestamp)?t:null}catch(e){return console.error("Error getting daily quote from localStorage:",e),null}},Pe=(e,t)=>{try{const s={quote:e,author:t,timestamp:Date.now()};localStorage.setItem(k.DAILY_QUOTE,JSON.stringify(s))}catch(s){console.error("Error saving daily quote to localStorage:",s)}},v="/your-energy/img/sprite.svg";function Q(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function ke(e){const t=Math.round(Math.max(0,Math.min(5,Number(e)||0))),s=Array(t).fill(`<svg class="full" width="18" height="18">
        <use href="${v}#icon-star"></use>
        </svg>`).join(""),r=Array(5-t).fill(`<svg class="empty" width="18" height="18">
        <use href="${v}#icon-star"></use>
        </svg>`).join("");return s+r}const h={exerciseCard({filter:e,name:t,imgURL:s}){return`<li class='exercises-item' data-name-category=${t}>
            <div class='exercises-background-img' style='background-image: url(${s});'>
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
      </li>`).join("")},favoriteCard({_id:e,name:t,burnedCalories:s,time:r,bodyPart:a,target:o,rating:n}){return`
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
           ${A(e)?`<button
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
          <h3 class="card-title">${Q(t)}</h3>
        </div>

        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${s} / ${r} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${Q(a)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${Q(o)}</span>
          </li>
        </ul>
      </li>
    `},exerciseModal({_id:e,name:t,rating:s,gifUrl:r,target:a,bodyPart:o,equipment:n,popularity:d,burnedCalories:u,description:m,time:L}){const w=ke(s);return`
      <div class="modal-exercises">
        <div class="modal-img-wrapper">
            <img class="modal-img" src="${r}" alt="${t}" />
        </div>
        <div class="modal-details">
            <p class="modal-title">${t}</p>
            <div class="modal-rating">
                <div class="modal-rating-value">${s}</div>
                <div class="modal-rating-stars">${w}</div>
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
                  ${A(e)?"Remove from favorites":"Add to favorites"}
                    <svg class="modal-btn-icon" width="18" height="18">
                      <use href="img/sprite.svg#${A(e)?"icon-trash":"icon-heart"}"  data-fav-icon></use>
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
  `},ne={};let l=null,q=null,T=null;function X(e,t,s=null){ne[e]=t,l.modal.classList="full-overlay",s!==null&&l.modal.classList.add(s)}function $e(){l={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")},document.querySelectorAll("[data-open-overlay]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.openOverlay;_(t)})})}function _(e){if(!l){console.warn("Modal system is not initialized");return}const t=ne[e];if(!t)return console.warn(`No modal found for key: ${e}`);le(),l.modalContent.innerHTML=t,l.modal.classList.add("is-open"),document.body.style.overflow="hidden";const s=l.modal.querySelector("[data-close-overlay]");s&&(T=ce,s.addEventListener("click",T)),q=Me,l.modal.addEventListener("click",q)}function ce(){l&&(l.modalContent.innerHTML="",l.modal.classList="full-overlay",document.body.style.overflow="",le())}function le(){if(q&&(l.modal.removeEventListener("click",q),q=null),T){const e=l.modal.querySelector("[data-close-overlay]");e==null||e.removeEventListener("click",T),T=null}}function Me(e){e.target===l.modal&&ce()}$e();const i={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body"),searchBar:document.querySelector(".search-bar"),exercisesBredcrumbs:document.querySelector(".exercises-bredcrumbs"),favoritesEmpty:document.querySelector(".favorites-empty"),exercisedTitleThumb:document.querySelector(".exercises-title-thumb")};let V=c.limitPage,J="categories",P=null,x=1,I=1,W="";const de=()=>{i.listEx.innerHTML=h.skeletonExMarkup(V)},D=e=>{const t=[];for(let s=1;s<=e;s++)t.push(h.itemPagination(s));i.paginationBox.innerHTML=t.join("")},O=e=>{const t=[...i.paginationBox.children];if(!t.length)return;t.forEach(r=>r.classList.remove("pagination-item-active"));const s=e-1;s>=0&&s<t.length&&t[s].classList.add("pagination-item-active")},ue=e=>{e.stopPropagation();const t=e.currentTarget.dataset.id;oe(t),e.currentTarget.remove();const s=document.querySelector(".modal-exercises");if(s){const r=s.querySelector("[data-btn-favorites]");if(r){r.textContent="Add to favorites",r.classList.remove("active");const a=r.querySelector("use");a&&a.setAttribute("href","img/sprite.svg#icon-heart")}}},Ae=async(e,t)=>{var d,u;e.preventDefault();const s=e.target.closest("form");if(!s)return;const r=((d=s.querySelector("#rating-email"))==null?void 0:d.value.trim())||"",a=((u=s.querySelector("#rating-comment"))==null?void 0:u.value.trim())||"",o=s.querySelector('input[name="rate"]:checked'),n=o?parseFloat(o.value):null;if(!n){b.info({message:"Please select your rating.",position:"topRight"});return}if(!r){b.info({message:"Please enter your email",position:"topRight"});return}if(!a){b.info({message:"Please enter your review",position:"topRight"});return}try{if(await c.rateExercise(t,n,r,a)){b.success({message:"Rating submitted successfully!",position:"topRight"});const L=document.querySelector(".full-overlay.is-open [data-close-overlay]");L&&L.click()}}catch(m){b.error({message:m,position:"topRight"})}},Ce=async(e,t)=>{const s=t||e.currentTarget.dataset.id,r=await c.getExerciseById(s);X("exercise",h.exerciseModal(r),"overlay-exersices"),_("exercise");const a=document.querySelector("[data-btn-favorites]"),o=document.querySelector("[data-btn-rating]");a.addEventListener("click",()=>{const n=r._id,d=qe(n),u=a.querySelector("[data-fav-icon]");if(d){a.textContent="Remove from favorites",a.appendChild(u.closest("svg")),u.setAttribute("href","img/sprite.svg#icon-trash");const m=document.querySelector(`.favorites-item[data-id="${n}"] [data-open-overlay]`),L=`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${n}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="img/sprite.svg#icon-trash"></use>
                 </svg>
               </button>`;m.insertAdjacentHTML("beforebegin",L);const w=document.querySelector(`[data-btn-remove-favorites][data-id="${n}"]`);w&&w.addEventListener("click",ue)}else{a.textContent="Add to favorites",a.appendChild(u.closest("svg")),u.setAttribute("href","img/sprite.svg#icon-heart");const m=document.querySelector(`[data-btn-remove-favorites][data-id="${n}"]`);m&&m.remove()}}),o.addEventListener("click",()=>{const n=document.querySelector(".modal-exercises");n&&n.remove();const d=h.ratingModal();X("rating",d,"overlay-rating"),_("rating"),document.querySelector("[data-btn-submit-rating]").addEventListener("click",$=>Ae($,s));const m=document.querySelector(".rating-form"),L=m.querySelectorAll('input[name="rate"]'),w=m.querySelector(".rating-form-value");L.forEach($=>{$.addEventListener("change",()=>{w.textContent=$.value})})})},Re=()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-icon-close");if(!e||!t)return;let s=null;e.addEventListener("input",r=>{const a=r.target.value.trim();a.length>0?t.classList.add("visible"):t.classList.remove("visible"),clearTimeout(s),s=setTimeout(async()=>{await ee(a)},500)}),t.addEventListener("click",async()=>{e.value="",t.classList.remove("visible"),W="",await ee("")})},ee=async e=>{W=e;try{de();const t=await c.getExerciseByCategory(c.filterType,P,x,10,e);if(I=t.totalPages||1,!t.results.length){i.favoritesEmpty.classList.remove("is-hidden"),i.listEx.innerHTML="",i.listEx.style.display="none",i.paginationBox.style.display="none";return}i.listEx.style.display="flex",i.paginationBox.style.display="flex",i.favoritesEmpty.classList.add("is-hidden"),i.listEx.classList.add("body-parts-list");const s=t.results.map(r=>h.favoriteCard(r));i.listEx.innerHTML=s.join(""),D(I),O(x),ge()}catch(t){console.error("Search error:",t)}},Ie=async e=>{P=e.currentTarget.dataset.nameCategory,J="exercises",x=1,await me()},me=async()=>{const e=await c.getExerciseByCategory(c.filterType,P,x,10,W);if(I=e.totalPages||1,i.exercisedTitleThumb.classList.add("is-search-shown"),i.searchBar.classList.add("is-show"),i.exercisesBredcrumbs.classList.add("is-show"),i.exercisesBredcrumbs.querySelector(".exercises-category").innerHTML=P,!e.results.length){console.log("sadas"),i.favoritesEmpty.classList.remove("is-hidden"),i.listEx.innerHTML="",i.listEx.style.display="none",i.paginationBox.style.display="none";return}i.paginationBox.style.display="flex",i.listEx.style.display="flex",i.favoritesEmpty.classList.add("is-hidden"),i.searchBar.classList.add("is-show"),i.listEx.classList.add("body-parts-list");const t=e.results.map(s=>h.favoriteCard(s));i.listEx.innerHTML=t.join(""),D(I),O(x),Re(),ge()},ge=()=>{const e=document.querySelectorAll(".card-btn-start"),t=document.querySelectorAll("[data-btn-remove-favorites]");e.forEach(s=>s.addEventListener("click",Ce)),t.forEach(s=>s.addEventListener("click",ue))},Fe=()=>{document.querySelectorAll(".exercises-item").forEach(t=>t.addEventListener("click",Ie))},ve=e=>{const t=e.results.map(s=>h.exerciseCard(s));i.listEx.innerHTML=t.join(""),Fe(),V=Math.max(t.length,c.limitPage)},De=async()=>{const e=document.querySelector(".quote-card");if(!e)return;const t={author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},s=Be();if(s){e.innerHTML=h.quoteTemplate({quote:s.quote,author:s.author});return}try{const r=await c.getQuote();e.innerHTML=h.quoteTemplate(r),Pe(r.quote,r.author)}catch(r){console.error("Error fetching quote:",r),e.innerHTML=h.quoteTemplate(t)}},fe=async({updatePagination:e=!1}={})=>{de();const t=await c.getDataByFilter();ve(t),e&&D(c.totalPages),O(c.currentPage)},Oe=async()=>{try{De();const e=await c.getDataByFilter();i.btnBox.children[0]&&i.btnBox.children[0].classList.add("active"),ve(e),D(c.totalPages),O(c.currentPage)}catch(e){console.log("🚀 ~ error:",e)}},He=async e=>{try{J="categories",P=null,i.listEx.classList.remove("body-parts-list");const t=e.target.closest("button");if(!t)return;const s=t.dataset.type;if(!s)return;c.changeSearchType(s),V=c.limitPage,[...e.currentTarget.children].forEach(r=>r.classList.remove("active")),t.classList.add("active"),await fe({updatePagination:!0}),i.exercisedTitleThumb.classList.remove("is-search-shown"),i.searchBar.classList.remove("is-show"),i.exercisesBredcrumbs.classList.remove("is-show"),i.listEx.style.display="flex"}catch(t){console.error("Filter error:",t)}},je=async e=>{try{const t=e.target.closest("button");if(!t)return;const s=Number(t.textContent.trim());if(!Number.isFinite(s))return;if(J==="exercises"){if(s===x)return;x=s,await me()}else{if(s===c.currentPage)return;c.currentPage=s,await fe()}}catch(t){console.error("Pagination error:",t)}};Oe();i.btnBox&&i.btnBox.addEventListener("click",He);i.paginationBox&&i.paginationBox.addEventListener("click",je);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-reset-btn");!e||!t||(e.addEventListener("input",()=>{e.value.trim()!==""?t.classList.remove("visually-hidden"):t.classList.add("visually-hidden")}),t.addEventListener("click",s=>{s.preventDefault(),e.value="",t.classList.add("visually-hidden"),e.focus()}))});export{h as T,K as a,c as d,Be as g,Ce as h,oe as r,Pe as s};
//# sourceMappingURL=main-D8SNC7d7.js.map
