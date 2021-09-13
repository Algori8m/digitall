let header = document.querySelector("header");
let harmburger = document.querySelector(".harmburger");
let mobileNav = document.querySelector(".mobileNavContainer")
let closeHarmburger = document.querySelector(".closeHarmburger")
let testimonials = document.querySelectorAll(".testimonial")
let testimonialsControl = document.querySelectorAll(".tC span")
let i = 0
let u = (testimonials.length - 1)
testimonials = [...testimonials]
testimonialsControl = [...testimonialsControl]

function moveElementForward(pos, prev){
        let prevElement = testimonials[prev]
        let element = testimonials[pos];
        testimonials.forEach((elem) =>{
            elem.classList.remove("rTActive")
        })
        element.classList.remove("remove")
        prevElement.classList.remove("tActive")
        element.classList.remove("rTActive")
        prevElement.classList.remove("eTActive")


        element.classList.add("tActive")
        prevElement.classList.add("remove")

        console.log(element);
        console.log(prevElement);
}

function moveElementBackward(pos, prev){
    element = testimonials[pos]
    prevElement = testimonials[prev]
    testimonials.forEach((elem) =>{
        elem.classList.remove("tActive")
        elem.classList.remove("remove")
    })

    element.classList.add("rTActive");
    prevElement.classList.remove("rTActive");


    console.log(testimonials[pos])
    console.log(testimonials[prev])
}

function checkClick(){
    if(this.classList.contains("Right")){
        u = i - 1
        if(i > (testimonials.length - 1)){
            i = 0
        }
        if(i == 0){
            u = testimonials.length-1
        }
        console.log(i)
        console.log(u)
        moveElementForward(i, u);
        i++;
    }else{
        if(i <= 0){
            i = testimonials.length-1;
        }if(i >= testimonials.length-1){
            i = testimonials.length-1
            u = 0
        }
        console.log(i)
        console.log(u)
        moveElementBackward(i, u)
        i--;
        u = i + 1

    }
}


testimonialsControl.forEach((arrow) =>{
    arrow.addEventListener("click", checkClick)
})






function headerBackground(){
    if(window.scrollY >= 30){
        header.style.backgroundColor = "white";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    }else{
        header.style.backgroundColor = "rgba(0,0,0,0)";
        header.style.boxShadow = "";
    }
}
                    
function openMenu(){
        mobileNav.classList.add("show")
    }
function closeMenu(){
        mobileNav.classList.remove("show")
}

document.addEventListener("scroll", headerBackground);

closeHarmburger.addEventListener("click", closeMenu);
harmburger.addEventListener("click", openMenu);