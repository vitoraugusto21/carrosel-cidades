let btnNext = document.querySelector(".next") //ligar o javascript ao html
let btnBack = document.querySelector(".back")

let container = document.querySelector(".container")
let list = document.querySelector(".container .list")
let thumb = document.querySelector(".container .thumb")

btnNext.onclick = () => moveItemsOnClick('next') //chamar a função quando clicar no botão
btnBack.onclick = () => moveItemsOnClick('back') //chamar a função quando clicar no botão


function moveItemsOnClick(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let thubItems = document.querySelectorAll('.thumb .thumb-item')

    if (type === 'next'){
        list.appendChild(listItems[0])
        thumb.appendChild(thubItems[0])
        container.classList.add('next')
    }

    else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thubItems[thubItems.length - 1])
        container.classList.add('back')
    }

    setTimeout (() => {
        container.classList.add('next')
        container.classList.add('back')
    }, 3000);
}
