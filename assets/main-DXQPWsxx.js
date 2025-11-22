var ue=Object.defineProperty;var V=e=>{throw TypeError(e)};var me=(e,t,r)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var L=(e,t,r)=>me(e,typeof t!="symbol"?t+"":t,r),W=(e,t,r)=>t.has(e)||V("Cannot "+r);var v=(e,t,r)=>(W(e,t,"read from private field"),r?r.call(e):t.get(e)),B=(e,t,r)=>t.has(e)?V("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);var C=(e,t,r)=>(W(e,t,"access private method"),r);import{a as p,i as h}from"./vendor-pFq095uA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.navLinks.forEach(r=>r.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();let F=window.location.pathname.split("/").pop()||"index.html",G=F===""||F==="index.html"?"home":F.replace(".html","");const M=document.querySelectorAll(".nav-link");M.forEach(e=>{e.dataset.page===G&&(e.classList.add("is-active"),e.classList.add("is-current"))});const N=document.querySelector(".nav-list"),I=document.querySelector(".nav-indicator");function P(e){if(!I||!N||!e)return;const t=N.getBoundingClientRect(),r=e.getBoundingClientRect(),a=r.left-t.left;I.style.width=r.width+"px",I.style.transform=`translateX(${a}px)`}let d=document.querySelector(".nav-link.is-active")||M[0];P(d);M.forEach(e=>{e.addEventListener("mouseenter",()=>{P(e),e!==d?d.classList.remove("is-current"):d.classList.add("is-current")}),e.addEventListener("click",t=>{if(e===d){t.preventDefault();return}if(e.dataset.page===G){t.preventDefault(),d=e,d.classList.add("is-current"),P(d);return}M.forEach(r=>r.classList.remove("is-active","is-current")),e.classList.add("is-active","is-current"),d=e})});N.addEventListener("mouseleave",()=>{P(d),d.classList.add("is-current")});window.addEventListener("resize",()=>{P(d)});const X=document.querySelector(".theme-switch .checkbox"),$=document.documentElement,ge=localStorage.getItem("theme"),fe=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,Z=ge||(fe?"dark":"light");$.setAttribute("data-theme",Z);X.checked=Z==="dark";function ve(e){$.classList.add("theme-transition"),window.setTimeout(()=>{$.classList.remove("theme-transition")},400),e()}X.addEventListener("change",e=>{const t=e.target.checked?"dark":"light";ve(()=>{$.setAttribute("data-theme",t),localStorage.setItem("theme",t)})});const ee={};let u=null,x=null,E=null;function j(e,t){ee[e]=t}function pe(){u={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")},document.querySelectorAll("[data-open-overlay]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.openOverlay;z(t)})})}function z(e){if(!u){console.warn("Modal system is not initialized");return}const t=ee[e];if(!t)return console.warn(`No modal found for key: ${e}`);re(),u.modalContent.innerHTML=t,u.modal.classList.add("is-open"),document.body.style.overflow="hidden";const r=u.modal.querySelector("[data-close-overlay]");r&&(E=te,r.addEventListener("click",E)),x=he,u.modal.addEventListener("click",x)}function te(){u&&(u.modalContent.innerHTML="",u.modal.classList.remove("is-open"),document.body.style.overflow="",re())}function re(){if(x&&(u.modal.removeEventListener("click",x),x=null),E){const e=u.modal.querySelector("[data-close-overlay]");e==null||e.removeEventListener("click",E),E=null}}function he(e){e.target===u.modal&&te()}pe();j("rating",ye());function ye(){return`
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
  `}const Q=document.querySelector(".anchor-button");function be(e=1e3){const t=window.scrollY,r=performance.now();function a(i){const s=i-r,n=Math.min(s/e,1),l=1-Math.pow(1-n,3);window.scrollTo(0,t*(1-l)),n<1&&requestAnimationFrame(a)}requestAnimationFrame(a)}window.addEventListener("scroll",()=>{window.scrollY>300?Q.classList.add("show"):Q.classList.remove("show")});Q.addEventListener("click",e=>{e.preventDefault(),be()});p.defaults.baseURL="https://your-energy.b.goit.study/api";p.defaults.headers.common["Content-Type"]="application/json";var w,ae,A,se,g;class Se{constructor(){B(this,w);L(this,"totalPages",0);L(this,"currentPage",1);L(this,"limitPage",9);L(this,"filterType","Muscles");B(this,A,()=>{const r=window.innerWidth>=768?12:9;r!==this.limitPage&&(this.limitPage=r,this.currentPage=1)});B(this,g,t=>{var r,a;return console.error("API Error:",t),Promise.reject(((a=(r=t.response)==null?void 0:r.data)==null?void 0:a.message)||t.message||"An unexpected error occurred")});C(this,w,ae).call(this),window.addEventListener("resize",v(this,A))}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(t){this.filterType=t,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const t=await p.get("/filters",{params:C(this,w,se).call(this)});return this.totalPages=t.data.totalPages,t.data}catch(t){return v(this,g).call(this,t)}}async getExercises(t={},r=1,a=10){try{const i={...t,page:r,limit:a};return(await p.get("/exercises",{params:i})).data}catch(i){return v(this,g).call(this,i)}}async getExerciseByCategory(t,r,a=1,i=10){try{const s={...t,...r,...a,limit:i};return(await p.get("/exercises",{params:s})).data}catch(s){return v(this,g).call(this,s)}}async getExerciseById(t){try{return(await p.get(`/exercises/${t}`)).data}catch(r){return v(this,g).call(this,r)}}async rateExercise(t,r,a,i=""){try{if(r<1||r>5)throw new Error("Rating must be between 1 and 5");return(await p.patch(`/exercises/${t}/rating`,{rate:r,email:a,review:i})).data}catch(s){return v(this,g).call(this,s)}}async getQuote(){try{return(await p.get("/quote")).data}catch(t){return v(this,g).call(this,t)}}async subscribe(t){try{return await p.post("/subscription",{email:t})}catch(r){return v(this,g).call(this,r)}}}w=new WeakSet,ae=function(){const{matches:t}=window.matchMedia("(max-width: 767px)");this.limitPage=t?9:12},A=new WeakMap,se=function(){return{filter:this.filterType,page:this.currentPage,limit:this.limitPage}},g=new WeakMap;const o=new Se,J={form:document.querySelector(".footer-form")},we=async e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!t){h.info({message:"Email is required",position:"topRight"});return}if(!r.test(t)){h.info({message:"Invalid email format",position:"topRight"});return}try{const a=await o.subscribe(t);if(a.status===201){h.success({message:a.data.message,position:"topRight"}),J.form.reset();return}}catch(a){h.error({message:a,position:"topRight"}),J.form.reset()}};J.form.addEventListener("submit",we);const T={FAVORITES:"favorites",UI_THEME:"ui-theme",LAST_SESSION:"last_session"},Le=()=>{try{const e=localStorage.getItem(T.LAST_SESSION);return e?JSON.parse(e):null}catch(e){return console.error("Error parsing last session from localStorage:",e),null}},K=e=>{if(e){try{localStorage.setItem(T.LAST_SESSION,JSON.stringify(e))}catch{}console.error("Error setting last session to localStorage:",error)}},U=()=>{try{const e=localStorage.getItem(T.FAVORITES);return e?JSON.parse(e):[]}catch(e){return console.error("Error parsing favorites from localStorage:",e),[]}},k=e=>U().includes(e),xe=e=>{try{const t=U();t.includes(e)||(t.push(e),localStorage.setItem(T.FAVORITES,JSON.stringify(t)))}catch(t){console.error("Error adding favorite:",t)}},ie=e=>{try{const r=U().filter(a=>a!==e);localStorage.setItem(T.FAVORITES,JSON.stringify(r))}catch(t){console.error("Error removing favorite:",t)}},Ee=e=>k(e)?(ie(e),!1):(xe(e),!0),q="/your-energy/img/sprite.svg";function O(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function qe(e){const t=Math.round(Math.max(0,Math.min(5,Number(e)||0))),r=Array(t).fill(`<svg class="full" width="18" height="18">
        <use href="${q}#icon-star"></use>
        </svg>`).join(""),a=Array(5-t).fill(`<svg class="empty" width="18" height="18">
        <use href="${q}#icon-star"></use>
        </svg>`).join("");return r+a}const f={exerciseCard({filter:e,name:t,imgURL:r}){return`<li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${r});'>
              <div class="exercises-wrap-info">
                <p>${(i=>i?i.split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "):"")(t)}</p>
                <p>${e}</p>
              </div>
            </div>
          </li>`},itemPagination(e){return`<button class="pagination-item" type="button">
          ${e}
        </button>`},quote(e,t){return`<p class="quote-card-text">
             ${t}
            </p>
            <p class="quote-card-author">${e}</p>`},skeletonExMarkup(e=o.limitPage){return Array.from({length:e}).map(()=>`
      <li class="exercises-item is-skeleton">
        <div class="exercises-background-img skeleton-bg"></div>
        <div class="exercises-wrap-info skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
        </div>
      </li>`).join("")},favoriteCard({_id:e,name:t,burnedCalories:r,time:a,bodyPart:i,target:s}){return`
      <li class="favorites-item" data-id=${e}>
        <div class="card-header">
          <div class="card-badge">WORKOUT</div>

           ${k(e)?`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${e}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="${q}#icon-trash"></use>
                 </svg>
               </button>`:""}

          <button class="card-btn-start js-start-btn" data-id="${e}" data-open-overlay="exercise" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${q}#icon-arrow-start"></use>
              </svg>
          </button>
        </div>

        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${q}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${O(t)}</h3>
        </div>

        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${r} / ${a} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${O(i)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${O(s)}</span>
          </li>
        </ul>
      </li>
    `},exerciseModal({_id:e,name:t,rating:r,gifUrl:a,target:i,bodyPart:s,equipment:n,popularity:l,burnedCalories:m,description:S,time:y}){const de=qe(r);return`
      <div class="modal-exercises">
        <div class="modal-img-wrapper">
            <img class="modal-img" src="${a}" alt="${t}" />
        </div>
        <div class="modal-details">
            <p class="modal-title">${t}</p>
            <div class="modal-rating">
                <div class="modal-rating-value">${r}</div>
                <div class="modal-rating-stars">${de}</div>
            </div>
            <div class="info-grid">
                <div class="info-row">
                    <div class="info-grid-item">
                        <div class="info-grid-label">Target</div>
                        <div class="info-grid-value">${i}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Body Part</div>
                        <div class="info-grid-value">${s}</div>
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
                        <div class="info-grid-value">${m} / ${y}</div>
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
              <label for="star5"></label>

              <input
                type="radio"
                name="rate"
                value="4.0"
                class="rating-form-radio"
                id="star4"
              />
              <label for="star4"></label>

              <input
                type="radio"
                name="rate"
                value="3.0"
                class="rating-form-radio"
                id="star3"
              />
              <label for="star3"></label>

              <input
                type="radio"
                name="rate"
                value="2.0"
                class="rating-form-radio"
                id="star2"
              />
              <label for="star2"></label>

              <input
                type="radio"
                name="rate"
                value="1.0"
                class="rating-form-radio"
                id="star1"
              />
              <label for="star1"></label>
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
     `}},c={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body")};let R=o.limitPage,H=o.limitPage,D=!1;const b=c.btnBox?c.btnBox.querySelector(".exercises-thumb-indicator"):null,Pe=async()=>{if(b&&(Y(),o.limitPage!==H&&!D)){D=!0;try{H=o.limitPage,R=H,await _({updatePagination:!0})}finally{D=!1}}},Y=()=>{if(!b)return;const e=c.btnBox.querySelector("button.active");if(!e||!b)return;const t=c.btnBox.getBoundingClientRect(),r=e.getBoundingClientRect(),a=r.left-t.left,i=r.width;b.style.transform=`translateX(${a}px)`,b.style.width=`${i}px`},Te=()=>{c.listEx.innerHTML=f.skeletonExMarkup(R)},oe=e=>{const t=[];for(let r=1;r<=e;r++)t.push(f.itemPagination(r));c.paginationBox.innerHTML=t.join("")},ne=e=>{const t=[...c.paginationBox.children];if(!t.length)return;t.forEach(a=>a.classList.remove("pagination-item-active"));const r=e-1;r>=0&&r<t.length&&t[r].classList.add("pagination-item-active")},ce=e=>{e.stopPropagation();const t=e.currentTarget.dataset.id;ie(t),e.currentTarget.remove();const r=document.querySelector(".modal-exercises");if(r){const a=r.querySelector("[data-btn-favorites]");if(a){a.textContent="Add to favorites",a.classList.remove("active");const i=a.querySelector("use");i&&i.setAttribute("href","img/sprite.svg#icon-heart")}}},Be=async(e,t)=>{var l,m;e.preventDefault();const r=e.target.closest("form");if(!r)return;const a=((l=r.querySelector("#rating-email"))==null?void 0:l.value.trim())||"",i=((m=r.querySelector("#rating-comment"))==null?void 0:m.value.trim())||"",s=r.querySelector('input[name="rate"]:checked'),n=s?parseFloat(s.value):null;if(!n){h.info({message:"Please select your rating.",position:"topRight"});return}if(!a){h.info({message:"Please enter your email",position:"topRight"});return}if(!i){h.info({message:"Please enter your review",position:"topRight"});return}try{if(await o.rateExercise(t,n,a,i)){h.success({message:"Rating submitted successfully!",position:"topRight"});const y=document.querySelector(".full-overlay.is-open [data-close-overlay]");y&&y.click()}}catch(S){h.error({message:S,position:"topRight"})}},ke=async e=>{const t=e.currentTarget.dataset.id,r=await o.getExerciseById(t);j("exercise",f.exerciseModal(r)),z("exercise");const a=document.querySelector("[data-btn-favorites]"),i=document.querySelector("[data-btn-rating]");a.addEventListener("click",()=>{const s=r._id,n=Ee(s),l=a.querySelector("[data-fav-icon]");if(n){a.textContent="Remove from favorites",a.appendChild(l.closest("svg")),l.setAttribute("href","img/sprite.svg#icon-trash");const m=document.querySelector(`.favorites-item[data-id="${s}"] [data-open-overlay]`),S=`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${s}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="img/sprite.svg#icon-trash"></use>
                 </svg>
               </button>`;m.insertAdjacentHTML("beforebegin",S);const y=document.querySelector(`[data-btn-remove-favorites][data-id="${s}"]`);y&&y.addEventListener("click",ce)}else{a.textContent="Add to favorites",a.appendChild(l.closest("svg")),l.setAttribute("href","img/sprite.svg#icon-heart");const m=document.querySelector(`[data-btn-remove-favorites][data-id="${s}"]`);m&&m.remove()}}),i.addEventListener("click",()=>{const s=document.querySelector(".modal-exercises");s&&s.remove();const n=f.ratingModal();j("rating",n),z("rating"),document.querySelector("[data-btn-submit-rating]").addEventListener("click",m=>Be(m,t))})},Me=async e=>{const t=await o.getExerciseByCategory(o.filterType,e.currentTarget.dataset.name);c.listEx.classList.add("body-parts-list");const r=t.results.map(a=>f.favoriteCard(a));c.listEx.innerHTML=r.join(""),$e()},$e=()=>{const e=document.querySelectorAll(".card-btn-start"),t=document.querySelectorAll("[data-btn-remove-favorites]");e.forEach(r=>r.addEventListener("click",ke)),t.forEach(r=>r.addEventListener("click",ce))},Ae=()=>{document.querySelectorAll(".exercises-item").forEach(t=>t.addEventListener("click",Me))},le=e=>{const t=e.results.map(r=>f.exerciseCard(r));c.listEx.innerHTML=t.join(""),Ae(),R=Math.max(t.length,o.limitPage)},Re=e=>{const r=Date.now()-e,a=24*60*60*1e3;return r>=a},Ce=async()=>{try{const e=Le();if(e){const{author:t,quote:r,time:a}=e;if(Re(a)){const s=await o.getQuote(),n=f.quote(s.author,s.quote);c.quoteBody.innerHTML=n,K({author:s.author,quote:s.quote,time:Date.now()})}else{const s=f.quote(t,r);c.quoteBody.innerHTML=s}}else{const t=await o.getQuote(),r=f.quote(t.author,t.quote);c.quoteBody.innerHTML=r,K({author:t.author,quote:t.quote,time:Date.now()})}}catch{const a=f.quote("Tom Brady","A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.");if(!b)return;c.quoteBody.innerHTML=a}},_=async({updatePagination:e=!1}={})=>{Te();const t=await o.getDataByFilter();le(t),e&&oe(o.totalPages),ne(o.currentPage)},Fe=async()=>{if(b)try{Ce();const e=await o.getDataByFilter();c.btnBox.children[0]&&(c.btnBox.children[0].classList.add("active"),requestAnimationFrame(Y)),le(e),oe(o.totalPages),ne(o.currentPage)}catch(e){console.log("🚀 ~ error:",e)}},Ie=async e=>{try{const t=e.target.closest("button");if(!t)return;const r=t.dataset.type;if(!r)return;o.changeSearchType(r),R=o.limitPage,[...e.currentTarget.children].forEach(a=>a.classList.remove("active")),t.classList.add("active"),requestAnimationFrame(Y),await _({updatePagination:!0})}catch(t){console.log("🚀 ~ error:",t)}},Oe=async e=>{try{const t=e.target.closest("button");if(!t)return;const r=Number(t.textContent.trim());if(!Number.isFinite(r)||r===o.currentPage)return;o.currentPage=r,await _()}catch(t){console.log("🚀 ~ error:",t)}};Fe();c.btnBox&&(window.addEventListener("resize",Pe),c.btnBox.addEventListener("click",Ie));c.paginationBox&&c.paginationBox.addEventListener("click",Oe);export{f as T,o as d,U as g,ie as r};
//# sourceMappingURL=main-DXQPWsxx.js.map
