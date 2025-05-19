// Aguarda o carregamento completo do DOM
// Define comportamentos para navegação, botões e interações gerais
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item"); // Itens do menu superior
  const sections = document.querySelectorAll("section");   // Todas as seções principais
  const botoesSaibaMais = document.querySelectorAll(".btn-saiba-mais");
  const botoesVoltar = document.querySelectorAll(".btn-voltar");

  // Alternância entre abas principais
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const tab = item.getAttribute("data-tab");

      // Remove classe 'active' de todos os itens do menu
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Esconde todas as seções
      sections.forEach(sec => sec.style.display = "none");

      // Exibe a aba principal correspondente
      const targetSection = document.getElementById(tab);
      if (targetSection) {
        targetSection.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" }); // Volta ao topo da página
      }

      // Oculta todas as abas de soluções detalhadas
      document.querySelectorAll(".detalhe-solucao").forEach(sol => sol.style.display = "none");
    });
  });

  // Ação nos botões "Saiba mais"
  botoesSaibaMais.forEach(botao => {
    botao.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(botao.getAttribute("href"));

      if (target) {
        // Esconde todas as seções
        sections.forEach(sec => sec.style.display = "none");
        // Exibe a seção da solução específica
        target.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" }); // Volta ao topo ao abrir solução
      }
    });
  });

  // Ação nos botões "Voltar"
  botoesVoltar.forEach(botao => {
    botao.addEventListener("click", () => {
      // Esconde todas as seções
      sections.forEach(sec => sec.style.display = "none");
      // Exibe a seção principal de soluções
      const solucoesSection = document.getElementById("solucoes");
      if (solucoesSection) {
        solucoesSection.style.display = "block";
        window.scrollTo({ top: solucoesSection.offsetTop, behavior: "smooth" });
      }
    });
  });

  // Define "Início" como visível por padrão
  sections.forEach(sec => sec.style.display = "none");
  const inicio = document.getElementById("inicio");
  if (inicio) inicio.style.display = "block";

  // Botões de navegação entre seções específicas
  const linkSolucoes = document.getElementById("link-solucoes");
  if (linkSolucoes) {
    linkSolucoes.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
      const secao = document.getElementById("solucoes");
      if (secao) secao.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const linkParcerias = document.getElementById("link-parcerias");
  if (linkParcerias) {
    linkParcerias.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
      const secao = document.getElementById("parcerias");
      if (secao) secao.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const linkContato = document.querySelector(".parcerias-container .btn-primary");
  if (linkContato) {
    linkContato.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
      const secao = document.getElementById("contato");
      if (secao) secao.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Upload de arquivo - mostra nome do arquivo escolhido
  const fileInput = document.querySelector('.file-input');
  const fileLabel = document.querySelector('.file-input-label');
  if (fileInput && fileLabel) {
    fileInput.addEventListener('change', function() {
      fileLabel.textContent = fileInput.files.length > 0 ? fileInput.files[0].name : 'Escolher arquivo';
    });
  }

  // Menu mobile toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.getElementById("nav-list");
  if (mobileMenu && navList) {
    mobileMenu.addEventListener("click", () => {
      navList.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  // Carrossel de imagens das soluções
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const slides = document.querySelectorAll('.carousel-slide');

  if (carousel && prevBtn && nextBtn && slides.length > 0) {
    let slideWidth = slides[0].offsetWidth + 20;
    let slidesVisible = 6;
    let currentIndex = 0;

    function updateSlidesVisible() {
      if (window.innerWidth > 1200) {
        slidesVisible = 6;
      } else if (window.innerWidth > 992) {
        slidesVisible = 4;
      } else if (window.innerWidth > 768) {
        slidesVisible = 3;
      } else if (window.innerWidth > 480) {
        slidesVisible = 2;
      } else {
        slidesVisible = 1;
      }
      slideWidth = slides[0].offsetWidth + 20;
    }

    function slide(direction) {
      updateSlidesVisible();
      if (direction === 'next') {
        currentIndex++;
        if (currentIndex > slides.length - slidesVisible) currentIndex = 0;
      } else {
        currentIndex--;
        if (currentIndex < 0) currentIndex = slides.length - slidesVisible;
      }
      carousel.scrollLeft = currentIndex * slideWidth;
    }

    prevBtn.addEventListener('click', () => slide('prev'));
    nextBtn.addEventListener('click', () => slide('next'));
    window.addEventListener('resize', updateSlidesVisible);
    updateSlidesVisible();
  }
});