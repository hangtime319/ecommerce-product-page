// SELECT ELEMENTS
const imgThumb = document.querySelectorAll(".thumb");
const overlayLightbox = document.querySelector(".overlay-lightbox");
const lightbox = document.querySelector(".lightbox");
const closeLightbox = document.querySelector(".close-lightbox");
const menuMobile = document.querySelector(".menu-mobile");
const closeMenu = document.querySelector(".close");
const navMenu = document.querySelector(".nav");
const overlayMenu = document.querySelector(".overlay");


// Lightbox
imgThumb.forEach((img) => {
  img.addEventListener("click", (e) => {
    lightbox.style.display = "grid";
    overlayLightbox.style.display = "grid";
  });
});

closeLightbox.addEventListener("click", (e) => {
  lightbox.style.display = "none";
  overlayLightbox.style.display = "none";
});

// Menu Mobile
menuMobile.addEventListener("click", (e) => {
  navMenu.style.display = "flex";
  overlayMenu.style.display = "block";
  console.log(e.target);
});

closeMenu.addEventListener("click", (e) => {
  navMenu.style.display = "none";
  overlayMenu.style.display = "none";
  console.log(e.target);
});

function openLightbox() {
  lightbox.style.display = "grid";
  overlayLightbox.style.display = "grid";
}

// CAROUSEL LIGHTBOX
const lightboxImage = document.querySelector(".main-thumb");

imgThumb.forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    const dataId = e.currentTarget.dataset.id;
    lightboxImage.src = `./assets/images/image-product-${dataId}.jpg`;
    update(dataId);
  });
});

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

function update(count) {
  next.addEventListener("click", () => {
    count++;
    if (count > imgThumb.length) {
      count = 1;
      lightboxImage.src = `./assets/images/image-product-${count}.jpg`;
    } else {
      lightboxImage.src = `./assets/images/image-product-${count}.jpg`;
    }
  });
  prev.addEventListener("click", () => {
    count--;
    if (count < 1) {
      count = imgThumb.length;
    }
    lightboxImage.src = `./assets/images/image-product-${count}.jpg`;
  });
  console.log(count);
}

const thumbsLb = document.querySelectorAll(".thumb-lb");

thumbsLb.forEach((thumbLb) => {
  thumbLb.addEventListener("click", (e) => {
    thumbsLb.forEach((thumbImg) => {
      thumbImg.classList.remove("img-selected");
    });
    let imgFocus = e.currentTarget.dataset.id;
    lightboxImage.src = `./assets/images/image-product-${imgFocus}.jpg`;
    thumbLb.classList.add("img-selected");
  });
});

//CAROUSEL MOBILE
const prevMobile = document.querySelector(".prev-mobile");
const nextMobile = document.querySelector(".next-mobile");
const imgMobile = document.getElementById("img-mobile");

let countMobile = 1;

prevMobile.addEventListener("click", (e) => {
  countMobile--;
  if (countMobile < 1) {
    countMobile = 4;
    imgMobile.src = `./assets/images/image-product-${countMobile}.jpg`;
  } else {
    imgMobile.src = `./assets/images/image-product-${countMobile}.jpg`;
  }
});

nextMobile.addEventListener("click", (e) => {
  countMobile++;
  if (countMobile > 4) {
    countMobile = 1;
    imgMobile.src = `./assets/images/image-product-${countMobile}.jpg`;
  } else {
    imgMobile.src = `./assets/images/image-product-${countMobile}.jpg`;
  }
});

// CART
const amount = document.querySelector(".amount");
const plusBtn = document.querySelector(".btn-plus");
const minusBtn = document.querySelector(".btn-minus");
const addCart = document.querySelector(".btn-add");
const notification = document.querySelector(".notification");
const cart = document.querySelector(".cart");
const basket = document.querySelector(".basket");
const fullCart = document.querySelector(".details-basket");
const totalPrice = document.getElementById("total-price");
const deleteBtn = document.querySelector(".icon-delete");
const emptyCart = document.querySelector(".details-empty");
const btnCheckout = document.querySelector(".btn-checkout");

let countAmount = 0;

minusBtn.addEventListener("click", () => {
  countAmount--;
  if (countAmount < 0) {
    countAmount = 0;
  }
  amount.textContent = countAmount;
});

plusBtn.addEventListener("click", () => {
  countAmount++;
  amount.textContent = countAmount;
});

addCart.addEventListener("click", () => {
  if (countAmount > 0) {
    updateCartContent(countAmount);
    notification.style.display = "block";
    notification.textContent = countAmount;
    countAmount = 0;
    amount.textContent = countAmount;
    emptyCart.style.display = 'none';
    fullCart.style.display = 'flex';
    btnCheckout.style.display = 'flex'
  }
});

function updateCartContent(number) {
  let calcPrice = Math.round(125.0 * number).toFixed(2);
  totalPrice.innerHTML = `<p id="total-price">$125.00 x ${number} <span>$${calcPrice}</span></p>`;

  deleteBtn.addEventListener("click", () => {
    fullCart.style.display = "none";
    btnCheckout.style.display = "none";
    emptyCart.style.display = "flex";
    notification.style.display = "none";
  });
}

cart.addEventListener("click", (e) => {
  basket.classList.toggle("activate");
});

