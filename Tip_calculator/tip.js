let bill = document.getElementById('billAmount');
let percent = document.getElementById('percentageTip');
let error = document.getElementById('errorMessage');

let tp = document.getElementById('tipAmount');
let ttl = document.getElementById('totalAmount');

function calculateTip() {
    let b = bill.value;
    let p = percent.value;
    if (b === '') {
        error.textContent = "Please enter Valid Input";
    } else if (p === '') {
        error.textContent = "Please enter Valid Input";
    } else {
        error.textContent = '';
        let bs = parseInt(b)
        let tc = parseInt(p)

        let tipcalc = tc / 100 * bs;
        let totalamnt = bs + tipcalc;

        tp.value = tipcalc;
        ttl.value = totalamnt;
    }
}