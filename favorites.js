import"./assets/main-CJUcoqBU.js";import"./assets/vendor-2s9xPmg-.js";const h="https://your-energy.b.goit.study/api",l="favorites",o="./img/sprite.svg",e={quoteText:document.querySelector(".js-quote-text"),quoteAuthor:document.querySelector(".js-quote-author"),listContainer:document.querySelector(".js-favorites-list"),emptyMessage:document.querySelector(".js-favorites-empty")};document.addEventListener("DOMContentLoaded",()=>{g(),u()});async function g(){if(e.quoteText)try{const t=await fetch(`${h}/quote`);if(!t.ok)throw new Error("Failed to fetch quote");const{author:s,quote:n}=await t.json();e.quoteText.textContent=n,e.quoteAuthor.textContent=s}catch(t){console.error("Error getting quote:",t),e.quoteText.textContent="Your body can stand almost anything. It’s your mind that you have to convince.",e.quoteAuthor.textContent="Unknown"}}function d(){try{const t=localStorage.getItem(l);return t?JSON.parse(t):[]}catch(t){return console.error("Error parsing localStorage:",t),[]}}function u(){if(!e.listContainer)return;const t=d();t.length===0?(e.listContainer.innerHTML="",e.emptyMessage.classList.remove("is-hidden")):(e.emptyMessage.classList.add("is-hidden"),e.listContainer.innerHTML=p(t),v())}function p(t){return t.map(({_id:s,name:n,burnedCalories:c,time:a,bodyPart:r,target:f})=>`
      <li class="favorites-item">
        <div class="card-header">
          <div class="card-badge">WORKOUT</div>
          
          <button class="card-btn-delete js-delete-btn" data-id="${s}" type="button" aria-label="Remove">
            <svg class="card-icon-trash" width="16" height="16">
              <use href="${o}#icon-trash"></use>
            </svg>
          </button>
          
          <button class="card-btn-start js-start-btn" data-id="${s}" type="button">
              Start
              <svg class="card-icon-arrow" width="16" height="16">
                  <use href="${o}#icon-arrow-right"></use>
              </svg>
          </button>
        </div>
  
        <div class="card-title-wrapper">
          <div class="card-icon-run-bg">
              <svg class="card-icon-run" width="14" height="16">
                  <use href="${o}#icon-running-stick-figure"></use>
              </svg>
          </div>
          <h3 class="card-title">${i(n)}</h3>
        </div>
  
        <ul class="card-info-list">
          <li class="card-info-item">
              <span class="info-label">Burned calories:</span>
              <span class="info-value">${c} / ${a} min</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Body part:</span>
              <span class="info-value">${i(r)}</span>
          </li>
          <li class="card-info-item">
              <span class="info-label">Target:</span>
              <span class="info-value">${i(f)}</span>
          </li>
        </ul>
      </li>
    `).join("")}function i(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function v(){const t=e.listContainer.querySelectorAll(".js-delete-btn"),s=e.listContainer.querySelectorAll(".js-start-btn");t.forEach(n=>{n.addEventListener("click",m)}),s.forEach(n=>{n.addEventListener("click",b)})}function m(t){const n=t.currentTarget.dataset.id,a=d().filter(r=>r._id!==n);localStorage.setItem(l,JSON.stringify(a)),u()}function b(t){const n=t.currentTarget.dataset.id;console.log(`Open modal for exercise ID: ${n}`)}
//# sourceMappingURL=favorites.js.map
