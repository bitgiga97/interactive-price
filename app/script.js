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

let slider = document.getElementById("slider");
let output = document.getElementById("pageviews");
output.innerHTML = slider.value + "\xa0 PAGEVIEWS"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {

    output.innerHTML = this.value + "\xa0 PAGEVIEWS";

}
console.log(slider.value);
// console.log(time);
// console.log(ballButton);
// console.log(billButton.firstChild);