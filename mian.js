window.addEventListener("load", main);

function main (){

    // ------ELEMENTOS------
    const menuEmail = document.querySelector(".navbar-email");
    const desktopMenu = document.querySelector(".desktop-menu");
    const menuCarritoIcon = document.querySelector(".navbar-shopping-cart"); 
    const menuHamIcon = document.querySelector(".menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const aside = document.querySelector(".product-detail");
    const cardsContainer = document.querySelector(".cards-container");


    // ----EVENTO CLICK DE LOS BOTONES-----
    menuEmail.addEventListener("click", toggleDesktopMenu);
    menuHamIcon.addEventListener("click", toggleMobileMenu);
    menuCarritoIcon.addEventListener("click", toggleCarritoAside);


    // -----FUNCIONES DE LOS EVENTOS DE LOS BOTONES----
    function toggleDesktopMenu(){
        desktopMenu.classList.toggle("inactive");
        aside.classList.add("inactive");
    };

    function toggleMobileMenu(){
        // if(!aside.classList.contains("inactive")){
        //     aside.classList.add("inactive");
        // }

        aside.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    };

    function toggleCarritoAside(){

        // if(!mobileMenu.classList.contains("inactive")){
        //     mobileMenu.classList.add("inactive");
        // }
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        aside.classList.toggle("inactive");
        
    };
// ------Js de la lista de productos---

let  productList = [];
productList.push({
    name: "Bike",
    price: 120, 
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bike",
    price: 120, 
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bike",
    price: 120, 
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
function renderProducts(arr){
    for (product of arr ){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", product.image);
    
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
       
        const productInfoDiv = document.createElement("div");
    
        const productinfoPrice = document.createElement("p");
        productinfoPrice.innerText = `$ ${product.price}`;
    
        const productinfoName = document.createElement("p");
        productinfoName.innerText = `$ ${product.name}`;
    
       
        const productinfoFigure = document.createElement("figure");
        const imgFigure = document.createElement("img");
        imgFigure.setAttribute("src","./icons/bt_add_to_cart.svg");
    
       
        
    
        cardsContainer.appendChild(productCard )
        productCard.append(img, productInfo);
        productInfo.append(productInfoDiv, productinfoFigure);
        productInfoDiv.append(productinfoPrice, productinfoName);
        productinfoFigure.appendChild(imgFigure);
    
    
    };
    
};
renderProducts(productList);






















































































};


