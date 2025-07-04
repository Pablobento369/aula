document.addEventListener('DOMContentLoaded', function() {
    // LOGIN 
    const formLogin = document.getElementById('form-login');
    if(formLogin) {
        formLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const senha = document.getElementById('login-senha').value;
            const erroLogin = document.getElementById('erro-login');
            
            if(!email || !senha) {
                mostrarErro(erroLogin, 'Por favor, preencha todos os campos!');
                return;
            }
            
            mostrarErro(erroLogin, 'Login realizado com sucesso! (simulação)', 'sucesso');
             
        });
    }

    const formCadastro = document.getElementById('form-cadastro');
    if(formCadastro) {
        formCadastro.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('cadastro-nome').value;
            const email = document.getElementById('cadastro-email').value;
            const senha = document.getElementById('cadastro-senha').value;
            const erroCadastro = document.getElementById('erro-cadastro');
            
            if(!nome || !email || !senha) {
                mostrarErro(erroCadastro, 'Por favor, preencha todos os campos!');
                return;
            }
            
            if(senha.length < 6) {
                mostrarErro(erroCadastro, 'A senha deve ter pelo menos 6 caracteres!');
                return;
            }
            
            mostrarErro(erroCadastro, 'Cadastro realizado com sucesso! Redirecionando...', 'sucesso');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        });
    }
});

function mostrarErro(elemento, mensagem, tipo = 'erro') {
    elemento.textContent = mensagem;
    elemento.style.display = 'block';
    
    if(tipo === 'sucesso') {
        elemento.style.color = '#4CAF50';
        elemento.style.backgroundColor = '#e8f5e9';
        elemento.style.borderColor = '#c8e6c9';
    } else {
        elemento.style.color = '#d32f2f';
        elemento.style.backgroundColor = '#fde8e8';
        elemento.style.borderColor = '#f5c6cb';
    }
    

    setTimeout(() => {
        elemento.style.display = 'none';
    }, 5000);
}