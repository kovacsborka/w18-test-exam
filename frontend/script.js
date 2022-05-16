function loadEvent() {
    console.log("The Beer Data");
    let rootElement = document.getElementById("root")
    

    let header = `
    <header class="header">
        <h1 class="title">Best Beers</h1>
        <button class="material-icons"> 
            menu
        </button>
    </header>
    `

    rootElement.insertAdjacentHTML("beforeend", header)

    fetch("beers.json")
        .then(response => response.json())
        .then(data => {
            data.cards.forEach(card => {
                let htmlC = `
                <div class="card">
                    <h2>${card.title}</h2>
                    <h4>${card.sub}</h4>
                    <p>${card.text}</p>
                </div>`;
                rootElement.insertAdjacentHTML("beforeend", htmlC)
            });
        })  
}
window.addEventListener("load", loadEvent);