const elementCounterSpan = document.querySelectorAll("p > span");
console.log(elementCounterSpan);

// Obtenemos los valores de esos span 
const counters = Array.from(elementCounterSpan).map(span => parseInt(span.textContent));
console.log(counters);

function incrementCounter(index) {
    counters[index]++;
    elementCounterSpan[index].textContent = counters[index];
}