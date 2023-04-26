const colorBtnEle = document.querySelectorAll('.info .colors button')
const carImgChangeEle = document.querySelector('.img_container .car_img')

const carLocationArray = ['black_doge_srt_demon.png','white_srt_demon.png','red_srt_demon.png','blue_srt_demon.png','yellow_srt_demon.png']
let currentInstant = null

colorBtnEle.forEach((instance,index)=>{
        instance.addEventListener("mouseover",()=>{
            if (currentInstant != index){
            instance.classList.add('color_hover')
            }
        })
        instance.addEventListener("mouseout",()=>{
            if (currentInstant != index){
                instance.classList.remove('color_hover')
                }  
        })
})

colorBtnEle.forEach((instant,index)=>{
    instant.addEventListener('click',()=>{
        instant.classList.remove('color_hover')
        instant.classList.add('color_selected')
        if (currentInstant != index && currentInstant != null){
            colorBtnEle[currentInstant].classList.remove('color_selected')
        }
        currentInstant = index
        changeCar(index)
    })
})

function changeCar(index){
    let currentImg = carImgChangeEle.src.split("images/")
    currentImg = currentImg[1]
    replaceImg = carLocationArray[index]
    if (replaceImg != currentImg){
        carImgChangeEle.style.opacity = 0
        carImgChangeEle.style.transition = 'transform 0.4s ease,opacity 300ms ease'
        setTimeout(()=>{
            carImgChangeEle.style.opacity = 1
            carImgChangeEle.src = `images/${replaceImg}`
        },300)
        
    }
}

