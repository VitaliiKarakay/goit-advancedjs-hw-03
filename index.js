import{d as l,a as u,S as d,i as a}from"./assets/vendor-BqAj4S4c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();var f={};l.config();const p=f.API_KEY,y="https://pixabay.com/api/",m="photo",g="horizontal",h=!0;async function E(s){try{return(await u.get(y,{params:{key:p,q:s,image_type:m,orientation:g,safesearch:h}})).data}catch(r){return console.error("Error fetching images:",r),{hits:[]}}}function L(s){const r=document.querySelector(".gallery");r.innerHTML=s.map(t=>`
        <a href="${t.largeImageURL}" class="gallery-item">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
            <div class="info">
                <p>👍 ${t.likes}</p>
                <p>👁 ${t.views}</p>
                <p>💬 ${t.comments}</p>
                <p>⬇️ ${t.downloads}</p>
            </div>
        </a>
    `).join(""),new d(".gallery a").refresh()}const S=document.querySelector("#search-form"),b=document.querySelector(".gallery"),c=document.querySelector(".loader");S.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.search.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query!"});return}c.style.display="block",b.innerHTML="",await new Promise(t=>setTimeout(t,350));const n=await E(r);c.style.display="none",n.hits.length===0?a.warning({title:"No Results",message:"Sorry, no images found!",position:"center"}):L(n.hits)});
//# sourceMappingURL=index.js.map
