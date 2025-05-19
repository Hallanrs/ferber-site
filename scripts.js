// Espera o DOM carregar para garantir que todos os elementos estejam disponíveis
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos principais do menu e seções
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");
  const botoesSaibaMais = document.querySelectorAll(".btn-saiba-mais");
  const botoesVoltar = document.querySelectorAll(".btn-voltar");

  // Função para ativar uma aba principal (ex: Inicio, Sobre, Soluções, etc.)
  function ativarAba(tabId) {
    // Remove classe 'active' de todos os itens do menu
    navItems.forEach(i => i.classList.remove("active"));

    // Ativa a aba clicada
    const itemAtivo = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    if (itemAtivo) itemAtivo.classList.add("active");

    // Esconde todas as seções
    sections.forEach(sec => sec.style.display = "none");

    // Mostra a seção desejada
    const targetSection = document.getElementById(tabId);
    if (targetSection) targetSection.style.display = "block";

    // Oculta soluções detalhadas se alguma estiver aberta
    document.querySelectorAll(".detalhe-solucao").forEach(sol => sol.style.display = "none");
  }

  // Alternância entre abas principais ao clicar no menu
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const tab = item.getAttribute("data-tab");
      ativarAba(tab);
    });
  });

  // Botões "Saiba mais" abrem detalhes de cada solução específica
  botoesSaibaMais.forEach(botao => {
    botao.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(botao.getAttribute("href"));

      if (target) {
        // Esconde seções principais
        sections.forEach(sec => sec.style.display = "none");
        // Mostra o conteúdo detalhado da solução
        target.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // Botões "Voltar" retornam à seção principal de soluções
  botoesVoltar.forEach(botao => {
    botao.addEventListener("click", () => {
      // Esconde todas as seções
      sections.forEach(sec => sec.style.display = "none");
      // Exibe novamente a seção de soluções
      const solucoesSection = document.getElementById("solucoes");
      if (solucoesSection) solucoesSection.style.display = "block";
      window.scrollTo({ top: solucoesSection.offsetTop, behavior: "smooth" });
    });
  });

  // Botões que levam a seções específicas (usados dentro do conteúdo)
  const linkSolucoes = document.getElementById("link-solucoes");
  if (linkSolucoes) {
    linkSolucoes.addEventListener("click", (e) => {
      e.preventDefault();
      ativarAba("solucoes");
    });
  }

  const linkParcerias = document.getElementById("link-parcerias");
  if (linkParcerias) {
    linkParcerias.addEventListener("click", (e) => {
      e.preventDefault();
      ativarAba("parcerias");
    });
  }

  const linkContato = document.querySelector(".parcerias-container .btn-primary");
  if (linkContato) {
    linkContato.addEventListener("click", (e) => {
      e.preventDefault();
      ativarAba("contato");
    });
  }

  // Manipula o upload de arquivos no formulário de contato
  const fileInput = document.querySelector('.file-input');
  const fileLabel = document.querySelector('.file-input-label');
  if (fileInput && fileLabel) {
    fileInput.addEventListener('change', function () {
      fileLabel.textContent = fileInput.files.length > 0
        ? fileInput.files[0].name
        : 'Escolher arquivo';
    });
  }

  // Comportamento do menu mobile
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.getElementById("nav-list");
  if (mobileMenu && navList) {
    mobileMenu.addEventListener("click", () => {
      navList.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  // Carrossel de imagens com rolagem horizontal
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const slides = document.querySelectorAll('.carousel-slide');
  let slideWidth = slides[0]?.offsetWidth + 20 || 200;
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
    slideWidth = slides[0]?.offsetWidth + 20 || 200;
  }

  function slide(direction) {
    updateSlidesVisible();
    if (direction === 'next') {
      currentIndex++;
      if (currentIndex > slides.length - slidesVisible) {
        currentIndex = 0;
      }
    } else {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - slidesVisible;
      }
    }
    carousel.scrollLeft = currentIndex * slideWidth;
  }

  if (carousel && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => slide('prev'));
    nextBtn.addEventListener('click', () => slide('next'));
    window.addEventListener('resize', updateSlidesVisible);
    updateSlidesVisible();
  }

  // Exibe a aba "Início" por padrão ao carregar a página
  ativarAba("inicio");
});