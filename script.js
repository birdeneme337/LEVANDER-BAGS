/* =====================================================
   LEVANTE WEBSITE
   CART + SUPABASE + WHATSAPP ORDER SYSTEM
===================================================== */


/* =====================================================
   SUPABASE CONNECTION
===================================================== */

const SUPABASE_URL =
  "https://xsepuaagyfqhdukndjqi.supabase.co";


const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_117r8cUyiqhzn1X4t7sFAA_QaoTKKIw";


const SUPABASE_ORDERS_URL =
  `${SUPABASE_URL}/rest/v1/orders`;


/* =====================================================
   WHATSAPP NUMBER
   EGYPT
===================================================== */

const WHATSAPP_NUMBER =
  "201039812810";


/* =====================================================
   PRODUCTS
===================================================== */

const products = [

  {
    id: 1,
    number: "01",
    code: "LV-GLT-01",
    name: "GALATA STRIPE",
    price: 0,
    image: "images/Levante-01.png",

    story: {
      tr: "Galata'nın zamansız sokaklarından ilham aldı. Geçmişin hikâyesi ile modern stilin buluştuğu, her güne karakter katan bir tasarım.",
      en: "Inspired by the timeless streets of Galata. Where history meets effortless modern style.",
      ar: "مستوحاة من شوارع غلطة الخالدة، حيث تلتقي حكايات الماضي بالأناقة العصرية."
    }
  },


  {
    id: 2,
    number: "02",
    code: "LV-BSP-02",
    name: "BOSPHORUS BLUE",
    price: 0,
    image: "images/Levante-02.png",

    story: {
      tr: "Boğaz'ın sakin mavisinden ilham aldı. Akışkan, zarif ve her kombine doğal bir şıklık katan bir model.",
      en: "Inspired by the calm blue of the Bosphorus. Fluid, elegant and effortlessly refined.",
      ar: "مستوحاة من زرقة البوسفور الهادئة. ناعمة وأنيقة وسهلة التنسيق."
    }
  },


  {
    id: 3,
    number: "03",
    code: "LV-SLT-03",
    name: "SULTAN SAND",
    price: 0,
    image: "images/Levante-03.png",

    story: {
      tr: "İstanbul'un yumuşak ve zamansız tonlarından ilham aldı. Minimal, zarif ve her gün kullanılabilecek bir parça.",
      en: "Inspired by Istanbul's soft and timeless tones. Minimal, elegant and endlessly versatile.",
      ar: "مستوحاة من درجات إسطنبول الناعمة والخالدة. بسيطة وأنيقة ومناسبة لكل يوم."
    }
  },


  {
    id: 4,
    number: "04",
    code: "LV-KRK-04",
    name: "KARAKÖY PINK",
    price: 0,
    image: "images/Levante-04.png",

    story: {
      tr: "Karaköy'ün enerjik ve modern sokaklarından ilham aldı. Feminen, şehirli ve dikkat çekici.",
      en: "Inspired by Karaköy's vibrant streets. Feminine, urban and confidently modern.",
      ar: "مستوحاة من شوارع كاراكوي النابضة بالحياة. أنثوية وعصرية وجريئة."
    }
  },


  {
    id: 5,
    number: "05",
    code: "LV-TSM-05",
    name: "TAKSİM BURGUNDY",
    price: 0,
    image: "images/Levante-05.png",

    story: {
      tr: "Taksim'in hiç durmayan enerjisinden ilham aldı. Derin tonları ve güçlü çizgileriyle şehir hayatının ritmini taşır.",
      en: "Inspired by Taksim's unstoppable energy. Deep tones and bold lines for life in motion.",
      ar: "مستوحاة من طاقة تقسيم التي لا تتوقف. ألوان عميقة وخطوط قوية للحياة المتحركة."
    }
  },


  {
    id: 6,
    number: "06",
    code: "LV-ORT-06",
    name: "ORTAKÖY DOT",
    price: 0,
    image: "images/Levante-06.png",

    story: {
      tr: "Ortaköy'ün sabahlarından ilham aldı. Hafif, neşeli ve küçük detaylarıyla karakter kazanan bir tasarım.",
      en: "Inspired by Ortaköy's mornings. Light, playful and full of character.",
      ar: "مستوحاة من صباحات أورتاكوي. خفيفة ومرحة ومليئة بالتفاصيل الجميلة."
    }
  },


  {
    id: 7,
    number: "07",
    code: "LV-EMN-07",
    name: "EMİNÖNÜ GRID",
    price: 0,
    image: "images/Levante-07.png",

    story: {
      tr: "Eminönü'nün düzenli ama canlı ritminden ilham aldı. Yapısal çizgiler ve zamansız bir şehir karakteri.",
      en: "Inspired by Eminönü's structured rhythm. Clean lines and timeless city character.",
      ar: "مستوحاة من إيقاع إمينونو المنظم والحيوي. خطوط واضحة وشخصية مدينة خالدة."
    }
  },


  {
    id: 8,
    number: "08",
    code: "LV-BLT-08",
    name: "BALAT ROSE",
    price: 0,
    image: "images/Levante-08.png",

    story: {
      tr: "Balat'ın renkli sokaklarından ilham aldı. Yumuşak tonlar, nostaljik ruh ve modern bir özgürlük.",
      en: "Inspired by the colorful streets of Balat. Soft tones, nostalgia and modern freedom.",
      ar: "مستوحاة من شوارع بالاط الملونة. ألوان ناعمة وروح حنين وحرية عصرية."
    }
  },


  {
    id: 9,
    number: "09",
    code: "LV-LPD-09",
    name: "LEVANTE LEOPARD",
    price: 0,
    image: "images/Levante-09.png",

    story: {
      tr: "Cesur, özgüvenli ve unutulmaz. Şehrin güçlü ruhundan ilham alan, dikkat çekmekten korkmayanlar için.",
      en: "Bold, confident and unforgettable. Made for those who are never afraid to stand out.",
      ar: "جريئة وواثقة ولا تُنسى. لمن لا يخافون من لفت الأنظار."
    }
  },


  {
    id: 10,
    number: "10",
    code: "LV-MID-10",
    name: "MIDNIGHT ISTANBUL",
    price: 0,
    image: "images/Levante-10.png",

    story: {
      tr: "İstanbul gecelerinden ilham aldı. Derin, zarif ve gizemli. Günün her saatinde güçlü bir ifade.",
      en: "Inspired by Istanbul nights. Deep, elegant and mysterious. A powerful statement at any hour.",
      ar: "مستوحاة من ليالي إسطنبول. عميقة وأنيقة وغامضة، حضور قوي في كل وقت."
    }
  }

];


