document.addEventListener("DOMContentLoaded", () => {
    // Animação de fade-in para as seções ao rolar a página
    const sections = document.querySelectorAll(".animated-section");
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    sections.forEach(el => sectionObserver.observe(el));

    // Animação para os ícones de serviço
    const serviceIcons = document.querySelectorAll(".service-icon");
    const iconObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-up");
                iconObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    serviceIcons.forEach(el => iconObserver.observe(el));

    // Cabeçalho transparente que muda de cor ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Botão "Voltar ao Topo"
    const mybutton = document.getElementById("scrollToTopBtn");
    
    // Mostra ou esconde o botão
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // Faz a rolagem suave ao clicar no botão
    mybutton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});