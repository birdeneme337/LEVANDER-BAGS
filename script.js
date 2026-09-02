/* =====================================================
   LEVANTE WEBSITE
===================================================== */

const SUPABASE_URL =
  "https://xsepuaagyfqhdukndjqi.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_117r8cUyiqhzn1X4t7sFAA_QaoTKKIw";

const SUPABASE_WHATSAPP_FUNCTION_URL =
  `${SUPABASE_URL}/functions/v1/send-whatsapp-order`;

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
    image: "./images/Levante-01.png",

    colors: [
      {
        name: "Galata Stripe",
        hex: "#c7a27b"
      }
    ],

    specs: {
      tr: [
        "Ayarlanabilir omuz askısı",
        "Günlük kullanım için hafif yapı",
        "İç astar ve fermuarlı bölme"
      ],

      en: [
        "Adjustable shoulder strap",
        "Lightweight construction",
        "Inner lining with zip compartment"
      ],

      ar: [
        "حزام كتف قابل للتعديل",
        "تصميم خفيف للاستخدام اليومي",
        "بطانة داخلية مع جيب بسحاب"
      ]
    },

    story: {
      tr: "Galata'nın zamansız sokaklarından ilham aldı. Geçmişin hikâyesi ile modern stilin buluştuğu, her güne karakter katan bir tasarım.",
      en: "Inspired by the timeless streets of Galata, where history meets effortless modern style.",
      ar: "مستوحاة من شوارع غلطة الخالدة حيث تلتقي حكايات الماضي بالأناقة العصرية."
    }
  },


  {
    id: 2,
    number: "02",
    code: "LV-BSP-02",
    name: "BOSPHORUS BLUE",
    image: "./images/Levante-02.png",

    colors: [
      {
        name: "Bosphorus Blue",
        hex: "#526f88"
      }
    ],

    specs: {
      tr: [
        "Ayarlanabilir omuz askısı",
        "Hafif ve rahat kullanım",
        "İç astarlı yapı"
      ],

      en: [
        "Adjustable shoulder strap",
        "Lightweight and comfortable",
        "Fully lined interior"
      ],

      ar: [
        "حزام قابل للتعديل",
        "خفيفة ومريحة",
        "بطانة داخلية كاملة"
      ]
    },

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
    image: "./images/Levante-03.png",

    colors: [
      {
        name: "Sultan Sand",
        hex: "#b99a72"
      }
    ],

    specs: {
      tr: [
        "Yumuşak ve hafif yapı",
        "Ayarlanabilir askı",
        "İç astarlı kullanım"
      ],

      en: [
        "Soft lightweight construction",
        "Adjustable strap",
        "Lined interior"
      ],

      ar: [
        "تصميم ناعم وخفيف",
        "حزام قابل للتعديل",
        "بطانة داخلية"
      ]
    },

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
    name: "KARAKÖY NIGHT",
    image: "./images/Levante-04.png",

    colors: [
      {
        name: "Karaköy Night",
        hex: "#333333"
      }
    ],

    specs: {
      tr: [
        "Günlük şehir kullanımı",
        "Ayarlanabilir omuz askısı",
        "İç astarlı yapı"
      ],

      en: [
        "Made for city life",
        "Adjustable shoulder strap",
        "Lined interior"
      ],

      ar: [
        "مناسبة للحياة اليومية في المدينة",
        "حزام كتف قابل للتعديل",
        "بطانة داخلية"
      ]
    },

    story: {
      tr: "Karaköy'ün enerjik sokaklarından ilham alan güçlü ve modern bir tasarım.",
      en: "A bold and modern design inspired by the energetic streets of Karaköy.",
      ar: "تصميم عصري وجريء مستوحى من شوارع كاراكوي الحيوية."
    }
  },


  {
    id: 5,
    number: "05",
    code: "LV-TKS-05",
    name: "TAKSIM",
    image: "./images/Levante-05.png",

    colors: [
      {
        name: "Taksim",
        hex: "#8b6b55"
      }
    ],

    specs: {
      tr: [
        "Hafif günlük kullanım",
        "Ayarlanabilir askı",
        "Fonksiyonel iç bölüm"
      ],

      en: [
        "Lightweight everyday use",
        "Adjustable strap",
        "Functional interior"
      ],

      ar: [
        "خفيفة للاستخدام اليومي",
        "حزام قابل للتعديل",
        "تصميم داخلي عملي"
      ]
    },

    story: {
      tr: "Taksim'in hareketli ve özgür ruhundan ilham alan şehirli bir tasarım.",
      en: "An urban design inspired by the vibrant and free spirit of Taksim.",
      ar: "تصميم حضري مستوحى من روح تقسيم الحيوية والحرة."
    }
  },


  {
    id: 6,
    number: "06",
    code: "LV-USK-06",
    name: "ÜSKÜDAR",
    image: "./images/Levante-06.png",

    colors: [
      {
        name: "Üsküdar",
        hex: "#9d8469"
      }
    ],

    specs: {
      tr: [
        "Rahat günlük kullanım",
        "Ayarlanabilir omuz askısı",
        "İç astarlı tasarım"
      ],

      en: [
        "Comfortable everyday use",
        "Adjustable shoulder strap",
        "Lined construction"
      ],

      ar: [
        "مريحة للاستخدام اليومي",
        "حزام كتف قابل للتعديل",
        "تصميم مبطن"
      ]
    },

    story: {
      tr: "Üsküdar'ın sakin, zarif ve zamansız atmosferinden ilham aldı.",
      en: "Inspired by the calm, elegant and timeless atmosphere of Üsküdar.",
      ar: "مستوحاة من أجواء أوسكودار الهادئة والأنيقة والخالدة."
    }
  },


  {
    id: 7,
    number: "07",
    code: "LV-IST-07",
    name: "ISTANBUL",
    image: "./images/Levante-07.png",

    colors: [
      {
        name: "Istanbul",
        hex: "#6c5b4c"
      }
    ],

    specs: {
      tr: [
        "Şehir yaşamı için tasarlandı",
        "Ayarlanabilir askı",
        "Hafif yapı"
      ],

      en: [
        "Designed for city life",
        "Adjustable strap",
        "Lightweight construction"
      ],

      ar: [
        "مصممة للحياة في المدينة",
        "حزام قابل للتعديل",
        "تصميم خفيف"
      ]
    },

    story: {
      tr: "İstanbul'un karşıtlıklarla dolu enerjisini modern bir tasarımda buluşturuyor.",
      en: "Bringing together the contrasting energy of Istanbul in a modern design.",
      ar: "تجمع طاقة إسطنبول المتناقضة في تصميم عصري."
    }
  },


  {
    id: 8,
    number: "08",
    code: "LV-BLT-08",
    name: "BALAT ROSE",
    image: "./images/Levante-08.png",

    colors: [
      {
        name: "Balat Rose",
        hex: "#b77d78"
      }
    ],

    specs: {
      tr: [
        "Yumuşak ve hafif tasarım",
        "Ayarlanabilir askı",
        "Günlük kullanım"
      ],

      en: [
        "Soft lightweight design",
        "Adjustable strap",
        "Perfect for everyday use"
      ],

      ar: [
        "تصميم ناعم وخفيف",
        "حزام قابل للتعديل",
        "مناسبة للاستخدام اليومي"
      ]
    },

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
    image: "./images/Levante-09.png",

    colors: [
      {
        name: "Leopard",
        hex: "#9a7651"
      }
    ],

    specs: {
      tr: [
        "Dikkat çekici desen",
        "Ayarlanabilir omuz askısı",
        "Hafif günlük kullanım"
      ],

      en: [
        "Statement pattern",
        "Adjustable shoulder strap",
        "Lightweight everyday use"
      ],

      ar: [
        "نقشة مميزة",
        "حزام كتف قابل للتعديل",
        "خفيفة للاستخدام اليومي"
      ]
    },

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
    image: "./images/Levante-10.png",

    colors: [
      {
        name: "Midnight",
        hex: "#202020"
      }
    ],

    specs: {
      tr: [
        "Gece ve gündüz kullanım",
        "Ayarlanabilir askı",
        "İç astarlı yapı"
      ],

      en: [
        "Day and night use",
        "Adjustable strap",
        "Lined interior"
      ],

      ar: [
        "مناسبة للنهار والليل",
        "حزام قابل للتعديل",
        "بطانة داخلية"
      ]
    },

    story: {
      tr: "İstanbul gecelerinden ilham aldı. Derin, zarif ve gizemli. Günün her saatinde güçlü bir ifade.",
      en: "Inspired by Istanbul nights. Deep, elegant and mysterious. A powerful statement at any hour.",
      ar: "مستوحاة من ليالي إسطنبول. عميقة وأنيقة وغامضة وحضور قوي في كل وقت."
    }
  }

];


