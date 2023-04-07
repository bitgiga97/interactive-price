let billButton = document.getElementById('bill');
let time = document.getElementById('time');
let slider = document.getElementById("slider");
let output = document.getElementById("pageviews");

const data = ["10K", "50K", "100K", "500K", "1M"];
output.innerHTML = data[2] + "\xa0 PAGEVIEWS"; // Display the default slider value
let dollar = document.getElementById("dollar");
// let sign = dollar.firstElementChild.innerText;
dollar.innerHTML = "16.00";

// console.log(dollar.firstElementChild.innerText);
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {

    if (this.value === '0') {
        output.innerHTML = data[0] + "\xa0 PAGEVIEWS";
        dollar.innerHTML = "8.00";
    }
    if (this.value === '1') {
        output.innerHTML = data[1] + "\xa0 PAGEVIEWS";
        dollar.innerHTML = "12.00";
    }
    if (this.value === '2') {
        output.innerHTML = data[2] + "\xa0 PAGEVIEWS";
        dollar.innerHTML = "16.00";
    }
    if (this.value === '3') {
        output.innerHTML = data[3] + "\xa0 PAGEVIEWS";
        dollar.innerHTML = "24.00";
    }
    if (this.value === '4') {
        output.innerHTML = data[4] + "\xa0 PAGEVIEWS";
        dollar.innerHTML = "36.00";
    }

}
num = parseInt(dollar.innerHTML, 10);
console.log();

// this.style.background = 'linear-gradient(to right, #A4F3EB 0%, #A4F3EB ' + this.value + '%, #ECF0FB ' + this.value + '%, rgba(236, 240, 251, 1))';
billButton.addEventListener("click", () => {
    if (billButton.firstChild.style.float === '' &&
        time.textContent === '/ month') {
        billButton.firstChild.style.float = 'right';
        billButton.style.background = '#7AEADF';
        time.textContent = '/ year';
        dollar.innerText -= dollar.innerText * 0.25;

    } else {
        billButton.firstChild.style.float = '';
        time.textContent = '/ month';
        billButton.style.background = '';

    }
});