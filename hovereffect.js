const colorBtnEle = document.querySelectorAll('.info .colors button')

colorBtnEle.forEach((instance)=>{
    instance.addEventListener("mouseover",()=>{
        instance.classList.add('color_hover')
        instance.style.borderColor = 'white'
    })
    instance.addEventListener("mouseout",()=>{
        instance.classList.remove('color_hover')
        instance.style.borderColor = 'black'
    })
})