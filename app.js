// https://calculator.swiftutors.com/circumcircle-of-a-triangle-calculator.html

const a =  document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const circumcircleRadiusRadio = document.getElementById('circumcircleRadiusRadio');
const circumcircleAreaRadio = document.getElementById('circumcircleAreaRadio');
const triangleAreaRadio = document.getElementById('triangleAreaRadio');

btn.addEventListener('click', function() {
  
  if(circumcircleRadiusRadio.checked)
    result.textContent = `Circumcircle Radius = ${computeCircumcircleRadius().toFixed(2)}`;

  else if(circumcircleAreaRadio.checked)
    result.textContent = `Circumcircle Area = ${computeCircumcircleArea().toFixed(2)}`;

  else if(triangleAreaRadio.checked)
    result.textContent = `Triangle Area = ${computeTriangleArea().toFixed(2)}`;
})

// calculation

function computeCircumcircleRadius() {
  return (Number(a.value) * Number(b.value) * Number(c.value)) / (4 * Math.sqrt(computeS() * (computeS() - Number(a.value)) * (computeS() - Number(b.value)) * (computeS() - Number(c.value))));
}

function computeCircumcircleArea() {
  return Math.PI * Math.pow(computeCircumcircleRadius(), 2);
}

function computeTriangleArea() {
  return Math.sqrt(computeS() * (computeS() - Number(a.value)) * (computeS() - Number(b.value)) * (computeS() - Number(c.value)));
}

function computeS() {
  return (Number(a.value) + Number(b.value) + Number(c.value)) / 2;
}