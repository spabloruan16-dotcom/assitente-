# Arquitetura atual e direção futura

## Fluxo atual

Browser → HTML/CSS/JS → `server.js` → `server/data.json`

## Direção futura

Browser → UI → módulos JS → API → serviços do servidor → banco de dados
                                     └→ `/api/assistant/chat` → provedor de IA

A chave de API da IA deve permanecer somente no servidor.
