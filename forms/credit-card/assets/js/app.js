window.onload = function() {
    creditCardNumber()
}

function creditCardNumber() {
    console.info('data-cc-number script active')
    const ccNumber = document.querySelectorAll('[data-cc-number]')
    ccNumber.forEach(element => element.addEventListener('input', eventHandler))
    const regex = /([^0-9])*/g
    function eventHandler(event) {
        let value = event.target.value.replace(regex, '')
        let spaces = Math.floor(value.length / 4)
        if (3 < spaces) {
            spaces = 3
        }
        for (let i = 0; i < spaces; i++) {
            const index = 4 * (i + 1) + i
            if (index < value.length) {
                value = value.slice(0, index) + ' ' + value.slice(index, value.length)
            }
        }
        event.target.value = value
    }
}