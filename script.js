// Funções gerais do aplicativo
document.addEventListener('DOMContentLoaded', function() {
    // Menu responsivo
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    document.querySelector('header .container').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('header nav');
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });

    // Verificar tamanho da tela e ajustar menu
    function ajustarMenu() {
        const nav = document.querySelector('header nav');
        if(window.innerWidth > 768) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }

    window.addEventListener('resize', ajustarMenu);
    ajustarMenu();

    // Efeitos de hover nos boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });

    // Simular dados de EPIs (para demonstração)
    if(document.getElementById('dashboard')) {
        carregarDadosEPI();
    }
});

// Função para carregar dados de EPI (simulação)
function carregarDadosEPI() {
    const dadosEPI = [
        { nome: 'Capacete', quantidade: 150, vencimento: '15/10/2023' },
        { nome: 'Óculos de Proteção', quantidade: 200, vencimento: '20/11/2023' },
        { nome: 'Luvas', quantidade: 500, vencimento: '05/12/2023' },
        { nome: 'Botas', quantidade: 100, vencimento: '30/09/2023' }
    ];

    const tbody = document.querySelector('#tabela-epis tbody');
    if(tbody) {
        tbody.innerHTML = '';
        dadosEPI.forEach(epi => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${epi.nome}</td>
                <td>${epi.quantidade}</td>
                <td>${epi.vencimento}</td>
                <td><button class="btn-small">Gerenciar</button></td>
            `;
            tbody.appendChild(tr);
        });
    }
}