const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
let currentTabIndex = 0;
let previousTabIndex = 0;

tabList.addEventListener("keydown", changeTab);

function changeTab(e) {
  // e.code is most convenient to use for pysical keys so
  // ArrowLeft and ArrowRight are used
  if (e.code === "ArrowLeft") {
    previousTabIndex = currentTabIndex;
    currentTabIndex === 0 ? currentTabIndex = 3 : currentTabIndex--;
    changeTabStatus();
  }

  if (e.code === "ArrowRight") {
    previousTabIndex = currentTabIndex;
    currentTabIndex === 3 ? currentTabIndex = 0 : currentTabIndex++;
    changeTabStatus();
  }
}

function changeTabStatus() {
  tabs[previousTabIndex].setAttribute("aria-selected", false);
  tabs[previousTabIndex].setAttribute("index", -1);
  tabs[currentTabIndex].setAttribute("aria-selected", true);
  tabs[currentTabIndex].setAttribute("index", 0);
  tabs[currentTabIndex].focus();
}
