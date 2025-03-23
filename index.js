import{a as l,S as u,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const d="",f="https://pixabay.com/api/",p="photo",y="horizontal",m=!0;async function g(s){try{return(await l.get(f,{params:{key:d,q:s,image_type:p,orientation:y,safesearch:m}})).data}catch(r){return console.error("Error fetching images:",r),{hits:[]}}}function h(s){const r=document.querySelector(".gallery");r.innerHTML=s.map(t=>`
        <a href="${t.largeImageURL}" class="gallery-item">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
            <div class="info">
                <p>👍 ${t.likes}</p>
                <p>👁 ${t.views}</p>
                <p>💬 ${t.comments}</p>
                <p>⬇️ ${t.downloads}</p>
            </div>
        </a>
    `).join(""),new u(".gallery a").refresh()}const L=document.querySelector("#search-form"),E=document.querySelector(".gallery"),c=document.querySelector(".loader");L.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.search.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query!"});return}c.style.display="block",E.innerHTML="",await new Promise(t=>setTimeout(t,350));const n=await g(r);c.style.display="none",n.hits.length===0?a.warning({title:"No Results",message:"Sorry, no images found!",position:"center"}):h(n.hits)});
//# sourceMappingURL=index.js.map
