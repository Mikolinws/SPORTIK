const track = document.getElementById('coachTrack');
const prev = document.getElementById('prevCoach');
const next = document.getElementById('nextCoach');
function slideSize(){const card=track.querySelector('.coach-card');return card ? card.getBoundingClientRect().width + 14 : 300}
prev.addEventListener('click',()=>track.scrollBy({left:-slideSize(),behavior:'smooth'}));
next.addEventListener('click',()=>track.scrollBy({left:slideSize(),behavior:'smooth'}));
const menuBtn=document.getElementById('menuBtn'), navlinks=document.getElementById('navlinks');
menuBtn.addEventListener('click',()=>{const open=navlinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'✕':'☰'});
navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navlinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));