document.addEventListener("DOMContentLoaded",function(){
   
    const numbers = "1234567890"
    const symbols = "!@#$%^&*()-_+=[]{};:',./|<>?`~ƒ§©®™°¢£€¥µπΩ∆√∞"
    const alphabet = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ" 
    const completeAlphabet = alphabet + numbers + symbols
    let generate = document.getElementById("generate")
    let display = document.getElementById("display")
    let display2 = document.getElementById("display2")
    let display3 = document.getElementById("display3")
    let display4 = document.getElementById("display4")
    

    generate.addEventListener("click", function(){

        display.textContent = " "
        display2.textContent = " "
        display3.textContent = " "
        display4.textContent = " "
      
       x(display)
      
       x(display2)

       x(display3)
      
       x(display4)

    })
    


    function x(n){
        for (let i = 0; i < 16; i++){
            let random = Math.floor(Math.random()* completeAlphabet.length)
            n.textContent += completeAlphabet[random] 
    }}


})