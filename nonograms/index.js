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

// LEVEL CHOSE //

// easy level //

let easyList = document.createElement('div');
easyList.classList.add('easy-list');

easyBtn.addEventListener('click', () => {
    currentLevel = "easy";
    easyList.style.display = 'flex';
    easyList.classList.add('show');
})


let easyListTitle = document.createElement('div');
easyListTitle.classList.add('easy-list-title');
easyListTitle.textContent = "Click the image you like";

let easyBtns = document.createElement('div');
easyBtns.classList.add('easy-buttons-div');

let templateOneEasy = document.createElement('button');
templateOneEasy.classList.add('one-easy-button');
let oneImg = document.createElement('img');
oneImg.src = './img/5.5one.jpeg';
oneImg.alt = 'Digit one';
let oneText = document.createElement('div');
oneText.textContent = "Digit 1";
oneText.classList.add('one-text');
templateOneEasy.append(oneImg);
templateOneEasy.append(oneText);

templateOneEasy.addEventListener('click', () => {
    easyList.classList.remove('show');
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    startGame(currentLevel, "one");
});

let templateTwoEasy = document.createElement('button');
templateTwoEasy.classList.add('two-easy-button');
let twoImg = document.createElement('img');
twoImg.src = './img/5.5cancel.jpeg';
twoImg.alt = 'Cancel';
let twoText = document.createElement('div');
twoText.textContent = "Cancel";
twoText.classList.add('two-text');
templateTwoEasy.append(twoImg);
templateTwoEasy.append(twoText);

templateTwoEasy.addEventListener('click', () => {
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    easyList.classList.remove('show');
    startGame(currentLevel, "cancel");
});

let templateThreeEasy = document.createElement('button');
templateThreeEasy.classList.add('three-easy-button');
let threeImg = document.createElement('img');
threeImg.src = './img/5.5dumbbell.jpeg';
threeImg.alt = 'Dumbbell';
let threeText = document.createElement('div');
threeText.textContent = "Dumbbell";
threeText.classList.add('three-text');
templateThreeEasy.append(threeImg);
templateThreeEasy.append(threeText);

templateThreeEasy.addEventListener('click', () => {
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    easyList.classList.remove('show');
    startGame(currentLevel, "dumbbell");
});

let templateFourEasy = document.createElement('button');
templateFourEasy.classList.add('four-easy-button');
let fourImg = document.createElement('img');
fourImg.src = './img/5.5button.jpeg';
fourImg.alt = 'Button';
let fourText = document.createElement('div');
fourText.textContent = "Button";
fourText.classList.add('four-text');
templateFourEasy.append(fourImg);
templateFourEasy.append(fourText);

templateFourEasy.addEventListener('click', () => {
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    easyList.classList.remove('show');
    startGame(currentLevel, "button");
});

let templateFiveEasy = document.createElement('button');
templateFiveEasy.classList.add('five-easy-button');
let fiveImg = document.createElement('img');
fiveImg.src = './img/5.5abstraction.jpeg';
fiveImg.alt = 'Abstraction';
let fiveText = document.createElement('div');
fiveText.textContent = "Abstraction";
fiveText.classList.add('five-text');
templateFiveEasy.append(fiveImg);
templateFiveEasy.append(fiveText);

templateFiveEasy.addEventListener('click', () => {
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    easyList.classList.remove('show');
    startGame(currentLevel, "abstraction");
});

let cancelBtn = document.createElement('button');
cancelBtn.classList.add('cancel-button');
let icon = document.createElement('i');
icon.classList.add('fa-regular', 'fa-circle-xmark');
cancelBtn.append(icon);

cancelBtn.addEventListener ("click", () => {
    easyList.classList.remove('show');
})

easyList.append(easyListTitle);
easyList.append(cancelBtn);
easyBtns.append(templateOneEasy);
easyBtns.append(templateTwoEasy);
easyBtns.append(templateThreeEasy);
easyBtns.append(templateFourEasy);
easyBtns.append(templateFiveEasy);
easyList.append(easyBtns);
startScreen.append(easyList);


// medium level //

let mediumList = document.createElement('div');
mediumList.classList.add('medium-list');

mediumBtn.addEventListener('click', () => {
    currentLevel = "medium";
    mediumList.style.display = 'flex';
    mediumList.classList.add('show');
})

let mediumListTitle = document.createElement('div');
mediumListTitle.classList.add('medium-list-title');
mediumListTitle.textContent = "Click the image you like";

