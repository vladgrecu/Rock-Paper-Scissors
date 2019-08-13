const selected = document.getElementsByClassName('option');
const posibilitati = ['rock', 'paper', 'scissors'];
const joc = document.getElementById('joc');
const h3 = document.getElementsByClassName('aiChoice')[0];

for (let i = 0; i < selected.length; i++){
    let option = selected[i];
    option.addEventListener("click", function(){
        this.classList.add("selected");
        disable();
        play(this);
    });
}
function play(option){
    let playerPick = option.getAttribute('value');
    console.log('Player: ',playerPick);
    let aiPick = posibilitati[Math.floor(Math.random() * posibilitati.length)];
    console.log('AI: ', aiPick);
    if (playerPick === aiPick){
        console.log("Remiza");
    }
    else if((playerPick === 'rock' && aiPick ==='paper')||
            (playerPick === 'scissors' && aiPick === 'rock')||
            (playerPick === 'paper' && aiPick === 'scissors')){
        console.log("You lose");
    }
    else {
        console.log("You Win");
    }
    showAiPick(playerPick, aiPick);
}
function showAiPick(player, ai){
    let alegere = document.createElement('div');
    alegere.classList.add("optionAI", ai);
    joc.appendChild(alegere);
    h3.classList.remove('aiChoice');
}
function disable() {
    for (let i = 0; i < selected.length; i++){
        let option = selected[i];
        if(!option.classList.contains("selected")){
            option.classList.add("disable");
        }
    }
}