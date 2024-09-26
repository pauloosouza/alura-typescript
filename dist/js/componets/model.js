// Seleciona o botão e o elemento body
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const body = document.body;
// Adiciona um evento de clique no botão para alternar o tema
toggleThemeBtn.onclick = function () {
    // Alterna entre as classes 'dark-mode' e 'claro'
    body.classList.toggle("dark-mode");
    // Atualiza o texto do botão com base no tema atual
    if (body.classList.contains("dark-mode")) {
        toggleThemeBtn.src = './images/claro.png';
    }
    else {
        toggleThemeBtn.textContent = "Modo Escuro";
        toggleThemeBtn.src = './images/escuro.png';
    }
};
