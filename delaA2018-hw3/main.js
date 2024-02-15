let previousImage = null;
const gallery = document.querySelectorAll('.regular-image');

for (let index = 0; index < gallery.length; index++) {
    const element = gallery[index];
    element.addEventListener('click', expand);
}

function expand(event) {
    const regularImage = event.currentTarget;
    const largeImage = document.querySelector('.large-image');
    const showArticle = document.querySelector('.show-article')
    
    const selectedContainer = regularImage.closest('.dish-food-div');
    const article = selectedContainer.querySelector('article');

    if (largeImage != null && showArticle != null) {
        largeImage.classList.remove('large-image');
        largeImage.classList.add('regular-image');
        
        showArticle.classList.remove('show-article');
        showArticle.classList.add('hidden-article');

    }

    regularImage.classList.remove('regular-image');
    regularImage.classList.add('large-image');

    article.classList.remove('hidden-article');
    article.classList.add('show-article');
}

/** 
 * CSS for Meal Plan Page
*/

const dishOne = document.getElementById("dish-one");
const dishTwo = document.getElementById("dish-two");
const dishThree = document.getElementById("dish-three");
const dishFour = document.getElementById("dish-four");
const dishFive = document.getElementById("dish-five");
const dishSix = document.getElementById("dish-six");
const dishSeven = document.getElementById("dish-seven");
const dishEight = document.getElementById("dish-eight");
const dishNine = document.getElementById("dish-nine");

dishOne.addEventListener('click', function() {addMeal(1) });
dishTwo.addEventListener('click', function() {addMeal(2) });
dishThree.addEventListener('click', function() {addMeal(3) });
dishFour.addEventListener('click', function() {addMeal(4) });
dishFive.addEventListener('click', function() {addMeal(5) });
dishSix.addEventListener('click', function() {addMeal(6) });
dishSeven.addEventListener('click', function() {addMeal(7) });
dishEight.addEventListener('click', function() {addMeal(8) });
dishNine.addEventListener('click', function() {addMeal(9) });

function addMeal(dishNumber){
    const mealPlanInfo = document.getElementById("meal-plan-info");
    let dishName = "";
    let dishPrice = 0.00;

    switch(dishNumber){
        case 1:
            dishName = "Bacon Cheddar Burger";
            dishPrice = 12.00;
            break;
        case 2:
            dishName = "Bone-In Wings";
            dishPrice = 5.00;
            break;
        case 3:
            dishName = "Southwestern Chicken Wrap";
            dishPrice = 12.99;
            break;
        case 4:
            dishName = "Brown Sugar Milk Tea";
            dishPrice = 5.00;
            break;
        case 5:
            dishName = "Matcha Tea Latte";
            dishPrice = 5.25;
            break;
        case 6:
            dishName = "Slushie Taro Milk";
            dishPrice = 5.00;
            break;
        case 7:
            dishName = "Blueberry Muffin";
            dishPrice = 2.50;
            break;
        case 8:
            dishName = "Espresso Drink";
            dishPrice = 5.50;
            break;
        case 9:
            dishName = "Peppermint Hot Chocolate";
            dishPrice = 6.00;
            break;
    }
    if(dishNumber == 100){
        dishName = "Bacon Cheddar Burger";
        dishPrice = 12.00 
    }

    const newDishEntry = document.createElement("div");
    newDishEntry.classList.add("dish-item");

    newDishEntry.innerHTML = `
        <div class="dish-item-info">
            <h4>${dishName}</h4>
            <h4>$${dishPrice.toFixed(2)}</h4>
        </div>
        <div class="dish-item-btn">
            <button class="add-dish-btn" onclick="AddAnotherDishItem()">Add Another</button>
            <button class="remove-dish-btn" onclick="removeDishItem(event)">Remove</button>
        </div>
    `;

    mealPlanInfo.appendChild(newDishEntry);

    updateTotalPrice();
}

function updateTotalPrice(){
    const dishItem = document.querySelectorAll('.dish-item');
    let totalPrice = 0.00;

    dishItem.forEach(dishItem => {
        const priceItem = dishItem.querySelector('.dish-item-info h4:last-child');
        const dishPrice = parseFloat(priceItem.textContent.replace('$', ' '));

        totalPrice += dishPrice;
    })

    const totalCost = document.querySelector('.total-payment').lastElementChild;
    totalCost.textContent = `$${totalPrice.toFixed(2)}`; 
    
}

function AddAnotherDishItem() {
    const clickedButton = event.target;
    const dishItem = clickedButton.closest('.dish-item');
    const clonedDishItem = dishItem.cloneNode(true);
    
    dishItem.parentNode.insertBefore(clonedDishItem, dishItem.nextSibling);
    
    updateTotalPrice();
}

function removeDishItem(event) {
    const clickedButton = event.target;
    const dishItem = clickedButton.closest('.dish-item');

    dishItem.parentNode.removeChild(dishItem);

    updateTotalPrice();
}
