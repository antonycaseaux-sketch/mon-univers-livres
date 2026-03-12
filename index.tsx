import { useMemo, useState } from "react";

type Book = {
  bestseller?: boolean;
  title: string;
  category: string;
  description: string;
  cover: string;
  amazon: string;
};

const categories = ["Tous", "Enfants", "Ados", "Adultes", "Séniors"] as const;

const books: Book[] = [
  {
    title: "Tu es un Footballeur Formidable",
    category: "Enfants",
    bestseller: true,
    description:
      "Pendant les vacances chez ses grands-parents, Raphaël retrouve un vieux ballon chargé de souvenirs. Quand ses parents lui annoncent un voyage au Brésil, il découvre une autre façon de jouer… et revient plus passionné que jamais.",
    cover: "https://m.media-amazon.com/images/I/71C4zL6ABXL._SY425_.jpg",
    amazon: "https://urlr.me/j5RJms",
  },
  {
    title: "Tu es un Basketteur Formidable",
    category: "Enfants",
    description:
      "Gabriel découvre le basket à l’école, mais il doute de lui. Lors de son voyage aux États-Unis, il rencontre Tony, un étudiant français passionné. Grâce à ses conseils et un match de NBA, Gabriel trouve enfin la confiance pour jouer avec passion.",
    cover: "https://m.media-amazon.com/images/I/71CnukJQC0L._AC_UL320_.jpg",
    amazon: "https://urlr.me/XTFNmV",
  },
  {
    title: "Tu es un Handballeur Formidable",
    category: "Enfants",
    description:
      "Depuis tout petit, Jules est fou de handball. Son voyage au Danemark, pays du hand, lui fait vivre un match grandiose ainsi qu’une rencontre inoubliable avec son idole. De retour en France, il entre sur le terrain avec des étoiles plein les yeux.",
    cover: "https://m.media-amazon.com/images/I/71+faQhTP2L._AC_UL320_.jpg",
    amazon: "https://urlr.me/DVt5hK",
  },
  {
    title: "Tu es un Rugbyman Formidable",
    category: "Enfants",
    description:
      "Adam, 9 ans, adore l’ambiance du rugby dans son petit village du sud-ouest. Lors d’un voyage en Nouvelle-Zélande, il découvre un pays où ce sport est roi. Il y vit une aventure marquante et apprend que le courage et la solidarité peuvent déplacer des montagnes.",
    cover: "https://m.media-amazon.com/images/I/71itTOlhfQL._AC_UL320_.jpg",
    amazon: "https://urlr.me/7MsCKG",
  },
  {
    title: "Tu es un Tennisman Formidable",
    category: "Enfants",
    description:
      "Nathan adore le tennis, mais il perd tous ses moyens en match. Pour son anniversaire, il part à Majorque, en Espagne, et visite l’académie de Nadal. Là-bas, une rencontre inattendue va réveiller sa motivation et changer son regard sur lui-même.",
    cover: "https://m.media-amazon.com/images/I/71nl0WWGRkL._AC_UL320_.jpg",
    amazon: "https://urlr.me/BMxeA3",
  },
  {
    title: "Tu es un Pongiste Formidable",
    category: "Enfants",
    description:
      "Félix découvre le tennis de table sur une vieille table derrière chez lui, avec son grand frère. Lors d’un voyage en Chine, il attire l’attention d’un vieil entraîneur plein de sagesse, qui lui enseigne l’art du rebond… et l’importance de garder son calme dans la défaite.",
    cover: "https://m.media-amazon.com/images/I/71tEgPXRurL._AC_UL320_.jpg",
    amazon: "https://urlr.me/XqRjD4",
  },
  {
    title: "Tu es un Judoka Formidable",
    category: "Enfants",
    description:
      "Kibo vit avec sa maman dans un petit village du centre de la France et pratique le judo avec passion. Lors d’un voyage au Japon, il découvre les racines de ce sport et rencontre un maître qui lui transmet bien plus qu’un simple enseignement.",
    cover: "https://m.media-amazon.com/images/I/71jlE7GveTL._AC_UL320_.jpg",
    amazon: "https://urlr.me/bqCpFm",
  },
  {
    title: "Tu es une Gymnaste Formidable",
    category: "Enfants",
    bestseller: true,
    description:
      "Jade pratique la gymnastique avec passion, mais elle veut tout faire parfaitement. Quand sa mère part en reportage en Roumanie, elle découvre un club local… et une rencontre inattendue va bouleverser sa vision du sport.",
    cover: "https://m.media-amazon.com/images/I/71DPe5xuhiL._AC_UL320_.jpg",
    amazon: "https://urlr.me/Yfbz2Z",
  },
  {
    title: "Tu es une Danseuse Formidable",
    category: "Enfants",
    description:
      "Louise danse depuis l’âge de 5 ans. Lors d’un voyage à Vienne avec son école, elle assiste à une représentation magique et rencontre une ancienne ballerine au bord du Danube. Un événement inattendu lui offrira une chance de briller.",
    cover: "https://m.media-amazon.com/images/I/71LcqBZ7W3L._AC_UL320_.jpg",
    amazon: "https://urlr.me/SnwceU",
  },
  {
    title: "Tu es une Cavalière Formidable",
    category: "Enfants",
    description:
      "Emma vit à la ferme avec son cheval Caramel, son complice de toujours. Lors d’un voyage en Angleterre, elle assiste à un spectacle équestre grandiose. Une rencontre inattendue va changer sa façon de monter et de comprendre son fidèle compagnon.",
    cover: "https://m.media-amazon.com/images/I/71+Ty2EMjdL._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "Raphaël et le Dino Perdu",
    category: "Enfants",
    description:
      "Raphaël part en mission pour aider Kaya, un bébé dinosaure qui s’est perdu dans la vallée. En explorant la jungle préhistorique, ils vont rencontrer différents dinosaures et vivre de grandes aventures. Grâce à son courage et à son sens de l’observation, Raphaël réussira-t-il à retrouver la maman du petit dinosaure ?",
    cover: "https://m.media-amazon.com/images/I/717MeGmk7SL._AC_UL320_.jpg",
    amazon: "https://urlr.me/HcJbxe",
  },
  {
    title: "Grandir et s'épanouir avec le TDAH",
    category: "Enfants",
    description:
      "Un livre illustré pour aider les enfants à mieux comprendre le TDAH et leurs émotions. À travers des histoires positives, ils apprendront à s’épanouir avec confiance. Parce qu'avec de la compréhension et de la bienveillance, chaque différence peut devenir une force.",
    cover: "https://m.media-amazon.com/images/I/71XegrIXT-L._SY425_.jpg",
    amazon: "https://urlr.me/QKfGrF",
  },
  {
    title: "Origami Débutants",
    category: "Enfants",
    description:
      "L’origami est une activité créative qui permet de découvrir l’art du pliage de papier. Grâce à des explications claires et des modèles variés, enfants et adultes peuvent apprendre pas à pas à réaliser leurs premières créations. Une activité ludique et relaxante pour développer la créativité, la patience et le plaisir de créer avec du papier.",
    cover: "https://m.media-amazon.com/images/I/61m8JVL2ElL._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "Moi Belle et Géniale",
    category: "Ados",
    description:
      "Un guide de développement personnel conçu pour renforcer la confiance en soi et révéler son potentiel. À travers réflexions, exercices et conseils accessibles, il invite à dépasser les doutes et s’affirmer pleinement. Une approche inspirante pour cultiver l’estime de soi et avancer avec confiance vers la meilleure version de soi-même.",
    cover: "https://m.media-amazon.com/images/I/61HGTxITwML._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "Tests de Personnalité Ados",
    category: "Ados",
    description:
      "Ce livre propose un voyage introspectif pour les adolescents afin de mieux comprendre leur personnalité. À travers des tests ludiques, des questions de réflexion et des exercices accessibles, il invite à explorer ses émotions et ses aspirations. Un guide stimulant pour apprendre à mieux se connaître et gagner en confiance.",
    cover: "https://m.media-amazon.com/images/I/71G-qZWCNeL._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "TOI vs MOI Spécial Couples",
    category: "Adultes",
    bestseller: true,
    description:
      "Des jeux et défis spécialement conçus pour les couples afin de partager des moments complices à deux. Quiz amusants, duels surprenants et petits défis pour rire ensemble et pimenter le quotidien. Une idée de cadeau originale pour renforcer la complicité et créer de beaux souvenirs à partager.",
    cover: "https://m.media-amazon.com/images/I/71zkIYj-oaL._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "Enquêtes Logiques",
    category: "Adultes",
    description:
      "A vos crayons pour résoudre des logigrammes ! Chaque énigme invite à analyser les indices, croiser les informations et répondre à une question. Idéal pour développer l’esprit logique et faire travailler les méninges, avec plusieurs jeux de réflexion bonus pour pimenter l’expérience.",
    cover: "https://m.media-amazon.com/images/I/710A53WMO6L._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "Jeux de Mémoire pour les Séniors",
    category: "Séniors",
    description:
      "Ce livre propose une variété de jeux de mémoire spécialement conçus pour les seniors afin de stimuler les capacités cognitives tout en s’amusant. Exercices variés, défis progressifs et activités ludiques permettent d’entretenir l’esprit et garder un cerveau actif au quotidien.",
    cover: "https://m.media-amazon.com/images/I/71i9G7wifkL._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "Le Livre des Super Mamies",
    category: "Séniors",
    description:
      "Parfaite idée cadeau plein de tendresse pour les mamies. À travers anecdotes, souvenirs, jeux et moments d’humour, il célèbre tout ce qui rend les grands-mères si spéciales. Un ouvrage chaleureux à offrir pour un anniversaire ou la fête des grands-mères.",
    cover: "https://m.media-amazon.com/images/I/71YVXSREpqL._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "50 Choses à faire pour une Retraite Heureuse",
    category: "Séniors",
    bestseller: true,
    description:
      "Ce livre est un cadeau idéal pour célébrer un départ à la retraite. À travers 50 activités amusantes et inspirantes, il invite à profiter pleinement de cette nouvelle étape de vie. Conseils et jeux pour stimuler l’esprit.",
    cover: "https://m.media-amazon.com/images/I/71jVILYi0JL._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "50 Idées Destinations pour les Retraités Voyageurs",
    category: "Séniors",
    description:
      "Une invitation à découvrir de nouveaux horizons pendant la retraite. À travers 50 destinations, il propose des conseils et pages ludiques pour imaginer ses prochaines escapades. Un cadeau original pour célébrer un départ à la retraite.",
    cover: "https://m.media-amazon.com/images/I/71uckQCX5QL._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "50 Idées Bien-être pour une Retraite en Forme",
    category: "Séniors",
    description:
      "Ce livre propose 50 idées bien-être pour profiter pleinement de la retraite et adopter de nouvelles habitudes positives. Relaxation, et activités apaisantes invitent à prendre soin de soi au quotidien. Un cadeau inspirant pour célébrer un départ à la retraite et aborder cette nouvelle étape avec sérénité et énergie.",
    cover: "https://m.media-amazon.com/images/I/71ZcJPMuZAL._AC_UL320_.jpg",
    amazon: "#",
  },
  {
    title: "50 Histoires Drôles pour une Retraite avec Humour",
    category: "Séniors",
    description:
      "Ce livre rassemble 50 histoires drôles et anecdotes légères pour célébrer la retraite avec humour et bonne humeur. Parfait pour offrir lors d’un départ d’un collègue, il propose des moments de lecture divertissants ainsi qu’un espace livre d’or pour laisser un souvenir ou un mot touchant.",
    cover: "https://m.media-amazon.com/images/I/71MTDd0nn1L._AC_UL320_.jpg",
    amazon: "#",
  },
];

