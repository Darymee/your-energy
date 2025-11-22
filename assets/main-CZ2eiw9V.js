var ue=Object.defineProperty;var _=e=>{throw TypeError(e)};var me=(e,t,r)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var b=(e,t,r)=>me(e,typeof t!="symbol"?t+"":t,r),V=(e,t,r)=>t.has(e)||_("Cannot "+r);var m=(e,t,r)=>(V(e,t,"read from private field"),r?r.call(e):t.get(e)),P=(e,t,r)=>t.has(e)?_("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);var R=(e,t,r)=>(V(e,t,"access private method"),r);import{a as g,i as T}from"./vendor-pFq095uA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll("[data-menu] .nav-link")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.navLinks.forEach(r=>r.addEventListener("click",t));function t(){e.modal.classList.toggle("is-open")}})();let F=window.location.pathname.split("/").pop()||"index.html",Y=F===""||F==="index.html"?"home":F.replace(".html","");const $=document.querySelectorAll(".nav-link");$.forEach(e=>{e.dataset.page===Y&&(e.classList.add("is-active"),e.classList.add("is-current"))});const D=document.querySelector(".nav-list"),I=document.querySelector(".nav-indicator");function x(e){if(!I||!D||!e)return;const t=D.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-t.left;I.style.width=r.width+"px",I.style.transform=`translateX(${s}px)`}let l=document.querySelector(".nav-link.is-active")||$[0];x(l);$.forEach(e=>{e.addEventListener("mouseenter",()=>{x(e),e!==l?l.classList.remove("is-current"):l.classList.add("is-current")}),e.addEventListener("click",t=>{if(e===l){t.preventDefault();return}if(e.dataset.page===Y){t.preventDefault(),l=e,l.classList.add("is-current"),x(l);return}$.forEach(r=>r.classList.remove("is-active","is-current")),e.classList.add("is-active","is-current"),l=e})});D.addEventListener("mouseleave",()=>{x(l),l.classList.add("is-current")});window.addEventListener("resize",()=>{x(l)});const K=document.querySelector(".theme-switch .checkbox"),k=document.documentElement,ge=localStorage.getItem("theme"),ve=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,G=ge||(ve?"dark":"light");k.setAttribute("data-theme",G);K.checked=G==="dark";function fe(e){k.classList.add("theme-transition"),window.setTimeout(()=>{k.classList.remove("theme-transition")},400),e()}K.addEventListener("change",e=>{const t=e.target.checked?"dark":"light";fe(()=>{k.setAttribute("data-theme",t),localStorage.setItem("theme",t)})});const X={};let d=null,S=null,L=null;function Z(e,t){X[e]=t}function he(){d={modal:document.querySelector("[data-overlay]"),modalContent:document.querySelector("[data-overlay-content]")},document.querySelectorAll("[data-open-overlay]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.openOverlay;ee(t)})})}function ee(e){if(!d){console.warn("Modal system is not initialized");return}const t=X[e];if(!t)return console.warn(`No modal found for key: ${e}`);re(),d.modalContent.innerHTML=t,d.modal.classList.add("is-open"),document.body.style.overflow="hidden";const r=d.modal.querySelector("[data-close-overlay]");r&&(L=te,r.addEventListener("click",L)),S=pe,d.modal.addEventListener("click",S)}function te(){d&&(d.modalContent.innerHTML="",d.modal.classList.remove("is-open"),document.body.style.overflow="",re())}function re(){if(S&&(d.modal.removeEventListener("click",S),S=null),L){const e=d.modal.querySelector("[data-close-overlay]");e==null||e.removeEventListener("click",L),L=null}}function pe(e){e.target===d.modal&&te()}he();Z("rating",ye());function ye(){return`
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
  `}const j=document.querySelector(".anchor-button");function be(e=1e3){const t=window.scrollY,r=performance.now();function s(a){const o=a-r,c=Math.min(o/e,1),f=1-Math.pow(1-c,3);window.scrollTo(0,t*(1-f)),c<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}window.addEventListener("scroll",()=>{window.scrollY>300?j.classList.add("show"):j.classList.remove("show")});j.addEventListener("click",e=>{e.preventDefault(),be()});g.defaults.baseURL="https://your-energy.b.goit.study/api";g.defaults.headers.common["Content-Type"]="application/json";var y,se,A,ae,u;class Se{constructor(){P(this,y);b(this,"totalPages",0);b(this,"currentPage",1);b(this,"limitPage",9);b(this,"filterType","Muscles");P(this,A,()=>{const r=window.innerWidth>=768?12:9;r!==this.limitPage&&(this.limitPage=r,this.currentPage=1)});P(this,u,t=>{var r,s;return console.error("API Error:",t),Promise.reject(((s=(r=t.response)==null?void 0:r.data)==null?void 0:s.message)||t.message||"An unexpected error occurred")});R(this,y,se).call(this),window.addEventListener("resize",m(this,A))}incrementPage(){this.currentPage<this.totalPages&&(this.currentPage+=1)}decrementPage(){this.currentPage>1&&(this.currentPage-=1)}changeSearchType(t){this.filterType=t,this.currentPage=1}hasMorePages(){return this.currentPage<this.totalPages}async getDataByFilter(){try{const t=await g.get("/filters",{params:R(this,y,ae).call(this)});return this.totalPages=t.data.totalPages,t.data}catch(t){return m(this,u).call(this,t)}}async getExercises(t={},r=1,s=10){try{const a={...t,page:r,limit:s};return(await g.get("/exercises",{params:a})).data}catch(a){return m(this,u).call(this,a)}}async getExerciseByCategory(t,r,s=1,a=10){try{const o={...t,...r,...s,limit:a};return(await g.get("/exercises",{params:o})).data}catch(o){return m(this,u).call(this,o)}}async getExerciseById(t){try{return(await g.get(`/exercises/${t}`)).data}catch(r){return m(this,u).call(this,r)}}async rateExercise(t,r,s,a=""){try{if(r<1||r>5)throw new Error("Rating must be between 1 and 5");return(await g.patch(`/exercises/${t}/rating`,{rate:r,email:s,review:a})).data}catch(o){return m(this,u).call(this,o)}}async getQuote(){try{return(await g.get("/quote")).data}catch(t){return m(this,u).call(this,t)}}async subscribe(t){try{return await g.post("/subscription",{email:t})}catch(r){return m(this,u).call(this,r)}}}y=new WeakSet,se=function(){const{matches:t}=window.matchMedia("(max-width: 767px)");this.limitPage=t?9:12},A=new WeakMap,ae=function(){return{filter:this.filterType,page:this.currentPage,limit:this.limitPage}},u=new WeakMap;const n=new Se,z={form:document.querySelector(".footer-form")},Le=async e=>{e.preventDefault();const t=e.target.elements.email.value.trim(),r=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!t){T.info({message:"Email is required",position:"topRight"});return}if(!r.test(t)){T.info({message:"Invalid email format",position:"topRight"});return}try{const s=await n.subscribe(t);if(s.status===201){T.success({message:s.data.message,position:"topRight"}),z.form.reset();return}}catch(s){T.error({message:s,position:"topRight"}),z.form.reset()}};z.form.addEventListener("submit",Le);const E={FAVORITES:"favorites",UI_THEME:"ui-theme",LAST_SESSION:"last_session"},we=()=>{try{const e=localStorage.getItem(E.LAST_SESSION);return e?JSON.parse(e):null}catch(e){return console.error("Error parsing last session from localStorage:",e),null}},W=e=>{if(e){try{localStorage.setItem(E.LAST_SESSION,JSON.stringify(e))}catch{}console.error("Error setting last session to localStorage:",error)}},Q=()=>{try{const e=localStorage.getItem(E.FAVORITES);return e?JSON.parse(e):[]}catch(e){return console.error("Error parsing favorites from localStorage:",e),[]}},B=e=>Q().includes(e),xe=e=>{try{const t=Q();t.includes(e)||(t.push(e),localStorage.setItem(E.FAVORITES,JSON.stringify(t)))}catch(t){console.error("Error adding favorite:",t)}},oe=e=>{try{const r=Q().filter(s=>s!==e);localStorage.setItem(E.FAVORITES,JSON.stringify(r))}catch(t){console.error("Error removing favorite:",t)}},Ee=e=>B(e)?(oe(e),!1):(xe(e),!0),w="/your-energy/img/sprite.svg";function O(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function qe(e){const t=Math.round(Math.max(0,Math.min(5,Number(e)||0))),r=Array(t).fill(`<svg class="full" width="18" height="18">
        <use href="${w}#icon-star"></use>
        </svg>`).join(""),s=Array(5-t).fill(`<svg class="empty" width="18" height="18">
        <use href="${w}#icon-star"></use>
        </svg>`).join("");return r+s}const v={exerciseCard({filter:e,name:t,imgURL:r}){return`<li class='exercises-item'>
            <div class='exercises-background-img' style='background-image: url(${r});'>
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
            <p class="quote-card-author">${e}</p>`},skeletonExMarkup(e=n.limitPage){return Array.from({length:e}).map(()=>`
      <li class="exercises-item is-skeleton">
        <div class="exercises-background-img skeleton-bg"></div>
        <div class="exercises-wrap-info skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
        </div>
      </li>`).join("")},favoriteCard({_id:e,name:t,burnedCalories:r,time:s,bodyPart:a,target:o}){return`
      <li class="favorites-item" data-id=${e}>
        <div class="card-header">
          <div class="card-badge">WORKOUT</div>

           ${B(e)?`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${e}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="${w}#icon-trash"></use>
                 </svg>
               </button>`:""}

          <button class="card-btn-start js-start-btn" data-id="${e}" data-open-overlay="exercise" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${w}#icon-arrow-start"></use>
              </svg>
          </button>
        </div>

        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${w}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${O(t)}</h3>
        </div>

        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${r} / ${s} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${O(a)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${O(o)}</span>
          </li>
        </ul>
      </li>
    `},exerciseModal({_id:e,name:t,rating:r,gifUrl:s,target:a,bodyPart:o,equipment:c,popularity:f,burnedCalories:p,description:C,time:q}){const de=qe(r);return`
      <div class="modal-exercises">
        <div class="modal-img-wrapper">
            <img class="modal-img" src="${s}" alt="${t}" />
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
                        <div class="info-grid-value">${f}</div>
                    </div>
                    <div class="info-grid-item">
                        <div class="info-grid-label">Burned calories</div>
                        <div class="info-grid-value">${p} / ${q}</div>
                    </div>
                </div>
            </div>

            <p class="modal-description">${C}</p>

            <div class="modal-btn-wrapper">
                <button type="button" class="modal-btn" data-btn-favorites>
                  ${B(e)?"Remove from favorites":"Add to favorites"}
                    <svg class="modal-btn-icon" width="18" height="18">
                      <use href="img/sprite.svg#${B(e)?"icon-trash":"icon-heart"}"  data-fav-icon></use>
                    </svg>

                <button type="button" class="modal-btn-rating" data-btn-rating>
                  Give a rating
                </button>
            </div>
        </div>
      </div>`}},i={listEx:document.querySelector(".exercises-list"),btnBox:document.querySelector(".exercises-thumb-btn"),paginationBox:document.querySelector(".pagination"),quoteBody:document.querySelector(".quote-card-body")};let M=n.limitPage,H=n.limitPage,N=!1;const h=i.btnBox?i.btnBox.querySelector(".exercises-thumb-indicator"):null,Pe=async()=>{if(h&&(J(),n.limitPage!==H&&!N)){N=!0;try{H=n.limitPage,M=H,await U({updatePagination:!0})}finally{N=!1}}},J=()=>{if(!h)return;const e=i.btnBox.querySelector("button.active");if(!e||!h)return;const t=i.btnBox.getBoundingClientRect(),r=e.getBoundingClientRect(),s=r.left-t.left,a=r.width;h.style.transform=`translateX(${s}px)`,h.style.width=`${a}px`},Te=()=>{i.listEx.innerHTML=v.skeletonExMarkup(M)},ne=e=>{const t=[];for(let r=1;r<=e;r++)t.push(v.itemPagination(r));i.paginationBox.innerHTML=t.join("")},ie=e=>{const t=[...i.paginationBox.children];if(!t.length)return;t.forEach(s=>s.classList.remove("pagination-item-active"));const r=e-1;r>=0&&r<t.length&&t[r].classList.add("pagination-item-active")},ce=e=>{e.stopPropagation();const t=e.currentTarget.dataset.id;oe(t),e.currentTarget.remove();const r=document.querySelector(".modal-exercises");if(r){const s=r.querySelector("[data-btn-favorites]");if(s){s.textContent="Add to favorites",s.classList.remove("active");const a=s.querySelector("use");a&&a.setAttribute("href","img/sprite.svg#icon-heart")}}},Be=async e=>{const t=e.currentTarget.dataset.id,r=await n.getExerciseById(t);Z("exercise",v.exerciseModal(r)),ee("exercise");const s=document.querySelector("[data-btn-favorites]"),a=document.querySelector("[data-btn-rating]");s.addEventListener("click",()=>{const o=r._id,c=Ee(o),f=s.querySelector("[data-fav-icon]");if(c){s.textContent="Remove from favorites",s.appendChild(f.closest("svg")),f.setAttribute("href","img/sprite.svg#icon-trash");const p=document.querySelector(`.favorites-item[data-id="${o}"] [data-open-overlay]`),C=`<button
                 class="card-btn-delete js-delete-btn"
                 data-id="${o}"
                 data-btn-remove-favorites
                 type="button"
                 aria-label="Remove"
               >
                 <svg class="card-icon-trash" width="16" height="16">
                   <use href="img/sprite.svg#icon-trash"></use>
                 </svg>
               </button>`;p.insertAdjacentHTML("beforebegin",C);const q=document.querySelector(`[data-btn-remove-favorites][data-id="${o}"]`);q&&q.addEventListener("click",ce)}else{s.textContent="Add to favorites",s.appendChild(f.closest("svg")),f.setAttribute("href","img/sprite.svg#icon-heart");const p=document.querySelector(`[data-btn-remove-favorites][data-id="${o}"]`);p&&p.remove()}}),a.addEventListener("click",()=>{console.log("click rating")})},$e=async e=>{const t=await n.getExerciseByCategory(n.filterType,e.currentTarget.dataset.name);i.listEx.classList.add("body-parts-list");const r=t.results.map(s=>v.favoriteCard(s));i.listEx.innerHTML=r.join(""),ke()},ke=()=>{const e=document.querySelectorAll(".card-btn-start"),t=document.querySelectorAll("[data-btn-remove-favorites]");e.forEach(r=>r.addEventListener("click",Be)),t.forEach(r=>r.addEventListener("click",ce))},Ae=()=>{document.querySelectorAll(".exercises-item").forEach(t=>t.addEventListener("click",$e))},le=e=>{const t=e.results.map(r=>v.exerciseCard(r));i.listEx.innerHTML=t.join(""),Ae(),M=Math.max(t.length,n.limitPage)},Me=e=>{const r=Date.now()-e,s=24*60*60*1e3;return r>=s},Ce=async()=>{try{const e=we();if(e){const{author:t,quote:r,time:s}=e;if(Me(s)){const o=await n.getQuote(),c=v.quote(o.author,o.quote);i.quoteBody.innerHTML=c,W({author:o.author,quote:o.quote,time:Date.now()})}else{const o=v.quote(t,r);i.quoteBody.innerHTML=o}}else{const t=await n.getQuote(),r=v.quote(t.author,t.quote);i.quoteBody.innerHTML=r,W({author:t.author,quote:t.quote,time:Date.now()})}}catch{const s=v.quote("Tom Brady","A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.");if(!h)return;i.quoteBody.innerHTML=s}},U=async({updatePagination:e=!1}={})=>{Te();const t=await n.getDataByFilter();le(t),e&&ne(n.totalPages),ie(n.currentPage)},Re=async()=>{if(h)try{Ce();const e=await n.getDataByFilter();i.btnBox.children[0]&&(i.btnBox.children[0].classList.add("active"),requestAnimationFrame(J)),le(e),ne(n.totalPages),ie(n.currentPage)}catch(e){console.log("🚀 ~ error:",e)}},Fe=async e=>{try{const t=e.target.closest("button");if(!t)return;const r=t.dataset.type;if(!r)return;n.changeSearchType(r),M=n.limitPage,[...e.currentTarget.children].forEach(s=>s.classList.remove("active")),t.classList.add("active"),requestAnimationFrame(J),await U({updatePagination:!0})}catch(t){console.log("🚀 ~ error:",t)}},Ie=async e=>{try{const t=e.target.closest("button");if(!t)return;const r=Number(t.textContent.trim());if(!Number.isFinite(r)||r===n.currentPage)return;n.currentPage=r,await U()}catch(t){console.log("🚀 ~ error:",t)}};Re();i.btnBox&&(window.addEventListener("resize",Pe),i.btnBox.addEventListener("click",Fe));i.paginationBox&&i.paginationBox.addEventListener("click",Ie);export{v as T,n as d,Q as g,oe as r};
//# sourceMappingURL=main-CZ2eiw9V.js.map
