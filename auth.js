// Alternar entre formulários de cadastro
document.addEventListener('DOMContentLoaded', function() {
    const btnPf = document.getElementById('btn-pf');
    const btnEmpresa = document.getElementById('btn-empresa');
    const formPf = document.getElementById('form-pf');
    const formEmpresa = document.getElementById('form-empresa');

    if(btnPf && btnEmpresa) {
        btnPf.addEventListener('click', function() {
            this.classList.add('active');
            btnEmpresa.classList.remove('active');
            formPf.style.display = 'block';
            formEmpresa.style.display = 'none';
        });

        btnEmpresa.addEventListener('click', function() {
            this.classList.add('active');
            btnPf.classList.remove('active');
            formEmpresa.style.display = 'block';
            formPf.style.display = 'none';
        });
    }

    // Validação de formulário de cadastro PF
    const formCadastroPf = document.getElementById('form-pf');
    if(formCadastroPf) {
        formCadastroPf.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const senha = document.getElementById('senha-pf').value;
            const confirmarSenha = document.getElementById('confirmar-senha-pf').value;
            
            if(senha !== confirmarSenha) {
                alert('As senhas não coincidem!');
                return;
            }
            
            // Aqui você faria a chamada para a API de cadastro
            alert('Cadastro realizado com sucesso!');
            window.location.href = '../index.html';
        });
    }

    // Validação de formulário de cadastro Empresa
    const formCadastroEmpresa = document.getElementById('form-empresa');
    if(formCadastroEmpresa) {
        formCadastroEmpresa.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const senha = document.getElementById('senha-empresa').value;
            const confirmarSenha = document.getElementById('confirmar-senha-empresa').value;
            
            if(senha !== confirmarSenha) {
                alert('As senhas não coincidem!');
                return;
            }
            
            // Aqui você faria a chamada para a API de cadastro
            alert('Cadastro de empresa realizado com sucesso!');
            window.location.href = '../index.html';
        });
    }

    // Validação de formulário de login
    const formLogin = document.getElementById('form-login');
    if(formLogin) {
        formLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email-login').value;
            const senha = document.getElementById('senha-login').value;
            
            // Aqui você faria a chamada para a API de login
            // Simulação de login bem-sucedido
            if(email && senha) {
                alert('Login realizado com sucesso!');
                window.location.href = 'dashboard.html';
            } else {
                alert('Por favor, preencha todos os campos!');
            }
        });
    }
});

// Função para máscara de CPF
function mascaraCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
}

// Função para máscara de CNPJ
function mascaraCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, "");
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
    return cnpj;
}

// Adicionando máscaras aos campos
document.addEventListener('DOMContentLoaded', function() {
    const cpfField = document.getElementById('cpf');
    if(cpfField) {
        cpfField.addEventListener('input', function() {
            this.value = mascaraCPF(this.value);
        });
    }

    const cnpjField = document.getElementById('cnpj');
    if(cnpjField) {
        cnpjField.addEventListener('input', function() {
            this.value = mascaraCNPJ(this.value);
        });
    }
});
