

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
const animationRightSide = document.querySelectorAll('.detail');


hiddenElements.forEach((el)=>{
    observer.observe(el)
})


animationRightSide.forEach((el)=>{
    observer.observe(el)
})