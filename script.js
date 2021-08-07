const price = document.querySelectorAll('[data-price]');
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    if(checkbox.checked){
        price[0].innerText = `$ ${199.99}`;
        price[1].innerText = `$ ${249.99}`;
        price[2].innerText = `$ ${399.99}`;
    }

    else{
        price[0].innerText = `$ ${19.99}`;
        price[1].innerText = `$ ${24.99}`;
        price[2].innerText = `$ ${39.99}`;
    }
   
})
