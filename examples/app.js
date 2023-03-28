const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convertCurrency = (elem, target1, target2, isTrue) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET','data.json')
        request.setRequestHeader("Content-type", "application.json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue === true) {
                target1.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.euro_som).toFixed(2)
            }else if (isTrue === false){
                target1.value = (elem.value * response.usd).toFixed(2)
                target2.value = (elem.value / response.euro_usd).toFixed(2)
            }else{
                target1.value = (elem.value * response.euro_som).toFixed(2)
                target2.value = (elem.value * response.euro_usd).toFixed(2)
            }
            elem.value === '' && (target1.value = '')
            elem.value === '' && (target2.value = '')
        }
    }
}

convertCurrency(som, usd, euro, true)
convertCurrency(usd, som, euro, false)
convertCurrency(euro, som, usd, null)