let cart = [];
let currentProductId = null;
let currentSlide = 0;


/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

  tr: {

    menuHome: "Ana Sayfa",
    menuCollection: "Koleksiyon",
    menuBags: "Çantalar",
    menuStory: "Hikâyemiz",
    menuContact: "İletişim",

    heroTag: "İSTANBUL'DA DOĞDU",
    heroTitle: "Bir çantadan<br>daha fazlası.",
    heroText: "Her LEVANTE modeli bir şehirden, bir sokaktan ve bir anıdan ilham alır.",
    heroButton: "Koleksiyonu Keşfet →",

    introTag: "LEVANTE DENEYİMİ",
    introTitle: "Taşıdığın şey sadece bir çanta olmasın.",
    introText: "İstanbul'un enerjisi, Akdeniz'in hafifliği ve günlük hayatın özgürlüğü.",

    collectionTag: "KOLEKSİYONU KEŞFET",
    collectionTitle: "Hikâyeni Taşı.",
    collectionText: "Her modelin kendine ait bir karakteri var. Hangisi sana daha yakın?",

    storyTag: "LEVANT RÜZGARI",
    storyTitle: "İstanbul'da doğdu.<br>Levant rüzgârından ilham aldı.",
    storyText: "LEVANTE, İstanbul'un enerjisini ve Akdeniz'in özgür ruhunu bir araya getirir.",

    featuresTag: "NEDEN LEVANTE?",
    featuresTitle: "Hareket halindeki hayatlar için tasarlandı.",

    feature1Title: "Her Çantanın Bir Hikâyesi Var",
    feature1Text: "Her model bir şehirden, bir duygudan ve bir anıdan ilham alır.",

    feature2Title: "Seninle Hareket Eder",
    feature2Text: "Günlük hayatının ritmine uyum sağlamak için tasarlandı.",

    feature3Title: "Senin Hikâyen",
    feature3Text: "Sadece bir çanta seçmezsin. Sana benzeyen hikâyeyi bulursun.",

    contactTag: "İLETİŞİM",
    contactTitle: "LEVANTE ile iletişime geç.",
    contactText: "Koleksiyon, iş birlikleri ve siparişler için bize ulaşabilirsin.",

    quickView: "İncele",
    add: "Sepete Ekle",
    buyNow: "Satın Al",
    coming: "Yakında",

    cartTitle: "Çantam",
    cartKicker: "LEVANTE",
    checkoutTitle: "Bilgileriniz",

    namePlaceholder: "Ad Soyad",
    phonePlaceholder: "Telefon Numarası",

    orderButton: "Sipariş Talebi Gönder",

    emptyCart: "Sepetin henüz boş. Hikâyeni seçmeye başla.",

    remove: "Kaldır",

    productCode: "Ürün Kodu",
    inStock: "Stokta",
    storyLabel: "Hikâyesi",
    detailsLabel: "Çanta Detayları",
    colorsLabel: "Renkler",

    recommendationTag: "BUNLARI DA SEVEBİLİRSİN",
    recommendationTitle: "Senin için seçtik.",

    storyOne: "İstanbul hikâyesi",
    storyTwo: "Şehir. Sonsuz ilham."
  },


  en: {

    menuHome: "Home",
    menuCollection: "Collection",
    menuBags: "Bags",
    menuStory: "Our Story",
    menuContact: "Contact",

    heroTag: "BORN IN ISTANBUL",
    heroTitle: "More than<br>just a bag.",
    heroText: "Every LEVANTE piece carries a story inspired by Istanbul.",
    heroButton: "Explore Collection →",

    introTag: "THE LEVANTE EXPERIENCE",
    introTitle: "Carry more than just a bag.",
    introText: "The energy of Istanbul, the lightness of the Mediterranean and the freedom of everyday life.",

    collectionTag: "DISCOVER THE COLLECTION",
    collectionTitle: "Carry your story.",
    collectionText: "Every model has its own character. Which one feels like you?",

    storyTag: "THE LEVANT BREEZE",
    storyTitle: "Born in Istanbul.<br>Inspired by the Levant breeze.",
    storyText: "LEVANTE brings together the energy of Istanbul and the free spirit of the Mediterranean.",

    featuresTag: "WHY LEVANTE?",
    featuresTitle: "Designed for lives in motion.",

    feature1Title: "Every Bag Has a Story",
    feature1Text: "Every model is inspired by a city, a feeling and a memory.",

    feature2Title: "Moves With You",
    feature2Text: "Designed to adapt to the rhythm of your everyday life.",

    feature3Title: "Your Own Story",
    feature3Text: "You do not just choose a bag. You find the story that feels like you.",

    contactTag: "CONTACT",
    contactTitle: "Get in touch with LEVANTE.",
    contactText: "Contact us for the collection, collaborations and orders.",

    quickView: "View Details",
    add: "Add to Bag",
    buyNow: "Buy Now",
    coming: "Coming Soon",

    cartTitle: "My Bag",
    cartKicker: "LEVANTE",
    checkoutTitle: "Your Details",

    namePlaceholder: "Full Name",
    phonePlaceholder: "Phone Number",

    orderButton: "Send Order Request",

    emptyCart: "Your bag is empty. Start choosing your story.",

    remove: "Remove",

    productCode: "Product Code",
    inStock: "In Stock",
    storyLabel: "Story",
    detailsLabel: "Bag Details",
    colorsLabel: "Colors",

    recommendationTag: "YOU MAY ALSO LIKE",
    recommendationTitle: "Selected for you.",

    storyOne: "Istanbul stories",
    storyTwo: "City. Endless inspiration."
  },


  ar: {

    menuHome: "الرئيسية",
    menuCollection: "المجموعة",
    menuBags: "الحقائب",
    menuStory: "قصتنا",
    menuContact: "تواصل معنا",

    heroTag: "وُلدت في إسطنبول",
    heroTitle: "أكثر من<br>مجرد حقيبة.",
    heroText: "كل قطعة من LEVANTE تحمل قصة مستوحاة من إسطنبول.",
    heroButton: "اكتشف المجموعة ←",

    introTag: "تجربة LEVANTE",
    introTitle: "لا تحمل مجرد حقيبة.",
    introText: "طاقة إسطنبول وخفة البحر المتوسط وحرية الحياة اليومية.",

    collectionTag: "اكتشف المجموعة",
    collectionTitle: "احمل قصتك.",
    collectionText: "لكل موديل شخصيته الخاصة. أي حقيبة تشبهك؟",

    storyTag: "نسيم المشرق",
    storyTitle: "وُلدت في إسطنبول.<br>مستوحاة من نسيم المشرق.",
    storyText: "تجمع LEVANTE بين طاقة إسطنبول وروح البحر المتوسط الحرة.",

    featuresTag: "لماذا LEVANTE؟",
    featuresTitle: "مصممة للحياة المتحركة.",

    feature1Title: "كل حقيبة لها قصة",
    feature1Text: "كل موديل مستوحى من مدينة وشعور وذكرى.",

    feature2Title: "تتحرك معك",
    feature2Text: "مصممة لتناسب إيقاع حياتك اليومية.",

    feature3Title: "قصتك أنت",
    feature3Text: "أنت لا تختار حقيبة فقط، بل تجد القصة التي تشبهك.",

    contactTag: "تواصل معنا",
    contactTitle: "تواصل مع LEVANTE.",
    contactText: "تواصل معنا بخصوص المجموعة والتعاون والطلبات.",

    quickView: "عرض التفاصيل",
    add: "أضف إلى الحقيبة",
    buyNow: "اشتري الآن",
    coming: "قريباً",

    cartTitle: "حقيبتي",
    cartKicker: "LEVANTE",
    checkoutTitle: "بياناتك",

    namePlaceholder: "الاسم بالكامل",
    phonePlaceholder: "رقم الهاتف",

    orderButton: "إرسال طلب الشراء",

    emptyCart: "حقيبتك فارغة. ابدأ باختيار قصتك.",

    remove: "حذف",

    productCode: "كود المنتج",
    inStock: "متوفر",
    storyLabel: "القصة",
    detailsLabel: "تفاصيل الحقيبة",
    colorsLabel: "الألوان",

    recommendationTag: "قد يعجبك أيضاً",
    recommendationTitle: "اخترناها لك.",

    storyOne: "حكايات إسطنبول",
    storyTwo: "مدينة. إلهام لا ينتهي."
  }

};


