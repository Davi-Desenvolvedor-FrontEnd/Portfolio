const yearsElement = document.getElementById("years");
const themeContainer = document.getElementById("theme-color");
const themeIcon = themeContainer.querySelector("i");
const menuIcon = document.getElementById("menuIcon");
const navegacao = document.querySelector("menu");
const form = document.querySelector("form");
const projectsContent = document.querySelector(".projects-content");
const skillsContent = document.querySelector(".skills-content");
const messageFeedback = document.getElementById("message-feedback");

let tema = "dark";
const root = document.documentElement;

window.onload = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearsInProgramation = currentYear - startYear;
  const years = document.createElement("h5");
  years.textContent = yearsInProgramation;
  yearsElement.prepend(years);
  renderProjects();
  renderSkills();
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
    root.style.setProperty("--text-muted", "#505050");
    themeIcon.classList.replace("bi-sun", "bi-moon");
    tema = "light";
  } else {
    root.style.setProperty("--background-primary", "#000814");
    root.style.setProperty("--background-secondary", "#001429");
    root.style.setProperty("--text-primary", "#ffffff");
    root.style.setProperty("--text-secondary", "#dddddd");
    root.style.setProperty("--text-muted", "#bebebe");
    themeIcon.classList.replace("bi-moon", "bi-sun");
    tema = "dark";
  }
}

function toggleMenu() {
  if (navegacao.style.display !== "none") {
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
    showMessageFeedback(
      "Mensagem enviada com sucesso!",
      "Success",
      "fa-circle-check",
    );
    form.reset();
    setTimeout(() => {
      messageFeedback.classList = "message-hidden";
    }, [5000]);
  } else {
    showMessageFeedback(
      "Mensagem enviada com erro!",
      "Error",
      "fa-circle-xmark",
    );
    form.reset();
    setTimeout(() => {
      messageFeedback.classList = "message-hidden";
    }, [5000]);
  }
}

function showMessageFeedback(text, type, classIcon) {
  // 1. PEGA o elemento do ícone (existe no HTML)
  const icon = messageFeedback.querySelector("i");

  // 2. Limpa as classes do ícone (mantém só fa-solid)
  icon.className = "fa-solid"; // Remove classes antigas

  // 3. Adiciona o novo ícone
  icon.classList.add(classIcon);

  // 4. Atualiza o texto (sem afetar o ícone)
  // CUIDADO: textContent apaga TUDO, incluindo o <i>
  // Solução: criar um span para o texto
  messageFeedback.innerHTML = ""; // Limpa
  messageFeedback.appendChild(icon); // Recoloca o ícone
  messageFeedback.append(" " + text); // Adiciona o texto

  // 5. Define a classe correta (preservando classes base)
  messageFeedback.className = ""; // Limpa tudo
  messageFeedback.classList.add(
    "message-base", // Classe base (se tiver)
    type === "Success" ? "message-success" : "message-error",
  );
}

