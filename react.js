const cardEle = document.querySelector('.card')
const containerEle = document.querySelector('.container')

//Info elements
const titleEle = document.querySelector('.title')
const carImgEle = document.querySelector('.img_container .car_img')
const sloganEle = document.querySelector('.info .slogan')
const colorsEle = document.querySelector('.info .colors')
const nextBtnEle = document.querySelector('.info .next_page_btn')

//3-d animation on hover
containerEle.addEventListener('mousemove',(event)=>{
    let xAxis = (window.innerWidth/2 - event.pageX)/45
    let yAxis = (window.innerHeight/2 - event.pageY)/45
    cardEle.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//animation in
containerEle.addEventListener('mouseenter',(e)=>{
    cardEle.style.transition = 'transform 0.1s ease,background-position 700ms'
    colorsEle.style = `transform:translateZ(30px);
    transition:transform 0.3s ease`
    
})

//animation out
containerEle.addEventListener('mouseleave',(event)=>{
    cardEle.style.transition = 'transform 0.4s ease,background-position 700ms'
    cardEle.style.transform = `rotateY(0deg) rotateX(0deg)`
    carImgEle.style.transform = 'translateZ(0px)'
    colorsEle.style.transform = 'translateZ(0px)'
})

cardEle.addEventListener('mouseover',()=>{
    cardEle.style.transition = 'background-position 700ms'
})

function Add3dHoverEffect(element,height=80){
    element.addEventListener('mouseover',()=>{
        element.style.transform = `translateZ(${height}px)`          
        element.style.transition = 'transform 0.4s ease'
    })
    element.addEventListener('mouseout',()=>{
        element.style.transform = 'translateZ(0)'
    })
}

Add3dHoverEffect(carImgEle)
Add3dHoverEffect(titleEle)
Add3dHoverEffect(sloganEle,30)
Add3dHoverEffect(nextBtnEle,30)