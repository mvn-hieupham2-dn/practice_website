let numberCart = localStorage.getItem('number-cart')
    ? parseInt(localStorage.getItem('number-cart'))
    : 0;
let SumPr = document.querySelector('.sum-product');
let listCart = localStorage.getItem('cart-list')
    ? JSON.parse(localStorage.getItem('cart-list'))
    : [];
let handleDeleteItem = () =>{
    let btn_deletes = document.querySelectorAll('.delete-product');
    for (let i = 0; i < btn_deletes.length; i++) {
        btn_deletes[i].onclick = (e) => {
            e.preventDefault();
            listCart.splice(i, 1);
            localStorage.setItem('cart-list', JSON.stringify(listCart));
            numberCart = listCart.length;
            numberCart.innerText = numberCart;
            localStorage.setItem('number-cart', numberCart);
            fetchDataCart();
        };
    }
}
let fetchDataCart = () => {
    let listProductInCart = localStorage.getItem('cart-list')
        ? JSON.parse(localStorage.getItem('cart-list'))
        : [];
    let tbody = document.querySelector('.table > tbody');
    console.log("Check tbody",tbody);
    if (listProductInCart.length > 0) {
        tbody.innerHTML = listProductInCart
            .map((item) => {
                return `
                <tr key=${item.id}>
                    <td>${item.id}</td>
                    <td>${item.description}</td>
                    <td>${item.price}</td>
                    <td> <img src="${item.image}" alt='image product' style="width:80px"></td>
                    <td>
                        <a href="" data-id="${item.id}" class="delete-product">
                            X
                        </a>
                    </td>
                </tr>`;
            })
            .join('');
            handleDeleteItem();
    } else {
      document.getElementsByClassName("show_noti")[0].style = 'display:block';
        document.getElementsByTagName("table")[0].style = 'display:none'
     
    }
}
fetchDataCart();