function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}


addToFavBtn = document.getElementsByClassName('addToFavBtn');
cartContainer = document.getElementsByClassName('cartContainer')[0];


for (var i = 0; i < addToFavBtn.length; i++) {
    addToFavBtn[i].addEventListener('click', updateCartContainer)
}

function updateCartContainer(e) {
    addToFavBtn = e.target;
    productContainer = addToFavBtn.parentElement;
    productTitle = productContainer.getElementsByClassName('productTitle')[0].innerText;
    productPrice = productContainer.getElementsByClassName('productPrice')[0].innerText;
    productimg = productContainer.getElementsByClassName('img')[0].src;

    cartTitles = cartContainer.getElementsByClassName('cartTitle');
    for (var i = 0; i < cartTitles.length; i++) {
        if (cartTitles[i].innerText == productTitle) {
            alert('Already added!');
            return;
        }
    }


    AddRowInCart(productTitle, productPrice, productimg);
    alert('Added Successfully');





}

// add new row in cart
function AddRowInCart(productTitle, productPrice, productimg) {


    div = document.createElement('div');
    div.classList.add('row');
    insideDiv = `<div class="col-xs-3 cartImage"> <img src="${productimg}"></div>
<div class="col-xs-3 cartTitle"> ${productTitle} </div>
<div class="col-xs-3 cartPrice"> ${productPrice}</div>
 <div class="col-xs-3 removeButton">remove</div>`;
    div.innerHTML = insideDiv
    cartContainer.appendChild(div);
    totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('₹', '').replace(',', '');
        console.log(priceFormatedNumb);
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');
    console.log(totalPrice);



    removeButton = document.getElementsByClassName('removeButton');
    for (var i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', removeFromCart)
    }
}



// remove product from Cart

function removeFromCart(e) {
    e.target.parentElement.remove();
    updatePriceAfterRemove();
}


function updatePriceAfterRemove() {
    totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('₹', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');


}
