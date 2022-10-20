/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
  
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = '';

}

  // DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONT: Find the table body
  let tbody = document.querySelector('tbody');
  // DONE: Iterate over the items in the cart
  for(let i in cart.items){
    // DONE: Create a TR
    let tr = document.createElement('tr');
    // DONE: Create a TD for the delete link, quantity,  and the item
    let tddelete = document.createElement('td');
    tddelete.textContent = " X "
    tddelete.setAttribute('id', cart.items[i].product );
    tr.appendChild(tddelete);

    let tdquantity = document.createElement('td');
    tdquantity.textContent = ` ${cart.items[i].quantity} `;
    tr.appendChild(tdquantity);

    let tditem = document.createElement('td');
    tditem.textContent = ` ${cart.items[i].product} `;
    tr.appendChild(tditem);

    tbody.appendChild(tr);

  }
  
  // DONE: Add the TR to the TBODY and each of the TD's to the TR


}

function removeItemFromCart(event) {

  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  let rowToDelete = event.target.id;
  console.log(rowToDelete);
  cart.removeItem(rowToDelete);
  console.log(cart.items);


  // DONE: Save the cart back to local storage
    cart.saveToLocalStorage();
  // DONE: Re-draw the cart table
    renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
