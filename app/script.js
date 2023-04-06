let billButton = document.getElementById('bill');
let time = document.getElementById('time');
billButton.addEventListener("click", () => {
    if (billButton.firstChild.style.float === '' &&
        time.textContent === '/ month') {
        billButton.firstChild.style.float = 'right';
        time.textContent = '/ year';
    } else {
        billButton.firstChild.style.float = '';
        time.textContent = '/ month';
    }
});


// console.log(time);
// console.log(ballButton);
// console.log(billButton.firstChild);