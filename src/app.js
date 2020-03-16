const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    // "Popcorn",
    // "Gemwoman",
    // "Bolt",
    // "Antwoman",
    // "Mask",
    // "Tiger",
    // "Captain",
    // "Catwoman",
    // "Fish",
    // "Hulk",
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
];

// Player Class
class Player {
    constructor(id, name, type) {
        // Create member variables and assign values
        // Type your code
        this.id = id;
        this.name = name;
        this.type = hero || villan;
        img: "images/hero-1.png",
            strength = getRandomStrength();
    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100);
    }

    // Create a player for displaying
    view = () => {
        // Accumulate HTML template
        // Type your code here

        return player;
    }
}

// Superwar Class
class Superwar {
    constructor(players) {
        // Create a field players 
        // Use Map method to loop through players argument and create new players
        // Type your code here
        let newPlayer = new players.map(function (index, item, array) {
            returm index, item;
        });
    }

    // Display players in HTML
    viewPlayers = () => {
        view = () => {
            `<div class="player" data-id="${players[i].id}">`
            `<img src="${players[i].image}">`
            `<div class="name">${players[i].name}</div>`
            `<div class="strength">${players[i].strength}</div>`
            `</div>`
        }
        let team = document.getElementById('heroes');
        team.innerHTML = '';
        let fragment =
            this.buildPlayers('hero');
        team.append(fragment);

        team = document.getElementById('villains');
        team.innerHTML = '';
        fragment =
            this.buildPlayers('villain');
        team.append(fragment);
    }

    // Build players fragment 
    buildPlayers = (type) => {
        let fragment = document.createDocumentFragment();
        this.players
            .filter(player => player.type == type)
            .forEach(player => fragment.append(player.view()));
        return fragment;
    }

}


window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}
