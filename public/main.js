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
                        <button class="addToCartBtn" id="addToCartBtn"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    
                </div>

            </div>`)
        }
    })