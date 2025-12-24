var html = document.querySelector("html");
var body = document.querySelector("body");
var mainContent = document.getElementById("main-content");
var header = document.getElementById("header");

// OPEN SETTING PART
var settingBtn = document.getElementById("settings-toggle");
var settingSidebar = document.getElementById("settings-sidebar");

settingBtn.addEventListener("click", function () {
  settingSidebar.classList.remove("translate-x-full");
  settingSidebar.setAttribute("aria-hidden", "false");

  settingBtn.setAttribute(
    "style",
    `transform: translateY(-50%); right: ${
      settingSidebar.getBoundingClientRect().width
    }px;`
  );

  if (fontFamily === "font-alexandria") {
    alexandriaFont.setAttribute("class", selectedElementStyle);
    tajawalFont.setAttribute("class", solidStyle);
    cairoFont.setAttribute("class", solidStyle);
  } else if (fontFamily === "font-tajawal") {
    alexandriaFont.setAttribute("class", solidStyle);
    tajawalFont.setAttribute("class", selectedElementStyle);
    cairoFont.setAttribute("class", solidStyle);
  } else {
    alexandriaFont.setAttribute("class", solidStyle);
    tajawalFont.setAttribute("class", solidStyle);
    cairoFont.setAttribute("class", selectedElementStyle);
  }
});

// CLOSE SETTING PART
var closeSettingBtn = document.getElementById("close-settings");

function closeSetting() {
  settingSidebar.classList.add("translate-x-full");
  settingSidebar.setAttribute("aria-hidden", "true");

  settingBtn.setAttribute("style", `transform: translateY(-50%); right: 0;`);
}

closeSettingBtn.addEventListener("click", function () {
  closeSetting();
});

mainContent.addEventListener("click", function () {
  closeSetting();
});

header.addEventListener("click", function () {
  closeSetting();
});

// SELECT FONT TYPE PART
var fontFamily = localStorage.getItem("fontFamily")
  ? JSON.parse(localStorage.getItem("fontFamily"))
  : "font-tajawal";

if (body.classList.contains("font-alexandria")) {
  body.classList.replace("font-alexandria", fontFamily);
} else if (body.classList.contains("font-tajawal")) {
  body.classList.replace("font-tajawal", fontFamily);
} else {
  body.classList.replace("font-cairo", fontFamily);
}

var alexandriaFont = document.querySelector("[data-font='alexandria']");
var tajawalFont = document.querySelector("[data-font='tajawal']");
var cairoFont = document.querySelector("[data-font='cairo']");
var solidStyle = `font-option w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden`;
var selectedElementStyle = `font-option w-full p-4 rounded-xl border hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden active border-primary bg-slate-50 dark:bg-slate-800`;

alexandriaFont.addEventListener("click", function () {
  if (body.classList.contains("font-tajawal")) {
    body.classList.replace("font-tajawal", "font-alexandria");
  } else if (body.classList.contains("font-cairo")) {
    body.classList.replace("font-cairo", "font-alexandria");
  }

  alexandriaFont.setAttribute("class", selectedElementStyle);
  tajawalFont.setAttribute("class", solidStyle);
  cairoFont.setAttribute("class", solidStyle);

  fontFamily = "font-alexandria";
  localStorage.setItem("fontFamily", JSON.stringify(fontFamily));
});

tajawalFont.addEventListener("click", function () {
  if (body.classList.contains("font-alexandria")) {
    body.classList.replace("font-alexandria", "font-tajawal");
  } else if (body.classList.contains("font-cairo")) {
    body.classList.replace("font-cairo", "font-tajawal");
  }

  alexandriaFont.setAttribute("class", solidStyle);
  tajawalFont.setAttribute("class", selectedElementStyle);
  cairoFont.setAttribute("class", solidStyle);

  fontFamily = "font-tajawal";
  localStorage.setItem("fontFamily", JSON.stringify(fontFamily));
});

