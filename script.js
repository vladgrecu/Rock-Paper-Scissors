const selected = document.getElementsByClassName('option');
const posibilitati = ['rock', 'paper', 'scissors'];
const joc = document.getElementById('joc');
const aiTitle = document.getElementsByClassName('aiChoice')[0];
const resetBtn = document.querySelector('button');

let playerWins = 0;
let aiWins = 0;

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
        posteazaRezultat("Remiza");
    }
    else if((playerPick === 'rock' && aiPick ==='paper')||
            (playerPick === 'scissors' && aiPick === 'rock')||
            (playerPick === 'paper' && aiPick === 'scissors')){
        posteazaRezultat("You lose");
        aiWins++;
        document.getElementById("aiWins").innerHTML = aiWins;
        console.log(aiWins);
    }
    else {
        posteazaRezultat("You Win");
        playerWins++;
        document.getElementById("playerWins").innerHTML = playerWins;
        console.log(playerWins);
    }
    showAiPick(playerPick, aiPick);
}
function showAiPick(player, ai){
    let alegere = document.createElement('div');
    alegere.classList.add("optionAI", ai);
    joc.appendChild(alegere);
    aiTitle.classList.remove('aiChoice');
}
function disable() {
    for (let i = 0; i < selected.length; i++){
        let option = selected[i];
        if(!option.classList.contains("selected")){
            option.classList.add("disable");
        }
    }
}
function posteazaRezultat(rez){
    let rezultat = document.getElementById('rezultat');
    rezultat.innerHTML = rez;
}

resetBtn.addEventListener("click", reset);

function reset(){
    for (let i = 0; i < selected.length; i++){
        let option = selected[i];

        option.classList.remove("selected");
        option.classList.remove("optionAI");
        option.classList.remove("disable");
        aiTitle.classList.add('aiChoice');
    }
    joc.innerHTML = '<h3>Calculatorul a ales:</h3>';
}