// Memory Button henler 
document.getElementById('16GB-memory-button')
.addEventListener('click' , function (){
    getPrice('memory-price',180)
    updatePrice();
})
//memory 8GB button
document.getElementById('8GB-memory-button')
.addEventListener('click' , function (){
    getPrice('memory-price', 0)
    updatePrice();
})
// storage item 
// 256GB memory 
document.getElementById('256GB-storage-button')
.addEventListener('click' , function (){
    getPrice('stroage-price', 0);
    updatePrice();
})
// 512GB SSD 
document.getElementById('512GB-storage-button')
.addEventListener('click' , function (){
    getPrice('stroage-price', 100)
    updatePrice();
})
// 1TB SSd 
document.getElementById('1TB-storage-button')
.addEventListener('click' , function (){
    getPrice('stroage-price', 180)
    updatePrice();
})
// Choose your delivery option 
document.getElementById('free-delivery-button')
.addEventListener('click' , function (){
    getPrice('delevery-cost', 0)
    updatePrice();
})
// cost delivery 
document.getElementById('cost-delevery-button')
.addEventListener('click' , function (){
    getPrice('delevery-cost', 20)
    updatePrice();
})
// spacefict price in different item 
function getPrice(id , price){
    const totalMemoryCost =document.getElementById(id);
    totalMemoryCost.innerText = price;
}
// maint funtion all price show 
function updatePrice(){
    const memoryCost =document.getElementById('memory-price');
    const deleveryCost =document.getElementById('delevery-cost');
    const storageCost =document.getElementById('stroage-price');
    const bestPrice = document.getElementById('best-price');

    const totalPrice = parseFloat(memoryCost.innerText) + parseFloat(deleveryCost.innerText) +parseFloat(storageCost.innerText) + parseFloat(bestPrice.innerText);
    const total = document.getElementById('total-price')
    total.innerText =totalPrice ;
    const finalPrice = document.getElementById('final-price')
    finalPrice.innerText = totalPrice;
}

// input value and cupon item 
 const discoundButtom = document.getElementById('discount-button')
 discoundButtom.addEventListener('click' , function(){
     const input = document.getElementById('discount-input');
     const inputText = input.value;
     console.log( typeof inputText);
     if(inputText == "stevekaku"){
         const final =document.getElementById('final-price')
         const finalText1 = final.innerText;
         const discountPrice = (parseFloat(finalText1)* 20) / 100 ;
         const newPrice = parseFloat(finalText1) - discountPrice ;
         final.innerText = newPrice;
         input.value = " " ;

     }
     else{
        document.getElementById('error-copun').innerText ='There was an error validating your code.'
     }
     input.value = " " ;
 })

