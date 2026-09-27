const games = [
  {
    name: "Resident Evil 4",
    genre: "Action / Horror",
    guides: 12,
    store: "https://store.steampowered.com/"
  },
  {
    name: "Metro Exodus",
    genre: "Shooter",
    guides: 9,
    store: "https://store.steampowered.com/"
  },
  {
    name: "Red Dead Redemption 2",
    genre: "Action / Open World",
    guides: 15,
    store: "https://store.steampowered.com/"
  },
  {
    name: "Counter-Strike 2",
    genre: "Shooter",
    guides: 21,
    store: "https://store.steampowered.com/"
  }
];

const guides = [
  {
    game: "Resident Evil 4",
    title: "Решение головоломки в церкви",
    text: "Пошаговое объяснение решения без лишних спойлеров."
  },
  {
    game: "Metro Exodus",
    title: "Как найти рюкзак и дополнительные предметы",
    text: "Полезные места и советы для прохождения."
  },
  {
    game: "Red Dead Redemption 2",
    title: "10 полезных советов для новичков",
    text: "Что стоит знать перед началом прохождения."
  },
  {
    game: "Counter-Strike 2",
    title: "Основные настройки для новичка",
    text: "Базовые настройки управления и игры."
  }
];

function renderGames(list = games) {
  const grid = document.getElementById("gameGrid");

  if (!list.length) {
    grid.innerHTML = "<p>Ничего не найдено.</p>";
    return;
  }

  grid.innerHTML = list.map(game => `
    <article class="game-card">
      <div class="game-cover">${game.name}</div>
      <div class="game-info">
        <strong>${game.name}</strong>
        <p>${game.genre} · ${game.guides} гайдов</p>
        <a class="store-btn" href="${game.store}" target="_blank" rel="noopener">
          Купить / посмотреть
        </a>
      </div>
    </article>
  `).join("");
}

function renderGuides(list = guides) {
  const box = document.getElementById("guideList");

  box.innerHTML = list.map(guide => `
    <article class="guide-card">
      <div class="game-name">${guide.game}</div>
      <h3>${guide.title}</h3>
      <p>${guide.text}</p>
    </article>
  `).join("");
}

function searchSite() {
  const query = document.getElementById("search").value.trim().toLowerCase();

  if (!query) {
    renderGames();
    renderGuides();
    return;
  }

  const filteredGames = games.filter(game =>
    `${game.name} ${game.genre}`.toLowerCase().includes(query)
  );

  const filteredGuides = guides.filter(guide =>
    `${guide.game} ${guide.title} ${guide.text}`.toLowerCase().includes(query)
  );

  renderGames(filteredGames);
  renderGuides(filteredGuides);
}

document.getElementById("searchBtn").addEventListener("click", searchSite);

document.getElementById("search").addEventListener("keydown", event => {
  if (event.key === "Enter") searchSite();
});

renderGames();
renderGuides();
