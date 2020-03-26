/* A script for ticket pricing by: prompting user to enter distance and age, and considering discounts; and returning the price and a message on discount */

console.log('main.js is working')

// Default values of: price for km, and discount, discount conditions
var price_basic = 0.21
var discount_senior = 0.4
var discount_junior = 0.2
var age_senior = 65
var age_junior = 18

// Variables entered by user
var distance = prompt('Enter voyage length in km: ')
var age = prompt('How old are you?')

console.log(distance)
console.log(age)

// return
var price
var discount_message


if (age < age_junior) {
    price = (price_basic * distance * discount_junior).toFixed(2)
    discount_message = 'junior'
}
else if (age >= age_senior) {
    price = (price_basic * distance * discount_senior).toFixed(2)
    discount_message = 'senior'
}
else {
    price = (price_basic * distance).toFixed(2)
    discount_message = 'none'
}

document.getElementById('price').innerHTML = price
document.getElementById('if_discount').innerHTML = discount_message