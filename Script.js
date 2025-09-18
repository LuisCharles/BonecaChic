// Animação simples ao rolar a página (fade-in)
document.addEventListener("DOMContentLoaded", () => {
    // Usamos a classe 'animated-section' que adicionamos no HTML e CSS
    const elements = document.querySelectorAll(".animated-section"); 

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 }); // Threshold de 0.2 significa que 20% do elemento precisa estar visível

    elements.forEach(el => observer.observe(el));
});