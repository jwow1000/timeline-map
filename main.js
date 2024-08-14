import './style.css';
// import { setupCounter } from './counter.js'
let date = 0;



// the svg layers
const wow1 = document.getElementById("_x38_0");
const wow2 = document.getElementById("_x37_0");
const wow3 = document.getElementById("_x36_0");

const slider = document.createElement("input");

function handleChange(event) {
  const val = event.target.value / 100;
  wow1.style.opacity = 1;
  wow2.style.opacity = Math.min( Math.max( (val * 3) - 1, 0), 1)
  wow3.style.opacity = Math.min( Math.max( (val * 3) - 2, 0), 1)
  console.log("value", wow1.style.opacity);
}

slider.id = "date-range";
slider.type = "range";
slider.oninput = handleChange;



document.body.appendChild(slider);



console.log("slider", slider)
console.log("wow", wow);
