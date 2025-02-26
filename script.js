const convertButton = document.querySelector(".convertbutton")
const options1 = document.querySelector(".select1")
const options2 = document.querySelector(".select2")

function convertValues(){

    const inputValue = document.querySelector(".value").value
    const valuetobeConverted = document.querySelector(".valuereal")
    const converted = document.querySelector(".valuedolar")

    if(options1.value == "brl"){
        real()
    }
    if(options1.value == "usd"){
        dolar()
    }
    if(options1.value == "eur"){
        euro()
    }
    if(options1.value == "gbp"){
        libra()
    }
    if(options1.value == "btc"){
        bitcoin()
    }

    function real(){
        valuetobeConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

    //Real
    const dolarToday = 5.73 // 22/02/2025
    const euroToday = 6
    const libraToday = 7.25
    const bitcoinToday = 510953
    
    if(options2.value == "dolar"){
        converted.innerHTML= new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if(options2.value == "euro"){
        converted.innerHTML= new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if(options2.value == "libra"){
        converted.innerHTML= new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }

    if(options2.value == "bitcoin"){
        const valor = 0.123456;
        const formatoBitcoin = '₿' + valor.toFixed(8);
        const convertedValue = inputValue / bitcoinToday;
        converted.innerHTML= '₿' + convertedValue.toFixed(8);
    }
    }

    function dolar(){
        valuetobeConverted.innerHTML= new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputValue)

    //Dolar
    const eurodolar = 1.05
    const realdolar = 0.17
    const libradolar = 1.27
    const bitcoindolar = 88781.63

    if(options2.value == "euro"){
        converted.innerHTML= new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputValue / eurodolar)
    }

    if(options2.value == "real"){
        converted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / realdolar)
    }

    if(options2.value == "libra"){
        converted.innerHTML= new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libradolar)
    }

    if(options2.value == "bitcoin"){
        const valor = 0.123456;
        const formatoBitcoin = '₿' + valor.toFixed(8);
        const convertedValue = inputValue / bitcoindolar;
        converted.innerHTML= '₿' + convertedValue.toFixed(8);
    }
    }

    function euro(){
        valuetobeConverted.innerHTML= new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

    //Euro
    const realeuro = 0.17
    const dolareuro = 0.95
    const libraeuro = 1.20
    const bitcoineuro = 84603.46

    if(options2.value == "real"){
        converted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / realeuro)
    }

    if(options2.value == "dolar"){
        converted.innerHTML= new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolareuro)
    }

    if(options2.value == "libra"){
        converted.innerHTML= new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraeuro)
    }

    if(options2.value == "bitcoin"){
        const valor = 0.123456;
        const formatoBitcoin = '₿' + valor.toFixed(8);
        const convertedValue = inputValue / bitcoineuro;
        converted.innerHTML= '₿' + convertedValue.toFixed(8);
    }
    }

    function libra(){
        valuetobeConverted.innerHTML= new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

    //Libra
    const reallibra = 0.14
    const dolarlibra = 0.79
    const eurolibra = 0.83
    const bitcoinlibra = 70213.96

    if(options2.value == "real"){
        converted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / reallibra)
    }

    if(options2.value == "dolar"){
        converted.innerHTML= new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarlibra)
    }

    if(options2.value == "bitcoin"){
        const valor = 0.123456;
        const formatoBitcoin = '₿' + valor.toFixed(8);
        const convertedValue = inputValue / bitcoinlibra;
        converted.innerHTML= '₿' + convertedValue.toFixed(8);
    }

    if(options2.value == "euro"){
        converted.innerHTML= new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputValue / eurolibra)
    }
    }

    function bitcoin(){
        valuetobeConverted.innerHTML= '₿' + inputValue

    //Bitcoin
    const realbitcoin = 0.0000020
    const dolarbitcoin = 0.000011
    const eurobitcoin = 0.000012
    const librabitcoin = 0.000014

    if(options2.value == "real"){
        converted.innerHTML= new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / realbitcoin)
    }

    if(options2.value == "dolar"){
        converted.innerHTML= new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarbitcoin)
    }

    if(options2.value == "euro"){
        converted.innerHTML= new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputValue / eurobitcoin)
    }

    if(options2.value == "libra"){
        converted.innerHTML= new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputValue / librabitcoin)
    }
    }
}

function changeoptions1(){

    const name1 = document.querySelector(".text1")
    const img1 = document.querySelector(".realimg")

    if(options1.value == "usd"){
        name1.innerHTML = "Dólar Americano"
        img1.src = "./assets/dolar.png"
    }

    if(options1.value == "eur"){
        name1.innerHTML = "Euro"
        img1.src= './assets/euro.png'
    }
    if(options1.value == "gbp"){
        name1.innerHTML = "Libra"
        img1.src= './assets/libra.png'
    }
    if(options1.value == "btc"){
        name1.innerHTML = "Bitcoin"
        img1.src= './assets/bitcoin.png'
    }
    if(options1.value == "brl"){
        name1.innerHTML = "Real Brasileiro"
        img1.src= './assets/real.png'
    }
}
function changeoptions2(){

    const name2 = document.querySelector(".text2")
    const img2 = document.querySelector(".dolarimg")

    if(options2.value == "dolar"){
        name2.innerHTML = "Dólar Americano"
        img2.src = "./assets/dolar.png"
    }

    if(options2.value == "euro"){
        name2.innerHTML = "Euro"
        img2.src= './assets/euro.png'
    }
    if(options2.value == "libra"){
        name2.innerHTML = "Libra"
        img2.src= './assets/libra.png'
    }
    if(options2.value == "bitcoin"){
        name2.innerHTML = "Bitcoin"
        img2.src= './assets/bitcoin.png'
    }
    if(options2.value == "real"){
        name2.innerHTML = "Real Brasileiro"
        img2.src= './assets/real.png'
    }
    convertValues()
}

convertButton.addEventListener("click", convertValues)
options1.addEventListener("change", changeoptions1)
options2.addEventListener("change", changeoptions2)