cairoFont.addEventListener("click", function () {
  if (body.classList.contains("font-tajawal")) {
    body.classList.replace("font-tajawal", "font-cairo");
  } else if (body.classList.contains("font-alexandria")) {
    body.classList.replace("font-alexandria", "font-cairo");
  }

  alexandriaFont.setAttribute("class", solidStyle);
  tajawalFont.setAttribute("class", solidStyle);
  cairoFont.setAttribute("class", selectedElementStyle);

  fontFamily = "font-cairo";
  localStorage.setItem("fontFamily", JSON.stringify(fontFamily));
});

// COLORS THEME PART
var themeColor = localStorage.getItem("themeColor")
  ? JSON.parse(localStorage.getItem("themeColor"))
  : "first";

var themeColorsGrid = document.getElementById("theme-colors-grid");
themeColorsGrid.innerHTML = `<button
    class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-slate-900"
    title="Purple Blue"
    data-primary="#6366f1"
    data-secondary="#8b5cf6"
    style="background: linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246));"
  ></button>
  <button
    class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm"
    title="Pink Orange"
    data-primary="#ec4899"
    data-secondary="#f97316"
    style="background: linear-gradient(135deg, rgb(236, 72, 153), rgb(249, 115, 22));"
  ></button>
  <button
    class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm"
    title="Green Emerald"
    data-primary="#10b981"
    data-secondary="#059669"
    style="background: linear-gradient(135deg, rgb(16, 185, 129), rgb(5, 150, 105));"
  ></button>
  <button
    class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm"
    title="Blue Cyan"
    data-primary="#3b82f6"
    data-secondary="#06b6d4"
    style="background: linear-gradient(135deg, rgb(59, 130, 246), rgb(6, 182, 212));"
  ></button>
  <button
    class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm"
    title="Red Rose"
    data-primary="#ef4444"
    data-secondary="#f43f5e"
    style="background: linear-gradient(135deg, rgb(239, 68, 68), rgb(244, 63, 94));"
  ></button>
  <button
    class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm"
    title="Amber Orange"
    data-primary="#f59e0b"
    data-secondary="#ea580c"
    style="background: linear-gradient(135deg, rgb(245, 158, 11), rgb(234, 88, 12));"
  ></button>`;

var selectedThemeStyle = `w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-slate-900`;
var notSelectedThemeStyle = `w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm`;

var firstColorTheme = document.querySelector("[data-primary='#6366f1']");
var secondColorTheme = document.querySelector("[data-primary='#ec4899']");
var thirdColorTheme = document.querySelector("[data-primary='#10b981']");
var forthColorTheme = document.querySelector("[data-primary='#3b82f6']");
var fifthColorTheme = document.querySelector("[data-primary='#ef4444']");
var sixthColorTheme = document.querySelector("[data-primary='#f59e0b']");

if (themeColor === "first") {
  firstColorTheme.setAttribute("class", selectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;"
  );
} else if (themeColor === "second") {
  firstColorTheme.setAttribute("class", notSelectedThemeStyle);
  secondColorTheme.setAttribute("class", selectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #ec4899; --color-secondary: #f97316; --color-accent: #fb923c;"
  );
} else if (themeColor === "third") {
  firstColorTheme.setAttribute("class", notSelectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", selectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #10b981; --color-secondary: #059669; --color-accent: #34d399;"
  );
} else if (themeColor === "forth") {
  firstColorTheme.setAttribute("class", notSelectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", selectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #3b82f6; --color-secondary: #06b6d4; --color-accent: #22d3ee;"
  );
} else if (themeColor === "fifth") {
  firstColorTheme.setAttribute("class", notSelectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", selectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #ef4444; --color-secondary: #f43f5e; --color-accent: #fb7185;"
  );
} else if (themeColor === "sixth") {
  firstColorTheme.setAttribute("class", notSelectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", selectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #f59e0b; --color-secondary: #ea580c; --color-accent: #fbbf24;"
  );
}

firstColorTheme.addEventListener("click", function () {
  firstColorTheme.setAttribute("class", selectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;"
  );

  themeColor = "first";
  localStorage.setItem("themeColor", JSON.stringify(themeColor));
});

