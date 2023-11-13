// Calculation for BMI


let btn = document.querySelector('[data-add]')
let display = document.querySelector('[data-answer]')
btn.addEventListener('click', bmi )

function bmi(){

    let height = parseFloat(document.querySelector('[data-height]').value)
    let weight = parseFloat(document.querySelector('[data-weight]').value)
    
    let bmiCalc = weight / (height * height) 

    display.value = bmiCalc.toFixed(2)
}