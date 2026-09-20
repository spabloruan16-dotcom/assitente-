// =========================================================
// CENTRAL DE MARKETING (marketing_comerciante.html)
// =========================================================
// Esta tela ainda é só uma vitrine: nenhuma das ferramentas
// (cupons, promoções, lives, etc.) tem uma página própria
// implementada. Por isso, ao clicar em qualquer card, damos um
// retorno visual (animação) e um aviso "em desenvolvimento",
// em vez de deixar o clique sem nenhuma resposta.
// =========================================================

const toast = document.getElementById("toast");
const session = window.comercianteSession;
const PRODUCTS_KEY = "modaCenterProducts";
const CAMPAIGNS_KEY = "modaCenterCampaigns";
const campaignBackdrop = document.getElementById("campaignBackdrop");
const campaignForm = document.getElementById("campaignForm");
const campaignList = document.getElementById("campaignList");
const campaignCount = document.getElementById("campaignCount");
const campaignScope = document.getElementById("campaignScope");
const campaignCategory = document.getElementById("campaignCategory");
const campaignProduct = document.getElementById("campaignProduct");
const campaignCategoryField = document.getElementById("campaignCategoryField");
const campaignProductField = document.getElementById("campaignProductField");
const flashFields = document.getElementById("flashFields");
const campaignNote = document.getElementById("campaignNote");

function readProducts() {
	const all = JSON.parse(localStorage.getItem(PRODUCTS_KEY) || "{}");
	return Array.isArray(all[session?.id]) ? all[session.id] : [];
}

function readCampaigns() {
	const all = JSON.parse(localStorage.getItem(CAMPAIGNS_KEY) || "{}");
	return Array.isArray(all[session?.id]) ? all[session.id] : [];
}

function saveCampaigns(campaigns) {
	const all = JSON.parse(localStorage.getItem(CAMPAIGNS_KEY) || "{}");
	all[session.id] = campaigns;
	localStorage.setItem(CAMPAIGNS_KEY, JSON.stringify(all));
}

