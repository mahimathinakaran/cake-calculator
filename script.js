function calculateBill() {
    const prices = {
        rainbow: 300,
        chocolate: 200,
        redvelvet: 250,
        blackforest: 350
    };

    const rainbowQty = parseInt(document.getElementById('rainbow-qty').value) || 0;
    const chocolateQty = parseInt(document.getElementById('chocolate-qty').value) || 0;
    const redvelvetQty = parseInt(document.getElementById('redvelvet-qty').value) || 0;
    const blackforestQty = parseInt(document.getElementById('blackforest-qty').value) || 0;

    const total = 
        (rainbowQty * prices.rainbow) +
        (chocolateQty * prices.chocolate) +
        (redvelvetQty * prices.redvelvet) +
        (blackforestQty * prices.blackforest);

    document.getElementById('total-price-display').innerHTML = "Total Price: Rs. " + total;
}