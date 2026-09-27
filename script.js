const games=[
{title:"Resident Evil 4",genre:"Horror / Action",img:"https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg"},
{title:"Metro Exodus",genre:"Shooter / Story",img:"https://cdn.akamai.steamstatic.com/steam/apps/412020/header.jpg"},
{title:"Red Dead Redemption 2",genre:"Action / Open World",img:"https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg"},
{title:"Counter-Strike 2",genre:"FPS / Multiplayer",img:"https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg"}];
const guides=[
{title:"Resident Evil 4 — решение загадки церкви",game:"Resident Evil 4",icon:"🧩"},
{title:"Metro Exodus — как открыть рюкзак и улучшения",game:"Metro Exodus",icon:"🎒"},
{title:"Red Dead Redemption 2 — полезные советы новичкам",game:"Red Dead Redemption 2",icon:"🤠"},
{title:"CS2 — базовые настройки для игры",game:"Counter-Strike 2",icon:"🎯"}];
const gg=document.querySelector("#gamesGrid"),gl=document.querySelector("#guidesList"),q=document.querySelector("#search"),count=document.querySelector("#count");
function render(gs=games,rs=guides){count.textContent=gs.length+" "+(gs.length==1?"игра":"игры");
gg.innerHTML=gs.length?gs.map(g=>`<article class="card"><div class="cover" style="background-image:url('${g.img}')"></div><div class="info"><span class="tag">GUIDE</span><h3>${g.title}</h3><p>${g.genre}</p></div></article>`).join(""):"<p>Ничего не найдено.</p>";
gl.innerHTML=rs.map(g=>`<article class="guide"><div class="icon">${g.icon}</div><div><h3>${g.title}</h3><p>${g.game}</p></div><span class="arrow">→</span></article>`).join("")}
q.addEventListener("input",()=>{let x=q.value.toLowerCase();render(games.filter(g=>(g.title+" "+g.genre).toLowerCase().includes(x)),guides.filter(g=>(g.title+" "+g.game).toLowerCase().includes(x)))});
render();