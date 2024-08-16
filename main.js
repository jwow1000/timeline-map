import './style.css';
// import { timeline } from './assets/tLine.js';
// import { setupCounter } from './counter.js'

// const theMap = document.getElementById("app");
// theMap.innerHTML = timeline;
// console.log("root", theMap.firstChild)

const scroll = document.getElementById("ghost-scroll");
const body = document.body;


// good way to handle scroll, needs more math though for consistent values
const handleScroll = (event) => {
  console.log("scroll", window.scrollY - window.innerHeight );
  const wow = window.scrollY / 5000;
  handleSVGscroll( wow );
  slider.value = wow * 100;

}

body.onscroll = handleScroll;
// scroll.addEventListener("scroll", handleScroll ); 

console.log("scroll item", scroll);

// the svg layers
const wow1 = document.getElementById("_x38_0");
const wow2 = document.getElementById("_x37_0");
const wow3 = document.getElementById("_x36_0");

const slider = document.createElement("input");

function handleSVGscroll( val ) {
  wow1.style.opacity = 1;
  wow2.style.opacity = Math.min( Math.max( (val * 3) - 1, 0), 1)
  wow3.style.opacity = Math.min( Math.max( (val * 3) - 2, 0), 1)
  console.log("value", wow1.style.opacity);
}

function handleSliderChange(event) {
  const val = event.target.value / 100;
  handleSVGscroll( val );
}

slider.id = "date-range";
slider.type = "range";
slider.oninput = handleSliderChange;



const app = document.getElementById("app");
app.appendChild(slider);



console.log("slider", slider)