/* =====================================================
   CART
===================================================== */

let cart = [];


/* =====================================================
   GET LANGUAGE
===================================================== */

function getLanguage() {

  const languageElement =
    document.getElementById("language");


  return languageElement
    ? languageElement.value
    : "tr";

}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

  const language =
    getLanguage();


  const grid =
    document.getElementById("productsGrid");


  if (!grid) {

    return;

  }


  grid.innerHTML = "";


  products.forEach(product => {


    let buttonText =
      "Sepete Ekle";


    if (language === "en") {

      buttonText =
        "Add to Bag";

    }


    if (language === "ar") {

      buttonText =
        "أضف إلى السلة";

    }


    let priceText =
      "Yakında";


    if (language === "en") {

      priceText =
        "Coming Soon";

    }


    if (language === "ar") {

      priceText =
        "قريباً";

    }


    grid.innerHTML += `

      <article class="product-card">

        <div class="product-image">

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >

        </div>


        <div class="product-info">

          <div class="product-code">

            ${product.number} · ${product.code}

          </div>


          <h3>

            ${product.name}

          </h3>


          <p class="story">

            ${product.story[language] || product.story.en}

          </p>


          <div class="product-bottom">

            <span class="price">

              ${priceText}

            </span>


            <button
              class="add-btn"
              onclick="addToCart(${product.id})"
            >

              ${buttonText}

            </button>

          </div>

        </div>

      </article>

    `;

  });

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

  const product =
    products.find(
      item => item.id === productId
    );


  if (!product) {

    return;

  }


  const existingItem =
    cart.find(
      item => item.id === productId
    );


  if (existingItem) {

    existingItem.quantity += 1;

  }

  else {

    cart.push({

      ...product,

      quantity: 1

    });

  }


  updateCart();

}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(
  productId,
  amount
) {

  const item =
    cart.find(
      item => item.id === productId
    );


  if (!item) {

    return;

  }


  item.quantity += amount;


  if (item.quantity <= 0) {

    removeFromCart(productId);

    return;

  }


  updateCart();

}


