let numberCart = localStorage.getItem('number-cart')
    ? parseInt(localStorage.getItem('number-cart'))
    : 0;
let SumPr = document.querySelector('.sum-product');
let listCart = localStorage.getItem('cart-list')
    ? JSON.parse(localStorage.getItem('cart-list'))
    : [];
let listProductClass = document.querySelector('.product-list');
let listProduct = [
    {
        id: '1',
        description: 'Ygoogle Speaker 1',
        price: '$65.00',
        image:'https://themes.the4.co/kalles-html/assets/images/home-electronic/pr-01.jpg',
    },
    {
        id: '2',
        description: 'Lomo Sanremo Edition',
        price: '$65.00',
        image:'https://themes.the4.co/kalles-html/assets/images/home-electronic/pr-03.jpg'
    },
    {
        id: '3',
        description: 'Beats Solo3 Wireless',
        price: '$35.00',
        image:'https://themes.the4.co/kalles-html/assets/images/home-electronic/pr-05.jpg'
    },
    {
        id: '4',
        description: 'Ysamsung Camera',
        price: '$25',
        image:"https://themes.the4.co/kalles-html/assets/images/home-electronic/pr-07.jpg"
      
    },
  
];

SumPr.innerText = numberCart;
listProductClass.innerHTML = listProduct
    .map((item) => {
        return `
        <li class="product-item" style="width:300px; padding: 0 20px;">
            <div class="card">
                <img src="${item.image}" alt='image product'>
                   
                <div class="card-body" style="text-align:center">
                <p class="card-text">${item.description}</p>
                <h5 class="card-price">${item.price}</h5>
                    <a href="" data-id="${item.id}" class="btn btn-dark btn_addToCart">Add to cart</a>
                </div>
            </div>
        </li>`;
    })
    .join('');

let addToCart = document.querySelectorAll('.btn_addToCart');
addToCart.forEach((btn) => {
    btn.onclick = (e) => {
        e.preventDefault();
        let id = btn.getAttribute('data-id');
        listCart.push(listProduct.find((item) => item.id === id));
        localStorage.setItem('cart-list', JSON.stringify(listCart));
        numberCart = listCart.length;
        localStorage.setItem('number-cart', numberCart);
        SumPr.innerText = numberCart;
    };
});