/* =====================================================
   LANGUAGE
===================================================== */

function getLanguage() {

  const language =
    document.getElementById("language");

  return language
    ? language.value
    : "tr";

}


function t() {

  return translations[getLanguage()]
    || translations.tr;

}


function setText(
  id,
  value,
  html = false
) {

  const element =
    document.getElementById(id);

  if (!element) return;

  if (html) {

    element.innerHTML =
      value;

  }

  else {

    element.textContent =
      value;

  }

}


/* =====================================================
   LOGO FALLBACK
===================================================== */

function setupLogoFallbacks() {

  const possiblePaths = [

    "./images/levante-logo.png",
    "./images/levante-logo",
    "./images/images/levante-logo.png",
    "./images/images/levante-logo",
    "./images/levante-logo.png.png"

  ];


  document
    .querySelectorAll(".levante-logo")
    .forEach(image => {

      let index = 0;


      image.onerror =
        function () {

          index++;

          if (
            index < possiblePaths.length
          ) {

            image.src =
              possiblePaths[index];

          }

        };

    });

}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

  const grid =
    document.getElementById(
      "productsGrid"
    );

  if (!grid) return;

  const text =
    t();


  grid.innerHTML =
    products.map(product => `

      <article class="product-card">

        <div
          class="product-image-wrap"
          onclick="openProduct(${product.id})"
        >

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >

          <button
            class="quick-view"
            onclick="
              event.stopPropagation();
              openProduct(${product.id});
            "
          >
            ${text.quickView}
          </button>

        </div>


        <div class="product-info">

          <div class="product-code">

            ${product.number}
            ·
            ${product.code}

          </div>


          <h3>
            ${product.name}
          </h3>


          <p class="story">

            ${
              product.story[
                getLanguage()
              ]
              ||
              product.story.en
            }

          </p>


          <div class="product-bottom">

            <span class="price">
              ${text.coming}
            </span>


            <button
              class="add-btn"
              onclick="
                addToCart(
                  ${product.id},
                  this
                )
              "
            >

              ${text.add}

            </button>

          </div>


        </div>


      </article>

    `).join("");

}


