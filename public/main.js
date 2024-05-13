axios.get(`http://localhost:3000/plants`)
    .then( res=> {
        for(let el of res.data){
            $('.cardContainer').append(`<div class='card'>

            <div class="cardImage"></div>

            <div class="cardInfoContainer">
                <div class="cardName">${el.title}</div>
                <div class="cardRating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>

                <div class="cardPriceAndButton">
                    <div class="cardPrice">$${el.price}.00</div>
                    <button class="addToCartBtn" id="${el._id}">+</button>
                </div>
                    
            </div>

        </div>`)
            



        }
})

let cartItems = {};
let totalPrice = 0;

function updateTotalPrice() {
    let total = 0;
    for (let id in cartItems) {
        let item = cartItems[id];
        total += item.quantity * item.price;
    }
    totalPrice = total;
    $('#total').text(`$ ${totalPrice.toFixed(2)}`);
}

axios.get(`http://localhost:3000/plants`)
    .then(res => {
        for (let el of res.data) {
            $(`#${el._id}`).on("click", function () {
                if (cartItems[el._id]) {
                    let quantity = cartItems[el._id].quantity + 1;
                    $(`.cartItem[data-id="${el._id}"] .totalQuantityItem`).text(quantity);
                    cartItems[el._id].quantity = quantity;
                } else {
                    cartItems[el._id] = { quantity: 1, price: el.price };
                    $('.cartOrderContainer').append(`
                        <div class='cartItem' data-id="${el._id}">
                            <div class="cartItemImage"></div>
                            <div class="cartItemInfoContainer">
                                <div class="cartItemName">${el.title}</div>
                                <div class="cartItemPrice">$ ${el.price}.00</div>
                            </div>
                            <div class="cartItemQuantity">
                                <div class="addItem">+</div>
                                <div class="totalQuantityItem">1</div>
                                <div class="removeItem">-</div>
                            </div>
                        </div>`);
                }
                updateTotalPrice();
            });

            $(document).on('click', `.cartItem[data-id="${el._id}"] .addItem`, function () {
                let quantity = cartItems[el._id].quantity + 1;
                $(`.cartItem[data-id="${el._id}"] .totalQuantityItem`).text(quantity);
                cartItems[el._id].quantity = quantity;
                updateTotalPrice();
            });

            $(document).on('click', `.cartItem[data-id="${el._id}"] .removeItem`, function () {
                if (cartItems[el._id].quantity > 1) {
                    let quantity = cartItems[el._id].quantity - 1;
                    $(`.cartItem[data-id="${el._id}"] .totalQuantityItem`).text(quantity);
                    cartItems[el._id].quantity = quantity;
                } else {
                    $(`.cartItem[data-id="${el._id}"]`).remove();
                    delete cartItems[el._id];
                }
                updateTotalPrice();
            });
        }
    });











const cartBtn = document.querySelector('.cartBtn');
const cartPopup = document.querySelector('.cartPopup');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

cartBtn.addEventListener('click', () => {
    cartPopup.classList.add('cartPopupVisible');
    overlay.classList.add('active'); // Додаємо клас для затемнення
    body.classList.add('no-scroll'); // Блокуємо скролінг
});

const closeBtn = document.querySelector('.closeBtn');

closeBtn.addEventListener('click', () => {
    cartPopup.classList.remove('cartPopupVisible');
    overlay.classList.remove('active'); // Приховуємо затемнення
    body.classList.remove('no-scroll'); // Відновлюємо скролінг
});

























