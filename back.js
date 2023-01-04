var addItemId = 0;

if (localStorage.getItem('cart') == null) {
    let array = []
    localStorage.setItem("cart", JSON.stringify(array))
}
let cart = JSON.parse(localStorage.getItem("cart"))
for (let x of cart) {

    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', x.number);


    var img = document.createElement('img');
    img.setAttribute('src', x.img)

    var title = document.createElement('div')
    title.innerText = x.title

    var label = document.createElement('div')
    label.innerText = "Size :"

    var select = document.createElement('span')
    select.innerText = x.size
    label.append(select)

    var price = document.createElement('div')
    price.innerText = x.value

    var delbtn = document.createElement('button')
    delbtn.innerText = 'Delete'
    delbtn.setAttribute('onclick', 'del (' + x.number + ')')

    var cartItems = document.getElementById('title')

    selectedItem.append(img);
    selectedItem.append(title)
    selectedItem.append(label)
    selectedItem.append(price)
    selectedItem.append(delbtn)
    console.log(selectedItem)
    cartItems.append(selectedItem)
}
var prix = 0

function addToCart(item) {
    

    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);

    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc)
    console.log(img)

    var title = document.createElement('div')
    title.innerText = item.children[1].innerText
    console.log(title)


    var label = document.createElement('div')
    label.innerText = item.children[2].children[0].innerText

    var select = document.createElement('span')
    select.innerText = item.children[2].children[1].value
    label.append(select)

    var price = document.createElement('div')
    price = item.children[2].children[2].innerText
    price = price.slice(5,9)
    prix = prix + price
    price = "The price is "+price+" Euro"

    var delbtn = document.createElement('button')
    delbtn.innerText = 'Delete'
    delbtn.setAttribute('onclick', 'del (' + addItemId + ')')

    var cartItems = document.getElementById('title')
    //geting the div of title 

    selectedItem.append(img);
    selectedItem.append(title)
    selectedItem.append(label)
    selectedItem.append(price)
    selectedItem.append(delbtn)
    cartItems.append(selectedItem)

    let imgg = item.children[0].currentSrc
    let slct = item.children[2].children[1].value
    let ttl = item.children[1].innerText
    let object = { img: imgg, size: slct, title: ttl, number: addItemId, value:price }

    let old = JSON.parse(localStorage.getItem('cart'))
    old.push(object);
    localStorage.setItem("cart", JSON.stringify(old))
   
    addItemId += 1;

}
function del(item) {
    console.log(item)
    document.getElementById(item).remove()
    let cart = JSON.parse(localStorage.getItem("cart"))
    let tab = []

    for (let x of cart) {

        if (x["number"] != item) {
            tab.push(x)
        }
        localStorage.setItem("cart", JSON.stringify(tab))

    }
}