let mediumBtns = document.createElement('div');
mediumBtns.classList.add('medium-buttons-div');

let templateOneMedium = document.createElement('button');
templateOneMedium.classList.add('one-medium-button');
let oneImgMedium = document.createElement('img');
oneImgMedium.src = './img/10.10questionmark.jpeg';
oneImgMedium.alt = 'Question mark';
let oneTextMedium = document.createElement('div');
oneTextMedium.textContent = "Question mark";
oneTextMedium.classList.add('one-text-medium');
templateOneMedium.append(oneImgMedium);
templateOneMedium.append(oneTextMedium);

templateOneMedium.addEventListener('click', () => {
    mediumList.classList.remove('show');
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    startGame(currentLevel, "question mark");
});

let templateTwoMedium = document.createElement('button');
templateTwoMedium.classList.add('two-medium-button');
let twoImgMedium = document.createElement('img');
twoImgMedium.src = './img/10.10camel.jpeg';
twoImgMedium.alt = 'Camel';
let twoTextMedium = document.createElement('div');
twoTextMedium.textContent = "Camel";
twoTextMedium.classList.add('two-text-medium');
templateTwoMedium.append(twoImgMedium);
templateTwoMedium.append(twoTextMedium);

templateTwoMedium.addEventListener('click', () => {
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    mediumList.classList.remove('show');
    startGame(currentLevel, "camel");
});

let templateThreeMedium = document.createElement('button');
templateThreeMedium.classList.add('three-medium-button');
let threeImgMedium = document.createElement('img');
threeImgMedium.src = './img/10.10pattern.jpeg';
threeImgMedium.alt = 'Pattern';
let threeTextMedium = document.createElement('div');
threeTextMedium.textContent = "Pattern";
threeTextMedium.classList.add('three-text-medium');
templateThreeMedium.append(threeImgMedium);
templateThreeMedium.append(threeTextMedium);

templateThreeMedium.addEventListener('click', () => {
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    mediumList.classList.remove('show');
    startGame(currentLevel, "pattern");
});

let templateFourMedium = document.createElement('button');
templateFourMedium.classList.add('four-medium-button');
let fourImgMedium = document.createElement('img');
fourImgMedium.src = './img/10.10emblem.jpeg';
fourImgMedium.alt = 'Emblem';
let fourTextMedium = document.createElement('div');
fourTextMedium.textContent = "Pattern";
fourTextMedium.classList.add('three-text-medium');
templateFourMedium.append(fourImgMedium);
templateFourMedium.append(fourTextMedium);

templateFourMedium.addEventListener('click', () => {
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    mediumList.classList.remove('show');
    startGame(currentLevel, "emblem");
});

let templateFiveMedium = document.createElement('button');
templateFiveMedium.classList.add('five-medium-button');
let fiveImgMedium = document.createElement('img');
fiveImgMedium.src = './img/10.10alien.jpeg';
fiveImgMedium.alt = 'Alien';
let fiveTextMedium = document.createElement('div');
fiveTextMedium.textContent = "Alien";
fiveTextMedium.classList.add('three-text-medium');
templateFiveMedium.append(fiveImgMedium);
templateFiveMedium.append(fiveTextMedium);

templateFiveMedium.addEventListener('click', () => {
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    mediumList.classList.remove('show');
    startGame(currentLevel, "alien");
});

let cancelBtnMedium = document.createElement('button');
cancelBtnMedium.classList.add('cancel-button2');
let icon2 = document.createElement('i');
icon2.classList.add('fa-regular', 'fa-circle-xmark');
cancelBtnMedium.append(icon2);

cancelBtnMedium.addEventListener ("click", () => {
    mediumList.classList.remove('show');
})

mediumList.append(mediumListTitle);
mediumList.append(cancelBtnMedium);
mediumBtns.append(templateOneMedium);
mediumBtns.append(templateTwoMedium);
mediumBtns.append(templateThreeMedium);
mediumBtns.append(templateFourMedium);
mediumBtns.append(templateFiveMedium);
mediumList.append(mediumBtns);
startScreen.append(mediumList);

hardBtn.addEventListener('click', () => {
    currentLevel = "hard";
})

// START GAME // 


function selectLevel(levelSelected) {
    let matrix;
    if (levelSelected === 'easy') {
        matrix = 5;
    } else if (levelSelected === 'medium') {
        matrix = 10;
    } else if (levelSelected === 'hard') {
        matrix = 15;
    }
    return matrix;
}

