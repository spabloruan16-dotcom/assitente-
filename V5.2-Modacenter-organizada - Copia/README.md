# Moda Center V5.2 — Base Organizada

Base reorganizada da V5.1 para continuar o desenvolvimento no VS Code.

## Estrutura

- `index.html` — entrada principal
- `*.html` — telas principais do sistema
- `pages/` — páginas auxiliares
- `css/` — estilos globais, componentes e estilos por tela
- `js/` — lógica do front-end
- `assets/` — imagens e recursos visuais
- `data/` — dados auxiliares do catálogo
- `server/` — dados persistentes do protótipo
- `server.js` — servidor local/API
- `config/` — configurações de desenvolvimento
- `docs/` — documentação do projeto
- `.vscode/` — configuração do VS Code

## Como iniciar

Requisitos: Node.js 20+.

```bash
npm install
npm start
```

Depois abra:

`http://localhost:3000`

Para testar no celular, computador e celular precisam estar na mesma rede Wi-Fi e o servidor deve estar rodando no computador.

## API básica

- `GET /api/health`
- `GET /api/catalog`
- `GET /api/stores`
- `POST /api/auth/register`
- `POST /api/auth/sync`

## Próximas etapas recomendadas

1. Separar autenticação e sessão do restante do `main.js`.
2. Centralizar chamadas `fetch` em um módulo de API.
3. Parar de armazenar senhas em texto no navegador quando o projeto sair do protótipo.
4. Migrar `server/data.json` para banco de dados quando houver múltiplos usuários reais.
5. Criar `/api/assistant/chat` para integrar a futura IA sem expor chave de API no navegador.
6. Testar as telas em 320, 375, 390, 414, 768, 1024 e 1366+ px.

## Observação

Esta versão prioriza estabilidade: a estrutura de URLs e caminhos existentes foi preservada para reduzir quebras. A organização mais profunda dos módulos pode ser feita por etapas.
