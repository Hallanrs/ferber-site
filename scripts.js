document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os itens de navegação e seções
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("main section");
  
  // Define a função para ativar uma aba específica
  function ativarAba(id) {
    // Remove "active" de todos os itens de navegação e seções
    navItems.forEach(i => i.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));
    
    // Encontra o item de navegação correspondente ao id
    const navItem = [...navItems].find(item => item.dataset.tab === id);
    const section = document.getElementById(id);
    
    // Adiciona "active" ao item de navegação e seção corretos
    if (navItem) navItem.classList.add("active");
    if (section) section.classList.add("active");
  }
  
  // Adiciona event listeners para os itens de navegação principal
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      ativarAba(item.dataset.tab);
    });
  });
  
  // Botão "Soluções" na página inicial
  const linkSolucoes = document.getElementById("link-solucoes");
  if (linkSolucoes) {
    linkSolucoes.addEventListener("click", (e) => {
      e.preventDefault(); // Impede o comportamento padrão da âncora
      ativarAba("solucoes");
    });
  }
  
  // Botão "Ver Parcerias Completas" na seção de certificações
  const linkParcerias = document.getElementById("link-parcerias");
  if (linkParcerias) {
    linkParcerias.addEventListener("click", (e) => {
      e.preventDefault(); // Impede o comportamento padrão da âncora
      ativarAba("parcerias");
    });
  }
  
  // Botão "Entre em Contato" na seção de parcerias
  const linkContato = document.querySelector(".parcerias-container .btn-primary");
  if (linkContato) {
    linkContato.addEventListener("click", (e) => {
      e.preventDefault(); // Impede o comportamento padrão da âncora
      ativarAba("contato");
    });
  }
  
  // Manipulador para o upload de arquivo
  const fileInput = document.querySelector('.file-input');
  const fileLabel = document.querySelector('.file-input-label');
  
  if (fileInput && fileLabel) {
    fileInput.addEventListener('change', function() {
      if (fileInput.files.length > 0) {
        fileLabel.textContent = fileInput.files[0].name;
      } else {
        fileLabel.textContent = 'Escolher arquivo';
      }
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
});


  document.addEventListener("DOMContentLoaded", function () {
    const botoesSaibaMais = document.querySelectorAll(".btn-saiba-mais");
    const botoesVoltar = document.querySelectorAll(".btn-voltar");
    const solucoesSection = document.getElementById("solucoes");
    const abas = document.querySelectorAll(".aba-conteudo");

    botoesSaibaMais.forEach(botao => {
      botao.addEventListener("click", function (e) {
        e.preventDefault();
        const alvoID = this.getAttribute("href").substring(1);

        solucoesSection.classList.add("oculta");
        abas.forEach(aba => aba.classList.remove("ativa"));

        const alvo = document.getElementById(alvoID);
        if (alvo) {
          alvo.classList.add("ativa");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    });

    botoesVoltar.forEach(botao => {
      botao.addEventListener("click", function () {
        abas.forEach(aba => aba.classList.remove("ativa"));
        solucoesSection.classList.remove("oculta");
        window.scrollTo({ top: solucoesSection.offsetTop, behavior: "smooth" });
      });
    });
  });

  /*rolagem de imagens */
   document.addEventListener('DOMContentLoaded', () => {
      const carousel = document.getElementById('carousel');
      const prevBtn = document.getElementById('prev');
      const nextBtn = document.getElementById('next');
      const slides = document.querySelectorAll('.carousel-slide');
      
      let slideWidth = slides[0].offsetWidth + 20; // Width + margin
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
        
        slideWidth = slides[0].offsetWidth + 20; // Recalculate slide width
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
      
      prevBtn.addEventListener('click', () => slide('prev'));
      nextBtn.addEventListener('click', () => slide('next'));
      
      // Update on resize
      window.addEventListener('resize', updateSlidesVisible);
      
      // Initial setup
      updateSlidesVisible();
    });