let projects = [
  {
    id: 1,
    name: "Math Quiz",
    description:
      "Quiz interativo que testa seus conhecimentos nessa materia de faculdade",
    image: "/images/math-quiz.png",
    demo: "https://math-quiz2026.vercel.app/",
    code: "https://github.com/Davi-Desenvolvedor-FrontEnd/Math-Quiz",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Sentinel Pass",
    description:
      "Gerenciador de senhas seguro e intuitivo. Criptografa e armazena credenciais de forma protegida.",
    image: "/images/sentinel-pass.png",
    demo: "",
    code: "",
    skills: ["React Native"],
  },
  {
    id: 3,
    name: "Ester Calçados",
    description:
      "Vitrine virtual para loja de calçados. Catálogo de produtos com filtros, carrinho de compras, e sistema de contato via WhatsApp.",
    image: "/images/ester-calcados.png",
    demo: "",
    code: "",
    skills: ["Next Js", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "DevFinder",
    description:
      "Plataforma de busca para desenvolvedores. Consome a API do GitHub e exibe perfis com informações como repositórios, seguidores e linguagens mais utilizadas.",
    image: "/images/devfinder.png",
    demo: "https://devfinder-demo.vercel.app",
    code: "https://github.com/Davi-Desenvolvedor-FrontEnd/DevFinder",
    skills: ["React", "Axios", "Styled Components"],
  },
  {
    id: 5,
    name: "Weather Now",
    description:
      "Aplicativo de previsão do tempo em tempo real. Interface clean que mostra temperatura atual, umidade, velocidade do vento e previsão para os próximos dias.",
    image: "/images/weather-now.png",
    demo: "https://weather-now-app.vercel.app",
    code: "https://github.com/Davi-Desenvolvedor-FrontEnd/Weather-Now",
    skills: ["JavaScript", "API", "CSS3"],
  },
  {
    id: 6,
    name: "Pizza Shop",
    description:
      "Sistema completo para pizzaria. Cardápio interativo, montagem de pizza personalizada, cálculo automático de preços e integração com WhatsApp para pedidos.",
    image: "/images/pizza-shop.png",
    demo: "",
    code: "",
    skills: ["React", "Context API", "Tailwind CSS"],
  },
  {
    id: 7,
    name: "Finance Control",
    description:
      "Dashboard financeiro para controle pessoal. Gráficos interativos mostrando despesas, receitas, categorias e metas de economia. Inclui autenticação de usuários.",
    image: "/images/finance-control.png",
    demo: "",
    code: "https://github.com/Davi-Desenvolvedor-FrontEnd/Finance-Control",
    skills: ["React", "TypeScript", "Firebase", "Recharts"],
  },
];

function renderProjects() {
  projects.forEach((project) => {
    const projectBox = document.createElement("div");
    projectBox.classList.add("project-box");
    const projectImageContainer = document.createElement("div");
    projectImageContainer.classList.add("project-image");
    const projectText = document.createElement("div");
    projectText.classList.add("project-text");
    const projectImageContent = document.createElement("img");
    const projectName = document.createElement("h4");
    const projectDescription = document.createElement("p");
    const projectSkillsContainer = document.createElement("div");
    projectSkillsContainer.classList.add("project-skills");
    const projectActionsContainer = document.createElement("div");
    projectActionsContainer.classList.add("actions");
    const projectActionCode = document.createElement("a");
    const projectActionView = document.createElement("a");
    projectName.textContent = project.name;
    projectImageContent.src = project.image;
    projectDescription.textContent = project.description;
    projectActionCode.href = project.code;
    projectActionCode.textContent = "Código";
    projectActionCode.target = "_blank";
    projectActionView.href = project.demo;
    projectActionView.textContent = "Demo";
    projectActionView.target = "_blank";
    projectSkillsContainer.innerHTML = "";

    project.skills.forEach((skill) => {
      const projectSkills = document.createElement("div");
      projectSkills.classList.add("project-skill");
      projectSkills.textContent = skill;
      projectSkillsContainer.appendChild(projectSkills);
    });
    projectActionsContainer.appendChild(projectActionCode);
    projectActionsContainer.appendChild(projectActionView);
    projectText.appendChild(projectName);
    projectText.appendChild(projectDescription);
    projectText.appendChild(projectSkillsContainer);
    projectText.appendChild(projectActionsContainer);
    projectImageContainer.appendChild(projectImageContent);
    projectBox.appendChild(projectImageContainer);
    projectBox.appendChild(projectText);
    projectsContent.appendChild(projectBox);
  });
}

let skills = [
  {
    id: 1,
    name: "HTML",
    class: "fa-brands fa-html5",
    color: "#E44D26", // Laranja/vermelho oficial do HTML5
  },
  {
    id: 2,
    name: "CSS",
    class: "fa-brands fa-css3-alt",
    color: "#2899F3", // Azul oficial do CSS3
  },
  {
    id: 3,
    name: "JavaScript",
    class: "bi bi-javascript",
    color: "#F7DF1E", // Amarelo oficial do JavaScript
  },
  {
    id: 4,
    name: "React",
    class: "fa-brands fa-react",
    color: "#61DAFB", // Azul claro oficial do React
  },
  {
    id: 5,
    name: "Node js",
    class: "fa-brands fa-node-js",
    color: "#68A063", // Verde oficial do Node.js
  },
  {
    id: 6,
    name: "SQL",
    class: "fa-solid fa-database",
    color: "#00758F", // Azul escuro (baseado no MySQL/banco de dados)
  },
  {
    id: 7,
    name: "Git",
    class: "fa-brands fa-git-alt",
    color: "#F05032", // Laranja/vermelho oficial do Git
  },
];

function renderSkills() {
  skills.forEach((skill) => {
    const skillCard = document.createElement("div");
    const skillIcon = document.createElement("i");
    const skillName = document.createElement("p");
    skillCard.classList.add("skills-card");
    skillIcon.classList = skill.class;
    skillCard.addEventListener("mouseenter", () => {
      skillIcon.style.color = skill.color;
      skillCard.style.borderColor = skill.color;
    });
    skillCard.addEventListener("mouseleave", () => {
      skillIcon.style.color = "";
      skillCard.style.borderColor = "";
    });
    skillName.textContent = skill.name;
    skillCard.appendChild(skillIcon);
    skillCard.appendChild(skillName);
    skillsContent.appendChild(skillCard);
  });
}

function scrollLeft() {
  const projectBoxes = projectsContent.querySelectorAll(".project-box");
  projectBoxes.forEach((box) => {
    box.style.animation = "scroll-left 0.5s forwards";
  });
}

function scrollRight() {
  const projectBoxes = projectsContent.querySelectorAll(".project-box");
  projectBoxes.forEach((box) => {
    box.style.animation = "scroll-right 0.5s forwards";
  });
}
