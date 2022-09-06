let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

if (minValue < -999) {
    minValue === -999;
}

if (maxValue > 999) {
    maxValue === 999;
}

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumberField = 0
    orderNumber = 0;
    answerNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Да это легко! Вы загадали число ${answerNumber }?`;
            answerField.innerText = `Если я не ошибаюсь, то это число ${answerNumber }?`;
        }
    }        
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`|| `Наверное, это число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        phraseRandom = Math.round(Math.random()*3);
        answerPhrase = (phraseRandom === 3) ?
        `Я всегда угадываю\n\u{1F60E}`:
        `Это было легко\n\u{1F60E}`;
        `А вы что, сомневались во мне?\n\u{1F60E}`;
        answerField.innerText = answerPhrase
        gameRun = false;
    }
})

//вводимое число
let val = -115;
//переменная для единиц
let a1 = '';
//переменная для десятков
let a2 = '';
//переменная для сотен
let a3 = '';
//переменная для знака
let a4 = '';
//выводимое число
let a = Math.abc(val)
//условие для знака
if (val < 0){
    a4 = 'минус';
}

//условие для единиц
if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 1){
    a1 = 'один';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 2){
    a1 = 'два';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 3){
    a1 = 'три';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 4){
    a1 = 'четыре';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 5){
    a1 = 'пять';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 6){
    a1 = 'шесть';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 7){
    a1 = 'семь';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 8){
    a1 = 'восемь';
} else if (!(a > 10 && a < 20) && !(a % 100 > 10 && a % 100 < 20) && a % 10 == 9){
    a1 = 'девять';
}     

//условие для десятков
if (Math.trunc(a % 100 / 10) == 2){
    a2 = 'двадцать';
} else if (Math.trunc(a % 100 / 10) == 3){
    a2 = 'тридцать';
} else if (Math.trunc(a % 100 / 10) == 4){
    a2 = 'сорок';
} else if (Math.trunc(a % 100 / 10) == 5){
    a2 = 'пятьдесят';
} else if (Math.trunc(a % 100 / 10) == 6){
    a2 = 'шестьдесят';
} else if (Math.trunc(a % 100 / 10) == 7){
    a2 = 'семьдесят';
} else if (Math.trunc(a % 100 / 10) == 8){
    a2 = 'восемьдесят';
} else if (Math.trunc(a % 100 / 10) == 9){
    a2 = 'девяносто';
} else if ((a % 100) == 10){
    a2 = 'десять';
} else if ((a % 100) == 11){
    a2 = 'одиннадцать';
} else if ((a % 100) == 12){
    a2 = 'двенадцать';
} else if ((a % 100) == 13){
    a2 = 'тринадцать';
} else if ((a % 100) == 14){
    a2 = 'четырнадцать';
} else if ((a % 100) == 15){
    a2 = 'пятнадцать';
} else if ((a % 100) == 16){
    a2 = 'шестнадцать';
} else if ((a % 100) == 17){
    a2 = 'семнадцать';
} else if ((a % 100) == 18){
    a2 = 'восемнадцать';
} else if ((a % 100) == 19){
    a2 = 'девятнадцать';
}

//условие для сотен
if (Math.trunc(a / 100) == 1){
    a3 = 'сто';
} else if (Math.trunc(a / 100) == 2){
    a3 = 'двести';
} else if (Math.trunc(a / 100) == 3){
    a3 = 'триста';
} else if (Math.trunc(a / 100) == 4){
    a3 = 'четыреста';
} else if (Math.trunc(a / 100) == 5){
    a3 = 'пятьсот';
} else if (Math.trunc(a / 100) == 6){
    a3 = 'шестьсот';
} else if (Math.trunc(a / 100) == 7){
    a3 = 'семьсот';
} else if (Math.trunc(a / 100) == 8){
    a3 = 'восемьсот';
} else if (Math.trunc(a / 100) == 9){
    a3 = 'девятьсот';
}

//вывод числа
a = `${a4} ${a3} ${a2} ${a1}`;
console.log(a);