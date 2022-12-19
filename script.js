
let priceArray = [];
let acc = 0;

function addData() {
    const price = document.getElementById('item-price-input').value;
    console.log(price);

    const productName = document.getElementById('item-name-input').value;
    console.log(productName);
    
    priceArray.push(Number(price));
    let total = priceArray.reduce(add, acc);

    let priceChange = document.getElementById('price-change');
    priceChange.innerHTML = total;

    let tableRef = document.getElementById('add-rows');
    let newRow = tableRef.insertRow(-1);
    let newCellOne = newRow.insertCell(0);
    let newCellTwo = newRow.insertCell(1);

    let productNameText = document.createTextNode(productName);
    let productPriceText = document.createTextNode(price);

    newCellOne.appendChild(productNameText);
    newCellTwo.appendChild(productPriceText);

}

function add(acc, a) {
    return acc+a;
}//your code here
