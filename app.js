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

/** adding to and subtracting from score */
let add = document.querySelector('#plus');
let subtract = document.querySelector('#minus');
let team = document.querySelector('#team')
let inning = document.querySelector('#inning')
add.addEventListener("click", addRun);
subtract.addEventListener('click', subtractRun);

function getBoxName() { /** generate the name of the current box based on drop down menus */
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

function addRun() { /** add to the inning score */
    let box = getBoxName();
    let score = parseInt(innScores[box].innerHTML);
    score += 1;
    innScores[box].innerHTML = score;
    if (team.value == 'home') { /** add to the total score */
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

function subtractRun() { /** subtract from the inning score */
    let box = getBoxName();
    let score = parseInt(innScores[box].innerHTML);
    if (score >= 1) {
        score -= 1;
        innScores[box].innerHTML = score;
        if (team.value == 'home') { /** subtract from the total score */
            console.log(innScores.hR.innerHTML)
            let totalScore = parseInt(innScores.hR.innerHTML);
            totalScore -= 1;
            innScores.hR.innerHTML = totalScore
        }
        else {
            let totalScore = parseInt(innScores.aR.innerHTML);
            totalScore -= 1;
            innScores.aR.innerHTML = totalScore
        }
    }
}

/** handling audio */
let random = document.querySelector('#note')
random.addEventListener("click", generateAudio);
let chicken = document.querySelector('#keyboard')
chicken.addEventListener("click", playChicken);

function generateAudio() {
    /** generate a random song and play it */
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        audioObj = new Audio('sounds/buildup.mp3');
        audioObj.addEventListener("canplaythrough", event => {
            audioObj.play();
          });
    }
    else if (num == 1) {
        audioObj = new Audio('sounds/charge1.mp3');
        audioObj.addEventListener("canplaythrough", event => {
            audioObj.play();
          });
    }
    else if (num == 2) {
        audioObj = new Audio('sounds/charge2.mp3');
        audioObj.addEventListener("canplaythrough", event => {
            audioObj.play();
          });
    }

    /** generate a random photo and display it */
    let num2 = Math.floor(Math.random() * 3);
    let image = document.querySelector('#photo');
    if (num2 == 0) {
        image.src = 'images/megaphone.png'
    }
    else if (num2 == 1) {
        image.src = 'images/sdchicken.jpg'
    }
    else if (num2 == 2) {
        image.src = 'images/ups.png'
    }
}

function playChicken() {
    audioObj = new Audio('sounds/chickendance.mp3');
    audioObj.addEventListener("canplaythrough", event => {
        audioObj.play();
    });
    let image = document.querySelector('#photo');
    image.src = 'images/sdchicken.jpg'
}