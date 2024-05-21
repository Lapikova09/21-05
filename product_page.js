async function GetData(){
    let a = await fetch('https://660c1c283a0766e85dbd6f9c.mockapi.io/v1/us')
    let b = await a.json()
    return b
}
let data = await GetData()

let page = document.querySelector('.train_list')

data.map((element)=>{
    if(element.id <=3){
    let card = document.createElement('li')
        card.innerHTML = `  <img src="/img/${element.icon}" alt="">
                            <div>${element.name}</div>
                            <a href="${element.page}"><button><img src="/img/Button (2).png" alt=""></button></a>` //element.page
        page.append(card)
    }
})

let but_arr = document.querySelectorAll('#but')

let size0 = 0


function add(){
    if(size0 !==0){
    /*const firstParent = e.target.parentElement
    const secondParent = firstParent.parentElement
    const releaseCont = secondParent.parentElement
    const productCont = releaseCont.parentElement
    s
    const productName= productCont.querySelector('.adidas').innerText
    const productPrice= productCont.querySelector('.blue_text').innerText
    const productIcon = productCont.querySelector('.img1').src*/

    const uuidv4 = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );

    const product = {id: uuidv4, name: data[0].name, price: data[0].price, icon: data[0].icon, price: data[0].price, size: size0}
    let cardArrayS = []
    if(localStorage.getItem('cart')){
        cardArrayS = JSON.parse(localStorage.getItem('cart'))
    }
    
    cardArrayS.push(product)
    localStorage.setItem('cart', JSON.stringify(cardArrayS))

    console.log(product.size)
    }
}
const button = document.querySelector('.add_to_cart')
button.addEventListener('click', add)



let but1 = document.querySelector('.bg1')
but1.addEventListener("click", ()=>{    
        size0 = 38
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but1.classList.add('black')
    });

let but2 = document.querySelector('.bg2')
but2.addEventListener("click", ()=>{    
        size0 = 39
        for(let i=0; i<but_arr.length; i++){
            but_arr[i].classList.remove('black')
        }
        but2.classList.add('black')
    });    



/*function main(){
    const button = document.querySelector('.add_to_cart')
    button.addEventListener('click', add)
}

document.addEventListener('DOMContentLoaded', main)*/