/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(productId) {

  cart =
    cart.filter(
      item => item.id !== productId
    );


  updateCart();

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

  const cartItems =
    document.getElementById("cartItems");


  const cartCount =
    document.getElementById("cartCount");


  if (!cartItems || !cartCount) {

    return;

  }


  const language =
    getLanguage();


  const totalQuantity =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  cartCount.textContent =
    totalQuantity;


  if (cart.length === 0) {


    let emptyText =
      "Sepetin henüz boş. Hikâyeni seçmeye başla.";


    if (language === "en") {

      emptyText =
        "Your bag is empty. Start choosing your story.";

    }


    if (language === "ar") {

      emptyText =
        "سلتك فارغة. ابدأ باختيار قصتك.";

    }


    cartItems.innerHTML = `

      <div class="empty-cart">

        ${emptyText}

      </div>

    `;


    return;

  }


  cartItems.innerHTML = "";


  cart.forEach(item => {


    let removeText =
      "Kaldır";


    if (language === "en") {

      removeText =
        "Remove";

    }


    if (language === "ar") {

      removeText =
        "حذف";

    }


    cartItems.innerHTML += `

      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${item.name}"
        >


        <div class="cart-item-info">

          <h4>

            ${item.number} · ${item.name}

          </h4>


          <small>

            ${item.code}

          </small>


          <div class="quantity-controls">

            <button
              onclick="changeQuantity(${item.id}, -1)"
            >
              −
            </button>


            <strong>

              ${item.quantity}

            </strong>


            <button
              onclick="changeQuantity(${item.id}, 1)"
            >
              +
            </button>

          </div>


          <button
            class="remove-btn"
            onclick="removeFromCart(${item.id})"
          >

            ${removeText}

          </button>

        </div>

      </div>

    `;

  });

}


/* =====================================================
   CART OPEN
===================================================== */

function openCart() {

  const cartDrawer =
    document.getElementById("cartDrawer");


  if (!cartDrawer) {

    return;

  }


  cartDrawer.classList.add("active");


  document.body.classList.add(
    "cart-open"
  );

}


/* =====================================================
   CART CLOSE
===================================================== */

function closeCart() {

  const cartDrawer =
    document.getElementById("cartDrawer");


  if (!cartDrawer) {

    return;

  }


  cartDrawer.classList.remove(
    "active"
  );


  document.body.classList.remove(
    "cart-open"
  );

}


/* =====================================================
   MENU OPEN
===================================================== */

function openMenu() {

  const sideMenu =
    document.getElementById("sideMenu");


  const menuOverlay =
    document.getElementById("menuOverlay");


  if (sideMenu) {

    sideMenu.classList.add(
      "active"
    );

  }


  if (menuOverlay) {

    menuOverlay.classList.add(
      "active"
    );

  }


  document.body.classList.add(
    "menu-open"
  );

}


/* =====================================================
   MENU CLOSE
===================================================== */

function closeMenu() {

  const sideMenu =
    document.getElementById("sideMenu");


  const menuOverlay =
    document.getElementById("menuOverlay");


  if (sideMenu) {

    sideMenu.classList.remove(
      "active"
    );

  }


  if (menuOverlay) {

    menuOverlay.classList.remove(
      "active"
    );

  }


  document.body.classList.remove(
    "menu-open"
  );

}


/* =====================================================
   SEND ORDER
   SUPABASE + WHATSAPP
===================================================== */

