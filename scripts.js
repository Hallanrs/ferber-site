document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("main section");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove "active" de tudo
      navItems.forEach(i => i.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      // Ativa o item clicado e a seção correspondente
      item.classList.add("active");
      const tab = item.dataset.tab;
      const target = document.getElementById(tab);
      if (target) {
        target.classList.add("active");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
      const fileInput = document.querySelector('.file-input');
      const fileName = document.querySelector('.file-name');
      
      if (fileInput && fileName) {
        fileInput.addEventListener('change', function() {
          if (fileInput.files.length > 0) {
            fileName.textContent = fileInput.files[0].name;
          } else {
            fileName.textContent = 'Nenhum arquivo selecionado';
          }
        });
      }
});



  document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("main section");

  function ativarAba(id) {
    navItems.forEach(i => i.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    const navItem = [...navItems].find(item => item.dataset.tab === id);
    const section = document.getElementById(id);

    if (navItem) navItem.classList.add("active");
    if (section) section.classList.add("active");
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      ativarAba(item.dataset.tab);
    });
  });

  // Interceptar âncora para ir para a aba soluções
  const linkSolucoes = document.getElementById("link-solucoes");
  if (linkSolucoes) {
    linkSolucoes.addEventListener("click", (e) => {
      e.preventDefault(); // Impede o comportamento padrão da âncora
      ativarAba("solucoes");
    });
  }
});

  // Interceptar âncora para ir para a aba certificacoes
const linkCertificacoes = document.getElementById("link-certificacoes");

if (linkParcerias) {
  linkCertificacoes.addEventListener("click", (e) => {
    e.preventDefault(); // Impede o comportamento padrão da âncora
    ativarAba("certificacoes");
  });
}