const div = document.querySelector(".counter")

// create all the elements of the counter
const button1 = document.createElement("button")
button1.className = "decrement"
button1.textContent = "-"

const input = document.createElement("input")
input.type = "button"
input.value = "0"

const button2 = document.createElement("button")
button2.className = "increment"
button2.textContent = "+"

// add them in the selected div
div.appendChild(button1)
div.appendChild(input)
div.appendChild(button2)


const decrementButton = document.querySelector('.decrement')
const counter = document.querySelector('input')
const incrementButton = document.querySelector('.increment')
const trekker = document.querySelector('img')

incrementButton.addEventListener("click", () => {
  if (counter.value == 0) {
    numberCounter = parseInt(counter.value)
    numberCounter += 1000
    counter.value = numberCounter
    trekker.classList.remove('start')
    trekker.classList.add('peak1')
  } else if (counter.value == 1000) {
    numberCounter = parseInt(counter.value)
    numberCounter += 1000
    counter.value = numberCounter
    trekker.classList.remove('peak1')
    trekker.classList.add('peak2')
  } else if (counter.value == 2000) {
    numberCounter = parseInt(counter.value)
    numberCounter += 1000
    counter.value = numberCounter
    trekker.classList.remove('peak2')
    trekker.classList.add('peak3')
  }
})

decrementButton.addEventListener("click", () => {
  if (counter.value == 3000) {
    numberCounter = parseInt(counter.value)
    numberCounter -= 1000
    counter.value = numberCounter
    trekker.classList.remove('peak3')
    trekker.classList.add('peak2')
  } else if (counter.value == 2000) {
    numberCounter = parseInt(counter.value)
    numberCounter -= 1000
    counter.value = numberCounter
    trekker.classList.remove('peak2')
    trekker.classList.add('peak1')
  } else if (counter.value == 1000) {
    numberCounter = parseInt(counter.value)
    numberCounter -= 1000
    counter.value = numberCounter
    trekker.classList.remove('peak1')
    trekker.classList.add('start')
  }
})