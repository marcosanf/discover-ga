const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"
const cardsContainer = document.querySelector("#cards");
let data = [];

async function fetchCards() {
    return await fetch(apiUrl)
    .then(async (r) => await r.json())
}

function renderCards(cards){
    cardsContainer.innerHTML = "";
    cards.map(renderCard);
}

function renderCard(card){
    const div = document.createElement("div");
    div.style.width = "100";
    div.style.margin = "";
    div.className = "card";
    div.innerHTML = `
    <div class="card-body">
    <img
        class="card-image"
        src="${card.photo}" 
        alt="">
    <div class="content">
        <h3>${card.name}</h3>
        <p>${card.property_type}</p>
        <p>R$ ${card.price},00/noite</p>
        <div class="description">
        <a href="#">Slavar</a>
    </div>
</div>
    `;
    cardsContainer.appendChild(div);
}

async function main() {
    data = await fetchCards();
    if(data) {
        renderCards(data);
    }
}

main();