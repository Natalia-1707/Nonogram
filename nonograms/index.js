// CSS //

let styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'style.css';
document.head.appendChild(styleLink);

// FONTS //

let fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Allura&family=Jost:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+AU+SA:wght@100..400&family=Reggae+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap';
document.head.appendChild(fontLink);

let fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

// INITIAL SCREEN //

let startScreen = document.createElement('div');
startScreen.classList.add('start-screen');

let title = document.createElement('div');
title.classList.add('title');
title.textContent = 'NONOGRAM';
startScreen.append(title);

let startBtn = document.createElement('button');
startBtn.classList.add("start-button");
startBtn.textContent = 'Start game';
startScreen.append(startBtn);

let levelDiv = document.createElement('div');
levelDiv.classList.add('level-div');
startScreen.append(levelDiv);

let chooseLevel = document.createElement('div');
chooseLevel.classList.add('choose-level');
chooseLevel.textContent = 'Choose level';
levelDiv.append(chooseLevel);

let levelBtns = document.createElement('div');
levelBtns.classList.add('level-buttons');

let easyBtn = document.createElement('button');
easyBtn.classList.add("easy-button");
easyBtn.textContent = 'Easy';

let mediumBtn = document.createElement('button');
mediumBtn.classList.add("medium-button");
mediumBtn.textContent = 'Medium';

let hardBtn = document.createElement('button');
hardBtn.classList.add("hard-button");
hardBtn.textContent = 'Hard';

levelBtns.append(easyBtn);
levelBtns.append(mediumBtn);
levelBtns.append(hardBtn);

levelDiv.append(levelBtns);


document.body.append(startScreen);



// START GAME //

let playField = document.createElement('div');
playField.classList.add("play-field");

document.body.append(playField);

startBtn.addEventListener ('click', () => {
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
})

let playArea = document.createElement('div');
playArea.classList.add('play-area');
playField.append(playArea);

let matrix = 5;

function selectLevel(levelSelected) {
    if (levelSelected === 'easy') {
        matrix = 5;
    }
    if (levelSelected === 'medium') {
        matrix = 10;
    }
    if (levelSelected === 'hard') {
        matrix = 15;
    }
    return matrix;
}


function createPlayField(matrixSize) {
    playArea.innerHTML = '';
    /*matrix = selectLevel();*/
    for (let i = 0; i < matrixSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < matrixSize; j++) {
            let cell = document.createElement('button');
            cell.classList.add("cell-button");
            cell.addEventListener('click', () => {
                cell.classList.toggle('cell-button-active'); 
            });
            row.appendChild(cell);
        }
        playArea.appendChild(row);
    }
}
createPlayField(matrix);

