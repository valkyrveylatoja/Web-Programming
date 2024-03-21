function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculate() {
    const cost = parseFloat(document.getElementById("cost").value);
    const liters = parseFloat(document.getElementById("liters").value);
    const total = cost * liters;
    document.getElementById("total").innerText = "Total cost: AED " + numberWithCommas(total.toFixed(2)) + "";
    event.preventDefault()
}
document.getElementById("cost").focus();
document.getElementById("cost").blur();
document.getElementById("liters").focus();
document.getElementById("liters").blur();