/* =====================================================
   CHANGE LANGUAGE
===================================================== */

function changeLanguage() {

  const text =
    t();


  document.documentElement.lang =
    getLanguage();


  document.documentElement.dir =
    getLanguage() === "ar"
      ? "rtl"
      : "ltr";


  const items = [

    ["heroTag", text.heroTag],

    ["heroTitle",
      text.heroTitle,
      true],

    ["heroText",
      text.heroText],

    ["heroButton",
      text.heroButton],

    ["introTag",
      text.introTag],

    ["introTitle",
      text.introTitle],

    ["introText",
      text.introText],

    ["collectionTag",
      text.collectionTag],

    ["collectionTitle",
      text.collectionTitle],

    ["collectionText",
      text.collectionText],

    ["storyTag",
      text.storyTag],

    ["storyTitle",
      text.storyTitle,
      true],

    ["storyText",
      text.storyText],

    ["featuresTag",
      text.featuresTag],

    ["featuresTitle",
      text.featuresTitle],

    ["feature1Title",
      text.feature1Title],

    ["feature1Text",
      text.feature1Text],

    ["feature2Title",
      text.feature2Title],

    ["feature2Text",
      text.feature2Text],

    ["feature3Title",
      text.feature3Title],

    ["feature3Text",
      text.feature3Text],

    ["contactTag",
      text.contactTag],

    ["contactTitle",
      text.contactTitle],

    ["contactText",
      text.contactText],

    ["cartTitle",
      text.cartTitle],

    ["cartKicker",
      text.cartKicker],

    ["checkoutTitle",
      text.checkoutTitle],

    ["whatsappButton",
      text.orderButton],

    ["storyNumberOne",
      text.storyOne],

    ["storyNumberTwo",
      text.storyTwo]

  ];


  items.forEach(item => {

    setText(
      item[0],
      item[1],
      item[2]
    );

  });


  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(element => {

      const key =
        element.dataset.i18n;

      if (text[key]) {

        element.textContent =
          text[key];

      }

    });


  const name =
    document.getElementById(
      "customerName"
    );

  const phone =
    document.getElementById(
      "customerPhone"
    );


  if (name) {

    name.placeholder =
      text.namePlaceholder;

  }


  if (phone) {

    phone.placeholder =
      text.phonePlaceholder;

  }


  renderProducts();

  updateCart();


  if (currentProductId) {

    openProduct(
      currentProductId,
      true
    );

  }

}


