const siteContent = {
  "nav": {
    
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let navItems = document.querySelectorAll("nav a");
navItems.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i + 1}`];
});

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"])

let ctaText = document.getElementsByClassName("cta-text")[0];
ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaText.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);




let midImg = document.getElementByClassName("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["img-src"]);

let topText = document.getElementsByClassName("text-content")[0];
topText.getElementsByTagName("text-content")[0].innerHTML = siteContent["main-content"]["h4"];
topText.getElementsByTagName("text-content")[0].innerHTML = siteContent["main-content"]["p"];

let bottomText = document.getElementsByClassName("bottom-content")[0];
bottomText.getElementsByTagName("text-content")[0].innerHTML = siteContent["main-content"]["h4"];
bottomText.getElementsByTagName("text-content")[0].innerHTML = siteContent["main-content"]["p"];

let contactInfo = document.getElementsByClassName("contact")[0];
contactInfo.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"];
contactInfo.getElementsByTagName("p")[0].innerHTML = siteContent["contact"];

