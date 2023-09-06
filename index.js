// Import stylesheets
import './style.css';
// Write Javascript code!

const xRay = document.querySelector('.x-ray');
let currentMousePos = { x: -1, y: -1 };
document.querySelector('.flash').addEventListener('mousemove', (e) => {
  currentMousePos.x = e.pageX;
  currentMousePos.y = e.pageY;
  xRay.style['-webkit-mask-position-x'] = currentMousePos.x - 75 + 'px';
  xRay.style['-webkit-mask-position-y'] = currentMousePos.y - 75 + 'px';
});