secondColorTheme.addEventListener("click", function () {
  firstColorTheme.setAttribute("class", notSelectedThemeStyle);
  secondColorTheme.setAttribute("class", selectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #ec4899; --color-secondary: #f97316; --color-accent: #fb923c;"
  );

  themeColor = "second";
  localStorage.setItem("themeColor", JSON.stringify(themeColor));
});

thirdColorTheme.addEventListener("click", function () {
  firstColorTheme.setAttribute("class", notSelectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", selectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #10b981; --color-secondary: #059669; --color-accent: #34d399;"
  );

  themeColor = "third";
  localStorage.setItem("themeColor", JSON.stringify(themeColor));
});

forthColorTheme.addEventListener("click", function () {
  firstColorTheme.setAttribute("class", notSelectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", selectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #3b82f6; --color-secondary: #06b6d4; --color-accent: #22d3ee;"
  );

  themeColor = "forth";
  localStorage.setItem("themeColor", JSON.stringify(themeColor));
});

fifthColorTheme.addEventListener("click", function () {
  firstColorTheme.setAttribute("class", notSelectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", selectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #ef4444; --color-secondary: #f43f5e; --color-accent: #fb7185;"
  );

  themeColor = "fifth";

  localStorage.setItem("themeColor", JSON.stringify(themeColor));
});

sixthColorTheme.addEventListener("click", function () {
  firstColorTheme.setAttribute("class", notSelectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", selectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #f59e0b; --color-secondary: #ea580c; --color-accent: #fbbf24;"
  );

  themeColor = "sixth";

  localStorage.setItem("themeColor", JSON.stringify(themeColor));
});

// RESET BUTTON PART
var resetBtn = document.getElementById("reset-settings");

resetBtn.addEventListener("click", function () {
  if (body.classList.contains("font-alexandria")) {
    body.classList.replace("font-alexandria", "font-tajawal");
  } else if (body.classList.contains("font-cairo")) {
    body.classList.replace("font-cairo", "font-tajawal");
  }

  alexandriaFont.setAttribute("class", solidStyle);
  tajawalFont.setAttribute("class", selectedElementStyle);
  cairoFont.setAttribute("class", solidStyle);

  fontFamily = "font-tajawal";
  localStorage.setItem("fontFamily", JSON.stringify(fontFamily));

  firstColorTheme.setAttribute("class", selectedThemeStyle);
  secondColorTheme.setAttribute("class", notSelectedThemeStyle);
  thirdColorTheme.setAttribute("class", notSelectedThemeStyle);
  forthColorTheme.setAttribute("class", notSelectedThemeStyle);
  fifthColorTheme.setAttribute("class", notSelectedThemeStyle);
  sixthColorTheme.setAttribute("class", notSelectedThemeStyle);

  html.setAttribute(
    "style",
    "--color-primary: #6366f1; --color-secondary: #8b5cf6; --color-accent: #a855f7;"
  );

  themeColor = "first";
  localStorage.setItem("themeColor", JSON.stringify(themeColor));

  closeSetting();
});

// LIGHTING MODE PART
var themeModeBtn = document.getElementById("theme-toggle-button");
var mode = localStorage.getItem("themeMode")
  ? JSON.parse(localStorage.getItem("themeMode"))
  : "dark";

if (mode === "dark") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

themeModeBtn.addEventListener("click", function () {
  var statue = html.classList.toggle("dark");

  if (statue) {
    mode = "dark";
    localStorage.setItem("themeMode", JSON.stringify(mode));
  } else {
    mode = "light";
    localStorage.setItem("themeMode", JSON.stringify(mode));
  }
});

// DETERMINE CURRENT SECTION
var menuBar = document.querySelector("[role='menubar']");
var menuItems = document.querySelectorAll("[role='menuitem']");
// ========================
var heroSection = document.getElementById("hero-section");
var aboutSection = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var experience = document.getElementById("experience");
var testimonials = document.getElementById("testimonials");
var contact = document.getElementById("contact");

var scrollToTop = document.getElementById("scroll-to-top");
scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});

if (
  header.getBoundingClientRect().bottom >
    heroSection.getBoundingClientRect().top &&
  header.getBoundingClientRect().bottom <
    heroSection.getBoundingClientRect().bottom
) {
  scrollToTop.classList.replace("visible", "invisible");
  scrollToTop.classList.replace("opacity-100", "opacity-0");
} else {
  scrollToTop.classList.replace("invisible", "visible");
  scrollToTop.classList.replace("opacity-0", "opacity-100");
}

