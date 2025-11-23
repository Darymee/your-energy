var he=Object.defineProperty;var ee=e=>{throw TypeError(e)};var pe=(e,t,r)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var E=(e,t,r)=>pe(e,typeof t!="symbol"?t+"":t,r),te=(e,t,r)=>t.has(e)||ee("Cannot "+r);var h=(e,t,r)=>(te(e,t,"read from private field"),r?r.call(e):t.get(e)),k=(e,t,r)=>t.has(e)?ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);var O=(e,t,r)=>(te(e,t,"access private method"),r);import{a as p,i as y}from"./vendor-pFq095uA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.navLinks.forEach(r=>r.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();let j=window.location.pathname.split("/").pop()||"index.html",ae=j===""||j==="index.html"?"home":j.replace(".html","");const A=document.querySelectorAll(".nav-link");A.forEach(e=>{e.dataset.page===ae&&(e.classList.add("is-active"),e.classList.add("is-current"))});const K=document.querySelector(".nav-list"),H=document.querySelector(".nav-indicator");function B(e){if(!H||!K||!e)return;const t=K.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-t.left;H.style.width=r.width+"px",H.style.transform=`translateX(${s}px)`}let m=document.querySelector(".nav-link.is-active")||A[0];B(m);A.forEach(e=>{e.addEventListener("mouseenter",()=>{B(e),e!==m?m.classList.remove("is-current"):m.classList.add("is-current")}),e.addEventListener("click",t=>{if(e===m){t.preventDefault();return}if(e.dataset.page===ae){t.preventDefault(),m=e,m.classList.add("is-current"),B(m);return}A.forEach(r=>r.classList.remove("is-active","is-current")),e.classList.add("is-active","is-current"),m=e})});K.addEventListener("mouseleave",()=>{B(m),m.classList.add("is-current")});window.addEventListener("resize",()=>{B(m)});const ie=document.querySelector(".theme-switch .checkbox"),C=document.documentElement,ye=localStorage.getItem("theme"),be=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,ne=ye||(be?"dark":"light");C.setAttribute("data-theme",ne);ie.checked=ne==="dark";function we(e){C.classList.add("theme-transition"),window.setTimeout(()=>{C.classList.remove("theme-transition")},400),e()}ie.addEventListener("change",e=>{const t=e.target.checked?"dark":"light";we(()=>{C.setAttribute("data-theme",t),localStorage.setItem("theme",t)})});const U=document.querySelector(".anchor-button");function Le(e=1e3){const t=window.scrollY,r=performance.now();function s(a){const i=a-r,n=Math.min(i/e,1),d=1-Math.pow(1-n,3);window.scrollTo(0,t*(1-d)),n<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}window.addEventListener("scroll",()=>{window.scrollY>300?U.classList.add("show"):U.classList.remove("show")});U.addEventListener("click",e=>{e.preventDefault(),Le()});p.defaults.baseURL="https://your-energy.b.goit.study/api";p.defaults.headers.common["Content-Type"]="application/json";var S,oe,F,ce,f;class xe{constructor(){k(this,S);E(this,"totalPages",0);E(this,"currentPage",1);E(this,"limitPage",9);E(this,"filterType","Muscles");k(this,F,()=>{const r=window.innerWidth>=768?12:9;r!==this.limitPage&&(this.limitPage=r,this.currentPage=1)});k(this,f,t=>{var r,s;return console.error("API Error:",t),Promise.reject(((s=(r=t.response)==null?void 0:r.data)==null?void 0:s.message)||t.message||"An unexpected error occurred")});O(this,S,oe).call(this),window.addEventListener("resize",h(this,F))}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(t){this.filterType=t,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const t=await p.get("/filters",{params:O(this,S,ce).call(this)});return this.totalPages=t.data.totalPages,t.data}catch(t){return h(this,f).call(this,t)}}async getExercises(t={},r=1,s=10){try{const a={...t,page:r,limit:s};return(await p.get("/exercises",{params:a})).data}catch(a){return h(this,f).call(this,a)}}async getExerciseByCategory(t,r,s=1,a=10){try{const n={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"}[t];if(!n)throw new Error(`Unknown filter type: ${t}`);const d={[n]:r.toLowerCase(),page:s,limit:a};return(await p.get("/exercises",{params:d})).data}catch(i){return h(this,f).call(this,i)}}async getExerciseById(t){try{return(await p.get(`/exercises/${t}`)).data}catch(r){return h(this,f).call(this,r)}}async rateExercise(t,r,s,a=""){try{if(r<1||r>5)throw new Error("Rating must be between 1 and 5");return(await p.patch(`/exercises/${t}/rating`,{rate:r,email:s,review:a})).data}catch(i){return h(this,f).call(this,i)}}async getQuote(){try{return(await p.get("/quote")).data}catch(t){return h(this,f).call(this,t)}}async subscribe(t){try{return await p.post("/subscription",{email:t})}catch(r){return h(this,f).call(this,r)}}}S=new WeakSet,oe=function(){const{matches:t}=window.matchMedia("(max-width: 767px)");this.limitPage=t?9:12},F=new WeakMap,ce=function(){return{filter:this.filterType,page:this.currentPage,limit:this.limitPage}},f=new WeakMap;const c=new xe,V={form:document.querySelector(".footer-form")},Se=async e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!t){y.info({message:"Email is required",position:"topRight"});return}if(!r.test(t)){y.info({message:"Invalid email format",position:"topRight"});return}try{const s=await c.subscribe(t);if(s.status===201){y.success({message:s.data.message,position:"topRight"}),V.form.reset();return}}catch(s){y.error({message:s,position:"topRight"}),V.form.reset()}};V.form.addEventListener("submit",Se);const W={FAVORITES:"favorites",UI_THEME:"ui-theme",LAST_SESSION:"last_session"},Y=()=>{try{const e=localStorage.getItem(W.FAVORITES);return e?JSON.parse(e):[]}catch(e){return console.error("Error parsing favorites from localStorage:",e),[]}},M=e=>Y().includes(e),Ee=e=>{try{const t=Y();t.includes(e)||(t.push(e),localStorage.setItem(W.FAVORITES,JSON.stringify(t)))}catch(t){console.error("Error adding favorite:",t)}},le=e=>{try{const r=Y().filter(s=>s!==e);localStorage.setItem(W.FAVORITES,JSON.stringify(r))}catch(t){console.error("Error removing favorite:",t)}},qe=e=>M(e)?(le(e),!1):(Ee(e),!0),v="/your-energy/img/sprite.svg";function z(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function Pe(e){const t=Math.round(Math.max(0,Math.min(5,Number(e)||0))),r=Array(t).fill(`<svg class="full" width="18" height="18">
        <use href="${v}#icon-star"></use>
        </svg>`).join(""),s=Array(5-t).fill(`<svg class="empty" width="18" height="18">
        <use href="${v}#icon-star"></use>
        </svg>`).join("");return r+s}const w={exerciseCard({filter:e,name:t,imgURL:r}){return`<li class='exercises-item' data-name-category=${t}>
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
      </li>`).join("")},favoriteCard({_id:e,name:t,burnedCalories:r,time:s,bodyPart:a,target:i,rating:n}){return`
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
           ${M(e)?`<button
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
          <h3 class="card-title">${z(t)}</h3>
        </div>

        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${r} / ${s} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${z(a)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${z(i)}</span>
          </li>
        </ul>
      </li>
    `},exerciseModal({_id:e,name:t,rating:r,gifUrl:s,target:a,bodyPart:i,equipment:n,popularity:d,burnedCalories:g,description:u,time:b}){const L=Pe(r);return`
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
                        <div class="info-grid-value">${d}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Burned calories</div>
                        <div class="info-grid-value">${g} / ${b}</div>
                    </div>
                </div>
            </div>

            <p class="modal-description">${u}</p>

            <div class="modal-btn-wrapper">
                <button type="button" class="modal-btn" data-btn-favorites>
                  ${M(e)?"Remove from favorites":"Add to favorites"}
                    <svg class="modal-btn-icon" width="18" height="18">
                      <use href="img/sprite.svg#${M(e)?"icon-trash":"icon-heart"}"  data-fav-icon></use>
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
  `},de={};let l=null,q=null,P=null;function re(e,t,r=null){de[e]=t,l.modal.classList="full-overlay",r!==null&&l.modal.classList.add(r)}function Be(){l={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")},document.querySelectorAll("[data-open-overlay]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.openOverlay;Q(t)})})}function Q(e){if(!l){console.warn("Modal system is not initialized");return}const t=de[e];if(!t)return console.warn(`No modal found for key: ${e}`);me(),l.modalContent.innerHTML=t,l.modal.classList.add("is-open"),document.body.style.overflow="hidden";const r=l.modal.querySelector("[data-close-overlay]");r&&(P=ue,r.addEventListener("click",P)),q=$e,l.modal.addEventListener("click",q)}function ue(){l&&(l.modalContent.innerHTML="",l.modal.classList="full-overlay",document.body.style.overflow="",me())}function me(){if(q&&(l.modal.removeEventListener("click",q),q=null),P){const e=l.modal.querySelector("[data-close-overlay]");e==null||e.removeEventListener("click",P),P=null}}function $e(e){e.target===l.modal&&ue()}Be();const o={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body"),searchBar:document.querySelector(".search-bar"),exercisesBredcrumbs:document.querySelector(".exercises-bredcrumbs")};let I=c.limitPage,D=c.limitPage,N=!1,J="categories",R=null,$=1,se=1;const x=o.btnBox?o.btnBox.querySelector(".exercises-thumb-indicator"):null,Te=async()=>{if(x&&(_(),c.limitPage!==D&&!N)){N=!0;try{D=c.limitPage,I=D,await Z({updatePagination:!0})}finally{N=!1}}},_=()=>{if(!x)return;const e=o.btnBox.querySelector("button.active");if(!e||!x)return;const t=o.btnBox.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-t.left,a=r.width;x.style.transform=`translateX(${s}px)`,x.style.width=`${a}px`},ke=()=>{o.listEx.innerHTML=w.skeletonExMarkup(I)},G=e=>{const t=[];for(let r=1;r<=e;r++)t.push(w.itemPagination(r));o.paginationBox.innerHTML=t.join("")},X=e=>{const t=[...o.paginationBox.children];if(!t.length)return;t.forEach(s=>s.classList.remove("pagination-item-active"));const r=e-1;r>=0&&r<t.length&&t[r].classList.add("pagination-item-active")},ge=e=>{e.stopPropagation();const t=e.currentTarget.dataset.id;le(t),e.currentTarget.remove();const r=document.querySelector(".modal-exercises");if(r){const s=r.querySelector("[data-btn-favorites]");if(s){s.textContent="Add to favorites",s.classList.remove("active");const a=s.querySelector("use");a&&a.setAttribute("href","img/sprite.svg#icon-heart")}}},Me=async(e,t)=>{var d,g;e.preventDefault();const r=e.target.closest("form");if(!r)return;const s=((d=r.querySelector("#rating-email"))==null?void 0:d.value.trim())||"",a=((g=r.querySelector("#rating-comment"))==null?void 0:g.value.trim())||"",i=r.querySelector('input[name="rate"]:checked'),n=i?parseFloat(i.value):null;if(!n){y.info({message:"Please select your rating.",position:"topRight"});return}if(!s){y.info({message:"Please enter your email",position:"topRight"});return}if(!a){y.info({message:"Please enter your review",position:"topRight"});return}try{if(await c.rateExercise(t,n,s,a)){y.success({message:"Rating submitted successfully!",position:"topRight"});const b=document.querySelector(".full-overlay.is-open [data-close-overlay]");b&&b.click()}}catch(u){y.error({message:u,position:"topRight"})}},Ae=async(e,t)=>{const r=t||e.currentTarget.dataset.id,s=await c.getExerciseById(r);re("exercise",w.exerciseModal(s),"overlay-exersices"),Q("exercise");const a=document.querySelector("[data-btn-favorites]"),i=document.querySelector("[data-btn-rating]");a.addEventListener("click",()=>{const n=s._id,d=qe(n),g=a.querySelector("[data-fav-icon]");if(d){a.textContent="Remove from favorites",a.appendChild(g.closest("svg")),g.setAttribute("href","img/sprite.svg#icon-trash");const u=document.querySelector(`.favorites-item[data-id="${n}"] [data-open-overlay]`),b=`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${n}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="img/sprite.svg#icon-trash"></use>
                 </svg>
               </button>`;u.insertAdjacentHTML("beforebegin",b);const L=document.querySelector(`[data-btn-remove-favorites][data-id="${n}"]`);L&&L.addEventListener("click",ge)}else{a.textContent="Add to favorites",a.appendChild(g.closest("svg")),g.setAttribute("href","img/sprite.svg#icon-heart");const u=document.querySelector(`[data-btn-remove-favorites][data-id="${n}"]`);u&&u.remove()}}),i.addEventListener("click",()=>{const n=document.querySelector(".modal-exercises");n&&n.remove();const d=w.ratingModal();re("rating",d,"overlay-rating"),Q("rating"),document.querySelector("[data-btn-submit-rating]").addEventListener("click",T=>Me(T,r));const u=document.querySelector(".rating-form"),b=u.querySelectorAll('input[name="rate"]'),L=u.querySelector(".rating-form-value");b.forEach(T=>{T.addEventListener("change",()=>{L.textContent=T.value})})})},Ce=()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-icon");if(!e||!t)return;let r=null;e.addEventListener("focusin",()=>{t.style.opacity="0",t.style.pointerEvents="none"}),e.addEventListener("focusout",()=>{e.value.trim()===""&&(t.style.opacity="1",t.style.pointerEvents="auto")}),e.addEventListener("input",s=>{const a=s.target.value.trim().toLowerCase();clearTimeout(r),r=setTimeout(()=>{Re(a)},250)})},Re=e=>{document.querySelectorAll(".favorites-item").forEach(r=>{const s=r.querySelector(".card-title"),a=(s==null?void 0:s.textContent.trim().toLowerCase())||"";if(e===""){r.style.display="";return}a.includes(e)?r.style.display="":r.style.display="none"})},Fe=async e=>{R=e.currentTarget.dataset.nameCategory,J="exercises",$=1,await ve()},ve=async()=>{const e=await c.getExerciseByCategory(c.filterType,R,$,10);se=e.totalPages||1,o.searchBar.classList.add("is-show"),o.exercisesBredcrumbs.classList.add("is-show"),o.exercisesBredcrumbs.querySelector(".exercises-category").innerHTML=R,o.listEx.classList.add("body-parts-list");const t=e.results.map(r=>w.favoriteCard(r));o.listEx.innerHTML=t.join(""),G(se),X($),Ce(),Ie()},Ie=()=>{const e=document.querySelectorAll(".card-btn-start"),t=document.querySelectorAll("[data-btn-remove-favorites]");e.forEach(r=>r.addEventListener("click",Ae)),t.forEach(r=>r.addEventListener("click",ge))},Oe=()=>{document.querySelectorAll(".exercises-item").forEach(t=>t.addEventListener("click",Fe))},fe=e=>{const t=e.results.map(r=>w.exerciseCard(r));o.listEx.innerHTML=t.join(""),Oe(),I=Math.max(t.length,c.limitPage)},je=async()=>{const e=document.querySelector(".quote-card");try{const t=await c.getQuote();e.innerHTML=w.quoteTemplate(t)}catch{const r="Tom Brady",s="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.";e.innerHTML=w.quoteTemplate({quote:s,author:r})}},Z=async({updatePagination:e=!1}={})=>{ke();const t=await c.getDataByFilter();fe(t),e&&G(c.totalPages),X(c.currentPage)},He=async()=>{try{if(je(),!x)return;const e=await c.getDataByFilter();o.btnBox.children[0]&&(o.btnBox.children[0].classList.add("active"),requestAnimationFrame(_)),fe(e),G(c.totalPages),X(c.currentPage)}catch(e){console.log("🚀 ~ error:",e)}},ze=async e=>{try{J="categories",R=null,o.listEx.classList.remove("body-parts-list");const t=e.target.closest("button");if(!t)return;const r=t.dataset.type;if(!r)return;c.changeSearchType(r),I=c.limitPage,[...e.currentTarget.children].forEach(s=>s.classList.remove("active")),t.classList.add("active"),requestAnimationFrame(_),await Z({updatePagination:!0}),o.searchBar.classList.remove("is-show"),o.exercisesBredcrumbs.classList.remove("is-show")}catch(t){console.error("Filter error:",t)}},De=async e=>{try{const t=e.target.closest("button");if(!t)return;const r=Number(t.textContent.trim());if(!Number.isFinite(r))return;if(J==="exercises"){if(r===$)return;$=r,await ve()}else{if(r===c.currentPage)return;c.currentPage=r,await Z()}}catch(t){console.error("Pagination error:",t)}};He();o.btnBox&&(window.addEventListener("resize",Te),o.btnBox.addEventListener("click",ze));o.paginationBox&&o.paginationBox.addEventListener("click",De);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".search-bar-input"),t=document.querySelector(".search-bar-reset-btn");!e||!t||(e.addEventListener("input",()=>{e.value.trim()!==""?t.classList.remove("visually-hidden"):t.classList.add("visually-hidden")}),t.addEventListener("click",r=>{r.preventDefault(),e.value="",t.classList.add("visually-hidden"),e.focus()}))});export{w as T,c as d,Y as g,Ae as h,le as r};
//# sourceMappingURL=main-CKhgXWAi.js.map
