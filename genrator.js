const btn = document.querySelector('button')
const h3 = document.querySelector('h3')
const div = document.querySelector('.Color')
const body = document.querySelector('body')


btn.addEventListener('click',function(){
    let color = genrate();
    let bodyColor = bcolor();
      genrate();
       h3.innerHTML= color;
       div.style.backgroundColor=color
       body.style.backgroundColor=bodyColor
       

})

function genrate(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue= Math.floor(Math.random()*255)
    let result = ` rgb(${red} ,${green} ,${blue})` 
    return result
}
function bcolor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue= Math.floor(Math.random()*255)
    let bcolor = ` rgb(${red} ,${green} ,${blue})` 
    return bcolor 
    
}