if (
  header.getBoundingClientRect().bottom >
    heroSection.getBoundingClientRect().top &&
  header.getBoundingClientRect().bottom <
    heroSection.getBoundingClientRect().bottom
) {
  menuItems[0].classList.add("active");
} else if (
  header.getBoundingClientRect().bottom >
    aboutSection.getBoundingClientRect().top &&
  header.getBoundingClientRect().bottom <
    aboutSection.getBoundingClientRect().bottom
) {
  menuItems[1].classList.add("active");
} else if (
  header.getBoundingClientRect().bottom >
    portfolio.getBoundingClientRect().top &&
  header.getBoundingClientRect().bottom <
    portfolio.getBoundingClientRect().bottom
) {
  menuItems[2].classList.add("active");
} else if (
  header.getBoundingClientRect().bottom >
    experience.getBoundingClientRect().top &&
  header.getBoundingClientRect().bottom <
    experience.getBoundingClientRect().bottom
) {
  menuItems[3].classList.add("active");
} else if (
  header.getBoundingClientRect().bottom >
    testimonials.getBoundingClientRect().top &&
  header.getBoundingClientRect().bottom <
    testimonials.getBoundingClientRect().bottom
) {
  menuItems[4].classList.add("active");
} else if (
  header.getBoundingClientRect().bottom > contact.getBoundingClientRect().top &&
  header.getBoundingClientRect().bottom < contact.getBoundingClientRect().bottom
) {
  menuItems[5].classList.add("active");
}

document.addEventListener("scrollend", function () {
  var itemHasActive = menuBar.querySelector(".active");

  if (
    header.getBoundingClientRect().bottom >
      heroSection.getBoundingClientRect().top &&
    header.getBoundingClientRect().bottom <
      heroSection.getBoundingClientRect().bottom
  ) {
    scrollToTop.classList.replace("visible", "invisible");
    scrollToTop.classList.replace("opacity-100", "opacity-0");
  } else {
    scrollToTop.classList.replace("invisible", "visible");
    scrollToTop.classList.replace("opacity-0", "opacity-100");
  }

  if (
    header.getBoundingClientRect().bottom >
      heroSection.getBoundingClientRect().top &&
    header.getBoundingClientRect().bottom <
      heroSection.getBoundingClientRect().bottom
  ) {
    itemHasActive.classList.remove("active");

    menuItems[0].classList.add("active");
  } else if (
    header.getBoundingClientRect().bottom >
      aboutSection.getBoundingClientRect().top &&
    header.getBoundingClientRect().bottom <
      aboutSection.getBoundingClientRect().bottom
  ) {
    itemHasActive.classList.remove("active");

    menuItems[1].classList.add("active");
  } else if (
    header.getBoundingClientRect().bottom >
      portfolio.getBoundingClientRect().top &&
    header.getBoundingClientRect().bottom <
      portfolio.getBoundingClientRect().bottom
  ) {
    itemHasActive.classList.remove("active");

    menuItems[2].classList.add("active");
  } else if (
    header.getBoundingClientRect().bottom >
      experience.getBoundingClientRect().top &&
    header.getBoundingClientRect().bottom <
      experience.getBoundingClientRect().bottom
  ) {
    itemHasActive.classList.remove("active");

    menuItems[3].classList.add("active");
  } else if (
    header.getBoundingClientRect().bottom >
      testimonials.getBoundingClientRect().top &&
    header.getBoundingClientRect().bottom <
      testimonials.getBoundingClientRect().bottom
  ) {
    itemHasActive.classList.remove("active");

    menuItems[4].classList.add("active");
  } else if (
    header.getBoundingClientRect().bottom >
      contact.getBoundingClientRect().top &&
    header.getBoundingClientRect().bottom <
      contact.getBoundingClientRect().bottom
  ) {
    itemHasActive.classList.remove("active");

    menuItems[5].classList.add("active");
  }
});

