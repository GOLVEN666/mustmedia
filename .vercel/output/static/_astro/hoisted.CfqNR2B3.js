import"./hoisted.DPfZXjeO.js";function r(){const i=document.querySelectorAll(".filter-btn"),c=document.querySelectorAll(".case-study-item"),l=localStorage.getItem("activeFilter")||"All";i.forEach(t=>{t.getAttribute("data-filter")===l&&(t.classList.add("active"),t.setAttribute("data-active","true"))}),s(l),i.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-filter")||"All";localStorage.setItem("activeFilter",e),i.forEach(a=>{a.classList.remove("active"),a.setAttribute("data-active","false")}),t.classList.add("active"),t.setAttribute("data-active","true"),s(e)})});function s(t){c.forEach(e=>{const a=e.getAttribute("data-category");t==="All"||t===a?(e.style.display="block",e.setAttribute("data-visible","true")):(e.style.display="none",e.setAttribute("data-visible","false"))})}}r();document.addEventListener("astro:after-swap",r);
