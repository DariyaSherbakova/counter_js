let amount = document.getElementById('amount')
let x = 0
amount.textContent = x

let plus = document.getElementById('plus')
let reset = document.getElementById('reset')
let minus = document.getElementById('minus')

function a() {
    
     x = x + 1
     amount.textContent = x
}

plus.addEventListener('click', a)

function b() {
     x = x - 1
    amount.textContent = x
}

minus.addEventListener('click', b)

function r() {
    x = 0
    amount.textContent = 0
}

reset.addEventListener('click', r)