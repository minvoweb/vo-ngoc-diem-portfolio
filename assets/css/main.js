(function(){var b=document.getElementById('burger'),m=document.getElementById('menu');
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});})();
(function(){var l=[].slice.call(document.querySelectorAll('#menu a')),s=l.map(function(a){return document.querySelector(a.getAttribute('href'))});
function spy(){var y=window.scrollY+120,c=0;s.forEach(function(e,i){if(e&&e.offsetTop<=y)c=i});l.forEach(function(a,i){if(i===c)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})}
window.addEventListener('scroll',spy,{passive:true});spy();})();

/* ẩn khung ảnh khi ảnh chưa có / bị lỗi, tránh hiện icon ảnh vỡ */
(function(){
  function check(img){
    var f=img.closest('.frame'); if(!f) return;
    f.classList.add('noimg');
    var ph=f.parentElement, ti=f.closest('.ti');
    if(ti && ph && ph.classList.contains('ph') && !ph.querySelector('.frame:not(.noimg)')) ti.classList.add('noimg');
  }
  function ok(img){var f=img.closest('.frame'); if(f) f.classList.remove('noimg')}
  [].forEach.call(document.querySelectorAll('.frame img'),function(img){
    img.addEventListener('error',function(){check(img)});
    if(img.complete && img.naturalWidth===0) check(img);
  });
})();
