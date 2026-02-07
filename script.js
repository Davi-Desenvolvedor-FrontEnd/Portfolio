const yearsElement = document.getElementById("years");
const themeContainer = document.getElementById("theme-color");
const themeIcon = themeContainer.querySelector("i");
const menuIcon = document.getElementById("menuIcon");
const navegacao = document.querySelector("menu");
const form = document.querySelector("form");

let tema = "dark";
const root = document.documentElement;

window.onload = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearsInProgramation = currentYear - startYear;
  yearsElement.innerHTML = `<i class="bi bi-dot"></i>${yearsInProgramation} anos na área`;
};

themeContainer.addEventListener("click", changeTema);
menuIcon.addEventListener("click", toggleMenu);
form.addEventListener("submit", contato);

function changeTema() {
  if (tema == "dark") {
    root.style.setProperty("--background-primary", "#dee2e6");
    root.style.setProperty("--background-secondary", "#e9ecef");
    root.style.setProperty("--text-primary", "#000");
    root.style.setProperty("--text-secondary", "#2c2c2c");
    themeIcon.classList.replace("bi-sun", "bi-moon");
    tema = "light";
  } else {
    root.style.setProperty("--background-primary", "#000814");
    root.style.setProperty("--background-secondary", "#001429");
    root.style.setProperty("--text-primary", "#ffffff");
    root.style.setProperty("--text-secondary", "#dddddd");
    themeIcon.classList.replace("bi-moon", "bi-sun");
    tema = "dark";
  }
}

function toggleMenu() {
  if (navegacao.style.display == "flex") {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  navegacao.style.display = "flex";
  navegacao.querySelector("nav").style.flexDirection = "column";
  navegacao.style.flexDirection = "column";
  const links = navegacao.querySelectorAll("a");
  links.forEach((e) => {
    e.addEventListener("click", () => {
      closeMenu();
    });
  });
}
function closeMenu() {
  navegacao.style.display = "none";
}

async function contato(e) {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    alert("Mensagem enviada com sucesso")
    form.reset();
  } else {
    alert("Erro")
  }
}
