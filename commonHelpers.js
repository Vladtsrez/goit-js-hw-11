import{i,S as d}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="43518191-3e4362bb1fc47484118bdfa22";async function m(r){const a=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(a)).json()).hits}catch(o){throw console.error("Error",o),o}}function p(r){const a=document.querySelector("ul.gallery"),o=document.createElement("li");o.classList.add("gallery-item");const n=document.createElement("a");n.classList.add("gallery-link"),n.href=r.largeImageURL;const e=document.createElement("img");e.src=r.webformatURL,e.alt=r.tags;const t=document.createElement("div");t.classList.add("image-info"),t.innerHTML=`
      <p>Likes: ${r.likes}</p>
      <p>Views: ${r.views}</p>
      <p>Comments: ${r.comments}</p>
      <p>Downloads: ${r.downloads}</p>
  `,n.appendChild(e),n.appendChild(t),o.appendChild(n),a.appendChild(o)}const c=document.querySelector(".loader"),y=document.getElementById("searchForm"),f=document.querySelector(".gallery");let g;function l(r){c.style.display=r}c.style.display="none";y.addEventListener("submit",async r=>{r.preventDefault();const a=document.getElementById("searchInput").value.trim();if(a===""){i.warning({title:"Caution",message:"Please enter a search query."});return}l("block");try{const o=await m(a);if(f.innerHTML="",o.length===0)i.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"});else if(o.forEach(n=>{p(n)}),!g){const n=new d(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250})}}catch(o){console.error("Error",o)}finally{l("none")}});
//# sourceMappingURL=commonHelpers.js.map