async function startGame(level, templateName) {
    await loadJSON();
    matrixSize = selectLevel(level);
    console.log("Размер матрицы после selectLevel:", matrixSize);
    let matrixKey = matrixSize + "x" + matrixSize;
    if (jsonTemplates[matrixKey]) {
        let template;
        if (templateName) {
            template = jsonTemplates[matrixKey][templateName];
        } else {
            template = getRandomTemplate(matrixSize);
        }

        if (template) {
            createPlayField(matrixSize, template);
        } else {
            console.error("Шаблон не найден:", templateName);
        }
    }
}


function getRandomTemplate(size) {
    let templates = Object.keys(jsonTemplates[size + "x" + size]);
    let randomName = templates[Math.floor(Math.random() * templates.length)];
    return jsonTemplates[size + "x" + size][randomName];
}


// PLAY AREA //

let playField = document.createElement('div');
playField.classList.add("play-field");

document.body.append(playField);

let currentLevel = 'easy';

startBtn.addEventListener ('click', () => {
    startScreen.style.display = 'none';
    playField.style.display = 'flex';
    if (!currentLevel) {
        currentLevel = 'easy';
    }
    startGame(currentLevel);
})

let playArea = document.createElement('div');
playArea.classList.add('play-area');
playField.append(playArea);

function createPlayField(matrixSize, template) {
    console.log("createPlayField вызвана с matrixSize:", matrixSize, "и template:", template);
    playArea.innerHTML = '';

    let rowHints = template.rowHints;
    let colHints = template.colHints;
    let grid = template.grid;

    let gameField = document.createElement('div');
    gameField.classList.add('game-field');

    let topHints = document.createElement('div');
    topHints.classList.add('top-hints');

    topHints.style.display = 'grid';
    topHints.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`; 

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

    leftHints.style.display = 'grid';
    leftHints.style.gridTemplateRows = `repeat(${matrixSize}, 1fr)`;

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
            cell.setAttribute('data-i', i);
            cell.setAttribute('data-j', j);
            cell.addEventListener('click', () => {
                cell.classList.toggle('cell-button-active');
                currentState[i][j] = cell.classList.contains('cell-button-active') ? 1 : 0;
                console.log("currentState", currentState);
                console.log("grid", grid);

                cellStatus(cell, i, j, currentState, grid);
            });
            let clicks = 0;
            cell.addEventListener('contextmenu', (event) => {
                event.preventDefault();
                let icon = cell.querySelector('i');
                if (clicks === 0) {
                    clicks++;
                    cell.classList.remove('cell-button-active');
                    icon = document.createElement('i');
                    icon.classList.add('fa-solid', 'fa-xmark');
                    cell.appendChild(icon);
                    if (grid[i][j] === 1) {
                        cell.classList.add('cell-button-wrong');
                        setTimeout(() => {
                            cell.classList.remove('cell-button-wrong');
                        }, 500);
                    }
                    if (grid[i][j] === 0) {
                        cell.classList.add('cell-button-disabled-i');
                        cell.classList.add('cell-button-disabled');
                    }
                } else if (clicks > 0 && icon) {
                    icon.remove();
                    clicks = 0;
                }
                cellStatus(cell, i, j, currentState, grid);
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
function cellStatus(cell, i, j, currentState, grid) {
    if (currentState[i][j] === grid[i][j] && grid[i][j] === 1) {
        cell.classList.add('cell-button-disabled');
    } else if (currentState[i][j] === 0) {
        cell.classList.remove('cell-button-disabled');
    } else {
        cell.classList.add('cell-button-wrong');
        setTimeout(() => {
            cell.classList.remove('cell-button-wrong');
        }, 500);
        console.log(`Ячейка [${i}, ${j}] неверна!`);
    }

    checkWin(currentState, grid);
}

function checkWin(currentState, grid) {
    let correct = true;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let cell = document.querySelector(`.cell-button[data-i="${i}"][data-j="${j}"]`);
            if (cell && cell.querySelector('i')) {
                continue;
            }
            if (currentState[i][j] !== grid[i][j]) {
                correct = false;
                console.log("It's not a win yet");
            }
        }
    }
    if (correct) {
        console.log("Победа!");
        const allCells = document.querySelectorAll('.cell-button');
        allCells.forEach(cell => {
            cell.classList.add('cell-button-disabled');
        });
        setTimeout(() => {
            alert("Поздравляем! Вы выиграли!");
        }, 100);
    }
}


// GAME PROCESS //


