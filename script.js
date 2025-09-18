// Animação simples ao rolar a página (fade-in)
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animated-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    // **********************************************
    // NOVO CÓDIGO PARA O CABEÇALHO TRANSPARENTE
    // **********************************************
    const header = document.querySelector('header');
    
    // Adiciona o evento de scroll
    window.addEventListener('scroll', () => {
        // Se a posição de scroll vertical for maior que 50px
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});