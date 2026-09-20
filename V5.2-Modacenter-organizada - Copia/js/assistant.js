window.addEventListener("DOMContentLoaded", () => {
  initAssistantWidget();

  const pagePath = window.location.pathname;
  let steps = [];

  if (pagePath.includes("produto-novo")) {
    // TUTORIAL EXCLUSIVO DE CADASTRO DE PRODUTO
    steps = [
      {
        title: "📦 Cadastro de Novo Produto",
        text: "Aqui você adiciona novos itens ao catálogo da sua loja. Preencha as informações com atenção para atratividade do seu anúncio.",
        btnText: "Próximo"
      },
      {
        title: "🏷️ Categoria e Informações",
        text: "Escolha o <strong>Tipo de produto</strong> adequado e defina o nome, preço e quantidade disponível do item.",
        btnText: "Próximo"
      },
      {
        title: "🎨 Variações e Atacado",
        text: "Cadastre opções de <strong>cor e tamanho</strong> e ative a opção de <strong>venda no atacado</strong> caso ofereça descontos em quantidade.",
        btnText: "Próximo"
      },
      {
        title: "📸 Imagem e Confirmação",
        text: "Adicione uma boa foto do produto e clique em <strong>Cadastrar produto</strong> ao final para publicar o item na sua loja.",
        btnText: "Entendi!"
      }
    ];
  } else if (pagePath.includes("marketing")) {
    steps = [
      {
        title: "📣 Central de Marketing",
        text: "Bem-vindo à sua Central de Marketing! Aqui você encontra soluções para atrair clientes, aumentar suas vendas e promover sua marca no Moda Center.",
        btnText: "Próximo"
      },
      {
        title: "🏷️ Promoções e Ofertas Relâmpago",
        text: "Crie campanhas de desconto exclusivas para a sua loja através dos botões <strong>Promoções</strong> e <strong>Ofertas e Relâmpago da Loja</strong>.",
        btnText: "Próximo"
      },
      {
        title: "📊 Campanhas Ativas",
        text: "Acompanhe na seção <strong>'Campanhas que estão rodando'</strong> todas as promoções que estão ativas no momento para os seus clientes.",
        btnText: "Próximo"
      },
      {
        title: "💡 Dicas de Vendas",
        text: "Consulte o banner de <strong>Dicas para vender mais</strong> para conferir tutoriais, estratégias de divulgação e conteúdos voltados para o comércio do Moda Center.",
        btnText: "Entendi!"
      }
    ];
  } else if (pagePath.includes("chat")) {
    steps = [
      {
        title: "💬 Central de Mensagens",
        text: "Esta é sua central de conversas! Aqui você se comunica diretamente com clientes para tirar dúvidas, negociar e acompanhar pedidos.",
        btnText: "Próximo"
      },
      {
        title: "🔎 Buscando Conversas",
        text: "Utilize a barra <strong>'Pesquise algo ou alguém...'</strong> no topo para encontrar mensagens antigas ou localizar conversas com clientes específicos.",
        btnText: "Próximo"
      },
      {
        title: "➕ Iniciar Mensagem",
        text: "Clique no botão flutuante <strong>+</strong> ou no ícone no cabeçalho para visualizar seus contatos e iniciar uma nova conversa.",
        btnText: "Próximo"
      },
      {
        title: "🤖 Suporte do Robô",
        text: "Caso precise de ajuda para localizar setores ou tirar dúvidas sobre o sistema, clique no ícone do <strong>Robô Guia</strong> no canto superior.",
        btnText: "Entendi!"
      }
    ];
  } else if (pagePath.includes("perfil")) {
    steps = [
      {
        title: "👤 Perfil da Loja",
        text: "Aqui você gerencia a identidade da sua loja e acompanha suas métricas: total de vendas, catálogo ativo e nota de avaliação.",
        btnText: "Próximo"
      },
      {
        title: "✏️ Editar Dados e Localização",
        text: "Clique em <strong>'Editar meu perfil'</strong> para atualizar a foto da loja, alterar os segmentos de venda e manter o Setor, Rua e Box atualizados.",
        btnText: "Próximo"
      },
      {
        title: "📊 Relatórios e Atalhos",
        text: "Utilize os atalhos para abrir seus <strong>Relatórios de vendas</strong>, consultar <strong>Minhas avaliações</strong> ou visualizar as <strong>Últimas vendas</strong>.",
        btnText: "Próximo"
      },
      {
        title: "⚙️ Configurações",
        text: "No ícone de engrenagem <strong>⚙</strong> no topo, você gerencia preferências de notificações, dados de segurança ou encerra sua sessão.",
        btnText: "Entendi!"
      }
    ];
  } else if (pagePath.includes("cliente")) {
    steps = [
      {
        title: "🛍️ Bem-vindo(a) ao Moda Center!",
        text: "Aqui você encontra as melhores ofertas diretamente das lojas cadastradas. Vamos conferir como explorar a plataforma?",
        btnText: "Próximo"
      },
      {
        title: "✨ Studio de Estilo & IA",
        text: "Acesse <strong>Montar look com IA</strong> para combinações personalizadas ou use o <strong>Espelho Mágico</strong> para visualizar as peças.",
        btnText: "Próximo"
      },
      {
        title: "🔎 Catálogo de Produtos",
        text: "Utilize a barra de pesquisa para buscar roupas e acessórios específicos, veja detalhes dos itens e adicione ao seu carrinho.",
        btnText: "Próximo"
      },
      {
        title: "🛒 Pedidos e Navegação",
        text: "Acompanhe seus itens no <strong>Carrinho</strong>, veja o histórico em <strong>Minhas compras</strong> e fale diretamente com as lojas no <strong>Chat</strong>.",
        btnText: "Boas compras!"
      }
    ];
  } else {
    steps = [
      {
        title: "👋 Bem-vindo(a), Comerciante!",
        text: "Este é o seu painel central no Moda Center. A partir daqui você tem acesso rápido a todo o gerenciamento da sua loja.",
        btnText: "Próximo"
      },
      {
        title: "👕 Seus Produtos e Pedidos",
        text: "Na seção <strong>'Seus produtos'</strong> você visualiza seu catálogo e acessa diretamente a aba <strong>📦 Pedidos dos clientes</strong>.",
        btnText: "Próximo"
      },
      {
        title: "⚡ Atalhos Rápidos",
        text: "Utilize os botões de atalho para <strong>Cadastrar novo produto</strong> (➕), filtrar por categorias ou gerenciar seus itens em estoque.",
        btnText: "Próximo"
      },
      {
        title: "🧭 Menu Inferior",
        text: "Navegue facilmente entre a tela de <strong>Início</strong>, responda seus clientes no <strong>Chat</strong>, crie campanhas em <strong>Marketing</strong> e edite seu <strong>Perfil</strong>.",
        btnText: "Começar!"
      }
    ];
  }

  initTutorialSystem(steps);
});

