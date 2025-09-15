/* ======================
   Partículas
====================== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particlesArray;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }
  }
  draw() {
    ctx.fillStyle = "rgba(56, 189, 248, 0.7)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 90; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 2 + 1;
    let speedX = (Math.random() - 0.5) * 0.8;
    let speedY = (Math.random() - 0.5) * 0.8;
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

/* ======================
   Tradução
====================== */
const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    hero_title: "Building the Future in Apps",
    hero_text: "At <strong>Gennisys</strong>, we transform ideas into robust, secure, and scalable digital solutions.",
    btn_contact: "Get in Touch",
    about_title: "About Us",
    about_text: "Gennisys was born with the mission of creating applications and digital systems that combine innovation, modern design, and performance. We develop solutions for Android and iOS, helping businesses and entrepreneurs reach new heights.",
    ceo_title: "Founder & CEO",
    ceo_text: "With vision and passion for technology, Tiago leads Gennisys to create impactful apps and digital solutions that inspire innovation and deliver results.",
    contact_title: "Contact Us",
    contact_text: "Have an idea or project? Let's talk and make it real!"
  },
  pt: {
    home: "Início",
    about: "Sobre",
    contact: "Contato",
    hero_title: "Construindo o Futuro em Apps",
    hero_text: "Na <strong>Gennisys</strong>, transformamos ideias em soluções digitais robustas, seguras e escaláveis.",
    btn_contact: "Fale Conosco",
    about_title: "Sobre Nós",
    about_text: "A Gennisys nasceu com a missão de criar aplicativos e sistemas digitais que unem inovação, design moderno e performance. Desenvolvemos soluções para Android e iOS, ajudando empresas e empreendedores a alcançarem novos patamares.",
    ceo_title: "Fundador & CEO",
    ceo_text: "Com visão e paixão por tecnologia, Tiago lidera a Gennisys para criar aplicativos impactantes e soluções digitais que inspiram inovação e entregam resultados.",
    contact_title: "Entre em Contato",
    contact_text: "Tem uma ideia ou projeto? Vamos conversar e transformar em realidade!"
  }
};

const flags = document.querySelectorAll(".flags img");
const elements = document.querySelectorAll("[data-key]");

flags.forEach(flag => {
  flag.addEventListener("click", () => {
    const lang = flag.dataset.lang;
    changeLanguage(lang);
  });
});

function changeLanguage(lang) {
  elements.forEach(el => {
    const key = el.dataset.key;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
