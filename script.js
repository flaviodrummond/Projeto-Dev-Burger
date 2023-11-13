let list = document.querySelector('ul')
let showAll = document.querySelector('.show-all')
let discount = document.querySelector('.discount')
let myList = ''

let showMenu = (productArray) => {
    myList = ''
    productArray.forEach((product) => {

        myList +=
            `
        <li class="price">
            <div class="bottom"></div>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="price"> ${product.price.toLocaleString
            ('pt-br', { style: 'currency', currency: 'BRL' })}  </p>

        </li>
        `
    })

    list.innerHTML = myList

}

let discount10Percent = () => {
    let promotion = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9  // calculo para 10% de desconto 
    }))

    showMenu(promotion)
}


showAll.addEventListener("click", () => showMenu(menuOptions)) // showMenu era usado para o botão mostrar tudo, depois de colocar uma variável dentro da função, ele não chama mais nada. o console acaba dando erro quando chamo meu menu cardápio. Para resolver este erro, coloco entre parentes o menuOptions, mas chama automáticamente, mas para chamar quando eu clicar, preciso colocar uma função anônima.
discount.addEventListener("click", discount10Percent)