function getButtonClassName(isActive: boolean): string {
  return isActive
    ? "rounded-full bg-amber-600 px-4 py-2 text-sm font-medium text-white transition"
    : "rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 transition hover:bg-amber-200";
}

export default function BookAuthorSite() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const filteredBooks = useMemo(() => {
    if (activeCategory === "Tous") {
      return books;
    }

    return books.filter((book) => book.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-100">
        <div className="mx-auto max-w-6xl px-6 pt-4 pb-2 md:pt-6 md:pb-3">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full bg-white/80 px-4 py-2 text-sm text-stone-700 shadow-sm">
                Mon Univers de Livres – Antony
              </p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Bienvenue dans mon petit univers.
              </h1>
              <p className="mt-3 max-w-xl text-lg leading-8 text-stone-600">
                Des livres pour petits et grands, imaginés et écrits avec beaucoup d’amour et de passion. Bonne lecture.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow">Depuis 2023</span>
                <span className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow">20+ livres</span>
                <span className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow">21 700+ lecteurs</span>
              </div>
            </div>

            <div className="flex items-start justify-start">
              <img
                src="https://i.imgur.com/av6zIw0.png"
                alt="Illustration auteur"
                className="h-80 w-80 object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="livres" className="mx-auto max-w-6xl px-6 pt-4 pb-12">
          <div className="mb-4 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={getButtonClassName(activeCategory === category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
                Catalogue
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Mes livres
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {filteredBooks.map((book) => (
              <article
                key={`${book.category}-${book.title}`}
                className="overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-amber-700">{book.category}</p>
                    {book.bestseller ? (
                      <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        Best Seller
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-2 text-2xl font-semibold">{book.title}</h3>

                  <p className="mt-4 text-justify leading-7 text-stone-600">
                    {book.description}
                  </p>

                  <a
                    href={book.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-2xl bg-amber-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-amber-700"
                  >
                    Voir sur Amazon
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="a-propos" className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
                À propos
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Écrire des livres… écrire délivre.
              </h2>
            </div>
            <div>
              <p className="text-justify text-lg leading-8 text-stone-600">
                J’ai lancé cette nouvelle aventure en mars 2023, un peu par curiosité… et elle est vite devenue une vraie passion. Aujourd’hui, je m’éclate à imaginer et écrire des livres pour petits et grands, dans des univers très différents. Ce site est simplement un endroit pour découvrir mes créations et retrouver facilement mes ouvrages disponibles sur Amazon.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-[32px] bg-stone-900 px-8 py-8 text-white md:px-12 md:py-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                  Amazon
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Retrouvez mes livres sur Amazon
                </h2>
                <p className="mt-4 max-w-xl text-justify leading-8 text-stone-300">
                  Tous mes ouvrages sont disponibles sur Amazon. Vous pouvez y découvrir les livres, lire les avis des lecteurs et trouver celui qui vous correspond.
                </p>
                
                <p className="hidden">
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="rounded-2xl bg-white p-6 text-center shadow-xl">
                  <p className="mb-3 text-sm text-stone-600">Découvrir tous mes livres</p>
                  <a
                    href="https://www.amazon.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-2xl bg-amber-600 px-6 py-3 font-medium text-white transition hover:bg-amber-700"
                  >
                    Voir mes livres sur Amazon
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Mon Univers de Livres – Antony. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-stone-800">
              Amazon
            </a>
            <a href="#" className="hover:text-stone-800">
              Instagram
            </a>
            <a href="#" className="hover:text-stone-800">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