function escapeHtml(value) { return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function campaignScopeLabel(campaign) { return campaign.scope === "all" ? "Todos os produtos" : campaign.scope === "category" ? `Categoria: ${campaign.category}` : `Produto: ${campaign.productName}`; }
function renderCampaigns() {
	const campaigns = readCampaigns();
	campaignCount.textContent = campaigns.length;
	campaignList.innerHTML = campaigns.length ? campaigns.map(campaign => `<article class="campaign-item"><span class="campaign-type">${campaign.type === "flash" ? "⚡ Relâmpago" : "% Promoção"}</span><div><strong>${escapeHtml(campaign.name)}</strong><small>${campaign.discount}% OFF · ${escapeHtml(campaignScopeLabel(campaign))}</small>${campaign.type === "flash" ? `<small>${campaign.untilStock ? "Até o estoque acabar" : `${campaign.start ? new Date(campaign.start).toLocaleString("pt-BR") : "Agora"} até ${campaign.end ? new Date(campaign.end).toLocaleString("pt-BR") : "sem fim"}`}</small>` : ""}</div><button type="button" data-campaign-id="${escapeHtml(campaign.id)}" aria-label="Remover campanha">×</button></article>`).join("") : '<p class="campaign-empty">Nenhuma campanha criada ainda.</p>';
	campaignList.querySelectorAll("button[data-campaign-id]").forEach(button => button.addEventListener("click", () => {
		const products = readProducts();
		const campaigns = readCampaigns().filter(campaign => campaign.id !== button.dataset.campaignId);
		localStorage.setItem(PRODUCTS_KEY, JSON.stringify({ ...JSON.parse(localStorage.getItem(PRODUCTS_KEY) || "{}"), [session.id]: products }));
		saveCampaigns(campaigns);
		renderCampaigns();
		showToast("Campanha removida.");
	}));
}

function fillCampaignTargets() {
	const products = readProducts();
	const categories = [...new Set(products.map(product => product.category).filter(Boolean))];
	campaignCategory.innerHTML = categories.map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
	campaignProduct.innerHTML = products.map(product => `<option value="${escapeHtml(product.id)}">${escapeHtml(product.name)}</option>`).join("");
}

function openCampaign(type) {
	campaignForm.reset();
	document.getElementById("campaignTitle").textContent = type === "flash" ? "Criar oferta relâmpago" : "Criar promoção";
	document.getElementById("campaignEyebrow").textContent = type === "flash" ? "OFERTA POR TEMPO LIMITADO" : "NOVA CAMPANHA";
	campaignForm.dataset.type = type;
	fillCampaignTargets();
	campaignNote.textContent = "";
	flashFields.hidden = type !== "flash";
	campaignBackdrop.hidden = false;
	campaignScope.dispatchEvent(new Event("change"));
}

function closeCampaign() { campaignBackdrop.hidden = true; }

campaignScope?.addEventListener("change", () => {
	const scope = campaignScope.value;
	campaignCategoryField.hidden = scope !== "category";
	campaignProductField.hidden = scope !== "product";
});

document.getElementById("promotionsCard")?.addEventListener("click", () => openCampaign("promotion"));
document.getElementById("flashOffersCard")?.addEventListener("click", () => openCampaign("flash"));
document.getElementById("closeCampaign")?.addEventListener("click", closeCampaign);
campaignBackdrop?.addEventListener("click", event => { if (event.target === campaignBackdrop) closeCampaign(); });

campaignForm?.addEventListener("submit", event => {
	event.preventDefault();
	const products = readProducts();
	const name = document.getElementById("campaignName").value.trim();
	const discount = Number(document.getElementById("campaignDiscount").value);
	const scope = campaignScope.value;
	const category = campaignCategory.value;
	const productId = campaignProduct.value;
	const type = campaignForm.dataset.type;
	const start = document.getElementById("flashStart").value;
	const end = document.getElementById("flashEnd").value;
	const untilStock = document.getElementById("flashUntilStock").checked;
	if (!products.length) { campaignNote.textContent = "Cadastre um produto antes de criar uma campanha."; return; }
	if (type === "flash" && !untilStock && start && end && new Date(end) <= new Date(start)) { campaignNote.textContent = "O término precisa ser depois do início."; return; }
	const selected = products.filter(product => scope === "all" || (scope === "category" ? product.category === category : String(product.id) === String(productId)));
	selected.forEach(product => { product.discount = discount; product.campaignId = name; if (type === "flash") product.flashOffer = { start: start || new Date().toISOString(), end: end || null, untilStock }; });
	const allProducts = JSON.parse(localStorage.getItem(PRODUCTS_KEY) || "{}");
	allProducts[session.id] = products;
	localStorage.setItem(PRODUCTS_KEY, JSON.stringify(allProducts));
	const campaigns = readCampaigns();
	campaigns.push({ id: `${Date.now()}`, name, discount, scope, category, productId, productName: selected[0]?.name || "", type, start, end, untilStock });
	saveCampaigns(campaigns);
	renderCampaigns();
	closeCampaign();
	showToast(`${type === "flash" ? "Oferta relâmpago" : "Promoção"} ativada para ${selected.length} produto(s).`);
});

renderCampaigns();

// Mostra uma mensagem curta no rodapé da tela por ~2,2s.
function showToast(message) {
	if (!toast) return;

	toast.textContent = message;
	toast.classList.add("show");

	clearTimeout(window.toastTimer);
	window.toastTimer = setTimeout(() => {
		toast.classList.remove("show");
	}, 2200);
}

// =========================================================
// CARDS DE FERRAMENTAS
// =========================================================
document.querySelectorAll(".marketing-card").forEach(card => {
	card.addEventListener("click", () => {
		if (card.id === "promotionsCard" || card.id === "flashOffersCard") return;
		card.animate([
			{ transform: "scale(1)" },
			{ transform: "scale(.97)" },
			{ transform: "scale(1)" }
		], { duration: 180 });

		// Usa o texto do título do card na mensagem do toast.
		const title = card.querySelector("strong")?.textContent || "Esta ferramenta";
		showToast(`${title}: recurso em desenvolvimento.`);
	});
});

// =========================================================
// BANNER "DICAS PARA VENDER MAIS"
// =========================================================
document.querySelector(".banner-button")?.addEventListener("click", () => {
	showToast("Conteúdo de dicas em desenvolvimento.");
});

// =========================================================
// MENU INFERIOR
// =========================================================
// Mesmo comportamento usado em chat.js: cada botão tem um
// data-page com o destino (arquivo + query string opcional).
document.querySelectorAll(".bottom-navigation .nav-item").forEach(button => {
	button.addEventListener("click", () => {
		const page = button.dataset.page;
		if (page) window.location.href = page;
	});
});
