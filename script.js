const categorySwiper = document.querySelector(".categoryWrap .swiper-wrapper")
const productSwiper = document.querySelector(".productWrap .swiper-wrapper")
const actionSwiper = document.querySelector(".actionSliderWrap .swiper-wrapper")
const customerSwiper = document.querySelector(".customerWrap .swiper-wrapper")
const inp1 = document.querySelector(".forName input")
const inp2 = document.querySelector(".forMail input")
const inp3 = document.querySelector(".forDesc textarea")
const label1 = document.querySelector(".forName label")
const label2 = document.querySelector(".forMail label")
const label3 = document.querySelector(".forDesc label")
const headerCon1 = document.querySelector(".headerContainer1")
const headerMain = document.querySelector(".headerMain")
const headerNav = document.querySelector("header nav")
const megaMenu = document.querySelector(".megaMenu")
const megaMenuOverlay = document.querySelector(".megaMenuOverlay")
const megaDropdownShow = document.querySelector(".megaDropdownShow")
const megaDropdownCloseBtn = document.querySelector(".closeBtn")
const navContainer = document.querySelector(".navContainer")
const navOverlay = document.querySelector(".navOverlay")
const menuBar = document.querySelector(".menuBar")
const navClose = document.querySelector(".navClose")
const searchBtn = document.querySelector(".searchBtn")
const searchCancel = document.querySelector(".searchCancel")
const searchInput = document.querySelector(".searchWrap input")



const categoryItems = [
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",
    "Frezeit &amp; Urlaub",

]
const productItems = [
    "Product Name",
    "Product Name",
    "Product Name",
    "Product Name",
    "Product Name",
    "Product Name",
    "Product Name",
    "Product Name",
    "Product Name",
    "Product Name",
    "Product Name",
]
const actionItems = [
    "one",
    "two",
    "three"
]
const customers = [
    "customer",
    "customer",
    "customer",
    "customer",
    "customer",
    "customer",
    "customer",
    "customer",
    "customer",
    "customer",
    "customer",
    "customer",
    "customer",
]

categorySwiper.innerHTML = categoryItems.map((val, ind) => {
    return `<div class="swiper-slide">
    <div class="singleCategory">
    <div class="categoryImg">
    <img src="images/photo.png" alt="cobben category list">
    </div>
    <h3 class="categoryName">${val}</h3>
    </div>
    </div>`
}).join(" ")


productSwiper.innerHTML = productItems.map((val, ind) => {
    return `
    <div class="swiper-slide">
    <div class="singleProduct">
    <div class="productImg">
        <img src="images/photo.png" alt="cobeen product image">
    </div>
    <div class="productInfo">
        <h2 class="productName">${val}</h2>
        <h3>ab 9,99 &euro;</h3>
    </div>
    </div>
    </div>
    `
}).join(" ")
actionSwiper.innerHTML = actionItems.map((val, ind) => {
    return `
    <div class="swiper-slide">
    <div class="singleAction">
    <img src="images/photo.png" alt="cobeen actions">
    </div>
    </div>
    `
}).join(" ")
customerSwiper.innerHTML = customers.map((val, ind) => {
    return `
    <div class="swiper-slide">
    <div class="singleCustomer">
    <img src="images/photo.png" alt="customer of cobeen">
    </div>
    </div>
    `
}).join(" ")



inp1.addEventListener("focus", () => {
    label1.style.top = "-13px"
    label1.style.fontSize = "10px"
    label1.style.color = "#000"
})
inp1.addEventListener("focusout", () => {
    if (!inp1.value) {
        label1.style.top = window.innerWidth > 1280 ? "15px" : "10px"
        label1.style.fontSize = "13px"
        label1.style.color = "#8b8b8b"
    }
})
inp2.addEventListener("focus", () => {
    label2.style.top = "-13px"
    label2.style.fontSize = "10px"
    label2.style.color = "#000"
})
inp2.addEventListener("focusout", () => {
    if (!inp2.value) {
        label2.style.top = window.innerWidth > 1280 ? "15px" : "10px"
        label2.style.fontSize = "13px"
        label2.style.color = "#8b8b8b"
    }
})
inp3.addEventListener("focus", () => {
    label3.style.top = "-13px"
    label3.style.fontSize = "10px"
    label3.style.color = "#000"
})
inp3.addEventListener("focusout", () => {
    if (!inp3.value) {
        label3.style.top = window.innerWidth > 1280 ? "15px" : "10px"
        label3.style.fontSize = "13px"
        label3.style.color = "#8b8b8b"
    }
})


window.addEventListener("scroll", () => {
    if (window.scrollY > 0 && window.innerWidth > 1120) {
        headerNav.classList.add("active")
    } else {
        headerNav.classList.remove("active")
    }
    if (window.scrollY > 0) {
        headerCon1.classList.add("active")
        megaMenu.classList.add("scrolled")
        headerMain.classList.add("active")
    } else {
        headerCon1.classList.remove("active")
        megaMenu.classList.remove("scrolled")
        headerMain.classList.remove("active")
    }
})
window.addEventListener("resize", () => {
    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left,
            top: rect.top
        };
    }
    const showBtnXPosition = getOffset(megaDropdownShow).left
    megaMenu.style.left = `${showBtnXPosition}px`

    if (window.scrollY > 0 && window.innerWidth > 1120) {
        headerNav.classList.add("active")
    } else {
        headerNav.classList.remove("active")
    }
})



function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left,
        top: rect.top
    };
}
const showBtnXPosition = getOffset(megaDropdownShow).left
megaMenu.style.left = `${showBtnXPosition}px`
megaDropdownShow.addEventListener("click", () => {
    megaMenu.style.opacity = "1"
    megaMenu.classList.add("active")
    megaMenuOverlay.classList.remove("active")
    megaMenuOverlay.style.backgroundColor = "#fff"
    setTimeout(() => {
        megaMenuOverlay.classList.add("active")
    }, 500);
})
megaDropdownCloseBtn.addEventListener("click", () => {
    megaMenu.classList.remove("active")
    megaMenuOverlay.classList.remove("active")
    megaMenuOverlay.style.backgroundColor = "#5a5a5a"
    setTimeout(() => {
        megaMenuOverlay.style.backgroundColor = "#f6f6f6"
        megaMenu.style.opacity = "0"
    }, 500);
})

menuBar.addEventListener("click", () => {
    navContainer.classList.add("active")
    navOverlay.classList.add("active")
})
navClose.addEventListener("click", () => {
    navContainer.classList.remove("active")
    navOverlay.classList.remove("active")
})
navOverlay.addEventListener("click", () => {
    navContainer.classList.remove("active")
    navOverlay.classList.remove("active")
})



searchBtn.addEventListener("click", () => {
    if (window.innerWidth < 760) {
        searchCancel.classList.add("active")
        searchInput.classList.add("active")
    }
})
searchCancel.addEventListener("click", () => {
    searchCancel.classList.remove("active")
    searchInput.classList.remove("active")
})