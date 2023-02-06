
const mainElement = document.getElementById("main");
const aboutElement = document.querySelector(".aboutContent");
const letter = document.querySelectorAll(".letter");
const letterHeading = document.querySelectorAll(".letter>h1");
const logo = document.querySelector("#logo");
const logoPath = document.querySelectorAll("#logo path");
const introPara = document.querySelectorAll(".intro>.para1");
const workImages = document.querySelectorAll(".workImages>div");

function animScroll(){
    mainElement.addEventListener("scroll",(event)=>{
        if(mainElement.scrollTop >= 500){
            letter.forEach(element => {
                element.setAttribute("style","animation: none; opacity:0;"); 
            });
            letterHeading.forEach(element => {
                element.setAttribute("style","animation: none; opacity:0;"); 
            });
            logoPath.forEach(element => {
                element.setAttribute("style","animation: none; opacity:0; stroke-dasharray: 1000px; stroke-dashoffset: 1000px;"); 
            });
            logo.setAttribute("style","animation: none; opacity:0;");
            introPara[0].setAttribute("style","animation: none; opacity:0;");
        }
        if(mainElement.scrollTop < 500){
            letter[0].setAttribute("style","animation: letterOne 8s ease-in-out; opacity:1;");
            letter[1].setAttribute("style","animation: letterTwo 8s ease-in-out; opacity:1;");
            letter[2].setAttribute("style","animation: letterThree 8s ease-in-out; opacity:1;");
            letter[3].setAttribute("style","animation: letterFour 8s ease-in-out; opacity:1;");
            letter[4].setAttribute("style","animation: letterFive 8s ease-in-out; opacity:1;");
            letter[5].setAttribute("style","animation: letterSix 8s ease-in-out; opacity:1;");
            letterHeading.forEach(element => {
                element.setAttribute("style","animation: h1Anim 8s ease-in-out; opacity:1;"); 
            });
            logoPath.forEach(element => {
                element.setAttribute("style","animation: anim 4s var(--interval) cubic-bezier(.17,.67,.83,.67) both; animation-delay: 4s; opacity:1;");
            });
            logo.setAttribute("style","animation: fill 1s ease forwards 8s; opacity: 1");
            introPara[0].setAttribute("style","animation: introText 2s ease-in-out; animation-delay: 8s; animation-fill-mode: both;opacity: 1");
        }
    })

    aboutElement.addEventListener("scroll",(event)=>{
        if(!(aboutElement.scrollTop >= 300)){
            console.log(1)
            document.querySelector(".skills>h1").setAttribute("style","animation: none; opacity:0;");
        }if(aboutElement.scrollTop >= 300){
            document.querySelector(".skills>h1").setAttribute("style","animation: skillTitle 0.5s ease-in-out forwards; opacity:1;");
        }

        if(!(aboutElement.scrollTop >= 300)){
            document.querySelector(".skillHtml").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillCss").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillJs").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillJava").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillDs").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillAdobePhoto").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillAdobeXD").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillFigma").setAttribute("style","animation: none; opacity:0;");
        }if(aboutElement.scrollTop >= 300){
            document.querySelector(".skillHtml").setAttribute("style","animation: skillHtml 1.9s ease-in-out forwards; opacity:1;");
            document.querySelector(".skillCss").setAttribute("style","animation: skillCss 2.1s ease-in-out forwards; opacity:1;");
            document.querySelector(".skillJs").setAttribute("style","animation: skillJs 2s ease-in-out forwards; opacity:1;");
            document.querySelector(".skillJava").setAttribute("style","animation: skillJava 1.8s ease-in-out forwards; opacity:1;");
            document.querySelector(".skillDs").setAttribute("style","animation: skillDs 3s ease-in-out forwards; opacity:1;");
            document.querySelector(".skillAdobePhoto").setAttribute("style","animation: skillPhoto 1.1s ease-in-out forwards; opacity:1;");
            document.querySelector(".skillAdobeXD").setAttribute("style","animation: skillXD 2.1s ease-in-out forwards; opacity:1;");
            document.querySelector(".skillFigma").setAttribute("style","animation: skillPre 1.5s ease-in-out forwards; opacity:1;");
        }
        if(aboutElement.scrollTop >= 1400){
            document.querySelector(".skillHtml").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillCss").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillJs").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillJava").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillDs").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillAdobePhoto").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillAdobeXD").setAttribute("style","animation: none; opacity:0;");
            document.querySelector(".skillFigma").setAttribute("style","animation: none; opacity:0;");
        }
    })
}
animScroll()





let num = 0;
// workPage
const workTitles = document.querySelectorAll(".workTitles>h2");
function workAnim(){
    workTitles.forEach(element => {
        element.addEventListener("click",e =>{
            const a = document.getElementById("work1");
            const b = document.getElementById("work2");
            const c = document.getElementById("work3");
            const d = document.getElementById("work4");
            const f = document.getElementById("work5");
            
            switch (element) {
                case a:
                    num = 0;
                    break;
                case b:
                    num = 1;
                    break;
                case c:
                    num = 2;
                    break;
                case d:
                    num = 3;
                    break;
                case f:
                    num = 4;
                    break;
                default:
                    break;
            }

            workImages.forEach(ele => {
                ele.removeAttribute("class")
            });
            workImages[num].setAttribute("class","activeImg");

            if(num == 0){
                workTitles.forEach(ele => {
                    ele.removeAttribute("class")
                });
                workTitles[0].setAttribute('class','active')
                workTitles[1].removeAttribute("class")
                workTitles[1].setAttribute('class','next')
            }else{
                if(num == workTitles.length-1){
                    workTitles.forEach(ele => {
                        ele.removeAttribute("class")
                    });
                    workTitles[num].setAttribute('class','active')
                    workTitles[num-1].setAttribute('class','next')
                }else{
                    workTitles.forEach(ele => {
                        ele.removeAttribute("class")
                    });
                    workTitles[num].setAttribute('class','active')
                    workTitles[num+1].setAttribute('class','next')
                    workTitles[num-1].setAttribute('class','next')
                } 
            }
        })
    });
}
workAnim()
//auto anim Work Pge
setInterval(workMover,5000);

