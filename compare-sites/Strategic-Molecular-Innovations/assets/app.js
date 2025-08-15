
document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav');const menu=document.querySelector('.menu');
  if(menu){menu.addEventListener('click',()=>nav.classList.toggle('show'));}
  const toggle=document.querySelector('.toggle');
  if(toggle){toggle.addEventListener('click',()=>{const t=document.documentElement.dataset.theme!=='light'?'light':'dark';document.documentElement.dataset.theme=t;localStorage.setItem('theme',t);});const saved=localStorage.getItem('theme');if(saved){document.documentElement.dataset.theme=saved;}}
});
