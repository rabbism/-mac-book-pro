// Memory Button henler 
document.getElementById('16GB-memory-button')
.addEventListener('click' , function (){
    const totalMemoryCost =document.getElementById('memory-price');
    totalMemoryCost.innerText = 180 ;
    const totalMemoryCost =document.getElementById('memory-price');
    const totalMemoryCost1 =document.getElementById('delevery-cost');
    const totalMemoryCost2 =document.getElementById('stroage-price');
    const totalCollect = document.getElementById('total-price');

    const totalPrice = parseFloat(totalMemoryCost.innerText) + parseFloat(totalMemoryCost1.innerText) +parseFloat(totalMemoryCost2.innerText) + parseFloat(totalCollect.innerText);

    totalCollect.innerText = totalCollect ;
})
//memory 8GB button
document.getElementById('8GB-memory-button')
.addEventListener('click' , function (){
    const totalMemoryCost =document.getElementById('memory-price');
    totalMemoryCost.innerText = 0 ;
})
// storage item 
// 256GB memory 
document.getElementById('256GB-storage-button')
.addEventListener('click' , function (){
    const totalMemoryCost =document.getElementById('stroage-price');
    totalMemoryCost.innerText = 0;
})
// 512GB SSD 
document.getElementById('512GB-storage-button')
.addEventListener('click' , function (){
    const totalMemoryCost =document.getElementById('stroage-price');
    totalMemoryCost.innerText = 100;
})
// 1TB SSd 
document.getElementById('1TB-storage-button')
.addEventListener('click' , function (){
    const totalMemoryCost =document.getElementById('stroage-price');
    totalMemoryCost.innerText = 180;
})
// Choose your delivery option 
document.getElementById('free-delivery-button')
.addEventListener('click' , function (){
    const totalMemoryCost =document.getElementById('delevery-cost');
    totalMemoryCost.innerText = 0;
})
// cost delivery 
document.getElementById('cost-delevery-button')
.addEventListener('click' , function (){
    const totalMemoryCost =document.getElementById('delevery-cost');
    totalMemoryCost.innerText = 20;
})

// total cost 
// const totalMemoryCost =document.getElementById('memory-price');
// const totalMemoryCost1 =document.getElementById('delevery-cost');
// const totalMemoryCost2 =document.getElementById('stroage-price');
// const totalCollect = document.getElementById('total-price');

// const totalPrice = parseFloat(totalMemoryCost.innerText) + parseFloat(totalMemoryCost1.innerText) +parseFloat(totalMemoryCost2.innerText) + parseFloat(totalCollect.innerText);

// totalCollect.innerText = totalCollect ;

