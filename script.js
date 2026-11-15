const items = [
  ["nav ul li:nth-child(1) a", "Accueil", "Home"],
  ["nav ul li:nth-child(2) a", "À propos", "About"],
  ["nav ul li:nth-child(3) a", "Compétences", "Skills"],
  ["nav ul li:nth-child(4) a", "Projets", "Projects"],
  ["nav ul li:nth-child(5) a", "Formation", "Education"],
  ["nav ul li:nth-child(6) a", "Contact", "Contact"],

  ["#home-text", "Étudiante en informatique passionnée par le développement web et les nouvelles technologies.", "Computer science student passionate about web development and new technologies."],
  ["#btn-projects", "Voir mes projets", "View my projects"],

  ["#apropos h2", "À propos", "About me"],
  ["#apropos p", "Je suis une étudiante en informatique intéressée par le développement web, la programmation et les systèmes informatiques. J'aime apprendre et améliorer mes compétences techniques.", "I am a computer science student interested in web development, programming and computer systems. I enjoy learning and improving my technical skills."],

  ["#competences h2", "Mes compétences", "My skills"],
  [".skill-card:nth-child(5) h3", "Base de données", "Databases"],
  [".skill-card:nth-child(6) h3", "Réseaux", "Networks"],

  ["#projets h2", "Mes projets", "My projects"],
  [".project-card:nth-child(1) h3", "Portfolio Web", "Web Portfolio"],
  [".project-card:nth-child(1) p", "Création d'un site web avec HTML5 et CSS3.", "Building a website with HTML5 and CSS3."],
  [".project-card:nth-child(2) h3", "Projet Python", "Python Project"],
  [".project-card:nth-child(2) p", "Développement d'applications simples avec Python.", "Developing simple applications with Python."],
  [".project-card:nth-child(3) h3", "Base de données", "Database"],
  [".project-card:nth-child(3) p", "Création et gestion d'une base de données SQL.", "Creating and managing an SQL database."],
  [".project-card:nth-child(4) h3", "Projet Réseaux", "Networking Project"],
  [".project-card:nth-child(4) p", "Configuration réseau, adressage IP et protocoles TCP/IP.", "Network configuration, IP addressing and TCP/IP protocols."],
  [".project-card:nth-child(5) h3", "Systèmes logiques", "Logic Systems"],
  [".project-card:nth-child(5) p", "Étude des circuits logiques et systèmes combinatoires.", "Study of logic circuits and combinational systems."],

  ["#formation h2", "Formation et Expériences", "Education and Experience"],
  [".formation h3:nth-of-type(1)", "Formation", "Education"],
  [".formation p:nth-of-type(1)", "Étudiante en informatique.", "Computer science student."],
  [".formation h3:nth-of-type(2)", "Expérience", "Experience"],
  [".formation p:nth-of-type(2)", "Stage en développement informatique.", "Internship in software development."],

  [".contact-card:nth-child(2) h3", "Téléphone", "Phone"]
];

const body = document.body;
const themeBtn = document.getElementById("theme-toggle");
const langBtns = document.querySelectorAll("#lang-btn");
let lang = "fr";

function updateThemeButton() {
  const dark = body.classList.contains("dark-mode");
  if (lang === "fr") {
    themeBtn.textContent = dark ? "☀️ Mode clair" : "🌙 Mode sombre";
  } else {
    themeBtn.textContent = dark ? "☀️ Light mode" : "🌙 Dark mode";
  }
}

function applyLanguage() {
  items.forEach(([selector, fr, en]) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = (lang === "fr") ? fr : en;
  });
  document.documentElement.lang = lang;
langBtns.forEach(b => b.textContent = (lang === "fr") ? "🇬🇧 English" : "🇫🇷 Français");
  updateThemeButton();
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  updateThemeButton();
});

langBtns.forEach(b => b.addEventListener("click", () => {
  lang = (lang === "fr") ? "en" : "fr";
  applyLanguage();
}));
