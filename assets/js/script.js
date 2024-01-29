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