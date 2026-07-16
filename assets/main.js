function openPopup(){document.getElementById('overlay').classList.add('open');document.body.style.overflow='hidden';}
function closePopup(){document.getElementById('overlay').classList.remove('open');document.body.style.overflow='';}
function handleOverlay(e){if(e.target===document.getElementById('overlay'))closePopup();}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closePopup();});

function toggleFaq(btn){
  var item=btn.closest('.faq-item');
  var isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');});
  if(!isOpen)item.classList.add('open');
}

function toggleNavMobile(){
  document.querySelector('.nav-links').classList.toggle('mobile-open');
}

function showDay(n,btn){
  document.querySelectorAll('.d-tab').forEach(function(t){t.classList.remove('active');});
  document.querySelectorAll('.d-panel').forEach(function(p){p.classList.remove('active');});
  btn.classList.add('active');
  document.getElementById('day-'+n).classList.add('active');
}
function switchDay(n){
  var tabs=document.querySelectorAll('.d-tab');
  showDay(n,tabs[n-1]);
  document.querySelector('.day-tabs').scrollIntoView({behavior:'smooth',block:'start'});
}

function loadPartial(id,url){
  var el=document.getElementById(id);
  if(!el)return Promise.resolve();
  return fetch(url).then(function(r){return r.text();}).then(function(html){el.innerHTML=html;});
}

document.addEventListener('DOMContentLoaded',function(){
  Promise.all([
    loadPartial('site-nav','/assets/partials/nav.html'),
    loadPartial('site-footer','/assets/partials/footer.html'),
    loadPartial('site-popup','/assets/partials/popup.html')
  ]).then(function(){
    var path=location.pathname;
    document.querySelectorAll('.nav-link[data-path]').forEach(function(link){
      if(path.indexOf(link.getAttribute('data-path'))===0)link.classList.add('active');
    });
    document.querySelectorAll('.nav-item > .nav-link').forEach(function(link){
      if(!link.nextElementSibling || !link.nextElementSibling.classList.contains('nav-drop'))return;
      link.addEventListener('click',function(e){
        if(window.matchMedia('(max-width:900px)').matches){
          e.preventDefault();
          var item=link.parentElement;
          var wasOpen=item.classList.contains('open');
          document.querySelectorAll('.nav-item.open').forEach(function(i){i.classList.remove('open');});
          if(!wasOpen)item.classList.add('open');
        }
      });
    });
    Cal.ns["15min"]("inline", {
      elementOrSelector:"#my-cal-inline-15min",
      config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
      calLink: "isabelleh/15min",
    });
    Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  });

  document.querySelectorAll('.rv').forEach(function(el){obs.observe(el);});
});

var obs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target);}});
},{threshold:.1});

(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.eu/embed/embed.js", "init");
Cal("init", "15min", {origin:"https://app.cal.eu"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;
