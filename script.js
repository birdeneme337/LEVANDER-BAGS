/* =====================================================
   LEVANTE WEBSITE
   EXISTING DESIGN + PRODUCT DETAIL + CART ANIMATION
===================================================== */


/* =====================================================
   SUPABASE
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
   IMPORTANT:
   EXISTING IMAGE PATHS ARE PRESERVED
===================================================== */

const products = [

  {
    id: 1,
    number: "01",
    code: "LV-GLT-01",
    name: "GALATA STRIPE",
    price: 0,
    image: "images/Levante-01.png",

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
        "Lightweight construction for everyday use",
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
    price: 0,
    image: "images/Levante-03.png",

    colors: [
      {
        name: "Sultan Sand",
        hex: "#c8b69a"
      }
    ],

    specs: {
      tr: [
        "Ayarlanabilir omuz askısı",
        "Günlük kullanım için uygun",
        "Hafif ve kullanışlı tasarım"
      ],
      en: [
        "Adjustable shoulder strap",
        "Designed for everyday use",
        "Lightweight and practical design"
      ],
      ar: [
        "حزام كتف قابل للتعديل",
        "مناسبة للاستخدام اليومي",
        "تصميم خفيف وعملي"
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
    name: "KARAKÖY",
    price: 0,
    image: "images/Levante-04.png",

    colors: [
      {
        name: "Karaköy",
        hex: "#9d866d"
      }
    ],

    specs: {
      tr: [
        "Ayarlanabilir askı",
        "Geniş iç hacim",
        "İç astarlı tasarım"
      ],
      en: [
        "Adjustable strap",
        "Spacious interior",
        "Lined interior"
      ],
      ar: [
        "حزام قابل للتعديل",
        "مساحة داخلية واسعة",
        "بطانة داخلية"
      ]
    },

    story: {
      tr: "Karaköy'ün yaratıcı, özgür ve şehirli enerjisinden ilham alan modern bir tasarım.",
      en: "Inspired by the creative, free and urban energy of Karaköy.",
      ar: "مستوحاة من الطاقة الإبداعية والحضرية الحرة في كاراكوي."
    }
  },


  {
    id: 5,
    number: "05",
    code: "LV-TKS-05",
    name: "TAKSIM BURGUNDY",
    price: 0,
    image: "images/Levante-05.png",

    colors: [
      {
        name: "Taksim Burgundy",
        hex: "#6f2633"
      }
    ],

    specs: {
      tr: [
        "Ayarlanabilir omuz askısı",
        "Yumuşak ve hafif yapı",
        "İç astar"
      ],
      en: [
        "Adjustable shoulder strap",
        "Soft and lightweight construction",
        "Inner lining"
      ],
      ar: [
        "حزام كتف قابل للتعديل",
        "تصميم ناعم وخفيف",
        "بطانة داخلية"
      ]
    },

    story: {
      tr: "Taksim'in hiç durmayan enerjisinden ilham aldı. Güçlü, karakterli ve dikkat çekici.",
      en: "Inspired by the endless energy of Taksim. Bold, expressive and full of character.",
      ar: "مستوحاة من طاقة تقسيم التي لا تتوقف. قوية وجريئة ومليئة بالشخصية."
    }
  },


  {
    id: 6,
    number: "06",
    code: "LV-BLT-06",
    name: "BALAT",
    price: 0,
    image: "images/Levante-06.png",

    colors: [
      {
        name: "Balat",
        hex: "#b88968"
      }
    ],

    specs: {
      tr: [
        "Ayarlanabilir askı",
        "Günlük kullanım için hafif",
        "İç astarlı"
      ],
      en: [
        "Adjustable strap",
        "Lightweight for everyday use",
        "Lined interior"
      ],
      ar: [
        "حزام قابل للتعديل",
        "خفيفة للاستخدام اليومي",
        "بطانة داخلية"
      ]
    },

    story: {
      tr: "Balat'ın renkli sokaklarından ve kendine özgü karakterinden ilham aldı.",
      en: "Inspired by the colorful streets and unique personality of Balat.",
      ar: "مستوحاة من شوارع بالاط الملونة وشخصيتها الفريدة."
    }
  },


  {
    id: 7,
    number: "07",
    code: "LV-USD-07",
    name: "ÜSKÜDAR",
    price: 0,
    image: "images/Levante-07.png",

    colors: [
      {
        name: "Üsküdar",
        hex: "#6e766b"
      }
    ],

    specs: {
      tr: [
        "Ayarlanabilir omuz askısı",
        "Rahat günlük kullanım",
        "İç astarlı tasarım"
      ],
      en: [
        "Adjustable shoulder strap",
        "Comfortable everyday use",
        "Lined construction"
      ],
      ar: [
        "حزام كتف قابل للتعديل",
        "مريحة للاستخدام اليومي",
        "بطانة داخلية"
      ]
    },

    story: {
      tr: "Üsküdar'ın sakin ve zarif atmosferinden ilham alan zamansız bir model.",
      en: "A timeless model inspired by the calm and elegant atmosphere of Üsküdar.",
      ar: "تصميم خالد مستوحى من أجواء أوسكودار الهادئة والأنيقة."
    }
  },


  {
    id: 8,
    number: "08",
    code: "LV-CNK-08",
    name: "ÇUKURCUMA",
    price: 0,
    image: "images/Levante-08.png",

    colors: [
      {
        name: "Çukurcuma",
        hex: "#92775d"
      }
    ],

    specs: {
      tr: [
        "Ayarlanabilir askı",
        "Hafif yapı",
        "İç astarlı kullanım"
      ],
      en: [
        "Adjustable strap",
        "Lightweight structure",
        "Lined interior"
      ],
      ar: [
        "حزام قابل للتعديل",
        "تصميم خفيف",
        "بطانة داخلية"
      ]
    },

    story: {
      tr: "Çukurcuma'nın vintage ruhundan ve keşfedilmeyi bekleyen hikâyelerinden ilham aldı.",
      en: "Inspired by the vintage soul and hidden stories of Çukurcuma.",
      ar: "مستوحاة من روح تشوكورجوما الكلاسيكية وحكاياتها الخفية."
    }
  },


  {
    id: 9,
    number: "09",
    code: "LV-KDL-09",
    name: "KADIKÖY",
    price: 0,
    image: "images/Levante-09.png",

    colors: [
      {
        name: "Kadıköy",
        hex: "#6f7788"
      }
    ],

    specs: {
      tr: [
        "Ayarlanabilir omuz askısı",
        "Günlük kullanım için hafif",
        "İç astarlı yapı"
      ],
      en: [
        "Adjustable shoulder strap",
        "Lightweight for everyday use",
        "Lined interior"
      ],
      ar: [
        "حزام كتف قابل للتعديل",
        "خفيفة للاستخدام اليومي",
        "بطانة داخلية"
      ]
    },

    story: {
      tr: "Kadıköy'ün genç, özgür ve enerjik ruhundan ilham alan bir tasarım.",
      en: "Inspired by the young, free and energetic spirit of Kadıköy.",
      ar: "مستوحاة من روح كاديكوي الشابة والحرة والمليئة بالطاقة."
    }
  },


  {
    id: 10,
    number: "10",
    code: "LV-MID-10",
    name: "MIDNIGHT ISTANBUL",
    price: 0,
    image: "images/Levante-10.png",

    colors: [
      {
        name: "Midnight Istanbul",
        hex: "#1c1c1e"
      }
    ],

    specs: {
      tr: [
        "Ayarlanabilir omuz askısı",
        "Şık ve dayanıklı yapı",
        "İç astar ve fermuarlı bölme"
      ],
      en: [
        "Adjustable shoulder strap",
        "Elegant and durable construction",
        "Inner lining with zip compartment"
      ],
      ar: [
        "حزام كتف قابل للتعديل",
        "تصميم أنيق ومتين",
        "بطانة داخلية مع جيب بسحاب"
      ]
    },

    story: {
      tr: "İstanbul gecelerinin gizemli ve güçlü atmosferinden ilham aldı.",
      en: "Inspired by the mysterious and powerful atmosphere of Istanbul at night.",
      ar: "مستوحاة من أجواء إسطنبول الليلية الغامضة والقوية."
    }
  }

];


/* =====================================================
   LANGUAGE
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

    quickView: "Detayları Gör",
    add: "Sepete Ekle",
    coming: "Yakında",
    cartTitle: "Çantam",
    cartKicker: "LEVANTE",
    checkoutTitle: "Bilgileriniz",
    namePlaceholder: "Ad Soyad",
    phonePlaceholder: "Telefon Numarası",
    orderButton: "Sipariş Talebi Gönder",

    emptyCart: "Sepetiniz boş.",
    remove: "Kaldır",

    productCode: "Ürün Kodu",
    inStock: "Stokta",
    storyLabel: "Hikâyesi",
    detailsLabel: "Çanta Detayları",
    colorsLabel: "Renkler",
    buyNow: "Satın Al",

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
    heroTitle: "More than<br>a bag.",
    heroText: "Every LEVANTE piece carries a story inspired by Istanbul.",
    heroButton: "Discover Collection →",

    introTag: "LEVANTE EXPERIENCE",
    introTitle: "Don't just carry a bag. Carry a story.",
    introText: "The energy of Istanbul, the lightness of the Mediterranean and the freedom of everyday life.",

    collectionTag: "DISCOVER THE COLLECTION",
    collectionTitle: "Carry Your Story.",
    collectionText: "Every model has a personality. Which one feels like you?",

    storyTag: "LEVANT BREEZE",
    storyTitle: "Born in Istanbul.<br>Inspired by the Levant breeze.",
    storyText: "LEVANTE brings together the energy of Istanbul and the free spirit of the Mediterranean.",

    featuresTag: "WHY LEVANTE?",
    featuresTitle: "Designed for lives in motion.",

    feature1Title: "Every Bag Has a Story",
    feature1Text: "Every model is inspired by a city, a feeling and a memory.",

    feature2Title: "Moves With You",
    feature2Text: "Designed to adapt to the rhythm of your everyday life.",

    feature3Title: "Your Story",
    feature3Text: "You don't simply choose a bag. You find the story that feels like you.",

    contactTag: "CONTACT",
    contactTitle: "Get in touch with LEVANTE.",
    contactText: "Contact us for the collection, collaborations and orders.",

    quickView: "View Details",
    add: "Add to Bag",
    coming: "Coming Soon",
    cartTitle: "My Bag",
    cartKicker: "LEVANTE",
    checkoutTitle: "Your Details",
    namePlaceholder: "Full Name",
    phonePlaceholder: "Phone Number",
    orderButton: "Send Order Request",

    emptyCart: "Your bag is empty.",
    remove: "Remove",

    productCode: "Product Code",
    inStock: "In Stock",
    storyLabel: "Story",
    detailsLabel: "Bag Details",
    colorsLabel: "Colors",
    buyNow: "Buy Now",

    recommendationTag: "YOU MAY ALSO LIKE",
    recommendationTitle: "Selected for you.",

    storyOne: "Istanbul stories",
    storyTwo: "One city. Endless inspiration."
  },


  ar: {

    menuHome: "الرئيسية",
    menuCollection: "المجموعة",
    menuBags: "الحقائب",
    menuStory: "قصتنا",
    menuContact: "تواصل معنا",

    heroTag: "وُلدت في إسطنبول",
    heroTitle: "أكثر من<br>حقيبة.",
    heroText: "كل قطعة من LEVANTE تحمل قصة مستوحاة من إسطنبول.",
    heroButton: "اكتشف المجموعة ←",

    introTag: "تجربة LEVANTE",
    introTitle: "لا تحمل مجرد حقيبة. احمل قصة.",
    introText: "طاقة إسطنبول وخفة البحر المتوسط وحرية الحياة اليومية.",

    collectionTag: "اكتشف المجموعة",
    collectionTitle: "احمل قصتك.",
    collectionText: "لكل موديل شخصيته الخاصة. أيها يشبهك؟",

    storyTag: "نسيم المشرق",
    storyTitle: "وُلدت في إسطنبول.<br>استوحت من نسيم المشرق.",
    storyText: "تجمع LEVANTE بين طاقة إسطنبول وروح البحر المتوسط الحرة.",

    featuresTag: "لماذا LEVANTE؟",
    featuresTitle: "مصممة لحياة مليئة بالحركة.",

    feature1Title: "لكل حقيبة قصة",
    feature1Text: "كل موديل مستوحى من مدينة وشعور وذكرى.",

    feature2Title: "تتحرك معك",
    feature2Text: "مصممة لتواكب إيقاع حياتك اليومية.",

    feature3Title: "قصتك أنت",
    feature3Text: "أنت لا تختار مجرد حقيبة. بل تجد القصة التي تشبهك.",

    contactTag: "تواصل معنا",
    contactTitle: "تواصل مع LEVANTE.",
    contactText: "تواصل معنا بخصوص المجموعة والتعاون والطلبات.",

    quickView: "عرض التفاصيل",
    add: "أضف إلى الحقيبة",
    coming: "قريباً",
    cartTitle: "حقيبتي",
    cartKicker: "LEVANTE",
    checkoutTitle: "بياناتك",
    namePlaceholder: "الاسم بالكامل",
    phonePlaceholder: "رقم الهاتف",
    orderButton: "إرسال طلب الشراء",

    emptyCart: "حقيبتك فارغة.",
    remove: "حذف",

    productCode: "كود المنتج",
    inStock: "متوفر",
    storyLabel: "القصة",
    detailsLabel: "تفاصيل الحقيبة",
    colorsLabel: "الألوان",
    buyNow: "اشتري الآن",

    recommendationTag: "قد يعجبك أيضاً",
    recommendationTitle: "اخترناها لك.",

    storyOne: "حكايات إسطنبول",
    storyTwo: "مدينة. إلهام لا ينتهي."
  }

};


/* =====================================================
   STATE
===================================================== */

let cart = [];
let currentProductId = null;
let currentSlide = 0;


/* =====================================================
   LANGUAGE HELPERS
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

    element.innerHTML = value;

  } else {

    element.textContent = value;

  }

}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

  const grid =
    document.getElementById("productsGrid");

  if (!grid) return;

  const text = t();


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
            type="button"
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
              product.story[getLanguage()]
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
              type="button"
              onclick="
                event.stopPropagation();
                addToCart(
                  ${product.id},
                  this
                );
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

  const text = t();

  document.documentElement.lang =
    getLanguage();

  document.documentElement.dir =
    getLanguage() === "ar"
      ? "rtl"
      : "ltr";


  [
    ["heroTag", text.heroTag],
    ["heroTitle", text.heroTitle, true],
    ["heroText", text.heroText],
    ["heroButton", text.heroButton],

    ["introTag", text.introTag],
    ["introTitle", text.introTitle],
    ["introText", text.introText],

    ["collectionTag", text.collectionTag],
    ["collectionTitle", text.collectionTitle],
    ["collectionText", text.collectionText],

    ["storyTag", text.storyTag],
    ["storyTitle", text.storyTitle, true],
    ["storyText", text.storyText],

    ["featuresTag", text.featuresTag],
    ["featuresTitle", text.featuresTitle],

    ["feature1Title", text.feature1Title],
    ["feature1Text", text.feature1Text],

    ["feature2Title", text.feature2Title],
    ["feature2Text", text.feature2Text],

    ["feature3Title", text.feature3Title],
    ["feature3Text", text.feature3Text],

    ["contactTag", text.contactTag],
    ["contactTitle", text.contactTitle],
    ["contactText", text.contactText],

    ["cartTitle", text.cartTitle],
    ["cartKicker", text.cartKicker],
    ["checkoutTitle", text.checkoutTitle],

    ["whatsappButton", text.orderButton],

    ["storyNumberOne", text.storyOne],
    ["storyNumberTwo", text.storyTwo]

  ].forEach(
    ([id, value, html]) =>
      setText(id, value, html)
  );


  document
    .querySelectorAll("[data-i18n]")
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
      item => item.id === productId
    );

  if (!product) return;


  currentProductId =
    productId;


  const text = t();


  const modal =
    document.getElementById(
      "productModal"
    );


  const main =
    document.getElementById(
      "detailMainImage"
    );


  if (!modal || !main) return;


  main.src =
    product.image;

  main.alt =
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
    product.story[getLanguage()]
      || product.story.en
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


  const specs =
    document.getElementById(
      "detailSpecs"
    );


  if (specs) {

    specs.innerHTML =
      (
        product.specs[getLanguage()]
        ||
        product.specs.en
      )
        .map(
          item =>
            `<li>${item}</li>`
        )
        .join("");

  }


  const colors =
    document.getElementById(
      "detailColors"
    );


  if (colors) {

    colors.innerHTML =
      product.colors
        .map(
          color => `

            <button
              class="color-option"
              type="button"
              title="${color.name}"
              aria-label="${color.name}"
            >

              <span
                class="color-swatch"
                style="
                  background:${color.hex};
                "
              ></span>

            </button>

          `
        )
        .join("");

  }


  const thumbnails =
    document.getElementById(
      "productThumbnails"
    );


  if (thumbnails) {

    thumbnails.innerHTML = `

      <button
        class="thumb-btn active"
        type="button"
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

  }


  const add =
    document.getElementById(
      "detailAddButton"
    );


  if (add) {

    add.textContent =
      text.add;


    add.onclick = () => {

      addToCart(
        product.id,
        add,
        document.getElementById(
          "detailMainImage"
        )
      );

    };

  }


  const buy =
    document.getElementById(
      "detailBuyButton"
    );


  if (buy) {

    buy.textContent =
      text.buyNow;


    buy.onclick = () => {

      addToCart(
        product.id,
        buy,
        document.getElementById(
          "detailMainImage"
        )
      );


      closeProduct();


      setTimeout(
        openCart,
        500
      );

    };

  }


  renderRecommendations(
    product.id
  );


  if (!preserveScroll) {

    modal.classList.add(
      "active"
    );

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "product-open"
    );

  }

}


/* =====================================================
   PRODUCT IMAGE
===================================================== */

function setDetailImage(
  src,
  button
) {

  const main =
    document.getElementById(
      "detailMainImage"
    );


  if (!main) return;


  main.src = src;


  document
    .querySelectorAll(".thumb-btn")
    .forEach(btn => {

      btn.classList.remove(
        "active"
      );

    });


  if (button) {

    button.classList.add(
      "active"
    );

  }

}


/* =====================================================
   CLOSE PRODUCT
===================================================== */

function closeProduct() {

  const modal =
    document.getElementById(
      "productModal"
    );


  if (!modal) return;


  modal.classList.remove(
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "product-open"
  );


  currentProductId =
    null;

}


/* =====================================================
   RECOMMENDATIONS
===================================================== */

function renderRecommendations(
  currentId
) {

  const grid =
    document.getElementById(
      "recommendationGrid"
    );


  if (!grid) return;


  const selected =
    products
      .filter(
        product =>
          product.id !== currentId
      )
      .slice(0, 3);


  grid.innerHTML =
    selected.map(product => `

      <article
        class="recommendation-card"
        onclick="openProduct(${product.id})"
      >

        <img
          src="${product.image}"
          alt="${product.name}"
        >


        <div>

          <small>

            ${product.code}

          </small>


          <h4>

            ${product.name}

          </h4>

        </div>

      </article>

    `).join("");

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(
  productId,
  sourceButton = null,
  sourceImage = null
) {

  const product =
    products.find(
      item =>
        item.id === productId
    );


  if (!product) return;


  const existing =
    cart.find(
      item =>
        item.id === productId
    );


  if (existing) {

    existing.quantity += 1;

  }

  else {

    cart.push({

      ...product,

      quantity: 1

    });

  }


  if (
    !sourceImage
    &&
    sourceButton
  ) {

    const card =
      sourceButton.closest(
        ".product-card"
      );


    sourceImage =
      card
        ? card.querySelector("img")
        : null;

  }


  if (sourceImage) {

    animateToCart(
      sourceImage
    );

  }

  else {

    updateCart(true);

  }

}


/* =====================================================
   PRODUCT FLY TO CART ANIMATION
===================================================== */

function animateToCart(
  sourceImage
) {

  const cartButton =
    document.getElementById(
      "cartButton"
    );


  if (
    !sourceImage
    ||
    !cartButton
  ) {

    updateCart(true);

    return;

  }


  const rect =
    sourceImage.getBoundingClientRect();


  const target =
    cartButton.getBoundingClientRect();


  const flying =
    sourceImage.cloneNode(true);


  flying.className =
    "flying-product";


  flying.style.position =
    "fixed";


  flying.style.left =
    `${rect.left}px`;


  flying.style.top =
    `${rect.top}px`;


  flying.style.width =
    `${rect.width}px`;


  flying.style.height =
    `${rect.height}px`;


  flying.style.zIndex =
    "9999";


  flying.style.pointerEvents =
    "none";


  document.body.appendChild(
    flying
  );


  requestAnimationFrame(() => {

    flying.style.transition =
      "all 0.75s cubic-bezier(.2,.8,.2,1)";


    flying.style.left =
      `${
        target.left
        +
        target.width / 2
        -
        18
      }px`;


    flying.style.top =
      `${
        target.top
        +
        target.height / 2
        -
        18
      }px`;


    flying.style.width =
      "36px";


    flying.style.height =
      "36px";


    flying.style.opacity =
      ".25";


    flying.style.transform =
      "rotate(18deg) scale(.45)";

  });


  setTimeout(() => {

    flying.remove();

    updateCart(true);

  }, 760);

}


/* =====================================================
   CART QUANTITY
===================================================== */

function changeQuantity(
  productId,
  amount
) {

  const item =
    cart.find(
      item =>
        item.id === productId
    );


  if (!item) return;


  item.quantity += amount;


  if (
    item.quantity <= 0
  ) {

    removeFromCart(
      productId
    );

  }

  else {

    updateCart();

  }

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


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart(
  animateCount = false
) {

  const cartItems =
    document.getElementById(
      "cartItems"
    );


  const cartCount =
    document.getElementById(
      "cartCount"
    );


  if (
    !cartItems
    ||
    !cartCount
  ) return;


  const text = t();


  const total =
    cart.reduce(
      (
        sum,
        item
      ) =>
        sum
        +
        item.quantity,
      0
    );


  cartCount.textContent =
    total;


  if (animateCount) {

    cartCount.classList.remove(
      "bump"
    );


    void cartCount.offsetWidth;


    cartCount.classList.add(
      "bump"
    );

  }


  if (
    !cart.length
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

            ${item.number}
            ·
            ${item.name}

          </h4>


          <small>

            ${item.code}

          </small>


          <div
            class="quantity-controls"
          >

            <button
              type="button"
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
              type="button"
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
            type="button"
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

    `).join("");

}


/* =====================================================
   CART
===================================================== */

function openCart() {

  document
    .getElementById(
      "cartDrawer"
    )
    ?.classList
    .add("active");


  document
    .getElementById(
      "cartOverlay"
    )
    ?.classList
    .add("active");


  document.body.classList.add(
    "cart-open"
  );

}


function closeCart() {

  document
    .getElementById(
      "cartDrawer"
    )
    ?.classList
    .remove("active");


  document
    .getElementById(
      "cartOverlay"
    )
    ?.classList
    .remove("active");


  document.body.classList.remove(
    "cart-open"
  );

}


/* =====================================================
   MENU
===================================================== */

function openMenu() {

  document
    .getElementById(
      "sideMenu"
    )
    ?.classList
    .add("active");


  document
    .getElementById(
      "menuOverlay"
    )
    ?.classList
    .add("active");


  document.body.classList.add(
    "menu-open"
  );

}


function closeMenu() {

  document
    .getElementById(
      "sideMenu"
    )
    ?.classList
    .remove("active");


  document
    .getElementById(
      "menuOverlay"
    )
    ?.classList
    .remove("active");


  document.body.classList.remove(
    "menu-open"
  );

}


/* =====================================================
   ORDER
===================================================== */

async function sendWhatsAppOrder() {

  const nameElement =
    document.getElementById(
      "customerName"
    );


  const phoneElement =
    document.getElementById(
      "customerPhone"
    );


  const button =
    document.getElementById(
      "whatsappButton"
    );


  const language =
    getLanguage();


  const name =
    nameElement
      ? nameElement.value.trim()
      : "";


  const phone =
    phoneElement
      ? phoneElement.value.trim()
      : "";


  const messages = {

    tr: {
      empty: "Sepetiniz boş.",
      required:
        "Lütfen ad soyad ve telefon numaranızı giriniz.",
      sending:
        "Gönderiliyor..."
    },

    en: {
      empty:
        "Your bag is empty.",
      required:
        "Please enter your full name and phone number.",
      sending:
        "Sending..."
    },

    ar: {
      empty:
        "حقيبتك فارغة.",
      required:
        "يرجى إدخال الاسم ورقم الهاتف.",
      sending:
        "جارٍ الإرسال..."
    }

  };


  const message =
    messages[language]
    ||
    messages.tr;


  if (
    !cart.length
  ) {

    alert(
      message.empty
    );

    return;

  }


  if (
    !name
    ||
    !phone
  ) {

    alert(
      message.required
    );

    return;

  }


  const orderData = {

    customer_name:
      name,

    customer_phone:
      phone,

    language:
      language,

    items:
      cart.map(item => ({

        id:
          item.id,

        name:
          item.name,

        number:
          item.number,

        code:
          item.code,

        quantity:
          item.quantity

      })),

    created_at:
      new Date().toISOString()

  };


  const originalText =
    button
      ? button.textContent
      : "";


  if (button) {

    button.disabled =
      true;


    button.textContent =
      message.sending;

  }


  try {

    const response =
      await fetch(
        SUPABASE_WHATSAPP_FUNCTION_URL,
        {

          method:
            "POST",

          headers: {

            "Content-Type":
              "application/json",

            "apikey":
              SUPABASE_PUBLISHABLE_KEY,

            "Authorization":
              `Bearer ${SUPABASE_PUBLISHABLE_KEY}`

          },

          body:
            JSON.stringify(
              orderData
            )

        }
      );


    if (
      !response.ok
    ) {

      throw new Error(
        "Edge function unavailable"
      );

    }


    if (nameElement) {

      nameElement.value =
        "";

    }


    if (phoneElement) {

      phoneElement.value =
        "";

    }


    setTimeout(
      closeCart,
      350
    );

  }


  catch (error) {

    const items =
      cart.map(
        (
          item,
          index
        ) =>

          `${
            index + 1
          }. ${
            item.number
          } · ${
            item.name
          }\nKod: ${
            item.code
          }\nAdet: ${
            item.quantity
          }`
      )
      .join("\n\n");


    const whatsappMessage =
      `👜 *NEW LEVANTE ORDER REQUEST*

👤 *Customer Name:* ${name}
📱 *Customer Phone:* ${phone}

🛍️ *ORDER DETAILS*

${items}

✨ Sent from LEVANTE Website`;


    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(
      url,
      "_blank"
    );

  }


  finally {

    if (button) {

      button.disabled =
        false;


      button.textContent =
        originalText;

    }

  }

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


  if (
    !slides.length
  ) return;


  slides[currentSlide]
    ?.classList
    .remove("active");


  dots[currentSlide]
    ?.classList
    .remove("active");


  currentSlide =
    index;


  if (
    currentSlide
    >=
    slides.length
  ) {

    currentSlide = 0;

  }


  if (
    currentSlide < 0
  ) {

    currentSlide =
      slides.length - 1;

  }


  slides[currentSlide]
    ?.classList
    .add("active");


  dots[currentSlide]
    ?.classList
    .add("active");

}


/* =====================================================
   START WEBSITE
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderProducts();

    updateCart();

    changeLanguage();


    const header =
      document.getElementById(
        "header"
      );


    window.addEventListener(
      "scroll",
      () => {

        if (!header) return;

        header.classList.toggle(
          "scrolled",
          window.scrollY > 50
        );

      }
    );


    setInterval(
      () => {

        goToSlide(
          currentSlide + 1
        );

      },
      5000
    );


    document.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Escape"
        ) {

          closeMenu();

          closeCart();

          closeProduct();

        }

      }
    );

  }
);