const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
const articles = document.querySelectorAll('[role="tabpanel"]');
const pictures = document.querySelectorAll("#main picture");

let currentTabIndex = 0;
let tabsLimit = tabs.length - 1;

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    currentTabIndex = parseInt(e.target.getAttribute("data-index"));
    articles.forEach((article) => article.setAttribute("hidden", true));
    pictures.forEach((picture) => picture.setAttribute("hidden", true));
    articles[currentTabIndex].removeAttribute("hidden");
    pictures[currentTabIndex].removeAttribute("hidden");
    changeTabStatus();
  });
});

tabList.addEventListener("keydown", changeTab);

function changeTab(e) {
  // e.code is most convenient to use for pysical keys so
  // ArrowLeft and ArrowRight are used
  if (e.code === "ArrowLeft") {
    currentTabIndex === 0 ? (currentTabIndex = tabsLimit) : currentTabIndex--;
    changeTabStatus();
  }

  if (e.code === "ArrowRight") {
    currentTabIndex === tabsLimit ? (currentTabIndex = 0) : currentTabIndex++;
    changeTabStatus();
  }
}

function changeTabStatus() {
  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
    tab.setAttribute("index", -1);
  });
  tabs[currentTabIndex].setAttribute("aria-selected", true);
  tabs[currentTabIndex].setAttribute("index", 0);
  tabs[currentTabIndex].focus();
}
