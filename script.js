/* =========================================================
   LEVANTE ISTANBUL - MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       ELEMENTS
    ========================================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuClose = document.querySelector(".menu-close");

    const cartButton = document.querySelector(".cart-button");
    const cartCount = document.querySelector(".cart-count");
    const cartPanel = document.querySelector(".cart-panel");
    const cartClose = document.querySelector(".cart-close");
    const cartItems = document.querySelector(".cart-items");

    const productCards = document.querySelectorAll(".product-card");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    const languageButtons = document.querySelectorAll(".language-option");

    let cart = [];



    /* =========================================================
       MOBILE MENU
    ========================================================= */

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.add("active");
            document.body.classList.add("menu-open");
        });

    }


    if (menuClose && mobileMenu) {

        menuClose.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open");
        });

    }


    /* =========================================================
       CLOSE MOBILE MENU AFTER CLICK
    ========================================================= */

    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });



    /* =========================================================
       CART PANEL
    ========================================================= */

    if (cartButton && cartPanel) {

        cartButton.addEventListener("click", () => {

            cartPanel.classList.add("active");
            document.body.classList.add("cart-open");

        });

    }


    if (cartClose && cartPanel) {

        cartClose.addEventListener("click", () => {

            cartPanel.classList.remove("active");
            document.body.classList.remove("cart-open");

        });

    }



    /* =========================================================
       ADD PRODUCT TO CART
    ========================================================= */

    addToCartButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            const product = button.closest(".product-card");

            if (!product) return;

            const productName =
                product.dataset.name ||
                product.querySelector(".product-name")?.textContent ||
                "Levante Bag";

            const productPrice =
                product.dataset.price ||
                product.querySelector(".product-price")?.textContent ||
                "0";

            const productImage =
                product.dataset.image ||
                product.querySelector("img")?.src ||
                "";


            addProductToCart({
                name: productName,
                price: productPrice,
                image: productImage
            });


            animateProductToCart(
                product.querySelector("img"),
                cartButton
            );

        });

    });



    /* =========================================================
       ADD PRODUCT FUNCTION
    ========================================================= */

    function addProductToCart(product) {

        const existingProduct = cart.find(
            item => item.name === product.name
        );


        if (existingProduct) {

            existingProduct.quantity += 1;

        } else {

            cart.push({
                ...product,
                quantity: 1
            });

        }


        updateCart();

    }



    /* =========================================================
       UPDATE CART
    ========================================================= */

    function updateCart() {

        const totalItems = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );


        if (cartCount) {

            cartCount.textContent = totalItems;

            cartCount.classList.add("cart-bounce");

            setTimeout(() => {
                cartCount.classList.remove("cart-bounce");
            }, 500);

        }


        renderCart();

    }



    /* =========================================================
       RENDER CART
    ========================================================= */

    function renderCart() {

        if (!cartItems) return;

        cartItems.innerHTML = "";


        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="empty-cart">
                    <p>Your cart is empty.</p>
                </div>
            `;

            return;

        }


        cart.forEach((item, index) => {

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>${item.price}</p>

                    <div class="cart-item-quantity">

                        <button
                            class="quantity-btn decrease"
                            data-index="${index}"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            class="quantity-btn increase"
                            data-index="${index}"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove-cart-item"
                    data-index="${index}"
                >
                    ×
                </button>

            `;


            cartItems.appendChild(cartItem);

        });


        attachCartEvents();

    }



    /* =========================================================
       CART BUTTON EVENTS
    ========================================================= */

    function attachCartEvents() {

        const increaseButtons =
            document.querySelectorAll(".increase");

        const decreaseButtons =
            document.querySelectorAll(".decrease");

        const removeButtons =
            document.querySelectorAll(".remove-cart-item");



        increaseButtons.forEach((button) => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                cart[index].quantity += 1;

                updateCart();

            });

        });



        decreaseButtons.forEach((button) => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                if (cart[index].quantity > 1) {

                    cart[index].quantity -= 1;

                } else {

                    cart.splice(index, 1);

                }


                updateCart();

            });

        });



        removeButtons.forEach((button) => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                cart.splice(index, 1);

                updateCart();

            });

        });

    }



    /* =========================================================
       PRODUCT FLY TO CART ANIMATION
    ========================================================= */

    function animateProductToCart(productImage, cartTarget) {

        if (!productImage || !cartTarget) return;


        const imageRect =
            productImage.getBoundingClientRect();

        const cartRect =
            cartTarget.getBoundingClientRect();


        const flyingImage =
            productImage.cloneNode(true);


        flyingImage.classList.add("flying-product");


        flyingImage.style.position = "fixed";

        flyingImage.style.left =
            imageRect.left + "px";

        flyingImage.style.top =
            imageRect.top + "px";

        flyingImage.style.width =
            imageRect.width + "px";

        flyingImage.style.height =
            imageRect.height + "px";


        flyingImage.style.zIndex = "9999";

        flyingImage.style.pointerEvents = "none";


        document.body.appendChild(flyingImage);


        requestAnimationFrame(() => {

            flyingImage.style.transition =
                "all 0.9s cubic-bezier(.2,.8,.2,1)";


            flyingImage.style.left =
                cartRect.left + "px";

            flyingImage.style.top =
                cartRect.top + "px";


            flyingImage.style.width =
                "30px";

            flyingImage.style.height =
                "30px";


            flyingImage.style.opacity =
                "0.2";

            flyingImage.style.transform =
                "scale(0.3) rotate(20deg)";

        });


        setTimeout(() => {

            flyingImage.remove();

            if (cartButton) {

                cartButton.classList.add("cart-success");

                setTimeout(() => {

                    cartButton.classList.remove(
                        "cart-success"
                    );

                }, 600);

            }

        }, 900);

    }



    /* =========================================================
       PRODUCT DETAIL PAGE
    ========================================================= */

    productCards.forEach((card) => {

        card.addEventListener("click", () => {

            const productName =
                card.dataset.name ||
                card.querySelector(".product-name")?.textContent ||
                "Levante Bag";


            const productPrice =
                card.dataset.price ||
                card.querySelector(".product-price")?.textContent ||
                "";


            const productCode =
                card.dataset.code ||
                "LEV-001";


            const productImage =
                card.dataset.image ||
                card.querySelector("img")?.src ||
                "";


            openProductPage({

                name: productName,
                price: productPrice,
                code: productCode,
                image: productImage

            });

        });

    });



    /* =========================================================
       OPEN PRODUCT DETAIL PAGE
    ========================================================= */

    function openProductPage(product) {

        let detailPage =
            document.querySelector(".product-detail-page");


        if (!detailPage) {

            detailPage =
                document.createElement("div");

            detailPage.className =
                "product-detail-page";


            document.body.appendChild(detailPage);

        }


        detailPage.innerHTML = `

            <div class="product-detail-header">

                <button
                    class="product-detail-back"
                >
                    ← Back
                </button>

                <button
                    class="product-detail-cart"
                >
                    Cart
                </button>

            </div>


            <div class="product-detail-content">


                <div class="product-detail-gallery">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="product-detail-info">


                    <span
                        class="product-detail-category"
                    >
                        LEVANTE ISTANBUL
                    </span>


                    <h1>
                        ${product.name}
                    </h1>


                    <p
                        class="product-detail-code"
                    >
                        Product Code:
                        ${product.code}
                    </p>


                    <p
                        class="product-detail-price"
                    >
                        ${product.price}
                    </p>


                    <div
                        class="stock-status"
                    >
                        <span></span>
                        In Stock
                    </div>


                    <div
                        class="product-colors"
                    >

                        <h4>
                            Available Colors
                        </h4>


                        <div
                            class="color-options"
                        >

                            <button
                                class="color-option active"
                            ></button>

                            <button
                                class="color-option color-dark"
                            ></button>

                            <button
                                class="color-option color-light"
                            ></button>

                        </div>

                    </div>


                    <div
                        class="product-description"
                    >

                        <h3>
                            Bag Details
                        </h3>

                        <p>
                            Designed for everyday life,
                            combining style, comfort
                            and functionality.
                        </p>

                        <ul>

                            <li>
                                Premium quality material
                            </li>

                            <li>
                                Spacious main compartment
                            </li>

                            <li>
                                Comfortable shoulder strap
                            </li>

                            <li>
                                Signature Levante Istanbul design
                            </li>

                        </ul>

                    </div>


                    <button
                        class="detail-add-cart"
                    >
                        Add to Cart
                    </button>


                    <button
                        class="detail-buy-now"
                    >
                        Buy Now
                    </button>


                </div>


            </div>


            <section
                class="you-may-like"
            >

                <h2>
                    You May Also Like
                </h2>


                <div
                    class="related-products"
                >
                </div>

            </section>

        `;


        detailPage.classList.add("active");

        document.body.style.overflow =
            "hidden";


        renderRelatedProducts(
            product.name
        );


        /* BACK BUTTON */

        detailPage
            .querySelector(".product-detail-back")
            .addEventListener("click", () => {

                detailPage.classList.remove("active");

                document.body.style.overflow =
                    "";

            });



        /* ADD TO CART */

        detailPage
            .querySelector(".detail-add-cart")
            .addEventListener("click", () => {

                addProductToCart({

                    name: product.name,

                    price: product.price,

                    image: product.image

                });


                const detailImage =
                    detailPage.querySelector(
                        ".product-detail-gallery img"
                    );


                animateProductToCart(
                    detailImage,
                    cartButton
                );

            });



        /* BUY NOW */

        detailPage
            .querySelector(".detail-buy-now")
            .addEventListener("click", () => {

                addProductToCart({

                    name: product.name,

                    price: product.price,

                    image: product.image

                });


                detailPage.classList.remove("active");

                document.body.style.overflow =
                    "";


                if (cartPanel) {

                    cartPanel.classList.add(
                        "active"
                    );

                }

            });


        /* CART BUTTON */

        const detailCartButton =
            detailPage.querySelector(
                ".product-detail-cart"
            );


        if (detailCartButton) {

            detailCartButton.addEventListener(
                "click",
                () => {

                    if (cartPanel) {

                        cartPanel.classList.add(
                            "active"
                        );

                    }

                }
            );

        }

    }



    /* =========================================================
       RELATED PRODUCTS
    ========================================================= */

    function renderRelatedProducts(currentProductName) {

        const container =
            document.querySelector(
                ".related-products"
            );


        if (!container) return;


        container.innerHTML = "";


        const products =
            Array.from(
                document.querySelectorAll(
                    ".product-card"
                )
            );


        const relatedProducts =
            products.filter((product) => {

                const name =
                    product.dataset.name ||
                    product
                        .querySelector(
                            ".product-name"
                        )
                        ?.textContent;


                return name !== currentProductName;

            });


        relatedProducts
            .slice(0, 4)
            .forEach((product) => {

                const clone =
                    product.cloneNode(true);


                clone.addEventListener(
                    "click",
                    () => {

                        const name =
                            product.dataset.name ||
                            product
                                .querySelector(
                                    ".product-name"
                                )
                                ?.textContent;


                        const price =
                            product.dataset.price ||
                            product
                                .querySelector(
                                    ".product-price"
                                )
                                ?.textContent;


                        const image =
                            product.dataset.image ||
                            product
                                .querySelector("img")
                                ?.src;


                        const code =
                            product.dataset.code ||
                            "LEV-001";


                        openProductPage({

                            name,
                            price,
                            image,
                            code

                        });

                    }
                );


                container.appendChild(clone);

            });

    }



    /* =========================================================
       LANGUAGE SELECTOR
    ========================================================= */

    languageButtons.forEach((button) => {

        button.addEventListener("click", () => {

            languageButtons.forEach((item) => {

                item.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            const language =
                button.dataset.lang;


            document.documentElement.lang =
                language;

        });

    });



    /* =========================================================
       SMOOTH SCROLL
    ========================================================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((anchor) => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({

                            behavior:
                                "smooth",

                            block:
                                "start"

                        });

                    }

                }
            );

        });


});