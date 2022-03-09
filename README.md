# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [See live site of my project](https://alisariyer.github.io/space-travel)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS utility classes
- CSS components
- CSS Grid
- Mobile-first workflow

### What I learned

```html
<!-- Use picture instead img to provide a fallback image, also use webp format to low image high quality -->
<picture>
  <source srcset="./assets/destination/image-moon.webp" type="images/webp" />
  <img src="./assets/destination/image-moon.png" alt="the moon" />
</picture>

<!-- tabs -->
<div
  class="tab-list underline-indicators flex"
  role="tablist"
  aria-label="destination list"
>
  <button
    aria-selected="true"
    role="tab"
    aria-controls="moon-tab"
    tabindex="0"
    class="uppercase text-accent ff-sans-cond letter-spacing-2"
  >
    Moon
  </button>
  <button
    aria-selected="false"
    role="tab"
    aria-controls="mars-tab"
    tabindex="-1"
    class="uppercase text-accent ff-sans-cond letter-spacing-2"
  >
    Mars
  </button>
  <button
    aria-selected="false"
    role="tab"
    aria-controls="europa-tab"
    tabindex="-1"
    class="uppercase text-accent ff-sans-cond letter-spacing-2"
  >
    Europa
  </button>
  <button
    aria-selected="false"
    role="tab"
    aria-controls="titan-tab"
    tabindex="-1"
    class="uppercase text-accent ff-sans-cond letter-spacing-2"
  >
    Titan
  </button>
</div>
```

```css
:root {
  /* use it in hsl with combining with alpha value after forward slash */
  --clr-dark: 230 35% 7%;
  /* clamp(min-value, middle-value, max-value) so it depends viewport */
  --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
  --ff-serif: "Bellefair", serif;
}

body {
  /* so can be use css variable in hsl */
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-dark));
  /* min-content takes min size */
  grid-template-rows: min-content 1fr;
}

input,
button,
textarea,
select {
  /* so we can use without applying font-family */
  font: inherit;
}

/* on mac there is an option to change it */
/* remove animation for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.grid {
  /* use utility class as .flex in container element */
  display: grid;
  /* this variable with a default or backup value provide inline css usage
  (or ANY OTHER ELEMENT'S CSS RULE TO MODIFY LOCALLY AS --gap: 3rem;)
  as style="--gap: 2rem;"  so we do not need initialize --gap value here*/
  gap: var(--gap, 1rem);
}

.d-block {
  display: block;
}

/* flow > * + * add margin to any child except has no adjacent sibling before */
/* can be used also .flow > *:not(:first-child) */
/* new css selectors: :is(el, el, ...) > p means each p in any el element */
/* new css selectors: :where() */
.flow > *:where(:not(:first-child)) {
  /* --flow-space is now undefines, so use 1rem but we define it in inline styling */
  margin-top: var(--flow-space, 1rem);
}

.container {
  /* instead of margin only left and right values */
  padding-inline: 2em;
  margin-inline: auto;
}

.grid-container {
  /* shorthand: align-items justify-content */
  place-items: center;
}

.grid-container > * {
  /* ch is equal of width of 0 value */
  max-width: 50ch;
}

@media (min-width: 45rem) {
  .grid-container {
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem, 1fr);
  }

  .grid-container--home {
    /* another solution max(first-value, second-value) so it takes max value of them */
    /* padding-bottom: max(10vw, 150px); : At least 10vw or 150px */
    padding-bottom: max(6rem, 20vh);
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  /* Added line */
  border: 0;
}

.bg-dark {
  background-color: hsl(var(--clr-dark));
}

.large-button {
  display: inline-grid;
  /* align-items and justify-items: can be take a two value as place-items: center flex-start */
  place-items: center;
  /* aspect-ratio: width height; */
  aspect-ratio: 1;
}

.large-button:hover::after,
.large-button:focus::after {
  /* transform does not force the browser redraw objects so use it instead of width, height etc. */
  transform: scale(1.5);
}

.primary-navigation {
  /* min(first-value, second-value) : Choose the smallest reference */
  padding: min(10rem, 3vh) 2rem;
  background: hsl(var(--clr-white) / 0.05);
  backdrop-filter: blur(1.5rem);
}

/* browser support */
/* if browser does not support backdrop-filter apply dark background*/
/* must be provided key and value, because some browsers may not support some units */
@supports not (backdrop-filter: blur(1.5rem)) {
  .primary-navigation {
    background: hsl(var(--clr-dark) / 0.9);
  }
}

@media (max-width: 35rem) {
  .primary-navigation {
    /* shorthand of top right bottom left */
    inset: 0 0 0 20%;
    /* min(first-value, second-value) : Choose the smallest reference */
    padding: min(10rem, 3vh) 2rem;
  }
}

/* Test if the user's primary input mechanism can hover over elements to avoid mobile long tap  */
@media (hover: hover) {
  .underline-indicators > *:hover {
    border-color: hsl(var(--clr-white) / 0.25);
  }
}

/* There two approaches */
/* 1. Add .sr-only class for skip-to-content link so only screen readers see it */
/* 2. Add another class for alls so anybody see by focusing with tab, otherwise hidden */
.skip-to-content {
  position: absolute;
  z-index: 9999;
  color: hsl(var(--clr-dark));
  background: hsl(var(--clr-white));
  padding: 0.5rem 1rem;
  border-bottom-right-radius: 1rem;
  transform: translateY(-100%);
  transition: transform 0.5s ease-in-out;
}

.skip-to-content:focus {
  transform: translateY(0);
}

.grid-container--destination {
  /* Here we can modify locally a css variable defined in top element as root or html */
  --flow-space: 2rem;
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";
}
```

```js
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
  // ... continue
```

### Continued development

I learned a lot in this project, so I will continue to learn deeply in SASS, Bootstrap, Git and Github, React.js etc. 

## Author

- Website - [Ali Sariyer](https://alisariyer.github.io/alisariyer)
- Frontend Mentor - [@alisariyer](https://www.frontendmentor.io/profile/alisariyer)
- Linkedin - [@alisariyer](https://www.linkedin.com/in/alisariyer)
