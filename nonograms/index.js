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

// JSON //

let jsonTemplates = {};

async function loadJSON() {
    try {
        let response = await fetch('templates.json');
        jsonTemplates = await response.json();
        console.log("JSON загружен:", jsonTemplates);
    } catch (error) {
        console.error("Ошибка загрузки JSON:", error);
    }
}
console.log(jsonTemplates);

async function startGame(matrixSize) {
    await loadJSON();

    let template = getRandomTemplate(matrixSize);

    createPlayField(matrixSize, template);
}


function getRandomTemplate(size) {
    let templates = Object.keys(jsonTemplates[size + "x" + size]);
    let randomName = templates[Math.floor(Math.random() * templates.length)];
    return jsonTemplates[size + "x" + size][randomName];
}


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


function createPlayField(matrixSize, template) {
    playArea.innerHTML = '';
    /*matrix = selectLevel();*/

    let rowHints = template.rowHints;
    let colHints = template.colHints;
    let grid = template.grid;

    let gameField = document.createElement('div');
    gameField.classList.add('game-field');

    let topHints = document.createElement('div');
    topHints.classList.add('top-hints');

    for (let i = 0; i < matrixSize; i++) {
        let colHintContainer = document.createElement('div');
        colHintContainer.classList.add('col-hint-container');
        if (colHints[i].length > 0) {
            colHints[i].forEach((hint) => {
                let colHint = document.createElement('div');
                colHint.classList.add('col-hint');
                colHint.textContent = hint;
                colHintContainer.appendChild(colHint);
            });
        }
        topHints.appendChild(colHintContainer);
    }

    let leftHints = document.createElement('div');
    leftHints.classList.add('left-hints');

    for (let i = 0; i < matrixSize; i++) {
        let rowHintContainer = document.createElement('div');
        rowHintContainer.classList.add('row-hint-container');
        if (rowHints[i].length > 0) {
            rowHints[i].forEach((hint) => {
                let rowHint = document.createElement('div');
                rowHint.classList.add('row-hint');
                rowHint.textContent = hint;
                rowHintContainer.appendChild(rowHint);
            });
        }
        leftHints.appendChild(rowHintContainer);
    }

    let currentState = [];
    for (let i = 0; i < matrixSize; i++) {
        currentState[i] = [];
        for (let j = 0; j < matrixSize; j++) {
            currentState[i][j] = 0;
        }
    }
 
    let rows = document.createElement('div');
    for (let i = 0; i < matrixSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < matrixSize; j++) {
            let cell = document.createElement('button');
            cell.classList.add("cell-button");
            cell.addEventListener('click', () => {
                cell.classList.toggle('cell-button-active');
                currentState[i][j] = cell.classList.contains('cell-button-active') ? 1 : 0;
                console.log("currentState", currentState);
                console.log("grid", grid);

                cellStatus(i, j, currentState, grid);
            });
            row.appendChild(cell);
        }
        rows.appendChild(row);
    }

    let emptyDiv = document.createElement('div');
    gameField.appendChild(emptyDiv);
    gameField.appendChild(topHints);
    gameField.appendChild(leftHints);
    gameField.appendChild(rows);
    playArea.appendChild(gameField);
}
function cellStatus(i, j, currentState, grid) {
    if (currentState[i][j] === grid[i][j]) {
        console.log(`Ячейка [${i}, ${j}] верна!`);
    } else {
        console.log(`Ячейка [${i}, ${j}] неверна!`);
    }

    checkWin(currentState, grid);
}

function checkWin(currentState, grid) {
    let correct = true;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (currentState[i][j] !== grid[i][j]) {
                correct = false;
                console.log("It's not a win yet");
            }
        }
    }
    if (correct) {
        setTimeout(() => {
            alert("Поздравляем! Вы выиграли!");
        }, 100);
    }
}

startGame(5)

// GAME PROCESS //


