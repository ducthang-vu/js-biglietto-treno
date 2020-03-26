/* A script for ticket pricing by: prompting user to enter distance and age, and considering discounts; and returning the price and a message on the applied discount */

console.log('main.js is working')

// Default values of: price for km, discount, and discount conditions
var price_basic = 0.21
var discount_senior = 0.4
var discount_young = 0.2
var age_senior = 65
var age_young = 18

// Variables entered by user
var distance = prompt('Enter voyage length in km: ')
var age = prompt('How old are you?')

console.log(distance)
console.log(age)

// Return
var price
var discount_message


if (distance <= 0 || age <0 || isNaN(distance) || isNaN(age)) {
    // Alert if user enter invalid variables
    alert('You must enter a valid distance and age.\n\nPlease, reload the page and try again!\n\n')
}
else {
    // Main task
    if (age < age_young) {
        price = (price_basic * distance * (1 - discount_young)).toFixed(2)
        discount_message = 'Young client'
    }
    else if (age >= age_senior) {
        price = (price_basic * distance * (1 - discount_senior)).toFixed(2)
        discount_message = 'Senior client'
    }
    else {
        price = (price_basic * distance).toFixed(2)
        discount_message = 'None'
    }
    
    document.getElementById('price').innerHTML = price
    document.getElementById('if_discount').innerHTML = discount_message
}
