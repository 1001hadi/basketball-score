
let homeScore = document.getElementById('h-score');
let guestScore = document.getElementById('g-score');


function addOneHome() {
    Number(homeScore.textContent ++);
}

function addTwoHome(){
    let two =2;
    let result = Number(homeScore.textContent);

    homeScore.textContent = result + two;
    
}

function addThreeHome() {
    let three = 3;
    let result = Number(homeScore.textContent);

    homeScore.textContent = three + result;
}

function addOneGuest() {
    Number(guestScore.textContent ++);
}

function addTwoGuest(){
    let two =2;
    let result = Number(guestScore.textContent);

    guestScore.textContent = result + two;
    
}

function addThreeGuest() {
    let three = 3;
    let result = Number(guestScore.textContent);

    guestScore.textContent = three + result;
}

function resetGame() {
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}