/* =====================================================
   PRODUCT DETAIL
===================================================== */

function openProduct(
  productId,
  preserveScroll = false
) {

  const product =
    products.find(
      item =>
        item.id === productId
    );


  if (!product) return;


  currentProductId =
    productId;


  const text =
    t();


  const modal =
    document.getElementById(
      "productModal"
    );


  const mainImage =
    document.getElementById(
      "detailMainImage"
    );


  mainImage.src =
    product.image;


  mainImage.alt =
    product.name;


  setText(
    "detailNumber",
    `${product.number} · LEVANTE`
  );


  setText(
    "detailName",
    product.name
  );


  setText(
    "detailCodeLabel",
    text.productCode
  );


  setText(
    "detailCode",
    product.code
  );


  setText(
    "detailStock",
    text.inStock
  );


  setText(
    "detailStoryLabel",
    text.storyLabel
  );


  setText(
    "detailStory",

    product.story[
      getLanguage()
    ]
    ||
    product.story.en
  );


  setText(
    "detailDetailsLabel",
    text.detailsLabel
  );


  setText(
    "detailColorsLabel",
    text.colorsLabel
  );


  setText(
    "recommendationTag",
    text.recommendationTag
  );


  setText(
    "recommendationTitle",
    text.recommendationTitle
  );


  document
    .getElementById(
      "detailSpecs"
    )
    .innerHTML =

    (
      product.specs[
        getLanguage()
      ]
      ||
      product.specs.en
    )
      .map(
        item =>
          `<li>${item}</li>`
      )
      .join("");


  document
    .getElementById(
      "detailColors"
    )
    .innerHTML =

    product.colors
      .map(color => `

        <button
          class="color-option"
          title="${color.name}"
        >

          <span
            class="color-swatch"
            style="
              background:${color.hex}
            "
          ></span>

        </button>

      `)
      .join("");


  document
    .getElementById(
      "productThumbnails"
    )
    .innerHTML = `

      <button
        class="thumb-btn active"
        onclick="
          setDetailImage(
            '${product.image}',
            this
          )
        "
      >

        <img
          src="${product.image}"
          alt="${product.name}"
        >

      </button>

    `;


  const addButton =
    document.getElementById(
      "detailAddButton"
    );


  addButton.textContent =
    text.add;


  addButton.onclick =
    () => {

      addToCart(
        product.id,
        addButton,
        mainImage
      );

    };


  const buyButton =
    document.getElementById(
      "detailBuyButton"
    );


  buyButton.textContent =
    text.buyNow;


  buyButton.onclick =
    () => {

      addToCart(
        product.id,
        buyButton,
        mainImage
      );

      setTimeout(
        openCart,
        500
      );

    };


  renderRecommendations(
    product.id
  );


  modal.classList.add(
    "active"
  );


  document.body.classList.add(
    "product-open"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  if (!preserveScroll) {

    window.scrollTo({
      top:
        window.scrollY,
      behavior:
        "instant"
    });

  }

}


function setDetailImage(
  image,
  button
) {

  document
    .getElementById(
      "detailMainImage"
    )
    .src =
    image;


  document
    .querySelectorAll(
      ".thumb-btn"
    )
    .forEach(
      item =>
        item.classList.remove(
          "active"
        )
    );


  button.classList.add(
    "active"
  );

}


function closeProduct() {

  const modal =
    document.getElementById(
      "productModal"
    );


  modal.classList.remove(
    "active"
  );


  document.body.classList.remove(
    "product-open"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  currentProductId =
    null;

}


function renderRecommendations(
  currentId
) {

  const grid =
    document.getElementById(
      "recommendationGrid"
    );


  if (!grid) return;


  const recommended =
    products
      .filter(
        item =>
          item.id !== currentId
      )
      .slice(0, 4);


  grid.innerHTML =
    recommended
      .map(product => `

        <article
          class="recommendation-card"
          onclick="
            openProduct(
              ${product.id}
            )
          "
        >

          <img
            src="${product.image}"
            alt="${product.name}"
          >

          <div>

            <span>
              ${product.code}
            </span>

            <h3>
              ${product.name}
            </h3>

          </div>

        </article>

      `)
      .join("");

}


/* =====================================================
   CART
===================================================== */

function addToCart(
  productId,
  button = null,
  imageElement = null
) {

  const product =
    products.find(
      item =>
        item.id === productId
    );


  if (!product) return;


  const existingItem =
    cart.find(
      item =>
        item.id === productId
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


  if (
    button &&
    !imageElement
  ) {

    const card =
      button.closest(
        ".product-card"
      );


    if (card) {

      imageElement =
        card.querySelector(
          "img"
        );

    }

  }


  if (imageElement) {

    flyToCart(
      imageElement
    );

  }


  updateCart();

}


function updateCart() {

  const cartItems =
    document.getElementById(
      "cartItems"
    );


  const cartCount =
    document.getElementById(
      "cartCount"
    );


  const text =
    t();


  const total =
    cart.reduce(

      (
        total,
        item
      ) =>
        total +
        item.quantity,

      0

    );


  if (cartCount) {

    cartCount.textContent =
      total;


    cartCount.classList.remove(
      "bump"
    );


    setTimeout(() => {

      cartCount.classList.add(
        "bump"
      );

    }, 10);

  }


  if (!cartItems) return;


  if (
    cart.length === 0
  ) {

    cartItems.innerHTML = `

      <div class="empty-cart">

        ${text.emptyCart}

      </div>

    `;

    return;

  }


  cartItems.innerHTML =
    cart.map(item => `

      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${item.name}"
        >


        <div class="cart-item-info">

          <h4>
            ${item.name}
          </h4>


          <small>
            ${item.code}
          </small>



          <div class="quantity-controls">

            <button
              onclick="
                changeQuantity(
                  ${item.id},
                  -1
                )
              "
            >
              −
            </button>


            <strong>
              ${item.quantity}
            </strong>


            <button
              onclick="
                changeQuantity(
                  ${item.id},
                  1
                )
              "
            >
              +
            </button>

          </div>



          <button
            class="remove-btn"
            onclick="
              removeFromCart(
                ${item.id}
              )
            "
          >

            ${text.remove}

          </button>

        </div>

      </div>

    `)
    .join("");

}


function changeQuantity(
  productId,
  amount
) {

  const item =
    cart.find(
      product =>
        product.id === productId
    );


  if (!item) return;


  item.quantity +=
    amount;


  if (
    item.quantity <= 0
  ) {

    removeFromCart(
      productId
    );

    return;

  }


  updateCart();

}


function removeFromCart(
  productId
) {

  cart =
    cart.filter(
      item =>
        item.id !== productId
    );


  updateCart();

}


function openCart() {

  document
    .getElementById(
      "cartDrawer"
    )
    .classList.add(
      "active"
    );


  document
    .getElementById(
      "cartOverlay"
    )
    .classList.add(
      "active"
    );


  document.body.classList.add(
    "cart-open"
  );

}


function closeCart() {

  document
    .getElementById(
      "cartDrawer"
    )
    .classList.remove(
      "active"
    );


  document
    .getElementById(
      "cartOverlay"
    )
    .classList.remove(
      "active"
    );


  document.body.classList.remove(
    "cart-open"
  );

}


/* =====================================================
   FLY TO CART ANIMATION
===================================================== */

function flyToCart(
  imageElement
) {

  const cartButton =
    document.getElementById(
      "cartButton"
    );


  if (
    !imageElement ||
    !cartButton
  ) return;


  const imageRect =
    imageElement.getBoundingClientRect();


  const cartRect =
    cartButton.getBoundingClientRect();


  const flyingImage =
    imageElement.cloneNode(
      true
    );


  flyingImage.classList.add(
    "flying-product"
  );


  flyingImage.style.left =
    `${imageRect.left}px`;


  flyingImage.style.top =
    `${imageRect.top}px`;


  flyingImage.style.width =
    `${imageRect.width}px`;


  flyingImage.style.height =
    `${imageRect.height}px`;


  document.body.appendChild(
    flyingImage
  );


  requestAnimationFrame(() => {

    flyingImage.style.transform =
      `
      translate(
        ${cartRect.left - imageRect.left}px,
        ${cartRect.top - imageRect.top}px
      )
      scale(.12)
      `;


    flyingImage.style.opacity =
      "0.15";

  });


  setTimeout(() => {

    flyingImage.remove();

  }, 800);

}


/* =====================================================
   MENU
===================================================== */

function openMenu() {

  document
    .getElementById(
      "sideMenu"
    )
    .classList.add(
      "active"
    );


  document
    .getElementById(
      "menuOverlay"
    )
    .classList.add(
      "active"
    );


  document.body.classList.add(
    "menu-open"
  );

}


function closeMenu() {

  document
    .getElementById(
      "sideMenu"
    )
    .classList.remove(
      "active"
    );


  document
    .getElementById(
      "menuOverlay"
    )
    .classList.remove(
      "active"
    );


  document.body.classList.remove(
    "menu-open"
  );

}


/* =====================================================
   HERO SLIDER
===================================================== */

function goToSlide(
  index
) {

  const slides =
    document.querySelectorAll(
      ".slide"
    );


  const dots =
    document.querySelectorAll(
      ".dot"
    );


  slides.forEach(
    slide =>
      slide.classList.remove(
        "active"
      )
  );


  dots.forEach(
    dot =>
      dot.classList.remove(
        "active"
      )
  );


  if (slides[index]) {

    slides[index].classList.add(
      "active"
    );

  }


  if (dots[index]) {

    dots[index].classList.add(
      "active"
    );

  }


  currentSlide =
    index;

}


setInterval(() => {

  const slides =
    document.querySelectorAll(
      ".slide"
    );


  if (!slides.length) return;


  currentSlide =
    (
      currentSlide + 1
    )
    %
    slides.length;


  goToSlide(
    currentSlide
  );

}, 6000);


/* =====================================================
   HEADER
===================================================== */

window.addEventListener(
  "scroll",
  () => {

    const header =
      document.getElementById(
        "header"
      );


    if (!header) return;


    if (
      window.scrollY > 40
    ) {

      header.classList.add(
        "scrolled"
      );

    }

    else {

      header.classList.remove(
        "scrolled"
      );

    }

  }
);


/* =====================================================
   WHATSAPP ORDER
===================================================== */

function sendWhatsAppOrder() {

  if (
    cart.length === 0
  ) {

    alert(
      getLanguage() === "tr"
        ? "Sepetiniz boş."
        : "Your bag is empty."
    );

    return;

  }


  const name =
    document
      .getElementById(
        "customerName"
      )
      .value;


  const phone =
    document
      .getElementById(
        "customerPhone"
      )
      .value;


  let message =
    `LEVANTE ORDER\n\n`;


  message +=
    `Name: ${name}\n`;


  message +=
    `Phone: ${phone}\n\n`;


  message +=
    `Products:\n`;


  cart.forEach(item => {

    message +=
      `• ${item.name} x ${item.quantity}\n`;

  });


  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


  window.open(
    url,
    "_blank"
  );

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setupLogoFallbacks();

    renderProducts();

    updateCart();

    changeLanguage();

  }
);