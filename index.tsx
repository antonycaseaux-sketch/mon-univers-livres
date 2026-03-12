<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mon Univers de Livres – Antony</title>
  <style>
    :root {
      --bg: #f7f3ee;
      --card: #ffffff;
      --text: #292524;
      --muted: #57534e;
      --line: #e7e5e4;
      --amber: #d97706;
      --amber-dark: #b45309;
      --amber-soft: #fef3c7;
      --blue: #3b82f6;
      --green: #10b981;
      --stone-dark: #1c1917;
      --stone-mid: #44403c;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    a {
      text-decoration: none;
    }

    .container {
      width: min(1120px, calc(100% - 32px));
      margin: 0 auto;
    }

    .hero {
      background: linear-gradient(135deg, #fff7ed 0%, #ffffff 45%, #ffedd5 100%);
      overflow: hidden;
    }

    .hero-inner {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 24px;
      align-items: center;
      padding: 24px 0 12px;
    }

    .eyebrow {
      display: inline-block;
      margin-bottom: 16px;
      padding: 10px 16px;
      border-radius: 999px;
      background: rgba(255,255,255,0.92);
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      color: #44403c;
      font-size: 14px;
    }

    h1 {
      margin: 0;
      font-size: clamp(40px, 6vw, 72px);
      line-height: 0.98;
      letter-spacing: -0.03em;
    }

    .hero-text {
      margin-top: 12px;
      max-width: 640px;
      font-size: 20px;
      color: #57534e;
    }

    .badges {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 16px;
    }

    .badge {
      padding: 10px 16px;
      border-radius: 999px;
      color: white;
      font-weight: 700;
      font-size: 14px;
      box-shadow: 0 6px 14px rgba(0,0,0,0.08);
    }

    .badge.blue { background: var(--blue); }
    .badge.amber { background: #f59e0b; }
    .badge.green { background: var(--green); }

    .hero-visual {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .hero-visual img {
      width: min(100%, 360px);
      height: auto;
      display: block;
      object-fit: contain;
    }

    .filters {
      padding: 16px 0 0;
    }

    .filter-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .filter-btn {
      border: none;
      cursor: pointer;
      border-radius: 999px;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 700;
      color: #b45309;
      background: var(--amber-soft);
      transition: 0.2s ease;
    }

    .filter-btn:hover {
      background: #fde68a;
    }

    .filter-btn.active {
      background: var(--amber);
      color: white;
    }

    .section-head {
      padding: 12px 0 0;
      margin-bottom: 20px;
    }

    .section-label {
      color: #b45309;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 13px;
      font-weight: 700;
      margin: 0 0 8px;
    }

    h2 {
      margin: 0;
      font-size: clamp(32px, 4vw, 46px);
      line-height: 1.1;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 28px;
      padding-bottom: 48px;
    }

    .card {
      background: var(--card);
      border-radius: 28px;
      overflow: hidden;
      box-shadow: 0 4px 14px rgba(0,0,0,0.04);
      border: 1px solid var(--line);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 28px rgba(0,0,0,0.08);
    }

    .card img {
      width: 100%;
      height: 290px;
      object-fit: cover;
      display: block;
    }

    .card-body {
      padding: 24px;
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .category {
      color: #b45309;
      font-size: 14px;
      margin: 0;
    }

    .best {
      background: #f59e0b;
      color: white;
      border-radius: 999px;
      padding: 6px 12px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      white-space: nowrap;
    }

    .card h3 {
      margin: 10px 0 0;
      font-size: 30px;
      line-height: 1.1;
    }

    .desc {
      margin: 16px 0 0;
      color: var(--muted);
      text-align: justify;
    }

    .btn {
      display: inline-flex;
      margin-top: 24px;
      padding: 12px 20px;
      border-radius: 18px;
      background: var(--amber);
      color: white;
      font-weight: 700;
      transition: background 0.2s ease;
    }

    .btn:hover {
      background: var(--amber-dark);
    }

    .about {
      background: white;
      padding: 48px 0;
    }

    .about-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      align-items: start;
    }

    .about-text {
      font-size: 20px;
      color: var(--muted);
      text-align: justify;
      margin: 0;
    }

    .amazon {
      padding: 48px 0;
    }

    .amazon-box {
      background: var(--stone-dark);
      color: white;
      border-radius: 32px;
      padding: 32px;
    }

    .amazon-inner {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 28px;
      align-items: center;
    }

    .amazon-label {
      color: #fcd34d;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 13px;
      font-weight: 700;
      margin: 0 0 8px;
    }

    .amazon-box h2 {
      margin-top: 0;
    }

    .amazon-box p {
      max-width: 640px;
      color: #d6d3d1;
      text-align: justify;
      margin: 16px 0 0;
    }

    .amazon-card {
      background: white;
      color: var(--text);
      border-radius: 24px;
      padding: 24px;
      text-align: center;
      box-shadow: 0 18px 26px rgba(0,0,0,0.18);
      min-width: 280px;
    }

    .amazon-card p {
      margin: 0 0 14px;
      color: #57534e;
      text-align: center;
    }

    .footer {
      border-top: 1px solid var(--line);
      padding: 24px 0 40px;
      color: #78716c;
      font-size: 14px;
    }

    .footer-inner {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
      align-items: center;
    }

    .footer-links {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .footer-links a {
      color: inherit;
    }

    .hidden {
      display: none !important;
    }

    @media (max-width: 960px) {
      .hero-inner,
      .about-inner,
      .amazon-inner,
      .grid {
        grid-template-columns: 1fr 1fr;
      }

      .hero-visual {
        justify-content: center;
      }

      .amazon-inner {
        grid-template-columns: 1fr;
      }

      .amazon-card {
        min-width: 0;
      }
    }

    @media (max-width: 720px) {
      .hero-inner,
      .about-inner,
      .grid {
        grid-template-columns: 1fr;
      }

      .card img {
        height: 320px;
      }

      .hero-visual {
        justify-content: center;
      }

      .hero-visual img {
        width: min(100%, 300px);
      }

      .about,
      .amazon {
        padding: 36px 0;
      }
    }
  </style>
</head>
<body>
  <header class="hero">
    <div class="container hero-inner">
      <div>
        <p class="eyebrow">Mon Univers de Livres – Antony</p>
        <h1>Bienvenue dans mon petit univers.</h1>
        <p class="hero-text">Des livres pour petits et grands, imaginés et écrits avec beaucoup d’amour et de passion. Bonne lecture.</p>
        <div class="badges">
          <span class="badge blue">Depuis 2023</span>
          <span class="badge amber">20+ livres</span>
          <span class="badge green">21 700+ lecteurs</span>
        </div>
      </div>
      <div class="hero-visual">
        <img src="https://i.imgur.com/av6zIw0.png" alt="Illustration auteur" />
      </div>
    </div>
  </header>

  <main>
    <section class="container filters" id="livres">
      <div class="filter-row" id="filters"></div>
      <div class="section-head">
        <p class="section-label">Catalogue</p>
        <h2>Mes livres</h2>
      </div>
      <div class="grid" id="booksGrid"></div>
    </section>

    <section class="about" id="a-propos">
      <div class="container about-inner">
        <div>
          <p class="section-label">À propos</p>
          <h2>Écrire des livres… écrire délivre.</h2>
        </div>
        <div>
          <p class="about-text">J’ai lancé cette nouvelle aventure en mars 2023, un peu par curiosité… et elle est vite devenue une vraie passion. Aujourd’hui, je m’éclate à imaginer et écrire des livres pour petits et grands, dans des univers très différents. Ce site est simplement un endroit pour découvrir mes créations et retrouver facilement mes ouvrages disponibles sur Amazon.</p>
        </div>
      </div>
    </section>

    <section class="amazon">
      <div class="container">
        <div class="amazon-box">
          <div class="amazon-inner">
            <div>
              <p class="amazon-label">Amazon</p>
              <h2>Retrouvez mes livres sur Amazon</h2>
              <p>Tous mes ouvrages sont disponibles sur Amazon. Vous pouvez y découvrir les livres, lire les avis des lecteurs et trouver celui qui vous correspond.</p>
            </div>
            <div class="amazon-card">
              <p>Découvrir tous mes livres</p>
              <a class="btn" href="https://www.amazon.fr" target="_blank" rel="noopener noreferrer">Voir mes livres sur Amazon →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-inner">
      <p>© 2026 Mon Univers de Livres – Antony. Tous droits réservés.</p>
      <div class="footer-links">
        <a href="#">Amazon</a>
        <a href="#">Instagram</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </footer>

  <script>
    const categories = ["Tous", "Enfants", "Ados", "Adultes", "Séniors"];

    const books = [
      {
        title: "Tu es un Footballeur Formidable",
        category: "Enfants",
        bestseller: true,
        description: "Pendant les vacances chez ses grands-parents, Raphaël retrouve un vieux ballon chargé de souvenirs. Quand ses parents lui annoncent un voyage au Brésil, il découvre une autre façon de jouer… et revient plus passionné que jamais.",
        cover: "https://m.media-amazon.com/images/I/71C4zL6ABXL._SY425_.jpg",
        amazon: "https://urlr.me/j5RJms"
      },
      {
        title: "Tu es un Basketteur Formidable",
        category: "Enfants",
        description: "Gabriel découvre le basket à l’école, mais il doute de lui. Lors de son voyage aux États-Unis, il rencontre Tony, un étudiant français passionné. Grâce à ses conseils et un match de NBA, Gabriel trouve enfin la confiance pour jouer avec passion.",
        cover: "https://m.media-amazon.com/images/I/71CnukJQC0L._AC_UL320_.jpg",
        amazon: "https://urlr.me/XTFNmV"
      },
      {
        title: "Tu es un Handballeur Formidable",
        category: "Enfants",
        description: "Depuis tout petit, Jules est fou de handball. Son voyage au Danemark, pays du hand, lui fait vivre un match grandiose ainsi qu’une rencontre inoubliable avec son idole. De retour en France, il entre sur le terrain avec des étoiles plein les yeux.",
        cover: "https://m.media-amazon.com/images/I/71+faQhTP2L._AC_UL320_.jpg",
        amazon: "https://urlr.me/DVt5hK"
      },
      {
        title: "Tu es un Rugbyman Formidable",
        category: "Enfants",
        description: "Adam, 9 ans, adore l’ambiance du rugby dans son petit village du sud-ouest. Lors d’un voyage en Nouvelle-Zélande, il découvre un pays où ce sport est roi. Il y vit une aventure marquante et apprend que le courage et la solidarité peuvent déplacer des montagnes.",
        cover: "https://m.media-amazon.com/images/I/71itTOlhfQL._AC_UL320_.jpg",
        amazon: "https://urlr.me/7MsCKG"
      },
      {
        title: "Tu es un Tennisman Formidable",
        category: "Enfants",
        description: "Nathan adore le tennis, mais il perd tous ses moyens en match. Pour son anniversaire, il part à Majorque, en Espagne, et visite l’académie de Nadal. Là-bas, une rencontre inattendue va réveiller sa motivation et changer son regard sur lui-même.",
        cover: "https://m.media-amazon.com/images/I/71nl0WWGRkL._AC_UL320_.jpg",
        amazon: "https://urlr.me/BMxeA3"
      },
      {
        title: "Tu es un Pongiste Formidable",
        category: "Enfants",
        description: "Félix découvre le tennis de table sur une vieille table derrière chez lui, avec son grand frère. Lors d’un voyage en Chine, il attire l’attention d’un vieil entraîneur plein de sagesse, qui lui enseigne l’art du rebond… et l’importance de garder son calme dans la défaite.",
        cover: "https://m.media-amazon.com/images/I/71tEgPXRurL._AC_UL320_.jpg",
        amazon: "https://urlr.me/XqRjD4"
      },
      {
        title: "Tu es un Judoka Formidable",
        category: "Enfants",
        description: "Kibo vit avec sa maman dans un petit village du centre de la France et pratique le judo avec passion. Lors d’un voyage au Japon, il découvre les racines de ce sport et rencontre un maître qui lui transmet bien plus qu’un simple enseignement.",
        cover: "https://m.media-amazon.com/images/I/71jlE7GveTL._AC_UL320_.jpg",
        amazon: "https://urlr.me/bqCpFm"
      },
      {
        title: "Tu es une Gymnaste Formidable",
        category: "Enfants",
        bestseller: true,
        description: "Jade pratique la gymnastique avec passion, mais elle veut tout faire parfaitement. Quand sa mère part en reportage en Roumanie, elle découvre un club local… et une rencontre inattendue va bouleverser sa vision du sport.",
        cover: "https://m.media-amazon.com/images/I/71DPe5xuhiL._AC_UL320_.jpg",
        amazon: "https://urlr.me/Yfbz2Z"
      },
      {
        title: "Tu es une Danseuse Formidable",
        category: "Enfants",
        description: "Louise danse depuis l’âge de 5 ans. Lors d’un voyage à Vienne avec son école, elle assiste à une représentation magique et rencontre une ancienne ballerine au bord du Danube. Un événement inattendu lui offrira une chance de briller.",
        cover: "https://m.media-amazon.com/images/I/71LcqBZ7W3L._AC_UL320_.jpg",
        amazon: "https://urlr.me/SnwceU"
      },
      {
        title: "Tu es une Cavalière Formidable",
        category: "Enfants",
        description: "Emma vit à la ferme avec son cheval Caramel, son complice de toujours. Lors d’un voyage en Angleterre, elle assiste à un spectacle équestre grandiose. Une rencontre inattendue va changer sa façon de monter et de comprendre son fidèle compagnon.",
        cover: "https://m.media-amazon.com/images/I/71+Ty2EMjdL._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "Raphaël et le Dino Perdu",
        category: "Enfants",
        description: "Raphaël part en mission pour aider Kaya, un bébé dinosaure qui s’est perdu dans la vallée. En explorant la jungle préhistorique, ils vont rencontrer différents dinosaures et vivre de grandes aventures. Grâce à son courage et à son sens de l’observation, Raphaël réussira-t-il à retrouver la maman du petit dinosaure ?",
        cover: "https://m.media-amazon.com/images/I/717MeGmk7SL._AC_UL320_.jpg",
        amazon: "https://urlr.me/HcJbxe"
      },
      {
        title: "Grandir et s'épanouir avec le TDAH",
        category: "Enfants",
        description: "Un livre illustré pour aider les enfants à mieux comprendre le TDAH et leurs émotions. À travers des histoires positives, ils apprendront à s’épanouir avec confiance. Parce qu'avec de la compréhension et de la bienveillance, chaque différence peut devenir une force.",
        cover: "https://m.media-amazon.com/images/I/71XegrIXT-L._SY425_.jpg",
        amazon: "https://urlr.me/QKfGrF"
      },
      {
        title: "Origami Débutants",
        category: "Enfants",
        description: "L’origami est une activité créative qui permet de découvrir l’art du pliage de papier. Grâce à des explications claires et des modèles variés, enfants et adultes peuvent apprendre pas à pas à réaliser leurs premières créations. Une activité ludique et relaxante pour développer la créativité, la patience et le plaisir de créer avec du papier.",
        cover: "https://m.media-amazon.com/images/I/61m8JVL2ElL._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "Moi Belle et Géniale",
        category: "Ados",
        description: "Un guide de développement personnel conçu pour renforcer la confiance en soi et révéler son potentiel. À travers réflexions, exercices et conseils accessibles, il invite à dépasser les doutes et s’affirmer pleinement. Une approche inspirante pour cultiver l’estime de soi et avancer avec confiance vers la meilleure version de soi-même.",
        cover: "https://m.media-amazon.com/images/I/61HGTxITwML._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "Tests de Personnalité Ados",
        category: "Ados",
        description: "Ce livre propose un voyage introspectif pour les adolescents afin de mieux comprendre leur personnalité. À travers des tests ludiques, des questions de réflexion et des exercices accessibles, il invite à explorer ses émotions et ses aspirations. Un guide stimulant pour apprendre à mieux se connaître et gagner en confiance.",
        cover: "https://m.media-amazon.com/images/I/71G-qZWCNeL._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "TOI vs MOI Spécial Couples",
        category: "Adultes",
        bestseller: true,
        description: "Des jeux et défis spécialement conçus pour les couples afin de partager des moments complices à deux. Quiz amusants, duels surprenants et petits défis pour rire ensemble et pimenter le quotidien. Une idée de cadeau originale pour renforcer la complicité et créer de beaux souvenirs à partager.",
        cover: "https://m.media-amazon.com/images/I/71zkIYj-oaL._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "Enquêtes Logiques",
        category: "Adultes",
        description: "A vos crayons pour résoudre des logigrammes ! Chaque énigme invite à analyser les indices, croiser les informations et répondre à une question. Idéal pour développer l’esprit logique et faire travailler les méninges, avec plusieurs jeux de réflexion bonus pour pimenter l’expérience.",
        cover: "https://m.media-amazon.com/images/I/710A53WMO6L._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "Jeux de Mémoire pour les Séniors",
        category: "Séniors",
        description: "Ce livre propose une variété de jeux de mémoire spécialement conçus pour les seniors afin de stimuler les capacités cognitives tout en s’amusant. Exercices variés, défis progressifs et activités ludiques permettent d’entretenir l’esprit et garder un cerveau actif au quotidien.",
        cover: "https://m.media-amazon.com/images/I/71i9G7wifkL._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "Le Livre des Super Mamies",
        category: "Séniors",
        description: "Parfaite idée cadeau plein de tendresse pour les mamies. À travers anecdotes, souvenirs, jeux et moments d’humour, il célèbre tout ce qui rend les grands-mères si spéciales. Un ouvrage chaleureux à offrir pour un anniversaire ou la fête des grands-mères.",
        cover: "https://m.media-amazon.com/images/I/71YVXSREpqL._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "50 Choses à faire pour une Retraite Heureuse",
        category: "Séniors",
        bestseller: true,
        description: "Ce livre est un cadeau idéal pour célébrer un départ à la retraite. À travers 50 activités amusantes et inspirantes, il invite à profiter pleinement de cette nouvelle étape de vie. Conseils et jeux pour stimuler l’esprit.",
        cover: "https://m.media-amazon.com/images/I/71jVILYi0JL._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "50 Idées Destinations pour les Retraités Voyageurs",
        category: "Séniors",
        description: "Une invitation à découvrir de nouveaux horizons pendant la retraite. À travers 50 destinations, il propose des conseils et pages ludiques pour imaginer ses prochaines escapades. Un cadeau original pour célébrer un départ à la retraite.",
        cover: "https://m.media-amazon.com/images/I/71uckQCX5QL._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "50 Idées Bien-être pour une Retraite en Forme",
        category: "Séniors",
        description: "Ce livre propose 50 idées bien-être pour profiter pleinement de la retraite et adopter de nouvelles habitudes positives. Relaxation, et activités apaisantes invitent à prendre soin de soi au quotidien. Un cadeau inspirant pour célébrer un départ à la retraite et aborder cette nouvelle étape avec sérénité et énergie.",
        cover: "https://m.media-amazon.com/images/I/71ZcJPMuZAL._AC_UL320_.jpg",
        amazon: "#"
      },
      {
        title: "50 Histoires Drôles pour une Retraite avec Humour",
        category: "Séniors",
        description: "Ce livre rassemble 50 histoires drôles et anecdotes légères pour célébrer la retraite avec humour et bonne humeur. Parfait pour offrir lors d’un départ d’un collègue, il propose des moments de lecture divertissants ainsi qu’un espace livre d’or pour laisser un souvenir ou un mot touchant.",
        cover: "https://m.media-amazon.com/images/I/71MTDd0nn1L._AC_UL320_.jpg",
        amazon: "#"
      }
    ];

    const filters = document.getElementById("filters");
    const booksGrid = document.getElementById("booksGrid");
    let activeCategory = "Tous";

    function createFilterButton(category) {
      const button = document.createElement("button");
      button.className = "filter-btn" + (category === activeCategory ? " active" : "");
      button.textContent = category;
      button.addEventListener("click", () => {
        activeCategory = category;
        renderFilters();
        renderBooks();
      });
      return button;
    }

    function renderFilters() {
      filters.innerHTML = "";
      categories.forEach((category) => {
        filters.appendChild(createFilterButton(category));
      });
    }

    function renderBooks() {
      booksGrid.innerHTML = "";
      const filtered = activeCategory === "Tous"
        ? books
        : books.filter((book) => book.category === activeCategory);

      filtered.forEach((book) => {
        const article = document.createElement("article");
        article.className = "card";

        article.innerHTML = `
          <img src="${book.cover}" alt="${book.title}">
          <div class="card-body">
            <div class="card-top">
              <p class="category">${book.category}</p>
              ${book.bestseller ? '<span class="best">Best Seller</span>' : ''}
            </div>
            <h3>${book.title}</h3>
            <p class="desc">${book.description}</p>
            <a class="btn" href="${book.amazon}" target="_blank" rel="noopener noreferrer">Voir sur Amazon</a>
          </div>
        `;

        booksGrid.appendChild(article);
      });
    }

    renderFilters();
    renderBooks();
  </script>
</body>
</html>