async function sendWhatsAppOrder() {


  const customerNameElement =
    document.getElementById(
      "customerName"
    );


  const customerPhoneElement =
    document.getElementById(
      "customerPhone"
    );


  const orderButton =
    document.getElementById(
      "whatsappButton"
    );


  const name =
    customerNameElement
      ? customerNameElement.value.trim()
      : "";


  const phone =
    customerPhoneElement
      ? customerPhoneElement.value.trim()
      : "";


  const language =
    getLanguage();



  /* =====================================================
     CART VALIDATION
  ===================================================== */

  if (cart.length === 0) {


    let message =
      "Sepetiniz boş.";


    if (language === "en") {

      message =
        "Your cart is empty.";

    }


    if (language === "ar") {

      message =
        "سلتك فارغة.";

    }


    alert(message);

    return;

  }



  /* =====================================================
     CUSTOMER VALIDATION
  ===================================================== */

  if (!name || !phone) {


    let message =
      "Lütfen Ad Soyad ve Telefon Numaranızı giriniz.";


    if (language === "en") {

      message =
        "Please enter your full name and phone number.";

    }


    if (language === "ar") {

      message =
        "من فضلك أدخل الاسم ورقم الهاتف.";

    }


    alert(message);

    return;

  }



  /* =====================================================
     BUTTON CHECK
  ===================================================== */

  if (!orderButton) {

    alert(
      "Sipariş butonu bulunamadı."
    );

    return;

  }



  /* =====================================================
     OPEN WHATSAPP WINDOW IMMEDIATELY

     IMPORTANT:
     We open the window BEFORE await/fetch.
     This prevents browser popup blocking.
  ===================================================== */

  const whatsappWindow =
    window.open(
      "about:blank",
      "_blank"
    );



  /* =====================================================
     BUTTON LOADING
  ===================================================== */

  const originalButtonText =
    orderButton.innerHTML;


  orderButton.disabled =
    true;


  if (language === "tr") {

    orderButton.innerHTML =
      "Siparişiniz kaydediliyor...";

  }


  if (language === "en") {

    orderButton.innerHTML =
      "Saving your order...";

  }


  if (language === "ar") {

    orderButton.innerHTML =
      "جاري تسجيل طلبك...";

  }



  /* =====================================================
     CREATE ORDER NUMBER
  ===================================================== */

  const orderNumber =
    "LV-" +
    Date.now()
      .toString()
      .slice(-8) +
    "-" +
    Math.floor(
      Math.random() * 1000
    )
      .toString()
      .padStart(
        3,
        "0"
      );



  /* =====================================================
     PREPARE ORDER ITEMS
  ===================================================== */

  const orderItems =
    cart.map(
      item => ({

        product_id:
          item.id,

        product_number:
          item.number,

        product_name:
          item.name,

        product_code:
          item.code,

        quantity:
          item.quantity

      })
    );



  /* =====================================================
     DATABASE DATA
  ===================================================== */

  const orderData = {

    order_number:
      orderNumber,

    customer_name:
      name,

    phone:
      phone,

    items:
      orderItems,

    status:
      "new"

  };



  /* =====================================================
     CREATE WHATSAPP MESSAGE
  ===================================================== */

  let whatsappMessage =
`👜 *NEW LEVANTE ORDER REQUEST*

📦 *ORDER NUMBER:*
${orderNumber}

👤 *CUSTOMER NAME:*
${name}

📱 *CUSTOMER PHONE:*
${phone}

🛍️ *ORDER DETAILS:*

`;



  cart.forEach(
    (item, index) => {

      whatsappMessage +=
`${index + 1}. *${item.number} · ${item.name}*

Product Code: ${item.code}
Quantity: ${item.quantity}

`;

    }
  );



  whatsappMessage +=
`----------------------------

✨ Sent from LEVANTE Website

Born in Istanbul.
Inspired by the Levant breeze.`;



  const encodedMessage =
    encodeURIComponent(
      whatsappMessage
    );



  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;



  /* =====================================================
     SEND ORDER TO SUPABASE
  ===================================================== */

  try {


    const response =
      await fetch(

        SUPABASE_ORDERS_URL,

        {

          method:
            "POST",


          headers: {

            "apikey":
              SUPABASE_PUBLISHABLE_KEY,


            "Authorization":
              `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,


            "Content-Type":
              "application/json",


            "Accept":
              "application/json",


            "Prefer":
              "return=representation"

          },


          body:
            JSON.stringify(
              orderData
            )

        }

      );



    const responseText =
      await response.text();



    console.log(
      "SUPABASE STATUS:",
      response.status
    );


    console.log(
      "SUPABASE RESPONSE:",
      responseText
    );



    /* =====================================================
       SUPABASE ERROR
    ===================================================== */

    if (!response.ok) {


      let detailMessage =
        responseText;


      try {


        const errorData =
          JSON.parse(
            responseText
          );


        detailMessage =
          errorData.message ||
          errorData.details ||
          errorData.hint ||
          errorData.error ||
          responseText;


      }

      catch (parseError) {

        console.error(
          parseError
        );

      }


      throw new Error(
        detailMessage
      );

    }



    /* =====================================================
       SUCCESS
    ===================================================== */

    console.log(
      "LEVANTE ORDER SAVED SUCCESSFULLY"
    );



    /* =====================================================
       SEND CUSTOMER ORDER TO WHATSAPP
    ===================================================== */

    if (whatsappWindow) {


      whatsappWindow.location.href =
        whatsappURL;


    }

    else {


      /* Fallback if popup was blocked */

      window.location.href =
        whatsappURL;

    }



    /* =====================================================
       SUCCESS MESSAGE
    ===================================================== */

    let successMessage =
`Teşekkür ederiz ${name}! 👜

Sipariş talebiniz başarıyla alınmıştır.

Sipariş Numaranız:
${orderNumber}

LEVANTE ekibi en kısa sürede sizinle iletişime geçecektir.`;



    if (language === "en") {

      successMessage =
`Thank you ${name}! 👜

Your order request has been successfully received.

Your Order Number:
${orderNumber}

The LEVANTE team will contact you as soon as possible.`;

    }



    if (language === "ar") {

      successMessage =
`شكراً لك ${name}! 👜

تم استلام طلبك بنجاح.

رقم الطلب:
${orderNumber}

سيتواصل معك فريق LEVANTE في أقرب وقت.`;

    }



    alert(
      successMessage
    );



    /* =====================================================
       CLEAR CART
    ===================================================== */

    cart = [];


    updateCart();



    /* =====================================================
       CLEAR FORM
    ===================================================== */

    if (customerNameElement) {

      customerNameElement.value =
        "";

    }


    if (customerPhoneElement) {

      customerPhoneElement.value =
        "";

    }



    /* =====================================================
       RESET BUTTON
    ===================================================== */

    orderButton.disabled =
      false;


    orderButton.innerHTML =
      originalButtonText;



    /* =====================================================
       CLOSE CART
    ===================================================== */

    setTimeout(
      () => {

        closeCart();

      },
      300
    );


  }



  /* =====================================================
     ERROR
  ===================================================== */

  catch (error) {


    console.error(
      "LEVANTE ORDER ERROR:",
      error
    );



    /* Close blank WhatsApp window
       if Supabase order failed */

    if (whatsappWindow) {

      whatsappWindow.close();

    }



    let errorMessage =
      "Sipariş kaydedilirken bir hata oluştu.";


    if (language === "en") {

      errorMessage =
        "There was a problem saving your order.";

    }


    if (language === "ar") {

      errorMessage =
        "حدثت مشكلة أثناء تسجيل طلبك.";

    }


    alert(

      errorMessage +

      "\n\nSupabase Error:\n" +

      (
        error.message ||
        "Unknown error"
      )

    );



    orderButton.disabled =
      false;


    orderButton.innerHTML =
      originalButtonText;

  }

}


/* =====================================================
   HERO SLIDER
===================================================== */

let currentSlide =
  0;


const slides =
  document.querySelectorAll(
    ".slide"
  );


const dots =
  document.querySelectorAll(
    ".dot"
  );



function goToSlide(index) {


  if (!slides.length) {

    return;

  }


  if (slides[currentSlide]) {

    slides[currentSlide]
      .classList
      .remove("active");

  }


  if (dots[currentSlide]) {

    dots[currentSlide]
      .classList
      .remove("active");

  }


  currentSlide =
    index;


  if (currentSlide >= slides.length) {

    currentSlide =
      0;

  }


  if (currentSlide < 0) {

    currentSlide =
      slides.length - 1;

  }


  if (slides[currentSlide]) {

    slides[currentSlide]
      .classList
      .add("active");

  }


  if (dots[currentSlide]) {

    dots[currentSlide]
      .classList
      .add("active");

  }

}



if (slides.length > 1) {

  setInterval(

    () => {

      goToSlide(
        currentSlide + 1
      );

    },

    5000

  );

}


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {


  tr: {

    heroTag:
      "İSTANBUL'DA DOĞDU",

    heroTitle:
      "Bir çantadan<br>daha fazlası.",

    heroText:
      "Her LEVANTE modeli bir şehirden, bir sokaktan ve bir anıdan ilham alır.",

    heroButton:
      "Koleksiyonu Keşfet →",

    introTag:
      "LEVANTE DENEYİMİ",

    introTitle:
      "Taşıdığın şey sadece bir çanta olmasın.",

    introText:
      "İstanbul'un enerjisi, Akdeniz'in hafifliği ve günlük hayatın özgürlüğü.",

    collectionTag:
      "KOLEKSİYONU KEŞFET",

    collectionTitle:
      "Hikâyeni Taşı.",

    collectionText:
      "Her modelin kendine ait bir karakteri var. Hangisi sana daha yakın?",

    storyTag:
      "LEVANT RÜZGARI",

    storyTitle:
      "İstanbul'da doğdu.<br>Levant rüzgârından ilham aldı.",

    storyText:
      "LEVANTE, İstanbul'un enerjisini ve Akdeniz'in özgür ruhunu bir araya getirir.",

    featuresTag:
      "NEDEN LEVANTE?",

    featuresTitle:
      "Hareket halindeki hayatlar için tasarlandı.",

    feature1Title:
      "Her Çantanın Bir Hikâyesi Var",

    feature1Text:
      "Her model bir şehirden, bir duygudan ve bir anıdan ilham alır.",

    feature2Title:
      "Seninle Hareket Eder",

    feature2Text:
      "Günlük hayatının ritmine uyum sağlamak için tasarlandı.",

    feature3Title:
      "Senin Hikâyen",

    feature3Text:
      "Sadece bir çanta seçmezsin. Sana benzeyen hikâyeyi bulursun.",

    cartTitle:
      "Çantam",

    checkoutTitle:
      "Bilgileriniz",

    customerNamePlaceholder:
      "Ad Soyad",

    customerPhonePlaceholder:
      "Telefon Numarası",

    orderButton:
      "Sipariş Talebi Gönder"

  },


  en: {

    heroTag:
      "BORN IN ISTANBUL",

    heroTitle:
      "More than<br>just a bag.",

    heroText:
      "Every LEVANTE piece carries a story inspired by Istanbul.",

    heroButton:
      "Discover the Collection →",

    introTag:
      "THE LEVANTE EXPERIENCE",

    introTitle:
      "Don't just carry a bag.<br>Carry a story.",

    introText:
      "The energy of Istanbul, the lightness of the Mediterranean and the freedom of everyday life.",

    collectionTag:
      "DISCOVER THE COLLECTION",

    collectionTitle:
      "Carry Your Story.",

    collectionText:
      "Every model has its own personality. Which one feels like you?",

    storyTag:
      "LEVANT BREEZE",

    storyTitle:
      "Born in Istanbul.<br>Inspired by the Levant breeze.",

    storyText:
      "LEVANTE brings together Istanbul's energy and the free spirit of the Mediterranean.",

    featuresTag:
      "WHY LEVANTE?",

    featuresTitle:
      "Designed for lives in motion.",

    feature1Title:
      "Every Bag Has a Story",

    feature1Text:
      "Each model is inspired by a city, a feeling and a memory.",

    feature2Title:
      "Moves With You",

    feature2Text:
      "Designed to adapt to the rhythm of your everyday life.",

    feature3Title:
      "Your Own Story",

    feature3Text:
      "You don't just choose a bag. You find the one that tells your story.",

    cartTitle:
      "My Bag",

    checkoutTitle:
      "Your Details",

    customerNamePlaceholder:
      "Full Name",

    customerPhonePlaceholder:
      "Phone Number",

    orderButton:
      "Submit Order Request"

  },


  ar: {

    heroTag:
      "وُلدت في إسطنبول",

    heroTitle:
      "أكثر من<br>مجرد حقيبة.",

    heroText:
      "كل قطعة من LEVANTE تحمل قصة مستوحاة من إسطنبول.",

    heroButton:
      "اكتشف المجموعة ←",

    introTag:
      "تجربة LEVANTE",

    introTitle:
      "لا تحمل حقيبة فقط.<br>احمل قصة.",

    introText:
      "طاقة إسطنبول وخفة البحر المتوسط وحرية الحياة اليومية.",

    collectionTag:
      "اكتشف المجموعة",

    collectionTitle:
      "احمل قصتك.",

    collectionText:
      "لكل موديل شخصية خاصة. أي واحد يشبهك؟",

    storyTag:
      "نسيم المشرق",

    storyTitle:
      "وُلدت في إسطنبول.<br>مستوحاة من نسيم المشرق.",

    storyText:
      "تجمع LEVANTE بين طاقة إسطنبول وروح البحر المتوسط الحرة.",

    featuresTag:
      "لماذا LEVANTE؟",

    featuresTitle:
      "مصممة لحياة لا تتوقف عن الحركة.",

    feature1Title:
      "لكل حقيبة قصة",

    feature1Text:
      "كل موديل مستوحى من مدينة وشعور وذكرى.",

    feature2Title:
      "تتحرك معك",

    feature2Text:
      "مصممة لتتكيف مع إيقاع حياتك اليومية.",

    feature3Title:
      "قصتك الخاصة",

    feature3Text:
      "أنت لا تختار حقيبة فقط، بل تختار القصة التي تشبهك.",

    cartTitle:
      "حقيبتي",

    checkoutTitle:
      "بياناتك",

    customerNamePlaceholder:
      "الاسم بالكامل",

    customerPhonePlaceholder:
      "رقم الهاتف",

    orderButton:
      "إرسال طلب الشراء"

  }

};


/* =====================================================
   CHANGE LANGUAGE
===================================================== */

function changeLanguage() {

  const language =
    getLanguage();


  const text =
    translations[language];


  if (!text) {

    return;

  }


  const setText =
    (
      id,
      value,
      html = false
    ) => {

      const element =
        document.getElementById(id);


      if (!element) {

        return;

      }


      if (html) {

        element.innerHTML =
          value;

      }

      else {

        element.textContent =
          value;

      }

    };


  setText("heroTag", text.heroTag);

  setText(
    "heroTitle",
    text.heroTitle,
    true
  );

  setText(
    "heroText",
    text.heroText
  );

  setText(
    "heroButton",
    text.heroButton
  );

  setText(
    "introTag",
    text.introTag
  );

  setText(
    "introTitle",
    text.introTitle,
    true
  );

  setText(
    "introText",
    text.introText
  );

  setText(
    "collectionTag",
    text.collectionTag
  );

  setText(
    "collectionTitle",
    text.collectionTitle
  );

  setText(
    "collectionText",
    text.collectionText
  );

  setText(
    "storyTag",
    text.storyTag
  );

  setText(
    "storyTitle",
    text.storyTitle,
    true
  );

  setText(
    "storyText",
    text.storyText
  );

  setText(
    "featuresTag",
    text.featuresTag
  );

  setText(
    "featuresTitle",
    text.featuresTitle
  );

  setText(
    "feature1Title",
    text.feature1Title
  );

  setText(
    "feature1Text",
    text.feature1Text
  );

  setText(
    "feature2Title",
    text.feature2Title
  );

  setText(
    "feature2Text",
    text.feature2Text
  );

  setText(
    "feature3Title",
    text.feature3Title
  );

  setText(
    "feature3Text",
    text.feature3Text
  );

  setText(
    "cartTitle",
    text.cartTitle
  );

  setText(
    "checkoutTitle",
    text.checkoutTitle
  );


  const customerName =
    document.getElementById(
      "customerName"
    );


  const customerPhone =
    document.getElementById(
      "customerPhone"
    );


  const orderButton =
    document.getElementById(
      "whatsappButton"
    );


  if (customerName) {

    customerName.placeholder =
      text.customerNamePlaceholder;

  }


  if (customerPhone) {

    customerPhone.placeholder =
      text.customerPhonePlaceholder;

  }


  if (orderButton) {

    orderButton.innerHTML =
      text.orderButton;

  }


  renderProducts();

  updateCart();

}


/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

document.addEventListener(
  "DOMContentLoaded",

  () => {

    renderProducts();

    updateCart();

    changeLanguage();

  }

);