// TABS INDICATORS FROM PORTOFOLIO PART
var portfolioFilters = document.getElementById("portfolio-filters");
var portfolioGrid = document.getElementById("portfolio-grid");
var btnsPortfolioFilters = portfolioFilters.querySelectorAll("button");
var boxsPortfolioGrid = portfolioGrid.querySelectorAll(".portfolio-item");
var hiddenBtnStyle = `transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;`;
var appearedBtnStyle = `transition: opacity 0.3s, transform 0.3s; opacity: 1; transform: scale(1); display: block;`;
var activeStyleClass = `portfolio-filter px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50`;
var notActiveStyleClass = `portfolio-filter px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700`;

btnsPortfolioFilters[0].addEventListener("click", function () {
  portfolioFilters
    .querySelector(".active")
    .setAttribute("class", notActiveStyleClass);
  btnsPortfolioFilters[0].setAttribute("class", activeStyleClass);

  for (var i = 0; i < boxsPortfolioGrid.length; i++) {
    boxsPortfolioGrid[i].setAttribute("style", appearedBtnStyle);
  }
});

btnsPortfolioFilters[1].addEventListener("click", function () {
  portfolioFilters
    .querySelector(".active")
    .setAttribute("class", notActiveStyleClass);
  btnsPortfolioFilters[1].setAttribute("class", activeStyleClass);

  for (var i = 0; i < boxsPortfolioGrid.length; i++) {
    if (i % 3 === 0) {
      boxsPortfolioGrid[i].setAttribute("style", appearedBtnStyle);
    } else {
      boxsPortfolioGrid[i].setAttribute("style", hiddenBtnStyle);
    }
  }
});

btnsPortfolioFilters[2].addEventListener("click", function () {
  portfolioFilters
    .querySelector(".active")
    .setAttribute("class", notActiveStyleClass);
  btnsPortfolioFilters[2].setAttribute("class", activeStyleClass);

  for (var i = 0; i < boxsPortfolioGrid.length; i++) {
    if (i === 1 || i === 4 || i === 7) {
      boxsPortfolioGrid[i].setAttribute("style", appearedBtnStyle);
    } else {
      boxsPortfolioGrid[i].setAttribute("style", hiddenBtnStyle);
    }
  }
});

btnsPortfolioFilters[3].addEventListener("click", function () {
  portfolioFilters
    .querySelector(".active")
    .setAttribute("class", notActiveStyleClass);
  btnsPortfolioFilters[3].setAttribute("class", activeStyleClass);

  for (var i = 0; i < boxsPortfolioGrid.length; i++) {
    if (i === 2 || i === 8) {
      boxsPortfolioGrid[i].setAttribute("style", appearedBtnStyle);
    } else {
      boxsPortfolioGrid[i].setAttribute("style", hiddenBtnStyle);
    }
  }
});

btnsPortfolioFilters[4].addEventListener("click", function () {
  portfolioFilters
    .querySelector(".active")
    .setAttribute("class", notActiveStyleClass);
  btnsPortfolioFilters[4].setAttribute("class", activeStyleClass);

  for (var i = 0; i < boxsPortfolioGrid.length; i++) {
    if (i === 5) {
      boxsPortfolioGrid[i].setAttribute("style", appearedBtnStyle);
    } else {
      boxsPortfolioGrid[i].setAttribute("style", hiddenBtnStyle);
    }
  }
});

// CAROUSEL INDICATORS
var testimonialsCarousel = document.getElementById("testimonials-carousel");
var arrowRight = document.getElementById("prev-testimonial");
var arrowLeft = document.getElementById("next-testimonial");
var numsLocationArr = [0, 33.3333, 66.6667, 100];
var locatedIn = 0;

var carouselIndicators = document.querySelectorAll(".carousel-indicator");
var activeDotIndicatorStyle = `carousel-indicator w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer active bg-accent scale-125`;
var notActiveDotIndicatorStyle = `carousel-indicator w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer bg-slate-400 dark:bg-slate-600`;

