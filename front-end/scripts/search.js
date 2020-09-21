var productContainer = document.querySelector(".product")


fetch (`http://localhost:8000/products`)
.then (response => {
    return response.json()
})
.then (data => {
    for (i = 0; i < data.length; i++) {
        
        productContainer.innerHTML += `
        <div class="individualProduct">
            <a href="product_detail.html">
                <img class="pImg" src="${data[i].img}" alt="Image not found">
            </a>
            <p class="pName">${data[i].pname}</p>
            <p class="pPrice">$${data[i].price}</p>
            <p class="category">${data[i].category}</p>
        </div>`
    }
})

// search *********************************************

setTimeout(search, 100)

function search () {
    var input = document.getElementById("searchBar")
    var filter = input.value.toUpperCase()
    var ip = document.querySelectorAll(".individualProduct")

    for (i = 0; i < ip.length; i++) {
        var p = ip[i].getElementsByTagName("p") [0];
        var txtValue = p.textContent || p.innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1 ) {
            ip[i].style.display = "flex";
        }
        else {
            ip[i].style.display = "none";
        }
    }
}