function initAssistantWidget() {
  if (document.getElementById("assistant-container")) return;

  const container = document.createElement("div");
  container.id = "assistant-container";
  container.innerHTML = `
    <div id="assistant-box" class="hidden">
      <div class="assistant-header">
        <span>Guia Moda Center</span>
        <button id="close-btn">&times;</button>
      </div>
      <div class="assistant-body">
        <p id="assistant-message">Como posso ajudar você hoje?</p>
      </div>
    </div>
    <button id="assistant-avatar" aria-label="Guia do Site">
      <span style="font-size: 22px;">🤖</span>
    </button>
  `;
  document.body.appendChild(container);

  const box = document.getElementById("assistant-box");
  const avatar = document.getElementById("assistant-avatar");
  const closeBtn = document.getElementById("close-btn");

  if (avatar) avatar.addEventListener("click", () => box.classList.toggle("hidden"));
  if (closeBtn) closeBtn.addEventListener("click", () => box.classList.add("hidden"));
}

function initTutorialSystem(steps) {
  const tutorialModal = document.getElementById("tutorialModal");
  const tutorialTitle = document.getElementById("tutorialTitle");
  const tutorialText = document.getElementById("tutorialText");
  const nextTutorialBtn = document.getElementById("nextTutorialBtn");
  const skipTutorialBtn = document.getElementById("skipTutorialBtn");
  const dots = document.querySelectorAll(".step-dot");

  if (!tutorialModal || !steps || steps.length === 0) return;

  let currentStep = 0;

  function updateStepView() {
    const step = steps[currentStep];
    if (tutorialTitle) tutorialTitle.innerHTML = step.title;
    if (tutorialText) tutorialText.innerHTML = step.text;
    if (nextTutorialBtn) nextTutorialBtn.innerText = step.btnText;

    if (dots) {
      dots.forEach((dot, index) => {
        if (index === currentStep) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
  }

  if (nextTutorialBtn) {
    nextTutorialBtn.onclick = () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateStepView();
      } else {
        tutorialModal.style.display = "none";
      }
    };
  }

  if (skipTutorialBtn) {
    skipTutorialBtn.onclick = () => {
      tutorialModal.style.display = "none";
    };
  }

  currentStep = 0;
  updateStepView();
  tutorialModal.style.display = "flex";
}
window.addEventListener("DOMContentLoaded", () => {
  initAssistantWidget();

  const pagePath = window.location.pathname;
  let steps = [];

  if (pagePath.includes("produto-novo")) {
    steps = [
      {
        title: "📦 Cadastro de Novo Produto",
        text: "Aqui você adiciona novos itens ao catálogo da sua loja. Preencha as informações com atenção para atratividade do seu anúncio.",
        btnText: "Próximo"
      },
      {
        title: "🏷️ Categoria e Informações",
        text: "Escolha o <strong>Tipo de produto</strong> adequado e defina o nome, preço e quantidade disponível do item.",
        btnText: "Próximo"
      },
      {
        title: "🎨 Variações e Atacado",
        text: "Cadastre opções de <strong>cor e tamanho</strong> e ative a opção de <strong>venda no atacado</strong> caso ofereça descontos em quantidade.",
        btnText: "Próximo"
      },
      {
        title: "📸 Imagem e Confirmação",
        text: "Adicione uma boa foto do produto e clique em <strong>Cadastrar produto</strong> ao final para publicar o item na sua loja.",
        btnText: "Entendi!"
      }
    ];
  } else if (pagePath.includes("marketing")) {
    steps = [
      {
        title: "📣 Central de Marketing",
        text: "Bem-vindo à sua Central de Marketing! Aqui você encontra soluções para atrair clientes, aumentar suas vendas e promover sua marca no Moda Center.",
        btnText: "Próximo"
      },
      {
        title: "🏷️ Promoções e Ofertas Relâmpago",
        text: "Crie campanhas de desconto exclusivas para a sua loja através dos botões <strong>Promoções</strong> e <strong>Ofertas e Relâmpago da Loja</strong>.",
        btnText: "Próximo"
      },
      {
        title: "📊 Campanhas Ativas",
        text: "Acompanhe na seção <strong>'Campanhas que estão rodando'</strong> todas as promoções que estão ativas no momento para os seus clientes.",
        btnText: "Próximo"
      },
      {
        title: "💡 Dicas de Vendas",
        text: "Consulte o banner de <strong>Dicas para vender mais</strong> para conferir tutoriais, estratégias de divulgação e conteúdos voltados para o comércio do Moda Center.",
        btnText: "Entendi!"
      }
    ];
  } else if (pagePath.includes("chat")) {
    steps = [
      {
        title: "💬 Central de Mensagens",
        text: "Esta é sua central de conversas! Aqui você se comunica diretamente com clientes para tirar dúvidas, negociar e acompanhar pedidos.",
        btnText: "Próximo"
      },
      {
        title: "🔎 Buscando Conversas",
        text: "Utilize a barra <strong>'Pesquise algo ou alguém...'</strong> no topo para encontrar mensagens antigas ou localizar conversas com clientes específicos.",
        btnText: "Próximo"
      },
      {
        title: "➕ Iniciar Mensagem",
        text: "Clique no botão flutuante <strong>+</strong> ou no ícone no cabeçalho para visualizar seus contatos e iniciar uma nova conversa.",
        btnText: "Próximo"
      },
      {
        title: "🤖 Suporte do Robô",
        text: "Caso precise de ajuda para localizar setores ou tirar dúvidas sobre o sistema, clique no ícone do <strong>Robô Guia</strong> no canto superior.",
        btnText: "Entendi!"
      }
    ];
  } else if (pagePath.includes("perfil")) {
    steps = [
      {
        title: "👤 Perfil da Loja",
        text: "Aqui você gerencia a identidade da sua loja e acompanha suas métricas: total de vendas, catálogo ativo e nota de avaliação.",
        btnText: "Próximo"
      },
      {
        title: "✏️ Editar Dados e Localização",
        text: "Clique em <strong>'Editar meu perfil'</strong> para atualizar a foto da loja, alterar os segmentos de venda e manter o Setor, Rua e Box atualizados.",
        btnText: "Próximo"
      },
      {
        title: "📊 Relatórios e Atalhos",
        text: "Utilize os atalhos para abrir seus <strong>Relatórios de vendas</strong>, consultar <strong>Minhas avaliações</strong> ou visualizar as <strong>Últimas vendas</strong>.",
        btnText: "Próximo"
      },
      {
        title: "⚙️ Configurações",
        text: "No ícone de engrenagem <strong>⚙</strong> no topo, você gerencia preferências de notificações, dados de segurança ou encerra sua sessão.",
        btnText: "Entendi!"
      }
    ];
  } else if (pagePath.includes("cliente")) {
    steps = [
      {
        title: "🛍️ Bem-vindo(a) ao Moda Center!",
        text: "Aqui você encontra as melhores ofertas diretamente das lojas cadastradas. Vamos conferir como explorar a plataforma?",
        btnText: "Próximo"
      },
      {
        title: "✨ Studio de Estilo & IA",
        text: "Acesse <strong>Montar look com IA</strong> para combinações personalizadas ou use o <strong>Espelho Mágico</strong> para visualizar as peças.",
        btnText: "Próximo"
      },
      {
        title: "🔎 Catálogo de Produtos",
        text: "Utilize a barra de pesquisa para buscar roupas e acessórios específicos, veja detalhes dos itens e adicione ao seu carrinho.",
        btnText: "Próximo"
      },
      {
        title: "🛒 Pedidos e Navegação",
        text: "Acompanhe seus itens no <strong>Carrinho</strong>, veja o histórico em <strong>Minhas compras</strong> e fale diretamente com as lojas no <strong>Chat</strong>.",
        btnText: "Boas compras!"
      }
    ];
  } else {
    steps = [
      {
        title: "👋 Bem-vindo(a), Comerciante!",
        text: "Este é o seu painel central no Moda Center. A partir daqui você tem acesso rápido a todo o gerenciamento da sua loja.",
        btnText: "Próximo"
      },
      {
        title: "👕 Seus Produtos e Pedidos",
        text: "Na seção <strong>'Seus produtos'</strong> você visualiza seu catálogo e acessa diretamente a aba <strong>📦 Pedidos dos clientes</strong>.",
        btnText: "Próximo"
      },
      {
        title: "⚡ Atalhos Rápidos",
        text: "Utilize os botões de atalho para <strong>Cadastrar novo produto</strong> (➕), filtrar por categorias ou gerenciar seus itens em estoque.",
        btnText: "Próximo"
      },
      {
        title: "🧭 Menu Inferior",
        text: "Navegue facilmente entre a tela de <strong>Início</strong>, responda seus clientes no <strong>Chat</strong>, crie campanhas em <strong>Marketing</strong> e edite seu <strong>Perfil</strong>.",
        btnText: "Começar!"
      }
    ];
  }

  initTutorialSystem(steps);
});

// =========================================================
// BASE DE DADOS DE DÚVIDAS E SOLUÇÕES (FAQ)
// =========================================================
const faqDatabase = {
  cliente: [
    {
      q: "Como faço para acompanhar meu pedido?",
      a: "Acesse a aba <strong>'Minhas compras'</strong> no menu inferior para ver o status em tempo real de cada pedido efetuado."
    },
    {
      q: "Como entrar em contato com um comerciante?",
      a: "Na página do produto ou pelo menu de navegação, clique na opção <strong>'Conversas / Chat'</strong> para falar diretamente com a loja."
    },
    {
      q: "Quais as formas de recebimento dos produtos?",
      a: "No momento da compra você pode optar por <strong>Retirar na loja</strong> (no box informado) ou receber via <strong>Entrega no seu endereço</strong>."
    },
    {
      q: "Como funciona o Espelho Mágico?",
      a: "Na tela inicial de compras, acesse o <strong>Espelho Mágico</strong> e suba uma foto sua para pré-visualizar as combinações de peças oferecidas na plataforma."
    }
  ],
  comerciante: [
    {
      q: "Como cadastrar novos produtos na minha loja?",
      a: "Clique no botão flutuante <strong>(+)</strong> no canto inferior ou acesse o menu de cadastro. Preencha nome, valor, foto, estoque e variações do produto."
    },
    {
      q: "Como ativar preços para vendas no Atacado?",
      a: "Na tela de cadastrar ou editar produto, marque a caixa <strong>'Vendo este produto no atacado'</strong>, informe a quantidade mínima e o preço especial por peça."
    },
    {
      q: "Como criar promoções na Central de Marketing?",
      a: "Vá para a aba <strong>Marketing</strong> no menu inferior, selecione <strong>'Promoções'</strong> ou <strong>'Ofertas Relâmpago'</strong> e defina a porcentagem de desconto desejada."
    },
    {
      q: "Como alterar dados como Setor, Rua e Box da loja?",
      a: "Acesse a aba <strong>Perfil</strong> no menu inferior, clique no botão <strong>'Editar meu perfil'</strong> e atualize as informações de localização da sua loja."
    }
  ]
};

// =========================================================
// WIDGET DO ROBÔ GUIA & CENTRAL DE AJUDA
// =========================================================
function initAssistantWidget() {
  if (document.getElementById("assistant-container")) return;

  const container = document.createElement("div");
  container.id = "assistant-container";
  container.innerHTML = `
    <div id="assistant-box" class="hidden">
      <div class="assistant-header">
        <span>🤖 Guia Moda Center</span>
        <button id="close-btn">&times;</button>
      </div>
      <div class="assistant-body">
        <input type="text" id="faqSearch" class="assistant-search-input" placeholder="🔍 Buscar dúvida ou problema...">
        
        <div class="assistant-tabs">
          <button class="tab-btn active" id="tabCliente">Sou Cliente</button>
          <button class="tab-btn" id="tabComerciante">Sou Comerciante</button>
        </div>

        <div id="faqList"></div>
      </div>
    </div>
    <button id="assistant-avatar" aria-label="Guia do Site">
      <span style="font-size: 24px;">🤖</span>
    </button>
  `;
  document.body.appendChild(container);

  const box = document.getElementById("assistant-box");
  const avatar = document.getElementById("assistant-avatar");
  const closeBtn = document.getElementById("close-btn");
  const tabCliente = document.getElementById("tabCliente");
  const tabComerciante = document.getElementById("tabComerciante");
  const searchInput = document.getElementById("faqSearch");

  let currentCategory = window.location.pathname.includes("cliente") ? "cliente" : "comerciante";

  function renderFAQ(filterText = "") {
    const listContainer = document.getElementById("faqList");
    listContainer.innerHTML = "";

    if (currentCategory === "cliente") {
      tabCliente.classList.add("active");
      tabComerciante.classList.remove("active");
    } else {
      tabComerciante.classList.add("active");
      tabCliente.classList.remove("active");
    }

    const items = faqDatabase[currentCategory].filter(item => 
      item.q.toLowerCase().includes(filterText.toLowerCase()) || 
      item.a.toLowerCase().includes(filterText.toLowerCase())
    );

    if (items.length === 0) {
      listContainer.innerHTML = `<p style="font-size:12px; color:#777; text-align:center; padding: 10px;">Nenhuma dúvida encontrada.</p>`;
      return;
    }

    items.forEach((item, idx) => {
      const faqItem = document.createElement("div");
      faqItem.className = "faq-item";
      faqItem.innerHTML = `
        <button class="faq-question">
          <span>${item.q}</span>
          <span style="font-size:10px;">▼</span>
        </button>
        <div class="faq-answer">${item.a}</div>
      `;

      faqItem.querySelector(".faq-question").addEventListener("click", () => {
        faqItem.classList.toggle("open");
      });

      listContainer.appendChild(faqItem);
    });
  }

  // Eventos de clique
  if (avatar) avatar.addEventListener("click", () => {
    box.classList.toggle("hidden");
    renderFAQ();
  });

  if (closeBtn) closeBtn.addEventListener("click", () => box.classList.add("hidden"));

  tabCliente.addEventListener("click", () => {
    currentCategory = "cliente";
    renderFAQ(searchInput.value);
  });

  tabComerciante.addEventListener("click", () => {
    currentCategory = "comerciante";
    renderFAQ(searchInput.value);
  });

  searchInput.addEventListener("input", (e) => {
    renderFAQ(e.target.value);
  });
}

function initTutorialSystem(steps) {
  const tutorialModal = document.getElementById("tutorialModal");
  const tutorialTitle = document.getElementById("tutorialTitle");
  const tutorialText = document.getElementById("tutorialText");
  const nextTutorialBtn = document.getElementById("nextTutorialBtn");
  const skipTutorialBtn = document.getElementById("skipTutorialBtn");
  const dots = document.querySelectorAll(".step-dot");

  if (!tutorialModal || !steps || steps.length === 0) return;

  let currentStep = 0;

  function updateStepView() {
    const step = steps[currentStep];
    if (tutorialTitle) tutorialTitle.innerHTML = step.title;
    if (tutorialText) tutorialText.innerHTML = step.text;
    if (nextTutorialBtn) nextTutorialBtn.innerText = step.btnText;

    if (dots) {
      dots.forEach((dot, index) => {
        if (index === currentStep) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
  }

  if (nextTutorialBtn) {
    nextTutorialBtn.onclick = () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateStepView();
      } else {
        tutorialModal.style.display = "none";
      }
    };
  }

  if (skipTutorialBtn) {
    skipTutorialBtn.onclick = () => {
      tutorialModal.style.display = "none";
    };
  }

  currentStep = 0;
  updateStepView();
  tutorialModal.style.display = "flex";
}