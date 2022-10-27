const tooglePrices = document.getElementById('toogle-prices');
const cardPrices = document.querySelectorAll('.price')

let isMonthly = true;

tooglePrices.addEventListener('click',()=>{
  tooglePrices.classList.toggle('toogle-prices--active')
  if (isMonthly) {
    cardPrices[0].textContent = '199.99';
    cardPrices[1].textContent = '249.99';
    cardPrices[2].textContent = '399.99';
  }else{
    cardPrices[0].textContent = '19.99';
    cardPrices[1].textContent = '24.99';
    cardPrices[2].textContent = '39.99';
  }

  isMonthly = !isMonthly;
})