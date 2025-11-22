var le=Object.defineProperty;var J=e=>{throw TypeError(e)};var de=(e,t,s)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var y=(e,t,s)=>de(e,typeof t!="symbol"?t+"":t,s),U=(e,t,s)=>t.has(e)||J("Cannot "+s);var m=(e,t,s)=>(U(e,t,"read from private field"),s?s.call(e):t.get(e)),w=(e,t,s)=>t.has(e)?J("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s);var $=(e,t,s)=>(U(e,t,"access private method"),s);import{a as g,i as x}from"./vendor-pFq095uA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.navLinks.forEach(s=>s.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();let k=window.location.pathname.split("/").pop()||"index.html",V=k===""||k==="index.html"?"home":k.replace(".html","");const q=document.querySelectorAll(".nav-link");q.forEach(e=>{e.dataset.page===V&&(e.classList.add("is-active"),e.classList.add("is-current"))});const N=document.querySelector(".nav-list"),M=document.querySelector(".nav-indicator");function b(e){if(!M||!N||!e)return;const t=N.getBoundingClientRect(),s=e.getBoundingClientRect(),r=s.left-t.left;M.style.width=s.width+"px",M.style.transform=`translateX(${r}px)`}let l=document.querySelector(".nav-link.is-active")||q[0];b(l);q.forEach(e=>{e.addEventListener("mouseenter",()=>{b(e),e!==l?l.classList.remove("is-current"):l.classList.add("is-current")}),e.addEventListener("click",t=>{if(e===l){t.preventDefault();return}if(e.dataset.page===V){t.preventDefault(),l=e,l.classList.add("is-current"),b(l);return}q.forEach(s=>s.classList.remove("is-active","is-current")),e.classList.add("is-active","is-current"),l=e})});N.addEventListener("mouseleave",()=>{b(l),l.classList.add("is-current")});window.addEventListener("resize",()=>{b(l)});const W=document.querySelector(".theme-switch .checkbox"),P=document.documentElement,ue=localStorage.getItem("theme"),me=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,Y=ue||(me?"dark":"light");P.setAttribute("data-theme",Y);W.checked=Y==="dark";function ge(e){P.classList.add("theme-transition"),window.setTimeout(()=>{P.classList.remove("theme-transition")},400),e()}W.addEventListener("change",e=>{const t=e.target.checked?"dark":"light";ge(()=>{P.setAttribute("data-theme",t),localStorage.setItem("theme",t)})});const K={};let u=null;function G(e,t){K[e]=t}function ve(){u={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")},document.querySelectorAll("[data-open-overlay]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.openOverlay;X(t)})})}function X(e){if(!u){console.warn("Modal system is not initialized");return}const t=K[e];if(!t)return console.warn(`No modal found for key: ${e}`);u.modalContent.innerHTML=t,u.modal.classList.add("is-open");const s=u.modal.querySelector("[data-close-overlay]");s==null||s.addEventListener("click",Z),u.modal.addEventListener("click",ee)}function Z(){u.modalContent.innerHTML="",u.modal.classList.remove("is-open"),u.modal.removeEventListener("click",ee)}function ee(e){e.target===u.modal&&Z()}ve();G("rating",he());function he(){return`
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
  `}g.defaults.baseURL="https://your-energy.b.goit.study/api";g.defaults.headers.common["Content-Type"]="application/json";var p,te,T,se,d;class fe{constructor(){w(this,p);y(this,"totalPages",0);y(this,"currentPage",1);y(this,"limitPage",9);y(this,"filterType","Muscles");w(this,T,()=>{const s=window.innerWidth>=768?12:9;s!==this.limitPage&&(this.limitPage=s,this.currentPage=1)});w(this,d,t=>{var s,r;return console.error("API Error:",t),Promise.reject(((r=(s=t.response)==null?void 0:s.data)==null?void 0:r.message)||t.message||"An unexpected error occurred")});$(this,p,te).call(this),window.addEventListener("resize",m(this,T))}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(t){this.filterType=t,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const t=await g.get("/filters",{params:$(this,p,se).call(this)});return this.totalPages=t.data.totalPages,t.data}catch(t){return m(this,d).call(this,t)}}async getExercises(t={},s=1,r=10){try{const a={...t,page:s,limit:r};return(await g.get("/exercises",{params:a})).data}catch(a){return m(this,d).call(this,a)}}async getExerciseByCategory(t,s,r=1,a=10){try{const o={...t,...s,...r,limit:a};return(await g.get("/exercises",{params:o})).data}catch(o){return m(this,d).call(this,o)}}async getExerciseById(t){try{return(await g.get(`/exercises/${t}`)).data}catch(s){return m(this,d).call(this,s)}}async rateExercise(t,s,r,a=""){try{if(s<1||s>5)throw new Error("Rating must be between 1 and 5");return(await g.patch(`/exercises/${t}/rating`,{rate:s,email:r,review:a})).data}catch(o){return m(this,d).call(this,o)}}async getQuote(){try{return(await g.get("/quote")).data}catch(t){return m(this,d).call(this,t)}}async subscribe(t){try{return await g.post("/subscription",{email:t})}catch(s){return m(this,d).call(this,s)}}}p=new WeakSet,te=function(){const{matches:t}=window.matchMedia("(max-width: 767px)");this.limitPage=t?9:12},T=new WeakMap,se=function(){return{filter:this.filterType,page:this.currentPage,limit:this.limitPage}},d=new WeakMap;const i=new fe,D={form:document.querySelector(".footer-form")},pe=async e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),s=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!t){x.info({message:"Email is required",position:"topRight"});return}if(!s.test(t)){x.info({message:"Invalid email format",position:"topRight"});return}try{const r=await i.subscribe(t);if(r.status===201){x.success({message:r.data.message,position:"topRight"}),D.form.reset();return}}catch(r){x.error({message:r,position:"topRight"}),D.form.reset()}};D.form.addEventListener("submit",pe);const H=document.querySelector(".anchor-button");function ye(e=1e3){const t=window.scrollY,s=performance.now();function r(a){const o=a-s,c=Math.min(o/e,1),h=1-Math.pow(1-c,3);window.scrollTo(0,t*(1-h)),c<1&&requestAnimationFrame(r)}requestAnimationFrame(r)}window.addEventListener("scroll",()=>{window.scrollY>300?H.classList.add("show"):H.classList.remove("show")});H.addEventListener("click",e=>{e.preventDefault(),ye()});const S={FAVORITES:"favorites",UI_THEME:"ui-theme",LAST_SESSION:"last_session"},be=()=>{try{const e=localStorage.getItem(S.LAST_SESSION);return e?JSON.parse(e):null}catch(e){return console.error("Error parsing last session from localStorage:",e),null}},_=e=>{if(e){try{localStorage.setItem(S.LAST_SESSION,JSON.stringify(e))}catch{}console.error("Error setting last session to localStorage:",error)}},j=()=>{try{const e=localStorage.getItem(S.FAVORITES);return e?JSON.parse(e):[]}catch(e){return console.error("Error parsing favorites from localStorage:",e),[]}},E=e=>j().includes(e),Se=e=>{try{const t=j();t.includes(e)||(t.push(e),localStorage.setItem(S.FAVORITES,JSON.stringify(t)))}catch(t){console.error("Error adding favorite:",t)}},re=e=>{try{const s=j().filter(r=>r!==e);localStorage.setItem(S.FAVORITES,JSON.stringify(s))}catch(t){console.error("Error removing favorite:",t)}},Le=e=>E(e)?(re(e),!1):(Se(e),!0),C="img/sprite.svg";function R(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function we(e){const t=Math.round(Math.max(0,Math.min(5,Number(e)||0))),s=Array(t).fill(`<svg class="full" width="18" height="18">
        <use href="/img/sprite.svg#icon-star"></use>
        </svg>`).join(""),r=Array(5-t).fill(`<svg class="empty" width="18" height="18">
        <use href="/img/sprite.svg#icon-star"></use>
        </svg>`).join("");return s+r}const v={exerciseCard({filter:e,name:t,imgURL:s}){return`<li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${s});'>
              <div class="exercises-wrap-info">
                <p>${(a=>a?a.split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()).join(" "):"")(t)}</p>
                <p>${e}</p>
              </div>
            </div>
          </li>`},itemPagination(e){return`<button class="pagination-item" type="button">
          ${e}
        </button>`},quote(e,t){return`<p class="quote-card-text">
             ${t}
            </p>
            <p class="quote-card-author">${e}</p>`},skeletonExMarkup(e=i.limitPage){return Array.from({length:e}).map(()=>`
      <li class="exercises-item is-skeleton">
        <div class="exercises-background-img skeleton-bg"></div>
        <div class="exercises-wrap-info skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
        </div>
      </li>`).join("")},favoriteCard({_id:e,name:t,burnedCalories:s,time:r,bodyPart:a,target:o}){return`
      <li class="favorites-item" data-id=${e}>
        <div class="card-header">
          <div class="card-badge">WORKOUT</div>
          
           ${E(e)?`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${e}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="${C}#icon-trash"></use>
                 </svg>
               </button>`:""}
          
          <button class="card-btn-start js-start-btn" data-id="${e}" data-open-overlay="exercise" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${C}#icon-arrow-right"></use>
              </svg>
          </button>
        </div>
  
        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${C}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${R(t)}</h3>
        </div>
  
        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${s} / ${r} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${R(a)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${R(o)}</span>
          </li>
        </ul>
      </li>
    `},exerciseModal({_id:e,name:t,rating:s,gifUrl:r,target:a,bodyPart:o,equipment:c,popularity:h,burnedCalories:f,description:B,time:L}){const ce=we(s);return`
      <div class="modal-exercises">
        <div class="modal-img-wrapper">
            <img class="modal-img" src="${r}" alt="${t}" />
        </div>
        <div class="modal-details">
            <p class="modal-title">${t}</p>
            <div class="modal-rating">
                <div class="modal-rating-value">${s}</div>
                <div class="modal-rating-stars">${ce}</div>
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
                        <div class="info-grid-value">${c}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Popular</div>
                        <div class="info-grid-value">${h}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Burned calories</div>
                        <div class="info-grid-value">${f} / ${L}</div>
                    </div>
                </div>
            </div>

            <p class="modal-description">${B}</p>

            <div class="modal-btn-wrapper">
                <button type="button" class="modal-btn" data-btn-favorites>
                  ${E(e)?"Remove from favorites":"Add to favorites"}
                    <svg class="modal-btn-icon" width="18" height="18">
                      <use href="img/sprite.svg#${E(e)?"icon-trash":"icon-heart"}"  data-fav-icon></use>
                    </svg>
                
                <button type="button" class="modal-btn-rating" data-btn-rating>
                  Give a rating
                </button>
            </div>  
        </div>
      </div>`}},n={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body")};let A=i.limitPage,F=i.limitPage,I=!1;const O=n.btnBox.querySelector(".exercises-thumb-indicator"),xe=async()=>{if(z(),i.limitPage!==F&&!I){I=!0;try{F=i.limitPage,A=F,await Q({updatePagination:!0})}finally{I=!1}}},z=()=>{const e=n.btnBox.querySelector("button.active");if(!e||!O)return;const t=n.btnBox.getBoundingClientRect(),s=e.getBoundingClientRect(),r=s.left-t.left,a=s.width;O.style.transform=`translateX(${r}px)`,O.style.width=`${a}px`},Ee=()=>{n.listEx.innerHTML=v.skeletonExMarkup(A)},ae=e=>{const t=[];for(let s=1;s<=e;s++)t.push(v.itemPagination(s));n.paginationBox.innerHTML=t.join("")},oe=e=>{const t=[...n.paginationBox.children];if(!t.length)return;t.forEach(r=>r.classList.remove("pagination-item-active"));const s=e-1;s>=0&&s<t.length&&t[s].classList.add("pagination-item-active")},ie=e=>{e.stopPropagation();const t=e.currentTarget.dataset.id;re(t),e.currentTarget.remove();const s=document.querySelector(".modal-exercises");if(s){const r=s.querySelector("[data-btn-favorites]");if(r){r.textContent="Add to favorites",r.classList.remove("active");const a=r.querySelector("use");a&&a.setAttribute("href","img/sprite.svg#icon-heart")}}},qe=async e=>{const t=e.currentTarget.dataset.id,s=await i.getExerciseById(t);G("exercise",v.exerciseModal(s)),X("exercise");const r=document.querySelector("[data-btn-favorites]"),a=document.querySelector("[data-btn-rating]");r.addEventListener("click",()=>{const o=s._id,c=Le(o),h=r.querySelector("[data-fav-icon]");if(c){r.textContent="Remove from favorites",r.appendChild(h.closest("svg")),h.setAttribute("href","img/sprite.svg#icon-trash");const f=document.querySelector(`.favorites-item[data-id="${o}"] [data-open-overlay]`),B=`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${o}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="img/sprite.svg#icon-trash"></use>
                 </svg>
               </button>`;f.insertAdjacentHTML("beforebegin",B);const L=document.querySelector(`[data-btn-remove-favorites][data-id="${o}"]`);L&&L.addEventListener("click",ie)}else{r.textContent="Add to favorites",r.appendChild(h.closest("svg")),h.setAttribute("href","img/sprite.svg#icon-heart");const f=document.querySelector(`[data-btn-remove-favorites][data-id="${o}"]`);f&&f.remove()}}),a.addEventListener("click",()=>{console.log("click rating")})},Pe=async e=>{const t=await i.getExerciseByCategory(i.filterType,e.currentTarget.dataset.name);n.listEx.classList.add("body-parts-list");const s=t.results.map(r=>v.favoriteCard(r));n.listEx.innerHTML=s.join(""),Te()},Te=()=>{const e=document.querySelectorAll(".card-btn-start"),t=document.querySelectorAll("[data-btn-remove-favorites]");e.forEach(s=>s.addEventListener("click",qe)),t.forEach(s=>s.addEventListener("click",ie))},Ae=()=>{document.querySelectorAll(".exercises-item").forEach(t=>t.addEventListener("click",Pe))},ne=e=>{const t=e.results.map(s=>v.exerciseCard(s));n.listEx.innerHTML=t.join(""),Ae(),A=Math.max(t.length,i.limitPage)},Be=e=>{const s=Date.now()-e,r=24*60*60*1e3;return s>=r},$e=async()=>{try{const e=be();if(e){const{author:t,quote:s,time:r}=e;if(Be(r)){const o=await i.getQuote(),c=v.quote(o.author,o.quote);n.quoteBody.innerHTML=c,_({author:o.author,quote:o.quote,time:Date.now()})}else{const o=v.quote(t,s);n.quoteBody.innerHTML=o}}else{const t=await i.getQuote(),s=v.quote(t.author,t.quote);n.quoteBody.innerHTML=s,_({author:t.author,quote:t.quote,time:Date.now()})}}catch{const r=v.quote("Tom Brady","A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.");n.quoteBody.innerHTML=r}},Q=async({updatePagination:e=!1}={})=>{Ee();const t=await i.getDataByFilter();ne(t),e&&ae(i.totalPages),oe(i.currentPage)},ke=async()=>{try{$e();const e=await i.getDataByFilter();n.btnBox.children[0]&&(n.btnBox.children[0].classList.add("active"),requestAnimationFrame(z)),ne(e),ae(i.totalPages),oe(i.currentPage)}catch(e){console.log("🚀 ~ error:",e)}},Me=async e=>{try{const t=e.target.closest("button");if(!t)return;const s=t.dataset.type;if(!s)return;i.changeSearchType(s),A=i.limitPage,[...e.currentTarget.children].forEach(r=>r.classList.remove("active")),t.classList.add("active"),requestAnimationFrame(z),await Q({updatePagination:!0})}catch(t){console.log("🚀 ~ error:",t)}},Ce=async e=>{try{const t=e.target.closest("button");if(!t)return;const s=Number(t.textContent.trim());if(!Number.isFinite(s)||s===i.currentPage)return;i.currentPage=s,await Q()}catch(t){console.log("🚀 ~ error:",t)}};ke();console.log("start");window.addEventListener("resize",xe);n.btnBox.addEventListener("click",Me);n.paginationBox.addEventListener("click",Ce);export{v as T,i as d,j as g,re as r};
//# sourceMappingURL=main-BrGyTA9i.js.map
