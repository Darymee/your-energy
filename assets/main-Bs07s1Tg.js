var pe=Object.defineProperty;var X=e=>{throw TypeError(e)};var he=(e,t,s)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var P=(e,t,s)=>he(e,typeof t!="symbol"?t+"":t,s),ee=(e,t,s)=>t.has(e)||X("Cannot "+s);var y=(e,t,s)=>(ee(e,t,"read from private field"),s?s.call(e):t.get(e)),C=(e,t,s)=>t.has(e)?X("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s);var j=(e,t,s)=>(ee(e,t,"access private method"),s);import{a as b,i as x}from"./vendor-pFq095uA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.navLinks.forEach(s=>s.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();let N=window.location.pathname.split("/").pop()||"index.html",re=N===""||N==="index.html"?"home":N.replace(".html","");const I=document.querySelectorAll(".nav-link");I.forEach(e=>{e.dataset.page===re&&(e.classList.add("is-active"),e.classList.add("is-current"))});const U=document.querySelector(".nav-list"),Q=document.querySelector(".nav-indicator");function $(e){if(!Q||!U||!e)return;const t=U.getBoundingClientRect(),s=e.getBoundingClientRect(),r=s.left-t.left;Q.style.width=s.width+"px",Q.style.transform=`translateX(${r}px)`}let g=document.querySelector(".nav-link.is-active")||I[0];$(g);I.forEach(e=>{e.addEventListener("mouseenter",()=>{$(e),e!==g?g.classList.remove("is-current"):g.classList.add("is-current")}),e.addEventListener("click",t=>{if(e===g){t.preventDefault();return}if(e.dataset.page===re){t.preventDefault(),g=e,g.classList.add("is-current"),$(g);return}I.forEach(s=>s.classList.remove("is-active","is-current")),e.classList.add("is-active","is-current"),g=e})});U.addEventListener("mouseleave",()=>{$(g),g.classList.add("is-current")});window.addEventListener("resize",()=>{$(g)});const ae=document.querySelector(".theme-switch .checkbox"),F=document.documentElement,ye=localStorage.getItem("theme"),be=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,ie=ye||(be?"dark":"light");F.setAttribute("data-theme",ie);ae.checked=ie==="dark";function xe(e){F.classList.add("theme-transition"),window.setTimeout(()=>{F.classList.remove("theme-transition")},400),e()}ae.addEventListener("change",e=>{const t=e.target.checked?"dark":"light";xe(()=>{F.setAttribute("data-theme",t),localStorage.setItem("theme",t)})});const V=document.querySelector(".anchor-button");function we(e=1e3){const t=window.scrollY,s=performance.now();function r(a){const o=a-s,n=Math.min(o/e,1),l=1-Math.pow(1-n,3);window.scrollTo(0,t*(1-l)),n<1&&requestAnimationFrame(r)}requestAnimationFrame(r)}window.addEventListener("scroll",()=>{window.scrollY>300?V.classList.add("show"):V.classList.remove("show")});V.addEventListener("click",e=>{e.preventDefault(),we()});b.defaults.baseURL="https://your-energy.b.goit.study/api";b.defaults.headers.common["Content-Type"]="application/json";var q,oe,D,ne,p;class Le{constructor(){C(this,q);P(this,"totalPages",0);P(this,"currentPage",1);P(this,"limitPage",9);P(this,"filterType","Muscles");C(this,D,()=>{const s=window.innerWidth>=768?12:9;s!==this.limitPage&&(this.limitPage=s,this.currentPage=1)});C(this,p,t=>{var s,r;return console.error("API Error:",t),Promise.reject(((r=(s=t.response)==null?void 0:s.data)==null?void 0:r.message)||t.message||"An unexpected error occurred")});j(this,q,oe).call(this),window.addEventListener("resize",y(this,D))}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(t){this.filterType=t,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const t=await b.get("/filters",{params:j(this,q,ne).call(this)});return this.totalPages=t.data.totalPages,t.data}catch(t){return y(this,p).call(this,t)}}async getExercises(t={},s=1,r=10){try{const a={...t,page:s,limit:r};return(await b.get("/exercises",{params:a})).data}catch(a){return y(this,p).call(this,a)}}async getExerciseByCategory(t,s,r=1,a=10,o=""){try{const l={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"}[t];if(!l)throw new Error(`Unknown filter type: ${t}`);const d={[l]:s.toLowerCase(),page:r,limit:a};return o&&(d.keyword=o.toLowerCase()),(await b.get("/exercises",{params:d})).data}catch(n){return y(this,p).call(this,n)}}async getExerciseById(t){try{return(await b.get(`/exercises/${t}`)).data}catch(s){return y(this,p).call(this,s)}}async rateExercise(t,s,r,a=""){try{if(s<1||s>5)throw new Error("Rating must be between 1 and 5");return(await b.patch(`/exercises/${t}/rating`,{rate:s,email:r,review:a})).data}catch(o){return y(this,p).call(this,o)}}async getQuote(){try{return(await b.get("/quote")).data}catch(t){return y(this,p).call(this,t)}}async subscribe(t){try{return await b.post("/subscription",{email:t})}catch(s){return y(this,p).call(this,s)}}}q=new WeakSet,oe=function(){const{matches:t}=window.matchMedia("(max-width: 767px)");this.limitPage=t?9:12},D=new WeakMap,ne=function(){return{filter:this.filterType,page:this.currentPage,limit:this.limitPage}},p=new WeakMap;const c=new Le,Y={form:document.querySelector(".footer-form")},Se=async e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!t){x.info({message:"Email is required",position:"topRight"});return}if(!s.test(t)){x.info({message:"Invalid email format",position:"topRight"});return}try{const r=await c.subscribe(t);if(r.status===201){x.success({message:r.data.message,position:"topRight"}),Y.form.reset();return}}catch(r){x.error({message:r,position:"topRight"}),Y.form.reset()}};Y.form.addEventListener("submit",Se);const M={FAVORITES:"favorites",UI_THEME:"ui-theme",LAST_SESSION:"last_session",DAILY_QUOTE:"daily_quote"},W=()=>{try{const e=localStorage.getItem(M.FAVORITES);return e?JSON.parse(e):[]}catch(e){return console.error("Error parsing favorites from localStorage:",e),[]}},R=e=>W().includes(e),Ee=e=>{try{const t=W();t.includes(e)||(t.push(e),localStorage.setItem(M.FAVORITES,JSON.stringify(t)))}catch(t){console.error("Error adding favorite:",t)}},ce=e=>{try{const s=W().filter(r=>r!==e);localStorage.setItem(M.FAVORITES,JSON.stringify(s))}catch(t){console.error("Error removing favorite:",t)}},qe=e=>R(e)?(ce(e),!1):(Ee(e),!0),Pe=e=>{if(!e)return!1;const t=new Date(e),s=new Date;return t.getFullYear()===s.getFullYear()&&t.getMonth()===s.getMonth()&&t.getDate()===s.getDate()},Te=()=>{try{const e=localStorage.getItem(M.DAILY_QUOTE);if(!e)return null;const t=JSON.parse(e);return Pe(t.timestamp)?t:null}catch(e){return console.error("Error getting daily quote from localStorage:",e),null}},Be=(e,t)=>{try{const s={quote:e,author:t,timestamp:Date.now()};localStorage.setItem(M.DAILY_QUOTE,JSON.stringify(s))}catch(s){console.error("Error saving daily quote to localStorage:",s)}},f="/your-energy/img/sprite.svg";function z(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function $e(e){const t=Math.round(Math.max(0,Math.min(5,Number(e)||0))),s=Array(t).fill(`<svg class="full" width="18" height="18">
        <use href="${f}#icon-star"></use>
        </svg>`).join(""),r=Array(5-t).fill(`<svg class="empty" width="18" height="18">
        <use href="${f}#icon-star"></use>
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
                   <use href="${f}#icon-star"></use>
                 </svg>
            </div>
          </div>
           ${R(e)?`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${e}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="${f}#icon-trash"></use>
                 </svg>
               </button>`:""}

          <button class="card-btn-start js-start-btn" data-id="${e}" data-open-overlay="exercise" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${f}#icon-arrow-start"></use>
              </svg>
          </button>
        </div>

        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${f}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${z(t)}</h3>
        </div>

        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${s} / ${r} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${z(a)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${z(o)}</span>
          </li>
        </ul>
      </li>
    `},exerciseModal({_id:e,name:t,rating:s,gifUrl:r,target:a,bodyPart:o,equipment:n,popularity:l,burnedCalories:d,description:m,time:w}){const L=$e(s);return`
      <div class="modal-exercises">
        <div class="modal-img-wrapper">
            <img class="modal-img" src="${r}" alt="${t}" />
        </div>
        <div class="modal-details">
            <p class="modal-title">${t}</p>
            <div class="modal-rating">
                <div class="modal-rating-value">${s}</div>
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
                        <div class="info-grid-value">${o}</div>
                    </div>

                    <div class="info-grid-item">
                        <div class="info-grid-label">Equipment</div>
                        <div class="info-grid-value">${n}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Popular</div>
                        <div class="info-grid-value">${l}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Burned calories</div>
                        <div class="info-grid-value">${d} / ${w}</div>
                    </div>
                </div>
            </div>

            <p class="modal-description">${m}</p>

            <div class="modal-btn-wrapper">
                <button type="button" class="modal-btn" data-btn-favorites>
                  ${R(e)?"Remove from favorites":"Add to favorites"}
                    <svg class="modal-btn-icon" width="18" height="18">
                      <use href="img/sprite.svg#${R(e)?"icon-trash":"icon-heart"}"  data-fav-icon></use>
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
                  <use href="${f}#icon-star"></use>
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
                  <use href="${f}#icon-star"></use>
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
                  <use href="${f}#icon-star"></use>
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
                  <use href="${f}#icon-star"></use>
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
                  <use href="${f}#icon-star"></use>
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
  `},le={};let u=null,T=null,B=null;function te(e,t,s=null){le[e]=t,u.modal.classList="full-overlay",s!==null&&u.modal.classList.add(s)}function ke(){u={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")},document.querySelectorAll("[data-open-overlay]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.openOverlay;_(t)})})}function _(e){if(!u){console.warn("Modal system is not initialized");return}const t=le[e];if(!t)return console.warn(`No modal found for key: ${e}`);ue(),u.modalContent.innerHTML=t,u.modal.classList.add("is-open"),document.body.style.overflow="hidden";const s=u.modal.querySelector("[data-close-overlay]");s&&(B=de,s.addEventListener("click",B)),T=Me,u.modal.addEventListener("click",T)}function de(){u&&(u.modalContent.innerHTML="",u.modal.classList="full-overlay",document.body.style.overflow="",ue())}function ue(){if(T&&(u.modal.removeEventListener("click",T),T=null),B){const e=u.modal.querySelector("[data-close-overlay]");e==null||e.removeEventListener("click",B),B=null}}function Me(e){e.target===u.modal&&de()}ke();const i={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body"),searchBar:document.querySelector(".search-bar"),exercisesBredcrumbs:document.querySelector(".exercises-bredcrumbs"),favoritesEmpty:document.querySelector(".favorites-empty"),exercisedTitleThumb:document.querySelector(".exercises-title-thumb")};let G=c.limitPage,S="categories",k=null,v=1,E=1,Z="";const me=()=>{i.listEx.innerHTML=h.skeletonExMarkup(G)},O=e=>{const t=[],r=S==="exercises"?v:c.currentPage,a=e||1,o=r<=1,n=r>=a;t.push(`<button class="pagination-arrow pagination-arrow-prev" type="button" data-action="prev" aria-label="Previous page" ${o?"disabled":""}>&lsaquo;</button>`);for(let l=1;l<=a;l++)t.push(h.itemPagination(l));t.push(`<button class="pagination-arrow pagination-arrow-next" type="button" data-action="next" aria-label="Next page" ${n?"disabled":""}>&rsaquo;</button>`),i.paginationBox.innerHTML=t.join("")},H=e=>{const t=[...i.paginationBox.querySelectorAll(".pagination-item")];if(!t.length)return;t.forEach(d=>d.classList.remove("pagination-item-active"));const s=e-1;s>=0&&s<t.length&&t[s].classList.add("pagination-item-active");const r=i.paginationBox.querySelector('[data-action="prev"]'),a=i.paginationBox.querySelector('[data-action="next"]'),o=S==="exercises",n=o?v:c.currentPage,l=o?E:c.totalPages;r&&(r.disabled=n<=1),a&&(a.disabled=n>=l)},ge=e=>{e.stopPropagation();const t=e.currentTarget.dataset.id;ce(t),e.currentTarget.remove();const s=document.querySelector(".modal-exercises");if(s){const r=s.querySelector("[data-btn-favorites]");if(r){r.textContent="Add to favorites",r.classList.remove("active");const a=r.querySelector("use");a&&a.setAttribute("href","img/sprite.svg#icon-heart")}}},Ae=async(e,t)=>{var l,d;e.preventDefault();const s=e.target.closest("form");if(!s)return;const r=((l=s.querySelector("#rating-email"))==null?void 0:l.value.trim())||"",a=((d=s.querySelector("#rating-comment"))==null?void 0:d.value.trim())||"",o=s.querySelector('input[name="rate"]:checked'),n=o?parseFloat(o.value):null;if(!n){x.info({message:"Please select your rating.",position:"topRight"});return}if(!r){x.info({message:"Please enter your email",position:"topRight"});return}if(!a){x.info({message:"Please enter your review",position:"topRight"});return}try{if(await c.rateExercise(t,n,r,a)){x.success({message:"Rating submitted successfully!",position:"topRight"});const w=document.querySelector(".full-overlay.is-open [data-close-overlay]");w&&w.click()}}catch(m){x.error({message:m,position:"topRight"})}},Ce=async(e,t)=>{const s=t||e.currentTarget.dataset.id,r=await c.getExerciseById(s);te("exercise",h.exerciseModal(r),"overlay-exersices"),_("exercise");const a=document.querySelector("[data-btn-favorites]"),o=document.querySelector("[data-btn-rating]");a.addEventListener("click",()=>{const n=r._id,l=qe(n),d=a.querySelector("[data-fav-icon]");if(l){a.textContent="Remove from favorites",a.appendChild(d.closest("svg")),d.setAttribute("href","img/sprite.svg#icon-trash");const m=document.querySelector(`.favorites-item[data-id="${n}"] [data-open-overlay]`),w=`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${n}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="img/sprite.svg#icon-trash"></use>
                 </svg>
               </button>`;m.insertAdjacentHTML("beforebegin",w);const L=document.querySelector(`[data-btn-remove-favorites][data-id="${n}"]`);L&&L.addEventListener("click",ge)}else{a.textContent="Add to favorites",a.appendChild(d.closest("svg")),d.setAttribute("href","img/sprite.svg#icon-heart");const m=document.querySelector(`[data-btn-remove-favorites][data-id="${n}"]`);m&&m.remove()}}),o.addEventListener("click",()=>{const n=document.querySelector(".modal-exercises");n&&n.remove();const l=h.ratingModal();te("rating",l,"overlay-rating"),_("rating"),document.querySelector("[data-btn-submit-rating]").addEventListener("click",A=>Ae(A,s));const m=document.querySelector(".rating-form"),w=m.querySelectorAll('input[name="rate"]'),L=m.querySelector(".rating-form-value");w.forEach(A=>{A.addEventListener("change",()=>{L.textContent=A.value})})})},Re=()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-icon-close");if(!e||!t)return;let s=null;e.addEventListener("input",r=>{const a=r.target.value.trim();a.length>0?t.classList.add("visible"):t.classList.remove("visible"),clearTimeout(s),s=setTimeout(async()=>{await se(a)},500)}),t.addEventListener("click",async()=>{e.value="",t.classList.remove("visible"),Z="",await se("")})},se=async e=>{Z=e;try{me();const t=await c.getExerciseByCategory(c.filterType,k,v,10,e);if(E=t.totalPages||1,!t.results.length){i.favoritesEmpty.classList.remove("is-hidden"),i.listEx.innerHTML="",i.listEx.style.display="none",i.paginationBox.style.display="none";return}i.listEx.style.display="flex",i.paginationBox.style.display="flex",i.favoritesEmpty.classList.add("is-hidden"),i.listEx.classList.add("body-parts-list");const s=t.results.map(r=>h.favoriteCard(r));i.listEx.innerHTML=s.join(""),O(E),H(v),ve()}catch(t){console.error("Search error:",t)}},Ie=async e=>{k=e.currentTarget.dataset.nameCategory,S="exercises",v=1,await K()},K=async()=>{const e=await c.getExerciseByCategory(c.filterType,k,v,10,Z);if(E=e.totalPages||1,i.exercisedTitleThumb.classList.add("is-search-shown"),i.searchBar.classList.add("is-show"),i.exercisesBredcrumbs.classList.add("is-show"),i.exercisesBredcrumbs.querySelector(".exercises-category").innerHTML=k,!e.results.length){console.log("sadas"),i.favoritesEmpty.classList.remove("is-hidden"),i.listEx.innerHTML="",i.listEx.style.display="none",i.paginationBox.style.display="none";return}i.paginationBox.style.display="flex",i.listEx.style.display="flex",i.favoritesEmpty.classList.add("is-hidden"),i.searchBar.classList.add("is-show"),i.listEx.classList.add("body-parts-list");const t=e.results.map(s=>h.favoriteCard(s));i.listEx.innerHTML=t.join(""),O(E),H(v),Re(),ve()},ve=()=>{const e=document.querySelectorAll(".card-btn-start"),t=document.querySelectorAll("[data-btn-remove-favorites]");e.forEach(s=>s.addEventListener("click",Ce)),t.forEach(s=>s.addEventListener("click",ge))},Fe=()=>{document.querySelectorAll(".exercises-item").forEach(t=>t.addEventListener("click",Ie))},fe=e=>{const t=e.results.map(s=>h.exerciseCard(s));i.listEx.innerHTML=t.join(""),Fe(),G=Math.max(t.length,c.limitPage)},De=async()=>{const e=document.querySelector(".quote-card");if(!e)return;const t={author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},s=Te();if(s){e.innerHTML=h.quoteTemplate({quote:s.quote,author:s.author});return}try{const r=await c.getQuote();e.innerHTML=h.quoteTemplate(r),Be(r.quote,r.author)}catch(r){console.error("Error fetching quote:",r),e.innerHTML=h.quoteTemplate(t)}},J=async({updatePagination:e=!1}={})=>{me();const t=await c.getDataByFilter();fe(t),e&&O(c.totalPages),H(c.currentPage)},Oe=async()=>{try{De();const e=await c.getDataByFilter();i.btnBox.children[0]&&i.btnBox.children[0].classList.add("active"),fe(e),O(c.totalPages),H(c.currentPage)}catch(e){console.log("🚀 ~ error:",e)}},He=async e=>{try{S="categories",k=null,i.listEx.classList.remove("body-parts-list");const t=e.target.closest("button");if(!t)return;const s=t.dataset.type;if(!s)return;c.changeSearchType(s),G=c.limitPage,[...e.currentTarget.children].forEach(r=>r.classList.remove("active")),t.classList.add("active"),await J({updatePagination:!0}),i.exercisedTitleThumb.classList.remove("is-search-shown"),i.searchBar.classList.remove("is-show"),i.exercisesBredcrumbs.classList.remove("is-show"),i.listEx.style.display="flex"}catch(t){console.error("Filter error:",t)}},je=async e=>{try{const t=e.target.closest("button");if(!t)return;const s=t.dataset.action;if(s==="prev"||s==="next"){if(S==="exercises"){const a=s==="prev"?v-1:v+1;if(a<1||a>E)return;v=a,await K()}else{const a=s==="prev"?c.currentPage-1:c.currentPage+1;if(a<1||a>c.totalPages)return;c.currentPage=a,await J()}return}const r=Number(t.textContent.trim());if(!Number.isFinite(r))return;if(S==="exercises"){if(r===v)return;v=r,await K()}else{if(r===c.currentPage)return;c.currentPage=r,await J()}}catch(t){console.error("Pagination error:",t)}};Oe();i.btnBox&&i.btnBox.addEventListener("click",He);i.paginationBox&&i.paginationBox.addEventListener("click",je);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-reset-btn");!e||!t||(e.addEventListener("input",()=>{e.value.trim()!==""?t.classList.remove("visually-hidden"):t.classList.add("visually-hidden")}),t.addEventListener("click",s=>{s.preventDefault(),e.value="",t.classList.add("visually-hidden"),e.focus()}))});export{h as T,W as a,c as d,Te as g,Ce as h,ce as r,Be as s};
//# sourceMappingURL=main-Bs07s1Tg.js.map