arrowLeft.addEventListener("click", function () {
  locatedIn++;

  if (locatedIn >= numsLocationArr.length) {
    locatedIn = 0;
  }

  testimonialsCarousel.setAttribute(
    "style",
    `transform: translateX(${numsLocationArr[locatedIn]}%);`
  );

  for (var i = 0; i < carouselIndicators.length; i++) {
    if (i === locatedIn) {
      carouselIndicators[i].setAttribute("class", activeDotIndicatorStyle);
    } else {
      carouselIndicators[i].setAttribute("class", notActiveDotIndicatorStyle);
    }
  }
});

arrowRight.addEventListener("click", function () {
  locatedIn--;

  if (locatedIn < 0) {
    locatedIn = numsLocationArr.length - 1;
  }

  testimonialsCarousel.setAttribute(
    "style",
    `transform: translateX(${numsLocationArr[locatedIn]}%);`
  );

  for (var i = 0; i < carouselIndicators.length; i++) {
    if (i === locatedIn) {
      carouselIndicators[i].setAttribute("class", activeDotIndicatorStyle);
    } else {
      carouselIndicators[i].setAttribute("class", notActiveDotIndicatorStyle);
    }
  }
});

for (var i = 0; i < carouselIndicators.length; i++) {
  carouselIndicators[i].addEventListener("click", function (e) {
    locatedIn = +e.target.getAttribute("data-index");

    testimonialsCarousel.setAttribute(
      "style",
      `transform: translateX(${numsLocationArr[locatedIn]}%);`
    );

    for (var i = 0; i < carouselIndicators.length; i++) {
      if (i === locatedIn) {
        carouselIndicators[i].setAttribute("class", activeDotIndicatorStyle);
      } else {
        carouselIndicators[i].setAttribute("class", notActiveDotIndicatorStyle);
      }
    }
  });
}

// VALIDATION FORM

/* ====> DON'T FORGET THOSE
    - IF NAME IS EMPTY SHOW AN ERROR MESSAGE
    - EMAIL NEEDS REGEX WITH MANUAL VAILDATION (@gmail.com)
    - TEXTAREA NEEDS AT LEAST 10 CHARACTERS INCLUDES WHITE SPACE    ----> DON'T FORGET WHITE SPACE (PERFAVOURE)
 */

var phoneRegex = /^01[0125][0-9]{8}$/;
var emailRegex = /^[a-zA-Z1-9]{1,50}@gmail.com$/;
var textAreaRegex = /^[a-zA-Z1-9 ]{10,}$/;

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
});

