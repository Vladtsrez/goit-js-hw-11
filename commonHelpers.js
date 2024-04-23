import{S as p,i}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s){const a="43518191-3e4362bb1fc47484118bdfa22",r="https://pixabay.com/api/",n=new URLSearchParams({key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${n}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m(s){return s.hits.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:o,comments:d,downloads:u})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${n}">
                    <img src="${r}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${t}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${o}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${d}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${u}</span>
                </div>
            </div>
        </li>`).join("")}const l=document.querySelector(".loader"),y=document.getElementById("searchForm"),c=document.querySelector(".gallery"),g=new p(".card .place-for-image a",{captions:!0,captionsData:"alt",captionDelay:250});function h(s){l.style.display=s}l.style.display="none";y.addEventListener("submit",v);async function v(s){s.preventDefault(),c.innerHTML="";const a=s.currentTarget.elements.searchInput.value;f(a).then(r=>{if(r.total==0)return i.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"}),0;c.insertAdjacentHTML("beforeend",m(r)),g.refresh(),s.target.reset()}).catch(r=>{i.warning({title:"Caution",message:r})}).finally(()=>{h("none")})}
//# sourceMappingURL=commonHelpers.js.map
