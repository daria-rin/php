let minValue;
let maxValue;
let answerNumber
let orderNumber = 1;
let gameRun = true;

const firstModal = document.getElementById('firstModal');
const secondModal = document.getElementById('secondModal');
const secondModalText = document.getElementById('secondModalText');
const containerGame = document.querySelector('.container');
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

startNewGame();

document.getElementById('btnRetry').addEventListener('click', function () {
    startNewGame();
});

document.getElementById('btnOver').addEventListener('click', getNextAnswer);

document.getElementById('btnLess').addEventListener('click', getNextAnswer);

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.textContent = getRandomWinMessage();
        gameRun = false;
    }
});

function startNewGame() {
    gameRun = true;
    firstModal.style.display = 'block';
    secondModal.style.display = 'none';
    containerGame.style.display = 'none';

    document.getElementById('modalBtnNext').addEventListener('click', function (event) {
        minValue = parseInt(document.getElementById('minValue').value) || 0;
        minValue = (minValue < -999) ? -999 : minValue; 
        maxValue = parseInt(document.getElementById('maxValue').value) || 100;
        maxValue = (maxValue > 999) ? 999 : maxValue;
    
        firstModal.style.display = 'none';
        secondModal.style.display = 'block';
        secondModalText.textContent = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю!`;
    }); 
    
    document.getElementById('modalBtnStart').addEventListener('click', function (event) {
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumber = 1;
        answerField.textContent = getRandomAnswer();
        orderNumberField.textContent = orderNumber;
        
        secondModal.style.display = 'none';
        containerGame.style.display = 'block';
    });    
}

function getNextAnswer(btn) {
    if (gameRun) {
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.textContent = answerPhrase;
            gameRun = false;
        } else {
            if (this === document.querySelector('#btnOver')) {
                minValue = answerNumber  + 1;
            } else {
                maxValue = answerNumber  - 1;
            }
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.textContent = orderNumber;
            answerField.textContent = getRandomAnswer();
        }
    }
}

function getRandomAnswer() {
    let phraseRandom = Math.round(Math.random() * 3);
    let questionPhrase;

    switch (phraseRandom) {
        case 0:
            questionPhrase = `Вы загадали число${getTextOfNumber(answerNumber)}?`;
            break;
        case 1:
            questionPhrase = `Если я не ошибаюсь, вы задумали число${getTextOfNumber(answerNumber)}?`;
            break;
        case 2:
            questionPhrase = `Возможно, вы загадали число${getTextOfNumber(answerNumber)}?`;
            break;
        case 3:
            questionPhrase = `Кажется, я понял! Вы задумали число${getTextOfNumber(answerNumber)}?`;
            break;
    }

    return questionPhrase;
}

function getRandomWinMessage() {
    let phraseRandom = Math.round(Math.random() * 3);
    let questionPhrase;

    switch (phraseRandom) {
        case 0:
            questionPhrase = `Я всегда угадываю\n\u{1F60E}`;
            break;
        case 1:
            questionPhrase = `Это было проще простого\n\u{1F60E}`;
            break;
        case 2:
            questionPhrase = `А вы сомневались во мне?\n\u{1F60E}`;
            break;
        case 3:
            questionPhrase = `Это было просто\n\u{1F60E}`;
            break;
    }

    return questionPhrase;
}

function getTextOfNumber(num) {
    let initialNum = num;
    let textAnswer = '';

    if (num === 0) {
        return ' ' + 0;
    }

    if (String(num)[0] === '-') {
        textAnswer = textAnswer + ' минус';
        num = num * (-1);
    }

    if (String(num).length > 2) {
        switch (Math.floor(num / 100)) {
            case 1:
                textAnswer = textAnswer + ' сто';
                break;
            case 2:
                textAnswer = textAnswer + ' двести';
                break;
            case 3:
                textAnswer = textAnswer + ' триста';
                break;
            case 4:
                textAnswer = textAnswer + ' четыреста';
                break;
            case 5:
                textAnswer = textAnswer + ' пятьсот';
                break;
            case 6:
                textAnswer = textAnswer + ' шестьсот';
                break;
            case 7:
                textAnswer = textAnswer + ' семьсот';
                break;
            case 8:
                textAnswer = textAnswer + ' восемьсот';
                break;
            case 9:
                textAnswer = textAnswer + ' девятьсот';
                break;
        }

        num = num % 100;
    }

    if (String(num).length > 1 && num >= 20) {
        switch (Math.floor(num / 10)) {
            case 2:
                textAnswer = textAnswer + ' двадцать';
                break;
            case 3:
                textAnswer = textAnswer + ' тридцать';
                break;
            case 4:
                textAnswer = textAnswer + ' сорок';
                break;
            case 5:
                textAnswer = textAnswer + ' пятьдесят';
                break;
            case 6:
                textAnswer = textAnswer + ' шестьдесят';
                break;
            case 7:
                textAnswer = textAnswer + ' семьдесят';
                break;
            case 8:
                textAnswer = textAnswer + ' восемьдесят';
                break;
            case 9:
                textAnswer = textAnswer + ' девяносто';
                break;
        }

    num = num  % 10;
    } else {
        switch (num) {
            case 10:
                textAnswer = textAnswer + ' десять';
                break;
            case 11:
                textAnswer = textAnswer + ' одиннадцать';
                break;
            case 12:
                textAnswer = textAnswer + ' двенадцать';
                break;
            case 13:
                textAnswer = textAnswer + ' тринадцать';
                break;
            case 14:
                textAnswer = textAnswer + ' четырнадцать';
                break;
            case 15:
                textAnswer = textAnswer + ' пятнадцать';
                break;
            case 16:
                textAnswer = textAnswer + ' шестнадцать';
                break;
            case 17:
                textAnswer = textAnswer + ' семнадцать';
                break;
            case 18:
                textAnswer = textAnswer + ' восемнадцать';
                break;
            case 19:
                textAnswer = textAnswer + ' девятнадцать';
                break;
        }
    }

    if (String(num).length > 0 && num < 10) {
        switch (num) {
            case 1:
                textAnswer = textAnswer + ' один';
                break;
            case 2:
                textAnswer = textAnswer + ' два';
                break;
            case 3:
                textAnswer = textAnswer + ' три';
                break;
            case 4:
                textAnswer = textAnswer + ' четыре';
                break;
            case 5:
                textAnswer = textAnswer + ' пять';
                break;
            case 6:
                textAnswer = textAnswer + ' шесть';
                break;
            case 7:
                textAnswer = textAnswer + ' семь';
                break;
            case 8:
                textAnswer = textAnswer + ' восемь';
                break;
            case 9:
                textAnswer = textAnswer + ' девять';
                break;
        }
    }

    return (textAnswer.length > 20) ? ' ' + initialNum : textAnswer;
}