var fullName = document.getElementById("full-name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var projectDetails = document.getElementById("project-details");

var successMessage = document.querySelector(".success-message");
var successMessageBtn = document.querySelector(".success-popup-close");

var comboBox = document.querySelectorAll("[role='combobox']");
var selectedText = document.querySelectorAll(".selected-text");
var arrow = document.querySelectorAll(".fa-chevron-down");
var customOptions = document.querySelectorAll(".custom-options");
var customOptionProjects = customOptions[0].querySelectorAll(".custom-option");
var customOptionProfit = customOptions[1].querySelectorAll(".custom-option");

comboBox[0].addEventListener("click", function () {
  // OPEN
  if (arrow[0].getAttribute("style") === "transform: rotate(0deg)") {
    arrow[0].setAttribute("style", "transform: rotate(180deg)");

    customOptions[0].classList.remove("hidden");

    for (var j = 0; j < customOptionProjects.length; j++) {
      customOptionProjects[j].addEventListener("click", function (e) {
        selectedText[0].innerHTML = e.target.getAttribute("data-value");
        selectedText[0].setAttribute(
          "class",
          "selected-text text-slate-800 dark:text-white"
        );

        arrow[0].setAttribute("style", "transform: rotate(0deg)");
        customOptions[0].classList.add("hidden");
      });
    }

    for (var j = 0; j < customOptionProfit.length; j++) {
      customOptionProfit[j].addEventListener("click", function (e) {
        selectedText[1].innerHTML = e.target.getAttribute("data-value");
        selectedText[1].setAttribute(
          "class",
          "selected-text text-slate-800 dark:text-white"
        );

        arrow[0].setAttribute("style", "transform: rotate(0deg)");
        customOptions[0].classList.add("hidden");
      });
    }
  }

  // CLOSE
  else if (arrow[0].getAttribute("style") === "transform: rotate(180deg)") {
    arrow[0].setAttribute("style", "transform: rotate(0deg)");
    customOptions[0].classList.add("hidden");
  }
});

comboBox[1].addEventListener("click", function () {
  // OPEN
  if (arrow[1].getAttribute("style") === "transform: rotate(0deg)") {
    arrow[1].setAttribute("style", "transform: rotate(180deg)");

    customOptions[1].classList.remove("hidden");

    for (var j = 0; j < customOptionProjects.length; j++) {
      customOptionProjects[j].addEventListener("click", function (e) {
        selectedText[1].innerHTML = e.target.getAttribute("data-value");
        selectedText[1].setAttribute(
          "class",
          "selected-text text-slate-800 dark:text-white"
        );

        arrow[1].setAttribute("style", "transform: rotate(0deg)");
        customOptions[1].classList.add("hidden");
      });
    }

    for (var j = 0; j < customOptionProfit.length; j++) {
      customOptionProfit[j].addEventListener("click", function (e) {
        selectedText[1].innerHTML = e.target.getAttribute("data-value");
        selectedText[1].setAttribute(
          "class",
          "selected-text text-slate-800 dark:text-white"
        );

        arrow[1].setAttribute("style", "transform: rotate(0deg)");
        customOptions[1].classList.add("hidden");
      });
    }
  }

  // CLOSE
  else if (arrow[1].getAttribute("style") === "transform: rotate(180deg)") {
    arrow[1].setAttribute("style", "transform: rotate(0deg)");
    customOptions[1].classList.add("hidden");
  }
});

successMessageBtn.addEventListener("click", function () {
  successMessage.classList.add("hidden");
});

var submitBtn = document.getElementById("submit-form");

submitBtn.addEventListener("click", function () {
  var errorMessageForName = document.getElementById("wrong-name");
  var errorMessageForEmail = document.getElementById("wrong-email");
  var errorMessageForPhone = document.getElementById("wrong-phone");
  var errorMessageForDescribtion = document.getElementById("wrong-desc");

  if (fullName.value.length === 0) {
    errorMessageForName.classList.remove("hidden");
  } else {
    errorMessageForName.classList.add("hidden");
  }

  if (email.value.length === 0) {
    errorMessageForEmail.classList.remove("hidden");
  } else {
    errorMessageForEmail.classList.add("hidden");
  }

  if (!emailRegex.test(email.value)) {
    email.setAttribute(
      "title",
      `Please include an '@' in the email address. '${email.value}' is missing an '@'.`
    );
  } else {
    email.removeAttribute("title");
  }

  if (phone.value.length !== 0) {
    if (!phoneRegex.test(phone.value)) {
      errorMessageForPhone.classList.remove("hidden");
    } else {
      errorMessageForPhone.classList.add("hidden");
    }
  } else {
    errorMessageForPhone.classList.add("hidden");
  }

  if (
    !textAreaRegex.test(projectDetails.value) ||
    projectDetails.length === 0
  ) {
    errorMessageForDescribtion.classList.remove("hidden");
  } else {
    errorMessageForDescribtion.classList.add("hidden");
  }

  if (
    errorMessageForName.classList.contains("hidden") &&
    errorMessageForEmail.classList.contains("hidden") &&
    errorMessageForPhone.classList.contains("hidden") &&
    errorMessageForDescribtion.classList.contains("hidden")
  ) {
    successMessage.classList.remove("hidden");

    clearData();

    setTimeout(function () {
      successMessage.classList.add("hidden");
    }, 3000);

    selectedText[0].innerHTML = "اختر نوع المشروع";
    selectedText[1].innerHTML = "اختر الميزانية";

    for (var i = 0; i < selectedText.length; i++) {
      selectedText[i].setAttribute(
        "class",
        "selected-text text-slate-500 dark:text-slate-400"
      );
    }
  }
});

function clearData() {
  fullName.value = null;
  email.value = null;
  phone.value = null;
  projectDetails.value = null;
}
