document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");
  const botoesSaibaMais = document.querySelectorAll(".btn-saiba-mais");
  const botoesVoltar = document.querySelectorAll(".btn-voltar");

  // Alternância entre abas principais
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const tab = item.getAttribute("data-tab");
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      sections.forEach(sec => sec.style.display = "none");

      const targetSection = document.getElementById(tab);
      if (targetSection) {
        targetSection.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      document.querySelectorAll(".detalhe-solucao").forEach(sol => sol.style.display = "none");
    });
  });

  /*hamburguer menu*/
  const mobileMenu = document.getElementById('mobile-menu');
  const listNav = document.getElementById('nav-list');

  mobileMenu.addEventListener('click', () => {
    listNav.classList.toggle('active');
    mobileMenu.classList.toggle('open');
      });


  // Botões "Saiba mais"
  botoesSaibaMais.forEach(botao => {
    botao.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(botao.getAttribute("href"));
      if (target) {
        sections.forEach(sec => sec.style.display = "none");
        target.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // Botões "Voltar"
  botoesVoltar.forEach(botao => {
    botao.addEventListener("click", () => {
      sections.forEach(sec => sec.style.display = "none");
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

  const linkSolucoes = document.getElementById("link-solucoes");
  if (linkSolucoes) {
    linkSolucoes.addEventListener("click", (e) => {
      e.preventDefault();
      sections.forEach(sec => sec.style.display = "none");
      const secao = document.getElementById("solucoes");
      if (secao) secao.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const linkParcerias = document.getElementById("link-parcerias");
  if (linkParcerias) {
    linkParcerias.addEventListener("click", (e) => {
      e.preventDefault();
      sections.forEach(sec => sec.style.display = "none");
      const secao = document.getElementById("parcerias");
      if (secao) secao.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const linkContato = document.querySelector(".parcerias-container .btn-primary");
  if (linkContato) {
    linkContato.addEventListener("click", (e) => {
      e.preventDefault();
      sections.forEach(sec => sec.style.display = "none");
      const secao = document.getElementById("contato");
      if (secao) secao.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }



  // Carrossel de imagens
 const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slides = document.querySelectorAll('.carousel-slide');

if (carousel && prevBtn && nextBtn && slides.length > 0) {
  let slideWidth = 0;
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

    const slideStyle = getComputedStyle(slides[0]);
    const marginRight = parseFloat(slideStyle.marginRight) || 20;
    slideWidth = slides[0].getBoundingClientRect().width + marginRight;
  }

  function slide(direction) {
    updateSlidesVisible();
    const maxIndex = Math.max(slides.length - slidesVisible, 0);

    if (direction === 'next') {
      currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
    } else {
      currentIndex = (currentIndex - 1) < 0 ? maxIndex : currentIndex - 1;
    }

    carousel.scrollTo({
      left: currentIndex * slideWidth,
      behavior: 'smooth'
    });
  }

  prevBtn.addEventListener('click', () => slide('prev'));
  nextBtn.addEventListener('click', () => slide('next'));
  window.addEventListener('resize', updateSlidesVisible);
  updateSlidesVisible();
}


/*footer*/
  // Lógica para os links do footer (sistema de abas)
    const footerLinks = [
    { linkId: "footer-sobre", sectionId: "sobre" },
    { linkId: "footer-solucoes", sectionId: "solucoes" },
    { linkId: "footer-certificacoes", sectionId: "certificacoes" },
    { linkId: "footer-contato", sectionId: "contato" }
  ];

  footerLinks.forEach(({ linkId, sectionId }) => {
    const link = document.getElementById(linkId);
    const targetSection = document.getElementById(sectionId);

    if (link && targetSection) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // Esconde todas as seções
        sections.forEach(sec => sec.style.display = "none");

        // Mostra a seção de destino
        targetSection.style.display = "block";

        // Rola suavemente até o topo da página
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Remove active dos itens de navegação
        navItems.forEach(i => i.classList.remove("active"));

        // Marca como active se tiver item correspondente
        navItems.forEach(i => {
          if (i.getAttribute("data-tab") === sectionId) {
            i.classList.add("active");
          }
        });
      });
    }
  });

});

/*Email JS para envio de mesnagem*/
// Inicializa a biblioteca do EmailJS
emailjs.init("swkcuBg_POf9M-t-S"); // Substitua pelo seu Public Key

// Adiciona o listener para o formulário
document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  emailjs.sendForm("service_we7swd4", "template_fy04dm7", this)
    .then(function(response) {
      alert("✅ Mensagem enviada com sucesso!");
      console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
      alert("❌ Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      console.error("FAILED...", error);
    });

  this.reset(); // Limpa o formulário
});





