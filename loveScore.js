'use strict';

let userinput1 = document.querySelector('.user1');
let userInput2 = document.querySelector('.user2');

let lionInput = document.querySelector('.lionInput');
let tigerInput = document.querySelector('.tigerInput');
let calculateInfo = document.querySelector('.calculateInfo');
const tigerBtn = document.querySelector('.tigerBtn');
const calculateBtn = document.querySelector('.calculateBtn');
const newOneBtn = document.querySelector('.newOneBtn');
const closeBtn = document.querySelectorAll('.btn-close.closeBtn');

// query selector gives us object so we have to use .forEach() statement 51
// or we can convert it into array [...array] then we've to use .map()
const inputPrevent = () => {
    let length0 = lionInput.value.length;
    const lion = lionInput.value;
    if (length0 > 2 && isNaN(lion) && lion.trim() !== '') {
        tigerBtn.setAttribute('data-bs-toggle', 'modal');
        userinput1.innerHTML = lion;
    }
    if (length0 === 0) tigerBtn.removeAttribute('data-bs-toggle');
};
const loveScore = () => {
    let lion = lionInput.value;
    let tiger = tigerInput.value;
    tigerBtn.removeAttribute('data-bs-toggle');

    if (isNaN(tiger) && tiger.trim() !== '') {
        userinput1.innerHTML = lion;
        userInput2.innerHTML = tiger;
        const loveScore = Math.floor(Math.random() * 100) + 1;
        if (lion === 'Fred' && tiger === 'Ariana') {
            calculateInfo.innerHTML = `${lion} and  ${tiger} \'s score is 100% ❤️‍🔥. And you love each other Kanye loves Kanye! lol`;
        } else if (lion === 'Ariana' && tiger === 'Fred') {
            calculateInfo.innerHTML = `${lion} and  ${tiger} \'s score is 100% ❤️‍🔥. And you love each other Kanye loves Kanye! lol`;
        } else if (loveScore === 100) {
            calculateInfo.innerHTML = `${lion} and  ${tiger} \'s score is ${loveScore}% ❤️‍🔥. And you love each other Kanye loves Kanye! lol`;
        } else if (loveScore > 50) {
            calculateInfo.innerHTML = lion + ' and ' + tiger + "'s  score is " + loveScore + '% 💝';
        } else if (loveScore < 15) {
            calculateInfo.innerHTML =
                lion + ' and ' + tiger + "'s  score is " + loveScore + '% ❤️‍🩹';
        } else {
            calculateInfo.innerHTML = lion + ' and ' + tiger + "'s  score is " + loveScore + '% 💘';
        }
        console.log(lion + ` and ` + tiger + `'s  score is ` + loveScore + `% ❤️‍🔥`);
    } else {
        alert(`Lion is always a Lion! My Bro 🦁`);
    }
};
calculateBtn.addEventListener('click', loveScore);

const newOne = () => {
    const lionInput = document.querySelector('.lionInput');
    const tigerInput = document.querySelector('.tigerInput');
    lionInput.value = '';
    tigerInput.value = '';
    // document.querySelector('#floatingInput').classList.remove('lionInput');
};
lionInput.addEventListener('keyup', inputPrevent);
newOneBtn.addEventListener('click', newOne);

// [...closeBtn].map(item => {
//     item.addEventListener('click', newOne);
// });

closeBtn.forEach((x) => {
    x.addEventListener('click', newOne);
});
//forEach() works everywhere es6+
