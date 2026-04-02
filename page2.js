document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validação básica
    if (email && password) {
        const btn = document.querySelector('.btn-login');
        btn.innerText = 'Entrando...';
        btn.disabled = true;
        btn.style.opacity = '0.7';

        // Simulação de requisição ao servidor
        setTimeout(() => {
            alert('Login realizado com sucesso no Curso Livre!');
            btn.innerText = 'Entrar';
            btn.disabled = false;
            btn.style.opacity = '1';
            
            // Limpar os campos
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        }, 1500);
    }
});