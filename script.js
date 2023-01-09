
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
var itemName = document.getElementById("item-name-input");
var itemQuantity = document.getElementById("item-qty-input");
var itemPrice = document.getElementById("item-price-input");
 
var tbody = document.querySelector("tbody");
 
var grandTotal = document.getElementById("total");
var grand_total = 0;
 
var addItem = document.querySelector("#add");
 
addItem.addEventListener("click", (event) => {
  event.preventDefault();
 
  let newRow = document.createElement("tr");
 
  let name = document.createElement("td");
  name.innerText = itemName.value;
  name.classList.add("item");
  newRow.append(name);
 
  let price = document.createElement("td");
  price.innerText = itemPrice.value;
  newRow.append(price);
  price.classList.add("price");
 
  let quantity = document.createElement("td");
  quantity.innerText = itemQuantity.value;
  newRow.append(quantity);
 
  if (itemName.value && itemQuantity.value && itemPrice.value) {
    let total = document.createElement("td");
    total.innerText = itemPrice.value * itemQuantity.value;
    newRow.append(total);
 
    tbody.append(newRow);
 
    grand_total += Number(total.innerText);
    grandTotal.innerHTML = "Grand Total: ₹ " + grand_total;
  }
 
  itemName.value = "";
  itemQuantity.value = "";
  itemPrice.value = "";
});
 