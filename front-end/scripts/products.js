var productContainer = document.querySelector(".product")


fetch (`http://localhost:8000/products`)
.then (response => {
    return response.json()
})
.then (data => {
    for (i = 0; i < data.length; i++) {
        
        productContainer.innerHTML += `
        <div class="individualProduct"><div class="category">${data[i].category}</div>
            <a href="product_detail.html">
                <img class="pImg" src="${data[i].img}" alt="Image not found">
            </a>
            <p class="pName">${data[i].pname}</p>
            <p class="pPrice">$${data[i].price}</p> 
        </div>`
    }
})

//filter*****************************************

var categoryList = document.querySelectorAll(".fcategory")
var category = document.querySelectorAll(".category")
setTimeout(filterFunc,100)

for (i = 0; i < categoryList.length; i++) {
    categoryList[i].addEventListener("click", filterFunc)
}

function filterFunc() {
    var ip = document.querySelectorAll(".individualProduct")
    category = document.querySelectorAll(".category")
    for (i = 0; i < categoryList.length; i++) {
        if (categoryList[i].checked) {
            for (v = 0; v < ip.length; v++) {
                if (categoryList[i].value == "all") {
                    ip[v].style.display = "flex"
                }
                else {
                    if (category[v].innerHTML != categoryList[i].value){
                        category[v].parentNode.style.display = "none"
                    }
                    else {
                        category[v].parentNode.style.display = "flex"
                    }
                }
            }
        }
    }
}