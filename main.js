function getid(x) {
    return document.getSelection(x)
}

const photo = ["media/clown.jpg","media/clownwom.jpg","media/randphoto.bmp","media/randphoto2.bmp"]
iconsoc = document.getElementById('square')
const body = document.body
const gallery = document.getElementById('gallery')
gallery.style.background='rgba(0,0,0,0)'
logo= document.getElementsByClassName('logo')
for(i in logo) {
    
    try{
i.style.height = i.clientWidth
    }
    catch {
        console.log("err")
    }
}
gallery.style.height=body.clientHeight
for (i in photo) {
    
    gallery.innerHTML += '<div class = "test"></div>'
    gallery.getElementsByClassName("test")[i].style.background='url('+photo[i]+')'
    gallery.getElementsByClassName("test")[i].style.backgroundPosition = 'center center'
    gallery.getElementsByClassName("test")[i].style.backgroundRepeat = 'no-repeat'
    gallery.getElementsByClassName("test")[i].style.backgroundSize = 'cover'
    gallery.getElementsByClassName("test")[i].style.height = '95%'
}
test = document.getElementsByClassName("test")
let t=0
function scr(){
        if (body.scrollTop+1500>gallery.offsetTop) {
                gallery.addEventListener('scroll',sss)
        }
    }

function sss() {
    console.log(test[0].offsetHeight)

    t = setTimeout(gallery.scrollBy(left=0,top=test[0].offsetHeight),5000)
    t
}