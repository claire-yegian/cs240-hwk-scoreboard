/**
 * Scoreboard Homework
 * @ClaireYegian
 */
const innScores = {
    ain1 :  document.querySelector('#ain1'),
    ain2 :  document.querySelector('#ain2'),
    ain3 :  document.querySelector('#ain3'),
    ain4 :  document.querySelector('#ain4'),
    ain5 :  document.querySelector('#ain5'),
    ain6 :  document.querySelector('#ain6'),
    ain7 :  document.querySelector('#ain7'),
    aR : document.querySelector('#aR'),

    hin1 :  document.querySelector('#hin1'),
    hin2 :  document.querySelector('#hin2'),
    hin3 :  document.querySelector('#hin3'),
    hin4 :  document.querySelector('#hin4'),
    hin5 :  document.querySelector('#hin5'),
    hin6 :  document.querySelector('#hin6'),
    hin7 :  document.querySelector('#hin7'),
    hR : document.querySelector('#hR')
};

let add = document.querySelector('#plus');
let subtract = document.querySelector('#minus');
let team = document.querySelector('#team')
let inning = document.querySelector('#inning')
add.addEventListener("click", addRun);
subtract.addEventListener('click', subtractRun);

function getBoxName() {
    let boxName = '';
    if (team.value == 'home') {
        boxName += 'hin'
    }
    else if (team.value == 'away') {
        boxName += 'ain'
    }
    boxName += inning.value;
    return boxName;
}

function addRun() {
    let box = getBoxName();
    let score = parseInt(innScores[box].innerHTML);
    score += 1;
    innScores[box].innerHTML = score;
    if (team.value == 'home') {
        console.log(innScores.hR.innerHTML)
        let totalScore = parseInt(innScores.hR.innerHTML);
        totalScore += 1;
        innScores.hR.innerHTML = totalScore
    }
    else {
        let totalScore = parseInt(innScores.aR.innerHTML);
        totalScore += 1;
        innScores.aR.innerHTML = totalScore
    }
}

function subtractRun() {

}