const progress = document.querySelector(".progress")
function workMover(){
    if(num == 0){
        workTitles.forEach(ele => {
            ele.removeAttribute("class")
        });
        workTitles[0].setAttribute('class','active')
        workTitles[1].removeAttribute("class")
        workTitles[1].setAttribute('class','next')
    }else{
        if(num == workTitles.length-1){
            workTitles.forEach(ele => {
                ele.removeAttribute("class")
            });
            workTitles[num].setAttribute('class','active')
            workTitles[num-1].setAttribute('class','next')
        }else{
            workTitles.forEach(ele => {
                ele.removeAttribute("class")
            });
            workTitles[num].setAttribute('class','active')
            workTitles[num+1].setAttribute('class','next')
            workTitles[num-1].setAttribute('class','next')
        } 
    }

    workImages.forEach(ele => {
        ele.removeAttribute("class")
    });
    workImages[num].setAttribute("class","activeImg");

    num++;
    if(num > workTitles.length -1){
        num = 0;
    }
}

const workImgesDiv = document.querySelectorAll(".workImages>div");
const workImges = document.querySelectorAll(".workImages>div>img,.video");

window.addEventListener('mousemove',e=>{
    const c = {
        x: e.clientX,
        y: e.clientY
    }

    const x = (c.x/window.innerWidth- 0.5)*5;
    const y = (-c.y/window.innerHeight+ 0.5)*10;
    const x1 = (c.x/window.innerWidth- 0.5)*20;
    const y1 = (-c.y/window.innerHeight+ 0.5)*20;
    const trnsy = (c.y/window.innerHeight- 0.5)*80;
    const trnsx = (-c.y/window.innerHeight+ 0.5)*10;
    const trnsy1 = (-c.y/window.innerHeight+ 0.5)*20;
    const trnsx1 = (c.y/window.innerHeight- 0.5)*60;

    const stringx = "transform:perspective(70em) rotateX("+ y1 +"deg) rotateY("+ x1+"deg) translateX("+trnsy1+"px) translateY("+trnsx1+"px)"
    const string1 = "transform:perspective(100em) rotateX("+ y +"deg) rotateY("+ x+"deg) translateX("+trnsy+"px) translateY("+trnsx+"px)"

    workImgesDiv.forEach(element => {
        element.setAttribute("style",stringx)
    });

    workImges.forEach(element => {
        element.setAttribute("style",string1)
    });


})


const up = document.querySelector(".up");
const down = document.querySelector(".down");

up.addEventListener("click",(e)=>{
    if(num-1<0){
        num = workTitles.length;
    }

        num--;
        if(num == 0){
            workTitles.forEach(ele => {
                ele.removeAttribute("class")
            });
            workTitles[0].setAttribute('class','active')
            workTitles[1].removeAttribute("class")
            workTitles[1].setAttribute('class','next')
        }else{
            if(num == workTitles.length-1){
                workTitles.forEach(ele => {
                    ele.removeAttribute("class")
                });
                workTitles[num].setAttribute('class','active')
                workTitles[num-1].setAttribute('class','next')
            }else{
                workTitles.forEach(ele => {
                    ele.removeAttribute("class")
                });
                workTitles[num].setAttribute('class','active')
                workTitles[num+1].setAttribute('class','next')
                workTitles[num-1].setAttribute('class','next')
            } 
        }
    
        workImages.forEach(ele => {
            ele.removeAttribute("class")
        });
        workImages[num].setAttribute("class","activeImg");
    }
)

down.addEventListener("click",(e)=>{
    if(num+1>workTitles.length-1){
        num = -1;
    }

        num++;
        if(num == 0){
            workTitles.forEach(ele => {
                ele.removeAttribute("class")
            });
            workTitles[0].setAttribute('class','active')
            workTitles[1].removeAttribute("class")
            workTitles[1].setAttribute('class','next')
        }else{
            if(num >= workTitles.length-1){
                workTitles.forEach(ele => {
                    ele.removeAttribute("class")
                });
                workTitles[num].setAttribute('class','active')
                workTitles[num-1].setAttribute('class','next')
            }else{
                workTitles.forEach(ele => {
                    ele.removeAttribute("class")
                });
                workTitles[num].setAttribute('class','active')
                workTitles[num+1].setAttribute('class','next')
                workTitles[num-1].setAttribute('class','next')
            } 
        }
    
        workImages.forEach(ele => {
            ele.removeAttribute("class")
        });
        workImages[num].setAttribute("class","activeImg");
    }
)

























//better Experience

const betterExperience = document.querySelector(".betterExperience");
if(window.innerWidth < 400 || window.innerHeight<400){
    betterExperience.setAttribute("style","visibility: visible;");
}

setTimeout(betterExperienceGone,2000);
function betterExperienceGone() {
    betterExperience.setAttribute("style","visibility: hidden;");
}