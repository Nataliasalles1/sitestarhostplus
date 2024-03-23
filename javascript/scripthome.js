// Seleciona o navbar
const navbar = document.getElementById('navbar');

// Obtém a altura do showcase
const showcaseHeight = document.getElementById('showcase').offsetHeight;

// Função para verificar a rolagem da página
function checkScroll() {
    // Obtém a posição de rolagem atual
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Verifica se a posição de rolagem ultrapassou a metade do showcase
    if (scrollPosition > showcaseHeight / 2) {
        navbar.classList.add('fixed-nav'); // Adiciona uma classe para tornar o navbar fixo
    } else {
        navbar.classList.remove('fixed-nav'); // Remove a classe para voltar ao comportamento normal
    }
}

// Adiciona um ouvinte de evento de rolagem
window.addEventListener('scroll', checkScroll);
